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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group cursor-pointer" href="#">
<iconify-icon className="text-stone-800 group-hover:rotate-12 transition-transform duration-300" height="24" icon="solar:gift-linear" width="24"></iconify-icon>
<span className="text-base font-semibold tracking-tight text-stone-900">MERRY PARTY BOX</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#inicio">Inicio</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#corporativo">Empresas</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#fugaces">Cajas Fugaces</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#nosotros">Nosotros</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
<span>Entrar</span>
</button>
<button className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10">
<iconify-icon height="18" icon="solar:bag-linear" width="18"></iconify-icon>
</button>
<button className="md:hidden p-1 text-stone-800">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" id="inicio">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 mb-8 shadow-sm hover:border-orange-200 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wide">Nueva Colección 2024</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.1]">
                El arte de regalar <br className="hidden md:block"/>
<span className="text-stone-400 font-serif italic">momentos inolvidables.</span>
</h1>
<p className="text-lg text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Curaduría de regalos con alma. Desde detalles corporativos que inspiran hasta cajas fugaces para celebrar las fechas más especiales del año.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-stone-900 text-white text-sm font-medium rounded-xl hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2 group" href="#fugaces">
                    Ver Cajas Fugaces
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3 bg-white text-stone-900 border border-stone-200 text-sm font-medium rounded-xl hover:bg-stone-50 hover:border-stone-300 transition-all flex items-center justify-center gap-2" href="#corporativo">
                    Propuestas para Empresas
                </a>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-96 md:h-80">
<div className="relative overflow-hidden rounded-2xl group h-full shadow-sm">
<img alt="Caja de Regalo" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&amp;w=2040&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/5 group-hover:bg-stone-900/0 transition-colors"></div>
</div>
<div className="relative overflow-hidden rounded-2xl group h-full md:-mt-12 border-4 border-white shadow-xl shadow-stone-200/50">
<img alt="Detalle" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden rounded-2xl group h-full hidden md:block shadow-sm">
<img alt="Texturas" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1608755728617-aefab37d2edd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/5 group-hover:bg-stone-900/0 transition-colors"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="corporativo">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="absolute -top-6 -left-6 w-full h-full border border-stone-100 rounded-2xl z-0 bg-stone-50/50"></div>
<div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-stone-200/50">
<img alt="Regalos Corporativos" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1629235928815-565538356942?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-stone-100 shadow-sm">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 bg-orange-100 text-orange-600 rounded-md">
<iconify-icon className="text-lg" icon="solar:briefcase-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Soluciones B2B</span>
</div>
<p className="text-sm text-stone-600 font-medium">Personalización completa con el branding de tu marca.</p>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3">Servicios Corporativos</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6">Eleva la experiencia de tus colaboradores.</h3>
<p className="text-stone-500 leading-relaxed mb-8 font-light text-lg">
                        Entendemos que un regalo corporativo es una extensión de la identidad de tu empresa. Diseñamos propuestas exclusivas para onboarding, aniversarios y fin de año.
                    </p>
<div className="space-y-8 mb-10">
<div className="flex items-start gap-4 group">
<div className="p-3 bg-stone-50 rounded-xl text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 mb-1">Branding a Medida</h4>
<p className="text-sm text-stone-500">Incorporamos tu identidad visual en cada detalle del empaque.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 bg-stone-50 rounded-xl text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 mb-1">Logística Integral</h4>
<p className="text-sm text-stone-500">Gestionamos el armado y envío a múltiples direcciones.</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-stone-900 font-medium hover:text-orange-600 transition-colors border-b border-stone-200 pb-0.5 hover:border-orange-200" href="#">
                        Solicitar Cotización
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9]" id="fugaces">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-sm font-semibold tracking-widest text-orange-500 uppercase mb-3">Ediciones Limitadas</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Cajas Fugaces</h3>
<p className="text-stone-500 font-light">Colecciones efímeras curadas especialmente para fechas señaladas. Disponibles solo por tiempo limitado.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 hover:border-stone-400 hover:text-stone-900 transition-colors text-stone-400">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5 bg-white shadow-sm border border-stone-100">
<img alt="Día de la Madre" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1582239634563-0a7eb5138f3d?q=80&amp;w=2062&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/95 backdrop-blur-md px-3 py-1.5 text-xs font-semibold tracking-wide uppercase text-stone-800 rounded-lg shadow-sm border border-stone-100">Día de la Madre</span>
</div>
<div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-stone-900 px-4 py-2 rounded-lg text-sm font-medium shadow-lg flex items-center gap-2">
                                Añadir <iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-lg font-medium text-stone-900 group-hover:text-orange-800 transition-colors">Mom's Retreat</h4>
<p className="text-sm text-stone-500 mt-1">Kit de spa, velas de soja y chocolates.</p>
</div>
<span className="text-stone-900 font-semibold">$45.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5 bg-white shadow-sm border border-stone-100">
<img alt="Día del Padre" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616404987178-04285268c7be?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/95 backdrop-blur-md px-3 py-1.5 text-xs font-semibold tracking-wide uppercase text-stone-800 rounded-lg shadow-sm border border-stone-100">Día del Padre</span>
</div>
<div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-stone-900 px-4 py-2 rounded-lg text-sm font-medium shadow-lg flex items-center gap-2">
                                Añadir <iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-lg font-medium text-stone-900 group-hover:text-orange-800 transition-colors">Gentleman's Choice</h4>
<p className="text-sm text-stone-500 mt-1">Café de especialidad y taza cerámica.</p>
</div>
<span className="text-stone-900 font-semibold">$52.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5 bg-white shadow-sm border border-stone-100">
<img alt="Semana Santa" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1585503913867-f3382c6d17e3?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/95 backdrop-blur-md px-3 py-1.5 text-xs font-semibold tracking-wide uppercase text-stone-800 rounded-lg shadow-sm border border-stone-100">Semana Santa</span>
</div>
<div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-stone-900 px-4 py-2 rounded-lg text-sm font-medium shadow-lg flex items-center gap-2">
                                Añadir <iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-lg font-medium text-stone-900 group-hover:text-orange-800 transition-colors">Easter Delight</h4>
<p className="text-sm text-stone-500 mt-1">Huevos gourmet y conejos de chocolate.</p>
</div>
<span className="text-stone-900 font-semibold">$38.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-stone-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 mb-1">
<iconify-icon height="24" icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<h5 className="text-sm font-semibold text-stone-900">Calidad Premium</h5>
<p className="text-xs text-stone-500">Productos seleccionados.</p>
</div>
<div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-stone-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 mb-1">
<iconify-icon height="24" icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<h5 className="text-sm font-semibold text-stone-900">Empaque Único</h5>
<p className="text-xs text-stone-500">Detalles que enamoran.</p>
</div>
<div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-stone-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 mb-1">
<iconify-icon height="24" icon="solar:delivery-linear" width="24"></iconify-icon>
</div>
<h5 className="text-sm font-semibold text-stone-900">Envíos Rápidos</h5>
<p className="text-xs text-stone-500">Logística eficiente.</p>
</div>
<div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-stone-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 mb-1">
<iconify-icon height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<h5 className="text-sm font-semibold text-stone-900">Hecho con Amor</h5>
<p className="text-xs text-stone-500">Atención al detalle.</p>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6 text-stone-100">
<iconify-icon height="24" icon="solar:gift-bold" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight">MERRY PARTY BOX</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                        Creando momentos inolvidables a través del arte de regalar. Cajas personalizadas para cada ocasión.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-800 hover:bg-stone-700 hover:text-white transition-colors" href="#">
<iconify-icon icon="mdi:instagram" width="18"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-800 hover:bg-stone-700 hover:text-white transition-colors" href="#">
<iconify-icon icon="mdi:facebook" width="18"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-800 hover:bg-stone-700 hover:text-white transition-colors" href="#">
<iconify-icon icon="mdi:whatsapp" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-stone-100 font-medium mb-6">Explorar</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#inicio">Inicio</a></li>
<li><a className="hover:text-white transition-colors" href="#corporativo">Servicios Empresas</a></li>
<li><a className="hover:text-white transition-colors" href="#fugaces">Cajas Fugaces</a></li>
<li><a className="hover:text-white transition-colors" href="#">Personalizadas</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-100 font-medium mb-6">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Términos y Condiciones</a></li>
<li><a className="hover:text-white transition-colors" href="#">Política de Privacidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Política de Envíos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Libro de Reclamaciones</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-100 font-medium mb-6">Mantente al día</h4>
<p className="text-sm mb-4">Suscríbete para recibir noticias de las próximas cajas fugaces.</p>
<form className="flex gap-2">
<input className="bg-stone-800 border-none rounded-lg px-4 py-2.5 text-sm text-stone-100 w-full focus:ring-1 focus:ring-orange-200 placeholder-stone-500 outline-none transition-all" placeholder="Tu correo electrónico" type="email"/>
<button className="bg-stone-100 text-stone-900 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white transition-colors" type="submit">
                            OK
                        </button>
</form>
</div>
</div>
<div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-600">© 2024 Merry Party Box. Todos los derechos reservados.</p>
<div className="flex gap-6 text-xs text-stone-600">
<span className="hover:text-stone-400 cursor-pointer">Diseñado con ♥</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
