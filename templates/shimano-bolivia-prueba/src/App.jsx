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
      
<div className="w-full max-w-7xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative border border-slate-800/60 min-h-[800px]">

<div className="w-full lg:w-5/12 relative flex flex-col p-8 md:p-12 lg:p-16">

<div className="absolute inset-0 z-0">
<img alt="Bike Mechanic" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="lg:bg-gradient-to-r lg:from-slate-900/40 lg:via-slate-900/90 lg:to-slate-900 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 flex flex-col h-full justify-between">

<header className="flex items-center justify-between mb-16 lg:mb-0">
<div className="flex items-center gap-2">

<div className="flex cursor-pointer font-black font-montserrat bg-[#009FE3] pt-2 pr-3 pb-2 pl-4 items-center justify-center" onclick="window.location.href='https://www.bluewateroutriggers.com/cdn/shop/collections/shimano-logo_edited-1.jpg?v=1588709544'" role="button">SHIMANO</div>
</div>
<nav className="hidden md:flex gap-8 text-base font-medium text-slate-300 gap-x-8 gap-y-8">
<a className="hover:text-white transition-colors" href="#">Inicio</a>
<a className="hover:text-white transition-colors" href="#">Cursos</a>
<a className="text-blue-500 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-500" href="#">Sede Bolivia</a>
</nav>
</header>

<div className="mt-8 lg:mt-auto lg:mb-auto">
<span className="inline-block text-sm font-medium tracking-widest text-blue-400 uppercase mb-4">
                        Cupos Limitados
                    </span>
<h1 className="leading-[1.1] text-4xl font-semibold text-white tracking-tight max-w-sm mb-6 md:text-5xl lg:text-5xl">Capacitaciones <br/>Oficiales en <span className="text-blue-500">Bolivia.</span></h1>
<p className="leading-relaxed text-lg text-slate-400 max-w-md mb-10">Perfecciona tus habilidades técnicas con expertos. Regístrate en nuestros talleres y domina la mecánica de vanguardia.</p>

<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-3.5 text-base font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
                            Ver Temario
                        </button>
<button className="border border-slate-700 hover:border-slate-500 text-white rounded-full px-8 py-3.5 text-base font-medium transition-all flex items-center justify-center">
                            Conocer más
                        </button>
</div>
</div>
</div>
</div>

<div className="lg:w-7/12 md:p-12 lg:p-16 flex flex-col lg:border-l bg-slate-900/95 w-full z-10 border-slate-800/50 pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="max-w-xl w-full mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-10 md:text-3xl">
                    Registro de participante<span className="text-blue-500">.</span>
</h2>
<form className="space-y-4">

<div className="relative bg-slate-800/60 rounded-2xl px-5 py-2.5 border border-slate-700/50 focus-within:border-blue-500 focus-within:bg-slate-800 transition-all flex items-center justify-between group">
<div className="flex flex-col w-full">
<label className="text-xs font-medium text-slate-500 mb-0.5 group-focus-within:text-blue-400 transition-colors">Nombre completo</label>
<input className="w-full bg-transparent border-none p-0 text-base text-white focus:ring-0 placeholder:text-slate-600 outline-none" placeholder="Ej. Juan Pérez" required="" type="text"/>
</div>
<i className="text-slate-500 w-5 h-5 ml-4 shrink-0 group-focus-within:text-blue-400 transition-colors" data-lucide="user" strokeWidth="1.5"></i>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="relative bg-slate-800/60 rounded-2xl px-5 py-2.5 border border-slate-700/50 focus-within:border-blue-500 focus-within:bg-slate-800 transition-all flex items-center justify-between group">
<div className="flex flex-col w-full">
<label className="text-xs font-medium text-slate-500 mb-0.5 group-focus-within:text-blue-400 transition-colors">Teléfono</label>
<input className="w-full bg-transparent border-none p-0 text-base text-white focus:ring-0 placeholder:text-slate-600 outline-none" placeholder="+591 70000000" required="" type="tel"/>
</div>
<i className="text-slate-500 w-5 h-5 ml-4 shrink-0 group-focus-within:text-blue-400 transition-colors" data-lucide="phone" strokeWidth="1.5"></i>
</div>

<div className="relative bg-slate-800/60 rounded-2xl px-5 py-2.5 border border-slate-700/50 focus-within:border-blue-500 focus-within:bg-slate-800 transition-all flex items-center justify-between group">
<div className="flex flex-col w-full">
<label className="text-xs font-medium text-slate-500 mb-0.5 group-focus-within:text-blue-400 transition-colors">Email</label>
<input className="w-full bg-transparent border-none p-0 text-base text-white focus:ring-0 placeholder:text-slate-600 outline-none" placeholder="correo@ejemplo.com" required="" type="email"/>
</div>
<i className="text-slate-500 w-5 h-5 ml-4 shrink-0 group-focus-within:text-blue-400 transition-colors" data-lucide="mail" strokeWidth="1.5"></i>
</div>
</div>

<div className="relative bg-slate-800/60 rounded-2xl px-5 py-2.5 border border-slate-700/50 focus-within:border-blue-500 focus-within:bg-slate-800 transition-all flex items-center justify-between group cursor-pointer">
<div className="flex flex-col w-full">
<label className="text-xs font-medium text-slate-500 mb-0.5 group-focus-within:text-blue-400 transition-colors">¿Desde qué ciudad participas?</label>
<select className="w-full bg-transparent border-none p-0 text-base text-white focus:ring-0 outline-none appearance-none cursor-pointer [&amp;&gt;option]:bg-slate-900 [&amp;&gt;option]:text-white" required="">
<option className="text-slate-600" disabled="" selected="" value="">Selecciona tu ciudad</option>
<option value="La Paz">La Paz</option>
<option value="Cochabamba">Cochabamba</option>
<option value="Santa Cruz">Santa Cruz</option>
<option value="Oruro">Oruro</option>
<option value="Potosí">Potosí</option>
<option value="Sucre">Sucre</option>
<option value="Tarija">Tarija</option>
<option value="Beni">Beni</option>
<option value="Pando">Pando</option>
<option value="El Alto">El Alto</option>
</select>
</div>
<i className="text-slate-500 w-5 h-5 ml-4 shrink-0 group-focus-within:text-blue-400 transition-colors pointer-events-none" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>

<div className="relative bg-slate-800/60 rounded-2xl px-5 py-2.5 border border-slate-700/50 focus-within:border-blue-500 focus-within:bg-slate-800 transition-all flex items-center justify-between group cursor-pointer">
<div className="flex flex-col w-full">
<label className="text-xs font-medium text-slate-500 mb-0.5 group-focus-within:text-blue-400 transition-colors">¿Cuál es tu actividad principal en el ciclismo?</label>
<select className="w-full bg-transparent border-none p-0 text-base text-white focus:ring-0 outline-none appearance-none cursor-pointer [&amp;&gt;option]:bg-slate-900 [&amp;&gt;option]:text-white" required="">
<option className="text-slate-600" disabled="" selected="" value="">Selecciona tu actividad</option>
<option value="Ciclista aficionado">Ciclista aficionado</option>
<option value="Ciclista profesional">Ciclista profesional</option>
<option value="Mecánico de bicicletas">Mecánico de bicicletas</option>
<option value="Dueño de tienda de bicicletas">Dueño de tienda de bicicletas</option>
<option value="Vendedor en tienda">Vendedor en tienda</option>
</select>
</div>
<i className="text-slate-500 w-5 h-5 ml-4 shrink-0 group-focus-within:text-blue-400 transition-colors pointer-events-none" data-lucide="bike" strokeWidth="1.5"></i>
</div>

<div className="text-center mt-6 mb-2">
<span className="text-base text-slate-400">Al registrarte aceptas nuestros <a className="text-blue-500 hover:text-blue-400 transition-colors" href="#">Términos y Condiciones</a></span>
</div>

<button className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4 text-lg font-medium mt-2 shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex justify-center items-center gap-2" type="submit">
                        Inscribirme Ahora
                    </button>
</form>
</div>
</div>
</div>




    </>
  );
}
