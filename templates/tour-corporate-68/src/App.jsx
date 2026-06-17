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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2.5">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
<iconify-icon icon="solar:bus-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-slate-900 tracking-tight leading-none">ANITA TOURS</span>
<span className="block text-[10px] font-medium text-slate-400 tracking-wide uppercase">Servicios Especiales</span>
</div>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#servicios">Servicios</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#nosotros">Nosotros</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-slate-200 rounded-full text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200" href="https://wa.me/">
<iconify-icon className="mr-2" icon="solar:phone-calling-linear" width="16"></iconify-icon>
                        999 000 000
                    </a>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0">
<img alt="Transporte Turístico Perú" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-[10px] uppercase font-semibold tracking-wider mb-6 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                        Transporte Seguro y Confiable
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
                        Anita Tours
                    </h1>
<h2 className="text-xl sm:text-2xl text-slate-300 font-light tracking-tight mb-6">
                        Transporte Turístico y de Personal – Viajes y Turismo – Full Days
                    </h2>
<p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light mb-8 max-w-xl">
                        Somos una empresa dedicada al Servicio de Transporte Turístico y de Personal, brindando eficiencia, calidad, puntualidad y satisfacción, para que usted viva con nosotros una experiencia confortable e inolvidable.
                    </p>
<div className="flex flex-wrap gap-4 text-xs font-medium text-slate-300">
<div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
<iconify-icon className="text-blue-400" icon="solar:shield-check-linear" width="16"></iconify-icon>
                            Seguridad Garantizada
                        </div>
<div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
<iconify-icon className="text-blue-400" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                            Puntualidad
                        </div>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/20 p-6 sm:p-8 border border-slate-100">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Solicita tu cotización</h3>
<p className="text-xs text-slate-500 mb-6">Respuesta rápida en menos de 24 horas.</p>
<form className="space-y-4">
<div>
<label className="block text-[11px] uppercase font-semibold text-slate-500 mb-1.5 tracking-wide">Nombre Completo</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Ej. Juan Pérez" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[11px] uppercase font-semibold text-slate-500 mb-1.5 tracking-wide">Celular</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="999 000 000" type="tel"/>
</div>
<div>
<label className="block text-[11px] uppercase font-semibold text-slate-500 mb-1.5 tracking-wide">Email</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="juan@empresa.com" type="email"/>
</div>
</div>
<div>
<label className="block text-[11px] uppercase font-semibold text-slate-500 mb-1.5 tracking-wide">Servicio de Interés</label>
<select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
<option disabled="" selected="" value="">Seleccione una opción</option>
<option>Transporte de Personal</option>
<option>Transporte Turístico</option>
<option>Full Days / Excursiones</option>
<option>Traslado al Aeropuerto</option>
<option>Eventos y Matrimonios</option>
</select>
</div>
<div>
<label className="block text-[11px] uppercase font-semibold text-slate-500 mb-1.5 tracking-wide">Detalles del Viaje</label>
<textarea className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none" placeholder="Destino, fecha, número de pasajeros..." rows="2"></textarea>
</div>
<button className="w-full mt-2 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-[0.99]" type="button">
                                Solicitar Cotización Gratis
                                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-100 bg-white py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-[10px] uppercase font-semibold tracking-widest text-slate-400 mb-6">Confianza y Calidad en cada kilómetro</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="flex flex-col items-center justify-center gap-2">
<span className="text-3xl font-semibold text-slate-900">+10</span>
<span className="text-xs text-slate-500">Años de Experiencia</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<span className="text-3xl font-semibold text-slate-900">100%</span>
<span className="text-xs text-slate-500">Puntualidad</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<span className="text-3xl font-semibold text-slate-900">24/7</span>
<span className="text-xs text-slate-500">Soporte y Monitoreo</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<span className="text-3xl font-semibold text-slate-900">SOAT</span>
<span className="text-xs text-slate-500">Seguros Vigentes</span>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white relative" id="servicios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-blue-600 font-medium text-xs tracking-wider uppercase mb-2 block">Nuestras Soluciones</span>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Servicios Especializados</h2>
<p className="text-sm text-slate-500">
                    Adaptamos nuestra flota moderna a sus necesidades específicas, ya sea para mover a su equipo de trabajo o disfrutar del turismo nacional.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group border border-slate-100 rounded-2xl p-2 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="relative h-48 rounded-xl overflow-hidden mb-6">
<img alt="Transporte de Personal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="px-4 pb-6">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Transporte de Personal</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                            Movilidad corporativa diaria para empresas. Rutas optimizadas para asegurar la llegada puntual de sus colaboradores.
                        </p>
<ul className="space-y-2 mb-4">
<li className="flex items-center text-xs text-slate-600">
<iconify-icon className="text-blue-500 mr-2" icon="solar:check-circle-linear"></iconify-icon>
                                Unidades modernas (Vans/Sprinters)
                            </li>
<li className="flex items-center text-xs text-slate-600">
<iconify-icon className="text-blue-500 mr-2" icon="solar:check-circle-linear"></iconify-icon>
                                Protocolos de seguridad
                            </li>
</ul>
</div>
</div>

<div className="group border border-slate-100 rounded-2xl p-2 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="relative h-48 rounded-xl overflow-hidden mb-6">
<img alt="Transporte Turístico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-4 pb-6">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="solar:map-point-wave-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Transporte Turístico</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                            Conozca el Perú con total comodidad. Buses panorámicos y vans para circuitos turísticos nacionales.
                        </p>
<ul className="space-y-2 mb-4">
<li className="flex items-center text-xs text-slate-600">
<iconify-icon className="text-blue-500 mr-2" icon="solar:check-circle-linear"></iconify-icon>
                                Conductores expertos en rutas
                            </li>
<li className="flex items-center text-xs text-slate-600">
<iconify-icon className="text-blue-500 mr-2" icon="solar:check-circle-linear"></iconify-icon>
                                Aire acondicionado / TV / Audio
                            </li>
</ul>
</div>
</div>

<div className="group border border-slate-100 rounded-2xl p-2 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="relative h-48 rounded-xl overflow-hidden mb-6">
<img alt="Full Days y Eventos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-4 pb-6">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="solar:confetti-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Full Days &amp; Eventos</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                            Excursiones de un día, transporte para matrimonios y eventos corporativos. Logística integral.
                        </p>
<ul className="space-y-2 mb-4">
<li className="flex items-center text-xs text-slate-600">
<iconify-icon className="text-blue-500 mr-2" icon="solar:check-circle-linear"></iconify-icon>
                                Flexibilidad de horarios
                            </li>
<li className="flex items-center text-xs text-slate-600">
<iconify-icon className="text-blue-500 mr-2" icon="solar:check-circle-linear"></iconify-icon>
                                Atención personalizada
                            </li>
</ul>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#contacto">
                    Ver todas las opciones de flota
                    <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="nosotros">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">¿Por qué elegir Anita Tours?</h2>
<p className="text-sm text-slate-500 leading-relaxed">
                            Más que transporte, ofrecemos tranquilidad. Nuestra flota pasa por rigurosos mantenimientos y nuestro personal está altamente capacitado.
                        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Puntualidad</h4>
<p className="text-xs text-slate-500 mt-1">Respetamos su tiempo con una planificación exacta de rutas.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:shield-check-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Seguridad</h4>
<p className="text-xs text-slate-500 mt-1">Conductores profesionales y monitoreo constante de unidades.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:armchair-2-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Confort</h4>
<p className="text-xs text-slate-500 mt-1">Asientos reclinables, aire acondicionado y amplitud.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:medal-star-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Experiencia</h4>
<p className="text-xs text-slate-500 mt-1">Años brindando servicio a las mejores empresas del país.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-blue-600/5 rounded-3xl transform rotate-3"></div>
<img alt="Conductor Profesional" className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-slate-100 max-w-[240px]">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:user-circle-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Juan C.</p>
<p className="text-[10px] text-slate-500">Cliente Corporativo</p>
</div>
</div>
<p className="text-[11px] text-slate-600 italic">"Excelente servicio, las unidades siempre limpias y los conductores muy amables."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-10 text-center">Cubrimos todas sus necesidades</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">

<div className="col-span-2 row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Turismo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-medium text-lg">Turismo Nacional</h3>
<p className="text-xs text-slate-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Viajes a todo el Perú</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Aeropuerto" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-medium text-sm">Traslados Aeropuerto</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Matrimonios" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-medium text-sm">Eventos y Bodas</h3>
</div>
</div>

<div className="col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Corporativo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-medium text-lg">Transporte Corporativo</h3>
<p className="text-xs text-slate-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Servicio para empresas y ejecutivos</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="contacto">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">¿Listo para viajar?</h2>
<p className="text-slate-400 text-sm max-w-lg mx-auto">
                    Déjenos sus datos y uno de nuestros asesores se comunicará con usted para brindarle la mejor opción de transporte.
                </p>
</div>
<div className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl">
<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="col-span-1">
<label className="block text-xs font-semibold text-slate-700 mb-2">Nombre y Apellido</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-semibold text-slate-700 mb-2">Teléfono / WhatsApp</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" type="tel"/>
</div>
<div className="col-span-1 md:col-span-2">
<label className="block text-xs font-semibold text-slate-700 mb-2">Tipo de Servicio</label>
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
<option>Transporte de Personal</option>
<option>Turismo</option>
<option>Full Day</option>
<option>Otro</option>
</select>
</div>
<div className="col-span-1 md:col-span-2">
<label className="block text-xs font-semibold text-slate-700 mb-2">Mensaje Adicional</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none" rows="3"></textarea>
</div>
<div className="col-span-1 md:col-span-2">
<button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" type="button">
                            Enviar Solicitud
                        </button>
</div>
</form>
</div>
<div className="flex justify-center gap-8 mt-12 text-slate-400">
<a className="flex items-center gap-2 text-sm hover:text-white transition-colors" href="mailto:info@anitatours.com">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                    info@anitatours.com
                </a>
<a className="flex items-center gap-2 text-sm hover:text-white transition-colors" href="tel:999000000">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                    (01) 999 0000
                </a>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
<iconify-icon className="text-blue-600" icon="solar:bus-bold" width="20"></iconify-icon>
<span className="text-sm font-semibold text-slate-900 tracking-tight">ANITA TOURS</span>
</div>
<p className="text-[10px] text-slate-500 max-w-xs">
                        Anita Tours Servicios Especiales S.A.C<br/>
                        Excelencia en transporte turístico y corporativo en Perú.
                    </p>
</div>
<div className="flex gap-6">
<a className="text-[11px] font-medium text-slate-500 hover:text-blue-600 uppercase tracking-wide" href="#">Inicio</a>
<a className="text-[11px] font-medium text-slate-500 hover:text-blue-600 uppercase tracking-wide" href="#servicios">Servicios</a>
<a className="text-[11px] font-medium text-slate-500 hover:text-blue-600 uppercase tracking-wide" href="#contacto">Contacto</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-200 text-center">
<p className="text-[10px] text-slate-400">© 2024 Anita Tours. Todos los derechos reservados.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 group flex items-center justify-center" href="https://wa.me/" target="_blank">
<span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-20 animate-ping"></span>
<div className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-3.5 shadow-xl shadow-green-500/20 transition-all duration-300 hover:scale-110 flex items-center justify-center">
<iconify-icon icon="solar:chat-round-dots-bold" width="28"></iconify-icon>
</div>
<div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-lg border border-slate-100 text-xs font-semibold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block origin-right">
            ¡Cotiza por WhatsApp!
        </div>
</a>

    </>
  );
}
