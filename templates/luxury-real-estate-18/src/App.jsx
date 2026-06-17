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



        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Scrolled: White background, black text
                navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'border-neutral-100', 'text-neutral-900');
                navbar.classList.remove('border-white/10', 'text-white');
            } else {
                // Top: Transparent background, white text
                navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'border-neutral-100', 'text-neutral-900');
                navbar.classList.add('border-white/10', 'text-white');
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 group hover:bg-white/90 hover:backdrop-blur-md hover:border-b hover:border-neutral-100 border-b border-white/10 text-white hover:text-neutral-900" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter uppercase flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg group-hover:bg-black group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="18"></span>
</div>
                ESTATE
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal opacity-80 hover:opacity-100 transition-opacity" href="#">Comprar</a>
<a className="text-sm font-normal opacity-80 hover:opacity-100 transition-opacity" href="#">Alquilar</a>
<a className="text-sm font-normal opacity-80 hover:opacity-100 transition-opacity" href="#">Vender</a>
<a className="text-sm font-normal opacity-80 hover:opacity-100 transition-opacity" href="#">Agentes</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity" href="#">Ingresar</a>
<a className="text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300" href="#">
                    Publicar Propiedad
                </a>
</div>
<button className="md:hidden">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover scale-105" loop="" muted="" playsinline="">

<source src="https://static.videezy.com/system/resources/previews/000/019/337/original/broll-of-modern-living-room-interior-design.mp4" type="video/mp4"/>

<img alt="Luxury Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80"/>
</video>

<div className="absolute inset-0 hero-overlay z-10"></div>
</div>
<div className="relative z-20 max-w-4xl mx-auto text-center px-6 pt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-enter">
<span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase">Nueva colección 2024</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[0.95] animate-enter delay-100 drop-shadow-sm">
                Encuentra tu lugar<br/><span className="text-white/60">en el mundo.</span>
</h1>
<p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-12 animate-enter delay-200">
                Curaduría de propiedades excepcionales para estilos de vida únicos. Simplicidad, diseño y ubicaciones privilegiadas.
            </p>

<div className="bg-white/95 backdrop-blur-xl p-2 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-white/20 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2 animate-enter delay-300">
<div className="flex-1 w-full px-4 py-3 border-b md:border-b-0 md:border-r border-neutral-100 group cursor-pointer hover:bg-neutral-50 rounded-xl transition-colors">
<label className="block text-xs font-medium text-neutral-400 mb-1">Ubicación</label>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-900">Madrid, España</span>
<span className="iconify text-neutral-300 group-hover:text-black transition-colors" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="16"></span>
</div>
</div>
<div className="flex-1 w-full px-4 py-3 border-b md:border-b-0 md:border-r border-neutral-100 group cursor-pointer hover:bg-neutral-50 rounded-xl transition-colors">
<label className="block text-xs font-medium text-neutral-400 mb-1">Tipo</label>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-900">Apartamento</span>
<span className="iconify text-neutral-300 group-hover:text-black transition-colors" data-icon="lucide:chevron-down" data-strokeWidth="1.5" data-width="16"></span>
</div>
</div>
<div className="flex-1 w-full px-4 py-3 group cursor-pointer hover:bg-neutral-50 rounded-xl transition-colors">
<label className="block text-xs font-medium text-neutral-400 mb-1">Precio</label>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-900">Cualquier Rango</span>
<span className="iconify text-neutral-300 group-hover:text-black transition-colors" data-icon="lucide:sliders-horizontal" data-strokeWidth="1.5" data-width="16"></span>
</div>
</div>
<button className="w-full md:w-auto bg-black text-white h-12 px-8 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all hover:scale-[1.02]">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
                    Buscar
                </button>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20 text-white">
<span className="iconify" data-icon="lucide:arrow-down" data-strokeWidth="1.5" data-width="24"></span>
</div>
</header>

<section className="bg-black text-white py-6 overflow-hidden border-b border-neutral-800">
<div className="whitespace-nowrap flex gap-12 animate-scroll">
<div className="flex gap-12 text-sm font-medium tracking-widest uppercase opacity-70">
<span>Madrid</span> <span className="text-neutral-600">/</span>
<span>Barcelona</span> <span className="text-neutral-600">/</span>
<span>Málaga</span> <span className="text-neutral-600">/</span>
<span>Valencia</span> <span className="text-neutral-600">/</span>
<span>Ibiza</span> <span className="text-neutral-600">/</span>
<span>Mallorca</span> <span className="text-neutral-600">/</span>
<span>Sevilla</span> <span className="text-neutral-600">/</span>
<span>San Sebastián</span> <span className="text-neutral-600">/</span>
</div>
<div className="flex gap-12 text-sm font-medium tracking-widest uppercase opacity-70">
<span>Madrid</span> <span className="text-neutral-600">/</span>
<span>Barcelona</span> <span className="text-neutral-600">/</span>
<span>Málaga</span> <span className="text-neutral-600">/</span>
<span>Valencia</span> <span className="text-neutral-600">/</span>
<span>Ibiza</span> <span className="text-neutral-600">/</span>
<span>Mallorca</span> <span className="text-neutral-600">/</span>
<span>Sevilla</span> <span className="text-neutral-600">/</span>
<span>San Sebastián</span> <span className="text-neutral-600">/</span>
</div>
</div>
</section>

<section className="border-b border-neutral-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl font-medium tracking-tight mb-1 group-hover:translate-x-2 transition-transform duration-300">1,200+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Propiedades</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl font-medium tracking-tight mb-1 group-hover:translate-x-2 transition-transform duration-300 delay-75">850</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Vendidas</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl font-medium tracking-tight mb-1 group-hover:translate-x-2 transition-transform duration-300 delay-100">15</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Años Exp.</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl font-medium tracking-tight mb-1 group-hover:translate-x-2 transition-transform duration-300 delay-150">99%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Satisfacción</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Colecciones Privadas</h2>
<p className="text-neutral-500 font-light text-sm max-w-md">Explora inmuebles seleccionados por estilo arquitectónico y modo de vida.</p>
</div>
<a className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-60 transition-opacity" href="#">Ver todas las colecciones</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-neutral-100">
<img alt="Minimalist" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
<span className="text-xs font-medium text-white/80 uppercase tracking-wider mb-2">Tendencia</span>
<h3 className="text-3xl font-medium text-white tracking-tight">Arquitectura Minimalista</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<p className="text-white/80 font-light text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Líneas limpias y espacios abiertos para una vida sin ruido.</p>
</div>
</div>
</div>

<div className="grid grid-rows-2 gap-6">
<div className="relative group overflow-hidden rounded-2xl bg-neutral-100">
<img alt="Luxury" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors p-6 flex flex-col justify-end">
<h3 className="text-xl font-medium text-white tracking-tight">Villas Históricas</h3>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl bg-neutral-100">
<img alt="Penthouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors p-6 flex flex-col justify-end">
<h3 className="text-xl font-medium text-white tracking-tight">Penthouses Urbanos</h3>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Propiedades Destacadas</h2>
<p className="text-neutral-500 font-light text-sm">Espacios seleccionados para vivir mejor.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-3 mr-4">
<span className="text-xs font-medium text-neutral-500">Alquiler</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 border-neutral-300 top-0 left-0 checked:left-5" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-300 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
<span className="text-xs font-medium text-black">Venta</span>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg text-xs font-medium hover:border-black transition-colors">
<span className="iconify" data-icon="lucide:filter" data-strokeWidth="1.5" data-width="14"></span>
                Filtros
            </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-4">
<img alt="House" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600596542815-3ad19fb812a7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                        NUEVO
                    </div>
<button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-neutral-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">Villa Minimalista</h3>
<p className="text-sm text-neutral-500 font-light">Las Rozas, Madrid</p>
</div>
<p className="text-lg font-semibold tracking-tight">€1.2M</p>
</div>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-3 mt-3">
<div className="flex items-center gap-1.5 text-neutral-500">
<span className="iconify" data-icon="lucide:bed-double" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs font-medium">4 Hab</span>
</div>
<div className="flex items-center gap-1.5 text-neutral-500">
<span className="iconify" data-icon="lucide:bath" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs font-medium">3 Baños</span>
</div>
<div className="flex items-center gap-1.5 text-neutral-500">
<span className="iconify" data-icon="lucide:ruler" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs font-medium">350 m²</span>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-4">
<img alt="House" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-neutral-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">Loft Industrial</h3>
<p className="text-sm text-neutral-500 font-light">Poblenou, Barcelona</p>
</div>
<p className="text-lg font-semibold tracking-tight">€850k</p>
</div>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-3 mt-3">
<div className="flex items-center gap-1.5 text-neutral-500">
<span className="iconify" data-icon="lucide:bed-double" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs font-medium">2 Hab</span>
</div>
<div className="flex items-center gap-1.5 text-neutral-500">
<span className="iconify" data-icon="lucide:bath" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs font-medium">2 Baños</span>
</div>
<div className="flex items-center gap-1.5 text-neutral-500">
<span className="iconify" data-icon="lucide:ruler" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs font-medium">180 m²</span>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-4">
<img alt="House" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                        EXCLUSIVO
                    </div>
<button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-neutral-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">Casa del Lago</h3>
<p className="text-sm text-neutral-500 font-light">Málaga, Andalucía</p>
</div>
<p className="text-lg font-semibold tracking-tight">€2.4M</p>
</div>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-3 mt-3">
<div className="flex items-center gap-1.5 text-neutral-500">
<span className="iconify" data-icon="lucide:bed-double" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs font-medium">5 Hab</span>
</div>
<div className="flex items-center gap-1.5 text-neutral-500">
<span className="iconify" data-icon="lucide:bath" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs font-medium">4 Baños</span>
</div>
<div className="flex items-center gap-1.5 text-neutral-500">
<span className="iconify" data-icon="lucide:ruler" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs font-medium">500 m²</span>
</div>
</div>
</article>
</div>
<div className="mt-12 text-center">
<button className="group inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
                Ver todas las propiedades
                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</section>

<section className="bg-neutral-950 text-white py-24 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-900/50 skew-x-12 translate-x-32 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">Nuestra Filosofía</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Diseñado para la<br/>vida moderna.</h2>
<p className="text-neutral-400 font-light text-lg mb-8 leading-relaxed">
                        No solo vendemos metros cuadrados, vendemos una experiencia. Utilizamos tecnología de vanguardia y un diseño centrado en el humano para conectar personas con espacios que inspiran.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-[360deg]">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="font-medium mb-1 group-hover:text-neutral-200 transition-colors">Seguridad Garantizada</h4>
<p className="text-sm text-neutral-500 font-light">Procesos verificados y transparencia total en cada transacción.</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-[360deg]">
<span className="iconify" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="font-medium mb-1 group-hover:text-neutral-200 transition-colors">Gestión Digital</h4>
<p className="text-sm text-neutral-500 font-light">Firmas digitales, tours virtuales y gestión sin papeles.</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-[360deg]">
<span className="iconify" data-icon="lucide:gem" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="font-medium mb-1 group-hover:text-neutral-200 transition-colors">Propiedades Premium</h4>
<p className="text-sm text-neutral-500 font-light">Acceso exclusivo a inmuebles que no están en el mercado abierto.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[600px] rounded-2xl overflow-hidden group shadow-2xl shadow-black/50">
<img alt="Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl transform translate-y-0 hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center justify-between text-white">
<div>
<p className="text-xs uppercase tracking-widest opacity-70 mb-1">Proyecto Destacado</p>
<p className="font-medium text-lg">Residencia Horizon</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6 text-center">
<div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-6 transition-transform">
<span className="iconify text-neutral-400" data-icon="lucide:mail" data-strokeWidth="1" data-width="32"></span>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Sé el primero en saber.</h2>
<p className="text-neutral-500 font-light mb-8">Recibe propiedades exclusivas en tu bandeja de entrada antes de que sean públicas.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative group">
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 transition-all outline-none" placeholder="tu@email.com" type="email"/>
<button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors shadow-lg shadow-black/10 whitespace-nowrap transform group-hover:translate-x-1 duration-300" type="button">
                Suscribirse
            </button>
</form>
</section>

<footer className="border-t border-neutral-100 bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-medium tracking-tighter uppercase flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded">
<span className="iconify" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="14"></span>
</div>
                        ESTATE
                    </a>
<p className="text-sm text-neutral-500 font-light max-w-xs">
                        Redefiniendo la experiencia inmobiliaria con diseño, tecnología y un servicio excepcional.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Propiedades</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Comprar</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Alquilar</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Vender</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Nuevos Proyectos</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Compañía</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Sobre Nosotros</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Agentes</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Carreras</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Términos</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Privacidad</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Cookies</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-black transition-colors hover:scale-110" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-neutral-400 hover:text-black transition-colors hover:scale-110" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-neutral-400 hover:text-black transition-colors hover:scale-110" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 Estate Inc. Todos los derechos reservados.</p>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs text-neutral-500">Sistemas operativos</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
