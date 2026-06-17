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
      

<div className="max-w-[1800px] mx-auto border-x border-zinc-100 min-h-screen flex flex-col relative">

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
<div className="flex items-stretch h-16">

<div className="w-full md:w-64 flex-shrink-0 border-r border-zinc-100 flex items-center px-6">
<a className="flex items-center" href="#">
<img alt="TELAVELO" className="w-auto h-7 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9fa10cd-5f5a-4cf0-913a-9b49b862d2e6_320w.png"/>
</a>
</div>

<nav className="hidden md:flex flex-1 gap-8 uppercase text-xs font-medium text-zinc-500 tracking-wide pr-8 pl-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-zinc-900 transition-colors" href="#">Velas de Diseño</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Velas Divertidas</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Packs Regalo</a>
<a className="hover:text-zinc-900 transition-colors text-zinc-900" href="#">Blog</a>
</nav>

<div className="hidden md:flex items-center">
<div className="flex hover:bg-zinc-50 transition-colors cursor-pointer h-full border-zinc-100 border-l pr-6 pl-6 items-center justify-center">
<svg className="text-zinc-900" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M18.5 18.5L22 22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="h-full border-l border-zinc-100 px-6 flex items-center justify-center hover:bg-zinc-50 transition-colors cursor-pointer relative group">
<span className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
<svg className="text-zinc-900" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M3 6H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</header>
<main className="flex-1 flex flex-col">

<section className="grid grid-cols-1 md:grid-cols-12 min-h-[600px] border-zinc-100 border-b">

<div className="md:col-span-7 md:p-20 flex flex-col md:border-b-0 border-zinc-100 border-b pt-12 pr-12 pb-12 pl-12 relative justify-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-10">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                            Nueva Colección 2024
                        </div>
<h1 className="text-6xl md:text-8xl tracking-tighter font-medium text-zinc-900 leading-[0.9] mb-10">
                            Arte Efímero <br/>
<span className="text-zinc-300">&amp;</span> Diseño
                        </h1>
</div>
<div className="max-w-md">
<p className="text-zinc-500 text-lg leading-relaxed mb-10 font-light">
                            Velas escultóricas hechas a mano en España. Piezas únicas de cera de soja que transforman tu espacio con aroma y forma.
                        </p>
<a className="inline-flex items-center gap-4 text-sm font-medium hover:opacity-70 transition-opacity" href="#">
                            Ver Colección
                            <svg className="" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12L20 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M14 6L20 12L14 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>

<div className="md:col-span-5 relative md:border-l border-zinc-100 bg-zinc-100 h-full w-full">

<img alt="Hero Candle Image" className="contrast-125 w-full h-full object-cover brightness-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0e2586f-39fa-4cf1-9dfe-fae555e9e43a_1600w.png"/>
<div className="absolute bottom-0 left-0 w-full border-t border-zinc-100/20 bg-white/10 backdrop-blur-md p-6 flex justify-between items-center text-white">
<span className="text-xs uppercase tracking-widest font-medium">Hecho en España</span>
<span className="text-xs font-mono">100% Cera de Soja</span>
</div>
</div>
</section>

<div className="border-b border-zinc-100 py-4 px-6 md:px-0 flex flex-col md:flex-row md:divide-x divide-zinc-100">
<div className="flex-1 md:px-6 flex items-center gap-3 py-2 md:py-0">
<svg className="text-zinc-400" fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M2 12H22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium uppercase tracking-wide text-zinc-600">Envíos a toda Europa</span>
</div>
<div className="flex-1 md:px-6 flex items-center gap-3 py-2 md:py-0">
<svg className="text-zinc-400" fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5C6.98528 16.5 9 14.4853 9 12C9 9.51472 6.98528 7.5 4.5 7.5C2.01472 7.5 0 9.51472 0 12C0 14.4853 2.01472 16.5 4.5 16.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M12 21V3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M19.5 16.5C21.9853 16.5 24 14.4853 24 12C24 9.51472 21.9853 7.5 19.5 7.5C17.0147 7.5 15 9.51472 15 12C15 14.4853 17.0147 16.5 19.5 16.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium uppercase tracking-wide text-zinc-600">Artesanía Sostenible</span>
</div>
<div className="flex-1 md:px-6 flex items-center gap-3 py-2 md:py-0">
<svg className="text-zinc-400" fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M9 12L11 14L15 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium uppercase tracking-wide text-zinc-600">Pago 100% Seguro</span>
</div>
</div>

<section className="flex-1 grid grid-cols-1 lg:grid-cols-4 md:divide-x divide-zinc-100">

<div className="p-6 md:p-8 space-y-8 border-b lg:border-b-0 border-zinc-100">
<div className="">
<h3 className="text-sm font-semibold text-zinc-900 mb-6 uppercase tracking-wider flex items-center gap-2">
<svg fill="none" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M6 12H18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M10 17H14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
                            Filtrar por
                        </h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-900 flex items-center justify-center transition-colors">
<div className="w-2 h-2 rounded-full bg-zinc-900"></div>
</div>
<span className="text-sm text-zinc-900">Más Vendidos</span>
<span className="text-xs text-zinc-400 ml-auto tabular-nums">42</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-900 flex items-center justify-center transition-colors">
</div>
<span className="text-sm text-zinc-500 group-hover:text-zinc-900">Velas Aromáticas</span>
<span className="text-xs text-zinc-400 ml-auto tabular-nums">18</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-900 flex items-center justify-center transition-colors">
</div>
<span className="text-sm text-zinc-500 group-hover:text-zinc-900">Sin Aroma</span>
<span className="text-xs text-zinc-400 ml-auto tabular-nums">24</span>
</label>
</div>
</div>
<div className="h-px w-full bg-zinc-100"></div>
<div className="">
<h3 className="text-sm font-semibold text-zinc-900 mb-6 uppercase tracking-wider flex items-center gap-2">
                            Colecciones
                        </h3>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">Diseño</button>
<button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">Fálicas</button>
<button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">Packs</button>
<button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">Novedades</button>
</div>
</div>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-100">

<div className="group flex flex-col border-b border-zinc-100 lg:border-b-0 hover:bg-zinc-50 transition-colors">
<div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
<img alt="Vela Cuerpo" className="transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-multiply w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0e2586f-39fa-4cf1-9dfe-fae555e9e43a_800w.png"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-sm font-semibold text-zinc-900">Vela Torso</h4>
<p className="text-xs text-zinc-500 mt-1">Colección Fálicas/Cuerpo</p>
</div>
<span className="text-sm font-medium">18,00€</span>
</div>
</div>
</div>

<div className="group flex flex-col border-b border-zinc-100 lg:border-b-0 hover:bg-zinc-50 transition-colors">
<div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
<div className="absolute top-4 right-4 z-10">
<span className="px-2 py-0.5 border border-zinc-900 text-[10px] font-bold uppercase tracking-wide text-zinc-900 bg-white">Agotado</span>
</div>
<img alt="Vela Geométrica" className="transition-transform duration-500 group-hover:scale-105 opacity-50 mix-blend-multiply w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0e2586f-39fa-4cf1-9dfe-fae555e9e43a_800w.png"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-sm font-semibold text-zinc-900">Vela Cubo Burbujas</h4>
<p className="text-xs text-zinc-500 mt-1">Velas de Diseño</p>
</div>
<span className="text-sm font-medium text-zinc-400 line-through">15,00€</span>
</div>
</div>
</div>

<div className="group flex flex-col border-b border-zinc-100 lg:border-b-0 hover:bg-zinc-50 transition-colors">
<div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
<div className="absolute top-4 left-4 z-10">
<svg className="text-zinc-900" fill="none" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L14.4 7.2L20 8.5L16 13.5L17.5 19L12 16.5L6.5 19L8 13.5L4 8.5L9.6 7.2L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<img alt="Pack Regalo" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain grayscale opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-zinc-900">Pack Esencial</h4>
<p className="text-xs text-zinc-500 mt-1">Packs Regalo</p>
</div>
<span className="text-sm font-medium">45,00€</span>
</div>
</div>
</div>

<div className="group flex flex-col border-b md:border-b-0 border-zinc-100 hover:bg-zinc-50 transition-colors">
<div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
<img alt="Vela Nudo" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain grayscale opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-zinc-900">Vela Nudo Grande</h4>
<p className="text-xs text-zinc-500 mt-1">Velas de Diseño</p>
</div>
<span className="text-sm font-medium">22,00€</span>
</div>
</div>
</div>

<div className="group flex flex-col border-b md:border-b-0 border-zinc-100 hover:bg-zinc-50 transition-colors">
<div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
<img alt="Vela Abstracta" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain grayscale opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-sm font-semibold text-zinc-900">Vela Abstracta 01</h4>
<p className="text-xs text-zinc-500 mt-1">Velas de Diseño</p>
</div>
<span className="text-sm font-medium">28,00€</span>
</div>
</div>
</div>

<div className="group bg-zinc-900 text-white flex flex-col justify-center p-8 relative overflow-hidden h-full min-h-[400px]">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<svg className="text-zinc-500 mb-4" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M7 10L12 14L17 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h4 className="text-xl font-medium tracking-tight mb-2">Únete a Telavelo</h4>
<p className="text-zinc-400 text-xs leading-relaxed mb-6">
                                    Recibe noticias sobre nuevos diseños, reposiciones y descuentos exclusivos.
                                </p>
</div>
<form className="flex border-b border-zinc-700 pb-2">
<input className="bg-transparent text-sm w-full outline-none placeholder:text-zinc-600" placeholder="Tu Email" type="email"/>
<button className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors" type="submit">Suscribirse</button>
</form>
</div>
<div className="absolute -right-10 -bottom-10 opacity-10">
<svg fill="none" height="200" viewbox="0 0 24 24" width="200" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</section><section className="md:px-8 bg-white border-zinc-200 border-t pt-24 pr-4 pb-24 pl-4 relative">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[340px]">

<div className="group relative bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between overflow-hidden lg:col-span-1 lg:row-span-1 border border-zinc-200/50">
<div className="absolute inset-0 flex items-center justify-center p-8">
<img alt="Vela Destacada" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain grayscale" src="https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col gap-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full border border-zinc-200 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
<button className="w-3 h-3 rounded-full bg-orange-100 ring-1 ring-zinc-100"></button>
<button className="w-3 h-3 rounded-full bg-stone-200 ring-1 ring-zinc-100"></button>
<button className="w-3 h-3 rounded-full bg-white ring-1 ring-zinc-100"></button>
</div>
<div className="relative z-10 mt-auto flex items-center justify-between w-full">
<span className="text-sm font-semibold text-zinc-900 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-zinc-100">Vela U (Arco)</span>
<button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors shadow-sm border border-zinc-100">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
</button>
</div>
</div>

<div className="relative bg-zinc-50 rounded-3xl p-6 flex items-center overflow-hidden lg:col-span-2 lg:row-span-1 border border-zinc-200">
<div className="grid grid-cols-2 gap-8 w-full h-full">

<div className="flex flex-wrap content-center gap-2">
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Decoración</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Minimalista</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Hecho a mano</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Regalos</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Aromaterapia</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Soja</span>
</div>

<div className="relative h-full flex items-center justify-center">
<div className="bg-white rounded-2xl p-4 w-4/5 aspect-[4/5] relative overflow-hidden group cursor-pointer shadow-lg border border-zinc-100">
<img alt="Preview" className="group-hover:opacity-100 transition-opacity opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-3 right-3 w-6 h-6 bg-white/40 backdrop-blur rounded-full flex items-center justify-center border border-white/50">
<svg className="text-zinc-900 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#B6B5AC] rounded-3xl p-8 flex flex-col relative overflow-hidden lg:col-span-1 lg:row-span-2 shadow-lg">
<div className="flex justify-between items-start mb-4">
<h3 className="text-3xl font-medium text-white tracking-tight leading-none">EdiciónLimitada</h3>
</div>
<div className="flex-1 relative flex items-center justify-center py-8">
<img alt="Edición Especial" className="mix-blend-multiply w-full h-full object-contain drop-shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute top-[30%] left-[40%] group">
<div className="w-3 h-3 bg-white rounded-full animate-ping absolute opacity-75"></div>
<div className="w-3 h-3 bg-white rounded-full relative shadow-md cursor-help"></div>
<div className="absolute left-1/2 -translate-x-1/2 top-5 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none">Aroma Vainilla</div>
</div>
</div>
<div className="space-y-6">

<div className="flex justify-center gap-4 text-zinc-700 text-xs font-semibold tracking-wide">
<span className="cursor-pointer hover:text-zinc-900">S</span>
<span className="cursor-pointer text-zinc-900 underline underline-offset-4">M</span>
<span className="cursor-pointer hover:text-zinc-900">L</span>
<span className="cursor-pointer hover:text-zinc-900">XL</span>
</div>

<div className="flex items-center justify-between pt-4 border-t border-white/20">
<span className="text-white text-sm font-medium">Comprar</span>
<button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#B6B5AC] flex items-center justify-center transition-all">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><circle cx="11" cy="11" r="8"></circle><path d="M21 21L16.65 16.65"></path></svg>
</button>
</div>
</div>
</div>

<div className="bg-zinc-50 rounded-3xl p-6 flex flex-col justify-between lg:col-span-2 lg:row-span-1 border border-zinc-200">
<div className="flex gap-4 h-[240px] w-full">
<div className="flex-1 rounded-2xl overflow-hidden relative group shadow-sm">
<img alt="Detalle 1" className="group-hover:opacity-100 transition-opacity duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex-1 rounded-2xl overflow-hidden relative group shadow-sm">
<img alt="Detalle 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex-1 rounded-2xl overflow-hidden relative group shadow-sm">
<img alt="Detalle 3" className="group-hover:opacity-100 transition-opacity duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
<div className="flex justify-center gap-2 mt-5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
</div>
</div>

<div className="bg-[#E4F578] rounded-3xl p-8 flex flex-col justify-between lg:col-span-1 lg:row-span-1 text-zinc-900 relative group overflow-hidden shadow-lg">
<h3 className="text-4xl font-medium tracking-tight leading-[0.9]">PackRomántico</h3>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
<img alt="Decor" className="w-32 h-auto mix-blend-multiply" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-4 mt-auto relative z-10">

<div className="bg-zinc-900/10 rounded-full p-1 flex items-center gap-1 cursor-pointer">
<span className="px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wide shadow-sm">Rosas</span>
<span className="px-3 py-1 rounded-full text-zinc-700 text-[10px] font-bold uppercase tracking-wide hover:bg-black/5 transition-colors">Lavanda</span>
</div>
</div>
<div className="flex justify-between items-end mt-4">
<span className="text-sm font-medium">Ver Pack</span>
<svg className="transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
</div>
</div>

<div className="relative bg-zinc-50 rounded-3xl p-6 flex flex-col justify-center items-center overflow-hidden lg:col-span-1 lg:row-span-1 group border border-zinc-200">
<img alt="Cerámica" className="h-[80%] w-auto object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 left-6 flex items-center gap-2">
<span className="text-xs font-semibold text-zinc-400">Material: Soja</span>
</div>
<div className="absolute bottom-6 right-6">
<svg className="text-zinc-300 fill-current hover:text-red-500 transition-colors cursor-pointer" height="20" viewbox="0 0 24 24" width="20"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
</div>
</div>

<div className="bg-zinc-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden lg:col-span-2 lg:row-span-1 border border-zinc-200">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-zinc-100 to-zinc-200"></div>

<div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/40 backdrop-blur-md rounded-2xl border border-zinc-900/5 rotate-12 z-0"></div>
<div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white/60 backdrop-blur-md rounded-xl border border-zinc-900/5 -rotate-6 z-0"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tighter mb-2">Velas <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-500">Divertidas</span></h2>
<p className="text-zinc-500 text-sm max-w-xs mx-auto mt-4 leading-relaxed">Descubre nuestra colección más atrevida y divertida. Perfectas para despedidas y regalos originales.</p>
</div>
</div>

<div className="bg-zinc-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden lg:col-span-1 lg:row-span-1 border border-zinc-800/50 group shadow-xl">
<div>
<h3 className="text-2xl font-medium text-white tracking-tight leading-none mb-1">Vela Pene</h3>
<p className="text-zinc-500 text-xs">Colección Fálicas</p>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center p-8">

<img alt="Producto" className="transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 w-full h-full object-contain drop-shadow-2xl scale-75 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex items-center justify-between mt-auto relative z-10">
<span className="text-white text-sm font-medium">19,95€</span>
<button className="w-10 h-10 rounded-full bg-[#E4F578] text-zinc-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#E4F578]/20">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="18"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" x2="21" y1="6" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section><section className="md:py-32 overflow-hidden text-zinc-500 bg-white border-zinc-200 border-t pt-24 pb-24 relative">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-50 via-white to-white opacity-50 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
<h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tighter mb-6">Por qué elegir Telavelo</h2>
<p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed">
                No solo vendemos velas, creamos atmósferas. Cuidamos cada detalle desde el vertido hasta el empaquetado.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 rounded-2xl p-8 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-zinc-200/50">
<div className="mb-auto">
<h3 className="text-base font-semibold text-zinc-900 mb-3">Cera de Soja 100%</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Utilizamos cera de soja natural, biodegradable y respetuosa con el medio ambiente. Una combustión más limpia y duradera.
                    </p>
</div>

<div className="mt-12 bg-zinc-50 border border-zinc-200 rounded-xl p-5 select-none">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Combustión</span>
</div>
<div className="space-y-5">
<div className="">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500">Parafina</span>
<span className="font-mono text-zinc-900">Rápida</span>
</div>
<div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full w-[40%] bg-zinc-400 rounded-full group-hover:bg-zinc-500 transition-colors duration-500"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500">Cera de Soja</span>
<span className="font-mono text-zinc-900">Lenta (+40%)</span>
</div>
<div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full w-[80%] bg-zinc-800 rounded-full group-hover:bg-zinc-900 transition-colors duration-500"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-zinc-900 hover:bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 transition-all duration-300 flex flex-col shadow-xl">
<div className="mb-auto">
<h3 className="text-base font-semibold text-white mb-3">Diseños Únicos</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Desde formas geométricas minimalistas hasta nuestra atrevida colección fálica. Piezas que inician conversaciones.
                    </p>
</div>

<div className="mt-12 space-y-3 select-none">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[8px] text-zinc-500 font-bold border border-zinc-700">C</div>
<div className="bg-zinc-800/40 border border-zinc-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-[90%]">
<p className="text-xs text-zinc-400">¿Tenéis packs para despedidas?</p>
</div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="bg-zinc-100 rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]">
<p className="text-xs text-zinc-900 font-medium">¡Sí! Tenemos packs especiales con descuento por cantidad.</p>
</div>
</div>
</div>
</div>

<div className="group bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 rounded-2xl p-8 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-zinc-200/50">
<div className="mb-auto">
<h3 className="text-base font-semibold text-zinc-900 mb-3">Hecho en España</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Apoya el comercio local. Cada vela se vierte a mano en nuestro taller con ingredientes de proximidad.
                    </p>
</div>

<div className="mt-12 bg-zinc-50 border border-zinc-200 rounded-xl p-5 select-none relative overflow-hidden flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 border border-zinc-200">
<svg className="text-zinc-500" fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
</svg>
</div>
<div className="">
<div className="text-xs font-medium text-zinc-900 mb-0.5">Taller Central</div>
<div className="text-[10px] text-zinc-500 mb-2">España</div>
<div className="flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide font-medium">Producción Activa</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-100 bg-white">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
<div className="p-8">
<a className="font-semibold tracking-tighter text-sm uppercase flex items-center gap-2 mb-4" href="#">
<span className="w-2 h-2 bg-zinc-900 rounded-full"></span>
                        TELAVELO
                    </a>
<p className="text-xs text-zinc-400">
                        © 2024. Telavelo Store.<br/>
                        Velas de diseño y decoración.
                    </p>
</div>
<div className="p-8 flex flex-col gap-2">
<h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-2">Tienda</h5>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Velas de Diseño</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Velas Fálicas</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Packs Regalo</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Tarjeta Regalo</a>
</div>
<div className="p-8 flex flex-col gap-2">
<h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-2">Ayuda</h5>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Envíos y Devoluciones</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Cuidado de las Velas</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Contacto</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Aviso Legal</a>
</div>
<div className="p-8 flex items-end justify-end">
<a className="p-2 border border-zinc-200 rounded-full hover:border-zinc-900 hover:text-zinc-900 text-zinc-400 transition-colors" href="#">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4L12 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M5 11L12 4L19 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
