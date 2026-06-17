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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Spotlight Effect
        const spotlight = document.getElementById('spotlight');
        document.addEventListener('mousemove', (e) => {
            spotlight.style.setProperty('--x', e.clientX + 'px');
            spotlight.style.setProperty('--y', e.clientY + 'px');
        });

        // GSAP Animations
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Animate Header on load
            gsap.from("nav", {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            // Header Elements (Courses)
            gsap.to(".gsap-course-header", {
                scrollTrigger: {
                    trigger: ".gsap-course-header",
                    start: "top 85%"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });

            // Card Entrance (Courses)
            gsap.utils.toArray('.gsap-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: "power2.out"
                });
            });

             // Header Elements (Morning)
             gsap.to(".gsap-morning-header", {
                scrollTrigger: {
                    trigger: ".gsap-morning-header",
                    start: "top 85%"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });

             // Card Entrance (Morning)
             gsap.utils.toArray('.gsap-morning-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: "power2.out"
                });
            });

            // Pricing Header
            gsap.to(".gsap-pricing-header", {
                scrollTrigger: {
                    trigger: ".gsap-pricing-header",
                    start: "top 85%"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            });

            // Pricing Cards
            gsap.utils.toArray('.gsap-pricing-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: "power2.out"
                });
            });

            // Benefits Section Animation
            gsap.to(".gsap-benefit-left", {
                scrollTrigger: {
                    trigger: ".gsap-benefit-left",
                    start: "top 80%"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            });

            gsap.to(".gsap-benefit-item", {
                scrollTrigger: {
                    trigger: ".gsap-benefit-left", // Trigger using the container or first element
                    start: "top 80%"
                },
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
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
      

<div className="spotlight" id="spotlight" style={{'--x': '679px', '--y': '319px'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 grid-pattern h-[500px]"></div>
</div>

<div className="fixed z-50 flex w-full pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 justify-center">
<div className="w-full max-w-[1000px] flex items-center gap-3 animate-fade-in-down">

<nav className="flex-1 h-14 bg-[#0f0f0f]/90 backdrop-blur-xl border rounded-full flex items-center justify-between pl-8 pr-2 shadow-xl transition-colors duration-300 border-white/5 shadow-black/20 hover:border-white/10">

<a className="text-xl font-display font-medium tracking-tight mr-8 text-white" href="#">paando</a>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-[15px] font-medium transition-colors text-gray-400 hover:text-white" href="#">Método</a>
<a className="text-[15px] font-medium transition-colors text-gray-400 hover:text-white" href="#">Cursos</a>
<a className="text-[15px] font-medium transition-colors text-gray-400 hover:text-white" href="#">Planes</a>
</div>

<div className="flex items-center gap-6">
<button className="hidden sm:block text-[14px] font-medium transition-colors whitespace-nowrap text-gray-400 hover:text-white">
                        Inicia sesión
                    </button>
<button className="pl-5 pr-4 py-2.5 rounded-full text-[14px] font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap bg-white text-black hover:bg-gray-200">
                        Únete ahora
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</nav>
</div>
</div>
<div className="max-w-[1440px] mx-auto min-h-screen border-x border-[#1a1a1a] relative z-10 bg-[#020202]">

<div className="grid lg:grid-cols-2 lg:pt-20 border-[#1a1a1a] border-b pt-20 pb-20 gap-x-0 gap-y-0">
<div className="lg:p-20 flex flex-col border-[#1a1a1a] border-r pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border w-fit mb-8 border-emerald-900/30 bg-emerald-900/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-emerald-400">Nuevas sesiones</span>
</div>
<h1 className="lg:text-7xl leading-[1] text-5xl font-semibold text-white tracking-tighter font-display mb-8">Tu mente.<br/> <span className="text-gray-600">En calma.</span></h1>
<p className="text-base max-w-md leading-relaxed mb-10 font-light text-gray-400">
                    Plataforma de bienestar integral. Meditación, sueño y productividad en un solo lugar.
                </p>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 bg-white text-black hover:bg-gray-200">
                        Comenzar prueba
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="hidden lg:flex items-center justify-center bg-[#080808] relative overflow-hidden min-h-[500px]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] via-[#050505] to-[#050505] from-indigo-900/20"></div>
<div className="relative z-10 w-64 h-80 bg-gradient-to-br rounded-2xl border shadow-2xl flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-500 from-gray-800 to-black border-white/10">
<div className="text-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white/80" height="48" icon="solar:play-circle-linear" width="48"></iconify-icon>
<p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-4">Preview</p>
</div>
</div>
</div>
</div>

<div className="lg:pt-12 lg:pb-12 bg-[#020202] border-[#1a1a1a] border-b pt-20 pb-20 relative">
<div className="px-6 lg:px-12 max-w-full mx-auto">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
<div className="gsap-course-header opacity-0 translate-y-4">
<span className="font-bold text-[10px] tracking-[0.2em] uppercase mb-5 block font-mono text-indigo-400">Cursos</span>
<h2 className="font-sans font-semibold text-4xl lg:text-5xl tracking-tighter text-white">Crecimiento continuo</h2>
</div>
</div>

<div className="gsap-course-header opacity-0 translate-y-4 flex items-center gap-2 mb-10 overflow-x-auto hide-scrollbar pb-1">
<button className="px-4 py-1.5 rounded-full text-[13px] font-medium transition-all bg-white text-black border border-white">
                        Todos
                    </button>
<button className="px-4 py-1.5 rounded-full text-[13px] font-medium transition-all text-gray-400 hover:text-white border border-transparent hover:bg-white/5 hover:border-white/10">
                        Mente
                    </button>
<button className="px-4 py-1.5 rounded-full text-[13px] font-medium transition-all text-gray-400 hover:text-white border border-transparent hover:bg-white/5 hover:border-white/10">
                        Cuerpo
                    </button>
<button className="px-4 py-1.5 rounded-full text-[13px] font-medium transition-all text-gray-400 hover:text-white border border-transparent hover:bg-white/5 hover:border-white/10">
                        Espíritu
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="gsap-card group relative bg-[#080808] rounded-2xl border overflow-hidden transition-colors duration-300 flex flex-col h-full border-white/5 hover:border-white/10">
<div className="aspect-[4/3] w-full relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-screen group-hover:opacity-80 grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 rounded backdrop-blur border text-[9px] font-bold font-mono uppercase tracking-widest bg-black/60 border-white/10 text-gray-300">Mente</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow bg-[#080808]">
<h3 className="text-lg font-semibold mb-2 tracking-tight text-white">Fundamentos de Meditación</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed mb-8 line-clamp-2">Una guía paso a paso para calmar la mente y encontrar foco.</p>
<div className="mt-auto pt-5 border-t flex items-center justify-between border-white/5">
<div className="flex items-center gap-2 text-xs font-medium text-gray-500">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span>2h 15m</span>
</div>
<button className="w-9 h-9 rounded-full border flex items-center justify-center transition-all group/btn border-white/10 text-white bg-white/5 hover:bg-white hover:text-black">
<iconify-icon className="ml-0.5" icon="solar:play-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="gsap-card group relative bg-[#080808] rounded-2xl border overflow-hidden transition-colors duration-300 flex flex-col h-full border-white/5 hover:border-white/10">
<div className="aspect-[4/3] w-full relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 rounded backdrop-blur border text-[9px] font-bold font-mono uppercase tracking-widest bg-black/60 border-white/10 text-gray-300">Cuerpo</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow bg-[#080808]">
<h3 className="text-lg font-semibold mb-2 tracking-tight text-white">Nutrición Consciente</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed mb-8 line-clamp-2">Aprende a escuchar a tu cuerpo y alimentarte sin culpas.</p>
<div className="mt-auto pt-5 border-t flex items-center justify-between border-white/5">
<div className="flex items-center gap-2 text-xs font-medium text-gray-500">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="">4h 30m</span>
</div>
<button className="w-9 h-9 rounded-full border flex items-center justify-center transition-all group/btn border-white/10 text-white bg-white/5 hover:bg-white hover:text-black">
<iconify-icon className="ml-0.5" icon="solar:play-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="gsap-card group relative bg-[#080808] rounded-2xl border overflow-hidden transition-colors duration-300 flex flex-col h-full border-white/5 hover:border-white/10">
<div className="aspect-[4/3] w-full relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-80" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 rounded backdrop-blur border text-[9px] font-bold font-mono uppercase tracking-widest bg-black/60 border-white/10 text-gray-300">Espíritu</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow bg-[#080808]">
<h3 className="text-lg font-semibold mb-2 tracking-tight text-white">La Ciencia del Sueño</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed mb-8 line-clamp-2">Optimiza tu descanso y recupera tu energía vital.</p>
<div className="mt-auto pt-5 border-t flex items-center justify-between border-white/5">
<div className="flex items-center gap-2 text-xs font-medium text-gray-500">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span>3h 10m</span>
</div>
<button className="w-9 h-9 rounded-full border flex items-center justify-center transition-all group/btn border-white/10 text-white bg-white/5 hover:bg-white hover:text-black">
<iconify-icon className="ml-0.5" icon="solar:play-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="gsap-card group relative bg-[#080808] rounded-2xl border overflow-hidden transition-colors duration-300 flex flex-col h-full border-white/5 hover:border-white/10">
<div className="aspect-[4/3] w-full relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-screen group-hover:opacity-80" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 rounded backdrop-blur border text-[9px] font-bold font-mono uppercase tracking-widest bg-black/60 border-white/10 text-gray-300">Mente</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow bg-[#080808]">
<h3 className="text-lg font-semibold mb-2 tracking-tight text-white">Gestión del Tiempo</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed mb-8 line-clamp-2">Sistemas simples para lograr más haciendo menos.</p>
<div className="mt-auto pt-5 border-t flex items-center justify-between border-white/5">
<div className="flex items-center gap-2 text-xs font-medium text-gray-500">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span>1h 45m</span>
</div>
<button className="w-9 h-9 rounded-full border flex items-center justify-center transition-all group/btn border-white/10 text-white bg-white/5 hover:bg-white hover:text-black">
<iconify-icon className="ml-0.5" icon="solar:play-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#020202] border-[#1a1a1a] border-b pt-12 pb-12 relative">
<div className="px-6 lg:px-12 max-w-full mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
<div className="gsap-morning-header opacity-0 translate-y-4">
<span className="font-bold text-[10px] tracking-[0.2em] uppercase mb-5 block font-mono text-orange-400">Rutina Mañana</span>
<h2 className="font-sans font-semibold text-4xl lg:text-5xl tracking-tighter text-white">Cursos para comenzar tu día</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="gsap-morning-card group relative bg-[#0a0a0a] rounded-xl border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
<div className="absolute top-4 right-4">
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:sun-2-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="p-6 relative -mt-10">
<div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 p-5 rounded-xl">
<div className="flex items-center gap-2 mb-3 text-orange-300">
<iconify-icon icon="solar:cup-hot-linear" width="14"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest font-semibold">10 Minutos</span>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Despertar Consciente</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Una meditación corta para establecer tus intenciones antes del café.</p>
<div className="flex items-center text-xs font-medium text-gray-500 hover:text-white transition-colors cursor-pointer">
<span>Iniciar sesión</span>
<iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="gsap-morning-card group relative bg-[#0a0a0a] rounded-xl border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
<div className="absolute top-4 right-4">
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:dumbbell-large-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="p-6 relative -mt-10">
<div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 p-5 rounded-xl">
<div className="flex items-center gap-2 mb-3 text-orange-300">
<iconify-icon icon="solar:stopwatch-linear" width="14"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest font-semibold">15 Minutos</span>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Yoga Matutino</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Movimientos suaves para despertar el cuerpo y activar tu energía.</p>
<div className="flex items-center text-xs font-medium text-gray-500 hover:text-white transition-colors cursor-pointer">
<span>Ver clase</span>
<iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="gsap-morning-card group relative bg-[#0a0a0a] rounded-xl border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
<div className="absolute top-4 right-4">
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:checklist-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="p-6 relative -mt-10">
<div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 p-5 rounded-xl">
<div className="flex items-center gap-2 mb-3 text-orange-300">
<iconify-icon icon="solar:bolt-linear" width="14"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest font-semibold">5 Minutos</span>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Planificación Diaria</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Organiza tus prioridades del día con el método de bloques.</p>
<div className="flex items-center text-xs font-medium text-gray-500 hover:text-white transition-colors cursor-pointer">
<span>Abrir planificador</span>
<iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#020202] border-[#1a1a1a] border-b py-24 relative">
<div className="max-w-5xl mx-auto px-6 lg:px-12">

<div className="text-center mb-16 gsap-pricing-header opacity-0 translate-y-4">
<span className="font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block font-mono text-emerald-500">Membresía</span>
<h2 className="font-display font-semibold text-4xl lg:text-5xl tracking-tighter text-white">Invierte en ti mismo</h2>
</div>

<div className="grid lg:grid-cols-2 gap-8 items-start">

<div className="gsap-pricing-card bg-[#050505] rounded-3xl border border-[#1a1a1a] p-8 lg:p-10 flex flex-col h-full relative group hover:border-[#333] transition-colors duration-300">
<div className="mb-8">
<h3 className="text-xl font-medium text-white mb-2">Curso individual</h3>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold tracking-tighter text-white">$0</span>
<span className="text-lg text-gray-500">/ mes</span>
</div>
</div>
<ul className="space-y-5 mb-10 flex-1">
<li className="flex items-start gap-3 text-gray-300">
<i className="w-5 h-5 text-gray-500 shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-[15px]">Acceso a 3 cursos introductorios</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<i className="w-5 h-5 text-gray-500 shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-[15px]">Journaling básico</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<i className="w-5 h-5 text-gray-500 shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-[15px]">Newsletter semanal</span>
</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#333] text-white font-medium text-sm hover:border-white hover:bg-white/5 transition-all">
                            Comenzar Gratis
                        </button>
</div>

<div className="gsap-pricing-card bg-[#0a0a0a] rounded-3xl border border-[#1a1a1a] p-8 lg:p-10 flex flex-col h-full relative shadow-2xl shadow-black/50">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-gray-200">
                            Popular
                        </div>
<div className="mb-8">
<h3 className="text-xl font-medium text-white mb-2">Membresía anual</h3>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold tracking-tighter text-white">$33</span>
<span className="text-lg text-gray-500">/ mes</span>
</div>
<p className="text-sm text-gray-500 mt-2 font-medium">Facturado anualmente ($132)</p>
</div>
<ul className="space-y-5 mb-10 flex-1">
<li className="flex items-start gap-3 text-gray-300">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-[15px]">Acceso ilimitado a +50 cursos</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-[15px]">Sesiones de coaching grupal</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-[15px]">Herramientas de IA personalizadas</span>
</li>
</ul>
<button className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Unirse a Pro
                        </button>
</div>
</div>
</div>
</div>

<div className="bg-black border-[#1a1a1a] border-b py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.03),transparent_25%)]"></div>
<div className="max-w-full mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="gsap-benefit-left opacity-0 translate-y-4">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-white mb-10 font-display leading-[1.1]">
                            ¿Qué incluye la <br/>
<span className="text-gray-500">membresía Paando?</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all transform active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                Obtener Paando
                            </button>
<button className="h-12 px-8 rounded-full border border-[#333] text-white font-medium text-sm hover:border-white hover:bg-white/5 transition-all transform active:scale-95 flex items-center justify-center gap-2 bg-transparent group">
<i className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" data-lucide="gift"></i>
                                Regalar una cuenta
                            </button>
</div>
</div>

<div className="space-y-7 lg:pl-10">

<div className="gsap-benefit-item flex gap-5 items-start opacity-0 translate-x-4">
<i className="w-6 h-6 text-gray-500 mt-0.5 shrink-0" data-lucide="layers" strokeWidth="1.5"></i>
<p className="text-[17px] text-gray-300 font-medium tracking-tight">Acceso ilimitado a +200 clases y series originales</p>
</div>

<div className="gsap-benefit-item flex gap-5 items-start opacity-0 translate-x-4">
<i className="w-6 h-6 text-gray-500 mt-0.5 shrink-0" data-lucide="headphones" strokeWidth="1.5"></i>
<p className="text-[17px] text-gray-300 font-medium tracking-tight">Lecciones en modo solo audio para meditar</p>
</div>

<div className="gsap-benefit-item flex gap-5 items-start opacity-0 translate-x-4">
<i className="w-6 h-6 text-gray-500 mt-0.5 shrink-0" data-lucide="download" strokeWidth="1.5"></i>
<p className="text-[17px] text-gray-300 font-medium tracking-tight">Descarga contenido y disfrútalo sin conexión</p>
</div>

<div className="gsap-benefit-item flex gap-5 items-start opacity-0 translate-x-4">
<i className="w-6 h-6 text-gray-500 mt-0.5 shrink-0" data-lucide="monitor-smartphone" strokeWidth="1.5"></i>
<p className="text-[17px] text-gray-300 font-medium tracking-tight">Disponible en escritorio, TV y dispositivos móviles</p>
</div>

<div className="gsap-benefit-item flex gap-5 items-start opacity-0 translate-x-4">
<i className="w-6 h-6 text-gray-500 mt-0.5 shrink-0" data-lucide="sparkles" strokeWidth="1.5"></i>
<p className="text-[17px] text-gray-300 font-medium tracking-tight">Nuevas clases y maestros añadidos cada mes</p>
</div>

<div className="gsap-benefit-item flex gap-5 items-start opacity-0 translate-x-4">
<i className="w-6 h-6 text-gray-500 mt-0.5 shrink-0" data-lucide="shield-check" strokeWidth="1.5"></i>
<p className="text-[17px] text-gray-300 font-medium tracking-tight">Garantía de devolución de dinero de 30 días</p>
</div>
</div>
</div>
</div>
</div>

<footer className="p-8 border-t border-[#1a1a1a] bg-[#020202] flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-xs font-mono tracking-wide text-gray-600">© 2024 PAANDO INC.</span>
<div className="flex gap-6">
<i className="w-4 h-4 cursor-pointer transition-colors text-gray-600 hover:text-white" data-lucide="instagram"></i>
<i className="w-4 h-4 cursor-pointer transition-colors text-gray-600 hover:text-white" data-lucide="twitter"></i>
<i className="w-4 h-4 cursor-pointer transition-colors text-gray-600 hover:text-white" data-lucide="youtube"></i>
</div>
</footer>
</div>


    </>
  );
}
