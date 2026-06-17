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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-105">
<iconify-icon icon="solar:gift-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-extrabold text-xl leading-none text-emerald-600 tracking-tight">PUNTO</span>
<span className="font-semibold text-sm leading-none tracking-[0.2em] text-slate-600">REGALO</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600 transition-colors" href="#">Categorías</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Descripción</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Cómo Funciona</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Regalos</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<button className="flex items-center gap-2 text-slate-600 text-sm font-semibold hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:user-plus-linear" strokeWidth="1.5" width="18"></iconify-icon> 
                    Crear Cuenta
                </button>
<button className="bg-slate-900 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-slate-200 transition-all active:scale-95 flex items-center gap-2">
<iconify-icon icon="solar:login-2-linear" strokeWidth="1.5" width="18"></iconify-icon> 
                    Iniciar Sesión
                </button>
</div>

<button className="md:hidden text-slate-600 hover:text-emerald-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 lg:px-6 py-8">

<div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400 p-8 md:p-12 mb-12 shadow-2xl shadow-emerald-500/10">
<div className="relative z-10 md:w-3/4 lg:w-2/3">
<h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold italic uppercase leading-tight tracking-tight">
                    Sabemos el valor <br/>del tiempo, <span className="bg-white/20 backdrop-blur-sm px-3 rounded-xl border border-white/10">RELÁJATE.</span>
</h1>
<p className="text-emerald-50 mt-6 text-lg font-medium leading-relaxed max-w-xl">
                    El marketplace donde tus puntos valen más. Nosotros nos encargamos de la logística, tú solo disfruta de tu recompensa.
                </p>
<div className="mt-8 flex flex-wrap gap-4">
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-colors cursor-default">
<iconify-icon icon="solar:delivery-linear" strokeWidth="1.5" width="20"></iconify-icon> 
                        Entrega Rápida
                    </div>
<div className="flex items-center gap-2 bg-emerald-950/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:bg-emerald-950/30 transition-colors cursor-default">
<iconify-icon icon="solar:gift-linear" strokeWidth="1.5" width="20"></iconify-icon> 
                        100% Gratis
                    </div>
</div>
</div>

<div className="absolute -right-20 -top-20 opacity-10 text-white rotate-12 pointer-events-none">
<iconify-icon icon="solar:gift-linear" strokeWidth="1" width="400"></iconify-icon>
</div>

<div className="absolute right-12 bottom-12 hidden lg:block animate-[bounce_3s_infinite]">
<div className="bg-white/95 backdrop-blur shadow-2xl p-4 rounded-2xl flex items-center gap-4 max-w-xs border border-white/50">
<div className="bg-lime-400 p-3 rounded-xl text-emerald-900 shadow-lg shadow-lime-400/30">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-800 text-sm">¡Envío en camino!</p>
<p className="text-xs text-slate-500 font-medium mt-0.5">Llega mañana a las 14:00</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-10">

<aside className="lg:w-72 flex-shrink-0 space-y-8">
<div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-200 lg:sticky lg:top-28">

<div className="relative mb-6 group">
<input className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-400 text-slate-700" placeholder="¿Qué buscas?" type="text"/>
<div className="absolute left-3.5 top-3 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<button className="w-full flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-bold py-3.5 rounded-xl mb-8 border border-emerald-100 hover:bg-emerald-100 transition-colors hover:shadow-sm">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="18"></iconify-icon> 
                        Retiro en Tienda
                    </button>

<div className="space-y-8">

<div>
<h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:star-linear" strokeWidth="1.5" width="18"></iconify-icon> 
                                Destacados
                            </h3>
<div className="space-y-1">
<button className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-emerald-600 font-medium transition-all flex items-center justify-between group">
                                    Más Populares
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-emerald-600 font-medium transition-all flex items-center justify-between group">
                                    Recién Llegados
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-emerald-600 font-medium transition-all flex items-center justify-between group">
                                    Liquidación
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div>
<h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:filter-linear" strokeWidth="1.5" width="18"></iconify-icon> 
                                Categoría
                            </h3>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-emerald-500 text-white shadow-md shadow-emerald-500/20">Todo</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">Moda</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">Hogar</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">Infantil</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">Tech</button>
</div>
</div>

<div>
<h3 className="font-bold text-slate-900 text-sm mb-4">Puntos</h3>
<div className="px-1">
<input className="accent-emerald-500" max="100000" min="0" type="range"/>
</div>
<div className="flex justify-between text-xs font-semibold text-slate-400 mt-3 font-mono">
<span>0</span>
<span>100k+</span>
</div>
</div>
</div>
<button className="w-full mt-8 text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors uppercase tracking-wider">
                        Limpiar Filtros
                    </button>
</div>
</aside>

<div className="flex-1">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight">Regalos Disponibles</h2>
<p className="text-slate-500 text-sm font-medium mt-1">Mostrando 6 mejores resultados</p>
</div>
<div className="relative">
<select className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-bold text-slate-600 shadow-sm outline-none focus:border-emerald-500 cursor-pointer hover:bg-slate-50 transition-colors">
<option>Recomendados</option>
<option>Menos Puntos</option>
<option>Más Puntos</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden bg-slate-100">
<img alt="Helmet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1557160854-e1e89fdd3286?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 left-4 bg-rose-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-rose-500/30">
                                Oportunidad
                            </div>
<div className="absolute top-4 right-4 bg-emerald-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg shadow-emerald-500/30">
<iconify-icon icon="solar:delivery-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 bg-[url(https://images.unsplash.com/photo-1728721752007-1f0fc3e457be?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-5">
<div className="bg-emerald-50 text-emerald-700 text-center py-1.5 rounded-lg mb-4 text-xs font-extrabold tracking-widest uppercase border border-emerald-100/50">
                                ¡Envío Gratis!
                            </div>
<h3 className="font-bold text-slate-800 text-lg leading-tight line-clamp-1 group-hover:text-emerald-600 transition-colors">Casco Bicicleta Pro</h3>
<p className="text-slate-400 text-xs mt-1 font-medium">Deportes · Outdoor</p>
<div className="flex flex-col gap-3 mt-5 pt-4 border-t border-slate-100">
<div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Obtenlo por:</div>
<div className="flex items-center justify-between">
<div className="flex items-baseline gap-1">
<span className="text-slate-900 font-extrabold text-2xl tracking-tight">5.000</span>
<span className="text-emerald-500 font-bold text-xs uppercase tracking-wide">Pts</span>
</div>
<button className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 active:scale-90 group-hover:bg-emerald-500">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden bg-slate-100">
<img alt="Jeans" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 left-4 bg-indigo-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-indigo-500/30">
                                Premium
                            </div>
</div>
<div className="p-5">
<div className="bg-indigo-50 text-indigo-700 text-center py-1.5 rounded-lg mb-4 text-xs font-extrabold tracking-widest uppercase border border-indigo-100/50">
                                Alta Demanda
                            </div>
<h3 className="font-bold text-slate-800 text-lg leading-tight line-clamp-1 group-hover:text-emerald-600 transition-colors">Jeans Armani Exclusive</h3>
<p className="text-slate-400 text-xs mt-1 font-medium">Moda · Hombre</p>
<div className="flex flex-col gap-3 mt-5 pt-4 border-t border-slate-100">
<div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Obtenlo por:</div>
<div className="flex items-center justify-between">
<div className="flex items-baseline gap-1">
<span className="text-slate-900 font-extrabold text-2xl tracking-tight">30.000</span>
<span className="text-emerald-500 font-bold text-xs uppercase tracking-wide">Pts</span>
</div>
<button className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 shadow-lg active:scale-90 group-hover:bg-emerald-500">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden bg-slate-100">
<img alt="Audio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 left-4 bg-amber-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-amber-500/30">
                                Destacado
                            </div>
<div className="absolute top-4 right-4 bg-emerald-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg shadow-emerald-500/30">
<iconify-icon icon="solar:delivery-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
<div className="p-5">
<div className="bg-emerald-50 text-emerald-700 text-center py-1.5 rounded-lg mb-4 text-xs font-extrabold tracking-widest uppercase border border-emerald-100/50">
                                ¡Envío Gratis!
                            </div>
<h3 className="font-bold text-slate-800 text-lg leading-tight line-clamp-1 group-hover:text-emerald-600 transition-colors">Audífonos Gamer RGB</h3>
<p className="text-slate-400 text-xs mt-1 font-medium">Tecnología · Audio</p>
<div className="flex flex-col gap-3 mt-5 pt-4 border-t border-slate-100">
<div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Obtenlo por:</div>
<div className="flex items-center justify-between">
<div className="flex items-baseline gap-1">
<span className="text-slate-900 font-extrabold text-2xl tracking-tight">10.000</span>
<span className="text-emerald-500 font-bold text-xs uppercase tracking-wide">Pts</span>
</div>
<button className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 shadow-lg active:scale-90 group-hover:bg-emerald-500">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden bg-slate-100">
<img alt="Baby" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-rose-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-rose-500/30">
                                Oportunidad
                            </div>
<div className="absolute top-4 right-4 bg-emerald-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg shadow-emerald-500/30">
<iconify-icon icon="solar:delivery-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
<div className="p-5">
<div className="bg-emerald-50 text-emerald-700 text-center py-1.5 rounded-lg mb-4 text-xs font-extrabold tracking-widest uppercase border border-emerald-100/50">
                                ¡Envío Gratis!
                            </div>
<h3 className="font-bold text-slate-800 text-lg leading-tight line-clamp-1 group-hover:text-emerald-600 transition-colors">Cargador para Bebé B.H.</h3>
<p className="text-slate-400 text-xs mt-1 font-medium">Infantil · Accesorios</p>
<div className="flex flex-col gap-3 mt-5 pt-4 border-t border-slate-100">
<div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Obtenlo por:</div>
<div className="flex items-center justify-between">
<div className="flex items-baseline gap-1">
<span className="text-slate-900 font-extrabold text-2xl tracking-tight">15.000</span>
<span className="text-emerald-500 font-bold text-xs uppercase tracking-wide">Pts</span>
</div>
<button className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 shadow-lg active:scale-90 group-hover:bg-emerald-500">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden bg-slate-100">
<img alt="Stroller" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 left-4 bg-teal-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-teal-500/30">
                                Nuevo
                            </div>
</div>
<div className="p-5">
<div className="bg-teal-50 text-teal-700 text-center py-1.5 rounded-lg mb-4 text-xs font-extrabold tracking-widest uppercase border border-teal-100/50">
                                Stock Limitado
                            </div>
<h3 className="font-bold text-slate-800 text-lg leading-tight line-clamp-1 group-hover:text-emerald-600 transition-colors">Coche Paseo Plegable</h3>
<p className="text-slate-400 text-xs mt-1 font-medium">Infantil · Transporte</p>
<div className="flex flex-col gap-3 mt-5 pt-4 border-t border-slate-100">
<div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Obtenlo por:</div>
<div className="flex items-center justify-between">
<div className="flex items-baseline gap-1">
<span className="text-slate-900 font-extrabold text-2xl tracking-tight">25.000</span>
<span className="text-emerald-500 font-bold text-xs uppercase tracking-wide">Pts</span>
</div>
<button className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 shadow-lg active:scale-90 group-hover:bg-emerald-500">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden bg-slate-100">
<img alt="Jacket" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 left-4 bg-rose-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-rose-500/30">
                                Oportunidad
                            </div>
<div className="absolute top-4 right-4 bg-emerald-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg shadow-emerald-500/30">
<iconify-icon icon="solar:delivery-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
<div className="p-5">
<div className="bg-emerald-50 text-emerald-700 text-center py-1.5 rounded-lg mb-4 text-xs font-extrabold tracking-widest uppercase border border-emerald-100/50">
                                ¡Envío Gratis!
                            </div>
<h3 className="font-bold text-slate-800 text-lg leading-tight line-clamp-1 group-hover:text-emerald-600 transition-colors">Chaqueta Print Animal</h3>
<p className="text-slate-400 text-xs mt-1 font-medium">Moda · Mujer</p>
<div className="flex flex-col gap-3 mt-5 pt-4 border-t border-slate-100">
<div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Obtenlo por:</div>
<div className="flex items-center justify-between">
<div className="flex items-baseline gap-1">
<span className="text-slate-900 font-extrabold text-2xl tracking-tight">12.000</span>
<span className="text-emerald-500 font-bold text-xs uppercase tracking-wide">Pts</span>
</div>
<button className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 shadow-lg active:scale-90 group-hover:bg-emerald-500">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<button className="group bg-white border border-emerald-200 text-emerald-600 font-extrabold px-12 py-4 rounded-full hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-sm hover:shadow-emerald-500/30 active:scale-95 flex items-center gap-2">
                        VER MÁS REGALOS
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<footer className="bg-slate-900 text-slate-200 mt-20 py-16">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:gift-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-extrabold text-xl text-white tracking-tight">PUNTO REGALO</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed font-medium">
                        El primer marketplace diseñado para valorar tu lealtad y tu tiempo. Canjea, disfruta y sonríe con nosotros.
                    </p>
</div>
<div>
<h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-[0.2em] text-xs">Explora</h4>
<ul className="space-y-4 text-slate-400 font-medium text-sm">
<li><a className="hover:text-white transition-colors" href="#">Sobre Nosotros</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cómo Ganar Puntos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Alianzas Comerciales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Centro de Soporte</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-[0.2em] text-xs">Ayuda</h4>
<ul className="space-y-4 text-slate-400 font-medium text-sm">
<li><a className="hover:text-white transition-colors" href="#">Preguntas Frecuentes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Términos de Uso</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacidad de Datos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Política de Cookies</a></li>
</ul>
</div>
<div className="bg-slate-800/50 p-6 rounded-3xl space-y-4 border border-slate-700/50 backdrop-blur-sm">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
<h4 className="font-bold text-sm">¿Ayuda con tu canje?</h4>
</div>
<p className="text-xs text-slate-400 font-medium leading-relaxed">Contáctanos directamente y nuestro equipo te ayudará en minutos.</p>
<button className="w-full bg-emerald-500 py-3 rounded-xl font-bold text-white text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-900/20">
                        Hablar con Soporte
                    </button>
</div>
</div>
<div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
<p>© 2024 Punto Regalo. Todos los derechos reservados.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">TikTok</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
