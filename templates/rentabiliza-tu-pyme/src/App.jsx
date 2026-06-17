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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



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
      

<header className="relative pt-24 pb-32 overflow-hidden border-b border-slate-200/60 hero-glow">
<div className="absolute inset-0 bg-grid opacity-[0.3] pointer-events-none"></div>
<div className="relative max-w-6xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0047FF] text-xs font-medium tracking-wide uppercase mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0047FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0047FF]"></span>
</span>
                Taller Online Gratuito
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#072146] mb-6 leading-tight">
                Rentabiliza tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#072146] to-[#0047FF]">PyME</span>
</h1>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-800 mb-6 max-w-4xl mx-auto">
                Descubre oportunidades ocultas de crecimiento y mejora la rentabilidad de tu negocio
            </h2>
<p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">
                Aprende a evaluar la viabilidad de tu empresa mediante herramientas prácticas de diagnóstico, indicadores financieros clave y estrategias de monetización aplicables desde el primer día.
            </p>
<div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
<div className="flex items-center gap-2.5 bg-white shadow-sm border border-slate-200 rounded-full px-5 py-2.5 text-sm font-medium text-slate-700">
<iconify-icon className="text-lg text-[#0047FF]" icon="solar:calendar-linear"></iconify-icon>
                    Miércoles 1 de Julio
                </div>
<div className="flex items-center gap-2.5 bg-white shadow-sm border border-slate-200 rounded-full px-5 py-2.5 text-sm font-medium text-slate-700">
<iconify-icon className="text-lg text-[#0047FF]" icon="solar:clock-circle-linear"></iconify-icon>
                    11:00 a.m. – 2:00 p.m.
                </div>
<div className="flex items-center gap-2.5 bg-white shadow-sm border border-slate-200 rounded-full px-5 py-2.5 text-sm font-medium text-slate-700">
<iconify-icon className="text-lg text-[#0047FF]" icon="solar:laptop-linear"></iconify-icon>
                    Vía Zoom
                </div>
<div className="flex items-center gap-2.5 bg-[#F5F7FA] border border-slate-200 rounded-full px-5 py-2.5 text-sm font-medium text-slate-700">
<iconify-icon className="text-lg text-[#072146]" icon="solar:ticket-linear"></iconify-icon>
                    Evento Gratuito
                </div>
</div>
<div className="flex flex-col items-center">
<a className="inline-flex items-center justify-center gap-2 bg-[#0047FF] hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-[0_8px_24px_rgba(0,71,255,0.25)] hover:shadow-[0_12px_32px_rgba(0,71,255,0.35)] hover:-translate-y-0.5" href="#registro">
                    Reservar mi lugar
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<span className="mt-4 text-sm text-slate-500 flex items-center gap-1.5">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                    Cupos limitados
                </span>
</div>
</div>
</header>

<section className="py-12 bg-white border-b border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-8">Una iniciativa impulsada por</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#072146] to-slate-700"></div>
<span className="text-2xl font-semibold tracking-tight text-slate-900">IDEARIA</span>
</div>

<div className="flex items-center gap-1">
<span className="text-3xl font-semibold tracking-tight text-[#072146]">BBVA</span>
</div>
</div>
<p className="mt-10 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Creada para impulsar el crecimiento de las PyMEs mediante herramientas estratégicas y financieras aplicables a negocios reales.
            </p>
</div>
</section>

<section className="py-24 bg-[#F5F7FA]">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#072146] mb-6">
                        ¿Tu negocio realmente está siendo rentable?
                    </h2>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Muchas PyMEs generan ventas constantemente, pero pocas conocen con claridad el estado real de sus finanzas y operaciones.
                    </p>
<p className="text-base text-slate-600 leading-relaxed font-medium">
                        Este taller te ayudará a identificar estos puntos críticos y convertirlos en oportunidades de crecimiento.
                    </p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:question-circle-linear"></iconify-icon>
</div>
<p className="text-slate-700 text-base">Qué tan rentable es realmente su operación actual.</p>
</div>
<div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:graph-down-linear"></iconify-icon>
</div>
<p className="text-slate-700 text-base">Cuáles son las áreas que están limitando su crecimiento de forma oculta.</p>
</div>
<div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:scale-linear"></iconify-icon>
</div>
<p className="text-slate-700 text-base">Qué decisiones diarias generan valor y cuáles simplemente consumen recursos.</p>
</div>
<div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<p className="text-slate-700 text-base">Cómo utilizar indicadores financieros para tomar mejores y más rápidas decisiones.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#072146] mb-4">
                    Lo que aprenderás durante el taller
                </h2>
<p className="text-lg text-slate-500">Herramientas accionables para transformar la manera en que gestionas tu PyME.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-[#F5F7FA] text-[#0047FF] flex items-center justify-center mb-6 group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Diagnostica tu modelo</h3>
<p className="text-slate-500 text-sm leading-relaxed">Identifica fortalezas, debilidades y oportunidades utilizando la metodología Business Model Canvas.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-[#F5F7FA] text-[#0047FF] flex items-center justify-center mb-6 group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Evalúa la rentabilidad</h3>
<p className="text-slate-500 text-sm leading-relaxed">Comprende a fondo indicadores cruciales como el ROI (Retorno de Inversión) y tu Punto de Equilibrio.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-[#F5F7FA] text-[#0047FF] flex items-center justify-center mb-6 group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Descubre crecimiento</h3>
<p className="text-slate-500 text-sm leading-relaxed">Aprende estrategias de monetización efectivas y técnicas de generación de valor para tus clientes.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group md:col-span-2 lg:col-span-1 lg:col-start-2">
<div className="w-12 h-12 rounded-xl bg-[#F5F7FA] text-[#0047FF] flex items-center justify-center mb-6 group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Toma mejores decisiones</h3>
<p className="text-slate-500 text-sm leading-relaxed">Utiliza métricas financieras sólidas para validar nuevas inversiones y proyectos antes de arriesgar capital.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group md:col-span-2 lg:col-span-1">
<div className="w-12 h-12 rounded-xl bg-[#F5F7FA] text-[#0047FF] flex items-center justify-center mb-6 group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Herramientas financieras</h3>
<p className="text-slate-500 text-sm leading-relaxed">Conoce soluciones BBVA para optimizar pagos, gestión de nómina y tu operación financiera diaria.</p>
</div>
</div>

<div className="mt-16 flex justify-center">
<a className="inline-flex items-center justify-center gap-2 bg-[#072146] hover:bg-slate-800 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-sm" href="#registro">
                    Reservar mi lugar ahora
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#072146] text-white overflow-hidden relative">
<div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none invert"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                        Al finalizar te llevarás
                    </h2>
<p className="text-blue-200 text-lg mb-8">Un diagnóstico inicial de tu negocio con una visión clara y estructurada de:</p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-lg text-slate-200">Tus fortalezas actuales</span>
</div>
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-lg text-slate-200">Áreas de oportunidad específicas</span>
</div>
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-lg text-slate-200">Factores reales que impactan tu rentabilidad</span>
</div>
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-lg text-slate-200">Acciones prioritarias y siguientes pasos para crecer</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-[#0047FF] to-purple-600 rounded-[2rem] blur opacity-30"></div>
<div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium uppercase tracking-wide mb-6">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                            Bono Exclusivo
                        </div>
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#072146] to-[#0047FF] flex items-center justify-center flex-shrink-0 shadow-lg text-white">
<iconify-icon className="text-3xl" icon="solar:gift-linear"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Acceso al Curso Online</h3>
<p className="text-slate-600 font-medium mb-1">Business Model Canvas</p>
<p className="text-sm text-slate-500">Porcelana de Idearia. Acceso completo y gratuito al registrarte y asistir al taller.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F7FA]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#072146]">Agenda del Taller</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">Módulo 1</span>
<h3 className="text-xl font-medium text-[#072146] mb-6">Business Model Canvas</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Diagnóstico de modelo de negocio</li>
<li className="flex gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Identificación de áreas de mejora</li>
<li className="flex gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Validación de propuesta de valor</li>
</ul>
</div>
<div className="bg-white rounded-2xl p-8 border border-slate-200 relative overflow-hidden shadow-md scale-105 z-10">
<div className="absolute top-0 left-0 w-full h-1 bg-[#0047FF]"></div>
<span className="text-xs font-semibold text-[#0047FF] uppercase tracking-widest block mb-2">Módulo 2</span>
<h3 className="text-xl font-medium text-[#072146] mb-6">Viabilidad y Rentabilidad</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-[#0047FF] mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> ROI (Retorno de inversión)</li>
<li className="flex gap-2"><iconify-icon className="text-[#0047FF] mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Punto de equilibrio</li>
<li className="flex gap-2"><iconify-icon className="text-[#0047FF] mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Generación de valor</li>
<li className="flex gap-2"><iconify-icon className="text-[#0047FF] mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Estrategias de monetización</li>
</ul>
</div>
<div className="bg-white rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#072146]"></div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">Módulo 3</span>
<h3 className="text-xl font-medium text-[#072146] mb-2">Herramientas Financieras</h3>
<p className="text-xs font-medium text-slate-500 mb-4 pb-4 border-b border-slate-100">Presentado por BBVA</p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Soluciones de cobro</li>
<li className="flex gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Terminales punto de venta</li>
<li className="flex gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Nómina empresarial</li>
<li className="flex gap-2"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Pasarelas de pago digitales</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#072146]">Conoce a las especialistas</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 text-center">
<div className="group">
<div className="w-32 h-32 mx-auto rounded-full bg-slate-100 border border-slate-200 mb-6 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
<iconify-icon className="text-6xl text-slate-300" icon="solar:user-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900">Diana Rodríguez</h3>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Especialista en estrategia empresarial y desarrollo de modelos de negocio.</p>
</div>
<div className="group">
<div className="w-32 h-32 mx-auto rounded-full bg-slate-100 border border-slate-200 mb-6 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
<iconify-icon className="text-6xl text-slate-300" icon="solar:user-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900">Karina González</h3>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Especialista BBVA en soluciones financieras integrales para PyMEs.</p>
</div>
<div className="group">
<div className="w-32 h-32 mx-auto rounded-full bg-slate-100 border border-slate-200 mb-6 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
<iconify-icon className="text-6xl text-slate-300" icon="solar:user-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900">Montserrat Gispert</h3>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Consultora y facilitadora en planeación estratégica y crecimiento empresarial.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#F5F7FA] border-y border-slate-200">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-[#072146] mb-10">Este taller es ideal para</h2>
<div className="flex flex-wrap justify-center gap-3 md:gap-4">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-[#0047FF]" icon="solar:check-circle-linear"></iconify-icon> Dueños de PyMEs</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-[#0047FF]" icon="solar:check-circle-linear"></iconify-icon> Emprendedores</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-[#0047FF]" icon="solar:check-circle-linear"></iconify-icon> Directores generales</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-[#0047FF]" icon="solar:check-circle-linear"></iconify-icon> Gerentes y mandos medios</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-[#0047FF]" icon="solar:check-circle-linear"></iconify-icon> Responsables de planeación</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-[#0047FF]" icon="solar:check-circle-linear"></iconify-icon> Responsables financieros</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-[#0047FF]" icon="solar:check-circle-linear"></iconify-icon> Clientes BBVA PyME</span>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-[#0047FF]" icon="solar:check-circle-linear"></iconify-icon> Clientes Idearia</span>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#072146] leading-tight">
                Más de <span className="text-[#0047FF] font-semibold">1,000 empresas</span> han fortalecido su estrategia de negocio mediante metodologías prácticas de diagnóstico y rentabilidad.
            </h2>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#072146]" id="registro">
<div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#0047FF] opacity-20 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Tu negocio puede crecer más cuando entiendes dónde está el valor.
            </h2>
<p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Reserva tu lugar y participa en este taller gratuito diseñado para ayudarte a tomar mejores decisiones estratégicas y financieras.
            </p>
<div className="flex flex-wrap justify-center gap-6 mb-12">
<div className="flex items-center gap-2 text-sm font-medium text-slate-200">
<iconify-icon className="text-xl opacity-70" icon="solar:calendar-linear"></iconify-icon>
                    Miércoles 1 de Julio
                </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-200">
<iconify-icon className="text-xl opacity-70" icon="solar:clock-circle-linear"></iconify-icon>
                    11:00 a.m. – 2:00 p.m.
                </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-200">
<iconify-icon className="text-xl opacity-70" icon="solar:laptop-linear"></iconify-icon>
                    Online por Zoom
                </div>
</div>
<a className="inline-block w-full sm:w-auto bg-[#0047FF] hover:bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all shadow-[0_8px_32px_rgba(0,71,255,0.4)] hover:shadow-[0_16px_48px_rgba(0,71,255,0.5)] hover:-translate-y-1" href="#">
                QUIERO REGISTRARME
            </a>
<p className="mt-6 text-sm text-slate-400">Serás redirigido al formulario seguro de Zoom.</p>
</div>
</section>

<footer className="py-12 bg-white border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-6">
<span className="text-xl font-semibold tracking-tight text-slate-900">IDEARIA</span>
<span className="w-px h-6 bg-slate-200"></span>
<span className="text-2xl font-semibold tracking-tight text-[#072146]">BBVA</span>
</div>
<div className="flex gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-[#0047FF] transition-colors" href="#">Aviso de privacidad</a>
<a className="hover:text-[#0047FF] transition-colors" href="#">Contacto</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#0047FF] hover:bg-blue-50 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#0047FF] hover:bg-blue-50 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div className="text-center mt-8 text-xs text-slate-400">
            © 2024 Idearia &amp; BBVA. Todos los derechos reservados.
        </div>
</footer>

    </>
  );
}
