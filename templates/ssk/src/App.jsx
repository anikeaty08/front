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



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<div className="flex items-center gap-2">
<img alt="SSK Telecomunicaciones Logo" className="w-auto h-13" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fd775aa-297e-409c-8c0c-fec4e05f09fa_320w.png"/>
</div>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-blue-600 relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600" href="#">
            Inicio
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Servicios
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Tecnologías
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Proyectos
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Nosotros
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Contacto
          </a>
</div>

<div className="hidden lg:flex items-center">
<a className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors" href="#">
            Solicitar Cotización
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<button className="lg:hidden p-2 text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-32" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4898326-d03d-4549-9a85-1039264d1df6_3840w.png\')', backgroundSize: 'cover', backgroundPosition: 'center 0', backgroundRepeat: 'no-repeat'}}>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-8 border backdrop-blur-sm bg-blue-50 text-blue-600 border-blue-200">
<i className="w-4 h-4" data-lucide="calendar"></i>
              DESDE 2009 CONECTANDO EL FUTURO
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Construimos las
              <br/>
              Redes que Conectan
              <br/>
              el
              <span className="text-blue-600">Futuro</span>
</h1>
<p className="text-lg lg:text-xl mb-10 max-w-xl leading-relaxed text-slate-600">
              Ingeniería, implementación y mantenimiento de infraestructura de
              telecomunicaciones de nueva generación.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors" href="#">
                Solicitar Cotización
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 border px-6 py-3 rounded-lg text-base font-medium transition-colors backdrop-blur-sm bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm" href="#">
                Ver Proyectos
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-200">
<div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm bg-blue-100 text-blue-600">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div className="text-sm mb-1 text-slate-600">Desde</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                  2009
                </div>
<div className="text-sm mt-1 text-slate-600">Experiencia</div>
</div>
<div className="">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm bg-blue-100 text-blue-600">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div className="text-sm mb-1 text-slate-600">Cobertura</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                  Nacional
                </div>
<div className="text-sm mt-1 text-slate-600">
                  Presencia en todo el país
                </div>
</div>
<div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm bg-blue-100 text-blue-600">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<div className="text-sm mb-1 text-slate-600">+500</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                  Proyectos
                </div>
<div className="text-sm mt-1 text-slate-600">
                  Completados exitosamente
                </div>
</div>
<div className="">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm bg-blue-100 text-blue-600">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div className="text-sm mb-1 text-slate-600">24/7</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                  Disponibilidad
                </div>
<div className="text-sm mt-1 text-slate-600">
                  Soporte especializado
                </div>
</div>
</div>
</div>

</div>
</div>

</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-3 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="layers"></i>
              NUESTROS SERVICIOS
            </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Soluciones Integrales en Telecomunicaciones
            </h2>
</div>
<div className="max-w-md">
<p className="text-base text-slate-600">
              Ofrecemos soluciones end-to-end para el diseño, implementación y
              mantenimiento de redes de telecomunicaciones.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 bg-white flex flex-col h-full">
<div className="h-24 w-full bg-slate-50 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
<i className="w-12 h-12 stroke-[1]" data-lucide="wifi"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Redes Inalámbricas
            </h3>
<p className="text-base text-slate-600 mb-6 flex-grow">
              Diseño e implementación de redes móviles y enlaces inalámbricos.
            </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
              Ver más
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 bg-white flex flex-col h-full">
<div className="h-24 w-full bg-slate-50 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
<i className="w-12 h-12 stroke-[1]" data-lucide="cable"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Fibra Óptica FTTH
            </h3>
<p className="text-base text-slate-600 mb-6 flex-grow">
              Redes FTTH / FTTx de alta velocidad basadas en GPON.
            </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
              Ver más
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 bg-white flex flex-col h-full">
<div className="h-24 w-full bg-slate-50 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
<i className="w-12 h-12 stroke-[1]" data-lucide="server"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              DWDM y Transporte
            </h3>
<p className="text-base text-slate-600 mb-6 flex-grow">
              Soluciones DWDM, Carrier Ethernet y transporte de alta capacidad.
            </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
              Ver más
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 bg-white flex flex-col h-full">
<div className="h-24 w-full bg-slate-50 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
<i className="w-12 h-12 stroke-[1]" data-lucide="network"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Cableado Estructurado
            </h3>
<p className="text-base text-slate-600 mb-6 flex-grow">
              Infraestructura de cableado certificado de alto rendimiento.
            </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
              Ver más
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 bg-white flex flex-col h-full">
<div className="h-24 w-full bg-slate-50 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
<i className="w-12 h-12 stroke-[1]" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Infraestructura de Telecomunicaciones
            </h3>
<p className="text-base text-slate-600 mb-6 flex-grow">
              Construcción de torres, sitios, obras civiles y energía.
            </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
              Ver más
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 bg-white flex flex-col h-full">
<div className="h-24 w-full bg-slate-50 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
<i className="w-12 h-12 stroke-[1]" data-lucide="wrench"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Mantenimiento Especializado
            </h3>
<p className="text-base text-slate-600 mb-6 flex-grow">
              Mantenimiento preventivo y correctivo de redes e infraestructura.
            </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
              Ver más
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 bg-white flex flex-col h-full">
<div className="h-24 w-full bg-slate-50 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
<i className="w-12 h-12 stroke-[1]" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Consultoría Tecnológica
            </h3>
<p className="text-base text-slate-600 mb-6 flex-grow">
              Consultoría, auditoría y diseño de soluciones a la medida.
            </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
              Ver más
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center justify-center gap-2 text-blue-600 text-sm font-medium mb-3 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="cpu"></i>
            TECNOLOGÍAS
          </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Trabajamos con las tecnologías más avanzadas del mercado
          </h2>
</div>

<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 flex items-center justify-center text-blue-600">
<i className="w-10 h-10 stroke-[1]" data-lucide="radio"></i>
</div>
<span className="text-base font-medium text-slate-900 tracking-tight">
              LTE
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 flex items-center justify-center text-blue-600">
<span className="text-3xl font-semibold tracking-tighter">5G</span>
</div>
<span className="text-base font-medium text-slate-900 tracking-tight">
              5G
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 flex items-center justify-center text-blue-600">
<i className="w-10 h-10 stroke-[1]" data-lucide="cable"></i>
</div>
<span className="text-base font-medium text-slate-900 tracking-tight">
              FTTH
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 flex items-center justify-center text-blue-600">
<i className="w-10 h-10 stroke-[1]" data-lucide="satellite-dish"></i>
</div>
<span className="text-base font-medium text-slate-900 tracking-tight">
              GPON
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 flex items-center justify-center text-blue-600">
<i className="w-10 h-10 stroke-[1]" data-lucide="network"></i>
</div>
<span className="text-base font-medium text-slate-900 tracking-tight text-center leading-tight">
              Carrier
              <br/>
              Ethernet
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 flex items-center justify-center text-blue-600">
<i className="w-10 h-10 stroke-[1]" data-lucide="server"></i>
</div>
<span className="text-base font-medium text-slate-900 tracking-tight">
              DWDM
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 flex items-center justify-center text-blue-600">
<i className="w-10 h-10 stroke-[1]" data-lucide="router"></i>
</div>
<span className="text-base font-medium text-slate-900 tracking-tight">
              Microondas
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 flex items-center justify-center text-blue-600">
<i className="w-10 h-10 stroke-[1]" data-lucide="database"></i>
</div>
<span className="text-base font-medium text-slate-900 tracking-tight text-center leading-tight">
              Data
              <br/>
              Centers
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 flex items-center justify-center text-blue-600">
<i className="w-10 h-10 stroke-[1]" data-lucide="cpu"></i>
</div>
<span className="text-base font-medium text-slate-900 tracking-tight">
              IoT
            </span>
</div>
</div>
</div>

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
<i className="w-[800px] h-[800px]" data-lucide="globe"></i>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-3 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="folder-kanban"></i>
              PROYECTOS DESTACADOS
            </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Conectamos Proyectos,
              <br/>
              Impulsamos Desarrollo
            </h2>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
              Todos
            </button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors">
              Operadores Móviles
            </button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors">
              FTTH
            </button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors">
              Empresas
            </button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors">
              Infraestructura
            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-200 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<i className="w-8 h-8" data-lucide="image"></i>
</div>
</div>
<div className="p-6">
<span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded uppercase tracking-wider mb-3">
                OPERADORES MÓVILES
              </span>
<h3 className="text-xl font-semibold text-slate-900 mb-1 tracking-tight">
                Expansión 4G/5G Operador Nacional
              </h3>
<p className="text-sm text-slate-600 mb-6 font-medium">
                +120 Sitios implementados
              </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
                Ver caso de éxito
                <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-200 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-blue-900/10">
<i className="w-8 h-8" data-lucide="cable"></i>
</div>
</div>
<div className="p-6">
<span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded uppercase tracking-wider mb-3">
                FTTH
              </span>
<h3 className="text-xl font-semibold text-slate-900 mb-1 tracking-tight">
                Red FTTH Ciudad Inteligente
              </h3>
<p className="text-sm text-slate-600 mb-6 font-medium">
                +50,000 Hogares Conectados
              </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
                Ver caso de éxito
                <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-200 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<i className="w-8 h-8" data-lucide="building-2"></i>
</div>
</div>
<div className="p-6">
<span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded uppercase tracking-wider mb-3">
                EMPRESAS
              </span>
<h3 className="text-xl font-semibold text-slate-900 mb-1 tracking-tight">
                Red Corporativa Multi-sedes
              </h3>
<p className="text-sm text-slate-600 mb-6 font-medium">
                +200 Enlaces implementados
              </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
                Ver caso de éxito
                <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-200 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<i className="w-8 h-8" data-lucide="mountain"></i>
</div>
</div>
<div className="p-6">
<span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded uppercase tracking-wider mb-3">
                INFRAESTRUCTURA
              </span>
<h3 className="text-xl font-semibold text-slate-900 mb-1 tracking-tight">
                Infraestructura Nacional
              </h3>
<p className="text-sm text-slate-600 mb-6 font-medium">
                +80 Torres Construidas
              </p>
<a className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" href="#">
                Ver caso de éxito
                <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<div className="inline-flex items-center justify-center gap-2 text-blue-600 text-sm font-medium mb-3 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="git-merge"></i>
            NUESTRO PROCESO
          </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Metodología probada para resultados excepcionales
          </h2>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-10 left-12 right-12 h-px border-t border-dashed border-slate-300"></div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">

<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-blue-100 shadow-sm rounded-full flex items-center justify-center text-blue-600 mb-4 z-10 relative">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="users"></i>
<div className="absolute -bottom-3 bg-white px-2 text-xs font-semibold text-slate-400">
                  01
                </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Consultoría
              </h3>
<p className="text-sm text-slate-600">
                Analizamos tus necesidades y diseñamos la mejor solución.
              </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-blue-100 shadow-sm rounded-full flex items-center justify-center text-blue-600 mb-4 z-10 relative">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="compass"></i>
<div className="absolute -bottom-3 bg-white px-2 text-xs font-semibold text-slate-400">
                  02
                </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Ingeniería
              </h3>
<p className="text-sm text-slate-600">
                Diseñamos redes robustas, escalables y eficientes.
              </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-blue-100 shadow-sm rounded-full flex items-center justify-center text-blue-600 mb-4 z-10 relative">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="hammer"></i>
<div className="absolute -bottom-3 bg-white px-2 text-xs font-semibold text-slate-400">
                  03
                </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Implementación
              </h3>
<p className="text-sm text-slate-600">
                Ejecutamos con altos estándares de calidad y seguridad.
              </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-blue-100 shadow-sm rounded-full flex items-center justify-center text-blue-600 mb-4 z-10 relative">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="check-circle-2"></i>
<div className="absolute -bottom-3 bg-white px-2 text-xs font-semibold text-slate-400">
                  04
                </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Certificación
              </h3>
<p className="text-sm text-slate-600">
                Validamos y certificamos cada componente.
              </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-blue-100 shadow-sm rounded-full flex items-center justify-center text-blue-600 mb-4 z-10 relative">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="headset"></i>
<div className="absolute -bottom-3 bg-white px-2 text-xs font-semibold text-slate-400">
                  05
                </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Soporte
              </h3>
<p className="text-sm text-slate-600">
                Acompañamiento 24/7 para máxima disponibilidad.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-3 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
            NUESTROS NÚMEROS
          </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-lg">
            La confianza se construye con resultados
          </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="border border-slate-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-48">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-slate-600">
                  Disponibilidad de Red
                </span>
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  02
                </span>
</div>
<div>
<div className="text-4xl font-semibold tracking-tighter text-slate-900 mb-4">
                  99.99%
                </div>

<svg className="w-full h-8 text-blue-400" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,25 C10,25 15,5 25,5 C35,5 40,20 50,20 C60,20 65,10 75,10 C85,10 90,28 100,28" fill="none" stroke="currentColor" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="border border-slate-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-48">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-slate-600">
                  Proyectos Completados
                </span>
</div>
<div>
<div className="text-4xl font-semibold tracking-tighter text-slate-900 mb-4">
                  +500
                </div>

<div className="flex items-end gap-1 h-8">
<div className="w-full bg-blue-500 rounded-t-sm" style={{height: '40%'}}></div>
<div className="w-full bg-blue-500 rounded-t-sm" style={{height: '60%'}}></div>
<div className="w-full bg-blue-500 rounded-t-sm" style={{height: '50%'}}></div>
<div className="w-full bg-blue-500 rounded-t-sm" style={{height: '80%'}}></div>
<div className="w-full bg-blue-500 rounded-t-sm" style={{height: '70%'}}></div>
<div className="w-full bg-blue-600 rounded-t-sm" style={{height: '100%'}}></div>
<div className="w-full bg-blue-500 rounded-t-sm" style={{height: '90%'}}></div>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-48">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-slate-600">
                  Cobertura Nacional
                </span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-4xl font-semibold tracking-tighter text-slate-900">
                    24
                  </div>
<div className="text-sm text-slate-500 mt-1">Departamentos</div>
</div>

<div className="w-16 h-16 text-blue-200">
<svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100">
<path d="M50,10 C30,10 20,30 20,50 C20,70 40,90 50,90 C60,90 80,70 80,50 C80,30 70,10 50,10 Z"></path>
</svg>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-48">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-slate-600">
                  Tiempo de Respuesta
                </span>
</div>
<div>
<div className="text-4xl font-semibold tracking-tighter text-slate-900 mb-1">
                  &lt; 2 hrs
                </div>
<div className="text-sm text-slate-500 mb-4">Promedio</div>

<svg className="w-full h-6 text-blue-300" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0,15 C10,15 15,5 25,10 C35,15 40,5 50,5 C60,5 65,18 75,10 C85,2 90,12 100,8" fill="none" stroke="currentColor" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-2xl p-8 bg-white flex flex-col h-full min-h-[400px]">
<div className="mb-6">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                Monitoreo 24/7
              </h3>
<p className="text-sm text-slate-500">Centro de Operaciones de Red</p>
</div>

<div className="flex-grow relative bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4">
<div className="relative w-full h-full max-w-xs opacity-70">

<svg className="w-full h-full text-blue-200" viewbox="0 0 200 100">
<path d="M20,50 L50,20 L80,60 L120,30 L160,70 L180,40" fill="none" stroke="currentColor" stroke-dasharray="2,2" strokeWidth="1"></path>
<path d="M30,80 L60,50 L100,80 L140,50 L170,80" fill="none" stroke="currentColor" stroke-dasharray="2,2" strokeWidth="1"></path>

<circle className="fill-blue-500" cx="20" cy="50" r="3"></circle>
<circle className="fill-blue-600" cx="50" cy="20" r="4"></circle>
<circle className="fill-blue-500" cx="80" cy="60" r="3"></circle>
<circle className="fill-blue-600 animate-pulse" cx="120" cy="30" r="5"></circle>
<circle className="fill-blue-500" cx="160" cy="70" r="3"></circle>
<circle className="fill-blue-500" cx="180" cy="40" r="4"></circle>
<circle className="fill-blue-400" cx="30" cy="80" r="3"></circle>
<circle className="fill-blue-500" cx="60" cy="50" r="4"></circle>
<circle className="fill-blue-400" cx="100" cy="80" r="3"></circle>
<circle className="fill-blue-500" cx="140" cy="50" r="4"></circle>
<circle className="fill-blue-400" cx="170" cy="80" r="3"></circle>
</svg>
</div>
</div>
<div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-100">
<span className="font-medium text-slate-900">Estado de la Red</span>
<div className="flex items-center gap-2 text-emerald-600 font-medium">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Óptimo
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-3 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="building"></i>
            NUESTROS CLIENTES
          </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Ellos confían en nosotros
          </h2>
</div>

<div className="relative flex items-center justify-between gap-4">
<button className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-sm flex-shrink-0">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<div className="flex-grow flex items-center justify-around flex-wrap gap-8 py-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-2xl font-bold tracking-tighter text-red-600 flex items-center">
              Claro
              <span className="text-3xl leading-none ml-0.5">-</span>
</div>
<div className="text-2xl font-bold tracking-tighter text-blue-800 flex items-center">
<div className="w-6 h-6 rounded-full bg-blue-800 text-white flex items-center justify-center text-xs mr-1">
                t
              </div>
              igo
            </div>
<div className="text-xl font-bold tracking-tight text-blue-900 flex items-center gap-2">
<div className="flex gap-0.5">
<span className="w-2 h-2 rounded-full bg-blue-600"></span>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
</div>
              Telefónica
            </div>
<div className="text-2xl font-black tracking-tighter text-purple-900">
              WOM
            </div>
<div className="text-2xl font-bold tracking-tight text-blue-600 flex items-center gap-1">
<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center italic">
                e)
              </div>
              entel
            </div>
<div className="text-2xl font-bold tracking-tighter text-green-600 flex items-center gap-1">
<span className="text-3xl text-green-500">M</span>
              movistar
            </div>
</div>
<button className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-sm flex-shrink-0">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 py-12">
<div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 bg-blue-900/20 rounded-full blur-2xl"></div>
<div className="relative z-10 max-w-2xl text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Impulsemos juntos la próxima
            <br/>
            generación de telecomunicaciones
          </h2>
<p className="text-blue-100 text-lg">
            Hablemos de tu proyecto y llevemos tu red al siguiente nivel.
          </p>
</div>
<div className="relative z-10">
<a className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-xl text-base font-medium transition-colors shadow-lg" href="#">
            Hablar con un Especialista
            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="radio-tower"></i>
</div>
<div>
<span className="font-semibold text-xl tracking-tight block leading-none">
                  SSK
                </span>
<span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">
                  Telecomunicaciones
                </span>
</div>
</div>
<p className="text-base text-slate-600 mb-8 max-w-sm">
              Desde 2009, somos líderes en soluciones de telecomunicaciones,
              conectando personas, empresas y comunidades.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
</div>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-6 tracking-tight">
              Enlaces Rápidos
            </h4>
<ul className="space-y-4">
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Inicio
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Servicios
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Tecnologías
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Proyectos
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Nosotros
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Contacto
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-6 tracking-tight">
              Servicios
            </h4>
<ul className="space-y-4">
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Redes Inalámbricas
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Fibra Óptica FTTH
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  DWDM y Transporte
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Cableado Estructurado
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Infraestructura
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Mantenimiento
                </a>
</li>
<li>
<a className="text-base text-slate-600 hover:text-blue-600 transition-colors" href="#">
                  Consultoría
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-6 tracking-tight">
              Contacto
            </h4>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" data-lucide="phone"></i>
<span className="text-base text-slate-600">+57 1 123 4567</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" data-lucide="mail"></i>
<span className="text-base text-slate-600">
                  info@ssktelecomunicaciones.com
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" data-lucide="map-pin"></i>
<span className="text-base text-slate-600">Bogotá, Colombia</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" data-lucide="globe"></i>
<span className="text-base text-slate-600">Cobertura Nacional</span>
</li>
</ul>
<h4 className="font-semibold text-slate-900 mb-4 tracking-tight">
              Certificaciones
            </h4>
<div className="flex gap-3">

<div className="w-10 h-10 rounded-full border border-slate-200 flex flex-col items-center justify-center text-[8px] font-bold text-slate-500">
<span>ISO</span>
<span>9001</span>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex flex-col items-center justify-center text-[8px] font-bold text-slate-500">
<span>ISO</span>
<span>14001</span>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex flex-col items-center justify-center text-[8px] font-bold text-slate-500">
<span>ISO</span>
<span>45001</span>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-500">
            © 2024 SSK Telecomunicaciones. Todos los derechos reservados.
          </p>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
              Política de Privacidad
            </a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
              Términos y Condiciones
            </a>
</div>
</div>
</div>
</footer>




    </>
  );
}
