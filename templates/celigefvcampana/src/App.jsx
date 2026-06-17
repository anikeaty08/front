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



        // Smooth parallax effect on Hero Title
        document.addEventListener('mousemove', (e) => {
            const h1 = document.querySelector('h1');
            if(h1) {
                const x = (window.innerWidth - e.pageX) / 80;
                const y = (window.innerHeight - e.pageY) / 80;
                h1.style.transform = `translate(${x}px, ${y}px)`;
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
      

<nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center glass top-4 rounded-xl w-[94%] left-1/2 -translate-x-1/2 transition-all duration-300">
<div className="flex items-center gap-2">

<div className="leading-none text-2xl font-bold text-white tracking-tighter">
                FV
            </div>
</div>
<div className="hidden md:flex gap-10 font-medium text-xs tracking-widest uppercase text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#historias">Historias</a>
<a className="hover:text-white transition-colors duration-300" href="#selector">Tu Momento</a>
<a className="hover:text-white transition-colors duration-300" href="#productos">Colecciones</a>
</div>
<button className="group bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold py-2 px-5 rounded-full transition-all flex items-center gap-2">
            CONTACTAR
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">

<img alt="Agua" className="w-full h-full object-cover opacity-30 grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04457560-7be5-498f-8036-e8d1e056ada2_3840w.jpg" style={{}}/>
<div className="hero-video-overlay absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
<h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-tight" style={{transform: 'translate(2.1625px, -8.8125px)'}}>
<span className="animate-fade-1 block text-sky-500">Fluye tu vida.</span>
<span className="animate-fade-2 block text-white text-glow-cyan">Fluye tu hogar.</span>
</h1>
<p className="animate-fade-2 mt-6 text-lg md:text-xl font-light tracking-wide text-slate-400 max-w-xl mx-auto">
                Donde el agua fluye, tu vida también.
            </p>
<div className="animate-fade-2 mt-16 flex justify-center">
<a className="group flex flex-col items-center gap-3 text-slate-500 hover:text-white transition-colors text-xs font-semibold tracking-[0.2em] uppercase" href="#historias">
                    Descubre cómo
                    <iconify-icon className="text-3xl animate-bounce text-cyan-500/80" icon="solar:mouse-circle-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="md:px-12 bg-slate-950 pt-32 pr-6 pb-32 pl-6 relative" id="historias">
<div className="max-w-7xl mr-auto ml-auto">
<div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-6 border-b border-white/5 pb-8">
<div className="">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">Historias donde la vida fluye</h2>
<p className="text-slate-400 text-sm md:text-base max-w-lg">Narrativas líquidas que transforman espacios en experiencias.</p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-4xl text-cyan-500/50" icon="solar:waterdrops-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-6 gap-y-6">

<div className="group relative h-[600px] rounded-2xl overflow-hidden card-zoom border border-white/5 bg-slate-900">

<img alt="Abuelo y Nieta" className="transition-slow grayscale-[0.2] group-hover:grayscale-0 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daccc8ad-ab90-46bd-8322-952426b7ad0c_1600w.jpg"/>

<div className="absolute inset-0 story-gradient"></div>
<div className="md:p-10 flex flex-col w-full h-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 justify-end">
<div className="transform group-hover:translate-y-0 transition-slow translate-y-4">
<span className="inline-flex items-center gap-2 uppercase text-xs font-bold text-amber-300/90 tracking-[0.2em] mb-3">
<iconify-icon icon="solar:heart-angle-linear" style={{fontSize: '16px'}}></iconify-icon> Herencia
                            </span>
<h3 className="md:text-4xl leading-tight text-3xl font-bold text-white tracking-tight mb-4">Mi nuevo amigo Bruno</h3>
<p className="md:text-base leading-relaxed text-sm text-slate-300 max-w-md border-amber-300/30 border-l-2 mb-8 pl-4">"Cuando el agua corre sobre las manos de un abuelo y su nieta, no solo se lavan las manos: fluye el cariño que convierte una casa nueva en hogar."</p>
<div className="transform group-hover:translate-y-0 transition-slow translate-y-4">
<iconify-icon className="text-amber-300" icon="solar:water-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400 tracking-wide">Fluye su historia. Fluye su hogar.</span>
</div>
</div>
</div>
</div>

<div className="group relative h-[600px] rounded-2xl overflow-hidden card-zoom border border-white/5 bg-slate-900">
<img alt="Bebé en camino" className="w-full h-full object-cover opacity-80 transition-slow grayscale-[0.2] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32ce539a-2c26-4029-8bc2-73ee5e67ac5d_1600w.jpg"/>
<div className="story-gradient absolute top-0 right-0 bottom-0 left-0"></div>
<div className="md:p-10 flex flex-col w-full h-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 justify-end">
<div className="transform group-hover:translate-y-0 transition-slow translate-y-4">
<span className="inline-flex items-center gap-2 text-cyan-300/90 text-xs font-bold tracking-[0.2em] uppercase mb-3">
<iconify-icon className="" icon="solar:stars-minimalistic-linear" style={{fontSize: '16px'}}></iconify-icon> Nuevo Comienzo
                            </span>
<h3 className="md:text-4xl leading-tight text-3xl font-bold text-white tracking-tight mb-4">Te esperamos</h3>
<p className="md:text-base leading-relaxed text-sm text-slate-300 max-w-md border-cyan-300/30 border-l-2 mb-8 pl-4">
                                "Mientras preparan el primer baño de su hijo, cada gota que imaginan cayendo del grifo es una promesa: que su vida va a fluir rodeada de cuidado."
                            </p>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<iconify-icon className="text-cyan-300" icon="solar:water-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400 tracking-wide">Fluye su futuro. Fluye su hogar.</span>
</div>
</div>
</div>
</div>

<div className="group relative h-[600px] rounded-2xl overflow-hidden card-zoom border border-white/5 bg-slate-900">
<img alt="Cocina Estabilidad" className="w-full h-full object-cover opacity-80 transition-slow grayscale-[0.2] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d6388f7-1953-441e-8266-9acd228fa2c4_1600w.jpg"/>
<div className="absolute inset-0 story-gradient"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col h-full justify-end">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-slow">
<span className="inline-flex items-center gap-2 text-emerald-300/90 text-xs font-bold tracking-[0.2em] uppercase mb-3">
<iconify-icon icon="solar:home-angle-linear" style={{fontSize: '16px'}}></iconify-icon> Estabilidad
                            </span>
<h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">Mi hogar, la mejor decisión</h3>
<p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-md border-l-2 border-emerald-300/30 pl-4">
                                "Entre verduras, risas y agua corriendo en la cocina, descubren que la verdadera estabilidad no está en las paredes, sino en los momentos que fluyen cada día."
                            </p>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<iconify-icon className="text-emerald-300" icon="solar:water-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400 tracking-wide">Fluye su rutina. Fluye su hogar.</span>
</div>
</div>
</div>
</div>

<div className="group relative h-[600px] rounded-2xl overflow-hidden card-zoom border border-white/5 bg-slate-900">
<img alt="Independencia" className="w-full h-full object-cover opacity-80 transition-slow grayscale-[0.2] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cdb7dbf1-45c8-4c1b-ac89-2d77305a28a0_1600w.jpg" style={{}}/>
<div className="absolute inset-0 story-gradient"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col h-full justify-end">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-slow">
<span className="inline-flex items-center gap-2 text-violet-300/90 text-xs font-bold tracking-[0.2em] uppercase mb-3">
<iconify-icon icon="solar:bolt-linear" style={{fontSize: '16px'}}></iconify-icon> Mi Mejor Versión
                            </span>
<h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">Mi momento es hoy</h3>
<p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-md border-l-2 border-violet-300/30 pl-4">
                                "En su primera cocina, entre luz cálida, guitarra y una llamada a mamá, el agua que cae del grifo marca el inicio de una nueva versión de sí mismo."
                            </p>
<div className="flex items-center gap-3 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<iconify-icon className="text-violet-300" icon="solar:water-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400 tracking-wide">Fluye su decisión. Fluye su hogar.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="selector">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">¿En qué etapa fluyes hoy?</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<button className="glass group p-8 rounded-2xl hover:bg-slate-800 transition duration-300 text-center flex flex-col items-center gap-4">
<div className="p-4 rounded-full bg-slate-900 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon className="text-4xl text-slate-400 group-hover:text-amber-400 transition-colors" icon="solar:cup-first-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold uppercase tracking-widest text-xs text-slate-400 group-hover:text-white">Herencia</span>
</button>
<button className="glass group p-8 rounded-2xl hover:bg-slate-800 transition duration-300 text-center flex flex-col items-center gap-4">
<div className="p-4 rounded-full bg-slate-900 group-hover:bg-cyan-500/10 transition-colors">
<iconify-icon className="text-4xl text-slate-400 group-hover:text-cyan-400 transition-colors" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold uppercase tracking-widest text-xs text-slate-400 group-hover:text-white">Comienzo</span>
</button>
<button className="glass group p-8 rounded-2xl hover:bg-slate-800 transition duration-300 text-center flex flex-col items-center gap-4">
<div className="p-4 rounded-full bg-slate-900 group-hover:bg-emerald-500/10 transition-colors">
<iconify-icon className="text-4xl text-slate-400 group-hover:text-emerald-400 transition-colors" icon="solar:key-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold uppercase tracking-widest text-xs text-slate-400 group-hover:text-white">Estabilidad</span>
</button>
<button className="glass group p-8 rounded-2xl hover:bg-slate-800 transition duration-300 text-center flex flex-col items-center gap-4">
<div className="p-4 rounded-full bg-slate-900 group-hover:bg-violet-500/10 transition-colors">
<iconify-icon className="text-4xl text-slate-400 group-hover:text-violet-400 transition-colors" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold uppercase tracking-widest text-xs text-slate-400 group-hover:text-white">Libertad</span>
</button>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-950 border-white/5 border-t pt-32 pb-32 relative" id="productos">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-4">
<span className="h-px w-8 bg-cyan-500"></span>
<span className="text-cyan-500 text-xs font-bold tracking-[0.2em] uppercase">Colecciones 2026</span>
</div>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Ingeniería que fluye</h2>
<p className="text-slate-400 text-lg font-light leading-relaxed">Piezas diseñadas para ser sentidas, no solo utilizadas. Encuentra la serie que resuena con tu espacio.</p>
</div>

<div className="hidden md:flex gap-2">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-300 group">
<iconify-icon className="text-xl group-hover:-translate-x-0.5 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-300 group">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform text-xl" height="20" icon="solar:arrow-right-linear" style={{color: 'rgb(2, 6, 23)'}} width="20"></iconify-icon>
</button>
</div>
</div>


<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-6 px-6 md:mx-0 md:px-0 [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">

<div className="min-w-[85vw] sm:min-w-[400px] md:min-w-[440px] snap-center group relative h-[560px] rounded-[32px] overflow-hidden border border-white/10 bg-slate-900/50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90 z-10 transition-opacity duration-500 group-hover:opacity-90"></div>

<img alt="Colección Epuyen Black" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cee20ca7-d2dc-4bba-9c8d-fcda2358a4c5_1600w.jpg"/>

<div className="absolute inset-x-0 bottom-0 z-20 p-8 flex flex-col justify-end h-full">
<div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
<span className="inline-block px-3 py-1 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white mb-3">
                            Best Seller
                        </span>
</div>
<div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
<div className="flex justify-between items-start mb-2">
<div className="">
<h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Epuyen Black</h3>
<p className="text-slate-400 text-sm font-medium tracking-wide">Monocomando Lavatorio</p>
</div>
<div className="text-right">
<span className="block text-white font-semibold text-lg">$245</span>
</div>
</div>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-slate-400 text-sm leading-relaxed mb-6 pt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500 border-t border-white/10">
                                Acabado negro mate de alta resistencia. Tecnología de cierre suave SoftTouch y aireador integrado para un flujo perfecto.
                            </p>
<button className="w-full bg-white text-slate-950 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors shadow-lg shadow-white/5">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon>
                                AGREGAR AL CARRITO
                            </button>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] md:min-w-[440px] snap-center group relative h-[560px] rounded-[32px] overflow-hidden border border-white/10 bg-slate-900/50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90 z-10"></div>
<img alt="Colección Dominic New" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fb538c2-5b54-458a-8265-9ccfbe9d70f9_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 z-20 p-8 flex flex-col justify-end h-full">
<div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
<div className="flex justify-between items-start mb-2">
<div className="">
<h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Dominic New</h3>
<p className="text-slate-400 text-sm font-medium tracking-wide">Juego de Bañera</p>
</div>
<div className="text-right">
<span className="block text-white font-semibold text-lg">$380</span>
</div>
</div>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-slate-400 text-sm leading-relaxed mb-6 pt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500 border-t border-white/10">
                                Diseño geométrico minimalista. Duchador manual con sistema anticalcáreo y transferencia automática de caudal.
                            </p>
<button className="w-full bg-white text-slate-950 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors shadow-lg shadow-white/5">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon>
                                AGREGAR AL CARRITO
                            </button>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] md:min-w-[440px] snap-center group relative h-[560px] rounded-[32px] overflow-hidden border border-white/10 bg-slate-900/50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90 z-10"></div>
<img alt="Tecnología Temple" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53593776-b462-41f5-8157-40bb279556b9_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 z-20 p-8 flex flex-col justify-end h-full">
<div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-[10px] font-bold tracking-widest uppercase text-cyan-300 mb-3">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon> Nueva Tecnología
                        </span>
</div>
<div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Temple Touch</h3>
<p className="text-slate-400 text-sm font-medium tracking-wide">Grifería Electrónica</p>
</div>
<div className="text-right">
<span className="block text-white font-semibold text-lg">$520</span>
</div>
</div>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-slate-400 text-sm leading-relaxed mb-6 pt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500 border-t border-white/10">
                                Activación por contacto capacitivo. Control de temperatura visual con anillo LED y sistema de ahorro de agua inteligente.
                            </p>
<button className="w-full bg-white text-slate-950 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors shadow-lg shadow-white/5">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon>
                                AGREGAR AL CARRITO
                            </button>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] md:min-w-[440px] snap-center group relative h-[560px] rounded-[32px] overflow-hidden border border-white/10 bg-slate-900/50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90 z-10"></div>
<img alt="Linea Vermont" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53593776-b462-41f5-8157-40bb279556b9_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 z-20 p-8 flex flex-col justify-end h-full">
<div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Vermont</h3>
<p className="text-slate-400 text-sm font-medium tracking-wide">Inodoro Largo + Depósito</p>
</div>
<div className="text-right">
<span className="block text-white font-semibold text-lg">$415</span>
</div>
</div>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-slate-400 text-sm leading-relaxed mb-6 pt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500 border-t border-white/10">
                                Porcelana vitrificada de máxima pureza. Sistema de descarga dual 3L/6L y cierre de asiento amortiguado.
                            </p>
<button className="w-full bg-white text-slate-950 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors shadow-lg shadow-white/5">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon>
                                AGREGAR AL CARRITO
                            </button>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[300px] md:min-w-[340px] snap-center group relative h-[560px] rounded-[32px] overflow-hidden border border-white/5 bg-white/[0.02] flex items-center justify-center hover:bg-white/[0.05] transition-colors cursor-pointer">
<div className="text-center p-8">
<div className="w-20 h-20 mx-auto rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-cyan-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Ver Catálogo Completo</h3>
<p className="text-slate-500 text-sm mb-6">Explora más de 200 productos</p>
<span className="text-cyan-500 text-xs font-bold tracking-[0.2em] uppercase border-b border-cyan-500/30 pb-1 group-hover:border-cyan-500 transition-colors">Descubrir</span>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-slate-950 pt-32 pr-6 pb-32 pl-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-cyan-900/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto glass p-12 md:p-16 rounded-[32px] text-center border-t border-white/10">
<h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">¿Listo para que tu vida fluya?</h2>
<p className="leading-relaxed text-lg text-slate-400 max-w-xl mr-auto mb-10 ml-auto">Conversa con un especialista FV. Asesoramiento técnico y estético personalizado en menos de 2 horas.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-slate-100 text-slate-950 font-semibold py-4 px-8 rounded-full text-sm tracking-wide hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    CONSULTAR ESPECIALISTA
                </button>
<button className="flex items-center justify-center gap-3 glass text-white font-semibold py-4 px-8 rounded-full text-sm tracking-wide hover:bg-white/10 transition-all border border-white/10">
<iconify-icon className="text-lg text-green-400" icon="solar:chat-round-dots-linear"></iconify-icon> WHATSAPP
                </button>
</div>
<div className="mt-10 flex items-center justify-center gap-2 text-slate-500 text-xs tracking-wider uppercase">
<iconify-icon className="text-cyan-500" icon="solar:verified-check-linear"></iconify-icon>
                Calidad Garantizada FV
            </div>
</div>
</section>

<footer className="z-10 text-center bg-[#020617] border-white/5 border-t pt-16 pb-16 relative">
<div className="mb-12">
<span className="block text-4xl font-bold tracking-tighter text-white mb-2 opacity-80">FV</span>
<p className="text-cyan-500 font-bold tracking-[0.4em] text-xs uppercase opacity-80">Tu mejor elección</p>
</div>
<div className="flex justify-center gap-10 mb-12">
<a className="text-slate-500 hover:text-white transition transform hover:scale-110" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition transform hover:scale-110" href="#">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition transform hover:scale-110" href="#">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
<p className="text-slate-600 text-xs tracking-wide">© 2026 FV Ecuador | Historias que inspiran</p>
</footer>


    </>
  );
}
