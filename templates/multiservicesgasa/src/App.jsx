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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<img alt="Multiservices Gasa Logo" className="h-8 w-8 rounded-full object-cover border border-slate-200" src="https://multiservicesgasa.com/wp-content/uploads/2024/07/Multiservices-Gasa.jpg"/>
<div className="flex flex-col">
<span className="text-sm tracking-tight font-semibold text-[#0f172a] uppercase leading-none">Multiservices<span className="text-[#0ea5e9]">Gasa</span></span>
<span className="text-[10px] text-slate-400 tracking-wider leading-none mt-0.5">Madrid 24h</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#0f172a] transition-colors" href="#inicio">Inicio</a>
<a className="hover:text-[#0f172a] transition-colors" href="#nosotros">Nosotros</a>
<a className="hover:text-[#0f172a] transition-colors" href="#servicios">Servicios</a>
<a className="hover:text-[#0f172a] transition-colors" href="#contacto">Contacto</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm" href="tel:667032146">
<span>667 032 146</span>
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-slate-600 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="inicio">
<div className="absolute inset-0 bg-[#0f172a] -z-20"></div>

<div className="absolute inset-0 bg-[url('https://multiservicesgasa.com/wp-content/uploads/2024/05/fontanero-profesional-haciendo-su-trabajo_23-2150721548.jpg')] bg-cover bg-center -z-10 opacity-20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#0f172a]/90 to-[#1e293b]/80 -z-10"></div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="max-w-lg">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]"></span>
</span>
                    Servicio Urgente 24h en Madrid
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Fontaneros expertos <br/>
<span className="text-[#0ea5e9]">para tu hogar.</span>
</h1>
<p className="text-lg text-slate-400 font-normal leading-relaxed mb-8 max-w-md">
                    Soluciones rápidas, eficientes y garantizadas. Urgencias, desatascos, fugas y calefacción con más de 20 años de experiencia.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-[#0ea5e9] text-white text-sm font-semibold hover:bg-[#0284c7] transition-colors shadow-[0_0_20px_rgba(14,165,233,0.3)]" href="tel:667032146">
                        Llámanos Ahora
                        <iconify-icon className="ml-2" icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white/10 text-white border border-white/10 text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm" href="#servicios">
                        Ver Servicios
                    </a>
</div>
</div>
<div className="relative">

<div className="aspect-[4/3] rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden shadow-2xl relative group">
<div className="absolute inset-0 bg-slate-900/20 z-10"></div>

<div className="absolute inset-0 bg-[url('https://multiservicesgasa.com/wp-content/uploads/2024/05/fontanero-profesional-haciendo-su-trabajo_23-2150721548.jpg')] bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-[220px]">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-blue-100 rounded-full">
<iconify-icon className="text-blue-600" icon="solar:verified-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900">Garantía Total</span>
</div>
<p className="text-[10px] text-slate-500">Más de 20 años ofreciendo calidad y confianza en cada reparación.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#0f172a]" icon="solar:clock-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div className="text-xs font-medium text-slate-900">Servicio<br/>24 Horas</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#0f172a]" icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div className="text-xs font-medium text-slate-900">20+ Años<br/>Experiencia</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#0f172a]" icon="solar:map-point-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div className="text-xs font-medium text-slate-900">Cobertura<br/>Madrid</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#0f172a]" icon="solar:wallet-money-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div className="text-xs font-medium text-slate-900">Mejor Precio<br/>Posible</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="nosotros">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 relative shadow-xl border border-slate-100">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?fit=crop&amp;crop=entropy&amp;faces&amp;auto=format&amp;compress&amp;w=1280&amp;h=960')] bg-cover bg-center transform scale-100 hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-1/3"></div>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0ea5e9] rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl font-semibold text-[#0f172a] tracking-tight mb-6">Expertos en Fontanería <br/>Doméstica y Comercial.</h2>
<div className="space-y-4 text-slate-600 font-normal leading-relaxed">
<p className="">
                            En <strong className="">Multiservices Gasa</strong>, nos enorgullecemos de ofrecer soluciones de fontanería rápidas, efectivas y duraderas. Ya sea para tu hogar o negocio, nuestro equipo altamente capacitado está a tu disposición para resolver cualquier problema con la máxima profesionalidad.
                        </p>
<p className="">
                            Con más de 20 años de experiencia en el sector, nos hemos consolidado como líderes en Madrid. Nuestro equipo de fontaneros profesionales está preparado para atender desde reparaciones urgentes hasta renovaciones completas, garantizando siempre un servicio de alta calidad y confianza.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
<div className="flex text-lg italic text-white font-serif bg-[#0f172a] w-12 h-12 rounded-full items-center justify-center"></div>
<div className="">
<p className="text-sm font-semibold text-[#0f172a]">Multiservices Gasa</p>
<p className="text-xs text-slate-500">Equipo Profesional</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 pt-24 pb-24" id="servicios">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-100 tracking-tight mb-4">Nuestros Servicios</h2>
<p className="text-blue-500">Soluciones integrales para todas tus necesidades de fontanería en Madrid.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0ea5e9]/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0f172a] flex items-center justify-center mb-4 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Reparaciones Urgentes</h3>
<p className="text-sm text-slate-500 leading-relaxed">Disponibles 24/7, nuestros fontaneros acuden rápidamente para solucionar cualquier emergencia, minimizando los inconvenientes.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0ea5e9]/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0f172a] flex items-center justify-center mb-4 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
<iconify-icon className="" icon="solar:bath-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Renovaciones Completas</h3>
<p className="text-sm text-slate-500 leading-relaxed">Transformamos y modernizamos tu sistema de fontanería, asegurando eficiencia y durabilidad para tu hogar o negocio.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0ea5e9]/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0f172a] flex items-center justify-center mb-4 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Mantenimiento Preventivo</h3>
<p className="text-sm text-slate-500 leading-relaxed">Servicios periódicos para mantener tu sistema en óptimas condiciones y evitar problemas futuros costosos.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="contacto">
<div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-5 flex flex-col justify-center">
<h2 className="text-3xl font-semibold text-[#0f172a] tracking-tight mb-6">Contacta con nosotros</h2>
<p className="text-slate-500 mb-8">Rellena el formulario para solicitar un presupuesto o llámanos directamente. Respondemos con rapidez.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0f172a]">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Teléfono</div>
<div className="text-lg text-[#0f172a] font-semibold">667 032 146</div>
<div className="text-xs text-slate-400">Atención 24 Horas</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0f172a]">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Email</div>
<div className="text-sm text-slate-600">multiservicesgasa@gmail.com</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0f172a]">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Zona de Servicio</div>
<div className="text-sm text-slate-600">Madrid y Alrededores</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Nombre</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all" placeholder="Tu nombre" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Correo Electrónico</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all" placeholder="tu@email.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Asunto</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all" placeholder="Asunto del mensaje" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Tipo de Servicio</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="service" type="radio"/>
<div className="border border-slate-200 rounded-lg p-3 text-center hover:border-slate-300 transition-colors">
<span className="text-xs font-medium">Urgencia</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="service" type="radio"/>
<div className="border border-slate-200 rounded-lg p-3 text-center hover:border-slate-300 transition-colors">
<span className="text-xs font-medium">Reparación</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="service" type="radio"/>
<div className="border border-slate-200 rounded-lg p-3 text-center hover:border-slate-300 transition-colors">
<span className="text-xs font-medium">Renovación</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="service" type="radio"/>
<div className="border border-slate-200 rounded-lg p-3 text-center hover:border-slate-300 transition-colors">
<span className="text-xs font-medium">Desataco</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="service" type="radio"/>
<div className="border border-slate-200 rounded-lg p-3 text-center hover:border-slate-300 transition-colors">
<span className="text-xs font-medium">Fuga</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="service" type="radio"/>
<div className="border border-slate-200 rounded-lg p-3 text-center hover:border-slate-300 transition-colors">
<span className="text-xs font-medium">Otro</span>
</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Mensaje</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all resize-none" placeholder="Describe brevemente tu problema..." rows="4"></textarea>
</div>
<button className="w-full bg-[#0f172a] text-white font-semibold py-3.5 rounded-lg hover:bg-[#1e293b] transition-all transform active:scale-[0.99] shadow-lg shadow-slate-200 flex justify-center items-center gap-2" type="button">
                            Enviar Mensaje
                            <iconify-icon icon="solar:plain-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#0f172a] text-slate-400 py-16 border-t border-slate-800">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-[#0ea5e9]" icon="solar:water-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-white font-semibold tracking-tight uppercase">Multiservices Gasa</span>
</a>
<p className="text-sm leading-relaxed max-w-sm mb-6">
                    Tu empresa de fontanería de confianza en Madrid. Expertos en reparaciones, mantenimiento y renovaciones con garantía profesional.
                </p>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Servicios</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#0ea5e9] transition-colors" href="#">Urgencias 24h</a></li>
<li><a className="hover:text-[#0ea5e9] transition-colors" href="#">Desatascos</a></li>
<li><a className="hover:text-[#0ea5e9] transition-colors" href="#">Fugas de Agua</a></li>
<li><a className="hover:text-[#0ea5e9] transition-colors" href="#">Calefacción</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#0ea5e9] transition-colors" href="https://multiservicesgasa.com/politicaprivacidad/">Política de Privacidad</a></li>
<li><a className="hover:text-[#0ea5e9] transition-colors" href="https://multiservicesgasa.com/politicacookies/">Política de Cookies</a></li>
<li><a className="hover:text-[#0ea5e9] transition-colors" href="https://multiservicesgasa.com/avisolegal/">Aviso Legal</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
<div>© 2025 Multiservices Gasa. Todos los derechos reservados.</div>
</div>
</footer>

    </>
  );
}
