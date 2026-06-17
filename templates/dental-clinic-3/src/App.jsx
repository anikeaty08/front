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



        lucide.createIcons();
        
        // Mobile menu toggle
        const btn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Navbar blur effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
            } else {
                navbar.classList.remove('shadow-sm');
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b bg-white/80 border-slate-200/60 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2.5 group select-none" href="#">

<img alt="VT Dental Logo" className="h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f25c1f0-12b1-4f0b-bb70-8b670d864cb7_3840w.jpg"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-teal-600" href="#tratamientos">Tratamientos</a>
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-teal-600" href="#proceso">Experiencia</a>
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-teal-600" href="#nosotros">Doctores</a>
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-teal-600" href="#testimonios">Pacientes</a>
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-teal-600" href="#blog">Blog</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors text-slate-500 hover:text-teal-600" href="tel:+525512345678">
<i className="w-4 h-4" data-lucide="phone"></i>
                        (55) 1234-5678
                    </a>
<a className="hidden sm:inline-flex items-center justify-center text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 bg-teal-600 hover:bg-teal-700 text-white ring-1 ring-teal-600 hover:ring-teal-700" href="#contacto">
                        Agendar Cita
                    </a>
<button className="lg:hidden p-2 text-slate-400 hover:text-slate-600" id="mobileMenuBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="lg:hidden hidden border-t bg-white border-slate-100" id="mobileMenu">
<div className="px-4 py-4 space-y-3">
<a className="block text-sm font-medium py-2 text-slate-600" href="#tratamientos">Tratamientos</a>
<a className="block text-sm font-medium py-2 text-slate-600" href="#proceso">Experiencia</a>
<a className="block text-sm font-medium py-2 text-slate-600" href="#nosotros">Doctores</a>
<a className="block text-sm font-medium py-2 text-teal-600" href="#contacto">Agendar Cita</a>
</div>
</div>
</nav>

<section className="pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 animate-fade-in-up relative z-10">
<div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-teal-100/50 text-teal-700 border border-teal-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                        Nueva Tecnología 3D Disponible
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Diseñamos la Sonrisa <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Que Mereces</span>
</h1>
<p className="text-lg leading-relaxed max-w-lg text-slate-500">
                        En VT DENTAL combinamos la experiencia de los Dres. Trujillo y Vaca con tecnología de vanguardia para brindarte una salud oral integral y estética.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-lg transition-all shadow-lg shadow-teal-600/10 hover:shadow-teal-600/20 hover:-translate-y-0.5 bg-teal-600 hover:bg-teal-700 text-white" href="#contacto">
                            Primera Consulta
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-lg border transition-all hover:bg-slate-50 text-slate-600 border-slate-200 bg-white" href="#tratamientos">
<i className="w-4 h-4 text-teal-500" data-lucide="sparkles"></i>
                            Ver Servicios
                        </a>
</div>

<div className="flex items-center gap-6 pt-4 border-t border-slate-100">
<div className="flex -space-x-3">
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600">+2k</div>
</div>
<div className="flex flex-col">
<div className="flex text-yellow-400 gap-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs font-medium text-slate-500">Pacientes Satisfechos</span>
</div>
</div>
</div>

<div className="relative hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-200/20 to-emerald-200/20 rounded-[2rem] transform rotate-3"></div>
<img alt="Consultorio Dental Moderno" className="relative rounded-[2rem] shadow-2xl shadow-slate-200/50 w-full object-cover aspect-[4/3] transform hover:scale-[1.01] transition-transform duration-700" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-10 -left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-float">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Atención</p>
<p className="text-sm font-semibold text-slate-800">Personalizada</p>
</div>
</div>
</div>

<div className="absolute -bottom-6 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-float" style={{animationDelay: '1.5s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Citas Disponibles</p>
<p className="text-sm font-semibold text-slate-800">Dres. Vaca &amp; Trujillo</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<p className="text-3xl font-bold tracking-tight text-slate-900">15+</p>
<p className="text-sm font-medium text-slate-500 mt-1">Años de Experiencia</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold tracking-tight text-slate-900">3.5k+</p>
<p className="text-sm font-medium text-slate-500 mt-1">Sonrisas Diseñadas</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold tracking-tight text-slate-900">100%</p>
<p className="text-sm font-medium text-slate-500 mt-1">Tecnología Digital</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold tracking-tight text-slate-900">24/7</p>
<p className="text-sm font-medium text-slate-500 mt-1">Soporte Urgencias</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white relative" id="tratamientos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
<div className="max-w-2xl">
<span className="text-teal-600 font-semibold tracking-wide text-sm uppercase mb-2 block">Nuestras Especialidades</span>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">Tratamientos Integrales VT DENTAL</h2>
<p className="text-slate-500 mt-4 text-lg">Ofrecemos una gama completa de servicios dentales supervisados directamente por el Dr. Vaca y la Dra. Trujillo.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors group" href="#contacto">
                    Ver todos los servicios 
                    <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 bg-slate-50/30 hover:bg-white hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Diseño de Sonrisa</h3>
<p className="text-slate-500 leading-relaxed mb-6">Carillas de porcelana y resina de alta estética para transformar la forma y color de tus dientes.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Carillas Cerámicas
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Blanqueamiento LED
                        </li>
</ul>
</div>

<div className="group rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 bg-slate-50/30 hover:bg-white hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="anchor"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Implantes Dentales</h3>
<p className="text-slate-500 leading-relaxed mb-6">Recupera la funcionalidad y estética con implantes de titanio de grado médico premium.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Carga Inmediata
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Cirugía Guiada 3D
                        </li>
</ul>
</div>

<div className="group rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 bg-slate-50/30 hover:bg-white hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="align-center"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Ortodoncia Invisible</h3>
<p className="text-slate-500 leading-relaxed mb-6">Alineadores transparentes (Invisalign) y brackets estéticos para una corrección discreta.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Sin Brackets Metálicos
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Escáner Intraoral
                        </li>
</ul>
</div>

<div className="group rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 bg-slate-50/30 hover:bg-white hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="heart-pulse"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Endodoncia</h3>
<p className="text-slate-500 leading-relaxed mb-6">Salvamos tus dientes naturales con tratamientos de conducto utilizando microscopía.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Tecnología Microscópica
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Sesión Única
                        </li>
</ul>
</div>

<div className="group rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 bg-slate-50/30 hover:bg-white hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="baby"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Odontopediatría</h3>
<p className="text-slate-500 leading-relaxed mb-6">Atención especializada para niños en un ambiente amigable y libre de estrés.</p>
</div>

<div className="group rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 bg-slate-50/30 hover:bg-white hover:-translate-y-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
<i className="w-8 h-8 text-slate-400" data-lucide="plus"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Más Servicios</h3>
<p className="text-sm text-slate-500 mb-4">Periodoncia, Cirugía Maxilofacial, Prótesis.</p>
<a className="text-teal-600 font-medium text-sm hover:underline" href="#contacto">Consultar disponibilidad</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-900 text-white overflow-hidden" id="proceso">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    Experiencia VT
                </span>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Tu Camino hacia una Sonrisa Perfecta</h2>
<p className="text-lg text-slate-400">Simplificamos tu visita al dentista. Un proceso transparente, eficiente y cómodo.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-slate-800 via-teal-900 to-slate-800 -z-10"></div>

<div className="relative group">
<div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-teal-500 to-teal-700 shadow-lg shadow-teal-500/20 text-white font-bold text-lg">1</div>
<h3 className="font-semibold text-lg mb-2">Evaluación</h3>
<p className="text-sm text-slate-400">Diagnóstico inicial con cámaras intraorales y radiografía digital de baja radiación.</p>
</div>
</div>

<div className="relative group">
<div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-slate-700 text-slate-300 font-bold text-lg group-hover:bg-teal-600 group-hover:text-white transition-colors">2</div>
<h3 className="font-semibold text-lg mb-2">Planificación</h3>
<p className="text-sm text-slate-400">Diseñamos tu plan de tratamiento personalizado con presupuesto transparente.</p>
</div>
</div>

<div className="relative group">
<div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-slate-700 text-slate-300 font-bold text-lg group-hover:bg-teal-600 group-hover:text-white transition-colors">3</div>
<h3 className="font-semibold text-lg mb-2">Tratamiento</h3>
<p className="text-sm text-slate-400">Procedimientos realizados por la Dra. Trujillo o el Dr. Vaca.</p>
</div>
</div>

<div className="relative group">
<div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-slate-700 text-slate-300 font-bold text-lg group-hover:bg-teal-600 group-hover:text-white transition-colors">4</div>
<h3 className="font-semibold text-lg mb-2">Seguimiento</h3>
<p className="text-sm text-slate-400">Mantenimiento periódico para garantizar la longevidad de tu nueva sonrisa.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-teal-500 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200 overflow-hidden relative">
<div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div>
<h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Agenda tu Visita</h3>
<p className="text-slate-500 mb-8">Utiliza nuestro sistema interactivo para pre-agendar tu cita con la Dra. Trujillo o el Dr. Vaca.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100">
<i className="w-6 h-6 text-teal-600" data-lucide="clock"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900">Horarios Flexibles</h4>
<p className="text-sm text-slate-500">Lunes a Sábado de 9:00 AM a 8:00 PM</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100">
<i className="w-6 h-6 text-teal-600" data-lucide="credit-card"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900">Facilidades de Pago</h4>
<p className="text-sm text-slate-500">Aceptamos tarjetas, seguros y meses sin intereses.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 sm:p-8 border border-slate-100">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Doctor Preferido (Opcional)</label>
<select className="w-full border-slate-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50 text-slate-700">
<option>Cualquiera disponible</option>
<option>Dra. Cristina Trujillo</option>
<option>Dr. Geovanny Vaca</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Consulta</label>
<select className="w-full border-slate-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50 text-slate-700">
<option>Limpieza Dental General</option>
<option>Valoración Ortodoncia</option>
<option>Blanqueamiento</option>
<option>Urgencia / Dolor</option>
<option>Implantes</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Fecha Preferida</label>
<input className="w-full border-slate-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-teal-500 bg-slate-50 text-slate-700" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Horario</label>
<select className="w-full border-slate-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-teal-500 bg-slate-50 text-slate-700">
<option>Mañana (9-12)</option>
<option>Tarde (12-5)</option>
<option>Noche (5-8)</option>
</select>
</div>
</div>
<button className="w-full py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                                Solicitar Disponibilidad
                                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<p className="text-xs text-center text-slate-400 mt-4">
                                *Esto es una pre-reserva. Confirmaremos por WhatsApp.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white overflow-hidden" id="nosotros">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full blur-3xl -z-10"></div>
<div className="grid grid-cols-2 gap-6 items-center">

<div className="relative group mt-12">
<div className="absolute -inset-0.5 bg-gradient-to-tr from-rose-100 to-teal-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
<div className="relative bg-white p-3 rounded-2xl shadow-lg border border-slate-100">
<img alt="Dra. Cristina Trujillo" className="w-full aspect-[3/4] object-cover rounded-xl mb-4 bg-slate-100" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&amp;auto=format&amp;fit=crop"/>
<div className="px-2 pb-2">
<h4 className="font-bold text-slate-900">Dra. Cristina Trujillo</h4>
<p className="text-xs text-teal-600 font-medium uppercase tracking-wide mt-1">Directora Médica</p>
</div>
</div>
</div>

<div className="relative group -mt-12">
<div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-100 to-teal-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
<div className="relative bg-white p-3 rounded-2xl shadow-lg border border-slate-100">
<img alt="Dr. Geovanny Vaca" className="w-full aspect-[3/4] object-cover rounded-xl mb-4 bg-slate-100" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&amp;auto=format&amp;fit=crop"/>
<div className="px-2 pb-2">
<h4 className="font-bold text-slate-900">Dr. Geovanny Vaca</h4>
<p className="text-xs text-blue-600 font-medium uppercase tracking-wide mt-1">Cirujano Dentista</p>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<span className="text-teal-600 font-semibold tracking-wide text-sm uppercase mb-2 block">El Equipo VT Dental</span>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-slate-900">Dedicados a tu Salud y Estética Dental</h2>
<p className="text-lg text-slate-500 mb-6">Fundada por la <strong>Dra. Cristina Trujillo</strong> y el <strong>Dr. Geovanny Vaca</strong>, nuestra clínica fusiona dos perspectivas complementarias de la odontología para ofrecer un tratamiento integral.</p>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Con más de 15 años de experiencia combinada, los doctores han creado un espacio donde la tecnología avanzada se encuentra con un trato cálido y personalizado. Cada tratamiento es supervisado personalmente por ellos para garantizar los más altos estándares de calidad.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
<i className="w-3.5 h-3.5" data-lucide="heart-handshake"></i>
</div>
<div>
<h4 className="font-medium text-slate-900">Atención Personalizada</h4>
<p className="text-sm text-slate-500">La Dra. Trujillo y el Dr. Vaca se toman el tiempo para escuchar tus necesidades específicas.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
<i className="w-3.5 h-3.5" data-lucide="award"></i>
</div>
<div>
<h4 className="font-medium text-slate-900">Excelencia Certificada</h4>
<p className="text-sm text-slate-500">Certificaciones continuas en las últimas técnicas dentales mundiales.</p>
</div>
</div>
</div>
<a className="text-teal-600 font-medium hover:text-teal-800 flex items-center gap-2 group" href="#contacto">
                        Agendar cita con ellos
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="testimonios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">Lo Que Dicen Nuestros Pacientes</h2>
<p className="text-slate-500">Historias reales de sonrisas transformadas.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"La Dra. Cristina fue increíble con mis hijos. Tenían miedo al dentista, pero ella logró que se sintieran súper cómodos."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-700">AL</div>
<div>
<p className="font-semibold text-slate-900 text-sm">Ana López</p>
<p className="text-xs text-slate-400">Paciente Dra. Trujillo</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"El Dr. Geovanny me realizó un diseño de sonrisa y el resultado superó mis expectativas. Muy profesional y detallista."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">CR</div>
<div>
<p className="font-semibold text-slate-900 text-sm">Carlos Ruiz</p>
<p className="text-xs text-slate-400">Paciente Dr. Vaca</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Excelente equipo. Tanto el Dr. Vaca como la Dra. Trujillo son muy atentos y explican cada paso del tratamiento."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-700">MR</div>
<div>
<p className="font-semibold text-slate-900 text-sm">Mariana Reyes</p>
<p className="text-xs text-slate-400">Ortodoncia</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-slate-900">Preguntas Frecuentes</h2>
<div className="space-y-4">
<div className="border border-slate-200 rounded-lg">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
<span className="font-semibold text-slate-800">¿Puedo elegir con qué doctor atenderme?</span>
<i className="w-5 h-5 text-slate-400 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-5 pb-5 hidden text-slate-600 text-sm">
                        Sí, al agendar tu cita puedes solicitar específicamente a la Dra. Cristina Trujillo o al Dr. Geovanny Vaca, sujeto a su disponibilidad de horarios.
                    </div>
</div>
<div className="border border-slate-200 rounded-lg">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
<span className="font-semibold text-slate-800">¿Aceptan seguros médicos?</span>
<i className="w-5 h-5 text-slate-400 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-5 pb-5 hidden text-slate-600 text-sm">
                        Sí, trabajamos con las principales aseguradoras nacionales (GNP, MetLife, AXA) mediante reembolso o pago directo dependiendo de tu póliza.
                    </div>
</div>
<div className="border border-slate-200 rounded-lg">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
<span className="font-semibold text-slate-800">¿Ofrecen facilidades de pago?</span>
<i className="w-5 h-5 text-slate-400 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-5 pb-5 hidden text-slate-600 text-sm">
                        Sí, contamos con planes de financiamiento interno y aceptamos todas las tarjetas de crédito con promociones de meses sin intereses.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="contacto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
<p className="text-slate-400 mb-8 text-lg">Estamos listos para atenderte. Visita VT DENTAL y conoce a nuestros especialistas.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-teal-400 mt-1" data-lucide="map-pin"></i>
<div>
<h4 className="font-medium text-white">Dirección</h4>
<p className="text-slate-400">Av. Principal 123, Colonia Médica<br/>Ciudad de México, CDMX 06000</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-teal-400 mt-1" data-lucide="phone"></i>
<div>
<h4 className="font-medium text-white">Teléfonos</h4>
<p className="text-slate-400">(55) 1234-5678</p>
<p className="text-slate-400">(55) 8765-4321 (Urgencias)</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-teal-400 mt-1" data-lucide="mail"></i>
<div>
<h4 className="font-medium text-white">Email</h4>
<p className="text-slate-400">contacto@vtdental.mx</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8 text-slate-900">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium mb-1">Nombre</label>
<input className="w-full border-slate-200 rounded-lg px-3 py-2 bg-slate-50 focus:ring-2 focus:ring-teal-500" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-1">Apellido</label>
<input className="w-full border-slate-200 rounded-lg px-3 py-2 bg-slate-50 focus:ring-2 focus:ring-teal-500" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-1">Teléfono</label>
<input className="w-full border-slate-200 rounded-lg px-3 py-2 bg-slate-50 focus:ring-2 focus:ring-teal-500" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium mb-1">Mensaje</label>
<textarea className="w-full border-slate-200 rounded-lg px-3 py-2 bg-slate-50 focus:ring-2 focus:ring-teal-500" rows="3"></textarea>
</div>
<button className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                            Enviar Mensaje
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="relative h-8 w-8 flex items-center justify-center text-teal-600">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M16 2.5C14 2.5 13 4 12 5C11 4 10 2.5 8 2.5C4.5 2.5 2 5.5 2 9C2 13.5 6 18 12 21C18 18 22 13.5 22 9C22 5.5 19.5 2.5 16 2.5Z"></path>
</svg>
</div>
<span className="text-xl font-bold text-slate-900">VT DENTAL</span>
</a>
<p className="text-slate-500 text-sm max-w-sm mb-6">
                        Odontología de vanguardia dirigida por los Dres. Trujillo y Vaca. Tu sonrisa en manos expertas.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-teal-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-teal-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-teal-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Enlaces</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-teal-600" href="#">Tratamientos</a></li>
<li><a className="hover:text-teal-600" href="#">Doctores</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-teal-600" href="#">Aviso de Privacidad</a></li>
<li><a className="hover:text-teal-600" href="#">Términos de Uso</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 VT DENTAL. Todos los derechos reservados.</p>
<div className="flex items-center gap-1 text-xs text-slate-400">
<span>Diseñado para sonrisas</span>
<i className="w-3 h-3 text-rose-400 fill-current" data-lucide="heart"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
