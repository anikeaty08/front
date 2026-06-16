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



      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#FBF9F6]/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-emerald-900 rounded-full flex items-center justify-center text-white">
<iconify-icon className="text-base" icon="solar:health-linear"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tighter text-emerald-950">
            GCV
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-stone-600">
<a className="hover:text-emerald-900 transition-colors" href="#especialidades">
            Especialidades
          </a>
<a className="hover:text-emerald-900 transition-colors" href="#enfoque">
            Mi Enfoque
          </a>
<a className="hover:text-emerald-900 transition-colors" href="#instalaciones">
            Instalaciones
          </a>
<a className="hover:text-emerald-900 transition-colors" href="#testimonios">
            Testimonios
          </a>
<div className="w-px h-5 bg-stone-200 mx-2"></div>
<a className="flex items-center gap-1.5 text-emerald-800 font-medium hover:text-emerald-600 transition-colors" href="tel:+529991355202">
<iconify-icon className="text-lg" icon="solar:phone-bold"></iconify-icon>
            999 135 5202
          </a>
</div>
<a className="hidden md:inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-900/10" href="https://wa.me/529991355202?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20el%20Dr.%20Cueto." target="_blank">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
          Agendar Cita
        </a>
<a className="md:hidden flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 transition-colors" href="tel:+529991355202">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>
</div>
</nav>

<header className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 text-emerald-900 rounded-full text-xs font-medium mb-6 border border-emerald-200/50">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Consultas disponibles en Mérida, Yuc.
          </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-emerald-950 leading-[1.1] mb-8">
            Atención urológica
            <br/>
            de primer nivel,
            <br/>
<span className="italic serif text-stone-400 font-normal">
              con trato humano.
            </span>
</h1>
<p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-lg mb-10 font-normal">
            Soy el Dr. Guillermo Cueto, especialista en próstata, cálculos
            urinarios e incontinencia. Te ofrezco soluciones médicas y de mínima
            invasión para que recuperes tu tranquilidad y calidad de vida.
          </p>
<div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
<a className="bg-emerald-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-emerald-700 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2" href="https://wa.me/529991355202?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20consulta." target="_blank">
<iconify-icon className="text-xl" icon="solar:calendar-add-linear"></iconify-icon>
              Agendar consulta
            </a>
<a className="bg-white text-emerald-900 px-8 py-4 rounded-full text-base font-medium hover:bg-emerald-50 transition-all shadow-sm border border-emerald-100 hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2" href="https://wa.me/529991355202?text=Hola,%20tengo%20una%20urgencia%20m%C3%A9dica." target="_blank">
<iconify-icon className="text-xl text-emerald-600" icon="solar:siren-rounded-linear"></iconify-icon>
              Atención a urgencias
            </a>
</div>
<p className="text-sm text-stone-500 mb-12 ml-1 flex items-center gap-1.5 font-medium">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
            Valoración personalizada en un ambiente de confianza
          </p>
<div className="flex flex-wrap gap-x-8 gap-y-2 text-stone-500 text-sm font-medium pt-8 border-t border-stone-200">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-700 text-lg" icon="solar:shield-check-linear"></iconify-icon>
              Urólogo Certificado
            </div>
<div className="flex items-center gap-2">
<div className="flex text-emerald-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-stone-600">Alta satisfacción en pacientes</span>
</div>
<div className="flex items-center gap-2 w-full text-stone-500 mt-2">
<iconify-icon className="text-emerald-700 text-lg shrink-0" icon="solar:diploma-verified-linear"></iconify-icon>
<span>
                +10 años de exp.
                <span className="mx-1">•</span>
                Céd. Prof. 9541248
                <span className="mx-1">•</span>
                Céd. Esp. 12385117
              </span>
</div>
</div>
</div>
<div className="relative lg:h-[600px] reveal delay-200 hidden lg:block">
<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
<img alt="Médico en consulta" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
</div>
<div className="absolute top-12 -left-8 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/50 animate-float max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
<iconify-icon className="text-lg" icon="solar:user-heart-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-stone-500 font-medium">
                  Recuperación
                </div>
<div className="text-sm font-medium text-emerald-950">
                  Mínima Invasión
                </div>
</div>
</div>
<div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[90%] rounded-full"></div>
</div>
</div>
<div className="absolute bottom-24 -right-8 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl border border-white/50 animate-float-delayed">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
<iconify-icon className="text-2xl" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">
                  "Me explicó todo con claridad."
                </p>
<div className="flex text-emerald-500 mt-0.5 text-xs">
<iconify-icon className="text-emerald-500" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 mx-2 md:mx-6 bg-white rounded-[3rem] shadow-sm border border-stone-100 relative overflow-hidden" id="especialidades">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-stone-100 rounded-full blur-3xl"></div>
<div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-6 max-w-3xl mx-auto">
            No tienes por qué acostumbrarte
            <br/>
<span className="italic serif text-stone-400">
              a vivir con incomodidad.
            </span>
</h2>
<p className="text-lg text-stone-600 max-w-2xl mx-auto px-4">
            Atención médica integral respaldada por años de experiencia para el
            diagnóstico y tratamiento de diversas afecciones urológicas.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-[#FBF9F6]/80 backdrop-blur p-6 xl:p-8 rounded-3xl border border-stone-100 group hover:bg-white hover:shadow-md transition-all reveal hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100/50 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-emerald-700" icon="solar:men-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">
              Crecimiento Prostático
            </h3>
<p className="text-sm text-stone-600 leading-relaxed">
              Opciones para ganas frecuentes de orinar, flujo débil o sensación
              de no vaciar. Recupera tu descanso.
            </p>
</div>
<div className="bg-[#FBF9F6]/80 backdrop-blur p-6 xl:p-8 rounded-3xl border border-stone-100 group hover:bg-white hover:shadow-md transition-all reveal delay-100 hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100/50 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-emerald-700" icon="solar:droplet-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">
              Cálculos Urinarios
            </h3>
<p className="text-sm text-stone-600 leading-relaxed">
              Eliminamos el dolor agudo causado por piedras, utilizando
              tecnología láser sin cirugía abierta.
            </p>
</div>
<div className="bg-[#FBF9F6]/80 backdrop-blur p-6 xl:p-8 rounded-3xl border border-stone-100 group hover:bg-white hover:shadow-md transition-all reveal delay-200 hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100/50 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-emerald-700" icon="solar:waterdrop-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">
              Incontinencia Urinaria
            </h3>
<p className="text-sm text-stone-600 leading-relaxed">
              Soluciones efectivas para la pérdida involuntaria de orina al
              toser o reír. Vuelve a salir sin preocupaciones.
            </p>
</div>
<div className="bg-[#FBF9F6]/80 backdrop-blur p-6 xl:p-8 rounded-3xl border border-stone-100 group hover:bg-white hover:shadow-md transition-all reveal delay-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100/50 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-emerald-700" icon="solar:shield-plus-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">
              Cáncer de Próstata
            </h3>
<p className="text-sm text-stone-600 leading-relaxed">
              Detección oportuna, seguimiento y tratamiento oncológico con un
              enfoque humano para preservar tu calidad de vida.
            </p>
</div>
<div className="bg-[#FBF9F6]/80 backdrop-blur p-6 xl:p-8 rounded-3xl border border-stone-100 group hover:bg-white hover:shadow-md transition-all reveal hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100/50 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-emerald-700" icon="solar:bacteria-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">
              Infecciones Urinarias
            </h3>
<p className="text-sm text-stone-600 leading-relaxed">
              Manejo especializado y diagnóstico preciso para erradicar
              infecciones recurrentes o complicadas en vías urinarias.
            </p>
</div>
<div className="bg-[#FBF9F6]/80 backdrop-blur p-6 xl:p-8 rounded-3xl border border-stone-100 group hover:bg-white hover:shadow-md transition-all reveal delay-100 hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100/50 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-emerald-700" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">
              Disfunción Eréctil
            </h3>
<p className="text-sm text-stone-600 leading-relaxed">
              Opciones terapéuticas modernas, discretas y efectivas para
              ayudarte a recuperar tu salud sexual y confianza.
            </p>
</div>
<div className="bg-[#FBF9F6]/80 backdrop-blur p-6 xl:p-8 rounded-3xl border border-stone-100 group hover:bg-white hover:shadow-md transition-all reveal delay-200 hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100/50 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-emerald-700" icon="solar:scissors-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">
              Vasectomía y Circuncisión
            </h3>
<p className="text-sm text-stone-600 leading-relaxed">
              Procedimientos quirúrgicos ambulatorios rápidos, seguros y
              estéticos, garantizando una pronta recuperación.
            </p>
</div>
<div className="bg-[#FBF9F6]/80 backdrop-blur p-6 xl:p-8 rounded-3xl border border-stone-100 group hover:bg-white hover:shadow-md transition-all reveal delay-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100/50 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-emerald-700" icon="solar:user-heart-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">
              Chequeo Preventivo
            </h3>
<p className="text-sm text-stone-600 leading-relaxed">
              Valoración anual integral para hombres. La prevención y detección
              temprana son la clave para mantener una salud óptima.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="enfoque">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-6">
              Atención urológica avanzada,
              <br/>
              sin prisas ni tecnicismos.
            </h2>
<p className="text-lg text-stone-600 leading-relaxed mb-8">
              Ir al urólogo puede generar ansiedad. Mi compromiso es ofrecerte
              un espacio de confianza donde escuchemos tus síntomas, te
              expliquemos sin tecnicismos y encontremos juntos la mejor
              solución.
            </p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
<iconify-icon className="text-xl" icon="solar:stethoscope-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-emerald-950 text-base">
                    Diagnóstico Certero
                  </h4>
<p className="text-sm text-stone-500 mt-1">
                    Estudios precisos para no adivinar tu tratamiento.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
<iconify-icon className="text-xl" icon="solar:shield-up-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-emerald-950 text-base">
                    Mínima Invasión
                  </h4>
<p className="text-sm text-stone-500 mt-1">
                    Priorizamos procedimientos láser y endoscópicos para una
                    recuperación más rápida y con menos dolor.
                  </p>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-stone-200">
<p className="text-xs text-stone-400 font-medium tracking-wide uppercase mb-4">
                Membresías y Asociaciones
              </p>
<div className="flex flex-col sm:flex-row gap-4">
<div className="bg-[#FBF9F6] px-4 py-3 rounded-xl border border-stone-200 flex items-center gap-3">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:verified-check-bold"></iconify-icon>
<span className="text-sm font-medium text-stone-700 leading-tight">
                    Sociedad Mexicana
                    <br/>
                    de Urología
                  </span>
</div>
<div className="bg-[#FBF9F6] px-4 py-3 rounded-xl border border-stone-200 flex items-center gap-3">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:verified-check-bold"></iconify-icon>
<span className="text-sm font-medium text-stone-700 leading-tight">
                    American Urological
                    <br/>
                    Association
                  </span>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xl reveal delay-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="grid grid-cols-2 text-base text-center font-medium border-b border-stone-100">
<div className="py-6 text-stone-400 bg-stone-50/50">
                Experiencia Común
              </div>
<div className="py-6 text-emerald-900 bg-emerald-50/30 font-medium">
                Dr. Cueto Vega
              </div>
</div>
<div className="divide-y divide-stone-100">
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-xs md:text-sm">
                  Consultas apresuradas
                </div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-xs md:text-sm">
<iconify-icon className="text-emerald-600 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                  Tiempo para escucharte
                </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-xs md:text-sm">
                  Términos confusos
                </div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-xs md:text-sm">
<iconify-icon className="text-emerald-600 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                  Explicaciones claras
                </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-xs md:text-sm">
                  Tratamientos genéricos
                </div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-xs md:text-sm">
<iconify-icon className="text-emerald-600 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                  Opciones personalizadas
                </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-xs md:text-sm">
                  Difícil contacto post-consulta
                </div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-xs md:text-sm">
<iconify-icon className="text-emerald-600 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                  Seguimiento cercano
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative" id="instalaciones">
<div className="sm:p-10 bg-[#FBF9F6] max-w-7xl border-stone-200 border rounded-[3rem] mx-auto p-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] reveal">

<div className="group relative overflow-hidden sm:px-6 mb-12 text-center">
<h2 className="text-3xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-4">
            Instalaciones y Tecnología
          </h2>
<p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Espacios diseñados para tu comodidad y equipados con tecnología de
            vanguardia para diagnósticos precisos.
          </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<article className="relative overflow-hidden aspect-[4/5] opacity-90 w-full h-[300px] md:h-[350px] bg-cover bg-center border-stone-200 border rounded-2xl hover:opacity-100 transition-opacity duration-300 reveal" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 z-10">
<p className="leading-tight text-lg font-medium text-white tracking-tight">
                Clínica Especializada
              </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] opacity-90 w-full h-[300px] md:h-[350px] bg-cover bg-center border-stone-200 border rounded-2xl hover:opacity-100 transition-opacity duration-300 reveal delay-100" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 z-10">
<p className="leading-tight text-lg font-medium text-white tracking-tight">
                Equipamiento Avanzado
              </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] opacity-90 w-full h-[300px] md:h-[350px] bg-cover bg-center border-stone-200 border rounded-2xl hover:opacity-100 transition-opacity duration-300 reveal delay-200" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 z-10">
<p className="leading-tight text-lg font-medium text-white tracking-tight">
                Consultorios Cómodos
              </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] opacity-90 w-full h-[300px] md:h-[350px] bg-cover bg-center border-stone-200 border rounded-2xl hover:opacity-100 transition-opacity duration-300 reveal" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 z-10">
<p className="leading-tight text-lg font-medium text-white tracking-tight">
                Atención Integral
              </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] opacity-90 w-full h-[300px] md:h-[350px] bg-cover bg-center border-stone-200 border rounded-2xl hover:opacity-100 transition-opacity duration-300 reveal delay-100" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 z-10">
<p className="leading-tight text-lg font-medium text-white tracking-tight">
                Recepción y Sala de Espera
              </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] opacity-90 w-full h-[300px] md:h-[350px] bg-cover bg-center border-stone-200 border rounded-2xl hover:opacity-100 transition-opacity duration-300 reveal delay-200" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 z-10">
<p className="leading-tight text-lg font-medium text-white tracking-tight">
                Área Quirúrgica
              </p>
</div>
</article>
</div>
<div className="mt-12 pt-10 border-t border-stone-200">
<div className="w-full">
<style>
              @keyframes lottiePop {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.15); }
              }
              @keyframes lottieFloat {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-4px); }
              }
              .anim-hospital iconify-icon {
                transition: all 0.3s ease;
              }
              .anim-hospital:hover iconify-icon {
                animation: lottieFloat 3s ease-in-out infinite;
              }
              .anim-shield iconify-icon {
                transition: all 0.3s ease;
              }
              .anim-shield:hover iconify-icon {
                animation: lottiePop 2.5s ease-in-out infinite;
              }
            </style>
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium text-emerald-950 tracking-tight">
                Hospitales y Seguros Médicos
              </h2>
<p className="text-stone-500 mt-2 text-sm">
                Trabajamos con las principales instituciones para tu
                tranquilidad.
              </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto relative z-10">

<div className="group anim-hospital flex transition-all duration-300 hover:bg-white hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden bg-[#FBF9F6] w-full h-24 border-stone-200 border relative items-center justify-center rounded-xl">
<div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tl-lg"></div>
<div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-br-lg"></div>
<span className="text-sm font-medium text-stone-600 group-hover:text-emerald-800 transition-colors flex flex-col items-center gap-1.5">
<iconify-icon className="text-2xl text-stone-400 group-hover:text-emerald-500 transition-colors" icon="solar:hospital-bold-duotone"></iconify-icon>
                  Star Médica
                </span>
</div>

<div className="group anim-hospital flex transition-all duration-300 hover:bg-white hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden bg-[#FBF9F6] w-full h-24 border-stone-200 border relative items-center justify-center rounded-xl">
<div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tl-lg"></div>
<div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-br-lg"></div>
<span className="text-sm font-medium text-stone-600 group-hover:text-emerald-800 transition-colors flex flex-col items-center gap-1.5">
<iconify-icon className="text-2xl text-stone-400 group-hover:text-emerald-500 transition-colors" icon="solar:hospital-bold-duotone"></iconify-icon>
                  Clínica Peninsular
                </span>
</div>

<div className="group anim-hospital flex transition-all duration-300 hover:bg-white hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden bg-[#FBF9F6] w-full h-24 border-stone-200 border relative items-center justify-center rounded-xl">
<div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tl-lg"></div>
<div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-br-lg"></div>
<span className="text-sm font-medium text-stone-600 group-hover:text-emerald-800 transition-colors flex flex-col items-center gap-1.5">
<iconify-icon className="text-2xl text-stone-400 group-hover:text-emerald-500 transition-colors" icon="solar:hospital-bold-duotone"></iconify-icon>
                  Hosp. Pensiones
                </span>
</div>

<div className="group anim-hospital flex transition-all duration-300 hover:bg-white hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden bg-[#FBF9F6] w-full h-24 border-stone-200 border relative items-center justify-center rounded-xl">
<div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tl-lg"></div>
<div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-br-lg"></div>
<span className="text-sm font-medium text-stone-600 group-hover:text-emerald-800 transition-colors flex flex-col items-center gap-1.5">
<iconify-icon className="text-2xl text-stone-400 group-hover:text-emerald-500 transition-colors" icon="solar:hospital-bold-duotone"></iconify-icon>
                  Hospital Faro
                </span>
</div>

<div className="group anim-shield flex transition-all duration-300 hover:bg-white hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden bg-[#FBF9F6] w-full h-24 border-stone-200 border relative items-center justify-center rounded-xl">
<div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tl-lg"></div>
<div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-br-lg"></div>
<span className="text-sm font-medium text-stone-600 group-hover:text-emerald-800 transition-colors flex flex-col items-center gap-1.5">
<iconify-icon className="text-2xl text-stone-400 group-hover:text-emerald-500 transition-colors" icon="solar:shield-check-bold-duotone"></iconify-icon>
                  GNP
                </span>
</div>

<div className="group anim-shield flex transition-all duration-300 hover:bg-white hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden bg-[#FBF9F6] w-full h-24 border-stone-200 border relative items-center justify-center rounded-xl">
<div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tl-lg"></div>
<div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-br-lg"></div>
<span className="text-sm font-medium text-stone-600 group-hover:text-emerald-800 transition-colors flex flex-col items-center gap-1.5">
<iconify-icon className="text-2xl text-stone-400 group-hover:text-emerald-500 transition-colors" icon="solar:shield-check-bold-duotone"></iconify-icon>
                  AXA
                </span>
</div>

<div className="group anim-shield flex transition-all duration-300 hover:bg-white hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden bg-[#FBF9F6] w-full h-24 border-stone-200 border relative items-center justify-center rounded-xl">
<div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tl-lg"></div>
<div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-br-lg"></div>
<span className="text-sm font-medium text-stone-600 group-hover:text-emerald-800 transition-colors flex flex-col items-center gap-1.5">
<iconify-icon className="text-2xl text-stone-400 group-hover:text-emerald-500 transition-colors" icon="solar:shield-check-bold-duotone"></iconify-icon>
                  MetLife
                </span>
</div>

<div className="group anim-shield flex transition-all duration-300 hover:bg-white hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden bg-[#FBF9F6] w-full h-24 border-stone-200 border relative items-center justify-center rounded-xl">
<div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tl-lg"></div>
<div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-emerald-600/20 group-hover:w-3 group-hover:h-3 group-hover:border-emerald-500 transition-all rounded-br-lg"></div>
<span className="text-sm font-medium text-stone-600 group-hover:text-emerald-800 transition-colors flex flex-col items-center gap-1.5">
<iconify-icon className="text-2xl text-stone-400 group-hover:text-emerald-500 transition-colors" icon="solar:shield-check-bold-duotone"></iconify-icon>
                  Bupa
                </span>
</div>
</div>
<div className="flex mt-12 z-20 relative justify-center">
<div className="flex relative items-center justify-center">
<div className="absolute -top-12 h-12 w-[2px] bg-gradient-to-b from-transparent via-emerald-500/30 to-emerald-500/60 shadow-[0_0_10px_#10b981]"></div>
<div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_0_30px_rgba(16,185,129,0.2)] border border-emerald-200">
<div className="absolute inset-[-8px] rounded-full border border-emerald-500/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-[-4px] rounded-full border border-emerald-400/40 border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-md animate-pulse"></div>
<div className="relative z-10 animate-[pulse_3s_ease-in-out_infinite]">
<iconify-icon className="text-3xl text-emerald-600" icon="solar:health-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 bg-[#FBF9F6] border-y border-stone-200" id="testimonios">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-emerald-950 tracking-tight mb-16 text-center reveal">
          Lo que dicen los pacientes
        </h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm reveal hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-8">
<div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 border border-stone-200">
<span className="text-xl font-serif">R</span>
</div>
<div className="flex text-emerald-500 gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-base text-stone-700 leading-relaxed mb-6 italic">
              "Llevaba meses con molestias que no me dejaban dormir. El Dr.
              Guillermo me explicó exactamente qué tenía en la próstata y el
              tratamiento funcionó muy rápido. Excelente trato y muy humano."
            </p>
<div>
<div className="font-serif font-medium text-base text-emerald-950">
                Roberto M.
              </div>
<div className="text-xs text-stone-500">Paciente, 62 años</div>
</div>
</div>
<div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm reveal delay-100 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-8">
<div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 border border-stone-200">
<span className="text-xl font-serif">A</span>
</div>
<div className="flex text-emerald-500 gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-base text-stone-700 leading-relaxed mb-6 italic">
              "El dolor por cálculos renales es insoportable. Llegué con mucho
              miedo pero el doctor me transmitió mucha calma. El procedimiento
              láser fue un éxito y al día siguiente ya estaba en casa."
            </p>
<div>
<div className="font-serif font-medium text-base text-emerald-950">
                Arturo G.
              </div>
<div className="text-xs text-stone-500">Paciente, 48 años</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-200 relative z-10" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-emerald-950 tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
<p className="text-lg text-stone-600">
            Resolvemos tus dudas para que asistas a consulta con total
            tranquilidad.
          </p>
</div>
<div className="space-y-4 reveal">
<details className="group bg-[#FBF9F6] rounded-2xl border border-stone-200 shadow-sm overflow-hidden open:ring-2 open:ring-emerald-500/20 transition-all">
<summary className="flex items-center justify-between p-6 text-emerald-950 font-medium cursor-pointer list-none select-none [&amp;::-webkit-details-marker]:hidden">
<span>¿El examen de próstata siempre es doloroso?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-xl text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-stone-600 text-sm md:text-base leading-relaxed">
              No. Con las técnicas actuales y un trato empático, la revisión es
              rápida y las molestias son mínimas. Nuestro principal objetivo es
              tu bienestar y comodidad.
            </div>
</details>
<details className="group bg-[#FBF9F6] rounded-2xl border border-stone-200 shadow-sm overflow-hidden open:ring-2 open:ring-emerald-500/20 transition-all">
<summary className="flex items-center justify-between p-6 text-emerald-950 font-medium cursor-pointer list-none select-none [&amp;::-webkit-details-marker]:hidden">
<span>¿Aceptan seguros de gastos médicos mayores?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-xl text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-stone-600 text-sm md:text-base leading-relaxed">
              Sí, trabajamos con las aseguradoras más importantes como GNP, AXA,
              MetLife, Bupa, entre otras, para procedimientos y cirugías.
              Escríbenos para confirmar tu cobertura.
            </div>
</details>
<details className="group bg-[#FBF9F6] rounded-2xl border border-stone-200 shadow-sm overflow-hidden open:ring-2 open:ring-emerald-500/20 transition-all">
<summary className="flex items-center justify-between p-6 text-emerald-950 font-medium cursor-pointer list-none select-none [&amp;::-webkit-details-marker]:hidden">
<span>
                ¿Cuánto tiempo tarda la recuperación de una cirugía láser?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-xl text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-stone-600 text-sm md:text-base leading-relaxed">
              Al emplear tecnología de mínima invasión, la gran mayoría de
              nuestros pacientes regresan a casa el mismo día o al día
              siguiente, retomando sus actividades cotidianas mucho más rápido.
            </div>
</details>
<details className="group bg-[#FBF9F6] rounded-2xl border border-stone-200 shadow-sm overflow-hidden open:ring-2 open:ring-emerald-500/20 transition-all">
<summary className="flex items-center justify-between p-6 text-emerald-950 font-medium cursor-pointer list-none select-none [&amp;::-webkit-details-marker]:hidden">
<span>
                Tengo mucho dolor por una piedra/cálculo, ¿me pueden atender de
                urgencia?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-xl text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-stone-600 text-sm md:text-base leading-relaxed">
              Sí, contamos con atención prioritaria para urgencias urológicas.
              Contáctanos por teléfono o WhatsApp indicando que es una urgencia
              para poder aliviar tu dolor inmediatamente.
            </div>
</details>
</div>
</div>
</section>
<section className="py-24 px-6 bg-white relative" id="contacto">
<div className="max-w-5xl mx-auto">
<div className="bg-emerald-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl reveal">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="text-[#FBF9F6]">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                Hablemos sobre
                <br/>
                tu salud.
              </h2>
<p className="text-base md:text-lg text-emerald-100/80 mb-8 leading-relaxed">
                No pospongas tu tranquilidad. Escríbenos por WhatsApp para
                resolver tus dudas rápidamente o agendar una valoración en el
                consultorio.
              </p>
<div className="space-y-4 text-emerald-100">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-800/50 rounded-xl flex items-center justify-center text-emerald-300 shrink-0 mt-1">
<iconify-icon className="text-2xl" icon="solar:phone-bold"></iconify-icon>
</div>
<div>
<h4 className="text-emerald-50 font-medium text-base mb-1">
                      Llámanos
                    </h4>
<p className="text-sm text-emerald-100/80 leading-relaxed mb-3">
                      Atención rápida para agendar tu cita o resolver dudas.
                    </p>
<a className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-white transition-colors text-sm font-medium" href="tel:+529991355202">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                      999 135 5202
                    </a>
</div>
</div>
<div className="flex items-start gap-4 mt-6">
<div className="w-12 h-12 bg-emerald-800/50 rounded-xl flex items-center justify-center text-emerald-300 shrink-0 mt-1">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-emerald-50 font-medium text-base mb-1">
                      Horarios de Atención
                    </h4>
<p className="text-sm text-emerald-100/80 leading-relaxed">
                      Lunes a Sábado
                      <br/>
                      Previa cita
                    </p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl shadow-xl">
<div className="text-center mb-6">
<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
<iconify-icon className="text-3xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">
                  Contacto Directo
                </h3>
<p className="text-sm text-stone-500">
                  Respuesta rápida por nuestro equipo
                </p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); const val = this.querySelector('select').value; window.open('https://wa.me/529991355202?text=' + encodeURIComponent('Hola, me comunico desde la página web porque ' + val + '.'), '_blank');">
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-500 ml-1">
                    ¿Cómo podemos ayudarte hoy?
                  </label>
<div className="relative">
<select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all text-stone-700 appearance-none cursor-pointer">
<option value="deseo agendar una consulta">
                        Deseo agendar una consulta
                      </option>
<option value="requiero información sobre próstata">
                        Información sobre próstata
                      </option>
<option value="requiero información sobre cálculos o piedras">
                        Información sobre cálculos/piedras
                      </option>
<option value="tengo dolor o molestias urgentes">
                        Tengo dolor/molestias urgentes
                      </option>
<option value="tengo otra duda">Otra duda</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-[#25D366] text-white font-medium text-base py-4 rounded-xl mt-6 hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform flex items-center justify-center gap-2" type="submit">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                  Iniciar chat en WhatsApp
                </button>
<div className="mt-5 space-y-2">
<p className="text-center text-xs text-stone-600 font-medium flex items-center justify-center gap-1.5">
                    ⚡ Típicamente respondemos en menos de 15 minutos
                  </p>
<p className="text-center text-xs text-stone-400 flex items-center justify-center gap-1.5">
<iconify-icon className="text-emerald-500 text-base" icon="solar:shield-check-linear"></iconify-icon>
                    Información médica tratada con estricta confidencialidad
                  </p>
</div>
</form>
</div>
</div>
</div>
<div className="mt-16 bg-[#FBF9F6] border border-stone-200 rounded-[3rem] overflow-hidden shadow-sm flex flex-col md:flex-row reveal delay-100">
<div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white border-b md:border-b-0 md:border-r border-stone-100">
<div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 mb-6 border border-emerald-100/50">
<iconify-icon className="text-3xl" icon="solar:map-point-bold-duotone"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-emerald-950 mb-3 tracking-tight">
              Nuestra Ubicación
            </h3>
<p className="text-sm text-stone-600 mb-8 leading-relaxed">
              Consultorio de fácil acceso, seguro y con instalaciones de
              vanguardia para tu comodidad.
            </p>
<div className="space-y-5">
<div className="flex items-start gap-3">
<div className="mt-0.5 w-8 h-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon className="text-base" icon="solar:buildings-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-800 text-sm">
                    Hospital Star Médica Mérida
                  </h4>
<p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Consultorio 512, Piso 5
                    <br/>
                    Calle 26 No. 199 por 15 y 7
                    <br/>
                    C.P. 97133 Mérida, Yuc.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 w-8 h-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon className="text-base" icon="solar:car-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-800 text-sm">
                    Estacionamiento
                  </h4>
<p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    La plaza cuenta con estacionamiento techado con costo.
                  </p>
</div>
</div>
</div>
<a className="mt-8 inline-flex items-center justify-center gap-2 w-full bg-white text-emerald-900 border border-stone-200 px-5 py-3 rounded-xl text-sm font-medium hover:bg-stone-50 transition-all shadow-sm hover:shadow" href="https://maps.google.com/?q=Hospital+Star+Medica+Merida" target="_blank">
<iconify-icon className="text-lg text-emerald-600" icon="solar:routing-2-linear"></iconify-icon>
              Trazar ruta
            </a>
</div>
<div className="md:w-3/5 h-80 md:h-auto relative bg-stone-100">
<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8465431698376!2d-89.5849887!3d21.0382229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56770932a24f07%3A0x6b442ec9cb411d33!2sHospital%20Star%20M%C3%A9dica%20M%C3%A9rida!5e0!3m2!1ses!2smx!4v1715000000000!5m2!1ses!2smx" style={{border: '0', minHeight: '100%'}} title="Ubicación del consultorio" width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 px-6 bg-[#FBF9F6] border-t border-stone-200 text-stone-600">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:health-linear"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tighter text-emerald-950">
                GCV
              </span>
</div>
<p className="text-sm text-stone-500 leading-relaxed mb-6">
              Atención urológica de primer nivel. Soluciones de mínima invasión
              con un trato profesional y humano para recuperar tu calidad de
              vida.
            </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm" href="https://www.facebook.com/share/1E3ynyJXkA/?mibextid=wwXIfr" target="_blank">
<iconify-icon className="text-xl" icon="mdi:facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm" href="https://www.doctoralia.com.mx/guillermo-jose-cueto-vega/urologo/yucatan" target="_blank">
<iconify-icon className="text-xl" icon="solar:medical-kit-bold"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-emerald-950 mb-5">Navegación</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="hover:text-emerald-700 transition-colors" href="#especialidades">
                  Especialidades
                </a>
</li>
<li>
<a className="hover:text-emerald-700 transition-colors" href="#enfoque">
                  Mi Enfoque
                </a>
</li>
<li>
<a className="hover:text-emerald-700 transition-colors" href="#instalaciones">
                  Instalaciones
                </a>
</li>
<li>
<a className="hover:text-emerald-700 transition-colors" href="#testimonios">
                  Testimonios
                </a>
</li>
<li>
<a className="hover:text-emerald-700 transition-colors" href="#faq">
                  Preguntas Frecuentes
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-emerald-950 mb-5">Atención</h4>
<ul className="space-y-3 text-sm">
<li>
<span className="text-stone-500">Crecimiento Prostático</span>
</li>
<li><span className="text-stone-500">Cálculos Urinarios</span></li>
<li>
<span className="text-stone-500">Incontinencia Urinaria</span>
</li>
<li><span className="text-stone-500">Detección de Cáncer</span></li>
<li><span className="text-stone-500">Vasectomía</span></li>
</ul>
</div>
<div>
<h4 className="font-medium text-emerald-950 mb-5">Contacto</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-emerald-600 shrink-0 mt-0.5" icon="solar:phone-bold"></iconify-icon>
<div>
<p className="font-medium text-stone-800">Citas y Urgencias</p>
<a className="text-stone-500 hover:text-emerald-700 transition-colors" href="tel:+529991355202">
                    999 135 5202
                  </a>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-emerald-600 shrink-0 mt-0.5" icon="solar:map-point-bold"></iconify-icon>
<div>
<p className="font-medium text-stone-800">
                    Consultorio 512, Piso 5
                  </p>
<p className="text-stone-500">Hospital Star Médica Mérida</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-emerald-600 shrink-0 mt-0.5" icon="solar:clock-circle-bold"></iconify-icon>
<div>
<p className="font-medium text-stone-800">Horario de Atención</p>
<p className="text-stone-500">Previa cita</p>
</div>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-200/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>
            © 2024 Dr. Guillermo Cueto Vega. Todos los derechos reservados.
          </p>
<div className="flex gap-4">
<span>Céd. Prof. 9541248</span>
<span>Céd. Esp. 12385117</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
