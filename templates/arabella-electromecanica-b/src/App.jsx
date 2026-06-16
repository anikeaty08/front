import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      
<div className="relative overflow-hidden">
<header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/85 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
<a className="flex items-center gap-3" href="#">
<div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-neutral-950 text-xs font-semibold tracking-tight text-white">
            AR
          </div>
<div className="leading-none">
<div className="text-sm font-semibold tracking-tight text-neutral-950">ARABELLA</div>
<div className="mt-1 text-xs text-neutral-500">Taller Electromecánica</div>
</div>
</a>
<nav className="hidden items-center gap-7 md:flex">
<a className="text-sm text-neutral-600 transition hover:text-neutral-950" href="#servicios">Servicios</a>
<a className="text-sm text-neutral-600 transition hover:text-neutral-950" href="#sobre-nosotros">Sobre nosotros</a>
<a className="text-sm text-neutral-600 transition hover:text-neutral-950" href="#resenas">Reseñas</a>
<a className="text-sm text-neutral-600 transition hover:text-neutral-950" href="#contacto">Contacto</a>
</nav>
<a className="hidden rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-950 shadow-sm transition hover:border-neutral-950 md:inline-flex" href="tel:+34667708061">
          667 70 80 61
        </a>
</div>
</header>
<main>
<section className="relative">
<div className="absolute inset-0 -z-10">
<div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl"></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
</div>
<div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
<div className="mx-auto max-w-4xl text-center">
<div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm">
<iconify-icon className="text-base text-neutral-950" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-neutral-700">4,8 estrellas · 35 reseñas en Google</span>
</div>
<h1 className="text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              ARABELLA
            </h1>
<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
              Especialistas en electromecánica del automóvil en Bilbao
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 sm:w-auto" href="https://wa.me/34667708061" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:chat-round-call-linear" strokeWidth="1.5"></iconify-icon>
                Pedir cita por WhatsApp
              </a>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-950 shadow-sm transition hover:border-neutral-950 sm:w-auto" href="tel:+34667708061">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                Llámanos al 667 70 80 61
              </a>
</div>
</div>
<div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-3 rounded-3xl border border-neutral-200 bg-neutral-50 p-3 shadow-sm sm:grid-cols-3">
<div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-200/70">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white">
<iconify-icon className="text-xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-950">Electromecánica</p>
<p className="mt-1 text-sm leading-6 text-neutral-500">Soluciones precisas para sistemas eléctricos y mecánicos.</p>
</div>
<div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-200/70">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-950">Bilbao</p>
<p className="mt-1 text-sm leading-6 text-neutral-500">Ubicados en Bda. Sarrikue Auzunea 9.</p>
</div>
<div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-200/70">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white">
<iconify-icon className="text-xl" icon="solar:medal-ribbon-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-950">Recomendados</p>
<p className="mt-1 text-sm leading-6 text-neutral-500">Valoración destacada por clientes reales en Google.</p>
</div>
</div>
</div>
</section>
<section className="border-y border-neutral-200 bg-neutral-50" id="servicios">
<div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<p className="text-sm font-medium text-neutral-500">Servicios</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Lo que tu coche necesita, sin complicaciones.
            </h2>
<p className="mt-4 text-base leading-7 text-neutral-600">
              Diagnóstico, reparación y mantenimiento con trato directo y trabajo cuidadoso.
            </p>
</div>
<div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
<article className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
<iconify-icon className="text-2xl text-neutral-950" icon="solar:monitor-smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-950">Diagnóstico electrónico</h3>
<p className="mt-3 text-sm leading-6 text-neutral-600">
                Lectura de centralitas, fallos eléctricos y sistemas avanzados del vehículo.
              </p>
<div className="mt-6 h-px bg-neutral-200"></div>
<p className="mt-5 text-xs font-medium uppercase tracking-wide text-neutral-500">Precisión y rapidez</p>
</article>
<article className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
<iconify-icon className="text-2xl text-neutral-950" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-950">Reparación general</h3>
<p className="mt-3 text-sm leading-6 text-neutral-600">
                Motor, frenos, suspensión, distribución y reparaciones mecánicas esenciales.
              </p>
<div className="mt-6 h-px bg-neutral-200"></div>
<p className="mt-5 text-xs font-medium uppercase tracking-wide text-neutral-500">Servicio integral</p>
</article>
<article className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
<iconify-icon className="text-2xl text-neutral-950" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-950">Mantenimiento preventivo</h3>
<p className="mt-3 text-sm leading-6 text-neutral-600">
                Revisiones, ITV, cambios de aceite y mantenimiento periódico para evitar averías.
              </p>
<div className="mt-6 h-px bg-neutral-200"></div>
<p className="mt-5 text-xs font-medium uppercase tracking-wide text-neutral-500">Cuidado constante</p>
</article>
</div>
</div>
</section>
<section className="bg-white" id="sobre-nosotros">
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
<div>
<p className="text-sm font-medium text-neutral-500">Sobre nosotros</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Electromecánica cercana, clara y especializada.
            </h2>
</div>
<div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
<p className="text-lg leading-8 text-neutral-700">
              Especialistas en electromecánica con años de experiencia en Bilbao. Recomendados al 100% por nuestros clientes en Google.
            </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2">
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-neutral-800">4,8 / 5</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2">
<iconify-icon className="text-base" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-neutral-800">35 reseñas</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2">
<iconify-icon className="text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-neutral-800">100% recomendable</span>
</div>
</div>
</div>
</div>
</section>
<section className="bg-neutral-950 text-white" id="resenas">
<div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<div className="mx-auto mb-8 flex w-fit items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2">
<iconify-icon className="text-base text-white" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base text-white" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base text-white" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base text-white" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base text-white" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span className="ml-2 text-xs font-medium text-neutral-300">4,8 estrellas en Google</span>
</div>
<blockquote className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              “Desde luego un taller recomendable 100%”
            </blockquote>
<p className="mt-7 text-base leading-7 text-neutral-400">
              Una valoración que resume el compromiso de ARABELLA con un servicio honesto, técnico y bien hecho.
            </p>
</div>
</div>
</section>
<section className="bg-white" id="contacto">
<div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
<div>
<p className="text-sm font-medium text-neutral-500">Contacto</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                Ven al taller o pide cita.
              </h2>
<p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                Estamos en Bilbao de lunes a viernes. Para una atención más ágil, llámanos o escríbenos por WhatsApp.
              </p>
<div className="mt-10 space-y-4">
<div className="flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200">
<iconify-icon className="text-xl text-neutral-950" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-950">Dirección</p>
<p className="mt-1 text-sm leading-6 text-neutral-600">Bda. Sarrikue Auzunea 9, Bilbao</p>
</div>
</div>
<div className="flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200">
<iconify-icon className="text-xl text-neutral-950" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-950">Teléfono</p>
<a className="mt-1 block text-sm leading-6 text-neutral-600 transition hover:text-neutral-950" href="tel:+34667708061">667 70 80 61</a>
</div>
</div>
<div className="flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200">
<iconify-icon className="text-xl text-neutral-950" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-950">Horario</p>
<p className="mt-1 text-sm leading-6 text-neutral-600">Lunes a Viernes 8:00-16:00</p>
</div>
</div>
<div className="flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200">
<iconify-icon className="text-xl text-neutral-950" icon="solar:share-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-950">Facebook</p>
<a className="mt-1 block text-sm leading-6 text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-950" href="https://www.facebook.com/profile.php?id=61555677985502" rel="noopener noreferrer" target="_blank">
                      Ver perfil de ARABELLA
                    </a>
</div>
</div>
</div>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800" href="https://wa.me/34667708061" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:chat-round-call-linear" strokeWidth="1.5"></iconify-icon>
                  WhatsApp
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-950 shadow-sm transition hover:border-neutral-950" href="tel:+34667708061">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                  Llamar ahora
                </a>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-2 shadow-sm">
<div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 lg:aspect-auto lg:h-full">
<iframe allowfullscreen="" className="h-full w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Bda.%20Sarrikue%20Auzunea%209%2C%20Bilbao&amp;output=embed" title="Mapa de ARABELLA Taller Electromecánica">
</iframe>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-neutral-200 bg-neutral-50">
<div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
<div>
<p className="text-sm font-medium text-neutral-950">© 2026 ARABELLA</p>
<p className="mt-1 text-xs text-neutral-500">Taller Electromecánica en Bilbao</p>
</div>
<p className="text-xs text-neutral-500">Renovada por Salto</p>
</div>
</footer>
</div>

    </>
  );
}
