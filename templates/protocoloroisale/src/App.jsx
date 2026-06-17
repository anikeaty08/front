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


!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);


tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
price: ['Outfit', 'sans-serif'],
},
animation: {
'shimmer': 'shimmer 2s linear infinite',
'scroll': 'scroll 40s linear infinite',
'scroll-reverse': 'scroll-reverse 45s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' },
},
scroll: {
from: { transform: 'translateX(0)' },
to: { transform: 'translateX(-100%)' },
},
'scroll-reverse': {
from: { transform: 'translateX(-100%)' },
to: { transform: 'translateX(0)' },
}
}
}
}
}


 var s=document.createElement("script"); s.src="https://scripts.converteai.net/2167cec0-bda7-4082-83b4-38ea7731b6bf/players/698f07659256726183c8ecf1/v4/player.js", s.async=!0,document.head.appendChild(s); 

!function(t,e){t.src="https://scripts.converteai.net/2167cec0-bda7-4082-83b4-38ea7731b6bf/players/6994a4b28ce19ae67bfc31b8/v4/player.js",t.async=!0,document.head.appendChild(t)}(document.createElement("script"));

!function(t,e){t.src="https://scripts.converteai.net/2167cec0-bda7-4082-83b4-38ea7731b6bf/players/6993462f626614ea481a056d/v4/player.js",t.async=!0,document.head.appendChild(t)}(document.createElement("script"));

!function(t,e){t.src="https://scripts.converteai.net/2167cec0-bda7-4082-83b4-38ea7731b6bf/players/69934620725525410352c5fd/v4/player.js",t.async=!0,document.head.appendChild(t)}(document.createElement("script"));

!function(t,e){t.src="https://scripts.converteai.net/2167cec0-bda7-4082-83b4-38ea7731b6bf/players/699346194be992fe7665f5fa/v4/player.js",t.async=!0,document.head.appendChild(t)}(document.createElement("script"));

!function(t,e){t.src="https://scripts.converteai.net/2167cec0-bda7-4082-83b4-38ea7731b6bf/players/6993463caa67549cb8eb00ff/v4/player.js",t.async=!0,document.head.appendChild(t)}(document.createElement("script"));


        // Init Icons
        lucide.createIcons();

        // New Countdown Design
        function updateCountdown() {
            const now = new Date();
            const cdmxOffset = -6; 
            const localTime = now.getTime();
            const localOffset = now.getTimezoneOffset() * 60000;
            const utc = localTime + localOffset;
            const cdmxTime = new Date(utc + (3600000 * cdmxOffset));

            const nextSaturday = new Date(cdmxTime);
            nextSaturday.setDate(cdmxTime.getDate() + (6 - cdmxTime.getDay() + 7) % 7);
            nextSaturday.setHours(10, 0, 0, 0);

            if (cdmxTime.getDay() === 6 && cdmxTime.getHours() >= 10) {
                nextSaturday.setDate(nextSaturday.getDate() + 7);
            }

            const diff = nextSaturday - cdmxTime;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            const format = (num) => num.toString().padStart(2, '0');

            // Nav text update
            const navStr = `${format(days)}d ${format(hours)}h ${format(minutes)}m ${format(seconds)}s`;
            const navCount = document.getElementById('countdown-nav');
            if(navCount) navCount.innerText = navStr;

            // Main Visual Countdown Update
            const wrapper = document.getElementById('countdown-wrapper');
            if(wrapper) {
                const blockClass = "flex flex-col items-center justify-center bg-white/5 border border-white/10 w-16 h-16 md:w-20 md:h-20 rounded-xl backdrop-blur-sm";
                const numClass = "text-xl md:text-3xl font-bold text-white font-mono";
                const labelClass = "text-[10px] text-slate-500 uppercase tracking-wider mt-1";
                
                wrapper.innerHTML = `
                    <div class="${blockClass}">
                        <span class="${numClass}">${format(days)}</span>
                        <span class="${labelClass}">Días</span>
                    </div>
                    <div class="${blockClass}">
                        <span class="${numClass}">${format(hours)}</span>
                        <span class="${labelClass}">Hrs</span>
                    </div>
                    <div class="${blockClass}">
                        <span class="${numClass}">${format(minutes)}</span>
                        <span class="${labelClass}">Min</span>
                    </div>
                    <div class="${blockClass}">
                        <span class="${numClass}">${format(seconds)}</span>
                        <span class="${labelClass}">Seg</span>
                    </div>
                `;
            }
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();
    
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
      
<div className="ambient-light"></div>

<div className="relative w-full bg-red-600/90 text-white py-2 px-4 text-center overflow-hidden border-b border-red-500/50">
<div className="flex items-center justify-center gap-2 animate-pulse-slow">
<i className="w-4 h-4" data-lucide="triangle-alert"></i>
<span className="text-xs md:text-sm font-semibold tracking-widest uppercase">Últimos Cupos Disponibles - Cierre Inminente</span>
</div>
</div>

<nav className="sticky w-full z-50 top-0 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md transition-all duration-300">
<div className="flex flex-wrap md:h-20 gap-4 h-auto max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4 items-center justify-between">

<div className="flex items-center gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-indigo-500 to-purple-600">
<img alt="Brayan Croce" className="w-full h-full rounded-full object-cover border-2 border-[#030304]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#030304] rounded-full"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white tracking-widest font-display">PROTOCOLO ROISALE</span>
<span className="text-[10px] uppercase text-slate-400 tracking-wide">Creado por Brayan Croce</span>
</div>
</div>

<div className="flex items-center gap-4 ml-auto">
<div className="hidden md:flex gap-3 bg-white/5 border-white/10 border rounded-lg pt-2 pr-4 pb-2 pl-4 gap-x-3 gap-y-3 items-center">
<span className="text-[10px] text-slate-400 uppercase tracking-wide">Expira en:</span>
<div className="text-sm font-mono font-bold text-emerald-400 tracking-wider" id="countdown-nav">03d 21h 48m 15s</div>
</div>
<a className="hidden md:inline-flex items-center justify-center hover:bg-slate-200 transition-colors text-sm font-semibold text-black bg-white h-9 rounded-lg pr-4 pl-4" href="#offer">
                    Asegurar Cupo
                </a>
</div>
</div>
</nav>

<section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-4 overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm shadow-[0_0_15px_rgba(99,102,241,0.3)] animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">Evento En Vivo de Implementación</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-display leading-[1.1]">
                Tu Negocio Digital <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">Operativo en 24 Horas.</span>
</h1>
<p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Sin teorías complejas. Un <strong>Sprint de Implementación</strong> donde instalamos el Sistema ROISALE™ en tu negocio. Sales con tu MVP, embudo y sistema de ventas listo.
            </p>
<div className="relative w-full max-w-4xl mx-auto mb-10 group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl aspect-video md:aspect-[21/9]">
<vturb-smartplayer id="vid-698f07659256726183c8ecf1" original-id="vid-698f07659256726183c8ecf1" style={{display: 'block', margin: '0 auto', width: '100%', height: '100%'}}><div className="preload preload--netflix" slot="preload" style={{position: 'relative', width: '100%', padding: '56.25% 0 0', zIndex: '0'}}><div className="vt-loading-wrapper" id="loading_698f07659256726183c8ecf1"><div className="vt-loading-android-spinner"></div><div className="vt-loading-percentage">50%</div></div></div><style>[class^="vt-loading"]{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;text-decoration:none}.vt-loading-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99999;background-color:#000;color:#fff;display:flex!important;justify-content:center;align-items:center}.vt-loading-percentage{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:18px;font-weight:600}#smartplayer .vt-loading-percentage{content:"99%"}.vt-loading-android-spinner{width:80px;aspect-ratio:1;border-radius:50%;background:radial-gradient(farthest-side,#E50914 94%,#0000) top/8px 8px no-repeat,conic-gradient(#0000 30%,#E50914);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);animation:vt-loading-android-spinner-animation .75s infinite linear}@keyframes vt-loading-android-spinner-animation{100%{transform:rotate(1turn)}}</style></vturb-smartplayer>

</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
<a className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-white px-10 font-medium text-black transition-all duration-300 hover:scale-[1.02] shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]" href="#offer">
<span className="mr-2 text-base font-bold tracking-tight">ASEGURAR MI CUPO AHORA</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-400/0 via-indigo-400/30 to-indigo-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
</a>
</div>
<div className="flex items-center justify-center gap-6 opacity-80">
<div className="flex items-center gap-2">
<img alt="Hotmart" className="h-4 grayscale brightness-200 invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hotmart_logo.svg/2560px-Hotmart_logo.svg.png"/>
<span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold border-l border-slate-700 pl-2">Pago Seguro</span>
</div>
<div className="flex items-center gap-2">
<i className="text-emerald-400 w-4 h-4" data-lucide="shield-check"></i>
<span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Garantía 7 Días</span>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.01] backdrop-blur-sm py-10 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
<div className="flex items-center gap-4">
<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full border-2 border-[#030304] bg-slate-800 bg-[url('https://i.pravatar.cc/100?img=11')] bg-cover"></div>
<div className="w-12 h-12 rounded-full border-2 border-[#030304] bg-slate-800 bg-[url('https://i.pravatar.cc/100?img=32')] bg-cover"></div>
<div className="w-12 h-12 rounded-full border-2 border-[#030304] bg-slate-800 bg-[url('https://i.pravatar.cc/100?img=12')] bg-cover"></div>
<div className="w-12 h-12 rounded-full border-2 border-[#030304] bg-slate-800 flex items-center justify-center text-xs font-bold text-white bg-indigo-600">+500</div>
</div>
<div>
<p className="text-white text-base font-bold font-display">Empresarios Digitales</p>
<div className="flex items-center gap-1 mt-1">
<i className="text-yellow-500 w-3 h-3 fill-yellow-500" data-lucide="star"></i>
<i className="text-yellow-500 w-3 h-3 fill-yellow-500" data-lucide="star"></i>
<i className="text-yellow-500 w-3 h-3 fill-yellow-500" data-lucide="star"></i>
<i className="text-yellow-500 w-3 h-3 fill-yellow-500" data-lucide="star"></i>
<i className="text-yellow-500 w-3 h-3 fill-yellow-500" data-lucide="star"></i>
<span className="text-xs text-slate-400 ml-1">4.9/5 Nota Media</span>
</div>
</div>
</div>
<div className="flex gap-12 md:gap-20">
<div className="text-center">
<h4 className="text-3xl font-bold text-white font-price">$100k+</h4>
<p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Casos de Éxito</p>
</div>
<div className="text-center">
<h4 className="text-3xl font-bold text-white font-price">24h</h4>
<p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Tiempo de Acción</p>
</div>
</div>
</div>
</div>

<section className="py-24 relative overflow-hidden bg-[#030304]">
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs uppercase tracking-widest font-bold">
<i className="w-3 h-3" data-lucide="map-pin"></i> Tu Ruta al Éxito
                </div>
<h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">El Protocolo de 24 Horas</h2>
<p className="text-slate-400 text-base max-w-xl mx-auto">No es un curso. Es un mapa de ejecución que recorreremos juntos paso a paso.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative mt-12">

<div className="hidden md:block absolute top-[40px] left-[12%] w-[76%] h-[2px] border-t-2 border-dashed border-indigo-500/20 z-0"></div>

<div className="relative group">
<div className="absolute -top-10 -right-4 text-[120px] leading-none font-bold text-white/[0.04] font-price select-none pointer-events-none z-0 group-hover:text-indigo-500/[0.1] transition-colors duration-500">01</div>
<div className="z-10 pt-10 relative">
<div className="w-12 h-12 mx-auto rounded-full bg-[#030304] border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] mb-6">
<span className="w-3 h-3 rounded-full bg-white"></span>
</div>
<div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-2">
<h3 className="text-white text-xl font-bold mb-3 font-display text-indigo-300">Idea &amp; Oferta</h3>
<p className="text-sm text-slate-400 leading-relaxed">Identificamos tu ángulo único y creamos una oferta imposible de ignorar usando IA.</p>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -top-10 -right-4 text-[120px] leading-none font-bold text-white/[0.04] font-price select-none pointer-events-none z-0 group-hover:text-indigo-500/[0.1] transition-colors duration-500">02</div>
<div className="relative z-10 pt-10">
<div className="w-4 h-4 mx-auto rounded-full bg-[#030304] border-2 border-slate-700 mb-10 group-hover:border-indigo-500 transition-colors"></div>
<div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-2">
<h3 className="text-white text-xl font-bold mb-3 font-display text-indigo-300">Construcción MVP</h3>
<p className="text-sm text-slate-400 leading-relaxed">Empaquetamos tu conocimiento en un producto mínimo viable listo para entregar.</p>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -top-10 -right-4 text-[120px] leading-none font-bold text-white/[0.04] font-price select-none pointer-events-none z-0 group-hover:text-indigo-500/[0.1] transition-colors duration-500">03</div>
<div className="relative z-10 pt-10">
<div className="w-4 h-4 mx-auto rounded-full bg-[#030304] border-2 border-slate-700 mb-10 group-hover:border-indigo-500 transition-colors"></div>
<div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-2">
<h3 className="text-white text-xl font-bold mb-3 font-display text-indigo-300">Infraestructura</h3>
<p className="text-sm text-slate-400 leading-relaxed">Configuración de pasarela de pago (Hotmart) y funnel de alta conversión.</p>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -top-10 -right-4 text-[120px] leading-none font-bold text-emerald-500/[0.04] font-price select-none pointer-events-none z-0 group-hover:text-emerald-500/[0.1] transition-colors duration-500">04</div>
<div className="relative z-10 pt-10">
<div className="w-12 h-12 mx-auto rounded-full bg-[#030304] border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-6">
<i className="text-emerald-500 w-5 h-5 fill-emerald-500" data-lucide="flag"></i>
</div>
<div className="bg-emerald-900/[0.1] border border-emerald-500/20 p-6 rounded-2xl hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-2">
<h3 className="text-white text-xl font-bold mb-3 font-display text-emerald-400">Lanzamiento</h3>
<p className="text-sm text-slate-400 leading-relaxed">Activamos el tráfico y validamos con las primeras transacciones reales.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5 relative">
<div className="max-w-[1600px] mx-auto px-4 relative z-10">
<div className="flex flex-col mb-12 gap-x-2 gap-y-2 items-center">
<div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-2">
<span className="text-[10px] text-white tracking-[0.2em] font-semibold uppercase">Resultados Verificados</span>
</div>
<h2 className="text-3xl md:text-5xl font-bold text-white font-display text-center">Hall of Fame <span className="text-indigo-500">ROISALE</span></h2>
</div>

<div className="flex flex-row overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 md:gap-6 pb-8 md:grid md:grid-cols-5 md:pb-0 px-4">

<div className="w-[280px] md:w-auto flex-shrink-0 snap-center bg-[#0E0E11] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group hover:border-indigo-500/30 transition-all duration-300 flex flex-col">

<div className="bg-indigo-900/30 border-b border-white/5 py-2 text-center">
<span className="text-emerald-400 text-xs font-bold tracking-wide">+$100,000 USD/mes</span>
</div>
<div className="aspect-[9/16] relative bg-[#1a1a1a]">

<div className="absolute inset-0 flex items-center justify-center text-white/10 z-0">
<i className="w-12 h-12 opacity-20" data-lucide="play"></i>
</div>
<div className="relative z-10 w-full h-full">
</div>
</div>
<div className="p-4 bg-white/[0.02] flex-grow flex flex-col justify-between">
<div>
<p className="text-white font-bold text-sm mb-1">Luigi Gabriello</p>
<p className="text-[11px] text-slate-400 leading-tight">"El sistema que escaló mi facturación de forma masiva."</p>
</div>
</div>
</div>

<div className="w-[280px] md:w-auto flex-shrink-0 snap-center bg-[#0E0E11] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
<div className="bg-indigo-900/30 border-b border-white/5 py-2 text-center">
<span className="text-emerald-400 text-xs font-bold tracking-wide">6 Cifras en 3 Meses</span>
</div>
<div className="aspect-[9/16] relative bg-[#1a1a1a]">
<div className="absolute inset-0 flex items-center justify-center text-white/10 z-0">
<i className="w-12 h-12 opacity-20" data-lucide="play"></i>
</div>
<div className="relative z-10 w-full h-full">
</div>
</div>
<div className="p-4 bg-white/[0.02]">
<p className="text-white font-bold text-sm mb-1">Edwin Peña</p>
<p className="text-[11px] text-slate-400 leading-tight">"Resultados rápidos aplicando el protocolo exacto."</p>
</div>
</div>

<div className="w-[280px] md:w-auto flex-shrink-0 snap-center bg-[#0E0E11] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
<div className="bg-indigo-900/30 border-b border-white/5 py-2 text-center">
<span className="text-emerald-400 text-xs font-bold tracking-wide">$20k Recurrentes</span>
</div>
<div className="aspect-[9/16] relative bg-[#1a1a1a]">
<div className="absolute inset-0 flex items-center justify-center text-white/10 z-0">
<i className="w-12 h-12 opacity-20" data-lucide="play"></i>
</div>
<div className="relative z-10 w-full h-full">
</div>
</div>
<div className="p-4 bg-white/[0.02]">
<p className="text-white font-bold text-sm mb-1">Jose Barboza</p>
<p className="text-[11px] text-slate-400 leading-tight">"Construí un ingreso pasivo real y predecible."</p>
</div>
</div>

<div className="w-[280px] md:w-auto flex-shrink-0 snap-center bg-[#0E0E11] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
<div className="bg-indigo-900/30 border-b border-white/5 py-2 text-center">
<span className="text-emerald-400 text-xs font-bold tracking-wide">$1,000 en 1 Semana</span>
</div>
<div className="aspect-[9/16] relative bg-[#1a1a1a]">
<div className="absolute inset-0 flex items-center justify-center text-white/10 z-0">
<i className="w-12 h-12 opacity-20" data-lucide="play"></i>
</div>
<div className="relative z-10 w-full h-full">
</div>
</div>
<div className="p-4 bg-white/[0.02]">
<p className="text-white font-bold text-sm mb-1">Sergio Alamilla</p>
<p className="text-[11px] text-slate-400 leading-tight">"Validé mi oferta en tiempo récord."</p>
</div>
</div>

<div className="w-[280px] md:w-auto flex-shrink-0 snap-center bg-[#0E0E11] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
<div className="bg-indigo-900/30 border-b border-white/5 py-2 text-center">
<span className="text-white text-xs font-bold tracking-wide">Claridad Total</span>
</div>
<div className="aspect-[9/16] relative bg-[#1a1a1a]">
<div className="absolute inset-0 flex items-center justify-center text-white/10 z-0">
<i className="w-12 h-12 opacity-20" data-lucide="play"></i>
</div>
<div className="relative z-10 w-full h-full">
</div>
</div>
<div className="p-4 bg-white/[0.02]">
<p className="text-white font-bold text-sm mb-1">Araceli Garcia</p>
<p className="text-[11px] text-slate-400 leading-tight">"Años de incertidumbre resueltos en horas."</p>
</div>
</div>
</div>
</div>






</section>

<section className="py-12 bg-[#030304] overflow-hidden border-b border-white/5">
<div className="marquee-container relative w-full overflow-hidden">
<div className="flex w-max gap-6 animate-scroll hover:[animation-play-state:paused]">

<div className="bg-white/5 border border-white/10 rounded-lg p-5 w-[320px] h-[140px] flex flex-col justify-between">
<p className="text-xs text-slate-300 leading-relaxed">"La claridad que te da Brayan es de otro planeta. Fui de 0 a mi primera venta en 24h literal."</p>
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold">M</div><span className="text-xs font-semibold text-white">Mateo R.</span></div>
</div>

<div className="bg-white/5 border border-white/10 rounded-lg p-5 w-[320px] h-[140px] flex flex-col justify-between">
<p className="text-xs text-slate-300 leading-relaxed">"El software ROISALE OS me ahorró meses de trabajo. Las herramientas de IA son oro puro."</p>
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">V</div><span className="text-xs font-semibold text-white">Valentina S.</span></div>
</div>

<div className="bg-white/5 border border-white/10 rounded-lg p-5 w-[320px] h-[140px] flex flex-col justify-between">
<p className="text-xs text-slate-300 leading-relaxed">"Ya había comprado mil cursos. Esto no es un curso, es un sistema de ejecución real."</p>
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px] font-bold">J</div><span className="text-xs font-semibold text-white">Javier P.</span></div>
</div>

<div className="bg-white/5 border border-white/10 rounded-lg p-5 w-[320px] h-[140px] flex flex-col justify-between">
<p className="text-xs text-slate-300 leading-relaxed">"La claridad que te da Brayan es de otro planeta. Fui de 0 a mi primera venta en 24h literal."</p>
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold">M</div><span className="text-xs font-semibold text-white">Mateo R.</span></div>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-5 w-[320px] h-[140px] flex flex-col justify-between">
<p className="text-xs text-slate-300 leading-relaxed">"El software ROISALE OS me ahorró meses de trabajo. Las herramientas de IA son oro puro."</p>
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">V</div><span className="text-xs font-semibold text-white">Valentina S.</span></div>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-5 w-[320px] h-[140px] flex flex-col justify-between">
<p className="text-xs text-slate-300 leading-relaxed">"Ya había comprado mil cursos. Esto no es un curso, es un sistema de ejecución real."</p>
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px] font-bold">J</div><span className="text-xs font-semibold text-white">Javier P.</span></div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden bg-[#050506]">
<div className="max-w-4xl mx-auto px-4 relative z-10">
<div className="flex flex-col md:flex-row gap-10 items-center">
<div className="w-full md:w-1/3 flex flex-col items-center">
<div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-3 bg-[#030304]">
<img alt="Brayan Croce" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 text-center">
<h4 className="text-white font-bold font-display text-lg">Brayan Croce</h4>
<p className="text-indigo-400 text-xs uppercase tracking-widest font-semibold">Creador de Protocolo ROISALE</p>
</div>
</div>
<div className="w-full md:w-2/3">
<h3 className="text-2xl font-bold text-white mb-6 font-display">Deja de "Intentar". Empieza a Facturar.</h3>
<div className="space-y-4 text-slate-400 text-base leading-relaxed font-light">
<p>Sé exactamente dónde estás. Tienes la información, tienes las ganas, pero te falta la .</p>
<p>He diseñado este protocolo para eliminar el ruido. No vamos a perder tiempo en teorías que no sirven. Vamos a construir, conectar y vender.</p>
<p className="">Si me das 24 horas de tu tiempo y sigues el sistema al pie de la letra, te garantizo que tendrás un negocio real, no solo un "proyecto". Te veo dentro.</p>
</div>
<div className="mt-8">
<img alt="Firma" className="h-12 invert opacity-50" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-6xl mx-auto px-4 relative z-10">
<h2 className="text-center text-3xl md:text-5xl font-bold text-white font-display mb-4">Bonos Exclusivos Incluidos</h2>
<p className="text-center text-slate-400 mb-16">Herramientas valoradas en más de $1,500 USD, GRATIS hoy.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:bg-white/5 transition-colors">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="folder-open"></i>
</div>
<div className="bg-white/5 px-3 py-1 rounded text-[10px] uppercase tracking-wider text-slate-400 border border-white/10">Valorado en $197</div>
</div>
<h3 className="text-xl font-bold text-white mb-2">Portal de Alumnos 24/7</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Acceso vitalicio a la plataforma educativa. Grabaciones 4K, descargas, plantillas de Notion y biblioteca de recursos.
                    </p>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:bg-white/5 transition-colors">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div className="bg-white/5 px-3 py-1 rounded text-[10px] uppercase tracking-wider text-slate-400 border border-white/10">Valorado en $97</div>
</div>
<h3 className="text-xl font-bold text-white mb-2">Comunidad Privada VIP</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Red privada de emprendedores para resolver dudas y networking. Mantente actualizado con las últimas tendencias.
                    </p>
</div>

<div className="glass-card rounded-3xl p-1 relative md:col-span-2 overflow-hidden group">
<div className="bg-[#050506] rounded-[22px] p-8 h-full relative z-10 grid md:grid-cols-2 gap-8 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-[10px] uppercase tracking-wider font-bold mb-6">
<i className="w-3 h-3" data-lucide="wand-2"></i> La Joya de la Corona
                            </div>
<h3 className="text-2xl font-bold text-white mb-3">Software ROISALE OS <span className="text-purple-400">(AI Powered)</span></h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                                El Sistema Operativo creado para automatizar tu negocio: +20 Herramientas de IA para Guiones, Copies, Landing Pages, VSLs y Scripts de ventas.
                            </p>
</div>
<div className="bg-black/50 rounded-xl border border-white/10 p-4 relative overflow-hidden flex items-center justify-center h-40">
<div className="flex gap-4">
<div className="w-12 h-12 rounded bg-purple-600/20 flex items-center justify-center border border-purple-500/30 animate-pulse"><i className="text-purple-400" data-lucide="cpu"></i></div>
<div className="w-12 h-12 rounded bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30 animate-pulse" style={{animationDelay: '200ms'}}><i className="text-indigo-400" data-lucide="message-square"></i></div>
<div className="w-12 h-12 rounded bg-pink-600/20 flex items-center justify-center border border-pink-500/30 animate-pulse" style={{animationDelay: '400ms'}}><i className="text-pink-400" data-lucide="pen-tool"></i></div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative md:col-span-2 overflow-hidden group">
<div className="bg-[#050506] rounded-[22px] p-0 h-full relative z-10 grid md:grid-cols-2 gap-8 items-center">
<div className="order-2 md:order-1">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<i className="w-6 h-6" data-lucide="video"></i>
</div>
<div className="bg-white/5 px-3 py-1 rounded text-[10px] uppercase tracking-wider text-slate-400 border border-white/10">Invaluable</div>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Encuentro en Vivo con Brayan</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                                Reto en vivo con feedback directo. Conoce el proceso exacto por el cual cientos están facturando miles de dólares. Mentoría directa.
                            </p>
</div>

<div className="order-1 md:order-2 h-full min-h-[200px] bg-slate-800 relative rounded-xl overflow-hidden group-hover:grayscale-0 transition-all duration-500">
<img alt="Brayan Live" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white font-bold text-lg bg-red-600 px-2 py-1 rounded text-xs uppercase tracking-wide">En Vivo</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-black" id="offer">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 relative z-10">
<div className="bg-[#08080A] rounded-[32px] border border-white/10 p-8 md:p-14 shadow-2xl relative overflow-hidden text-center group">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-600/10 blur-[60px] rounded-full"></div>
<div className="flex items-center justify-center gap-2 mb-8 opacity-70">
<i className="text-emerald-400 w-4 h-4" data-lucide="lock"></i>
<span className="text-[10px] uppercase tracking-widest text-slate-300">Plataforma Oficial Hotmart®</span>
</div>
<h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-2">Acceso Total al Protocolo</h2>
<p className="text-slate-400 mb-10 text-sm">Evento En Vivo + Grabaciones + Software + Comunidad + Garantía</p>

<div className="flex flex-col items-center mb-10">
<p className="text-[10px] uppercase tracking-widest text-red-500 font-bold mb-4 animate-pulse">Oferta Expira en:</p>
<div className="flex gap-4" id="countdown-wrapper">
<div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 w-16 h-16 md:w-20 md:h-20 rounded-xl backdrop-blur-sm">
<span className="text-xl md:text-3xl font-bold text-white font-mono">03</span>
<span className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Días</span>
</div>
<div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 w-16 h-16 md:w-20 md:h-20 rounded-xl backdrop-blur-sm">
<span className="text-xl md:text-3xl font-bold text-white font-mono">21</span>
<span className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Hrs</span>
</div>
<div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 w-16 h-16 md:w-20 md:h-20 rounded-xl backdrop-blur-sm">
<span className="text-xl md:text-3xl font-bold text-white font-mono">48</span>
<span className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Min</span>
</div>
<div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 w-16 h-16 md:w-20 md:h-20 rounded-xl backdrop-blur-sm">
<span className="text-xl md:text-3xl font-bold text-white font-mono">15</span>
<span className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Seg</span>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-center mb-12 relative">
<span className="text-base text-slate-500 line-through mb-1 font-price">$197 USD</span>
<div className="flex items-start text-white relative">
<span className="text-4xl font-medium mt-4 text-slate-500">$</span>
<span className="text-[140px] leading-none font-bold font-price tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-2xl">17</span>
<div className="flex flex-col items-start mt-8 ml-2">
<span className="text-2xl font-medium text-slate-500">USD</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded uppercase tracking-wider font-bold">Pago Único</span>
</div>
</div>
</div>
<a className="group relative inline-flex w-full md:w-[80%] min-w-[300px] h-20 items-center justify-center overflow-hidden rounded-2xl bg-white px-8 font-medium text-black transition-all duration-300 hover:scale-[1.02] shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] z-20" href="https://pay.hotmart.com/J104118483E">
<div className="flex flex-col items-center leading-none">
<span className="text-xl font-bold tracking-tight flex items-center gap-3">
                            QUIERO ACCESO INMEDIATO
                            
<i className="w-6 h-6" data-lucide="credit-card"></i>
</span>
<span className="text-[10px] font-medium opacity-60 mt-1 uppercase tracking-wider">Compra 100% Segura vía Hotmart</span>
</div>
</a>
<div className="mt-10 pt-8 border-t border-white/5 bg-white/[0.02] -mx-8 md:-mx-14 -mb-14 px-8 pb-8">
<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
<img alt="Hotmart" className="h-6 opacity-60 grayscale invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hotmart_logo.svg/2560px-Hotmart_logo.svg.png"/>
<div className="flex items-center gap-3 text-left">
<div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/20">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-white text-xs font-bold">Garantía Incondicional de 7 Días</p>
<p className="text-slate-500 text-[10px]">Si no te gusta, Hotmart te devuelve el dinero automáticamente.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#030304] relative z-10">
<div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-8 text-center">
<div className="flex items-center gap-2 mb-4">
<span className="text-sm font-bold text-slate-300 tracking-widest font-display">ROISALE OS</span>
</div>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="globe"></i></a>
</div>
<div className="max-w-2xl text-[10px] text-slate-600 space-y-2 leading-relaxed">
<p>
                    Este sitio no forma parte del sitio web de Facebook o Facebook Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
                </p>
<p className="pt-4 border-t border-slate-900">
                    © 2024 Protocolo ROISALE. Todos los derechos reservados.
                </p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 group" href="https://wa.me/584126711653" target="_blank">
<span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
<div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform border-2 border-white/20 backdrop-blur-sm">
<i className="w-7 h-7 fill-white" data-lucide="message-circle"></i>
</div>
</a>

<video aria-hidden="true" playsinline="" src="https://cdn.converteai.net/1.mp4" style={{position: 'fixed', top: '-1px', left: '-1px', width: '1px', height: '1px', pointerEvents: 'none', zIndex: '9', backgroundColor: 'transparent', display: 'block', objectFit: 'fill'}} tabindex="-1"></video><video aria-hidden="true" playsinline="" src="https://cdn.converteai.net/1.mp4" style={{position: 'fixed', top: '-1px', left: '-1px', width: '1px', height: '1px', pointerEvents: 'none', zIndex: '9', backgroundColor: 'transparent', display: 'block', objectFit: 'fill'}} tabindex="-1"></video><video aria-hidden="true" playsinline="" src="https://cdn.converteai.net/1.mp4" style={{position: 'fixed', top: '-1px', left: '-1px', width: '1px', height: '1px', pointerEvents: 'none', zIndex: '9', backgroundColor: 'transparent', display: 'block', objectFit: 'fill'}} tabindex="-1"></video><video aria-hidden="true" playsinline="" src="https://cdn.converteai.net/1.mp4" style={{position: 'fixed', top: '-1px', left: '-1px', width: '1px', height: '1px', pointerEvents: 'none', zIndex: '9', backgroundColor: 'transparent', display: 'block', objectFit: 'fill'}} tabindex="-1"></video><video aria-hidden="true" playsinline="" src="https://cdn.converteai.net/1.mp4" style={{position: 'fixed', top: '-1px', left: '-1px', width: '1px', height: '1px', pointerEvents: 'none', zIndex: '9', backgroundColor: 'transparent', display: 'block', objectFit: 'fill'}} tabindex="-1"></video><video aria-hidden="true" playsinline="" src="https://cdn.converteai.net/1.mp4" style={{position: 'fixed', top: '-1px', left: '-1px', width: '1px', height: '1px', pointerEvents: 'none', zIndex: '9', backgroundColor: 'transparent', display: 'block', objectFit: 'fill'}} tabindex="-1"></video>
    </>
  );
}
