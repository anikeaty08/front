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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-lg font-semibold tracking-tighter text-slate-900 uppercase" href="#">
                        Las Glicinas
                    </a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#nosotros">Nosotros</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#ubicacion">Ubicación</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all shadow-sm" href="#contacto">
                        Agendar Visita
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-slate-900 p-2" type="button">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
<div className="lg:col-span-6 text-center lg:text-left">
<div className="animate-fade-in-up inline-flex items-center px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium mb-6">
<span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
                        Abierto a nuevas ingresos en Villa Urquiza
                    </div>
<h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]" style={{animationDelay: '100ms'}}>
                        Un hogar donde el cuidado se siente como <span className="text-teal-700">familia.</span>
</h1>
<p className="animate-fade-in-up text-lg text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" style={{animationDelay: '200ms'}}>
                        En Residencia Las Glicinas combinamos atención médica profesional con la calidez humana que sus seres queridos merecen. Tranquilidad para usted, bienestar para ellos.
                    </p>
<div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{animationDelay: '300ms'}}>
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-teal-700 hover:bg-teal-800 transition-all shadow-sm hover:shadow-md" href="#contacto">
                            Consultar Disponibilidad
                        </a>
<a className="inline-flex items-center justify-center hover:bg-slate-50 transition-all text-base font-medium text-slate-700 bg-gray-200 border-slate-200 border rounded-lg px-6 py-3" href="tel:+541112345678">
<svg aria-hidden="true" className="iconify mr-2 iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Llamar ahora
                        </a>
</div>
</div>
<div className="lg:col-span-6 mt-12 lg:mt-0 relative animate-fade-in-up" style={{animationDelay: '500ms'}}>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white p-2">
<img alt="Adultos mayores disfrutando en el jardín" className="rounded-xl w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-slate-100 max-w-xs">
<div className="flex items-start gap-3">
<div className="bg-green-100 p-2 rounded-full text-green-600 mt-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart-handshake" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Atención Personalizada</p>
<p className="text-xs text-slate-500 mt-0.5">Enfermería y acompañamiento 24hs.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-blue-500/0 border-slate-100 py-24" id="nosotros">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Más que una residencia, una comunidad</h2>
<p className="text-slate-500 text-lg">Entendemos que cada residente es único. Nuestro enfoque se centra en mantener la autonomía, fomentar la vida social y asegurar la salud física y emocional.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-teal-700 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:stethoscope" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Seguimiento Médico</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Control clínico permanente, administración de medicamentos y coordinación con especialistas. Su salud es nuestra prioridad absoluta.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-rose-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Compañía y Afecto</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Fomentamos la interacción social a través de talleres cognitivos, actividades lúdicas y eventos familiares para combatir la soledad.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:utensils" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Nutrición Balanceada</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Menús elaborados por nutricionistas, adaptados a las necesidades de cada residente, priorizando el sabor casero y la calidad.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-y bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-blue-500/0 border-slate-100 py-24" id="ubicacion">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
<div className="grid lg:grid-cols-2">
<div className="p-10 lg:p-16 flex flex-col justify-center">
<div className="flex items-center space-x-2 text-teal-400 mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="text-sm font-semibold tracking-wide uppercase">Villa Urquiza, CABA</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Ubicación estratégica y tranquila</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                            Nos encontramos en el corazón de Villa Urquiza, un barrio residencial, seguro y de fácil acceso. Cerca de avenidas principales pero manteniendo la calma necesaria para el descanso.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start text-slate-300 text-sm">
<svg aria-hidden="true" className="iconify text-teal-500 mr-3 mt-0.5 iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                A pocas cuadras de la estación de Subte B.
                            </li>
<li className="flex items-start text-slate-300 text-sm">
<svg aria-hidden="true" className="iconify text-teal-500 mr-3 mt-0.5 iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Cercanía a centros médicos de alta complejidad.
                            </li>
<li className="flex items-start text-slate-300 text-sm">
<svg aria-hidden="true" className="iconify text-teal-500 mr-3 mt-0.5 iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Zona de fácil estacionamiento para visitas.
                            </li>
</ul>
</div>
<div className="relative h-64 lg:h-auto bg-slate-800">

<img alt="Mapa Villa Urquiza" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center">
<p className="text-white text-sm font-medium">Residencia Las Glicinas</p>
<p className="text-slate-300 text-xs mt-1">Villa Urquiza, Buenos Aires</p>
<a className="mt-3 inline-block text-xs font-semibold text-teal-400 hover:text-teal-300" href="https://maps.google.com" target="_blank">Ver en Mapa →</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-20 pb-20 shadow-sm">
<div className="max-w-4xl mx-auto px-4 text-center">
<svg aria-hidden="true" className="iconify text-slate-300 mx-auto mb-6 iconify--lucide" data-icon="lucide:quote" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xl md:text-2xl font-medium text-slate-800 leading-normal mb-8">
                "Desde que mi madre está en Las Glicinas, ha recuperado la sonrisa. La atención de las enfermeras es impecable y el ambiente es muy familiar. Nos sentimos muy tranquilos dejándola en tan buenas manos."
            </p>
<div className="flex items-center justify-center gap-3">
<div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">MJ</div>
<div className="text-left">
<p className="text-sm font-semibold text-slate-900">María José Pérez</p>
<p className="text-xs text-slate-500">Hija de residente</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contacto">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Contáctenos</h2>
<p className="text-slate-500">Solicite una entrevista para conocer nuestras instalaciones. Estamos aquí para responder todas sus dudas.</p>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide" htmlFor="name">Nombre y Apellido</label>
<input className="w-full rounded-md border-slate-200 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm py-2.5 px-3" id="name" placeholder="Su nombre" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide" htmlFor="phone">Teléfono</label>
<input className="w-full rounded-md border-slate-200 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm py-2.5 px-3" id="phone" placeholder="11 1234 5678" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full rounded-md border-slate-200 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm py-2.5 px-3" id="email" placeholder="nombre@ejemplo.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide" htmlFor="message">Mensaje o Consulta</label>
<textarea className="w-full rounded-md border-slate-200 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm py-2.5 px-3" id="message" placeholder="Cuéntenos sobre su familiar y qué necesidades tiene..." rows="4"></textarea>
</div>
<div className="flex items-center mb-4">
<input className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" id="terms" type="checkbox"/>
<label className="ml-2 block text-xs text-slate-500" htmlFor="terms">
                            Acepto ser contactado para recibir información.
                        </label>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all" type="submit">
                        Enviar Consulta
                    </button>
</form>
<div className="mt-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
<div className="">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Contacto Directo</p>
<p className="text-slate-900 font-medium">info@lasglicinas.com.ar</p>
</div>
<div className="">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">WhatsApp</p>
<a className="hover:underline font-medium text-teal-700" href="#">+54 9 11 6544-0277</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-12 pb-8">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-2 md:col-span-1">
<span className="text-base font-semibold tracking-tighter text-slate-900 uppercase block mb-4">Las Glicinas</span>
<p className="text-xs text-slate-500 leading-relaxed">
                        Brindando calidad de vida a nuestros mayores en Villa Urquiza con amor, respeto y profesionalismo.
                    </p>
</div>
<div className="">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-4">Navegación</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className=""><a className="hover:text-slate-900" href="#nosotros">Nosotros</a></li>
<li className=""><a className="hover:text-slate-900" href="#servicios">Servicios</a></li>
<li className=""><a className="hover:text-slate-900" href="#ubicacion">Ubicación</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-4">Legales</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className=""><a className="hover:text-slate-900" href="#">Privacidad</a></li>
<li className=""><a className="hover:text-slate-900" href="#">Términos</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-4">Redes</h4>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Residencia Las Glicinas. Todos los derechos reservados.</p>
<div className="flex space-x-4">

<div className="h-6 w-16 bg-slate-100 rounded flex items-center justify-center text-[10px] text-slate-400">SSL Secure</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
