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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-2/3 h-2/3 bg-cyan-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-1/2 h-1/2 bg-blue-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050B18]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10">
<svg className="w-full h-full transform transition-transform group-hover:scale-105" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20 V80 L50 50 Z" fill="#4ADE80"></path> 
<path d="M80 80 V20 L50 50 Z" fill="#22d3ee"></path> 
<path d="M50 50 L20 20 H35 L50 35 L65 20 H80 L50 50 Z" fill="#4ADE80" opacity="0.9"></path>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-xl font-semibold tracking-tight text-white">NEXOZ</span>
<span className="text-[0.65rem] tracking-[0.2em] text-orange-500 font-medium uppercase">Digital</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#servicios">Soluciones</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#proceso">Metodología</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#nosotros">Agencia</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-all hover:bg-white/10 hover:ring-1 hover:ring-cyan-500/50" href="#contacto">
                    Consultoría IA
                </a>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-3 py-1 text-xs font-medium text-cyan-400 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                Agencia Líder en Automatización
            </div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl mb-8">
                Escala tu negocio con <br/>
<span className="text-gradient">Inteligencia Artificial</span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
                En Nexoz Digital transformamos empresas implementando ecosistemas de automatización y marketing potenciado por IA. Reduce costos operativos y maximiza tus conversiones hoy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-slate-950 transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900" href="#contacto">
                    Agenda tu Auditoría Gratis
                    <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-white transition-colors hover:bg-white/10" href="#servicios">
                    Ver Servicios
                </a>
</div>

<div className="mt-20 border-t border-white/5 pt-10">
<p className="text-sm font-medium text-slate-500 mb-6">Tecnologías que implementamos</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold text-white">OpenAI</span>
<span className="text-xl font-semibold text-white">Make</span>
<span className="text-xl font-semibold text-white">Zapier</span>
<span className="text-xl font-semibold text-white">HubSpot</span>
<span className="text-xl font-semibold text-white">Meta Ads</span>
</div>
</div>
</div>
</main>

<section className="py-24 relative" id="servicios">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Soluciones que redefinen el futuro</h2>
<p className="text-lg text-slate-400">Integramos lo último en modelos de lenguaje y automatización de flujos de trabajo para crear máquinas de venta autónomas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl md:col-span-2 group hover:border-cyan-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bot"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Chatbots &amp; Asistentes IA</h3>
<p className="text-lg text-slate-400 mb-6">Atención al cliente 24/7 con IA conversacional que entiende contexto, agenda citas y cierra ventas automáticamente en WhatsApp y Web.</p>
<div className="relative h-48 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 overflow-hidden">

<div className="absolute top-4 left-4 right-4 space-y-3">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/20"></div>
<div className="bg-white/5 rounded-lg p-3 w-2/3 text-xs text-slate-300">Hola, ¿en qué puedo ayudarte hoy con Nexoz?</div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-orange-500/20"></div>
<div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3 w-2/3 text-xs text-cyan-100">Quiero automatizar mis ventas.</div>
</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl group hover:border-orange-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Automatización de Procesos</h3>
<p className="text-lg text-slate-400">Conectamos tu CRM, Email y herramientas favoritas para eliminar el trabajo manual repetitivo.</p>
</div>

<div className="glass-panel p-8 rounded-3xl group hover:border-purple-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Marketing Predictivo</h3>
<p className="text-lg text-slate-400">Ads optimizados por IA que aprenden de tus mejores clientes para maximizar el ROAS.</p>
</div>

<div className="glass-panel p-8 rounded-3xl md:col-span-2 group hover:border-emerald-500/30 transition-colors">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">SEO &amp; Contenido Generativo</h3>
<p className="text-lg text-slate-400">Estrategias de contenido masivo de alta calidad generado y curado por expertos para dominar los resultados de búsqueda.</p>
</div>

<div className="w-full md:w-48 bg-slate-900/50 rounded-xl p-4 border border-white/5 text-center">
<p className="text-sm text-slate-500 mb-1">Crecimiento Orgánico</p>
<p className="text-3xl font-semibold text-emerald-400">+320%</p>
<div className="w-full bg-slate-800 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-emerald-400 h-full w-[80%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#081021]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        No somos solo una agencia, somos tu partner tecnológico.
                    </h2>
<p className="text-lg text-slate-400 mb-8">
                        En Nexoz Digital combinamos la creatividad humana con la precisión de la máquina. Nuestro enfoque se centra en resultados tangibles y escalabilidad.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white">Estrategia Personalizada</h4>
<p className="text-slate-400 mt-1">Análisis profundo de tu modelo de negocio antes de implementar cualquier código.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white">Tecnología de Punta</h4>
<p className="text-slate-400 mt-1">Uso exclusivo de LLMs avanzados (GPT-4, Claude 3) y herramientas Enterprise.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white">Soporte Continuo</h4>
<p className="text-slate-400 mt-1">Tu sistema nunca para. Monitoreo y optimización constante.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
<div className="relative glass-panel rounded-3xl p-1 border border-white/10">
<img alt="Dashboard Analytics" className="rounded-2xl w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contacto">
<div className="absolute inset-0 bg-gradient-to-b from-[#050B18] via-cyan-900/10 to-[#050B18]"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                ¿Listo para el siguiente nivel?
            </h2>
<p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                Deja de perder tiempo en tareas manuales. Agenda una llamada de descubrimiento de 15 minutos y te mostraremos cómo la IA puede duplicar tu eficiencia.
            </p>
<form className="max-w-md mx-auto space-y-4 mb-12 text-left bg-slate-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
<div>
<label className="sr-only" htmlFor="email">Correo corporativo</label>
<input className="w-full bg-[#0B1221] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" id="email" placeholder="tucorreo@empresa.com" type="email"/>
</div>
<button className="w-full bg-white text-slate-950 font-semibold rounded-lg px-4 py-3 hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2" type="button">
                    Solicitar Propuesta
                    <i className="w-4 h-4" data-lucide="send"></i>
</button>
<p className="text-xs text-center text-slate-500">Sin compromiso. Respuesta en menos de 24h.</p>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020611] py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-6">
<a className="flex items-center gap-3" href="#">
<div className="relative w-8 h-8">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20 V80 L50 50 Z" fill="#4ADE80"></path>
<path d="M80 80 V20 L50 50 Z" fill="#22d3ee"></path>
<path d="M50 50 L20 20 H35 L50 35 L65 20 H80 L50 50 Z" fill="#4ADE80" opacity="0.9"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight text-white">NEXOZ <span className="text-orange-500">DIGITAL</span></span>
</a>
<p className="text-slate-500 text-sm max-w-xs">
                        Agencia boutique especializada en soluciones de Inteligencia Artificial para el crecimiento empresarial.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<h4 className="text-white font-medium mb-4">Servicios</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Automatización</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Chatbots IA</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Marketing Digital</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Consultoría</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Compañía</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Sobre Nosotros</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Casos de Éxito</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Carreras</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Términos</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Nexoz Digital. Todos los derechos reservados.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-slate-500">Sistemas Operativos</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
