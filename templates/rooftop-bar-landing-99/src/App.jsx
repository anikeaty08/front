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
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
graffiti: ['Sedgwick Ave Display', 'cursive'],
},
colors: {
spot: {
black: '#050507',
violet: '#0E0816',
blue: '#45D3FF',
pink: '#FF4FD8',
red: '#FF2E4D',
ice: '#EAF2FF',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            // CONSTANTS
            const DURATION_LOADER = 3000; // 3 seconds total
            const PARALLAX_ENABLED = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)").matches;
            
            // DOM ELEMENTS
            const preloader = document.getElementById('preloader');
            const counterElement = document.getElementById('counter');
            const loaderBar = document.getElementById('loader-bar');
            const parallaxLayers = document.querySelectorAll('.parallax-layer');
            const sections = document.querySelectorAll('section, header');

            // --- 1. LOADING SEQUENCE ---
            let start = null;
            
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / DURATION_LOADER, 1);
                
                // Update UI
                const countVal = Math.floor(percentage * 100);
                counterElement.innerText = countVal;
                loaderBar.style.width = `${countVal}%`;

                if (progress < DURATION_LOADER) {
                    window.requestAnimationFrame(step);
                } else {
                    // Animation Complete
                    finishLoading();
                }
            }
            window.requestAnimationFrame(step);

            function finishLoading() {
                preloader.classList.add('loaded');
                document.body.style.overflowY = 'auto'; // Enable scroll
                
                // Trigger initial reveals after loader leaves
                setTimeout(() => {
                    initObserver();
                }, 500);
            }

            // --- 2. SCROLL REVEAL SYSTEM (IntersectionObserver) ---
            const observerOptions = {
                threshold: 0.15, // Trigger when 15% visible
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Optimize: animate only once
                    }
                });
            }, observerOptions);

            function initObserver() {
                const revealElements = document.querySelectorAll('.reveal-item, .scale-reveal');
                revealElements.forEach(el => observer.observe(el));
            }

            // --- 3. PARALLAX & SECTION PROGRESS ENGINE ---
            let lastScrollY = window.scrollY;
            let ticking = false;

            function onScroll() {
                lastScrollY = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(updateScrollVisuals);
                    ticking = true;
                }
            }

            function updateScrollVisuals() {
                // Parallax Logic (Desktop Only)
                if (PARALLAX_ENABLED) {
                    parallaxLayers.forEach(layer => {
                        const speed = parseFloat(layer.getAttribute('data-speed')) || 0.05;
                        const yPos = -(lastScrollY * speed);
                        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    });
                }

                // Section Progress Logic
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    const progressId = section.getAttribute('id') === 'experience' ? 'progress-exp1' :
                                     (section.querySelector('h2')?.innerText.includes('JUEGA') ? 'progress-exp2' : 
                                     (section.tagName === 'HEADER' ? 'progress-hero' : null));
                    
                    if (progressId) {
                        const line = document.getElementById(progressId);
                        if (line) {
                            const windowHeight = window.innerHeight;
                            // Calculate percentage of section scrolled
                            // 0 when top of section enters bottom of viewport
                            // 100 when bottom of section leaves top of viewport
                            let percentage = (windowHeight - rect.top) / (rect.height + windowHeight) * 100;
                            percentage = Math.max(0, Math.min(100, percentage));
                            
                            // Scale horizontally from center or left
                            line.style.width = `${percentage * 1.5}%`; // Multiplier to fill faster
                        }
                    }
                });

                ticking = false;
            }

            window.addEventListener('scroll', onScroll, { passive: true });
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
      

<div id="preloader">
<div className="relative z-10 text-center flex flex-col items-center justify-center bg-black">

<div className="counter-text mb-2 flex flex-col items-center justify-center gap-1">
<img alt="Spot" className="w-24 h-14" src="https://natcvjawoxprmjmjlmqs.supabase.co/storage/v1/object/sign/one-page/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YjVhNTNkZC1jODY1LTRhM2UtOGExNS1lMDIyMWZmN2NhNGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUtcGFnZS9sb2dvLnBuZyIsImlhdCI6MTc3MDMyOTg5MSwiZXhwIjoxODAxODY1ODkxfQ.Qlg3k5rSR8ih9JE2ZPPue-RCbs-jIVZRWM5OmLthhyc"/>
<span id="counter">0</span><span className="text-lg text-spot-blue">%</span>
</div>

<div className="loader-bar-bg">
<div className="loader-bar-fill" id="loader-bar"></div>
</div>

<div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-widest">
<span className="w-1.5 h-1.5 bg-spot-pink rounded-full animate-pulse-fast"></span>
                Loading Assets
            </div>
</div>

<div className="absolute inset-0 bg-gradient-radial from-spot-violet/40 to-transparent opacity-50 pointer-events-none"></div>
</div>

<div className="noise-bg"></div>

<nav className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-6 transition-all duration-500 reveal-item delay-300" id="navbar">
<div className="glass-panel rounded-full px-6 flex items-center justify-between gap-8 md:gap-12 w-full max-w-5xl shadow-2xl shadow-black/50 py-3">
<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">

<div className="absolute inset-0 bg-spot-red/20 blur-md rounded-full group-hover:bg-spot-red/40 transition-all"></div>
<iconify-icon className="text-spot-red text-xl relative z-10" icon="solar:cup-bold"></iconify-icon>
</div>
<span className="font-display font-semibold text-lg tracking-tight text-white group-hover:text-spot-ice transition-colors">EL SPOT</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium tracking-wide text-white/70 hover:text-white hover:shadow-[0_0_15px_rgba(69,211,255,0.4)] transition-all" href="#experience">EXPERIENCIA</a>
<a className="text-xs font-medium tracking-wide text-white/70 hover:text-white hover:shadow-[0_0_15px_rgba(255,79,216,0.4)] transition-all" href="#flavors">SABORES</a>
<a className="text-xs font-medium tracking-wide text-white/70 hover:text-white transition-all" href="#location">UBICACIÓN</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-xs font-mono text-spot-blue/80 hover:text-spot-blue transition-colors uppercase tracking-wide" href="#delivery">
<span>Domicilios</span>
</a>
<a className="bg-white text-spot-black px-5 py-2 rounded-full text-sm font-semibold tracking-tight hover:bg-spot-blue hover:text-black transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(69,211,255,0.4)]" href="#visit">
                    IR AL SPOT
                </a>

<button className="md:hidden text-white/70 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative z-10">

<header className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-24 md:pb-32 snap-start">

<div className="absolute inset-0 w-full h-[110%] -top-[5%] z-0 parallax-layer" data-speed="0.05">
<video autoplay="" className="w-full h-full object-cover opacity-80 scale-105" loop="" muted="" playsinline="">
<source src="https://natcvjawoxprmjmjlmqs.supabase.co/storage/v1/object/sign/one-page/herosection.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YjVhNTNkZC1jODY1LTRhM2UtOGExNS1lMDIyMWZmN2NhNGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUtcGFnZS9oZXJvc2VjdGlvbi5tcDQiLCJpYXQiOjE3NzAzMzAwMjMsImV4cCI6MTgwMTg2NjAyM30.2vA9cohJTzcKlWosqRFsSVS6ceEH5FENrFZcw5JbFYE" type="video/mp4"/>
<div className="w-full h-full bg-gradient-to-br from-spot-violet to-spot-black"></div>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-spot-black via-spot-black/20 to-transparent"></div>
<div className="absolute inset-0 bg-spot-violet/30 mix-blend-overlay"></div>
</div>

<div className="relative z-10 container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="col-span-1 md:col-span-8 lg:col-span-7 flex flex-col gap-4">

<div className="flex items-center gap-3 mb-2 reveal-item">
<span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-spot-blue shadow-[0_0_10px_rgba(69,211,255,0.2)]">Rooftop • Cartagena</span>
<span className="flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-spot-pink">
<span className="w-1.5 h-1.5 rounded-full bg-spot-pink animate-pulse"></span> Abierto Ahora
                        </span>
</div>
<h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-white reveal-item delay-100">
                        EL PARCHE <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">MÁS FRÍO.</span>
</h1>
<p className="font-light text-white/80 text-lg md:text-xl max-w-lg mt-2 leading-relaxed reveal-item delay-200">
                        Granizados, DJs en vivo, juegos de mesa y terraza. 
                        <span className="text-white font-normal">No es discoteca: es El Spot.</span>
</p>
<div className="flex flex-wrap items-center gap-4 mt-6">
<button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all hover:border-spot-blue/50 text-sm font-medium">
<iconify-icon className="text-xl group-hover:text-spot-blue transition-colors" icon="solar:play-circle-linear"></iconify-icon>
                        VER AMBIENTE
                    </button>
<button className="px-6 py-3 rounded-full border border-transparent hover:border-white/20 text-white/70 hover:text-white text-sm font-medium transition-all">
                        EXPLORAR CARTA
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce reveal-item delay-300">
<span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</div>

<div className="section-progress" id="progress-hero"></div>
</header>

<div className="relative w-full border-y border-white/5 bg-spot-violet/40 backdrop-blur-md overflow-hidden py-3 reveal-item">
<div className="marquee-container w-full flex whitespace-nowrap">
<div className="marquee-content flex items-center gap-12 px-4">
<span className="text-sm font-mono tracking-wider text-spot-blue uppercase flex items-center gap-3"><iconify-icon icon="solar:star-fall-bold-duotone"></iconify-icon> MIÉRCOLES DE GRANIZADO SORPRESA</span>
<span className="text-sm font-mono tracking-wider text-white/40 uppercase">///</span>
<span className="text-sm font-mono tracking-wider text-spot-pink uppercase flex items-center gap-3"><iconify-icon icon="solar:music-note-slider-linear"></iconify-icon> DJ SET EN VIVO</span>
<span className="text-sm font-mono tracking-wider text-white/40 uppercase">///</span>
<span className="text-sm font-mono tracking-wider text-spot-ice uppercase flex items-center gap-3"><iconify-icon icon="solar:gamepad-linear"></iconify-icon> ZONA GAMING DISPONIBLE</span>
<span className="text-sm font-mono tracking-wider text-white/40 uppercase">///</span>
<span className="text-sm font-mono tracking-wider text-spot-blue uppercase flex items-center gap-3"><iconify-icon icon="solar:star-fall-bold-duotone"></iconify-icon> MIÉRCOLES DE GRANIZADO SORPRESA</span>
<span className="text-sm font-mono tracking-wider text-white/40 uppercase">///</span>
<span className="text-sm font-mono tracking-wider text-spot-pink uppercase flex items-center gap-3"><iconify-icon icon="solar:music-note-slider-linear"></iconify-icon> DJ SET EN VIVO</span>
</div>
</div>
</div>

<section className="relative min-h-screen flex items-center py-20 overflow-hidden border-b border-white/5 snap-start" id="experience">
<div className="absolute inset-0 z-0 parallax-layer" data-speed="0.08">
<video autoplay="" className="w-full h-full object-cover opacity-60 mix-blend-lighten" loop="" muted="" playsinline="">
<source src="https://natcvjawoxprmjmjlmqs.supabase.co/storage/v1/object/sign/one-page/bebiendo.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YjVhNTNkZC1jODY1LTRhM2UtOGExNS1lMDIyMWZmN2NhNGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUtcGFnZS9iZWJpZW5kby5tcDQiLCJpYXQiOjE3NzAzMjk4NTYsImV4cCI6MTgwMTg2NTg1Nn0.2cOxoJQIhBEOAzLBH98dINkR6tOgzpnYfblOuqLz1ak" type="video/mp4"/>
<div className="w-full h-full bg-spot-black"></div>
</video>
<div className="absolute inset-0 bg-gradient-to-r from-spot-black via-spot-black/40 to-transparent"></div>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-4 reveal-item">
<span className="w-8 h-[1px] bg-spot-pink"></span>
<span className="text-spot-pink font-mono text-xs tracking-widest uppercase">Experiencia 01</span>
</div>
<h2 className="font-display font-medium text-4xl md:text-6xl tracking-tighter text-white mb-6 reveal-item delay-100">
                        SABORES QUE <br/>
<span className="text-white/40">CONECTAN.</span>
</h2>
<p className="text-white/70 text-lg leading-relaxed font-light mb-8 reveal-item delay-200">
                        No es solo hielo picado. Es una mezcla premium de licores importados, pulpa real y toppings que explotan.
                    </p>
<div className="grid grid-cols-2 gap-4 reveal-item delay-300">
<div className="glass-card p-4 rounded-xl">
<iconify-icon className="text-spot-blue text-2xl mb-2" icon="solar:wine-glass-linear"></iconify-icon>
<h3 className="font-display text-lg">Cocktail Base</h3>
<p className="text-xs text-white/50 font-mono mt-1">Licores Premium</p>
</div>
<div className="glass-card p-4 rounded-xl">
<iconify-icon className="text-spot-pink text-2xl mb-2" icon="solar:snowflake-linear"></iconify-icon>
<h3 className="font-display text-lg">Textura Ice</h3>
</div>
</div>
</div>
</div>
<div className="section-progress" id="progress-exp1"></div>
</section>

<section className="relative min-h-screen flex items-center justify-end py-20 overflow-hidden border-b border-white/5 snap-start">
<div className="absolute inset-0 z-0 parallax-layer" data-speed="0.08">
<video autoplay="" className="w-full h-full object-cover opacity-50" loop="" muted="" playsinline="">
<source src="https://natcvjawoxprmjmjlmqs.supabase.co/storage/v1/object/sign/one-page/games-consoles-chill.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YjVhNTNkZC1jODY1LTRhM2UtOGExNS1lMDIyMWZmN2NhNGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUtcGFnZS9nYW1lcy1jb25zb2xlcy1jaGlsbC5tcDQiLCJpYXQiOjE3NzAzMjk5NzAsImV4cCI6MTgwMTg2NTk3MH0.vquGxJeBeVwMCSSSNB1YjsrW8mR5W1iKS1iesWQ9Tm8" type="video/mp4"/>
<div className="w-full h-full bg-spot-violet"></div>
</video>
<div className="absolute inset-0 bg-gradient-to-l from-spot-black via-spot-black/50 to-transparent"></div>
</div>
<div className="container mx-auto px-6 relative z-10 flex justify-end">
<div className="max-w-xl text-right">
<div className="flex items-center justify-end gap-2 mb-4 reveal-item">
<span className="text-spot-blue font-mono text-xs tracking-widest uppercase">Experiencia 02</span>
<span className="w-8 h-[1px] bg-spot-blue"></span>
</div>
<h2 className="font-display font-medium text-4xl md:text-6xl tracking-tighter text-white mb-6 reveal-item delay-100">
                        JUEGA, BEBE <br/>
<span className="text-white/40">&amp; RELÁJATE.</span>
</h2>
<p className="text-white/70 text-lg leading-relaxed font-light mb-8 ml-auto">
                        El plan perfecto no necesita filas ni cover. Jenga gigante, UNO, consolas retro y PlayStation. El ambiente lo pones tú, nosotros ponemos la música.
                    </p>
<ul className="inline-flex flex-col items-end gap-3 font-mono text-sm text-white/60">
<li className="flex items-center gap-3">
                            PlayStation 5 Zone <iconify-icon className="text-spot-blue" icon="solar:gamepad-charge-linear"></iconify-icon>
</li>
<li className="flex items-center gap-3">
                            Juegos de Mesa Clásicos <iconify-icon className="text-spot-pink" icon="solar:dice-square-linear"></iconify-icon>
</li>
<li className="flex items-center gap-3">
                            Rooftop Breeze <iconify-icon className="text-white" icon="solar:wind-linear"></iconify-icon>
</li>
</ul>
</div>
</div>
<div className="section-progress" id="progress-exp2"></div>
</section>

<section className="py-24 md:py-32 relative min-h-screen snap-start" id="flavors">
<div className="absolute inset-0 z-0 parallax-layer" data-speed="0.04">
<video autoplay="" className="w-full h-full object-cover opacity-60 mix-blend-lighten" loop="" muted="" playsinline="">
<source src="https://natcvjawoxprmjmjlmqs.supabase.co/storage/v1/object/sign/one-page/granizadosabores.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YjVhNTNkZC1jODY1LTRhM2UtOGExNS1lMDIyMWZmN2NhNGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUtcGFnZS9ncmFuaXphZG9zYWJvcmVzLm1wNCIsImlhdCI6MTc3MDMzMDAwOSwiZXhwIjoxODAxODY2MDA5fQ.7I0fNb5mHs7RkwHoRPfivh2LlQmcD97bQOX98ISirIk" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-r from-spot-black via-spot-black/40 to-transparent"></div>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-item">
<div>
<h2 className="font-display font-medium text-3xl md:text-5xl tracking-tighter mb-2">LA CARTA <span className="text-spot-blue drop-shadow-[0_0_15px_rgba(69,211,255,0.4)]">FROZEN</span></h2>
<p className="text-white/60 font-light max-w-md">Selección de la casa. Sabores intensos.</p>
</div>

<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
<button className="px-4 py-2 rounded-full border border-spot-blue/30 bg-spot-blue/10 text-spot-blue text-xs font-mono uppercase hover:bg-spot-blue hover:text-black transition-colors">Todos</button>
<button className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-white/70 text-xs font-mono uppercase transition-colors">Ácidos</button>
<button className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-white/70 text-xs font-mono uppercase transition-colors">Dulces</button>
<button className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-white/70 text-xs font-mono uppercase transition-colors">Sin Alcohol</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 group relative overflow-hidden scale-reveal delay-100">
<div className="w-3 h-3 rounded-full bg-purple-500 mb-6 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
<h3 className="font-display text-2xl mb-2 group-hover:text-purple-400 transition-colors">Uva Morada</h3>
<p className="text-white/60 text-sm font-light">Clásico de la casa. Dulce intenso con un toque cítrico final.</p>
</div>
<div className="glass-card rounded-2xl p-8 group relative overflow-hidden scale-reveal delay-200">
<div className="w-3 h-3 rounded-full bg-green-400 mb-6 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
<h3 className="font-display text-2xl mb-2 group-hover:text-green-400 transition-colors">Lulada Frozen</h3>
<p className="text-white/60 text-sm font-light">Ácido y refrescante. Pulpa de lulo real con escarchado de sal.</p>
</div>
<div className="glass-card rounded-2xl p-8 group relative overflow-hidden scale-reveal delay-300">
<div className="w-3 h-3 rounded-full bg-red-500 mb-6 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
<h3 className="font-display text-2xl mb-2 group-hover:text-red-400 transition-colors">Cereza Pasión</h3>
<p className="text-white/60 text-sm font-light">Dulce profundo. Mix de frutos rojos y cereza.</p>
</div>
<div className="glass-card rounded-2xl p-8 group relative overflow-hidden scale-reveal delay-100">
<div className="w-3 h-3 rounded-full bg-yellow-400 mb-6 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
<h3 className="font-display text-2xl mb-2 group-hover:text-yellow-400 transition-colors">Maracuyá Shock</h3>
<p className="text-white/60 text-sm font-light">La fruta de la pasión en su punto más frío.</p>
</div>
<div className="glass-card rounded-2xl p-8 group relative overflow-hidden scale-reveal delay-200">
<div className="w-3 h-3 rounded-full bg-blue-400 mb-6 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
<h3 className="font-display text-2xl mb-2 group-hover:text-blue-400 transition-colors">Blue Energy</h3>
<p className="text-white/60 text-sm font-light">Sabor energizante color neón. El favorito para la fiesta.</p>
</div>
<div className="glass-card rounded-2xl p-8 group relative overflow-hidden border-spot-pink/30 scale-reveal delay-300">
<div className="absolute inset-0 bg-spot-pink/5 group-hover:bg-spot-pink/10 transition-colors"></div>
<div className="flex items-center justify-between mb-6">
<div className="w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]"></div>
<span className="text-[10px] font-mono uppercase bg-spot-pink text-black px-2 py-0.5 rounded-sm">Nuevo</span>
</div>
<h3 className="font-display text-2xl mb-2 text-white">Mix de Temporada</h3>
<p className="text-white/60 text-sm font-light">Pregunta al bartender por la mezcla especial del mes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-white/5 snap-start" id="events">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70"></div>
<div className="container z-10 mx-auto px-6 relative">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 reveal-item">
<div className="">
<h2 className="font-graffiti text-5xl md:text-7xl text-white transform -rotate-2 leading-none drop-shadow-[0_0_15px_rgba(255,79,216,0.5)]">
                            PRÓXIMOS <br/> <span className="text-spot-blue">PARCHES</span>
</h2>
</div>
<div className="flex items-center gap-2 text-white/60 font-mono text-sm border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
<iconify-icon className="text-spot-pink text-lg" icon="solar:calendar-linear"></iconify-icon>
<span className="uppercase tracking-wide">Agenda Semanal</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 relative group h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-spot-violet/20 scale-reveal delay-100">
<div className="bg-gradient-to-t from-spot-black via-transparent to-transparent z-10 absolute inset-0"></div>
<img alt="DJ Neon" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://natcvjawoxprmjmjlmqs.supabase.co/storage/v1/object/sign/one-page/personasspot(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YjVhNTNkZC1jODY1LTRhM2UtOGExNS1lMDIyMWZmN2NhNGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUtcGFnZS9wZXJzb25hc3Nwb3QoMSkucG5nIiwiaWF0IjoxNzcwMzMwMDQ2LCJleHAiOjE4MDE4NjYwNDZ9.NCembuGnqPM5ASzKlo4vVl_qT0vEuxhVqG6IA56vi1k"/>
<div className="absolute top-6 right-6 z-20 bg-spot-pink text-black font-mono text-xs font-bold px-4 py-2 rounded-lg transform rotate-6 shadow-[0_0_15px_rgba(255,79,216,0.6)] group-hover:rotate-12 transition-transform">VIERNES &amp; SÁBADO</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<h3 className="font-graffiti text-5xl text-white mb-2 leading-none group-hover:text-spot-ice transition-colors">NOCHE DE NEÓN</h3>
</div>
</div>
<div className="col-span-1 relative group h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-spot-black scale-reveal delay-200">
<img alt="Granizado" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 z-20"><span className="block text-4xl font-graffiti text-spot-blue -rotate-6 drop-shadow-lg">PROMO</span></div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<h3 className="font-display text-2xl font-semibold text-white mb-1">MIÉRCOLES</h3>
<h4 className="font-graffiti text-3xl text-white/90 mb-3">SECRET FLAVOR</h4>
<p className="font-mono text-xs text-white/60 uppercase tracking-wide">Pide el sabor oculto<br/>por solo <span className="text-white font-bold">$15K</span></p>
</div>
</div>
<div className="col-span-1 md:col-span-3 relative group rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-spot-violet to-spot-black reveal-on-scroll p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">

<div className="absolute inset-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-spot-pink via-spot-black to-transparent"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
<div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center backdrop-blur-md group-hover:border-spot-pink/50 transition-colors">
<span className="text-spot-pink font-bold text-2xl">30</span>
<span className="text-white/50 text-[10px] uppercase font-mono tracking-widest">OCT</span>
</div>
<div className="">
<h3 className="font-graffiti text-4xl md:text-5xl text-white mb-1">TORNEO FIFA 24</h3>
<p className="text-white/60 font-light">Premios en consumo + Botella para el campeón.</p>
</div>
</div>
<div className="relative z-10">
<a className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-spot-pink hover:text-white transition-all transform group-hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">
<iconify-icon className="text-xl" icon="solar:gamepad-linear"></iconify-icon>
                                INSCRIBIRME
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative min-h-screen flex items-center snap-start" id="location">
<div className="absolute inset-0 z-0 parallax-layer" data-speed="0.03">
<video autoplay="" className="w-full h-full object-cover opacity-60 mix-blend-lighten" loop="" muted="" playsinline="">
<source src="https://natcvjawoxprmjmjlmqs.supabase.co/storage/v1/object/sign/one-page/dj-booth-neon.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YjVhNTNkZC1jODY1LTRhM2UtOGExNS1lMDIyMWZmN2NhNGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUtcGFnZS9kai1ib290aC1uZW9uLm1wNCIsImlhdCI6MTc3MDMyOTkxOCwiZXhwIjoxODAxODY1OTE4fQ.uR5AqPLWOZbnasmNl7naJ5UFfQdS9gWEherpQaMwK1s" type="video/mp4"/>
<div className="w-full h-full bg-spot-black"></div>
</video>
<div className="absolute inset-0 bg-gradient-to-r from-spot-black via-spot-black/40 to-transparent"></div>
</div>
<div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="reveal-item">
<h2 className="font-display font-medium text-4xl tracking-tighter mb-6 text-white">UBICACIÓN <br/> &amp; HORARIOS</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 bg-white/5 p-2 rounded-lg h-fit">
<iconify-icon className="text-spot-red text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">La Castellana</h4>
<p className="text-white/60 font-light text-sm">Calle de Green Moon<br/>Cartagena de Indias</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-white/5 p-2 rounded-lg h-fit">
<iconify-icon className="text-spot-red text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Marbella</h4>
<p className="text-white/60 font-light text-sm">Cerca de la olmpica<br/>Cartagena de Indias</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-white/5 p-2 rounded-lg h-fit"><iconify-icon className="text-spot-blue text-xl" icon="solar:clock-circle-linear"></iconify-icon></div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Abierto Todos los Días</h4>
<ul className="text-white/60 font-light text-sm space-y-1 font-mono">
<li className="flex justify-between w-48"><span>Lun - Jue</span> <span>4PM - 12AM</span></li>
<li className="flex justify-between w-48 text-white"><span>Vie - Sáb</span> <span>4PM - 2AM</span></li>
<li className="flex justify-between w-48"><span>Dom</span> <span>4PM - 12AM</span></li>
</ul>
</div>
</div>
</div>
</div>

<div className="h-80 w-full glass-panel rounded-2xl relative overflow-hidden group reveal-on-scroll">

<div className="absolute inset-0 bg-gray-800 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700">
<iframe allowfullscreen="" className="opacity-60 hover:opacity-100 transition-opacity" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.368739198305!2d-75.50348732402925!3d10.392268689734676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef6252994e63e79%3A0xc3f34e3266904033!2sCartagena%2C%20Bolivar!5e0!3m2!1sen!2sco!4v1715632123456!5m2!1sen!2sco" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="absolute bottom-4 left-4">
<a className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold tracking-tight shadow-lg hover:scale-105 transition-transform flex items-center gap-2" href="https://maps.google.com" target="_blank">
<iconify-icon icon="solar:map-arrow-right-bold"></iconify-icon> VER EN MAPA
                        </a>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden flex items-center justify-center snap-start" id="delivery">
<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-70 blur-sm" loop="" muted="" playsinline="">
<source src="https://natcvjawoxprmjmjlmqs.supabase.co/storage/v1/object/sign/one-page/spot-night-bokeh.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YjVhNTNkZC1jODY1LTRhM2UtOGExNS1lMDIyMWZmN2NhNGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvbmUtcGFnZS9zcG90LW5pZ2h0LWJva2VoLm1wNCIsImlhdCI6MTc3MDMzMDA3NSwiZXhwIjoxODAxODY2MDc1fQ.ZiagedKNkQ6f22OjKIQLZXTcQ4sF7gIMGWiahYdKLhc" type="video/mp4"/>
<div className="w-full h-full bg-spot-black"></div>
</video>
</div>
<div className="relative z-10 container mx-auto px-6 text-center reveal-item">
<div className="glass-panel inline-block p-8 md:p-12 rounded-3xl max-w-2xl w-full border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-4xl text-spot-ice mb-4" icon="solar:moped-linear"></iconify-icon>
<h2 className="font-display font-medium text-3xl md:text-5xl tracking-tighter mb-4 text-white">¿HOY NO SALES?</h2>
<p className="text-white/70 text-lg mb-8 font-light">Llevamos el parche a tu casa. Pide tus granizados favoritos ahora.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-[#FF441F] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#E63916] transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="ph:bowl-food-fill"></iconify-icon> Pedir por Rappi
                        </button>
<button className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1DA851] transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="ic:baseline-whatsapp"></iconify-icon> WhatsApp
                        </button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12 bg-black relative z-10">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<span className="font-display font-bold text-xl tracking-tight text-white mb-2">EL SPOT</span>
<p className="text-white/40 text-xs font-mono">© 2026 Cartagena. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-white/60 hover:text-spot-pink transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-white/60 hover:text-spot-blue transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
