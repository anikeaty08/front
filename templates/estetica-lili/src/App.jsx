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
colors: {
rose: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
300: '#fda4af',
400: '#fb7185',
500: '#f43f5e', // Brand Primary
600: '#e11d48',
700: '#be123c',
800: '#9f1239',
900: '#881337',
},
zinc: {
850: '#1f2022', // Custom dark
}
},
fontSize: {
'xxs': '0.65rem',
},
letterSpacing: {
'tighter': '-0.04em',
'tight': '-0.02em',
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="font-semibold text-lg tracking-tight text-zinc-900">ESTÉTICA<span className="text-rose-500">LILI</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">Filosofía</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Tratamientos</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#process">Higiene</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#reviews">Reseñas</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center justify-center bg-zinc-900 text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all hover:scale-105" href="#book">
                    Agendar Cita
                </a>

<button className="md:hidden p-2 text-zinc-500 hover:bg-zinc-100 rounded-full">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-50/50 to-transparent -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
<span>Oferta nuevos clientes: 20% off en 1ª depilación</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.1]">
                    Revela tu brillo natural <br/>
<span className="text-zinc-400">y confianza.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed max-w-xl mb-10">
                    Experimenta el más alto estándar de higiene y confort. Nos especializamos en depilación de precisión y tratamientos estéticos diseñados para que te sientas cuidada y renovada.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-rose-500 text-white font-medium hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20" href="#book">
                        Reservar Visita
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white border border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50 transition-colors" href="#services">
                        Ver Menú
                    </a>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-24">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-100 pt-12">
<div className="flex flex-col gap-2">
<span className="iconify text-rose-500 mb-2" data-icon="lucide:shield-check" data-width="24"></span>
<h3 className="text-sm font-semibold text-zinc-900">100% Estéril</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Materiales de un solo uso y esterilización de grado médico.</p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify text-rose-500 mb-2" data-icon="lucide:award" data-width="24"></span>
<h3 className="text-sm font-semibold text-zinc-900">Expertas Certificadas</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Esteticistas licenciadas con entrenamiento especializado.</p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify text-rose-500 mb-2" data-icon="lucide:heart-handshake" data-width="24"></span>
<h3 className="text-sm font-semibold text-zinc-900">Técnica Sin Dolor</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Métodos exclusivos para minimizar las molestias.</p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify text-rose-500 mb-2" data-icon="lucide:calendar-check" data-width="24"></span>
<h3 className="text-sm font-semibold text-zinc-900">Agendamiento Fácil</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Reserva online 24/7 con confirmación inmediata.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Menú de Tratamientos</h2>
<p className="text-zinc-500 max-w-md">Servicios seleccionados diseñados para tu rutina de belleza. Elige una categoría para explorar.</p>
</div>
<a className="text-sm font-medium text-rose-600 hover:text-rose-700 flex items-center gap-1" href="#">
                    Descargar Lista de Precios <span className="iconify" data-icon="lucide:download" data-width="14"></span>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-rose-500" data-icon="lucide:feather" data-width="80"></span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6">
<span className="iconify" data-icon="lucide:droplet" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Depilación Corporal</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Piel suave como la seda usando nuestra cera dura hipoalergénica. Mínimo dolor, máximos resultados.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-600">Piernas Completas</span>
<span className="font-medium text-zinc-900">$18.000</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-600">Brasileño</span>
<span className="font-medium text-zinc-900">$22.000</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-600">Axilas</span>
<span className="font-medium text-zinc-900">$8.000</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-zinc-200 text-zinc-900 text-sm font-medium hover:border-rose-500 hover:text-rose-600 hover:bg-rose-50 transition-all" onclick="window.location.href='#book'">
                            Seleccionar Servicio
                        </button>
</div>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-rose-500" data-icon="lucide:eye" data-width="80"></span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6">
<span className="iconify" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Cejas y Pestañas</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Enmarca tu rostro perfectamente con nuestro diseño arquitectónico de cejas y lifting de pestañas.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-600">Diseño de Cejas</span>
<span className="font-medium text-zinc-900">$10.000</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-600">Laminado de Cejas</span>
<span className="font-medium text-zinc-900">$24.000</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-600">Lifting Pestañas + Tinte</span>
<span className="font-medium text-zinc-900">$30.000</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-zinc-200 text-zinc-900 text-sm font-medium hover:border-rose-500 hover:text-rose-600 hover:bg-rose-50 transition-all" onclick="window.location.href='#book'">
                            Seleccionar Servicio
                        </button>
</div>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-rose-500" data-icon="lucide:flower-2" data-width="80"></span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6">
<span className="iconify" data-icon="lucide:sun" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Cuidado de la Piel</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Tratamientos post-depilación para calmar, hidratar y prevenir vellos encarnados.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-600">Vajacial (Calmante)</span>
<span className="font-medium text-zinc-900">$20.000</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-600">Mascarilla Hydrojelly</span>
<span className="font-medium text-zinc-900">$8.000</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-600">Tratamiento Vellos</span>
<span className="font-medium text-zinc-900">$12.000</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-zinc-200 text-zinc-900 text-sm font-medium hover:border-rose-500 hover:text-rose-600 hover:bg-rose-50 transition-all" onclick="window.location.href='#book'">
                            Seleccionar Servicio
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-100">

<div className="absolute inset-0 bg-zinc-200 flex items-center justify-center text-zinc-400">
<span className="iconify opacity-20" data-icon="lucide:image" data-width="64"></span>
</div>
<img alt="Interior limpio de salón de estética" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur shadow-lg p-4 rounded-xl max-w-xs border border-white/20">
<div className="flex items-center gap-3 mb-2">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Protocolo de Bioseguridad</span>
</div>
<p className="text-sm font-medium text-zinc-900">Adherimos a estándares hospitalarios de saneamiento para cada cliente.</p>
</div>
</div>
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">La higiene es nuestro lenguaje del amor.</h2>
<p className="text-zinc-500 text-lg mb-8 leading-relaxed">
                        En Estética Lili, creemos que la belleza comienza con la seguridad. Hemos rediseñado la experiencia de depilación para que sea libre de ansiedad, enfocándonos en una limpieza impecable y materiales premium.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
<span className="iconify" data-icon="lucide:trash-2" data-width="20"></span>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Sin Doble Inmersión</h4>
<p className="text-sm text-zinc-500 mt-1">Nunca reutilizamos espátulas. Una vez que tocan la piel, van a la basura.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
<span className="iconify" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Esterilización Grado Hospitalario</h4>
<p className="text-sm text-zinc-500 mt-1">Todas las herramientas no desechables se esterilizan en autoclave.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
<span className="iconify" data-icon="lucide:heart" data-width="20"></span>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Ceras Hipoalergénicas</h4>
<p className="text-sm text-zinc-500 mt-1">Nuestra mezcla exclusiva de cera se adhiere al vello, no a la piel, reduciendo el dolor.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white" id="book">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-rose-400 font-medium text-sm tracking-wide uppercase">Reservaciones</span>
<h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4">Agenda tu cita</h2>
<p className="text-zinc-400">Selecciona tu servicio y horario preferido a continuación.</p>
</div>

<div className="bg-white rounded-2xl p-2 md:p-8 text-zinc-900 shadow-2xl">

<div className="flex items-center justify-between mb-8 px-4">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold">1</span>
<span className="text-sm font-medium hidden sm:block">Servicio</span>
</div>
<div className="h-px bg-zinc-200 flex-1 mx-4"></div>
<div className="flex items-center gap-2 opacity-40">
<span className="w-6 h-6 rounded-full bg-zinc-200 text-zinc-500 text-xs flex items-center justify-center font-bold">2</span>
<span className="text-sm font-medium hidden sm:block">Hora</span>
</div>
<div className="h-px bg-zinc-200 flex-1 mx-4"></div>
<div className="flex items-center gap-2 opacity-40">
<span className="w-6 h-6 rounded-full bg-zinc-200 text-zinc-500 text-xs flex items-center justify-center font-bold">3</span>
<span className="text-sm font-medium hidden sm:block">Info</span>
</div>
</div>

<div className="space-y-3">
<label className="cursor-pointer block relative">
<input checked="" className="custom-radio sr-only" name="service" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-4 hover:border-zinc-300 transition-all flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:text-zinc-700">
<span className="iconify" data-icon="lucide:droplet" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-sm sm:text-base">Depilación Brasileña</h4>
<p className="text-xs text-zinc-500">30 min • Incluye aceite calmante</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="font-semibold text-sm sm:text-base">$22.000</span>
<div className="check-icon w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center opacity-0 transform scale-75 transition-all">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
</div>
</div>
</label>
<label className="cursor-pointer block relative">
<input className="custom-radio sr-only" name="service" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-4 hover:border-zinc-300 transition-all flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:text-zinc-700">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-sm sm:text-base">Depilación Pierna Completa</h4>
<p className="text-xs text-zinc-500">45 min • Acabado suave</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="font-semibold text-sm sm:text-base">$18.000</span>
<div className="check-icon w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center opacity-0 transform scale-75 transition-all">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
</div>
</div>
</label>
<label className="cursor-pointer block relative">
<input className="custom-radio sr-only" name="service" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-4 hover:border-zinc-300 transition-all flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:text-zinc-700">
<span className="iconify" data-icon="lucide:eye" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-sm sm:text-base">Diseño de Cejas + Tinte</h4>
<p className="text-xs text-zinc-500">40 min • Mapeo personalizado</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="font-semibold text-sm sm:text-base">$14.000</span>
<div className="check-icon w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center opacity-0 transform scale-75 transition-all">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
</div>
</div>
</label>
</div>

<div className="mt-6 pt-6 border-t border-zinc-100">
<h5 className="text-sm font-medium mb-3">Complementos</h5>
<div className="flex flex-wrap gap-3">
<label className="inline-flex cursor-pointer select-none">
<input className="peer sr-only" type="checkbox"/>
<div className="px-3 py-2 rounded-lg border border-zinc-200 text-sm text-zinc-600 peer-checked:bg-rose-50 peer-checked:border-rose-200 peer-checked:text-rose-700 transition-colors">
                                + Mascarilla Hydrojelly ($8.000)
                            </div>
</label>
<label className="inline-flex cursor-pointer select-none">
<input className="peer sr-only" type="checkbox"/>
<div className="px-3 py-2 rounded-lg border border-zinc-200 text-sm text-zinc-600 peer-checked:bg-rose-50 peer-checked:border-rose-200 peer-checked:text-rose-700 transition-colors">
                                + Crema Anestésica ($4.000)
                            </div>
</label>
</div>
</div>

<div className="mt-8 flex justify-end">
<button className="bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 flex items-center gap-2 transition-all">
                        Seleccionar Fecha y Hora <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-100" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center mb-16 tracking-tight">Amado por la comunidad</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-zinc-50 p-8 rounded-2xl relative">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-600 text-sm leading-relaxed mb-6">"Finalmente encontré un lugar realmente limpio y profesional. La cera dura que usan cambia todo para la piel sensible. ¡Recomiendo mucho a Lili!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center text-rose-700 font-bold text-xs">SM</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Sarah M.</p>
<p className="text-xs text-zinc-400">Cliente Habitual</p>
</div>
</div>
</div>

<div className="bg-zinc-50 p-8 rounded-2xl relative">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-600 text-sm leading-relaxed mb-6">"Manejé 30 minutos solo para venir. El proceso de reserva es súper fácil y nunca se retrasan. Mis cejas nunca se han visto mejor."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-xs">JL</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Jessica L.</p>
<p className="text-xs text-zinc-400">Diseño de Cejas</p>
</div>
</div>
</div>

<div className="bg-zinc-50 p-8 rounded-2xl relative">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-600 text-sm leading-relaxed mb-6">"Primera vez haciéndome un brasileño y el personal me hizo sentir muy cómoda. Estudio muy higiénico, todo fue desechable."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-xs">AR</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Amanda R.</p>
<p className="text-xs text-zinc-400">Nueva Cliente</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold mb-8 text-center">Preguntas Frecuentes</h2>
<div className="space-y-4">
<details className="group bg-white border border-zinc-200 rounded-lg open:ring-1 open:ring-rose-100 open:bg-zinc-50 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900">
<span>¿Qué largo debe tener mi vello para la depilación?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-zinc-500 text-sm px-5 pb-5 leading-relaxed">
                        Para mejores resultados, el vello debe tener aproximadamente 0.5 cm de largo (el tamaño de un grano de arroz). Esto suele tomar de 2 a 3 semanas de crecimiento después de rasurarse.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-lg open:ring-1 open:ring-rose-100 open:bg-zinc-50 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900">
<span>¿Es doloroso?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-zinc-500 text-sm px-5 pb-5 leading-relaxed">
                        El dolor varía según la persona, pero nuestra cera dura especializada y técnica reducen significativamente las molestias. Tomar un ibuprofeno 30 minutos antes puede ayudar, así como evitar la cafeína antes de tu cita.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-lg open:ring-1 open:ring-rose-100 open:bg-zinc-50 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900">
<span>¿Cuál es su política de cancelación?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-zinc-500 text-sm px-5 pb-5 leading-relaxed">
                        Requerimos un aviso de 24 horas para cancelaciones. Las cancelaciones hechas dentro de las 24 horas pueden estar sujetas a un cargo del 50% del precio del servicio.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-zinc-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="font-semibold text-lg tracking-tight text-white block mb-4">ESTÉTICA<span className="text-rose-500">LILI</span></span>
<p className="text-xs leading-relaxed max-w-xs mb-6">
                        Servicios estéticos premium enfocados en higiene, confort y resultados. Realzando tu belleza natural desde 2018.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:message-circle" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Servicios</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-rose-400 transition-colors" href="#">Depilación</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Diseño de Cejas</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Lifting de Pestañas</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Faciales</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Empresa</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-rose-400 transition-colors" href="#">Sobre Nosotros</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Política de Higiene</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Carreras</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Visítanos</h4>
<address className="not-italic text-xs leading-relaxed space-y-2">
<p className="flex gap-2">
<span className="iconify mt-0.5" data-icon="lucide:map-pin" data-width="14"></span>
                            Av. Santa Fe 1234, Piso 2<br/>Palermo, Buenos Aires
                        </p>
<p className="flex gap-2">
<span className="iconify mt-0.5" data-icon="lucide:clock" data-width="14"></span>
                            Lun-Sáb: 9am - 7pm<br/>Dom: Cerrado
                        </p>
<p className="flex gap-2">
<span className="iconify mt-0.5" data-icon="lucide:phone" data-width="14"></span>
                            +54 11 1234-5678
                        </p>
</address>
</div>
</div>
<div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Estética Lili. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Política de Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Términos de Servicio</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
