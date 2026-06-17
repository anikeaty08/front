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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-black" href="#">MBI ABOGADOS</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
<a className="hover:text-[#007565] transition-colors" href="#inicio">Inicio</a>
<a className="hover:text-[#007565] transition-colors" href="#quienes-somos">Quiénes Somos</a>
<a className="hover:text-[#007565] transition-colors" href="#servicios">Servicios</a>
<a className="hover:text-[#007565] transition-colors" href="#filosofia">Filosofía</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-[#007565] rounded-full hover:bg-[#006254] transition-all duration-200" href="#contacto">
                Contacto
            </a>

<button className="md:hidden text-gray-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden" id="inicio">
<div className="max-w-6xl mx-auto text-center md:text-left">
<div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 mb-8">
<span className="w-2 h-2 rounded-full bg-[#007565]"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Despacho Boutique</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 leading-[1.1] mb-8">
                La experiencia que orienta.<br/>
<span className="text-gray-400">El criterio que inspira confianza.</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl font-light mb-12 md:leading-relaxed">
                Un despacho boutique especializado en Derecho Procesal, Inmobiliario y Urbanismo.
                Tres socios, una visión compartida: hacer las cosas bien, con cercanía, experiencia y compromiso.
            </p>
<div className="flex flex-col md:flex-row gap-4 items-center">
<a className="w-full md:w-auto px-8 py-3.5 bg-[#007565] text-white font-medium rounded-lg text-sm hover:bg-[#006254] transition-all flex items-center justify-center gap-2 group" href="#quienes-somos">
                    Conócenos
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full md:w-auto px-8 py-3.5 bg-white border border-gray-200 text-gray-900 font-medium rounded-lg text-sm hover:bg-gray-50 transition-all flex items-center justify-center" href="#servicios">
                    Nuestros servicios
                </a>
<a className="w-full md:w-auto px-8 py-3.5 text-gray-600 font-medium text-sm hover:text-[#007565] transition-all flex items-center justify-center" href="#contacto">
                    Contacto directo
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="quienes-somos">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 mb-20">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                        Tres trayectorias. <br/>
<span className="text-gray-400">Una misma forma de entender el Derecho.</span>
</h2>
</div>
<div>
<p className="text-gray-600 mb-6 leading-relaxed">
                        MBI Abogados nace de la decisión valiente de tres profesionales con amplia experiencia en grandes firmas, que decidieron construir un despacho propio, más ágil, más humano y más cercano.
                    </p>
<p className="text-gray-600 mb-6 leading-relaxed">
<strong className="text-gray-900 font-medium">Cercanía que entiende. Rigor que construye.</strong><br/>
                        Apostamos por un modelo boutique donde cada cliente es atendido directamente por un socio. Sin capas intermedias. Sin tecnicismos innecesarios. Con criterio, claridad y compromiso.
                    </p>
<p className="text-gray-600 leading-relaxed">
                        No acumulamos clientes. Construimos relaciones duraderas basadas en la confianza, la estrategia y la excelencia discreta. Porque cada cliente importa.
                    </p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-[#007565]/10 rounded-full flex items-center justify-center mb-6 text-[#007565]">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Fernando Marín Riaño</h3>
<p className="text-sm text-gray-500">Derecho Inmobiliario, Urbanismo y Contencioso Administrativo.</p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-[#007565]/10 rounded-full flex items-center justify-center mb-6 text-[#007565]">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Enrique Besada</h3>
<p className="text-sm text-gray-500">Litigación civil e Inmobiliario.</p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-[#007565]/10 rounded-full flex items-center justify-center mb-6 text-[#007565]">
<i className="w-5 h-5" data-lucide="gavel"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Mónica Iglesias Sánchez</h3>
<p className="text-sm text-gray-500">Derecho Procesal y Arbitraje.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50" id="servicios">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                    Soluciones jurídicas sólidas, ágiles y personalizadas.
                </h2>
<p className="text-gray-600 text-lg font-light leading-relaxed">
                    En MBI Abogados ofrecemos asesoramiento jurídico con visión estratégica, claridad constante y dedicación personal.
                    Lo esencial bien hecho. Lo complejo bien pensado. Pensamos como abogados. Actuamos como aliados.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#007565] transition-colors duration-300">
<div className="mb-4 text-[#007565]">
<i className="w-6 h-6" data-lucide="map"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Inmobiliario y Urbanismo</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">
                        Planeamiento, gestión urbanística, licencias, convenios, expropiaciones, reparcelaciones.
                    </p>
<p className="text-xs font-medium text-[#007565]">Interpretamos el territorio. Acompañamos a quienes lo transforman.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#007565] transition-colors duration-300">
<div className="mb-4 text-[#007565]">
<i className="w-6 h-6" data-lucide="shield-alert"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Procesal y Arbitraje</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">
                        Litigios complejos en contencioso-administrativo, civil y mercantil.
                    </p>
<p className="text-xs font-medium text-[#007565]">Anticipamos riesgos. Defendemos intereses. Resolvemos con criterio.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#007565] transition-colors duration-300">
<div className="mb-4 text-[#007565]">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Mercantil y Societario</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Estructuración de negocios, pactos de socios y operaciones corporativas con visión de negocio.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#007565] transition-colors duration-300">
<div className="mb-4 text-[#007565]">
<i className="w-6 h-6" data-lucide="file-check-2"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Penal y Compliance</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Defensa penal económica y diseño de modelos de prevención de delitos.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#007565] transition-colors duration-300">
<div className="mb-4 text-[#007565]">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Sucesiones y Familia</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Gestión patrimonial familiar y procesos sucesorios con discreción y tacto.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#007565] transition-colors duration-300">
<div className="mb-4 text-[#007565]">
<i className="w-6 h-6" data-lucide="lightbulb"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Asesoramiento estratégico</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Acompañamiento jurídico preventivo, visión a largo plazo, claridad en la toma de decisiones.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#007565] text-white" id="filosofia">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
                        Criterio que escucha. <br/>
                        Propósito que transforma.
                    </h2>
<p className="text-white/80 text-lg font-light leading-relaxed mb-8">
                        En MBI creemos que el Derecho no solo regula: transforma. Por eso trabajamos con la lógica de los buenos urbanistas: anticipar, ordenar y crear valor.
                    </p>
<p className="text-white/80 text-lg font-light leading-relaxed mb-8">
                        Nuestra estructura ligera nos permite estar realmente presentes. Escuchamos con atención, explicamos con sencillez y actuamos con rigor. Somos un despacho boutique con mirada global.
                    </p>
<p className="text-white font-medium border-l-2 border-white/30 pl-4">
                        "Donde la experiencia se convierte en criterio y el criterio en confianza."
                    </p>
</div>
<div className="grid gap-4">
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-white/90" data-lucide="user-check"></i>
<h3 className="font-semibold text-white">Trato directo con socios</h3>
</div>
<p className="text-sm text-white/60 pl-8">Sin intermediarios, atención experta desde el primer minuto.</p>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-white/90" data-lucide="message-square"></i>
<h3 className="font-semibold text-white">Lenguaje claro y accesible</h3>
</div>
<p className="text-sm text-white/60 pl-8">Explicamos lo complejo con sencillez.</p>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-white/90" data-lucide="zap"></i>
<h3 className="font-semibold text-white">Agilidad y estrategia</h3>
</div>
<p className="text-sm text-white/60 pl-8">Respuestas rápidas con visión a largo plazo.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contacto">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                        Estamos cerca.
                    </h2>
<p className="text-gray-600 mb-12 text-lg">
                        Cada cliente importa. Cada caso merece una respuesta a su medida. Escríbenos. Estamos aquí para escucharte.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#007565] border border-gray-100">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Visítanos</h4>
<p className="text-gray-600">Calle Recoletos 19<br/>28001 Madrid</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#007565] border border-gray-100">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Correo</h4>
<a className="text-gray-600 hover:text-[#007565] transition-colors" href="mailto:info@mbiabogados.com">info@mbiabogados.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#007565] border border-gray-100">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Teléfono</h4>
<p className="text-gray-600">+34 91 000 00 00</p>
</div>
</div>
</div>
<div className="mt-12 flex gap-4">
<a className="text-gray-400 hover:text-[#007565] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="linkedin"></i>
</a>
<a className="text-gray-400 hover:text-[#007565] transition-colors" href="#">
<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12.003 2c-5.522 0-10 4.477-10 10 0 5.522 4.478 10 10 10 5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
<path d="M12.003 7a5.002 5.002 0 00-4.905 4.09h1.768a3.247 3.247 0 013.137-2.34c1.789 0 3.25 1.461 3.25 3.25s-1.461 3.25-3.25 3.25c-1.285 0-2.39-.774-2.922-1.89h-1.87a4.998 4.998 0 009.697 0 5.003 5.003 0 00-4.905-5.36z"></path>
</svg>
</a>
</div>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wide mb-2">Nombre</label>
<input className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#007565] focus:border-[#007565] transition-all" placeholder="Tu nombre" type="text"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wide mb-2">Email</label>
<input className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#007565] focus:border-[#007565] transition-all" placeholder="tucorreo@ejemplo.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wide mb-2">Asunto</label>
<input className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#007565] focus:border-[#007565] transition-all" placeholder="Breve descripción" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wide mb-2">Mensaje</label>
<textarea className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#007565] focus:border-[#007565] transition-all" placeholder="¿Cómo podemos ayudarte?" rows="4"></textarea>
</div>
<button className="w-full px-6 py-4 bg-[#007565] text-white font-medium rounded-lg text-sm hover:bg-[#006254] transition-all shadow-sm hover:shadow-md" type="button">
                            Enviar mensaje
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-lg font-semibold tracking-tighter text-black">MBI ABOGADOS</span>
<div className="text-sm text-gray-500">
                © 2024 MBI Abogados. Todos los derechos reservados.
            </div>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-[#007565] transition-colors" href="#">Aviso Legal</a>
<a className="hover:text-[#007565] transition-colors" href="#">Privacidad</a>
</div>
</div>
</footer>


    </>
  );
}
