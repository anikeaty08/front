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



              !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


      // Initialize Lucide Icons
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      // Dynamic Counters Logic
      const counters = document.querySelectorAll('.counter');
      const speed = 200; // lower is slower

      const animateCounters = () => {
          counters.forEach(counter => {
              const updateCount = () => {
                  const target = +counter.getAttribute('data-target');
                  const count = +counter.innerText;

                  const inc = target / speed;

                  if (count < target) {
                      counter.innerText = Math.ceil(count + inc);
                      setTimeout(updateCount, 15);
                  } else {
                      counter.innerText = target;
                  }
              };
              updateCount();
          });
      }

      // Use Intersection Observer to start counting when visible
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  animateCounters();
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      const statsSection = document.querySelector('.grid-cols-2');
      if(statsSection) observer.observe(statsSection);
    
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
      

<nav className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<img alt="Digital Echo Logo" className="h-8 w-auto group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/769bad4a-4a42-482c-be0f-a08dbcc9fe47_800w.png"/>
</a>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-zinc-400">
<a className="text-white hover:text-[#38B6FF] transition-colors" href="#inicio">
            Inicio
          </a>
<a className="hover:text-white transition-colors" href="#servicios">
            Servicios
          </a>
<a className="hover:text-white transition-colors" href="#portafolio">
            Portafolio
          </a>
<a className="hover:text-white transition-colors" href="#nosotros">
            Nosotros
          </a>
<a className="hover:text-white transition-colors" href="#blog">Blog</a>
<a className="hover:text-white transition-colors" href="#contacto">
            Contacto
          </a>
</div>
<div className="hidden md:flex">
<a className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg transition-all hover:border-[#38B6FF]/50 hover:shadow-[0_0_15px_rgba(56,182,255,0.15)] flex items-center gap-2" href="#contacto">
            Empezar proyecto
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<button className="md:hidden text-white">
<i data-lucide="menu"></i>
</button>
</div>
</nav>
<main className="relative bg-grid">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1000px] h-[600px] bg-[#38B6FF]/20 rounded-full blur-[150px] -z-10 pointer-events-none mix-blend-screen"></div>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden" id="inicio">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/20 text-[#38B6FF] text-lg font-medium mb-10 relative z-10"></div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"></div>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
</div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/20 text-[#38B6FF] text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38B6FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#38B6FF]"></span>
</span>
            Innovación en Contenido Digital
          </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1.2]">
            Donde cada
            <span className="text-gradient-cyan">idea</span>
            deja un
            <br/>
<span className="text-gradient-cyan animate-echo relative">echo</span>
            que trasciende
          </h1>
<p className="text-xl md:text-2xl text-zinc-400 font-normal max-w-2xl mx-auto mb-12">
            Impulsamos tu marca con estrategias visuales vanguardistas,
            inteligencia artificial y producción de primer nivel.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#38B6FF] text-white font-medium text-lg hover:bg-[#2fa0e5] hover:shadow-[0_0_40px_rgba(56,182,255,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2" href="#servicios">
              Ver Servicios
              <i className="w-5 h-5" data-lucide="sparkles"></i>
</a>
<a className="group flex overflow-hidden w-full sm:w-auto transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,182,255,0.3)] focus:outline-none text-lg font-medium text-white rounded-full px-8 py-4 relative items-center justify-center" href="#portafolio">
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#38B6FF_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>
<div className="-z-10 overflow-hidden bg-[#050505] rounded-full absolute top-[1px] right-[1px] bottom-[1px] left-[1px]">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="opacity-30 mix-blend-overlay absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-[#38B6FF]/10 blur-xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-[#38B6FF]/30"></div>
</div>
<span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                Explorar Portafolio
              </span>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-white/5 bg-black/40 backdrop-blur-sm">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
<div className="flex flex-col items-center justify-center">
<span className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-4 flex items-center">
              +
              <span className="counter" data-target="1500">0</span>
</span>
<span className="text-xl md:text-2xl text-zinc-400 font-medium">
              Videos Creados
            </span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-4 flex items-center">
              +
              <span className="counter" data-target="3400">0</span>
</span>
<span className="text-xl md:text-2xl text-zinc-400 font-medium">
              Diseños Publicados
            </span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#38B6FF] mb-4 flex items-center drop-shadow-[0_0_15px_rgba(56,182,255,0.4)]">
              +
              <span className="counter" data-target="250">0</span>
</span>
<span className="text-xl md:text-2xl text-[#38B6FF] font-medium">
              Soluciones IA
            </span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-4 flex items-center">
              +
              <span className="counter" data-target="5">0</span>
</span>
<span className="text-xl md:text-2xl text-zinc-400 font-medium">
              Años de Experiencia
            </span>
</div>
</div>
</section>

<section className="py-32 px-6 relative min-h-screen flex flex-col justify-center" id="servicios">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8">
              Nuestros Servicios Principales
            </h2>
<p className="text-2xl md:text-3xl text-zinc-400 font-normal max-w-4xl mx-auto leading-snug">
              Ecosistemas digitales completos diseñados para captar la atención
              y generar resultados reales.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="group p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-[#38B6FF]/50 hover:bg-zinc-900/60 hover:shadow-[0_0_60px_rgba(56,182,255,0.2)] hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#38B6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<i className="text-[#38B6FF] w-10 h-10" data-lucide="pen-tool"></i>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Diseño Visual
              </h3>
<p className="text-xl text-zinc-400 font-normal leading-relaxed">
                Creación de contenido visual de alto impacto que define la
                identidad de tu marca.
              </p>
</div>
<div className="group p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-[#38B6FF]/50 hover:bg-zinc-900/60 hover:shadow-[0_0_60px_rgba(56,182,255,0.2)] hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#38B6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<i className="text-[#38B6FF] w-10 h-10" data-lucide="video"></i>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Producción Video
              </h3>
<p className="text-xl text-zinc-400 font-normal leading-relaxed">
                Grabación, edición y postproducción de video profesional para
                todas las plataformas.
              </p>
</div>
<div className="group p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-[#38B6FF]/50 hover:bg-zinc-900/60 hover:shadow-[0_0_60px_rgba(56,182,255,0.2)] hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#38B6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<i className="text-[#38B6FF] w-10 h-10" data-lucide="code"></i>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Desarrollo Web
              </h3>
<p className="text-xl text-zinc-400 font-normal leading-relaxed">
                Sitios web modernos, rápidos y optimizados que convierten
                visitantes en clientes.
              </p>
</div>
<div className="group p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-[#38B6FF]/50 hover:bg-zinc-900/60 hover:shadow-[0_0_60px_rgba(56,182,255,0.3)] hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#38B6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-20 h-20 rounded-[2rem] bg-[#38B6FF]/10 border border-[#38B6FF]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<i className="text-[#38B6FF] drop-shadow-[0_0_12px_rgba(56,182,255,0.6)] w-10 h-10" data-lucide="bot"></i>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 text-gradient-cyan">
                Soluciones IA
              </h3>
<p className="text-xl text-zinc-400 font-normal leading-relaxed">
                Implementación de inteligencia artificial para automatizar e
                innovar tus procesos creativos.
              </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-lg font-medium text-[#38B6FF] hover:text-white transition-colors group" href="#">
              Ver todos los servicios
              <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>
<section className="py-32 px-6 relative border-t border-white/5 bg-[#050505] overflow-hidden flex flex-col justify-center min-h-screen" id="testimonios">
<div className="max-w-7xl mx-auto w-full relative z-10">
<div className="text-center mb-20">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8">
              Lo que dicen de nosotros
            </h2>
<p className="text-2xl md:text-3xl text-zinc-400 font-normal max-w-4xl mx-auto leading-snug">
              El eco de nuestro trabajo en la voz de nuestros clientes.
            </p>
</div>
<div className="relative mt-8 overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/20">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="relative py-8">
<div className="flex gap-6 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">
<article className="shrink-0 w-[300px] md:w-[400px] rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 hover:border-[#38B6FF]/30 hover:bg-zinc-900/60 transition-all duration-500">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/20 flex items-center justify-center text-[#38B6FF] font-semibold text-xl">
                      R
                    </div>
<div>
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-white">
                          Rosibel Rojas
                        </span>
</div>
</div>
</div>
<p className="mt-6 text-xl text-zinc-400 leading-relaxed font-normal">
                    "El equipo entendió perfectamente nuestra visión. Su enfoque
                    en los detalles y la creatividad elevaron nuestra marca a
                    otro nivel."
                  </p>
</article>
<article className="shrink-0 w-[300px] md:w-[400px] rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 hover:border-[#38B6FF]/30 hover:bg-zinc-900/60 transition-all duration-500">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/20 flex items-center justify-center text-[#38B6FF] font-semibold text-xl">
                      P
                    </div>
<div>
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-white">
                          Priscilla Valverde
                        </span>
</div>
</div>
</div>
<p className="mt-6 text-xl text-zinc-400 leading-relaxed font-normal">
                    "Resultados excepcionales. La producción audiovisual capturó
                    la esencia de nuestra campaña y generó un engagement
                    increíble."
                  </p>
</article>
<article className="shrink-0 w-[300px] md:w-[400px] rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 hover:border-[#38B6FF]/30 hover:bg-zinc-900/60 transition-all duration-500">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/20 flex items-center justify-center text-[#38B6FF] font-semibold text-xl">
                      H
                    </div>
<div>
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-white">
                          Hugo Murillo
                        </span>
</div>
</div>
</div>
<p className="mt-6 text-xl text-zinc-400 leading-relaxed font-normal">
                    "Su integración de herramientas de IA nos ahorró tiempo
                    valioso sin comprometer la calidad del contenido final. Muy
                    recomendados."
                  </p>
</article>
<article className="shrink-0 w-[300px] md:w-[400px] rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 hover:border-[#38B6FF]/30 hover:bg-zinc-900/60 transition-all duration-500">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/20 flex items-center justify-center text-[#38B6FF] font-semibold text-xl">
                      R
                    </div>
<div>
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-white">
                          Rolando Brenes
                        </span>
</div>
</div>
</div>
<p className="mt-6 text-xl text-zinc-400 leading-relaxed font-normal">
                    "Digital Echo es más que una agencia, son socios
                    estratégicos. Su trabajo superó todas nuestras expectativas
                    y mejoró nuestro alcance."
                  </p>
</article>

<article className="shrink-0 w-[300px] md:w-[400px] rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 hover:border-[#38B6FF]/30 hover:bg-zinc-900/60 transition-all duration-500">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/20 flex items-center justify-center text-[#38B6FF] font-semibold text-xl">
                      R
                    </div>
<div>
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-white">
                          Rosibel Rojas
                        </span>
</div>
</div>
</div>
<p className="mt-6 text-xl text-zinc-400 leading-relaxed font-normal">
                    "El equipo entendió perfectamente nuestra visión. Su enfoque
                    en los detalles y la creatividad elevaron nuestra marca a
                    otro nivel."
                  </p>
</article>
<article className="shrink-0 w-[300px] md:w-[400px] rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 hover:border-[#38B6FF]/30 hover:bg-zinc-900/60 transition-all duration-500">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/20 flex items-center justify-center text-[#38B6FF] font-semibold text-xl">
                      P
                    </div>
<div>
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-white">
                          Priscilla Valverde
                        </span>
</div>
</div>
</div>
<p className="mt-6 text-xl text-zinc-400 leading-relaxed font-normal">
                    "Resultados excepcionales. La producción audiovisual capturó
                    la esencia de nuestra campaña y generó un engagement
                    increíble."
                  </p>
</article>
<article className="shrink-0 w-[300px] md:w-[400px] rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 hover:border-[#38B6FF]/30 hover:bg-zinc-900/60 transition-all duration-500">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/20 flex items-center justify-center text-[#38B6FF] font-semibold text-xl">
                      H
                    </div>
<div>
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-white">
                          Hugo Murillo
                        </span>
</div>
</div>
</div>
<p className="mt-6 text-xl text-zinc-400 leading-relaxed font-normal">
                    "Su integración de herramientas de IA nos ahorró tiempo
                    valioso sin comprometer la calidad del contenido final. Muy
                    recomendados."
                  </p>
</article>
<article className="shrink-0 w-[300px] md:w-[400px] rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 hover:border-[#38B6FF]/30 hover:bg-zinc-900/60 transition-all duration-500">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/20 flex items-center justify-center text-[#38B6FF] font-semibold text-xl">
                      R
                    </div>
<div>
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-white">
                          Rolando Brenes
                        </span>
</div>
</div>
</div>
<p className="mt-6 text-xl text-zinc-400 leading-relaxed font-normal">
                    "Digital Echo es más que una agencia, son socios
                    estratégicos. Su trabajo superó todas nuestras expectativas
                    y mejoró nuestro alcance."
                  </p>
</article>
</div>
</div>
</div>
</div>
<style>
          @keyframes marquee-ltr { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        </style>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-[#030303] min-h-screen flex flex-col justify-center" id="portafolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6">
                Contenido Vertical
              </h2>
<p className="text-2xl md:text-3xl text-zinc-400 font-normal max-w-3xl leading-snug">
                El formato rey. Diseñamos narrativas visuales optimizadas para
                Reels, TikTok y Shorts que maximizan la retención.
              </p>
</div>
<a className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-xl hover:bg-white/10 hover:border-[#38B6FF]/50 hover:shadow-[0_0_30px_rgba(56,182,255,0.2)] transition-all shrink-0" href="#">
              Ver portafolio completo
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="group relative aspect-[9/16] rounded-[3rem] bg-zinc-900 border border-white/10 overflow-hidden cursor-pointer hover:border-[#38B6FF]/50 hover:shadow-[0_0_60px_rgba(56,182,255,0.3)] hover:-translate-y-3 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950"></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#38B6FF]/90 group-hover:border-[#38B6FF] transition-all duration-300">
<i className="text-white ml-1 w-8 h-8" data-lucide="play"></i>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
<span className="px-4 py-2 text-sm font-medium bg-[#38B6FF]/20 text-[#38B6FF] rounded-full mb-4 inline-block border border-[#38B6FF]/20">
                  Campaña Moda
                </span>
<h4 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
                  Lanzamiento Verano 24
                </h4>
</div>
</div>
<div className="group relative aspect-[9/16] rounded-[3rem] bg-zinc-900 border border-white/10 overflow-hidden cursor-pointer hover:border-[#38B6FF]/50 hover:shadow-[0_0_60px_rgba(56,182,255,0.3)] hover:-translate-y-3 transition-all duration-500 md:-translate-y-10 md:hover:-translate-y-14">
<div className="absolute inset-0 bg-gradient-to-bl from-zinc-800 to-zinc-950"></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#38B6FF]/90 group-hover:border-[#38B6FF] transition-all duration-300">
<i className="text-white ml-1 w-8 h-8" data-lucide="play"></i>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
<span className="px-4 py-2 text-sm font-medium bg-[#38B6FF]/20 text-[#38B6FF] rounded-full mb-4 inline-block border border-[#38B6FF]/20">
                  Tech &amp; IA
                </span>
<h4 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
                  Presentación App Finanzas
                </h4>
</div>
</div>
<div className="group relative aspect-[9/16] rounded-[3rem] bg-zinc-900 border border-white/10 overflow-hidden cursor-pointer hover:border-[#38B6FF]/50 hover:shadow-[0_0_60px_rgba(56,182,255,0.3)] hover:-translate-y-3 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-950"></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#38B6FF]/90 group-hover:border-[#38B6FF] transition-all duration-300">
<i className="text-white ml-1 w-8 h-8" data-lucide="play"></i>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
<span className="px-4 py-2 text-sm font-medium bg-[#38B6FF]/20 text-[#38B6FF] rounded-full mb-4 inline-block border border-[#38B6FF]/20">
                  Gastronomía
                </span>
<h4 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
                  Experiencia Culinaria 360
                </h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-t border-white/5 bg-[#050505] min-h-screen flex flex-col justify-center" id="contacto">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[#38B6FF]/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8">
              ¿Listo para que tu marca haga
              <span className="text-gradient-cyan animate-echo relative inline-block">
                echo
              </span>
              ?
            </h2>
<p className="text-2xl md:text-3xl text-zinc-400 font-normal mb-12 leading-snug">
              Agenda una llamada con nuestro equipo y descubre cómo podemos
              transformar tu presencia digital con estrategias de alto impacto.
            </p>
<div className="space-y-6">
<a className="flex items-center gap-6 text-xl text-zinc-300 hover:text-[#38B6FF] transition-colors group" href="mailto:hola@digitalecho.com">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#38B6FF]/50 group-hover:shadow-[0_0_30px_rgba(56,182,255,0.3)] transition-all">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
                hola@digitalecho.com
              </a>
<div className="flex items-center gap-6 text-xl text-zinc-300">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-[#38B6FF]" data-lucide="map-pin"></i>
</div>
                Ciudad de México, MX
              </div>
</div>
</div>
<form className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 hover:border-[#38B6FF]/50 hover:shadow-[0_0_80px_rgba(56,182,255,0.15)] transition-all duration-500">
<h3 className="text-3xl font-semibold text-white mb-10">
              Envíanos un mensaje
            </h3>
<div className="space-y-6">
<div>
<label className="block text-base font-medium text-zinc-400 mb-3">
                  Nombre completo
                </label>
<input className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-lg text-white focus:outline-none focus:border-[#38B6FF]/50 focus:ring-1 focus:ring-[#38B6FF]/50 transition-all" placeholder="Tu nombre" type="text"/>
</div>
<div>
<label className="block text-base font-medium text-zinc-400 mb-3">
                  Correo electrónico
                </label>
<input className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-lg text-white focus:outline-none focus:border-[#38B6FF]/50 focus:ring-1 focus:ring-[#38B6FF]/50 transition-all" placeholder="hola@empresa.com" type="email"/>
</div>
<div>
<label className="block text-base font-medium text-zinc-400 mb-3">
                  ¿Cómo podemos ayudarte?
                </label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-lg text-white focus:outline-none focus:border-[#38B6FF]/50 focus:ring-1 focus:ring-[#38B6FF]/50 transition-all resize-none" placeholder="Cuéntanos sobre tu proyecto..." rows="4"></textarea>
</div>
<button className="w-full py-5 rounded-2xl bg-[#38B6FF] text-white font-semibold text-xl hover:bg-[#2fa0e5] hover:shadow-[0_0_60px_rgba(56,182,255,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3" type="button">
                Enviar Mensaje
                <i className="w-5 h-5" data-lucide="send"></i>
</button>
</div>
</form>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/5 bg-[#030303] overflow-hidden min-h-screen flex flex-col justify-center" id="blog">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#38B6FF]/15 rounded-full blur-[200px] pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6">
              Últimas del
              <span className="text-gradient-cyan">Blog</span>
</h2>
<p className="text-2xl md:text-3xl text-zinc-400 font-normal max-w-3xl mx-auto leading-snug">
              Insights, tendencias y estrategias sobre el mundo digital.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<article className="group rounded-[2.5rem] bg-zinc-900/40 border border-white/10 overflow-hidden hover:border-[#38B6FF]/50 hover:shadow-[0_0_60px_rgba(56,182,255,0.25)] transition-all duration-500 hover:-translate-y-3">
<div className="aspect-video bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/20 to-transparent group-hover:scale-110 transition-transform duration-500"></div>
<i className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-[#38B6FF]/50 group-hover:text-[#38B6FF] transition-colors duration-500 drop-shadow-[0_0_20px_rgba(56,182,255,0.8)]" data-lucide="zap"></i>
</div>
<div className="p-10">
<span className="text-base font-medium text-[#38B6FF] mb-4 block uppercase tracking-wider">
                  Estrategia
                </span>
<h3 className="text-3xl font-semibold text-white mb-5 group-hover:text-[#38B6FF] transition-colors leading-tight">
                  El impacto de la IA en la creación de contenido
                </h3>
<p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                  Descubre cómo las herramientas de inteligencia artificial
                  están revolucionando la producción audiovisual.
                </p>
<a className="inline-flex items-center gap-3 text-white text-lg font-medium hover:text-[#38B6FF] transition-colors" href="#">
                  Leer más
                  <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</article>
<article className="group rounded-[2.5rem] bg-zinc-900/40 border border-white/10 overflow-hidden hover:border-[#38B6FF]/50 hover:shadow-[0_0_60px_rgba(56,182,255,0.25)] transition-all duration-500 hover:-translate-y-3">
<div className="aspect-video bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-bl from-[#38B6FF]/20 to-transparent group-hover:scale-110 transition-transform duration-500"></div>
<i className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-[#38B6FF]/50 group-hover:text-[#38B6FF] transition-colors duration-500 drop-shadow-[0_0_20px_rgba(56,182,255,0.8)]" data-lucide="instagram"></i>
</div>
<div className="p-10">
<span className="text-base font-medium text-[#38B6FF] mb-4 block uppercase tracking-wider">
                  Redes Sociales
                </span>
<h3 className="text-3xl font-semibold text-white mb-5 group-hover:text-[#38B6FF] transition-colors leading-tight">
                  Algoritmos 2024: Guía para destacar
                </h3>
<p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                  Estrategias comprobadas para vencer el algoritmo de Instagram
                  y TikTok este año.
                </p>
<a className="inline-flex items-center gap-3 text-white text-lg font-medium hover:text-[#38B6FF] transition-colors" href="#">
                  Leer más
                  <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</article>
<article className="group rounded-[2.5rem] bg-zinc-900/40 border border-white/10 overflow-hidden hover:border-[#38B6FF]/50 hover:shadow-[0_0_60px_rgba(56,182,255,0.25)] transition-all duration-500 hover:-translate-y-3">
<div className="aspect-video bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#38B6FF]/20 to-transparent group-hover:scale-110 transition-transform duration-500"></div>
<i className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-[#38B6FF]/50 group-hover:text-[#38B6FF] transition-colors duration-500 drop-shadow-[0_0_20px_rgba(56,182,255,0.8)]" data-lucide="play-circle"></i>
</div>
<div className="p-10">
<span className="text-base font-medium text-[#38B6FF] mb-4 block uppercase tracking-wider">
                  Video
                </span>
<h3 className="text-3xl font-semibold text-white mb-5 group-hover:text-[#38B6FF] transition-colors leading-tight">
                  La era del video vertical y la retención
                </h3>
<p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                  Por qué los primeros 3 segundos definen el éxito de tu campaña
                  publicitaria online.
                </p>
<a className="inline-flex items-center gap-3 text-white text-lg font-medium hover:text-[#38B6FF] transition-colors" href="#">
                  Leer más
                  <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#38B6FF]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10 bg-zinc-900/30 border border-white/10 rounded-[4rem] p-16 md:p-24 backdrop-blur-xl hover:border-[#38B6FF]/40 hover:shadow-[0_0_80px_rgba(56,182,255,0.15)] transition-all duration-500">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8">
            ¿Listo para que tu marca haga
            <span className="text-gradient-cyan animate-echo relative inline-block">
              echo
            </span>
            ?
          </h2>
<p className="text-2xl md:text-3xl text-zinc-400 font-normal mb-12 max-w-3xl mx-auto leading-snug">
            Agenda una llamada con nuestro equipo y descubre cómo podemos
            transformar tu presencia digital.
          </p>
<a className="inline-flex items-center justify-center px-12 py-6 rounded-full bg-white text-black font-semibold text-2xl hover:bg-zinc-200 transition-all duration-300 gap-3 hover:scale-105" href="#contacto">
            Contactar Ahora
            <i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>
</section>
</main>

<footer className="py-12 border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<a className="flex items-center gap-2" href="#">
<img alt="Digital Echo Logo" className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/769bad4a-4a42-482c-be0f-a08dbcc9fe47_800w.png"/>
</a>
<p className="text-lg text-zinc-500 font-normal">
          © 2024 Digital Echo. Todos los derechos reservados.
        </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
