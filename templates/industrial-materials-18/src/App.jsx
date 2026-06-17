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
      

<nav className="w-full border-b border-slate-100 bg-white/80 backdrop-blur-md fixed top-0 z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-2xl tracking-tighter font-semibold text-[#081c3f]" href="#">
                IBMEX
            </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-[#081c3f] transition-colors" href="#productos">Productos</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#081c3f] transition-colors" href="#contacto">Contacto</a>
<a className="bg-[#081c3f] hover:bg-[#081c3f]/90 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors" href="#contacto">
                    Área Empresas
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">

<div className="flex flex-wrap justify-center gap-3 mb-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-medium text-slate-600">
<iconify-icon className="text-[#081c3f]" icon="solar:buildings-linear"></iconify-icon>
                    Solo empresas y constructoras
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-medium text-slate-600">
<iconify-icon className="text-[#081c3f]" icon="solar:box-linear"></iconify-icon>
                    Min: 1,000 blocks / 1 Tonelada
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-medium text-slate-600">
<iconify-icon className="text-[#081c3f]" icon="solar:map-point-linear"></iconify-icon>
                    CDMX y Estado de México
                </span>
</div>

<h1 className="text-4xl md:text-6xl font-semibold text-[#081c3f] tracking-tight leading-[1.1] mb-6">
                Block y Morteros <br className="hidden md:block"/> Industriales por Volumen
            </h1>
<p className="text-lg md:text-xl text-slate-500 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                Proveedor industrial para empresas y constructoras. Fabricación estandarizada y venta exclusiva por tonelada para proyectos de alto rendimiento.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-sm" href="https://wa.me/">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Cotizar por WhatsApp
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#081c3f] hover:bg-[#0a234f] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-sm" href="#contacto">
                    Solicitar cotización
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#081c3f] py-20 px-6 text-white">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    Un proveedor industrial,<br/> no retail.
                </h2>
<p className="text-slate-300 text-lg font-light leading-relaxed mb-8">
                    En IBMEX fabricamos y comercializamos block y morteros industriales diseñados para obras de alto volumen. Trabajamos exclusivamente con empresas y constructoras que requieren calidad constante, entregas confiables y atención especializada.
                </p>
<div className="grid grid-cols-1 gap-4">
<div className="flex items-start gap-3">
<div className="mt-1 min-w-[24px] text-[#ff140d]">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<span className="font-medium text-slate-100">Producción industrial con control de calidad</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 min-w-[24px] text-[#ff140d]">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="font-medium text-slate-100">Venta por volumen, no por pieza</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 min-w-[24px] text-[#ff140d]">
<iconify-icon icon="solar:delivery-linear" width="24"></iconify-icon>
</div>
<span className="font-medium text-slate-100">Logística preparada para obras grandes</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 min-w-[24px] text-[#ff140d]">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<span className="font-medium text-slate-100">Atención a empresas especializada</span>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] w-full bg-gradient-to-tr from-[#ff140d] to-[#081c3f] rounded-2xl opacity-20 hidden md:block border border-white/10">

<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white opacity-30" icon="solar:city-linear" width="120"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="productos">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<span className="text-[#ff140d] font-semibold tracking-wider uppercase text-xs">Catálogo B2B</span>
<h2 className="text-3xl font-semibold text-[#081c3f] tracking-tight mt-2">Nuestros Productos</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-[#ff140d]/30 hover:shadow-xl hover:shadow-[#081c3f]/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-[#081c3f] group-hover:text-[#ff140d] transition-colors border border-slate-100">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#081c3f] mb-2">Block hueco gris</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Block industrial de línea gris para proyectos de gran escala.</p>
<a className="inline-flex items-center text-sm font-medium text-[#ff140d] hover:text-[#d00f09]" href="#contacto">
                        Cotizar block
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-[#ff140d]/30 hover:shadow-xl hover:shadow-[#081c3f]/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-[#081c3f] group-hover:text-[#ff140d] transition-colors border border-slate-100">
<iconify-icon icon="solar:bricks-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#081c3f] mb-2">Pegamuro</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Mortero adhesivo industrial para muros profesionales.</p>
<a className="inline-flex items-center text-sm font-medium text-[#ff140d] hover:text-[#d00f09]" href="#contacto">
                        Cotizar Pegamuro
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-[#ff140d]/30 hover:shadow-xl hover:shadow-[#081c3f]/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-[#081c3f] group-hover:text-[#ff140d] transition-colors border border-slate-100">
<iconify-icon icon="solar:magnet-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#081c3f] mb-2">Pegablock</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Unión precisa y rápida para block hueco.</p>
<a className="inline-flex items-center text-sm font-medium text-[#ff140d] hover:text-[#d00f09]" href="#contacto">
                        Cotizar Pegablock
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-[#ff140d]/30 hover:shadow-xl hover:shadow-[#081c3f]/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-[#081c3f] group-hover:text-[#ff140d] transition-colors border border-slate-100">
<iconify-icon icon="solar:bucket-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#081c3f] mb-2">Seconcreto</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Concreto seco listo para colados y rellenos.</p>
<a className="inline-flex items-center text-sm font-medium text-[#ff140d] hover:text-[#d00f09]" href="#contacto">
                        Cotizar Seconcreto
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-[#ff140d]/30 hover:shadow-xl hover:shadow-[#081c3f]/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-[#081c3f] group-hover:text-[#ff140d] transition-colors border border-slate-100">
<iconify-icon icon="solar:paint-roller-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#081c3f] mb-2">Repellos grises</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Acabados profesionales con rendimiento controlado.</p>
<a className="inline-flex items-center text-sm font-medium text-[#ff140d] hover:text-[#d00f09]" href="#contacto">
                        Cotizar repellos
                        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-slate-100">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-semibold text-[#081c3f] tracking-tight mb-12 text-center">¿Cómo comprar?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-slate-200 z-0"></div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-white border border-[#ff140d] text-[#ff140d] rounded-full flex items-center justify-center font-semibold mb-4 shadow-sm">1</div>
<h3 className="font-medium text-[#081c3f] mb-2">Selecciona producto y volumen</h3>
<p className="text-sm text-slate-500">Define tus necesidades de obra.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-white border border-[#ff140d] text-[#ff140d] rounded-full flex items-center justify-center font-semibold mb-4 shadow-sm">2</div>
<h3 className="font-medium text-[#081c3f] mb-2">Solicita tu cotización</h3>
<p className="text-sm text-slate-500">Vía formulario o WhatsApp.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-[#ff140d] text-white rounded-full flex items-center justify-center font-semibold mb-4 shadow-sm">3</div>
<h3 className="font-medium text-[#081c3f] mb-2">Logística y entrega</h3>
<p className="text-sm text-slate-500">Confirmamos entrega a obra.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="contacto">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-[#081c3f] tracking-tight mb-3">Solicitar Cotización</h2>
<p className="text-slate-500">Atención exclusiva a empresas. Respuesta en menos de 24hrs.</p>
</div>
<form className="space-y-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Empresa / Constructora <span className="text-[#ff140d]">*</span></label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-slate-400" icon="solar:buildings-linear" width="20"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-[#ff140d]/10 focus:border-[#ff140d] text-sm text-[#081c3f] transition placeholder:text-slate-400" placeholder="Nombre fiscal o comercial" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Nombre</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#ff140d]/10 focus:border-[#ff140d] text-sm text-[#081c3f] transition" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Cargo</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#ff140d]/10 focus:border-[#ff140d] text-sm text-[#081c3f] transition" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#ff140d]/10 focus:border-[#ff140d] text-sm text-[#081c3f] transition" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Teléfono / WhatsApp</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#ff140d]/10 focus:border-[#ff140d] text-sm text-[#081c3f] transition" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Ciudad</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-slate-400" icon="solar:map-point-linear" width="20"></iconify-icon>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-[#ff140d]/10 focus:border-[#ff140d] text-sm text-[#081c3f] transition appearance-none">
<option value="">Seleccionar ubicación...</option>
<option value="CDMX">Ciudad de México</option>
<option value="Edomex">Estado de México</option>
<option value="Otro">Otra (Consultar cobertura)</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Producto de interés</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#ff140d]/10 focus:border-[#ff140d] text-sm text-[#081c3f] transition appearance-none">
<option>Block hueco</option>
<option>Pegamuro</option>
<option>Pegablock</option>
<option>Seconcreto</option>
<option>Repellos</option>
<option>Varios</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Volumen estimado</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#ff140d]/10 focus:border-[#ff140d] text-sm text-[#081c3f] transition" placeholder="Ej: 2000 piezas" type="text"/>
</div>
</div>
<div className="pt-2">
<label className="flex items-start cursor-pointer group">
<div className="relative flex items-center">
<input className="custom-checkbox sr-only" required="" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded bg-white mr-3 transition group-hover:border-[#ff140d] flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden fill-current pointer-events-none" viewbox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path></svg>
</div>
</div>
<span className="text-sm text-slate-600 select-none">Confirmo que represento a una empresa o constructora.</span>
</label>
</div>
<button className="w-full bg-[#ff140d] hover:bg-[#d00f09] text-white font-medium py-3 rounded-lg shadow-lg shadow-[#ff140d]/20 transition-all active:scale-[0.99] mt-4 flex items-center justify-center gap-2" type="submit">
                    Solicitar cotización
                    <iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-[#081c3f] py-16 px-6 text-center">
<div className="max-w-2xl mx-auto">
<iconify-icon className="text-[#ff140d] mb-4" icon="solar:shield-check-linear" width="40"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-4">Confianza Industrial</h3>
<p className="text-slate-400 leading-relaxed mb-12">
                IBMEX es proveedor industrial para proyectos que no pueden detenerse. Calidad, volumen y logística alineados a obras profesionales.
            </p>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<span>© 2023 IBMEX. Todos los derechos reservados.</span>
<span className="mt-2 md:mt-0">Venta exclusiva Mayoreo y B2B.</span>
</div>
</div>
</footer>

    </>
  );
}
