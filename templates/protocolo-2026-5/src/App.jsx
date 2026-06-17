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
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
}
}
}
}
}



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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[40rem] bg-indigo-500/10 blur-[12rem] rounded-full pointer-events-none -z-10"></div>
<div className="absolute top-0 right-0 w-1/3 h-[30rem] bg-cyan-500/5 blur-[10rem] rounded-full pointer-events-none -z-10"></div>

<header className="absolute top-0 left-0 right-0 z-50 py-8 px-6 md:px-12 flex justify-center md:justify-start">
<div className="text-white font-semibold tracking-widest text-xs flex items-center gap-3 opacity-100">
<iconify-icon className="text-cyan-400 text-lg" icon="lucide:hexagon"></iconify-icon>
        PROTOCOLO 2026
      </div>
</header>

<section className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 rounded-full ring-1 ring-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium text-cyan-400 backdrop-blur-md mb-8">
<iconify-icon className="text-cyan-400" icon="lucide:zap"></iconify-icon>
<span className="tracking-wide text-[11px] uppercase">
            Sistema de Implementación Inicial
          </span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
          Deja de ser un espectador.
          <br className="hidden md:block text-slate-500"/>
<span className="text-white">Empieza a operar con IA.</span>
</h1>
<p className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          El framework estratégico para aterrizar la inteligencia artificial en
          tu negocio o servicio. Sin código, sin ruido, directo a la ejecución
          táctica y rentable.
        </p>
<a className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-white text-slate-950 px-8 py-4 text-sm transition-all hover:bg-slate-100 hover:scale-[1.01] shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)] w-full md:w-auto overflow-hidden font-semibold" href="https://consulting-i.myshopify.com/cart/47219936395517:1">
<span className="relative z-10 flex items-center gap-2">
            Desbloquear Protocolo 2026
            <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</span>
</a>
<div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium tracking-wide">
<span className="flex items-center gap-2">
<iconify-icon className="text-sm text-slate-400" icon="lucide:shield-check"></iconify-icon>
            Pago único
          </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-sm text-slate-400" icon="lucide:zap"></iconify-icon>
            Acceso inmediato
          </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-sm text-slate-400" icon="lucide:layers"></iconify-icon>
            Activo 100% digital
          </span>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-900/20">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-white">
            El problema no es la tecnología.
            <br className="hidden md:block"/>
            Es la ausencia de una hoja de ruta.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-900/40 ring-1 ring-white/5 rounded-2xl p-8 hover:bg-slate-800/40 hover:ring-white/10 transition-all duration-300 relative overflow-hidden group">
<div className="w-12 h-12 rounded-xl bg-slate-800/50 ring-1 ring-white/10 flex items-center justify-center text-cyan-400 text-2xl mb-6 group-hover:scale-105 transition-transform">
<iconify-icon icon="lucide:blocks"></iconify-icon>
</div>
<h3 className="text-base md:text-lg font-semibold text-white tracking-tight mb-3">
              Saturación de herramientas
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Pagas suscripciones, acumulas prompts y consumes horas de
              tutoriales, pero tu operativa sigue siendo exactamente la misma.
            </p>
</div>
<div className="bg-slate-900/40 ring-1 ring-white/5 rounded-2xl p-8 hover:bg-slate-800/40 hover:ring-white/10 transition-all duration-300 relative overflow-hidden group">
<div className="w-12 h-12 rounded-xl bg-slate-800/50 ring-1 ring-white/10 flex items-center justify-center text-indigo-400 text-2xl mb-6 group-hover:scale-105 transition-transform">
<iconify-icon icon="lucide:terminal"></iconify-icon>
</div>
<h3 className="text-base md:text-lg font-semibold text-white tracking-tight mb-3">
              El espejismo técnico
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Crees que necesitas saber programar o tener un equipo de
              ingenieros para ver un retorno de inversión real con inteligencia
              artificial.
            </p>
</div>
<div className="bg-slate-900/40 ring-1 ring-white/5 rounded-2xl p-8 hover:bg-slate-800/40 hover:ring-white/10 transition-all duration-300 relative overflow-hidden group">
<div className="w-12 h-12 rounded-xl bg-slate-800/50 ring-1 ring-white/10 flex items-center justify-center text-purple-400 text-2xl mb-6 group-hover:scale-105 transition-transform">
<iconify-icon icon="lucide:compass"></iconify-icon>
</div>
<h3 className="text-base md:text-lg font-semibold text-white tracking-tight mb-3">
              Parálisis estratégica
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Sientes la urgencia de integrar IA para no quedarte atrás, pero te
              falta el criterio para decidir por dónde empezar hoy mismo.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-950 to-slate-950 -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6 leading-tight">
          La barrera no es el código.
          <br className="hidden md:block"/>
          Es la falta de un sistema.
        </h2>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Protocolo 2026 fue diseñado para silenciar el ruido. Una estructura
          probada para pasar de la curiosidad teórica a la ejecución funcional,
          con foco absoluto en lo que genera impacto real.
        </p>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-900/10">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="text-[11px] font-semibold tracking-[0.2em] text-cyan-500 uppercase mb-4 block">
            Ecosistema de Implementación
          </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
            La arquitectura del Protocolo
          </h2>
<p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
            Un flujo de trabajo modular diseñado para ejecución inmediata y
            resultados medibles.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 ring-1 ring-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start hover:ring-white/20 transition-colors">
<div className="w-14 h-14 rounded-full bg-slate-950 ring-1 ring-white/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_-3px_rgba(6,182,212,0.15)]">
<iconify-icon className="text-2xl text-cyan-400" icon="lucide:book-open"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                I. Framework Estratégico
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                El modelo mental para identificar cuellos de botella y detectar
                exactamente dónde la IA actúa como palanca de crecimiento,
                evitando distracciones.
              </p>
</div>
</div>
<div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 ring-1 ring-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start hover:ring-white/20 transition-colors">
<div className="w-14 h-14 rounded-full bg-slate-950 ring-1 ring-white/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_-3px_rgba(99,102,241,0.15)]">
<iconify-icon className="text-2xl text-indigo-400" icon="lucide:cpu"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                II. Motor de Ejecución
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                El mapa táctico para traducir ideas abstractas en flujos de
                trabajo funcionales. Configura y despliega tu primer proceso
                autónomo sin fricción técnica.
              </p>
</div>
</div>
</div>

<div className="mt-16">
<div className="flex items-center gap-4 mb-8">
<div className="h-px bg-white/10 flex-grow"></div>
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase">
              Aceleradores Incluidos
            </span>
<div className="h-px bg-white/10 flex-grow"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-slate-900/30 ring-1 ring-white/5 rounded-xl p-6 hover:bg-slate-800/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-5">
<iconify-icon className="text-xl" icon="lucide:target"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-2">
                Radar de Monetización
              </h4>
<p className="text-xs text-slate-400 leading-relaxed">
                Ángulos validados para detectar oportunidades de negocio y
                eficiencia operativa de forma rápida.
              </p>
</div>
<div className="bg-slate-900/30 ring-1 ring-white/5 rounded-xl p-6 hover:bg-slate-800/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5">
<iconify-icon className="text-xl" icon="lucide:route"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-2">
                Ruta de 30 Días
              </h4>
<p className="text-xs text-slate-400 leading-relaxed">
                Secuencia diaria estricta para pasar de la configuración básica
                a una operativa asistida por IA.
              </p>
</div>
<div className="bg-slate-900/30 ring-1 ring-white/5 rounded-xl p-6 hover:bg-slate-800/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-5">
<iconify-icon className="text-xl" icon="lucide:layers"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-2">
                Stack Esencial
              </h4>
<p className="text-xs text-slate-400 leading-relaxed">
                Curaduría implacable de las únicas herramientas que realmente
                necesitas para empezar hoy.
              </p>
</div>
<div className="bg-slate-900/30 ring-1 ring-white/5 rounded-xl p-6 hover:bg-slate-800/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5">
<iconify-icon className="text-xl" icon="lucide:clock"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-2">
                Auditor de Tiempo
              </h4>
<p className="text-xs text-slate-400 leading-relaxed">
                Matriz estratégica para aislar tareas repetitivas y delegarlas
                inmediatamente a tu nuevo sistema.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5">
<div className="max-w-5xl mx-auto">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
              ¿Para quién es este sistema?
            </h2>
<p className="text-sm text-slate-400">
              Diseñado para operadores y constructores, no para turistas
              digitales.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
<div className="relative group">
<div className="w-10 h-10 rounded-xl bg-slate-900 ring-1 ring-white/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/10 transition-colors">
<iconify-icon className="text-lg" icon="lucide:building-2"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white tracking-tight mb-3">
              Dueños de negocio
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Que buscan implementar automatizaciones ligeras para vender mejor,
              recuperar horas semanales y escalar con una estructura limpia.
            </p>
</div>
<div className="relative group">
<div className="w-10 h-10 rounded-xl bg-slate-900 ring-1 ring-white/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500/10 transition-colors">
<iconify-icon className="text-lg" icon="lucide:briefcase"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white tracking-tight mb-3">
              Agencias y Freelancers
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Que necesitan modernizar su propuesta de valor, multiplicar su
              velocidad de entrega y proteger sus márgenes operativos.
            </p>
</div>
<div className="relative group">
<div className="w-10 h-10 rounded-xl bg-slate-900 ring-1 ring-white/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500/10 transition-colors">
<iconify-icon className="text-lg" icon="lucide:rocket"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white tracking-tight mb-3">
              Constructores Digitales
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Que ven la ventana de oportunidad actual y quieren lanzar nuevos
              servicios, productos o activos apalancados al 100% en inteligencia
              artificial.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-slate-900/20">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-white mb-12 text-center">
          El resultado de operar con dirección
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 ring-1 ring-cyan-500/30">
<iconify-icon className="text-[10px] text-cyan-400" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-slate-300 leading-relaxed">
              Claridad táctica sobre cómo aplicar IA en tu operativa diaria sin
              fricción.
            </span>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 ring-1 ring-cyan-500/30">
<iconify-icon className="text-[10px] text-cyan-400" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-slate-300 leading-relaxed">
              Eliminación de horas perdidas en ensayo, error y tutoriales
              genéricos.
            </span>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 ring-1 ring-cyan-500/30">
<iconify-icon className="text-[10px] text-cyan-400" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-slate-300 leading-relaxed">
              Un framework ordenado para evaluar y adoptar nuevas herramientas
              con criterio.
            </span>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 ring-1 ring-cyan-500/30">
<iconify-icon className="text-[10px] text-cyan-400" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-slate-300 leading-relaxed">
              La base estructural para automatizar tareas y recuperar ancho de
              banda mental.
            </span>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 ring-1 ring-cyan-500/30">
<iconify-icon className="text-[10px] text-cyan-400" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-slate-300 leading-relaxed">
              Agilidad para pasar de la idea abstracta al flujo de trabajo
              funcional en horas.
            </span>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 ring-1 ring-cyan-500/30">
<iconify-icon className="text-[10px] text-cyan-400" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-slate-300 leading-relaxed">
              Una ventaja competitiva real mientras tu competencia sigue
              consumiendo teoría.
            </span>
</div>
</div>
<div className="text-center p-6 rounded-2xl bg-slate-900/50 ring-1 ring-white/10 backdrop-blur-sm max-w-2xl mx-auto">
<p className="text-sm font-semibold text-slate-200">
            No adquieres "más contenido para consumir". Inviertes en un sistema
            de implementación listo para ejecutar.
          </p>
</div>
</div>
</section>

<section className="pt-32 pr-6 pb-32 pl-6 relative" id="checkout">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[40rem] bg-cyan-500/10 blur-[12rem] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-lg mr-auto ml-auto">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
            Acceso al Protocolo
          </h2>
<p className="text-sm text-slate-400">
            La puerta de entrada más inteligente para estructurar tu operativa
            con IA.
          </p>
</div>

<div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-cyan-400/40 via-slate-800/60 to-slate-900/20 shadow-2xl shadow-cyan-900/20 group">
<div className="-top-3.5 -translate-x-1/2 text-[10px] uppercase flex font-medium text-white tracking-widest bg-slate-950 ring-white/20 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 absolute left-1/2 shadow-xl gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Fase de Lanzamiento
          </div>
<div className="bg-slate-950/90 backdrop-blur-xl rounded-[calc(1.5rem-1px)] p-8 md:p-10 flex flex-col h-full">
<div className="text-center mb-8 pt-4">
<div className="text-sm text-slate-500 line-through decoration-slate-600/50 mb-3 font-semibold tracking-wide">
                $49.990 CLP
              </div>
<div className="text-5xl md:text-6xl font-medium text-white tracking-tighter mb-2 flex items-baseline justify-center gap-1">
<span>$24.990</span>
<span className="text-lg text-slate-400 font-normal tracking-normal">
                  CLP
                </span>
</div>
<p className="text-xs text-cyan-400/80 font-semibold mt-2">
                Licencia de por vida. Actualizaciones incluidas.
              </p>
</div>
<div className="space-y-4 mb-10 flex-grow pt-6 border-t border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-500 text-lg opacity-90" icon="lucide:check-circle-2"></iconify-icon>
<span className="text-sm text-slate-200">
                  Framework Estratégico Completo
                </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-500 text-lg opacity-90" icon="lucide:check-circle-2"></iconify-icon>
<span className="text-sm text-slate-200">
                  Motor de Ejecución Práctica
                </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-500 text-lg opacity-90" icon="lucide:check-circle-2"></iconify-icon>
<span className="text-sm text-slate-200">
                  Suite de 4 Aceleradores (Bonos)
                </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-500 text-lg opacity-90" icon="lucide:check-circle-2"></iconify-icon>
<span className="text-sm text-slate-200">
                  Ruta de Implementación de 30 Días
                </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-500 text-lg opacity-90" icon="lucide:check-circle-2"></iconify-icon>
<span className="text-sm text-slate-200">
                  Acceso inmediato y permanente
                </span>
</div>
</div>
<a className="w-full bg-white text-slate-950 py-4 rounded-xl text-sm font-semibold text-center hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]" href="https://consulting-i.myshopify.com/cart/47219936395517:1">
              Desbloquear Protocolo 2026
              <iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</a>
<div className="mt-6 flex justify-center items-center gap-4 text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="lucide:lock"></iconify-icon>
                Pago Seguro
              </span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="lucide:zap"></iconify-icon>
                Entrega Digital
              </span>
</div>
</div>
</div>
<p className="text-xs text-center text-slate-500 mt-8 leading-relaxed max-w-sm mx-auto">
          La inversión se recupera en las primeras horas operativas que
          sistematizas aplicando este framework.
        </p>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-900/10">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-white mb-12 text-center">
          Preguntas Frecuentes
        </h2>
<div className="space-y-4">
<div className="bg-slate-900/30 ring-1 ring-white/5 rounded-xl p-6">
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              ¿Necesito saber programar o tener un perfil técnico?
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              En absoluto. Protocolo 2026 está diseñado específicamente para
              operadores y dueños de negocio. Te enseñamos a usar la IA como
              palanca estratégica mediante interfaces visuales, no te enseñamos
              a escribir código.
            </p>
</div>
<div className="bg-slate-900/30 ring-1 ring-white/5 rounded-xl p-6">
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              ¿Es un curso teórico más sobre qué es la Inteligencia Artificial?
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              No. Es un sistema de implementación. Omitimos la teoría de relleno
              y pasamos directamente a cómo estructurar procesos y flujos de
              trabajo a tu favor. Es pura ejecución.
            </p>
</div>
<div className="bg-slate-900/30 ring-1 ring-white/5 rounded-xl p-6">
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              ¿Tendré que pagar suscripciones de software adicionales?
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Toda la lógica del protocolo se puede ejecutar utilizando las
              versiones gratuitas de las herramientas sugeridas. Nuestro enfoque
              es que la estrategia siempre dicta la herramienta, no al revés.
            </p>
</div>
<div className="bg-slate-900/30 ring-1 ring-white/5 rounded-xl p-6">
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              ¿Es un pago único o una suscripción?
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Es un único pago de $24.990 CLP. Te otorga acceso vitalicio a todo
              el ecosistema actual, incluyendo los manuales, los aceleradores y
              cualquier actualización futura del kit base.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-t border-white/5 text-center bg-slate-950">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[25rem] bg-indigo-500/10 blur-[10rem] rounded-full pointer-events-none -z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6 leading-tight">
          La diferencia entre ser espectador y liderar es la ejecución.
        </h2>
<p className="text-base text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
          Puedes seguir coleccionando prompts y esperando el momento perfecto, o
          puedes empezar hoy a construir una ventaja operativa irreversible. El
          framework ya está diseñado para ti.
        </p>
<a className="inline-flex items-center justify-center gap-3 rounded-xl bg-white text-slate-950 px-10 py-4 text-sm font-semibold transition-all hover:bg-slate-100 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] w-full md:w-auto" href="https://consulting-i.myshopify.com/cart/47219936395517:1">
          Iniciar Implementación Ahora
          <iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</a>
<div className="mt-8 text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
          Desbloquea tu ventaja competitiva
        </div>
</div>
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6 leading-tight">
          La diferencia entre observar y liderar es la ejecución.
        </h2>
<p className="text-base text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
          Puedes seguir guardando tutoriales y esperando el momento perfecto, o
          puedes empezar hoy a construir una ventaja operativa real. El sistema
          ya está diseñado.
        </p>
<a className="inline-flex items-center justify-center gap-3 rounded-xl bg-white text-slate-950 px-10 py-4 text-sm font-medium transition-all hover:bg-slate-100 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] w-full md:w-auto" href="https://consulting-i.myshopify.com/cart/47219936395517:1">
          Entrar al Protocolo 2026 hoy
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="mt-8 text-[11px] text-slate-500 uppercase tracking-widest font-medium">
          Desbloquea tu ventaja competitiva ahora
        </div>
</div>
</section>
<footer className="py-8 px-6 text-center border-t border-white/5 text-xs text-slate-600 bg-slate-950">
<p>© 2024 Protocolo 2026. Todos los derechos reservados.</p>
</footer>

    </>
  );
}
