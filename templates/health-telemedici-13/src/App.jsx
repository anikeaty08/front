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
tamma: {
DEFAULT: '#78BE43', // Primary Green
dark: '#2E7D32',    // Secondary
accent: '#FF6F61',  // Accent
bg: '#F5F5F5',      // Background Accent
text: '#333333'     // Text
}
},
fontFamily: {
heading: ['Quattrocento', 'serif'],
body: ['Lora', 'serif']
},
letterSpacing: {
tightest: '-0.025em'
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'hover': '0 10px 25px -5px rgba(120, 190, 67, 0.15)'
}
}
}
}



        // Simple script for mobile menu toggle interaction
        document.querySelector('button.lg\\:hidden').addEventListener('click', function() {
            const nav = document.querySelector('nav');
            alert('Menú móvil: Funcionalidad de expansión aquí.');
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="block group" href="#">

<img alt="Tamma Group" className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity" src="logo.png"/>
</a>

<div className="hidden lg:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-tamma transition-colors" href="#inicio">Inicio</a>
<a className="hover:text-tamma transition-colors text-sm font-medium text-gray-600" href="#smart-pharmacy">Smart Pharmacy</a>
<a className="text-sm font-medium text-gray-600 hover:text-tamma transition-colors" href="#portafolio">Portafolio</a>
<a className="text-sm font-medium text-gray-600 hover:text-tamma transition-colors" href="#telemedicina">Telemedicina</a>
<a className="text-sm font-medium text-gray-600 hover:text-tamma transition-colors" href="#educacion">Educación</a>
<a className="bg-tamma text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-tamma-dark transition-all shadow-sm hover:shadow-hover" href="#contacto">
                        CONTACTO
                    </a>
</div>

<button className="lg:hidden text-gray-600">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="inicio">
<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-white"></div>

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-tamma/10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tamma-bg border border-gray-200 mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-tamma animate-pulse"></span>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Ecosistema Integral de Salud</span>
</div>
<h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-8">
                Innovación científica <br/>
<span className="text-tamma italic font-serif">al servicio de tu bienestar.</span>
</h1>
<p className="font-body text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Proveer servicios de farmacia inteligente, un portafolio premium de productos de salud y estética, y telemedicina avanzada para una vida plena.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-tamma text-white text-sm font-semibold rounded-full hover:bg-tamma-dark transition-all shadow-lg shadow-tamma/20 flex items-center justify-center gap-2" href="#servicios">
                    Explorar Servicios
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-700 border border-gray-200 text-sm font-semibold rounded-full hover:bg-gray-50 transition-all flex items-center justify-center gap-2" href="https://wa.me/">
<svg aria-hidden="true" className="iconify text-tamma iconify--lucide" data-icon="lucide:message-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Consultar por WhatsApp
                </a>
</div>
</div>

<div className="mt-20 border-y border-gray-100 bg-white/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<p className="text-3xl font-heading font-semibold text-tamma">15k+</p>
<p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Pacientes Atendidos</p>
</div>
<div className="text-center">
<p className="text-3xl font-heading font-semibold text-tamma">98%</p>
<p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Satisfacción</p>
</div>
<div className="text-center">
<p className="text-3xl font-heading font-semibold text-tamma">24/7</p>
<p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Soporte Médico</p>
</div>
<div className="text-center">
<p className="text-3xl font-heading font-semibold text-tamma">50+</p>
<p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Especialistas</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="servicios">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
<div className="">
<h2 className="font-heading text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
                        Nuestros Servicios
                    </h2>
<div className="h-1 w-20 bg-tamma rounded-full"></div>
</div>
<p className="text-gray-600 text-lg leading-relaxed">
                    Integramos tecnología y salud humana para ofrecer una experiencia médica sin fricciones. Desde la consulta hasta la entrega de su tratamiento.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-tamma/30 transition-all duration-300 hover:shadow-hover">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-tamma mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:pill" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7m-2-12l7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">Smart Pharmacy</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Gestión inteligente de recetas, recordatorios automatizados y entrega a domicilio de medicamentos.
                    </p>
<a className="inline-flex items-center text-tamma text-sm font-semibold hover:text-tamma-dark transition-colors" href="#smart-pharmacy">
                        Ver más <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-tamma/30 transition-all duration-300 hover:shadow-hover">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-tamma mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">Portafolio Premium</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Productos exclusivos Pro Age, insumos médicos de alta gama y soluciones estéticas certificadas.
                    </p>
<a className="inline-flex items-center text-tamma text-sm font-semibold hover:text-tamma-dark transition-colors" href="#portafolio">
                        Ver catálogo <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-tamma/30 transition-all duration-300 hover:shadow-hover">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-tamma mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:video" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
</div>
<h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">Telemedicina</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Consultas virtuales con especialistas, diagnósticos rápidos y seguimiento continuo desde su hogar.
                    </p>
<a className="inline-flex items-center text-tamma text-sm font-semibold hover:text-tamma-dark transition-colors" href="#telemedicina">
                        Agendar cita <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-tamma-bg border-y border-gray-200">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<svg aria-hidden="true" className="iconify text-tamma text-5xl mx-auto mb-6 iconify--lucide" data-icon="lucide:message-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h2 className="font-heading text-3xl font-semibold text-gray-900 tracking-tight mb-4">¿Necesitas asistencia inmediata?</h2>
<p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Nuestro equipo de farmacéuticos y especialistas está disponible en WhatsApp para resolver tus dudas.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#20b858] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="https://wa.me/">
<svg aria-hidden="true" className="iconify mr-2 text-xl iconify--lucide" data-icon="lucide:message-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Chatear con un experto
            </a>
</div>
</section>

<section className="py-24 overflow-hidden" id="smart-pharmacy">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 aspect-[4/3] bg-gray-100">

<div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-gray-300 text-9xl iconify--lucide" data-icon="lucide:package-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 16l2 2l4-4"></path><path className="" d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"></path><path className="" d="M3.29 7L12 12l8.71-5M12 22V12"></path></g></svg>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-2xl border border-gray-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-tamma/10 flex items-center justify-center text-tamma">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<p className="text-xs font-semibold uppercase text-gray-500">Tiempo de entrega</p>
<p className="text-sm font-bold text-gray-900">Menos de 24 horas</p>
</div>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<span className="text-tamma font-semibold tracking-wider text-xs uppercase mb-2 block">Tecnología y Salud</span>
<h2 className="font-heading text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
                        Smart Pharmacy: Tu salud automatizada
                    </h2>
<p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Olvídate de las filas y del desabastecimiento. Nuestra farmacia inteligente gestiona tus recetas recurrentes y asegura que siempre tengas tu tratamiento a tiempo.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-tamma mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-gray-700 text-sm">Recordatorios de toma de medicamentos vía App/SMS.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-tamma mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-gray-700 text-sm">Validación farmacéutica de interacciones.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-tamma mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-gray-700 text-sm">Logística de cadena de frío certificada.</span>
</li>
</ul>
<div className="mt-10">
<button className="text-tamma font-semibold text-sm hover:text-tamma-dark flex items-center group">
                            Conoce cómo funciona
                            <svg aria-hidden="true" className="iconify ml-2 group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-tamma-bg" id="portafolio">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-heading text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Portafolio Premium</h2>
<p className="text-gray-600">Una selección curada de productos para el cuidado integral y estético.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
<div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
<svg aria-hidden="true" className="iconify text-gray-300 text-6xl group-hover:scale-105 transition-transform duration-500 iconify--lucide" data-icon="lucide:sparkles" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase text-gray-800 shadow-sm">Pro Age</div>
</div>
<div className="p-6">
<h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">Línea Dermoestética</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Soluciones avanzadas para el cuidado de la piel con respaldo dermatológico.</p>
<button className="w-full py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">Ver Detalles</button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
<div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
<svg aria-hidden="true" className="iconify text-gray-300 text-6xl group-hover:scale-105 transition-transform duration-500 iconify--lucide" data-icon="lucide:stethoscope" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></g></svg>
<div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase text-tamma shadow-sm">Clínico</div>
</div>
<div className="p-6">
<h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">Insumos Médicos</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Equipamiento y suministros de alta calidad para profesionales y cuidados en casa.</p>
<button className="w-full py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">Ver Detalles</button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
<div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
<svg aria-hidden="true" className="iconify text-gray-300 text-6xl group-hover:scale-105 transition-transform duration-500 iconify--lucide" data-icon="lucide:heart-pulse" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
</div>
<div className="p-6">
<h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">Salud Preventiva</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Suplementos y vitaminas formulados para potenciar tu sistema inmunológico.</p>
<button className="w-full py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">Ver Detalles</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="educacion">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-tamma font-semibold tracking-wider text-xs uppercase mb-2 block">Recursos Educativos</span>
<h2 className="font-heading text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">Blog &amp; Eventos</h2>
</div>
<a className="text-sm font-semibold text-gray-600 hover:text-tamma transition-colors flex items-center" href="#">
                    Ver todos los artículos <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<article className="flex flex-col h-full justify-between">
<div className="relative w-full h-64 rounded-2xl bg-gray-100 overflow-hidden mb-6 group cursor-pointer">
<div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors"></div>
<div className="w-full h-full flex items-center justify-center bg-gray-200">
<svg aria-hidden="true" className="iconify text-gray-400 text-5xl iconify--lucide" data-icon="lucide:book-open" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="">
<div className="flex gap-3 mb-3">
<span className="px-2 py-1 bg-green-50 text-tamma text-[10px] font-bold uppercase tracking-wide rounded">Salud</span>
<span className="text-xs text-gray-400 mt-0.5">Hace 2 días</span>
</div>
<h3 className="font-heading text-2xl font-semibold text-gray-900 mb-3 hover:text-tamma cursor-pointer transition-colors">
                            La importancia de la telemedicina en el cuidado geriátrico
                        </h3>
<p className="text-gray-500 text-sm leading-relaxed mb-4">
                            Descubre cómo la tecnología está facilitando el acceso a especialistas para adultos mayores sin necesidad de traslados.
                        </p>
<a className="text-sm font-semibold underline decoration-gray-300 underline-offset-4 hover:decoration-tamma text-gray-900 transition-all" href="#">Leer artículo</a>
</div>
</article>

<div className="flex flex-col gap-8">

<div className="flex gap-6 group cursor-pointer">
<div className="w-24 h-24 rounded-xl bg-gray-100 flex-shrink-0 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-gray-400 text-2xl iconify--lucide" data-icon="lucide:calendar" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
</div>
<div>
<span className="text-xs font-bold text-tamma uppercase">Webinar • 15 Oct</span>
<h4 className="font-heading text-lg font-semibold text-gray-900 mt-1 mb-2 group-hover:text-tamma transition-colors">Nutrición y Longevidad</h4>
<p className="text-xs text-gray-500 line-clamp-2">Únete a nuestros expertos para discutir las últimas investigaciones en nutrición pro-age.</p>
</div>
</div>
<div className="w-full h-px bg-gray-100"></div>

<div className="flex gap-6 group cursor-pointer">
<div className="w-24 h-24 rounded-xl bg-gray-100 flex-shrink-0 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-gray-400 text-2xl iconify--lucide" data-icon="lucide:file-text" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div>
<span className="text-xs font-bold text-tamma uppercase">Artículo</span>
<h4 className="font-heading text-lg font-semibold text-gray-900 mt-1 mb-2 group-hover:text-tamma transition-colors">Guía de Suplementación 2024</h4>
<p className="text-xs text-gray-500 line-clamp-2">Lo que necesitas saber sobre vitaminas y minerales esenciales para mayores de 40.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="font-heading text-3xl font-semibold text-center text-gray-900 tracking-tight mb-16">
                Confianza construida con resultados
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-soft">
<div className="flex gap-1 text-yellow-400 mb-4 text-xs">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-600 text-sm italic mb-6">"La farmacia inteligente cambió mi vida. Ya no me preocupo por olvidar mis recetas, todo llega a mi puerta puntualmente."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">MC</div>
<div>
<p className="text-xs font-bold text-gray-900">María C.</p>
<p className="text-[10px] text-gray-400 uppercase">Paciente Smart Pharmacy</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft">
<div className="flex gap-1 text-yellow-400 mb-4 text-xs">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-600 text-sm italic mb-6">"La atención por telemedicina es excelente. Los doctores son muy profesionales y el sistema es muy fácil de usar."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">JR</div>
<div>
<p className="text-xs font-bold text-gray-900">Jorge R.</p>
<p className="text-[10px] text-gray-400 uppercase">Usuario Telemedicina</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft">
<div className="flex gap-1 text-yellow-400 mb-4 text-xs">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-600 text-sm italic mb-6">"Encontré productos para mi piel que no hallaba en ningún otro lugar. La calidad del portafolio es indiscutible."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">AL</div>
<div>
<p className="text-xs font-bold text-gray-900">Ana L.</p>
<p className="text-[10px] text-gray-400 uppercase">Cliente Premium</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="sobre-tamma">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-tamma-dark rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
<svg aria-hidden="true" className="iconify w-96 h-96 iconify--lucide" data-icon="lucide:activity" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="relative z-10 max-w-2xl">
<h2 className="font-heading text-3xl lg:text-4xl font-semibold mb-6 tracking-tight">Sobre TAMMA</h2>
<p className="text-green-50 text-lg mb-8 leading-relaxed font-light">
                        Somos más que un proveedor de salud; somos un ecosistema diseñado para acompañarte en cada etapa de tu vida. Nuestra misión es democratizar el acceso a servicios de salud de alta calidad mediante la tecnología.
                    </p>
<div className="grid grid-cols-2 gap-8 mb-8">
<div className="">
<h4 className="font-bold text-xl mb-1">Misión</h4>
<p className="text-sm text-green-100 opacity-80">Innovar en el cuidado integral del paciente.</p>
</div>
<div>
<h4 className="font-bold text-xl mb-1">Visión</h4>
<p className="text-sm text-green-100 opacity-80">Ser el referente latinoamericano en salud digital.</p>
</div>
</div>
<a className="inline-block bg-white text-tamma-dark px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-50 transition-colors" href="#contacto">
                        Habla con nosotros
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contacto">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-tamma font-semibold tracking-wider text-xs uppercase mb-2 block">Contáctanos</span>
<h2 className="font-heading text-3xl font-semibold text-gray-900 tracking-tight">Empieza tu camino al bienestar</h2>
</div>
<form className="space-y-8 bg-white" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs font-bold text-gray-700 uppercase tracking-wide" htmlFor="name">Nombre</label>
<input className="w-full border-b border-gray-200 pb-2 focus:border-tamma focus:outline-none transition-colors bg-transparent text-gray-900 placeholder-gray-300" id="name" placeholder="Juan Pérez" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-gray-700 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full border-b border-gray-200 pb-2 focus:border-tamma focus:outline-none transition-colors bg-transparent text-gray-900 placeholder-gray-300" id="email" placeholder="juan@ejemplo.com" type="email"/>
</div>
</div>
<div className="space-y-4">
<label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Interés Principal</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<label className="cursor-pointer custom-checkbox relative">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="w-full p-4 rounded-lg border border-gray-200 text-center hover:bg-gray-50 peer-checked:border-tamma peer-checked:bg-green-50 peer-checked:text-tamma-dark transition-all">
<span className="text-sm font-medium">Farmacia</span>
</div>
</label>
<label className="cursor-pointer custom-checkbox relative">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="w-full p-4 rounded-lg border border-gray-200 text-center hover:bg-gray-50 peer-checked:border-tamma peer-checked:bg-green-50 peer-checked:text-tamma-dark transition-all">
<span className="text-sm font-medium">Telemedicina</span>
</div>
</label>
<label className="cursor-pointer custom-checkbox relative">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="w-full p-4 rounded-lg border border-gray-200 text-center hover:bg-gray-50 peer-checked:border-tamma peer-checked:bg-green-50 peer-checked:text-tamma-dark transition-all">
<span className="text-sm font-medium">Portafolio</span>
</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-gray-700 uppercase tracking-wide" htmlFor="message">Mensaje</label>
<textarea className="w-full border-b border-gray-200 pb-2 focus:border-tamma focus:outline-none transition-colors bg-transparent text-gray-900 resize-none placeholder-gray-300" id="message" placeholder="¿Cómo podemos ayudarte?" rows="4"></textarea>
</div>
<div className="flex items-center gap-3">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center transition-colors">
<svg aria-hidden="true" className="iconify text-white hidden text-sm iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs text-gray-500">Acepto la política de privacidad y tratamiento de datos.</span>
</label>
</div>
<button className="w-full py-4 bg-tamma text-white font-bold rounded-lg hover:bg-tamma-dark transition-all shadow-lg hover:shadow-xl transform active:scale-[0.99]" type="submit">
                    Enviar Mensaje
                </button>
</form>
</div>
</section>

<footer className="bg-gray-900 text-white py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="mb-6 inline-block bg-white/5 rounded-lg p-2">

<img alt="Tamma Group" className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90" src="logo.png"/>
</div>
<p className="text-gray-400 text-sm leading-relaxed">
                        Ecosistema integral de salud y estética. Innovación y cuidado humano en un solo lugar.
                    </p>
</div>
<div>
<h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-200">Servicios</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-tamma transition-colors" href="#">Smart Pharmacy</a></li>
<li><a className="hover:text-tamma transition-colors" href="#">Portafolio Premium</a></li>
<li><a className="hover:text-tamma transition-colors" href="#">Telemedicina</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-200">Compañía</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-tamma transition-colors" href="#">Sobre Nosotros</a></li>
<li><a className="hover:text-tamma transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-tamma transition-colors" href="#">Eventos</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-200">Contacto</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                            Oficina Central, Ciudad
                        </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                            contacto@tamma.com
                        </li>
<li className="flex gap-4 mt-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:facebook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500">© 2024 Tamma Group. Todos los derechos reservados.</p>
<div className="flex gap-6 text-xs text-gray-500">
<a className="hover:text-gray-300" href="#">Privacidad</a>
<a className="hover:text-gray-300" href="#">Términos</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
