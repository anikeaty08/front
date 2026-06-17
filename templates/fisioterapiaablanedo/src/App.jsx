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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex-shrink-0 flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-teal-600 text-white rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
<iconify-icon icon="solar:health-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<span className="block text-stone-900 font-semibold tracking-tight text-lg leading-none">Ablanedo</span>
<span className="block text-[10px] text-stone-500 font-medium uppercase tracking-wide mt-0.5">Madrid</span>
</div>
</a>

<div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#quienes-somos">Quiénes Somos</a>
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#servicios">Servicios</a>
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#domicilio">A domicilio</a>
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#tarifas">Tarifas</a>
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#contacto">Contacto</a>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="flex items-center gap-2 text-stone-600 hover:text-teal-700 transition-colors text-sm font-medium" href="tel:+34918217576">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                        91 821 75 76
                    </a>
<a className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-medium py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md" href="#contacto">
<span>Reservar cita</span>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-500 hover:text-teal-700">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-white">
<div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50 rounded-l-[100px] -z-0 opacity-60 hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-medium border border-teal-100 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                        Ubicados en pleno barrio de Malasaña
                    </div>
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-stone-900 mb-6 leading-[1.15]">
                        Clínica de Fisioterapia <br/>
<span className="text-teal-700">en el centro de Madrid.</span>
</h1>
<p className="text-lg text-stone-500 mb-8 max-w-lg font-light leading-relaxed">
                        En la Clínica Ablanedo realizamos tratamientos de fisioterapia, osteopatía y drenaje linfático manual. Ponemos tu salud y bienestar en el centro de todo.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-stone-800 transition-all shadow-soft hover:translate-y-px" href="#contacto">
                            Contactar
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-stone-700 border border-stone-200 px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-stone-50 hover:border-stone-300 transition-all" href="https://goo.gl/maps/3xCsfB9nrr72" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon> ¿Cómo llegar?
                        </a>
</div>
<div className="mt-12 flex items-center gap-6 border-t border-stone-100 pt-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-xs text-stone-500 font-medium">Titulados y Colegiados</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="text-xs text-stone-500 font-medium">Servicio a domicilio</span>
</div>
</div>
</div>
<div className="relative fade-in-up delay-200">
<div className="aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden bg-stone-100 relative shadow-soft">
<img alt="Fisioterapia Madrid Centro" className="absolute inset-0 w-full h-full object-cover" src="https://www.fisioterapiablanedo.es/wp-content/uploads/2018/02/17308551221_3ad6e14d63_k-1024x683.jpg"/>
<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-stone-100/50">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0">
<iconify-icon icon="solar:heart-pulse-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Atención Personalizada</p>
<p className="text-xs text-stone-500 mt-1 leading-relaxed">El diagnóstico es clave para obtener buenos resultados con el tratamiento.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50 border-y border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="flex flex-col items-start">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-700 mb-5 shadow-sm border border-stone-100">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-stone-900 mb-2">Sesiones de 45 minutos</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Todos nuestros tratamientos de fisioterapia, osteopatía y drenaje linfático manual son de 45 minutos de duración dedicados exclusivamente a ti.
                    </p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-700 mb-5 shadow-sm border border-stone-100">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-stone-900 mb-2">Sesiones personalizadas</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Cada paciente posee una evolución única. Realizamos un trato completamente personalizado porque un buen diagnóstico es la base del éxito.
                    </p>
</div>
<div className="flex flex-col items-start" id="domicilio">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-700 mb-5 shadow-sm border border-stone-100">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-stone-900 mb-2">Tratamientos a domicilio</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Por el frenético ritmo de hoy en día o por dificultades de movilidad, disponemos de un servicio a domicilio a tu medida en Madrid.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="servicios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">¿Qué ofrecemos?</span>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Servicios de la Clínica Ablanedo</h2>
<p className="text-stone-500 font-light">
                    Soluciones integrales para la recuperación y el bienestar de tu cuerpo, aplicadas por profesionales titulados.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="group flex flex-col p-6 lg:p-8 bg-stone-50 rounded-3xl transition-colors duration-300 hover:bg-teal-50/50 border border-transparent hover:border-teal-100">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-stone-200">
<img alt="Fisioterapia" className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://www.fisioterapiablanedo.es/wp-content/uploads/2018/02/17308551221_3ad6e14d63_k-1024x683.jpg"/>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Fisioterapia</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Utilizamos un conjunto de métodos y técnicas que, mediante la aplicación de medios físicos, curan, previenen y recuperan a nuestros pacientes.
                    </p>
</div>

<div className="relative group flex flex-col p-6 lg:p-8 bg-stone-800 rounded-3xl text-white shadow-xl overflow-hidden">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-stone-700">
<img alt="Osteopatía" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://www.fisioterapiablanedo.es/wp-content/uploads/2018/04/foto-osteopatia.jpg"/>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Osteopatía</h3>
<p className="text-sm text-stone-300 leading-relaxed mb-4">
                            Funciona en un contexto de abordaje holístico con la aplicación de técnicas manuales basadas en la anatomía y fisiología del cuerpo humano.
                        </p>
<div className="mt-auto pt-4 border-t border-white/10">
<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300">
                                Especialidad <iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="group flex flex-col p-6 lg:p-8 bg-stone-50 rounded-3xl transition-colors duration-300 hover:bg-teal-50/50 border border-transparent hover:border-teal-100">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-stone-200">
<img alt="Drenaje Linfático Manual" className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://www.fisioterapiablanedo.es/wp-content/uploads/2018/04/foto-drenaje-linfatico.jpg"/>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Drenaje Linfático</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Tratamos mediante maniobras con movilizaciones suaves y progresivas que ayudan a movilizar los líquidos del cuerpo y eliminar sustancias de desecho.
                    </p>
</div>

<div className="group flex flex-col p-6 lg:p-8 bg-stone-50 rounded-3xl transition-colors duration-300 hover:bg-teal-50/50 border border-transparent hover:border-teal-100">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-stone-200">
<img alt="Vendaje Neuromuscular" className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://www.fisioterapiablanedo.es/wp-content/uploads/2018/03/vendajenmrodilla-1024x683.jpg"/>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Vendaje Neuromuscular</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        También llamado kinesiotaping, utilizamos esta venda elástica terapéutica cuya función es aliviar y tratar lesiones musculoesqueléticas.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="quienes-somos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="md:col-span-7 lg:col-span-7">
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">Garantía de Calidad</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-6">Clínica inscrita en el Colegio Profesional</h2>
<div className="prose prose-stone prose-lg text-stone-500 font-light leading-relaxed">
<p className="text-stone-800 font-normal">
                            Nuestros profesionales están titulados y autorizados por el Colegio Profesional de Fisioterapeutas de la Comunidad de Madrid.
                        </p>
<p className="text-base">
                            Este registro es un fiel indicador de la profesionalidad y altísima calidad de nuestro servicio. Trabajamos día a día para asegurar que cada tratamiento cumpla con los estándares más exigentes de la medicina física y rehabilitación.
                        </p>
<p className="text-base">
                            Desde el corazón del alternativo barrio de Malasaña, te ofrecemos un espacio seguro, moderno y preparado para enfocarnos en tu recuperación integral.
                        </p>
</div>
<div className="mt-10 flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600 flex items-center gap-2"><iconify-icon className="text-teal-600" icon="solar:document-medicine-linear"></iconify-icon> Titulados Oficiales</span>
<span className="px-4 py-2 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600 flex items-center gap-2"><iconify-icon className="text-teal-600" icon="solar:shield-check-linear"></iconify-icon> Colegio Profesional de Madrid</span>
</div>
</div>

<div className="md:col-span-5 lg:col-span-5 relative">
<div className="relative z-10 rounded-3xl overflow-hidden shadow-soft border border-stone-100 bg-white p-2">
<img alt="Certificado Colegio Profesional de Fisioterapeutas de Madrid" className="w-full h-auto object-contain rounded-2xl" src="https://www.fisioterapiablanedo.es/wp-content/uploads/2026/01/censo_centros_26-1024x731.png"/>
</div>
<div className="absolute -z-10 top-1/2 right-1/2 translate-x-1/3 -translate-y-1/2 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-60"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 bg-teal-50 text-teal-600 rounded-full mb-8">
<iconify-icon icon="solar:quote-left-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-stone-900 leading-snug mb-10">
                "Tanto si sufres de alguna dolencia o patología, como si deseas mejorar tu salud física, desde nuestra clínica de fisioterapia podemos ayudarte de forma eficaz y personalizada."
            </h3>
<div className="flex flex-col items-center justify-center gap-2">
<p className="text-sm font-semibold text-stone-900">Equipo Ablanedo</p>
<p className="text-xs text-stone-400">Fisioterapeutas en Madrid</p>
<div className="flex text-amber-400 gap-0.5 mt-1">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-teal-900 text-white relative overflow-hidden" id="contacto">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">¡Contacta con nuestra clínica!</h2>
<p className="text-teal-100/80 mb-12 font-light text-lg">
                        Pide tu cita o consúltanos tus dudas sin compromiso. Estamos en el corazón de Malasaña, listos para ayudarte.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-300 flex-shrink-0 backdrop-blur-sm border border-white/5">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white mb-1">Dónde encontrarnos</p>
<p className="text-base text-teal-100/70 leading-relaxed">Fisioterapia Ablanedo<br/>Calle Jesús del Valle nº 2<br/>28004 Madrid</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-300 flex-shrink-0 backdrop-blur-sm border border-white/5">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white mb-1">Teléfono</p>
<a className="text-xl text-white hover:text-teal-300 transition-colors" href="tel:+34918217576">+34 91 821 75 76</a>
<p className="text-xs text-teal-100/50 mt-1">Lunes a Viernes: 9:00am - 21:00pm</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-300 flex-shrink-0 backdrop-blur-sm border border-white/5">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white mb-1">Correo Electrónico</p>
<a className="text-base text-teal-100/70 hover:text-white transition-colors" href="mailto:info@fisioterapiablanedo.es">info@fisioterapiablanedo.es</a>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-teal-900/50 text-stone-800 flex flex-col h-full">
<h3 className="text-xl font-semibold text-stone-900 mb-6">Nuestra Ubicación</h3>
<div className="flex-grow bg-stone-100 rounded-xl overflow-hidden relative min-h-[300px]">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.3675026679166!2d-3.705949336438687!3d40.42286057692541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422862d984a1a7%3A0xd48fcadcb5d3ab78!2sFisioterapia+Ablanedo!5e0!3m2!1ses!2ses!4v1520961688000"></iframe>
</div>
<div className="mt-6">
<a className="w-full flex justify-center items-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-4 rounded-xl text-sm transition-all shadow-lg shadow-teal-600/20" href="mailto:info@fisioterapiablanedo.es">
                            Escríbenos un email
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4 opacity-80">
<div className="w-6 h-6 bg-teal-600 text-white rounded flex items-center justify-center">
<iconify-icon icon="solar:health-linear" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-stone-900 font-bold">Fisioterapia Ablanedo</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed max-w-xs">
                        Nuestra clínica de fisioterapia, en pleno barrio de Malasaña, pone a servicio del cliente tratamientos integrales para su recuperación.
                    </p>
</div>
<div>
<h4 className="text-stone-900 text-sm font-semibold mb-4">Servicios</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-teal-600 transition-colors" href="#servicios">Fisioterapia</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#servicios">Osteopatía</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#servicios">Drenaje Linfático Manual</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#servicios">Vendaje Neuromuscular</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-900 text-sm font-semibold mb-4">Enlaces de Interés</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-teal-600 transition-colors" href="#quienes-somos">Quiénes Somos</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#domicilio">Trabajo a domicilio</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#tarifas">Tarifas</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#contacto">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-900 text-sm font-semibold mb-4">Síguenos</h4>
<p className="text-xs text-stone-500 mb-2">Calle Jesús del Valle nº 2, Madrid</p>
<p className="text-xs text-stone-500 mb-4">info@fisioterapiablanedo.es</p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-teal-600 transition-colors" href="https://www.facebook.com/fisioterapiablanedo/" target="_blank"><iconify-icon icon="fa-brands:facebook-f" width="16"></iconify-icon></a>
<a className="text-stone-400 hover:text-teal-600 transition-colors" href="https://www.instagram.com/fisioterapiablanedo/" target="_blank"><iconify-icon icon="fa-brands:instagram" width="16"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-400">
<p>© 2023 · Fisioterapia Ablanedo - Madrid centro | Diseño web por SeEking dOg ® adaptado a nuevo formato.</p>
<div className="flex gap-6 mt-2 md:mt-0">
<a className="hover:text-stone-600" href="#">Aviso Legal</a>
<a className="hover:text-stone-600" href="#">Política de Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
