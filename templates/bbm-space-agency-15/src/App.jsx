import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#EF4444', // Red-500
dark: '#030712',     // Gray-950
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Space Grotesk', 'sans-serif'],
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
},
keyframes: {
pulseGlow: {
'0%, 100%': { opacity: 0.8 },
'50%': { opacity: 1 },
}
}
}
}
}



        // Starfield Generation
        const starfield = document.getElementById('starfield');
        const starCount = 100;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star-layer';
            const xy = Math.random() * 100;
            const duration = Math.random() * 3 + 2;
            const size = Math.random() * 2;
            
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.setProperty('--duration', `${duration}s`);
            star.style.setProperty('--opacity', Math.random());
            
            if(Math.random() > 0.8) { // occasional bright blue/red star
                star.style.background = Math.random() > 0.5 ? '#EF4444' : '#60A5FA';
                star.style.boxShadow = `0 0 4px ${star.style.background}`;
            }

            starfield.appendChild(star);
        }

        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const hoverElements = document.querySelectorAll('.cursor-hover, a, button, input, textarea');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Reveal on Scroll
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();

        // Header Scroll Effect
        const nav = document.querySelector('nav');
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                nav.classList.remove('-translate-y-full');
            } else if (currentScroll > lastScroll) {
                // Scroll Down
                nav.classList.add('-translate-y-full');
            } else {
                // Scroll Up
                nav.classList.remove('-translate-y-full');
            }
            lastScroll = currentScroll;
        });

        // Simple Portfolio Filter (Visual Only)
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-red-600', 'border-red-600', 'text-white');
                    b.classList.add('bg-white/5', 'border-white/5', 'text-gray-500');
                });
                btn.classList.remove('bg-white/5', 'border-white/5', 'text-gray-500');
                btn.classList.add('bg-red-600', 'border-red-600', 'text-white');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="cursor"></div>
<div className="stars" id="starfield"></div>
<div className="scanlines"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
<div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed w-full z-[60] top-0 transition-all duration-300 py-4 border-b border-white/5 bg-[#030712]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
<a className="cursor-hover group flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)]">
<span className="iconify text-white" data-icon="lucide:rocket" data-width="16"></span>
</div>
<span className="font-heading font-semibold text-lg tracking-tight text-white group-hover:text-red-500 transition-colors">BBM SPACE</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="cursor-hover text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest" href="#services">Missões</a>
<a className="cursor-hover text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest" href="#portfolio">Portfólio</a>
<a className="cursor-hover text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest" href="#about">Sobre</a>
</div>
<div className="flex items-center gap-4">
<button className="cursor-hover text-gray-400 hover:text-white transition-colors text-xs font-semibold">EN</button>
<div className="h-4 w-[1px] bg-white/20"></div>
<a className="cursor-hover px-5 py-2 border border-red-500/30 bg-red-500/10 rounded text-[10px] font-semibold uppercase tracking-widest text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-[0_0_10px_rgba(239,68,68,0.1)]" href="#contact">
                    Iniciar Projeto
                </a>
</div>
</div>
</nav>

<header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20" id="hero">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
<div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto flex flex-col items-center">
<div className="reveal mb-6 opacity-0">
<div className="glass-panel inline-flex items-center gap-2 px-3 py-1 rounded-full border-red-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#EF4444]"></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-semibold">Explorando o Universo Digital</span>
</div>
</div>
<h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] tracking-tight text-white mb-8 drop-shadow-2xl">
                Para o seu Negócio, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500 animate-pulse-glow">O Universo é o Limite.</span>
</h1>
<p className="text-base md:text-lg text-gray-400 font-light max-w-xl mx-auto leading-relaxed reveal opacity-0 delay-200 mb-10">
                Sua agência especializada em desenvolvimento, branding e automação com IA. Decole seu negócio com tecnologia de ponta.
            </p>
<div className="flex flex-col md:flex-row gap-4 reveal opacity-0 delay-300">
<a className="cursor-hover px-8 py-3 bg-red-600 text-white rounded font-medium text-xs uppercase tracking-widest hover:bg-red-700 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all transform hover:-translate-y-1" href="#contact">
                    Saiba Mais
                </a>
<a className="cursor-hover px-8 py-3 glass-panel text-white rounded font-medium text-xs uppercase tracking-widest hover:bg-white/10 transition-all border-white/10" href="#portfolio">
                    Ver Portfólio
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 animate-bounce">
<span className="iconify text-gray-600" data-icon="lucide:chevron-down" data-width="20"></span>
</div>
</header>

<section className="py-24 relative z-10 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="reveal">
<span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2 block">// Missões</span>
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">Nossos Serviços</h2>
</div>
<p className="text-gray-400 max-w-sm text-sm text-right md:text-left reveal delay-100">
                    Soluções completas para expandir sua presença na galáxia digital.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl cursor-hover group hud-corner reveal">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-red-500 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:code-2" data-width="24"></span>
</div>
<h3 className="font-heading text-lg font-medium text-white mb-3">Desenvolvimento Web</h3>
<p className="text-gray-400 text-xs leading-relaxed mb-6">Sites institucionais, Landing pages de alta conversão e sistemas web robustos.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Next.js / React</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Apps Mobile</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-xl cursor-hover group hud-corner reveal delay-100">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-red-500 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:palette" data-width="24"></span>
</div>
<h3 className="font-heading text-lg font-medium text-white mb-3">Branding &amp; Design</h3>
<p className="text-gray-400 text-xs leading-relaxed mb-6">Identidade visual marcante que define sua autoridade no mercado.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider"><span className="w-1 h-1 bg-red-500 rounded-full"></span> UI/UX Design</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Logotipos</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-xl cursor-hover group hud-corner reveal delay-200">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-red-500 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:rocket" data-width="24"></span>
</div>
<h3 className="font-heading text-lg font-medium text-white mb-3">Marketing Digital</h3>
<p className="text-gray-400 text-xs leading-relaxed mb-6">Estratégias de tráfego pago e orgânico para escalar suas vendas.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Google Ads / Meta</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider"><span className="w-1 h-1 bg-red-500 rounded-full"></span> SEO Técnico</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-xl cursor-hover group hud-corner reveal">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-red-500 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:shopping-cart" data-width="24"></span>
</div>
<h3 className="font-heading text-lg font-medium text-white mb-3">Loja Virtual</h3>
<p className="text-gray-400 text-xs leading-relaxed mb-6">E-commerce de alta performance integrado aos melhores gateways.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Shopify / Nuvemshop</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Marketplaces</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-xl cursor-hover group hud-corner reveal delay-100 md:col-span-2 lg:col-span-2 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-red-900/10 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-red-500 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:bot" data-width="24"></span>
</div>
<h3 className="font-heading text-lg font-medium text-white mb-3">Automação &amp; IA</h3>
<p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-md">Agentes de Inteligência Artificial para automatizar atendimento, processos internos e escalar a produtividade da sua equipe sem aumentar custos.</p>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-red-500 hover:text-white transition-colors uppercase tracking-widest" href="#">
                            Conhecer Soluções <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#050508]" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6 reveal">
<div>
<span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2 block">// Arquivos</span>
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">Projetos Recentes</h2>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar" id="portfolio-filters">
<button className="filter-btn active px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-white bg-red-600 rounded cursor-hover border border-red-600 transition-all">Todos</button>
<button className="filter-btn px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-gray-500 hover:text-white bg-white/5 rounded cursor-hover border border-white/5 transition-all">Tecnologia</button>
<button className="filter-btn px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-gray-500 hover:text-white bg-white/5 rounded cursor-hover border border-white/5 transition-all">Saúde</button>
<button className="filter-btn px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-gray-500 hover:text-white bg-white/5 rounded cursor-hover border border-white/5 transition-all">Finanças</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-hover reveal delay-100">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1 block">Fintech</span>
<h4 className="font-heading text-xl font-semibold text-white mb-2">Neon Bank App</h4>
<div className="h-[1px] w-0 group-hover:w-full bg-red-500 transition-all duration-500"></div>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-hover reveal delay-200">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1 block">Cybersecurity</span>
<h4 className="font-heading text-xl font-semibold text-white mb-2">Shield Systems</h4>
<div className="h-[1px] w-0 group-hover:w-full bg-red-500 transition-all duration-500"></div>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-hover reveal delay-300">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1 block">Saúde</span>
<h4 className="font-heading text-xl font-semibold text-white mb-2">MedTech Dashboard</h4>
<div className="h-[1px] w-0 group-hover:w-full bg-red-500 transition-all duration-500"></div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-widest group" href="#">
                    Ver todos os projetos <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#050508]" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2 block">// Sobre Nós</span>
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">Astronautas da Inovação</h2>
<p className="text-gray-400 leading-relaxed mb-6">
                    Fundada em 2019, a BBM Space nasceu com o propósito de desbravar fronteiras digitais. Não somos apenas uma agência; somos parceiros de missão.
                </p>
<div className="grid grid-cols-2 gap-8 mt-8">
<div>
<span className="block text-3xl font-heading font-bold text-white mb-1">250+</span>
<span className="text-[10px] text-gray-500 uppercase tracking-widest">Missões Concluídas</span>
</div>
<div>
<span className="block text-3xl font-heading font-bold text-white mb-1">98%</span>
<span className="text-[10px] text-gray-500 uppercase tracking-widest">Satisfação</span>
</div>
</div>
</div>
<div className="relative reveal delay-200">
<div className="absolute inset-0 bg-red-600/20 blur-[60px] rounded-full"></div>
<div className="glass-panel p-2 rounded-2xl relative z-10 border border-white/10">
<img alt="Astronaut" className="rounded-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-xl flex items-center gap-3 border border-red-500/30">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-semibold text-white">Sistemas Online</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12 reveal">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">Inicie sua Transmissão</h2>
<p className="text-gray-400 text-sm">Pronto para lançar? Preencha os dados abaixo.</p>
</div>
<form className="glass-panel p-8 md:p-12 rounded-2xl border border-white/10 reveal delay-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs text-gray-500 uppercase tracking-widest">Nome</label>
<input className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-red-500 focus:outline-none transition-colors placeholder-white/20" placeholder="Seu nome" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-gray-500 uppercase tracking-widest">WhatsApp</label>
<input className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-red-500 focus:outline-none transition-colors placeholder-white/20" placeholder="(00) 00000-0000" type="text"/>
</div>
</div>
<div className="space-y-2 mb-6">
<label className="text-xs text-gray-500 uppercase tracking-widest">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-red-500 focus:outline-none transition-colors placeholder-white/20" placeholder="seu@email.com" type="email"/>
</div>
<div className="space-y-2 mb-8">
<label className="text-xs text-gray-500 uppercase tracking-widest">Mensagem</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-red-500 focus:outline-none transition-colors placeholder-white/20" placeholder="Descreva sua missão..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-red-600 rounded text-white font-semibold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)]" type="submit">
                    Enviar Sinal
                </button>
</form>
</div>
</section>

<footer className="bg-black/90 backdrop-blur-xl pt-16 pb-8 border-t border-white/10 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="iconify text-red-500" data-icon="lucide:rocket" data-width="24"></span>
<span className="font-heading font-bold text-xl text-white">BBM SPACE</span>
</a>
<p className="text-gray-500 text-xs leading-relaxed mb-6">
                        Av. das Nações Unidas, 14261<br/>Torre B, São Paulo - SP
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="18"></span></a>
</div>
</div>
<div>
<h5 className="font-heading font-semibold text-white mb-4 text-xs uppercase tracking-widest">Serviços</h5>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-red-500 transition-colors" href="#">Desenvolvimento</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Branding</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Marketing</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Automação IA</a></li>
</ul>
</div>
<div>
<h5 className="font-heading font-semibold text-white mb-4 text-xs uppercase tracking-widest">Empresa</h5>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-red-500 transition-colors" href="#">Sobre Nós</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h5 className="font-heading font-semibold text-white mb-4 text-xs uppercase tracking-widest">Legal</h5>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-red-500 transition-colors" href="#">Termos de Uso</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
<p>© 2025 BBM Space. Todos os direitos reservados.</p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
<span>Sistemas Operacionais</span>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300" href="#">
<span className="iconify text-white" data-icon="lucide:message-circle" data-width="24"></span>
</a>


    </>
  );
}
