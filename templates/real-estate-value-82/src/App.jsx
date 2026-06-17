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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Inicializar iconos de Lucide
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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-2xl font-brand font-medium tracking-tight text-slate-900">
                HABITTA
            </div>
<a className="hidden md:inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#evaluar">
                Evalúa tu inmueble
            </a>
</div>
</nav>
<main className="flex-1">

<section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden flex flex-col items-center text-center px-6">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white"></div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#749673] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#749673]"></span>
</span>
                Maximiza tu rentabilidad inmobiliaria
            </div>
<h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 text-balance leading-tight">
                Vende tu inmueble más rápido y a <span className="text-[#749673]">mejor precio</span>.
            </h1>
<p className="max-w-2xl mt-8 text-lg md:text-xl text-slate-500 text-balance leading-relaxed">
                Transformamos tu propiedad en un activo altamente deseable. Nos encargamos del diseño, la remodelación y la venta sin que tengas que coordinar a múltiples proveedores.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none" href="#evaluar">
                    Descubre cuánto puedes aumentar su valor
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 pt-10 border-t border-slate-100 max-w-4xl w-full">
<div className="flex flex-col items-center">
<div className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-2">25%</div>
<div className="text-base text-slate-500 text-center">Incremento promedio<br/>en valor de venta</div>
</div>
<div className="flex flex-col items-center">
<div className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-2">x2</div>
<div className="text-base text-slate-500 text-center">Mayor velocidad<br/>de comercialización</div>
</div>
<div className="flex flex-col items-center">
<div className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-2">0</div>
<div className="text-base text-slate-500 text-center">Fricción o gestión<br/>de tu parte</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6 border-y border-slate-200">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                        El mercado tradicional te hace perder dinero
                    </h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto text-balance">
                        Vender un inmueble en su estado actual o intentar remodelarlo por tu cuenta sin una estrategia comercial clara, casi siempre termina en pérdida de valor y tiempo.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm opacity-80">
<div className="flex items-center gap-3 mb-8 text-slate-400">
<i className="w-6 h-6" data-lucide="x-circle" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight">El proceso tradicional</h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-400 text-sm">1</div>
<div>
<div className="text-base font-medium text-slate-700">Contratas un arquitecto</div>
<div className="text-base text-slate-500 mt-1">Diseña espacios hermosos, pero no necesariamente rentables para vender.</div>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-400 text-sm">2</div>
<div>
<div className="text-base font-medium text-slate-700">Buscas contratistas</div>
<div className="text-base text-slate-500 mt-1">Sobrecostos, retrasos y desgaste coordinando la obra tú mismo.</div>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-400 text-sm">3</div>
<div>
<div className="text-base font-medium text-slate-700">Inmobiliaria genérica</div>
<div className="text-base text-slate-500 mt-1">Ponen tu anuncio en un portal y esperan a que alguien llame.</div>
</div>
</li>
</ul>
</div>

<div className="bg-slate-900 text-white p-10 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-[#749673] blur-[100px] opacity-20 rounded-full mix-blend-screen pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8 text-[#749673]">
<i className="w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight">El método Habitta</h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-slate-300 text-sm">1</div>
<div>
<div className="text-base font-medium text-white">Análisis de rentabilidad</div>
<div className="text-base text-slate-400 mt-1">Calculamos exactamente qué mejoras aumentarán el precio de tu inmueble.</div>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-slate-300 text-sm">2</div>
<div>
<div className="text-base font-medium text-white">Intervención unificada</div>
<div className="text-base text-slate-400 mt-1">Nuestro equipo ejecuta el diseño y la obra rápido, sin sobrecostos y sin que te desgastes.</div>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#749673]/20 border border-[#749673]/30 flex items-center justify-center flex-shrink-0 text-[#749673] text-sm">3</div>
<div>
<div className="text-base font-medium text-white">Comercialización Premium</div>
<div className="text-base text-slate-400 mt-1">Vendemos un producto superior, destacando en el mercado y cerrando al mejor precio.</div>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="absolute inset-0 bg-grid-pattern opacity-50 -z-10"></div>
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                            No es remodelar por remodelar. Es invertir para ganar.
                        </h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed text-balance">
                            Tratamos tu propiedad como un activo financiero. Cada decisión de diseño y cada peso invertido en obra tiene un único objetivo: maximizar tu retorno al momento de la venta o arriendo.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#749673]" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<span className="text-base font-medium text-slate-700">Evaluación basada en datos del mercado actual</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#749673]" data-lucide="layers" strokeWidth="1.5"></i>
<span className="text-base font-medium text-slate-700">Intervenciones estratégicas (alto impacto visual)</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#749673]" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-base font-medium text-slate-700">Presupuestos cerrados sin sorpresas</span>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-medium tracking-tight text-slate-900">Caso Proyectado</h3>
<span className="inline-flex items-center rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">Ejemplo ilustrativo</span>
</div>
<div className="space-y-6">
<div className="flex justify-between items-end border-b border-slate-100 pb-4">
<div>
<div className="text-base text-slate-500 mb-1">Valor actual en el mercado</div>
<div className="text-sm text-slate-400">Estado original, estancado</div>
</div>
<div className="text-xl font-medium tracking-tight text-slate-900">$250,000</div>
</div>
<div className="flex justify-between items-end border-b border-slate-100 pb-4">
<div>
<div className="text-base text-slate-500 mb-1">Inversión Habitta</div>
<div className="text-sm text-slate-400">Estrategia, diseño y remodelación</div>
</div>
<div className="text-xl font-medium tracking-tight text-slate-600">-$30,000</div>
</div>
<div className="flex justify-between items-end pt-2">
<div>
<div className="text-lg font-medium tracking-tight text-slate-900 mb-1">Nuevo valor de venta</div>
<div className="text-sm text-slate-500">Comercializado por Habitta</div>
</div>
<div className="text-3xl font-medium tracking-tight text-slate-900">$340,000</div>
</div>
</div>
<div className="mt-8 bg-[#749673]/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#749673]/20">
<div>
<div className="text-base font-medium text-[#749673]">Beneficio neto extra</div>
<div className="text-sm text-[#749673]/80">Dinero adicional en tu bolsillo</div>
</div>
<div className="text-4xl font-medium tracking-tight text-[#749673]">+$60,000</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">
                        Un proceso diseñado para tu tranquilidad
                    </h2>
<p className="text-lg text-slate-500">
                        Nosotros hacemos el trabajo pesado. Tú tomas las decisiones y ves los resultados.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative">
<div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-slate-200 -z-10"></div>
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 mx-auto md:mx-0">
<i className="w-5 h-5 text-slate-700" data-lucide="calculator" strokeWidth="1.5"></i>
</div>
<div className="text-center md:text-left">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">1. Evaluación</h3>
<p className="text-base text-slate-500 text-balance">Analizamos el potencial de valorización de tu inmueble basado en datos.</p>
</div>
</div>

<div className="relative">
<div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-slate-200 -z-10"></div>
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 mx-auto md:mx-0">
<i className="w-5 h-5 text-slate-700" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<div className="text-center md:text-left">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">2. Estrategia</h3>
<p className="text-base text-slate-500 text-balance">Diseñamos las mejoras exactas que el mercado está dispuesto a pagar.</p>
</div>
</div>

<div className="relative">
<div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-slate-200 -z-10"></div>
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 mx-auto md:mx-0">
<i className="w-5 h-5 text-slate-700" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<div className="text-center md:text-left">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">3. Intervención</h3>
<p className="text-base text-slate-500 text-balance">Ejecutamos la remodelación de forma rápida y con presupuesto cerrado.</p>
</div>
</div>

<div className="relative">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-900 shadow-sm flex items-center justify-center mb-6 mx-auto md:mx-0">
<i className="w-5 h-5 text-white" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div className="text-center md:text-left">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">4. Comercialización</h3>
<p className="text-base text-slate-500 text-balance">Vendemos o arrendamos tu propiedad optimizada al mejor precio del mercado.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                        Todo lo que necesitas, bajo un mismo techo
                    </h2>
<p className="text-lg text-slate-500 mb-8">
                        No somos una simple inmobiliaria ni solo un estudio de diseño. Somos una estructura integral que conecta cada etapa para garantizar un resultado superior.
                    </p>
<a className="inline-flex items-center gap-2 text-base font-medium text-slate-900 hover:text-[#749673] transition-colors" href="#evaluar">
                        Iniciar evaluación <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors bg-white">
<i className="w-6 h-6 text-slate-400 mb-4" data-lucide="layout-template" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium text-slate-900 mb-2">Diseño Estratégico</h4>
<p className="text-base text-slate-500">Espacios pensados para seducir al comprador ideal.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors bg-white">
<i className="w-6 h-6 text-slate-400 mb-4" data-lucide="paint-roller" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium text-slate-900 mb-2">Remodelación</h4>
<p className="text-base text-slate-500">Ejecución impecable que aumenta el valor físico.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors bg-white">
<i className="w-6 h-6 text-slate-400 mb-4" data-lucide="building-2" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium text-slate-900 mb-2">Comercialización</h4>
<p className="text-base text-slate-500">Estrategias de venta para cerrar rápido y a buen precio.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors bg-white">
<i className="w-6 h-6 text-slate-400 mb-4" data-lucide="briefcase" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium text-slate-900 mb-2">Administración</h4>
<p className="text-base text-slate-500">Gestión de tu activo inmobiliario a largo plazo.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden" id="evaluar">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 text-balance">
                    No dejes dinero sobre la mesa al vender tu propiedad.
                </h2>
<p className="text-xl text-slate-400 mb-10 text-balance">
                    Agenda una sesión estratégica gratuita con nuestro equipo y descubre cuánto valor oculto tiene tu inmueble.
                </p>
<form className="max-w-md mx-auto space-y-4">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<input className="block w-full rounded-xl border-0 py-4 pl-12 pr-4 text-slate-900 ring-1 ring-inset ring-slate-800 bg-white focus:ring-2 focus:ring-inset focus:ring-[#749673] sm:text-base sm:leading-6 placeholder:text-slate-400 outline-none" placeholder="Tu correo electrónico" required="" type="email"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#749673] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#638462] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#749673] focus:ring-offset-slate-900 shadow-lg shadow-[#749673]/20" type="submit">
                        Evaluar el potencial de mi inmueble
                    </button>
<p className="text-sm text-slate-500 mt-4">Sin compromisos. Evaluamos tus datos con total confidencialidad.</p>
</form>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="text-2xl font-brand font-medium tracking-tight text-slate-900">
                    HABITTA
                </div>
<div className="h-6 w-px bg-slate-200 hidden md:block"></div>
<p className="text-sm text-slate-500 hidden md:block">
                    Ecosistema inmobiliario integrado.
                </p>
</div>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Nosotros</a>
<a className="hover:text-slate-900 transition-colors" href="#">Casos de éxito</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contacto</a>
</div>
<div className="text-sm text-slate-400">
                © 2024 Habitta Projects.
            </div>
</div>
</footer>


    </>
  );
}
