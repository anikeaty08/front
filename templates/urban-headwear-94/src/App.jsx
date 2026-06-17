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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">
                    CRWN.
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#">Colección</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Novedades</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Básicos</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Lookbook</a>
</div>
</div>
<div className="flex items-center gap-5 text-zinc-400">
<button className="hover:text-zinc-100 transition-colors flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hover:text-zinc-100 transition-colors flex items-center justify-center relative">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-zinc-950">2</span>
</button>
<button className="md:hidden hover:text-zinc-100 transition-colors flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-16">
<section className="relative overflow-hidden border-b border-white/5">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950 pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Colección Otoño/Invierno Disponible
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 max-w-4xl leading-tight">
                    Eleva Tu Estilo Urbano.
                </h1>
<p className="text-base md:text-lg text-zinc-400 font-medium mb-10 max-w-2xl leading-relaxed">
                    Gorras diseñadas con precisión para la jungla de asfalto. Estética minimalista, impacto máximo. Siluetas clásicas rediseñadas.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 bg-white text-zinc-950 text-sm font-semibold rounded-md hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#">
                        Comprar Novedades
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/10 text-white text-sm font-medium rounded-md hover:bg-white/5 transition-colors flex items-center justify-center" href="#">
                        Ver Lookbook
                    </a>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Siluetas</h2>
<p className="text-sm text-zinc-400 font-medium">Encuentra el ajuste perfecto para tu estructura.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 flex flex-col justify-end p-6" href="#">
<img alt="Snapback" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="relative z-10 flex justify-between items-end">
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">Snapbacks</h3>
<p className="text-sm text-zinc-400 mt-1 font-medium">Ajuste clásico, corona alta.</p>
</div>
<div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 flex flex-col justify-end p-6" href="#">
<img alt="Dad Hat" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="relative z-10 flex justify-between items-end">
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">Dad Hats</h3>
<p className="text-sm text-zinc-400 mt-1 font-medium">Perfil bajo, corona desestructurada.</p>
</div>
<div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 flex flex-col justify-end p-6" href="#">
<img alt="Beanie" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="relative z-10 flex justify-between items-end">
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">Beanies</h3>
<p className="text-sm text-zinc-400 mt-1 font-medium">Tejido premium para el frío.</p>
</div>
<div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950/50">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white">Últimos Lanzamientos</h2>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group" href="#">
                        Ver todo el catálogo 
                        <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900 border border-white/5 mb-4 flex items-center justify-center p-8">
<img alt="Cap 1" className="object-contain w-full h-full drop-shadow-2xl mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 px-4">
<button className="w-full bg-white/10 hover:bg-white text-white hover:text-zinc-950 backdrop-blur-md border border-white/10 text-xs font-semibold py-2.5 rounded-md transition-colors">
                                    Añadir al carrito
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-100">Onyx Snapback</h3>
<p className="text-xs text-zinc-500 mt-1">Negro Mate / Logo Tonal</p>
</div>
<span className="text-sm font-medium text-white">45€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900 border border-white/5 mb-4 flex items-center justify-center p-8">
<img alt="Cap 2" className="object-contain w-full h-full drop-shadow-2xl mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2 py-0.5 bg-white text-zinc-950 text-[10px] font-semibold rounded-sm uppercase tracking-wider">Nuevo</div>
<div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 px-4">
<button className="w-full bg-white/10 hover:bg-white text-white hover:text-zinc-950 backdrop-blur-md border border-white/10 text-xs font-semibold py-2.5 rounded-md transition-colors">
                                    Añadir al carrito
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-100">Concrete Dad Hat</h3>
<p className="text-xs text-zinc-500 mt-1">Gris Cemento / Algodón Lavado</p>
</div>
<span className="text-sm font-medium text-white">38€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900 border border-white/5 mb-4 flex items-center justify-center p-8">
<img alt="Cap 3" className="object-contain w-full h-full drop-shadow-2xl mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 px-4">
<button className="w-full bg-white/10 hover:bg-white text-white hover:text-zinc-950 backdrop-blur-md border border-white/10 text-xs font-semibold py-2.5 rounded-md transition-colors">
                                    Añadir al carrito
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-100">Midnight Trucker</h3>
<p className="text-xs text-zinc-500 mt-1">Negro / Malla Transpirable</p>
</div>
<span className="text-sm font-medium text-white">40€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900 border border-white/5 mb-4 flex items-center justify-center p-8">
<img alt="Cap 4" className="object-contain w-full h-full drop-shadow-2xl mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 px-4">
<button className="w-full bg-white/10 hover:bg-white text-white hover:text-zinc-950 backdrop-blur-md border border-white/10 text-xs font-semibold py-2.5 rounded-md transition-colors">
                                    Añadir al carrito
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-100">Stealth Beanie</h3>
<p className="text-xs text-zinc-500 mt-1">Carbón / Punto Acanalado</p>
</div>
<span className="text-sm font-medium text-white">32€</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-4">Acceso Anticipado.</h2>
<p className="text-sm text-zinc-400 font-medium mb-8">Únete a nuestra lista para drops exclusivos, colaboraciones de edición limitada y contenido interno.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="w-full bg-zinc-900 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all" placeholder="Tu correo electrónico" required="" type="email"/>
<button className="bg-white text-zinc-950 px-6 py-3 rounded-md text-sm font-semibold hover:bg-zinc-200 transition-colors whitespace-nowrap" type="submit">
                        Suscribirse
                    </button>
</form>
<p className="text-xs text-zinc-600 mt-4">Al suscribirte, aceptas nuestra política de privacidad.</p>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8 px-6 mt-auto">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-white block mb-4" href="#">CRWN.</a>
<p className="text-sm text-zinc-500 font-medium max-w-xs leading-relaxed">
                    Redefiniendo el headwear urbano. Materiales premium, estética sin compromisos. Construido para las calles, diseñado para durar.
                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Comprar</h4>
<ul className="space-y-3 text-sm text-zinc-400 font-medium">
<li><a className="hover:text-white transition-colors" href="#">Todas las Gorras</a></li>
<li><a className="hover:text-white transition-colors" href="#">Novedades</a></li>
<li><a className="hover:text-white transition-colors" href="#">Colección Core</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accesorios</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Soporte</h4>
<ul className="space-y-3 text-sm text-zinc-400 font-medium">
<li><a className="hover:text-white transition-colors" href="#">Envíos y Devoluciones</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cuidado del Producto</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600 font-medium">
                © 2024 CRWN. Todos los derechos reservados.
            </p>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
