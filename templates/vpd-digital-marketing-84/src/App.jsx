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
      

<header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="font-medium tracking-tighter text-base flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-100 flex items-center justify-center text-[#09090b]">
<iconify-icon className="text-sm" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
          VPD.
        </div>
<nav className="hidden md:flex gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#soluciones">
            Soluciones
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#expertise">
            Expertise
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#precios">
            Precios
          </a>
</nav>
<a className="bg-zinc-100 text-zinc-900 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors inline-block text-center" href="https://wa.me/528110125178?text=Hola%2C%20quiero%20agendar%20una%20consultor%C3%ADa%20con%20VPD" target="_blank">
          Agendar Consultoría
        </a>
</div>
</header>

<main className="flex-grow pt-32 pb-20 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"></div>
<section className="px-6 text-center max-w-4xl mx-auto flex flex-col items-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:confetti-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
          Especial Vallarta Pride
        </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500 mb-6 leading-tight max-w-3xl">
          Domina la semana más fuerte con contenido estratégico.
        </h1>
<p className="text-sm md:text-base text-zinc-400 mb-10 max-w-xl font-normal leading-relaxed mx-auto">
          Paquetes digitales relámpago para bares, hoteles boutique y
          restaurantes locales. Estrategia, diseño e IA combinados para captar
          turismo LGBT sin complicaciones.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-zinc-100 text-zinc-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#precios">
            Ver Paquetes
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="precios">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
            Paquetes Digitales Express
          </h2>
<p className="text-sm text-zinc-400 font-normal">
            Entregables fijos y rápidos, gestionados 100% online.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

<div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-2xl p-8 flex flex-col hover:border-zinc-700 transition-colors relative">
<div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-6">
<iconify-icon className="text-lg" icon="solar:gallery-edit-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 text-zinc-100">
              Pride Content Pack
            </h3>
<p className="text-xs text-zinc-400 mb-6 flex-grow leading-relaxed">
              Contenido visual y escrito listo para tus redes, adaptado a la
              identidad de tu negocio local.
            </p>
<div className="mb-6">
<span className="text-2xl font-semibold tracking-tight">$150</span>
<span className="text-xs text-zinc-500 font-normal">USD</span>
</div>
<ul className="space-y-3 mb-8 text-xs text-zinc-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>10–20 posts listos para publicar</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Copys persuasivos + Imágenes IA</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Plantillas editables de Canva</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Calendario para la semana Pride</span>
</li>
</ul>
<a className="w-full py-2 rounded-lg bg-zinc-900 text-zinc-300 text-xs font-medium hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-zinc-700 block text-center" href="https://wa.me/528110125178?text=Hola%2C%20quiero%20contratar%20el%20Pride%20Content%20Pack%20%28%24150%20USD%29" target="_blank">
              Contratar Pack
            </a>
</div>

<div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex flex-col relative overflow-hidden shadow-2xl shadow-black/50">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-50"></div>
<div className="flex justify-between items-start mb-6">
<div className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon className="text-lg" icon="solar:window-frame-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-[10px] tracking-wide rounded-md font-medium border border-zinc-700">
                Más solicitado
              </span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 text-zinc-100">
              Pride Landing Express
            </h3>
<p className="text-xs text-zinc-400 mb-6 flex-grow leading-relaxed">
              Página simple generada rápidamente para centralizar información y
              asegurar ventas de boletos.
            </p>
<div className="mb-6">
<span className="text-2xl font-semibold tracking-tight">$250</span>
<span className="text-xs text-zinc-500 font-normal">USD</span>
</div>
<ul className="space-y-3 mb-8 text-xs text-zinc-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Diseño optimizado de alta conversión</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Line up de DJs, horarios y mapa interactivo</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Integración directa con Eventbrite</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Módulos de Dress code &amp; FAQs</span>
</li>
</ul>
<a className="w-full py-2 rounded-lg bg-zinc-100 text-zinc-900 text-xs font-medium hover:bg-zinc-200 transition-colors block text-center" href="https://wa.me/528110125178?text=Hola%2C%20quiero%20contratar%20el%20Pride%20Landing%20Express%20%28%24250%20USD%29" target="_blank">
              Contratar Landing
            </a>
</div>

<div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-2xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-6">
<iconify-icon className="text-lg" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 text-zinc-100">
              Pride Ads Starter
            </h3>
<p className="text-xs text-zinc-400 mb-6 flex-grow leading-relaxed">
              Campaña publicitaria enfocada exclusivamente en atraer al turista
              LGBT que visita la ciudad.
            </p>
<div className="mb-6">
<span className="text-2xl font-semibold tracking-tight">$400</span>
<span className="text-xs text-zinc-500 font-normal">USD</span>
</div>
<ul className="space-y-3 mb-8 text-xs text-zinc-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Set de 3–5 anuncios (IG &amp; Facebook)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Segmentación por intereses LGBT</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Filtrado por países emisores clave</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Optimización de presupuesto</span>
</li>
</ul>
<a className="w-full py-2 rounded-lg bg-zinc-900 text-zinc-300 text-xs font-medium hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-zinc-700 block text-center" href="https://wa.me/528110125178?text=Hola%2C%20quiero%20contratar%20el%20Pride%20Ads%20Starter%20%28%24400%20USD%29" target="_blank">
              Contratar Ads
            </a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-900/20 border-y border-zinc-800/40" id="expertise">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-14 max-w-2xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight mb-4">
              El aliado integral para tu negocio local
            </h2>
<p className="text-sm text-zinc-400">
              Desarrollamos soluciones utilizando inteligencia artificial para
              ofrecer márgenes eficientes, respaldados por un profundo
              conocimiento del nicho.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
<div className="flex flex-col items-center text-center">
<div className="mb-4 text-zinc-500">
<iconify-icon className="text-3xl" icon="solar:map-point-wave-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium mb-2 text-zinc-200">
                Turismo LGBT
              </h4>
<p className="text-xs text-zinc-400 leading-relaxed">
                Entendemos la dinámica del Vallarta Pride, adaptando tu mensaje
                para resonar con exactitud ante esta audiencia específica.
              </p>
</div>
<div className="flex flex-col items-center text-center">
<div className="mb-4 text-zinc-500">
<iconify-icon className="text-3xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium mb-2 text-zinc-200">
                Visión Legal
              </h4>
<p className="text-xs text-zinc-400 leading-relaxed">
                Tus promociones, landings y captura de datos operan bajo los
                marcos legales de comercio electrónico y privacidad.
              </p>
</div>
<div className="flex flex-col items-center text-center">
<div className="mb-4 text-zinc-500">
<iconify-icon className="text-3xl" icon="solar:cpu-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium mb-2 text-zinc-200">
                Agilidad Digital
              </h4>
<p className="text-xs text-zinc-400 leading-relaxed">
                Implementamos herramientas como Aura y generación IA para
                producir activos de alta calidad en tiempo récord.
              </p>
</div>
</div>
</div>
</section>
</main>

<footer className="py-8 px-6 border-t border-zinc-800/60 bg-[#09090b]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 font-medium tracking-tighter text-sm text-zinc-500">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
          VPD.
        </div>
<p className="text-xs text-zinc-500 font-normal">
          © 2024 Vallarta Pride Digital. Estrategia y Marketing.
        </p>
</div>
</footer>

    </>
  );
}
