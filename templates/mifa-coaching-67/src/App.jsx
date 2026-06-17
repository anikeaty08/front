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



        lucide.createIcons();
    
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
      

<nav className="w-full fixed top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(234,88,12,0.3)]">M</div>
<span className="text-xl font-bold tracking-tight text-white">MIFA</span>
</div>
<div className="hidden sm:block">
<span className="text-[10px] sm:text-xs font-bold tracking-widest text-orange-500 uppercase">Documento de Preparación Exclusivo</span>
</div>
</div>
</nav>
<main className="flex-grow pt-32 pb-24 px-6">
<div className="max-w-4xl mx-auto space-y-24">

<section className="text-center space-y-8 relative">

<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#0a0a0a] border border-orange-500/20 mb-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<span className="text-[10px] sm:text-xs font-bold text-orange-600 tracking-widest uppercase">Acceso Confirmado</span>
</div>

<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
                    🚀 PREPÁRATE: Tu camino a los primeros <span className="text-gradient-orange">USD 5.000</span> empieza aquí
                </h1>

<p className="text-lg sm:text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto font-normal leading-relaxed">
                    Si estás leyendo esto, has dado el paso que el 95% de los emprendedores evita: <span className="text-white italic font-medium">buscar la verdad sobre su negocio</span> antes de escribir una sola línea de código.
                </p>
</section>

<section className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] opacity-50 blur transition duration-500 group-hover:opacity-75"></div>
<div className="relative bg-[#0a0a0a] border border-white/10 rounded-[1.8rem] p-8 sm:p-12 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="space-y-6 relative z-10">
<p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                            En <strong className="text-white">MIFA</strong>, no somos una academia de teoría. Somos el puente entre tu idea y el dinero real. Antes de nuestra llamada, es crucial que entiendas que no buscamos perfección técnica, buscamos <span className="text-orange-500 font-medium">validación comercial</span>.
                        </p>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<p className="text-lg sm:text-xl text-white font-medium underline decoration-zinc-700 underline-offset-4 decoration-1">
                            Antes de nuestra llamada, es vital que entiendas por qué estamos aquí y qué esperamos de ti.
                        </p>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none"></div>
</div>
</section>

<section className="space-y-10">
<div className="flex flex-col items-center gap-3 text-center">
<div className="p-3 bg-red-500/10 rounded-full text-red-500 mb-2">
<i className="w-6 h-6" data-lucide="triangle-alert"></i>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">El Enemigo: "La Trampa del MVP Perfecto"</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="mb-6 text-zinc-500 text-xs font-bold uppercase tracking-widest">Lo que hace la mayoría</div>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-zinc-400 text-sm">
<i className="w-5 h-5 text-red-500/70 shrink-0" data-lucide="x-circle"></i>
<span>12 meses programando a ciegas</span>
</li>
<li className="flex items-start gap-4 text-zinc-400 text-sm">
<i className="w-5 h-5 text-red-500/70 shrink-0" data-lucide="x-circle"></i>
<span>Perfeccionar el logo y la web</span>
</li>
<li className="flex items-start gap-4 text-zinc-400 text-sm">
<i className="w-5 h-5 text-red-500/70 shrink-0" data-lucide="x-circle"></i>
<span>Buscar socios sin tener clientes</span>
</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-orange-500/20 bg-orange-500/[0.03] hover:border-orange-500/30 transition-colors">
<div className="mb-6 text-orange-500 text-xs font-bold uppercase tracking-widest">El Método MIFA</div>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-zinc-200 text-sm">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
<span>Vender antes de construir</span>
</li>
<li className="flex items-start gap-4 text-zinc-200 text-sm">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
<span>Validar con transacciones reales</span>
</li>
<li className="flex items-start gap-4 text-zinc-200 text-sm">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
<span>Iterar basado en feedback de pago</span>
</li>
</ul>
</div>
</div>
</section>

<section className="space-y-10">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight text-center">Qué vamos a validar</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-orange-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Compromiso</h3>
<p className="text-sm text-zinc-500 leading-relaxed">¿Estás dispuesto a dejar de "jugar a la startup" y empezar a vender hoy mismo?</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-orange-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="tag"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Oferta</h3>
<p className="text-sm text-zinc-500 leading-relaxed">¿Es tu solución un "must-have" urgente o solo algo "bonito de tener"?</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-orange-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="cog"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Ejecución</h3>
<p className="text-sm text-zinc-500 leading-relaxed">El mapa MIFA funciona, pero tú eres quien debe conducir el vehículo.</p>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5">
<div className="flex flex-col md:flex-row gap-12 md:items-start justify-between">
<div className="md:w-1/3 space-y-3">
<h2 className="text-2xl font-semibold text-white tracking-tight">Criterios de la Sesión</h2>
<p className="text-sm text-zinc-500">Requisitos indispensables para aprovechar nuestro tiempo juntos.</p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
<div className="flex gap-4 items-start group">
<div className="mt-1 text-zinc-600 group-hover:text-orange-500 transition-colors">
<i className="w-5 h-5" data-lucide="check-check"></i>
</div>
<div>
<h4 className="text-white text-base font-medium">Mentalidad Fundadora</h4>
<p className="text-sm text-zinc-500 mt-1">Las ventas son el oxígeno.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 text-zinc-600 group-hover:text-orange-500 transition-colors">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<div>
<h4 className="text-white text-base font-medium">Hambre de Resultados</h4>
<p className="text-sm text-zinc-500 mt-1">Meta: $5k en 90 días.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 text-zinc-600 group-hover:text-orange-500 transition-colors">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</div>
<div>
<h4 className="text-white text-base font-medium">Receptividad</h4>
<p className="text-sm text-zinc-500 mt-1">Apertura a feedback radical.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 text-zinc-600 group-hover:text-orange-500 transition-colors">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-white text-base font-medium">Puntualidad Extrema</h4>
<p className="text-sm text-zinc-500 mt-1">Respeto por el tiempo mutuo.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] rounded-[2rem] p-8 sm:p-12 border border-white/5">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-12 text-center">Tu Transformación Proyectada</h2>
<div className="max-w-3xl mx-auto">

<div className="flex gap-6 pb-10 border-l border-white/10 pl-10 relative">
<div className="absolute -left-[18px] top-0 w-9 h-9 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center text-sm font-semibold text-white z-10">1</div>
<div className="pt-0.5">
<h4 className="text-white font-medium text-lg">Validación de Demanda</h4>
<p className="text-sm text-zinc-400 mt-2 leading-relaxed">Confirmamos interés con dinero, no con "likes" o promesas vacías.</p>
</div>
</div>

<div className="flex gap-6 pb-10 border-l border-white/10 pl-10 relative">
<div className="absolute -left-[18px] top-0 w-9 h-9 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center text-sm font-semibold text-white z-10">2</div>
<div className="pt-0.5">
<h4 className="text-white font-medium text-lg">Diseño de Oferta Irresistible</h4>
<p className="text-sm text-zinc-400 mt-2 leading-relaxed">Estructuramos lo que vendes para que el mercado sienta dolor al rechazarte.</p>
</div>
</div>

<div className="flex gap-6 pb-10 border-l border-white/10 pl-10 relative">
<div className="absolute -left-[18px] top-0 w-9 h-9 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center text-sm font-semibold text-white z-10">3</div>
<div className="pt-0.5">
<h4 className="text-white font-medium text-lg">Tracción &amp; Flujo de Caja</h4>
<p className="text-sm text-zinc-400 mt-2 leading-relaxed">Generamos los primeros ingresos para financiar el desarrollo posterior.</p>
</div>
</div>

<div className="flex gap-6 pl-10 relative">
<div className="absolute -left-[18px] top-0 w-9 h-9 rounded-full bg-orange-600 text-white border border-orange-500 flex items-center justify-center text-sm font-bold z-10 shadow-[0_0_15px_rgba(234,88,12,0.5)]">4</div>
<div className="pt-0.5">
<h4 className="text-white font-medium text-lg">Escala o Desarrollo</h4>
<p className="text-sm text-zinc-400 mt-2 leading-relaxed">Solo ahora decides si programas el MVP o buscas capital.</p>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-[#0a0a0a] border-t border-white/5 py-16">
<div className="text-center max-w-2xl mx-auto px-6 space-y-8">
<div className="space-y-3">
<h3 className="text-2xl font-semibold text-white tracking-tight">Nos vemos en la llamada.</h3>
<p className="text-zinc-500">Ven listo para cambiar el rumbo de tu startup para siempre.</p>
</div>
<div className="inline-flex flex-col items-center gap-2 pt-6">
<span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Atentamente</span>
<span className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    El Equipo MIFA <span className="text-xl">🍊</span>
</span>
</div>
</div>
</footer>

<div className="fixed bottom-8 right-8 z-50">
<button className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-sm tracking-tight flex items-center gap-2">
            Reunión Preparada
        </button>
</div>


    </>
  );
}
