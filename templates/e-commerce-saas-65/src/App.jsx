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



tailwind.config = {
theme: {
extend: {
colors: {
shopify: {
base: '#0f0f0f',
surface: '#18181b',
accent: '#36fba1', // Neon green accent
border: '#27272a'
}
},
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-black">
<iconify-icon icon="solar:bag-heart-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-emerald-400 transition-colors">icomers</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Soluciones</a>
<a className="hover:text-white transition-colors" href="#">Precios</a>
<a className="hover:text-white transition-colors" href="#">Desarrolladores</a>
<a className="hover:text-white transition-colors" href="#">Empresas</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-400 hover:text-white hidden sm:block" href="#">Iniciar sesión</a>
<a className="text-sm font-semibold bg-white text-black px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Prueba gratis</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 grid-bg pointer-events-none opacity-40"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] hero-glow blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Nuevo: Analíticas con IA 2.0
            </div>
<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] mb-6 max-w-4xl mx-auto">
                La plataforma de comercio <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">para el crecimiento.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Potencia tu negocio con un panel unificado para ventas, analíticas e inventario. Escalable, seguro y diseñado para marcas modernas.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all transform hover:scale-105 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] flex items-center gap-2">
                    Empezar a construir
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Ver demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="glass-panel rounded-xl p-1 md:p-2 shadow-2xl shadow-emerald-900/10">
<div className="bg-[#09090b] rounded-lg overflow-hidden border border-zinc-800/50 aspect-[16/9] md:aspect-[21/9] flex relative">

<div className="w-16 md:w-64 border-r border-zinc-800 bg-zinc-900/30 flex flex-col p-4 hidden md:flex">
<div className="flex items-center gap-3 mb-8">
<div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/30"></div>
<div className="h-2 w-20 bg-zinc-800 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-8 w-full bg-zinc-800/50 rounded flex items-center px-3 border border-zinc-700/50"><div className="h-2 w-16 bg-zinc-600 rounded"></div></div>
<div className="h-8 w-full rounded flex items-center px-3"><div className="h-2 w-20 bg-zinc-800 rounded"></div></div>
<div className="h-8 w-full rounded flex items-center px-3"><div className="h-2 w-14 bg-zinc-800 rounded"></div></div>
<div className="h-8 w-full rounded flex items-center px-3"><div className="h-2 w-18 bg-zinc-800 rounded"></div></div>
</div>
<div className="mt-auto space-y-2">
<div className="h-20 rounded bg-gradient-to-b from-zinc-800/10 to-zinc-800/30 border border-zinc-800 p-3">
<div className="h-2 w-8 bg-emerald-500/50 rounded mb-2"></div>
<div className="h-1.5 w-full bg-zinc-800 rounded mb-1"></div>
<div className="h-1.5 w-2/3 bg-zinc-800 rounded"></div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col">

<div className="h-14 border-b border-zinc-800 flex items-center justify-between px-6">
<div className="h-2 w-24 bg-zinc-800 rounded"></div>
<div className="flex gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-800"></div>
<div className="h-8 w-8 rounded-full bg-zinc-800"></div>
</div>
</div>

<div className="p-6 grid grid-cols-3 gap-4 h-full">
<div className="col-span-2 bg-zinc-900/50 rounded border border-zinc-800/50 p-4 relative overflow-hidden group">
<div className="flex justify-between mb-6">
<div className="space-y-2">
<div className="h-2 w-16 bg-zinc-700 rounded"></div>
<div className="h-6 w-32 bg-white/10 rounded"></div>
</div>
<div className="h-6 w-16 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-400 text-[10px] flex items-center justify-center">+12.5%</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-4 pb-4 gap-2 opacity-60">
<div className="w-full bg-zinc-800 rounded-t h-[20%] group-hover:h-[30%] transition-all duration-500"></div>
<div className="w-full bg-zinc-800 rounded-t h-[40%] group-hover:h-[50%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-zinc-800 rounded-t h-[35%] group-hover:h-[60%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-emerald-500/30 rounded-t h-[50%] group-hover:h-[75%] transition-all duration-500 delay-150"></div>
<div className="w-full bg-zinc-800 rounded-t h-[45%] group-hover:h-[55%] transition-all duration-500 delay-200"></div>
<div className="w-full bg-zinc-800 rounded-t h-[60%] group-hover:h-[40%] transition-all duration-500 delay-300"></div>
</div>
</div>
<div className="col-span-1 space-y-4">
<div className="bg-zinc-900/50 rounded border border-zinc-800/50 h-1/2 p-4">
<div className="h-2 w-12 bg-zinc-700 rounded mb-4"></div>
<div className="flex gap-2 mb-2">
<div className="h-1 w-full bg-emerald-500 rounded-full"></div>
<div className="h-1 w-1/3 bg-zinc-700 rounded-full"></div>
</div>
</div>
<div className="bg-zinc-900/50 rounded border border-zinc-800/50 h-[45%] p-4 flex items-center justify-center">
<div className="h-16 w-16 rounded-full border-4 border-zinc-800 border-t-emerald-500 rotate-45"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-8">Con la confianza de minoristas de nueva generación</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-40">
<iconify-icon className="text-white" icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
<iconify-icon className="text-white" icon="solar:crown-star-linear" width="32"></iconify-icon>
<iconify-icon className="text-white" icon="solar:mountains-linear" width="32"></iconify-icon>
<iconify-icon className="text-white" icon="solar:rocket-2-linear" width="32"></iconify-icon>
<iconify-icon className="text-white" icon="solar:atom-linear" width="32"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Todo lo que necesitas para escalar</h2>
<p className="text-zinc-400">Gestiona toda tu operación desde un único y potente centro de comando diseñado para la velocidad y la fiabilidad.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="h-10 w-10 rounded-lg bg-zinc-800/80 flex items-center justify-center border border-white/5 mb-4 text-emerald-400">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Analíticas en Tiempo Real</h3>
<p className="text-sm text-zinc-400 max-w-sm">Monitorea ingresos, tasas de conversión y comportamiento del cliente mientras sucede con nuestra canalización de datos.</p>
</div>

<div className="w-full h-48 bg-black/40 rounded-xl border border-white/5 p-4 relative overflow-hidden">
<div className="flex items-end justify-between gap-1 h-full px-2">
<div className="w-full bg-zinc-800/50 rounded-sm h-[20%]"></div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[35%]"></div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[50%]"></div>
<div className="w-full bg-emerald-500/20 rounded-sm h-[65%] border-t border-emerald-500/50"></div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[55%]"></div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[70%]"></div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[85%]"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/0 to-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-zinc-800/80 flex items-center justify-center border border-white/5 mb-4 text-white">
<iconify-icon icon="solar:card-send-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Pagos Globales</h3>
<p className="text-sm text-zinc-400 mb-8">Acepta más de 135 monedas con experiencias de pago localizadas.</p>

<div className="relative w-full aspect-[1.6] bg-zinc-950 rounded-xl border border-white/10 p-5 shadow-2xl flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-start">
<iconify-icon className="text-zinc-600" icon="solar:chip-linear" width="24"></iconify-icon>
<iconify-icon className="text-zinc-600 rotate-90" icon="solar:wifi-linear" width="20"></iconify-icon>
</div>
<div className="space-y-2">
<div className="flex gap-2">
<div className="h-1.5 w-8 bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-8 bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-8 bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-8 bg-zinc-700 rounded-full"></div>
</div>
<div className="flex justify-between items-center">
<div className="h-2 w-20 bg-zinc-600 rounded-full"></div>
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full bg-white/10 backdrop-blur-md border border-white/10"></div>
<div className="h-6 w-6 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/20"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-300">
<div className="relative z-10 h-full flex flex-col">
<div className="h-10 w-10 rounded-lg bg-zinc-800/80 flex items-center justify-center border border-white/5 mb-4 text-white">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Inventario Inteligente</h3>
<p className="text-sm text-zinc-400 mb-6">Sincronización automática de stock en todos los canales.</p>

<div className="mt-auto space-y-3">
<div className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-zinc-800 rounded flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:t-shirt-linear" width="16"></iconify-icon>
</div>
<div className="space-y-1">
<div className="h-1.5 w-16 bg-zinc-600 rounded"></div>
<div className="h-1.5 w-8 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="h-4 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[9px] text-emerald-400">Stock</div>
</div>
<div className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/5 opacity-60">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-zinc-800 rounded flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:smart-speaker-linear" width="16"></iconify-icon>
</div>
<div className="space-y-1">
<div className="h-1.5 w-20 bg-zinc-600 rounded"></div>
<div className="h-1.5 w-10 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="h-4 w-8 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-[9px] text-yellow-400">Bajo</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 group relative bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-300">
<div className="grid md:grid-cols-2 gap-8 items-center h-full">
<div>
<div className="h-10 w-10 rounded-lg bg-zinc-800/80 flex items-center justify-center border border-white/5 mb-4 text-white">
<iconify-icon icon="solar:pallete-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Personalización Completa</h3>
<p className="text-sm text-zinc-400">Adapta tu flujo de pago, modifica temas y extiende la funcionalidad con nuestra robusta API y capacidades headless.</p>
<div className="mt-6 flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#18181b] appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer" htmlFor="toggle"></label>
</div>
<span className="text-xs text-zinc-300">Modo Headless</span>
</div>
</div>
</div>
<div className="relative bg-black rounded-lg border border-zinc-800 p-4 font-mono text-[10px] text-zinc-400 leading-relaxed overflow-hidden">
<div className="absolute top-0 right-0 p-2">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
</div>
<p><span className="text-purple-400">const</span> <span className="text-blue-400">checkout</span> = <span className="text-purple-400">await</span> icomers.<span className="text-yellow-300">createCheckout</span>({</p>
<p className="pl-4">items: cart.<span className="text-yellow-300">getItems</span>(),</p>
<p className="pl-4">currency: <span className="text-green-400">'USD'</span>,</p>
<p className="pl-4">theme: <span className="text-green-400">'oscuro'</span>,</p>
<p className="pl-4">callbacks: {</p>
<p className="pl-8"><span className="text-blue-400">onSuccess</span>: (data) =&gt; {</p>
<p className="pl-12">analytics.<span className="text-yellow-300">track</span>(<span className="text-green-400">'compra'</span>);</p>
<p className="pl-8">}</p>
<p className="pl-4">}</p>
<p>});</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">$40B+</div>
<div className="text-sm text-zinc-500">Procesados Anualmente</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">99.99%</div>
<div className="text-sm text-zinc-500">Garantía de Tiempo de Actividad</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">150+</div>
<div className="text-sm text-zinc-500">Países Soportados</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-sm text-zinc-500">Soporte Experto</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-zinc-900">
<div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">¿Listo para escalar tu tienda?</h2>
<p className="text-lg text-zinc-400 mb-10 font-light">Únete a miles de marcas de alto crecimiento que usan Icomers para potenciar sus operaciones comerciales globales.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<div className="relative w-full sm:w-80">
<input className="w-full h-12 bg-black border border-zinc-700 rounded-full px-5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Ingresa tu correo" type="email"/>
</div>
<button className="h-12 px-8 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors w-full sm:w-auto">
                    Comenzar
                </button>
</div>
<p className="mt-4 text-xs text-zinc-600">No se requiere tarjeta de crédito. Prueba gratuita de 14 días.</p>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-black">
<iconify-icon icon="solar:bag-heart-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight">icomers</span>
</div>
<p className="text-sm text-zinc-500 max-w-xs mb-4">La plataforma de comercio de nivel empresarial diseñada para marcas modernas y desarrolladores.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Producto</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Tienda</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Checkout</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Mercados Globales</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">App Móvil</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Recursos</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Documentación</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Referencia API</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Comunidad</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Socios</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Compañía</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Acerca de</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Carreras</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Contacto</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2023 Icomers Inc. Todos los derechos reservados.</p>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Política de Privacidad</a>
<a className="hover:text-zinc-400" href="#">Términos de Servicio</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
