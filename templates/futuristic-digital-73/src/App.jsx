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
},
colors: {
brand: {
red: '#EC1D24',
black: '#000000',
dark: '#0a0a0a',
gray: '#1a1a1a',
light: '#E5E5E5',
}
},
animation: {
'blob': 'blob 7s infinite',
'scroll': 'scroll 30s linear infinite',
'spin-slow': 'spin 10s linear infinite',
'spin-slower': 'spin 20s linear infinite',
'spin-reverse': 'spin-reverse 15s linear infinite',
'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
'shooting-star': 'shooting 3s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
'spin-reverse': {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(-360deg)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
'50%': { opacity: '1', transform: 'scale(1.05)' },
},
shooting: {
'0%': { transform: 'translateX(0) translateY(0) rotate(-45deg)', opacity: '1' },
'100%': { transform: 'translateX(-500px) translateY(500px) rotate(-45deg)', opacity: '0' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<nav className="glass-nav rounded-2xl px-6 py-3 flex items-center justify-between w-full max-w-6xl shadow-2xl shadow-brand-red/5">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center text-white font-bold font-display text-lg tracking-tighter transform group-hover:rotate-12 transition-transform duration-300">GS</div>
<span className="font-display font-bold text-xl tracking-tight text-white">ROCKET</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-brand-light hover:text-white transition-colors" href="#services">Serviços</a>
<a className="text-sm font-medium text-brand-light hover:text-white transition-colors" href="#cases">Cases</a>
<a className="text-sm font-medium text-brand-light hover:text-white transition-colors" href="#agency">Agência</a>
<a className="text-sm font-medium text-brand-light hover:text-white transition-colors" href="#blog">Blog</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(236,29,36,0.4)] hover:shadow-[0_0_25px_rgba(236,29,36,0.6)]" href="#contact">
                    Iniciar Projeto
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">

<div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible">

<div className="absolute inset-0 bg-black"></div>
<div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay"></div>
<div className="absolute inset-0 stars opacity-40"></div>

<div className="relative w-[150vw] h-[150vw] md:w-[1200px] md:h-[1200px] flex items-center justify-center" style={{transform: 'perspective(1000px) rotateX(65deg) scale(0.8) translateY(-100px)'}}>

<div className="absolute inset-0 bg-gradient-radial from-brand-red/20 via-transparent to-transparent opacity-50 blur-[100px] animate-pulse-glow"></div>

<div className="absolute w-[110%] h-[110%] rounded-full accretion-disk-outer animate-spin-slower"></div>

<div className="absolute w-full h-full rounded-full accretion-disk animate-spin-slow mix-blend-screen"></div>

<div className="absolute w-[70%] h-[70%] rounded-full accretion-disk animate-spin-reverse opacity-80 mix-blend-screen" style={{filter: 'blur(4px)'}}></div>
</div>


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">

<div className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] bg-white rounded-full blur-[15px] opacity-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

<div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-black rounded-full shadow-[0_0_80px_rgba(236,29,36,0.6)_inset] relative z-10 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-gradient-radial from-transparent to-brand-red/10 opacity-50"></div>
</div>
</div>

<div className="absolute top-[10%] right-[10%] w-[300px] h-[2px] bg-gradient-to-l from-transparent via-white to-transparent rotate-[-35deg] animate-shooting-star opacity-0 z-0"></div>
</div>

<div className="container mx-auto px-6 text-center relative z-20 mt-12">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-brand-red/30 mb-8 reveal backdrop-blur-xl bg-black/40">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
</span>
<span className="text-xs font-bold uppercase tracking-widest text-brand-light">Agência Digital do Futuro</span>
</div>

<h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-8 text-white reveal drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" style={{transitionDelay: '100ms'}}>
                Elevando Marcas à <br/>
<span className="text-gradient-red relative inline-block">
                    Exponencialidade
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-red opacity-60" fill="none" viewbox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99996C18.5002 4.50096 79.5003 -1.50096 198 2.49996" stroke="currentColor" strokeWidth="3"></path></svg>
</span>
</h1>

<p className="font-light text-brand-light text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed reveal drop-shadow-md" style={{transitionDelay: '200ms'}}>
                Combinamos estética futurista com estratégias baseadas em dados para criar experiências digitais que convertem visitantes em embaixadores da marca.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{transitionDelay: '300ms'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white font-bold rounded-xl shadow-[0_0_20px_rgba(236,29,36,0.5)] hover:shadow-[0_0_50px_rgba(236,29,36,0.8)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group ring-2 ring-brand-red/50 ring-offset-2 ring-offset-black" href="#contact">
<iconify-icon className="group-hover:rotate-45 transition-transform" icon="solar:rocket-linear" width="20"></iconify-icon>
                    TRANSFORMAR AGORA
                </a>
<a className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md bg-black/40" href="#cases">
                    Ver Cases de Sucesso
                    <iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
<iconify-icon className="text-white" icon="solar:mouse-minimalistic-linear" width="32"></iconify-icon>
</div>
</section>

<div className="relative w-full border-y border-white/10 bg-black/80 backdrop-blur-md z-20 py-6 overflow-hidden marquee-container shadow-[0_0_50px_rgba(0,0,0,1)]">
<div className="flex w-[200%] animate-scroll">

<div className="flex items-center justify-around w-1/2 gap-8 px-4">
<span className="flex items-center gap-2 text-brand-light/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap"><iconify-icon className="text-brand-red" icon="solar:star-linear"></iconify-icon> 50+ Projetos Entregues</span>
<span className="flex items-center gap-2 text-brand-light/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap"><iconify-icon className="text-brand-red" icon="solar:shield-check-linear"></iconify-icon> 98% Satisfação</span>
<span className="flex items-center gap-2 text-brand-light/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap"><iconify-icon className="text-brand-red" icon="solar:graph-up-linear"></iconify-icon> ROI Médio de 200%</span>
<span className="flex items-center gap-2 text-brand-light/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap"><iconify-icon className="text-brand-red" icon="solar:code-circle-linear"></iconify-icon> Tecnologia de Ponta</span>
<span className="flex items-center gap-2 text-brand-light/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap"><iconify-icon className="text-brand-red" icon="solar:clock-circle-linear"></iconify-icon> 5 Anos de Mercado</span>
</div>
<div className="flex items-center justify-around w-1/2 gap-8 px-4">
<span className="flex items-center gap-2 text-brand-light/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap"><iconify-icon className="text-brand-red" icon="solar:star-linear"></iconify-icon> 50+ Projetos Entregues</span>
<span className="flex items-center gap-2 text-brand-light/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap"><iconify-icon className="text-brand-red" icon="solar:shield-check-linear"></iconify-icon> 98% Satisfação</span>
<span className="flex items-center gap-2 text-brand-light/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap"><iconify-icon className="text-brand-red" icon="solar:graph-up-linear"></iconify-icon> ROI Médio de 200%</span>
<span className="flex items-center gap-2 text-brand-light/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap"><iconify-icon className="text-brand-red" icon="solar:code-circle-linear"></iconify-icon> Tecnologia de Ponta</span>
<span className="flex items-center gap-2 text-brand-light/60 font-medium uppercase tracking-widest text-sm whitespace-nowrap"><iconify-icon className="text-brand-red" icon="solar:clock-circle-linear"></iconify-icon> 5 Anos de Mercado</span>
</div>
</div>
</div>

<section className="py-24 relative z-10" id="services">
<div className="container mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-display font-bold text-3xl md:text-5xl mb-4">Soluções <span className="text-gradient-red">Integradas</span></h2>
<p className="text-brand-light max-w-xl mx-auto">Ecossistema completo para escalar sua presença digital.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group glass-panel p-8 rounded-2xl hover:border-brand-red/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,29,36,0.1)] reveal">
<div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:palette-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-bold text-xl mb-3 text-white">Branding</h3>
<p className="text-sm text-brand-light/70 mb-6 leading-relaxed">Identidade visual memorável que conecta e fideliza seu público-alvo instantaneamente.</p>
<a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-brand-red transition-colors" href="#">
                        Ver mais <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:border-brand-red/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,29,36,0.1)] reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-bold text-xl mb-3 text-white">Web Dev</h3>
<p className="text-sm text-brand-light/70 mb-6 leading-relaxed">Sites ultra-rápidos e responsivos desenvolvidos com as tecnologias mais modernas do mercado.</p>
<a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-brand-red transition-colors" href="#">
                        Ver mais <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:border-brand-red/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,29,36,0.1)] reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-bold text-xl mb-3 text-white">UI/UX Design</h3>
<p className="text-sm text-brand-light/70 mb-6 leading-relaxed">Interfaces intuitivas focadas na jornada do usuário para maximizar engajamento e retenção.</p>
<a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-brand-red transition-colors" href="#">
                        Ver mais <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:border-brand-red/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,29,36,0.1)] reveal" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-bold text-xl mb-3 text-white">Growth</h3>
<p className="text-sm text-brand-light/70 mb-6 leading-relaxed">Estratégias de SEO, tráfego pago e analytics para escalar suas vendas previsivelmente.</p>
<a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-brand-red transition-colors" href="#">
                        Ver mais <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-brand-dark/50" id="cases">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 reveal">
<div>
<h2 className="font-display font-bold text-3xl md:text-5xl mb-2">Projetos <span className="text-gradient-red">Recentes</span></h2>
<p className="text-brand-light">Onde a inovação encontra resultados reais.</p>
</div>
<a className="text-white hover:text-brand-red transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider" href="#">
                    Ver Portfólio Completo <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="group relative rounded-2xl overflow-hidden aspect-[4/3] reveal">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80 transition-opacity group-hover:opacity-90"></div>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex gap-2 mb-3">
<span className="px-3 py-1 rounded-full glass-panel text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">Fintech</span>
<span className="px-3 py-1 rounded-full glass-panel text-[10px] font-bold uppercase tracking-widest text-brand-red backdrop-blur-md">+150% Conv.</span>
</div>
<h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">Neon Bank App</h3>
<p className="text-brand-light/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Redesign completo da experiência mobile focado em micro-interações.</p>
<button className="text-white font-bold text-sm uppercase tracking-wider border-b border-brand-red pb-1">Ver Case</button>
</div>
</article>

<article className="group relative rounded-2xl overflow-hidden aspect-[4/3] md:mt-12 reveal" style={{transitionDelay: '150ms'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80 transition-opacity group-hover:opacity-90"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex gap-2 mb-3">
<span className="px-3 py-1 rounded-full glass-panel text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">E-commerce</span>
<span className="px-3 py-1 rounded-full glass-panel text-[10px] font-bold uppercase tracking-widest text-brand-red backdrop-blur-md">3x Vendas</span>
</div>
<h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">Lumina Fashion</h3>
<p className="text-brand-light/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Plataforma headless com carregamento instantâneo e 3D viewer.</p>
<button className="text-white font-bold text-sm uppercase tracking-wider border-b border-brand-red pb-1">Ver Case</button>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 relative z-10 border-y border-white/5 bg-black/40">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="reveal">
<div className="font-display font-bold text-5xl md:text-6xl text-brand-red mb-2 tracking-tighter">50+</div>
<div className="text-sm font-medium uppercase tracking-widest text-brand-light">Projetos</div>
</div>
<div className="reveal" style={{transitionDelay: '100ms'}}>
<div className="font-display font-bold text-5xl md:text-6xl text-white mb-2 tracking-tighter">98%</div>
<div className="text-sm font-medium uppercase tracking-widest text-brand-light">Satisfação</div>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<div className="font-display font-bold text-5xl md:text-6xl text-brand-red mb-2 tracking-tighter">5</div>
<div className="text-sm font-medium uppercase tracking-widest text-brand-light">Anos Exp.</div>
</div>
<div className="reveal" style={{transitionDelay: '300ms'}}>
<div className="font-display font-bold text-5xl md:text-6xl text-white mb-2 tracking-tighter">24/7</div>
<div className="text-sm font-medium uppercase tracking-widest text-brand-light">Suporte</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="container mx-auto px-6 relative">
<div className="text-center mb-16 reveal">
<h2 className="font-display font-bold text-3xl md:text-5xl mb-4">Planos <span className="text-gradient-red">Estratégicos</span></h2>
<p className="text-brand-light">Investimento transparente para resultados exponenciais.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="glass-panel rounded-2xl p-8 reveal">
<h3 className="font-display font-bold text-xl text-white mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-sm text-brand-light">A partir de</span>
<span className="text-3xl font-bold text-white">R$ 5k</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-brand-light"><iconify-icon className="text-brand-red text-lg" icon="solar:check-circle-linear"></iconify-icon> Branding Essencial</li>
<li className="flex items-center gap-3 text-sm text-brand-light"><iconify-icon className="text-brand-red text-lg" icon="solar:check-circle-linear"></iconify-icon> Landing Page High-End</li>
<li className="flex items-center gap-3 text-sm text-brand-light"><iconify-icon className="text-brand-red text-lg" icon="solar:check-circle-linear"></iconify-icon> Configuração Analytics</li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/20 text-center text-sm font-bold text-white hover:bg-white/5 transition-colors" href="#">Solicitar Orçamento</a>
</div>

<div className="glass-panel rounded-2xl p-10 border-brand-red/50 shadow-[0_0_40px_rgba(236,29,36,0.15)] relative scale-105 z-10 reveal" style={{transitionDelay: '150ms'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">Mais Popular</div>
<h3 className="font-display font-bold text-2xl text-white mb-2">Professional</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-sm text-brand-light">A partir de</span>
<span className="text-4xl font-bold text-white">R$ 12k</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-brand-red text-lg" icon="solar:check-circle-bold"></iconify-icon> Identidade Visual Completa</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-brand-red text-lg" icon="solar:check-circle-bold"></iconify-icon> Website Institucional 10pgs</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-brand-red text-lg" icon="solar:check-circle-bold"></iconify-icon> SEO Técnico Avançado</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-brand-red text-lg" icon="solar:check-circle-bold"></iconify-icon> Copywriting Estratégico</li>
</ul>
<a className="block w-full py-4 rounded-lg bg-brand-red text-center text-sm font-bold text-white hover:bg-red-600 transition-colors shadow-lg shadow-brand-red/30" href="#">Selecionar Plano</a>
</div>

<div className="glass-panel rounded-2xl p-8 reveal" style={{transitionDelay: '300ms'}}>
<h3 className="font-display font-bold text-xl text-white mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-sm text-brand-light">A partir de</span>
<span className="text-3xl font-bold text-white">R$ 30k</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-brand-light"><iconify-icon className="text-brand-red text-lg" icon="solar:check-circle-linear"></iconify-icon> Ecossistema Digital Completo</li>
<li className="flex items-center gap-3 text-sm text-brand-light"><iconify-icon className="text-brand-red text-lg" icon="solar:check-circle-linear"></iconify-icon> App Development (iOS/And)</li>
<li className="flex items-center gap-3 text-sm text-brand-light"><iconify-icon className="text-brand-red text-lg" icon="solar:check-circle-linear"></iconify-icon> Consultoria de Growth Mensal</li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/20 text-center text-sm font-bold text-white hover:bg-white/5 transition-colors" href="#">Falar com Consultor</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-brand-dark/30" id="blog">
<div className="container mx-auto px-6">
<h2 className="font-display font-bold text-3xl md:text-5xl mb-12 text-center reveal">Insights <span className="text-gradient-red">Digitais</span></h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group glass-panel rounded-xl overflow-hidden reveal" href="#">
<div className="aspect-video bg-gray-800 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-red/10 group-hover:bg-brand-red/0 transition-colors z-10"></div>

<div className="w-full h-full bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="p-6">
<span className="text-xs font-bold text-brand-red uppercase tracking-widest mb-2 block">Design Trends</span>
<h4 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-red transition-colors">O fim do Flat Design? Entenda o Neumorphism.</h4>
<span className="text-xs text-brand-light/50">12 Out, 2025 • 5 min leitura</span>
</div>
</a>

<a className="group glass-panel rounded-xl overflow-hidden reveal" href="#" style={{transitionDelay: '100ms'}}>
<div className="aspect-video bg-gray-800 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-red/10 group-hover:bg-brand-red/0 transition-colors z-10"></div>
<div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="p-6">
<span className="text-xs font-bold text-brand-red uppercase tracking-widest mb-2 block">Tech</span>
<h4 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-red transition-colors">Web 3.0: Como preparar sua marca agora.</h4>
<span className="text-xs text-brand-light/50">10 Out, 2025 • 8 min leitura</span>
</div>
</a>

<a className="group glass-panel rounded-xl overflow-hidden reveal" href="#" style={{transitionDelay: '200ms'}}>
<div className="aspect-video bg-gray-800 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-red/10 group-hover:bg-brand-red/0 transition-colors z-10"></div>
<div className="w-full h-full bg-gradient-to-br from-black to-gray-900 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="p-6">
<span className="text-xs font-bold text-brand-red uppercase tracking-widest mb-2 block">Marketing</span>
<h4 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-red transition-colors">Otimização de Conversão em Landing Pages.</h4>
<span className="text-xs text-brand-light/50">05 Out, 2025 • 6 min leitura</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 relative z-10 overflow-hidden" id="contact">
<div className="absolute inset-0 bg-brand-red/5"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
<div className="container mx-auto px-6 relative text-center z-20">
<h2 className="font-display font-bold text-4xl md:text-6xl mb-6 reveal">Pronto para <br/><span className="text-white text-shadow-glow">Decolar?</span></h2>
<p className="text-xl text-brand-light max-w-2xl mx-auto mb-10 reveal">Não construímos apenas sites. Construímos máquinas de vendas digitais que trabalham 24/7 pelo seu negócio.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
<a className="px-10 py-5 bg-brand-red text-white font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(236,29,36,0.5)] hover:shadow-[0_0_50px_rgba(236,29,36,0.8)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3" href="#">
                    Agendar Conversa Gratuita
                    <iconify-icon icon="solar:calendar-linear"></iconify-icon>
</a>
</div>
<div className="mt-12 opacity-60 reveal">
<p className="text-xs font-medium uppercase tracking-widest text-brand-light/50 mb-4">Confiança de Líderes</p>
<div className="flex justify-center gap-8 grayscale opacity-50">

<span className="font-display font-bold text-xl">NUBANK</span>
<span className="font-display font-bold text-xl">STONE</span>
<span className="font-display font-bold text-xl">VTEX</span>
<span className="font-display font-bold text-xl">IFODD</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 relative z-10">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center text-white font-bold font-display text-lg tracking-tighter">GS</div>
<span className="font-display font-bold text-xl tracking-tight text-white">ROCKET</span>
</a>
<p className="text-brand-light/60 text-sm leading-relaxed mb-6">
                        Agência digital focada em resultados exponenciais através de design premium e tecnologia de ponta.
                    </p>
<div className="flex gap-4">
<a className="text-white hover:text-brand-red transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-white hover:text-brand-red transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
<a className="text-white hover:text-brand-red transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-white font-bold mb-6">Empresa</h5>
<ul className="space-y-4 text-sm text-brand-light/60">
<li><a className="hover:text-brand-red transition-colors" href="#">Sobre Nós</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">Manifesto</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-6">Serviços</h5>
<ul className="space-y-4 text-sm text-brand-light/60">
<li><a className="hover:text-brand-red transition-colors" href="#">Web Design</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">Branding</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">Growth Marketing</a></li>
<li><a className="hover:text-brand-red transition-colors" href="#">SEO &amp; Conteúdo</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-6">Newsletter</h5>
<p className="text-xs text-brand-light/60 mb-4">Receba insights de design e tech.</p>
<form className="flex flex-col gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="Seu melhor e-mail" type="email"/>
<button className="bg-white text-black font-bold text-sm py-3 rounded-lg hover:bg-gray-200 transition-colors">Inscrever-se</button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-brand-light/40">© 2026 GS Rocket Agency. Todos os direitos reservados.</p>
<div className="flex gap-6 text-xs text-brand-light/40">
<a className="hover:text-white transition-colors" href="#">Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos</a>
<span>Desenvolvido com <span className="text-brand-red">♥</span> em São Paulo</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
