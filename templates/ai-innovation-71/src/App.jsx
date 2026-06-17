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
      
// Custom 3D & Utility Configuration
tailwind.config = {
theme: {
extend: {
colors: {
brand: {
gold: '#fbbf24',
glow: '#f59e0b',
dark: '#020617',
accent: '#0ea5e9'
}
}
}
}
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            document.addEventListener('DOMContentLoaded', () => {
                particlesJS('particles-js', {
                    particles: {
                        number: { value: 40, density: { enable: true, value_area: 1000 } },
                        color: { value: ["#f59e0b", "#0ea5e9"] },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: true },
                        size: { value: 2, random: true },
                        line_linked: { enable: true, distance: 200, color: "#f59e0b", opacity: 0.15, width: 1 },
                        move: { enable: true, speed: 0.8, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: { onhover: { enable: true, mode: "grab" } },
                        modes: { grab: { distance: 250, line_linked: { opacity: 0.4 } } }
                    },
                    retina_detect: true
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-glow/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-brand-accent/10 rounded-full blur-[120px] mix-blend-screen"></div>

<div className="absolute inset-0 w-full h-full opacity-40" id="particles-js"></div>


</div>

<div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
<div className="text-[10px] uppercase tracking-widest text-brand-gold/70 font-medium bg-brand-dark/50 backdrop-blur-md px-3 py-1 rounded-full border border-brand-gold/20 opacity-0 transition-opacity duration-300 peer-hover:opacity-100 hidden md:block">
            Asistente Activo
        </div>
<button className="peer relative group flex items-center justify-center w-16 h-16 rounded-full bg-slate-950/80 backdrop-blur-xl border border-brand-gold/30 hover:border-brand-gold hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]">
<div className="absolute inset-0 rounded-full bg-brand-glow/20 blur-md group-hover:bg-brand-glow/40 transition-all duration-500"></div>

<div className="absolute inset-0 rounded-full border border-brand-gold/40 animate-pulse-ring"></div>
<div className="absolute inset-0 rounded-full border border-brand-gold/20 animate-pulse-ring" style={{animationDelay: '1.5s'}}></div>
<iconify-icon className="text-brand-gold text-2xl relative z-10 transition-transform group-hover:scale-110 duration-500" icon="solar:microphone-3-linear"></iconify-icon>
</button>
</div>

<header className="fixed top-0 left-0 right-0 z-40 p-6 md:p-10 flex justify-between items-center pointer-events-none">
<div className="pointer-events-auto flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-md">
<iconify-icon className="text-white/80 text-lg" icon="solar:infinity-linear"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest font-medium text-white/80">Origen IA</span>
</div>
<div className="pointer-events-auto flex items-center gap-6">
<div className="hidden md:flex gap-6 text-xs uppercase tracking-widest font-medium text-white/50">
<a className="hover:text-brand-gold transition-colors" href="#vision">Visión</a>
<a className="hover:text-brand-gold transition-colors" href="#experiencia">Explorar</a>
<a className="hover:text-brand-gold transition-colors" href="#impacto">Impacto</a>
</div>
<button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-md hover:bg-white/10 transition-colors">
<iconify-icon className="text-white text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<main className="snap-container relative z-10">

<section className="snap-section relative flex flex-col items-center justify-center overflow-hidden" id="vision">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/20 to-brand-dark z-10"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_80%)] z-10"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-70 scan-overlay hologram-effect animate-float">
<img alt="Avatar IA" className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-75 mix-blend-luminosity" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
</div>

<div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full animate-reveal">

<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-gold/20 bg-brand-dark/40 backdrop-blur-md mb-8">
<span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-brand-gold font-medium">Sistema en línea</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 leading-tight">
                    El futuro tiene <br/><span className="font-medium text-brand-gold">voz propia.</span>
</h1>
<p className="mt-8 text-base md:text-xl text-white/60 font-light max-w-2xl leading-relaxed tracking-wide">
                    Una inteligencia artificial entrenada con saberes ancestrales y visión de futuro. Entra al showroom interactivo y descubre el proyecto que está redefiniendo la tecnología en Colombia.
                </p>

<div className="mt-14 flex flex-col sm:flex-row gap-6 items-center">
<a className="group relative px-8 py-4 rounded-full bg-brand-gold/10 border border-brand-gold/50 backdrop-blur-md overflow-hidden transition-all hover:bg-brand-gold/20 hover:scale-105" href="#experiencia">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
<div className="relative flex items-center gap-3">
<span className="text-sm uppercase tracking-widest text-brand-gold font-medium">Iniciar experiencia</span>
<iconify-icon className="text-brand-gold transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
<button className="flex items-center gap-3 px-6 py-4 rounded-full hover:bg-white/5 transition-colors group">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white/70 group-hover:text-white transition-colors">
<iconify-icon className="text-sm" icon="solar:play-linear"></iconify-icon>
</span>
<span className="text-sm tracking-widest uppercase text-white/60 font-medium group-hover:text-white/90 transition-colors">Ver manifiesto</span>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-widest text-white/50">Deslizar</span>
<div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
</div>
</section>

<section className="snap-section relative flex items-center justify-center p-6 md:p-12 overflow-hidden" id="experiencia">
<div className="absolute inset-0 flex">
<div className="w-1/2 h-full border-r border-white/5"></div>
<div className="w-1/2 h-full border-l border-white/5"></div>
</div>
<div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col h-full justify-center gap-12 pt-20">
<div className="text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6 mb-4">
<div>
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Elige tu camino</h2>
<p className="text-sm text-white/50 mt-3 font-light tracking-wide">Navega a través de los componentes del ecosistema.</p>
</div>
<div className="text-xs uppercase tracking-widest text-brand-gold/60 font-medium">Fase 01 / Exploración</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[50vh] min-h-[400px]">

<a className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#060b1e]/50 backdrop-blur-xl transition-all duration-700 hover:border-brand-accent/50 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] flex flex-col justify-end p-8 md:p-10 cursor-pointer" href="#tec">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&amp;fit=crop&amp;q=80&amp;w=1600')] bg-cover bg-center opacity-20 filter grayscale mix-blend-overlay transition-opacity duration-700 group-hover:opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#060b1e] via-[#060b1e]/80 to-transparent"></div>
<div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-4">
<div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-6 text-brand-accent backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-light text-white mb-3">Núcleo Tecnológico</h3>
<p className="text-sm text-white/50 font-light max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Explora la arquitectura de red neuronal, modelos de lenguaje procesados localmente y latencia cero.</p>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-accent font-medium">
<span>Explorar módulo</span>
<iconify-icon className="transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#140b05]/50 backdrop-blur-xl transition-all duration-700 hover:border-brand-gold/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] flex flex-col justify-end p-8 md:p-10 cursor-pointer" href="#cultura">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&amp;fit=crop&amp;q=80&amp;w=1600')] bg-cover bg-center opacity-20 filter grayscale mix-blend-overlay transition-opacity duration-700 group-hover:opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-[#0a0502]/80 to-transparent"></div>
<div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-4">
<div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-6 text-brand-gold backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-light text-white mb-3">Memoria Cultural</h3>
<p className="text-sm text-white/50 font-light max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Descubre cómo integramos bases de datos semánticas con lenguas nativas e historias territoriales.</p>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-medium">
<span>Explorar módulo</span>
<iconify-icon className="transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="snap-section relative flex items-center justify-center p-6 md:p-12 overflow-hidden" id="impacto">
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-5/12 flex flex-col gap-8">
<div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 font-medium">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
                        Métricas en tiempo real
                    </div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
                        Inteligencia que genera <span className="font-normal italic text-brand-gold/90">impacto real.</span>
</h2>
<p className="text-base text-white/60 font-light leading-relaxed">
                        Nuestra arquitectura no solo procesa datos, sino que democratiza el acceso a la información en regiones desconectadas. Diseñado para escalar, pensado para incluir.
                    </p>
<ul className="flex flex-col gap-4 mt-4">
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<span className="text-xl font-light text-brand-gold tracking-tight">1.2M+</span>
<span className="text-xs uppercase tracking-widest text-white/50">Interacciones procesadas</span>
</li>
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<span className="text-xl font-light text-brand-gold tracking-tight">4</span>
<span className="text-xs uppercase tracking-widest text-white/50">Lenguas nativas soportadas</span>
</li>
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<span className="text-xl font-light text-brand-gold tracking-tight">15ms</span>
<span className="text-xs uppercase tracking-widest text-white/50">Latencia promedio</span>
</li>
</ul>
</div>

<div className="w-full lg:w-7/12 h-[50vh] min-h-[400px] relative rounded-3xl border border-white/10 bg-slate-900/30 backdrop-blur-md overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center opacity-50 mix-blend-screen">
<div className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full border border-brand-accent/20 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute w-[30vw] h-[30vw] max-w-[380px] max-h-[380px] rounded-full border border-brand-gold/30 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute w-[20vw] h-[20vw] max-w-[250px] max-h-[250px] rounded-full border-2 border-white/10 border-t-brand-accent/50 animate-[spin_10s_linear_infinite]"></div>

<div className="absolute w-24 h-24 rounded-full bg-brand-dark flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(14,165,233,0.3)] backdrop-blur-xl z-10">
<iconify-icon className="text-3xl text-white/80" icon="solar:programming-linear"></iconify-icon>
</div>
</div>

<div className="absolute top-10 left-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs font-light text-white/70 tracking-wide animate-float" style={{animationDelay: '0s'}}>
<span className="block text-white/40 mb-1 uppercase tracking-widest text-[9px]">Nodo Activo</span>
                        Región Amazonía
                    </div>
<div className="absolute bottom-10 right-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs font-light text-white/70 tracking-wide animate-float" style={{animationDelay: '2s'}}>
<span className="block text-white/40 mb-1 uppercase tracking-widest text-[9px]">Procesamiento</span>
                        Lenguaje Natural (NPL)
                    </div>
</div>
</div>
</section>

<section className="snap-section relative flex flex-col items-center justify-center p-6 text-center">
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-0"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<iconify-icon className="text-4xl text-brand-gold mb-8 opacity-80" icon="solar:stars-linear"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
                    ¿Listo para experimentar la inteligencia?
                </h2>
<p className="text-base md:text-lg text-white/50 font-light mb-12 max-w-xl mx-auto">
                    Contacta a nuestro equipo o interactúa directamente con el asistente virtual para conocer más detalles técnicos y comerciales.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 rounded-full bg-white text-brand-dark font-medium tracking-widest text-sm uppercase hover:bg-white/90 transition-colors">
                        Agendar Demo
                    </button>
<button className="px-8 py-4 rounded-full border border-white/20 bg-transparent text-white font-medium tracking-widest text-sm uppercase hover:bg-white/5 transition-colors">
                        Documentación
                    </button>
</div>
</div>

<footer className="absolute bottom-6 w-full text-center z-10">
<p className="text-[10px] uppercase tracking-widest text-white/30">
                    © 2024 Origen IA. Hecho en Colombia para el mundo.
                </p>
</footer>
</section>
</main>

    </>
  );
}
