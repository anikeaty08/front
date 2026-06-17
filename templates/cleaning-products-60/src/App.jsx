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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Inicializar iconos de Lucide
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
<div className="flex items-center gap-2 cursor-pointer">
<i className="text-blue-600 w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold text-blue-900 tracking-tight">CLEAN MAX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#kits">Nuestros Kits</a>
<a className="hover:text-blue-600 transition-colors" href="#beneficios">Beneficios</a>
<a className="hover:text-blue-600 transition-colors" href="#testimonios">Testimonios</a>
</div>
<button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
                Obtener Oferta
            </button>
</div>
</nav>

<section className="text-center max-w-5xl mr-auto ml-auto pt-20 pr-6 pb-16 pl-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-base mb-8">
<i className="w-5 h-5" data-lucide="alert-circle" strokeWidth="1.5"></i>
            Atención: Oferta exclusiva por tiempo limitado
        </div>
<h1 className="md:text-6xl lg:text-7xl leading-tight text-4xl font-semibold text-slate-900 tracking-tight mb-6">
            Descubre El Secreto Para Un Hogar <span className="text-blue-600">Impecable En Minutos</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Presiona <strong className="font-semibold text-slate-900">Reproducir</strong> en el video a continuación y descubre cómo nuestros kits de aseo de grado profesional ahorran hasta un 50% de tu tiempo y esfuerzo.
        </p>

<div className="relative w-full aspect-video bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 group cursor-pointer mb-12 flex items-center justify-center">
<img alt="Vista previa del video" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="relative z-10 w-24 h-24 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:bg-blue-600 transition-all group-hover:scale-110 duration-300">
<i className="text-white w-10 h-10 ml-2" data-lucide="play" strokeWidth="1.5"></i>
</div>

<div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20">
<div className="h-full bg-blue-600 w-1/3 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow"></div>
</div>
</div>
</div>
<button className="bg-blue-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 w-full md:w-auto flex items-center justify-center gap-3 mx-auto">
            ¡Sí, Quiero Mi Kit Ahora!
            <i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="mt-4 text-base text-slate-500 flex items-center justify-center gap-2">
<i className="w-5 h-5 text-emerald-500" data-lucide="shield-check" strokeWidth="1.5"></i>
            Garantía de satisfacción de 30 días
        </p>
</section>

<section className="bg-slate-50 py-24 border-y border-slate-100" id="kits">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-5">Nuestros Kits Más Vendidos</h2>
<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">Fórmulas potentes agrupadas estratégicamente para cubrir cada rincón de tu hogar, garantizando máxima limpieza y ahorro.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 rounded-xl mb-6">
</div>
<div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full mb-4 w-max">Esencial</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Kit Diario Básico</h3>
<p className="flex-grow text-lg text-slate-600 mb-6">Lo indispensable para mantener la frescura diaria. Ideal para apartamentos y espacios pequeños.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
<div>
<span className="text-sm text-slate-400 line-through block mb-1">$45.00</span>
<span className="text-3xl font-semibold tracking-tight text-slate-900">$29.99</span>
</div>
<button className="bg-blue-50 text-blue-700 p-3 rounded-full hover:bg-blue-100 transition-colors">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5 transition-shadow duration-300 flex flex-col relative transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-base font-medium shadow-sm w-max">
                        Más Popular
                    </div>
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-6 overflow-hidden mt-4">
<img alt="Kit Maestro" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-4 w-max">Premium</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Kit Maestro Total</h3>
<p className="text-lg text-slate-600 mb-6 flex-grow">El arsenal completo. Soluciones de limpieza profunda para cocinas, baños y pisos con aroma duradero.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
<div>
<span className="text-sm text-slate-400 line-through block mb-1">$95.00</span>
<span className="text-3xl font-semibold tracking-tight text-blue-600">$59.99</span>
</div>
<button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium shadow-md shadow-blue-600/20">
                            Agregar
                        </button>
</div>
</div>

<div className="hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-6 overflow-hidden">
<img alt="Kit Eco" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full mb-4 w-max">Natural</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Kit Verde Orgánico</h3>
<p className="text-lg text-slate-600 mb-6 flex-grow">Fórmulas 100% naturales y biodegradables. Seguras para bebés y mascotas sin perder eficacia.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
<div>
<span className="text-sm text-slate-400 line-through block mb-1">$60.00</span>
<span className="text-3xl font-semibold tracking-tight text-slate-900">$39.99</span>
</div>
<button className="bg-blue-50 text-blue-700 p-3 rounded-full hover:bg-blue-100 transition-colors">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</div>
</div><div className="hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-6 overflow-hidden">
<img alt="Kit Eco" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full mb-4 w-max">Natural</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Kit Verde Orgánico</h3>
<p className="text-lg text-slate-600 mb-6 flex-grow">Fórmulas 100% naturales y biodegradables. Seguras para bebés y mascotas sin perder eficacia.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
<div>
<span className="text-sm text-slate-400 line-through block mb-1">$60.00</span>
<span className="text-3xl font-semibold tracking-tight text-slate-900">$39.99</span>
</div>
<button className="bg-blue-50 text-blue-700 p-3 rounded-full hover:bg-blue-100 transition-colors">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</div>
</div><div className="hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-6 overflow-hidden">
<img alt="Kit Eco" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full mb-4 w-max">Natural</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Kit Verde Orgánico</h3>
<p className="text-lg text-slate-600 mb-6 flex-grow">Fórmulas 100% naturales y biodegradables. Seguras para bebés y mascotas sin perder eficacia.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
<div>
<span className="text-sm text-slate-400 line-through block mb-1">$60.00</span>
<span className="text-3xl font-semibold tracking-tight text-slate-900">$39.99</span>
</div>
<button className="bg-blue-50 text-blue-700 p-3 rounded-full hover:bg-blue-100 transition-colors">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</div>
</div><div className="hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-6 overflow-hidden">
<img alt="Kit Eco" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full mb-4 w-max">Natural</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Kit Verde Orgánico</h3>
<p className="text-lg text-slate-600 mb-6 flex-grow">Fórmulas 100% naturales y biodegradables. Seguras para bebés y mascotas sin perder eficacia.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
<div>
<span className="text-sm text-slate-400 line-through block mb-1">$60.00</span>
<span className="text-3xl font-semibold tracking-tight text-slate-900">$39.99</span>
</div>
<button className="bg-blue-50 text-blue-700 p-3 rounded-full hover:bg-blue-100 transition-colors">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="bg-blue-600 rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl shadow-blue-900/10">
<div className="p-10 md:p-16 lg:p-20 md:w-1/2 text-white flex flex-col justify-center">
<span className="text-blue-200 font-medium text-lg mb-4 block uppercase tracking-wider flex items-center gap-2">
<i className="w-5 h-5" data-lucide="tag" strokeWidth="1.5"></i> Venta Especial
                </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
                    Hasta 40% OFF en la Colección Primavera
                </h2>
<p className="text-xl text-blue-100 mb-10 leading-relaxed">
                    Aprovecha nuestra promoción de temporada y dale a tu hogar el resplandor que merece. Solo quedan 50 kits disponibles a este precio.
                </p>
<button className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-medium hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-3 w-full md:w-auto shadow-lg">
                    Reclamar Descuento <i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="md:w-1/2 h-80 md:h-auto relative">
<img alt="Suministros de limpieza" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16 mb-16" id="beneficios">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div className="flex flex-col items-center pt-8 md:pt-0 md:px-8 first:pt-0">
<div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 rotate-3">
<i className="w-10 h-10" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Acción Ultra Rápida</h3>
<p className="text-lg text-slate-600">Nuestras fórmulas activas disuelven la suciedad en segundos, reduciendo tu tiempo de limpieza drásticamente.</p>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0 md:px-8">
<div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 -rotate-3">
<i className="w-10 h-10" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Protección Prolongada</h3>
<p className="text-lg text-slate-600">Crea una capa protectora invisible que repele el polvo y las manchas hasta por 7 días seguidos.</p>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0 md:px-8">
<div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 rotate-3">
<i className="w-10 h-10" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Aroma Natural</h3>
<p className="text-lg text-slate-600">Infusionados con aceites esenciales que dejan un perfume fresco y relajante en toda tu casa.</p>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<i className="text-blue-600 w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-slate-900">LimpiezaPro</span>
</div>
<p className="text-lg text-slate-600 mb-8 max-w-sm">Revolucionando la manera en que mantienes tu hogar impecable con productos de calidad profesional.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-6">Tienda</h4>
<ul className="space-y-4 text-lg text-slate-600">
<li><a className="hover:text-blue-600 transition-colors" href="#">Ver todos los Kits</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Suscripciones Mensuales</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Guías de Limpieza</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-6">Soporte</h4>
<ul className="space-y-4 text-lg text-slate-600">
<li><a className="hover:text-blue-600 transition-colors" href="#">Preguntas Frecuentes</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Contacto</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Términos y Condiciones</a></li>
</ul>
</div>
</div>
<div className="text-center pt-8 border-t border-slate-200 text-base text-slate-500">
<p>© 2024 LimpiezaPro. Todos los derechos reservados.</p>
</div>
</div>
</footer>


    </>
  );
}
