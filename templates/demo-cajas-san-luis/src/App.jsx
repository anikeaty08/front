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



        lucide.createIcons();
    
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
      

<header className="w-full flex flex-col md:flex-row shadow-sm relative z-50 h-auto md:h-20">

<div className="bg-white w-full md:w-1/4 px-6 py-4 md:py-0 flex items-center justify-between md:justify-center border-b md:border-b-0 border-gray-100">
<div className="flex items-center gap-3">
<div className="text-[#0d2b4e]">
<svg className="lucide lucide-package-open" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32"><path d="M12 22v-9"></path><path d="m2.2 10.2 6.6 3.6"></path><path d="m21.8 10.2-6.6 3.6"></path><path d="m21.8 10.2-9.6-5.4L2.2 10.2"></path><path d="M3 10v9a2.05 2.05 0 0 0 2.05 2H19a2 2 0 0 0 2-2v-9"></path><path d="m12 13 9.6-5.4"></path><path d="m2.2 10.2 9.8-5.4"></path></svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-[#0d2b4e] font-bold text-lg tracking-tight">CAJAS</span>
<span className="text-[#0d2b4e] font-medium text-sm tracking-wide">SAN LUIS</span>
</div>
</div>

<button className="md:hidden text-slate-700">
<i data-lucide="menu"></i>
</button>
</div>

<nav className="bg-[#1a3c63] w-full md:w-3/4 flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 py-4 md:py-0 text-white text-sm font-medium tracking-wide">
<ul className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 w-full md:w-auto mb-4 md:mb-0">
<li><a className="hover:text-gray-300 transition-colors" href="#">INICIO</a></li>
<li className="group relative flex items-center cursor-pointer gap-1">
<a className="hover:text-gray-300 transition-colors" href="#">PRODUCTOS</a>
<i className="w-3 h-3 opacity-70" data-lucide="chevron-down"></i>
</li>
<li className="group relative flex items-center cursor-pointer gap-1">
<a className="hover:text-gray-300 transition-colors" href="#">INDUSTRIAS</a>
<i className="w-3 h-3 opacity-70" data-lucide="chevron-down"></i>
</li>
<li><a className="hover:text-gray-300 transition-colors" href="#">SOBRE NOSOTROS</a></li>
<li><a className="hover:text-gray-300 transition-colors" href="#">CONTACTO</a></li>
</ul>
<a className="bg-accent hover-accent text-white px-6 py-3 text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors shadow-sm" href="#">
                Acceso Clientes
            </a>
</nav>
</header>

<section className="relative h-[650px] w-full overflow-hidden">

<div className="absolute inset-0 bg-slate-900">
<img alt="Fábrica de cartón" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
</div>

<div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center max-w-5xl">
<h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-10 drop-shadow-lg">
                SOLUCIONES DE EMBALAJE EN CARTÓN<br className="hidden md:block"/> CORRUGADO PARA TU INDUSTRIA
            </h1>
<div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
<a className="bg-[#0f3b68] hover:bg-[#1a4a7a] text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-sm shadow-lg transition-all transform hover:-translate-y-0.5" href="#">
                    Cotizar Proyecto
                </a>
<a className="bg-accent hover-accent text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-sm shadow-lg transition-all transform hover:-translate-y-0.5" href="#">
                    Configurar Caja
                </a>
</div>
<div className="absolute bottom-8 animate-bounce text-white/50">
<i className="w-8 h-8" data-lucide="chevron-down"></i>
</div>
</div>
</section>

<section className="bg-white border-b border-gray-100">
<div className="container mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="flex gap-4 items-start">
<div className="shrink-0 text-[#0d2b4e]">
<i className="w-12 h-12" data-lucide="badge-check" strokeWidth="1.2"></i>
</div>
<div>
<h3 className="text-[#0d2b4e] font-semibold text-lg tracking-tight mb-2 uppercase">Calidad Certificada</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Cumplimos con estándares internacionales. Certificación ISO 9001 y FSC. Resistencia garantizada.
                        </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="shrink-0 text-[#0d2b4e]">
<i className="w-12 h-12" data-lucide="timer" strokeWidth="1.2"></i>
</div>
<div>
<h3 className="text-[#0d2b4e] font-semibold text-lg tracking-tight mb-2 uppercase">Producción Flexible</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Adaptabilidad a tus necesidades de volumen y tiempos de entrega. Desde lotes pequeños hasta grandes producciones.
                        </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="shrink-0 text-[#0d2b4e]">
<i className="w-12 h-12" data-lucide="pencil-ruler" strokeWidth="1.2"></i>
</div>
<div>
<h3 className="text-[#0d2b4e] font-semibold text-lg tracking-tight mb-2 uppercase">Diseño Personalizado</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Ingeniería y diseño a medida para optimizar tu logística y proteger tus productos. Software avanzado.
                        </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="shrink-0 text-[#0d2b4e]">
<i className="w-12 h-12" data-lucide="recycle" strokeWidth="1.2"></i>
</div>
<div>
<h3 className="text-[#0d2b4e] font-semibold text-lg tracking-tight mb-2 uppercase">Sustentabilidad</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Compromiso ambiental. Cartón reciclado y reciclable, procesos eco-eficientes.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50/50">
<div className="container mx-auto px-6">
<h2 className="text-center text-[#0d2b4e] text-3xl md:text-4xl font-semibold tracking-tight mb-16 uppercase">
                Productos Destacados
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
<div className="p-8 flex items-center justify-center bg-gray-50 h-56 relative overflow-hidden">

<img alt="Caja RSC" className="w-48 h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" src="https://placehold.co/400x300/e2d4b7/947c56?text=Caja+RSC"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-[#0d2b4e] font-semibold text-lg leading-tight mb-3">CAJAS RSC (Regular Slotted Container)</h3>
<div className="text-slate-500 text-xs mb-6 space-y-1 flex-grow">
<p><span className="font-medium text-slate-700">Especificaciones:</span></p>
<p>Resistencia: ECT 32, Flauta C,</p>
<p>Impresión 1-4 tintas.</p>
</div>
<a className="w-full inline-block text-center bg-accent hover-accent text-white py-2 text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors" href="#">
                            Ver Más
                        </a>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
<div className="p-8 flex items-center justify-center bg-gray-50 h-56 relative">
<img alt="Caja Troquelada" className="w-48 h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" src="https://placehold.co/400x300/e2d4b7/947c56?text=Troquelada"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-[#0d2b4e] font-semibold text-lg leading-tight mb-3">CAJAS TROQUELADAS</h3>
<div className="text-slate-500 text-xs mb-6 space-y-1 flex-grow">
<p><span className="font-medium text-slate-700">Especificaciones:</span></p>
<p>Resistencia: ECT 44, Flauta B/C,</p>
<p>Diseño exclusivo, Autoarmable.</p>
</div>
<a className="w-full inline-block text-center bg-accent hover-accent text-white py-2 text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors" href="#">
                            Ver Más
                        </a>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
<div className="p-8 flex items-center justify-center bg-gray-50 h-56 relative">
<img alt="Caja E-commerce" className="w-48 h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" src="https://placehold.co/400x300/e2d4b7/947c56?text=E-Commerce"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-[#0d2b4e] font-semibold text-lg leading-tight mb-3">CAJAS E-COMMERCE</h3>
<div className="text-slate-500 text-xs mb-6 space-y-1 flex-grow">
<p><span className="font-medium text-slate-700">Especificaciones:</span></p>
<p>Resistencia: ECT 32, Flauta E,</p>
<p>Impresión interior/exterior, Cierre de seguridad.</p>
</div>
<a className="w-full inline-block text-center bg-accent hover-accent text-white py-2 text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors" href="#">
                            Ver Más
                        </a>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
<div className="p-8 flex items-center justify-center bg-gray-50 h-56 relative">
<img alt="Caja Industrial" className="w-48 h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" src="https://placehold.co/400x300/e2d4b7/947c56?text=Industrial"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-[#0d2b4e] font-semibold text-lg leading-tight mb-3">CAJAS INDUSTRIALES</h3>
<div className="text-slate-500 text-xs mb-6 space-y-1 flex-grow">
<p><span className="font-medium text-slate-700">Especificaciones:</span></p>
<p>Resistencia: ECT 70, Flauta A,</p>
<p>Gran formato, Refuerzos interiores.</p>
</div>
<a className="w-full inline-block text-center bg-accent hover-accent text-white py-2 text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors" href="#">
                            Ver Más
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0d2b4e] py-8">
<div className="container mx-auto px-6">
<div className="flex justify-center md:justify-start">
<div className="text-white/20 text-sm">© 2023 Cajas San Luis. Todos los derechos reservados.</div>
</div>
</div>
</footer>


    </>
  );
}
