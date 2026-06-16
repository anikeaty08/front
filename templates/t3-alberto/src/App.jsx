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



      document.addEventListener("DOMContentLoaded", function() {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.15
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach((element) => {
              observer.observe(element);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-100/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="group flex items-center gap-3" href="#">
<span className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 shadow-lg shadow-slate-900/20 ring-1 ring-white/10 overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
<span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none"></span>
<img alt="Logo" className="relative w-full h-full object-contain scale-125 brightness-0 invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c225d622-2b8c-4430-881d-e0affbd18065_320w.png"/>
</span>
<span className="hidden sm:flex flex-col leading-none">
<span className="text-slate-900 font-semibold tracking-tight text-lg">
              T3 PERFORMANCE
            </span>
<span className="text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase mt-0.5">
              Elite Coaching
            </span>
</span>
</a>
<div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-500">
<a className="relative px-4 py-2 rounded-full hover:text-slate-900 hover:bg-slate-100/70 transition-all duration-300" href="#sistema">
            Sistema T3
          </a>
<a className="relative px-4 py-2 rounded-full hover:text-slate-900 hover:bg-slate-100/70 transition-all duration-300" href="#nutricion">
            Nutrición
          </a>
<a className="relative px-4 py-2 rounded-full hover:text-slate-900 hover:bg-slate-100/70 transition-all duration-300" href="#transformaciones">
            Resultados
          </a>
<a className="relative px-4 py-2 rounded-full hover:text-slate-900 hover:bg-slate-100/70 transition-all duration-300" href="#proceso">
            Proceso
          </a>
<a className="relative px-4 py-2 rounded-full hover:text-slate-900 hover:bg-slate-100/70 transition-all duration-300" href="#programas">
            Programas
          </a>
</div>
<a className="hidden md:inline-flex items-center justify-center gap-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-slate-900/30 ring-1 ring-white/10 hover:shadow-xl hover:shadow-slate-900/40 hover:-translate-y-0.5 transition-all duration-300" href="#contacto">
          Empezar ahora
          <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-slate-900 bg-slate-100/70 ring-1 ring-slate-200/60 hover:bg-slate-200/70 transition-all duration-300">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-28 pb-28 lg:pt-32 lg:pb-32 min-h-screen flex items-center overflow-hidden bg-slate-950">
<div className="absolute inset-0 z-0 pointer-events-none">
<style>
          div[data-element-id="aura-emq6a99ah0879bmy"] ~ div.pointer-events-none.select-none {
            display: none !important;
          }
        </style>
<div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[45rem] max-h-[45rem] bg-gradient-to-br from-red-600/20 to-orange-600/10 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4"></div>
<div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[45rem] max-h-[45rem] bg-gradient-to-tr from-red-900/30 to-red-600/10 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4"></div>
<div className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] max-w-[35rem] max-h-[35rem] bg-red-500/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 mix-blend-screen"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="grid lg:grid-cols-12 gap-x-y-12 gap-y-12 items-center">
<div className="lg:col-span-6 max-w-2xl reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-red-400 text-xs font-normal mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
              Plazas limitadas para este mes
            </div>
<h1 className="text-5xl lg:text-[5.5rem] font-medium tracking-tight text-white leading-[0.95] mb-8">
              Deja de empezar cada lunes
              <span className="text-slate-600">y abandonar cada viernes.</span>
</h1>
<p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md">
              Transformaciones reales mediante entrenamiento personalizado,
              nutrición adaptada y seguimiento constante.
            </p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 text-xs font-medium text-slate-400">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-red-500" data-lucide="check-circle"></i>
                +150 transformaciones
              </span>
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-red-500" data-lucide="check-circle"></i>
                10+ años de experiencia
              </span>
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-red-500" data-lucide="check-circle"></i>
                Coaching online y presencial
              </span>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="hover:bg-white/10 hover:text-white transition-all inline-flex text-sm font-normal text-[#e5e7eb] bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-full px-8 py-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-2 items-center justify-center before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-full before:pointer-events-none before:[background:var(--border-gradient)] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor]" href="#contacto" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', color: '#e5e7eb', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))'}}>
<span className="text-sm font-normal tracking-tight">
                  Solicitar valoración gratuita
                </span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="group inline-flex cursor-pointer transition-all duration-300 text-sm font-normal text-gray-400 hover:text-white gap-2 items-center justify-center h-[54px] px-6 rounded-full hover:bg-white/5" href="#transformaciones">
<i className="w-4 h-4 transition-transform group-hover:scale-110" data-lucide="play-circle"></i>
<span className="tracking-tight">Ver casos reales</span>
</a>
</div>
</div>
<div className="lg:col-span-6 relative reveal delay-200 active">
<div className="relative z-20 rounded-[2rem] overflow-hidden shadow-2xl shadow-red-900/30 border border-white/10 aspect-[4/5] max-w-md mx-auto lg:mr-0 bg-slate-900">
<img alt="Alberto, coach de JC Fitness Club" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd1abd92-da55-4027-92fc-53c7470b0055_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
</div>
<div className="absolute -bottom-6 -left-2 lg:-left-10 z-30 flex flex-col bg-white/10 backdrop-blur-xl shadow-2xl border border-white/15 rounded-2xl px-6 py-4">
<span className="text-4xl font-medium tracking-tight text-white">
                +150
              </span>
<span className="text-xs text-slate-300">
                Transformaciones reales
              </span>
</div>
<div className="absolute top-6 -right-2 lg:-right-8 z-30 flex items-center gap-3 bg-white/10 backdrop-blur-xl shadow-2xl border border-white/15 rounded-2xl px-5 py-3">
<i className="w-6 h-6 text-red-500" data-lucide="check-circle"></i>
<div className="flex flex-col">
<span className="text-sm font-normal text-white leading-tight">
                  Sistema T3
                </span>
<span className="text-[11px] text-slate-300">
                  Metodología propia
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-20 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-14 reveal">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.05]">
            No necesitas más motivación.
            <br/>
<span className="text-slate-400">Necesitas un sistema.</span>
</h2>
<p className="text-slate-500 text-base">
            La industria del fitness te ha vendido soluciones rápidas que no se
            sostienen en el tiempo.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-px bg-slate-100 rounded-3xl overflow-hidden border border-slate-100">
<div className="bg-white p-10 lg:p-12 reveal delay-100 hover:bg-slate-50 transition-colors group">
<div className='w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform"&gt;&lt;span className="sr-only"&gt;01&lt;/span'>
<iconify-icon height="24" icon="solar:forbidden-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">
              Dietas imposibles
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Planes restrictivos que no puedes sostener y que solo generan
              ansiedad y efecto rebote.
            </p>
</div>
<div className="bg-white p-10 lg:p-12 reveal delay-200 hover:bg-slate-50 transition-colors group">
<div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">
              Falta de constancia
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Empiezas muy motivado, pero la falta de un plan adaptado hace que
              abandones a las pocas semanas.
            </p>
</div>
<div className="bg-white p-10 lg:p-12 reveal delay-300 hover:bg-slate-50 transition-colors group">
<div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:question-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">
              Desinformación
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Información contradictoria que te paraliza: no sabes qué comer ni
              cómo entrenar correctamente.
            </p>
</div>
<div className="bg-white p-10 lg:p-12 reveal delay-100 hover:bg-slate-50 transition-colors group">
<div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:user-cross-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">
              Falta de seguimiento
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Nadie revisa tu progreso ni ajusta tu plan, así que te estancas y
              acabas abandonando.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden" id="alberto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
<div className="lg:col-span-7 relative reveal">
<div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 border border-white/10 aspect-[16/11] bg-slate-900">
<img alt="Alberto, fundador de JC Fitness Club" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd1abd92-da55-4027-92fc-53c7470b0055_1600w.png"/>
</div>
<div className="absolute -inset-6 bg-gradient-to-tr from-red-600/20 to-amber-500/10 rounded-[2.5rem] blur-3xl -z-10"></div>
</div>
<div className="lg:col-span-5 reveal delay-200">
<span className="text-red-500 font-medium text-sm tracking-widest uppercase mb-3 block">
              La persona detrás de la marca
            </span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
              Conoce a Alberto
            </h2>
<p className="text-lg text-slate-400 leading-relaxed mb-5">
              Llevo más de una década dentro del mundo del entrenamiento y la
              nutrición. Empecé como tantos otros: probando dietas imposibles,
              rutinas copiadas y promesas vacías que nunca daban resultado.
            </p>
<p className="text-lg text-slate-400 leading-relaxed mb-5">
              Mi filosofía es simple:
              <span className="text-white font-medium">
                no necesitas más fuerza de voluntad, necesitas un sistema que
                funcione para tu vida real.
              </span>
              Por eso desarrollé el Sistema T3 y fundé JC Fitness Club.
            </p>
<p className="text-lg text-slate-400 leading-relaxed">
              No trabajo con cientos de clientes a la vez. Trabajo con quienes
              están listos para comprometerse y transformarse de verdad.
            </p>
</div>
</div>
</div>
</section>
<section className="py-14 lg:py-16 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6 leading-tight">
          No vendemos dietas mágicas ni rutinas genéricas.
        </h2>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed">
          Creamos transformaciones reales mediante
          <span className="text-slate-900 font-medium">
            entrenamiento inteligente, nutrición estratégica y disciplina
            inquebrantable.
          </span>
          Bienvenido a un estándar superior.
        </p>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden" id="sistema">

<div className="absolute top-1/4 left-1/2 w-[50rem] h-[50rem] bg-red-600/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/4"></div>
<div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-[120px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div className="max-w-2xl">
<span className="text-red-500 font-medium text-sm tracking-widest uppercase mb-3 block">
              Metodología Propia
            </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
              El Sistema T3
            </h2>
<p className="text-slate-400 text-base leading-relaxed">
              Un enfoque científico y estructurado para maximizar la
              hipertrofia, la pérdida de grasa y el rendimiento. Olvídate de
              entrenar al azar.
            </p>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-6 reveal delay-100">
<div className="lg:col-span-12 relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-[2rem] overflow-hidden">
<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="p-10 lg:p-12 relative group hover:bg-white/[0.03] transition-colors">
<span className="absolute top-8 right-8 text-7xl font-semibold tracking-tighter text-white/5 group-hover:text-red-500/20 transition-colors">
                  01
                </span>
<div className="text-red-500 w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-8">
<iconify-icon height="30" icon="solar:target-linear" width="30"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest text-red-500 font-semibold">
                  Fase 01
                </span>
<h3 className="text-2xl font-semibold mb-3 tracking-tight mt-1">
                  Técnica
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                  Ejecución biomecánica perfecta. Optimizamos cada movimiento
                  para que el músculo objetivo reciba el estímulo adecuado sin
                  riesgo de lesión.
                </p>
</div>
<div className="p-10 lg:p-12 relative group hover:bg-white/[0.03] transition-colors">
<span className="absolute top-8 right-8 text-7xl font-semibold tracking-tighter text-white/5 group-hover:text-red-500/20 transition-colors">
                  02
                </span>
<div className="text-red-500 w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-8">
<iconify-icon height="30" icon="solar:bolt-linear" width="30"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest text-red-500 font-semibold">
                  Fase 02
                </span>
<h3 className="text-2xl font-semibold mb-3 tracking-tight mt-1">
                  Tensión
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                  Sobrecarga progresiva inteligente. Manipulamos intensidad y
                  volumen para forzar a tu cuerpo a adaptarse y volverse más
                  fuerte cada semana.
                </p>
</div>
<div className="p-10 lg:p-12 relative group hover:bg-white/[0.03] transition-colors">
<span className="absolute top-8 right-8 text-7xl font-semibold tracking-tighter text-white/5 group-hover:text-red-500/20 transition-colors">
                  03
                </span>
<div className="text-red-500 w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-8">
<iconify-icon height="30" icon="solar:hourglass-linear" width="30"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest text-red-500 font-semibold">
                  Fase 03
                </span>
<h3 className="text-2xl font-semibold mb-3 tracking-tight mt-1">
                  Tiempo
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                  Control del tempo en cada repetición y periodización a largo
                  plazo. Los grandes físicos no se construyen en días, sino con
                  estrategia.
                </p>
</div>
</div>
<div className="relative px-10 lg:px-12 py-8 border-t border-white/10 bg-gradient-to-r from-red-600/10 to-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-300">
<span className="text-white font-medium">
                  T1 + T2 + T3 trabajan juntos.
                </span>
                Ninguna fase funciona aislada — el sistema completo es lo que
                produce transformaciones imposibles de revertir.
              </p>
<a className="shrink-0 inline-flex items-center gap-2 bg-red-600 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-red-700 transition-all" href="#contacto">
                Aplicar al sistema
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 overflow-hidden bg-white" id="nutricion">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative reveal">
<div className="absolute inset-0 bg-slate-100 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
<div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/40 rounded-3xl p-8 relative z-10">
<h3 className="text-lg font-medium text-slate-900 mb-6 tracking-tight border-b border-slate-100 pb-4">
                Tu plan se adapta estrictamente a:
              </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-600 text-sm">
<iconify-icon className="text-red-600" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Composición actual (Peso, altura y % grasa)
                </li>
<li className="flex items-center gap-3 text-slate-600 text-sm">
<iconify-icon className="text-red-600" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Objetivo físico específico
                </li>
<li className="flex items-center gap-3 text-slate-600 text-sm">
<iconify-icon className="text-red-600" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Estilo de vida y horarios de trabajo
                </li>
<li className="flex items-center gap-3 text-slate-600 text-sm">
<iconify-icon className="text-red-600" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Preferencias y alergias alimenticias
                </li>
<li className="flex items-center gap-3 text-slate-600 text-sm">
<iconify-icon className="text-red-600" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Presupuesto para suplementación/comida
                </li>
<li className="flex items-center gap-3 text-slate-600 text-sm">
<iconify-icon className="text-red-600" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Patologías o condiciones médicas
                </li>
</ul>
</div>
</div>
<div className="order-1 lg:order-2 reveal delay-200">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.05]">
              Nutrición Personalizada, sin excusas.
            </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
              El 70% de tus resultados provienen de lo que haces fuera del
              gimnasio. Olvídate del pollo con arroz sin sabor. Diseñamos un
              plan de alimentación que disfrutes, que se adapte a tu ritmo de
              vida y que alimente tus músculos mientras oxida la grasa.
            </p>
<a className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors" href="#contacto">
              Descubre cómo calculamos tus macros
              <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden" id="transformaciones">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-14 reveal">
<span className="text-red-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Resultados reales · No retocados
          </span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-5 leading-[0.95]">
            Esto es lo que pasa
            <br/>
            cuando dejas de dudar.
          </h2>
<p className="text-slate-400 text-lg max-w-xl">
            Personas comunes. Compromiso real. Transformaciones que hablan más
            que cualquier promesa.
          </p>
<div className="flex flex-wrap gap-x-12 gap-y-4 mt-10 pt-8 border-t border-white/10">
<div>
<span className="block text-4xl font-semibold tracking-tighter text-white">
                +150
              </span>
<span className="text-xs uppercase tracking-widest text-slate-500">
                Transformaciones
              </span>
</div>
<div>
<span className="block text-4xl font-semibold tracking-tighter text-white">
                98%
              </span>
<span className="text-xs uppercase tracking-widest text-slate-500">
                Logran su objetivo
              </span>
</div>
<div>
<span className="block text-4xl font-semibold tracking-tighter text-white">
                10+
              </span>
<span className="text-xs uppercase tracking-widest text-slate-500">
                Años de experiencia
              </span>
</div>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
<div className="lg:col-span-7 group relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-red-900/30 ring-1 ring-white/5 reveal delay-100 bg-slate-900 hover:shadow-red-900/50 transition-all duration-500">
<div className="grid grid-cols-2 aspect-[16/10]">
<div className="relative bg-slate-800 flex items-center justify-center text-slate-500 text-sm grayscale brightness-75">
<span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur text-white text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full">
                  ANTES
                </span>
                [ Foto ]
              </div>
<div className="relative bg-slate-600 flex items-center justify-center text-slate-200 text-sm">
<span className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full">
                  DESPUÉS
                </span>
                [ Foto ]
              </div>
</div>
<div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent">
<div className="flex flex-wrap items-end justify-between gap-4">
<div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-1">
                    Marcos, 34
                  </h3>
<p className="text-slate-400 text-sm">
                    De estancado a su mejor versión en 16 semanas
                  </p>
</div>
<div className="flex gap-6 text-right">
<div>
<span className="block text-4xl font-semibold tracking-tighter text-red-500">
                      -12kg
                    </span>
<span className="text-[10px] uppercase tracking-widest text-slate-400">
                      Grasa
                    </span>
</div>
<div>
<span className="block text-4xl font-semibold tracking-tighter text-white">
                      +4kg
                    </span>
<span className="text-[10px] uppercase tracking-widest text-slate-400">
                      Músculo
                    </span>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
<div className="group relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-red-900/30 ring-1 ring-white/5 reveal delay-200 bg-slate-900 flex-1 hover:shadow-red-900/50 transition-all duration-500">
<div className="grid grid-cols-2 h-full min-h-[14rem]">
<div className="relative bg-slate-700 flex items-center justify-center text-slate-400 text-sm grayscale">
<span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur text-white text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full">
                    ANTES
                  </span>
                  [ Foto ]
                </div>
<div className="relative bg-slate-600 flex items-center justify-center text-slate-300 text-sm">
<span className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full">
                    DESPUÉS
                  </span>
                  [ Foto ]
                </div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent">
<div className="flex items-end justify-between gap-3">
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">
                      Laura, 29
                    </h3>
<p className="text-slate-400 text-xs">
                      Recomposición · 24 sem.
                    </p>
</div>
<span className="text-2xl font-semibold tracking-tighter text-red-500">
                    +5kg
                  </span>
</div>
</div>
</div>
<div className="group relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-red-900/30 ring-1 ring-white/5 reveal delay-300 bg-slate-900 flex-1 hover:shadow-red-900/50 transition-all duration-500">
<div className="grid grid-cols-2 h-full min-h-[14rem]">
<div className="relative bg-slate-700 flex items-center justify-center text-slate-400 text-sm grayscale">
<span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur text-white text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full">
                    ANTES
                  </span>
                  [ Foto ]
                </div>
<div className="relative bg-slate-600 flex items-center justify-center text-slate-300 text-sm">
<span className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full">
                    DESPUÉS
                  </span>
                  [ Foto ]
                </div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent">
<div className="flex items-end justify-between gap-3">
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">
                      David, 41
                    </h3>
<p className="text-slate-400 text-xs">
                      Definición extrema · 12 sem.
                    </p>
</div>
<span className="text-2xl font-semibold tracking-tighter text-red-500">
                    -9%
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden" id="proceso">
<div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-red-600/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-2xl mb-16 reveal">
<span className="text-red-500 font-medium text-sm tracking-widest uppercase mb-3 block">
            Tu camino hacia el cambio
          </span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white leading-[1.05]">
            Cómo funciona el proceso
          </h2>
</div>
<div className="relative">
<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent z-0"></div>
<div className="grid md:grid-cols-4 gap-12 md:gap-8 relative z-10">
<div className="text-center md:text-left reveal delay-100">
<div className="w-24 h-24 mx-auto md:mx-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 shadow-2xl shadow-black/40 rounded-3xl flex items-center justify-center text-red-500 mb-8 relative">
<iconify-icon height="40" icon="solar:clipboard-list-linear" width="40"></iconify-icon>
<span className="absolute -top-3 -right-3 w-9 h-9 bg-red-600 text-white text-sm font-semibold rounded-full flex items-center justify-center shadow-lg shadow-red-600/40">
                  1
                </span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Evaluación inicial
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                Cuestionario detallado sobre tu punto de partida y objetivos.
              </p>
</div>
<div className="text-center md:text-left reveal delay-200">
<div className="w-24 h-24 mx-auto md:mx-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 shadow-2xl shadow-black/40 rounded-3xl flex items-center justify-center text-red-500 mb-8 relative">
<iconify-icon height="40" icon="solar:pen-new-square-linear" width="40"></iconify-icon>
<span className="absolute -top-3 -right-3 w-9 h-9 bg-red-600 text-white text-sm font-semibold rounded-full flex items-center justify-center shadow-lg shadow-red-600/40">
                  2
                </span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Estrategia
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                Diseño de tu entrenamiento (Sistema T3) y nutrición a medida.
              </p>
</div>
<div className="text-center md:text-left reveal delay-300">
<div className="w-24 h-24 mx-auto md:mx-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 shadow-2xl shadow-black/40 rounded-3xl flex items-center justify-center text-red-500 mb-8 relative">
<iconify-icon height="40" icon="solar:chart-square-linear" width="40"></iconify-icon>
<span className="absolute -top-3 -right-3 w-9 h-9 bg-red-600 text-white text-sm font-semibold rounded-full flex items-center justify-center shadow-lg shadow-red-600/40">
                  3
                </span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Seguimiento constante
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                Revisiones semanales, ajustes de macros y corrección técnica.
              </p>
</div>
<div className="text-center md:text-left reveal delay-100">
<div className="w-24 h-24 mx-auto md:mx-0 bg-gradient-to-br from-red-600 to-red-700 border border-white/10 shadow-2xl shadow-red-600/30 rounded-3xl flex items-center justify-center text-white mb-8 relative">
<iconify-icon height="40" icon="solar:medal-star-linear" width="40"></iconify-icon>
<span className="absolute -top-3 -right-3 w-9 h-9 bg-white text-red-600 text-sm font-semibold rounded-full flex items-center justify-center shadow-lg">
                  4
                </span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Transformación
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                Consigue el físico que buscas y mantén los hábitos para siempre.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden" id="programas">
<div className="max-w-7xl mx-auto px-6">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-red-600/10 rounded-full blur-[130px] z-0"></div>
<div className="grid md:grid-cols-3 gap-6 items-center relative z-10 mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4 md:col-span-2 leading-[1.05]">
            Elige el nivel de acompañamiento que necesitas
          </h2>
<p className="text-slate-400 text-base">
            Cada programa está diseñado para un nivel de compromiso distinto. Tú
            eliges hasta dónde quieres llegar.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6 relative z-10">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm reveal delay-100 flex flex-col">
<h3 className="text-xl font-medium text-slate-900 mb-2 tracking-tight">
              Esencial
            </h3>
<p className="text-sm text-slate-500 mb-6">
              Para empezar con una base sólida y profesional.
            </p>
<ul className="space-y-3 text-sm text-slate-600 mb-8 flex-1">
<li className="flex items-center gap-2">
<iconify-icon className="text-red-600" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Plan de entrenamiento T3
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-red-600" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Plan nutricional personalizado
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-red-600" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Revisión mensual
              </li>
</ul>
<a className="inline-flex items-center justify-center bg-white text-slate-700 border border-slate-200 text-sm font-medium px-5 py-3 rounded-full hover:bg-slate-50 transition-all" href="#contacto">
              Más información
            </a>
</div>
<div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl shadow-slate-300/40 reveal delay-200 flex flex-col relative">
<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Más elegido
            </span>
<h3 className="text-xl font-medium mb-2 tracking-tight">Premium</h3>
<p className="text-sm text-slate-400 mb-6">
              El acompañamiento completo para transformarte de verdad.
            </p>
<ul className="space-y-3 text-sm text-slate-300 mb-8 flex-1">
<li className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Todo lo del plan Esencial
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Revisiones semanales
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Corrección técnica por vídeo
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Soporte directo por WhatsApp
              </li>
</ul>
<a className="inline-flex items-center justify-center bg-red-600 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-red-700 transition-all" href="#contacto">
              Reservar valoración
            </a>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm reveal delay-300 flex flex-col">
<h3 className="text-xl font-medium text-slate-900 mb-2 tracking-tight">
              Elite 1:1
            </h3>
<p className="text-sm text-slate-500 mb-6">
              Acompañamiento total y prioritario, plazas muy limitadas.
            </p>
<ul className="space-y-3 text-sm text-slate-600 mb-8 flex-1">
<li className="flex items-center gap-2">
<iconify-icon className="text-red-600" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Todo lo del plan Premium
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-red-600" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Contacto directo prioritario
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-red-600" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Estrategia personalizada continua
              </li>
</ul>
<a className="inline-flex items-center justify-center bg-white text-slate-700 border border-slate-200 text-sm font-medium px-5 py-3 rounded-full hover:bg-slate-50 transition-all" href="#contacto">
              Más información
            </a>
</div>
</div>
</div>
</section>
<section className="py-20 lg:py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
<div>
<span className="text-red-600 font-semibold text-sm tracking-widest uppercase mb-3 block">
              Prueba social
            </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 max-w-2xl leading-[1.05]">
              Lo que dicen nuestros atletas
            </h2>
</div>
<div className="flex items-center gap-8">
<div className="text-center">
<div className="flex gap-0.5 text-amber-400 justify-center mb-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium">
                4.9/5 · +150 reseñas
              </span>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-9 rounded-[2rem] border border-slate-100 reveal delay-100 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col lg:translate-y-4">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 text-lg leading-relaxed mb-8 flex-1 font-medium tracking-tight">
              "Había estado estancado durante 2 años. Con el sistema de JC
              entendí por fin cómo entrenar con intensidad real. En 4 meses he
              mutado literalmente mi físico."
            </p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-slate-200 bg-cover bg-center flex items-center justify-center text-slate-500 font-medium text-sm shrink-0">
                M
              </div>
<div>
<h5 className="text-sm font-medium text-slate-900">Marcos G.</h5>
<span className="text-xs text-slate-500">
                  Objetivo: Volumen limpio
                </span>
</div>
</div>
</div>

<div className="bg-slate-950 text-white p-11 rounded-[2rem] border border-white/10 reveal delay-200 shadow-2xl shadow-slate-400/40 transition-all flex flex-col lg:-translate-y-6 lg:scale-105 relative z-10">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-200 text-lg leading-relaxed mb-8 flex-1 font-medium tracking-tight">
              "Lo que más destaco es la nutrición. Por primera vez en mi vida no
              siento que estoy a dieta. He bajado mi porcentaje de grasa
              comiendo cosas que me gustan."
            </p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-slate-700 bg-cover bg-center flex items-center justify-center text-slate-300 font-medium text-sm shrink-0">
                L
              </div>
<div>
<h5 className="text-sm font-medium text-white">Laura V.</h5>
<span className="text-xs text-slate-400">
                  Objetivo: Pérdida de grasa
                </span>
</div>
</div>
</div>

<div className="bg-slate-50 p-9 rounded-[2rem] border border-slate-100 reveal delay-300 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col lg:translate-y-4">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 text-lg leading-relaxed mb-8 flex-1 font-medium tracking-tight">
              "El nivel de detalle en las revisiones es increíble. JC te corrige
              la técnica mediante vídeos y ajusta todo al milímetro. Una
              inversión 100% recomendada."
            </p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-slate-200 bg-cover bg-center flex items-center justify-center text-slate-500 font-medium text-sm shrink-0">
                D
              </div>
<div>
<h5 className="text-sm font-medium text-slate-900">David R.</h5>
<span className="text-xs text-slate-500">
                  Objetivo: Recomposición
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center reveal">
          Preguntas Frecuentes
        </h2>
<div className="space-y-4 reveal delay-100">
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-7 text-base font-semibold text-slate-900 tracking-tight">
              ¿El plan sirve tanto para perder grasa como para ganar músculo?
              <span className="shrink-0 ml-4 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center group-open:bg-red-600 group-open:text-white transition-all">
<iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-7 pb-7 text-sm text-slate-500 leading-relaxed">
              Sí, el plan se adapta 100% a tu objetivo principal. Configuramos
              tus calorías (déficit o superávit) y diseñamos el entrenamiento
              (Sistema T3) para enviar la señal correcta a tu cuerpo, ya sea
              para oxidar tejido adiposo o construir masa magra.
            </div>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-7 text-base font-semibold text-slate-900 tracking-tight">
              ¿Tengo que comer alimentos que no me gustan?
              <span className="shrink-0 ml-4 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center group-open:bg-red-600 group-open:text-white transition-all">
<iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-7 pb-7 text-sm text-slate-500 leading-relaxed">
              En absoluto. La adherencia es la clave del éxito. En la evaluación
              inicial nos indicarás tus preferencias, intolerancias y
              aversiones, y elaboraremos un menú con opciones intercambiables
              que disfrutes comiendo cada día.
            </div>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-7 text-base font-semibold text-slate-900 tracking-tight">
              ¿Cómo funciona el seguimiento?
              <span className="shrink-0 ml-4 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center group-open:bg-red-600 group-open:text-white transition-all">
<iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-7 pb-7 text-sm text-slate-500 leading-relaxed">
              Realizamos revisiones semanales o quincenales (según el plan).
              Evaluamos tu peso, medidas, fotos de progreso y sensaciones. Si es
              necesario, ajustamos variables del entrenamiento o la dieta para
              asegurar que sigues progresando sin estancamientos.
            </div>
</details>
</div>
</div>
</section>

<section className="py-28 lg:py-32 bg-slate-950 text-white relative overflow-hidden" id="contacto">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 z-0"></div>
<div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.05]">
          Tu transformación
          <br/>
<span className="text-red-500">empieza hoy.</span>
</h2>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Dentro de 6 meses puedes seguir igual o tener el físico que llevas
          años buscando. La diferencia es la decisión que tomes ahora.
        </p>
<button className="inline-flex items-center justify-center gap-2 bg-red-600 text-white text-lg font-medium px-10 py-5 rounded-full hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-red-600/20">
          Reservar valoración gratuita
          <iconify-icon height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
<p className="text-xs text-slate-500 mt-6 font-medium tracking-wide uppercase">
          Plazas limitadas para asegurar la máxima calidad de servicio.
        </p>
</div>
<div className="max-w-5xl mx-auto px-6 relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
<div className="bg-white/[0.03] p-6 text-center">
<span className="block text-3xl font-semibold tracking-tighter text-white mb-1">
            +150
          </span>
<span className="text-[11px] uppercase tracking-widest text-slate-400">
            Transformaciones
          </span>
</div>
<div className="bg-white/[0.03] p-6 text-center">
<span className="block text-3xl font-semibold tracking-tighter text-white mb-1">
            10+
          </span>
<span className="text-[11px] uppercase tracking-widest text-slate-400">
            Años de experiencia
          </span>
</div>
<div className="bg-white/[0.03] p-6 text-center">
<span className="block text-3xl font-semibold tracking-tighter text-white mb-1">
            1:1
          </span>
<span className="text-[11px] uppercase tracking-widest text-slate-400">
            Coaching personalizado
          </span>
</div>
<div className="bg-white/[0.03] p-6 text-center">
<span className="block text-3xl font-semibold tracking-tighter text-white mb-1">
            Online &amp; Presencial
          </span>
<span className="text-[11px] uppercase tracking-widest text-slate-400">
            Acompañamiento
          </span>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-1.5">
<span className="text-red-600 font-semibold tracking-tighter">JC</span>
<span className="text-slate-900 font-medium tracking-tight">FITNESS</span>
<span className="text-amber-500 font-medium tracking-tight">CLUB</span>
</div>
<p className="text-sm text-slate-400">
          © 2023 JC Fitness Club. Todos los derechos reservados.
        </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>


<a aria-label="Contactar por WhatsApp" className="fixed bottom-6 right-6 z-[60] inline-flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-xl shadow-green-500/30 hover:bg-green-600 hover:scale-105 transition-all" href="https://wa.me/34600000000" rel="noopener" target="_blank">
<iconify-icon height="30" icon="mdi:whatsapp" width="30"></iconify-icon>
</a>

    </>
  );
}
