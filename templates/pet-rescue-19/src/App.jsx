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



    document.getElementById('year').textContent = new Date().getFullYear();

      if (window.lucide) {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
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
      

<div className="w-full bg-orange-100 border-b border-orange-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
<p className="text-orange-900">Transparencia total: reportes mensuales de rescates y donaciones</p>
<div className="hidden sm:flex items-center gap-4">
<a className="text-orange-800 hover:text-orange-950 transition-colors" href="#impacto">Impacto</a>
<a className="text-orange-800 hover:text-orange-950 transition-colors" href="#dona">Dona</a>
<a className="text-orange-800 hover:text-orange-950 transition-colors" href="#contacto">Contacto</a>
<span className="h-5 w-px bg-orange-300"></span>
<div className="flex items-center gap-2">
<a aria-label="Instagram" className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-orange-300 text-orange-800 hover:border-orange-400 hover:bg-orange-200 hover:text-orange-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" href="#" rel="noopener" target="_blank">
<i className="h-4.5 w-4.5" data-lucide="instagram"></i>
</a>
<a aria-label="Facebook" className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-orange-300 text-orange-800 hover:border-orange-400 hover:bg-orange-200 hover:text-orange-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" href="#" rel="noopener" target="_blank">
<i className="h-4.5 w-4.5" data-lucide="facebook"></i>
</a>
<a aria-label="YouTube" className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-orange-300 text-orange-800 hover:border-orange-400 hover:bg-orange-200 hover:text-orange-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" href="#" rel="noopener" target="_blank">
<i className="h-4.5 w-4.5" data-lucide="youtube"></i>
</a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur bg-amber-50/95 border-b border-orange-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="h-7 w-7 rounded-md bg-orange-600 text-white flex items-center justify-center text-[12px] font-semibold tracking-tight">
<i className="h-4 w-4" data-lucide="paw-print"></i>
</div>
<span className="text-[16px] font-semibold tracking-tight text-orange-900">Lomitos de mi Corazón</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-[15px] text-orange-800 hover:text-orange-950 transition-colors" href="#nosotros">Nosotros</a>
<a className="text-[15px] text-orange-800 hover:text-orange-950 transition-colors" href="#proceso">Proceso</a>
<a className="text-[15px] text-orange-800 hover:text-orange-950 transition-colors" href="#perritos">Adopta</a>
<a className="text-[15px] text-orange-800 hover:text-orange-950 transition-colors" href="#voluntariado">Voluntariado</a>
<a className="text-[15px] text-orange-800 hover:text-orange-950 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[15px] font-medium bg-orange-600 text-white hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors shadow-sm" href="#dona">
<i className="h-4.5 w-4.5" data-lucide="heart-handshake"></i>
          Dona ahora
        </a>
<button aria-label="Abrir menú" className="md:hidden inline-flex items-center justify-center rounded-md border border-orange-300 hover:border-orange-400 h-9 w-9 text-orange-800 hover:text-orange-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-24 h-96 w-96 bg-orange-200/60 rounded-full blur-3xl"></div>
<div className="absolute -bottom-16 -left-24 h-96 w-96 bg-amber-200/60 rounded-full blur-3xl"></div>

<div className="absolute top-20 right-1/4 text-orange-200 opacity-40 transform rotate-12">
<i className="h-16 w-16" data-lucide="paw-print"></i>
</div>
<div className="absolute bottom-40 left-1/3 text-amber-200 opacity-30 transform -rotate-45">
<i className="h-12 w-12" data-lucide="paw-print"></i>
</div>
<div className="absolute top-1/2 right-20 text-orange-300 opacity-25 transform rotate-90">
<i className="h-20 w-20" data-lucide="bone"></i>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<span className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-orange-300 bg-orange-100 text-[13px] text-orange-900 shadow-sm">
<i className="h-4 w-4" data-lucide="paw-print"></i>
              Asociación civil sin fines de lucro
            </span>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-orange-950">
            Rescatamos perritos, los cuidamos y les encontramos un hogar responsable
          </h1>
<p className="mt-5 text-[17px] leading-relaxed text-orange-900">
            Nuestro equipo de voluntarios rescata, cura y rehabilita perritos de la calle. Les damos hogar temporal,
            alimento y acompañamiento hasta encontrar la familia ideal.
          </p>
<div className="mt-7 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[15px] font-medium bg-orange-600 text-white hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 shadow-sm" href="#dona">
<i className="h-5 w-5" data-lucide="hand-coins"></i>
              Quiero donar
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[15px] font-medium border border-orange-400 bg-white text-orange-900 hover:border-orange-500 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 shadow-sm" href="#perritos">
<i className="h-5 w-5" data-lucide="home"></i>
              Adopta
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[15px] font-medium border border-orange-400 bg-white text-orange-900 hover:border-orange-500 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 shadow-sm" href="#voluntariado">
<i className="h-5 w-5" data-lucide="users"></i>
              Sé voluntario
            </a>
</div>
<div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
<div className="rounded-lg border border-orange-300 bg-white p-4 shadow-sm">
<div className="flex items-center gap-2 text-orange-700 text-sm">
<i className="h-4.5 w-4.5" data-lucide="dog"></i>
                Rescatados
              </div>
<p className="mt-2 text-2xl font-semibold tracking-tight text-orange-950">1,248</p>
</div>
<div className="rounded-lg border border-orange-300 bg-white p-4 shadow-sm">
<div className="flex items-center gap-2 text-orange-700 text-sm">
<i className="h-4.5 w-4.5" data-lucide="house-plus"></i>
                En adopción
              </div>
<p className="mt-2 text-2xl font-semibold tracking-tight text-orange-950">37</p>
</div>
<div className="rounded-lg border border-orange-300 bg-white p-4 shadow-sm">
<div className="flex items-center gap-2 text-orange-700 text-sm">
<i className="h-4.5 w-4.5" data-lucide="heart"></i>
                Adopciones
              </div>
<p className="mt-2 text-2xl font-semibold tracking-tight text-orange-950">1,091</p>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-2xl overflow-hidden border border-orange-300 bg-white shadow-lg">
<img alt="Perrito rescatado descansando en un hogar temporal" className="w-full h-[420px] object-cover" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white border border-orange-300 rounded-xl shadow-lg p-4 w-[260px]">
<div className="flex items-center gap-2 text-sm text-orange-800">
<i className="h-4.5 w-4.5" data-lucide="stethoscope"></i>
              Atención veterinaria
            </div>
<p className="mt-2 text-[15px] text-orange-900">Vacunas, esterilización y rehabilitación con aliados
              veterinarios.</p>
</div>

<div className="absolute -top-3 -right-3 text-orange-400 opacity-60">
<i className="h-8 w-8" data-lucide="paw-print"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-orange-200 bg-orange-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<p className="text-sm text-orange-800 font-medium">Nuestros aliados y sponsors</p>
</div>
<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
<div className="flex items-center justify-center p-6 rounded-lg border border-orange-300 bg-white hover:shadow-md transition-shadow">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-orange-900">ROYAL CANIN</div>
<p className="text-xs text-orange-700 mt-1">Nutrición profesional</p>
</div>
</div>
<div className="flex items-center justify-center p-6 rounded-lg border border-orange-300 bg-white hover:shadow-md transition-shadow">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-orange-900">LA POP</div>
<p className="text-xs text-orange-700 mt-1">Boutique</p>
</div>
</div>
<div className="flex items-center justify-center p-6 rounded-lg border border-orange-300 bg-white hover:shadow-md transition-shadow">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-orange-900">PETSTABLE</div>
<p className="text-xs text-orange-700 mt-1">Accesorios premium</p>
</div>
</div>
<div className="flex items-center justify-center p-6 rounded-lg border border-orange-300 bg-white hover:shadow-md transition-shadow">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-orange-900">FILOMENA</div>
<p className="text-xs text-orange-700 mt-1">Marquet</p>
</div>
</div>
</div>
</div>
</section>



<section className="py-14 sm:py-20 bg-orange-50 border-y border-orange-200 relative overflow-hidden" id="proceso">
<div className="absolute bottom-10 right-20 text-amber-200 opacity-20">
<i className="h-32 w-32 transform rotate-45" data-lucide="paw-print"></i>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-orange-950">Cómo ayudamos</h2>
<p className="mt-3 text-[16px] text-orange-900">Acompañamos a cada perrito en cada etapa, desde el rescate hasta su
          integración a una nueva familia.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
<div className="rounded-xl border border-orange-300 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="h-9 w-9 rounded-md bg-orange-600 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="search"></i>
</div>
<h3 className="mt-4 text-[17px] font-medium tracking-tight text-orange-950">Rescate</h3>
<p className="mt-2 text-[15px] text-orange-800">Atendemos reportes y realizamos rescates seguros.</p>
</div>
<div className="rounded-xl border border-orange-300 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="h-9 w-9 rounded-md bg-orange-600 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="bandage"></i>
</div>
<h3 className="mt-4 text-[17px] font-medium tracking-tight text-orange-950">Atención médica</h3>
<p className="mt-2 text-[15px] text-orange-800">Evaluación, curación, vacunas y esterilización.</p>
</div>
<div className="rounded-xl border border-orange-300 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="h-9 w-9 rounded-md bg-orange-600 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<h3 className="mt-4 text-[17px] font-medium tracking-tight text-orange-950">Rehabilitación</h3>
<p className="mt-2 text-[15px] text-orange-800">Socialización y cuidados emocionales.</p>
</div>
<div className="rounded-xl border border-orange-300 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="h-9 w-9 rounded-md bg-orange-600 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="home"></i>
</div>
<h3 className="mt-4 text-[17px] font-medium tracking-tight text-orange-950">Hogar temporal</h3>
<p className="mt-2 text-[15px] text-orange-800">Casas puente con supervisión y alimento.</p>
</div>
<div className="rounded-xl border border-orange-300 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="h-9 w-9 rounded-md bg-orange-600 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="handshake"></i>
</div>
<h3 className="mt-4 text-[17px] font-medium tracking-tight text-orange-950">Adopción responsable</h3>
<p className="mt-2 text-[15px] text-orange-800">Entrevista, visita y seguimiento.</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 bg-amber-50 relative overflow-hidden" id="perritos">
<div className="absolute top-1/3 right-10 text-orange-200 opacity-15">
<i className="h-40 w-40 transform rotate-45" data-lucide="bone"></i>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-orange-950">Perritos buscando familia</h2>
<p className="mt-3 text-[16px] text-orange-900">Todos vacunados, desparasitados y esterilizados. Conócelos y
            agenda una visita.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[15px] font-medium bg-orange-600 text-white hover:bg-orange-700 shadow-sm">
<i className="h-5 w-5" data-lucide="upload"></i>
              Publicar
            </button>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[15px] font-medium border border-orange-400 bg-white text-orange-900 hover:border-orange-500 hover:bg-orange-50 shadow-sm" href="#contacto">
<i className="h-5 w-5" data-lucide="calendar"></i>
            Agendar visita
          </a>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="rounded-xl border border-orange-300 bg-white overflow-hidden hover:shadow-lg transition-shadow">
<img alt="Perrito en adopción, tamaño mediano, color café" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight text-orange-950">Luna</h3>
<span className="text-xs text-orange-800 inline-flex items-center gap-1 border border-orange-300 bg-orange-50 rounded-full px-2 py-1">
<i className="h-3.5 w-3.5" data-lucide="female"></i>
                  Hembra
                </span>
</div>
<p className="mt-1 text-sm text-orange-800">2 años • Mediana • Sociable</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">Energética</span>
<span className="text-xs px-2 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">Convive con niños</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="text-[14px] font-medium text-orange-700 hover:text-orange-950 hover:underline inline-flex items-center gap-1" href="#contacto">
                Ver ficha <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[14px] font-medium bg-orange-600 text-white hover:bg-orange-700 shadow-sm" href="#adopta">
<i className="h-4 w-4" data-lucide="home"></i>
                Adoptar
              </a>
</div>
</div>
</article>

<article className="rounded-xl border border-orange-300 bg-white overflow-hidden hover:shadow-lg transition-shadow">
<img alt="Perrito en adopción pequeño con mirada tierna" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight text-orange-950">Max</h3>
<span className="text-xs text-orange-800 inline-flex items-center gap-1 border border-orange-300 bg-orange-50 rounded-full px-2 py-1">
<i className="h-3.5 w-3.5" data-lucide="male"></i>
                  Macho
                </span>
</div>
<p className="mt-1 text-sm text-orange-800">1 año • Pequeño • Cariñoso</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">Obediente</span>
<span className="text-xs px-2 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">Convive con perros</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="text-[14px] font-medium text-orange-700 hover:text-orange-950 hover:underline inline-flex items-center gap-1" href="#contacto">
                Ver ficha <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[14px] font-medium bg-orange-600 text-white hover:bg-orange-700 shadow-sm" href="#adopta">
<i className="h-4 w-4" data-lucide="home"></i>
                Adoptar
              </a>
</div>
</div>
</article>

<article className="rounded-xl border border-orange-300 bg-white overflow-hidden hover:shadow-lg transition-shadow">
<img alt="Perrito grande jugando en el pasto" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight text-orange-950">Canela</h3>
<span className="text-xs text-orange-800 inline-flex items-center gap-1 border border-orange-300 bg-orange-50 rounded-full px-2 py-1">
<i className="h-3.5 w-3.5" data-lucide="female"></i>
                  Hembra
                </span>
</div>
<p className="mt-1 text-sm text-orange-800">3 años • Grande • Tranquila</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">Esterilizada</span>
<span className="text-xs px-2 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">Casa con patio</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="text-[14px] font-medium text-orange-700 hover:text-orange-950 hover:underline inline-flex items-center gap-1" href="#contacto">
                Ver ficha <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[14px] font-medium bg-orange-600 text-white hover:bg-orange-700 shadow-sm" href="#adopta">
<i className="h-4 w-4" data-lucide="home"></i>
                Adoptar
              </a>
</div>
</div>
</article>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-[15px] font-medium text-orange-800 hover:text-orange-950 hover:underline" href="#contacto">
          Ver todos los perritos en adopción
          <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>





<section className="py-14 sm:py-20 bg-orange-50 border-y border-orange-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-orange-950">Historias reales</h2>
<p className="mt-3 text-[16px] text-orange-900">Familias que adoptaron y transformaron la vida de su nuevo
          integrante.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl border border-orange-300 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<img alt="Retrato de adoptante" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-[15px] font-medium tracking-tight text-orange-950">María y Bruno</p>
<p className="text-xs text-orange-700">Adoptaron en 2024</p>
</div>
</div>
<p className="mt-3 text-[15px] text-orange-900">El proceso fue claro y responsable. Bruno llegó sano y súper
            cariñoso. Nos acompañaron en cada paso.</p>
</div>
<div className="rounded-xl border border-orange-300 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<img alt="Retrato de adoptante" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-[15px] font-medium tracking-tight text-orange-950">Alan y Coco</p>
<p className="text-xs text-orange-700">Adoptaron en 2023</p>
</div>
</div>
<p className="mt-3 text-[15px] text-orange-900">Coco se adaptó increíble. Agradecemos su seguimiento y consejos de
            socialización.</p>
</div>
<div className="rounded-xl border border-orange-300 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<img alt="Retrato de adoptante" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-[15px] font-medium tracking-tight text-orange-950">Sofía y Lolo</p>
<p className="text-xs text-orange-700">Adoptaron en 2024</p>
</div>
</div>
<p className="mt-3 text-[15px] text-orange-900">Se nota el amor y profesionalismo. Lolo llegó rehabilitado y con
            todo su carnet.</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 bg-amber-50" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-orange-950">Preguntas frecuentes</h2>
<div className="mt-6 divide-y divide-orange-200 border border-orange-300 rounded-xl bg-white shadow-sm">
<details className="group">
<summary className="flex items-center justify-between px-4 py-4 cursor-pointer list-none">
<span className="text-[15px] font-medium text-orange-950">¿Cuál es el proceso de adopción?</span>
<i className="h-5 w-5 text-orange-700 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-[15px] text-orange-800">
            Entrevista, verificación de domicilio, firma de carta responsiva y periodo de adaptación con seguimiento.
          </div>
</details>
<details className="group">
<summary className="flex items-center justify-between px-4 py-4 cursor-pointer list-none">
<span className="text-[15px] font-medium text-orange-950">¿Puedo ser hogar temporal?</span>
<i className="h-5 w-5 text-orange-700 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-[15px] text-orange-800">
            Sí. Proveemos alimento, atención veterinaria y asesoría. Tú brindas espacio y cariño.
          </div>
</details>
<details className="group">
<summary className="flex items-center justify-between px-4 py-4 cursor-pointer list-none">
<span className="text-[15px] font-medium text-orange-950">¿Las donaciones son deducibles?</span>
<i className="h-5 w-5 text-orange-700 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-[15px] text-orange-800">
            Sí, emitimos recibos deducibles. Al donar, comparte tus datos fiscales y te lo enviamos por email.
          </div>
</details>
</div>
</div>
</section>

<section className="py-14 sm:py-20 bg-orange-100 border-y border-orange-200" id="adopta">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-orange-300 bg-white p-6 sm:p-10 flex flex-col md:flex-row items-center md:items-stretch gap-6 shadow-lg">
<div className="flex-1">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-orange-950">Adopta con responsabilidad</h3>
<p className="mt-3 text-[16px] text-orange-900">Te acompañamos con asesoría, seguimiento y un kit de bienvenida
            para tu nuevo compañero.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[15px] font-medium bg-orange-600 text-white hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 shadow-md" href="#perritos">
<i className="h-5 w-5" data-lucide="paw-print"></i>
              Ver perritos
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[15px] font-medium border border-orange-400 bg-white text-orange-900 hover:border-orange-500 hover:bg-orange-50 shadow-sm" href="#contacto">
<i className="h-5 w-5" data-lucide="message-circle"></i>
              Agendar entrevista
            </a>
</div>
</div>
<div className="w-full md:w-[380px] rounded-xl overflow-hidden border border-orange-300">
<img alt="Perrito adoptado feliz en su nuevo hogar" className="w-full h-60 object-cover" src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="border-t border-orange-200 bg-amber-50" id="contacto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-orange-600 text-white flex items-center justify-center text-[12px] font-semibold tracking-tight">
<i className="h-4 w-4" data-lucide="paw-print"></i>
</div>
<span className="text-[16px] font-semibold tracking-tight text-orange-950">Lomitos de mi Corazón</span>
</div>
<p className="mt-3 text-[15px] text-orange-800">Rescate, cuidado y adopción responsable. Unidad y amor por los
            peludos que más nos necesitan.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-orange-400 text-orange-900 hover:border-orange-500 hover:bg-orange-100" href="#">
<i className="h-5 w-5" data-lucide="instagram"></i>
</a>
<a className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-orange-400 text-orange-900 hover:border-orange-500 hover:bg-orange-100" href="#">
<i className="h-5 w-5" data-lucide="facebook"></i>
</a>
<a className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-orange-400 text-orange-900 hover:border-orange-500 hover:bg-orange-100" href="#">
<i className="h-5 w-5" data-lucide="youtube"></i>
</a>
</div>
</div>
<div>
<h4 className="text-[15px] font-medium tracking-tight text-orange-950">Navegación</h4>
<ul className="mt-3 space-y-2 text-[15px] text-orange-800">
<li><a className="hover:text-orange-950" href="#nosotros">Nosotros</a></li>
<li><a className="hover:text-orange-950" href="#perritos">Perritos</a></li>
<li><a className="hover:text-orange-950" href="#dona">Donaciones</a></li>
<li><a className="hover:text-orange-950" href="#voluntariado">Voluntariado</a></li>
</ul>
</div>
<div>
<h4 className="text-[15px] font-medium tracking-tight text-orange-950">Contacto</h4>
<ul className="mt-3 space-y-2 text-[15px] text-orange-800">
<li className="inline-flex items-center gap-2"><i className="h-4.5 w-4.5" data-lucide="mail"></i>
              hola@lomitosmic.org</li>
<li className="inline-flex items-center gap-2"><i className="h-4.5 w-4.5" data-lucide="phone"></i> +52 55 0000 0000
            </li>
<li className="inline-flex items-center gap-2"><i className="h-4.5 w-4.5" data-lucide="map-pin"></i> CDMX, México
            </li>
</ul>
</div>
<div>
<h4 className="text-[15px] font-medium tracking-tight text-orange-950">Boletín</h4>
<p className="mt-3 text-[15px] text-orange-800">Recibe actualizaciones de rescates y adopciones.</p>
<div className="mt-3 flex items-center gap-2">
<input className="w-full rounded-md border border-orange-300 px-3 py-2 text-[15px] placeholder-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600" placeholder="Tu email" type="email"/>
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[15px] font-medium bg-orange-600 text-white hover:bg-orange-700 shadow-sm">
<i className="h-4.5 w-4.5" data-lucide="send"></i>
</button>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-orange-200 text-sm text-orange-800 flex flex-col sm:flex-row items-center justify-between gap-3">
<p>© <span id="year"></span> Lomitos de mi Corazón. Todos los derechos reservados.</p>
<div className="flex items-center gap-4">
<a className="hover:text-orange-950" href="#">Aviso de privacidad</a>
<a className="hover:text-orange-950" href="#">Términos</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
