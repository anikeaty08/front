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
fontFamily: {
serif: ['Cinzel', 'serif'],
sans: ['Manrope', 'sans-serif'],
},
colors: {
gold: {
100: '#F9F1D0',
200: '#F0E6B8',
300: '#E6D692',
400: '#D4AF37',
500: '#B5922F',
600: '#8A6E20',
},
skin: {
50: '#FDFCF8',
100: '#F5EBE0',
200: '#E3D5CA',
}
},
backgroundImage: {
'gold-gradient': 'linear-gradient(135deg, #F9F1D0 0%, #D4AF37 50%, #8A6E20 100%)',
}
}
}
}



        // 1. Lenis + GSAP Setup (Crucial for smoothness)
        // This configuration binds the scroll smooth (Lenis) with the animation engine (GSAP)
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1, 
            touchMultiplier: 2, 
        });

        // Synchronize Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable lag smoothing to prevent jumps
        gsap.ticker.lagSmoothing(0);

        // 2. Register Plugins
        gsap.registerPlugin(ScrollTrigger);

        // 3. Navbar Animations
        const nav = document.getElementById('navbar');
        const navLogo = document.getElementById('nav-logo');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-black/80', 'backdrop-blur-md', 'border-white/5');
                nav.classList.remove('border-white/0');
                
                navLogo.classList.remove('opacity-0', 'translate-y-[-10px]');
            } else {
                nav.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-white/5');
                nav.classList.add('border-white/0');
                
                navLogo.classList.add('opacity-0', 'translate-y-[-10px]');
            }
        });

        // 4. Hero Parallax
        const tlHero = gsap.timeline({
            scrollTrigger: {
                trigger: "header",
                start: "top top",
                end: "bottom top",
                scrub: 0 // Direct sync with scroll, no delay
            }
        });

        tlHero.to("#hero-image", {
            yPercent: 30, // Subtle movement
            ease: "none"
        }, 0);

        tlHero.to("#main-logo", {
            scale: 0.9,
            opacity: 0,
            y: 50,
            ease: "none"
        }, 0);

        // 5. Initial Load Animation
        const initTl = gsap.timeline();
        
        initTl.from(".reveal-hero", {
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.2
        });

        // 6. Section Reveal Animations
        // Batching for performance
        const revealElements = document.querySelectorAll(".reveal-scroll");
        
        revealElements.forEach(element => {
            gsap.to(element, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%", // Start slightly earlier
                    toggleActions: "play none none reverse" 
                }
            });
        });

        // 7. Gallery Scroll Logic
        const gallery = document.getElementById('gallery-container');
        document.getElementById('scroll-left').addEventListener('click', () => {
            gallery.scrollBy({ left: -window.innerWidth * 0.4, behavior: 'smooth' });
        });
        document.getElementById('scroll-right').addEventListener('click', () => {
            gallery.scrollBy({ left: window.innerWidth * 0.4, behavior: 'smooth' });
        });

        // 8. Lazy Loading
        const lazyImages = document.querySelectorAll('.lazy-img');
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.onload = () => {
                        img.style.transition = 'opacity 0.5s ease';
                        img.classList.remove('opacity-0');
                    };
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: "200px" });

        lazyImages.forEach(img => imgObserver.observe(img));

    
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
      

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 border-b border-white/0 mix-blend-difference text-white" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="font-serif text-2xl tracking-widest opacity-0 transition-opacity duration-500 transform translate-y-[-10px]" id="nav-logo">
                EM
            </div>
<div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-light">
<a className="hover:text-gold-300 transition-colors duration-300" href="#about">Estudio</a>
<a className="hover:text-gold-300 transition-colors duration-300" href="#services">Catálogo</a>
<a className="hover:text-gold-300 transition-colors duration-300" href="#portfolio">Galería</a>
</div>
<button className="border border-white/30 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-gold-400 hover:border-gold-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
                Reservar
            </button>
</div>
</nav>

<header className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/30 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#050505] z-10"></div>
<img alt="Erika Meza Beauty Detail" className="will-change-transform w-full h-[120%] object-cover object-center opacity-90" id="hero-image" src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-20 text-center flex flex-col items-center gap-6 px-4">
<div className="will-change-transform relative" id="main-logo">
<h1 className="font-serif text-[100px] md:text-[180px] leading-none tracking-tighter text-gold-gradient mix-blend-overlay opacity-90">
                    EM
                </h1>
<p className="font-serif text-3xl md:text-5xl tracking-tight text-gold-100 -mt-4 md:-mt-8 font-light">
                    ERIKA MEZA
                </p>
<div className="flex items-center justify-center gap-3 mt-6">
<div className="h-[1px] w-8 bg-gold-400/50"></div>
<p className="text-xs md:text-sm tracking-[0.3em] uppercase text-stone-300 font-light">
                        Catálogo de Servicios
                    </p>
<div className="h-[1px] w-8 bg-gold-400/50"></div>
</div>
</div>
<div className="mt-12 opacity-0 translate-y-10 reveal-hero">
<a className="group relative px-8 py-4 bg-transparent overflow-hidden border border-gold-400/30 text-gold-100 transition-all duration-500 hover:border-gold-400 inline-block" href="#contact">
<span className="absolute w-0 h-full bg-gold-400/10 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
<span className="relative z-10 text-xs uppercase tracking-[0.2em] font-light group-hover:text-white flex items-center justify-center gap-3">
                        Agendar Cita <iconify-icon className="text-gold-300" icon="solar:sparkle-linear" width="16"></iconify-icon>
</span>
<span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50"></span>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
<span className="text-[10px] uppercase tracking-widest text-stone-400">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent"></div>
</div>
</header>

<section className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center" id="about">
<div className="relative h-[600px] overflow-hidden group reveal-scroll">
<div className="absolute inset-0 border border-gold-400/20 z-20 m-4 transition-all duration-700 group-hover:m-0 pointer-events-none"></div>
<img alt="Beauty Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-8 reveal-scroll">
<div className="flex items-center gap-4">
<div className="h-[1px] w-12 bg-gold-400"></div>
<span className="text-[10px] uppercase tracking-[0.3em] text-gold-300">Filosofía</span>
</div>
<h2 className="font-serif text-4xl md:text-6xl text-stone-100 leading-tight tracking-tight font-light">
                La Arquitectura de <br/>
<span className="text-gold-gradient italic pr-2">Tu Mirada</span>
</h2>
<p className="text-lg text-stone-400 font-light leading-relaxed">
                Cada rostro cuenta una historia, y la mirada es su protagonista. En Erika Meza, nos especializamos en perfeccionar la armonía natural de tus cejas y pestañas.
            </p>
<p className="text-lg text-stone-400 font-light leading-relaxed">
                A través del visajismo avanzado y técnicas de vanguardia, diseñamos estructuras que realzan tu belleza única, creando resultados impactantes pero indetectables.
            </p>
<div className="pt-8">

<div className="font-serif text-3xl text-stone-600 italic opacity-60 transform -rotate-2">Erika Meza</div>
</div>
</div>
</section>

<section className="py-32 bg-[#080808]" id="services">
<div className="px-6 md:px-12 max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-8 reveal-scroll">
<div>
<span className="text-[10px] uppercase tracking-[0.3em] text-gold-300 block mb-4">Catálogo Exclusivo</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light tracking-tight">Cejas y Pestañas</h2>
</div>
<button className="text-stone-400 hover:text-gold-200 text-xs uppercase tracking-widest flex items-center gap-2 transition-colors">
                Ver Lista Completa <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[650px] w-full border-t border-b border-white/5 reveal-scroll">

<div className="group relative border-r border-white/5 overflow-hidden h-[450px] md:h-full cursor-pointer">
<div className="absolute inset-0 bg-neutral-900 transition-colors duration-700"></div>
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out" src="https://images.unsplash.com/photo-1587575494201-11fe74d90d38?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-10 w-full">
<span className="text-[10px] text-gold-300 tracking-widest mb-3 block opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">PESTAÑAS</span>
<h3 className="font-serif text-3xl text-stone-200 mb-2 group-hover:text-gold-200 transition-colors duration-500">Lifting &amp; Extensiones</h3>
<p className="text-stone-400 font-light text-base opacity-0 max-h-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-700 delay-200 overflow-hidden leading-relaxed">
                        Eleva tu mirada con nuestro Lifting Premium o logra volumen impactante con Extensiones personalizadas fibra a fibra.
                    </p>
<div className="mt-6 w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-gold-400 transition-all duration-700"></div>
</div>
</div>

<div className="group relative border-r border-white/5 overflow-hidden h-[450px] md:h-full cursor-pointer">
<div className="absolute inset-0 bg-neutral-900 transition-colors duration-700"></div>
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out" src="https://images.unsplash.com/photo-1629432321473-b3c9cb9cb639?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-10 w-full">
<span className="text-[10px] text-gold-300 tracking-widest mb-3 block opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">CEJAS</span>
<h3 className="font-serif text-3xl text-stone-200 mb-2 group-hover:text-gold-200 transition-colors duration-500">Diseño &amp; Visajismo</h3>
<p className="text-stone-400 font-light text-base opacity-0 max-h-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-700 delay-200 overflow-hidden leading-relaxed">
                        Mapeo geométrico facial para esculpir la ceja perfecta según tu estructura ósea. Depilación con hilo y perfilado HD.
                    </p>
<div className="mt-6 w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-gold-400 transition-all duration-700"></div>
</div>
</div>

<div className="group relative overflow-hidden h-[450px] md:h-full cursor-pointer">
<div className="absolute inset-0 bg-neutral-900 transition-colors duration-700"></div>
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out" src="https://images.unsplash.com/photo-1594451722652-3d5cb7f75a74?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-10 w-full">
<span className="text-[10px] text-gold-300 tracking-widest mb-3 block opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">TRATAMIENTOS</span>
<h3 className="font-serif text-3xl text-stone-200 mb-2 group-hover:text-gold-200 transition-colors duration-500">Laminado &amp; Henna</h3>
<p className="text-stone-400 font-light text-base opacity-0 max-h-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-700 delay-200 overflow-hidden leading-relaxed">
                        Nutrición profunda, fijación y color. El laminado ofrece un efecto "pluma" y la henna orgánica define la intensidad.
                    </p>
<div className="mt-6 w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-gold-400 transition-all duration-700"></div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="portfolio">
<div className="px-6 md:px-12 max-w-7xl mx-auto mb-12 flex items-center justify-between reveal-scroll">
<h2 className="font-serif text-4xl text-stone-100 font-light">Resultados</h2>
<div className="flex gap-4">
<button className="p-3 border border-white/10 rounded-full hover:border-gold-400 hover:text-gold-400 transition-all text-white" id="scroll-left"><iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon></button>
<button className="p-3 border border-white/10 rounded-full hover:border-gold-400 hover:text-gold-400 transition-all text-white" id="scroll-right"><iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon></button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 no-scrollbar" data-lenis-prevent="" id="gallery-container">

<div className="snap-center shrink-0 w-[85vw] md:w-[40vw] h-[60vh] relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1599525542287-c1d0115e580e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 pointer-events-none">
<p className="font-serif text-2xl text-white">Laminado de Cejas</p>
<p className="text-xs tracking-widest text-gold-200 uppercase mt-2">Definición &amp; Textura</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[40vw] h-[60vh] relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1534950947221-dcaca2836ce8?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 pointer-events-none">
<p className="font-serif text-2xl text-white">Lifting de Pestañas</p>
<p className="text-xs tracking-widest text-gold-200 uppercase mt-2">Curvatura Natural</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[40vw] h-[60vh] relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=2018&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 pointer-events-none">
<p className="font-serif text-2xl text-white">Visajismo</p>
<p className="text-xs tracking-widest text-gold-200 uppercase mt-2">Mapeo &amp; Diseño</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[40vw] h-[60vh] relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 pointer-events-none">
<p className="font-serif text-2xl text-white">Volumen Ruso</p>
<p className="text-xs tracking-widest text-gold-200 uppercase mt-2">Extensiones</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a]">
<div className="text-center mb-16 reveal-scroll">
<iconify-icon className="mx-auto text-gold-300 mb-4" icon="solar:instagram-linear" width="32"></iconify-icon>
<h2 className="font-serif text-3xl text-stone-200">@ErikaMeza.Lashes</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-1">
<div className="aspect-square relative group overflow-hidden bg-neutral-900">
<img className="lazy-img w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:scale-110 group-hover:opacity-70 transition-transform duration-700" data-src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden bg-neutral-900">
<img className="lazy-img w-full h-full object-cover opacity-0 transition-opacity duration-700 delay-100 group-hover:scale-110 group-hover:opacity-70 transition-transform duration-700" data-src="https://images.unsplash.com/photo-1632345031635-7b8006e2e4ec?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden bg-neutral-900">
<img className="lazy-img w-full h-full object-cover opacity-0 transition-opacity duration-700 delay-200 group-hover:scale-110 group-hover:opacity-70 transition-transform duration-700" data-src="https://images.unsplash.com/photo-1588510069002-36b13149794e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden bg-neutral-900">
<img className="lazy-img w-full h-full object-cover opacity-0 transition-opacity duration-700 delay-300 group-hover:scale-110 group-hover:opacity-70 transition-transform duration-700" data-src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 px-6 md:px-12 bg-[#050505] border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
<div className="reveal-scroll">
<h2 className="font-serif text-5xl md:text-6xl text-gold-gradient mb-8 leading-tight">Transforma<br/>Tu Mirada</h2>
<p className="text-stone-400 font-light text-lg mb-12 max-w-md">
                    Agenda tu evaluación de visajismo gratuita. Nuestro equipo diseñará el tratamiento perfecto para tus facciones.
                </p>
<div className="space-y-6 text-stone-400 font-light">
<p className="flex items-center gap-4 hover:text-gold-200 transition-colors cursor-pointer group">
<iconify-icon className="text-gold-400 group-hover:scale-110 transition-transform" icon="solar:map-point-linear" width="20"></iconify-icon> Av. Luxury 1234, Nivel 2, Ciudad
                    </p>
<p className="flex items-center gap-4 hover:text-gold-200 transition-colors cursor-pointer group">
<iconify-icon className="text-gold-400 group-hover:scale-110 transition-transform" icon="solar:phone-linear" width="20"></iconify-icon> +54 9 11 1234 5678
                    </p>
<p className="flex items-center gap-4 hover:text-gold-200 transition-colors cursor-pointer group">
<iconify-icon className="text-gold-400 group-hover:scale-110 transition-transform" icon="solar:letter-linear" width="20"></iconify-icon> citas@erikameza.com
                    </p>
</div>
</div>
<form className="space-y-8 reveal-scroll pt-8">
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-stone-800 py-4 text-stone-200 focus:outline-none focus:border-gold-400 transition-colors" id="name" placeholder=" " type="text"/>
<label className="absolute left-0 top-4 text-stone-500 text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gold-400 cursor-text" htmlFor="name">Nombre Completo</label>
</div>
<div className="relative group">
<select className="peer w-full bg-transparent border-b border-stone-800 py-4 text-stone-200 focus:outline-none focus:border-gold-400 transition-colors appearance-none rounded-none" id="service">
<option className="bg-black text-stone-500" value="">Seleccionar Servicio</option>
<option className="bg-black" value="brows">Diseño de Cejas</option>
<option className="bg-black" value="lashes">Lifting de Pestañas</option>
<option className="bg-black" value="extensions">Extensiones</option>
<option className="bg-black" value="laminado">Laminado</option>
</select>
<label className="absolute left-0 top-4 text-stone-500 text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gold-400 pointer-events-none" htmlFor="service">Servicio de Interés</label>
<iconify-icon className="absolute right-0 top-4 text-stone-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative group">
<textarea className="peer w-full bg-transparent border-b border-stone-800 py-4 text-stone-200 focus:outline-none focus:border-gold-400 transition-colors resize-none" id="message" placeholder=" " rows="3"></textarea>
<label className="absolute left-0 top-4 text-stone-500 text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gold-400 cursor-text" htmlFor="message">Mensaje Adicional</label>
</div>
<button className="mt-8 px-10 py-4 bg-gold-400 text-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors duration-500 w-full md:w-auto flex justify-center items-center gap-2" type="button">
                    Enviar Consulta
                </button>
</form>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-600 uppercase tracking-widest font-light">
<p>© 2024 Erika Meza. Todos los derechos reservados.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gold-400 transition-colors" href="#">Privacidad</a>
<a className="hover:text-gold-400 transition-colors" href="#">Términos</a>
</div>
</div>
</footer>



    </>
  );
}
