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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://www.gmproyectos.com.pe/index.php/nosotros/mision-vision?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="flex transition-all duration-300 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] max-w-7xl border rounded-full mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 shadow-lg backdrop-blur-xl items-center justify-between shadow-gray-200/50 bg-neutral-900/60 border-white/20">

<a className="flex items-center gap-2 group" href="#">
<div className="transition-colors flex group-hover:bg-emerald-800 rounded-lg pt-1.5 pr-1.5 pb-1.5 pl-1.5 items-center justify-center text-white bg-emerald-700">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="square-arrow-down-linear" height="24" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="#ffffff" strokeWidth="1.5">
<path d="M12 8v8m0 0l3-3m-3 3l-3-3" strokeLinecap="round" strokeLinejoin="round"></path>
<path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>
</g>
</svg>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight leading-none text-gray-900">GM Proyectos</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Integrales</span>
</div>
</a>

<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="transition-colors text-sm font-medium hover:text-emerald-700 text-gray-600" href="#">Inicio</a>
<a className="transition-colors text-sm font-medium hover:text-emerald-700 text-gray-600" href="#empresa">Nosotros</a>
<a className="transition-colors text-sm font-medium hover:text-emerald-700 text-gray-600" href="#soluciones">Soluciones</a>
<a className="transition-colors text-sm font-medium hover:text-emerald-700 text-gray-600" href="#valor">Propuesta</a>
<a className="text-sm font-medium transition-colors text-gray-600 hover:text-emerald-700" href="#contacto">Contacto</a>
</div>

<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg text-white bg-emerald-700 shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:bg-emerald-800" href="#contacto">
                Cotizar Proyecto
                <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon></a>

<button className="md:hidden flex items-center text-gray-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</nav>
</header>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative" id="empresa">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border bg-gray-100 border-gray-200 text-emerald-700">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
                        Contratistas Generales
                    </div>
<h1 className="lg:text-6xl leading-[1.1] text-5xl font-semibold tracking-tighter text-gray-900">
                        Soluciones en <br/>
<span className="bg-clip-text text-transparent bg-emerald-500">Vidrio y Aluminio</span> <br/>para Construcción.
                    </h1>
<p className="md:text-xl leading-relaxed text-lg font-medium text-gray-500 max-w-lg">
                        Expertos en sistemas de acristalamiento, fachadas integrales y acabados arquitectónicos. Aportamos seguridad, diseño e innovación a proyectos de pequeña, mediana y gran envergadura.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 transition-all hover:-translate-y-1 text-base font-medium rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:bg-emerald-800 text-white bg-emerald-700" href="#contacto">
                            Solicitar Cotización
                            <iconify-icon className="" height="20" icon="solar:calculator-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 transition-all text-base font-medium border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 hover:bg-gray-50 hover:border-emerald-200 hover:text-emerald-700 text-gray-700 bg-white border-gray-200" href="#soluciones">
                            Ver Soluciones
                            <iconify-icon className="" height="20" icon="solar:arrow-right-down-linear" width="20"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 pt-4 border-t border-gray-200">
<div className="flex -space-x-3">

<img alt="Proyecto corporativo" className="w-10 h-10 rounded-full border-2 object-cover grayscale opacity-80 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/c06c2fed-62db-49a9-ae83-457aab507210/320w.png"/>
<img alt="Fachada" className="w-10 h-10 rounded-full border-2 object-cover grayscale opacity-80 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9fc3792-a480-4258-8b2e-c1838c85d2e1_320w.webp"/>
<img alt="Estructuras" className="w-10 h-10 rounded-full border-2 object-cover grayscale opacity-80 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5f2766e-81d8-4036-baed-e613aa1fcca4_320w.webp"/>
</div>
<div className="">
<div className="flex gap-1 items-center">
<iconify-icon className="text-emerald-600" height="16" icon="solar:star-fall-bold" width="16"></iconify-icon>
<span className="font-semibold text-sm text-gray-900">Alta Calidad y Garantía</span>
</div>
<p className="text-sm font-medium mt-0.5 text-gray-500">Más de <span className="font-semibold text-gray-900">500 proyectos</span> realizados</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-emerald-900/10">

<img alt="Fachada integral de cristal" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1846bf59-ec00-4ec9-ad26-66ab7523d77a_1600w.webp"/>

<div className="absolute inset-0">
<style>
    @keyframes fadeCarousel {
      0% { opacity: 0; }
      5% { opacity: 1; }
      25% { opacity: 1; }
      30% { opacity: 0; }
      100% { opacity: 0; }
    }
    .carousel-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      animation: fadeCarousel 16s infinite ease-in-out;
    }
    .carousel-image:nth-of-type(1) { animation-delay: 0s; }
    .carousel-image:nth-of-type(2) { animation-delay: -12s; }
    .carousel-image:nth-of-type(3) { animation-delay: -8s; }
    .carousel-image:nth-of-type(4) { animation-delay: -4s; }
  </style>
<img alt="Proyecto Arquitectónico" className="carousel-image rounded-[2.5rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67d22ed7-feb5-433a-aba3-2da3070fbbfd_1600w.webp"/>
<img alt="Fachadas Integrales" className="carousel-image rounded-[2.5rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97b04cea-f6c8-4099-8651-46c927ae4b86_1600w.jpg"/>
<img alt="Estructuras y Coberturas" className="carousel-image rounded-[2.5rem]" src="https://www.gmproyectos.com.pe/images/2025/2_colegio_PNP_la_Joya-Arequipa.png?w=800&amp;q=80"/>
<img alt="Acabados Arquitectónicos" className="carousel-image rounded-[2.5rem] [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b1c5f29-cb7f-4c01-86dc-4d9e5bcffaee_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent pointer-events-none rounded-[2.5rem] from-gray-900/80"></div>
</div>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-gray-800">
<iconify-icon className="" height="14" icon="solar:ruler-cross-pen-linear" width="14"></iconify-icon> Fabricación a Medida
                            </span>
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-gray-800">
<iconify-icon height="14" icon="solar:verified-check-linear" width="14"></iconify-icon> Instalación Certificada
                            </span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div className="">
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-700">Enfoque B2B</p>
<p className="font-medium text-gray-900">Inmobiliarias y Constructoras.</p>
</div>
<div className="p-3 rounded-full flex items-center justify-center bg-emerald-100 text-emerald-700">
<iconify-icon height="24" icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-gray-400/20"></div>
</div>
</div>
</div>
</section>

<section className="lg:py-24 lg:rounded-t-[4rem] rounded-t-[3rem] pt-16 pb-16 bg-cyan-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-3xl p-8 shadow-xl transform md:-translate-y-8 text-white bg-emerald-700 shadow-emerald-900/50">
<div className="flex items-center gap-2 mb-4 text-emerald-200">
<iconify-icon height="28" icon="solar:medal-star-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-2">Socio Estratégico</h3>
<p className="text-sm leading-relaxed text-emerald-100">Dedicados a proveer calidad técnica y seguridad estructural en cada acabado para el sector construcción.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">+500</h3>
<p className="font-medium mb-2 text-emerald-400">Proyectos Realizados</p>
<p className="text-sm text-gray-400">Obras entregadas con éxito en los sectores corporativo y comercial.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">+300</h3>
<p className="font-medium mb-2 text-emerald-400">Clientes Satisfechos</p>
<p className="text-sm text-gray-400">Constructoras, ingenieros y arquitectos confían en nuestro respaldo.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">100%</h3>
<p className="font-medium mb-2 text-emerald-400">Calidad y Garantía</p>
<p className="text-sm text-gray-400">Materiales normados y personal altamente calificado en instalación.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-gray-50" id="soluciones">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider border bg-white border-gray-200 text-gray-600">Catálogo de Servicios</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-gray-900">
                    Nuestras Soluciones <span className="text-emerald-700">Estructurales</span>
</h2>
<p className="text-lg font-medium text-gray-500">
                    Atendemos las líneas de Distribución y Arquitectura &amp; Edificación con productos de alta tecnología y servicio integral.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white border-gray-200 hover:shadow-emerald-900/5">
<div className="relative h-56 rounded-2xl overflow-hidden bg-gray-100">
<img alt="Fachadas Integrales" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/087eb282-4651-43c9-9e75-716ef49c375a/800w.png"/>
<div className="absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm bg-white/90 text-gray-900">01</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:text-white transition-colors group-hover:bg-emerald-700 bg-white text-emerald-700">
<iconify-icon height="24" icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight mt-2 text-gray-900">Fachadas Integrales</h3>
<p className="leading-relaxed text-sm text-gray-500">Sistemas de acristalamiento tipo stick, muros cortina y envolventes para edificaciones modernas y corporativas.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white border-gray-200 hover:shadow-emerald-900/5">
<div className="relative h-56 rounded-2xl overflow-hidden bg-gray-100">
<img alt="Cristales Procesados" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/988faf9d-fcbf-4caf-8454-dcc944cb7f1b/800w.png"/>
<div className="absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm bg-white/90 text-gray-900">02</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:text-white transition-colors group-hover:bg-emerald-700 bg-white text-emerald-700">
<iconify-icon className="" height="24" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight mt-2 text-gray-900">Cristales Procesados</h3>
<p className="leading-relaxed text-sm text-gray-500">Cristal templado, laminado de seguridad, insulado térmico/acústico, curvos y serigrafiados de marcas líderes.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white border-gray-200 hover:shadow-emerald-900/5">
<div className="relative h-56 rounded-2xl overflow-hidden bg-gray-100">
<img alt="Carpintería de Aluminio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed71cc9b-372e-4462-870e-da296c173525_800w.jpg"/>
<div className="absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm bg-white/90 text-gray-900">03</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:text-white transition-colors group-hover:bg-emerald-700 bg-white text-emerald-700">
<iconify-icon height="24" icon="solar:window-frame-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight mt-2 text-gray-900">Carpintería de Aluminio</h3>
<p className="leading-relaxed text-sm text-gray-500">Fabricación e instalación de ventanas, mamparas, puertas y divisiones con perfiles PFK y Aluxa.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white border-gray-200 hover:shadow-emerald-900/5">
<div className="relative h-56 rounded-2xl overflow-hidden bg-gray-100">
<img alt="Estructuras y Coberturas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm bg-white/90 text-gray-900">04</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:text-white transition-colors group-hover:bg-emerald-700 bg-white text-emerald-700">
<iconify-icon height="24" icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight mt-2 text-gray-900">Estructuras y Coberturas</h3>
<p className="leading-relaxed text-sm text-gray-500">Techos metálicos, estructuras de acero, coberturas integrales en policarbonato y cristal para grandes luces.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white border-gray-200 hover:shadow-emerald-900/5">
<div className="relative h-56 rounded-2xl overflow-hidden bg-gray-100">
<img alt="Acabados y Revestimientos" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm bg-white/90 text-gray-900">05</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:text-white transition-colors group-hover:bg-emerald-700 bg-white text-emerald-700">
<iconify-icon height="24" icon="solar:stairs-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight mt-2 text-gray-900">Acabados Especiales</h3>
<p className="leading-relaxed text-sm text-gray-500">Barandas en acero inoxidable y vidrio, pasamanos, revestimientos en espejos y panel de aluminio compuesto (PAC).</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white border-gray-200 hover:shadow-emerald-900/5">
<div className="relative h-56 rounded-2xl overflow-hidden bg-gray-100">
<img alt="Drywall y Melamina" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm bg-white/90 text-gray-900">06</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:text-white transition-colors group-hover:bg-emerald-700 bg-white text-emerald-700">
<iconify-icon height="24" icon="solar:wall-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight mt-2 text-gray-900">Drywall y Melamina</h3>
<p className="leading-relaxed text-sm text-gray-500">Soluciones para interiores: divisiones en drywall, placas de fibrocemento, y mobiliario corporativo en melamina.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative border-y bg-white border-gray-200" id="valor">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-gray-100 text-gray-600">Por qué elegirnos</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-900">
                        Calidad, Seguridad y <span className="text-emerald-700">Respaldo</span>
</h2>
<p className="text-lg font-medium max-w-xl text-gray-500">
                        Nuestra metodología de trabajo garantiza resultados óptimos, desde la concepción del sistema hasta la entrega de la obra.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="group relative rounded-3xl overflow-hidden transition-colors border hover:shadow-lg bg-gray-50 border-gray-100 hover:border-emerald-200 hover:shadow-emerald-900/5">
<div className="aspect-[4/5] flex w-full relative items-center justify-center bg-gray-100">
<iconify-icon className="transition-colors group-hover:text-emerald-500 text-gray-300" height="64" icon="solar:ruler-pen-linear" width="64"></iconify-icon>
</div>
<div className="p-5 text-center border-t bg-white border-gray-100">
<h4 className="text-base font-semibold text-gray-900">Asesoría Técnica</h4>
<p className="text-xs font-medium mt-1 text-gray-500">Definición del sistema idóneo y remetrado.</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors border hover:shadow-lg bg-gray-50 border-gray-100 hover:border-emerald-200 hover:shadow-emerald-900/5">
<div className="aspect-[4/5] w-full relative flex items-center justify-center bg-gray-100">
<iconify-icon className="transition-colors group-hover:text-emerald-500 text-gray-300" height="64" icon="solar:settings-bold-duotone" width="64"></iconify-icon>
</div>
<div className="p-5 text-center border-t bg-white border-gray-100">
<h4 className="text-base font-semibold text-gray-900">Producción</h4>
<p className="text-xs font-medium mt-1 text-gray-500">Materiales de calidad y procesos controlados.</p>
</div>
</div>

<div className="lg:col-span-1 lg:-mt-8 group relative rounded-3xl overflow-hidden shadow-xl bg-emerald-700 shadow-emerald-900/20">
<div className="aspect-[4/5] w-full relative">
<img alt="Estructuras y Construcción" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c31ad969-78a4-4c73-90ae-73558553a92b_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-gray-900/90"></div>
<div className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm bg-white/10 text-white">
<iconify-icon height="20" icon="solar:shield-check-bold" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
<span className="inline-block px-2 py-0.5 rounded-md backdrop-blur-md text-[10px] font-bold uppercase tracking-widest mb-2 border bg-emerald-500/50 border-emerald-400/30">Valor Agregado</span>
<h4 className="text-xl font-semibold leading-tight mb-1">Soluciones a Medida</h4>
<p className="text-xs font-medium text-emerald-100/80">Innovación y creatividad aplicada a cada requerimiento.</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors border hover:shadow-lg bg-gray-50 border-gray-100 hover:border-emerald-200 hover:shadow-emerald-900/5">
<div className="aspect-[4/5] w-full relative flex items-center justify-center bg-gray-100">
<iconify-icon className="transition-colors group-hover:text-emerald-500 text-gray-300" height="64" icon="solar:hard-hat-linear" width="64"></iconify-icon>
</div>
<div className="p-5 text-center border-t bg-white border-gray-100">
<h4 className="text-base font-semibold text-gray-900">Personal Calificado</h4>
<p className="text-xs font-medium mt-1 text-gray-500">Técnicos expertos en instalación segura.</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors border hover:shadow-lg bg-gray-50 border-gray-100 hover:border-emerald-200 hover:shadow-emerald-900/5">
<div className="aspect-[4/5] w-full relative flex items-center justify-center bg-gray-100">
<iconify-icon className="transition-colors group-hover:text-emerald-500 text-gray-300" height="64" icon="solar:check-circle-linear" width="64"></iconify-icon>
</div>
<div className="p-5 text-center border-t bg-white border-gray-100">
<h4 className="text-base font-semibold text-gray-900">Postventa Inmediata</h4>
<p className="text-xs font-medium mt-1 text-gray-500">Respaldo continuo y garantía de servicio.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 bg-gray-50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-900">
                    Preguntas Frecuentes sobre <br/><span className="text-emerald-700">Nuestros Servicios</span>
</h2>
<p className="text-lg font-medium text-gray-500">
                    Resolvemos las dudas comunes de contratistas, arquitectos e ingenieros.
                </p>
</div>
<div className="space-y-4">

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 border open:ring-emerald-500/20 bg-white border-gray-200">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900">
<h2 className="text-lg font-semibold">¿A qué tipo de proyectos brindan atención?</h2>
<div className="rounded-full p-1.5 transition duration-300 group-open:-rotate-180 text-emerald-700 bg-emerald-50">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 leading-relaxed font-medium text-gray-500">
                        Atendemos proyectos de pequeña, mediana y gran envergadura en los sectores inmobiliario, educativo, corporativo y comercial. Trabajamos directamente con constructoras, arquitectos y decoradores.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 border open:ring-emerald-500/20 bg-white border-gray-200">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900">
<h2 className="text-lg font-semibold">¿Qué marcas de cristales y aluminio manejan?</h2>
<div className="rounded-full p-1.5 transition duration-300 group-open:-rotate-180 text-emerald-700 bg-emerald-50">
<iconify-icon className="" height="20" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(4, 120, 87)'}} width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 leading-relaxed font-medium text-gray-500">
                        Trabajamos con marcas reconocidas que garantizan calidad y durabilidad, como perfiles de aluminio nacionales PFK e importados como Aluxa. En vidrios, procesamos con marcas como TEMPLEX, LAMITEMP y GLASSTEMPCORR, además de espejos MIREX.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 border open:ring-emerald-500/20 bg-white border-gray-200">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900">
<h2 className="text-lg font-semibold">¿Realizan el servicio integral de instalación?</h2>
<div className="rounded-full p-1.5 transition duration-300 group-open:-rotate-180 text-emerald-700 bg-emerald-50">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 leading-relaxed font-medium text-gray-500">
                        Sí, a través de nuestra línea de "Arquitectura y Edificación" ofrecemos el servicio completo: asesoría, remetrado, producción, instalación en obra por personal altamente calificado y servicio de postventa inmediata.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 border open:ring-emerald-500/20 bg-white border-gray-200">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900">
<h2 className="text-lg font-semibold">¿Venden materiales por volumen sin instalación?</h2>
<div className="rounded-full p-1.5 transition duration-300 group-open:-rotate-180 text-emerald-700 bg-emerald-50">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 leading-relaxed font-medium text-gray-500">
                        Sí, contamos con una línea de "Distribución" especializada en la comercialización al por mayor y menor de productos que no requieren instalación, como planchas de policarbonato, acrílicos, panel de aluminio compuesto (PAC) y accesorios para vidrio.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 border open:ring-emerald-500/20 bg-white border-gray-200">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900">
<h2 className="text-lg font-semibold">¿Cómo puedo solicitar una cotización para mi obra?</h2>
<div className="rounded-full p-1.5 transition duration-300 group-open:-rotate-180 text-emerald-700 bg-emerald-50">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 leading-relaxed font-medium text-gray-500">
                        Puede utilizar el formulario de contacto al final de esta página, escribirnos al correo ventas@gmproyectos.com.pe, o contactarnos directamente a nuestros números telefónicos. Un asesor técnico evaluará sus planos y requerimientos a la brevedad.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative text-white bg-cyan-50" id="contacto">

<div className="opacity-5 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="relative hidden lg:block">
<div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-full blur-3xl bg-emerald-600/20"></div>
<img alt="Ingenieros revisando planos" className="rounded-[2.5rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 object-cover border-4 grayscale border-gray-800/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68d1afcf-0796-4422-8718-9e98b2a6dfb0_1600w.jpg"/>
<div className="absolute -bottom-8 -left-8 p-6 rounded-2xl shadow-xl max-w-xs border bg-white text-gray-900 border-gray-200">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg flex items-center justify-center bg-emerald-100 text-emerald-700">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<span className="font-bold text-lg">Cotización Rápida</span>
</div>
<p className="text-sm font-medium text-gray-500">Atención técnica personalizada para la evaluación de su proyecto y planos.</p>
</div>
</div>

<div className="">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                        Inicie su Proyecto de Construcción con Nosotros.
                    </h2>
<p className="font-medium mb-10 text-lg text-gray-400">
                        Complete el formulario detallando sus requerimientos y nuestro equipo de asesores técnicos se pondrá en contacto para brindarle la mejor solución.
                    </p>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="sr-only">Nombre Completo</label>
<input className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500 text-white bg-gray-800/50 border-gray-700" placeholder="Nombre o Razón Social" type="text"/>
</div>
<div className="">
<label className="sr-only">Teléfono / Celular</label>
<input className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500 text-white bg-gray-800/50 border-gray-700" placeholder="Teléfono de Contacto" type="tel"/>
</div>
</div>
<div className="">
<label className="sr-only">Correo Electrónico</label>
<input className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500 text-white bg-gray-800/50 border-gray-700" placeholder="Correo Electrónico" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-1 appearance-none cursor-pointer focus:border-emerald-500 focus:ring-emerald-500 text-gray-400 bg-gray-800/50 border-gray-700">
<option disabled="" hidden="" selected="" value="">Servicio de Interés</option>
<option className="text-gray-900">Acristalamiento y Fachadas</option>
<option className="text-gray-900">Carpintería de Aluminio</option>
<option className="text-gray-900">Estructuras y Policarbonato</option>
<option className="text-gray-900">Drywall y Melamina</option>
<option className="text-gray-900">Compra de Materiales (Distribución)</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-1 appearance-none cursor-pointer focus:border-emerald-500 focus:ring-emerald-500 text-gray-400 bg-gray-800/50 border-gray-700">
<option disabled="" hidden="" selected="" value="">Tipo de Proyecto</option>
<option className="text-gray-900">Inmobiliario / Residencial</option>
<option className="text-gray-900">Corporativo / Oficinas</option>
<option className="text-gray-900">Comercial / Retail</option>
<option className="text-gray-900">Educativo / Institucional</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div className="relative">
<textarea className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all resize-none placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500 text-white bg-gray-800/50 border-gray-700" placeholder="Breve descripción del proyecto o requerimiento..." rows="3"></textarea>
</div>
<button className="w-full font-semibold text-lg py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-2 text-white bg-emerald-700 shadow-emerald-900/20 hover:shadow-emerald-700/40 hover:bg-emerald-600" type="button">
                            Solicitar Cotización Formal
                            <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-gray-50 border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="p-1.5 rounded-lg flex items-center justify-center text-white bg-emerald-700">
<iconify-icon height="24" icon="solar:city-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight leading-none text-gray-900">GM Proyectos</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Integrales S.A.C.</span>
</div>
</a>
<p className="font-medium leading-relaxed text-sm text-gray-500">
                        Soluciones integrales en acristalamiento, aluminio y acabados arquitectónicos. Aportamos innovación, calidad y seguridad a proyectos del sector construcción en el Perú.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center transition-all bg-white hover:text-white border-gray-200 hover:bg-emerald-700 hover:border-emerald-700 text-emerald-700" href="#">
<iconify-icon className="" height="20" icon="solar:minimalistic-magnifer-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon> 
</a>
</div>
</div>

<div className="">
<h4 className="font-bold mb-6 text-gray-900">Contacto Comercial</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 font-medium text-sm text-gray-500">
<iconify-icon className="shrink-0 mt-0.5 text-emerald-700" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="">Lomas de Palao Mz J Lt 15 – Santa Clara – Ate Vitarte, Lima</span>
</li>
<li className="flex items-center gap-3 font-medium text-sm text-gray-500">
<iconify-icon className="shrink-0 text-emerald-700" height="20" icon="solar:phone-linear" width="20"></iconify-icon>
<span className="">Fijo: (01) 505 5303</span>
</li>
<li className="flex items-center gap-3 font-medium text-sm text-gray-500">
<iconify-icon className="shrink-0 text-emerald-700" height="20" icon="solar:smartphone-linear" width="20"></iconify-icon>
<span className="">Cel / Entel: 940 288 855</span>
</li>
<li className="flex items-center gap-3 font-medium text-sm text-gray-500">
<iconify-icon className="shrink-0 text-emerald-700" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
<span className="">ventas@gmproyectos.com.pe</span>
</li>
</ul>
</div>

<div className="">
<h4 className="font-bold mb-6 text-gray-900">Líneas de Negocio</h4>
<ul className="space-y-3 font-medium text-sm text-gray-500">
<li className=""><span className="font-semibold text-gray-700">Arquitectura y Edificación</span></li>
<li className=""><a className="transition-colors pl-2 block hover:text-emerald-700" href="#">- Acristalamiento</a></li>
<li className=""><a className="transition-colors pl-2 block hover:text-emerald-700" href="#">- Estructuras de Aluminio</a></li>
<li><a className="transition-colors pl-2 block hover:text-emerald-700" href="#">- Drywall y Acabados</a></li>
</ul>
</div>

<div className="">
<h4 className="font-bold mb-6 text-gray-900">Enlaces Rápidos</h4>
<ul className="space-y-3 font-medium text-sm text-gray-500">
<li className=""><a className="transition-colors hover:text-emerald-700" href="#">Inicio</a></li>
<li className=""><a className="transition-colors hover:text-emerald-700" href="/#empresa">Nosotros</a></li>
<li className=""><a className="transition-colors hover:text-emerald-700" href="#soluciones">Proyectos y Soluciones</a></li>
<li className=""><a className="transition-colors hover:text-emerald-700" href="https://www.gmproyectos.com.pe/" target="_blank">Visitar Web Principal</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-gray-200">
<p className="font-medium text-sm text-gray-500">© 2024 GM Proyectos Integrales S.A.C. | RUC: 20602085695 | Todos los derechos reservados.</p>
<div className="flex gap-8 text-sm font-medium text-gray-500">
<a className="flex items-center gap-1 hover:text-emerald-700" href="#">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
                        Política de Calidad
                    </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
