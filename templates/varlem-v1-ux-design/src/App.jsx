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



      (function() {
        function updateParallax(selector, slackMultiplier) {
          var windowHeight = window.innerHeight;
          document.querySelectorAll(selector).forEach(function(wrap) {
            var parent = wrap.parentElement;
            var rect = parent.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
              var progress = (rect.top - windowHeight) / (windowHeight + rect.height);
              var slack = rect.height * slackMultiplier;
              var y = (progress * slack * 2) + slack;
              wrap.style.transform = 'translateY(' + y + 'px)';
            }
          });
        }
        function onScrollAlt() {
          updateParallax('.parallax-wrap-alt-1', 0.15);
          updateParallax('.parallax-wrap-alt-2', 0.40);
        }
        window.addEventListener('scroll', function() { requestAnimationFrame(onScrollAlt); }, {passive: true});
        requestAnimationFrame(onScrollAlt);
      })();
    


        (function(){var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:0.15});document.querySelectorAll('#proceso .sol-reveal').forEach(function(el){io.observe(el);});})();
      


      lucide.createIcons();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    


      (function(){var n=document.getElementById('main-nav');function s(){if(window.scrollY>50){n.classList.add('scrolled');}else{n.classList.remove('scrolled');}}window.addEventListener('scroll',s);s();})();
    


      (function() {
        var wrappers = document.querySelectorAll('.port-img-wrap, .sol-img-wrap');
        wrappers.forEach(function(wrap) {
          wrap.style.position = 'relative';
          var img = wrap.querySelector('img');
          if (img) {
            var inner = document.createElement('div');
            inner.className = 'parallax-wrap';
            inner.style.position = 'absolute';
            inner.style.top = '-35%';
            inner.style.left = '0';
            inner.style.width = '100%';
            inner.style.height = '170%';
            inner.style.willChange = 'transform';
            wrap.insertBefore(inner, img);
            inner.appendChild(img);
          }
        });
        function onScroll() {
          var windowHeight = window.innerHeight;
          document.querySelectorAll('.parallax-wrap').forEach(function(wrap) {
            var parent = wrap.parentElement;
            var rect = parent.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
              var progress = (rect.top - windowHeight) / (windowHeight + rect.height);
              var slack = rect.height * 0.35;
              var y = (progress * slack * 2) + slack;
              wrap.style.transform = 'translateY(' + y + 'px)';
            }
          });
        }
        window.addEventListener('scroll', function() { requestAnimationFrame(onScroll); }, {passive: true});
        // Trigger initial calculation
        requestAnimationFrame(onScroll);
      })();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300" id="main-nav" style={{background: 'transparent'}}>
<div className="max-w-[1500px] mx-auto px-8 lg:px-16 py-6 flex items-center justify-between">
<a className="flex items-center gap-3 lg:gap-4" href="#" style={{textDecoration: 'none'}}>
<div className="bg-white flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 shadow-sm" style={{flexShrink: '0'}}>
<svg fill="none" height="20" stroke="#111" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="2.5" viewbox="0 0 24 24" width="20">
<polyline points="3,4 10,20 17,4"></polyline>
<line x1="13" x2="21" y1="20" y2="20"></line>
</svg>
</div>
<div className="" style={{fontFamily: '\'Inter\', sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2C2C2C'}}>
            VARLEM GROUP
          </div>
</a>
<div className="hidden md:flex items-center gap-10" style={{fontFamily: '\'Inter\', sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em'}}>
<a className="nav-link" href="#valle" style={{color: '#8E8D8A', transition: 'color 0.25s'}}>
            El Valle
          </a>
<a className="nav-link" href="#proyectos" style={{color: '#8E8D8A', transition: 'color 0.25s'}}>
            Proyectos
          </a>
<a className="nav-link" href="#proceso" style={{color: '#8E8D8A', transition: 'color 0.25s'}}>
            Proceso
          </a>
<a className="nav-link" href="#contacto" style={{color: '#8E8D8A', transition: 'color 0.25s'}}>
            Contacto
          </a>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col px-8 lg:px-16 relative" style={{background: '#F5F0E8'}}>
<div className="flex-1 flex items-end max-w-[1500px] w-full mx-auto pb-16 lg:pb-24 pt-40">
<div className="hero-fade-up">
<h1 className="font-display mb-[180px]" style={{fontSize: 'clamp(48px,12vw,240px)', fontWeight: '200', lineHeight: '0.98', letterSpacing: '-0.02em'}}>
            Habitando
            <br/>
            el paisaje
            <br/>
<span className="italic" style={{fontWeight: '200'}}>
              desde su origen.
            </span>
</h1>
</div>
</div>
<div className="max-w-[1500px] w-full mx-auto pt-6 pb-8 flex items-center justify-between hero-fade-up" style={{borderTop: '1px solid rgba(44,44,44,0.12)', animationDelay: '200ms'}}>
<div className="" style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#8E8D8A'}}>
          Desarrollo integral · Baja California
        </div>
<div className="flex items-center gap-4">
<span className="hero-scroll-line" style={{display: 'block', height: '1px', background: '#8E8D8A', width: '48px'}}></span>
<span className="" style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#8E8D8A'}}>
            Scroll
          </span>
</div>
</div>
<style>
        @keyframes heroScrollLine { 0%,100% { width:48px; } 50% { width:24px; } }
        .hero-scroll-line { animation: heroScrollLine 2s ease-in-out infinite; }
        @keyframes heroFadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
        .hero-fade-up { animation: heroFadeUp 900ms cubic-bezier(0.16,1,0.3,1) both; }
      </style>
</section>


<section className="px-8 lg:px-16" style={{background: '#2C2C2C', paddingTop: '180px', paddingBottom: '180px', borderTop: '1px solid rgba(217,197,178,0.15)'}}>
<div className="max-w-[1500px] mx-auto reveal">
<div className="label mb-6">MÁS QUE CONSTRUIR</div>
<h2 className="font-display italic tracking-tight" style={{fontSize: 'clamp(36px,5vw,64px)', fontWeight: '200', color: '#F5F0E8', lineHeight: '1.15', maxWidth: '900px'}}>
          No vendemos proyectos. Los estructuramos. Acompañamos a cada cliente
          desde la primera idea hasta la entrega final — reduciendo riesgos,
          optimizando costos y construyendo valor que permanece.
        </h2>
</div>
</section>
<section className="w-full bg-[#2C2C2C]">
<img alt="Vista panorámica del Valle" className="aspect-[4/5] md:aspect-[16/9] reveal w-full object-cover" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23FF3366'/%3E%3C/svg%3E"/>
</section>
<section className="reveal" style={{background: '#F5F0E8', padding: '160px 56px 32px 56px'}}>
<div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
<div className="reveal">
<div className="label mb-6">DIFERENCIADORES</div>
<h2 className="font-display tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(44px,6vw,80px)', fontWeight: '200', lineHeight: '1.0', color: '#2C2C2C'}}>
            El mercado tiene opciones.
            <br/>
            Pocos tienen estructura,
            <br/>
            criterio y visión integral.
          </h2>
</div>
<div className="reveal" style={{transitionDelay: '0.2s'}}>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '16px', lineHeight: '1.85', color: '#8E8D8A', maxWidth: '440px', marginBottom: '40px'}}>
            Varlem Group se distingue por integrar en una sola plataforma los
            servicios de desarrollo inmobiliario, diseño arquitectónico,
            construcción y comercialización — garantizando mayor control,
            ejecución coherente y capacidad técnica en cada proyecto.
          </p>
<div style={{width: '64px', height: '1px', background: '#D9C5B2'}}></div>
</div>
</div>
</section>
<section className="pt-12 pb-32 lg:pt-16 lg:pb-48 px-8 lg:px-16" id="valle">
<div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-3 reveal"></div>
<div className="lg:col-span-9 reveal" style={{transitionDelay: '0.15s'}}>
<h2 className="h-mid text-[clamp(36px,5.5vw,84px)] tracking-tight">
            El Valle ya existía: su paisaje, su silencio y su ritmo.
            <span className="italic" style={{color: '#8E8D8A'}}>
              VARLEM surge para ordenar, interpretar y elevar el territorio
            </span>
            — no para fragmentarlo.
          </h2>
<div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<div className="label mb-4">Protagonista</div>
<p className="body-text">
                El protagonista no es VARLEM, es el Valle. Lo estudiamos, lo
                entendemos y lo traducimos al lenguaje de la arquitectura
                habitable.
              </p>
</div>
<div className="">
<div className="label mb-4">Propósito</div>
<p className="body-text">
                Transformar tierra en patrimonio con sentido. Crear espacios que
                respeten el entorno y generen valor en el tiempo.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="px-8 lg:px-16 pb-32 lg:pb-48" style={{background: '#F5F0E8'}}>
<div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
<div className="reveal">
<div className="aspect-[4/5] relative overflow-hidden w-full mb-8">
<div className="parallax-wrap-alt-1" style={{position: 'absolute', top: '-15%', left: '0', width: '100%', height: '130%', willChange: 'transform'}}>
<img alt="Materia del Valle" className="w-full h-full object-cover" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.04)'" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%2333FF57'/%3E%3C/svg%3E" style={{transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
<div className="">
<div className="label mb-4">Materia</div>
<h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4" style={{fontWeight: '300'}}>
              El Paisaje
            </h3>
<p className="body-text">
              La tierra dicta las reglas. Observamos la topografía, la luz y la
              vegetación endémica para diseñar en sintonía.
            </p>
</div>
</div>
<div className="reveal md:mt-24" style={{transitionDelay: '0.15s'}}>
<div className="aspect-[4/5] relative overflow-hidden w-full mb-8">
<div className="parallax-wrap-alt-2" style={{position: 'absolute', top: '-40%', left: '0', width: '100%', height: '180%', willChange: 'transform'}}>
<img alt="Naturaleza y arquitectura" className="w-full h-full object-cover" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.04)'" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%233357FF'/%3E%3C/svg%3E" style={{transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
<div className="">
<div className="label mb-4">Vínculo</div>
<h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4" style={{fontWeight: '300'}}>
              La Arquitectura
            </h3>
<p className="body-text">
              Construir sin imponer. Creemos en un lujo silencioso que permite
              al entorno seguir siendo el verdadero protagonista.
            </p>
</div>
</div>
</div>
</section>

<div className="divider mx-8 lg:mx-16"></div>

<section className="py-32 lg:py-48 px-8 lg:px-16">
<div className="max-w-[1500px] mx-auto">
<div className="reveal mb-24">
<h3 className="h-mid text-[clamp(32px,4.5vw,64px)] tracking-tight max-w-3xl">
            No compra terreno. Busca
            <span className="italic">pertenencia</span>
            , inversión inteligente y un estilo de vida.
          </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{background: 'rgba(44,44,44,0.10)'}}>
<div className="p-12 lg:p-16 reveal" style={{background: '#F5F0E8'}}>
<div className="flex items-center gap-3 mb-10">
<i className="w-4 h-4" data-lucide="compass" strokeWidth="1.5" style={{color: '#C66B3D'}}></i>
<div className="label" style={{color: '#C66B3D'}}>El visionario</div>
</div>
<h4 className="font-display text-3xl lg:text-4xl mb-6" style={{fontWeight: '300'}}>
              Quien busca
              <span className="italic">construir</span>
              su lugar en el Valle.
            </h4>
<p className="body-text body-muted">
              Acompañamos al cliente desde la tierra hasta la ejecución.
              Análisis, concepto, diseño, desarrollo, construcción y entrega.
            </p>
<div className="mt-12 flex items-center gap-3 text-xs" style={{letterSpacing: '0.2em'}}>
<span>EXPLORAR PROCESO</span>
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="p-12 lg:p-16 reveal" style={{background: '#F5F0E8', transitionDelay: '0.15s'}}>
<div className="flex items-center gap-3 mb-10">
<i className="w-4 h-4" data-lucide="leaf" strokeWidth="1.5" style={{color: '#6B705C'}}></i>
<div className="label" style={{color: '#6B705C'}}>El curador</div>
</div>
<h4 className="font-display text-3xl lg:text-4xl mb-6" style={{fontWeight: '300'}}>
              Quien entiende el
              <span className="italic">valor</span>
              del paisaje en el tiempo.
            </h4>
<p className="body-text body-muted">
              Diseños que envejecen bien. Proyectos pensados a largo plazo,
              donde el lujo está en la experiencia, no en lo ostentoso.
            </p>
<div className="mt-12 flex items-center gap-3 text-xs" style={{letterSpacing: '0.2em'}}>
<span>VER FILOSOFÍA</span>
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>
<div className="divider mx-8 lg:mx-16"></div>

<section id="proceso" style={{background: 'rgb(44, 44, 44)', padding: '160px 56px'}}>
<div className="max-w-[1500px] mx-auto">
<div className="sol-reveal mb-24">
<div className="label mb-6">DEL CAMPESTRE A LA ENTREGA</div>
<h2 className="tracking-tight" style={{fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: '200', lineHeight: '1', color: 'rgb(245, 240, 232)'}}>
            Un proceso integral, de principio a fin.
          </h2>
</div>
<div id="sol-rows">
<div className="sol-row sol-reveal" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', padding: '72px 0', borderTop: '1px solid rgba(44,44,44,0.10)', alignItems: 'center'}}>
<div className="sol-img-wrap" style={{aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative'}}>
<div className="parallax-wrap" style={{position: 'absolute', top: '-35%', left: '0px', width: '100%', height: '170%', willChange: 'transform'}}>
<img alt="" className="sol-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23FF33A8'/%3E%3C/svg%3E" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
<div>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(32px,3.5vw,48px)', fontWeight: '200', color: '#2C2C2C', lineHeight: '1.05', marginBottom: '24px'}}>
                Terreno
              </h3>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.85', color: '#8E8D8A', maxWidth: '380px'}}>
                Identificamos y analizamos el terreno ideal para tu proyecto.
              </p>
</div>
</div>
<div className="sol-row sol-reveal" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', padding: '72px 0', borderTop: '1px solid rgba(44,44,44,0.10)', alignItems: 'center'}}>
<div>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(32px,3.5vw,48px)', fontWeight: '200', color: '#2C2C2C', lineHeight: '1.05', marginBottom: '24px'}}>
                Análisis
              </h3>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.85', color: '#8E8D8A', maxWidth: '380px'}}>
                Estudiamos el viento, la luz, la pendiente. Cada dato fundamenta
                una decisión con criterio.
              </p>
</div>
<div className="sol-img-wrap" style={{aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative'}}>
<div className="parallax-wrap" style={{position: 'absolute', top: '-35%', left: '0px', width: '100%', height: '170%', willChange: 'transform'}}>
<img alt="" className="sol-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23FF8C33'/%3E%3C/svg%3E" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
</div>
<div className="sol-row sol-reveal" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', padding: '72px 0', borderTop: '1px solid rgba(44,44,44,0.10)', alignItems: 'center'}}>
<div className="sol-img-wrap" style={{aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative'}}>
<div className="parallax-wrap" style={{position: 'absolute', top: '-35%', left: '0px', width: '100%', height: '170%', willChange: 'transform'}}>
<img alt="" className="sol-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%2333FFF5'/%3E%3C/svg%3E" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
<div>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(32px,3.5vw,48px)', fontWeight: '200', color: '#2C2C2C', lineHeight: '1.05', marginBottom: '24px'}}>
                Concepto
              </h3>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.85', color: '#8E8D8A', maxWidth: '380px'}}>
                Una propuesta arquitectónica que nace del lugar, no impuesta
                sobre él.
              </p>
</div>
</div>
<div className="sol-row sol-reveal" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', padding: '72px 0', borderTop: '1px solid rgba(44,44,44,0.10)', alignItems: 'center'}}>
<div>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(32px,3.5vw,48px)', fontWeight: '200', color: '#2C2C2C', lineHeight: '1.05', marginBottom: '24px'}}>
                Diseño
              </h3>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.85', color: '#8E8D8A', maxWidth: '380px'}}>
                Planos, renders y especificaciones que convierten la visión en
                un proyecto ejecutable.
              </p>
</div>
<div className="sol-img-wrap" style={{aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative'}}>
<div className="parallax-wrap" style={{position: 'absolute', top: '-35%', left: '0px', width: '100%', height: '170%', willChange: 'transform'}}>
<img alt="" className="sol-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%238C33FF'/%3E%3C/svg%3E" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
</div>
<div className="sol-row sol-reveal" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', padding: '72px 0', borderTop: '1px solid rgba(44,44,44,0.10)', alignItems: 'center'}}>
<div className="sol-img-wrap" style={{aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative'}}>
<div className="parallax-wrap" style={{position: 'absolute', top: '-35%', left: '0px', width: '100%', height: '170%', willChange: 'transform'}}>
<img alt="" className="sol-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23FFE933'/%3E%3C/svg%3E" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
<div>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(32px,3.5vw,48px)', fontWeight: '200', color: '#2C2C2C', lineHeight: '1.05', marginBottom: '24px'}}>
                Desarrollo
              </h3>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.85', color: '#8E8D8A', maxWidth: '380px'}}>
                Gestión de permisos, infraestructura y proveedores con
                cronograma respetado.
              </p>
</div>
</div>
<div className="sol-row sol-reveal" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', padding: '72px 0', borderTop: '1px solid rgba(44,44,44,0.10)', alignItems: 'center'}}>
<div>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(32px,3.5vw,48px)', fontWeight: '200', color: '#2C2C2C', lineHeight: '1.05', marginBottom: '24px'}}>
                Construcción
              </h3>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.85', color: '#8E8D8A', maxWidth: '380px'}}>
                Ejecución con control total. Manos locales, materiales nobles,
                calidad supervisada.
              </p>
</div>
<div className="sol-img-wrap" style={{aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative'}}>
<div className="parallax-wrap" style={{position: 'absolute', top: '-35%', left: '0px', width: '100%', height: '170%', willChange: 'transform'}}>
<img alt="" className="sol-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%2333FF8C'/%3E%3C/svg%3E" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
</div>
<div className="sol-row sol-reveal" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', padding: '72px 0', borderTop: '1px solid rgba(44, 44, 44, 0.10)', borderBottom: '1px solid rgba(44,44,44,0.10)', alignItems: 'center'}}>
<div className="sol-img-wrap" style={{aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative'}}>
<div className="parallax-wrap" style={{position: 'absolute', top: '-35%', left: '0px', width: '100%', height: '170%', willChange: 'transform'}}>
<img alt="" className="sol-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23FF3333'/%3E%3C/svg%3E" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
<div>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(32px,3.5vw,48px)', fontWeight: '200', color: '#2C2C2C', lineHeight: '1.05', marginBottom: '24px'}}>
                Entrega
              </h3>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.85', color: '#8E8D8A', maxWidth: '380px'}}>
                Entrega completa, supervisada y documentada. El inicio de tu
                patrimonio.
              </p>
</div>
</div>
</div>
</div>
<style>
        #proceso .sol-reveal{opacity:0;transform:translateY(40px);transition:opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);}
        #proceso .sol-reveal.visible{opacity:1;transform:translateY(0);}
        #proceso .sol-row:hover .sol-img{transform:scale(1.04);}
        #proceso h3 { color: #F5F0E8 !important; }
        #proceso .sol-row { border-color: rgba(245,240,232,0.15) !important; }
        @media (max-width: 768px){#proceso .sol-row{grid-template-columns:1fr !important;gap:32px !important;}}
      </style>

</section>
<div className="divider mx-8 lg:mx-16"></div>

<section className="reveal" id="para-quien" style={{background: '#F5F0E8'}}>
<style>
        #para-quien-grid:hover .pq-col{opacity:0.45;}#para-quien-grid:hover .pq-col:hover{opacity:1;}#para-quien .pq-col{transition:opacity 0.5s ease, transform 1s cubic-bezier(0.16,1,0.3,1);}#para-quien .pq-left{transform:translateX(-60px);opacity:0;}#para-quien .pq-right{transform:translateX(60px);opacity:0;}#para-quien.visible .pq-left,#para-quien.visible .pq-right{transform:translateX(0);opacity:1;}
      </style>
<div className="w-full text-center pt-24 pb-12">
<div className="label">A QUIÉN ACOMPAÑAMOS</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2" id="para-quien-grid" style={{minHeight: '72vh', gap: '0'}}>
<div className="pq-col pq-left flex flex-col justify-end" style={{background: '#D9C5B2', padding: '100px 64px'}}>
<h3 className="font-display tracking-tight" style={{fontSize: 'clamp(52px,7vw,88px)', fontWeight: '200', color: '#2C2C2C', marginBottom: '32px', lineHeight: '1.0'}}>
            Inversionista
          </h3>
<ul style={{fontFamily: '\'Inter\', sans-serif', fontSize: '14px', color: 'rgba(44,44,44,0.75)', lineHeight: '1.9', listStyle: 'none', padding: '0', margin: '0'}}>
<li>— Mayor control del proyecto en cada etapa.</li>
<li>— Minimiza riesgos para inversionistas y clientes.</li>
<li>— Visión comercial con criterio técnico.</li>
</ul>
</div>
<div className="pq-col pq-right flex flex-col justify-end" style={{background: '#2C2C2C', padding: '100px 64px'}}>
<h3 className="font-display tracking-tight" style={{fontSize: 'clamp(52px,7vw,88px)', fontWeight: '200', color: '#C66B3D', marginBottom: '32px', lineHeight: '1.0'}}>
            Residente
          </h3>
<ul style={{fontFamily: '\'Inter\', sans-serif', fontSize: '14px', color: 'rgba(217,197,178,0.7)', lineHeight: '1.9', listStyle: 'none', padding: '0', margin: '0'}}>
<li>— Procesos optimizados de inicio a entrega.</li>
<li>— Ejecución coherente en diseño y construcción.</li>
<li>— Capacidad técnica integral bajo una sola dirección.</li>
</ul>
</div>
</div>
</section>
<section id="proyectos" style={{background: '#1A1A1A', padding: '160px 56px'}}>
<div className="max-w-[1500px] mx-auto">
<div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8" style={{borderBottom: '1px solid rgba(217,197,178,0.12)', paddingBottom: '40px', marginBottom: '80px'}}>
<div>
<div className="label mb-6">Portafolio de Obras</div>
<h2 className="tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(44px,6vw,72px)', fontWeight: '200', lineHeight: '1.0', color: '#F5F0E8'}}>
              Cada obra, una extensión del territorio.
            </h2>
</div>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '13px', color: '#8E8D8A', maxWidth: '280px', textAlign: 'right', lineHeight: '1.6'}}>
            Sin precios. Sin grids. Imágenes que hablan.
          </div>
</div>
<div className="port-grid" style={{display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '32px'}}>
<a className="port-card reveal" href="#" style={{display: 'block', textDecoration: 'none'}}>
<div className="port-img-wrap" style={{aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative'}}>
<div className="parallax-wrap" style={{position: 'absolute', top: '-35%', left: '0px', width: '100%', height: '170%', willChange: 'transform'}}>
<img alt="" className="port-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%233B82F6'/%3E%3C/svg%3E" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
<div style={{paddingTop: '24px'}}>
<h4 className="port-title" style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: '200', color: '#F5F0E8', lineHeight: '1.05', marginBottom: '10px', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'}}>
                San Antonio de las Minas
              </h4>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '12px', color: '#8E8D8A'}}>
                Campestre · Valle de Guadalupe · 12 ha
              </div>
</div>
</a>
<a className="port-card reveal" href="#" style={{display: 'block', textDecoration: 'none', marginTop: '80px', transitionDelay: '0.12s'}}>
<div className="port-img-wrap" style={{aspectRatio: '4 / 5', overflow: 'hidden', position: 'relative'}}>
<div className="parallax-wrap" style={{position: 'absolute', top: '-35%', left: '0px', width: '100%', height: '170%', willChange: 'transform'}}>
<img alt="" className="port-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23EC4899'/%3E%3C/svg%3E" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
<div style={{paddingTop: '24px'}}>
<h4 className="port-title" style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: '200', color: '#F5F0E8', lineHeight: '1.05', marginBottom: '10px', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'}}>
                El Porvenir
              </h4>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '12px', color: '#8E8D8A'}}>
                Residencial · Ensenada B.C. · 8 lotes
              </div>
</div>
</a>
<a className="port-card reveal" href="#" style={{display: 'block', textDecoration: 'none', gridColumn: '1 / -1', marginTop: '32px', transitionDelay: '0.24s'}}>
<div className="port-img-wrap" style={{aspectRatio: '21 / 8', overflow: 'hidden', position: 'relative'}}>
<div className="parallax-wrap" style={{position: 'absolute', top: '-35%', left: '0px', width: '100%', height: '170%', willChange: 'transform'}}>
<img alt="" className="port-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23F59E0B'/%3E%3C/svg%3E" style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
<div style={{paddingTop: '24px'}}>
<h4 className="port-title" style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: '200', color: '#F5F0E8', lineHeight: '1.05', marginBottom: '10px', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'}}>
                Ruta del Vino
              </h4>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '12px', color: '#8E8D8A'}}>
                Comercial · Uso mixto · Valle de Guadalupe
              </div>
</div>
</a>
</div>
</div>
<style>
        #proyectos .port-card:hover .port-img{transform:scale(1.05);}
        #proyectos .port-card:hover .port-title{transform:translateY(-5px);}
        @media (max-width: 768px){#proyectos .port-grid{grid-template-columns:1fr !important;} #proyectos .port-card{margin-top:0 !important;}}
      </style>
</section>
<div className="divider mx-8 lg:mx-16"></div>

<section className="reveal" id="filosofia" style={{background: '#F0EAE0', padding: '160px 56px'}}>
<div className="max-w-[1500px] mx-auto">
<div className="reveal" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 100px'}}>
<div className="label mb-6">Patrimonio</div>
<h2 className="tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(44px,6vw,72px)', fontWeight: '200', lineHeight: '1.05', color: '#2C2C2C'}}>
            Desarrollo estructurado. Valor que permanece.
          </h2>
</div>
<div className="fil-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
<div className="reveal" style={{padding: '48px', paddingLeft: '0'}}>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2C2C2C', marginBottom: '24px'}}>
              Filosofía de diseño
            </div>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.85', color: '#8E8D8A'}}>
              La arquitectura pertenece al paisaje. El lujo está en la
              experiencia, no en lo ostentoso.
            </p>
</div>
<div className="reveal" style={{padding: '48px', borderLeft: '1px solid #D9C5B2', transitionDelay: '0.15s'}}>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2C2C2C', marginBottom: '24px'}}>
              Permanencia
            </div>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.85', color: '#8E8D8A'}}>
              Diseños que envejecen bien. Proyectos pensados a largo plazo que
              generan valor en el tiempo.
            </p>
</div>
<div className="reveal" style={{padding: '48px', borderLeft: '1px solid #D9C5B2', transitionDelay: '0.3s'}}>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2C2C2C', marginBottom: '24px'}}>
              Posicionamiento
            </div>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.85', color: '#8E8D8A'}}>
              Ejecución coherente en cada etapa. Capacidad técnica integral que
              optimiza procesos y garantiza resultados con visión de largo
              plazo.
            </p>
</div>
</div>
</div>
<style>
        @media (max-width:768px){#filosofia .fil-grid{grid-template-columns:1fr !important;}#filosofia .fil-grid > div{padding:48px 0 !important;border-left:none !important;border-top:1px solid #D9C5B2;}#filosofia .fil-grid > div:first-child{border-top:none;}}
      </style>
</section>
<section className="reveal" id="valle-protagonista" style={{background: '#F5F0E8'}}>
<style>
        #valle-protagonista{display:flex;min-height:90vh;}#valle-protagonista .vp-img-col{width:60%;overflow:hidden;height:auto;}#valle-protagonista .vp-img{width:100%;height:100%;object-fit:cover;transition:transform 1.4s cubic-bezier(0.16,1,0.3,1);}#valle-protagonista:hover .vp-img{transform:scale(1.03);}#valle-protagonista .vp-text-col{width:40%;padding:100px 72px;display:flex;flex-direction:column;justify-content:center;}#valle-protagonista .vp-img-col{transform:translateX(-40px);opacity:0;transition:opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);}#valle-protagonista .vp-text-col{transform:translateX(40px);opacity:0;transition:opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);}#valle-protagonista.visible .vp-img-col,#valle-protagonista.visible .vp-text-col{transform:translateX(0);opacity:1;}@media(max-width:768px){#valle-protagonista{flex-direction:column;}#valle-protagonista .vp-img-col,#valle-protagonista .vp-text-col{width:100%;}#valle-protagonista .vp-img-col{min-height:50vh;}#valle-protagonista .vp-text-col{padding:64px 32px;}}
      </style>
<div className="vp-img-col">
<img alt="" className="vp-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%2310B981'/%3E%3C/svg%3E"/>
</div>
<div className="vp-text-col">
<div className="label mb-6">El Valle</div>
<h2 className="tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(36px,4vw,56px)', fontWeight: '200', color: '#2C2C2C', lineHeight: '1.15', marginBottom: '32px'}}>
          Conocemos el territorio.
          <br/>
          Lo traducimos en proyectos
          <br/>
          que le pertenecen.
        </h2>
<p style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', lineHeight: '1.9', color: '#8E8D8A', marginBottom: '48px'}}>
          Varlem Group nace de la integración de BRANA Inmobiliaria y J+A
          Arquitectos. Dos décadas construyendo en Baja California. Lo que
          construimos no se impone. Pertenece.
        </p>
<div style={{borderTop: '1px solid rgba(44,44,44,0.12)'}}>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', borderBottom: '1px solid rgba(44,44,44,0.08)'}}>
<span style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#8E8D8A'}}>
              Trayectoria
            </span>
<span style={{fontFamily: '\'Inter\', sans-serif', fontSize: '13px', color: '#2C2C2C'}}>
              12+ años en el territorio
            </span>
</div>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', borderBottom: '1px solid rgba(44,44,44,0.08)'}}>
<span style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#8E8D8A'}}>
              Origen
            </span>
<span style={{fontFamily: '\'Inter\', sans-serif', fontSize: '13px', color: '#2C2C2C'}}>
              BRANA Inmobiliaria + J+A Arquitectos
            </span>
</div>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', borderBottom: '1px solid rgba(44,44,44,0.08)'}}>
<span style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#8E8D8A'}}>
              Capacidad técnica
            </span>
<span style={{fontFamily: '\'Inter\', sans-serif', fontSize: '13px', color: '#2C2C2C'}}>
              Inmobiliaria · Arquitectura · Construcción
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48 px-8 lg:px-16" style={{background: '#2C2C2C', color: '#F5F0E8'}}>
<div className="max-w-[1500px] mx-auto">
<div className="reveal">
<i className="w-8 h-8 mb-12" data-lucide="quote" strokeWidth="1.5" style={{color: '#C66B3D'}}></i>
<h2 className="font-display text-[clamp(32px,5vw,72px)] tracking-tight" style={{fontWeight: '200', lineHeight: '1.15'}}>
            El lujo está en la
            <span className="italic">experiencia</span>
            , no en lo ostentoso. La arquitectura pertenece al paisaje — no al
            revés.
          </h2>
<div className="mt-16 flex items-center gap-4">
<div className="w-16" style={{borderTop: '1px solid rgba(245,240,232,0.3)'}}></div>
<span className="text-xs" style={{letterSpacing: '0.3em', color: '#D9C5B2'}}>
              DIRECCIÓN CREATIVA · VARLEM
            </span>
</div>
</div>
</div>
</section>


<section className="py-24 overflow-hidden" style={{background: '#F5F0E8'}}>
<div className="divider mb-16 mx-8 lg:mx-16"></div>
<div className="flex marquee whitespace-nowrap">
<div className="flex items-center gap-16 pr-16">
<span className="font-display italic text-6xl lg:text-8xl" style={{fontWeight: '200'}}>
            Del paisaje al patrimonio
          </span>
<i className="w-8 h-8" data-lucide="asterisk" strokeWidth="1" style={{color: '#C66B3D'}}></i>
<span className="font-display text-6xl lg:text-8xl" style={{fontWeight: '200'}}>
            Tu lugar en el Valle
          </span>
<i className="w-8 h-8" data-lucide="asterisk" strokeWidth="1" style={{color: '#C66B3D'}}></i>
<span className="font-display italic text-6xl lg:text-8xl" style={{fontWeight: '200'}}>
            Patrimonio campestre
          </span>
<i className="w-8 h-8" data-lucide="asterisk" strokeWidth="1" style={{color: '#C66B3D'}}></i>
</div>
<div aria-hidden="true" className="flex items-center gap-16 pr-16">
<span className="font-display italic text-6xl lg:text-8xl" style={{fontWeight: '200'}}>
            Del paisaje al patrimonio
          </span>
<i className="w-8 h-8" data-lucide="asterisk" strokeWidth="1" style={{color: '#C66B3D'}}></i>
<span className="font-display text-6xl lg:text-8xl" style={{fontWeight: '200'}}>
            Tu lugar en el Valle
          </span>
<i className="w-8 h-8" data-lucide="asterisk" strokeWidth="1" style={{color: '#C66B3D'}}></i>
<span className="font-display italic text-6xl lg:text-8xl" style={{fontWeight: '200'}}>
            Patrimonio campestre
          </span>
<i className="w-8 h-8" data-lucide="asterisk" strokeWidth="1" style={{color: '#C66B3D'}}></i>
</div>
</div>
<div className="divider mt-16 mx-8 lg:mx-16"></div>
</section>

<section className="py-24 lg:py-40 px-8 lg:px-16" style={{background: '#2C2C2C', borderTop: '1px solid rgba(217,197,178,0.15)'}}>
<div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="reveal">
<div className="label mb-6" style={{color: '#D9C5B2'}}>SOPORTE 24/7</div>
<h2 className="font-display tracking-tight mb-8" style={{fontSize: 'clamp(44px,6vw,64px)', fontWeight: '200', lineHeight: '1.05', color: '#F5F0E8'}}>
            Disponibilidad absoluta para tu tranquilidad.
          </h2>
<p className="body-text mb-12" style={{color: 'rgba(245,240,232,0.7)', maxWidth: '480px'}}>
            Sabemos que la toma de decisiones sobre tu patrimonio no se detiene.
            Nuestro equipo de asesores y expertos está a tu entera disposición,
            24 horas al día, 7 días a la semana, para resolver cualquier duda y
            guiarte con certeza.
          </p>
<div className="flex flex-wrap items-center gap-6">
<a className="inline-flex items-center justify-center gap-3" href="#" onmouseout="this.style.opacity='1'" onmouseover="this.style.opacity='0.9'" style={{background: '#C66B3D', color: '#F5F0E8', padding: '16px 32px', fontFamily: '\'Inter\', sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', textDecoration: 'none', transition: 'opacity 0.3s'}}>
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
              Agendar una llamada
            </a>
<a className="inline-flex items-center justify-center gap-3" href="#" onmouseout="this.style.borderColor='rgba(245,240,232,0.3)'" onmouseover="this.style.borderColor='#F5F0E8'" style={{color: '#F5F0E8', padding: '16px 0', fontFamily: '\'Inter\', sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', textDecoration: 'none', borderBottom: '1px solid rgba(245,240,232,0.3)', transition: 'border-color 0.3s'}}>
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
              Contactar soporte
            </a>
</div>
</div>
<div className="reveal" style={{transitionDelay: '0.15s'}}>
<div className="aspect-[4/5] md:aspect-square relative overflow-hidden w-full">
<div className="parallax-wrap-alt-1" style={{position: 'absolute', top: '-15%', left: '0', width: '100%', height: '130%', willChange: 'transform'}}>
<img alt="Asistencia y soporte" className="w-full h-full object-cover" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.04)'" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%236B705C'/%3E%3C/svg%3E" style={{transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)'}}/>
</div>
</div>
</div>
</div>
</section>
<section id="contacto" style={{background: '#6B705C', minHeight: '100vh', padding: '100px 56px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
<style>
        #contacto .btn-primary:hover { background: #2C2C2C !important; color: #FFFFFF !important; }
        #contacto .btn-secondary:hover { border-color: #FFFFFF !important; background: rgba(255,255,255,0.08) !important; }
      </style>
<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: '\'Inter\', sans-serif', fontSize: 'clamp(150px, 25vw, 350px)', fontWeight: '600', color: 'rgba(255,255,255,0.03)', pointerEvents: 'none', letterSpacing: '-0.02em', zIndex: '0', whiteSpace: 'nowrap', lineHeight: '1'}}>
        VARLEM
      </div>
<div style={{position: 'relative', zIndex: '1', textAlign: 'center', width: '100%'}}>
<div className="label mb-6">Pertenencia</div>
<h2 className="reveal" style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(64px, 11vw, 148px)', fontWeight: '200', color: '#FFFFFF', lineHeight: '0.95', letterSpacing: '-0.02em', marginBottom: '48px', transitionDelay: '0.15s'}}>
          Comienza tu proyecto.
          <br/>
<span className="italic">Estamos listos.</span>
</h2>
<p className="reveal" style={{fontFamily: '\'Inter\', sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.65)', maxWidth: '440px', margin: '0 auto 56px', lineHeight: '1.7', transitionDelay: '0.3s'}}>
          Acompañamos cada etapa: desde la concepción hasta la entrega.
          Reducimos riesgos. Maximizamos valor.
        </p>
<div className="reveal flex flex-col md:flex-row items-center justify-center gap-4" style={{transitionDelay: '0.45s'}}>
<a className="btn-primary" href="#" style={{border: '1px solid transparent', background: '#FFFFFF', color: '#6B705C', padding: '15px 44px', fontFamily: '\'Inter\', sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', transition: 'all 0.3s ease', textDecoration: 'none'}}>
            Agendar visita →
          </a>
<a className="btn-secondary" href="#" style={{border: '1px solid rgba(255,255,255,0.5)', background: 'transparent', color: '#FFFFFF', padding: '15px 44px', fontFamily: '\'Inter\', sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', transition: 'all 0.3s ease', textDecoration: 'none'}}>
            WhatsApp
          </a>
</div>
</div>
<div style={{position: 'absolute', bottom: '40px', left: '0', width: '100%', textAlign: 'center', fontFamily: '\'Inter\', sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.3)', zIndex: '1'}}>
        VARLEM Group · Valle de Guadalupe · 2026
      </div>
</section>

<footer style={{background: '#2C2C2C', padding: '80px 56px 48px'}}>
<style>
        .footer-grid { display: grid; gap: 48px; margin-bottom: 48px; }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 4fr 3fr 3fr 2fr; }
        }
        @media (max-width: 767px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
        .footer-nav-title { font-family:'Inter', sans-serif; font-size:10px; text-transform:uppercase; letter-spacing:0.25em; color:#6B705C; margin-bottom:20px; }
        .footer-link { font-family:'Inter', sans-serif; font-size:13px; color:#8E8D8A; transition:color 0.25s; text-decoration:none; display:inline-block; }
        .footer-link:hover { color:#F5F0E8; }
      </style>
<div className="max-w-[1500px] mx-auto">
<div className="footer-grid">
<div>
<a className="flex items-center gap-4 mb-6" href="#" style={{textDecoration: 'none'}}>
<div className="bg-white flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 shadow-sm" style={{flexShrink: '0'}}>
<svg fill="none" height="20" stroke="#111" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="2.5" viewbox="0 0 24 24" width="20">
<polyline points="3,4 10,20 17,4"></polyline>
<line x1="13" x2="21" y1="20" y2="20"></line>
</svg>
</div>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '20px', fontWeight: '500', letterSpacing: '0.2em', color: '#D9C5B2', textTransform: 'uppercase'}}>
                VARLEM GROUP
              </div>
</a>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '13px', color: '#8E8D8A', marginBottom: '20px'}}>
              Proyectos bien pensados desde su origen.
            </div>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '13px', color: '#8E8D8A', lineHeight: '1.8'}}>
              Cuarta 341, Zona Centro, Ensenada B.C. México
              <br/>
              Tel: +52 646 179 1430
            </div>
</div>
<div>
<div className="footer-nav-title">Navegación</div>
<ul className="space-y-3" style={{listStyle: 'none', padding: '0', margin: '0'}}>
<li><a className="footer-link" href="#valle">El Valle</a></li>
<li><a className="footer-link" href="#proyectos">Proyectos</a></li>
<li><a className="footer-link" href="#proceso">Proceso</a></li>
<li><a className="footer-link" href="#contacto">Contacto</a></li>
</ul>
</div>
<div>
<div className="footer-nav-title">Contacto</div>
<ul className="space-y-3" style={{listStyle: 'none', padding: '0', margin: '0'}}>
<li>
<a className="footer-link" href="mailto:contacto@varlem.com">
                  contacto@varlem.com
                </a>
</li>
<li>
<a className="footer-link" href="tel:+526461791430">
                  +52 646 179 1430
                </a>
</li>
<li>
<a className="footer-link" href="#contacto">Agendar visita</a>
</li>
</ul>
</div>
<div>
<div className="footer-nav-title">Social</div>
<ul className="space-y-3" style={{listStyle: 'none', padding: '0', margin: '0'}}>
<li><a className="footer-link" href="#">Facebook</a></li>
<li><a className="footer-link" href="#">Instagram</a></li>
</ul>
</div>
</div>
<div style={{borderTop: '1px solid rgba(140,136,128,0.12)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px'}}>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '11px', color: 'rgba(140,136,128,0.5)'}}>
            © 2026 Varlem Group. Todos los derechos reservados.
          </div>
<div style={{fontFamily: '\'Inter\', sans-serif', fontSize: '11px', color: 'rgba(140,136,128,0.5)'}}>
            Aviso de Privacidad · Términos
          </div>
</div>
</div>
</footer>

<button className="agent-btn fixed bottom-8 right-8 z-50 flex items-center gap-3 pl-3 pr-6 py-3 rounded-full" style={{background: '#2C2C2C', color: '#F5F0E8'}}>
<span className="w-9 h-9 rounded-full flex items-center justify-center" style={{background: '#C66B3D'}}>
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
</span>
<span className="text-xs" style={{letterSpacing: '0.2em'}}>
        CONSULTA INMEDIATA
      </span>
</button>




    </>
  );
}
