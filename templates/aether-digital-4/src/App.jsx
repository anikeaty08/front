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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 stars"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] planet-gradient opacity-60"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030014]/70 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-lg font-semibold text-white tracking-tighter" href="#">Oply</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-300" href="#mision">Misión</a>
<a className="hover:text-white transition-colors duration-300" href="#servicios">Capacidades</a>
<a className="hover:text-white transition-colors duration-300" href="#proceso">Trayectoria</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-white bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300" href="#">
<span>Iniciar Transmisión</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-52 md:pb-32 overflow-hidden z-10 pt-40 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                Sistema Operativo V.2.0 Disponible
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 tracking-tight leading-[1.1] mb-6 glow-text">
                Diseñamos el futuro <br className="hidden md:block"/> de la experiencia digital.
            </h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Transformamos ideas complejas en interfaces interestelares. Navegamos por la intersección entre tecnología, diseño y estrategia humana.
            </p>
<div className="flex flex-col md:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<button className="w-full md:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Explorar Servicios
                </button>
<button className="w-full md:w-auto px-8 py-3.5 bg-transparent text-white border border-white/10 text-sm font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:play" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Ver Showreel
                </button>
</div>
</div>

<div className="-translate-y-1/2 -translate-x-1/2 blur-[120px] bg-violet-600/20 w-[500px] h-[500px] -z-10 rounded-full absolute top-1/2 left-0"></div>
<div className="blur-[100px] bg-indigo-600/10 w-[600px] h-[600px] -z-10 rounded-full absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3">
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">10+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Años Luz</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">200+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Misiones Cumplidas</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">98%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Éxito en Órbita</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Soporte Estelar</div>
</div>
</div>
</div>

<section className="py-24 px-6 relative z-10" id="servicios">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Capacidades del Núcleo</h2>
<p className="text-slate-400 max-w-lg font-light text-sm md:text-base">
                        Nuestra suite de herramientas de transformación digital abarca desde la investigación profunda hasta la implementación de interfaces de alta fidelidad.
                    </p>
</div>
<a className="text-violet-400 text-sm hover:text-violet-300 transition-colors flex items-center gap-1 group" href="#">
                    Ver todas las soluciones
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-500/20 transition-all duration-500"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:scan-face" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">UX Research &amp; Strategy</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Análisis profundo de comportamiento usuario. Mapeo de viajes estelares y arquitectura de información.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden md:col-span-2">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-center gap-8 h-full">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Diseño de Interfaz (UI)</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                                Sistemas de diseño atómicos y visuales de alta fidelidad. Creamos lenguajes visuales que escalan a través del universo de dispositivos.
                            </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-violet-400 iconify--lucide" data-height="12" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Design Systems
                                </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-violet-400 iconify--lucide" data-height="12" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Prototipado 3D
                                </li>
</ul>
</div>
<div className="w-full md:w-1/2 h-40 md:h-full bg-gradient-to-br from-violet-900/20 to-indigo-900/20 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-4 border border-white/10 rounded-lg bg-[#05050A]">
<div className="p-3 flex gap-2 border-b border-white/5">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="p-4 space-y-3">
<div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
<div className="w-full h-16 bg-white/5 rounded-lg"></div>
<div className="flex gap-2">
<div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
<div className="w-1/4 h-2 bg-violet-500/50 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Desarrollo Frontend</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Ingeniería creativa con React, Vue y WebGL. Rendimiento optimizado para velocidades luz.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:rocket" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Growth &amp; Analytics</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Medición de telemetría en tiempo real. Optimización continua basada en datos orbitales.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden flex flex-col justify-center items-center text-center">
<div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h3 className="text-2xl font-semibold text-white mb-2 relative z-10">¿Listo para despegar?</h3>
<p className="text-xs text-slate-400 mb-6 relative z-10">Agenda una consulta inicial.</p>
<button className="relative z-10 w-full py-2 bg-white text-black text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                        Contactar Ahora
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#05050A]">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">Metodología</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">El Protocolo Aether</h2>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                        No somos una agencia tradicional. Operamos como una extensión de tu equipo, utilizando metodologías ágiles adaptadas a entornos de alta incertidumbre y rápida evolución tecnológica.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xs font-mono text-white group-hover:border-violet-500/50 group-hover:text-violet-400 transition-colors">01</div>
<div className="">
<h4 className="text-white font-medium mb-1">Descubrimiento</h4>
<p className="text-sm text-slate-500">Inmersión total en los objetivos del negocio y necesidades del usuario.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xs font-mono text-white group-hover:border-violet-500/50 group-hover:text-violet-400 transition-colors">02</div>
<div className="">
<h4 className="text-white font-medium mb-1">Iteración Veloz</h4>
<p className="text-sm text-slate-500">Sprints de diseño y desarrollo de 2 semanas con entregables tangibles.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xs font-mono text-white group-hover:border-violet-500/50 group-hover:text-violet-400 transition-colors">03</div>
<div>
<h4 className="text-white font-medium mb-1">Lanzamiento</h4>
<p className="text-sm text-slate-500">Despliegue escalable y monitorización post-lanzamiento.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[400px] w-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden flex items-center justify-center floating">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
<div className="w-64 h-64 border border-violet-500/30 rounded-full flex items-center justify-center relative">
<div className="absolute w-full h-full rounded-full border border-violet-500/10 animate-[ping_3s_linear_infinite]"></div>
<div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/5">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="48" data-icon="lucide:aperture" data-strokeWidth="1" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto text-center">
<div className="mb-8 flex justify-center">
<svg aria-hidden="true" className="iconify text-violet-500 iconify--lucide" data-height="32" data-icon="lucide:quote" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-8 leading-relaxed">
                "AETHER redefinió completamente nuestra plataforma SaaS. La atención al detalle y la estética 'dark mode' que implementaron aumentó nuestro engagement en un 400%."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden border border-white/10">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" style={{}}/>
</div>
<div className="text-left">
<div className="text-white text-sm font-medium">Elena R.</div>
<div className="text-slate-500 text-xs">CTO en NebulaSystems</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a0a12] to-[#030014] overflow-hidden px-6 py-16 md:py-24 text-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
<h2 className="relative z-10 text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Comienza tu transformación.</h2>
<p className="relative z-10 text-slate-400 max-w-xl mx-auto mb-10 text-sm md:text-base">
                Los espacios son limitados para nuevos proyectos este trimestre. Asegura tu posición en la plataforma de lanzamiento.
            </p>
<form className="relative z-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors placeholder:text-slate-600" placeholder="tu@empresa.com" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors" type="button">
                    Empezar
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-[#02000d] pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<span className="bg-white w-4 h-4 rounded-full block"></span>
                        AETHER
                    </a>
<p className="text-xs text-slate-500">
                        Diseñando el vacío. <br/>
                        Madrid, España.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Servicios</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Estrategia UX</a></li>
<li><a className="hover:text-white transition-colors" href="#">Diseño UI</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Compañía</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Manifiesto</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carreras</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:github" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-slate-600">
                    © 2024 Aether Agency. Todos los derechos reservados.
                </div>
<div className="flex gap-6 text-[10px] text-slate-600">
<a className="hover:text-slate-400" href="#">Privacidad</a>
<a className="hover:text-slate-400" href="#">Términos</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
