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
      
tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#0A0F1E',
darker: '#050810',
card: '#0D1B2A',
accent: '#F5C518',
accentHover: '#E5B510'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Montserrat', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
        });

        // Generate Sparks for Hero
        const sparksContainer = document.getElementById('sparks-container');
        if(sparksContainer) {
            for (let i = 0; i < 20; i++) {
                const spark = document.createElement('div');
                spark.classList.add('spark');
                
                const leftPos = Math.random() * 100;
                const animDuration = Math.random() * 3 + 2;
                const delay = Math.random() * 5;
                const size = Math.random() * 2 + 1;

                spark.style.left = `${leftPos}%`;
                spark.style.animationDuration = `${animDuration}s`;
                spark.style.animationDelay = `${delay}s`;
                spark.style.width = `${size}px`;
                spark.style.height = `${size * 6}px`;
                
                sparksContainer.appendChild(spark);
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
      

<header className="fixed w-full top-0 z-50 transition-all duration-300 bg-brand-dark/80 backdrop-blur-md border-b border-white/5" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-brand-accent text-brand-dark flex items-center justify-center font-display font-semibold text-lg leading-none tracking-tight group-hover:bg-brand-accentHover transition-colors shadow-[0_0_15px_rgba(245,197,24,0.2)]">T</div>
<span className="font-display font-semibold tracking-tight text-xl text-white uppercase">TK LAZER</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#precios">Precios</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#como-funciona">Cómo funciona</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#galeria">Galería</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>

<div className="hidden md:flex items-center gap-6">
<a className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(245,197,24,0.2)] hover:shadow-[0_6px_20px_rgba(245,197,24,0.3)] hover:-translate-y-0.5 flex items-center gap-2" href="#">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        WhatsApp
                    </a>
</div>

<button className="md:hidden text-gray-300 hover:text-white p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden bg-brand-dark border-b border-white/5 absolute w-full shadow-2xl" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" href="#precios">Precios</a>
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" href="#como-funciona">Cómo funciona</a>
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" href="#galeria">Galería</a>
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" href="#faq">FAQ</a>
<div className="pt-4 mt-2 border-t border-white/5 flex flex-col gap-3">
<a className="flex items-center justify-center gap-2 text-base font-semibold bg-brand-accent text-brand-dark py-3 rounded-md shadow-lg" href="#">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                        WhatsApp
                    </a>
</div>
</div>
</div>
</header>

<a className="md:hidden fixed bottom-6 right-6 z-50 bg-brand-accent text-brand-dark w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(245,197,24,0.4)] transition-transform hover:scale-105" href="#">
<iconify-icon icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</a>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden clip-bottom bg-brand-darker">

<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,197,24,0.05)_0%,#050810_60%)]"></div>

<div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-brand-dark/80 to-brand-dark"></div>
</div>

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40" id="sparks-container"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-[55%]">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-8 backdrop-blur-sm reveal">
<div className="flex items-center justify-center w-4 h-4 rounded-full bg-brand-accent/20">
<div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
</div>
<span className="text-xs font-medium tracking-wide text-brand-accent">Sistemas de corte activo. Entregas 24h.</span>
</div>
<h1 className="font-display font-semibold text-5xl sm:text-6xl tracking-tight text-white mb-6 leading-[1.1] reveal" style={{transitionDelay: '100ms'}}>
                    Tu maqueta cortada <br/>y lista en <span className="text-brand-accent relative inline-block">
                        24 horas.
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-accent opacity-50" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="2"></path></svg>
</span>
</h1>
<p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl font-light leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                    A 5 minutos de Anáhuac. Entregamos en tu campus. Sube tu archivo y obtén una cotización exacta en menos de 30 minutos.
                </p>
<div className="flex flex-col sm:flex-row gap-4 reveal" style={{transitionDelay: '300ms'}}>
<a className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(245,197,24,0.2)] hover:shadow-[0_6px_20px_rgba(245,197,24,0.3)] hover:-translate-y-0.5" href="#">
<iconify-icon icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                        Cotizar por WhatsApp
                    </a>
<a className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-lg text-base font-medium transition-all duration-300 hover:-translate-y-0.5" href="#">
                        Subir archivo DXF →
                    </a>
</div>
<div className="mt-12 flex items-center gap-6 reveal" style={{transitionDelay: '400ms'}}>
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-brand-darker bg-gray-800 flex items-center justify-center text-xs">AI</div>
<div className="w-10 h-10 rounded-full border-2 border-brand-darker bg-gray-700 flex items-center justify-center text-xs">DXF</div>
<div className="w-10 h-10 rounded-full border-2 border-brand-darker bg-gray-600 flex items-center justify-center text-xs">PDF</div>
</div>
<div className="text-sm text-gray-400 font-light">
<strong className="text-white font-medium">100% de compatibilidad</strong><br/>con archivos vectoriales estándar.
                    </div>
</div>
</div>

<div className="w-full lg:w-[45%] reveal" style={{transitionDelay: '500ms'}}>
<div className="relative w-full aspect-[4/3] rounded-2xl border border-white/10 bg-brand-card/80 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden">

<div className="h-10 border-b border-white/5 bg-black/20 flex items-center px-4 gap-4 w-full">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
</div>
<div className="mx-auto flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md border border-white/5 text-[10px] text-gray-400 font-mono">
<iconify-icon icon="solar:document-linear"></iconify-icon>
                            proyecto_final_anahuac.dxf
                        </div>
</div>

<div className="flex-1 relative bg-brand-darker grid-pattern flex items-center justify-center overflow-hidden p-6">

<div className="relative w-full max-w-[200px] aspect-square border border-brand-accent/30 rounded-sm">
<div className="absolute inset-4 border border-dashed border-gray-600"></div>
<div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-brand-accent/50 bg-brand-accent/5"></div>

<div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-accent rounded-full shadow-[0_0_15px_#F5C518] -translate-x-1.5 -translate-y-1.5 z-10">
<div className="absolute inset-0 bg-brand-accent rounded-full animate-ping opacity-50"></div>
</div>

<div className="absolute top-0 left-1/4 w-px h-1/4 bg-gradient-to-b from-transparent to-brand-accent shadow-[0_0_5px_#F5C518]"></div>
</div>

<div className="absolute bottom-4 right-4 bg-brand-card/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl w-48 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
<span className="text-[10px] text-gray-400 uppercase tracking-wide">Estimación Viva</span>
<div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80]"></div>
</div>
<div className="flex items-end gap-1 mb-1">
<span className="font-display text-xl text-white leading-none">$145</span>
<span className="text-xs text-gray-400 mb-0.5">.00 MXN</span>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-brand-accent">
<iconify-icon icon="solar:stopwatch-linear"></iconify-icon>
<span>Tiempo est: 18 min</span>
</div>
</div>

<div className="absolute left-0 top-0 h-full w-12 border-r border-white/5 bg-black/20 flex flex-col items-center py-4 gap-4 text-gray-500">
<div className="p-1.5 bg-white/10 rounded text-white cursor-pointer"><iconify-icon icon="solar:cursor-square-linear"></iconify-icon></div>
<div className="p-1.5 hover:text-white transition-colors cursor-pointer"><iconify-icon icon="solar:pen-linear"></iconify-icon></div>
<div className="p-1.5 hover:text-white transition-colors cursor-pointer"><iconify-icon icon="solar:maximize-square-linear"></iconify-icon></div>
<div className="mt-auto p-1.5 hover:text-white transition-colors cursor-pointer"><iconify-icon icon="solar:settings-linear"></iconify-icon></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-50 clip-top clip-bottom z-10" id="precios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-xs font-semibold tracking-wider text-brand-accent uppercase mb-3 block">Transparencia Total</span>
<h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-slate-900 mb-4">Precios claros, sin sorpresas.</h2>
<p className="text-slate-500 text-base font-light">Cotizamos tu proyecto exacto en 30 minutos a través de nuestro sistema. Estos son los costos base de máquina.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 reveal flex flex-col h-[calc(100%-2rem)]">
<div className="mb-6">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
<iconify-icon className="text-slate-700" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-slate-900 mb-1">Corte láser</h3>
<p className="text-xs text-slate-500">Ideal para despieces arquitectónicos.</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="font-display font-semibold text-4xl tracking-tight text-slate-900">$8</span>
<span className="text-sm text-slate-500 font-medium">/minuto</span>
</div>
<div className="space-y-4 flex-grow mb-8">
<div className="flex items-start gap-3 text-sm text-slate-600">
<div className="mt-0.5"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon></div>
<span>MDF chileno certificado</span>
</div>
<div className="flex items-start gap-3 text-sm text-slate-600">
<div className="mt-0.5"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon></div>
<span>Acrílico hasta 6mm</span>
</div>
<div className="flex items-start gap-3 text-sm text-slate-600">
<div className="mt-0.5"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon></div>
<span>Área de corte 87×57 cm</span>
</div>
</div>
<a className="block w-full py-2.5 px-4 text-center text-sm font-medium rounded-lg text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors" href="#">Ver materiales</a>
</div>

<div className="relative bg-brand-dark p-8 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.15)] ring-1 ring-brand-accent/30 hover:-translate-y-1 transition-all duration-300 reveal flex flex-col z-10">
<div className="absolute -top-4 left-0 right-0 flex justify-center">
<span className="bg-brand-accent text-brand-dark px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">Más solicitado</span>
</div>
<div className="mb-6 mt-2">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
<iconify-icon className="text-brand-accent" icon="solar:scanner-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-white mb-1">Grabado láser</h3>
<p className="text-xs text-gray-400">Detalle profundo para texturas y textos.</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="font-display font-semibold text-4xl tracking-tight text-white">$10</span>
<span className="text-sm text-gray-400 font-medium">/minuto</span>
</div>
<div className="space-y-4 flex-grow mb-8">
<div className="flex items-start gap-3 text-sm text-gray-300">
<div className="mt-0.5"><iconify-icon className="text-brand-accent" icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span>Ajuste de profundidad exacto</span>
</div>
<div className="flex items-start gap-3 text-sm text-gray-300">
<div className="mt-0.5"><iconify-icon className="text-brand-accent" icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span>Relieves y bajos relieves</span>
</div>
<div className="flex items-start gap-3 text-sm text-gray-300">
<div className="mt-0.5"><iconify-icon className="text-brand-accent" icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span>Revisión DFM incluida</span>
</div>
</div>
<a className="block w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg text-brand-dark bg-brand-accent hover:bg-brand-accentHover transition-colors shadow-[0_4px_14px_rgba(245,197,24,0.2)]" href="#">Cotizar proyecto</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 reveal flex flex-col h-[calc(100%-2rem)]">
<div className="mb-6">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
<iconify-icon className="text-slate-700" icon="solar:stopwatch-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-slate-900 mb-1">Exprés 12h</h3>
<p className="text-xs text-slate-500">Para deadlines críticos y madrugadas.</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="font-display font-semibold text-4xl tracking-tight text-slate-900">+30%</span>
<span className="text-sm text-slate-500 font-medium">s/tarifa base</span>
</div>
<div className="space-y-4 flex-grow mb-8">
<div className="flex items-start gap-3 text-sm text-slate-600">
<div className="mt-0.5"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon></div>
<span>Entrega garantizada a tiempo</span>
</div>
<div className="flex items-start gap-3 text-sm text-slate-600">
<div className="mt-0.5"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon></div>
<span>Servicio nocturno prioritario</span>
</div>
<div className="flex items-start gap-3 text-sm text-slate-600">
<div className="mt-0.5"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon></div>
<span>Sáb/Dom con previa cita</span>
</div>
</div>
<a className="block w-full py-2.5 px-4 text-center text-sm font-medium rounded-lg text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors" href="#">Consultar disponibilidad</a>
</div>
</div>
<div className="mt-12 max-w-xl mx-auto bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-4 shadow-sm reveal">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-500 text-lg" icon="solar:info-circle-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-snug font-light">¿Traes tu material? Aceptamos MDF en buen estado. <strong className="font-medium text-slate-900">Materiales tóxicos (PVC, ABS) estrictamente no se cortan.</strong></p>
</div>
</div>
</section>

<section className="py-24 bg-brand-card relative clip-top z-20" id="como-funciona">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-white mb-4">Un flujo de trabajo diseñado para la velocidad.</h2>
<p className="text-gray-400 text-base font-light">Sin procesos informales. Carga, aprueba y recoge.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">

<div className="bg-brand-dark rounded-2xl border border-white/5 p-6 shadow-xl reveal flex flex-col">
<div className="mb-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold text-sm">1</div>
<h3 className="font-display font-medium text-lg text-white">Sube tu archivo</h3>
</div>

<div className="flex-1 mt-2 mb-6 bg-brand-card border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center p-6 text-center group hover:border-brand-accent/50 transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon className="text-gray-400 group-hover:text-brand-accent transition-colors" icon="solar:upload-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-white mb-1">Arrastra tu archivo aquí</span>
<span className="text-xs text-gray-500">Soporta .DXF, .AI, .PDF</span>
</div>
<p className="text-sm text-gray-400 font-light">Si tienes dudas con el despiece, nuestro equipo técnico lo revisa preventivamente.</p>
</div>

<div className="bg-brand-dark rounded-2xl border border-white/5 p-6 shadow-xl reveal flex flex-col" style={{transitionDelay: '100ms'}}>
<div className="mb-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold text-sm">2</div>
<h3 className="font-display font-medium text-lg text-white">Cotización exacta</h3>
</div>

<div className="flex-1 mt-2 mb-6 bg-brand-card border border-white/10 rounded-xl p-4 flex flex-col">
<div className="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
<span className="text-xs text-gray-400">Resumen de costos</span>
<span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded">Generado</span>
</div>
<div className="space-y-2 mb-4">
<div className="flex justify-between text-sm">
<span className="text-gray-400 font-light">18 min Corte Láser</span>
<span className="text-white">$144.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-400 font-light">MDF 3mm (1 pliego)</span>
<span className="text-white">$85.00</span>
</div>
</div>
<div className="mt-auto pt-3 border-t border-white/5 flex justify-between items-center">
<span className="text-sm font-medium text-white">Total</span>
<span className="text-lg font-display font-medium text-brand-accent">$229.00</span>
</div>
</div>
<p className="text-sm text-gray-400 font-light">Recibe un enlace de pago o desglose por WhatsApp en 30 minutos.</p>
</div>

<div className="bg-brand-dark rounded-2xl border border-white/5 p-6 shadow-xl reveal flex flex-col" style={{transitionDelay: '200ms'}}>
<div className="mb-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold text-sm">3</div>
<h3 className="font-display font-medium text-lg text-white">Entrega o Pickup</h3>
</div>

<div className="flex-1 mt-2 mb-6 bg-brand-card border border-white/10 rounded-xl p-4 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<div className="relative z-10 h-full flex flex-col justify-center gap-4">
<div className="flex items-center gap-3 bg-brand-darker/80 p-2.5 rounded-lg border border-white/5">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="solar:shop-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs text-gray-400">Recoger en</div>
<div className="text-sm text-white font-medium">Taller Tecamachalco</div>
</div>
</div>
<div className="flex items-center gap-3 bg-brand-accent/10 p-2.5 rounded-lg border border-brand-accent/20">
<div className="w-8 h-8 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(245,197,24,0.3)]">
<iconify-icon icon="solar:routing-linear" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs text-brand-accent">Ruta activa</div>
<div className="text-sm text-white font-medium">Entrega Anáhuac</div>
</div>
</div>
</div>
</div>
<p className="text-sm text-gray-400 font-light">Pasa al taller o coordinamos entrega directa en tu campus sin costo extra.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white clip-top z-30 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="mb-20 reveal">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Red de cobertura universitaria</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale">
<span className="text-xl font-display font-bold tracking-tighter uppercase">Anáhuac</span>
<span className="text-xl font-display font-bold tracking-tighter uppercase">IBERO</span>
<span className="text-xl font-display font-bold tracking-tighter uppercase">ESIA</span>
<span className="text-xl font-display font-bold tracking-tighter uppercase">La Salle</span>
<span className="text-xl font-display font-bold tracking-tighter uppercase">CENTRO</span>
<span className="text-xl font-display font-bold tracking-tighter uppercase">UNAM</span>
</div>
</div>
<div className="max-w-3xl mx-auto reveal mb-12">
<h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight mb-4 text-slate-900">Ubicación estratégica.</h2>
<p className="text-slate-600 text-base font-light">Nuestro taller en Tecamachalco opera como un hub logístico en medio de las mejores facultades de arquitectura de la CDMX.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 reveal text-left">

<div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 flex items-start gap-4">
<div className="relative mt-1">
<div className="w-3 h-3 bg-green-500 rounded-full z-10 relative"></div>
<div className="w-3 h-3 bg-green-500 rounded-full absolute inset-0 animate-ping opacity-50"></div>
</div>
<div>
<h3 className="font-display font-medium text-sm text-slate-900">Anáhuac Norte</h3>
<div className="text-xs text-slate-500 font-mono mt-1">DIST: 5 min • TARIFA: Gratis</div>
</div>
</div>

<div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-start gap-4">
<div className="w-3 h-3 bg-slate-300 rounded-full mt-1"></div>
<div>
<h3 className="font-display font-medium text-sm text-slate-900">IBERO Santa Fe</h3>
<div className="text-xs text-slate-500 font-mono mt-1">DIST: 15 min • TARIFA: Punto est.</div>
</div>
</div>
<div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-start gap-4">
<div className="w-3 h-3 bg-slate-300 rounded-full mt-1"></div>
<div>
<h3 className="font-display font-medium text-sm text-slate-900">ESIA Tecamachalco</h3>
<div className="text-xs text-slate-500 font-mono mt-1">DIST: Vecino • TARIFA: Pickup</div>
</div>
</div>
<div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-start gap-4">
<div className="w-3 h-3 bg-slate-300 rounded-full mt-1"></div>
<div>
<h3 className="font-display font-medium text-sm text-slate-900">La Salle</h3>
<div className="text-xs text-slate-500 font-mono mt-1">DIST: 20 min • TARIFA: Coord.</div>
</div>
</div>
<div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-start gap-4">
<div className="w-3 h-3 bg-slate-300 rounded-full mt-1"></div>
<div>
<h3 className="font-display font-medium text-sm text-slate-900">CENTRO</h3>
<div className="text-xs text-slate-500 font-mono mt-1">DIST: 25 min • TARIFA: Coord.</div>
</div>
</div>
<div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex items-start gap-4">
<div className="w-3 h-3 bg-slate-300 rounded-full mt-1"></div>
<div>
<h3 className="font-display font-medium text-sm text-slate-900">UNAM</h3>
<div className="text-xs text-slate-500 font-mono mt-1">DIST: 30 min • TARIFA: Coord.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-card relative z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-white mb-6">Visualiza el estado de tu proyecto.</h2>
<p className="text-gray-400 text-base mb-10 font-light leading-relaxed">
                        Funcionamos como una extensión de tu equipo. Te mantenemos notificado en cada fase para que no tengas que preocuparte por el estatus de tu entrega.
                    </p>
<div className="space-y-6">
<div className="bg-brand-dark border border-white/5 p-5 rounded-xl flex items-start gap-4">
<div className="bg-white/5 p-2 rounded-lg text-brand-accent">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-display font-medium text-white mb-1">Revisión DFM (Design for Mfg)</h4>
<p className="text-sm text-gray-400 font-light">Análisis preventivo de vectores duplicados o capas ocultas antes del corte.</p>
</div>
</div>
<div className="bg-brand-dark border border-white/5 p-5 rounded-xl flex items-start gap-4">
<div className="bg-white/5 p-2 rounded-lg text-brand-accent">
<iconify-icon icon="solar:stopwatch-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-display font-medium text-white mb-1">Tiempos Predecibles</h4>
<p className="text-sm text-gray-400 font-light">Compromiso firme con los plazos. Si decimos a las 10:00 am, tu maqueta estará lista.</p>
</div>
</div>
</div>
</div>
<div className="reveal">

<div className="bg-[#0b1221] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" icon="solar:box-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-300 font-mono">ORD-8824-A</span>
</div>
<span className="text-[10px] font-medium text-brand-dark bg-brand-accent px-2 py-1 rounded shadow-sm">En Producción</span>
</div>
<div className="p-8">
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-white/10 before:z-0">

<div className="relative z-10 flex items-start gap-6">
<div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent text-brand-dark shrink-0 shadow-[0_0_10px_rgba(245,197,24,0.3)]">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-white mb-0.5">Validación de Vectores</h5>
<p className="text-xs text-gray-400 font-mono">10:45 AM • Archivo limpio</p>
</div>
</div>

<div className="relative z-10 flex items-start gap-6">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-brand-accent bg-brand-dark shrink-0">
<span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
</div>
<div className="w-full">
<h5 className="text-sm font-medium text-brand-accent mb-0.5">Corte Láser Activo</h5>
<p className="text-xs text-gray-400 font-mono mb-3">11:15 AM • Máquina CO2 130W</p>

<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-brand-accent w-[65%] rounded-full relative">
<div className="absolute inset-0 bg-white/20 w-full animate-[translateX_1s_infinite]"></div>
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono">
<span>65% Completado</span>
<span>ETA: 8 min</span>
</div>
</div>
</div>

<div className="relative z-10 flex items-start gap-6 opacity-40">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white/20 bg-brand-dark shrink-0"></div>
<div>
<h5 className="text-sm font-medium text-white mb-0.5">Control de Calidad &amp; Pickup</h5>
<p className="text-xs text-gray-400 font-mono">Pendiente</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 clip-top z-50" id="galeria">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal gap-6">
<div className="max-w-2xl">
<h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-slate-900 mb-4">Registro de cortes recientes.</h2>
<p className="text-slate-600 text-base font-light">Curvas de nivel, pabellones, secciones topográficas. Tolerancias milimétricas en todos los materiales.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg shadow-sm hover:bg-slate-50 transition-colors">Todo</button>
<button className="px-4 py-2 bg-transparent text-slate-500 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors">MDF</button>
<button className="px-4 py-2 bg-transparent text-slate-500 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors">Acrílico</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow group reveal cursor-pointer">
<div className="w-full aspect-[4/3] bg-slate-100 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-[10px] font-mono px-2 py-1 rounded text-slate-600 shadow-sm">MDF 3mm</div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-slate-900">Maqueta urbana.dxf</h4>
<iconify-icon className="text-slate-400" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<p className="text-xs text-slate-500 font-light">Anáhuac • Escala 1:100</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow group reveal cursor-pointer" style={{transitionDelay: '50ms'}}>
<div className="w-full aspect-[4/3] bg-slate-100 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:buildings-linear" width="32"></iconify-icon>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-[10px] font-mono px-2 py-1 rounded text-slate-600 shadow-sm">Acrílico 2mm</div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-slate-900">Edificio habitacional.ai</h4>
<iconify-icon className="text-slate-400" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<p className="text-xs text-slate-500 font-light">La Salle • Fachadas</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow group reveal cursor-pointer" style={{transitionDelay: '100ms'}}>
<div className="w-full aspect-[4/3] bg-slate-100 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:map-linear" width="32"></iconify-icon>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-[10px] font-mono px-2 py-1 rounded text-slate-600 shadow-sm">MDF 6mm</div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-slate-900">Curvas_nivel_final.dxf</h4>
<iconify-icon className="text-slate-400" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<p className="text-xs text-slate-500 font-light">ESIA • Topografía</p>
</div>
</div>
</div>
<div className="mt-12 text-center flex justify-center reveal">
<a className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors shadow-sm" href="#">
                    Ver todos los proyectos <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-brand-card relative z-40 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center mb-16 reveal text-center">
<h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-white mb-4">La fiabilidad que necesitas en entregas finales.</h2>
<div className="flex items-center gap-2 text-sm text-gray-400">
<span className="text-brand-accent text-lg font-semibold">4.9/5</span>
<div className="flex gap-0.5 text-brand-accent">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span>Basado en más de 200 reseñas de estudiantes.</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 shadow-lg reveal flex flex-col">
<p className="text-gray-300 text-sm mb-6 leading-relaxed font-light flex-grow">"Entregué mi proyecto final a las 11pm del domingo. Me tuvieron la maqueta lista esa misma madrugada. El nivel de respuesta no lo he visto en otro taller."</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-display font-bold text-sm">P</div>
<div>
<div className="font-display font-medium text-white text-sm">Paulina M.</div>
<div className="text-gray-500 font-sans font-normal text-xs">5° Semestre, Anáhuac</div>
</div>
</div>
</div>

<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 shadow-lg reveal flex flex-col" style={{transitionDelay: '100ms'}}>
<p className="text-gray-300 text-sm mb-6 leading-relaxed font-light flex-grow">"Cortes impecables, la cotización fue súper transparente desde el inicio y la ventaja de que están al lado del campus me ahorra horas."</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-display font-bold text-sm">D</div>
<div>
<div className="font-display font-medium text-white text-sm">Diego R.</div>
<div className="text-gray-500 font-sans font-normal text-xs">7° Semestre, IBERO</div>
</div>
</div>
</div>

<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 shadow-lg reveal flex flex-col" style={{transitionDelay: '200ms'}}>
<p className="text-gray-300 text-sm mb-6 leading-relaxed font-light flex-grow">"El grabado que pedi era complicadísimo en cuanto a texturas, me mandaron prueba de profundidad por foto antes de procesar todo. Excelentes."</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-display font-bold text-sm">V</div>
<div>
<div className="font-display font-medium text-white text-sm">Valentina T.</div>
<div className="text-gray-500 font-sans font-normal text-xs">3° Semestre, CENTRO</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative z-40 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-white mb-12 text-center reveal">Preguntas Frecuentes</h2>
<div className="space-y-3 reveal">
<details className="group bg-[#0b1221] border border-white/10 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer p-5 font-display font-medium text-white text-sm hover:text-brand-accent transition-colors">
                        ¿En qué formato envío mi archivo?
                        <span className="transition-transform duration-300 group-open:rotate-180 bg-white/5 p-1 rounded">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed font-light">
                        Aceptamos .DXF (nuestro formato preferido para mayor precisión), .AI y .PDF con vectores. Si solo tienes una imagen JPG/PNG, ofrecemos servicio de vectorización por un costo adicional.
                    </div>
</details>
<details className="group bg-[#0b1221] border border-white/10 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer p-5 font-display font-medium text-white text-sm hover:text-brand-accent transition-colors">
                        ¿Cuánto tarda una maqueta estándar?
                        <span className="transition-transform duration-300 group-open:rotate-180 bg-white/5 p-1 rounded">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed font-light">
                        El tiempo estándar es de 24 a 48 horas desde la confirmación del archivo y pago. Para entregas críticas, contamos con un plan Exprés de 12 horas con recargo del 30% sobre la tarifa base de máquina.
                    </div>
</details>
<details className="group bg-[#0b1221] border border-white/10 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer p-5 font-display font-medium text-white text-sm hover:text-brand-accent transition-colors">
                        ¿Puedo llevar mi propio material?
                        <span className="transition-transform duration-300 group-open:rotate-180 bg-white/5 p-1 rounded">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed font-light">
                        Sí, aceptamos tu propio material siempre que esté en óptimas condiciones (sin pandear). Por seguridad de los equipos y del personal, no cortamos materiales que emitan gases tóxicos como PVC, ABS o Teflón.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-brand-accent relative z-40 overflow-hidden">

<div className="absolute inset-0 opacity-10">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-dark rounded-full mix-blend-multiply blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-dark to-transparent opacity-20"></div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal relative z-10">
<h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-brand-dark mb-6 leading-tight">
                Inicia tu producción ahora.
            </h2>
<p className="text-lg text-brand-dark/80 mb-10 font-medium max-w-2xl mx-auto">
                Sin filas. Sube tu vector, recibe tu cotización y obtén tu maqueta terminada con precisión milimétrica.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-brand-dark hover:bg-brand-darker text-white px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2" href="#">
<iconify-icon icon="solar:upload-minimalistic-linear" width="22"></iconify-icon>
                    Subir archivo para cotizar
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-white/20 border-2 border-brand-dark text-brand-dark px-8 py-3.5 rounded-lg text-base font-bold transition-all duration-300" href="#">
<iconify-icon icon="solar:chat-round-line-linear" width="22"></iconify-icon>
                    Dudas por WhatsApp
                </a>
</div>
</div>
</section>

<footer className="bg-brand-darker pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-8 h-8 rounded bg-brand-accent text-brand-dark flex items-center justify-center font-display font-semibold text-lg leading-none tracking-tight">T</div>
<span className="font-display font-semibold tracking-tight text-xl text-white uppercase">TK LAZER</span>
</a>
<p className="text-sm text-gray-400 mb-6 font-light leading-relaxed">Corte CNC y grabado láser de alta precisión. Infraestructura profesional para estudiantes y despachos desde 2011.</p>
</div>

<div>
<h4 className="font-display font-medium text-white mb-5 text-sm uppercase tracking-wider">Soluciones</h4>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li><a className="hover:text-brand-accent transition-colors" href="#">Prototipado Académico</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Despieces Arquitectónicos</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Grabado de Precisión</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Lotes de Producción</a></li>
</ul>
</div>

<div>
<h4 className="font-display font-medium text-white mb-5 text-sm uppercase tracking-wider">Ubicación</h4>
<ul className="space-y-2 text-sm text-gray-400 font-light mb-4">
<li>Tecamachalco 104-4</li>
<li>Naucalpan, Edo. Méx. 53950</li>
<li className="mt-2 text-brand-accent/80">Lunes a Viernes: 10h - 20h</li>
<li className="text-brand-accent/80">Sábados: 10h - 15h</li>
</ul>
</div>

<div>
<h4 className="font-display font-medium text-white mb-5 text-sm uppercase tracking-wider">Soporte</h4>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-accent" icon="solar:chat-round-line-linear" width="18"></iconify-icon>
<a className="hover:text-white transition-colors" href="#">WhatsApp Soporte</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-accent" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<a className="hover:text-white transition-colors" href="#">(55) 5913 6469</a>
</li>
<li className="flex items-center gap-3 mt-4">
<a className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all text-gray-400" href="#">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
<div>© 2026 TK Lazer. Todos los derechos reservados.</div>
<div className="flex gap-6">
<a className="hover:text-gray-300 transition-colors" href="#">Aviso de Privacidad</a>
<a className="hover:text-gray-300 transition-colors" href="#">Términos de Servicio</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
