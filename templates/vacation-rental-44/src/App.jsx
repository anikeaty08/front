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
      

<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-emerald-800 text-white p-2 rounded-xl">
<i className="w-6 h-6" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-stone-900">Casa Paredón</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-lg font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#galeria">La Habitación</a>
<a className="text-lg font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#comodidades">Comodidades</a>
<a className="text-lg font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#ubicacion">Ubicación</a>
</nav>
<div className="flex items-center">
<a className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-full font-medium text-lg transition-colors shadow-sm" href="#reservar">
                    Reservar
                </a>
</div>
</div>
</header>
<main className="flex-grow pt-20">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Disponible para reservas
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 mb-6 leading-tight">
                    Tu refugio sereno <br/> en El Paredón.
                </h1>
<p className="text-lg md:text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Despierta con el sonido de las olas en nuestra acogedora suite de diseño. El equilibrio perfecto entre confort moderno y la vibrante energía de la costa guatemalteca.
                </p>
</div>

<div className="max-w-4xl mx-auto bg-white p-3 rounded-3xl shadow-sm border border-stone-200 flex flex-col md:flex-row gap-2 mb-20 relative z-10" id="reservar">
<div className="flex-1 hover:bg-stone-50 p-4 rounded-2xl transition-colors cursor-pointer border-b md:border-b-0 md:border-r border-stone-100">
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Llegada</label>
<div className="flex items-center text-lg font-medium text-stone-900">
                        Agregar fecha
                    </div>
</div>
<div className="flex-1 hover:bg-stone-50 p-4 rounded-2xl transition-colors cursor-pointer border-b md:border-b-0 md:border-r border-stone-100">
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Salida</label>
<div className="flex items-center text-lg font-medium text-stone-900">
                        Agregar fecha
                    </div>
</div>
<div className="flex-1 hover:bg-stone-50 p-4 rounded-2xl transition-colors cursor-pointer">
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Huéspedes</label>
<div className="flex items-center text-lg font-medium text-stone-900">
                        2 personas
                    </div>
</div>
<button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-2xl font-medium text-lg transition-colors flex items-center justify-center gap-2 mt-2 md:mt-0">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
                    Buscar
               </button>
</div>

<div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-200/50 border border-stone-200 aspect-[16/9] relative bg-stone-200 group" id="galeria">

<img alt="Interior de la habitación en El Paredón" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div className="text-white">
<p className="text-lg font-medium opacity-90 mb-1">Cama King Size</p>
<p className="text-3xl font-semibold tracking-tight">Diseño Acogedor</p>
</div>
<button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-5 py-2.5 rounded-full font-medium text-lg transition-colors border border-white/30 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="image" strokeWidth="1.5"></i>
                        Ver fotos
                    </button>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-stone-900 mb-6">
                            Un espacio diseñado para tu descanso absoluto.
                        </h2>
<p className="text-lg text-stone-500 mb-6 leading-relaxed">
                            Nuestra suite ha sido cuidadosamente decorada combinando elementos naturales locales con comodidades de alta calidad. Desde los detalles en madera hasta la paleta de colores serena, cada rincón está pensado para que te relajes después de un día de surf o playa.
                        </p>
<p className="text-lg text-stone-500 leading-relaxed">
                            Cuenta con acceso privado, baño completo incorporado y un área de estar tipo sofá cama perfecta para la lectura o acomodar a un huésped adicional.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-stone-50 rounded-3xl p-8 border border-stone-100">
<i className="w-8 h-8 text-emerald-700 mb-4" data-lucide="bed-double" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium text-stone-900 mb-2">Descanso Premium</h3>
<p className="text-lg text-stone-500">Cama espaciosa con ropa de cama de algodón de alta calidad.</p>
</div>
<div className="bg-stone-50 rounded-3xl p-8 border border-stone-100 mt-8">
<i className="w-8 h-8 text-emerald-700 mb-4" data-lucide="bath" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium text-stone-900 mb-2">Baño Privado</h3>
<p className="text-lg text-stone-500">Equipado con toallas limpias y amenidades esenciales.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="comodidades">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-stone-900 mb-4">
                        Todo lo que necesitas
                    </h2>
<p className="text-lg text-stone-500">Pensamos en los detalles para que tú solo pienses en disfrutar.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 text-stone-700">
<i className="w-6 h-6" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Aire Acondicionado</h3>
<p className="text-lg text-stone-500 text-sm">Clima perfecto siempre.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 text-stone-700">
<i className="w-6 h-6" data-lucide="wifi" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Wi-Fi Rápido</h3>
<p className="text-lg text-stone-500 text-sm">Ideal para nómadas digitales.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 text-stone-700">
<i className="w-6 h-6" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">A pasos del mar</h3>
<p className="text-lg text-stone-500 text-sm">Escucha las olas desde la cama.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 text-stone-700">
<i className="w-6 h-6" data-lucide="sofa" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Área de descanso</h3>
<p className="text-lg text-stone-500 text-sm">Sofá cama adicional incluido.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 text-stone-700">
<i className="w-6 h-6" data-lucide="car-front" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Parqueo</h3>
<p className="text-lg text-stone-500 text-sm">Espacio seguro para tu vehículo.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 text-stone-700">
<i className="w-6 h-6" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Amenidades</h3>
<p className="text-lg text-stone-500 text-sm">Agua purificada y esenciales.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
<div className="flex items-center gap-2 mb-8">
<div className="bg-stone-100 text-stone-900 p-2 rounded-xl">
<i className="w-6 h-6" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-stone-900">Casa Paredón</span>
</div>
<p className="text-lg text-stone-500 mb-8 text-center max-w-md">
                Tu escape perfecto en la costa del Pacífico. Playa El Paredón, Escuintla, Guatemala.
            </p>
<div className="w-full border-t border-stone-100 pt-8 flex flex-col md:flex-row items-center justify-between">
<p className="text-lg text-stone-400 text-sm">
                    © 2023 Casa Paredón. Todos los derechos reservados.
                </p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
                        Privacidad
                    </a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
                        Términos
                    </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
