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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
colors: {
navy: '#050D1A',
royal: '#0B3D91',
electric: '#2979FF',
glow: '#1565C0',
silver: '#A8AAAD',
snow: '#F2F2F2'
},
fontFamily: {
display: ['"Barlow Condensed"', 'sans-serif'],
body: ['"Inter"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace']
},
transitionTimingFunction: {
'golden': 'cubic-bezier(0.4, 0, 0.2, 1)',
'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
},
animation: {
'float': 'float 6s ease-in-out infinite',
'ticker': 'ticker 20s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) scale(1)' },
'50%': { transform: 'translateY(-20px) scale(1.05)' },
},
ticker: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Cursor Glow
            const cursor = document.getElementById('cursor-glow');
            let mouseX = 0, mouseY = 0;
            if(window.innerWidth > 1024 && cursor) {
                document.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    requestAnimationFrame(() => {
                        cursor.style.transform = `translate(${mouseX - 200}px, ${mouseY - 200}px)`;
                    });
                }, {passive: true});
            }

            // 2. Scroll Parallax & Header Glassmorphism
            const header = document.getElementById('main-header');
            const tagline = document.getElementById('header-tagline');
            const heroImg = document.getElementById('hero-img');
            const heroText = document.getElementById('hero-bg-text');

            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                
                // Header Glassmorphism formula: bg rgba(5,13,26,0.72) + blur(20px)
                if (scrollY > 50) {
                    header.style.backgroundColor = 'rgba(5, 13, 26, 0.72)';
                    header.style.backdropFilter = 'blur(20px)';
                    header.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
                    if(tagline) tagline.style.opacity = '0';
                } else {
                    header.style.backgroundColor = 'transparent';
                    header.style.backdropFilter = 'blur(0px)';
                    header.style.borderBottomColor = 'transparent';
                    if(tagline && window.innerWidth >= 768) tagline.style.opacity = '1';
                }

                // Parallax rules
                requestAnimationFrame(() => {
                    if (heroImg) heroImg.style.transform = `translateY(${scrollY * 0.3}px)`;
                    if (heroText) heroText.style.transform = `translate(-50%, calc(-50% + ${scrollY * -0.1}px))`;
                });
            }, { passive: true });

            // 3. Intersection Observer (Reveal & Counters)
            const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Entrance Animation
                        entry.target.classList.add('active');
                        
                        // Counters
                        if (entry.target.classList.contains('counter-trigger')) {
                            const counters = entry.target.querySelectorAll('.counter');
                            counters.forEach(c => {
                                const target = +c.getAttribute('data-target');
                                const suffix = c.getAttribute('data-suffix') || '';
                                const duration = 2000;
                                const step = target / (duration / 16);
                                let current = 0;
                                
                                const update = () => {
                                    current += step;
                                    if (current < target) {
                                        c.innerText = Math.ceil(current) + suffix;
                                        requestAnimationFrame(update);
                                    } else {
                                        c.innerText = target + suffix;
                                    }
                                };
                                update();
                            });
                            entry.target.classList.remove('counter-trigger'); // Run once
                        }
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .counter-trigger').forEach(el => observer.observe(el));

            // 4. FAQ Accordion with Glassmorphism state
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const btn = item.querySelector('.faq-btn');
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.faq-icon');

                btn.addEventListener('click', () => {
                    const isOpen = item.classList.contains('is-open');
                    
                    // Close all
                    faqItems.forEach(i => {
                        i.classList.remove('is-open', 'glass-panel');
                        i.classList.add('bg-white/[0.02]', 'border-white/10');
                        i.querySelector('.faq-content').style.height = '0px';
                        i.querySelector('.faq-content').style.opacity = '0';
                        i.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
                    });

                    // Open clicked if it was closed
                    if (!isOpen) {
                        item.classList.add('is-open', 'glass-panel'); // Apply glassmorphism
                        item.classList.remove('bg-white/[0.02]', 'border-white/10');
                        
                        const innerHeight = content.scrollHeight;
                        content.style.height = `${innerHeight}px`;
                        content.style.opacity = '1';
                        icon.style.transform = 'rotate(45deg)';
                    }
                });
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
      

<div className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-electric/15 blur-[100px] pointer-events-none mix-blend-screen z-50 transition-transform duration-100 ease-out hidden lg:block" id="cursor-glow" style={{transform: 'translate(-50%, -50%)'}}></div>

<div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] bg-glow/20 rounded-full blur-[150px] animate-float pointer-events-none mix-blend-screen z-0"></div>

<header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b border-transparent py-4 px-6 lg:px-12" id="main-header">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<a className="group flex flex-col z-50" href="#">
<span className="font-display font-semibold text-2xl tracking-tighter leading-none text-white group-hover:text-electric transition-colors duration-300">LP</span>
<span className="font-mono text-[0.65rem] tracking-[0.2em] text-silver mt-1">LUCAS PRADO</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-silver hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-electric hover:after:w-full after:transition-all after:duration-300" href="#metodo">Método</a>
<a className="text-sm font-medium text-silver hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-electric hover:after:w-full after:transition-all after:duration-300" href="#resultados">Resultados</a>
<a className="text-sm font-medium text-silver hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-electric hover:after:w-full after:transition-all after:duration-300" href="#modalidades">Modalidades</a>
<a className="text-sm font-medium text-silver hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-electric hover:after:w-full after:transition-all after:duration-300" href="#sobre">Sobre</a>
</nav>

<a className="hidden md:inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono tracking-widest px-6 py-3 rounded-none transition-all duration-300 hover:border-electric/50" href="#contato">
                FALAR NO WHATSAPP
            </a>

<button className="md:hidden text-white z-50">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="absolute -bottom-8 left-0 w-full flex justify-center opacity-0 md:opacity-100 pointer-events-none transition-opacity duration-300" id="header-tagline">
<span className="font-mono text-xs text-silver/60 tracking-widest backdrop-blur-sm bg-navy/50 px-4 py-1 rounded-full border border-white/5">Personal Trainer · Presencial &amp; Online · @teamlucasprado</span>
</div>
</header>

<main className="relative z-10">

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden border-b border-white/5">

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-semibold text-[15rem] lg:text-[25rem] leading-none text-royal/20 tracking-tighter whitespace-nowrap select-none pointer-events-none mix-blend-color-dodge w-full text-center" id="hero-bg-text">
                LUCAS PRADO
            </div>

<div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-30 lg:opacity-60 mask-image:linear-gradient(to_left,black,transparent) z-0" id="hero-img-container">
<div className="w-full h-[120%] bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-luminosity" id="hero-img"></div>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-navy/80 lg:to-navy"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row items-center">
<div className="w-full lg:w-3/5 space-y-8">
<div className="space-y-2 reveal reveal-up">

<div className="flex items-center gap-3 font-mono text-xs text-electric tracking-widest">
<span className="w-8 h-[1px] bg-electric"></span>
                            RESULTADO SEM FRESCURA
                        </div>
<h1 className="font-display font-semibold text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.85] uppercase break-words">
<span className="block reveal reveal-up" style={{transitionDelay: '100ms'}}>Sem frescura.</span>
<span className="block text-silver reveal reveal-up" style={{transitionDelay: '200ms'}}>Sem enrolação.</span>
<span className="block text-electric reveal reveal-up" style={{transitionDelay: '300ms'}}>Só resultado.</span>
</h1>
</div>
<p className="font-body text-lg text-silver max-w-xl leading-relaxed reveal reveal-up" style={{transitionDelay: '400ms'}}>
<strong className="text-white font-medium">Treino simples, descomplicado e com método testado em alunos reais.</strong><br/>
                        Não importa se você quer emagrecer, ganhar massa ou simplesmente se sentir bem. O caminho existe — e é mais direto do que te fizeram acreditar.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 reveal reveal-scale" style={{transitionDelay: '500ms'}}>
<a className="btn-glow group relative inline-flex items-center justify-center gap-3 bg-electric text-white font-body font-medium text-sm px-8 py-4 overflow-hidden transition-golden" href="https://instagram.com/teamlucasprado" target="_blank">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 flex items-center gap-2">
                                SEGUIR NO INSTAGRAM
                                <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</span>
</a>
<a className="group relative inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white hover:text-electric hover:border-electric font-body font-medium text-sm px-8 py-4 transition-colors duration-300" href="#contato">
                            QUERO COMEÇAR
                        </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full hidden md:block z-20">
<div className="max-w-7xl mx-auto px-6 lg:px-12 translate-y-1/2">
<div className="glass-panel grid grid-cols-4 divide-x divide-white/10 p-6 reveal reveal-up" style={{transitionDelay: '700ms'}}>
<div className="px-6">
<p className="font-mono text-[0.65rem] text-silver tracking-widest uppercase mb-1">Modalidades</p>
<p className="font-display font-semibold text-xl tracking-tight text-white uppercase">Presencial · Online · A domicílio</p>
</div>
<div className="px-6">
<p className="font-mono text-[0.65rem] text-silver tracking-widest uppercase mb-1">Especialidades</p>
<p className="font-display font-semibold text-xl tracking-tight text-white uppercase">5 Áreas</p>
</div>
<div className="px-6">
<p className="font-mono text-[0.65rem] text-silver tracking-widest uppercase mb-1">Atendimento</p>
<p className="font-display font-semibold text-xl tracking-tight text-white uppercase">Personalizado</p>
</div>
<div className="px-6">
<p className="font-mono text-[0.65rem] text-silver tracking-widest uppercase mb-1">Método</p>
<p className="font-display font-semibold text-xl tracking-tight text-white uppercase">Testado e Aprovado</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:hidden border-b border-white/5 bg-white/[0.02] py-8">
<div className="grid grid-cols-2 gap-y-8 px-6 reveal counter-trigger">
<div className="text-center">
<span className="block font-display font-semibold text-4xl text-electric tracking-tight"><span className="counter" data-suffix="+" data-target="200">0</span></span>
<span className="font-mono text-xs text-silver tracking-widest uppercase">Alunos</span>
</div>
<div className="text-center">
<span className="block font-display font-semibold text-4xl text-white tracking-tight"><span className="counter" data-target="5">0</span></span>
<span className="font-mono text-xs text-silver tracking-widest uppercase">Focos</span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative border-b border-white/5" id="sobre">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 reveal reveal-right">
<iconify-icon className="text-electric" icon="solar:target-linear" width="16"></iconify-icon>
<span className="font-mono text-xs text-electric tracking-widest uppercase">Para quem é</span>
</div>
<h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.9]">
<span className="block reveal reveal-up">Você não</span>
<span className="block text-silver reveal reveal-up" style={{transitionDelay: '100ms'}}>Precisa de</span>
<span className="block text-electric reveal reveal-up" style={{transitionDelay: '200ms'}}>Complicação.</span>
</h2>
<p className="font-body text-base text-silver leading-relaxed max-w-md reveal reveal-up" style={{transitionDelay: '300ms'}}>
                            A maioria das pessoas já tentou. Desistiu porque o processo era cansativo, confuso ou sem resultado visível. Aqui é diferente — o método é simples porque foi construído para funcionar de verdade.
                        </p>
<ul className="space-y-4 pt-4 reveal reveal-up" style={{transitionDelay: '400ms'}}>
<li className="flex items-start gap-3">
<iconify-icon className="text-electric shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-body text-sm text-silver"><strong className="text-white font-medium">Emagrecer</strong> sem dietas mirabolantes e sem passar fome</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-electric shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-body text-sm text-silver">Busca <strong className="text-white font-medium">hipertrofia</strong> com treino estruturado e progressivo</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-electric shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-body text-sm text-silver">Precisa de <strong className="text-white font-medium">condicionamento</strong> para ter mais energia</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-electric shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-body text-sm text-silver">Acompanhamento que respeita o <strong className="text-white font-medium">corpo feminino</strong></span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-electric shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-body text-sm text-silver">Treino seguro, funcional e adaptado para <strong className="text-white font-medium">idosos</strong></span>
</li>
</ul>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-max">

<div className="bg-white/[0.02] border border-white/10 p-6 card-hover reveal reveal-up" style={{transitionDelay: '150ms'}}>
<iconify-icon className="text-electric mb-4" icon="solar:fire-linear" width="28"></iconify-icon>
<h3 className="font-display font-semibold text-2xl tracking-tight text-white uppercase mb-2">Emagrecimento</h3>
<p className="font-body text-xs text-silver leading-relaxed">Déficit calórico inteligente + treino que acelera o metabolismo</p>
</div>
<div className="bg-white/[0.02] border border-white/10 p-6 card-hover reveal reveal-up" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-electric mb-4" icon="solar:dumbbell-linear" width="28"></iconify-icon>
<h3 className="font-display font-semibold text-2xl tracking-tight text-white uppercase mb-2">Hipertrofia</h3>
<p className="font-body text-xs text-silver leading-relaxed">Periodização progressiva para ganho de massa real</p>
</div>
<div className="bg-white/[0.02] border border-white/10 p-6 card-hover reveal reveal-up" style={{transitionDelay: '450ms'}}>
<iconify-icon className="text-electric mb-4" icon="solar:heart-pulse-linear" width="28"></iconify-icon>
<h3 className="font-display font-semibold text-2xl tracking-tight text-white uppercase mb-2">Condicionamento</h3>
<p className="font-body text-xs text-silver leading-relaxed">Capacidade cardiovascular e resistência sem sacrifício</p>
</div>
<div className="bg-white/[0.02] border border-white/10 p-6 card-hover reveal reveal-up" style={{transitionDelay: '600ms'}}>
<iconify-icon className="text-electric mb-4" icon="solar:shield-user-linear" width="28"></iconify-icon>
<h3 className="font-display font-semibold text-2xl tracking-tight text-white uppercase mb-2">Idosos &amp; Feminino</h3>
<p className="font-body text-xs text-silver leading-relaxed">Adaptação total às fases, objetivos e limitações com segurança.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative bg-navy border-b border-white/5" id="metodo">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center mb-16">
<div className="inline-flex items-center justify-center gap-2 reveal reveal-up">
<iconify-icon className="text-electric" icon="solar:ruler-pen-linear" width="16"></iconify-icon>
<span className="font-mono text-xs text-electric tracking-widest uppercase">Como funciona</span>
</div>
<h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.9] mt-6 max-w-3xl mx-auto">
<span className="block reveal reveal-up">Um método simples que</span>
<span className="block text-electric reveal reveal-up" style={{transitionDelay: '100ms'}}>Funciona de verdade.</span>
</h2>
<p className="font-body text-base text-silver leading-relaxed max-w-xl mx-auto mt-6 reveal reveal-up" style={{transitionDelay: '200ms'}}>
                    Sem planilha genérica. Sem protocolo copiado da internet. Cada aluno começa com uma avaliação e sai com um caminho desenhado para o seu corpo e o seu objetivo.
                </p>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

<div className="relative z-10 bg-navy border border-white/10 p-8 text-center card-hover reveal reveal-up" style={{transitionDelay: '150ms'}}>
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-electric font-mono text-xl">01</div>
<h3 className="font-display font-semibold text-3xl tracking-tight text-white uppercase mb-4">Avaliação</h3>
<p className="font-body text-sm text-silver leading-relaxed">
                            Entendemos o seu histórico, objetivo e rotina antes de montar qualquer treino. O ponto de partida é individual — sempre.
                        </p>
</div>

<div className="relative z-10 bg-navy border border-white/10 p-8 text-center card-hover reveal reveal-up" style={{transitionDelay: '300ms'}}>
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-electric font-mono text-xl">02</div>
<h3 className="font-display font-semibold text-3xl tracking-tight text-white uppercase mb-4">Protocolo</h3>
<p className="font-body text-sm text-silver leading-relaxed">
                            Treino desenhado para o seu nível, sua disponibilidade e seu objetivo. Ajustado a cada ciclo. Nada genérico, nada de sobra.
                        </p>
</div>

<div className="relative z-10 bg-navy border border-white/10 p-8 text-center card-hover reveal reveal-up" style={{transitionDelay: '450ms'}}>
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-electric font-mono text-xl">03</div>
<h3 className="font-display font-semibold text-3xl tracking-tight text-white uppercase mb-4">Acompanhamento</h3>
<p className="font-body text-sm text-silver leading-relaxed">
                            Suporte contínuo, ajustes constantes e motivação quando você precisar. Presencialmente ou à distância — o contato não para.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative border-b border-white/5 overflow-hidden" id="resultados">
<div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="space-y-6 max-w-2xl">
<div className="inline-flex items-center gap-2 reveal reveal-right">
<iconify-icon className="text-electric" icon="solar:star-fall-linear" width="16"></iconify-icon>
<span className="font-mono text-xs text-electric tracking-widest uppercase">Resultados reais</span>
</div>
<h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.9]">
<span className="block reveal reveal-up">Alunos reais.</span>
<span className="block text-silver reveal reveal-up" style={{transitionDelay: '100ms'}}>Resultados</span>
<span className="block text-electric reveal reveal-up" style={{transitionDelay: '200ms'}}>Reais.</span>
</h2>
</div>
<p className="font-body text-sm text-silver leading-relaxed max-w-sm reveal reveal-up" style={{transitionDelay: '300ms'}}>
                    Nada de fotografia editada ou resultado milagroso em 7 dias. O que você vê aqui foi conquistado com trabalho, constância e método.
                </p>
</div>

<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 flex flex-col justify-between card-hover reveal reveal-up" style={{transitionDelay: '150ms'}}>
<div>
<iconify-icon className="text-white/10 mb-6" icon="solar:quote-right-bold" width="40"></iconify-icon>
<p className="font-body text-sm text-snow leading-relaxed italic mb-8">
                                "Nunca achei que fosse ser tão direto assim. Sem enrolação, sem aquela sensação de que você é só mais um aluno. Em 3 meses perdi 9kg e não passei um dia com fome."
                            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display text-lg text-white">A</div>
<div>
<p className="font-body font-medium text-sm text-white">Ana C.</p>
<p className="font-mono text-[0.65rem] text-electric tracking-widest uppercase mt-1">Emagrecimento · Presencial</p>
</div>
</div>
</div>

<div className="glass-panel p-8 flex flex-col justify-between card-hover reveal reveal-up" style={{transitionDelay: '300ms'}}>
<div>
<iconify-icon className="text-white/10 mb-6" icon="solar:quote-right-bold" width="40"></iconify-icon>
<p className="font-body text-sm text-snow leading-relaxed italic mb-8">
                                "Fazia academia há 2 anos sem resultado. Com o Lucas, em 4 meses comecei a ver diferença real na musculatura. O treino é sério, mas você consegue seguir."
                            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display text-lg text-white">M</div>
<div>
<p className="font-body font-medium text-sm text-white">Marcos R.</p>
<p className="font-mono text-[0.65rem] text-electric tracking-widest uppercase mt-1">Hipertrofia · Online</p>
</div>
</div>
</div>

<div className="glass-panel p-8 flex flex-col justify-between card-hover reveal reveal-up lg:block hidden md:hidden lg:flex" style={{transitionDelay: '450ms'}}>
<div>
<iconify-icon className="text-white/10 mb-6" icon="solar:quote-right-bold" width="40"></iconify-icon>
<p className="font-body text-sm text-snow leading-relaxed italic mb-8">
                                "Tenho 62 anos e achei que treino pesado não era para mim. Ele adaptou tudo. Hoje faço exercícios que não conseguia nem imaginar há 6 meses."
                            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display text-lg text-white">L</div>
<div>
<p className="font-body font-medium text-sm text-white">Dona Maria L.</p>
<p className="font-mono text-[0.65rem] text-electric tracking-widest uppercase mt-1">Terceira Idade · Domicílio</p>
</div>
</div>
</div>
</div>

<div className="mt-12 flex justify-center reveal reveal-scale">
<a className="inline-flex items-center gap-3 font-mono text-xs text-white hover:text-electric transition-colors tracking-widest uppercase border-b border-white/20 pb-1 hover:border-electric" href="https://instagram.com/teamlucasprado" target="_blank">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
                        Ver mais resultados no Instagram
                    </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative bg-navy border-b border-white/5" id="modalidades">
<div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
<div className="inline-flex items-center justify-center gap-2 reveal reveal-up">
<iconify-icon className="text-electric" icon="solar:routing-2-linear" width="16"></iconify-icon>
<span className="font-mono text-xs text-electric tracking-widest uppercase">Como posso te atender</span>
</div>
<h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.9] mt-6">
<span className="block reveal reveal-up">Você escolhe onde treinar.</span>
<span className="block text-electric reveal reveal-up" style={{transitionDelay: '100ms'}}>Eu apareço.</span>
</h2>
<p className="font-body text-sm text-silver leading-relaxed max-w-xl mx-auto mt-6 reveal reveal-up" style={{transitionDelay: '200ms'}}>
                    Sem desculpa de distância ou de horário. O acompanhamento acontece do jeito que funciona para a sua rotina.
                </p>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

<div className="bg-navy border border-white/10 p-8 flex flex-col h-full card-hover reveal reveal-up" style={{transitionDelay: '150ms'}}>
<h3 className="font-display font-semibold text-3xl tracking-tight text-white uppercase mb-2">Presencial</h3>
<p className="font-mono text-[0.65rem] text-silver tracking-widest uppercase mb-8">Academia parceira</p>
<ul className="space-y-4 mb-12 flex-1">
<li className="flex items-center gap-3 font-body text-sm text-silver"><iconify-icon className="text-electric" icon="solar:check-read-linear"></iconify-icon>Treino personalizado</li>
<li className="flex items-center gap-3 font-body text-sm text-silver"><iconify-icon className="text-electric" icon="solar:check-read-linear"></iconify-icon>Acompanhamento lado a lado</li>
<li className="flex items-center gap-3 font-body text-sm text-silver"><iconify-icon className="text-electric" icon="solar:check-read-linear"></iconify-icon>Ajuste de protocolo</li>
</ul>
<div className="pt-6 border-t border-white/10">
<p className="font-body text-xs text-white mb-4">Valor sob consulta</p>
<a className="block w-full text-center border border-white/20 text-white font-mono text-xs tracking-widest py-3 hover:bg-white/5 transition-colors" href="#contato">QUERO SABER MAIS</a>
</div>
</div>

<div className="glass-panel p-10 flex flex-col h-full transform lg:-translate-y-4 shadow-[0_0_40px_rgba(41,121,255,0.1)] relative overflow-hidden reveal reveal-scale" style={{transitionDelay: '300ms'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-electric/20 blur-[50px]"></div>
<div className="inline-block bg-electric text-white font-mono text-[0.65rem] tracking-widest uppercase px-3 py-1 self-start mb-4">Mais flexibilidade</div>
<h3 className="font-display font-semibold text-4xl tracking-tight text-white uppercase mb-2">Online</h3>
<p className="font-mono text-[0.65rem] text-silver tracking-widest uppercase mb-8">Onde você estiver</p>
<ul className="space-y-4 mb-12 flex-1">
<li className="flex items-center gap-3 font-body text-sm text-white"><iconify-icon className="text-electric" icon="solar:check-read-linear"></iconify-icon>Protocolo via app/pdf</li>
<li className="flex items-center gap-3 font-body text-sm text-white"><iconify-icon className="text-electric" icon="solar:check-read-linear"></iconify-icon>Suporte diário por mensagem</li>
<li className="flex items-center gap-3 font-body text-sm text-white"><iconify-icon className="text-electric" icon="solar:check-read-linear"></iconify-icon>Avaliação de vídeos de execução</li>
<li className="flex items-center gap-3 font-body text-sm text-white"><iconify-icon className="text-electric" icon="solar:check-read-linear"></iconify-icon>Revisão de ciclo constante</li>
</ul>
<div className="pt-6 border-t border-white/20">
<p className="font-body text-xs text-white mb-4">Valor sob consulta</p>
<a className="btn-glow block w-full text-center bg-electric text-white font-mono text-xs tracking-widest py-4 transition-golden" href="#contato">QUERO SABER MAIS</a>
</div>
</div>

<div className="bg-navy border border-white/10 p-8 flex flex-col h-full card-hover reveal reveal-up" style={{transitionDelay: '450ms'}}>
<h3 className="font-display font-semibold text-3xl tracking-tight text-white uppercase mb-2">A domicílio</h3>
<p className="font-mono text-[0.65rem] text-silver tracking-widest uppercase mb-8">Casa ou Condomínio</p>
<ul className="space-y-4 mb-12 flex-1">
<li className="flex items-center gap-3 font-body text-sm text-silver"><iconify-icon className="text-electric" icon="solar:check-read-linear"></iconify-icon>Conveniência total</li>
<li className="flex items-center gap-3 font-body text-sm text-silver"><iconify-icon className="text-electric" icon="solar:check-read-linear"></iconify-icon>Uso inteligente do seu espaço</li>
<li className="flex items-center gap-3 font-body text-sm text-silver"><iconify-icon className="text-electric" icon="solar:check-read-linear"></iconify-icon>Avaliação e acompanhamento</li>
</ul>
<div className="pt-6 border-t border-white/10">
<p className="font-body text-xs text-white mb-4">Valor sob consulta</p>
<a className="block w-full text-center border border-white/20 text-white font-mono text-xs tracking-widest py-3 hover:bg-white/5 transition-colors" href="#contato">QUERO SABER MAIS</a>
</div>
</div>
</div>
<p className="text-center font-mono text-[0.65rem] text-silver tracking-widest uppercase mt-12 reveal reveal-up">
                    Valores e disponibilidade via WhatsApp · Sem compromisso na primeira conversa
                </p>
</div>
</section>

<section className="py-24 lg:py-32 relative border-b border-white/5" id="contato">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<div className="inline-flex items-center gap-2 mb-6 reveal reveal-right">
<iconify-icon className="text-electric" icon="solar:letter-linear" width="16"></iconify-icon>
<span className="font-mono text-xs text-electric tracking-widest uppercase">Dar o primeiro passo</span>
</div>
<h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.9] mb-8 reveal reveal-up">
                            Pronto para<br/><span className="text-silver">Começar?</span>
</h2>
<form className="space-y-6 reveal reveal-up" style={{transitionDelay: '200ms'}}>
<div className="space-y-1">
<label className="font-mono text-[0.65rem] text-silver tracking-widest uppercase">Seu Nome</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-electric transition-colors" placeholder="Como quer ser chamado?" type="text"/>
</div>
<div className="space-y-1">
<label className="font-mono text-[0.65rem] text-silver tracking-widest uppercase">WhatsApp</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-electric transition-colors" placeholder="(00) 00000-0000" type="tel"/>
</div>

<div className="space-y-1 relative">
<label className="font-mono text-[0.65rem] text-silver tracking-widest uppercase">Objetivo Principal</label>
<select className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-electric transition-colors appearance-none cursor-pointer">
<option className="bg-navy text-silver" value="">Selecione...</option>
<option className="bg-navy" value="emagrecimento">Emagrecimento</option>
<option className="bg-navy" value="hipertrofia">Hipertrofia</option>
<option className="bg-navy" value="condicionamento">Condicionamento</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-silver pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="btn-glow w-full bg-electric text-white font-mono text-xs tracking-widest py-4 mt-8 transition-golden flex justify-center items-center gap-2" type="button">
                                ENVIAR PARA WHATSAPP
                                <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>

<div>
<div className="inline-flex items-center gap-2 mb-6 reveal reveal-right" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-electric" icon="solar:question-circle-linear" width="16"></iconify-icon>
<span className="font-mono text-xs text-electric tracking-widest uppercase">Dúvidas Frequentes</span>
</div>
<h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.9] mb-8 reveal reveal-up" style={{transitionDelay: '200ms'}}>
                            Perguntas<br/><span className="text-silver">Diretas.</span>
</h2>
<div className="space-y-4 reveal reveal-up" style={{transitionDelay: '300ms'}}>

<div className="faq-item border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300">
<button className="faq-btn w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none group">
<span className="font-display font-semibold text-xl uppercase text-white group-hover:text-electric transition-colors">Preciso ter experiência prévia?</span>
<iconify-icon className="text-electric transform transition-transform duration-300 faq-icon" icon="solar:add-linear" width="20"></iconify-icon>
</button>
<div className="faq-content h-0 opacity-0 overflow-hidden transition-all duration-300 px-6">
<p className="font-body text-sm text-silver pb-6">Não. Iniciantes são bem-vindos. Avaliamos o seu ponto de partida e montamos o protocolo do zero, no seu ritmo.</p>
</div>
</div>

<div className="faq-item border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300">
<button className="faq-btn w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none group">
<span className="font-display font-semibold text-xl uppercase text-white group-hover:text-electric transition-colors">Como funciona o online?</span>
<iconify-icon className="text-electric transform transition-transform duration-300 faq-icon" icon="solar:add-linear" width="20"></iconify-icon>
</button>
<div className="faq-content h-0 opacity-0 overflow-hidden transition-all duration-300 px-6">
<p className="font-body text-sm text-silver pb-6">Você recebe o protocolo de treino completo, suporte por mensagem e revisões periódicas. A distância não muda o compromisso com o seu resultado.</p>
</div>
</div>

<div className="faq-item border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300">
<button className="faq-btn w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none group">
<span className="font-display font-semibold text-xl uppercase text-white group-hover:text-electric transition-colors">Em quanto tempo vejo resultado?</span>
<iconify-icon className="text-electric transform transition-transform duration-300 faq-icon" icon="solar:add-linear" width="20"></iconify-icon>
</button>
<div className="faq-content h-0 opacity-0 overflow-hidden transition-all duration-300 px-6">
<p className="font-body text-sm text-silver pb-6">Depende do objetivo e consistência — mas alunos costumam notar diferença nas primeiras 4 a 8 semanas. Resultado real leva tempo, e o processo é esse.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 lg:pt-32 pb-12 relative overflow-hidden flex flex-col items-center border-b border-white/5">

<div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-5 pointer-events-none z-0 ticker-mask">
<div className="whitespace-nowrap inline-block animate-ticker">
<span className="font-display font-semibold text-[15rem] leading-none uppercase text-white px-8">SEM ENROLAÇÃO · RESULTADO REAL ·</span>
<span className="font-display font-semibold text-[15rem] leading-none uppercase text-white px-8">SEM ENROLAÇÃO · RESULTADO REAL ·</span>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="font-display font-semibold text-6xl md:text-8xl tracking-tight text-white uppercase leading-[0.85] mb-8 reveal reveal-scale">
                    Chega de<br/>esperar o<br/><span className="text-electric">momento certo.</span>
</h2>
<p className="font-body text-base text-silver mb-10 max-w-lg mx-auto reveal reveal-up" style={{transitionDelay: '200ms'}}>
                    Primeira conversa sem compromisso. Você fala, a gente escuta e monta o plano certo para o seu objetivo.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-up" style={{transitionDelay: '300ms'}}>
<a className="btn-glow bg-electric text-white font-body font-medium text-sm px-8 py-4 transition-golden flex items-center justify-center gap-2" href="https://instagram.com/teamlucasprado" target="_blank">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
                        SEGUIR NO INSTAGRAM
                    </a>
<a className="border border-white/20 text-white hover:text-electric hover:border-electric font-body font-medium text-sm px-8 py-4 transition-colors duration-300" href="#contato">
                        FALAR NO WHATSAPP
                    </a>
</div>
</div>

<div className="w-full mt-24 border-y border-white/10 bg-white/[0.02] py-3 overflow-hidden flex whitespace-nowrap z-10 relative">
<div className="inline-block animate-ticker text-electric font-mono text-[0.65rem] tracking-widest uppercase">
<span className="px-4">S E G U I R · N O · I N S T A G R A M · @ T E A M L U C A S P R A D O</span>
<span className="px-4">C O M E Ç A R · A G O R A · S E M · E N R O L A Ç Ã O</span>
<span className="px-4">R E S U L T A D O · R E A L</span>
<span className="px-4">S E G U I R · N O · I N S T A G R A M · @ T E A M L U C A S P R A D O</span>
<span className="px-4">C O M E Ç A R · A G O R A · S E M · E N R O L A Ç Ã O</span>
<span className="px-4">R E S U L T A D O · R E A L</span>
</div>
</div>
</section>
</main>

<footer className="bg-navy pt-16 pb-8 border-t border-white/10 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div>
<a className="inline-flex flex-col mb-4" href="#">
<span className="font-display font-semibold text-3xl tracking-tighter leading-none text-white">LP</span>
<span className="font-mono text-[0.65rem] tracking-[0.2em] text-silver mt-1">LUCAS PRADO</span>
</a>
<p className="font-mono text-xs text-electric tracking-widest uppercase">Resultado sem frescura.</p>
</div>

<div>
<p className="font-display font-semibold text-xl uppercase text-white mb-6">Navegação</p>
<ul className="space-y-3 font-body text-sm text-silver">
<li><a className="hover:text-white transition-colors" href="#metodo">Método</a></li>
<li><a className="hover:text-white transition-colors" href="#resultados">Resultados</a></li>
<li><a className="hover:text-white transition-colors" href="#modalidades">Modalidades</a></li>
<li><a className="hover:text-white transition-colors" href="#sobre">Sobre</a></li>
</ul>
</div>

<div>
<p className="font-display font-semibold text-xl uppercase text-white mb-6">Contato</p>
<ul className="space-y-3 font-body text-sm text-silver">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="https://instagram.com/teamlucasprado" target="_blank"><iconify-icon icon="solar:link-linear"></iconify-icon>@teamlucasprado</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:lucasspradoo01@gmail.com"><iconify-icon icon="solar:letter-linear"></iconify-icon>lucasspradoo01@gmail.com</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 font-mono text-[0.65rem] text-silver/60 tracking-widest uppercase">
<p>LUCAS PRADO PERSONAL TRAINER · © 2026</p>
<p className="mt-2 sm:mt-0">Todos os direitos reservados.</p>
</div>
</div>
</footer>



    </>
  );
}
