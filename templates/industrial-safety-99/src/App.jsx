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
      

<header className="relative industrial-mesh min-h-screen flex items-center pt-10 md:pt-0">
<div className="max-w-7xl mx-auto px-6 w-full py-12 md:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="relative order-2 md:order-1">

<div className="absolute -inset-2 border-2 border-[#FFD700] opacity-30"></div>
<div className="absolute -inset-1 bg-[#FFD700] translate-x-2 translate-y-2 -z-10"></div>
<div className="aspect-[3/4] bg-[#262626] relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
<img alt="Victor Ventocilla" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 bg-[#FFD700] text-[#1A1A1A] px-4 py-2">
<span className="text-xs font-semibold tracking-widest uppercase">Consultor Senior</span>
</div>
</div>
</div>

<div className="order-1 md:order-2 space-y-8">
<div className="flex items-center gap-3 text-[#FFD700] opacity-80">
<iconify-icon height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<span className="text-xs font-semibold tracking-[0.2em] uppercase">Safety First</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold uppercase tracking-tighter leading-[0.9] text-white">
                        Hola, soy <br/>
<span className="text-white">Victor</span>
<span className="text-[#888]">Ventocilla</span>
</h1>
<div className="w-24 h-2 bg-[#FFD700]"></div>
<p className="text-lg md:text-xl font-light text-neutral-300 leading-relaxed max-w-lg">
                        Desde <span className="text-[#FFD700] font-medium">PREVENCIÓN A LA VENA</span> acompaño a organizaciones y profesionales en un propósito que va más allá del cumplimiento.
                    </p>
<div className="pt-4">
<div className="inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-[#FFD700]">
<span className="border-b border-[#FFD700] pb-1">Scroll para conocer más</span>
<iconify-icon height="16" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative bg-[#F4F4F4]">

<div className="h-6 w-full hazard-stripe"></div>
<div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
<div className="flex flex-col items-center text-center space-y-12">
<iconify-icon className="text-[#1A1A1A]" height="48" icon="solar:user-id-linear" width="48"></iconify-icon>
<div className="prose prose-xl text-[#1A1A1A] max-w-3xl">
<p className="font-light leading-relaxed">
                        A lo largo de mi trayectoria he visto cómo las empresas que crecen sosteniblemente son aquellas que desarrollan a su gente, fortalecen sus sistemas y entienden que la seguridad no es un gasto… es una inversión estratégica.
                    </p>
</div>

<div className="bg-[#FFD700] p-8 md:p-10 w-full transform -rotate-1 shadow-[10px_10px_0px_0px_rgba(26,26,26,1)]">
<h3 className="text-xl md:text-3xl font-semibold text-[#1A1A1A] uppercase tracking-tight leading-tight text-center">
                        "La seguridad no es un discurso,<br/>es una realidad diaria."
                    </h3>
</div>
<div className="prose prose-lg text-[#555] max-w-3xl">
<p className="leading-relaxed">
                        Y ahí es donde surge mi misión: llevar la prevención de manera directa, clara y transformadora, exactamente donde se necesita: <strong className="text-[#1A1A1A] font-semibold border-b-4 border-[#FFD700]">a la vena</strong> de cada operación, cada equipo y cada líder.
                    </p>
</div>
</div>
</div>

<div className="h-6 w-full hazard-stripe"></div>
</section>

<section className="industrial-mesh py-24 md:py-32 border-t border-[#333]">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end border-b border-[#333] pb-8">
<h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tighter text-white">
                    Mis Servicios
                </h2>
<p className="text-neutral-400 mt-4 md:mt-0 font-light max-w-md text-right">
                    En este camino ofrezco tres servicios que se complementan y potencian:
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-[#FFD700] p-8 h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
<div>
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-[#1A1A1A]" height="40" icon="solar:users-group-two-rounded-linear" width="40"></iconify-icon>
<span className="text-[#1A1A1A] opacity-20 text-4xl font-semibold">01</span>
</div>
<h3 className="text-2xl font-semibold uppercase tracking-tight text-[#1A1A1A] mb-4">Mentoría</h3>
<p className="text-[#1A1A1A] font-medium leading-relaxed">
                            Acompaño a profesionales a elevar su nivel y liderazgo preventivo.
                        </p>
</div>
<div className="mt-8 pt-4 border-t border-[#1A1A1A]/20">
<span className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]">Principio: Aprender - Haciendo</span>
</div>
</div>

<div className="group bg-[#FFD700] p-8 h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
<div>
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-[#1A1A1A]" height="40" icon="solar:clipboard-check-linear" width="40"></iconify-icon>
<span className="text-[#1A1A1A] opacity-20 text-4xl font-semibold">02</span>
</div>
<h3 className="text-2xl font-semibold uppercase tracking-tight text-[#1A1A1A] mb-4">Asesoría</h3>
<p className="text-[#1A1A1A] font-medium leading-relaxed">
                            Diseño y optimización de sistemas de prevención robustos.
                        </p>
</div>
<div className="mt-8 pt-4 border-t border-[#1A1A1A]/20">
<span className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]">Transformamos cultura</span>
</div>
</div>

<div className="group bg-[#FFD700] p-8 h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
<div>
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-[#1A1A1A]" height="40" icon="solar:diploma-linear" width="40"></iconify-icon>
<span className="text-[#1A1A1A] opacity-20 text-4xl font-semibold">03</span>
</div>
<h3 className="text-2xl font-semibold uppercase tracking-tight text-[#1A1A1A] mb-4">Capacitación</h3>
<p className="text-[#1A1A1A] font-medium leading-relaxed">
                            Competencias reales mediante experiencias prácticas.
                        </p>
</div>
<div className="mt-8 pt-4 border-t border-[#1A1A1A]/20">
<span className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]">Pensar y Actuar</span>
</div>
</div>
</div>
</div>
</section>

<footer className="flex flex-col">

<div className="bg-[#1A1A1A] py-20 px-6 border-t border-[#333]">
<div className="max-w-4xl mx-auto text-center space-y-8">
<iconify-icon className="text-[#FFD700]" height="40" icon="solar:hand-shake-linear" width="40"></iconify-icon>
<p className="text-2xl md:text-4xl text-white font-light uppercase tracking-tight leading-tight">
                    Gracias por estar aquí. Hoy empezamos un espacio para crecer, reflexionar y transformar la forma en que hacemos prevención…
                </p>
</div>
</div>

<div className="bg-[#FFD700] py-20 px-6">
<div className="max-w-4xl mx-auto text-center space-y-10">
<h2 className="text-6xl md:text-8xl lg:text-9xl font-semibold uppercase tracking-tighter text-[#1A1A1A] opacity-90">
                    ¡A la vena!
                </h2>
<button className="bg-[#1A1A1A] text-[#FFD700] px-10 py-5 text-lg font-semibold uppercase tracking-widest hover:bg-black transition-colors duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center gap-3 mx-auto">
<iconify-icon height="24" icon="solar:calendar-add-linear" width="24"></iconify-icon>
                    Agendar una reunión
                </button>
<div className="pt-8 text-[#1A1A1A]/60 text-xs font-semibold uppercase tracking-widest">
                    © 2024 Victor Ventocilla. Todos los derechos reservados.
                </div>
</div>
</div>
</footer>

    </>
  );
}
