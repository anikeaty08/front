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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#050505]">
<iconify-icon icon="lucide:sparkles" strokeWidth="2.5" width="12"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter text-sm">7PASOS</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium">
<a className="hover:text-white transition-colors" href="#">Manifiesto</a>
<a className="hover:text-white transition-colors" href="#">Guía</a>
<a className="hover:text-white transition-colors" href="#">Recursos</a>
</div>
<a className="text-xs font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-1.5 rounded-full transition-all" href="#">
                Comenzar
            </a>
</div>
</nav>

<main className="flex-grow pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium text-zinc-300 uppercase tracking-widest mb-8 hover:border-white/20 transition-colors cursor-default">
<span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                Filosofía de Vida
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
                Diseña tu<br/>felicidad.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto leading-relaxed font-light">
                Un framework minimalista para el bienestar mental. Siete principios fundamentales para construir una vida con propósito y serenidad.
            </p>
</div>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500 overflow-hidden col-span-1 md:col-span-2 lg:col-span-1">
<div className="absolute top-0 right-0 p-32 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/10 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start mb-8">
<div className="p-2.5 rounded-lg bg-white/5 text-white border border-white/5">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-600">01</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Gratitud Diaria</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Cambia tu enfoque de lo que te falta a lo que tienes. La gratitud rewire el cerebro para escanear el mundo en busca de lo positivo.
                        </p>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500 overflow-hidden">
<div className="absolute bottom-0 left-0 p-32 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start mb-8">
<div className="p-2.5 rounded-lg bg-white/5 text-white border border-white/5">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-600">02</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Conexión Real</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Prioriza la profundidad sobre la amplitud. Las relaciones significativas son el predictor número uno de la felicidad a largo plazo.
                        </p>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-24 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start mb-8">
<div className="p-2.5 rounded-lg bg-white/5 text-white border border-white/5">
<iconify-icon icon="lucide:focus" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-600">03</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Presencia</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Reduce el ruido. El pasado trae depresión, el futuro ansiedad. La paz se encuentra únicamente en el momento presente.
                        </p>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500 overflow-hidden lg:col-span-2">
<div className="absolute right-0 bottom-0 p-40 bg-orange-500/5 blur-[90px] rounded-full pointer-events-none group-hover:bg-orange-500/10 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col md:flex-row h-full gap-8 md:items-center">
<div className="flex-1">
<div className="flex justify-between items-start mb-6">
<div className="p-2.5 rounded-lg bg-white/5 text-white border border-white/5">
<iconify-icon icon="lucide:move-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-600">04</span>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Crecimiento Continuo</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                            El ser humano necesita progreso. Adopta una mentalidad de estudiante eterno y busca desafíos que expandan tus capacidades.
                        </p>
</div>
<div className="flex-1 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-zinc-600" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span className="text-xs text-zinc-400">Leer 30 min diarios</span>
</div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-zinc-600" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span className="text-xs text-zinc-400">Aprender una nueva habilidad</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-600" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span className="text-xs text-zinc-400">Salir de la zona de confort</span>
</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-rose-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-rose-500/10 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start mb-8">
<div className="p-2.5 rounded-lg bg-white/5 text-white border border-white/5">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-600">05</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Salud Integral</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Tu cuerpo es el vehículo de tu experiencia. Sueño, movimiento y nutrición no son negociables.
                        </p>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500 overflow-hidden">
<div className="absolute bottom-0 left-0 p-32 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start mb-8">
<div className="p-2.5 rounded-lg bg-white/5 text-white border border-white/5">
<iconify-icon icon="lucide:hand-heart" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-600">06</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Dar y Servir</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            La felicidad no se obtiene, se crea al contribuir al bienestar de otros. El altruismo genera endorfinas.
                        </p>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500 overflow-hidden md:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-48 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex-1">
<div className="flex items-center gap-3 mb-4">
<div className="p-2.5 rounded-lg bg-white/10 text-white border border-white/10">
<iconify-icon icon="lucide:compass" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-600">07</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Propósito (Ikigai)</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                        Encuentra la intersección entre lo que amas, lo que el mundo necesita, aquello por lo que te pueden pagar y en lo que eres bueno. Una vida con dirección es una vida plena.
                    </p>
</div>
<div className="relative z-10">
<button className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors">
                        Definir mi propósito
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-32 border-t border-white/5 pt-20 text-center">
<iconify-icon className="text-zinc-700 mb-6" icon="lucide:quote" width="32"></iconify-icon>
<h2 className="text-2xl md:text-3xl font-medium text-zinc-300 tracking-tight max-w-2xl mx-auto mb-6">
                "La felicidad no es algo que pospones para el futuro; es algo que diseñas para el presente."
            </h2>
<p className="text-xs font-medium text-zinc-600 uppercase tracking-widest">Jim Rohn</p>
</div>
</main>

<footer className="border-t border-white/5 py-12 px-6 bg-[#050505]">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="w-4 h-4 bg-zinc-800 rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
</span>
<span className="text-xs text-zinc-500 font-medium tracking-tight">7PASOS © 2024</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
