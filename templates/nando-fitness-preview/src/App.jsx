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
      

<nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-2xl border-b border-white/5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="tracking-tighter font-bold text-2xl uppercase text-white" href="#">
          NS.
        </a>
<div className="hidden md:flex items-center gap-10 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors hover:underline decoration-emerald-500/70 underline-offset-[6px]" href="#metodo">
            Método
          </a>
<a className="hover:text-white transition-colors hover:underline decoration-emerald-500/70 underline-offset-[6px]" href="#resultados">
            Resultados
          </a>
<a className="hover:text-white transition-colors hover:underline decoration-emerald-500/70 underline-offset-[6px]" href="#sobre-mi">
            Sobre mí
          </a>
<a className="hover:text-white transition-colors hover:underline decoration-emerald-500/70 underline-offset-[6px]" href="#faq">
            FAQ
          </a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-500 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5" href="#contacto">
          Reserva tu valoración gratuita
        </a>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center overflow-hidden bg-black isolate" style={{fontFamily: '\'Inter\',system-ui,sans-serif'}}>
<div className="absolute inset-0 -z-20">
<img alt="" className="w-full h-full object-cover object-center scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfbfe4f3-0766-4e60-aa7b-05e36350bee8_3840w.jpg" style={{animation: 'kenburns 22s ease-in-out infinite alternate'}}/>
</div>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/20"></div>
<div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/40 to-black/60"></div>
<div className="absolute inset-0 -z-10 pointer-events-none" style={{boxShadow: 'inset 0 0 280px 60px rgba(0,0,0,0.95)'}}></div>
<div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.07] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns=%22http: '//www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22&gt'}}></div>
<div className="pointer-events-none absolute -top-40 left-1/4 -z-10 w-[55rem] h-[55rem] rounded-full blur-3xl" style={{background: 'radial-gradient(circle at center,rgba(16,185,129,0.22),transparent 60%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-24 md:h-28 bg-black -z-0 pointer-events-none" style={{clipPath: 'polygon(0 0,100% 0,100% 0,0 100%)'}}></div>
<div className="absolute top-0 inset-x-0 h-[12vh] bg-black/0 pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-[10vh] bg-black pointer-events-none"></div>
<div className="absolute bottom-0 inset-x-0 h-[10vh] bg-black pointer-events-none"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md" style={{animation: 'fadeUp 0.8s ease-out both'}}>
<svg className="text-emerald-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-emerald-400/90">
      Coaching de élite · 1 a 1
    </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1] mb-6 max-w-4xl" style={{animation: 'fadeUp 1s ease-out 0.2s both'}}>
    Transforma tu físico
    <span className="bg-gradient-to-r from-white via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
      de una vez por todas.
    </span>
</h1>
<p className="text-base md:text-lg text-neutral-400 mb-10 max-w-2xl font-extralight leading-relaxed" style={{animation: 'fadeUp 1s ease-out 0.4s both'}}>
    No vendo dietas. Construyo un sistema a tu medida para que pierdas
    grasa, ganes confianza y mantengas los resultados
    <span className="text-neutral-200 font-light">para siempre</span>
    — sin renunciar a tu vida.
  </p>
<div className="flex flex-col items-center gap-5 w-full max-w-lg mx-auto" style={{animation: 'fadeUp 1s ease-out 0.6s both'}}>
<div className="flex flex-col sm:flex-row w-full gap-3 justify-center">
<button className="group relative inline-flex items-center justify-center bg-emerald-500/90 text-black px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] w-full sm:w-auto" type="button">
        Solicitar mi plaza
        <svg className="ml-2 group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.15)] rounded-full relative shadow-[0_8px_40px_rgba(255,255,255,0.05)] w-full sm:w-auto" onclick="document.getElementById('transformaciones') ? document.getElementById('transformaciones').scrollIntoView({behavior: 'smooth'}) : window.location.hash='transformaciones'" style={{-Spread: '90deg', -ShimmerColor: 'rgba(255,255,255,0.6)', -Radius: '9999px', -Speed: '4s', -Cut: '1px', -Bg: 'rgba(255, 255, 255, 0.05)'}} type="button">
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-thin text-neutral-300 group-hover:text-white transition-colors duration-300 w-full px-8 py-3.5 relative items-center justify-center" style={{borderRadius: '9999px'}}>
<div style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%'}}></div>
<div style={{position: 'absolute', inset: '1px', background: 'rgba(10, 11, 20, 0.8)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10 font-sans">Ver transformaciones</span>
<style>
      @keyframes rotate-gradient {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes borderBeamRotation {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
    </style>
</div>
</button>
</div>
<div className="inline-flex items-center gap-2 text-sm font-medium text-red-500 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-full mt-3 shadow-[0_0_15px_-3px_rgba(239,68,68,0.4)] animate-pulse">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
  Plazas limitadas para garantizar seguimiento 1-1
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-10 gap-y-6 w-full max-w-4xl" style={{animation: 'fadeUp 1s ease-out 0.8s both'}}>
<div className="flex flex-row items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/5 text-emerald-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<span className="text-sm md:text-base font-normal text-neutral-200 tracking-tight">
        +100 personas ayudadas
      </span>
</div>
<div className="flex flex-row items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/5 text-emerald-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<span className="text-sm md:text-base font-normal text-neutral-200 tracking-tight">
        Método sostenible
      </span>
</div>
<div className="flex flex-row items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/5 text-emerald-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<span className="text-sm md:text-base font-normal text-neutral-200 tracking-tight">
        8 años de experiencia
      </span>
</div>
</div>
</div>
<style>
        @keyframes kenburns{0%{transform:scale(1.1) translate(0,0)}100%{transform:scale(1.22) translate(-2%,-2%)}}
        @keyframes fadeUp{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}
        @keyframes scrolldown{0%{transform:translateY(-100%)}100%{transform:translateY(300%)}}
        @keyframes ping{75%,100%{transform:scale(2.5);opacity:0}}
      </style>
</header>

<section className="py-32 bg-black px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
<div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[70rem] h-[70rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] blur-3xl"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
        Transformaciones reales, no promesas
      </h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed">
        Desliza para ver el antes y después. Constancia, un buen sistema y sin renunciar a tu estilo de vida.
      </p>
</div>

<div className="mb-16">
<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center bg-neutral-900/40 p-6 md:p-10 rounded-[3rem] border border-white/5 shadow-2xl">
<div className="w-full lg:w-[55%] group relative">
<div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden bg-neutral-950 relative w-full shadow-2xl ring-1 ring-white/10" oninput="this.style.setProperty('--val', event.target.value + '%')" style={{-Val: '75%'}}>

<img alt="Después" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9685a7c-eca5-457d-a861-8b3d90bd5275_1600w.jpg"/>

<img alt="Antes" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4672d73-176b-4f52-869a-4cf53b90897e_1600w.jpg" style={{clipPath: 'polygon(0 0, var(--val) 0, var(--val) 100%, 0 100%)'}}/>
<div className="absolute inset-y-0 w-1 bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,1)] z-10 pointer-events-none" style={{left: 'var(--val)'}}>
<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-[0_0_20px_rgba(16,185,129,0.8)] ring-4 ring-emerald-500/20">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg>
</div>
</div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 p-0" max="100" min="0" type="range" value="50"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between z-10 pointer-events-none">
<span className="bg-black/70 backdrop-blur-md text-white text-xs px-4 py-2.5 rounded-full font-medium tracking-wider border border-white/10 uppercase">
                ANTES
              </span>
<span className="bg-emerald-500/90 backdrop-blur-md text-black text-xs px-4 py-2.5 rounded-full font-semibold tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.5)] uppercase">
                DESPUÉS
              </span>
</div>
</div>
</div>
<div className="w-full lg:w-[45%] flex flex-col justify-center px-2 md:px-4">
<div className="flex flex-wrap items-center gap-3 mb-8">
<span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              Transformación real
            </span>
<span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-medium text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
              Cambio físico completo
            </span>
</div>
<h3 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">
            Mi transformación personal
          </h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed mb-10">No nací con este físico.

También tuve una época en la que me miraba al espejo y sentía que el esfuerzo que hacía no se reflejaba en los resultados.

Probé distintos métodos, cometí errores y perdí tiempo siguiendo estrategias que no podía mantener.

Todo cambió cuando dejé de buscar soluciones rápidas y empecé a construir un sistema sostenible.

Ese cambio no solo transformó mi físico. También cambió mi forma de entender el entrenamiento, la alimentación y los hábitos.</p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
<div className="">
<p className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2">Antes</p>
<p className="text-white text-base font-light">Entrenaba duro pero sin dirección clara.</p>
</div>
<div className="">
<p className="text-xs uppercase tracking-widest text-emerald-500 font-medium mb-2">Después</p>
<p className="text-emerald-400 text-base font-light">Sistema probado, físico construido y resultados sostenibles.</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative flex flex-col gap-6 bg-neutral-900/30 p-5 md:p-6 rounded-[2.5rem] border border-white/5 hover:border-white/10 hover:bg-neutral-900/50 transition-all duration-300">
<div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-neutral-950 relative w-full shadow-xl ring-1 ring-white/10" oninput="this.style.setProperty('--val', event.target.value + '%')" style={{-Val: '44%'}}>
<img alt="Después" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80bb8876-d273-4b40-8887-ae835e3b6b62_1600w.jpg"/>
<img alt="Antes" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/623ec666-f3a7-4e5a-8270-477dbc65cdfa_1600w.jpg" style={{clipPath: 'polygon(0 0, var(--val) 0, var(--val) 100%, 0 100%)'}}/>
<div className="absolute inset-y-0 w-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10 pointer-events-none" style={{left: 'var(--val)'}}>
<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-[0_0_15px_rgba(16,185,129,0.6)] ring-4 ring-emerald-500/20">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg>
</div>
</div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 p-0" max="100" min="0" type="range" value="50"/>
<div className="absolute bottom-5 left-5 right-5 flex justify-between z-10 pointer-events-none">
<span className="bg-black/70 backdrop-blur-md text-white text-[10px] px-3.5 py-2 rounded-full font-medium tracking-wider border border-white/10 uppercase">
              ANTES
            </span>
<span className="bg-emerald-500/90 backdrop-blur-md text-black text-[10px] px-3.5 py-2 rounded-full font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              DESPUÉS
            </span>
</div>
</div>
<div className="px-2">
<div className="flex flex-wrap items-center justify-between gap-3 mb-4">
<h3 className="text-2xl font-normal tracking-tight text-white">
              Carlos R.
            </h3>
<span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              Transformación real
            </span>
</div>
<p className="text-neutral-400 font-light leading-relaxed">Carlos consiguió eliminar los últimos kilos que le impedían verse como quería. A través de una estructura simple, hábitos sostenibles y seguimiento constante, logró una transformación física real sin depender de soluciones extremas.</p>
</div>
</div>

<div className="group relative flex flex-col gap-6 bg-neutral-900/30 p-5 md:p-6 rounded-[2.5rem] border border-white/5 hover:border-white/10 hover:bg-neutral-900/50 transition-all duration-300">
<div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-neutral-950 relative w-full shadow-xl ring-1 ring-white/10" oninput="this.style.setProperty('--val', event.target.value + '%')" style={{-Val: '17%'}}>
<img alt="Después" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c874ac9-8923-4da2-94c9-288149e3bfbb_1600w.png"/>
<img alt="Antes" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc6a3033-45f1-4867-b44f-6d349ab55a6d_1600w.png" style={{clipPath: 'polygon(0 0, var(--val) 0, var(--val) 100%, 0 100%)'}}/>
<div className="absolute inset-y-0 w-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10 pointer-events-none" style={{left: 'var(--val)'}}>
<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-[0_0_15px_rgba(16,185,129,0.6)] ring-4 ring-emerald-500/20">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg>
</div>
</div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 p-0" max="100" min="0" type="range" value="50"/>
<div className="absolute bottom-5 left-5 right-5 flex justify-between z-10 pointer-events-none">
<span className="bg-black/70 backdrop-blur-md text-white text-[10px] px-3.5 py-2 rounded-full font-medium tracking-wider border border-white/10 uppercase">
              ANTES
            </span>
<span className="bg-emerald-500/90 backdrop-blur-md text-black text-[10px] px-3.5 py-2 rounded-full font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              DESPUÉS
            </span>
</div>
</div>
<div className="px-2">
<div className="flex flex-wrap items-center justify-between gap-3 mb-4">
<h3 className="text-2xl font-normal tracking-tight text-white">
              David M.
            </h3>
<span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              Cambio físico completo
            </span>
</div>
<p className="text-neutral-400 font-light leading-relaxed">En solo 6 meses, David redujo significativamente su porcentaje de grasa corporal mientras desarrollaba masa muscular de calidad. El resultado fue una transformación física completa, construyendo un físico más definido, fuerte y sostenible.</p>
</div>
</div>
</div>
<div className="mt-24 max-w-2xl mx-auto text-center">
<p className="text-lg md:text-xl font-light text-white mb-8">
        Transformaciones reales con estructura, hábitos y seguimiento.
      </p>
<a className="inline-flex items-center justify-center bg-white text-black px-10 py-4 rounded-full text-base font-medium hover:bg-emerald-500 hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 w-full sm:w-auto" href="#contacto">
        Quiero ser el próximo caso de éxito
      </a>
</div>
</div>
</section>
<section className="py-32 bg-black px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-20 text-center">
          ¿Por qué mis clientes obtienen resultados?
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
<div className="bg-neutral-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 text-left hover:-translate-y-2 hover:bg-neutral-800/60 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:border-emerald-500/30">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-500">
<iconify-icon icon="solar:target-bold" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl mb-3 text-white tracking-tight">
              Plan 100% Adaptado
            </h3>
<p className="text-base text-neutral-400">
              La dieta se adapta a tu estilo de vida, no al revés.
            </p>
</div>
<div className="bg-neutral-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 text-left hover:-translate-y-2 hover:bg-neutral-800/60 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:border-emerald-500/30">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-500">
<iconify-icon icon="solar:chat-round-bold" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl mb-3 text-white tracking-tight">
              Soporte 24/7
            </h3>
<p className="text-base text-neutral-400">
              Contacto directo por WhatsApp para resolver dudas al instante.
            </p>
</div>
<div className="bg-neutral-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 text-left hover:-translate-y-2 hover:bg-neutral-800/60 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:border-emerald-500/30">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-500">
<iconify-icon icon="solar:chart-bold" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl mb-3 text-white tracking-tight">
              Ajustes Semanales
            </h3>
<p className="text-base text-neutral-400">
              Revisamos tu progreso cada semana para evitar estancamientos.
            </p>
</div>
<div className="bg-neutral-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 text-left hover:-translate-y-2 hover:bg-neutral-800/60 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:border-emerald-500/30">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-500">
<iconify-icon className="" icon="solar:heart-angle-bold" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl mb-3 text-white tracking-tight">
              Cero Restricciones
            </h3>
<p className="text-base text-neutral-400">
              Aprende a comer de todo consiguiendo tu mejor físico.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black text-white px-6 lg:px-8 relative border-t border-white/5" id="metodo">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-20 text-center">Más casos reales</h2>
<div className="space-y-6 max-w-5xl mx-auto">
<div className="bg-neutral-900/50 backdrop-blur-lg rounded-[2.5rem] border border-white/10 overflow-hidden grid md:grid-cols-5 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] transition-all duration-700 hover:-translate-y-1 hover:border-emerald-500/20">
<div className="md:col-span-2 aspect-square md:aspect-auto bg-neutral-800 relative">
<img alt="David" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                -12 kg en 6 meses
              </span>
</div>
<div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
<div className="flex items-center gap-1 mb-4 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                David M., 38 años
              </h3>
<p className="text-sm uppercase tracking-widest text-neutral-400 font-bold mb-6">
                Directivo · padre de dos
              </p>
<p className="text-neutral-400 leading-relaxed text-lg">
<span className="text-emerald-400 font-bold">
                  El punto de partida:
                </span>
                había probado todas las dietas y siempre recaía.
                <span className="text-emerald-400 font-bold">El obstáculo:</span>
                agenda imposible y cenas de empresa.
                <span className="text-emerald-400 font-bold">El resultado:</span>
                "Aprendí a comer de todo, entrenar de forma eficiente y por fin
                ver mis abdominales sin sufrir."
              </p>
</div>
</div>
<div className="bg-neutral-900/50 backdrop-blur-lg rounded-[2.5rem] border border-white/10 overflow-hidden grid md:grid-cols-5 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] transition-all duration-700 hover:-translate-y-1 hover:border-emerald-500/20">
<div className="md:col-span-2 aspect-square md:aspect-auto bg-neutral-800 relative">
<img alt="Laura" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                Recomposición total
              </span>
</div>
<div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
<div className="flex items-center gap-1 mb-4 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                Laura G., 31 años
              </h3>
<p className="text-sm uppercase tracking-widest text-neutral-400 font-bold mb-6">
                Solo 3 días de entreno/semana
              </p>
<p className="text-neutral-400 leading-relaxed text-lg">
<span className="text-emerald-400 font-bold">
                  El punto de partida:
                </span>
                cansada y con mala relación con la comida.
                <span className="text-emerald-400 font-bold">El obstáculo:</span>
                poco tiempo libre.
                <span className="text-emerald-400 font-bold">El resultado:</span>
                "Más energía, mejor relación con la comida y un físico que nunca
                pensé que podría lograr."
              </p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center bg-emerald-500 text-black px-8 py-4 rounded-full text-base font-bold hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.4)] w-full sm:w-auto" href="#contacto">
            Reserva tu valoración gratuita
          </a>
</div>
</div>
</section>

<section className="py-32 bg-[#f8f8f8] px-6 lg:px-8 overflow-hidden relative" id="sobre-mi">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="aspect-square rounded-[3rem] overflow-hidden bg-white shadow-[0_0_50px_rgba(16,185,129,0.15)] relative border border-neutral-200/80">
<img alt="Nando Sedano" className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfbfe4f3-0766-4e60-aa7b-05e36350bee8_1600w.jpg"/>
</div>
<div className="absolute -bottom-6 -right-2 md:right-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl px-6 py-4 ring-1 ring-neutral-200 border border-emerald-500/20">
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<div className="w-9 h-9 rounded-full bg-emerald-100 border-2 border-white"></div>
<div className="w-9 h-9 rounded-full bg-neutral-300 border-2 border-white"></div>
<div className="w-9 h-9 rounded-full bg-neutral-400 border-2 border-white"></div>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">+100 clientes</div>
<div className="text-xs text-neutral-500">
                    confían en el método
                  </div>
</div>
</div>
</div>
</div>
<div className="">
<span className="text-emerald-600 text-sm font-semibold tracking-[0.2em] uppercase">
              Mi historia
            </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-8 mt-4 leading-tight">
              No siempre fue fácil para mí.
            </h2>
<div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
<p>
                Pasé años atrapado en el ciclo de empezar dietas los lunes y
                abandonarlas el viernes. Probé todo: ayunos extremos, planes
                imposibles, entrenamientos que odiaba. Y siempre volvía al punto
                de partida, más frustrado.
              </p>
<p className="text-neutral-900 font-normal">
                El cambio no llegó cuando encontré una dieta nueva. Llegó cuando
                entendí que el problema nunca fue mi fuerza de voluntad — era la
                falta de un sistema.
              </p>
<p>
                Desde entonces he dedicado más de 8 años a perfeccionar un
                método que funciona en la vida real: con trabajo, familia,
                viajes y cenas con amigos. Hoy ayudo a personas como tú a lograr
                lo que yo tardé años en conseguir.
              </p>
</div>
<div className="mt-8 grid grid-cols-3 gap-4">
<div className="text-center bg-white/80 backdrop-blur-md rounded-2xl py-5 border border-neutral-200/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
<div className="text-2xl font-semibold tracking-tight text-neutral-900">
                  +100
                </div>
<div className="text-xs text-neutral-500 mt-1">Clientes</div>
</div>
<div className="text-center bg-white/80 backdrop-blur-md rounded-2xl py-5 border border-neutral-200/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
<div className="text-2xl font-semibold tracking-tight text-neutral-900">
                  8 años
                </div>
<div className="text-xs text-neutral-500 mt-1">Experiencia</div>
</div>
<div className="text-center bg-white/80 backdrop-blur-md rounded-2xl py-5 border border-neutral-200/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
<div className="text-2xl font-semibold tracking-tight text-neutral-900">
                  98%
                </div>
<div className="text-xs text-neutral-500 mt-1">Satisfacción</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 bg-[#f8f8f8] text-neutral-900 px-6 lg:px-8 relative overflow-hidden">
<div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[70rem] h-[70rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_60%)] blur-3xl opacity-80"></div>
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="text-emerald-600 text-sm font-bold tracking-[0.2em] uppercase">
            Mi filosofía
          </span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4 text-neutral-900">
            Tres principios que lo cambian todo
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white border-t border-emerald-500/50 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-500 border border-black/5">
<div className="text-emerald-500/20 text-6xl font-bold tracking-tighter mb-6">
              01
            </div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-900">
              Sostenibilidad ante todo
            </h3>
<p className="text-neutral-600 text-base leading-relaxed">
              Si no puedes mantenerlo el resto de tu vida, no sirve. Construimos
              hábitos, no restricciones temporales.
            </p>
</div>
<div className="bg-white border-t border-emerald-500/50 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-500 border border-black/5">
<div className="text-emerald-500/20 text-6xl font-bold tracking-tighter mb-6">
              02
            </div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-900">
              Educación, no dependencia
            </h3>
<p className="text-neutral-600 text-base leading-relaxed">
              Mi objetivo es que algún día no me necesites. Te enseño a tomar
              tus propias decisiones con criterio.
            </p>
</div>
<div className="bg-white border-t border-emerald-500/50 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-500 border border-black/5">
<div className="text-emerald-500/20 text-6xl font-bold tracking-tighter mb-6">
              03
            </div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-900">
              Tu vida primero
            </h3>
<p className="text-neutral-600 text-base leading-relaxed">
              El plan se adapta a ti, nunca al revés. Cenas, viajes y vida
              social incluidos en la ecuación.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 px-6 lg:px-8 overflow-hidden relative">
<div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[70rem] h-[70rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)] blur-3xl"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center mb-20">
<span className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase">
            Transparencia Total
          </span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mt-4">
            ¿Soy el entrenador adecuado para ti?
          </h2>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-neutral-900/60 backdrop-blur-xl border border-emerald-500/20 p-8 md:p-12 rounded-[2.5rem] hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-500">
<div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 border border-emerald-500/30">
<iconify-icon icon="solar:check-circle-bold" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold tracking-tight text-white mb-8">
              Este programa
              <span className="text-emerald-400">SÍ</span>
              es para ti si...
            </h3>
<ul className="space-y-6">
<li className="flex gap-4">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-read-linear" width="24"></iconify-icon>
<span className="text-neutral-300">
                  Estás dispuesto a invertir en ti mismo y comprometerte al
                  menos 3 meses.
                </span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-read-linear" width="24"></iconify-icon>
<span className="text-neutral-300">
                  Buscas un sistema sostenible que se adapte a tu trabajo,
                  viajes o familia.
                </span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-read-linear" width="24"></iconify-icon>
<span className="text-neutral-300">
                  Quieres aprender a comer de todo, entendiendo el porqué de
                  cada decisión.
                </span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-read-linear" width="24"></iconify-icon>
<span className="text-neutral-300">
                  Valoras la comunicación directa y el feedback honesto para
                  mejorar.
                </span>
</li>
</ul>
</div>

<div className="bg-neutral-900/40 backdrop-blur-xl border border-red-500/10 p-8 md:p-12 rounded-[2.5rem] hover:border-red-500/30 hover:shadow-[0_0_40px_rgba(239,68,68,0.08)] transition-all duration-500">
<div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-8 border border-red-500/20">
<iconify-icon icon="solar:close-circle-bold" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold tracking-tight text-white mb-8">
              Este programa
              <span className="text-red-400">NO</span>
              es para ti si...
            </h3>
<ul className="space-y-6">
<li className="flex gap-4">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-square-linear" width="24"></iconify-icon>
<span className="text-neutral-400">
                  Buscas resultados mágicos en 2 semanas sin hacer ningún
                  esfuerzo.
                </span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-square-linear" width="24"></iconify-icon>
<span className="text-neutral-400">
                  Quieres una rutina de PDF de 20€ para copiar y pegar sin
                  seguimiento.
                </span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-square-linear" width="24"></iconify-icon>
<span className="text-neutral-400">
                  No estás dispuesto a ser honesto con tus reportes semanales.
                </span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-square-linear" width="24"></iconify-icon>
<span className="text-neutral-400">
                  Pones excusas constantemente en lugar de buscar soluciones.
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white px-6 lg:px-8 relative overflow-hidden">
<div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06),transparent_60%)] blur-3xl"></div>
<div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] blur-3xl"></div>
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="text-emerald-600 text-sm font-semibold tracking-[0.2em] uppercase">
            El proceso
          </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mt-4">
            Qué ocurre exactamente cuando aplicas
          </h2>
<p className="text-neutral-600 mt-6 text-lg max-w-xl mx-auto">
            Cero incertidumbre. Esto es lo que vivirás paso a paso desde el
            primer día.
          </p>
</div>
<div className="relative border-l-2 border-neutral-200 ml-6 md:ml-12 space-y-16 pb-8">

<div className="relative pl-10 md:pl-16">
<div className="absolute -left-[1.125rem] top-0 w-9 h-9 rounded-full bg-white border-[3px] border-emerald-500 flex items-center justify-center text-sm font-semibold text-neutral-900 shadow-[0_0_15px_rgba(16,185,129,0.2)] ring-8 ring-white transition-transform hover:scale-110">
              1
            </div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3 hover:text-emerald-600 transition-colors cursor-default">
              Valoración inicial
            </h3>
<p className="text-neutral-600 text-lg leading-relaxed">
              Analizamos tu punto de partida, estilo de vida, historial de
              dietas, lesiones y objetivos para no dejar nada al azar.
            </p>
</div>

<div className="relative pl-10 md:pl-16">
<div className="absolute -left-[1.125rem] top-0 w-9 h-9 rounded-full bg-white border-[3px] border-emerald-500 flex items-center justify-center text-sm font-semibold text-neutral-900 shadow-[0_0_15px_rgba(16,185,129,0.2)] ring-8 ring-white transition-transform hover:scale-110">
              2
            </div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3 hover:text-emerald-600 transition-colors cursor-default">
              Plan personalizado
            </h3>
<p className="text-neutral-600 text-lg leading-relaxed">
              Diseñamos tu programa de nutrición y entrenamiento. Algo realista
              que se adapte a tu vida, no tu vida al plan.
            </p>
</div>

<div className="relative pl-10 md:pl-16">
<div className="absolute -left-[1.125rem] top-0 w-9 h-9 rounded-full bg-white border-[3px] border-emerald-500 flex items-center justify-center text-sm font-semibold text-neutral-900 shadow-[0_0_15px_rgba(16,185,129,0.2)] ring-8 ring-white transition-transform hover:scale-110">
              3
            </div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3 hover:text-emerald-600 transition-colors cursor-default">
              Seguimiento semanal
            </h3>
<p className="text-neutral-600 text-lg leading-relaxed">
              Revisión constante de métricas, sensaciones, energía y adherencia.
              Contacto directo para resolver cualquier duda.
            </p>
</div>

<div className="relative pl-10 md:pl-16">
<div className="absolute -left-[1.125rem] top-0 w-9 h-9 rounded-full bg-white border-[3px] border-emerald-500 flex items-center justify-center text-sm font-semibold text-neutral-900 shadow-[0_0_15px_rgba(16,185,129,0.2)] ring-8 ring-white transition-transform hover:scale-110">
              4
            </div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3 hover:text-emerald-600 transition-colors cursor-default">
              Ajustes constantes
            </h3>
<p className="text-neutral-600 text-lg leading-relaxed">
              El cuerpo es dinámico. Haremos las modificaciones necesarias en el
              momento adecuado para asegurar el progreso continuo.
            </p>
</div>

<div className="relative pl-10 md:pl-16">
<div className="absolute -left-[1.125rem] top-0 w-9 h-9 rounded-full bg-white border-[3px] border-emerald-500 flex items-center justify-center text-sm font-semibold text-neutral-900 shadow-[0_0_15px_rgba(16,185,129,0.2)] ring-8 ring-white transition-transform hover:scale-110">
              5
            </div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3 hover:text-emerald-600 transition-colors cursor-default">
              Resultados sostenibles
            </h3>
<p className="text-neutral-600 text-lg leading-relaxed">
              Llegas a tu objetivo no solo con un mejor físico, sino con la
              educación y las herramientas para mantenerlo de por vida.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f8f8f8] px-6 lg:px-8 relative" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 mb-16 text-center">
          Preguntas Frecuentes
        </h2>
<div className="space-y-0">

<details className="group bg-transparent border-b border-black/5 overflow-hidden rounded-none hover:bg-black/[0.02] transition-colors">
<summary className="flex items-center justify-between cursor-pointer py-8 font-medium text-xl text-neutral-900">
              ¿Cuánto tiempo tardaré en ver resultados?
              <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-8 text-lg text-neutral-600 leading-relaxed border-none mt-0">
              Depende de tu punto de partida y adherencia, pero la mayoría de
              mis clientes notan cambios visibles en las primeras 4 semanas. El
              objetivo principal es que estos resultados sean sostenibles, no
              buscamos pérdidas de peso irreales en tiempo récord.
            </div>
</details>

<details className="group bg-transparent border-b border-black/5 overflow-hidden rounded-none hover:bg-black/[0.02] transition-colors">
<summary className="flex items-center justify-between cursor-pointer py-8 font-medium text-xl text-neutral-900">
              ¿Necesito ir al gimnasio?
              <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-8 text-lg text-neutral-600 leading-relaxed border-none mt-0">
              No es obligatorio. El entrenamiento se adapta a tu entorno. Si
              prefieres entrenar en casa con material básico o incluso con tu
              propio peso corporal, el programa se diseñará específicamente para
              ello.
            </div>
</details>

<details className="group bg-transparent border-b border-black/5 overflow-hidden rounded-none hover:bg-black/[0.02] transition-colors">
<summary className="flex items-center justify-between cursor-pointer py-8 font-medium text-xl text-neutral-900">
              ¿Puedo empezar si soy principiante?
              <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-8 text-lg text-neutral-600 leading-relaxed border-none mt-0">
              Absolutamente. De hecho, es el mejor momento para empezar con un
              profesional, ya que construirás una base sólida y evitarás los
              errores típicos que comete la gente al inicio. Todo estará
              adaptado a tu nivel de experiencia.
            </div>
</details>

<details className="group bg-transparent border-b border-black/5 overflow-hidden rounded-none hover:bg-black/[0.02] transition-colors">
<summary className="flex cursor-pointer text-xl font-medium text-neutral-900 py-8 items-center justify-between">
  ¿Y si tengo poco tiempo?
  <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(115, 115, 115)'}} width="20"></iconify-icon>
</span>
</summary>
<div className="pb-8 text-lg text-neutral-600 leading-relaxed border-none mt-0">
              Trabajamos a través de una plataforma/app donde tendrás tu plan
              detallado, vídeos de los ejercicios y registro de métricas.
              Hacemos un check-in semanal en profundidad y tienes soporte
              directo por chat para resolver dudas durante la semana.
            </div>
</details>

<details className="group bg-transparent border-b border-black/5 overflow-hidden rounded-none hover:bg-black/[0.02] transition-colors">
<summary className="flex items-center justify-between cursor-pointer py-8 font-medium text-xl text-neutral-900">
              ¿Qué hace diferente tu asesoría?
              <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-8 text-lg text-neutral-600 leading-relaxed border-none mt-0">
              No vendo PDFs genéricos. Vendo un servicio de acompañamiento y
              resolución de problemas. La clave no es darte una dieta, es
              entender por qué fallaste en el pasado, educarte nutricionalmente
              e integrar el fitness en tu estilo de vida sin que se convierta en
              una obsesión.
            </div>
</details>
</div>
</div>
</section>

<section className="py-40 bg-black text-white px-6 lg:px-8 text-center relative overflow-hidden isolate" id="contacto">
<div className="pointer-events-none absolute -top-44 left-1/2 -translate-x-1/2 w-[70rem] h-[70rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.3),transparent_60%)] blur-[100px] opacity-100 mix-blend-screen"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-white/[0.04] to-transparent opacity-60 pointer-events-none rounded-full blur-3xl"></div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95] bg-gradient-to-br from-white via-white to-neutral-500 bg-clip-text text-transparent">
          Cada semana que esperas
          <br/>
          es una semana que no vuelve.
        </h2>
<p className="text-xl md:text-2xl text-neutral-400 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
          Trabajo solo con un número limitado de clientes al mes para garantizar
          un seguimiento real 1 a 1. Si encajas, hoy puede ser el primer día del
          resto de tu físico.
        </p>
<div className="inline-flex items-center gap-2 text-sm text-emerald-400 font-medium mb-10 bg-emerald-500/10 px-5 py-2.5 rounded-full border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
          Solo quedan 3 plazas disponibles este mes
        </div>
<a className="inline-flex items-center justify-center bg-emerald-500 text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-emerald-400 transition-all duration-500 hover:scale-[1.02] shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:shadow-[0_0_80px_rgba(16,185,129,0.6)] ring-1 ring-white/20 group" href="#">
          Reservar mi plaza ahora
          <svg className="ml-2 group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<p className="mt-6 text-sm text-neutral-500">
          Sin compromiso · Valoración 100% gratuita · Respuesta en 24h
        </p>
</div>
</section>

<footer className="bg-black py-12 px-6 lg:px-8 border-t border-white/10 text-center md:text-left">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="tracking-tighter font-medium text-lg uppercase text-white">
          NS.
        </div>
<div className="flex items-center gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Términos</a>
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
</div>
<div className="text-sm text-neutral-600">
          © 2024 Nando Sedano. Todos los derechos reservados.
        </div>
</div>
</footer>

<a aria-label="Contactar por WhatsApp" className="fixed bottom-6 right-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white w-14 h-14 rounded-full shadow-[0_14px_45px_rgba(16,185,129,0.5)] hover:shadow-[0_18px_60px_rgba(16,185,129,0.65)] transition-all hover:scale-110 z-50 flex items-center justify-center ring-1 ring-white/25" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</a>

    </>
  );
}
