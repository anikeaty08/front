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
      

<div className="text-xs font-medium text-white tracking-wide text-center bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 pt-2 pb-2">
<span className="inline-flex items-center gap-2">
<iconify-icon icon="solar:stopwatch-linear" width="14"></iconify-icon>
            ENVÍO EXPRESS GRATIS TERMINA A MEDIANOCHE
        </span>
</div>

<nav className="fixed z-50 transition-all duration-300 bg-neutral-950/80 w-full border-white/5 border-b mt-8 top-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl font-semibold tracking-tighter uppercase flex items-center gap-1 text-white" href="#">
                IRON<span className="text-neutral-500">ATHLETE</span>
</a>

<div className="hidden md:flex text-sm font-medium text-neutral-400 gap-x-8 gap-y-8 items-center">
<a className="transition-colors hover:text-white" href="#">Hombre</a>
<a className="transition-colors hover:text-white" href="#">Mujer</a>
<a className="transition-colors hover:text-white" href="#">Colección</a>
</div>

<div className="flex items-center gap-5">
<button className="transition-colors text-neutral-400 hover:text-white">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="transition-colors relative text-neutral-400 hover:text-white">
<iconify-icon className="" icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold bg-amber-600 text-white">2</span>
</button>
</div>
</div>
</nav>

<header className="min-h-[600px] flex overflow-hidden w-full h-screen relative items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Gym" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-neutral-950 via-neutral-950/70"></div>
<div className="bg-gradient-to-r via-transparent to-transparent from-neutral-950/90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="w-full max-w-7xl z-10 mr-auto ml-auto pt-16 pr-6 pl-6 relative">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm text-xs font-medium text-amber-500 mb-6 fade-in-up border-white/10 bg-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    Nueva Colección Disponible
                </div>
<h1 className="md:text-7xl leading-[1.1] fade-in-up delay-100 uppercase text-5xl font-semibold text-white tracking-tighter mb-6" style={{}}>Train hard, dress better</h1>
<p className="leading-relaxed fade-in-up delay-200 text-lg font-light text-neutral-400 max-w-md mb-8">No es solo ropa. Es mentalidad. Diseñado para los disciplinados que no aceptan excusas.</p>
<div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-300">
<button className="px-8 py-3.5 text-sm font-medium tracking-wide transition-colors flex items-center justify-center gap-2 group bg-white text-neutral-950 hover:bg-neutral-200">
                        Comprar Colección
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="border-b py-6 border-white/5 bg-neutral-950">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex gap-3 text-neutral-400 items-center justify-center">
<iconify-icon className="text-amber-500" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Garantía de Por Vida</span>
</div>
<div className="flex gap-3 text-neutral-400 items-center justify-center">
<iconify-icon className="text-amber-500" icon="solar:box-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Envío Rápido</span>
</div>
<div className="flex gap-3 text-neutral-400 items-center justify-center">
<iconify-icon className="text-amber-500" icon="solar:refresh-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Devoluciones 30 Días</span>
</div>
<div className="flex gap-3 text-neutral-400 items-center justify-center">
<iconify-icon className="text-amber-500" icon="solar:lock-password-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Pago Seguro</span>
</div>
</div>
</section>

<section className="md:py-28 bg-neutral-950 pt-20 pb-20">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex mb-12 items-end justify-between">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-2" style={{}}>Top Ventas</h2>
</div>
<a className="hidden md:flex items-center gap-1 transition-colors hover:text-white text-sm text-neutral-400" href="#">
                    Ver Todo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] mb-4 bg-neutral-900">
<span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 z-10 uppercase tracking-wide bg-white text-neutral-950">Top Ventas</span>
<img alt="Product" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5af0ac7-deed-412e-92c7-0e044223281d_800w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t to-transparent from-black/80">
<button className="w-full py-2.5 text-xs font-bold uppercase tracking-wide bg-white text-neutral-950 hover:bg-neutral-200">Añadir Rápido</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="group-hover:underline decoration-1 underline-offset-4 decoration-neutral-500 text-sm font-medium text-white tracking-wide">Top Iron Women</h3>
<p className="text-neutral-500 text-xs mt-1">Negro Ónix</p>
</div>
<span className="text-sm font-medium text-white">$15</span>
</div>
<div className="flex items-center gap-1 mt-2">
<div className="flex text-amber-500 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500">(124 reseñas)</span>
</div>
<p className="text-red-500 text-[10px] mt-2 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Solo quedan 8
                    </p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] mb-4 bg-neutral-900">
<img alt="Product" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aff30be6-4b7b-4664-a2a5-6dd04e743e90_800w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t to-transparent from-black/80">
<button className="w-full py-2.5 text-xs font-bold uppercase tracking-wide bg-white text-neutral-950 hover:bg-neutral-200">Añadir Rápido</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="group-hover:underline decoration-1 underline-offset-4 decoration-neutral-500 text-sm font-medium text-white tracking-wide">Camiseta Mindset</h3>
<p className="text-neutral-500 text-xs mt-1">Gris Carbón</p>
</div>
<span className="text-sm font-medium text-white">$20</span>
</div>
<div className="flex items-center gap-1 mt-2">
<div className="flex text-amber-500 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500">(89 reseñas)</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] mb-4 bg-neutral-900">
<img alt="Product" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1c18c28-4b6f-4208-9440-7f13c5dc6ed2_800w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t to-transparent from-black/80">
<button className="w-full py-2.5 text-xs font-bold uppercase tracking-wide bg-white text-neutral-950 hover:bg-neutral-200">Añadir Rápido</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="group-hover:underline decoration-1 underline-offset-4 decoration-neutral-500 text-sm font-medium text-white tracking-wide">Short Iron Women</h3>
<p className="text-neutral-500 text-xs mt-1">Gris Pizarra</p>
</div>
<span className="text-sm font-medium text-white">$15</span>
</div>
<p className="text-amber-500 text-[10px] mt-2 font-medium">Venta rápida</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] mb-4 bg-neutral-900">
<img alt="Product" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=2030&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t to-transparent from-black/80">
<button className="w-full py-2.5 text-xs font-bold uppercase tracking-wide bg-white text-neutral-950 hover:bg-neutral-200">Añadir Rápido</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium tracking-wide group-hover:underline decoration-1 underline-offset-4 decoration-neutral-500 text-white">Calcetines Deadlift</h3>
<p className="text-neutral-500 text-xs mt-1">Blanco / Negro</p>
</div>
<span className="text-sm font-medium text-white">$18</span>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<button className="w-full border py-3 text-sm font-medium border-neutral-800 text-white">Ver Todos</button>
</div>
</div>
</section>

<section className="relative py-28 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-30 grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/80"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Lanzamiento Exclusivo</span>
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tighter mb-6 uppercase">La Serie Mindset</h2>
<p className="md:text-base text-sm font-light text-neutral-300 max-w-xl mb-10">Mindset en negro total con detalles que marcan carácter. 30 unidades a nivel mundial. Sin segunda producción.</p>
<div className="flex flex-col md:flex-row gap-8 items-center mb-10">
<div className="flex flex-col min-w-[100px] bg-neutral-900/50 border-white/10 border pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm items-center">
<span className="text-3xl font-semibold text-white">00</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Horas</span>
</div>
<div className="flex flex-col items-center border p-4 min-w-[100px] backdrop-blur-sm bg-neutral-900/50 border-white/10">
<span className="text-3xl font-semibold text-white">00</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Minutos</span>
</div>
<div className="flex flex-col items-center border p-4 min-w-[100px] backdrop-blur-sm bg-neutral-900/50 border-white/10">
<span className="text-3xl font-semibold text-white">00</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Segundos</span>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-neutral-800 bg-neutral-950">
<div className="max-w-xl mx-auto px-6 text-center">
<h3 className="text-2xl font-semibold tracking-tight mb-2 text-white">Únete a la Élite Iron</h3>
<p className="text-sm mb-8 font-light text-neutral-400">Desbloquea un 10% de descuento en tu primera compra y obtén acceso exclusivo a lanzamientos limitados.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-transparent border px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600 border-neutral-700 text-white" placeholder="Tu correo electrónico" type="email"/>
<button className="px-6 py-3 text-sm font-semibold tracking-wide transition-colors whitespace-nowrap bg-white text-neutral-950 hover:bg-neutral-200" type="submit">
                    Suscribirse
                </button>
</form>
<p className="text-[10px] mt-4 text-neutral-600">Al registrarte, aceptas nuestros Términos y Política de Privacidad.</p>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-neutral-950 border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<a className="font-semibold tracking-tighter uppercase mb-6 block text-white" href="#">IRON ATHLETE</a>
<div className="flex gap-4 text-neutral-400">
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:instagram-linear" width="20"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:facebook-linear" width="20"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:twitter-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Tienda</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white" href="#">Novedades Hombre</a></li>
<li><a className="hover:text-white" href="#">Novedades Mujer</a></li>
<li><a className="hover:text-white" href="#">Accesorios</a></li>
<li><a className="hover:text-white" href="#">Tarjetas de Regalo</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Soporte</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white" href="#">Centro de Ayuda</a></li>
<li><a className="hover:text-white" href="#">Cambios y Devoluciones</a></li>
<li><a className="hover:text-white" href="#">Info de Envío</a></li>
<li><a className="hover:text-white" href="#">Guía de Tallas</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Empresa</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white" href="#">Nuestra Historia</a></li>
<li><a className="hover:text-white" href="#">Sostenibilidad</a></li>
<li><a className="hover:text-white" href="#">Carreras</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-900">
<p className="text-xs text-neutral-600">© 2023 Iron Athlete. Todos los derechos reservados.</p>
<div className="flex gap-3">

<div className="w-8 h-5 rounded-sm bg-neutral-800"></div>
<div className="w-8 h-5 rounded-sm bg-neutral-800"></div>
<div className="w-8 h-5 rounded-sm bg-neutral-800"></div>
<div className="w-8 h-5 rounded-sm bg-neutral-800"></div>
</div>
</div>
</div>
</footer>

    </>
  );
}
