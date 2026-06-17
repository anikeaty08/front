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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                AURA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Características</a>
<a className="hover:text-white transition-colors" href="#specs">Especificaciones</a>
<a className="hover:text-white transition-colors" href="#integration">Integración</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Iniciar Sesión</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Reservar
                </a>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-300 mb-8 hover:border-indigo-500/50 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Aura OS 2.0 ya está disponible
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 tracking-tighter mb-6 max-w-4xl mx-auto leading-[1.1]">
                Inteligencia que se siente natural.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Redefine tu flujo de trabajo con un procesador neural adaptativo. 
                Diseñado para desarrolladores, creadores y visionarios.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<button className="group relative px-6 py-3 rounded-full bg-white text-black text-sm font-medium overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
<span className="relative z-10 flex items-center gap-2">
                        Comprar Aura
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
<button className="px-6 py-3 rounded-full border border-white/10 text-neutral-300 text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Ver Demo
                </button>
</div>

<div className="relative w-full max-w-5xl mx-auto aspect-video rounded-xl border border-white/10 bg-neutral-900/30 backdrop-blur-sm overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 opacity-50"></div>

<div className="absolute inset-x-12 top-12 bottom-0 bg-[#0A0A0A] border-t border-l border-r border-white/10 rounded-t-lg shadow-2xl overflow-hidden">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="p-8 grid grid-cols-12 gap-6 h-full">

<div className="col-span-3 border-r border-white/5 h-full space-y-4">
<div className="h-2 w-24 bg-neutral-800 rounded"></div>
<div className="h-2 w-16 bg-neutral-800 rounded"></div>
<div className="h-2 w-20 bg-neutral-800 rounded"></div>
</div>

<div className="col-span-9 space-y-4">
<div className="flex justify-between items-center">
<div className="h-8 w-32 bg-neutral-800 rounded"></div>
<div className="h-8 w-8 bg-indigo-500/20 rounded-full"></div>
</div>
<div className="h-48 w-full bg-gradient-to-br from-neutral-900 to-black border border-white/5 rounded-lg relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-24 bg-neutral-900 border border-white/5 rounded-lg"></div>
<div className="h-24 bg-neutral-900 border border-white/5 rounded-lg"></div>
<div className="h-24 bg-neutral-900 border border-white/5 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Potenciando equipos innovadores en</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale mix-blend-screen">

<h3 className="text-xl font-semibold tracking-tighter">ACME</h3>
<h3 className="text-xl font-semibold tracking-tighter">NEXUS</h3>
<h3 className="text-xl font-semibold tracking-tighter">ORBITAL</h3>
<h3 className="text-xl font-semibold tracking-tighter">HYPERION</h3>
<h3 className="text-xl font-semibold tracking-tighter">VERTEX</h3>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-32" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-4">Ingeniería de precisión.</h2>
<p className="text-neutral-400 max-w-xl text-lg font-light">Cada componente de Aura ha sido calibrado para eliminar la fricción entre tu mente y la máquina.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">

<div className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors">
<div className="absolute top-0 right-0 p-12 opacity-20 group-hover:opacity-30 transition-opacity">
<div className="w-64 h-64 bg-indigo-600 rounded-full blur-[80px]"></div>
</div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-indigo-400">
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Procesamiento Neural X1</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md">Nuestro chip propietario aprende de tus patrones de uso, optimizando la asignación de recursos en tiempo real para una latencia cero.</p>
</div>

<div className="mt-8 h-32 w-full flex items-end gap-1">
<div className="w-full bg-indigo-500/20 h-[40%] rounded-sm"></div>
<div className="w-full bg-indigo-500/30 h-[60%] rounded-sm"></div>
<div className="w-full bg-indigo-500/40 h-[30%] rounded-sm"></div>
<div className="w-full bg-indigo-500/50 h-[80%] rounded-sm"></div>
<div className="w-full bg-indigo-500/60 h-[50%] rounded-sm"></div>
<div className="w-full bg-indigo-500/80 h-[90%] rounded-sm"></div>
<div className="w-full bg-indigo-400 h-[70%] rounded-sm"></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-4 row-span-2 rounded-2xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Encriptación Cuántica</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">Tus datos nunca abandonan el dispositivo sin tu autorización explícita biométrica.</p>

<div className="mt-auto bg-black/40 border border-white/5 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-white">Modo Seguro</span>

<div className="w-10 h-5 bg-green-500/20 border border-green-500/50 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3.5 h-3.5 bg-green-400 rounded-full shadow-sm"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-[10px] text-neutral-400">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear"></iconify-icon>
                                Biometría Activa
                            </div>
<div className="flex items-center gap-2 text-[10px] text-neutral-400">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear"></iconify-icon>
                                Red Privada VPN
                            </div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-4 rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:bg-neutral-900/60 transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-pink-400">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">Diseño Modular</h3>
<p className="text-neutral-500 text-xs">Expande la memoria o cambia módulos GPU en segundos.</p>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-4 rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:bg-neutral-900/60 transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">Conectividad 6G</h3>
<p className="text-neutral-500 text-xs">Preparado para el futuro con soporte nativo de banda ultra ancha.</p>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-4 rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:bg-neutral-900/60 transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400">
<iconify-icon icon="solar:battery-charge-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">72h de Autonomía</h3>
<p className="text-neutral-500 text-xs">Células de grafeno de alta densidad con carga solar pasiva.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5" id="specs">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-4">Especificaciones Técnicas</h2>
<p className="text-neutral-400">Poder en estado puro.</p>
</div>
<div className="space-y-px bg-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="grid grid-cols-2 bg-neutral-950 p-6 hover:bg-neutral-900 transition-colors group">
<div className="flex items-center gap-3 text-neutral-400 text-sm">
<iconify-icon className="text-indigo-500 group-hover:scale-110 transition-transform" icon="solar:chip-linear"></iconify-icon>
                            Procesador
                        </div>
<div className="text-right text-white text-sm font-medium">Aura Silicon M4 (3nm)</div>
</div>

<div className="grid grid-cols-2 bg-neutral-950 p-6 hover:bg-neutral-900 transition-colors group">
<div className="flex items-center gap-3 text-neutral-400 text-sm">
<iconify-icon className="text-purple-500 group-hover:scale-110 transition-transform" icon="solar:sd-card-linear"></iconify-icon>
                            Memoria Unificada
                        </div>
<div className="text-right text-white text-sm font-medium">Hasta 128GB LPDDR5X</div>
</div>

<div className="grid grid-cols-2 bg-neutral-950 p-6 hover:bg-neutral-900 transition-colors group">
<div className="flex items-center gap-3 text-neutral-400 text-sm">
<iconify-icon className="text-pink-500 group-hover:scale-110 transition-transform" icon="solar:display-linear"></iconify-icon>
                            Pantalla
                        </div>
<div className="text-right text-white text-sm font-medium">OLED ProMotion 120Hz</div>
</div>

<div className="grid grid-cols-2 bg-neutral-950 p-6 hover:bg-neutral-900 transition-colors group">
<div className="flex items-center gap-3 text-neutral-400 text-sm">
<iconify-icon className="text-green-500 group-hover:scale-110 transition-transform" icon="solar:scale-linear"></iconify-icon>
                            Peso
                        </div>
<div className="text-right text-white text-sm font-medium">1.24 kg</div>
</div>

<div className="grid grid-cols-2 bg-neutral-950 p-6 hover:bg-neutral-900 transition-colors group">
<div className="flex items-center gap-3 text-neutral-400 text-sm">
<iconify-icon className="text-blue-500 group-hover:scale-110 transition-transform" icon="solar:connection-linear"></iconify-icon>
                            Puertos
                        </div>
<div className="text-right text-white text-sm font-medium">4x Thunderbolt 5</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black z-0"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">El futuro está en tus manos.</h2>
<p className="text-neutral-400 mb-10 text-lg">Únete a los pioneros que ya están construyendo el mañana con Aura. Stock limitado para la primera edición.</p>
<div className="bg-white/5 border border-white/10 p-2 rounded-full inline-flex items-center gap-2 backdrop-blur-md">
<input className="bg-transparent border-none outline-none text-white text-sm px-4 py-2 w-64 placeholder-neutral-500" placeholder="tu@email.com" type="email"/>
<button className="bg-white text-black text-sm font-medium px-6 py-2 rounded-full hover:bg-neutral-200 transition-colors">
                        Reservar
                    </button>
</div>
<p className="mt-4 text-[10px] text-neutral-600">Sin spam. Cancela en cualquier momento.</p>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-neutral-700"></span>
<span className="text-sm font-medium tracking-tight text-neutral-300">AURA SYSTEMS INC.</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Términos</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
<div className="text-[10px] text-neutral-600">
                © 2024 Aura. Diseñado en el futuro.
            </div>
</div>
</footer>

    </>
  );
}
