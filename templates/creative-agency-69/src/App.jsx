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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Space Grotesk', 'monospace'],
tech: ['Share Tech Mono', 'monospace']
},
colors: {
luxota: {
bg: '#050505', // Deep Dark Charcoal/Black
card: '#0a0a0a',
border: '#ffffff08',
accent: '#FF5E00', // Bright Orange
accentGlow: '#FF5E0040',
red: '#FF1100', // Fiery Red
yellow: '#FFD500', // Vivid Yellow
dim: '#9ca3af',
surface: '#ffffff03'
}
},
letterSpacing: {
tighter: '-0.04em',
tightest: '-0.07em'
},
backgroundImage: {
'aurora': 'conic-gradient(from 180deg at 50% 50%, #050505 0deg, #1a0f0a 120deg, #050505 360deg)',
'warm-gradient': 'linear-gradient(to right, #FF1100, #FF5E00, #FFD500)',
},
animation: {
'blob': 'blob 10s infinite',
'text-shimmer': 'text-shimmer 3s ease-out infinite alternate',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
'text-shimmer': {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '100% 50%' },
},
'float': {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
},
transitionTimingFunction: {
'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // 0. PRELOADER
            const loaderBar = document.getElementById("loader-bar");
            const counterElement = document.getElementById("counter");
            const preloader = document.getElementById("preloader");
            const preloaderTl = gsap.timeline();

            preloaderTl.to(loaderBar, { scaleX: 1, duration: 1.5, ease: "power2.inOut" })
            .to(counterElement, { innerText: 100, duration: 1.5, snap: { innerText: 1 }, ease: "power2.inOut" }, "<")
            .to(preloader, { yPercent: -100, duration: 1, ease: "power4.inOut", delay: 0.2 })
            .fromTo(".reveal-nav", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
            .to(".reveal-text", { y: "0%", duration: 1.2, stagger: 0.05, ease: "power4.out" }, "-=0.8")
            .to(".reveal-hero-fade", { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.8");

            // 1. Lenis (Fixed GSAP Sync)
            const lenis = new Lenis({
                duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical', smooth: true,
            });
            
            lenis.on('scroll', ScrollTrigger.update)
            gsap.ticker.add((time)=>{ lenis.raf(time * 1000) })
            gsap.ticker.lagSmoothing(0)
            
            // 2. Custom Cursor
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-outline');
            const cursorText = document.querySelector('.cursor-text');
            const cards = document.querySelectorAll('.spotlight-card, .masonry-item');
            let mouseX = 0, mouseY = 0;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX; mouseY = e.clientY;
                cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
                gsap.to(cursorOutline, { x: mouseX, y: mouseY, duration: 0.15, ease: "power2.out" });
                
                // Update CSS variables for all cards
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty('--mouse-x', `${mouseX - rect.left}px`);
                    card.style.setProperty('--mouse-y', `${mouseY - rect.top}px`);
                });
            });

            // 3. IMPROVED SCROLL INTERACTIONS
            let mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                
                // Section 3: Narrative Text Reveal
                const narrativeSection = document.getElementById("narrative-section");
                if (narrativeSection) {
                    const words = gsap.utils.toArray(".highlight-word");
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: narrativeSection,
                            start: "top top", 
                            end: "+=150%", 
                            pin: true,
                            anticipatePin: 1, 
                            scrub: 1, 
                        }
                    });

                    tl.fromTo(words, 
                        { opacity: 0.1, filter: "blur(8px)", y: 20, scale: 0.95 },
                        { 
                            opacity: 1, 
                            filter: "blur(0px)", 
                            y: 0, 
                            scale: 1, 
                            stagger: 0.1, 
                            color: (i, target) => {
                                if(target.classList.contains("text-transparent")) return "transparent";
                                if(target.classList.contains("text-luxota-yellow")) return "#FFD500";
                                return "#ffffff";
                            }, 
                            duration: 1,
                            ease: "power2.out"
                        }
                    );
                }

                // Section 6: Horizontal Scroll (News Hub)
                const track = document.getElementById("cards-track");
                const pinSection = document.getElementById("architecture-pin");
                
                if (track && pinSection) {
                    const getScrollAmount = () => {
                        let trackWidth = track.scrollWidth;
                        let viewportWidth = window.innerWidth;
                        return -(trackWidth - viewportWidth + 100);
                    };

                    gsap.to(track, {
                        x: getScrollAmount,
                        ease: "none",
                        scrollTrigger: {
                            trigger: pinSection,
                            start: "top top",
                            end: "+=2000",
                            pin: true,
                            scrub: 1,
                            invalidateOnRefresh: true, 
                        }
                    });
                }
            });

            // 4. Cursor Hover Interactions
            const interactiveCards = document.querySelectorAll('#cards-track .spotlight-card, .masonry-item');

            interactiveCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(cursorOutline, {
                        width: 90,
                        height: 90,
                        backgroundColor: "rgba(255, 94, 0, 0.9)",
                        borderColor: "transparent",
                        duration: 0.4, ease: "power3.out"
                    });
                    gsap.to(cursorDot, { opacity: 0, duration: 0.2 });
                    gsap.to(cursorText, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(cursorOutline, {
                        width: 40, height: 40,
                        backgroundColor: "transparent",
                        borderColor: "rgba(255, 94, 0, 0.3)",
                        backdropFilter: "blur(2px)",
                        duration: 0.4, ease: "power3.out"
                    });
                    gsap.to(cursorDot, { opacity: 1, duration: 0.2 });
                    gsap.to(cursorText, { opacity: 0, scale: 0.5, duration: 0.2 });
                });
            });

            // Portfolio items entrance
            gsap.utils.toArray('.masonry-item').forEach((el, i) => {
                gsap.fromTo(el, 
                    { y: 50, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        },
                        y: 0, opacity: 1, duration: 0.8, ease: "power3.out"
                    }
                );
            });

            // 7. Initialize Particles
            if(document.getElementById('particles-js')) {
                particlesJS('particles-js', {
                    particles: {
                        number: { value: 60, density: { enable: true, value_area: 800 } },
                        color: { value: ["#FF5E00", "#FF1100", "#FFD500", "#ffffff"] },
                        shape: { type: "circle" },
                        opacity: { value: 0.3, random: true },
                        size: { value: 3, random: true },
                        line_linked: { enable: true, distance: 150, color: "#FF5E00", opacity: 0.1, width: 1 },
                        move: { enable: true, speed: 0.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: { 
                            onhover: { enable: true, mode: "grab" }, 
                            onclick: { enable: true, mode: "push" }, 
                            resize: true 
                        },
                        modes: { 
                            grab: { distance: 200, line_linked: { opacity: 0.3 } }, 
                            push: { particles_nb: 2 }, 
                        }
                    },
                    retina_detect: true
                });
            }
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
      

<div className="ambient-light">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
</div>

<div id="preloader">
<div className="flex flex-col items-center justify-center gap-6 text-center z-50">
<div className="relative">
<div className="text-[12rem] font-normal leading-none tracking-tighter text-white/5 relative z-10 font-sans">
<span id="counter">0</span>%
                </div>
<div className="absolute inset-0 bg-gradient-to-t from-luxota-bg via-transparent to-transparent z-20"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex items-center gap-3 text-xs font-mono text-luxota-accent uppercase tracking-[0.2em]">
<iconify-icon className="animate-spin text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
<span>Iniciando Experiência</span>
</div>
<div className="w-48 h-[1px] bg-white/10 mt-2 overflow-hidden rounded-full">
<div className="w-full h-full bg-gradient-to-r from-luxota-red via-luxota-accent to-luxota-yellow origin-left scale-x-0" id="loader-bar"></div>
</div>
</div>
</div>
</div>

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:flex">
<span className="cursor-text">Explorar</span>
</div>

<div className="noise"></div>

<nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none opacity-0 reveal-nav">
<div className="pointer-events-auto bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-[#0a0a0a]/80">
<a className="px-6 py-2.5 text-xs font-normal text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all" href="#servicos">Serviços</a>
<a className="px-6 py-2.5 text-xs font-normal text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all" href="#portfolio">Portfólio</a>
<a className="px-6 py-2.5 text-xs font-normal text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all" href="#cliente">Portal</a>
<div className="w-px h-4 bg-white/10 mx-2"></div>
<a className="group px-6 py-2.5 text-xs font-semibold text-white bg-luxota-accent rounded-full hover:bg-luxota-red transition-colors shadow-[0_0_20px_rgba(255,94,0,0.4)]" href="#contato">
                Iniciar Projeto <span className="hidden group-hover:inline-block ml-1 transition-all">→</span>
</a>
</div>
</nav>

<div className="fixed top-9 left-8 z-40 pointer-events-none opacity-0 reveal-nav">
<div className="text-sm font-normal tracking-tight text-white flex items-center gap-3">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxota-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-luxota-red to-luxota-yellow shadow-[0_0_15px_#FF5E00]"></span>
</div>
<span className="tracking-[0.2em] text-xs font-semibold uppercase">Creative</span>
</div>
</div>

<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden" id="inicio">
<div className="perspective-grid opacity-40"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-luxota-accent/10 rounded-full blur-[180px] pointer-events-none"></div>

<div className="absolute inset-0 -z-10" id="particles-js"></div>
<div className="relative z-10 text-center max-w-7xl px-6 pt-20">

<div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-luxota-accent/20 bg-[#0a0a0a]/50 backdrop-blur-md mb-10 opacity-0 reveal-hero-fade shadow-[0_0_20px_rgba(255,94,0,0.1)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxota-yellow opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-luxota-yellow shadow-[0_0_10px_#FFD500]"></span>
</span>
<span className="text-[10px] uppercase tracking-widest text-white/90 font-normal">Mais de 50 clientes impactados com resultados reais.</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tightest text-white leading-[0.9] mb-10">
<div className="overflow-hidden py-2"><span className="block reveal-text drop-shadow-2xl">A Agência Digital</span></div>
<div className="overflow-hidden flex justify-center gap-4 items-center flex-wrap py-2">
<span className="block reveal-text text-white/30 italic font-serif tracking-tight pr-4">para</span>
<span className="block reveal-text text-gradient-premium">Resultados Reais</span>
</div>
</h1>
<p className="text-lg md:text-xl text-luxota-dim max-w-2xl mx-auto leading-relaxed mb-14 font-light opacity-0 reveal-hero-fade translate-y-4">
                Unimos <strong className="text-white font-normal">Design Premium</strong>, estratégias de <strong className="text-white font-normal">Social Media</strong> e engenharia de <strong className="text-white font-normal">Tráfego Pago</strong> para escalar marcas visionárias no ambiente digital.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 opacity-0 reveal-hero-fade delay-200">
<a className="group relative px-9 py-4 bg-[#0a0a0a] text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 border border-white/10 hover:border-luxota-accent/50" href="#contato">
<div className="btn-glow"></div>
<span className="relative z-10 text-sm font-semibold flex items-center gap-2">
                        Iniciar o seu Projeto
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-luxota-red via-luxota-accent to-luxota-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
</a>
<a className="px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-normal text-sm hover:border-white/30 hover:shadow-lg" href="#portfolio">
                    Ver Portfólio
                </a>
</div>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 reveal-hero-fade delay-500 z-20">
<span className="text-[9px] text-white/30 tracking-[0.3em] uppercase">Scroll para explorar</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-luxota-accent/50 to-transparent"></div>
</div>
</section>

<section className="py-40 relative z-10 px-4 md:px-6" id="servicos">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-4 flex flex-col justify-center p-6 lg:sticky lg:top-32 self-start">
<div className="inline-flex items-center gap-3 mb-6">
<span className="relative flex h-2 w-2">
<span className="relative inline-flex rounded-full h-2 w-2 bg-luxota-red"></span>
</span>
<span className="text-xs text-luxota-accent font-mono tracking-[0.2em] uppercase">Nossa Expertise</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
                        Soluções de <br/>
<span className="text-transparent bg-clip-text bg-warm-gradient">Alta Performance.</span>
</h2>
<p className="text-luxota-dim text-base mb-10 leading-relaxed border-l border-white/10 pl-6 font-light">
                        Não entregamos apenas estética. Desenhamos ecossistemas digitais focados em retenção, conversão e autoridade de marca.
                    </p>
</div>

<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="spotlight-card rounded-[2rem] p-10 flex flex-col justify-between group cursor-none h-full min-h-[400px]">
<div className="absolute right-0 top-0 p-8 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:text-luxota-accent">
<iconify-icon className="text-[10rem] text-white" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 mb-6 shadow-xl backdrop-blur-md text-luxota-yellow">
<iconify-icon className="text-3xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-normal mb-3">Gestão de Tráfego Pago &amp; Social Media</h3>
<p className="text-sm text-luxota-dim font-light leading-relaxed">Campanhas hiper-segmentadas e gestão estratégica de comunidades. Transformamos audiência em receita previsível.</p>
</div>
<div className="relative w-full h-1.5 bg-white/5 rounded-full mt-10 overflow-hidden">
<div className="absolute inset-0 bg-luxota-accent/20"></div>
<div className="h-full bg-gradient-to-r from-luxota-red to-luxota-yellow w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1.5s] ease-expo"></div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="spotlight-card rounded-[2rem] p-8 flex flex-col justify-center group cursor-none min-h-[220px]">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#FF5E00 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="inline-flex p-2.5 rounded-xl bg-white/5 border border-white/10 text-luxota-accent">
<iconify-icon className="text-2xl" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white">Web Design</h3>
</div>
<p className="text-sm text-luxota-dim font-light leading-relaxed">Interfaces imersivas, otimizadas para conversão e desenvolvidas com tecnologia de ponta.</p>
</div>
</div>

<div className="spotlight-card rounded-[2rem] p-8 flex-1 min-h-[220px] flex flex-col justify-center group cursor-none">
<div className="absolute right-0 bottom-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity duration-700 text-luxota-red">
<iconify-icon className="text-[6rem]" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="inline-flex p-2.5 rounded-xl bg-white/5 border border-white/10 text-luxota-red">
<iconify-icon className="text-2xl" icon="solar:video-frame-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white">Design &amp; Motion</h3>
</div>
<p className="text-sm text-luxota-dim font-light leading-relaxed">Identidade visual marcante e animações dinâmicas (Motion Graphics) que captam a atenção em milissegundos.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="h-[70vh] flex items-center justify-center bg-[#050505] relative overflow-hidden z-20" id="narrative-section">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,94,0,0.08),transparent_60%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 text-center relative z-10">
<p className="text-3xl md:text-5xl lg:text-7xl font-light leading-tight tracking-tight text-white flex flex-wrap justify-center gap-x-4 gap-y-3" id="scrolly-text">
<span className="highlight-word opacity-20 blur-sm">O</span>
<span className="highlight-word opacity-20 blur-sm">mercado</span>
<span className="highlight-word opacity-20 blur-sm">ignora</span>
<span className="highlight-word opacity-20 blur-sm">o</span>
<span className="highlight-word opacity-20 blur-sm text-white font-normal">comum.</span>
<span className="highlight-word opacity-20 blur-sm">Nós</span>
<span className="highlight-word opacity-20 blur-sm">criamos</span>
<span className="highlight-word opacity-20 blur-sm text-transparent bg-clip-text bg-warm-gradient font-normal">experiências</span>
<span className="highlight-word opacity-20 blur-sm">que</span>
<span className="highlight-word opacity-20 blur-sm">sejam</span>
<span className="highlight-word opacity-20 blur-sm text-luxota-yellow italic font-serif">impossíveis</span>
<span className="highlight-word opacity-20 blur-sm">de</span>
<span className="highlight-word opacity-20 blur-sm">esquecer.</span>
</p>
</div>
</section>

<section className="py-32 relative z-30 bg-[#050505] border-t border-white/5" id="portfolio">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ 03 — CASOS DE SUCESSO ]</span>
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight">Nosso Portfólio Core</h2>
</div>
<a className="group inline-flex items-center gap-3 text-white text-sm font-normal hover:text-luxota-accent transition-colors" href="#">
<span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">Ver todos os projetos</span>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid relative rounded-3xl overflow-hidden group cursor-none masonry-item border border-white/10 bg-[#0a0a0a]">
<div className="aspect-[4/5] relative w-full bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000')] bg-cover bg-center">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-xs font-mono text-luxota-yellow mb-2 tracking-widest uppercase">E-Commerce Premium</div>
<h3 className="text-2xl font-normal text-white mb-2">Aura Fashion</h3>
<p className="text-sm text-luxota-dim font-light">UX/UI &amp; Gestão de Tráfego: +340% ROAS</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-3xl overflow-hidden group cursor-none masonry-item border border-white/10 bg-[#0a0a0a]">
<div className="aspect-[4/3] relative w-full bg-[url('https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&amp;w=1000')] bg-cover bg-center">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-xs font-mono text-luxota-red mb-2 tracking-widest uppercase">Motion &amp; Branding</div>
<h3 className="text-2xl font-normal text-white mb-2">Nexus Tech</h3>
<p className="text-sm text-luxota-dim font-light">Rebranding Global &amp; Campanha 3D</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-3xl overflow-hidden group cursor-none masonry-item border border-white/10 bg-[#0a0a0a]">
<div className="aspect-square relative w-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1000')] bg-cover bg-center">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-xs font-mono text-luxota-accent mb-2 tracking-widest uppercase">Social Media</div>
<h3 className="text-2xl font-normal text-white mb-2">Vanguard Motors</h3>
<p className="text-sm text-luxota-dim font-light">Estratégia de Conteúdo e Lançamento</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-3xl overflow-hidden group cursor-none masonry-item border border-white/10 bg-[#0a0a0a]">
<div className="aspect-[3/4] relative w-full bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=1000')] bg-cover bg-center">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-xs font-mono text-luxota-yellow mb-2 tracking-widest uppercase">Web Design</div>
<h3 className="text-2xl font-normal text-white mb-2">Lumina Health</h3>
<p className="text-sm text-luxota-dim font-light">Plataforma Interativa</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#050505] border-t border-white/5 relative z-20 overflow-hidden" id="cliente">
<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-luxota-red/10 rounded-full blur-[150px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-8">
<div>
<span className="text-xs text-luxota-accent font-mono mb-6 block tracking-widest">[ 04 — ÁREA DO CLIENTE ]</span>
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.1]">
                            Transparência Total. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Controle Absoluto.</span>
</h2>
</div>
<p className="text-luxota-dim text-base font-light leading-relaxed">
                        Esqueça os relatórios estáticos em PDF. Desenvolvemos um portal exclusivo onde você acompanha métricas de conversão, ajusta orçamentos e aprova criativos em tempo real.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
<iconify-icon className="text-luxota-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Métricas de ROAS ao vivo
                        </li>
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-luxota-red/10 flex items-center justify-center">
<iconify-icon className="text-luxota-red" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Aprovação de Design &amp; Motion
                        </li>
</ul>
</div>

<div className="lg:col-span-7 relative z-10">
<div className="spotlight-card border border-white/10 rounded-3xl p-8 bg-[#0a0a0a]/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden">

<div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxota-accent to-luxota-yellow p-0.5">
<div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:user-bold"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-normal">Dashboard Executivo</h4>
<p className="text-xs text-luxota-dim">Campanha Q3 - Ativa</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-luxota-dim mb-1">Conversões (Mensal)</p>
<p className="text-2xl text-luxota-yellow font-mono tracking-tighter">4,892 <span className="text-xs text-green-400">↑ 24%</span></p>
</div>
</div>

<div className="mb-10 relative">
<div className="absolute inset-0 bg-gradient-to-t from-luxota-accent/10 to-transparent rounded-xl"></div>
<svg className="w-full h-32 overflow-visible" preserveaspectratio="none" viewbox="0 0 400 100">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#FF1100"></stop>
<stop offset="50%" stop-color="#FF5E00"></stop>
<stop offset="100%" stop-color="#FFD500"></stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M0,80 Q50,90 100,50 T200,60 T300,20 T400,10" fill="none" filter="url(#glow)" stroke="url(#lineGrad)" strokeWidth="3"></path>
<circle className="animate-pulse" cx="400" cy="10" fill="#FFD500" r="4"></circle>
</svg>

<div className="absolute inset-0 border-b border-l border-white/5 pointer-events-none flex flex-col justify-between py-2">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<p className="text-xs font-mono text-luxota-dim uppercase">Ajustes da Campanha</p>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-white/80 group-hover:text-white transition-colors">Notificações Diárias</span>
<div className="relative">
<input checked="" className="sr-only toggle-checkbox" type="checkbox"/>
<div className="block bg-white/10 w-10 h-6 rounded-full border border-white/5 transition-colors toggle-label">
<div className="toggle-dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform"></div>
</div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-white/80 group-hover:text-white transition-colors">Escalar Orçamento (Auto)</span>
<div className="relative">
<input className="sr-only toggle-checkbox" type="checkbox"/>
<div className="block bg-white/10 w-10 h-6 rounded-full border border-white/5 transition-colors toggle-label">
<div className="toggle-dot absolute left-1 top-1 bg-white/60 w-4 h-4 rounded-full transition-transform"></div>
</div>
</div>
</label>
</div>
<div className="space-y-4">
<p className="text-xs font-mono text-luxota-dim uppercase">Budget Diário</p>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-luxota-dim">€</span>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg py-3 pl-8 pr-4 text-sm text-white focus:border-luxota-accent outline-none transition-colors shadow-inner font-mono" type="text" value="1,500.00"/>
</div>
<button className="w-full py-3 bg-white/5 hover:bg-luxota-accent/10 border border-white/10 hover:border-luxota-accent text-white text-xs rounded-lg transition-all font-normal">
                                    Atualizar Preferências
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative z-30 bg-[#050505]" id="architecture-wrapper">
<section className="hidden lg:block h-screen relative border-t border-white/5" id="architecture-pin">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,17,0,0.05),transparent_50%)] pointer-events-none"></div>
<div className="h-full w-full overflow-hidden flex flex-col justify-center">
<div className="absolute top-16 left-0 w-full px-12 flex justify-between items-end z-20">
<div>
<span className="text-xs text-luxota-accent font-mono mb-3 block tracking-widest">[ 05 — HUB DE CONHECIMENTO ]</span>
<h2 className="text-4xl font-normal text-white tracking-tight">Insights &amp; Motivação</h2>
</div>
<div className="flex items-center gap-3 text-white/30">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon className="animate-bounce text-lg" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-mono tracking-widest">SCROLL</span>
</div>
</div>
<div className="flex gap-16 px-24 pl-[20vw] items-center h-full w-max" id="cards-track">

<div className="w-[60vw] max-w-[800px] h-[55vh] spotlight-card rounded-[2.5rem] p-12 shrink-0 relative flex flex-col justify-end overflow-hidden border border-white/10 bg-[#0a0a0a] group cursor-none">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1000')] bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
<div className="relative z-10 w-3/4">
<div className="inline-flex px-3 py-1 rounded-full border border-luxota-accent/30 bg-luxota-accent/10 text-luxota-accent text-xs font-mono mb-6">Tendências 2025</div>
<h3 className="text-4xl text-white font-normal mb-4 tracking-tight leading-tight">Como o Algoritmo do TikTok está a redefinir o E-commerce.</h3>
<p className="text-base text-luxota-dim font-light">Leitura de 5 min</p>
</div>
</div>

<div className="w-[60vw] max-w-[800px] h-[55vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex items-center justify-center overflow-hidden border border-white/10 bg-[#050505]">
<div className="absolute right-10 top-10 text-luxota-dim/10">
<iconify-icon className="text-[10rem]" icon="solar:quote-right-bold"></iconify-icon>
</div>
<div className="relative z-10 text-center max-w-2xl">
<p className="text-3xl text-white/90 font-serif italic leading-relaxed mb-8">
                                "Design não é apenas o que parece e o que se sente. Design é como funciona."
                            </p>
<div className="text-sm font-mono text-luxota-accent uppercase tracking-widest">— Steve Jobs</div>
</div>
</div>

<div className="w-[60vw] max-w-[800px] h-[55vh] spotlight-card rounded-[2.5rem] p-12 shrink-0 relative flex flex-col justify-end overflow-hidden border border-white/10 bg-[#0a0a0a] group cursor-none">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000')] bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
<div className="relative z-10 w-3/4">
<div className="inline-flex px-3 py-1 rounded-full border border-luxota-red/30 bg-luxota-red/10 text-luxota-red text-xs font-mono mb-6">Design System</div>
<h3 className="text-4xl text-white font-normal mb-4 tracking-tight leading-tight">Por que Interfaces 'Headless' são o futuro da Conversão.</h3>
<p className="text-base text-luxota-dim font-light">Leitura de 8 min</p>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="block lg:hidden px-6 py-20 space-y-8 bg-[#050505] border-t border-white/5">
<span className="text-xs text-luxota-accent font-mono mb-2 block tracking-widest">[ 05 — HUB ]</span>
<div className="spotlight-card rounded-3xl p-8 border border-white/10 bg-[#0a0a0a]">
<h3 className="text-2xl text-white font-normal mb-2">Algoritmos &amp; E-commerce</h3>
<p className="text-sm text-luxota-dim">Leitura de 5 min</p>
</div>
<div className="spotlight-card rounded-3xl p-8 border border-white/10 text-center">
<p className="text-lg text-white/90 font-serif italic mb-4">"Design é como funciona."</p>
<p className="text-xs text-luxota-accent font-mono">— Steve Jobs</p>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#050505] border-t border-white/5" id="contato">
<div className="absolute inset-0 bg-gradient-to-t from-luxota-accent/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-8">
                Pronto para <br/>
<span className="text-transparent bg-clip-text bg-warm-gradient italic font-serif">escalar?</span>
</h2>
<p className="text-lg text-luxota-dim max-w-xl mx-auto font-light leading-relaxed mb-12">
                Preencha o formulário abaixo. Nossa equipe de estrategistas analisará seu cenário digital e agendará uma sessão de diagnóstico de alto nível.
            </p>
<form className="space-y-4 max-w-md mx-auto text-left">
<div className="space-y-4">
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-luxota-accent outline-none transition-colors shadow-inner" placeholder="Seu Nome ou Empresa" type="text"/>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-luxota-accent outline-none transition-colors shadow-inner" placeholder="E-mail Corporativo" type="email"/>
<select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-sm text-white/70 focus:border-luxota-accent outline-none transition-colors shadow-inner appearance-none cursor-pointer">
<option disabled="" selected="" value="">Qual seu principal objetivo?</option>
<option value="trafego">Gestão de Tráfego &amp; Vendas</option>
<option value="web">Web Design &amp; Lojas Virtuais</option>
<option value="social">Social Media &amp; Branding</option>
</select>
</div>
<button className="group relative w-full bg-white text-[#050505] py-4 rounded-xl font-semibold text-sm overflow-hidden transition-transform hover:scale-[1.02] mt-4" type="button">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Solicitar Diagnóstico
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-luxota-yellow via-luxota-accent to-luxota-red translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
</button>
</form>
</div>
</section>

<footer className="relative py-24 px-6 border-t border-white/5 bg-[#020203] overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-luxota-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

<div className="absolute bottom-[-5%] left-0 right-0 select-none pointer-events-none flex justify-center opacity-[0.02]">
<h1 className="text-[16vw] font-semibold text-white tracking-tighter leading-none uppercase">Creative</h1>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 mb-24">

<div className="md:col-span-2">
<div className="text-sm font-normal tracking-tight text-white flex items-center gap-3 mb-6">
<div className="w-3 h-3 rounded-full bg-gradient-to-r from-luxota-red to-luxota-yellow shadow-[0_0_15px_#FF5E00]"></div>
<span className="tracking-[0.2em] text-xs font-semibold uppercase">Creative Agency</span>
</div>
<p className="text-sm text-luxota-dim font-light leading-relaxed max-w-sm mb-8">
                        Elevando marcas globais com design de alta performance e engenharia de tráfego. Junte-se aos líderes.
                    </p>

<div className="relative max-w-sm">
<input className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-xs text-white focus:border-luxota-accent outline-none transition-colors" placeholder="Assine nossa Newsletter" type="email"/>
<button className="absolute right-1 top-1 bottom-1 w-10 rounded-full bg-luxota-accent flex items-center justify-center text-white hover:bg-luxota-red transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div>
<h4 className="text-white font-normal mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Agência</h4>
<ul className="space-y-5 text-sm text-luxota-dim font-light">
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#servicos"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Serviços</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#portfolio"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Portfólio</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#cliente"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Área do Cliente</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-normal mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Social</h4>
<ul className="space-y-5 text-sm text-luxota-dim font-light">
<li><a className="hover:text-luxota-accent transition-colors duration-300 flex items-center gap-2" href="#">Instagram <iconify-icon className="text-xs opacity-50" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-luxota-accent transition-colors duration-300 flex items-center gap-2" href="#">LinkedIn <iconify-icon className="text-xs opacity-50" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-luxota-accent transition-colors duration-300 flex items-center gap-2" href="#">Behance <iconify-icon className="text-xs opacity-50" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-luxota-accent transition-colors duration-300 flex items-center gap-2" href="#">Dribbble <iconify-icon className="text-xs opacity-50" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-luxota-dim/60 font-mono tracking-wider gap-4">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-luxota-accent animate-pulse"></span>
<span className="uppercase">Sistemas Operacionais 100% Funcionais</span>
</div>
<div>© 2026 Creative Agency. All rights reserved.</div>
</div>
</div>
</footer>


    </>
  );
}
