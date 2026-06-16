import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: '#10B981', /* Matching the Green in the Logo */
dark: '#0f172a',
neutral: '#64748b',
light: '#F8FAFC',
'off-white': '#FFFFFF'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Outfit', 'sans-serif']
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em'
},
transitionTimingFunction: {
'expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
}
}
}
}



        // --- Lenis Smooth Scroll ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureDirection: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- GSAP Setup ---
        gsap.registerPlugin(ScrollTrigger);

        // Loader
        const tlLoader = gsap.timeline();
        tlLoader.to("#loader-bar", { width: "100%", duration: 1.5, ease: "power2.inOut" })
            .to("#loader", { yPercent: -100, duration: 0.8, ease: "power4.inOut", delay: 0.2 })
            .from(".hero-line", { y: 100, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=0.5")
            .to(".hero-text", { opacity: 1, duration: 1, ease: "power2.out" }, "-=0.8")
            .to(".hero-tag", { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=1")
            .to("#hero-canvas", { opacity: 1, duration: 2 }, "-=1")
            .to(".hero-card", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1");

        // Scroll Reveals
        document.querySelectorAll('.reveal-trigger').forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Marquee Animation
        gsap.to(".marquee-content", {
            xPercent: -100,
            repeat: -1,
            duration: 25,
            ease: "linear"
        });

        // --- Canvas Animation (Sound Particles) ---
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.angle = Math.random() * Math.PI * 2;
                this.radius = Math.random() * 200 + 50;
                this.size = Math.random() * 2 + 1;
                this.speed = Math.random() * 0.002 + 0.001;
                this.y = (Math.random() - 0.5) * height * 0.8;
                // Green and Gray Palette
                this.color = Math.random() > 0.8 ? '#10B981' : '#cbd5e1';
            }
            update() {
                this.angle += this.speed;
                // Abstract molecular/audio structure movement
                this.x = width/2 + Math.cos(this.angle) * this.radius;
                this.currentY = height/2 + this.y * Math.sin(this.angle * 0.5) + Math.sin(Date.now() * 0.001 + this.radius)*20;
                this.scale = (Math.sin(this.angle) + 2) / 3;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.scale;
                ctx.beginPath();
                ctx.arc(this.x, this.currentY, this.size * this.scale, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 120; i++) particles.push(new Particle());

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Connect lines
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Connect nearby particles
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].currentY - particles[j].currentY;
                    const dist = Math.sqrt(dx*dx + dy*dy);

                    if (dist < 70) {
                        ctx.strokeStyle = `rgba(148, 163, 184, ${0.15 * (1 - dist/70)})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].currentY);
                        ctx.lineTo(particles[j].x, particles[j].currentY);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }
        animate();

        // --- Custom Cursor Logic ---
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorCircle = document.querySelector('.cursor-circle');

        if (window.matchMedia("(pointer: fine)").matches) {
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 });
            });

            gsap.ticker.add(() => {
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;
                cursorCircle.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
            });

            const hoverTargets = document.querySelectorAll('a, button, .group');
            hoverTargets.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader" id="loader">
<div className="flex items-center gap-1 mb-4 select-none">
<span className="iconify text-brand w-8 h-8" data-icon="lucide:play-circle" data-strokeWidth="2"></span>
<div className="font-display font-bold text-3xl tracking-tighter text-dark flex items-center">
<span>toca</span><span className="text-brand">vinhetas</span>
</div>
</div>
<div className="w-64 h-[2px] bg-gray-100 rounded-full overflow-hidden">
<div className="loader-bar" id="loader-bar"></div>
</div>
</div>

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-circle hidden md:block"></div>

<nav className="fixed top-6 left-0 w-full flex justify-center z-50 px-4 pointer-events-none">
<div className="pointer-events-auto glass-panel rounded-full px-2 py-2 flex items-center shadow-lg shadow-black/5 transition-transform hover:scale-[1.02] duration-500 ease-expo">

<a className="pl-6 pr-8 font-display font-bold text-xl tracking-tighter text-dark flex items-center gap-1.5 group" href="#">
<span className="iconify text-brand w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:play-circle" data-strokeWidth="2"></span>
<span className="flex items-baseline">
                    toca<span className="text-brand">vinhetas</span>
</span>
</a>
<div className="hidden md:flex items-center gap-1 bg-light rounded-full p-1">
<a className="px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-neutral hover:text-dark hover:bg-white transition-all duration-300" href="#process">Como Funciona</a>
<a className="px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-neutral hover:text-dark hover:bg-white transition-all duration-300" href="#solutions">Recursos</a>
<a className="px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-neutral hover:text-dark hover:bg-white transition-all duration-300" href="#solutions">Compatibilidade</a>
</div>
<a className="ml-2 md:ml-4 bg-brand hover:bg-dark text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 flex items-center gap-2 group" href="#contact">
<span>Entrar</span>
<span className="iconify w-3 h-3 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
</div>
</nav>

<section className="relative min-h-screen w-full overflow-hidden pt-32 pb-20 md:pt-0 md:pb-0">
<div className="grid lg:grid-cols-2 h-full min-h-screen w-full">

<div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 order-2 lg:order-1 z-10 bg-white">
<div className="overflow-hidden mb-6">
<div className="hero-tag opacity-0 translate-y-4 inline-flex items-center gap-2 border border-neutral/20 rounded-full px-3 py-1 mb-2 bg-light">
<span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse"></span>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral">Engine de Áudio V2.0</span>
</div>
</div>
<h1 className="font-display font-semibold text-[12vw] lg:text-[7vw] leading-[0.9] tracking-tighter text-dark mb-10 text-balance">
<div className="overflow-hidden"><span className="block hero-line">Sua Rádio</span></div>
<div className="overflow-hidden"><span className="block hero-line">Controlada</span></div>
<div className="overflow-hidden"><span className="block hero-line text-brand">Pela IA.</span></div>
</h1>
<p className="hero-text opacity-0 text-lg md:text-xl text-neutral font-light max-w-md leading-relaxed mb-12">
                    Gerencie músicas do YouTube sem anúncios e crie vinhetas profissionais em segundos. A automação completa para o ambiente do seu negócio.
                </p>
<div className="hero-text opacity-0 flex gap-6 items-center">
<button className="group relative px-8 py-4 bg-dark text-white rounded-full overflow-hidden transition-all hover:bg-brand">
<span className="relative z-10 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors">Testar Grátis</span>
</button>
<button className="group flex items-center gap-3 text-sm font-medium text-dark hover:text-brand transition-colors">
<span className="w-10 h-10 rounded-full border border-neutral/20 flex items-center justify-center group-hover:border-brand/50 transition-colors">
<span className="iconify w-3 h-3 text-current" data-icon="lucide:play" data-strokeWidth="1.5"></span>
</span>
                        Ver Demo
                    </button>
</div>
</div>

<div className="relative h-[50vh] lg:h-full w-full bg-light order-1 lg:order-2 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

<canvas className="relative z-10 w-full h-full opacity-0 transition-opacity duration-1000" id="hero-canvas"></canvas>

<div className="absolute bottom-10 left-10 md:left-auto md:right-10 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl z-20 max-w-xs hero-card opacity-0 translate-y-10">
<div className="flex justify-between items-start mb-4">
<span className="text-4xl font-display font-bold text-dark">0<span className="text-brand text-2xl align-top">Ads</span></span>
<span className="iconify text-brand w-5 h-5" data-icon="lucide:shield-check" data-strokeWidth="1.5"></span>
</div>
<p className="text-xs text-neutral leading-relaxed">Bloqueio total de anúncios em streams do YouTube e Spotify para reprodução contínua.</p>
</div>
</div>
</div>
</section>

<div className="py-12 border-y border-neutral/5 overflow-hidden bg-white">
<p className="text-center font-mono text-[10px] uppercase tracking-widest text-neutral/40 mb-8">Tecnologia &amp; Integrações</p>
<div className="marquee-container flex whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="marquee-content flex gap-12 md:gap-24 px-8 items-center font-display text-xl md:text-2xl font-bold text-neutral/30 select-none">
<span>IA GENERATIVA</span><span>MULTI-PLATAFORMA</span><span>SPOTIFY API</span><span>SEM INSTALAÇÃO</span><span>ROYALTY FREE</span><span>AUTOMAÇÃO</span>
<span>IA GENERATIVA</span><span>MULTI-PLATAFORMA</span><span>SPOTIFY API</span><span>SEM INSTALAÇÃO</span><span>ROYALTY FREE</span><span>AUTOMAÇÃO</span>
</div>
<div aria-hidden="true" className="marquee-content flex gap-12 md:gap-24 px-8 items-center font-display text-xl md:text-2xl font-bold text-neutral/30 select-none">
<span>IA GENERATIVA</span><span>MULTI-PLATAFORMA</span><span>SPOTIFY API</span><span>SEM INSTALAÇÃO</span><span>ROYALTY FREE</span><span>AUTOMAÇÃO</span>
<span>IA GENERATIVA</span><span>MULTI-PLATAFORMA</span><span>SPOTIFY API</span><span>SEM INSTALAÇÃO</span><span>ROYALTY FREE</span><span>AUTOMAÇÃO</span>
</div>
</div>
</div>

<section className="py-32 px-6 md:px-16 lg:px-24 bg-white" id="process">
<div className="max-w-[1800px] mx-auto">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-4 sticky top-32">
<h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter mb-6 text-dark">
                        A Ciência do <br/>Som Ambiente.
                    </h2>
<div className="w-12 h-1 bg-brand mb-8"></div>
<p className="text-neutral text-lg leading-relaxed mb-8">
                        A qualidade sonora não é acidental. É o resultado de esforço inteligente. Removemos ruídos e criamos a atmosfera perfeita para vendas.
                    </p>
<a className="text-sm font-bold uppercase tracking-widest border-b border-dark/20 pb-1 hover:border-brand hover:text-brand transition-colors inline-block" href="#">Ouvir Exemplos</a>
</div>
<div className="lg:col-span-8 grid gap-40">

<div className="group reveal-trigger">
<div className="aspect-[16/9] w-full bg-light rounded-[2rem] overflow-hidden mb-8 relative">
<div className="absolute inset-0 bg-neutral/10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Studio Mic" className="w-full h-full object-cover transition-transform duration-1000 ease-expo group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display font-semibold text-3xl mb-4 group-hover:text-brand transition-colors">Geração de Voz Neural</h3>
<p className="text-neutral max-w-xl">Transforme texto em vinhetas profissionais. Nossa IA ajusta entonação e emoção para mensagens de vendas impactantes.</p>
</div>

<div className="group reveal-trigger">
<div className="aspect-[16/9] w-full bg-light rounded-[2rem] overflow-hidden mb-8 relative">
<div className="absolute inset-0 bg-neutral/10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Sound Waves" className="w-full h-full object-cover transition-transform duration-1000 ease-expo group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display font-semibold text-3xl mb-4 group-hover:text-brand transition-colors">Curadoria Algorítmica</h3>
<p className="text-neutral max-w-xl">Cada playlist é testada rigorosamente. O sistema garante zero silêncio e transições suaves entre músicas e vinhetas.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-light border-t border-neutral/5" id="solutions">
<div className="max-w-[1800px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<span className="font-mono text-xs text-brand uppercase tracking-widest mb-4 block">Ecossistema de Áudio</span>
<h2 className="font-display font-semibold text-5xl md:text-7xl tracking-tighter text-dark">Recursos<span className="text-neutral/20">Pro</span></h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-neutral/20 flex items-center justify-center hover:bg-white hover:border-white transition-all">
<span className="iconify text-dark w-5 h-5" data-icon="lucide:arrow-left" data-strokeWidth="1.5"></span>
</button>
<button className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center hover:bg-brand transition-colors">
<span className="iconify text-white w-5 h-5" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-10 rounded-[2rem] min-h-[400px] flex flex-col justify-between group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
<div className="w-14 h-14 rounded-2xl bg-light flex items-center justify-center text-dark mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
<span className="iconify w-7 h-7" data-icon="lucide:mic-2" data-strokeWidth="1.5"></span>
</div>
<div>
<h3 className="font-display font-bold text-2xl mb-3 group-hover:translate-x-2 transition-transform">Locução IA</h3>
<p className="text-neutral text-sm leading-relaxed mb-6">Vozes naturais em português. Crie anúncios de promoções instantaneamente sem contratar locutores.</p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-neutral/10 group-hover:border-brand group-hover:text-brand transition-colors">
<span className="iconify w-4 h-4" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5"></span>
</span>
</div>
</div>

<div className="bg-white p-10 rounded-[2rem] min-h-[400px] flex flex-col justify-between group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 md:col-span-2 relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-light to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-light flex items-center justify-center text-dark mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
<span className="iconify w-7 h-7" data-icon="lucide:list-music" data-strokeWidth="1.5"></span>
</div>
<div className="max-w-md">
<h3 className="font-display font-bold text-2xl mb-3 group-hover:translate-x-2 transition-transform">Playlists Inteligentes</h3>
<p className="text-neutral text-sm leading-relaxed mb-6">Importe do YouTube Music ou Spotify. Nosso sistema remove anúncios e normaliza o volume automaticamente.</p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-neutral/10 group-hover:border-brand group-hover:text-brand transition-colors">
<span className="iconify w-4 h-4" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5"></span>
</span>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-[2rem] min-h-[400px] flex flex-col justify-between group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 md:col-span-2 relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-light to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-light flex items-center justify-center text-dark mb-6 group-hover:bg-brand group-hover:text-white transition-colors">

<span className="iconify w-7 h-7" data-icon="lucide:monitor-smartphone" data-strokeWidth="1.5"></span>
</div>
<div className="max-w-md">

<h3 className="font-display font-bold text-2xl mb-3 group-hover:translate-x-2 transition-transform">Multi-Dispositivo</h3>
<p className="text-neutral text-sm leading-relaxed mb-6">
                                Funciona em todos os seus aparelhos. Acesse pelo celular, tablet ou computador sem instalar nada. Controle sua rádio de qualquer lugar.
                            </p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-neutral/10 group-hover:border-brand group-hover:text-brand transition-colors">
<span className="iconify w-4 h-4" data-icon="lucide:check-circle-2" data-strokeWidth="1.5"></span>
</span>
</div>
</div>
</div>

<div className="bg-dark text-white p-10 rounded-[2rem] min-h-[400px] flex flex-col justify-between group hover:shadow-2xl hover:shadow-brand/20 transition-all duration-500">
<div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-brand transition-colors">
<span className="iconify w-7 h-7" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5"></span>
</div>
<div>
<h3 className="font-display font-bold text-2xl mb-3 group-hover:translate-x-2 transition-transform">Painel Web</h3>
<p className="text-neutral text-sm leading-relaxed mb-6">Controle múltiplas lojas de um único lugar. Acompanhe o que está tocando em tempo real.</p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:bg-white group-hover:text-brand transition-colors">
<span className="iconify w-4 h-4" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-16 lg:px-24 bg-white relative overflow-hidden" id="contact">
<div className="max-w-[1400px] mx-auto text-center relative z-10">
<h2 className="font-display font-bold text-[10vw] md:text-[8vw] leading-[0.85] tracking-tighter text-dark mb-12">
                Transforme seu <br/> <span className="text-neutral/20 hover:text-brand transition-colors duration-700 cursor-default">Ambiente.</span>
</h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="px-10 py-5 bg-brand text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-dark hover:shadow-xl hover:shadow-black/20 transition-all duration-300 w-full md:w-auto" href="#">
                    Começar Agora
                </a>
<a className="px-10 py-5 bg-white border border-neutral/20 text-dark rounded-full font-bold text-sm uppercase tracking-widest hover:bg-light transition-all duration-300 w-full md:w-auto" href="#">
                    Falar com Vendas
                </a>
</div>
</div>
</section>

<footer className="bg-light pt-20 pb-10 px-6 border-t border-neutral/10">
<div className="max-w-[1800px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="font-display font-bold text-3xl tracking-tighter text-dark mb-6 flex items-center gap-2" href="#">
<span className="iconify text-brand w-8 h-8" data-icon="lucide:play-circle" data-strokeWidth="2"></span>
<span className="flex items-baseline">
                            toca<span className="text-brand">vinhetas</span>
</span>
</a>
<p className="text-neutral text-sm">São Paulo, BR<br/>Lisboa, PT<br/>Remoto</p>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-xs uppercase tracking-widest text-neutral/50 mb-2">Produto</span>
<a className="text-dark hover:text-brand transition-colors" href="#">Gerador IA</a>
<a className="text-dark hover:text-brand transition-colors" href="#">Player Web</a>
<a className="text-dark hover:text-brand transition-colors" href="#">Compatibilidade</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-xs uppercase tracking-widest text-neutral/50 mb-2">Empresa</span>
<a className="text-dark hover:text-brand transition-colors" href="#">Sobre</a>
<a className="text-dark hover:text-brand transition-colors" href="#">Preços</a>
<a className="text-dark hover:text-brand transition-colors" href="#">Para Agências</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-xs uppercase tracking-widest text-neutral/50 mb-2">Social</span>
<a className="text-dark hover:text-brand transition-colors" href="#">Instagram</a>
<a className="text-dark hover:text-brand transition-colors" href="#">LinkedIn</a>
<a className="text-dark hover:text-brand transition-colors" href="#">YouTube</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral/10">
<p className="text-[10px] font-mono uppercase tracking-widest text-neutral/50">© 2025 TocaVinhetas AI. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-[10px] font-mono uppercase tracking-widest text-neutral/50 hover:text-dark" href="#">Privacidade</a>
<a className="text-[10px] font-mono uppercase tracking-widest text-neutral/50 hover:text-dark" href="#">Termos</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
