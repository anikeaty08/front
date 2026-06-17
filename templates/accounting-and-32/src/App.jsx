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



      // Simple Router Logic for SPA
      function handleRouting() {
        const hash = window.location.hash || '#/';
        const views = document.querySelectorAll('.page-view');

        let targetViewId = 'view-home';

        if (hash.startsWith('#/')) {
          const route = hash.split('?')[0];
          if (route !== '#/' && route !== '#') {
             targetViewId = 'view-' + route.substring(2);
          }
        }

        const targetEl = document.getElementById(targetViewId);

        if(targetEl) {
          views.forEach(view => {
            if (view.id === targetViewId) {
              view.classList.remove('hidden');
              view.classList.add('block');
            } else {
              view.classList.remove('block');
              view.classList.add('hidden');
            }
          });
        }

        // Handle scrolling
        if (hash.startsWith('#/')) {
          window.scrollTo({ top: 0, behavior: 'instant' });
        } else if (hash.length > 1) {
          // It's a scroll anchor for home
          document.getElementById('view-home').classList.remove('hidden');
          document.getElementById('view-home').classList.add('block');
          setTimeout(() => {
            const anchor = document.querySelector(hash);
            if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }

        closeMenu(); // Ensure mobile menu closes on route
      }

      window.addEventListener('hashchange', handleRouting);
      document.addEventListener('DOMContentLoaded', handleRouting);

      // Scroll reveal
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

      // Nav shadow on scroll
      const siteNav = document.getElementById("site-nav");
      function updateNavShadow() {
        if (window.scrollY > 10) siteNav.classList.add("nav-scrolled");
        else siteNav.classList.remove("nav-scrolled");
      }
      updateNavShadow();
      window.addEventListener("scroll", updateNavShadow, { passive: true });

      // Mobile menu
      const mobileMenu = document.getElementById("mobile-menu");
      const menuBtn = document.getElementById("menu-btn");
      const menuClose = document.getElementById("menu-close");

      function openMenu() {
        mobileMenu.classList.remove("translate-x-full");
        document.body.classList.add("overflow-hidden");
        menuBtn.setAttribute("aria-expanded", "true");
      }

      function closeMenu() {
        mobileMenu.classList.add("translate-x-full");
        document.body.classList.remove("overflow-hidden");
        menuBtn.setAttribute("aria-expanded", "false");
      }

      menuBtn.addEventListener("click", () => {
        const isOpen = !mobileMenu.classList.contains("translate-x-full");
        isOpen ? closeMenu() : openMenu();
      });
      menuClose.addEventListener("click", closeMenu);
      document.querySelectorAll("#mobile-menu a").forEach(link => link.addEventListener("click", closeMenu));
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

      // Listings scroll buttons (Home)
      const listingSlider = document.getElementById("projects-scroll");
      if(listingSlider) {
        document.getElementById("slide-prev")?.addEventListener("click", () => {
          listingSlider.scrollBy({ left: -420, behavior: "smooth" });
        });
        document.getElementById("slide-next")?.addEventListener("click", () => {
          listingSlider.scrollBy({ left: 420, behavior: "smooth" });
        });

        // Drag scroll for listings
        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        listingSlider.addEventListener("mousedown", (e) => {
          isDown = true;
          listingSlider.classList.add("cursor-grabbing");
          listingSlider.classList.remove("cursor-grab");
          startX = e.pageX - listingSlider.offsetLeft;
          scrollLeft = listingSlider.scrollLeft;
        });

        ["mouseleave", "mouseup"].forEach(evt => {
          listingSlider.addEventListener(evt, () => {
            isDown = false;
            listingSlider.classList.remove("cursor-grabbing");
            listingSlider.classList.add("cursor-grab");
          });
        });

        listingSlider.addEventListener("mousemove", (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - listingSlider.offsetLeft;
          const walk = (x - startX) * 2;
          listingSlider.scrollLeft = scrollLeft - walk;
        });
      }

      // Select floating label
      const interest = document.getElementById("model");
      if(interest) {
        interest.addEventListener("change", () => {
          if (interest.value) interest.classList.add("has-value");
          else interest.classList.remove("has-value");
        });
      }

      // Form UX
      const form = document.getElementById("lead-form");
      const submitBtn = document.getElementById("submit-btn");
      const formStatus = document.getElementById("form-status");

      if(form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          submitBtn.disabled = true;
          submitBtn.classList.add("opacity-80", "cursor-not-allowed");
          submitBtn.innerHTML = "Sending Request...";
          formStatus.textContent = "Submitting your application...";

          // Mock success
          setTimeout(() => {
            submitBtn.innerHTML = "Application Sent";
            formStatus.textContent = "We will review your business and contact you shortly.";
          }, 1500);
        });
      }
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md transition-all duration-300" id="site-nav">
<div className="section-wrap md:px-12 flex pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-3" href="#/">
<div className="w-10 h-10 bg-[#1B3A52] text-[#C8E84F] flex items-center justify-center font-serif text-xl tracking-tight rounded-xl">
            D
          </div>
<div className="flex flex-col">
<span className="font-serif text-lg leading-none font-medium text-[#1B3A52] tracking-tight">
              De Llovio Accounting
            </span>
<span className="text-[0.62rem] uppercase tracking-[0.18em] text-neutral-500 mt-1">
              Puerto Rico
            </span>
</div>
</a>
<ul className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-600">
<li>
<a className="hover:text-slate-900 transition-colors" href="#contact">
              Sell a Business
            </a>
</li>
<li>
<a className="hover:text-[#1B3A52] transition-colors" href="#servicios">
              Servicios
            </a>
</li>
<li>
<a className="hover:text-[#1B3A52] transition-colors" href="#iguala">
              Iguala
            </a>
</li>
<li>
<a className="hover:text-[#1B3A52] transition-colors" href="#nosotros">
              Sobre Mí
            </a>
</li>
</ul>
<div className="hidden lg:flex items-center gap-4">
<a className="px-6 py-3 bg-[#1B3A52] text-[#C8E84F] text-sm font-medium hover:bg-slate-800 transition-colors rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transform" href="https://wa.me/17873775041">
            Hablemos por WhatsApp
          </a>
</div>
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Menu" className="lg:hidden text-slate-900" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<aside className="fixed inset-0 z-[60] bg-white translate-x-full transition-transform duration-500 border-l border-neutral-200" id="mobile-menu">
<div className="pt-24 px-8 h-full flex flex-col overflow-y-auto">
<button aria-label="Close menu" className="absolute top-6 right-6 text-slate-900" id="menu-close">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<nav className="flex flex-col gap-8">
<a className="font-serif text-4xl text-slate-900 tracking-tight" href="#contact">
            Sell a Business
          </a>
<a className="font-serif text-4xl text-[#1B3A52] tracking-tight" href="#servicios">
            Servicios
          </a>
<a className="font-serif text-4xl text-[#1B3A52] tracking-tight" href="#iguala">
            Iguala
          </a>
<a className="font-serif text-4xl text-[#1B3A52] tracking-tight" href="#nosotros">
            Sobre Mí
          </a>
</nav>
<div className="mt-auto pb-12 pt-12">
<a className="block text-xl font-medium tracking-tight" href="https://wa.me/17873775041">
            Hablemos por WhatsApp
          </a>
</div>
</div>
</aside>

<div className="" id="app-content">

<main className="page-view block" id="view-home">

<header className="relative min-h-screen flex items-center pt-32 pb-40 px-6 md:px-12 lg:px-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-[#C8E84F]/10">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#C8E84F] rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse"></div>
<div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-[#1B3A52] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
</div>
</div>
<div className="section-wrap grid lg:grid-cols-2 w-full z-10 relative gap-x-12 gap-y-12 items-center">
<div className="text-[#1B3A52]">
<div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
<div className="w-12 bg-[#C8E84F] h-1 rounded-full"></div>
<span className="uppercase text-[#1B3A52] text-xs font-medium tracking-[0.2em]">
                  Contabilidad y contribuciones · Puerto Rico
                </span>
</div>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.08] mb-8 opacity-0 animate-[fadeUp_0.9s_ease_0.2s_forwards] tracking-tight">
                Tu negocio merece una contable que conteste el teléfono.
              </h1>
<p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-10 opacity-0 animate-[fadeUp_0.9s_ease_0.35s_forwards]">
                Más de 10 años acompañando a dueños de negocio en PR con su
                contabilidad, contribuciones e igualas mensuales. Sin sorpresas
                en abril, sin perseguir formularios un domingo en la noche.
              </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-[fadeUp_0.9s_ease_0.5s_forwards]">
<a className="px-8 py-4 bg-[#C8E84F] text-[#1B3A52] text-sm font-semibold tracking-wide hover:bg-[#1B3A52] hover:text-[#C8E84F] transition-colors text-center rounded-full shadow-xl hover:-translate-y-1 transform transition-all duration-300" href="https://wa.me/17873775041">
                  Hablemos por WhatsApp
                </a>
<a className="px-8 py-4 border border-[#1B3A52] text-[#1B3A52] text-sm font-semibold tracking-wide hover:bg-[#1B3A52] hover:text-white transition-colors text-center rounded-full shadow-lg hover:-translate-y-1 transform transition-all duration-300 bg-white" href="#servicios">
                  Conoce el servicio
                </a>
</div>
</div>
<div className="hidden lg:block relative z-10 w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl opacity-0 animate-[fadeUp_0.9s_ease_0.3s_forwards]">
<img alt="Servicios de contabilidad profesional" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full bg-[#1B3A52] py-5 z-20 hidden md:block">
<div className="section-wrap px-6 md:px-12 flex items-center justify-between text-white/80 text-sm">
<div className="flex gap-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#C8E84F]" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span>10+ años de experiencia</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#C8E84F]" icon="solar:verified-check-linear" width="18"></iconify-icon>
<span>300+ contribuyentes y negocios atendidos</span>
</div>
</div>
<span className="tracking-wide">CRECIMIENTO POR REFERIDOS</span>
</div>
</div>
</header>

<section className="md:py-28 border-y pt-24 pb-24 bg-slate-50 border-slate-200/60" id="servicios">
<div className="section-wrap px-6 md:px-12 lg:px-20 mb-12 flex flex-col md:flex-row justify-between items-end reveal">
<div>
<span className="text-[#1B3A52] font-serif italic text-lg mb-2 block">
                Servicios
              </span>
<h2 className="text-4xl md:text-5xl font-serif text-[#1B3A52] tracking-tight">
                ¿Qué podemos hacer por
                <span className="italic text-[#8b9e28]">tu negocio?</span>
</h2>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<button aria-label="Scroll listings left" className="w-10 h-10 border border-[#1B3A52] flex items-center justify-center hover:bg-[#1B3A52] hover:text-[#C8E84F] transition-colors rounded-full" id="slide-prev">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button aria-label="Scroll listings right" className="w-10 h-10 border border-[#1B3A52] flex items-center justify-center hover:bg-[#1B3A52] hover:text-[#C8E84F] transition-colors rounded-full" id="slide-next">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto no-scrollbar pl-6 md:pl-20 pb-8 cursor-grab active:cursor-grabbing" id="projects-scroll">
<div className="flex gap-8 w-max">
<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-100 overflow-hidden bg-white border-none shadow-xl rounded-3xl">
<div className="h-48 w-full shrink-0">
<img alt="Arranca tu negocio" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8 h-full flex flex-col">
<h3 className="text-2xl font-serif text-[#1B3A52] mb-4 tracking-tight">
                    Arranca tu negocio
                  </h3>
<p className="text-sm text-neutral-600 mb-6 flex-grow">
                    Estructuro tu negocio desde cero: registro de corporación en
                    el Departamento de Estado, EIN, registro en Hacienda y SURI,
                    y Registro de Comerciante. Sales del proceso con todo lo
                    necesario para facturar legalmente.
                  </p>
</div>
</article>
<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-200 overflow-hidden bg-white border-none shadow-xl rounded-3xl">
<div className="h-48 w-full shrink-0">
<img alt="Mantén tu negocio al día" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8 h-full flex flex-col">
<h3 className="text-2xl font-serif text-[#1B3A52] mb-4 tracking-tight">
                    Mantén tu negocio al día
                  </h3>
<p className="text-sm text-neutral-600 mb-6 flex-grow">
                    Aquí vive la iguala. Bookkeeping mensual, IVU municipal y
                    estatal, retenciones (servicios prestados, salarios, Seguro
                    Social y Medicare) y todos los trimestrales: 941-PR, 499R,
                    DTRH y CFSE. Tu contabilidad cierra cada mes, no cuando
                    llega el susto.
                  </p>
</div>
</article>
<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-300 overflow-hidden bg-white border-none shadow-xl rounded-3xl">
<div className="h-48 w-full shrink-0">
<img alt="Cumple con tus contribuciones" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8 h-full flex flex-col">
<h3 className="text-2xl font-serif text-[#1B3A52] mb-4 tracking-tight">
                    Cumple con tus contribuciones
                  </h3>
<p className="text-sm text-neutral-600 mb-6 flex-grow">
                    Planillas de individuo estatal y federal, DBA, corporación,
                    planilla senior 65+, declaración de volumen de negocio,
                    CRIM, informativas 480.6-A / 480.6-SP / 480.7E e informe
                    anual. Si ya estás en iguala conmigo, esto pasa en
                    automático.
                  </p>
</div>
</article>
<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-400 overflow-hidden bg-white border-none shadow-xl rounded-3xl">
<div className="h-48 w-full shrink-0">
<img alt="Cuando algo se complica" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8 h-full flex flex-col">
<h3 className="text-2xl font-serif text-[#1B3A52] mb-4 tracking-tight">
                    Cuando algo se complica
                  </h3>
<p className="text-sm text-neutral-600 mb-6 flex-grow">
                    Planes de pago con Hacienda, certificaciones de Hacienda y
                    CRIM, registros de cuentas, enmiendas, estimadas IRS, W-9 y
                    todo lo que aparece cuando aparece. No te dejo sola con el
                    problema.
                  </p>
</div>
</article>
<div className="w-1 md:w-20 shrink-0"></div>
</div>
</div>
</section>

<section className="md:py-28 md:px-12 lg:px-20 bg-white pt-24 pr-6 pb-24 pl-6" id="nosotros">
<div className="section-wrap grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative reveal">
<div className="w-full aspect-[4/5] bg-neutral-100 relative overflow-hidden rounded-xl flex items-center justify-center rounded-3xl shadow-2xl">
<img alt="Vilmarilys De Llovio" className="absolute inset-0 w-full h-full object-cover z-0" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-6 left-6 bg-white p-6 shadow-xl max-w-xs border-l-4 border-[#C8E84F] rounded-2xl">
<p className="font-serif text-2xl text-[#1B3A52] mb-1 tracking-tight">
                    Atención Personalizada
                  </p>
<p className="text-xs uppercase tracking-widest text-neutral-500">
                    Sin Sorpresas
                  </p>
</div>
</div>
</div>
<div className="reveal delay-100">
<span className="text-[#1B3A52] font-serif italic text-lg mb-4 block">
                Sobre la Dueña
              </span>
<h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-[#1B3A52] tracking-tight">
                Hola, soy
                <span className="italic text-[#8b9e28]">Vilmarilys De Llovio</span>
                .
              </h2>
<div className="space-y-6 text-lg border-l-2 border-[#C8E84F] pl-6 mb-10">
<p className="italic">
                  "Entendí desde el primer día que la contabilidad no es solo
                  cuadrar números: es que tú duermas tranquilo sabiendo que
                  alguien está pendiente."
                </p>
</div>
<p className="mb-8">
                Llevo más de 10 años trabajando con dueños de negocio en Puerto
                Rico — desde el comerciante que acaba de registrar su DBA hasta
                corporaciones con nómina y retenciones mensuales. He atendido a
                más de 300 contribuyentes y negocios en estos años, y la mayoría
                llegaron por referido.
              </p>
<p className="mb-8">
                ¿Por qué? Porque entendí desde el primer día que la contabilidad
                no es solo cuadrar números: es que tú duermas tranquilo sabiendo
                que alguien está pendiente. Ahora abro espacio para más igualas
                mensuales porque quiero darte ese mismo trato — el que hasta
                ahora solo recibían los que me llegaban por referido.
              </p>
</div>
</div>
</section>

<section className="text-white py-24 md:py-28 bg-gradient-to-br from-[#1B3A52] to-[#0a1721] relative overflow-hidden" id="dolor">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C8E84F] rounded-full mix-blend-overlay filter blur-[150px] opacity-10 pointer-events-none"></div>
<div className="section-wrap px-6 md:px-12 lg:px-20">
<div className="grid lg:grid-cols-[1fr_2fr] gap-16">
<div className="reveal">
<span className="text-[#C8E84F] font-serif italic text-lg mb-2 block">
                  ¿Te suena familiar?
                </span>
<h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">
                  Si llevas tu negocio, ya tienes suficiente en
                  <span className="italic text-[#C8E84F]">la cabeza</span>
                  .
                </h2>
</div>
<div className="bg-slate-800 border border-slate-800">
<div className="block bg-[#1B3A52] p-10 hover:bg-slate-800 transition-colors group reveal delay-100 cursor-default">
<p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
                    No deberías estar persiguiendo retenciones un domingo, ni
                    descubriendo en marzo que faltó un trimestral de diciembre,
                    ni pagando multas que se podían evitar con una llamada a
                    tiempo. Una iguala mensual es eso: alguien que se ocupa,
                    todo el año, para que tú te dediques a lo que sabes hacer.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 md:py-28 md:px-12 lg:px-20 bg-slate-50" id="iguala">
<div className="section-wrap flex flex-col items-center text-center mb-14 reveal">
<span className="text-[#1B3A52] font-serif italic text-lg mb-2 block">
              Nuestro Modelo
            </span>
<h2 className="text-4xl md:text-5xl font-serif text-[#1B3A52] tracking-tight mb-6">
              Una iguala mensual hecha para
              <span className="italic text-[#8b9e28]">tu negocio</span>
              .
            </h2>
</div>
<div className="section-wrap max-w-4xl mx-auto bg-white p-8 md:p-12 reveal delay-100 border-none shadow-2xl rounded-3xl">
<p className="text-lg text-neutral-600 mb-8">
              Cada negocio es diferente. Un profesional independiente con DBA no
              necesita lo mismo que una corporación con empleados y retenciones
              mensuales. Por eso no manejo planes cerrados — conversamos 15
              minutos, entiendo dónde estás, y te propongo una iguala que cubre
              exactamente lo que tu negocio necesita: ni más, ni menos. Un solo
              pago mensual, todo el año, sin facturas sueltas.
            </p>
<ul className="space-y-4 text-neutral-600 mb-10">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#1B3A52] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Bookkeeping mensual y reportes
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#1B3A52] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                IVU municipal y estatal al día
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#1B3A52] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Todas las retenciones de ley
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#1B3A52] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Trimestrales sin que tengas que recordarlos
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#1B3A52] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Planilla anual incluida
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#1B3A52] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Acceso directo por WhatsApp durante el año
              </li>
</ul>
<a className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-[#C8E84F] text-[#1B3A52] text-sm font-semibold tracking-wide hover:bg-[#1B3A52] hover:text-[#C8E84F] transition-colors rounded-full shadow-xl hover:-translate-y-1 transform transition-all duration-300" href="https://wa.me/17873775041">
              Conversa conmigo y armamos tu iguala
            </a>
</div>
</section>

<section className="py-24 md:py-32 bg-white border-y border-slate-100" id="testimonios">
<div className="section-wrap px-6 md:px-12 lg:px-20 reveal">
<div className="text-center mb-16">
<span className="text-[#1B3A52] font-serif italic text-lg mb-2 block">
                Testimonios
              </span>
<h2 className="text-4xl md:text-5xl font-serif text-[#1B3A52] tracking-tight">
                Lo que dicen quienes ya están
                <span className="italic text-[#8b9e28]">conmigo</span>
                .
              </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-300 bg-white border-none shadow-xl rounded-3xl">
<iconify-icon className="text-neutral-100 absolute top-6 right-8 transition-colors duration-300 group-hover:text-[#C8E84F]/20" icon="solar:quote-right-bold" width="60"></iconify-icon>
<p className="text-lg font-serif leading-relaxed text-slate-800 mb-8 relative z-10">
                  “[TESTIMONIO PENDIENTE — cliente DBA o profesional
                  independiente]”
                </p>
<div className="flex items-center gap-4 border-t border-neutral-200 pt-6">
<div>
<span className="font-semibold text-[#1B3A52] tracking-wide text-sm block">
                      [Nombre]
                    </span>
<span className="text-xs text-neutral-500 mt-0.5 block">
                      [Tipo de negocio]
                    </span>
</div>
</div>
</article>
<article className="p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-300 bg-white border-none shadow-xl rounded-3xl">
<iconify-icon className="text-neutral-100 absolute top-6 right-8 transition-colors duration-300 group-hover:text-[#C8E84F]/20" icon="solar:quote-right-bold" width="60"></iconify-icon>
<p className="text-lg font-serif leading-relaxed text-slate-800 mb-8 relative z-10">
                  “[TESTIMONIO PENDIENTE — cliente PYME con empleados]”
                </p>
<div className="flex items-center gap-4 border-t border-neutral-200 pt-6">
<div>
<span className="font-semibold text-[#1B3A52] tracking-wide text-sm block">
                      [Nombre]
                    </span>
<span className="text-xs text-neutral-500 mt-0.5 block">
                      [Tipo de negocio]
                    </span>
</div>
</div>
</article>
<article className="p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-300 bg-white border-none shadow-xl rounded-3xl">
<iconify-icon className="text-neutral-100 absolute top-6 right-8 transition-colors duration-300 group-hover:text-[#C8E84F]/20" icon="solar:quote-right-bold" width="60"></iconify-icon>
<p className="text-lg font-serif leading-relaxed text-slate-800 mb-8 relative z-10">
                  “[TESTIMONIO PENDIENTE — cliente que resolvió situación
                  compleja]”
                </p>
<div className="flex items-center gap-4 border-t border-neutral-200 pt-6">
<div>
<span className="font-semibold text-[#1B3A52] tracking-wide text-sm block">
                      [Nombre]
                    </span>
<span className="text-xs text-neutral-500 mt-0.5 block">
                      [Tipo de negocio]
                    </span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 border-b bg-slate-50/80 border-slate-200/60" id="proceso">
<div className="section-wrap reveal">
<div className="mb-8">
<span className="text-[#1B3A52] font-serif italic text-lg mb-2 block">
                Proceso
              </span>
<h2 className="text-4xl md:text-5xl font-serif text-[#1B3A52] mb-4 tracking-tight">
                Cómo
                <span className="italic text-[#8b9e28]">trabajamos</span>
</h2>
</div>
<div className="relative">
<div className="idx-frame flex flex-col md:flex-row overflow-hidden shadow-2xl rounded-3xl border-none">
<div className="md:w-1/2 min-h-[300px] md:min-h-full relative w-full">
<img alt="Nuestro proceso de contabilidad" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-full bg-white p-10 md:p-16 flex flex-col justify-center">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#1B3A52]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#1B3A52]">
<span className="font-bold text-sm">1</span>
</div>
<div>
<h4 className="font-medium text-[#1B3A52]">Conversamos</h4>
<p className="text-sm text-neutral-500">
                          15 minutos por WhatsApp o llamada. Sin compromiso.
                        </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#1B3A52]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#1B3A52]">
<span className="font-bold text-sm">2</span>
</div>
<div>
<h4 className="font-medium text-[#1B3A52]">Propuesta</h4>
<p className="text-sm text-neutral-500">
                          Te envío una propuesta de iguala con scope claro y
                          precio cerrado.
                        </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#1B3A52]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#1B3A52]">
<span className="font-bold text-sm">3</span>
</div>
<div>
<h4 className="font-medium text-[#1B3A52]">Empezamos</h4>
<p className="text-sm text-neutral-500">
                          Firmamos y me das los accesos que necesito.
                        </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#1B3A52]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#1B3A52]">
<span className="font-bold text-sm">4</span>
</div>
<div>
<h4 className="font-medium text-[#1B3A52]">
                          Cierre mensual
                        </h4>
<p className="text-sm text-neutral-500">
                          Cada mes recibes tu cierre. En contribuciones, tú solo
                          firmas.
                        </p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 border-b bg-gradient-to-b from-white to-slate-50/50 border-slate-200/60" id="faq">
<div className="section-wrap reveal">
<div className="mb-12">
<span className="text-[#1B3A52] font-serif italic text-lg mb-2 block">
                FAQ
              </span>
<h2 className="text-4xl md:text-5xl font-serif text-[#1B3A52] mb-4 tracking-tight">
                Preguntas
                <span className="italic text-[#8b9e28]">Frecuentes</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-8">
<div>
<h4 className="text-xl font-medium text-[#1B3A52] mb-2">
                    ¿Tengo que estar cerca de ti físicamente?
                  </h4>
<p className="text-neutral-600">
                    No. Trabajo con clientes en toda la isla. Todo es digital —
                    no necesitas venir a una oficina.
                  </p>
</div>
<div>
<h4 className="text-xl font-medium text-[#1B3A52] mb-2">
                    ¿Puedo cambiar de iguala si mi negocio crece?
                  </h4>
<p className="text-neutral-600">
                    Sí. La iguala se ajusta cuando tu negocio cambia. Si
                    contratas empleados, si abres una segunda corporación, lo
                    conversamos y ajustamos.
                  </p>
</div>
<div>
<h4 className="text-xl font-medium text-[#1B3A52] mb-2">
                    ¿Qué pasa si tengo deudas con Hacienda?
                  </h4>
<p className="text-neutral-600">
                    Te ayudo a montar plan de pago y normalizar la situación. Lo
                    trabajamos como gestión puntual antes de arrancar la iguala
                    mensual.
                  </p>
</div>
</div>
<div className="space-y-8">
<div>
<h4 className="text-xl font-medium text-[#1B3A52] mb-2">
                    ¿Eres CPA?
                  </h4>
<p className="text-neutral-600">
                    No soy CPA licenciada. Soy contable con más de 10 años de
                    experiencia trabajando con negocios y contribuyentes en PR.
                    Para servicios que requieran firma de CPA por ley, coordino
                    con un colega licenciado.
                  </p>
</div>
<div>
<h4 className="text-xl font-medium text-[#1B3A52] mb-2">
                    ¿Aceptas clientes nuevos sin referido?
                  </h4>
<p className="text-neutral-600">
                    Sí. Hasta hace poco solo crecía por referido. Esta página
                    existe precisamente para abrir espacio a clientes nuevos.
                  </p>
</div>
<div>
<h4 className="text-xl font-medium text-[#1B3A52] mb-2">
                    ¿Solo trabajas en temporada de planilla?
                  </h4>
<p className="text-neutral-600">
                    No. Las igualas son anuales y el trabajo es continuo. Lo que
                    hace que la planilla anual no sea un susto es justamente que
                    el resto del año estuvo cuidado.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-slate-50 relative overflow-hidden" id="contacto">
<div className="absolute top-1/2 -right-32 w-[600px] h-[600px] bg-[#C8E84F] rounded-full mix-blend-multiply filter blur-[150px] opacity-20 pointer-events-none transform -translate-y-1/2"></div>
<div className="section-wrap grid lg:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal">
<span className="text-[#1B3A52] font-serif italic text-lg mb-2 block">
                Hablemos
              </span>
<h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight text-[#1B3A52]">
                Empieza con una
                <span className="italic text-[#1B3A52]">conversación</span>
                .
              </h2>
<p className="text-lg text-neutral-600 mb-12 max-w-md">
                Cuéntame de tu negocio en 15 minutos. Si encajamos, seguimos. Si
                no encajamos, te oriento igual y quedamos como amigos.
              </p>
<div className="space-y-8">
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 bg-[#C8E84F] text-[#1B3A52] text-sm font-semibold tracking-wide hover:bg-[#1B3A52] hover:text-[#C8E84F] transition-colors text-center" href="https://wa.me/17873775041">
                    WhatsApp · 787-377-5041
                  </a>
<a className="px-8 py-4 border border-[#1B3A52] text-[#1B3A52] text-sm font-semibold tracking-wide hover:bg-[#1B3A52] hover:text-[#C8E84F] transition-colors text-center" href="mailto:vdellovio@gmail.com">
                    Email · vdellovio@gmail.com
                  </a>
</div>
</div>
</div>
</div>
</section>
</main>



</div>


<footer className="text-white border-t pt-20 pb-10 bg-[#0a1721] border-none">
<div className="section-wrap px-6 md:px-12 lg:px-20 text-center">
<div className="flex items-center justify-center gap-2 mb-6">
<div className="w-8 h-8 bg-[#FAFAF5] text-[#1B3A52] flex items-center justify-center font-serif font-bold tracking-tight rounded-xl">
            D
          </div>
<span className="font-serif text-xl tracking-tight">
            De Llovio Accounting
          </span>
</div>
<p className="text-neutral-400 text-sm mb-6">
          Puerto Rico · 787-377-5041 · vdellovio@gmail.com
        </p>
</div>
</footer>


    </>
  );
}
