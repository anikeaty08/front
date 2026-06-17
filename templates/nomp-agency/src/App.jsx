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



      function switchLang(el) {
          const spans = el.parentElement.querySelectorAll('span');
          spans.forEach(s => {
              s.className = 'hover:text-zinc-300 cursor-pointer transition-colors';
          });
          el.className = 'text-zinc-100 cursor-pointer transition-colors';
      }

      function openModal(id) {
          document.getElementById(id).classList.remove('hidden');
          document.body.style.overflow = 'hidden';
      }
      function closeModal(id) {
          document.getElementById(id).classList.add('hidden');
          document.body.style.overflow = 'auto';
      }
      function toggleMobileMenu() {
          const menu = document.getElementById('mobile-menu');
          if(menu.classList.contains('hidden')) {
              menu.classList.remove('hidden');
              menu.classList.add('flex');
          } else {
              menu.classList.add('hidden');
              menu.classList.remove('flex');
          }
      }

      document.addEventListener('DOMContentLoaded', () => {
          const sections = document.querySelectorAll('section[id]');
          const navLinks = document.querySelectorAll('nav a[href^="#"]');

          window.addEventListener('scroll', () => {
              let current = '';
              sections.forEach(section => {
                  const sectionTop = section.offsetTop;
                  if (window.scrollY >= (sectionTop - window.innerHeight / 3)) {
                      current = section.getAttribute('id');
                  }
              });

              navLinks.forEach(link => {
                  if (current && link.getAttribute('href') === '#' + current) {
                      link.classList.add('text-white');
                      link.classList.remove('text-zinc-400');
                  } else {
                      link.classList.remove('text-white');
                      link.classList.add('text-zinc-400');
                  }
              });
          });
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tighter uppercase">
            NOMP
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#about">
            Compañía
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#services">
            Servicios
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#portfolio">
            Portafolio
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
<span className="text-zinc-100 cursor-pointer transition-colors" onclick="switchLang(this)">
              ES
            </span>
<span className="hover:text-zinc-300 cursor-pointer transition-colors" onclick="switchLang(this)">
              EN
            </span>
<span className="hover:text-zinc-300 cursor-pointer transition-colors" onclick="switchLang(this)">
              RU
            </span>
</div>
<button className="hidden md:block bg-white text-black px-4 py-1.5 rounded-md text-xs font-medium hover:bg-zinc-200 transition-colors" onclick="openModal('modal-contact')">
            Contactar
          </button>
<button className="md:hidden text-zinc-400 text-xl flex items-center" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
<div className="absolute top-16 left-0 w-full bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-6 px-6 flex-col gap-6 hidden md:hidden shadow-2xl z-40" id="mobile-menu">
<a className="text-base font-medium text-zinc-400 hover:text-white transition-colors" href="#about" onclick="toggleMobileMenu()">
          Compañía
        </a>
<a className="text-base font-medium text-zinc-400 hover:text-white transition-colors" href="#services" onclick="toggleMobileMenu()">
          Servicios
        </a>
<a className="text-base font-medium text-zinc-400 hover:text-white transition-colors" href="#portfolio" onclick="toggleMobileMenu()">
          Portafolio
        </a>
<a className="text-base font-medium hover:text-white transition-colors" href="#faq" onclick="toggleMobileMenu()">
          FAQ
        </a>
<button className="w-full bg-white text-black px-4 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors mt-2" onclick="toggleMobileMenu(); openModal('modal-contact')">
          Contactar
        </button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 flex flex-col overflow-hidden text-center w-full border-white/5 border-b pt-32 pr-6 pb-20 pl-6 relative items-center" id="hero">
<div className="absolute inset-0 z-0 pointer-events-none bg-black">
<iframe allow="autoplay; fullscreen" frameborder="0" src="https://www.youtube.com/embed/Q6wwTyD_gfM?autoplay=1&amp;loop=1&amp;controls=0&amp;mute=1&amp;playlist=Q6wwTyD_gfM&amp;playsinline=1" style={{position: 'absolute', top: '50%', left: '50%', width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}}></iframe>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/60 to-[#050505]"></div>
</div>
<div className="z-10 flex flex-col w-full max-w-7xl mr-auto ml-auto relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-zinc-300 font-normal">
            Disponibles para nuevos proyectos
          </span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter font-medium text-white max-w-4xl leading-[1.1]">
          Ayudamos a su negocio a crecer con servicios digitales.
        </h1>
<p className="mt-6 text-base md:text-lg text-zinc-300 font-normal max-w-2xl">
          Desarrollo web, estrategias publicitarias y automatización para
          empresas que buscan escalar de manera eficiente y predecible.
        </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<button className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" onclick="openModal('modal-contact')">
            Iniciar proyecto
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="px-6 py-3 rounded-md text-sm font-medium text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-colors flex items-center justify-center" href="#portfolio">
            Ver portafolio
          </a>
</div>
</div>
</header>

<section className="py-20 border-y border-white/5 bg-zinc-950/50" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl tracking-tight font-medium text-white mb-6">
            Sobre la agencia
          </h2>
<p className="text-base text-zinc-400 font-normal leading-relaxed mb-6">
            Somos un equipo internacional compuesto por 20 personas distribuidas
            en 8 países. Llevamos trabajando en el entorno digital desde hace
            más de 12 años, adaptándonos a la evolución constante de la
            tecnología.
          </p>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
            Nos especializamos en el desarrollo de proyectos e-commerce robustos
            y en estrategias avanzadas de generación de leads (búsqueda de
            clientes potenciales) para potenciar las ventas de nuestros
            clientes.
          </p>
</div>
<div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
<div className="bg-[#050505] p-8 flex flex-col justify-center">
<span className="text-4xl tracking-tighter font-medium text-white mb-1">
              20
            </span>
<span className="text-sm text-zinc-500 font-normal">Especialistas</span>
</div>
<div className="bg-[#050505] p-8 flex flex-col justify-center">
<span className="text-4xl tracking-tighter font-medium text-white mb-1">
              8
            </span>
<span className="text-sm text-zinc-500 font-normal">Países</span>
</div>
<div className="bg-[#050505] p-8 flex flex-col justify-center">
<span className="text-4xl tracking-tighter font-medium text-white mb-1">
              250+
            </span>
<span className="text-sm text-zinc-500 font-normal">
              Proyectos lanzados
            </span>
</div>
<div className="bg-[#050505] p-8 flex flex-col justify-center">
<span className="text-4xl tracking-tighter font-medium text-white mb-1">
              12
            </span>
<span className="text-sm text-zinc-500 font-normal">
              Años en el mercado
            </span>
</div>
</div>
</div>
</section>

<section className="py-16 overflow-hidden flex flex-col gap-4 relative">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

<div className="flex w-max animate-marquee-left">
<div className="flex gap-3 px-1.5 text-sm font-normal text-zinc-400">
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Restaurantes
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Moda
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Medicina
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Viajes
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Inmobiliaria
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Finanzas
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Educación
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Tecnología
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Belleza
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Automoción
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Deporte
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Arte
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Construcción
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Logística
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Consultoría
          </span>
</div>

<div className="flex gap-3 px-1.5 text-sm font-normal text-zinc-400">
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Restaurantes
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Moda
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Medicina
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Viajes
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Inmobiliaria
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Finanzas
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Educación
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Tecnología
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Belleza
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Automoción
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Deporte
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Arte
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Construcción
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Logística
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            Consultoría
          </span>
</div>
</div>

<div className="flex w-max animate-marquee-right" style={{marginLeft: '-50%'}}>
<div className="flex gap-3 px-1.5 text-sm font-normal text-zinc-400">
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Seguros
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Agricultura
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Entretenimiento
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Mascotas
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Legal
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Eventos
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Retail
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            B2B
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            B2C
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            SaaS
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Cripto
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Salud mental
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Fitness
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Diseño
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Arquitectura
          </span>
</div>

<div className="flex gap-3 px-1.5 text-sm font-normal text-zinc-400">
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Seguros
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Agricultura
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Entretenimiento
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Mascotas
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Legal
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Eventos
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Retail
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            B2B
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            B2C
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            SaaS
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Cripto
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Salud mental
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Fitness
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Diseño
          </span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent">
            Arquitectura
          </span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-4">
          Nuestros Servicios
        </h2>
<p className="text-zinc-400 text-base max-w-xl">
          Soluciones digitales completas para cubrir cada etapa del embudo de
          conversión de su negocio.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-white/10 rounded-2xl p-8 bg-zinc-950 hover:bg-zinc-900/50 transition-colors flex flex-col h-full group">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white text-2xl group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-white mb-4">
            Desarrollo de sitios web
          </h3>
<ul className="space-y-3 text-sm text-zinc-400 font-normal flex-grow mb-8">
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Landing pages de alta conversión
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Tiendas online (E-commerce) escalables
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Sitios web corporativos e institucionales
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Diseño UI/UX enfocado en el usuario
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Integración con sistemas de pago y CRM
            </li>
</ul>
<button className="w-full py-2.5 rounded-md border border-white/10 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors" onclick="openModal('modal-contact')">
            Contactar con nosotros
          </button>
</div>

<div className="border border-white/10 rounded-2xl p-8 bg-zinc-950 hover:bg-zinc-900/50 transition-colors flex flex-col h-full group">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white text-2xl group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-white mb-4">
            Publicidad Digital
          </h3>
<ul className="space-y-3 text-sm text-zinc-400 font-normal flex-grow mb-8">
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Campañas orientadas a resultados en Meta Ads
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Publicidad de búsqueda y display en Google Ads
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Estrategias avanzadas de retargeting
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Configuración de analítica web y tracking
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Optimización continua del presupuesto
            </li>
</ul>
<button className="w-full py-2.5 rounded-md border border-white/10 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors" onclick="openModal('modal-contact')">
            Contactar con nosotros
          </button>
</div>

<div className="border border-white/10 rounded-2xl p-8 bg-zinc-950 hover:bg-zinc-900/50 transition-colors flex flex-col h-full group">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white text-2xl group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-white mb-4">
            Automatización de Negocios
          </h3>
<ul className="space-y-3 text-sm text-zinc-400 font-normal flex-grow mb-8">
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Implementación y configuración de CRM
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Desarrollo de Chatbots para atención al cliente
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Automatización de flujos de trabajo internos
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
              Sistemas automatizados de Email Marketing
            </li>
</ul>
<button className="w-full py-2.5 rounded-md border border-white/10 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors" onclick="openModal('modal-contact')">
            Contactar con nosotros
          </button>
</div>
</div>
</section>

<section className="py-10 px-6">
<div className="max-w-7xl mx-auto rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/40 via-transparent to-transparent pointer-events-none"></div>
<div className="p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
<div className="max-w-2xl">
<div className="inline-flex text-xs font-medium text-white bg-white/10 border border-white/10 px-2 py-1 rounded mb-4">
              Oferta especial
            </div>
<h2 className="text-2xl md:text-4xl tracking-tight font-medium text-white mb-4">
              Configuración de publicidad gratuita por 1 mes.
            </h2>
<p className="text-zinc-400 text-base">
              Al encargar el desarrollo de una Landing Page con nosotros antes
              de finales de mayo de 2026, incluimos el setup completo de sus
              campañas publicitarias sin coste adicional.
            </p>
</div>
<div className="flex-shrink-0 w-full md:w-auto">
<button className="w-full md:w-auto bg-white text-black px-8 py-3.5 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors" onclick="openModal('modal-order')">
              Solicitar oferta
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="portfolio">
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-4">
            Casos de éxito
          </h2>
<p className="text-zinc-400 text-base">
            Una selección de nuestros proyectos recientes.
          </p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" onclick="document.getElementById('portfolio-slider').scrollBy({left: -424, behavior: 'smooth'})">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" onclick="document.getElementById('portfolio-slider').scrollBy({left: 424, behavior: 'smooth'})">
<iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)] pb-8">
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pr-6" id="portfolio-slider" style={{scrollPaddingLeft: '1.5rem'}}>

<div className="snap-start shrink-0 w-[85vw] sm:w-[400px] group cursor-pointer">
<div className="w-full aspect-[4/3] bg-zinc-900 border border-white/5 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-zinc-800/50 m-4 rounded-lg border border-white/5 flex items-center justify-center text-zinc-700">
<iconify-icon className="text-4xl" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                  Lumina Fashion
                </h3>
<p className="text-sm text-zinc-500 mt-1">E-commerce • Moda</p>
</div>
<iconify-icon className="text-zinc-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[400px] group cursor-pointer">
<div className="w-full aspect-[4/3] bg-zinc-900 border border-white/5 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-zinc-800/50 m-4 rounded-lg border border-white/5 flex items-center justify-center text-zinc-700">
<iconify-icon className="text-4xl" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                  MediCare Plus
                </h3>
<p className="text-sm text-zinc-500 mt-1">
                  Sitio Corporativo • Medicina
                </p>
</div>
<iconify-icon className="text-zinc-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[400px] group cursor-pointer">
<div className="w-full aspect-[4/3] bg-zinc-900 border border-white/5 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-zinc-800/50 m-4 rounded-lg border border-white/5 flex items-center justify-center text-zinc-700">
<iconify-icon className="text-4xl" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                  Urban Eats App
                </h3>
<p className="text-sm text-zinc-500 mt-1">
                  Landing Page • Restaurantes
                </p>
</div>
<iconify-icon className="text-zinc-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[400px] group cursor-pointer">
<div className="w-full aspect-[4/3] bg-zinc-900 border border-white/5 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-zinc-800/50 m-4 rounded-lg border border-white/5 flex items-center justify-center text-zinc-700">
<iconify-icon className="text-4xl" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                  FinTech Pro
                </h3>
<p className="text-sm text-zinc-500 mt-1">SaaS Portal • Finanzas</p>
</div>
<iconify-icon className="text-zinc-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="snap-start shrink-0 w-6 sm:w-12"></div>

</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-[#080808]">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl tracking-tight font-medium text-white mb-4">
          ¿Quiere ver más proyectos de su sector?
        </h2>
<p className="text-zinc-400 text-sm mb-8">
          Déjenos sus datos y le enviaremos una presentación personalizada con
          casos de éxito relevantes para su negocio.
        </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto items-start">
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-all" placeholder="Correo electrónico" type="email"/>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-all" placeholder="WhatsApp" type="tel"/>
<button className="w-full sm:w-auto bg-white text-black px-6 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap" type="button">
            Recibir portafolio
          </button>
</form>
<div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
<input className="rounded-sm bg-zinc-900 border-white/20 text-white focus:ring-0 focus:ring-offset-0 cursor-pointer appearance-none w-3.5 h-3.5 checked:bg-white checked:border-white relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[4px] after:top-[1px] after:w-[4px] after:h-[8px] after:border-r-[1.5px] after:border-b-[1.5px] after:border-black after:rotate-45" id="consent-portfolio" type="checkbox"/>
<label className="cursor-pointer" htmlFor="consent-portfolio">
            Acepto el procesamiento de mis datos personales.
          </label>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-2">
            Artículos recientes
          </h2>
<p className="text-zinc-400 text-base">
            Insights y guías sobre desarrollo y marketing digital.
          </p>
</div>
<a className="text-sm font-medium text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors flex items-center gap-1" href="#">
          Ver todos
          <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="group cursor-pointer">
<p className="text-xs text-zinc-500 mb-2 font-medium">
            Desarrollo Web • 12 May 2024
          </p>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-zinc-300 transition-colors">
            Por qué el rendimiento de tu E-commerce afecta tus ventas
          </h3>
<p className="text-sm text-zinc-400 line-clamp-2">
            Descubre cómo los tiempos de carga y la optimización móvil impactan
            directamente en la tasa de conversión de tu tienda online.
          </p>
</article>
<article className="group cursor-pointer">
<p className="text-xs text-zinc-500 mb-2 font-medium">
            Marketing • 05 May 2024
          </p>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-zinc-300 transition-colors">
            Estrategias de Retargeting en Meta Ads para 2025
          </h3>
<p className="text-sm text-zinc-400 line-clamp-2">
            Una guía completa sobre cómo configurar audiencias personalizadas y
            maximizar el ROI recuperando carritos abandonados.
          </p>
</article>
<article className="group cursor-pointer">
<p className="text-xs text-zinc-500 mb-2 font-medium">
            Automatización • 28 Abr 2024
          </p>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-zinc-300 transition-colors">
            Chatbots con IA: Transformando la atención al cliente
          </h3>
<p className="text-sm text-zinc-400 line-clamp-2">
            Implementar inteligencia artificial en el servicio al cliente reduce
            costos operativos y mejora la satisfacción del usuario en un 40%.
          </p>
</article>
</div>
</section>

<section className="bg-zinc-950/30 border-white/5 border-t pt-24 pb-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-10 text-center">
          Preguntas Frecuentes
        </h2>
<div className="divide-y divide-white/5">
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white text-base">
              ¿Cuánto tiempo toma desarrollar un sitio web corporativo?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 text-sm mt-3 leading-relaxed">
              El tiempo de desarrollo varía según la complejidad del proyecto.
              Una landing page típica puede estar lista en 2-3 semanas, mientras
              que un sitio corporativo a medida o e-commerce puede tomar entre 6
              y 12 semanas desde el inicio hasta el lanzamiento.
            </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white text-base">
              ¿Cuáles son las condiciones y plazos de pago?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 text-sm mt-3 leading-relaxed">
              Normalmente trabajamos con un esquema de 50% al inicio del
              proyecto y 50% antes del despliegue final. Para proyectos más
              grandes, podemos establecer hitos de pago mensuales basados en
              entregables específicos.
            </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white text-base">
              ¿Qué necesito proporcionar para empezar?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 text-sm mt-3 leading-relaxed">
              Para iniciar, necesitamos comprender sus objetivos comerciales,
              referencias visuales si las tiene, el logotipo de su empresa
              (idealmente en formato vectorial) y cualquier contenido de texto o
              imágenes que desee incluir. Si no dispone de contenido, ofrecemos
              servicios de copywriting.
            </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white text-base">
              ¿Ofrecen mantenimiento y soporte después del lanzamiento?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 text-sm mt-3 leading-relaxed">
              Sí, ofrecemos paquetes de mantenimiento mensual que incluyen
              actualizaciones de seguridad, copias de seguridad regulares,
              pequeñas modificaciones de contenido y monitorización de
              rendimiento.
            </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white text-base">
              ¿Quién será el propietario del código y el diseño?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 text-sm mt-3 leading-relaxed">
              Una vez liquidado el pago total del proyecto, usted es el
              propietario absoluto del código fuente, los diseños y todos los
              activos creados específicamente para su sitio web.
            </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white text-base">
              ¿El sitio web estará optimizado para SEO?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 text-sm mt-3 leading-relaxed">
              Sí, todos nuestros desarrollos incluyen SEO técnico básico
              (estructura HTML semántica, meta etiquetas, optimización de
              velocidad de carga y adaptabilidad móvil). Para estrategias de
              posicionamiento continuo, ofrecemos servicios adicionales.
            </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white text-base">
              ¿Cómo se gestiona el proceso del proyecto?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 text-sm mt-3 leading-relaxed">
              Asignamos un Project Manager dedicado que será su punto de
              contacto. Utilizamos herramientas colaborativas para compartir
              avances, recopilar feedback y mantener el cronograma transparente
              y actualizado.
            </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white text-base">
              ¿Trabajan con contratos legales formales?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 text-sm mt-3 leading-relaxed">
              Absolutamente. Antes de iniciar cualquier trabajo, firmamos un
              contrato de prestación de servicios que detalla el alcance del
              proyecto, los plazos, los costos y los acuerdos de
              confidencialidad (NDA) para proteger su información.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-4">
            Hablemos
          </h2>
<p className="text-zinc-400 text-base mb-10">
            Complete el formulario o póngase en contacto a través de nuestros
            canales directos. Le responderemos en menos de 24 horas.
          </p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900 group-hover:bg-white/5 transition-colors">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<span className="font-medium text-sm">WhatsApp</span>
</a>
<a className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900 group-hover:bg-white/5 transition-colors">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="font-medium text-sm">Telegram</span>
</a>
</div>
<div className="mt-12 pt-12 border-t border-white/5">
<p className="text-xs text-zinc-500 font-medium mb-4 uppercase tracking-wider">
              Redes Sociales
            </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="pajamas:instagram"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="bi:threads"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="gg:facebook"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="mingcute:youtube-line"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="bg-zinc-950 border border-white/10 rounded-2xl p-8">
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-zinc-400 mb-1.5">Nombre</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs text-zinc-400 mb-1.5">
                  Teléfono
                </label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-all" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-xs text-zinc-400 mb-1.5">Email</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-all" type="email"/>
</div>
<div className="">
<label className="block text-xs text-zinc-400 mb-1.5">
                Método de contacto preferido
              </label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-all cursor-pointer">
<option className="bg-zinc-900" value="email">Email</option>
<option className="bg-zinc-900" value="phone">Teléfono</option>
<option className="bg-zinc-900" value="whatsapp">WhatsApp</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="pt-2">
<div className="flex items-start gap-2 mb-6">
<input className="mt-1 rounded-sm bg-zinc-900 border-white/20 text-white focus:ring-0 focus:ring-offset-0 cursor-pointer appearance-none w-3.5 h-3.5 checked:bg-white checked:border-white relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[4px] after:top-[1px] after:w-[4px] after:h-[8px] after:border-r-[1.5px] after:border-b-[1.5px] after:border-black after:rotate-45 shrink-0" id="consent-main" type="checkbox"/>
<label className="text-xs text-zinc-500 cursor-pointer leading-tight" htmlFor="consent-main">
                  Doy mi consentimiento para el tratamiento de mis datos
                  personales de acuerdo con la política de privacidad.
                </label>
</div>
<button className="w-full bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors" type="button">
                Enviar mensaje
              </button>
</div>
</form>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-sm font-medium tracking-tighter uppercase text-white">
          NOMP
        </span>
<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">
            Política de Privacidad
          </a>
<a className="hover:text-zinc-300 transition-colors" href="#">
            Política de Cookies
          </a>
<a className="hover:text-zinc-300 transition-colors" href="#">
            Términos y Condiciones (Oferta)
          </a>
</div>
<p className="text-xs text-zinc-600">© 2026 NOMP Digital Agency.</p>
</div>
</footer>


<div className="fixed inset-0 z-[100] hidden" id="modal-contact">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeModal('modal-contact')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md bg-[#0a0a0a] border border-white/10 rounded-xl p-6 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white tracking-tight">
            Contactar con nosotros
          </h3>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closeModal('modal-contact')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<form className="space-y-4">
<div>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="Nombre" type="text"/>
</div>
<div>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="Teléfono" type="tel"/>
</div>
<div>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="Email" type="email"/>
</div>
<div>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all cursor-pointer">
<option className="text-zinc-500" disabled="" selected="" value="">
                  Método de contacto...
                </option>
<option className="bg-zinc-900" value="email">Email</option>
<option className="bg-zinc-900" value="phone">Teléfono</option>
<option className="bg-zinc-900" value="whatsapp">WhatsApp</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="pt-2">
<div className="flex items-start gap-2 mb-4">
<input className="mt-0.5 rounded-sm bg-zinc-900 border-white/20 text-white focus:ring-0 focus:ring-offset-0 cursor-pointer appearance-none w-3.5 h-3.5 checked:bg-white checked:border-white relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[4px] after:top-[1px] after:w-[4px] after:h-[8px] after:border-r-[1.5px] after:border-b-[1.5px] after:border-black after:rotate-45 shrink-0" id="consent-modal-1" type="checkbox"/>
<label className="text-xs text-zinc-500 cursor-pointer leading-tight" htmlFor="consent-modal-1">
                Acepto la política de privacidad.
              </label>
</div>
<button className="w-full bg-white text-black px-6 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors" type="button">
              Enviar
            </button>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden" id="modal-order">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeModal('modal-order')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md bg-[#0a0a0a] border border-white/10 rounded-xl p-6 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white tracking-tight">
            Solicitar Landing Page
          </h3>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closeModal('modal-order')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-3">
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="Nombre" type="text"/>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="Teléfono" type="tel"/>
</div>
<div>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="Email" type="email"/>
</div>
<div>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all cursor-pointer">
<option className="text-zinc-500" disabled="" selected="" value="">
                  Método de contacto...
                </option>
<option className="bg-zinc-900" value="email">Email</option>
<option className="bg-zinc-900" value="phone">Teléfono</option>
<option className="bg-zinc-900" value="whatsapp">WhatsApp</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<textarea className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all resize-none" placeholder="Cuéntenos sobre su negocio y el objetivo principal de la página..." rows="3"></textarea>
</div>
<div className="pt-1">
<div className="flex items-start gap-2 mb-4">
<input className="mt-0.5 rounded-sm bg-zinc-900 border-white/20 text-white focus:ring-0 focus:ring-offset-0 cursor-pointer appearance-none w-3.5 h-3.5 checked:bg-white checked:border-white relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[4px] after:top-[1px] after:w-[4px] after:h-[8px] after:border-r-[1.5px] after:border-b-[1.5px] after:border-black after:rotate-45 shrink-0" id="consent-modal-2" type="checkbox"/>
<label className="text-xs text-zinc-500 cursor-pointer leading-tight" htmlFor="consent-modal-2">
                Acepto la política de privacidad.
              </label>
</div>
<button className="w-full bg-white text-black px-6 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors" type="button">
              Solicitar oferta
            </button>
</div>
</form>
</div>
</div>


    </>
  );
}
