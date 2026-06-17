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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',   // Blue 50
100: '#dbeafe',  // Blue 100
500: '#3b82f6',  // Blue 500
600: '#2563eb',  // Blue 600 (Primary)
700: '#1d4ed8',  // Blue 700
900: '#1e3a8a',  // Blue 900 (Dark)
},
accent: {
100: '#fef9c3',
400: '#facc15',  // Yellow 400 (Vibrant)
500: '#eab308',  // Yellow 500 (Text/Icon)
}
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="bg-brand-600 p-1.5 rounded-lg group-hover:bg-brand-700 transition-colors duration-300 shadow-lg shadow-brand-500/20">
<span className="iconify text-white w-6 h-6" data-icon="lucide:paw-print" data-strokeWidth="1.5"></span>
</div>
<span className="font-semibold text-slate-900 tracking-tighter text-lg">pulgosos</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#inicio">Inicio</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#servicios">Servicios</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#nosotros">Nosotros</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#blog">Consejos</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-slate-900 bg-accent-400 hover:bg-accent-500 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400" href="#contacto">
                        Pedir Turno
                    </a>

<button className="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-500 focus:outline-none">
<span className="iconify w-6 h-6" data-icon="lucide:menu" data-strokeWidth="1.5"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" id="inicio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
<span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
<span className="text-xs font-medium text-brand-900 uppercase tracking-wide">Urgencias 24hs disponibles</span>
</div>
<h1 className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6">
                    Cuidado experto para <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">tu mejor amigo.</span>
</h1>
<p className="mt-4 text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
                    En Pulgosos combinamos medicina veterinaria de vanguardia con un trato humano y cercano. Porque sabemos que no son solo mascotas, son familia.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20" href="https://wa.me/">
<span className="iconify mr-2 w-4 h-4" data-icon="lucide:message-circle" data-strokeWidth="1.5"></span>
                        Turno por WhatsApp
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-sm font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all group" href="#servicios">
                        Ver Servicios <span className="iconify ml-1 w-4 h-4 text-accent-500 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-brand-100/40 to-accent-100/30 rounded-full blur-3xl -z-10 opacity-70"></div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-t border-slate-100" id="servicios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Nuestros Servicios</h2>
<p className="mt-4 text-slate-500 max-w-xl">
                    Ofrecemos un ecosistema completo de salud para perros y gatos, desde prevención hasta cirugías complejas.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<span className="iconify text-brand-600 group-hover:text-white w-6 h-6 transition-colors" data-icon="lucide:stethoscope" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Consultas Clínicas</h3>
<p className="text-sm text-slate-500 leading-relaxed">Chequeos generales, diagnóstico preciso y planes de tratamiento personalizados para cada etapa de vida.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<span className="iconify text-brand-600 group-hover:text-white w-6 h-6 transition-colors" data-icon="lucide:syringe" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Vacunación</h3>
<p className="text-sm text-slate-500 leading-relaxed">Calendarios completos de inmunización para cachorros y adultos. Prevención garantizada.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<span className="iconify text-brand-600 group-hover:text-white w-6 h-6 transition-colors" data-icon="lucide:activity" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Cirugía y Diagnóstico</h3>
<p className="text-sm text-slate-500 leading-relaxed">Quirófano equipado con monitoreo y servicio de Rayos X / Ecografía para diagnósticos rápidos.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<span className="iconify text-brand-600 group-hover:text-white w-6 h-6 transition-colors" data-icon="lucide:scissors" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Peluquería Canina</h3>
<p className="text-sm text-slate-500 leading-relaxed">Baños medicados y estéticos. Cuidado del manto y la piel con productos hipoalergénicos.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<span className="iconify text-brand-600 group-hover:text-white w-6 h-6 transition-colors" data-icon="lucide:pill" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Farmacia y Pet Shop</h3>
<p className="text-sm text-slate-500 leading-relaxed">Medicamentos recetados, alimentos balanceados premium y accesorios seleccionados.</p>
</div>

<div className="group relative bg-brand-900 p-8 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-accent-400 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 border border-white/10">
<span className="iconify text-accent-400 w-6 h-6" data-icon="lucide:sparkles" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Planes de Salud</h3>
<p className="text-sm text-slate-300 leading-relaxed mb-4">Preguntá por nuestros planes mensuales que cubren todas las necesidades básicas.</p>
<a className="text-sm font-medium text-accent-400 hover:text-accent-300 inline-flex items-center transition-colors" href="#">
                            Saber más <span className="iconify ml-1 w-4 h-4" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="nosotros">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="mb-12 lg:mb-0">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 group">

<div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-brand-200">
<span className="iconify w-24 h-24 opacity-30" data-icon="lucide:image" data-strokeWidth="1"></span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent"></div>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-3 rounded-xl border border-slate-100 shadow-xl">
<div className="flex items-center gap-3">
<div className="bg-accent-100 p-2 rounded-full">
<span className="iconify text-accent-600 w-4 h-4" data-icon="lucide:award"></span>
</div>
<div>
<p className="text-xs font-bold text-slate-900">Excelencia Veterinaria</p>
<p className="text-[10px] text-slate-500">Certificada 2023</p>
</div>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Más que veterinarios, amantes de los animales.</h2>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                        Nacimos con una misión simple: tratar a cada paciente como si fuera nuestra propia mascota. En <span className="text-slate-900 font-medium">Pulgosos</span>, entendemos la ansiedad que genera una visita al médico, por eso creamos un ambiente tranquilo, libre de estrés.
                    </p>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                        Nuestro equipo está en constante capacitación para ofrecer los diagnósticos más certeros, pero sin perder esa calidez humana que nos caracteriza.
                    </p>
<ul className="space-y-4">
<li className="flex items-start">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center mt-0.5 mr-3 border border-accent-200">
<span className="iconify w-3 h-3" data-icon="lucide:check" data-strokeWidth="3"></span>
</span>
<span className="text-sm text-slate-600">Tecnología de diagnóstico moderna.</span>
</li>
<li className="flex items-start">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center mt-0.5 mr-3 border border-accent-200">
<span className="iconify w-3 h-3" data-icon="lucide:check" data-strokeWidth="3"></span>
</span>
<span className="text-sm text-slate-600">Espacios separados para gatos y perros (Fear Free).</span>
</li>
<li className="flex items-start">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center mt-0.5 mr-3 border border-accent-200">
<span className="iconify w-3 h-3" data-icon="lucide:check" data-strokeWidth="3"></span>
</span>
<span className="text-sm text-slate-600">Seguimiento post-consulta personalizado.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Confianza que se siente</h2>
<p className="mt-4 text-slate-500">Lo que dicen los dueños de nuestros pacientes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
<div className="flex items-center gap-1 text-accent-500 mb-4">
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Excelente atención. Salvaron a mi gato Simón de una urgencia renal. La calidez del Dr. Martín no tiene precio."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<span className="iconify w-4 h-4" data-icon="lucide:user"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Laura M.</p>
<p className="text-xs text-slate-500">Dueña de Simón</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
<div className="flex items-center gap-1 text-accent-500 mb-4">
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"La peluquería es impecable. Mi perro suele tener miedo pero aquí sale feliz y moviendo la cola. Súper recomendado."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<span className="iconify w-4 h-4" data-icon="lucide:user"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Carlos R.</p>
<p className="text-xs text-slate-500">Dueño de Rocky</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
<div className="flex items-center gap-1 text-accent-500 mb-4">
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify w-4 h-4" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Precios claros, instalaciones limpias y muy profesionales. Me explicaron todo el tratamiento con paciencia."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<span className="iconify w-4 h-4" data-icon="lucide:user"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Sofía G.</p>
<p className="text-xs text-slate-500">Dueña de Lola</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="contacto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Estamos para ayudarte</h2>
<p className="text-slate-500 mb-8">
                        Visitanos en nuestra clínica o contactanos para coordinar una visita a domicilio si tu mascota no puede movilizarse.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 text-brand-600">
<span className="iconify w-5 h-5" data-icon="lucide:map-pin" data-strokeWidth="1.5"></span>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Ubicación</h3>
<p className="text-sm text-slate-500 mt-1">Av. Libertador 2340, Ciudad.</p>
<a className="text-xs text-brand-600 hover:text-brand-700 font-medium mt-1 inline-block" href="#">Ver en Google Maps →</a>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 text-brand-600">
<span className="iconify w-5 h-5" data-icon="lucide:clock" data-strokeWidth="1.5"></span>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Horarios</h3>
<p className="text-sm text-slate-500 mt-1">Lun - Vie: 9:00 - 20:00 hs</p>
<p className="text-sm text-slate-500">Sábados: 9:00 - 14:00 hs</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 text-brand-600">
<span className="iconify w-5 h-5" data-icon="lucide:phone" data-strokeWidth="1.5"></span>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Contacto</h3>
<p className="text-sm text-slate-500 mt-1">+54 11 1234-5678</p>
<p className="text-sm text-slate-500">hola@pulgosos.com</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-4">Solicitud de turno rápido</h3>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="name">Nombre del dueño</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 text-sm focus:border-brand-500 focus:ring-brand-500 px-3 py-2 transition-colors outline-none border hover:bg-white" id="name" placeholder="Tu nombre" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="pet">Mascota</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 text-sm focus:border-brand-500 focus:ring-brand-500 px-3 py-2 transition-colors outline-none border hover:bg-white" id="pet" placeholder="Ej. Toby" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="type">Tipo</label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg border-slate-200 bg-slate-50 text-sm focus:border-brand-500 focus:ring-brand-500 px-3 py-2 transition-colors outline-none border hover:bg-white text-slate-500" id="type">
<option>Perro</option>
<option>Gato</option>
<option>Otro</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span className="iconify w-4 h-4" data-icon="lucide:chevron-down"></span>
</div>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Motivo</label>
<div className="flex gap-3 mt-2">
<label className="inline-flex items-center">
<input checked="" className="appearance-none w-4 h-4 border border-slate-300 rounded-full checked:bg-brand-600 checked:border-transparent focus:ring-2 focus:ring-brand-500 focus:ring-offset-1" name="reason" type="radio"/>
<span className="ml-2 text-xs text-slate-600">Consulta</span>
</label>
<label className="inline-flex items-center">
<input className="appearance-none w-4 h-4 border border-slate-300 rounded-full checked:bg-brand-600 checked:border-transparent focus:ring-2 focus:ring-brand-500 focus:ring-offset-1" name="reason" type="radio"/>
<span className="ml-2 text-xs text-slate-600">Vacuna</span>
</label>
<label className="inline-flex items-center">
<input className="appearance-none w-4 h-4 border border-slate-300 rounded-full checked:bg-brand-600 checked:border-transparent focus:ring-2 focus:ring-brand-500 focus:ring-offset-1" name="reason" type="radio"/>
<span className="ml-2 text-xs text-slate-600">Peluquería</span>
</label>
</div>
</div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-slate-900 bg-accent-400 hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 transition-all mt-2" type="button">
                            Enviar Solicitud
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-brand-900 border-t border-brand-800 py-12 text-slate-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-brand-800 p-1.5 rounded-lg">
<span className="iconify text-accent-400 w-5 h-5" data-icon="lucide:paw-print"></span>
</div>
<span className="text-sm font-semibold text-white">Pulgosos</span>
</div>
<p className="text-xs text-brand-200">
                © 2023 Veterinaria Pulgosos. Cuidando vidas con amor.
            </p>
<div className="flex gap-4">
<a className="text-brand-300 hover:text-accent-400 transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:instagram"></span>
</a>
<a className="text-brand-300 hover:text-accent-400 transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:facebook"></span>
</a>
<a className="text-brand-300 hover:text-accent-400 transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:twitter"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
