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
      

<nav className="fixed w-full z-50 top-0 bg-black/40 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-4 group" href="#">
<div className="w-10 h-10 border border-neutral-700 flex items-center justify-center rounded-full group-hover:border-neutral-400 transition-colors duration-500">
<iconify-icon className="text-neutral-300" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white font-medium tracking-[0.3em] text-xs uppercase">Nido de Espíritus</span>
<span className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase">Residencias de Alma</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#">Experiencia</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#">Refugios</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#">Filosofía</a>
<a className="px-6 py-2.5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500 text-xs font-medium uppercase tracking-widest" href="#">
                    Reservar
                </a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Arquitectura orgánica" className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_12s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]"></div>
</div>
<div className="relative z-10 text-center max-w-5xl px-6">
<div className="mb-8 flex justify-center">
<div className="h-px w-20 bg-neutral-700"></div>
</div>
<h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-white tracking-tight leading-[1.05] mb-8">
                Donde el Silencio <br/> Encuentra su <span className="italic font-normal text-gold-gradient">Espacio.</span>
</h1>
<p className="text-neutral-400 text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed">
                Un santuario de arquitectura orgánica diseñado para reconectar el espíritu con lo esencial. Lujo consciente en el corazón de la naturaleza.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="px-10 py-4 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors min-w-[200px]" href="#experiencia">
                    Explorar Nidos
                </a>
<a className="px-10 py-4 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors min-w-[200px]" href="#contacto">
                    Inicia tu Viaje
                </a>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
<span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Descubrir</span>
<iconify-icon icon="solar:mouse-minimalistic-linear" width="20"></iconify-icon>
</div>
</header>

<section className="py-24 bg-[#050505] border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-16 text-center">
<div className="space-y-3">
<h3 className="text-4xl font-light text-white tracking-tight">40<span className="text-neutral-600">Ha</span></h3>
<p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">Bosque Protegido</p>
</div>
<div className="space-y-3">
<h3 className="text-4xl font-light text-white tracking-tight">12</h3>
<p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">Santuarios Privados</p>
</div>
<div className="space-y-3">
<h3 className="text-4xl font-light text-white tracking-tight">100<span className="text-neutral-600">%</span></h3>
<p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">Energía Sostenible</p>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-2 gap-24 items-center">
<div className="order-2 lg:order-1 space-y-10">
<div className="flex items-center gap-4 text-neutral-500">
<iconify-icon icon="solar:infinity-linear" width="24"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-[0.3em]">Nuestra Esencia</span>
</div>
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
                        La Belleza de <br/> <span className="text-neutral-600 italic">lo Intangible.</span>
</h2>
<div className="space-y-8 text-sm md:text-base text-neutral-400 leading-relaxed font-light">
<p>
                            Nido de Espíritus nace de la premisa de que el verdadero lujo no reside en la opulencia, sino en la calidad del tiempo y la profundidad de la conexión con nuestro entorno.
                        </p>
<p>
                            Nuestras estructuras están diseñadas para desaparecer entre la vegetación, permitiendo que la luz, el viento y el canto de la selva se conviertan en los verdaderos protagonistas de tu estancia.
                        </p>
</div>
<div className="pt-6">
<a className="inline-flex items-center gap-3 text-white text-xs uppercase tracking-widest hover:text-neutral-400 transition-colors group" href="#">
                            Nuestra Visión Arquitectónica
                            <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="order-1 lg:order-2 relative group">
<div className="absolute -inset-6 border border-white/5 rounded-full rotate-12 group-hover:rotate-0 transition-transform duration-1000"></div>
<div className="relative overflow-hidden aspect-square bg-neutral-900 rounded-2xl">
<img alt="Detalle minimalista" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:scale-105 transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-3xl mx-auto mb-24">
<span className="text-neutral-500 text-xs font-medium uppercase tracking-[0.4em] mb-4 block">Pilares</span>
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">Experiencias Curadas</h2>
</div>
<div className="grid md:grid-cols-3 gap-px bg-white/5">

<div className="group p-12 bg-neutral-950 hover:bg-neutral-900/50 transition-all duration-700">
<div className="mb-10 text-neutral-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">Bienestar Holístico</h3>
<p className="text-xs text-neutral-500 leading-relaxed uppercase tracking-wider">
                        Terapias de sonido, meditación guiada y rituales de spa que honran las tradiciones ancestrales de la región.
                    </p>
</div>

<div className="group p-12 bg-neutral-950 hover:bg-neutral-900/50 transition-all duration-700">
<div className="mb-10 text-neutral-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:compass-big-linear" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">Diseño Consciente</h3>
<p className="text-xs text-neutral-500 leading-relaxed uppercase tracking-wider">
                        Espacios abiertos que eliminan las fronteras entre el interior y el exterior, promoviendo una vida en armonía.
                    </p>
</div>

<div className="group p-12 bg-neutral-950 hover:bg-neutral-900/50 transition-all duration-700">
<div className="mb-10 text-neutral-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wineglass-triangle-linear" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">Gastronomía Viva</h3>
<p className="text-xs text-neutral-500 leading-relaxed uppercase tracking-wider">
                        Cocina de origen con ingredientes recolectados en nuestros propios huertos orgánicos y comunidades locales.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505]" id="experiencia">
<div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="max-w-xl">
<span className="text-neutral-500 text-xs font-medium uppercase tracking-[0.3em] mb-4 block">Refugios</span>
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">Santuarios de Estancia</h2>
</div>
<a className="flex items-center gap-3 text-xs text-neutral-500 hover:text-white transition-colors uppercase tracking-widest border-b border-neutral-800 pb-2" href="#">
                Ver Colección Completa
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8 px-6 md:px-12">

<div className="group relative overflow-hidden cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-sm">
<img alt="Nido Elemental" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-8 flex justify-between items-start">
<div>
<p className="text-neutral-500 text-[10px] uppercase tracking-[0.3em] mb-2">Aire &amp; Luz</p>
<h3 className="text-2xl text-white font-light tracking-tight">Nido Elemental</h3>
</div>
<span className="text-xs text-neutral-500 font-light italic">Desde $450 / noche</span>
</div>
</div>

<div className="group relative overflow-hidden cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-sm">
<img alt="Nido Ancestral" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-8 flex justify-between items-start">
<div>
<p className="text-neutral-500 text-[10px] uppercase tracking-[0.3em] mb-2">Tierra &amp; Raíz</p>
<h3 className="text-2xl text-white font-light tracking-tight">Nido Ancestral</h3>
</div>
<span className="text-xs text-neutral-500 font-light italic">Desde $580 / noche</span>
</div>
</div>
</div>
</section>

<section className="py-40 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-900">
<img className="w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
<h2 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-8">El despertar te espera.</h2>
<p className="text-neutral-400 font-light text-lg mb-12 max-w-2xl mx-auto">
                Reserva tu santuario y permite que el espíritu de la naturaleza guíe tu descanso.
            </p>
<button className="group relative px-12 py-5 bg-transparent overflow-hidden border border-white/20 text-white hover:text-black transition-colors duration-500">
<div className="absolute inset-0 w-0 group-hover:w-full bg-white transition-all duration-500"></div>
<span className="relative text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-4">
                    Comenzar Experiencia
                    <iconify-icon icon="solar:calendar-minimalistic-linear" width="18"></iconify-icon>
</span>
</button>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-24 pb-12" id="contacto">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
<div className="md:col-span-1">
<a className="flex flex-col gap-2 mb-8" href="#">
<span className="text-white font-medium tracking-[0.3em] text-sm uppercase">Nido de Espíritus</span>
<span className="text-[9px] tracking-[0.4em] text-neutral-500 uppercase">Residencias de Alma</span>
</a>
<p className="text-neutral-500 text-xs leading-relaxed uppercase tracking-wider">
                        Un refugio para los que buscan profundidad en la sencillez.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-8">Santuario</h4>
<ul className="space-y-4 text-xs text-neutral-500 uppercase tracking-widest">
<li><a className="hover:text-white transition-colors" href="#">Los Nidos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Wellness</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gastronomía</a></li>
<li><a className="hover:text-white transition-colors" href="#">Entorno</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-8">Legal</h4>
<ul className="space-y-4 text-xs text-neutral-500 uppercase tracking-widest">
<li><a className="hover:text-white transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Términos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sostenibilidad</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-8">Conectar</h4>
<ul className="space-y-4 text-xs text-neutral-500 uppercase tracking-widest">
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:letter-linear"></iconify-icon>
                            hola@nidodeespiritus.com
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:map-point-linear"></iconify-icon>
                            Valle de Bravo, México
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:phone-linear"></iconify-icon>
                            +52 (55) 8900 1234
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
<p className="text-[10px] text-neutral-600 uppercase tracking-[0.3em]">© 2024 Nido de Espíritus. El alma de la tierra.</p>
<div className="flex gap-8">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:share-circle-linear" width="18"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
