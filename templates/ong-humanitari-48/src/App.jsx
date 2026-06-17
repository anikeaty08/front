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
      

<div className="bg-slate-900 text-white text-xs py-2.5 px-4 text-center">
<div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
<span className="font-medium">Emergencia:</span>
<span className="opacity-90">Ayuda a las víctimas de los conflictos actuales.</span>
<a className="underline hover:text-orange-300 transition-colors ml-1" href="#">Donar ahora →</a>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="h-8 w-8 bg-orange-600 rounded-lg flex items-center justify-center text-white group-hover:bg-orange-700 transition-colors">
<i className="w-5 h-5" data-lucide="heart-handshake"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">WORLD VISION</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#">Apadrinar</a>
<a className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#">Nuestro Trabajo</a>
<a className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#">Emergencias</a>
<a className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#">Empresas</a>
</div>

<div className="hidden md:flex items-center gap-3">
<button className="text-slate-500 hover:text-slate-900">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<a className="text-sm font-medium px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                        Mi cuenta
                    </a>
<a className="text-sm font-semibold px-5 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 shadow-sm shadow-orange-200 transition-all hover:-translate-y-0.5" href="#">
                        Donar
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900 p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-12 pb-20 lg:pt-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        Prioridad global: Hambre Cero
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Cambia la vida de un niño <span className="text-orange-600">para siempre.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Con tu apadrinamiento, no solo ayudas a un niño, transformas toda su comunidad. Agua potable, educación y salud para los que más lo necesitan.
                    </p>

<div className="bg-white p-1 rounded-2xl border border-slate-200 shadow-sm inline-flex flex-col sm:flex-row gap-2 max-w-full">
<div className="flex bg-slate-100 rounded-xl p-1">
<button className="px-6 py-2.5 rounded-lg bg-white text-slate-900 text-sm font-medium shadow-sm ring-1 ring-black/5">Mensual</button>
<button className="px-6 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 text-sm font-medium">Puntual</button>
</div>
<div className="flex items-center gap-2 px-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-sm font-medium hover:border-orange-500 hover:text-orange-600 bg-white transition-colors">15€</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium">25€</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-sm font-medium hover:border-orange-500 hover:text-orange-600 bg-white transition-colors">50€</button>
<div className="relative ml-2">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">€</span>
<input className="w-20 pl-7 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" placeholder="Otro" type="number"/>
</div>
</div>
<button className="bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20">
                            Apadrinar
                        </button>
</div>
<div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
<div className="flex -space-x-2">
<img alt="Donor" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Donor" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Donor" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p>Únete a más de <span className="text-slate-700 font-medium">120.000 padrinos</span> en España</p>
</div>
</div>

<div className="relative lg:ml-auto">

<div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="relative grid grid-cols-2 gap-4">
<div className="space-y-4 pt-8">
<img alt="Child Smiling" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-100">
<i className="text-blue-500 w-6 h-6 mb-3" data-lucide="droplets"></i>
<h3 className="font-semibold text-slate-900 mb-1">Agua Limpia</h3>
<p className="text-xs text-slate-500">Cada 10 segundos llegamos a una nueva persona con agua potable.</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-900 p-5 rounded-2xl shadow-lg text-white">
<i className="text-orange-400 w-6 h-6 mb-3" data-lucide="shield-check"></i>
<h3 className="font-semibold text-white mb-1">Transparencia</h3>
<p className="text-xs text-slate-300">Auditados anualmente. El 81% de los fondos va directamente a los proyectos.</p>
</div>
<img alt="Community" className="rounded-2xl shadow-xl w-full h-56 object-cover hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200/50">
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">70+</span>
<span className="text-sm text-slate-500 mt-1">Años de experiencia</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">100</span>
<span className="text-sm text-slate-500 mt-1">Países donde actuamos</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">3.5M</span>
<span className="text-sm text-slate-500 mt-1">Niños apadrinados</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">81%</span>
<span className="text-sm text-slate-500 mt-1">Fondos a misión</span>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Formas de colaborar</h2>
<p className="mt-2 text-slate-500 max-w-xl">Elige cómo quieres impactar hoy. Desde apadrinamiento a largo plazo hasta ayuda inmediata en emergencias.</p>
</div>
<a className="text-orange-600 font-medium text-sm flex items-center hover:text-orange-700" href="#">
                    Ver todas las opciones <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative h-48 overflow-hidden">
<img alt="Sponsor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-800">
                            Más popular
                        </div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Apadrina un niño</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Crea un vínculo único y cambia su futuro. Recibirás cartas y fotos de su progreso.</p>
<a className="inline-flex justify-center items-center px-4 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors w-full" href="#">
                            Apadrinar ahora
                        </a>
</div>
</div>

<div className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative h-48 overflow-hidden">
<img alt="Emergency" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
<i className="w-5 h-5" data-lucide="siren"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Fondo de Emergencias</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Responde rápidamente ante desastres naturales y conflictos armados. Tu ayuda llega en 24h.</p>
<a className="inline-flex justify-center items-center px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors w-full" href="#">
                            Donar a emergencias
                        </a>
</div>
</div>

<div className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative h-48 overflow-hidden">
<img alt="Education" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<i className="w-5 h-5" data-lucide="book-open"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Regalos Solidarios</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Elige regalos reales como material escolar, cabras o medicinas que se entregan a quienes lo necesitan.</p>
<a className="inline-flex justify-center items-center px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors w-full" href="#">
                            Ver catálogo
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-orange-50 py-16 border-y border-orange-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-10">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium mb-4">
<i className="w-3 h-3" data-lucide="percent"></i>
                        Ventajas Fiscales
                    </div>
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Tu ayuda te cuesta mucho menos</h2>
<p className="text-slate-600 mb-6">
                        En España, tus donaciones desgravan. Si donas <span className="font-semibold text-slate-900">150€</span>, Hacienda te devuelve <span className="font-semibold text-slate-900">120€</span>. El coste real para ti es de solo 30€, pero el impacto es total.
                    </p>
<div className="flex gap-4">
<a className="text-sm font-medium text-orange-700 hover:text-orange-800 underline" href="#">Calcular mi desgravación</a>
</div>
</div>
<div className="flex-1 w-full max-w-md">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
<div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-50">
<span className="text-sm text-slate-500">Donación</span>
<span className="font-semibold text-slate-900">150€</span>
</div>
<div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-50">
<span className="text-sm text-slate-500">Te devuelven (80%)</span>
<span className="font-semibold text-green-600">-120€</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-slate-900">Coste real</span>
<span className="text-xl font-bold text-orange-600">30€</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
<i className="w-10 h-10 text-orange-200 mx-auto mb-6 fill-current" data-lucide="quote"></i>
<blockquote className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-snug">
                "Conocer a la niña que apadrino fue una experiencia que cambió mi vida. Ver cómo la comunidad prospera gracias a un pequeño aporte mensual es increíble."
            </blockquote>
<div className="mt-8 flex items-center justify-center gap-3">
<img alt="Laura" className="w-10 h-10 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<div className="text-left">
<div className="text-sm font-semibold text-slate-900">Laura García</div>
<div className="text-xs text-slate-500">Padrina desde 2018</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 bg-orange-600 rounded flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="heart-handshake"></i>
</div>
<span className="font-semibold text-slate-900 tracking-tight">WORLD VISION</span>
</div>
<p className="text-sm text-slate-500 mb-6 max-w-xs">
                        Una organización global de ayuda humanitaria, desarrollo y defensa de derechos, dedicada a trabajar con niños, familias y comunidades para superar la pobreza y la injusticia.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Conócenos</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Quiénes somos</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Transparencia</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Sala de prensa</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Empleo</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Colabora</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Hazte socio</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Apadrina</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Legados solidarios</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Empresas</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Cookies</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Aviso Legal</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Contacto</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-400">
                    © 2024 Fundación World Vision España. Todos los derechos reservados.
                </div>
<div className="flex gap-4">

<div className="h-8 w-12 bg-slate-200 rounded opacity-50"></div>
<div className="h-8 w-12 bg-slate-200 rounded opacity-50"></div>
<div className="h-8 w-12 bg-slate-200 rounded opacity-50"></div>
</div>
</div>
</div>
</footer>


    </>
  );
}
