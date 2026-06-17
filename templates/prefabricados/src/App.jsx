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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Año en footer
      document.getElementById('year').textContent = new Date().getFullYear();

      // Cargar iconos Lucide si están disponibles
      try { lucide && lucide.createIcons(); } catch (e) {}

      // Fade-in del logo
      window.addEventListener('load', () => {
        const logo = document.getElementById('logo-fade');
        if (logo) {
          requestAnimationFrame(() => {
            logo.classList.remove('opacity-0');
          });
        }
      });

      // Reveal on scroll para elementos con [data-reveal]
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('entered');
            entry.target.style.setProperty('opacity', '1');
            entry.target.style.setProperty('transform', 'none');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      document.querySelectorAll('[data-reveal]').forEach(el => {
        // Estado inicial suave
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        revealObserver.observe(el);
      });

      // Animaciones específicas del hero
      const heroIds = ['hero-title', 'hero-subtitle', 'hero-btn-1', 'hero-btn-2'];
      heroIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          el.style.opacity = '0';
          if (id === 'hero-title') el.style.transform = 'scale(0.98)';
          setTimeout(() => {
            el.style.transition = 'all 600ms cubic-bezier(0.22, 1, 0.36, 1)';
            el.style.opacity = '1';
            el.style.transform = 'none';
          }, 200 + idx * 120);
        }
      });

      // Carrusel continuo de logos con pausa en hover
      const marquee = document.getElementById('client-marquee');
      const track = document.getElementById('marquee-track');
      if (marquee && track) {
        let speed = 0.5; // px por frame
        let offset = 0;
        let paused = false;

        // Duplicar contenido para efecto infinito
        const items = Array.from(track.children);
        items.forEach(item => track.appendChild(item.cloneNode(true)));

        function loop() {
          if (!paused) {
            offset -= speed;
            const first = track.children[0];
            if (first) {
              const firstWidth = first.getBoundingClientRect().width + 24; // gap
              if (Math.abs(offset) > firstWidth) {
                track.appendChild(first);
                offset += firstWidth;
              }
            }
            track.style.transform = `translateX(${offset}px)`;
          }
          requestAnimationFrame(loop);
        }
        loop();

        marquee.addEventListener('pointerenter', () => paused = true);
        marquee.addEventListener('pointerleave', () => paused = false);
      }

      // Filtros de proyectos
      const filterButtons = document.querySelectorAll('[data-filter]');
      const projectCards = document.querySelectorAll('#proyectos [data-category]');

      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => {
            b.classList.remove('active-filter');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active-filter');
          btn.setAttribute('aria-selected', 'true');

          const cat = btn.getAttribute('data-filter');
          projectCards.forEach(card => {
            const c = card.getAttribute('data-category');
            const show = cat === 'all' || c === cat;
            card.style.display = show ? '' : 'none';
          });
        });
      });

      // Estilos para botón activo de filtros (inyectados con Tailwind clases utilitarias)
      const style = document.createElement('style');
      style.innerHTML = `
        .active-filter { background: #194E8A; color: white; border-color: transparent; }
        @media (prefers-color-scheme: dark) {
          .active-filter { background: #1E63B0; }
        }
      `;
      document.head.appendChild(style);

      // Manejo básico del formulario
      const form = document.getElementById('form');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const btn = form.querySelector('button[type="submit"]');
          const initText = btn.innerHTML;
          btn.disabled = true;
          btn.classList.add('opacity-80');
          btn.innerHTML = 'Enviando...';
          setTimeout(() => {
            btn.disabled = false;
            btn.classList.remove('opacity-80');
            btn.innerHTML = initText;
            // Toast simple
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-5 right-5 z-[9999] px-4 py-3 rounded-lg bg-emerald-600 text-white shadow-lg';
            toast.textContent = 'Solicitud enviada. Te contactaremos en menos de 24 horas.';
            document.body.appendChild(toast);
            setTimeout(() => {
              toast.style.transition = 'opacity 400ms';
              toast.style.opacity = '0';
              setTimeout(() => toast.remove(), 400);
            }, 2200);
            form.reset();
          }, 1200);
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
      

<div className="bg-[#101622] text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4 text-sm">
<p className="hidden sm:flex items-center gap-3">
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-phone w-4 h-4 opacity-80" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<a className="hover:underline" href="tel:+520000000000">+52 (00) 0000 0000</a>
</span>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-mail w-4 h-4 opacity-80" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="hover:underline" href="mailto:hola@marcaprefabricados.com">hola@marcaprefabricados.com</a>
</span>
</p>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-[#E53935]/10 text-[#E53935] px-2.5 py-1 ring-1 ring-inset ring-[#E53935]/20">
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium">Garantía y Entrega Puntual</span>
</span>
</div>
</div>
</div>

<header className="fixed left-0 right-0 top-10 w-full backdrop-blur-sm bg-white/70 dark:bg-[#101622]/70 transition-colors duration-300 z-50 border-b border-gray-200 dark:border-gray-700" data-reveal="">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-3" href="#">

<img alt="Marca Prefabricados logo" className="bg-white w-25 h-8 object-cover ring-1 ring-[#b0b0b0]/60 rounded-md opacity-0 transition duration-500 ease-out" id="logo-fade" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/955d3fc9-0ce3-44e3-99ec-eae862c7eeab_800w.png"/>
<div className="hidden sm:block"></div>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="relative text-[#212121] hover:text-[#194E8A] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:bg-[#194E8A] after:transition-transform after:duration-300" href="#soluciones">Soluciones</a>
<a className="relative text-[#212121] hover:text-[#194E8A] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:bg-[#194E8A] after:transition-transform after:duration-300" href="#productos">Productos</a>
<a className="relative text-[#212121] hover:text-[#194E8A] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:bg-[#194E8A] after:transition-transform after:duration-300" href="#proyectos">Proyectos</a>
<a className="relative text-[#212121] hover:text-[#194E8A] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:bg-[#194E8A] after:transition-transform after:duration-300" href="#clientes">Clientes</a>
<a className="relative text-[#212121] hover:text-[#194E8A] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:bg-[#194E8A] after:transition-transform after:duration-300" href="#recursos">Recursos</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-[#194E8A] border-2 border-[#194E8A]/30 hover:border-[#1E63B0] transition duration-300" href="#cotizar">Ver Catálogo</a>
<a className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold bg-[#194E8A] text-white transition-all duration-300 hover:bg-[#1E63B0] hover:scale-[1.03] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(25,78,138,0.4)]" href="#form">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Cotizar ahora
          </a>
</div>
</div>
</header>

<section className="relative overflow-hidden mt-28" id="hero">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-[#f5f7fa] to-white dark:from-[#0e1523] dark:to-[#101622]"></div>
<video aria-hidden="true" autoplay="" className="absolute right-0 top-0 h-full w-1/2 object-cover hidden lg:block opacity-70 pointer-events-none" loop="" muted="" playsinline="" preload="none">
<source src="https://rocketing.agency/wp-content/uploads/2025/11/Somos-fabricantes-de-ventanas-de-aluminio-1.mp4" type="video/mp4"/>
</video>
<div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block bg-[#101622]/60"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div data-reveal="">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[#194E8A]/10 text-[#194E8A] ring-1 ring-[#194E8A]/20 text-sm mb-4">
<svg className="w-4 h-4" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
              Entrega en tiempos récord con ingeniería certificada
            </div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white opacity-0 scale-[0.98] transition duration-500 ease-out" id="hero-title">
              Prefabricados de alto desempeño para construir más rápido y con mejor calidad
            </h1>
<p className="mt-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg opacity-0 transition duration-500 ease-out" id="hero-subtitle">
              Diseñamos, fabricamos e instalamos estructuras prefabricadas en concreto y acero para proyectos industriales, comerciales y residenciales. Ahorra tiempo, reduce costos y gana precisión.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold bg-[#194E8A] text-white transition-all duration-300 hover:bg-[#1E63B0] hover:scale-[1.03] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(25,78,138,0.4)] opacity-0" href="#form" id="hero-btn-1" style={{transitionDelay: '120ms'}}>
<svg className="w-5 h-5" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
                Solicitar cotización
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold border-2 border-[#E53935] text-[#E53935] transition-all duration-300 hover:bg-[#E53935] hover:text-white hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(25,78,138,0.4)] opacity-0" href="#proyectos" id="hero-btn-2" style={{transitionDelay: '260ms'}}>
<svg className="w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                Ver proyectos
              </a>
</div>
<div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6" data-reveal="">
<div className="rounded-lg ring-1 ring-[#b0b0b0]/50 p-4 hover:shadow-xl hover:shadow-[#194E8A]/10 transition duration-300 ease-out hover:scale-[1.02]">
<div className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">+12 años</div>
<div className="text-sm text-slate-600 dark:text-slate-300">de experiencia</div>
</div>
<div className="rounded-lg ring-1 ring-[#b0b0b0]/50 p-4 hover:shadow-xl hover:shadow-[#194E8A]/10 transition duration-300 ease-out hover:scale-[1.02]">
<div className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">200+ proyectos</div>
<div className="text-sm text-slate-600 dark:text-slate-300">entregados</div>
</div>
<div className="rounded-lg ring-1 ring-[#b0b0b0]/50 p-4 hover:shadow-xl hover:shadow-[#194E8A]/10 transition duration-300 ease-out hover:scale-[1.02]">
<div className="flex items-center gap-1 text-[#194E8A]">
<svg className="w-5 h-5 fill-[#194E8A] stroke-[#194E8A]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-5 h-5 fill-[#194E8A] stroke-[#194E8A]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-5 h-5 fill-[#194E8A] stroke-[#194E8A]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-5 h-5 fill-[#194E8A] stroke-[#194E8A]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-5 h-5 fill-[#194E8A] stroke-[#194E8A]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="text-sm text-slate-600 dark:text-slate-300 mt-1">Calificación de clientes</div>
</div>
</div>
</div>
<div className="lg:pl-10" data-reveal="">
<div className="rounded-xl ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-[#194E8A]/10 transition duration-300 ease-out hover:scale-[1.02]">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Calcula tu proyecto</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Recibe una cotización estimada en menos de 24 horas.</p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20 px-2 py-1 text-xs">
<svg className="w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Rápido
                </span>
</div>
<form className="mt-6 grid grid-cols-1 gap-4" id="form">
<div className="grid sm:grid-cols-2 gap-4">
<label className="block group">
<span className="text-sm text-slate-700 dark:text-slate-200 transition duration-300 group-focus-within:-translate-y-0.5 group-focus-within:text-[#194E8A] inline-block">Nombre completo</span>
<input className="mt-1 w-full rounded-md border border-[#b0b0b0] bg-white dark:bg-[#0b101a] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#194E8A] focus:placeholder-opacity-40 transition duration-300" placeholder="Tu nombre" required="" type="text"/>
</label>
<label className="block group">
<span className="text-sm text-slate-700 dark:text-slate-200 transition duration-300 group-focus-within:-translate-y-0.5 group-focus-within:text-[#194E8A] inline-block">Teléfono</span>
<input className="mt-1 w-full rounded-md border border-[#b0b0b0] bg-white dark:bg-[#0b101a] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#194E8A] focus:placeholder-opacity-40 transition duration-300" placeholder="+52" required="" type="tel"/>
</label>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<label className="block group">
<span className="text-sm text-slate-700 dark:text-slate-200 transition duration-300 group-focus-within:-translate-y-0.5 group-focus-within:text-[#194E8A] inline-block">Correo</span>
<input className="mt-1 w-full rounded-md border border-[#b0b0b0] bg-white dark:bg-[#0b101a] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#194E8A] focus:placeholder-opacity-40 transition duration-300" placeholder="nombre@empresa.com" required="" type="email"/>
</label>
<label className="block relative group">
<span className="text-sm text-slate-700 dark:text-slate-200 transition duration-300 group-focus-within:-translate-y-0.5 group-focus-within:text-[#194E8A] inline-block">Ubicación</span>
<input className="mt-1 w-full rounded-md border border-[#b0b0b0] bg-white dark:bg-[#0b101a] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#194E8A] focus:placeholder-opacity-40 transition duration-300" placeholder="Ciudad, Estado" type="text"/>
<svg className="w-4 h-4 text-slate-400 absolute right-3 top-[38px] pointer-events-none" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</label>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<label className="block relative group">
<span className="text-sm text-slate-700 dark:text-slate-200 transition duration-300 group-focus-within:-translate-y-0.5 group-focus-within:text-[#194E8A] inline-block">Tipo de solución</span>
<select className="mt-1 w-full appearance-none rounded-md border border-[#b0b0b0] bg-white dark:bg-[#0b101a] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#194E8A] transition duration-300">
<option>Caseta / Oficina</option>
<option>Bodega / Nave</option>
<option>Muros / Paneles</option>
<option>Vivienda Modular</option>
<option>Otro</option>
</select>
<svg className="w-4 h-4 text-slate-400 absolute right-3 top-[38px] pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</label>
<label className="block group">
<span className="text-sm text-slate-700 dark:text-slate-200 transition duration-300 group-focus-within:-translate-y-0.5 group-focus-within:text-[#194E8A] inline-block">Metros cuadrados aprox.</span>
<input className="mt-1 w-full rounded-md border border-[#b0b0b0] bg-white dark:bg-[#0b101a] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#194E8A] focus:placeholder-opacity-40 transition duration-300" min="1" placeholder="Ej. 120" type="number"/>
</label>
</div>
<label className="block group">
<span className="text-sm text-slate-700 dark:text-slate-200 transition duration-300 group-focus-within:-translate-y-0.5 group-focus-within:text-[#194E8A] inline-block">Detalles del proyecto</span>
<textarea className="mt-1 w-full rounded-md border border-[#b0b0b0] bg-white dark:bg-[#0b101a] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#194E8A] focus:placeholder-opacity-40 transition duration-300" placeholder="Cuéntanos uso, alturas, requerimientos, acabados..." rows="3"></textarea>
</label>
<label className="block group">
<span className="text-sm text-slate-700 dark:text-slate-200 inline-block">Planos o documentos (opcional)</span>
<div className="mt-1 rounded-md border border-dashed border-[#b0b0b0] bg-slate-50 dark:bg-[#0b101a] px-3 py-6 text-center hover:border-[#194E8A] transition duration-300">
<svg className="w-5 h-5 mx-auto text-[#194E8A]" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<p className="text-xs text-slate-500 mt-2">Arrastra y suelta o <span className="text-slate-700 dark:text-slate-200">selecciona archivos</span></p>
<input className="cursor-pointer opacity-0 absolute top-0 right-0 bottom-0 left-0" multiple="" type="file"/>
</div>
</label>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-500">
<svg className="w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                    Tus datos están protegidos
                  </div>
<button className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-[#194E8A] hover:bg-[#1E63B0] hover:scale-[1.03] hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(25,78,138,0.4)]" type="submit">
                    Enviar solicitud
                    <svg className="w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</form>
</div>
<p className="text-xs text-slate-500 mt-3 flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Tiempo de respuesta promedio: <span className="text-slate-700 dark:text-slate-200 font-medium">menos de 24 horas</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-10 border-t border-[#b0b0b0]/40 bg-[#101622]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-xs uppercase tracking-wide text-slate-300 text-center">Elegidos por equipos de construcción e industria</p>
<div className="mt-6 overflow-hidden relative" id="client-marquee">
<div className="flex items-center gap-6 will-change-transform" id="marquee-track">

<div className="h-10 min-w-[140px] flex items-center justify-center rounded-md ring-1 ring-[#1f2937] bg-white filter grayscale hover:grayscale-0 transition duration-400 ease-out hover:scale-[1.08] select-none">
<span className="font-medium tracking-tight text-slate-600">ACME</span>
</div>
<div className="h-10 min-w-[140px] flex items-center justify-center rounded-md ring-1 ring-[#1f2937] bg-white filter grayscale hover:grayscale-0 transition duration-400 ease-out hover:scale-[1.08] select-none">
<span className="font-medium tracking-tight text-slate-600">NOVA</span>
</div>
<div className="h-10 min-w-[140px] flex items-center justify-center rounded-md ring-1 ring-[#1f2937] bg-white filter grayscale hover:grayscale-0 transition duration-400 ease-out hover:scale-[1.08] select-none">
<span className="font-medium tracking-tight text-slate-600">ORBE</span>
</div>
<div className="h-10 min-w-[140px] flex items-center justify-center rounded-md ring-1 ring-[#1f2937] bg-white filter grayscale hover:grayscale-0 transition duration-400 ease-out hover:scale-[1.08] select-none">
<span className="font-medium tracking-tight text-slate-600">URBX</span>
</div>
<div className="h-10 min-w-[140px] flex items-center justify-center rounded-md ring-1 ring-[#1f2937] bg-white filter grayscale hover:grayscale-0 transition duration-400 ease-out hover:scale-[1.08] select-none">
<span className="font-medium tracking-tight text-slate-600">NIMB</span>
</div>
<div className="h-10 min-w-[140px] flex items-center justify-center rounded-md ring-1 ring-[#1f2937] bg-white filter grayscale hover:grayscale-0 transition duration-400 ease-out hover:scale-[1.08] select-none">
<span className="font-medium tracking-tight text-slate-600">ALFA</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-[#f5f7fa] dark:bg-[#101622]" data-reveal="" id="soluciones">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Soluciones a la medida</h2>
<p className="text-slate-600 dark:text-slate-300 mt-2">De módulos temporales hasta naves industriales. Diseñamos para tu uso, presupuesto y plazo.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-[#194E8A] hover:underline" href="#form">
            Empezar cotización
            <svg className="w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] overflow-hidden transition duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-[#194E8A]/10" data-reveal="">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Oficinas y casetas prefabricadas" className="w-full h-full object-cover opacity-0 scale-95 transition duration-400 ease-out group-[.entered]:opacity-100 group-[.entered]:scale-100" src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full bg-[#194E8A]/10 text-[#194E8A] ring-1 ring-[#194E8A]/20 px-2 py-0.5">
<svg className="w-3.5 h-3.5 group-hover:text-[#194E8A]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg> Oficinas
                </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-[#131b2a] text-slate-700 dark:text-slate-300 ring-1 ring-[#b0b0b0]/50 px-2 py-0.5">Instalación rápida</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Casetas y Oficinas Modulares</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Soluciones habitacionales y administrativas con opciones de climatización, acústica y acabados.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
<svg className="w-4 h-4 group-hover:text-[#194E8A]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 2–4 semanas
                </div>
<a className="inline-flex items-center gap-1.5 text-sm text-[#194E8A] hover:underline" href="#form">
                  Cotizar
                  <svg className="w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</article>
<article className="group rounded-xl ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] overflow-hidden transition duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-[#194E8A]/10" data-reveal="">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Naves y bodegas prefabricadas" className="w-full h-full object-cover opacity-0 scale-95 transition duration-400 ease-out" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full bg-[#194E8A]/10 text-[#194E8A] ring-1 ring-[#194E8A]/20 px-2 py-0.5">
<svg className="w-3.5 h-3.5 group-hover:text-[#194E8A]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Industrial
                </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-[#131b2a] text-slate-700 dark:text-slate-300 ring-1 ring-[#b0b0b0]/50 px-2 py-0.5">Grandes claros</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Bodegas y Naves</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Estructura eficiente con montaje ágil y ampliaciones futuras sin complicaciones.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
<svg className="w-4 h-4 group-hover:text-[#194E8A]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 6–10 semanas
                </div>
<a className="inline-flex items-center gap-1.5 text-sm text-[#194E8A] hover:underline" href="#form">
                  Cotizar
                  <svg className="w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</article>
<article className="group rounded-xl ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] overflow-hidden transition duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-[#194E8A]/10" data-reveal="">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Muros y paneles prefab" className="w-full h-full object-cover opacity-0 scale-95 transition duration-400 ease-out" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full bg-[#E53935]/10 text-[#E53935] ring-1 ring-[#E53935]/20 px-2 py-0.5">
<svg className="w-3.5 h-3.5 group-hover:text-[#E53935]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Concreto
                </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-[#131b2a] text-slate-700 dark:text-slate-300 ring-1 ring-[#b0b0b0]/50 px-2 py-0.5">Alta durabilidad</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Muros, Paneles y Losas</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Elementos estructurales y arquitectónicos con excelente desempeño térmico.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
<svg className="w-4 h-4 group-hover:text-[#E53935]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 3–6 semanas
                </div>
<a className="inline-flex items-center gap-1.5 text-sm text-[#194E8A] hover:underline" href="#form">
                  Cotizar
                  <svg className="w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-[#101622] border-t border-[#1f2937]" data-reveal="">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">¿Por qué elegir prefabricados con nosotros?</h2>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-xl bg-white dark:bg-[#0f1522] ring-1 ring-[#b0b0b0]/50 p-5 transition duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-[#194E8A]/10" data-reveal="">
<svg className="w-6 h-6 text-[#194E8A] group-hover:text-[#1E63B0]" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<h3 className="mt-3 text-base font-semibold tracking-tight text-slate-900 dark:text-white">Velocidad real</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Fabricación paralela a obra civil para reducir drásticamente tiempos de entrega.</p>
</div>
<div className="rounded-xl bg-white dark:bg-[#0f1522] ring-1 ring-[#b0b0b0]/50 p-5 transition duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-[#194E8A]/10" data-reveal="">
<svg className="w-6 h-6 text-[#194E8A] group-hover:text-[#1E63B0]" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<h3 className="mt-3 text-base font-semibold tracking-tight text-slate-900 dark:text-white">Ingeniería experta</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Cálculo estructural y asesoría técnica de principio a fin.</p>
</div>
<div className="rounded-xl bg-white dark:bg-[#0f1522] ring-1 ring-[#b0b0b0]/50 p-5 transition duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-[#194E8A]/10" data-reveal="">
<svg className="w-6 h-6 text-[#194E8A] group-hover:text-[#1E63B0]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="mt-3 text-base font-semibold tracking-tight text-slate-900 dark:text-white">Calidad certificada</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Procesos estandarizados, trazabilidad y pruebas de calidad en planta.</p>
</div>
<div className="rounded-xl bg-white dark:bg-[#0f1522] ring-1 ring-[#b0b0b0]/50 p-5 transition duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-[#194E8A]/10" data-reveal="">
<svg className="w-6 h-6 text-[#E53935] group-hover:text-[#E53935]" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<h3 className="mt-3 text-base font-semibold tracking-tight text-slate-900 dark:text-white">Costo total menor</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Menos desperdicio, menos imprevistos y menos personal en sitio.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-[#f5f7fa] dark:bg-[#101622]" data-reveal="" id="proyectos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Proyectos destacados</h2>
<p className="text-slate-600 dark:text-slate-300 mt-2">Casos reales en industrial, comercial y vivienda con montaje ágil y control de calidad.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-[#194E8A] hover:underline" href="#form">
            Cotiza tu proyecto
            <svg className="w-4 h-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div aria-label="Filtros de proyectos" className="mt-6 flex flex-wrap items-center gap-2" role="tablist">
<button aria-selected="true" className="px-3 py-1.5 text-sm rounded-full ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] text-slate-700 dark:text-slate-200 hover:shadow transition active-filter" data-filter="all" role="tab">Todos</button>
<button aria-selected="false" className="px-3 py-1.5 text-sm rounded-full ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] text-slate-700 dark:text-slate-200 hover:shadow transition" data-filter="industrial" role="tab">Industrial</button>
<button aria-selected="false" className="px-3 py-1.5 text-sm rounded-full ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] text-slate-700 dark:text-slate-200 hover:shadow transition" data-filter="comercial" role="tab">Comercial</button>
<button aria-selected="false" className="px-3 py-1.5 text-sm rounded-full ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] text-slate-700 dark:text-slate-200 hover:shadow transition" data-filter="residencial" role="tab">Residencial</button>
</div>

<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl overflow-hidden ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] transition duration-300 hover:shadow-xl hover:scale-[1.02]" data-category="industrial" data-reveal="">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Nave industrial con estructura prefabricada" className="w-full h-full object-cover transition duration-500 ease-out scale-105 group-hover:scale-110" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-[#194E8A]/10 text-white ring-1 ring-white/20 px-2 py-0.5 text-xs">Industrial</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Nave de producción 3,200 m²</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Montaje en 8 semanas, claros de 25 m y muros de panel prefabricado.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
<svg className="w-4 h-4 text-[#194E8A]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h7l-1 9 8-13h-7l1-9-8 13Z"></path></svg>
                  Monterrey, NL
                </span>
<a className="inline-flex items-center gap-1 text-[#194E8A] hover:underline" href="#form">Cotizar similar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] transition duration-300 hover:shadow-xl hover:scale-[1.02]" data-category="comercial" data-reveal="">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Plaza comercial con elementos prefabricados" className="w-full h-full object-cover transition duration-500 ease-out scale-105 group-hover:scale-110" src="https://images.unsplash.com/photo-1582582429416-6195093a9c29?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-[#E53935]/10 text-white ring-1 ring-white/20 px-2 py-0.5 text-xs">Comercial</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Plaza y estacionamiento</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Prefabricado en losas y columnas para acelerar aperturas.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
<svg className="w-4 h-4 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 9-9 9 9"></path><path d="M4 10v10a2 2 0 0 0 2 2h3V14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8h3a2 2 0 0 0 2-2V10"></path></svg>
                  Querétaro, QRO
                </span>
<a className="inline-flex items-center gap-1 text-[#194E8A] hover:underline" href="#form">Cotizar similar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] transition duration-300 hover:shadow-xl hover:scale-[1.02]" data-category="residencial" data-reveal="">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Vivienda modular prefabricada" className="w-full h-full object-cover transition duration-500 ease-out scale-105 group-hover:scale-110" src="https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 text-white ring-1 ring-white/20 px-2 py-0.5 text-xs">Residencial</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Vivienda modular 140 m²</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Panel térmico + estructura ligera, lista en 5 semanas.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
<svg className="w-4 h-4 text-[#194E8A]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 9-9 9 9"></path><path d="M4 10v10a2 2 0 0 0 2 2h3V14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8h3a2 2 0 0 0 2-2V10"></path></svg>
                  Puebla, PUE
                </span>
<a className="inline-flex items-center gap-1 text-[#194E8A] hover:underline" href="#form">Cotizar similar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] transition duration-300 hover:shadow-xl hover:scale-[1.02]" data-category="industrial" data-reveal="">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Almacén logístico con losa alveolar" className="w-full h-full object-cover transition duration-500 ease-out scale-105 group-hover:scale-110" src="https://images.unsplash.com/photo-1582582429417-cf0ef7bfb2c3?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-[#194E8A]/10 text-white ring-1 ring-white/20 px-2 py-0.5 text-xs">Industrial</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Centro logístico</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Losa alveolar y muros tilt-up para mayor velocidad en obra.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
<svg className="w-4 h-4 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v-6m0 0 3 3m-3-3-3 3M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"></path></svg>
                  San Luis Potosí, SLP
                </span>
<a className="inline-flex items-center gap-1 text-[#194E8A] hover:underline" href="#form">Cotizar similar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] transition duration-300 hover:shadow-xl hover:scale-[1.02]" data-category="comercial" data-reveal="">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Showroom comercial con fachada prefabricada" className="w-full h-full object-cover transition duration-500 ease-out scale-105 group-hover:scale-110" src="https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-[#E53935]/10 text-white ring-1 ring-white/20 px-2 py-0.5 text-xs">Comercial</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Showroom automotriz</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Cubiertas ligeras y panel arquitectónico con acabado expuesto.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
<svg className="w-4 h-4 text-[#194E8A]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
                  CDMX
                </span>
<a className="inline-flex items-center gap-1 text-[#194E8A] hover:underline" href="#form">Cotizar similar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] transition duration-300 hover:shadow-xl hover:scale-[1.02]" data-category="residencial" data-reveal="">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Conjunto residencial con muros prefabricados" className="w-full h-full object-cover transition duration-500 ease-out scale-105 group-hover:scale-110" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 text-white ring-1 ring-white/20 px-2 py-0.5 text-xs">Residencial</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Conjunto vertical</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Muros y losas prefabricadas para acelerar la estructura.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
<svg className="w-4 h-4 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"></path></svg>
                  Guadalajara, JAL
                </span>
<a className="inline-flex items-center gap-1 text-[#194E8A] hover:underline" href="#form">Cotizar similar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</article>
</div>
<div className="mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold border-2 border-[#194E8A] text-[#194E8A] hover:bg-[#194E8A] hover:text-white transition" href="#form">
            Quiero un proyecto similar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-white dark:bg-[#0f1522] border-t border-[#b0b0b0]/40" data-reveal="" id="productos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Catálogo de elementos</h2>
<p className="text-slate-600 dark:text-slate-300 mt-2">Componentes estructurales y arquitectónicos compatibles entre sí.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-[#194E8A] hover:underline" href="#form">
            Solicitar ficha técnica
            <svg className="w-4 h-4" data-lucide="download" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 10-5 5-5-5"></path><path d="M20 21H4"></path></svg>
</a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group rounded-xl ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg-[#0b101a] p-5 hover:shadow-xl hover:scale-[1.02] transition" data-reveal="">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-slate-900 dark:text-white">Vigas</h3>
<span className="text-xs px-2 py-0.5 rounded-full bg-[#194E8A]/10 text-[#194E8A] ring-1 ring-[#194E8A]/20">Acero/Concreto</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Peraltes a medida, longitudes hasta 24 m, opción pos-tensado.</p>
<ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#194E8A]"></span> Claros amplios</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E53935]"></span> Montaje rápido</li>
</ul>
<a className="mt-4 inline-flex items-center gap-1 text-sm text-[#194E8A] hover:underline" href="#form">Pedir cotización
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="group rounded-xl ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg-[#0b101a] p-5 hover:shadow-xl hover:scale-[1.02] transition" data-reveal="">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-slate-900 dark:text-white">Columnas</h3>
<span className="text-xs px-2 py-0.5 rounded-full bg-[#E53935]/10 text-[#E53935] ring-1 ring-[#E53935]/20">Concreto</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Secciones cuadradas/rectangulares, placas y anclas incluidas.</p>
<ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#194E8A]"></span> Alta estabilidad</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E53935]"></span> Tolerancias precisas</li>
</ul>
<a className="mt-4 inline-flex items-center gap-1 text-sm text-[#194E8A] hover:underline" href="#form">Pedir cotización
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="group rounded-xl ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg0b101a] p-5 hover:shadow-xl hover:scale-[1.02] transition" data-reveal="">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-slate-900 dark:text-white">Paneles</h3>
<span className="text-xs px-2 py-0.5 rounded-full bg-[#194E8A]/10 text-[#194E8A] ring-1 ring-[#194E8A]/20">Aislados</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Térmicos y acústicos, caras lisas o texturizadas.</p>
<ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#194E8A]"></span> Confort térmico</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E53935]"></span> Menor consumo</li>
</ul>
<a className="mt-4 inline-flex items-center gap-1 text-sm text-[#194E8A] hover:underline" href="#form">Pedir cotización
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="group rounded-xl ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg-[#0b101a] p-5 hover:shadow-xl hover:scale-[1.02] transition" data-reveal="">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-slate-900 dark:text-white">Losa alveolar</h3>
<span className="text-xs px-2 py-0.5 rounded-full bg-[#E53935]/10 text-[#E53935] ring-1 ring-[#E53935]/20">Pretensada</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Altas capacidades con peso optimizado, ideal para entrepisos.</p>
<ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#194E8A]"></span> Menos apoyos</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E53935]"></span> Acabado uniforme</li>
</ul>
<a className="mt-4 inline-flex items-center gap-1 text-sm text-[#194E8A] hover:underline" href="#form">Pedir cotización
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-[#f5f7fa] dark:bg-[#101622] border-t border-[#b0b0b0]/40" data-reveal="" id="clientes">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Lo que dicen nuestros clientes</h2>
<p className="text-slate-600 dark:text-slate-300 mt-2">Confianza ganada con entrega puntual, seguridad y calidad.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-[#194E8A] hover:underline" href="#form">
            Solicitar referencias
            <svg className="w-4 h-4" data-lucide="users" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<figure className="rounded-xl ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] p-5 hover:shadow-xl transition" data-reveal="">
<div className="flex items-center gap-3">
<img alt="Retrato de cliente" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-semibold text-slate-900 dark:text-white">Mariana R.</figcaption>
<p className="text-xs text-slate-500">Directora de Operaciones</p>
</div>
<div className="ml-auto flex text-[#194E8A]">
<span aria-hidden="true">★★★★★</span>
<span className="sr-only">5 de 5</span>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-700 dark:text-slate-300">Cumplieron el calendario y logramos iniciar antes de lo previsto. La coordinación en sitio fue impecable.</blockquote>
</figure>
<figure className="rounded-xl ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] p-5 hover:shadow-xl transition" data-reveal="">
<div className="flex items-center gap-3">
<img alt="Retrato de cliente" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-semibold text-slate-900 dark:text-white">Alejandro C.</figcaption>
<p className="text-xs text-slate-500">Gerente de Proyecto</p>
</div>
<div className="ml-auto flex text-[#194E8A]">
<span aria-hidden="true">★★★★★</span>
<span className="sr-only">5 de 5</span>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-700 dark:text-slate-300">Excelente soporte de ingeniería. Ajustaron detalles para optimizar costos sin sacrificar calidad.</blockquote>
</figure>
<figure className="rounded-xl ring-1 ring-[#b0b0b0]/50 bg-white dark:bg-[#0f1522] p-5 hover:shadow-xl transition" data-reveal="">
<div className="flex items-center gap-3">
<img alt="Retrato de cliente" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-semibold text-slate-900 dark:text-white">Sofía M.</figcaption>
<p className="text-xs text-slate-500">Arquitecta</p>
</div>
<div className="ml-auto flex text-[#194E8A]">
<span aria-hidden="true">★★★★★</span>
<span className="sr-only">5 de 5</span>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-700 dark:text-slate-300">Los acabados del panel arquitectónico superaron las expectativas del cliente final.</blockquote>
</figure>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-white dark:bg-[#0f1522] border-t border-[#b0b0b0]/40" data-reveal="" id="recursos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-start">

<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Preguntas frecuentes</h2>
<div className="mt-6 space-y-3">
<details className="group rounded-lg ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg-[#101622] p-4">
<summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-900 dark:text-white">
                  ¿Cuál es el tiempo típico de fabricación y montaje?
                  <span className="ml-3 transition group-open:rotate-180">
<svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Según escala: casetas 2–4 semanas, muros/losas 3–6 semanas y naves 6–10 semanas incluyendo montaje.</p>
</details>
<details className="group rounded-lg ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg-[#101622] p-4">
<summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-900 dark:text-white">
                  ¿Trabajan proyectos a la medida y con cálculo estructural?
                  <span className="ml-3 transition group-open:rotate-180">
<svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Sí. Nuestro equipo de ingeniería desarrolla memorias de cálculo, planos y listas de materiales.</p>
</details>
<details className="group rounded-lg ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg-[#101622] p-4">
<summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-900 dark:text-white">
                  ¿En qué regiones operan?
                  <span className="ml-3 transition group-open:rotate-180">
<svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Cobertura nacional y proyectos especiales en LATAM según volumen y alcance.</p>
</details>
</div>
</div>

<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Recursos descargables</h3>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<a className="group rounded-lg ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg-[#101622] p-4 hover:shadow-lg transition" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-[#194E8A]/10 text-[#194E8A] flex items-center justify-center">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 10-5 5-5-5"></path><path d="M20 21H4"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Checklist para cotizar</p>
<p className="text-xs text-slate-600 dark:text-slate-300">PDF • 1.2 MB</p>
</div>
</div>
</a>
<a className="group rounded-lg ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg-[#101622] p-4 hover:shadow-lg transition" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-[#E53935]/10 text-[#E53935] flex items-center justify-center">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z"></path><path d="M8 8h8v8H8z"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Guía de paneles y muros</p>
<p className="text-xs text-slate-600 dark:text-slate-300">PDF • 2.4 MB</p>
</div>
</div>
</a>
<a className="group rounded-lg ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg-[#101622] p-4 hover:shadow-lg transition" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-[#194E8A]/10 text-[#194E8A] flex items-center justify-center">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M3 12h18"></path><path d="M3 18h18"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Especificaciones tipo</p>
<p className="text-xs text-slate-600 dark:text-slate-300">DOCX • 340 KB</p>
</div>
</div>
</a>
<a className="group rounded-lg ring-1 ring-[#b0b0b0]/50 bg-[#f8fafc] dark:bg-[#101622] p-4 hover:shadow-lg transition" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-[#E53935]/10 text-[#E53935] flex items-center justify-center">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 4h18v14H3z"></path><path d="m3 18 6-4 6 4 6-4"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Detalles constructivos</p>
<p className="text-xs text-slate-600 dark:text-slate-300">DWG • 780 KB</p>
</div>
</div>
</a>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold bg-[#194E8A] text-white hover:bg-[#1E63B0] transition" href="#form">Solicitar acceso completo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-gradient-to-br from-[#0e1523] to-[#101622] text-white border-t border-[#1f2937]" data-reveal="">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">¿Listo para construir más rápido con prefabricados?</h3>
<p className="mt-2 text-slate-300">Te asesoramos desde la ingeniería hasta la instalación. Respuesta en menos de 24 horas.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold bg-[#E53935] text-white transition hover:scale-[1.03] hover:shadow-lg" href="#form">Solicitar cotización
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold ring-2 ring-white/40 hover:ring-white/60 transition" href="tel:+520000000000">Hablar con un asesor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72l.45 3a2 2 0 0 1-.55 1.86l-1.2 1.2a16 16 0 0 0 6.73 6.73l1.2-1.2a2 2 0 0 1 1.86-.55l3 .45a2 2 0 0 1 1.72 2Z"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-[#0e1523] text-slate-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div>
<img alt="Marca Prefabricados logo" className="w-36 h-10 object-contain bg-white rounded-md ring-1 ring-white/20 p-1" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/955d3fc9-0ce3-44e3-99ec-eae862c7eeab_800w.png"/>
<p className="mt-3 text-sm text-slate-400">Prefabricados de alto desempeño en concreto y acero. Velocidad, calidad y costos controlados.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Empresa</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="hover:underline" href="#soluciones">Soluciones</a></li>
<li><a className="hover:underline" href="#productos">Productos</a></li>
<li><a className="hover:underline" href="#proyectos">Proyectos</a></li>
<li><a className="hover:underline" href="#clientes">Clientes</a></li>
<li><a className="hover:underline" href="#recursos">Recursos</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Contacto</h4>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72l.45 3a2 2 0 0 1-.55 1.86l-1.2 1.2a16 16 0 0 0 6.73 6.73l1.2-1.2a2 2 0 0 1 1.86-.55l3 .45a2 2 0 0 1 1.72 2Z"></path></svg> <a className="hover:underline" href="tel:+520000000000">+52 (00) 0000 0000</a></li>
<li className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> <a className="hover:underline" href="mailto:hola@marcaprefabricados.com">hola@marcaprefabricados.com</a></li>
<li className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> México • Cobertura nacional</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Síguenos</h4>
<div className="mt-3 flex items-center gap-3">
<a aria-label="LinkedIn" className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-1 ring-white/20 hover:bg-white/10 transition" href="#">
<svg className="w-4.5 h-4.5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.5-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.2c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z"></path></svg>
</a>
<a aria-label="WhatsApp" className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-1 ring-white/20 hover:bg-white/10 transition" href="https://wa.me/5210000000000">
<svg className="w-4.5 h-4.5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0 12 12 0 0 0 0 12a11.87 11.87 0 0 0 3.48 8.51L2 24l3.65-1.43A11.88 11.88 0 0 0 12 24a12 12 0 0 0 8.52-20.52zM12 22a9.84 9.84 0 0 1-5-1.36l-.36-.21-2.17.85.8-2.11-.23-.37A9.85 9.85 0 1 1 12 22zm5.69-7.45c-.31-.16-1.82-.9-2.1-1s-.48-.16-.69.16-.79 1-1 1.21-.36.24-.67.08a8.07 8.07 0 0 1-2.39-1.47 9 9 0 0 1-1.66-2.07c-.17-.29 0-.45.13-.61s.29-.35.43-.53a2 2 0 0 0 .29-.49.55.55 0 0 0 0-.53c0-.16-.69-1.65-.95-2.26s-.5-.52-.69-.53h-.58a1.11 1.11 0 0 0-.79.37A3.32 3.32 0 0 0 5 8a5.72 5.72 0 0 0 .29 2.17 13 13 0 0 0 2.51 4 11.5 11.5 0 0 0 4.4 3.32 3.77 3.77 0 0 0 1.82.46 1.55 1.55 0 0 0 1-.48 2.6 2.6 0 0 0 .56-1.09 1.33 1.33 0 0 0 .09-.89c-.1-.1-.28-.16-.58-.31z"></path></svg>
</a>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
<p>© <span id="year"></span> Marca Prefabricados. Todos los derechos reservados.</p>
<div className="flex items-center gap-4">
<a className="hover:underline" href="#">Aviso de privacidad</a>
<a className="hover:underline" href="#">Términos</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
