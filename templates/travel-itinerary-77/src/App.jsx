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



        // Scroll Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        // Optional: Unobserve after reveal if you want it to only happen once
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase" href="#">Laggers.es</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Revista</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Destinos</a>
<a className="text-zinc-900" href="#">Itinerario</a>
</div>
<button className="bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">
                Reservar
            </button>
</div>
</nav>

<header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-8">
<iconify-icon className="text-zinc-500" icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wide">10 Días de Inmersión</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Crónicas del Jetlag:<br/>El Itinerario Real.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-light">
                Un viaje diseñado no para turistas, sino para viajeros. Una ruta de 10 días donde el caos se encuentra con la calma y cada hora cuenta una historia diferente.
            </p>
</div>
</header>

<main className="relative max-w-5xl mx-auto px-6 pb-32">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 hidden md:block"></div>

<div className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center reveal-on-scroll">

<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-zinc-900 rounded-full z-10 hidden md:block"></div>

<div className="text-left md:text-right md:pr-12 order-2 md:order-1">
<span className="inline-block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Día 01</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">Aterrizaje y Descafeinado</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    La llegada es una nebulosa. El aire del aeropuerto huele a posibilidades y a café rancio. El primer día no es para explorar, es para sobrevivir. Check-in en el hotel boutique del centro, una ducha que dura demasiado y la primera caminata sonámbula buscando comida local.
                </p>
<div className="flex flex-wrap gap-2 md:justify-end">
<span className="px-3 py-1 bg-zinc-100 rounded text-xs text-zinc-600">Hotel Check-in</span>
<span className="px-3 py-1 bg-zinc-100 rounded text-xs text-zinc-600">Cena Ligera</span>
</div>
</div>

<div className="relative order-1 md:order-2 md:pl-12">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100 relative">
<img alt="Aeropuerto vista" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded border border-white/20 shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs font-medium">19:45 PM</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center reveal-on-scroll">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-200 border-2 border-zinc-200 group-hover:bg-white group-hover:border-zinc-900 transition-colors rounded-full z-10 hidden md:block"></div>

<div className="relative md:pr-12">
<div className="aspect-video overflow-hidden rounded-xl bg-zinc-100">
<img alt="Café de especialidad" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:pl-12">
<span className="inline-block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Día 02</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">El Despertar a las 4 AM</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    El jetlag no perdona. Estás despierto antes que el sol. Aprovechamos la mañana vacía para ver la ciudad despertar. El mercado de flores, el olor a pan fresco y ese silencio urbano que solo existe al amanecer.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 mt-0.5" icon="solar:cup-linear" width="18"></iconify-icon>
<span>Búsqueda del mejor Flat White de la zona.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 mt-0.5" icon="solar:camera-linear" width="18"></iconify-icon>
<span>Fotografía urbana sin multitudes.</span>
</li>
</ul>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center reveal-on-scroll">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-200 border-2 border-zinc-200 group-hover:bg-white group-hover:border-zinc-900 transition-colors rounded-full z-10 hidden md:block"></div>

<div className="text-left md:text-right md:pr-12 order-2 md:order-1">
<span className="inline-block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Día 03</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">Inmersión Cultural</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    El cuerpo empieza a ajustarse. Hoy dedicamos el día a la arquitectura y el diseño local. Visita al museo contemporáneo y almuerzo en ese restaurante escondido que solo conocen los locales (y ahora nosotros).
                </p>
</div>

<div className="relative order-1 md:order-2 md:pl-12">
<div className="grid grid-cols-2 gap-4">
<div className="aspect-square rounded-xl overflow-hidden bg-zinc-100">
<img className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-zinc-100 translate-y-8">
<img className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center reveal-on-scroll">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-200 border-2 border-zinc-200 group-hover:bg-white group-hover:border-zinc-900 transition-colors rounded-full z-10 hidden md:block"></div>

<div className="relative md:pr-12">
<div className="aspect-[16/10] overflow-hidden rounded-xl bg-zinc-100">
<img alt="Paisaje natural" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:pl-12">
<span className="inline-block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Día 04</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">Escape a la Naturaleza</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    Dejamos el asfalto atrás. Tren de cercanías hacia la costa o la montaña. El aire cambia, el ritmo baja. Un día para respirar profundo y desconectar de las notificaciones.
                </p>
<div className="p-4 bg-white border border-zinc-100 rounded-lg shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Ruta Costera</p>
<p className="text-xs text-zinc-500">12km de caminata ligera</p>
</div>
</div>
</div>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center reveal-on-scroll">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-200 border-2 border-zinc-200 group-hover:bg-white group-hover:border-zinc-900 transition-colors rounded-full z-10 hidden md:block"></div>

<div className="text-left md:text-right md:pr-12 order-2 md:order-1">
<span className="inline-block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Día 05</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">Vida Nocturna Local</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    A mitad del viaje, la energía vuelve. Exploramos los bares speakeasy y la escena musical underground. La ciudad cobra otra vida bajo las luces de neón.
                </p>
</div>

<div className="relative order-1 md:order-2 md:pl-12">
<div className="aspect-square overflow-hidden rounded-xl bg-zinc-100">
<img alt="Vida nocturna" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center reveal-on-scroll">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-200 border-2 border-zinc-200 group-hover:bg-white group-hover:border-zinc-900 transition-colors rounded-full z-10 hidden md:block"></div>

<div className="relative md:pr-12">
<div className="aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100">
<img alt="Mercado local" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>

<div className="md:pl-12">
<span className="inline-block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Día 06</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">Gastronomía Callejera</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    Nada de manteles blancos hoy. Nos perdemos en los puestos callejeros. Sabores picantes, texturas desconocidas y comer de pie. La verdadera esencia del lugar entra por el estómago.
                </p>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center reveal-on-scroll">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-200 border-2 border-zinc-200 group-hover:bg-white group-hover:border-zinc-900 transition-colors rounded-full z-10 hidden md:block"></div>

<div className="text-left md:text-right md:pr-12 order-2 md:order-1">
<span className="inline-block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Día 07</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">El Día Lento</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    Sin alarmas. Sin itinerario fijo. Un día para sentarse en un parque a leer, observar a la gente pasar y simplemente "estar". La belleza de no hacer nada en un lugar nuevo.
                </p>
</div>

<div className="relative order-1 md:order-2 md:pl-12">
<div className="aspect-video overflow-hidden rounded-xl bg-zinc-100">
<img alt="Lectura en parque" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center reveal-on-scroll">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-200 border-2 border-zinc-200 group-hover:bg-white group-hover:border-zinc-900 transition-colors rounded-full z-10 hidden md:block"></div>

<div className="relative md:pr-12">
<div className="aspect-square overflow-hidden rounded-xl bg-zinc-100">
<img alt="Compras diseño" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>

<div className="md:pl-12">
<span className="inline-block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Día 08</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">Tesoros Ocultos</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    Dedicamos el día a encontrar ese vinilo raro, esa prenda de ropa vintage o ese objeto de diseño que no encontrarás en ningún otro lugar. Souvenirs con alma.
                </p>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center reveal-on-scroll">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-200 border-2 border-zinc-200 group-hover:bg-white group-hover:border-zinc-900 transition-colors rounded-full z-10 hidden md:block"></div>

<div className="text-left md:text-right md:pr-12 order-2 md:order-1">
<span className="inline-block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Día 09</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">La Última Cena</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    La despedida oficial. Reservamos en ese lugar con vista a la ciudad. Brindis por lo vivido y repaso mental de los momentos favoritos. La nostalgia anticipada ya se siente.
                </p>
</div>

<div className="relative order-1 md:order-2 md:pl-12">
<div className="aspect-[16/9] overflow-hidden rounded-xl bg-zinc-100 shadow-lg">
<img alt="Cena despedida" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal-on-scroll">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 border-2 border-zinc-900 rounded-full z-10 hidden md:block"></div>

<div className="relative md:pr-12">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-zinc-100">
<img alt="Avión ventanilla" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:pl-12">
<span className="inline-block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Día 10</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">Regreso al Origen</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    Maletas cerradas a presión. Taxi al aeropuerto. El ciclo se cierra, pero tú ya no eres el mismo que aterrizó el día 1. Es hora de volver a casa y planear la siguiente huida.
                </p>
<button className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
<span>Ver disponibilidad del tour</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</main>

<footer className="bg-white border-t border-zinc-200 py-16 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<h3 className="text-lg font-semibold tracking-tighter uppercase mb-2">Laggers.es</h3>
<p className="text-sm text-zinc-500">Viajes para quienes disfrutan el camino.</p>
</div>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:globe-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-5xl mx-auto mt-12 text-center md:text-left text-xs text-zinc-400">
            © 2026 Laggers Travel. Todos los derechos reservados.
        </div>
</footer>


    </>
  );
}
