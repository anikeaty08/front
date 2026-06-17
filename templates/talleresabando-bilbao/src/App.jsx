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
      

<nav className="border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-medium text-sm tracking-tighter text-zinc-950 uppercase">
                Abando
            </div>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#contacto">
                Contacto
            </a>
</div>
</nav>

<header className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200/50 text-xs font-medium text-zinc-600 mb-8">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span>4,7 estrellas · 76 reseñas en Google</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-950 mb-6 leading-tight">
            Talleres Mecánicos Abando
        </h1>
<p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto font-light">
            Taller mecánico de confianza en Bilbao.
        </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto bg-zinc-950 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors inline-flex justify-center items-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
                Pedir cita por WhatsApp
            </a>
<a className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all inline-flex justify-center items-center gap-2" href="tel:944270550">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                Llámanos al 944 27 05 50
            </a>
</div>
</header>

<section className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-100">
<h2 className="text-2xl font-medium tracking-tight text-zinc-950 mb-12">Nuestros servicios</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-sm transition-all group">
<div className="h-10 w-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-xl text-zinc-700" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-950 mb-2">Reparación general</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Diagnóstico preciso y solución de averías de motor, sistema de frenos y suspensión.
                </p>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-sm transition-all group">
<div className="h-10 w-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-xl text-zinc-700" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-950 mb-2">Pre-ITV</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Revisamos a fondo tu vehículo y lo preparamos para asegurar que pase la ITV sin problemas.
                </p>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-sm transition-all group">
<div className="h-10 w-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-xl text-zinc-700" icon="solar:snowflake-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-950 mb-2">Aire acondicionado</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Mantenimiento, carga de gas y reparación completa del sistema de aire acondicionado (A/C).
                </p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100 text-center">
<div className="max-w-3xl mx-auto px-6">
<iconify-icon className="text-3xl text-zinc-400 mb-6" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
                Años de experiencia y seriedad en el trabajo. <span className="font-medium text-zinc-900">Garantía de confianza</span> en todas nuestras reparaciones.
            </p>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center">
<blockquote className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-950 mb-8 leading-snug">
            "Mi taller de confianza desde hace años."
        </blockquote>
<div className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-600">
<div className="flex gap-0.5 text-zinc-900">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" strokeWidth="1.5"></iconify-icon>
</div>
<span className="mx-2 text-zinc-300">|</span>
<span>4,7 en Google</span>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-100" id="contacto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-950 mb-8">Información de contacto</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-zinc-400 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900">Dirección</p>
<p className="text-sm text-zinc-500 mt-1">Egia Jeneralaren Kalea 18,<br/>48010 Bilbao</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-zinc-400 mt-0.5" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900">Teléfono</p>
<p className="text-sm text-zinc-500 mt-1">944 27 05 50</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-zinc-400 mt-0.5" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900">Email</p>
<p className="text-sm text-zinc-500 mt-1">info@talleresabando.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-zinc-400 mt-0.5" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900">Horario</p>
<p className="text-sm text-zinc-500 mt-1">Lunes a Viernes<br/>8:00 - 13:30 y 15:00 - 19:30</p>
</div>
</div>
</div>
</div>

<div className="h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-50 relative">

<div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm font-medium">
                    Cargando mapa...
                </div>
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.7483665518295!2d-2.946399623432029!3d43.26298587112349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4fdae2ab9037%3A0x6b107e3bd2c7bf6!2sGral.%20Egia%20Kalea%2C%2018%2C%2048010%20Bilbo%2C%20Bizkaia!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses" style={{border: '0', filter: 'grayscale(100%) contrast(1.1) opacity(0.9)'}}>
</iframe>
</div>
</div>
</section>

<footer className="border-t border-zinc-100 bg-white">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-medium text-xs tracking-tighter text-zinc-900 uppercase">
                Talleres Mecánicos Abando
            </div>
<div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-zinc-400">
<span>© 2026 Talleres Mecánicos Abando.</span>
<span className="hidden md:inline text-zinc-200">|</span>
<span>Renovada por Salto</span>
</div>
</div>
</footer>

    </>
  );
}
