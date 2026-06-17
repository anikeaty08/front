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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center" href="#">
<img alt="IBMEX Logo" className="h-12 md:h-14 w-auto object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/Logo_Aniversario_IBMEX_Final-1.png"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#00135d] transition-colors" href="#beneficios">Beneficios</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#00135d] transition-colors" href="#especificaciones">Ficha Técnica</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#00135d] transition-colors" href="#productos">Catálogo</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-semibold text-[#00135d]" href="tel:+525500000000">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Ventas: (55) 1234-5678
                </a>
<a className="ibmex-red hover-ibmex-red text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-lg shadow-red-500/20 flex items-center gap-2" href="#cotizar">
                    Cotizar Ahora
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#00135d]">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0" loop="" muted="" playsinline="">
<source src="https://ibmex.minegoc.io/medios/banner_ibmex.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-[#00135d]/70 z-0 backdrop-blur-[1px]"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 order-2 lg:order-1">

<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
                        Pedido mín: 1 Tonelada
                    </span>
<span className="inline-flex items-center gap-1.5 bg-[#ff140d]/80 backdrop-blur-sm border border-[#ff140d]/50 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
<iconify-icon icon="solar:buildings-2-linear"></iconify-icon>
                        Solo Empresas
                    </span>
<span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                        CDMX y EdoMex
                    </span>
</div>
<div className="space-y-4">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] hero-text-shadow">
                        Repellos Grises Industriales <span className="text-[#ff140d]">por Tonelada</span>
</h1>
<p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-lg hero-text-shadow">
                        Acabados profesionales para obras de gran escala. Aumenta tu productividad un 20% y reduce mermas con tecnología de alta adherencia.
                    </p>
</div>
<ul className="space-y-3 pt-2">
<li className="flex items-center gap-3 text-white font-medium hero-text-shadow">
<iconify-icon className="text-[#ff140d]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Reduce fisuras hasta un 80%
                    </li>
<li className="flex items-center gap-3 text-white font-medium hero-text-shadow">
<iconify-icon className="text-[#ff140d]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Ahorro en costos directos del 10%
                    </li>
<li className="flex items-center gap-3 text-white font-medium hero-text-shadow">
<iconify-icon className="text-[#ff140d]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Listo para usar: Solo agrega agua
                    </li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="ibmex-red hover-ibmex-red text-white text-center px-8 py-3.5 rounded-md font-bold text-base transition-all shadow-xl shadow-red-900/20 flex justify-center items-center gap-2" href="#cotizar">
<iconify-icon icon="solar:chat-square-dots-linear" width="20"></iconify-icon>
                        Cotizar por WhatsApp
                    </a>
<a className="bg-white/10 border border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-center px-8 py-3.5 rounded-md font-semibold text-base transition-all flex justify-center items-center gap-2 shadow-lg" href="#especificaciones">
                        Ver Ficha Técnica
                    </a>
</div>
</div>

<div className="relative order-1 lg:order-2 flex justify-center">
<div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
<img alt="Saco Repello Gris IBMEX" className="relative z-10 w-full max-w-[450px] product-shadow transform hover:scale-105 transition-duration-500" src="https://ibmex.minegoc.io/wp-content/uploads/2026/01/Repello_Gris_optimized.webp"/>

<div className="absolute -bottom-6 -left-6 md:bottom-10 md:left-0 z-20 bg-white p-4 rounded-lg shadow-xl border-l-4 border-[#ff140d] max-w-[200px]">
<p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Resistencia</p>
<p className="text-2xl font-bold text-[#00135d]">200 kg/cm²</p>
</div>
</div>
</div>
</header>

<section className="bg-slate-50 border-b border-slate-200 py-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="IBMEX Logo" className="h-12 w-auto" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/Logo_Aniversario_IBMEX_Final-1.png"/>
<div className="h-8 w-px bg-slate-300 hidden md:block"></div>
<p className="text-slate-600 font-medium text-center md:text-left max-w-md">
<strong className="text-[#00135d] block text-lg">+60 Años de Experiencia</strong>
                Suministrando soluciones técnicas a las obras más exigentes de México.
            </p>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="beneficios">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#00135d] tracking-tight mb-4">
                    ¿Para qué usar Repellos Industriales IBMEX?
                </h2>
<p className="text-lg text-slate-600">
                    Optimiza tiempos y reduce costos ocultos en obra residencial, comercial e industrial.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-[#00135d]/30 transition-all duration-300 group">
<div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00135d] transition-colors">
<img alt="Productividad" className="w-10 h-10 object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/productividad.webp"/>
</div>
<h3 className="text-xl font-bold text-[#00135d] mb-3">Mayor Productividad</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Incrementa el avance de obra hasta en un 20%. Nuestra mezcla industrial garantiza uniformidad, eliminando tiempos muertos de mezclado en sitio.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-[#00135d]/30 transition-all duration-300 group">
<div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00135d] transition-colors">
<img alt="Sin merma" className="w-10 h-10 object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/mezcla.webp"/>
</div>
<h3 className="text-xl font-bold text-[#00135d] mb-3">Rendimiento Controlado</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Reduce el desperdicio de material hasta un 5%. Dosificación exacta en cada saco para un costeo preciso por metro cuadrado.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-[#00135d]/30 transition-all duration-300 group">
<div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00135d] transition-colors">
<img alt="Calidad" className="w-10 h-10 object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/conf.webp"/>
</div>
<h3 className="text-xl font-bold text-[#00135d] mb-3">Adiós a las Fisuras</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Formulación química avanzada que reduce fisuras hasta un 80% comparado con mezclas hechas en obra. Acabados más duraderos.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-[#00135d]/30 transition-all duration-300 group">
<div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00135d] transition-colors">
<img alt="Solo agua" className="w-10 h-10 object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/agua.webp"/>
</div>
<h3 className="text-xl font-bold text-[#00135d] mb-3">Solo Agrega Agua</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Simplifica la logística. No necesitas acarrear arena ni cemento por separado. Mezcla lista para vaciar y aplicar.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-[#00135d]/30 transition-all duration-300 group">
<div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00135d] transition-colors">
<img alt="Adherencia" className="w-10 h-10 object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/pico.webp"/>
</div>
<h3 className="text-xl font-bold text-[#00135d] mb-3">Alta Adherencia</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Excelente fijación al sustrato. En la mayoría de los casos elimina la necesidad de picar muros (zarpeo), ahorrando mano de obra.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-[#00135d]/30 transition-all duration-300 group">
<div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00135d] transition-colors">
<img alt="Tiempo" className="w-10 h-10 object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/clock.webp"/>
</div>
<h3 className="text-xl font-bold text-[#00135d] mb-3">Aplicación Sin Colgarse</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Consistencia plástica ideal (Fluidez 70-80%) que facilita el aplanado y reduce el rebote de material al aplicar.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200" id="especificaciones">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
<div className="bg-[#00135d] px-8 py-5 flex justify-between items-center">
<h3 className="text-white font-bold text-lg">Especificaciones Técnicas</h3>
<iconify-icon className="text-white w-6 h-6" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="p-0">
<table className="w-full text-sm text-left">
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-semibold text-[#00135d] bg-slate-50/50 w-1/2">Resistencia Compresión</td>
<td className="px-6 py-4 text-slate-600 font-medium">200 kg/cm² (19.6 MPa)</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-semibold text-[#00135d] bg-slate-50/50">Presentación</td>
<td className="px-6 py-4 text-slate-600">Saco de 25 kg</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-semibold text-[#00135d] bg-slate-50/50">Rendimiento Aprox.</td>
<td className="px-6 py-4 text-slate-600">16.5 Litros de mezcla / Saco</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-semibold text-[#00135d] bg-slate-50/50">Retención de Agua</td>
<td className="px-6 py-4 text-slate-600">95%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-semibold text-[#00135d] bg-slate-50/50">Fluidez</td>
<td className="px-6 py-4 text-slate-600">70 – 80 %</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-semibold text-[#00135d] bg-slate-50/50">Agregado Máximo</td>
<td className="px-6 py-4 text-slate-600">4.75 mm</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-slate-50 px-8 py-4 border-t border-slate-200">
<a className="text-[#ff140d] font-semibold text-sm hover:underline flex items-center gap-2" href="#">
<iconify-icon icon="solar:file-download-linear"></iconify-icon> Descargar Ficha Técnica PDF
                    </a>
</div>
</div>

<div>
<span className="text-[#ff140d] font-bold tracking-wider uppercase text-sm mb-2 block">Rendimiento Superior</span>
<h2 className="text-3xl font-bold text-[#00135d] mb-6">La elección inteligente para constructores</h2>
<p className="text-slate-600 mb-8 leading-relaxed">
                    El Repello Gris IBMEX está diseñado para superar los estándares de la construcción tradicional. Su formulación industrial garantiza que cada bulto tenga exactamente las mismas propiedades, eliminando la variabilidad de la mezcla hecha en obra.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-[#00135d]">
<iconify-icon icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-[#00135d]">Aplicaciones Versátiles</h4>
<p className="text-sm text-slate-500 mt-1">Ideal para muros de block, tabique, concreto celular y superficies rugosas. Uso interior y exterior.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-[#00135d]">
<iconify-icon icon="solar:wad-of-money-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-[#00135d]">ROI Garantizado</h4>
<p className="text-sm text-slate-500 mt-1">Al reducir mano de obra, tiempos de preparación y desperdicios, el costo final por m² disminuye significativamente.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-[#00135d] font-bold border-b-2 border-[#ff140d] pb-1 hover:text-[#ff140d] transition-colors" href="#cotizar">
                        Solicitar muestra comercial
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="productos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-bold text-[#00135d]">Soluciones Complementarias</h2>
<p className="text-slate-500 mt-2">Productos diseñados para trabajar en conjunto con el Repello Gris.</p>
</div>
<a className="text-[#ff140d] font-semibold hover:underline text-sm" href="#cotizar">Ver catálogo completo</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
<div className="h-48 flex items-center justify-center mb-4 bg-slate-50 rounded-lg group-hover:bg-blue-50/50 transition-colors">
<img alt="Pegamuro" className="h-40 w-auto object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/IBMEX-6.png"/>
</div>
<h3 className="text-lg font-bold text-[#00135d] mb-1">Pegamuro 25 kg</h3>
<p className="text-xs text-slate-500 mb-4">Mortero adhesivo de alta resistencia</p>
<button className="w-full py-2 border border-[#00135d] text-[#00135d] rounded font-semibold text-sm hover:bg-[#00135d] hover:text-white transition-colors">Añadir a cotización</button>
</div>

<div className="group border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
<div className="h-48 flex items-center justify-center mb-4 bg-slate-50 rounded-lg group-hover:bg-blue-50/50 transition-colors">
<img alt="Pegablock" className="h-40 w-auto object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/1-1.png"/>
</div>
<h3 className="text-lg font-bold text-[#00135d] mb-1">Pegablock</h3>
<p className="text-xs text-slate-500 mb-4">Especial para block hueco y sólido</p>
<button className="w-full py-2 border border-[#00135d] text-[#00135d] rounded font-semibold text-sm hover:bg-[#00135d] hover:text-white transition-colors">Añadir a cotización</button>
</div>

<div className="group border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
<div className="h-48 flex items-center justify-center mb-4 bg-slate-50 rounded-lg group-hover:bg-blue-50/50 transition-colors">
<img alt="Seconcreto" className="h-40 w-auto object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/3-1.png"/>
</div>
<h3 className="text-lg font-bold text-[#00135d] mb-1">Seconcreto Gris 250</h3>
<p className="text-xs text-slate-500 mb-4">Concreto premezclado estructural</p>
<button className="w-full py-2 border border-[#00135d] text-[#00135d] rounded font-semibold text-sm hover:bg-[#00135d] hover:text-white transition-colors">Añadir a cotización</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#00135d] relative overflow-hidden" id="cotizar">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#ff140d] opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

<div className="p-8 md:p-12 md:w-5/12 bg-slate-50 flex flex-col justify-between border-r border-slate-100">
<div>
<h3 className="text-2xl font-bold text-[#00135d] mb-4">Solicita tu cotización por volumen</h3>
<p className="text-slate-600 text-sm mb-6">
                            Atendemos a constructoras y desarrolladores. Obtén precios especiales a partir de 1 tonelada.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-[#00135d] font-medium">
<iconify-icon className="text-[#ff140d]" icon="solar:verified-check-linear"></iconify-icon>
                                Respuesta en menos de 24h
                            </li>
<li className="flex items-center gap-2 text-sm text-[#00135d] font-medium">
<iconify-icon className="text-[#ff140d]" icon="solar:verified-check-linear"></iconify-icon>
                                Asesoría técnica incluida
                            </li>
<li className="flex items-center gap-2 text-sm text-[#00135d] font-medium">
<iconify-icon className="text-[#ff140d]" icon="solar:verified-check-linear"></iconify-icon>
                                Envíos a todo CDMX y EdoMex
                            </li>
</ul>
</div>
<div className="mt-8 pt-8 border-t border-slate-200">
<p className="text-xs text-slate-500 mb-2">¿Prefieres llamar?</p>
<a className="text-lg font-bold text-[#00135d] flex items-center gap-2 hover:text-[#ff140d]" href="tel:+525500000000">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (55) 1234-5678
                        </a>
</div>
</div>

<div className="p-8 md:p-12 md:w-7/12">
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">Nombre</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#00135d] focus:ring-1 focus:ring-[#00135d]" placeholder="Tu nombre" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">Empresa</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#00135d] focus:ring-1 focus:ring-[#00135d]" placeholder="Nombre constructora" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">Teléfono</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#00135d] focus:ring-1 focus:ring-[#00135d]" placeholder="(55) 0000-0000" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#00135d] focus:ring-1 focus:ring-[#00135d]" placeholder="correo@empresa.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">Producto de interés</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#00135d] text-slate-700">
<option selected="" value="Repello Gris">Repello Gris IBMEX</option>
<option value="Pegamuro">Pegamuro</option>
<option value="Pegablock">Pegablock</option>
<option value="Paquete Completo">Paquete Completo</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">Volumen estimado (Sacos/Toneladas)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#00135d] focus:ring-1 focus:ring-[#00135d]" placeholder="Ej. 2 Toneladas" type="text"/>
</div>
<button className="w-full ibmex-red hover-ibmex-red text-white font-bold py-3 rounded-md mt-4 transition-colors flex justify-center items-center gap-2 shadow-lg" type="button">
                            Enviar Solicitud
                            <iconify-icon icon="solar:plain-3-linear"></iconify-icon>
</button>
<p className="text-center text-[10px] text-slate-400 mt-2">
                            Al enviar aceptas nuestra política de privacidad. Tus datos están seguros.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#000d3d] text-white pt-16 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-2">
<img alt="IBMEX" className="h-10 w-auto mb-6 brightness-0 invert opacity-90" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/Logo_Aniversario_IBMEX_Final-1.png"/>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        Industrial Bloquera Mexicana (IBMEX). Líderes en la fabricación de materiales para la construcción desde hace más de 60 años. Calidad, resistencia y rendimiento garantizado.
                    </p>
</div>

<div>
<h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">Empresa</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-[#ff140d] transition-colors" href="#">Nosotros</a></li>
<li><a className="hover:text-[#ff140d] transition-colors" href="#">Catálogo</a></li>
<li><a className="hover:text-[#ff140d] transition-colors" href="#">Distribuidores</a></li>
<li><a className="hover:text-[#ff140d] transition-colors" href="#">Aviso de Privacidad</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">Contacto</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>Cobertura en CDMX y<br/>Área Metropolitana</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                            (55) 1234-5678
                        </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                            ventas@ibmex.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">Copyright © 2025 IBMEX. Todos los derechos reservados.</p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
