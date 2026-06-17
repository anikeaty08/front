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
      
<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<a className="flex items-center gap-3" href="#">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
<span className="text-sm font-semibold tracking-tight">IM</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-950">IMEEC</p>
<p className="text-xs text-slate-500">Evaluación · Certificación · Capacitación</p>
</div>
</a>
<nav className="hidden items-center gap-8 lg:flex">
<a className="text-sm font-medium text-slate-600 hover:text-slate-950" href="#servicios">Servicios</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-950" href="#proceso">Proceso</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-950" href="#sectores">Sectores</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-950" href="#recursos">Recursos</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-950" href="#contacto">Contacto</a>
</nav>
<div className="hidden items-center gap-3 lg:flex">
<a className="text-sm font-medium text-slate-600 hover:text-slate-950" href="#">Acceso clientes</a>
<a className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800" href="#contacto">
          Solicitar cotización
          <iconify-icon height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
<button aria-label="Abrir menú" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden">
<iconify-icon height="22" icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
</button>
</div>
</header>
<main>
<section className="relative overflow-hidden border-b border-slate-200">
<div className="absolute inset-0 -z-10" style={{background: 'radial-gradient(circle at 20% 10%, rgba(14, 165, 233, 0.16), transparent 28%), radial-gradient(circle at 85% 20%, rgba(15, 23, 42, 0.10), transparent 26%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'}}></div>
<div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8 lg:py-24">
<div className="lg:col-span-7">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700">
<span className="h-2 w-2 rounded-full bg-sky-500"></span>
            Propuesta de rediseño institucional
          </div>
<h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Confianza técnica para organizaciones que necesitan demostrar cumplimiento.
          </h1>
<p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Una experiencia digital más clara, moderna y orientada a conversión para comunicar servicios de evaluación, certificación, inspección y formación especializada.
          </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800" href="#contacto">
              Iniciar solicitud
              <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-400" href="#servicios">
              Ver servicios
              <iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</a>
</div>
<div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-slate-200 pt-8">
<div>
<p className="text-2xl font-semibold tracking-tight text-slate-950">360°</p>
<p className="mt-1 text-xs leading-5 text-slate-500">Acompañamiento de evaluación integral</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-slate-950">ISO</p>
<p className="mt-1 text-xs leading-5 text-slate-500">Enfoque en normas y sistemas de gestión</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-slate-950">Mx</p>
<p className="mt-1 text-xs leading-5 text-slate-500">Atención para empresas e instituciones</p>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative">
<div className="absolute -inset-4 -z-10 rounded-[2rem] bg-sky-100/60 blur-2xl"></div>
<div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
<div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-semibold text-slate-950">Panel de solicitud</p>
<p className="text-xs text-slate-500">Seguimiento del proceso</p>
</div>
<span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Activo</span>
</div>
</div>
<div className="p-5">
<div className="rounded-2xl bg-slate-950 p-5 text-white">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs text-slate-300">Servicio seleccionado</p>
<h2 className="mt-2 text-xl font-semibold tracking-tight">Certificación de sistema de gestión</h2>
</div>
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10">
<iconify-icon height="24" icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-2/3 rounded-full bg-sky-400"></div>
</div>
<div className="mt-3 flex justify-between text-xs text-slate-300">
<span>Diagnóstico</span>
<span>66%</span>
</div>
</div>
<div className="mt-5 space-y-3">
<div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
<iconify-icon height="22" icon="solar:clipboard-check-linear" width="22"></iconify-icon>
</div>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium text-slate-950">Revisión documental</p>
<p className="text-xs text-slate-500">Validación inicial completada</p>
</div>
<iconify-icon className="text-emerald-500" height="22" icon="solar:check-circle-linear" width="22"></iconify-icon>
</div>
<div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
<iconify-icon height="22" icon="solar:calendar-linear" width="22"></iconify-icon>
</div>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium text-slate-950">Auditoría programada</p>
<p className="text-xs text-slate-500">Confirmación de agenda pendiente</p>
</div>
<span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">Próximo</span>
</div>
<div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
<iconify-icon height="22" icon="solar:medal-ribbons-star-linear" width="22"></iconify-icon>
</div>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium text-slate-950">Emisión de certificado</p>
<p className="text-xs text-slate-500">Disponible al concluir dictamen</p>
</div>
<span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">Pendiente</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-b border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
<div className="grid gap-4 md:grid-cols-4">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">Enfoque</p>
<p className="mt-2 text-sm font-semibold text-slate-950">Cumplimiento normativo</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">Atención</p>
<p className="mt-2 text-sm font-semibold text-slate-950">Asesoría clara y trazable</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">Proceso</p>
<p className="mt-2 text-sm font-semibold text-slate-950">Solicitudes digitalizadas</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">Resultado</p>
<p className="mt-2 text-sm font-semibold text-slate-950">Evidencia para competir</p>
</div>
</div>
</div>
</section>
<section className="bg-white py-16 sm:py-20" id="servicios">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<p className="text-sm font-semibold text-sky-600">Servicios principales</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Una arquitectura de servicios pensada para encontrar rápido lo que se necesita.
          </h2>
<p className="mt-4 text-base leading-7 text-slate-600">
            La propuesta organiza la oferta por intención del usuario: certificarse, evaluarse, capacitarse o solicitar información técnica.
          </p>
</div>
<div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
<article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
<iconify-icon height="26" icon="solar:shield-check-linear" width="26"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">Certificación</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">
              Validación independiente para sistemas, procesos y competencias con comunicación transparente de requisitos.
            </p>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-950" href="#">
              Conocer más
              <iconify-icon height="17" icon="solar:arrow-right-linear" width="17"></iconify-icon>
</a>
</article>
<article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
<iconify-icon height="26" icon="solar:magnifer-linear" width="26"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">Evaluación</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">
              Diagnósticos, auditorías y revisión documental para identificar brechas y oportunidades de cumplimiento.
            </p>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-950" href="#">
              Conocer más
              <iconify-icon height="17" icon="solar:arrow-right-linear" width="17"></iconify-icon>
</a>
</article>
<article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
<iconify-icon height="26" icon="solar:case-round-linear" width="26"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">Inspección</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">
              Servicios técnicos para confirmar condiciones, evidencias y criterios aplicables en campo o documentación.
            </p>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-950" href="#">
              Conocer más
              <iconify-icon height="17" icon="solar:arrow-right-linear" width="17"></iconify-icon>
</a>
</article>
<article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
<iconify-icon height="26" icon="solar:notebook-bookmark-linear" width="26"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">Capacitación</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">
              Cursos y talleres para fortalecer competencias internas antes, durante y después del proceso.
            </p>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-950" href="#">
              Conocer más
              <iconify-icon height="17" icon="solar:arrow-right-linear" width="17"></iconify-icon>
</a>
</article>
</div>
</div>
</section>
<section className="bg-slate-950 py-16 text-white sm:py-20" id="proceso">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-12 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<p className="text-sm font-semibold text-sky-300">Proceso simplificado</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              De la solicitud al dictamen, con pasos visibles.
            </h2>
<p className="mt-4 text-base leading-7 text-slate-300">
              El rediseño propone explicar cada etapa con lenguaje directo para reducir fricción, llamadas repetitivas y dudas sobre documentación.
            </p>
<a className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100" href="#contacto">
              Solicitar orientación
              <iconify-icon height="18" icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
<span className="text-sm font-semibold text-sky-300">01</span>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Solicitud inicial</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">El usuario selecciona servicio, sector y alcance para recibir una ruta clara.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
<span className="text-sm font-semibold text-sky-300">02</span>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Revisión técnica</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">Se validan documentos, requisitos aplicables y condiciones del proyecto.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
<span className="text-sm font-semibold text-sky-300">03</span>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Evaluación o auditoría</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">Se ejecutan las actividades programadas con evidencia trazable y seguimiento.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
<span className="text-sm font-semibold text-sky-300">04</span>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Dictamen y certificado</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">Se comunica el resultado y se facilita la descarga o consulta de vigencia.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 py-16 sm:py-20" id="sectores">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 lg:items-end">
<div className="lg:col-span-7">
<p className="text-sm font-semibold text-sky-600">Sectores atendidos</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Contenido organizado por industria para acelerar decisiones.
            </h2>
</div>
<p className="text-base leading-7 text-slate-600 lg:col-span-5">
            Cada sector puede tener páginas internas con servicios relacionados, requisitos frecuentes, documentos descargables y contacto especializado.
          </p>
</div>
<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<iconify-icon className="text-sky-600" height="30" icon="solar:buildings-3-linear" width="30"></iconify-icon>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">Empresas e industria</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Sistemas de gestión, auditorías, mejora operativa y cumplimiento documentado.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<iconify-icon className="text-sky-600" height="30" icon="solar:health-linear" width="30"></iconify-icon>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">Salud y bienestar</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Procesos críticos, controles, trazabilidad y formación especializada.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<iconify-icon className="text-sky-600" height="30" icon="solar:leaf-linear" width="30"></iconify-icon>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">Medio ambiente</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Gestión ambiental, evaluación de cumplimiento y programas de mejora.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<iconify-icon className="text-sky-600" height="30" icon="solar:chef-hat-linear" width="30"></iconify-icon>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">Alimentos</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Buenas prácticas, inocuidad, control documental y evaluación de procesos.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<iconify-icon className="text-sky-600" height="30" icon="solar:city-linear" width="30"></iconify-icon>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">Gobierno e instituciones</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Programas de cumplimiento, transparencia técnica y fortalecimiento institucional.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<iconify-icon className="text-sky-600" height="30" icon="solar:global-linear" width="30"></iconify-icon>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">Comercio y servicios</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Estandarización, confianza comercial y diferenciación ante clientes.</p>
</div>
</div>
</div>
</section>
<section className="bg-white py-16 sm:py-20" id="recursos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8 lg:p-10">
<div className="grid gap-10 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-5">
<p className="text-sm font-semibold text-sky-600">Centro de recursos</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Documentos, guías y consultas en un solo lugar.
              </h2>
<p className="mt-4 text-base leading-7 text-slate-600">
                Una sección de apoyo reduce dudas antes del contacto comercial y ayuda a preparar mejor cada solicitud.
              </p>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4 sm:grid-cols-2">
<a className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200/70" href="#">
<div className="flex items-center justify-between gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">
<iconify-icon height="24" icon="solar:file-text-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-950" height="19" icon="solar:arrow-right-up-linear" width="19"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-semibold text-slate-950">Formatos de solicitud</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">Descargas por tipo de servicio.</p>
</a>
<a className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200/70" href="#">
<div className="flex items-center justify-between gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">
<iconify-icon height="24" icon="solar:question-circle-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-950" height="19" icon="solar:arrow-right-up-linear" width="19"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-semibold text-slate-950">Preguntas frecuentes</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">Requisitos, tiempos y alcances.</p>
</a>
<a className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200/70" href="#">
<div className="flex items-center justify-between gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">
<iconify-icon height="24" icon="solar:card-search-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-950" height="19" icon="solar:arrow-right-up-linear" width="19"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-semibold text-slate-950">Consulta de certificados</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">Verificación pública de vigencia.</p>
</a>
<a className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200/70" href="#">
<div className="flex items-center justify-between gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">
<iconify-icon height="24" icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-950" height="19" icon="solar:arrow-right-up-linear" width="19"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-semibold text-slate-950">Calendario de cursos</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">Capacitación próxima disponible.</p>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20" id="contacto">
<div className="absolute inset-0 opacity-70" style={{background: 'radial-gradient(circle at 78% 18%, rgba(14, 165, 233, 0.28), transparent 30%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.18), transparent 28%)'}}></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-7">
<p className="text-sm font-semibold text-sky-300">Contacto</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Convierte la página en un canal real de solicitudes calificadas.
            </h2>
<p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              La propuesta prioriza claridad, confianza y acción: menos navegación confusa, más rutas directas hacia cotización, orientación y consulta técnica.
            </p>
</div>
<div className="lg:col-span-5">
<form className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl sm:p-8">
<div className="grid gap-4">
<div>
<label className="text-sm font-medium text-slate-700">Nombre</label>
<input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100" placeholder="Tu nombre" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-slate-700">Correo</label>
<input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100" placeholder="correo@empresa.com" type="email"/>
</div>
<div>
<label className="text-sm font-medium text-slate-700">Servicio de interés</label>
<select className="mt-2 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100">
<option>Certificación</option>
<option>Evaluación</option>
<option>Inspección</option>
<option>Capacitación</option>
</select>
</div>
<div>
<label className="text-sm font-medium text-slate-700">Mensaje</label>
<textarea className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100" placeholder="Cuéntanos qué necesitas evaluar o certificar" rows="4"></textarea>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800" type="button">
                  Enviar solicitud
                  <iconify-icon height="18" icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid gap-10 md:grid-cols-4">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
<span className="text-sm font-semibold tracking-tight">IM</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-950">IMEEC</p>
<p className="text-xs text-slate-500">Propuesta institucional</p>
</div>
</div>
<p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
            Diseño orientado a confianza, claridad técnica y generación de solicitudes para servicios de evaluación, certificación y capacitación.
          </p>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-950">Navegación</h3>
<ul className="mt-4 space-y-3 text-sm text-slate-600">
<li><a className="hover:text-slate-950" href="#servicios">Servicios</a></li>
<li><a className="hover:text-slate-950" href="#proceso">Proceso</a></li>
<li><a className="hover:text-slate-950" href="#sectores">Sectores</a></li>
<li><a className="hover:text-slate-950" href="#recursos">Recursos</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-950">Contacto</h3>
<ul className="mt-4 space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon height="17" icon="solar:letter-linear" width="17"></iconify-icon>
              contacto@imeec.org.mx
            </li>
<li className="flex items-center gap-2">
<iconify-icon height="17" icon="solar:phone-linear" width="17"></iconify-icon>
              Atención comercial
            </li>
<li className="flex items-center gap-2">
<iconify-icon height="17" icon="solar:map-point-linear" width="17"></iconify-icon>
              México
            </li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
<p>© 2025 IMEEC. Propuesta conceptual de rediseño.</p>
<div className="flex gap-4">
<a className="hover:text-slate-950" href="#">Privacidad</a>
<a className="hover:text-slate-950" href="#">Términos</a>
<a className="hover:text-slate-950" href="#">Accesibilidad</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
