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
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
juaneda: {
blue: '#1F3B70',     // Primary
light: '#9BC8E6',    // Secondary Blue
pale: '#D9EFFD',     // Pale Blue
sand: '#DDC9A3',     // Warmth
green: '#A7D9C7',    // Health
yellow: '#FFF197',   // Highlight
red: '#D70F14',      // Medical Care/Urgency
}
},
spacing: {
'128': '32rem',
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(31, 59, 112, 0.08)',
'card': '0 10px 40px -10px rgba(31, 59, 112, 0.1)',
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
      

<div className="bg-white border-b border-gray-100 hidden lg:block">
<div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-xs font-medium text-juaneda-blue/70">
<div className="flex space-x-6">
<a className="hover:text-juaneda-blue transition-colors" href="#">Particulares</a>
<a className="hover:text-juaneda-blue transition-colors" href="#">Aseguradoras</a>
<a className="hover:text-juaneda-blue transition-colors" href="#">Profesionales</a>
<a className="hover:text-juaneda-blue transition-colors" href="#">International Patient</a>
</div>
<div className="flex items-center space-x-6">
<a className="flex items-center space-x-1 hover:text-juaneda-blue" href="#">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
<span>900 123 456</span>
</a>
<a className="flex items-center space-x-1 hover:text-juaneda-blue" href="#">
<iconify-icon icon="solar:user-circle-linear" width="14"></iconify-icon>
<span>Portal del Paciente</span>
</a>
<div className="flex space-x-2 border-l pl-4 border-gray-200">
<span className="text-juaneda-blue cursor-pointer">ES</span>
<span className="text-gray-400 hover:text-juaneda-blue cursor-pointer transition-colors">CA</span>
<span className="text-gray-400 hover:text-juaneda-blue cursor-pointer transition-colors">EN</span>
<span className="text-gray-400 hover:text-juaneda-blue cursor-pointer transition-colors">DE</span>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col leading-none group" href="#">
<span className="text-2xl font-bold tracking-tight text-juaneda-blue group-hover:opacity-90 transition-opacity">JUANEDA</span>
<span className="text-[0.65rem] font-semibold tracking-[0.2em] text-juaneda-blue/60 uppercase">Hospitales</span>
</a>

<nav className="hidden lg:flex items-center space-x-8">
<a className="text-sm font-medium text-juaneda-blue hover:text-juaneda-light transition-colors" href="#centros">Centros</a>
<a className="text-sm font-medium text-juaneda-blue hover:text-juaneda-light transition-colors" href="#especialidades">Especialidades</a>
<a className="text-sm font-medium text-juaneda-blue hover:text-juaneda-light transition-colors" href="#equipo">Cuadro Médico</a>
<a className="text-sm font-medium text-juaneda-blue hover:text-juaneda-light transition-colors" href="#nosotros">Conócenos</a>
<a className="text-sm font-medium text-juaneda-blue hover:text-juaneda-light transition-colors" href="#blog">Actualidad</a>
</nav>

<div className="flex items-center space-x-4">
<a className="hidden md:flex items-center space-x-2 text-sm font-semibold text-juaneda-red bg-juaneda-red/5 px-4 py-2.5 rounded-full hover:bg-juaneda-red hover:text-white transition-all group" href="#">
<iconify-icon className="text-lg group-hover:text-white transition-colors" icon="solar:medical-kit-linear"></iconify-icon>
<span>Urgencias 24h</span>
</a>
<a className="flex items-center space-x-2 text-sm font-semibold text-white bg-juaneda-blue px-6 py-2.5 rounded-full hover:bg-juaneda-blue/90 hover:shadow-lg transition-all transform hover:-translate-y-0.5" href="#">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
<span>Cita Online</span>
</a>
<button className="lg:hidden text-juaneda-blue text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative min-h-[85vh] flex items-center bg-juaneda-pale overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Doctora sonriendo con paciente, luz cálida" className="w-full h-full object-cover object-center opacity-90" src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
<div className="max-w-2xl">
<span className="inline-block py-1 px-3 rounded-full bg-juaneda-sand/30 text-juaneda-blue text-xs font-semibold tracking-wider uppercase mb-6 border border-juaneda-sand">
                    Proyecto Ítaca 2025
                </span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-juaneda-blue leading-[1.1] mb-6 text-balance">
                    Curar empieza <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-juaneda-blue to-juaneda-light">en cuidar.</span>
</h1>
<p className="text-lg md:text-xl text-juaneda-blue/80 mb-10 max-w-lg leading-relaxed font-light">
                    Bienvenido a un modelo hospitalario que pone a las personas en el centro. Tecnología avanzada con corazón humano.
                </p>

<div className="bg-white p-2 rounded-3xl shadow-soft max-w-3xl flex flex-col md:flex-row items-center gap-2 border border-gray-100">

<div className="relative flex-grow w-full md:w-auto group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-juaneda-blue/40 text-xl group-focus-within:text-juaneda-blue transition-colors" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-12 pr-4 py-4 bg-transparent border-none text-juaneda-blue placeholder-gray-400 focus:ring-0 text-sm font-medium" placeholder="¿Qué especialista, prueba o médico necesitas?" type="text"/>
</div>

<div className="hidden md:block w-px h-8 bg-gray-200"></div>

<div className="relative w-full md:w-1/3 group border-t md:border-t-0 border-gray-100">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-juaneda-blue/40 text-xl group-focus-within:text-juaneda-blue transition-colors" icon="solar:map-point-linear"></iconify-icon>
</div>
<select className="block w-full pl-12 pr-10 py-4 bg-transparent border-none text-juaneda-blue focus:ring-0 text-sm font-medium appearance-none cursor-pointer">
<option>Todos los centros</option>
<option>Clínica Juaneda</option>
<option>Hospital Juaneda Miramar</option>
<option>Juaneda Muro</option>
</select>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
<iconify-icon className="text-juaneda-blue/40" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<button className="w-full md:w-auto bg-juaneda-blue text-white rounded-2xl px-8 py-4 font-semibold hover:bg-juaneda-blue/90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-juaneda-blue/20">
<span>Buscar</span>
</button>
</div>

<div className="mt-6 flex flex-wrap gap-3 text-sm text-juaneda-blue/70">
<span className="opacity-60">Búsquedas frecuentes:</span>
<a className="hover:text-juaneda-blue underline decoration-juaneda-sand underline-offset-4" href="#">Traumatología</a>
<a className="hover:text-juaneda-blue underline decoration-juaneda-sand underline-offset-4" href="#">Ginecología</a>
<a className="hover:text-juaneda-blue underline decoration-juaneda-sand underline-offset-4" href="#">Análisis clínicos</a>
</div>
</div>
</div>
</section>

<section className="relative z-20 -mt-10 max-w-7xl mx-auto px-6 pb-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<a className="group bg-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-juaneda-blue/10" href="#">
<div className="w-12 h-12 rounded-xl bg-juaneda-pale text-juaneda-blue flex items-center justify-center mb-4 group-hover:bg-juaneda-blue group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:calendar-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-juaneda-blue mb-1">Cita Previa</h3>
<p className="text-xs text-gray-500 leading-relaxed">Gestiona tus visitas presenciales o videoconsultas.</p>
</a>

<a className="group bg-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-juaneda-blue/10" href="#">
<div className="w-12 h-12 rounded-xl bg-juaneda-sand/20 text-juaneda-blue flex items-center justify-center mb-4 group-hover:bg-juaneda-sand group-hover:text-juaneda-blue transition-colors">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-juaneda-blue mb-1">Cuadro Médico</h3>
<p className="text-xs text-gray-500 leading-relaxed">Encuentra a tu especialista entre más de 400 profesionales.</p>
</a>

<a className="group bg-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-juaneda-blue/10" href="#">
<div className="w-12 h-12 rounded-xl bg-juaneda-green/20 text-juaneda-blue flex items-center justify-center mb-4 group-hover:bg-juaneda-green group-hover:text-juaneda-blue transition-colors">
<iconify-icon height="24" icon="solar:file-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-juaneda-blue mb-1">Resultados</h3>
<p className="text-xs text-gray-500 leading-relaxed">Accede a tus informes y pruebas diagnósticas.</p>
</a>

<a className="group bg-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-juaneda-red/20" href="#">
<div className="w-12 h-12 rounded-xl bg-juaneda-red/10 text-juaneda-red flex items-center justify-center mb-4 group-hover:bg-juaneda-red group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-juaneda-red mb-1">Urgencias</h3>
<p className="text-xs text-gray-500 leading-relaxed">Tiempo de espera medio: <span className="font-bold">12 min</span></p>
</a>
</div>
</section>

<section className="py-20 md:py-28 bg-white" id="nosotros">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Mano amiga" className="w-full h-64 object-cover rounded-2xl rounded-tr-[4rem]" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Instalaciones modernas" className="w-full h-64 object-cover rounded-2xl rounded-bl-[4rem] mt-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -z-10 top-10 -left-10 w-40 h-40 bg-juaneda-sand/20 rounded-full blur-3xl"></div>
</div>

<div className="w-full lg:w-1/2">
<h4 className="text-juaneda-blue font-semibold tracking-widest text-xs uppercase mb-4">Nuestro Propósito</h4>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-juaneda-blue mb-8 text-balance">
                        Humanizar la salud es nuestra forma de innovar.
                    </h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        En Juaneda Hospitales entendemos que detrás de cada historial clínico hay una historia de vida. El Proyecto Ítaca nace para transformar la experiencia sanitaria, integrando la mejor tecnología con una empatía profunda.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start space-x-3">
<iconify-icon className="text-juaneda-green text-xl mt-1 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-gray-700 font-medium">Atención basada en valores: Empatía y respeto.</span>
</li>
<li className="flex items-start space-x-3">
<iconify-icon className="text-juaneda-green text-xl mt-1 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-gray-700 font-medium">Tecnología no invasiva al servicio del paciente.</span>
</li>
<li className="flex items-start space-x-3">
<iconify-icon className="text-juaneda-green text-xl mt-1 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-gray-700 font-medium">Un equipo que te escucha y acompaña.</span>
</li>
</ul>
<a className="inline-flex items-center text-juaneda-blue font-semibold border-b border-juaneda-blue pb-1 hover:text-juaneda-light hover:border-juaneda-light transition-colors" href="#">
                        Descubre el Modelo Juaneda
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-juaneda-pale/30" id="especialidades">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-juaneda-blue mb-3 tracking-tight">Especialidades destacadas</h2>
<p className="text-gray-500">Unidades de excelencia médica para cuidar de ti.</p>
</div>
<a className="hidden md:flex items-center text-sm font-semibold text-juaneda-blue bg-white border border-gray-200 px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors" href="#">
                    Ver todas
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-card transition-all border border-gray-100 overflow-hidden" href="#">
<div className="absolute top-0 right-0 w-32 h-32 bg-juaneda-light/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-juaneda-blue mb-6" icon="solar:heart-angle-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-juaneda-blue mb-2">Cardiología</h3>
<p className="text-sm text-gray-500 mb-6 line-clamp-2">Prevención, diagnóstico y tratamiento con la tecnología más avanzada en imagen cardíaca.</p>
<span className="text-sm font-semibold text-juaneda-blue group-hover:underline decoration-juaneda-sand underline-offset-4">Saber más</span>
</div>
</a>

<a className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-card transition-all border border-gray-100 overflow-hidden" href="#">
<div className="absolute top-0 right-0 w-32 h-32 bg-juaneda-sand/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-juaneda-blue mb-6" icon="solar:bone-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-juaneda-blue mb-2">Traumatología</h3>
<p className="text-sm text-gray-500 mb-6 line-clamp-2">Cirugía ortopédica y traumatología deportiva. Recupera tu movimiento.</p>
<span className="text-sm font-semibold text-juaneda-blue group-hover:underline decoration-juaneda-sand underline-offset-4">Saber más</span>
</div>
</a>

<a className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-card transition-all border border-gray-100 overflow-hidden" href="#">
<div className="absolute top-0 right-0 w-32 h-32 bg-juaneda-green/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-juaneda-blue mb-6" icon="solar:women-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-juaneda-blue mb-2">Ginecología y Obstetricia</h3>
<p className="text-sm text-gray-500 mb-6 line-clamp-2">Acompañamiento integral a la mujer en todas las etapas de su vida.</p>
<span className="text-sm font-semibold text-juaneda-blue group-hover:underline decoration-juaneda-sand underline-offset-4">Saber más</span>
</div>
</a>

<a className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-card transition-all border border-gray-100 overflow-hidden" href="#">
<div className="absolute top-0 right-0 w-32 h-32 bg-juaneda-pale/40 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-juaneda-blue mb-6" icon="solar:test-tube-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-juaneda-blue mb-2">Oncología Integral</h3>
<p className="text-sm text-gray-500 mb-6 line-clamp-2">Tratamientos personalizados y soporte emocional para el paciente y su familia.</p>
<span className="text-sm font-semibold text-juaneda-blue group-hover:underline decoration-juaneda-sand underline-offset-4">Saber más</span>
</div>
</a>

<a className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-card transition-all border border-gray-100 overflow-hidden" href="#">
<div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-juaneda-blue mb-6" icon="solar:smile-circle-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-juaneda-blue mb-2">Juaneda Dental</h3>
<p className="text-sm text-gray-500 mb-6 line-clamp-2">Odontología avanzada, estética e implantología con sedación consciente.</p>
<span className="text-sm font-semibold text-juaneda-blue group-hover:underline decoration-juaneda-sand underline-offset-4">Saber más</span>
</div>
</a>

<a className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-card transition-all border border-juaneda-sand/30 overflow-hidden" href="#">
<div className="absolute top-0 right-0 w-32 h-32 bg-juaneda-sand/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-juaneda-blue mb-6" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-juaneda-blue mb-2">Juaneda Fertility</h3>
<p className="text-sm text-gray-500 mb-6 line-clamp-2">Hacemos realidad tu sueño de familia con las tasas de éxito más altas.</p>
<span className="text-sm font-semibold text-juaneda-blue group-hover:underline decoration-juaneda-sand underline-offset-4">Saber más</span>
</div>
</a>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center text-sm font-semibold text-juaneda-blue border border-gray-200 px-5 py-2.5 rounded-full" href="#">
                    Ver todas las especialidades
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="centros">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-juaneda-blue mb-4 tracking-tight">Cerca de ti, estés donde estés</h2>
<p className="text-gray-500 text-lg">Nuestra red asistencial cubre todas las necesidades sanitarias en Baleares.</p>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<div className="w-full lg:w-1/3 space-y-4">

<div className="p-6 rounded-2xl bg-juaneda-blue text-white cursor-pointer shadow-lg transform scale-[1.02] transition-all">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg">Clínica Juaneda</h3>
<iconify-icon className="text-juaneda-sand text-xl" icon="solar:hospital-linear"></iconify-icon>
</div>
<p className="text-white/70 text-sm mb-4">Carrer de Company, 30, Palma</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/10 rounded text-xs">Hospital 24h</span>
<span className="px-2 py-1 bg-white/10 rounded text-xs">Urgencias</span>
</div>
</div>

<div className="p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-md cursor-pointer transition-all group">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-juaneda-blue">Hospital Juaneda Miramar</h3>
<iconify-icon className="text-gray-400 group-hover:text-juaneda-blue text-xl transition-colors" icon="solar:hospital-linear"></iconify-icon>
</div>
<p className="text-gray-500 text-sm">Camí de Son Rapinya, 1, Palma</p>
</div>

<div className="p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-md cursor-pointer transition-all group">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-juaneda-blue">Juaneda Muro</h3>
<iconify-icon className="text-gray-400 group-hover:text-juaneda-blue text-xl transition-colors" icon="solar:health-linear"></iconify-icon>
</div>
<p className="text-gray-500 text-sm">Carretera Muro-Alcudia, Muro</p>
</div>
<a className="block text-center text-juaneda-blue font-semibold text-sm py-4 hover:underline" href="#">Ver todos los centros (30+)</a>
</div>

<div className="w-full lg:w-2/3 h-[500px] bg-gray-100 rounded-3xl overflow-hidden relative">

<img alt="Mapa" className="w-full h-full object-cover opacity-50 grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="relative group">
<div className="w-4 h-4 bg-juaneda-red rounded-full animate-ping absolute"></div>
<div className="w-10 h-10 bg-juaneda-blue rounded-full border-4 border-white shadow-xl flex items-center justify-center relative z-10 cursor-pointer hover:scale-110 transition-transform">
<iconify-icon className="text-white text-lg" icon="solar:hospital-bold"></iconify-icon>
</div>

<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-40 bg-white p-3 rounded-xl shadow-xl text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
<p className="text-xs font-bold text-juaneda-blue">Clínica Juaneda</p>
<p className="text-[10px] text-gray-500">Abierto 24h</p>
<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold text-juaneda-blue tracking-tight">Actualidad y Salud</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-juaneda-blue text-white flex items-center justify-center shadow-lg hover:bg-juaneda-blue/90 transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 h-56 relative">
<img alt="Tecnología médica" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-juaneda-blue uppercase tracking-wider">Innovación</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-juaneda-blue mb-3 group-hover:text-juaneda-light transition-colors leading-tight">
                            Incorporamos el nuevo robot Da Vinci Xi para cirugía mínimamente invasiva.
                        </h3>
<p className="text-gray-500 text-sm line-clamp-2 mb-4">
                            Un paso más en nuestro compromiso con la excelencia quirúrgica y la recuperación rápida de nuestros pacientes.
                        </p>
<span className="text-sm font-medium text-juaneda-blue flex items-center">
                            Leer noticia <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 h-56 relative">
<img alt="Consejos salud" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-juaneda-green uppercase tracking-wider">Vida Saludable</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-juaneda-blue mb-3 group-hover:text-juaneda-light transition-colors leading-tight">
                            Cómo cuidar tu corazón: 5 consejos de nuestros cardiólogos.
                        </h3>
<p className="text-gray-500 text-sm line-clamp-2 mb-4">
                            La prevención es la mejor medicina. Descubre hábitos sencillos que transforman tu salud cardiovascular.
                        </p>
<span className="text-sm font-medium text-juaneda-blue flex items-center">
                            Leer artículo <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 h-56 relative">
<img alt="Corporativo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-juaneda-sand uppercase tracking-wider">Corporativo</div>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-juaneda-blue mb-3 group-hover:text-juaneda-light transition-colors leading-tight">
                            Memoria 2024: Consolidando un modelo de salud humana y sostenible.
                        </h3>
<p className="text-gray-500 text-sm line-clamp-2 mb-4">
                            Presentamos los resultados de un año marcado por el crecimiento de nuestra red y el compromiso social.
                        </p>
<span className="text-sm font-medium text-juaneda-blue flex items-center">
                            Ver informe <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>
</div>
</div>
</section>

<section className="bg-juaneda-blue relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
<div className="md:w-1/2 text-white mb-10 md:mb-0">
<h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">Tu salud, en tu bolsillo.</h2>
<p className="text-juaneda-pale text-lg mb-8 max-w-md">
                    Descarga la App de Juaneda. Pide citas, consulta resultados y gestiona tu salud desde cualquier lugar, de forma segura y sencilla.
                </p>
<div className="flex gap-4">
<button className="bg-white text-juaneda-blue px-6 py-3 rounded-xl font-semibold flex items-center hover:bg-gray-100 transition-colors">
<iconify-icon className="text-2xl mr-2" icon="solar:apple-linear"></iconify-icon>
                        App Store
                    </button>
<button className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-xl font-semibold flex items-center hover:bg-white/10 transition-colors">
<iconify-icon className="text-2xl mr-2" icon="solar:play-linear"></iconify-icon>
                        Google Play
                    </button>
</div>
</div>

<div className="md:w-1/2 flex justify-center relative">
<div className="w-64 h-96 border-4 border-white/20 bg-white/10 backdrop-blur-sm rounded-[3rem] relative shadow-2xl transform rotate-6">
<div className="absolute inset-4 bg-white rounded-[2rem] flex flex-col items-center justify-center p-6 text-center">
<iconify-icon className="text-juaneda-blue text-5xl mb-4" icon="solar:user-heart-bold"></iconify-icon>
<h4 className="text-juaneda-blue font-bold text-lg">Hola, María</h4>
<p className="text-xs text-gray-400 mb-6">Tienes una cita mañana</p>
<div className="w-full h-12 bg-juaneda-blue rounded-xl"></div>
<div className="w-full h-2 bg-gray-100 rounded-full mt-4"></div>
<div className="w-2/3 h-2 bg-gray-100 rounded-full mt-2"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
</section>

<footer className="bg-juaneda-blue pt-20 pb-10 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="inline-block mb-6" href="#">
<span className="text-3xl font-bold tracking-tight text-white block">JUANEDA</span>
<span className="text-[0.65rem] font-semibold tracking-[0.2em] text-white/60 uppercase">Hospitales</span>
</a>
<p className="text-white/60 text-sm leading-relaxed mb-6">
                        Una red asistencial comprometida con las personas. Cuidamos de ti con la tecnología más avanzada y la calidez que mereces.
                    </p>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-juaneda-blue transition-all" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-juaneda-blue transition-all" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-juaneda-blue transition-all" href="#">
<iconify-icon icon="solar:linkedin-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-semibold mb-6">Pacientes</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-white transition-colors" href="#">Pedir Cita</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cuadro Médico</a></li>
<li><a className="hover:text-white transition-colors" href="#">Portal del Paciente</a></li>
<li><a className="hover:text-white transition-colors" href="#">Aseguradoras</a></li>
<li><a className="hover:text-white transition-colors" href="#">International Patient</a></li>
<li><a className="hover:text-white transition-colors" href="#">Guía de acogida</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold mb-6">Grupo Juaneda</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-white transition-colors" href="#">Quiénes somos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Responsabilidad Social</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sala de Prensa</a></li>
<li><a className="hover:text-white transition-colors" href="#">Trabaja con nosotros</a></li>
<li><a className="hover:text-white transition-colors" href="#">Calidad y Seguridad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold mb-6">Contacto</h4>
<ul className="space-y-4 text-sm text-white/70">
<li className="flex items-start space-x-3">
<iconify-icon className="text-xl mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>Carrer de Company, 30<br/>07014 Palma, Illes Balears</span>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
<span className="text-white font-medium">900 123 456</span>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
<span>info@juaneda.es</span>
</li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
<p>© 2025 Juaneda Hospitales. Todos los derechos reservados.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Aviso Legal</a>
<a className="hover:text-white" href="#">Política de Privacidad</a>
<a className="hover:text-white" href="#">Política de Cookies</a>
<a className="hover:text-white" href="#">Canal Ético</a>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-[10px] text-white/30 uppercase tracking-widest">Designed for Proyecto ITACA 2025</p>
</div>
</div>
</footer>

    </>
  );
}
