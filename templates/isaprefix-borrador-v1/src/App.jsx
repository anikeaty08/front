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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="text-indigo-600 relative flex items-center justify-center">
<svg className="w-8 h-8" fill="none" height="32" viewbox="0 0 100 100" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M50 10C30 10 15 25 15 45C15 65 25 80 40 90L45 85C40 80 35 60 35 50C35 40 40 30 50 30C60 30 65 35 65 45C65 52 62 55 62 60C62 65 65 68 65 68C75 65 80 55 80 45C80 25 65 10 50 10Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"></path>
<path d="M10 45C10 65 20 85 30 95" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M40 50H60M50 40V60" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Isaprefix</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#como-funciona">Cómo funciona</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#precios">Tarifa</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#faq">Preguntas</a>
</div>
<a className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm ring-1 ring-slate-900/5" href="#evaluar">
                Evaluar mi caso
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40 pointer-events-none">
<div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
<div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl mix-blend-multiply"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Gestión 100% remota y online
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Tu Salud Mental merece <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">la cobertura legal máxima.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                ¿Tu plan de Isapre es anterior a <span className="text-slate-900 font-medium">abril de 2022</span>? Las <span className="text-slate-900 font-medium">Isapres</span> no actualizan los beneficios automáticamente. Nosotros gestionamos el aumento de tu cobertura legalmente, sin salir de tu casa.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-slate-900 text-white h-12 px-8 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 text-base">
                    Evaluar mi caso gratis
                </button>
<button className="w-full md:w-auto bg-white text-slate-700 border border-slate-200 h-12 px-8 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-base">
                    Ver cómo funciona
                </button>
</div>
<p className="mt-6 text-sm text-slate-400">
                Sin letra chica. Tarifa única de $39.990. Solo pagas si calificas.
            </p>
</div>
</section>

<section className="py-20 bg-slate-50/50 border-y border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        El problema de los planes antiguos
                    </h2>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        En abril de 2022, la ley chilena obligó a equiparar la cobertura de Salud Mental con la de Salud Física. Sin embargo, <span className="text-slate-800 font-medium">las Isapres no aplican este beneficio automáticamente</span> a los contratos antiguos.
                    </p>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Miles de afiliados siguen pagando copagos excesivos o sufriendo topes de cobertura que ya no deberían existir.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-600 mt-1 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-lg text-slate-700">Eliminamos los topes anuales arbitrarios.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-600 mt-1 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-lg text-slate-700">Aumentamos el porcentaje de bonificación.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-600 mt-1 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-lg text-slate-700">Proceso automatizado y 100% transparente.</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-white rounded-2xl transform rotate-3 scale-95 opacity-50"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
<i className="w-6 h-6" data-lucide="alert-triangle"></i>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Situación Actual</p>
<p className="text-slate-900 font-medium text-lg">Cobertura limitada (Plan Antiguo)</p>
</div>
</div>
<div className="p-4 bg-orange-50 rounded-lg text-orange-700 text-sm mb-4 font-medium flex gap-2">
<i className="w-5 h-5 shrink-0" data-lucide="info"></i>
                             Tu plan tiene topes que ya no son legales.
                        </div>
<div className="mt-8 pt-8 border-t border-slate-100">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
<i className="w-6 h-6" data-lucide="check"></i>
</div>
<div>
<p className="text-xs text-indigo-600 uppercase tracking-wide font-semibold">Resultado Isaprefix</p>
<p className="text-slate-900 font-medium text-lg">Cobertura Legal Mínima Garantizada</p>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-green-500" data-lucide="trending-up"></i>
                                Ahorro significativo en copagos
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="como-funciona">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-4">
                    Sin trámites presenciales
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Proceso simple y transparente</h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">No es necesario ir presencialmente a ningún lugar. Nos encargamos de todo el proceso legal de forma remota.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-indigo-600 transform rotate-12 translate-x-4 -translate-y-4" data-lucide="file-text"></i>
</div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors relative z-10">
<i className="w-6 h-6" data-lucide="file-search"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 relative z-10">1. Evaluación Gratuita</h3>
<p className="text-base text-slate-500 leading-relaxed relative z-10">
                        Solo debes adjuntarnos los documentos necesarios. Nuestro equipo realizará una evaluación legal gratuita y se encargará de todo el proceso posterior.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-indigo-600 transform rotate-12 translate-x-4 -translate-y-4" data-lucide="bell"></i>
</div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors relative z-10">
<i className="w-6 h-6" data-lucide="bell-ring"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 relative z-10">2. Gestión &amp; Notificaciones</h3>
<p className="text-base text-slate-500 leading-relaxed relative z-10">
                        Nuestro equipo legal, respaldado por tecnología automatizada, gestiona el recurso en los plazos más eficientes del mercado. Recibirás notificaciones oportunas y trazables de cada avance del proceso en tiempo real.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-indigo-600 transform rotate-12 translate-x-4 -translate-y-4" data-lucide="shield-check"></i>
</div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors relative z-10">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 relative z-10">3. Altísima tasa de éxito</h3>
<p className="text-base text-slate-500 leading-relaxed relative z-10">
                        Contamos con un sólido respaldo legal y un proceso probado. Por ello, garantizamos nuestro servicio: si el resultado no es favorable, te devolvemos tu dinero.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="precios">

<div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/10 blur-3xl"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6">
<i className="w-4 h-4" data-lucide="shield"></i>
                        Modelo Riesgo Cero
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                        Solo pagas al finalizar con éxito.
                    </h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
                        La evaluación inicial y el comienzo del trámite son gratuitos. Si nuestro equipo legal no logra aumentar tu cobertura, no pagas absolutamente nada.
                    </p>
<div className="space-y-3">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-400" data-lucide="check"></i>
<span className="text-slate-300 text-lg">Análisis inicial $0 costo</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-400" data-lucide="check"></i>
<span className="text-slate-300 text-lg">Te informamos en cada etapa</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-400" data-lucide="check"></i>
<span className="text-slate-300 text-lg">Gestión remota sin visitas a corte</span>
</div>
</div>
</div>
<div className="w-full md:w-96 bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Tarifa única</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-semibold tracking-tight">$39.990</span>
<span className="text-slate-500 font-medium">CLP</span>
</div>
<button className="w-full bg-indigo-600 text-white h-12 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 mb-4 text-base">
                        Comenzar evaluación gratuita
                    </button>
<p className="text-center text-xs text-slate-400 leading-snug">
                        Garantía total: Si fallamos, te devolvemos tu dinero íntegramente.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Preguntas Frecuentes</h2>
<div className="space-y-6">

<div className="border-b border-slate-100 pb-6">
<h3 className="flex items-center gap-3 text-lg font-medium text-slate-900 mb-2">
<i className="w-5 h-5 text-indigo-500" data-lucide="laptop"></i>
                        ¿Tengo que ir a algún lugar presencialmente?
                    </h3>
<p className="text-slate-500 leading-relaxed pl-8 text-base">
                        No. Todo el proceso es 100% online. Puedes subir tu contrato desde tu celular o computador, y nosotros realizamos la gestión legal remotamente.
                    </p>
</div>

<div className="border-b border-slate-100 pb-6">
<h3 className="flex items-center gap-3 text-lg font-medium text-slate-900 mb-2">
<i className="w-5 h-5 text-indigo-500" data-lucide="help-circle"></i>
                        ¿Cómo sé en qué estado se encuentra mi caso?
                    </h3>
<p className="text-slate-500 leading-relaxed pl-8 text-base">
                        Nuestra plataforma cuenta con procesos automatizados que te enviarán notificaciones a tu correo en cada etapa clave del juicio, manteniéndote siempre informado.
                    </p>
</div>

<div className="border-b border-slate-100 pb-6">
<h3 className="flex items-center gap-3 text-lg font-medium text-slate-900 mb-2">
<i className="w-5 h-5 text-indigo-500" data-lucide="credit-card"></i>
                        ¿Cuándo se realiza el pago?
                    </h3>
<p className="text-slate-500 leading-relaxed pl-8 text-base">
                        El pago se realiza al contratar nuestros servicios, pero recuerda que está protegido por nuestra garantía: si no ganamos, te devolvemos tu dinero.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-3">

<div className="text-indigo-600 relative flex items-center justify-center">
<svg className="w-6 h-6" fill="none" height="24" viewbox="0 0 100 100" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M50 10C30 10 15 25 15 45C15 65 25 80 40 90L45 85C40 80 35 60 35 50C35 40 40 30 50 30C60 30 65 35 65 45C65 52 62 55 62 60C62 65 65 68 65 68C75 65 80 55 80 45C80 25 65 10 50 10Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"></path>
<path d="M10 45C10 65 20 85 30 95" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M40 50H60M50 40V60" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">Isaprefix</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Términos</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacidad</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contacto</a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 text-center md:text-left border-t border-slate-200 pt-8">
<p className="text-xs text-slate-400">© 2024 Isaprefix. Todos los derechos reservados. Chile.</p>
</div>
</footer>


    </>
  );
}
