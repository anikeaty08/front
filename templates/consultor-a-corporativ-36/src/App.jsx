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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 border border-zinc-600 rotate-45 transform origin-center"></div>
<iconify-icon className="w-4 h-4 text-zinc-400 relative z-10" icon="solar:global-linear"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-zinc-50">ESTRATEGIA <span className="text-zinc-600">GLOBAL</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#firma">La Firma</a>
<a className="hover:text-zinc-50 transition-colors" href="#servicios">Servicios</a>
<a className="hover:text-zinc-50 transition-colors" href="#metodologia">Metodología</a>
<a className="px-5 py-2.5 bg-zinc-100 text-zinc-950 rounded-full hover:bg-white transition-all shadow-sm" href="#contacto">Contacto Corporativo</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400 mb-8 shadow-sm backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse"></span>
                Consultoría Intercontinental
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-zinc-50 tracking-tight leading-[1.1] mb-8">
                Excelencia estratégica para<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">el crecimiento corporativo.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                Elevamos estándares empresariales mediante auditoría rigurosa, talento especializado y gestión de riesgos laborales.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-4 bg-zinc-100 text-zinc-950 text-base font-medium rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-zinc-950/50" href="#contacto">
                    Solicitar Propuesta
                    <iconify-icon className="w-5 h-5" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="w-full md:w-auto px-8 py-4 border border-zinc-800 text-zinc-300 text-base font-medium rounded-lg hover:border-zinc-600 hover:text-zinc-50 transition-colors bg-zinc-900/30 backdrop-blur-sm">
                    Ver Portafolio
                </button>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-800 relative" id="servicios">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-medium text-zinc-50 tracking-tight mb-4">Nuestros Pilares Estratégicos</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">Un enfoque integral diseñado para mitigar riesgos y maximizar la eficiencia operativa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-900/80 transition-all duration-300 backdrop-blur-sm">
<div className="w-14 h-14 rounded-xl bg-zinc-800/50 flex items-center justify-center mb-8 border border-zinc-700/50 group-hover:bg-zinc-800 transition-colors">
<iconify-icon className="w-7 h-7 text-zinc-300" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-zinc-50 mb-4 tracking-tight">Contabilidad y Auditoría</h3>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        Implementación estricta de estándares <span className="text-zinc-200 font-medium">NIIF y NIA</span>. Garantizamos transparencia financiera y cumplimiento regulatorio internacional.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-base text-zinc-400">
<iconify-icon className="w-5 h-5 text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Auditoría Forense y Financiera
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400">
<iconify-icon className="w-5 h-5 text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Optimización Fiscal
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400">
<iconify-icon className="w-5 h-5 text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Reportes de Gestión
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-900/80 transition-all duration-300 backdrop-blur-sm">
<div className="w-14 h-14 rounded-xl bg-zinc-800/50 flex items-center justify-center mb-8 border border-zinc-700/50 group-hover:bg-zinc-800 transition-colors">
<iconify-icon className="w-7 h-7 text-zinc-300" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-zinc-50 mb-4 tracking-tight">Reclutamiento Especializado</h3>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        Metodología experta para la captación de talento de alto nivel. Alineamos capital humano con los objetivos <span className="text-zinc-200 font-medium">estratégicos</span> de la organización.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-base text-zinc-400">
<iconify-icon className="w-5 h-5 text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Headhunting Ejecutivo
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400">
<iconify-icon className="w-5 h-5 text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Evaluación Psicométrica
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400">
<iconify-icon className="w-5 h-5 text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Onboarding Corporativo
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-900/80 transition-all duration-300 backdrop-blur-sm">
<div className="w-14 h-14 rounded-xl bg-zinc-800/50 flex items-center justify-center mb-8 border border-zinc-700/50 group-hover:bg-zinc-800 transition-colors">
<iconify-icon className="w-7 h-7 text-zinc-300" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-zinc-50 mb-4 tracking-tight">Seguridad Ocupacional (SSO)</h3>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        Gestión integral de riesgos y cumplimiento normativo. Protegemos su activo más valioso mediante protocolos de <span className="text-zinc-200 font-medium">seguridad industrial</span>.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-base text-zinc-400">
<iconify-icon className="w-5 h-5 text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Auditorías de Cumplimiento SSO
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400">
<iconify-icon className="w-5 h-5 text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Mapas de Riesgo
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400">
<iconify-icon className="w-5 h-5 text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Capacitación Certificada
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="metodologia">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-zinc-50 tracking-tight mb-6">Valor Profesional Tangible</h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        Más que consultores, somos socios estratégicos. Nuestra intervención se traduce en seguridad jurídica, eficiencia operativa y reducción de costos ocultos.
                    </p>
<div className="grid grid-cols-1 gap-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="w-5 h-5 text-zinc-300" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-xl font-medium text-zinc-50 mb-2">Confidencialidad Absoluta</h4>
<p className="text-base text-zinc-400">Protocolos estrictos de manejo de datos para proteger su información sensible y financiera.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="w-5 h-5 text-zinc-300" icon="solar:bolt-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-xl font-medium text-zinc-50 mb-2">Eficiencia Operativa</h4>
<p className="text-base text-zinc-400">Procesos optimizados que reducen la carga administrativa y mejoran la toma de decisiones.</p>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] bg-zinc-900/40 rounded-2xl border border-zinc-800/80 p-8 flex flex-col justify-between overflow-hidden backdrop-blur-md">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
<div className="relative z-10">
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2 block">Plan de Ejecución</span>
<h3 className="text-2xl text-zinc-50 font-medium mb-8 tracking-tight">Ruta Crítica</h3>
<div className="space-y-6 relative">

<div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-zinc-800"></div>
<div className="relative flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center z-10 shadow-sm">
<span className="text-zinc-100 font-medium">1</span>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg w-full">
<p className="text-zinc-300 font-medium">Diagnóstico Inicial</p>
</div>
</div>
<div className="relative flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center z-10 shadow-sm">
<span className="text-zinc-100 font-medium">2</span>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg w-full">
<p className="text-zinc-300 font-medium">Diseño de Estrategia</p>
</div>
</div>
<div className="relative flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center z-10 shadow-sm">
<span className="text-zinc-100 font-medium">3</span>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg w-full">
<p className="text-zinc-300 font-medium">Implementación &amp; Supervisión</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-800 bg-zinc-950 relative overflow-hidden" id="firma">
<div className="absolute inset-0 bg-zinc-900/30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-800">
<div className="px-6 text-center md:text-left">
<p className="text-4xl font-medium text-zinc-50 mb-2 tracking-tight">+15</p>
<p className="text-sm text-zinc-500 uppercase tracking-wide font-medium">Años de Experiencia</p>
</div>
<div className="px-6 text-center md:text-left">
<p className="text-4xl font-medium text-zinc-50 mb-2 tracking-tight">300+</p>
<p className="text-sm text-zinc-500 uppercase tracking-wide font-medium">Auditorías Ejecutadas</p>
</div>
<div className="px-6 text-center md:text-left">
<p className="text-4xl font-medium text-zinc-50 mb-2 tracking-tight">98%</p>
<p className="text-sm text-zinc-500 uppercase tracking-wide font-medium">Retención de Clientes</p>
</div>
<div className="px-6 text-center md:text-left">
<p className="text-4xl font-medium text-zinc-50 mb-2 tracking-tight">INTL</p>
<p className="text-sm text-zinc-500 uppercase tracking-wide font-medium">Cobertura Regional</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-t border-zinc-800" id="contacto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

<div className="lg:col-span-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-sm text-zinc-400 mb-6">
                        Contacto Directo
                    </div>
<h2 className="text-3xl md:text-4xl font-medium text-zinc-50 tracking-tight mb-6">Inicie la transformación de su empresa.</h2>
<p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                        Nuestros consultores están listos para diseñar una solución a la medida de sus necesidades corporativas.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 shadow-sm">
<iconify-icon className="w-5 h-5 text-zinc-400" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-100 font-medium mb-1">Oficinas Centrales</h4>
<p className="text-zinc-500 text-sm">Av. Reforma 12-34, Zona 9<br/>Edificio Corporativo, Nivel 15</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 shadow-sm">
<iconify-icon className="w-5 h-5 text-zinc-400" icon="solar:letter-opened-linear"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-100 font-medium mb-1">Correo Electrónico</h4>
<p className="text-zinc-500 text-sm">consultas@estrategiaglobal.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 shadow-sm">
<iconify-icon className="w-5 h-5 text-zinc-400" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-100 font-medium mb-1">Teléfono</h4>
<p className="text-zinc-500 text-sm">PBX: +502 2345-6789</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-8 lg:p-10 backdrop-blur-sm shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Nombre Completo</label>
<input className="w-full glass-input border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Juan Pérez" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Empresa</label>
<input className="w-full glass-input border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Nombre Corporativo" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Correo Corporativo</label>
<input className="w-full glass-input border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="juan@empresa.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Servicio de Interés</label>
<div className="relative">
<select className="w-full glass-input border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all appearance-none cursor-pointer">
<option className="bg-zinc-900">Auditoría y Finanzas</option>
<option className="bg-zinc-900">Reclutamiento y Selección</option>
<option className="bg-zinc-900">Salud y Seguridad (SSO)</option>
<option className="bg-zinc-900">Consultoría General</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
<iconify-icon className="w-4 h-4 text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Detalles del Requerimiento</label>
<textarea className="w-full glass-input border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none" placeholder="Describa brevemente sus necesidades..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-zinc-100 hover:bg-white text-zinc-950 font-medium rounded-lg transition-all flex items-center justify-center gap-2 mt-2 shadow-md" type="button">
                            Enviar Solicitud
                            <iconify-icon className="w-5 h-5 text-zinc-600" icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-800/80 py-12 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 border border-zinc-600 rotate-45 flex items-center justify-center"></div>
<span className="text-lg font-medium text-zinc-50 tracking-tight">ESTRATEGIA GLOBAL</span>
</div>
<p className="text-base text-zinc-500">
                © 2024 Estrategia Global. Todos los derechos reservados.
            </p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="w-5 h-5" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="text-zinc-600 hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="w-5 h-5" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
