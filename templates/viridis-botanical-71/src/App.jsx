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
      

<header className="fixed top-0 w-full z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-[#E7E5E4] transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<button className="md:hidden text-[#292524] hover:text-[#4A554A] transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<a className="text-xl md:text-2xl font-medium tracking-tighter text-[#292524] uppercase" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Viridis
            </a>

<nav className="hidden md:flex gap-10 items-center text-sm font-light text-[#57534E]">
<a className="hover:text-[#292524] transition-colors" href="#">Colección</a>
<a className="hover:text-[#292524] transition-colors" href="#">Cuidados</a>
<a className="hover:text-[#292524] transition-colors" href="#">Estudio</a>
<a className="hover:text-[#292524] transition-colors" href="#">Journal</a>
</nav>

<div className="flex items-center gap-6">
<button className="hidden md:block text-[#292524] hover:text-[#4A554A] transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="relative text-[#292524] hover:text-[#4A554A] transition-colors flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear"></iconify-icon>
<span className="text-xs font-medium absolute -top-1 -right-2 bg-[#4A554A] text-white w-4 h-4 rounded-full flex items-center justify-center">0</span>
</button>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
<div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
<span className="text-xs font-medium tracking-widest text-[#B87B6A] uppercase mb-6 block">Diseño Vivo</span>
<h1 className="text-4xl md:text-5xl lg:text-6xl text-[#292524] tracking-tight font-medium leading-[1.1] mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Naturaleza elevada para tu refugio
                        </h1>
<p className="text-base md:text-lg text-[#57534E] mb-10 max-w-md font-light leading-relaxed">
                            Transforma tus espacios con botánica curada. Armonía, sofisticación y vida para el hogar contemporáneo latinoamericano.
                        </p>
<div className="flex flex-col sm:flex-row gap-5 items-start">
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-[#4A554A] text-white text-sm font-medium hover:bg-[#3A433A] transition-all duration-300 w-full sm:w-auto" href="#coleccion">
                                Explorar colección
                            </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-transparent text-[#292524] text-sm font-medium border border-[#E7E5E4] hover:border-[#292524] transition-all duration-300 w-full sm:w-auto group" href="#filosofia">
                                Conoce más 
                                <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-7 order-1 lg:order-2">
<div className="relative w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-[#F6F5F2]">
<img alt="Interior minimalista con planta ornamental" className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F6F5F2] px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E7E5E4]">
<div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-8 first:pt-0">
<div className="w-12 h-12 rounded-full bg-[#FDFCFB] flex items-center justify-center mb-6 shadow-sm border border-[#E7E5E4]/50">
<iconify-icon className="text-2xl text-[#4A554A]" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#292524] mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Selección Curada</h3>
<p className="text-sm text-[#57534E] font-light leading-relaxed max-w-xs">
                            Ejemplares cultivados con paciencia, elegidos por su pureza estética y adaptabilidad a interiores modernos.
                        </p>
</div>
<div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-8">
<div className="w-12 h-12 rounded-full bg-[#FDFCFB] flex items-center justify-center mb-6 shadow-sm border border-[#E7E5E4]/50">
<iconify-icon className="text-2xl text-[#4A554A]" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#292524] mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Envíos LATAM</h3>
<p className="text-sm text-[#57534E] font-light leading-relaxed max-w-xs">
                            Embalaje de diseño que garantiza la integridad de cada hoja hasta la puerta de tu hogar.
                        </p>
</div>
<div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-8">
<div className="w-12 h-12 rounded-full bg-[#FDFCFB] flex items-center justify-center mb-6 shadow-sm border border-[#E7E5E4]/50">
<iconify-icon className="text-2xl text-[#4A554A]" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#292524] mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Guía de Cuidados</h3>
<p className="text-sm text-[#57534E] font-light leading-relaxed max-w-xs">
                            Asesoría botánica continua. Te acompañamos para que tu espacio florezca en perfecta armonía.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-[#FDFCFB]" id="coleccion">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-lg">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-[#292524] mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Piezas de Colección
                        </h2>
<p className="text-sm md:text-base text-[#57534E] font-light">
                            Una antología de siluetas botánicas diseñadas para elevar la atmósfera de cualquier estancia.
                        </p>
</div>
<a className="text-sm font-medium text-[#292524] hover:text-[#4A554A] transition-colors flex items-center gap-1 border-b border-transparent hover:border-[#4A554A] pb-1" href="#">
                        Ver catálogo completo
                    </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-[#F6F5F2] mb-6">
<img alt="Ficus Lyrata" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[#292524]">
                                Best Seller
                            </div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-lg tracking-tight font-medium text-[#292524] mb-1" style={{fontFamily: '\'Playfair Display\', serif'}}>Ficus Lyrata</h3>
<p className="text-xs text-[#57534E] font-light mb-3">Escultural y de presencia innegable.</p>
<span className="text-sm font-medium text-[#292524]">$1,850 MXN</span>
</div>
<button className="w-10 h-10 rounded-full border border-[#E7E5E4] flex items-center justify-center text-[#292524] group-hover:bg-[#4A554A] group-hover:text-white group-hover:border-[#4A554A] transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-[#F6F5F2] mb-6">
<img alt="Monstera Deliciosa" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-lg tracking-tight font-medium text-[#292524] mb-1" style={{fontFamily: '\'Playfair Display\', serif'}}>Monstera Deliciosa</h3>
<p className="text-xs text-[#57534E] font-light mb-3">Un toque selvático y profundamente sofisticado.</p>
<span className="text-sm font-medium text-[#292524]">$1,200 MXN</span>
</div>
<button className="w-10 h-10 rounded-full border border-[#E7E5E4] flex items-center justify-center text-[#292524] group-hover:bg-[#4A554A] group-hover:text-white group-hover:border-[#4A554A] transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-[#F6F5F2] mb-6">
<img alt="Strelitzia Nicolai" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-lg tracking-tight font-medium text-[#292524] mb-1" style={{fontFamily: '\'Playfair Display\', serif'}}>Strelitzia Nicolai</h3>
<p className="text-xs text-[#57534E] font-light mb-3">Elegancia vertical para espacios amplios.</p>
<span className="text-sm font-medium text-[#292524]">$2,400 MXN</span>
</div>
<button className="w-10 h-10 rounded-full border border-[#E7E5E4] flex items-center justify-center text-[#292524] group-hover:bg-[#4A554A] group-hover:text-white group-hover:border-[#4A554A] transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F6F5F2] px-6 lg:px-12" id="filosofia">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden order-2 lg:order-1">
<img alt="Estilo de vida botánico" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ab7eee2-b291-45f4-8e96-d3c9a7fefd5d_1600w.jpg"/>
<div className="absolute inset-0 border-8 border-[#F6F5F2] pointer-events-none"></div>
</div>
<div className="order-1 lg:order-2 lg:pl-10">
<span className="text-xs font-medium tracking-widest text-[#4A554A] uppercase mb-4 block">Nuestra Filosofía</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-[#292524] mb-8 leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            El arte de habitar con intención
                        </h2>
<div className="space-y-6 text-sm md:text-base text-[#57534E] font-light leading-relaxed">
<p>
                                Creemos que cada planta es una pieza de diseño vivo, capaz de transformar la energía y estética de un lugar. Viridis nace de la necesidad de reconectar el vertiginoso estilo de vida urbano con la serenidad profunda de la naturaleza.
                            </p>
<p>
                                No solo entregamos botánica; curamos atmósferas. Seleccionamos especies que dialogan con la arquitectura moderna latinoamericana, creando santuarios personales donde el silencio y la belleza coexisten.
                            </p>
</div>
<div className="mt-12 flex items-center gap-6">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-[#E7E5E4] border-2 border-[#F6F5F2] overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/></div>
<div className="w-10 h-10 rounded-full bg-[#E7E5E4] border-2 border-[#F6F5F2] overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/></div>
<div className="w-10 h-10 rounded-full bg-[#4A554A] border-2 border-[#F6F5F2] flex items-center justify-center text-white text-xs font-medium">+2k</div>
</div>
<span className="text-xs text-[#57534E] font-light">Espacios transformados en LATAM</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#4A554A] text-[#FDFCFB] px-6 lg:px-12 text-center">
<div className="max-w-4xl mx-auto">
<iconify-icon className="text-4xl mb-8 text-[#B87B6A] opacity-90" icon="solar:stars-linear"></iconify-icon>
<h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-medium leading-normal md:leading-relaxed mb-10" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    "Desde que integré la botánica de Viridis en mi estudio, el ambiente se percibe más enraizado, elegante y profundamente pacífico. El servicio es impecable."
                </h2>
<div className="flex flex-col items-center gap-2">
<p className="text-sm font-medium tracking-wide">Sofía G.</p>
<p className="text-xs font-light text-[#FDFCFB]/70 uppercase tracking-widest">Ciudad de México</p>
</div>
</div>
</section>

<section className="py-32 bg-[#FDFCFB] px-6 lg:px-12 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-[#292524] mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Comienza tu propia colección
                </h2>
<p className="text-base text-[#57534E] font-light mb-10 max-w-xl mx-auto">
                    Descubre las especies que darán nueva vida a tu entorno. Envíos seguros a las principales ciudades de Latinoamérica.
                </p>
<a className="inline-flex justify-center items-center px-10 py-4 bg-[#292524] text-white text-sm font-medium hover:bg-[#4A554A] transition-colors duration-300" href="#coleccion">
                    Ir al catálogo botánico
                </a>
<div className="mt-16 flex flex-wrap justify-center gap-8 text-[#57534E] opacity-60">
<div className="flex items-center gap-2 text-xs font-medium">
<iconify-icon className="text-lg" icon="solar:lock-password-linear"></iconify-icon> Pago Seguro
                    </div>
<div className="flex items-center gap-2 text-xs font-medium">
<iconify-icon className="text-lg" icon="solar:leaf-linear"></iconify-icon> Cultivo Sostenible
                    </div>
<div className="flex items-center gap-2 text-xs font-medium">
<iconify-icon className="text-lg" icon="solar:smile-circle-linear"></iconify-icon> Garantía de Vida
                    </div>
</div>
</div>
</section>
</main>

<footer className="bg-[#F6F5F2] pt-20 pb-10 px-6 lg:px-12 border-t border-[#E7E5E4]">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="md:col-span-1">
<a className="text-xl font-medium tracking-tighter text-[#292524] uppercase block mb-6" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Viridis
                </a>
<p className="text-xs text-[#57534E] font-light max-w-xs leading-relaxed">
                    Elevando interiores a través del diseño botánico contemporáneo. Naturaleza curada para la vida moderna.
                </p>
</div>
<div>
<h4 className="text-xs font-medium text-[#292524] uppercase tracking-widest mb-6">Colección</h4>
<ul className="space-y-4 text-xs text-[#57534E] font-light">
<li><a className="hover:text-[#292524] transition-colors" href="#">Plantas de Interior</a></li>
<li><a className="hover:text-[#292524] transition-colors" href="#">Macetas de Diseño</a></li>
<li><a className="hover:text-[#292524] transition-colors" href="#">Accesorios Botánicos</a></li>
<li><a className="hover:text-[#292524] transition-colors" href="#">Tarjetas de Regalo</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-[#292524] uppercase tracking-widest mb-6">Asistencia</h4>
<ul className="space-y-4 text-xs text-[#57534E] font-light">
<li><a className="hover:text-[#292524] transition-colors" href="#">Guía de Cuidados</a></li>
<li><a className="hover:text-[#292524] transition-colors" href="#">Envíos y Devoluciones</a></li>
<li><a className="hover:text-[#292524] transition-colors" href="#">Preguntas Frecuentes</a></li>
<li><a className="hover:text-[#292524] transition-colors" href="#">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-[#292524] uppercase tracking-widest mb-6">Newsletter</h4>
<p className="text-xs text-[#57534E] font-light mb-4 leading-relaxed">Suscríbete para recibir consejos botánicos y acceso anticipado a nuevas colecciones.</p>
<form className="flex border-b border-[#292524] pb-2">
<input className="bg-transparent text-xs w-full focus:outline-none placeholder:text-[#57534E]/50 text-[#292524]" placeholder="Tu correo electrónico" type="email"/>
<button className="text-[#292524] hover:text-[#4A554A] transition-colors" type="submit">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#E7E5E4]/60 gap-4">
<p className="text-[10px] text-[#57534E] font-light uppercase tracking-wider">
                © 2024 Viridis Botánica. Todos los derechos reservados.
            </p>
<div className="flex gap-6 text-[#57534E]">
<a className="hover:text-[#292524] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-minimalistic-linear"></iconify-icon></a>
<a className="hover:text-[#292524] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
