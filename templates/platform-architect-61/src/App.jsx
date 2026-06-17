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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:box" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
<span className="text-sm font-medium tracking-tight text-neutral-300 group-hover:text-white transition-colors">PLATFORM.ARCH</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Servicios</a>
<a className="hover:text-white transition-colors" href="#methodology">Metodología</a>
<a className="hover:text-white transition-colors" href="#contact">Contacto</a>
</div>
<a className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Agenda sesión
                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 border-b border-white/5 overflow-hidden min-h-[90vh] flex items-center">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>

<div className="absolute top-20 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto w-full relative z-10">
<div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 items-center">

<div className="flex flex-col items-start text-left z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
            Arquitecto Digital &amp; Estratega
        </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[0.95] text-gradient">
            Diseño tecnología <br/> que convierte visión en <br/>
<span className="text-white">resultados tangibles.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-xl leading-relaxed mb-10">
            Conecto personas, datos y procesos para crear ecosistemas digitales escalables que generan valor medible. No
            soy un desarrollador más; construyo el futuro de tu negocio.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group" href="#contact">
                Agenda una sesión estratégica
                <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:calendar" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</g>
</svg>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-neutral-700 text-white rounded-full font-medium text-sm hover:border-neutral-500 hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#approach">
                Conoce mi enfoque
                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<p className="mt-6 text-xs text-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
            30 minutos para evaluar tu idea, plataforma o desafío tecnológico.
        </p>
</div>

<div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] h-full hidden md:block pointer-events-none">

<div className="relative h-full w-full">

<img alt="Arquitecto de Plataformas" className="absolute right-[-5%] top-1/2 -translate-y-1/2 min-h-[100%] w-auto object-cover grayscale brightness-75 contrast-125 fade-left opacity-90" src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&amp;w=2640&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/20"></div>
</div>

<div className="absolute bottom-1/4 right-20 glass-card p-4 rounded-xl hidden lg:block animate-[pulse_4s_ease-in-out_infinite]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Estado</p>
<p className="text-xs text-white">Open to new projects</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-black relative" id="approach">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        Más allá del código:<br/>
<span className="text-neutral-500">Visión de negocio y arquitectura.</span>
</h2>
<p className="text-neutral-400 font-light text-lg mb-8 leading-relaxed">
                        No me limito a escribir software. Traduzco tu visión estratégica en una arquitectura técnica robusta, diseñada para soportar la realidad operativa de hoy y el crecimiento agresivo de mañana.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 p-1 rounded bg-neutral-900 border border-neutral-800">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:scaling" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5m7-7h5v5m0-5L9 15"></path></g></svg>
</div>
<div>
<h4 className="text-white text-sm font-medium">Escalabilidad Real</h4>
<p className="text-neutral-500 text-sm mt-1">Desde MVP hasta operación masiva en Fintech, ERPs y SaaS.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-1 rounded bg-neutral-900 border border-neutral-800">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:git-merge" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></g></svg>
</div>
<div>
<h4 className="text-white text-sm font-medium">Arquitectura Ejecutable</h4>
<p className="text-neutral-500 text-sm mt-1">Puente entre la estrategia de la C-Suite y la ejecución del equipo técnico.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-1 rounded bg-neutral-900 border border-neutral-800">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:bar-chart-3" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-white text-sm font-medium">Sistemas Medibles</h4>
<p className="text-neutral-500 text-sm mt-1">Diseño pensando en métricas, monetización y KPIs de negocio.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="glass-card rounded-2xl p-8 relative z-10">
<div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-indigo-500/20 border border-indigo-500/50"></div>
</div>
<div className="space-y-3 font-mono text-xs text-neutral-400">
<p><span className="text-blue-400">class</span> <span className="text-yellow-200">DigitalArchitect</span> {</p>
<p className="pl-4"><span className="text-blue-400">constructor</span>(vision, data) {</p>
<p className="pl-8"><span className="text-cyan-400">this</span>.strategy = vision.align();</p>
<p className="pl-8"><span className="text-cyan-400">this</span>.architecture = <span className="text-blue-400">new</span> ScalableSystem();</p>
<p className="pl-8"><span className="text-cyan-400">this</span>.focus = <span className="text-indigo-400">"Business Impact"</span>;</p>
<p className="pl-4">}</p>
<p className="">}</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950/50" id="services">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Servicios Estratégicos</h2>
<p className="text-neutral-400 font-light max-w-xl">
                        Soluciones diseñadas para founders y empresas que buscan madurez tecnológica y crecimiento sostenible.
                    </p>
</div>
<a className="text-sm text-white border-b border-white/30 hover:border-white transition-colors pb-0.5" href="#contact">Ver planes de trabajo</a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group glass-card p-8 rounded-xl hover:bg-neutral-900/80 transition-all duration-500 border border-white/5 hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:layout-template" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Arquitectura de Plataformas</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                        Diseño la arquitectura técnica y de producto que sostiene plataformas escalables, seguras y preparadas para crecer desde el día uno.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Microservicios &amp; Monolitos Modulares
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Infraestructura Cloud (AWS/Azure)
                        </li>
</ul>
</div>

<div className="group glass-card p-8 rounded-xl hover:bg-neutral-900/80 transition-all duration-500 border border-white/5 hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:rocket" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Diseño y Lanzamiento de MVPs</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                        Convierto ideas en productos funcionales y validables, priorizando velocidad, foco en negocio y decisiones técnicas que no comprometen el futuro.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Prototipado Rápido
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Validación de Mercado
                        </li>
</ul>
</div>

<div className="group glass-card p-8 rounded-xl hover:bg-neutral-900/80 transition-all duration-500 border border-white/5 hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:compass" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Estrategia Tecnológica (CTO as a Service)</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                        Acompaño decisiones tecnológicas críticas alineando visión, producto y tecnología con objetivos reales de crecimiento y rentabilidad.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Selección de Tech Stack
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Gestión de Roadmaps
                        </li>
</ul>
</div>

<div className="group glass-card p-8 rounded-xl hover:bg-neutral-900/80 transition-all duration-500 border border-white/5 hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:activity" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Optimización y Escalabilidad</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                        Analizo y rediseño plataformas en producción para mejorar rendimiento, reducir fricción técnica y soportar nuevas etapas de crecimiento.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Auditoría de Performance
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Refactorización Estratégica
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black border-t border-white/5" id="methodology">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">De la idea a la plataforma real</h2>
<p className="text-neutral-400 font-light">Cuatro fases claras para garantizar impacto y minimizar riesgo.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800 z-0"></div>

<div className="relative z-10 group">
<div className="w-12 h-12 bg-black border border-neutral-700 group-hover:border-white transition-colors rounded-full flex items-center justify-center text-white font-mono text-sm mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(0,0,0,1)]">
                        01
                    </div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Entendimiento</h3>
<p className="text-xs text-neutral-400 mb-3 text-center md:text-left leading-relaxed">
                        Modelo de negocio, riesgos y restricciones.
                    </p>
<div className="p-3 bg-neutral-900/50 border border-white/5 rounded-lg">
<p className="text-[10px] text-neutral-500 uppercase tracking-wide font-medium mb-1">Resultado</p>
<p className="text-xs text-neutral-300">Claridad sobre qué construir y qué NO construir.</p>
</div>
</div>

<div className="relative z-10 group">
<div className="w-12 h-12 bg-black border border-neutral-700 group-hover:border-white transition-colors rounded-full flex items-center justify-center text-white font-mono text-sm mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(0,0,0,1)]">
                        02
                    </div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Diseño</h3>
<p className="text-xs text-neutral-400 mb-3 text-center md:text-left leading-relaxed">
                        Arquitectura técnica, escalabilidad y producto.
                    </p>
<div className="p-3 bg-neutral-900/50 border border-white/5 rounded-lg">
<p className="text-[10px] text-neutral-500 uppercase tracking-wide font-medium mb-1">Resultado</p>
<p className="text-xs text-neutral-300">Una solución sólida, pensada para crecer.</p>
</div>
</div>

<div className="relative z-10 group">
<div className="w-12 h-12 bg-black border border-neutral-700 group-hover:border-white transition-colors rounded-full flex items-center justify-center text-white font-mono text-sm mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(0,0,0,1)]">
                        03
                    </div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Ejecución</h3>
<p className="text-xs text-neutral-400 mb-3 text-center md:text-left leading-relaxed">
                        Desarrollo guiado e iteraciones controladas.
                    </p>
<div className="p-3 bg-neutral-900/50 border border-white/5 rounded-lg">
<p className="text-[10px] text-neutral-500 uppercase tracking-wide font-medium mb-1">Resultado</p>
<p className="text-xs text-neutral-300">Avances reales sin deuda técnica innecesaria.</p>
</div>
</div>

<div className="relative z-10 group">
<div className="w-12 h-12 bg-black border border-neutral-700 group-hover:border-white transition-colors rounded-full flex items-center justify-center text-white font-mono text-sm mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(0,0,0,1)]">
                        04
                    </div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Escalamiento</h3>
<p className="text-xs text-neutral-400 mb-3 text-center md:text-left leading-relaxed">
                        Optimización, performance y nuevos mercados.
                    </p>
<div className="p-3 bg-neutral-900/50 border border-white/5 rounded-lg">
<p className="text-[10px] text-neutral-500 uppercase tracking-wide font-medium mb-1">Resultado</p>
<p className="text-xs text-neutral-300">Sistemas listos para operar en el tiempo.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-8">
                La tecnología no es el fin.
                <span className="block text-neutral-500 mt-2">Es el medio para el crecimiento.</span>
</h2>
<p className="text-lg text-neutral-400 font-light mb-12">
                Trabajo con Founders, CTOs y empresas que buscan construir, escalar o corregir plataformas con criterio técnico y visión de negocio.
            </p>
<div className="glass-card p-1 rounded-full inline-block">
<button className="bg-white text-black px-10 py-4 rounded-full font-medium text-base hover:bg-neutral-200 transition-all flex items-center justify-center gap-3">
                    Agenda una sesión estratégica
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-600">
<p>© 2024 Platform Architect. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Twitter / X</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Email</a>
</div>
</div>
</div>
</section>

    </>
  );
}
