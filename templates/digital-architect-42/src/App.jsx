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
},
colors: {
background: '#020202',
surface: '#080808',
border: '#1A1A1A',
primary: '#EDEDED',
secondary: '#999999',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'blob': 'blob 7s infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' }
}
}
}
}
}



        // 1. Initialize Lenis (Faster scroll settings)
        const lenis = new Lenis({
            duration: 0.8, // Faster response
            easing: (t) => 1 - Math.pow(1 - t, 3), // Stronger easeOut
            direction: 'vertical',
            smooth: true,
            touchMultiplier: 2.5, // Faster on touch
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Connect Lenis to ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // 2. Navigation Active State
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(current)) {
                    link.classList.add("active");
                }
            });
        });

        // 3. Hero Animations
        const revealItems = document.querySelectorAll('.reveal-item');
        gsap.fromTo(revealItems, 
            { y: 60, opacity: 0, scale: 0.95 }, 
            { 
                y: 0, 
                opacity: 1, 
                scale: 1,
                duration: 1, 
                stagger: 0.15, 
                ease: "power3.out",
                delay: 0.2
            }
        );

        // 4. Horizontal Scroll (Optimized)
        let mm = gsap.matchMedia();
        const track = document.querySelector('.services-track');
        const serviceSection = document.querySelector('.services-wrapper');

        mm.add("(min-width: 768px)", () => {
            gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth + 100),
                ease: "none",
                scrollTrigger: {
                    trigger: serviceSection,
                    pin: true,
                    scrub: 0.5, // Faster scrub
                    end: () => "+=" + (track.scrollWidth * 0.8), // Shorter scroll distance needed
                    invalidateOnRefresh: true,
                }
            });
        });

        // Mobile fallback for services
        mm.add("(max-width: 767px)", () => {
             track.style.flexDirection = 'column';
             track.style.height = 'auto';
             track.style.paddingTop = '120px';
             track.style.paddingBottom = '50px';
             serviceSection.style.height = 'auto';
             serviceSection.classList.remove('h-screen', 'sticky', 'top-0');
             
             // Simple fade up for cards
             gsap.utils.toArray('.spotlight-card').forEach(card => {
                gsap.from(card, {
                    scrollTrigger: { trigger: card, start: "top 85%" },
                    y: 50, opacity: 0, duration: 0.6
                })
             });
        });

        // 5. Spotlight Effect
        document.querySelectorAll('.spotlight-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // 6. Project Parallax Effect
        gsap.utils.toArray('#projects .spotlight-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                },
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-auto">
<div className="glass-panel rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl shadow-black/80">

<a className="px-4 py-2 rounded-full hover:bg-white/5 transition-colors flex items-center gap-2 group" href="#">
<div className="w-2 h-2 rounded-full bg-white group-hover:animate-pulse"></div>
<span className="font-bold tracking-tighter text-sm">JIN</span>
</a>

<div className="w-px h-4 bg-white/10 mx-1"></div>

<div className="flex items-center gap-1">
<a className="nav-link px-4 py-2 text-xs font-medium text-secondary rounded-full hover:text-white hover:bg-white/5 transition-all" href="#about">Обо мне</a>
<a className="nav-link px-4 py-2 text-xs font-medium text-secondary rounded-full hover:text-white hover:bg-white/5 transition-all" href="#services">Услуги</a>
<a className="nav-link px-4 py-2 text-xs font-medium text-secondary rounded-full hover:text-white hover:bg-white/5 transition-all" href="#projects">Проекты</a>
</div>

<a className="ml-1 px-4 py-2 bg-white text-black rounded-full text-xs font-semibold hover:scale-105 active:scale-95 transition-transform flex items-center gap-2" href="#contact">
                Let's Talk
                <span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</a>
</div>
</nav>
<main className="relative z-10">

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden" id="about">

<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
<div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-blob pointer-events-none"></div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">

<div className="mb-8 opacity-0 reveal-item">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-white/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-widest text-secondary">Open to work</span>
</div>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-white mb-8 opacity-0 reveal-item mix-blend-overlay">
                    DIGITAL<br/>
<span className="text-gradient opacity-80">ARCHITECT</span>
</h1>
<p className="text-secondary text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-10 opacity-0 reveal-item text-center">
                    Превращаю сложные идеи в элегантный код. Специализируюсь на интерактивном вебе, высоконагруженных ботах и иммерсивном дизайне.
                </p>
<div className="flex gap-4 opacity-0 reveal-item">
<a className="group relative px-8 py-3 bg-white text-black rounded-full font-medium text-sm overflow-hidden hover:scale-105 transition-transform duration-300" href="#projects">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
<span className="relative flex items-center gap-2">
                            Смотреть проекты
                            <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</span>
</a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 reveal-item animate-bounce">
<span className="iconify text-secondary/50" data-icon="lucide:mouse" data-width="24"></span>
</div>
</section>

<section className="relative bg-black z-20 overflow-hidden" id="services">
<div className="services-wrapper h-screen w-full flex items-center sticky top-0 overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="services-header absolute top-24 left-6 md:left-24 z-10 mix-blend-difference">
<h2 className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
<span className="w-8 h-px bg-secondary"></span> Expertise
                    </h2>
<h3 className="text-5xl md:text-6xl font-medium tracking-tighter text-white">Мой стек</h3>
</div>
<div className="services-track flex gap-8 px-6 md:px-24 w-max items-center h-full pt-20">

<div className="spotlight-card group relative w-[85vw] md:w-[500px] aspect-[4/5] md:aspect-square rounded-3xl glass-panel p-10 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
<div className="spotlight-border"></div>
<div className="relative z-10">
<span className="iconify text-white/80 mb-6 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:layers" data-width="48"></span>
<h4 className="text-3xl font-medium tracking-tight text-white mb-4">Web Development</h4>
<p className="text-secondary font-light leading-relaxed">Создание быстрых, SEO-оптимизированных SPA и Landing Page с использованием передовых технологий.</p>
</div>
<div className="relative z-10 flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-secondary bg-white/5 backdrop-blur-sm">React</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-secondary bg-white/5 backdrop-blur-sm">Next.js 14</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-secondary bg-white/5 backdrop-blur-sm">GSAP</span>
</div>
</div>

<div className="spotlight-card group relative w-[85vw] md:w-[500px] aspect-[4/5] md:aspect-square rounded-3xl glass-panel p-10 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
<div className="spotlight-border"></div>
<div className="relative z-10">
<span className="iconify text-white/80 mb-6 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:bot" data-width="48"></span>
<h4 className="text-3xl font-medium tracking-tight text-white mb-4">Telegram Bots</h4>
<p className="text-secondary font-light leading-relaxed">Разработка сложных экосистем внутри Telegram. WebApps, платежи, интеграции с AI.</p>
</div>
<div className="relative z-10 flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-secondary bg-white/5 backdrop-blur-sm">Python</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-secondary bg-white/5 backdrop-blur-sm">Aiogram</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-secondary bg-white/5 backdrop-blur-sm">Postgres</span>
</div>
</div>

<div className="spotlight-card group relative w-[85vw] md:w-[500px] aspect-[4/5] md:aspect-square rounded-3xl glass-panel p-10 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
<div className="spotlight-border"></div>
<div className="relative z-10">
<span className="iconify text-white/80 mb-6 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:palette" data-width="48"></span>
<h4 className="text-3xl font-medium tracking-tight text-white mb-4">Product Design</h4>
<p className="text-secondary font-light leading-relaxed">UI/UX, который продает. Прототипирование, дизайн-системы и визуальная иерархия.</p>
</div>
<div className="relative z-10 flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-secondary bg-white/5 backdrop-blur-sm">Figma</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-secondary bg-white/5 backdrop-blur-sm">Spline 3D</span>
</div>
</div>

<div className="spotlight-card group relative w-[85vw] md:w-[500px] aspect-[4/5] md:aspect-square rounded-3xl glass-panel p-10 flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-500 text-center cursor-pointer">
<div className="spotlight-border"></div>
<div className="relative z-10">
<h4 className="text-5xl font-medium tracking-tighter text-white mb-2">15+</h4>
<p className="text-secondary font-light">Успешных проектов</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 md:px-8 bg-black relative z-20" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-20">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
                        Selected<br/><span className="text-secondary opacity-50">Works</span>
</h2>
<a className="hidden md:flex items-center gap-2 text-sm font-medium border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">
                        All Projects <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="spotlight-card group rounded-3xl bg-surface border border-white/5 overflow-hidden cursor-pointer h-[500px] md:h-[600px] flex flex-col">
<div className="spotlight-border"></div>
<div className="p-8 md:p-10 relative z-20">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono uppercase text-secondary tracking-widest">Fintech</span>
<span className="iconify -rotate-45 group-hover:rotate-0 transition-transform duration-300" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
<h3 className="text-3xl font-medium text-white mb-2">Nova Bank App</h3>
<p className="text-secondary text-sm line-clamp-2">Мобильный банкинг нового поколения с интеграцией криптовалют.</p>
</div>
<div className="mt-auto relative w-full h-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 h-20 bottom-0"></div>

<div className="w-[80%] h-[120%] bg-gradient-to-br from-[#2a2a2a] to-[#111] border-t border-l border-white/10 rounded-tl-3xl ml-auto translate-y-10 translate-x-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700 shadow-2xl">
<div className="p-6">
<div className="w-full h-8 bg-white/5 rounded-full mb-4"></div>
<div className="w-2/3 h-4 bg-white/5 rounded-full mb-8"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-32 bg-indigo-500/10 rounded-2xl border border-indigo-500/20"></div>
<div className="h-32 bg-purple-500/10 rounded-2xl border border-purple-500/20"></div>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card group rounded-3xl bg-surface border border-white/5 overflow-hidden cursor-pointer h-[500px] md:h-[600px] flex flex-col md:translate-y-24">
<div className="spotlight-border"></div>
<div className="p-8 md:p-10 relative z-20">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono uppercase text-secondary tracking-widest">E-commerce</span>
<span className="iconify -rotate-45 group-hover:rotate-0 transition-transform duration-300" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
<h3 className="text-3xl font-medium text-white mb-2">Lumina Store</h3>
<p className="text-secondary text-sm line-clamp-2">Интернет-магазин премиум освещения с 3D конфигуратором.</p>
</div>
<div className="mt-auto relative w-full h-full overflow-hidden flex justify-center">
<div className="w-[90%] h-[90%] bg-gradient-to-b from-[#1a1a1a] to-[#050505] border border-white/10 rounded-t-3xl translate-y-10 group-hover:translate-y-6 transition-transform duration-700 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"></div>
<div className="p-6 flex flex-col gap-4">
<div className="flex gap-4">
<div className="w-1/3 aspect-square bg-white/5 rounded-lg"></div>
<div className="w-2/3 flex flex-col gap-2">
<div className="h-4 bg-white/10 rounded w-full"></div>
<div className="h-4 bg-white/5 rounded w-1/2"></div>
</div>
</div>
<div className="h-32 bg-white/5 rounded-xl border border-white/5"></div>
</div>
</div>
</div>
</div>
</div>

<div className="h-24 hidden md:block"></div>
</div>
</section>

<section className="py-32 px-6 bg-background relative z-20 border-t border-white/5" id="contact">
<div className="max-w-4xl mx-auto text-center relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-8 relative z-10">
                    Let's work<br/>together.
                </h2>
<p className="text-secondary text-lg mb-12 max-w-lg mx-auto relative z-10 font-light">
                    Ищете надежного партнера для реализации цифрового продукта? Напишите мне, и мы обсудим детали.
                </p>
<div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 bg-white text-black rounded-full font-semibold text-sm hover:scale-105 transition-transform w-full sm:w-auto flex justify-center items-center gap-2" href="mailto:hello@jin.com">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                        hello@jin.com
                    </a>
<a className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/5 transition-colors w-full sm:w-auto flex justify-center items-center gap-2" href="#">
<span className="iconify" data-icon="lucide:send" data-width="16"></span>
                        Telegram
                    </a>
</div>
<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/50 font-mono gap-4">
<p>© 2024 JIN. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
