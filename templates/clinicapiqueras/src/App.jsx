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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold text-slate-900 tracking-tight text-lg">Clínica<span className="text-[#34a6f7]">Piqueras</span></div>
<div className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#34a6f7] transition-colors" href="#">Especialidades</a>
<a className="hover:text-[#34a6f7] transition-colors" href="#">El Centro</a>
<a className="hover:text-[#34a6f7] transition-colors" href="#">Equipo Médico</a>
<a className="hover:text-[#34a6f7] transition-colors" href="#">Noticias</a>
</div>
<a className="bg-[#34a6f7] text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-[#208ddb] transition-all flex items-center gap-2" href="#book">
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
                91 554 72 72
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl fade-in">
<div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 mb-8">
<span className="flex h-2 w-2 rounded-full bg-[#34a6f7]"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Registro Sanitario CS0841</span>
</div>
<h1 className="text-4xl lg:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight mb-6">
                        Tu Centro Médico <br className="hidden lg:block"/>
<span className="text-slate-400">Integral en Madrid.</span>
</h1>
<p className="text-lg lg:text-xl text-slate-500 font-light mb-10 leading-relaxed max-w-lg">
                        Dirigidos por el Dr. Francisco M. Piqueras, combinamos más de 25 años de experiencia con tecnología avanzada para ofrecerte especialidades en podología, cirugía del pie, estética y medicina general.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-[#34a6f7] text-white rounded-lg font-medium hover:bg-[#208ddb] transition-all shadow-sm shadow-[#34a6f7]/30" href="#book">
                            Solicitar Cita Médica
                        </a>
<button className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all group">
                            Nuestras Especialidades
                            <iconify-icon className="ml-2 text-slate-400 group-hover:translate-x-1 transition-transform" height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="relative h-[500px] w-full hidden lg:block fade-in">

<div className="absolute top-0 right-0 w-[85%] h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 bg-slate-50">
<img alt="Instalaciones Clínica Piqueras" className="w-full h-full object-cover" src="https://www.clinicapiqueras.com/wp-content/uploads/2016/04/gabinete1-podologia-madrid.jpg"/>
</div>

<div className="absolute bottom-10 left-0 w-64 p-4 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 z-10 backdrop-blur-sm bg-white/95">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-slate-500">Ubicación Central</span>
<iconify-icon className="text-[#34a6f7]" height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<div className="text-sm font-medium text-slate-900">C/ Cristóbal Bordiú, 49</div>
<div className="mt-1 text-xs text-slate-400">28003 Madrid</div>
</div>

<div className="absolute top-10 -left-6 w-48 p-3 bg-slate-900 rounded-xl shadow-xl z-0">
<div className="flex items-center space-x-3">
<div className="p-2 bg-slate-800 rounded-lg text-[#34a6f7]">
<iconify-icon height="20" icon="solar:diploma-verified-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">+25 Años</div>
<div className="text-slate-400 text-xs">Experiencia Médica</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 py-10 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 text-slate-400">
<div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="font-medium text-sm tracking-tight">Centro Autorizado</span>
</div>
<div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<span className="font-medium text-sm tracking-tight">Equipo Multidisciplinar</span>
</div>
<div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
<iconify-icon height="24" icon="solar:health-linear" width="24"></iconify-icon>
<span className="font-medium text-sm tracking-tight">Aparatología Avanzada</span>
</div>
<div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
<iconify-icon height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
<span className="font-medium text-sm tracking-tight">Trato Honesto</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Especialidades Médicas</h2>
<p className="text-slate-500 font-light">Servicios integrales para tu salud. Diagnóstico, tratamiento y recuperación en un solo lugar.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#34a6f7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-[#34a6f7] group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:footsteps-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Podología y Cirugía del Pie</h3>
<p className="text-sm text-slate-500 leading-relaxed">Especialistas en la cirugía del pie, desarrollando nuestras técnicas avanzadas desde hace más de 18 años.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#34a6f7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-[#34a6f7] group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:stethoscope-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Medicina de Familia</h3>
<p className="text-sm text-slate-500 leading-relaxed">Equipo de especialistas en Medicina Familiar, Comunitaria y General formado por reconocidos doctores.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#34a6f7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-[#34a6f7] group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:pulse-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Tratamiento del Dolor</h3>
<p className="text-sm text-slate-500 leading-relaxed">Unidad especializada para estudiar, diagnosticar y tratar dolores crónicos o agudos mejorando tu calidad de vida.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#34a6f7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-[#34a6f7] group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:accessibility-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Fisioterapia</h3>
<p className="text-sm text-slate-500 leading-relaxed">Recuperamos y prevenimos lesiones mediante técnicas avanzadas. Protocolos para lesiones y post-cirugía.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#34a6f7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-[#34a6f7] group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:stars-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Medicina Estética</h3>
<p className="text-sm text-slate-500 leading-relaxed">Tratamientos para prevenir y reparar el envejecimiento corporal y facial con estudio personalizado.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#34a6f7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-[#34a6f7] group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:apple-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Nutrición</h3>
<p className="text-sm text-slate-500 leading-relaxed">Dietistas-nutricionistas que estudiarán tu caso para ayudarte a conseguir una salud óptima a través de la alimentación.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-3/5">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-200 aspect-video group bg-white">
<img alt="Instalaciones Médicas" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>
</div>

<div className="w-full lg:w-2/5">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-6">Clínica moderna equipada con la mejor tecnología.</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#34a6f7]">
<iconify-icon height="16" icon="solar:monitor-camera-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Aparatología Médica Avanzada</h4>
<p className="text-sm text-slate-500 mt-1">En nuestro centro médico dispondrás de los mejores equipos para diagnóstico preciso y tratamiento eficaz en todas las áreas.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#34a6f7]">
<iconify-icon height="16" icon="solar:test-tube-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Análisis Clínicos</h4>
<p className="text-sm text-slate-500 mt-1">Nos ocupamos de todo para que no tengas que preocuparte de nada, manteniendo acuerdos con los principales laboratorios.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#34a6f7]">
<iconify-icon height="16" icon="solar:clipboard-check-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Examen Médico Exhaustivo</h4>
<p className="text-sm text-slate-500 mt-1">Te informamos sin compromiso sobre tu situación o dolencia y trazamos la ruta de cómo podemos ayudarte a sentirte mejor.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">

<div className="md:col-span-2 row-span-1 lg:row-span-2 p-8 bg-slate-800 rounded-3xl flex flex-col justify-center items-start text-white shadow-lg border border-slate-700">
<h2 className="text-3xl font-medium tracking-tight mb-4">El equipo médico que cuidará de ti.</h2>
<p className="text-slate-400 font-light mb-8 max-w-sm">Los mejores profesionales en sus respectivas especialidades para ofrecerte un servicio médico humano, honesto y de prestigio.</p>
<a className="text-sm font-medium text-[#34a6f7] hover:text-white transition-colors flex items-center" href="#">
                        Ver todos los especialistas <iconify-icon className="ml-2" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="md:col-span-1 p-1 bg-white rounded-3xl overflow-hidden relative group">
<img alt="Dr. Francisco M. Piqueras" className="w-full h-full object-cover rounded-[22px] grayscale group-hover:grayscale-0 transition-all duration-500" src="https://www.clinicapiqueras.com/wp-content/uploads/2022/11/equipo-medico-francisco-munoz.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white">
<h4 className="font-medium text-slate-900 text-sm">Dr. Francisco M. Piqueras</h4>
<p className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Dirección Médica</p>
</div>
</div>

<div className="md:col-span-1 p-1 bg-white rounded-3xl overflow-hidden relative group">
<img alt="Dra. Cristina Batalla" className="w-full h-full object-cover rounded-[22px] grayscale group-hover:grayscale-0 transition-all duration-500" src="https://www.clinicapiqueras.com/wp-content/uploads/2022/11/equipo-medico-cristina-batalla.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white">
<h4 className="font-medium text-slate-900 text-sm">Dra. Cristina Batalla</h4>
<p className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Especialista</p>
</div>
</div>

<div className="md:col-span-1 p-1 bg-white rounded-3xl overflow-hidden relative group hidden md:block">
<img alt="Dr. Miguel Piqueras" className="w-full h-full object-cover rounded-[22px] grayscale group-hover:grayscale-0 transition-all duration-500" src="https://www.clinicapiqueras.com/wp-content/uploads/2022/11/equipo-medico-miguel-piqueras.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white">
<h4 className="font-medium text-slate-900 text-sm">Dr. Miguel Piqueras</h4>
<p className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Especialista</p>
</div>
</div>

<div className="md:col-span-1 p-1 bg-white rounded-3xl overflow-hidden relative group hidden lg:block">
<img alt="Dr. Pedro Bejaran" className="w-full h-full object-cover rounded-[22px] grayscale group-hover:grayscale-0 transition-all duration-500" src="https://www.clinicapiqueras.com/wp-content/uploads/2022/11/equipo-medico-pedro-bejaran.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white">
<h4 className="font-medium text-slate-900 text-sm">Dr. Pedro Bejaran</h4>
<p className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Especialista</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight">Transformando los servicios médicos</h2>
<p className="text-slate-500 font-light mt-4">Con pasión por nuestro trabajo y con clara vocación innovadora, te ofrecemos una Clínica Multidisciplinar de alta calidad.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div>
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900" height="20" icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-2">Más de 25 años</h4>
<p className="text-sm text-slate-500 leading-relaxed">Un amplio equipo médico altamente cualificado y preparado para abordar los casos más complejos.</p>
</div>

<div>
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900" height="20" icon="solar:medal-star-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-2">Prestigio Médico</h4>
<p className="text-sm text-slate-500 leading-relaxed">Contamos con profesionales cualificados, con alto prestigio en cada una de las especialidades.</p>
</div>

<div>
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900" height="20" icon="solar:hand-shake-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-2">Trato Cercano</h4>
<p className="text-sm text-slate-500 leading-relaxed">Consideramos clave la confianza y la existencia de una relación honesta entre paciente y profesional.</p>
</div>

<div>
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900" height="20" icon="solar:siren-linear" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-2">Urgencias</h4>
<p className="text-sm text-slate-500 leading-relaxed">Disponemos de atención de urgencias en áreas como fisioterapia y podología para dolencias agudas.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-8">En el corazón de Madrid</h2>
<div className="relative w-full aspect-[21/9] bg-slate-200 rounded-2xl overflow-hidden mb-8 shadow-sm">

<img alt="Madrid Location" className="w-full h-full object-cover opacity-80 grayscale" src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-[#34a6f7]/10 mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl flex items-center space-x-4 border border-white">
<div className="w-10 h-10 rounded-full bg-[#34a6f7]/10 flex items-center justify-center text-[#34a6f7]">
<iconify-icon height="24" icon="solar:map-bold-duotone" width="24"></iconify-icon>
</div>
<div className="text-left">
<p className="text-slate-900 font-semibold text-sm">Calle de Cristóbal Bordiú, 49</p>
<p className="text-slate-500 text-xs">28003 Madrid</p>
</div>
</div>
</div>
</div>
<p className="text-slate-500 max-w-2xl mx-auto mb-6">
                Unas instalaciones amplias y diseñadas para tu comodidad, equipadas con la tecnología necesaria para garantizar el mejor diagnóstico y tratamiento.
            </p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-10">Preguntas Frecuentes</h2>
<div className="space-y-4">

<div className="bg-slate-50 rounded-xl border border-slate-100 p-6">
<div className="flex justify-between items-center cursor-pointer">
<h4 className="text-base font-medium text-slate-900">¿Cómo puedo solicitar una cita?</h4>
<iconify-icon className="text-slate-400" height="16" icon="solar:alt-arrow-up-linear" width="16"></iconify-icon>
</div>
<p className="mt-3 text-sm text-slate-500 leading-relaxed">Puedes pedir cita llamando a nuestro número de atención al paciente 91 554 72 72 o a través del formulario de contacto en nuestra web. Nos pondremos en contacto contigo a la mayor brevedad posible.</p>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-colors">
<div className="flex justify-between items-center cursor-pointer">
<h4 className="text-base font-medium text-slate-900">¿Atendéis urgencias médicas?</h4>
<iconify-icon className="text-slate-400" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-colors">
<div className="flex justify-between items-center cursor-pointer">
<h4 className="text-base font-medium text-slate-900">¿Trabajáis con seguros médicos (mutuas)?</h4>
<iconify-icon className="text-slate-400" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-colors">
<div className="flex justify-between items-center cursor-pointer">
<h4 className="text-base font-medium text-slate-900">¿Cuál es el horario de la clínica?</h4>
<iconify-icon className="text-slate-400" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-center px-6 border-b border-slate-800" id="book">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">¿Necesitas ayuda médica?</h2>
<p className="text-slate-400 mb-10 font-light text-lg">Estaremos encantados de poder ayudarte. Solicita una cita con uno de nuestros especialistas y no retrases más tu cuidado.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-[#34a6f7] text-white rounded-lg font-medium hover:bg-[#208ddb] transition-all shadow-lg shadow-[#34a6f7]/20 flex justify-center items-center gap-2">
<iconify-icon height="20" icon="solar:calendar-add-linear" width="20"></iconify-icon>
                    Pedir Cita Online
                </button>
<button className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-all flex justify-center items-center gap-2">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
                    Llamar al 91 554 72 72
                </button>
</div>
<p className="mt-8 text-xs text-slate-500">Clínica Piqueras • Centro Médico Autorizado (Registro CS0841)</p>
</div>
</section>

<footer className="bg-slate-950 text-slate-500 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm">© 2025 Clínica Piqueras. Todos los derechos reservados.</div>
<div className="flex space-x-6 text-sm">
<a className="hover:text-white transition-colors" href="#">Aviso Legal</a>
<a className="hover:text-white transition-colors" href="#">Política de Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>

    </>
  );
}
