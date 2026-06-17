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



      window.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) window.lucide.createIcons();
      });
    
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
      
<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
<div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<a aria-label="NIREJ inicio" className="flex items-center gap-3" href="#top">
<span className="text-2xl font-semibold tracking-tight text-red-700">
            NIREJ
          </span>
<span className="hidden h-6 w-px bg-slate-200 sm:block"></span>
<span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-slate-500 sm:block">
            Fianzas
          </span>
</a>
<nav aria-label="Navegación principal" className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
<a className="hover:text-red-700" href="#tipos">Tipos de fianza</a>
<a className="hover:text-red-700" href="#proceso">Proceso</a>
<a className="hover:text-red-700" href="#cobertura">Cobertura</a>
<a className="hover:text-red-700" href="#faq">FAQ</a>
<a className="hover:text-red-700" href="#cotizar">Cotizar</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden text-sm font-semibold text-slate-700 hover:text-red-700 sm:inline-flex" href="https://wa.me/520000000000">
            WhatsApp
          </a>
<a className="rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800" href="#cotizar">
            Cotizar fianza
          </a>
</div>
</div>
</header>
<main id="top">
<section className="relative overflow-hidden bg-white">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.12),transparent_35%),linear-gradient(180deg,#ffffff,rgba(248,250,252,0.95))]"></div>
<div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
<div className="flex flex-col justify-center">
<p className="inline-flex w-fit items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
<i className="h-4 w-4" data-lucide="file-check-2"></i>
              Fianzas para contratos, obra y empresas
            </p>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Cotiza tu fianza para contratos, obra o cumplimiento
            </h1>
<p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Recibe asesoría especializada para identificar la fianza que
              necesitas, revisar requisitos y avanzar con tu trámite de forma
              clara y rápida.
            </p>
<ul className="mt-7 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
<li className="flex gap-2">
<i className="mt-0.5 h-5 w-5 flex-none text-red-700" data-lucide="check-circle-2"></i>
                Fianzas de anticipo, cumplimiento, obra y arrendamiento.
              </li>
<li className="flex gap-2">
<i className="mt-0.5 h-5 w-5 flex-none text-red-700" data-lucide="check-circle-2"></i>
                Atención para personas físicas y morales.
              </li>
<li className="flex gap-2">
<i className="mt-0.5 h-5 w-5 flex-none text-red-700" data-lucide="check-circle-2"></i>
                Acompañamiento durante el proceso.
              </li>
<li className="flex gap-2">
<i className="mt-0.5 h-5 w-5 flex-none text-red-700" data-lucide="check-circle-2"></i>
                Cobertura nacional y atención en zonas clave.
              </li>
</ul>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800" href="#cotizar">
                Cotizar mi fianza
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-red-200 hover:text-red-700" href="https://wa.me/520000000000">
                Hablar con un asesor
              </a>
</div>
</div>
<div className="relative">
<div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-red-100 blur-3xl"></div>
<form className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8" id="cotizar">
<div className="mb-6">
<p className="text-sm font-medium text-red-700">
                  Formulario rápido
                </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Solicita tu cotización
                </h2>
<p className="mt-2 text-sm leading-6 text-slate-600">
                  Un asesor te orientará sobre el tipo de fianza, requisitos y
                  próximos pasos.
                </p>
</div>
<div className="grid gap-4">
<label className="grid gap-2 text-sm font-medium text-slate-700">
                  Nombre
                  <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" name="nombre" placeholder="Tu nombre" type="text"/>
</label>
<label className="grid gap-2 text-sm font-medium text-slate-700">
                  Teléfono
                  <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" name="telefono" placeholder="55 0000 0000" type="tel"/>
</label>
<label className="grid gap-2 text-sm font-medium text-slate-700">
                  Empresa
                  <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" name="empresa" placeholder="Nombre de empresa" type="text"/>
</label>
<label className="grid gap-2 text-sm font-medium text-slate-700">
                  Tipo de fianza
                  <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" name="tipo">
<option>Selecciona una opción</option>
<option>Anticipo</option>
<option>Cumplimiento</option>
<option>Obra</option>
<option>Arrendamiento</option>
<option>Fiscal o judicial</option>
</select>
</label>
<label className="grid gap-2 text-sm font-medium text-slate-700">
                  Ciudad / Estado
                  <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" name="ciudad" placeholder="Ej. Puebla, Puebla" type="text"/>
</label>
</div>
<button className="mt-6 w-full rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800" type="submit">
                Recibir cotización
              </button>
</form>
</div>
</div>
</section>
<section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl rounded-3xl border border-red-100 bg-red-50 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
<div className="flex gap-4">
<div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-white text-red-700 shadow-sm">
<i className="h-6 w-6" data-lucide="clock-3"></i>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                ¿Tienes una fecha límite para entregar tu fianza?
              </h2>
<p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
                Sabemos que una fianza puede ser clave para avanzar con un
                contrato, licitación, anticipo u obra. Te ayudamos a identificar
                qué fianza necesitas y qué información debes preparar para
                iniciar tu trámite.
              </p>
<div className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-red-700" data-lucide="check"></i>
                  Identifica tu tipo de fianza.
                </span>
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-red-700" data-lucide="check"></i>
                  Revisa requisitos.
                </span>
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-red-700" data-lucide="check"></i>
                  Recibe orientación personalizada.
                </span>
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-red-700" data-lucide="check"></i>
                  Avanza con mayor claridad.
                </span>
</div>
</div>
</div>
<a className="mt-6 inline-flex flex-none items-center justify-center rounded-full bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800 lg:mt-0" href="#cotizar">
            Quiero asesoría para mi fianza
          </a>
</div>
</section>
<section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="tipos">
<div className="mx-auto max-w-7xl">
<div className="max-w-3xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Elige el tipo de fianza que necesitas
            </h2>
<p className="mt-4 text-base leading-7 text-slate-600">
              Selecciona la opción más cercana a tu trámite. Si no sabes cuál
              necesitas, podemos orientarte.
            </p>
</div>
<div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<i className="h-8 w-8 text-red-700" data-lucide="wallet-cards"></i>
<h3 className="mt-5 text-lg font-semibold text-slate-950">
                Fianza de anticipo
              </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Para garantizar la correcta aplicación de anticipos recibidos en
                contratos.
              </p>
<a className="mt-5 inline-flex text-sm font-semibold text-red-700" href="#cotizar">
                Cotizar anticipo
              </a>
</article>
<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<i className="h-8 w-8 text-red-700" data-lucide="badge-check"></i>
<h3 className="mt-5 text-lg font-semibold text-slate-950">
                Fianza de cumplimiento
              </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Para garantizar la ejecución completa y oportuna de un contrato.
              </p>
<a className="mt-5 inline-flex text-sm font-semibold text-red-700" href="#cotizar">
                Cotizar cumplimiento
              </a>
</article>
<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<i className="h-8 w-8 text-red-700" data-lucide="hard-hat"></i>
<h3 className="mt-5 text-lg font-semibold text-slate-950">
                Fianzas de obra
              </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Para proyectos de construcción, obra pública, obra privada o
                proveeduría.
              </p>
<a className="mt-5 inline-flex text-sm font-semibold text-red-700" href="#cotizar">
                Cotizar obra
              </a>
</article>
<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<i className="h-8 w-8 text-red-700" data-lucide="home"></i>
<h3 className="mt-5 text-lg font-semibold text-slate-950">
                Fianzas de arrendamiento
              </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Para respaldar obligaciones relacionadas con contratos de renta
                o arrendamiento.
              </p>
<a className="mt-5 inline-flex text-sm font-semibold text-red-700" href="#cotizar">
                Cotizar arrendamiento
              </a>
</article>
<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<i className="h-8 w-8 text-red-700" data-lucide="scale"></i>
<h3 className="mt-5 text-lg font-semibold text-slate-950">
                Fianzas fiscales o judiciales
              </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Para obligaciones fiscales, legales o procesos específicos que
                requieren garantía.
              </p>
<a className="mt-5 inline-flex text-sm font-semibold text-red-700" href="#cotizar">
                Solicitar asesoría
              </a>
</article>
<article className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
<i className="h-8 w-8 text-red-700" data-lucide="circle-help"></i>
<h3 className="mt-5 text-lg font-semibold text-slate-950">
                No sé qué fianza necesito
              </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Un asesor puede ayudarte a identificar el tipo de fianza según
                tu contrato o requisito.
              </p>
<a className="mt-5 inline-flex text-sm font-semibold text-red-700" href="#cotizar">
                Ayúdame a elegir
              </a>
</article>
</div>
</div>
</section>
<section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
<div>
<p className="text-sm font-medium text-red-700">Cotización completa</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Solicita tu cotización
            </h2>
<p className="mt-4 text-base leading-7 text-slate-600">
              Compártenos los datos principales de tu fianza y un asesor te
              orientará sobre los siguientes pasos.
            </p>
<p className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
              Al enviar tus datos, un asesor podrá orientarte sobre el tipo de
              fianza, requisitos y próximos pasos.
            </p>
</div>
<form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
<div className="grid gap-4 sm:grid-cols-2">
<input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100" placeholder="Nombre completo"/>
<input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100" placeholder="Empresa"/>
<input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100" placeholder="Teléfono"/>
<input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100" placeholder="Correo" type="email"/>
<input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100" placeholder="Ciudad / Estado"/>
<select className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100">
<option>Tipo de fianza requerida</option>
<option>Anticipo</option>
<option>Cumplimiento</option>
<option>Obra</option>
<option>Arrendamiento</option>
<option>Fiscal o judicial</option>
<option>No sé qué fianza necesito</option>
</select>
<input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100" placeholder="Monto aproximado del contrato"/>
<input aria-label="Fecha límite para entregar la fianza" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100" type="date"/>
<select className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 sm:col-span-2">
<option>¿Ya cuentas con documentación?</option>
<option>Sí</option>
<option>No</option>
<option>Parcialmente</option>
</select>
<textarea className="min-h-28 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 sm:col-span-2" placeholder="Comentarios adicionales"></textarea>
</div>
<button className="mt-6 rounded-full bg-red-700 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800" type="submit">
              Recibir cotización
            </button>
</form>
</div>
</section>
<section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Fianzas para empresas que necesitan cumplir con contratos,
              licitaciones y proyectos
            </h2>
<p className="mt-4 text-base leading-7 text-slate-600">
              NIREJ acompaña a empresas, contratistas y personas físicas que
              requieren una fianza para respaldar obligaciones contractuales,
              administrativas o comerciales.
            </p>
<a className="mt-8 inline-flex rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800" href="https://wa.me/520000000000">
              Hablar con un asesor especializado
            </a>
</div>
<div className="grid gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2">
<span className="flex gap-2 text-sm text-slate-700">
<i className="h-5 w-5 text-red-700" data-lucide="check"></i>
              Participación en licitaciones.
            </span>
<span className="flex gap-2 text-sm text-slate-700">
<i className="h-5 w-5 text-red-700" data-lucide="check"></i>
              Contratos de obra.
            </span>
<span className="flex gap-2 text-sm text-slate-700">
<i className="h-5 w-5 text-red-700" data-lucide="check"></i>
              Anticipos recibidos.
            </span>
<span className="flex gap-2 text-sm text-slate-700">
<i className="h-5 w-5 text-red-700" data-lucide="check"></i>
              Cumplimiento de obligaciones.
            </span>
<span className="flex gap-2 text-sm text-slate-700">
<i className="h-5 w-5 text-red-700" data-lucide="check"></i>
              Proyectos de construcción.
            </span>
<span className="flex gap-2 text-sm text-slate-700">
<i className="h-5 w-5 text-red-700" data-lucide="check"></i>
              Proveeduría de bienes o servicios.
            </span>
<span className="flex gap-2 text-sm text-slate-700">
<i className="h-5 w-5 text-red-700" data-lucide="check"></i>
              Arrendamientos.
            </span>
<span className="flex gap-2 text-sm text-slate-700">
<i className="h-5 w-5 text-red-700" data-lucide="check"></i>
              Requisitos fiscales o judiciales.
            </span>
</div>
</div>
</section>
<section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" id="proceso">
<div className="mx-auto max-w-7xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Cotizar tu fianza puede ser más claro
          </h2>
<div className="mt-10 grid gap-5 md:grid-cols-3">
<article className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-sm font-semibold text-white">
                1
              </span>
<i className="mt-6 h-8 w-8 text-red-700" data-lucide="clipboard-list"></i>
<h3 className="mt-4 text-lg font-semibold">Solicita tu cotización</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Completa el formulario con los datos principales de tu fianza,
                contrato o proyecto.
              </p>
</article>
<article className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-sm font-semibold text-white">
                2
              </span>
<i className="mt-6 h-8 w-8 text-red-700" data-lucide="messages-square"></i>
<h3 className="mt-4 text-lg font-semibold">
                Recibe asesoría especializada
              </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Un asesor revisa tu solicitud y te orienta sobre requisitos,
                documentación y tipo de fianza.
              </p>
</article>
<article className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-sm font-semibold text-white">
                3
              </span>
<i className="mt-6 h-8 w-8 text-red-700" data-lucide="circle-check-big"></i>
<h3 className="mt-4 text-lg font-semibold">Avanza con tu trámite</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Da seguimiento para cumplir con tu contrato, licitación u
                obligación con mayor claridad.
              </p>
</article>
</div>
<a className="mt-9 inline-flex rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800" href="#cotizar">
            Iniciar mi cotización
          </a>
</div>
</section>
<section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
<div>
<p className="inline-flex rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
                Asesoría especializada en fianzas
              </p>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Asesoría clara para tomar decisiones con confianza
              </h2>
<p className="mt-4 text-base leading-7 text-slate-600">
                Elegir una fianza no debería sentirse confuso. En NIREJ recibes
                acompañamiento para entender qué necesitas, qué documentación
                preparar y cómo avanzar en tu proceso.
              </p>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                Atención para empresas y contratistas.
              </div>
<div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                Soluciones para fianzas, seguros e inversión.
              </div>
<div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                Acompañamiento personalizado.
              </div>
<div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                Claridad en requisitos y proceso.
              </div>
<div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                Cobertura nacional.
              </div>
<div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                Atención en zonas clave.
              </div>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" id="cobertura">
<div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Atención en zonas clave y cobertura nacional
          </h2>
<p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Brindamos atención para empresas, contratistas y personas físicas
            que requieren fianzas para contratos, licitaciones, obra,
            cumplimiento o anticipo.
          </p>
<div className="mt-8 flex flex-wrap gap-3">
<span className="rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white">
              CDMX
            </span>
<span className="rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white">
              Puebla
            </span>
<span className="rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white">
              Querétaro
            </span>
<span className="rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white">
              Oaxaca
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Hidalgo
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Veracruz
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Yucatán
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Quintana Roo
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Nuevo León
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Sonora
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Baja California
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Tabasco
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Campeche
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              San Luis Potosí
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Durango
            </span>
<span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Aguascalientes
            </span>
</div>
<a className="mt-8 inline-flex rounded-full border border-red-200 bg-red-50 px-6 py-3 text-sm font-semibold text-red-700 hover:bg-red-100" href="#cotizar">
            Consultar atención en mi estado
          </a>
</div>
</section>
<section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto max-w-5xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            ¿Qué fianza necesitas?
          </h2>
<div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
<div className="grid grid-cols-2 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700">
<span>Si necesitas…</span>
<span>Probablemente buscas…</span>
</div>
<div className="divide-y divide-slate-200 text-sm text-slate-700">
<div className="grid grid-cols-2 gap-4 px-5 py-4">
<span>Garantizar dinero recibido por adelantado</span>
<strong>Fianza de anticipo</strong>
</div>
<div className="grid grid-cols-2 gap-4 px-5 py-4">
<span>Garantizar que cumplirás un contrato</span>
<strong>Fianza de cumplimiento</strong>
</div>
<div className="grid grid-cols-2 gap-4 px-5 py-4">
<span>Respaldar una obra o proyecto de construcción</span>
<strong>Fianzas de obra</strong>
</div>
<div className="grid grid-cols-2 gap-4 px-5 py-4">
<span>Participar en una licitación</span>
<strong>Fianza de licitación</strong>
</div>
<div className="grid grid-cols-2 gap-4 px-5 py-4">
<span>Respaldar calidad posterior a la entrega</span>
<strong>Fianza de buena calidad</strong>
</div>
<div className="grid grid-cols-2 gap-4 px-5 py-4">
<span>No sabes qué te pidieron</span>
<strong>Asesoría para identificar fianza</strong>
</div>
</div>
</div>
<a className="mt-8 inline-flex rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800" href="#cotizar">
            Ayúdame a elegir mi fianza
          </a>
</div>
</section>
<section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" id="faq">
<div className="mx-auto max-w-4xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Preguntas frecuentes sobre fianzas
          </h2>
<div className="mt-8 space-y-3">
<details className="rounded-2xl border border-slate-200 bg-white p-5">
<summary className="cursor-pointer font-semibold text-slate-950">
                ¿Qué tipo de fianza necesito?
              </summary>
<p className="mt-3 text-sm leading-6 text-slate-600">
                Depende del contrato, licitación, obligación o requisito que
                debas cumplir. Puedes solicitar asesoría para identificar la
                fianza correcta.
              </p>
</details>
<details className="rounded-2xl border border-slate-200 bg-white p-5">
<summary className="cursor-pointer font-semibold text-slate-950">
                ¿Qué es una fianza de anticipo?
              </summary>
<p className="mt-3 text-sm leading-6 text-slate-600">
                Es una fianza que garantiza la correcta aplicación de un
                anticipo recibido dentro de un contrato.
              </p>
</details>
<details className="rounded-2xl border border-slate-200 bg-white p-5">
<summary className="cursor-pointer font-semibold text-slate-950">
                ¿Qué es una fianza de cumplimiento?
              </summary>
<p className="mt-3 text-sm leading-6 text-slate-600">
                Es una fianza que respalda la ejecución completa y oportuna de
                una obligación contractual.
              </p>
</details>
<details className="rounded-2xl border border-slate-200 bg-white p-5">
<summary className="cursor-pointer font-semibold text-slate-950">
                ¿Qué documentos necesito para cotizar una fianza?
              </summary>
<p className="mt-3 text-sm leading-6 text-slate-600">
                Los requisitos pueden variar según el tipo de fianza, monto,
                empresa, contrato y nivel de riesgo.
              </p>
</details>
<details className="rounded-2xl border border-slate-200 bg-white p-5">
<summary className="cursor-pointer font-semibold text-slate-950">
                ¿Puedo cotizar si tengo una fecha límite cercana?
              </summary>
<p className="mt-3 text-sm leading-6 text-slate-600">
                Sí. Comparte la fecha límite en el formulario para revisar tu
                caso con mayor contexto.
              </p>
</details>
<details className="rounded-2xl border border-slate-200 bg-white p-5">
<summary className="cursor-pointer font-semibold text-slate-950">
                ¿Atienden empresas y personas físicas?
              </summary>
<p className="mt-3 text-sm leading-6 text-slate-600">
                Sí. La atención puede ser para personas físicas, personas
                morales, contratistas, proveedores o empresas.
              </p>
</details>
</div>
<a className="mt-8 inline-flex rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800" href="#cotizar">
            Cotizar mi fianza
          </a>
</div>
</section>
<section className="bg-red-800 px-4 py-16 text-white sm:px-6 lg:px-8">
<div className="mx-auto max-w-5xl text-center">
<p className="text-2xl font-semibold tracking-tight">NIREJ</p>
<h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Listo para cotizar tu fianza?
          </h2>
<p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-red-50">
            Cuéntanos qué fianza necesitas o qué requisito te solicitaron. Un
            asesor de NIREJ puede ayudarte a revisar tu caso y los próximos
            pasos.
          </p>
<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
<a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-red-800 shadow-sm hover:bg-red-50" href="#cotizar">
              Cotizar mi fianza
            </a>
<a className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10" href="https://wa.me/520000000000">
              Hablar por WhatsApp
            </a>
</div>
</div>
</section>
</main>
<footer className="bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
<div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
<p>
<span className="font-semibold text-white">NIREJ</span>
          · Fianzas, seguros e inversión
        </p>
<p>Atención nacional para cotización de fianzas.</p>
</div>
</footer>
<div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white p-2 shadow-2xl sm:hidden">
<a className="mx-1 rounded-full bg-red-700 px-4 py-3 text-center text-sm font-semibold text-white" href="#cotizar">
        Cotizar
      </a>
<a className="mx-1 rounded-full border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-800" href="https://wa.me/520000000000">
        WhatsApp
      </a>
</div>


    </>
  );
}
