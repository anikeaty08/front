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
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 12 9"></path>
<path d="M12 9c1.2 0 2.4.6 3 1.7A3.6 3.6 0 0 1 12 15"></path>
<path d="M12 15c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 12 21"></path>
</svg>
</div>
<div>
<span className="block text-stone-900 font-semibold tracking-tight text-lg leading-none">Clínica Aguirre</span>
<span className="block text-[10px] text-stone-500 font-medium uppercase tracking-wide mt-0.5">Madrid</span>
</div>
</a>

<div className="hidden md:flex space-x-10 items-center">
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#nosotros">Nosotros</a>
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#tratamientos">Tratamientos</a>
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#">Blog</a>
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#contacto">Contacto</a>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-semibold text-stone-900 hover:text-teal-700 transition-colors" href="tel:914113525">
                        91 411 35 25
                    </a>
<a className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-medium py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md" href="#contacto">
<span>Solicitar cita</span>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-500 hover:text-teal-700">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
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
                        Especialistas en fisioterapia y osteopatía
                    </div>
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-stone-900 mb-6 leading-[1.15]">
                        Tu bienestar es <br/>
<span className="text-teal-700">nuestra prioridad.</span>
</h1>
<p className="text-lg text-stone-500 mb-8 max-w-lg font-light leading-relaxed">
                        En nuestra clínica en Madrid, sabemos que cada persona es única. Creemos en un enfoque personalizado y humano para ayudarte a recuperar y mantener tu calidad de vida de manera integral.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-stone-800 transition-all shadow-soft hover:translate-y-px" href="#contacto">
                            Solicitar cita
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-stone-700 border border-stone-200 px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-stone-50 hover:border-stone-300 transition-all" href="#tratamientos">
                            Ver tratamientos
                        </a>
</div>
<div className="mt-12 flex items-center gap-6 border-t border-stone-100 pt-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="lucide:star" width="18"></iconify-icon>
<span className="text-xs text-stone-500 font-medium">+20 Años de experiencia</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="lucide:map-pin" width="18"></iconify-icon>
<span className="text-xs text-stone-500 font-medium">Junto al Santiago Bernabéu</span>
</div>
</div>
</div>
<div className="relative fade-in-up delay-200">

<div className="aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden bg-stone-100 relative shadow-soft">
<img alt="Clínica Aguirre Espacio" className="absolute inset-0 w-full h-full object-cover" src="https://clinicaaguirre.com/wp-content/uploads/2025/04/espacio-preparado-clinica-aguirre-1024x646.webp"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-stone-100/50">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0">
<iconify-icon icon="lucide:heart-pulse" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Enfoque Integral</p>
<p className="text-xs text-stone-500 mt-1 leading-relaxed">Entendemos que cada cuerpo es diferente y diseñamos un plan completamente personalizado.</p>
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
<iconify-icon icon="lucide:user-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-stone-900 mb-2">Trato cercano y humano</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Nos tomamos el tiempo necesario para conocerte, entender tu patología y diseñar un plan con el objetivo de mejorar tu calidad de vida de forma duradera.
                    </p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-700 mb-5 shadow-sm border border-stone-100">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-stone-900 mb-2">+20 Años de experiencia</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Desde 2008, nos dedicamos a ofrecerte un tratamiento profesional adaptado a tus dolencias, ya sean agudas o crónicas.
                    </p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-700 mb-5 shadow-sm border border-stone-100">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-stone-900 mb-2">Ubicación privilegiada</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Situados en pleno centro de Madrid, a solo unos pasos del estadio Santiago Bernabéu, con fácil acceso en transporte público y privado.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="tratamientos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">Nuestras áreas</span>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Especialistas en fisioterapia</h2>
<p className="text-stone-500 font-light">
                    Contamos con un equipo altamente capacitado para ofrecerte un amplio abanico de tratamientos, diseñados para aliviar dolores y optimizar tu salud.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 bg-stone-50 rounded-3xl transition-colors duration-300 hover:bg-teal-50/50">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-700 mb-6 group-hover:text-teal-600 group-hover:scale-110 transition-all shadow-sm">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Fisioterapia</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">
                        Tratamientos personalizados para aliviar el dolor y mejorar la movilidad, combinando terapia manual y ejercicios específicos para una recuperación efectiva.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Fisioterapia deportiva
                        </li>
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Traumatológica
                        </li>
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Geriátrica
                        </li>
</ul>
</div>

<div className="relative p-8 bg-stone-800 rounded-3xl text-white shadow-xl overflow-hidden md:-mt-4 md:mb-4 flex flex-col justify-center">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-teal-300">
<iconify-icon icon="lucide:bone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 rounded bg-teal-500/20 text-teal-300 text-[10px] font-bold uppercase tracking-wider border border-teal-500/20">Spezialidad</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Osteopatía</h3>
<p className="text-sm text-stone-300 leading-relaxed mb-6">
                            Terapias manuales que restauran el equilibrio del cuerpo, tratando el origen de las dolencias musculares, viscerales o craneales de forma global y no invasiva.
                        </p>
<div className="space-y-3 border-t border-white/10 pt-6">
<div className="flex items-center gap-3 text-xs text-stone-200">
<iconify-icon className="text-teal-400" icon="lucide:check" width="14"></iconify-icon> Terapia craneosacral
                            </div>
<div className="flex items-center gap-3 text-xs text-stone-200">
<iconify-icon className="text-teal-400" icon="lucide:check" width="14"></iconify-icon> Terapia miofascial
                            </div>
<div className="flex items-center gap-3 text-xs text-stone-200">
<iconify-icon className="text-teal-400" icon="lucide:check" width="14"></iconify-icon> Ajuste integral
                            </div>
</div>
</div>
</div>

<div className="group p-8 bg-stone-50 rounded-3xl transition-colors duration-300 hover:bg-teal-50/50">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-700 mb-6 group-hover:text-teal-600 group-hover:scale-110 transition-all shadow-sm">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Masajes y Drenaje</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">
                        Técnicas suaves para mejorar la circulación linfática, aliviar tensiones y ofrecer bienestar. Especialistas en el cuidado durante el embarazo.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Drenaje Linfático
                        </li>
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Masajes para Embarazadas
                        </li>
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Masajes Terapéuticos
                        </li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors inline-flex items-center gap-1" href="#contacto">
                    Ver todos los tratamientos <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="nosotros">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="md:col-span-5 lg:col-span-5 order-2 md:order-1">
<div className="relative">
<div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-soft bg-stone-200">
<img alt="Manuel Aguirre Fisioterapeuta" className="w-full h-full object-cover object-top" src="https://clinicaaguirre.com/wp-content/uploads/2025/04/manuel-aguirre.png"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg max-w-[160px]">
<p className="text-3xl font-bold text-teal-700">20+</p>
<p className="text-xs text-stone-500 font-medium mt-1">Años de experiencia</p>
</div>
</div>
</div>

<div className="md:col-span-7 lg:col-span-7 order-1 md:order-2">
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">El equipo</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-6">Manuel Aguirre</h2>
<div className="prose prose-stone prose-lg text-stone-500 font-light leading-relaxed">
<p className="text-stone-800 font-normal">
                            "Creemos que el camino hacia la recuperación comienza con una escucha activa y empática de tus necesidades. Tratamos la causa, no solo los síntomas."
                        </p>
<p className="text-base">
                            Desde 2008, nos dedicamos a ofrecerte un tratamiento cercano, profesional y adaptado a tus dolencias, ya sean agudas o crónicas. Nuestro equipo de fisioterapeutas y osteópatas está comprometido en brindarte un apoyo real a tu bienestar general.
                        </p>
<p className="text-base">
                            Entendemos que cada cuerpo es diferente, y por eso cada tratamiento debe ser único. Nos tomamos el tiempo necesario para diseñar un plan completamente enfocado en tu salud.
                        </p>
</div>
<div className="mt-10 flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600">Fisioterapia Avanzada</span>
<span className="px-4 py-2 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600">Osteopatía</span>
<span className="px-4 py-2 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600">Kinesiología</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 bg-teal-50 text-teal-600 rounded-full mb-8">
<iconify-icon icon="lucide:quote" width="20"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-stone-900 leading-snug mb-10">
                "Es la segunda vez que voy, es increíble! Es un excelente profesional y sabe lo que hace. En una sola sesión me ha quitado un montón de tensiones que tenía en el cuerpo. Muchas gracias!"
            </h3>
<div className="flex flex-col items-center justify-center gap-2">
<p className="text-sm font-semibold text-stone-900">Larisa</p>
<p className="text-xs text-stone-400">Paciente, Madrid</p>
<div className="flex text-amber-400 gap-0.5 mt-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-teal-900 text-white relative overflow-hidden" id="contacto">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Solicita tu cita hoy.</h2>
<p className="text-teal-100/80 mb-12 font-light text-lg">
                        Contacta con nosotros para agendar una valoración inicial. Nos encontramos en una ubicación privilegiada y de fácil acceso.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-300 flex-shrink-0 backdrop-blur-sm border border-white/5">
<iconify-icon icon="lucide:map-pin" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white mb-1">Dirección</p>
<p className="text-base text-teal-100/70 leading-relaxed">Paseo de la Habana, 21<br/>28036 Madrid<br/><span className="text-xs opacity-75">(Cerca del Santiago Bernabéu)</span></p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-300 flex-shrink-0 backdrop-blur-sm border border-white/5">
<iconify-icon icon="lucide:phone" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white mb-1">Teléfono</p>
<a className="text-xl text-white hover:text-teal-300 transition-colors" href="tel:914113525">91 411 35 25</a>
<p className="text-xs text-teal-100/50 mt-1">Lun-Vie: 09:00 - 21:00</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-300 flex-shrink-0 backdrop-blur-sm border border-white/5">
<iconify-icon icon="lucide:mail" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white mb-1">E-Mail</p>
<a className="text-base text-teal-100/70 hover:text-white transition-colors" href="mailto:info@clinicaaguirre.com">info@clinicaaguirre.com</a>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-teal-900/50 text-stone-800">
<h3 className="text-xl font-semibold text-stone-900 mb-6">Rellena el formulario</h3>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide" htmlFor="name">Nombre</label>
<input className="w-full rounded-lg border-stone-200 bg-stone-50 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500 focus:bg-white outline-none transition-all" id="name" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide" htmlFor="lastname">Apellidos</label>
<input className="w-full rounded-lg border-stone-200 bg-stone-50 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500 focus:bg-white outline-none transition-all" id="lastname" placeholder="Tus apellidos" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide" htmlFor="email">Correo electrónico</label>
<input className="w-full rounded-lg border-stone-200 bg-stone-50 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500 focus:bg-white outline-none transition-all" id="email" placeholder="ejemplo@correo.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide" htmlFor="subject">Asunto</label>
<select className="w-full rounded-lg border-stone-200 bg-stone-50 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500 focus:bg-white outline-none transition-all text-stone-600" id="subject">
<option>¿Cómo podemos ayudarte?</option>
<option>Cita de Fisioterapia</option>
<option>Cita de Osteopatía</option>
<option>Masajes / Drenaje</option>
<option>Otra consulta</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide" htmlFor="message">Comentarios / Dudas</label>
<textarea className="w-full rounded-lg border-stone-200 bg-stone-50 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500 focus:bg-white outline-none transition-all" id="message" placeholder="Escribe tu mensaje aquí..." rows="3"></textarea>
</div>
<button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-4 rounded-xl text-sm transition-all mt-2 shadow-lg shadow-teal-600/20" type="button">
                            ENVIAR
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4 opacity-80">
<div className="w-6 h-6 bg-stone-300 text-white rounded flex items-center justify-center">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 12 9"></path><path d="M12 9c1.2 0 2.4.6 3 1.7A3.6 3.6 0 0 1 12 15"></path><path d="M12 15c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 12 21"></path></svg>
</div>
<span className="text-stone-900 font-bold">Clínica Aguirre</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed max-w-xs">
                        Tu clínica de fisioterapia y osteopatía en el centro de Madrid. Un enfoque integral y humano en cada tratamiento.
                    </p>
</div>
<div>
<h4 className="text-stone-900 text-sm font-semibold mb-4">Servicios</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">Fisioterapia</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Osteopatía</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Drenaje linfático</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Masajes para embarazadas</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Kinesiología</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-900 text-sm font-semibold mb-4">Páginas</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">Inicio</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#nosotros">La clínica</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#tratamientos">Tratamientos</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#contacto">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-900 text-sm font-semibold mb-4">Contacto</h4>
<p className="text-xs text-stone-500 mb-2">Paseo de la Habana, 21, 28036 Madrid</p>
<p className="text-xs text-stone-500 mb-4">info@clinicaaguirre.com</p>
<p className="text-xs text-stone-500 font-medium mb-4">91 411 35 25</p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-teal-600 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="18"></iconify-icon></a>
<a className="text-stone-400 hover:text-teal-600 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-400">
<p>© 2025 Clínica Aguirre. Todos los derechos reservados.</p>
<div className="flex gap-6 mt-2 md:mt-0">
<a className="hover:text-stone-600" href="#">Aviso legal</a>
<a className="hover:text-stone-600" href="#">Política de privacidad</a>
<a className="hover:text-stone-600" href="#">Política de cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
