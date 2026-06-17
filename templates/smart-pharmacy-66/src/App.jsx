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
      

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 group" href="#">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="message-circle"></i>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium text-sm">Chatear ahora</span>
</a>

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="h-10 w-auto flex items-end gap-[3px]">

<div className="w-[2px] h-[60%] bg-[#78BE43] rounded-full"></div>
<div className="w-[2px] h-[70%] bg-[#78BE43] rounded-full"></div>
<div className="w-[2px] h-[85%] bg-[#78BE43] rounded-full"></div>
<div className="w-[2px] h-[100%] bg-[#78BE43] rounded-full"></div> 
<div className="w-[2px] h-[85%] bg-[#78BE43] rounded-full"></div>
<div className="w-[2px] h-[70%] bg-[#78BE43] rounded-full"></div>
<div className="w-[2px] h-[60%] bg-[#78BE43] rounded-full"></div>
</div>
<div className="flex flex-col justify-center leading-none">
<span className="text-xl font-semibold tracking-tight text-[#78BE43]">TAMMA</span>
<span className="text-[10px] tracking-[0.3em] text-[#78BE43] uppercase ml-0.5">Group</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-[#78BE43] transition-colors" href="#smart-pharmacy">Smart Pharmacy</a>
<a className="hover:text-[#78BE43] transition-colors" href="#portfolio">Portafolio</a>
<a className="hover:text-[#78BE43] transition-colors" href="#doctors">Médicos</a>
<a className="hover:text-[#78BE43] transition-colors" href="#education">Educación</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#78BE43] hover:text-[#78BE43] transition-all" href="#doctors">
                    Soy Médico
                </a>
<a className="px-5 py-2.5 rounded-full bg-[#78BE43] text-white text-sm font-medium hover:bg-[#65a336] shadow-sm shadow-green-100 transition-all" href="#pharmacies">
                    Soy Farmacia
                </a>
</div>

<button className="lg:hidden text-gray-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50/50 via-white to-white"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-[#78BE43] text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-[#78BE43]"></span>
                La evolución de la farmacia clínica
            </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Smart Pharmacy: salud y estética con <span className="text-[#78BE43]">disponibilidad inmediata.</span>
</h1>
<p className="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                El ecosistema integral donde la ciencia se encuentra con el cuidado. Conectamos médicos, farmacias y pacientes con soluciones premium y logística inteligente.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#78BE43] text-white font-medium text-lg hover:bg-[#65a336] transition-all shadow-lg shadow-green-200/50 flex items-center justify-center gap-2" href="#how-it-works">
                    Ver Smart Pharmacy
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-lg hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2" href="#contact">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                    Hablar con un asesor
                </a>
</div>
</div>
</header>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#78BE43] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Smart Pharmacy</h3>
<p className="text-base text-gray-500 leading-relaxed">
                        Logística avanzada que asegura disponibilidad y entregas rápidas para tratamientos continuos.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#78BE43] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Red Médica</h3>
<p className="text-base text-gray-500 leading-relaxed">
                        Una comunidad exclusiva de especialistas conectados con acceso preferencial a productos.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#78BE43] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="package-check"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Portafolio Premium</h3>
<p className="text-base text-gray-500 leading-relaxed">
                        Selección curada de marcas globales en Pro Age, Salud e Insumos con respaldo científico.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="smart-pharmacy">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4 tracking-tight">¿Cómo funciona <span className="text-[#78BE43]">Smart Pharmacy?</span></h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">Simplificamos el proceso de adquisición para garantizar que el tratamiento llegue a tiempo.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gray-200 -z-10"></div>
<div className="grid md:grid-cols-4 gap-12">

<div className="text-center bg-gray-50 md:bg-transparent pt-4">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[#78BE43] mb-6 relative z-10">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="stethoscope"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#78BE43] text-white flex items-center justify-center text-sm font-medium">1</div>
</div>
<h4 className="text-lg font-medium text-gray-900 mb-2">Prescripción</h4>
<p className="text-gray-500 text-sm">El médico especialista indica el tratamiento ideal desde nuestro portafolio.</p>
</div>

<div className="text-center bg-gray-50 md:bg-transparent pt-4">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[#78BE43] mb-6 relative z-10">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="smartphone"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#78BE43] text-white flex items-center justify-center text-sm font-medium">2</div>
</div>
<h4 className="text-lg font-medium text-gray-900 mb-2">Solicitud Digital</h4>
<p className="text-gray-500 text-sm">Contacto directo vía WhatsApp o plataforma para verificar stock.</p>
</div>

<div className="text-center bg-gray-50 md:bg-transparent pt-4">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[#78BE43] mb-6 relative z-10">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="check-circle"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#78BE43] text-white flex items-center justify-center text-sm font-medium">3</div>
</div>
<h4 className="text-lg font-medium text-gray-900 mb-2">Validación</h4>
<p className="text-gray-500 text-sm">Confirmación inmediata y preparación segura del pedido.</p>
</div>

<div className="text-center bg-gray-50 md:bg-transparent pt-4">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[#78BE43] mb-6 relative z-10">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="truck"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#78BE43] text-white flex items-center justify-center text-sm font-medium">4</div>
</div>
<h4 className="text-lg font-medium text-gray-900 mb-2">Entrega Segura</h4>
<p className="text-gray-500 text-sm">Logística cuidada hasta el consultorio o el paciente.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4 tracking-tight">Portafolio Premium</h2>
<p className="text-lg text-gray-500 max-w-xl">Marcas internacionales seleccionadas por su eficacia clínica y seguridad.</p>
</div>
<a className="text-[#78BE43] font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                    Ver catálogo completo <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-2xl bg-gray-50 h-[400px] border border-gray-100">
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>

<div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-300">
<i className="w-12 h-12" data-lucide="image"></i>

</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="w-10 h-10 rounded-full bg-[#78BE43] flex items-center justify-center text-white mb-4">
<i className="w-5 h-5" data-lucide="infinity"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Pro Age</h3>
<p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            Bioestimuladores, rellenos y tecnología antienvejecimiento.
                        </p>
<button className="text-white text-sm font-medium border-b border-white/50 hover:border-white pb-0.5">Solicitar disponibilidad</button>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-gray-50 h-[400px] border border-gray-100">
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>
<div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-300">
<i className="w-12 h-12" data-lucide="activity"></i>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="w-10 h-10 rounded-full bg-[#78BE43] flex items-center justify-center text-white mb-4">
<i className="w-5 h-5" data-lucide="heart-pulse"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Salud Clínica</h3>
<p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            Medicamentos especializados y terapias de soporte.
                        </p>
<button className="text-white text-sm font-medium border-b border-white/50 hover:border-white pb-0.5">Solicitar disponibilidad</button>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-gray-50 h-[400px] border border-gray-100">
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>
<div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-300">
<i className="w-12 h-12" data-lucide="pipette"></i>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="w-10 h-10 rounded-full bg-[#78BE43] flex items-center justify-center text-white mb-4">
<i className="w-5 h-5" data-lucide="briefcase-medical"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Insumos</h3>
<p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            Material médico quirúrgico de alta precisión.
                        </p>
<button className="text-white text-sm font-medium border-b border-white/50 hover:border-white pb-0.5">Solicitar disponibilidad</button>
</div>
</div>
</div>

<div className="mt-20 border-t border-gray-100 pt-10">
<p className="text-center text-sm text-gray-400 font-medium mb-8 tracking-wide uppercase">Respaldo Científico y Calidad Asegurada</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold font-serif">ISO <span className="font-sans font-light">9001</span></div>
<div className="flex items-center gap-2 text-xl font-bold">DIGEMID <span className="text-xs font-normal border border-current px-1 rounded">Cert</span></div>
<div className="flex items-center gap-2 text-xl font-bold font-mono">FDA <span className="font-sans text-xs">Approved</span></div>
<div className="flex items-center gap-2 text-xl font-bold">GMP <span className="text-xs font-light">Standards</span></div>
</div>
</div>
</div>
</section>

<section className="bg-gray-900 text-white">
<div className="grid md:grid-cols-2">

<div className="p-12 lg:p-24 border-b md:border-b-0 md:border-r border-gray-800" id="doctors">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-[#78BE43] text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="stethoscope"></i> Aliados Médicos
                </div>
<h2 className="text-3xl lg:text-4xl font-medium mb-6 tracking-tight">Potencia tu práctica clínica</h2>
<ul className="space-y-4 mb-10 text-gray-400">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#78BE43] shrink-0 mt-0.5" data-lucide="check"></i>
<span>Acceso exclusivo a lanzamientos y capacitación.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#78BE43] shrink-0 mt-0.5" data-lucide="check"></i>
<span>Precios preferenciales para tu clínica.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#78BE43] shrink-0 mt-0.5" data-lucide="check"></i>
<span>Networking en eventos científicos.</span>
</li>
</ul>

<form className="space-y-4 bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
<h3 className="text-lg font-medium text-white mb-2">Únete a la red</h3>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#78BE43] transition-colors" placeholder="Nombre completo" type="text"/>
<input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#78BE43] transition-colors" placeholder="Especialidad" type="text"/>
</div>
<input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#78BE43] transition-colors" placeholder="Nombre de Clínica / Centro" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#78BE43] transition-colors" placeholder="Email profesional" type="email"/>
<input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#78BE43] transition-colors" placeholder="WhatsApp" type="tel"/>
</div>
<button className="w-full bg-[#78BE43] text-white font-medium py-3 rounded-lg hover:bg-[#65a336] transition-colors" type="submit">
                        Registrarme como Médico
                    </button>
</form>
</div>

<div className="p-12 lg:p-24 bg-gray-800/30" id="pharmacies">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-blue-400 text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="building-2"></i> Farmacias B2B
                </div>
<h2 className="text-3xl lg:text-4xl font-medium mb-6 tracking-tight">Abastecimiento inteligente</h2>
<ul className="space-y-4 mb-10 text-gray-400">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Stock garantizado de productos de alta rotación.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Trazabilidad completa y certificación sanitaria.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Logística optimizada para tu cadena de suministro.</span>
</li>
</ul>

<div className="space-y-4 bg-gray-800/50 p-6 rounded-2xl border border-gray-700 h-fit">
<h3 className="text-lg font-medium text-white mb-2">Solicitar catálogo B2B</h3>
<input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors" placeholder="Razón Social / Farmacia" type="text"/>
<input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors" placeholder="Correo corporativo" type="email"/>
<button className="w-full bg-white text-gray-900 font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors" type="button">
                        Descargar Catálogo
                    </button>
<p className="text-xs text-center text-gray-500 mt-2">Un asesor te contactará en menos de 24h.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="education">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4 tracking-tight">Tamma Academy</h2>
<p className="text-lg text-gray-500">Ciencia, tendencias y formación continua.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-gray-200 hover:border-[#78BE43] hover:text-[#78BE43] transition-colors"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="p-2 rounded-full border border-gray-200 hover:border-[#78BE43] hover:text-[#78BE43] transition-colors"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="bg-gray-100 rounded-xl h-48 mb-6 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex gap-3 text-xs font-medium text-[#78BE43] uppercase tracking-wider mb-2">
<span>Workshop</span>
<span className="text-gray-300">•</span>
<span>15 Oct</span>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-[#78BE43] transition-colors">Técnicas avanzadas en bioestimulación facial</h3>
<p className="text-gray-500 text-sm line-clamp-2">Un encuentro exclusivo con líderes de opinión internacionales sobre las nuevas tendencias.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="bg-gray-100 rounded-xl h-48 mb-6 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex gap-3 text-xs font-medium text-[#78BE43] uppercase tracking-wider mb-2">
<span>Blog</span>
<span className="text-gray-300">•</span>
<span>Lectura 5 min</span>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-[#78BE43] transition-colors">La ciencia detrás de Smart Pharmacy</h3>
<p className="text-gray-500 text-sm line-clamp-2">Cómo la logística de precisión mejora la adherencia al tratamiento del paciente.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="bg-gray-100 rounded-xl h-48 mb-6 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex gap-3 text-xs font-medium text-[#78BE43] uppercase tracking-wider mb-2">
<span>Congreso</span>
<span className="text-gray-300">•</span>
<span>Nov 2023</span>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-[#78BE43] transition-colors">Tamma en el Congreso Mundial de Medicina Estética</h3>
<p className="text-gray-500 text-sm line-clamp-2">Presentación de nuestro nuevo portafolio de regeneración tisular.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-gray-900 mb-12 tracking-tight">Preguntas Frecuentes</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-gray-900">¿Cómo garantizan la disponibilidad de productos?</span>
<i className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        Utilizamos un sistema de gestión predictiva que analiza la demanda de nuestra red médica para asegurar stock crítico siempre disponible.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-gray-900">¿Hacen envíos a todo el país?</span>
<i className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        Sí, contamos con una red logística certificada para transporte de insumos médicos con cadena de frío si es necesario, cubriendo todo el territorio nacional.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-gray-900">¿Cómo puedo formar parte de la red de especialistas?</span>
<i className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        Simplemente completa el formulario en la sección de "Médicos Aliados". Nuestro equipo validará tus credenciales y te dará de alta en menos de 48 horas.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white pt-20 border-t border-gray-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">

<div className="h-6 flex items-end gap-[2px]">
<div className="w-[2px] h-[60%] bg-[#78BE43] rounded-full"></div>
<div className="w-[2px] h-[80%] bg-[#78BE43] rounded-full"></div>
<div className="w-[2px] h-[100%] bg-[#78BE43] rounded-full"></div>
<div className="w-[2px] h-[80%] bg-[#78BE43] rounded-full"></div>
<div className="w-[2px] h-[60%] bg-[#78BE43] rounded-full"></div>
</div>
<span className="font-semibold text-gray-900 tracking-tight">TAMMA</span>
</div>
<p className="text-sm text-gray-500 mb-6">
                        El Sabio + El Cuidador. Transformando el acceso a la salud y la estética con ciencia y humanidad.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#78BE43]" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-[#78BE43]" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-gray-400 hover:text-[#78BE43]" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Empresa</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#78BE43]" href="#">Sobre Nosotros</a></li>
<li><a className="hover:text-[#78BE43]" href="#">Equipo Directivo</a></li>
<li><a className="hover:text-[#78BE43]" href="#">Carreras</a></li>
<li><a className="hover:text-[#78BE43]" href="#">Prensa</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Soluciones</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#78BE43]" href="#">Smart Pharmacy</a></li>
<li><a className="hover:text-[#78BE43]" href="#">Portafolio Médico</a></li>
<li><a className="hover:text-[#78BE43]" href="#">Farmacias Aliadas</a></li>
<li><a className="hover:text-[#78BE43]" href="#">Pacientes</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Contacto</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> Oficinas Centrales, Ciudad</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> contacto@tammagroup.com</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> +01 234 567 890</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 py-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
<p>© 2023 Tamma Group. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-gray-600" href="#">Política de Privacidad</a>
<a className="hover:text-gray-600" href="#">Términos de Uso</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
