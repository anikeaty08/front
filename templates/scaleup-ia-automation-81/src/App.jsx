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
darkMode: 'class',
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
},
emerald: {
400: '#34d399',
500: '#10b981',
800: '#065f46',
900: '#064e3b',
}
}
}
}
}



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
      

<main className="w-full max-w-[1400px] h-[90vh] md:h-auto md:aspect-[16/10] bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col animate-enter">

<div className="h-10 bg-zinc-950/50 border-b border-zinc-800 flex items-center px-4 space-x-2 shrink-0 backdrop-blur-md sticky top-0 z-50">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
<div className="ml-4 flex-1 text-center text-xs text-zinc-500 font-medium">scaleup.ai</div>
</div>

<div className="flex-1 overflow-y-auto relative glow-bg scroll-smooth">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-emerald-800/10 blur-[100px] rounded-full pointer-events-none"></div>

<nav className="relative z-40 w-full flex justify-center pt-8 px-6">
<div className="glass-panel px-6 py-3 rounded-full flex items-center justify-between w-full max-w-3xl">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30 text-emerald-400">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<span className="font-jakarta font-semibold text-lg tracking-tight text-white">ScaleUp</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-emerald-400 transition-colors" href="#">Soluciones</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Beneficios</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Precios</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-zinc-100 text-zinc-900 px-4 py-2 rounded-full hover:bg-emerald-400 transition-all" href="mailto:pipebonillaesc25@gmail.com">
                        Contáctanos
                    </a>
<button className="md:hidden text-zinc-300">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative z-30 pt-16 pb-12 md:pt-24 md:pb-16 px-6 text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Impulsado por IA
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                    Transforma tu Negocio con <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Automatización de IA</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                    En ScaleUp, ayudamos a las empresas a optimizar operaciones y aumentar la eficiencia con soluciones impulsadas por IA que automatizan tareas repetitivas.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group relative px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-2 text-lg" href="mailto:pipebonillaesc25@gmail.com">
                        Contáctanos
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<div className="flex items-center gap-3 px-6 py-3.5 text-zinc-400 text-lg">
<i className="w-5 h-5 text-emerald-500" data-lucide="phone"></i>
<span className="font-mono tracking-wide text-zinc-300">310 479 2080</span>
</div>
</div>
</section>

<section className="relative z-30 px-6 pb-24 max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-5 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-2 md:row-span-3 glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>
<div className="relative z-10 mb-6">
<div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 text-emerald-400 mb-4">
<i className="w-6 h-6" data-lucide="bot"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Automatización Inteligente</h3>
<p className="text-zinc-400 text-lg leading-relaxed">Automatiza respuestas de correo, soporte al cliente y generación de leads. Tu negocio funciona 24/7 mientras tú descansas.</p>
</div>

<div className="mt-auto relative w-full bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 shadow-2xl backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4 border-b border-zinc-800 pb-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-zinc-500 ml-auto">Asistente IA Activo</span>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-zinc-400" data-lucide="user"></i>
</div>
<div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 text-sm text-zinc-300">
                                        ¿Pueden agendar una demo para el martes?
                                    </div>
</div>
<div className="flex items-start gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
<i className="w-4 h-4 text-emerald-400" data-lucide="sparkles"></i>
</div>
<div className="bg-emerald-900/20 border border-emerald-500/20 rounded-lg rounded-tr-none p-3 text-sm text-emerald-100">
                                        ¡Claro! He agendado la demostración para el martes a las 10:00 AM y enviado la invitación a tu calendario.
                                    </div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 md:row-span-1 glass-card rounded-3xl p-6 flex flex-col justify-between group">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700 group-hover:border-emerald-500/50 transition-colors">
<i className="w-5 h-5 text-yellow-400" data-lucide="zap"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-white mb-1">Productividad</h4>
<p className="text-zinc-400 text-base">Escala más rápido.</p>
</div>
</div>

<div className="col-span-1 md:col-span-1 md:row-span-1 glass-card rounded-3xl p-6 flex flex-col justify-between group">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700 group-hover:border-emerald-500/50 transition-colors">
<i className="w-5 h-5 text-blue-400" data-lucide="layers"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-white mb-1">Integración</h4>
<p className="text-zinc-400 text-base">Simple y fluida.</p>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:row-span-1 glass-card rounded-3xl p-6 flex items-center justify-between relative overflow-hidden">
<div className="relative z-10 max-w-[60%]">
<h4 className="text-xl font-semibold text-white mb-2">Crecimiento Enfocado</h4>
<p className="text-zinc-400 text-base">Enfócate en crecer tu negocio mientras la IA se encarga del resto.</p>
</div>
<div className="absolute right-6 top-1/2 -translate-y-1/2">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center"><i className="w-4 h-4 text-zinc-500" data-lucide="mail"></i></div>
<div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center"><i className="w-4 h-4 text-zinc-500" data-lucide="message-square"></i></div>
<div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-zinc-900 flex items-center justify-center text-zinc-900 font-bold text-xs">+5</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:row-span-1 glass-card rounded-3xl p-6 flex items-center gap-6 relative overflow-hidden">
<div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-pulse">
<i className="w-6 h-6 text-zinc-900" data-lucide="trending-up"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-white">Resultados Medibles</h4>
<p className="text-zinc-400 text-base mt-1">Ahorra tiempo y reduce costos operativos.</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 text-center border-t border-white/5 bg-zinc-900/50 backdrop-blur-sm">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">¿Listo para escalar?</h2>
<p className="text-lg text-zinc-400 mb-8">Ponte en contacto ahora para ver cómo podemos ayudar a crecer tu negocio.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<a className="px-8 py-3 bg-white text-zinc-900 font-semibold rounded-lg hover:bg-zinc-200 transition-colors" href="mailto:pipebonillaesc25@gmail.com">
                            Email: pipebonillaesc25@gmail.com
                        </a>
<span className="text-zinc-500 font-mono">o</span>
<div className="px-8 py-3 border border-zinc-700 bg-zinc-800/50 text-white font-semibold rounded-lg">
<i className="w-4 h-4 inline mr-2 text-emerald-400" data-lucide="smartphone"></i> 310 479 2080
                        </div>
</div>
</div>
</section>

<footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-800 bg-zinc-950 relative z-20">
<div className="flex justify-center items-center gap-2 mb-4 opacity-50">
<i className="w-4 h-4" data-lucide="hexagon"></i>
<span className="font-semibold tracking-wide">SCALEUP</span>
</div>
<p>ScaleUp – Tu socio en Automatización de IA para el Crecimiento Empresarial.</p>
<p className="mt-2 text-xs">© 2024 ScaleUp. Todos los derechos reservados.</p>
</footer>
</div>
</main>


    </>
  );
}
