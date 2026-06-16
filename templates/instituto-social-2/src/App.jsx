import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: '#2E7D32',
secondary: '#1565C0',
accent: '#F57C00',
dark: '#0A0A0A',
light: '#FAFAFA',
surface: {
light: '#FFFFFF',
dark: '#141414'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'marquee-reverse': 'marqueeReverse 40s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
marqueeReverse: {
'0%': { transform: 'translateX(-50%)' },
'100%': { transform: 'translateX(0%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }

        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
        });

        // Intersection Observer for Reveal Animations
        const observerOptions = {
            root: document.getElementById('main-scroller'),
            threshold: 0.15,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Unobserve if you only want it to animate once
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Parallax Effect for Background
        const scroller = document.getElementById('main-scroller');
        const parallaxBg = document.getElementById('parallax-bg');

        scroller.addEventListener('scroll', () => {
            const scrollTop = scroller.scrollTop;
            if (parallaxBg) {
                parallaxBg.style.transform = `scale(1.05) translateY(${scrollTop * 0.5}px)`;
            }
        });

        // Flashlight Effect
        document.querySelectorAll('.flashlight-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // 3D Carousel Logic
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');

        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.classList.remove('opacity-0', 'pointer-events-none');
                
                if (index === currentSlide) {
                    slide.style.zIndex = 10;
                    slide.style.transform = 'translateZ(0) translateX(0) rotateY(0deg)';
                    slide.style.opacity = '1';
                } else if (index < currentSlide) {
                    slide.style.zIndex = 5;
                    slide.style.transform = 'translateZ(-100px) translateX(-50px) rotateY(5deg)';
                    slide.style.opacity = '0';
                    slide.classList.add('pointer-events-none');
                } else {
                    slide.style.zIndex = 5;
                    slide.style.transform = 'translateZ(-100px) translateX(50px) rotateY(-5deg)';
                    slide.style.opacity = '0';
                    slide.classList.add('pointer-events-none');
                }
            });
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel();
            });

            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });

            // Initialize
            updateCarousel();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<svg className="w-9 h-9 group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<rect className="fill-primary/10 dark:fill-white/10 transition-colors" height="40" rx="10" width="40"></rect>
<path className="fill-primary" d="M20 12C20 12 14 18 14 24C14 27.3137 16.6863 30 20 30C23.3137 30 26 27.3137 26 24C26 18 20 12 20 12Z"></path>
<circle className="fill-accent" cx="26" cy="14" r="3"></circle>
<path className="text-primary" d="M20 30V34" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<div className="flex flex-col">
<span className="font-bold tracking-tight text-sm leading-none">Instituto</span>
<span className="font-semibold tracking-tight text-sm leading-none text-primary">Desponta Brasil</span>
</div>
</a>
<div className="flex items-center gap-4">
<button aria-label="Alternar tema" className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" id="theme-toggle">
<i className="w-5 h-5 block dark:hidden" data-lucide="moon"></i>
<i className="w-5 h-5 hidden dark:block" data-lucide="sun"></i>
</button>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-primary rounded-full hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md" href="#contact">
                    Seja Parceiro
                </a>
<button className="md:hidden p-2">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<div className="vlibras-mock" title="Acessibilidade em Libras">
<i className="w-5 h-5 text-neutral-500" data-lucide="languages"></i>
</div>

<main className="snap-container" id="main-scroller">

<section className="snap-section flex flex-col items-center justify-center px-6 pt-16">
<div className="absolute inset-0 -z-10 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-50 dark:opacity-30 scale-105" id="parallax-bg"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-light dark:from-dark/80 dark:via-dark/60 dark:to-dark"></div>
</div>
<div className="max-w-5xl w-full text-center space-y-8 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-white/80 dark:bg-black/50 backdrop-blur-sm text-primary text-xs font-medium reveal shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                    OSCIP fundada em 2012
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-neutral-900 dark:text-white reveal delay-100 drop-shadow-sm">
                    Transformar vidas.<br/>
<span className="text-neutral-500 dark:text-neutral-400">Regenerar futuros.</span>
</h1>
<p className="max-w-xl mx-auto text-lg md:text-xl text-neutral-800 dark:text-neutral-300 font-medium reveal delay-200">
                    Desenvolvimento de soluções inovadoras baseadas em assistência social, tecnologias e práticas sustentáveis.
                </p>
<div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center reveal delay-300">
<button className="px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg">
                        Conheça o Instituto
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors font-medium text-sm flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                        Ver Vídeo Institucional
                    </button>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-50">
<i className="w-6 h-6 text-neutral-400" data-lucide="arrow-down"></i>
</div>
</section>

<section className="snap-section flex items-center justify-center px-6 bg-white dark:bg-surface-dark">
<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1 reveal">
<div className="aspect-square rounded-3xl overflow-hidden relative">
<img alt="Equipe IDB" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-8 -right-8 bg-surface-light dark:bg-neutral-900 p-6 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-800 max-w-[200px]">
<p className="text-4xl font-bold text-primary tracking-tight">1000+</p>
<p className="text-sm text-neutral-500 mt-1">Vidas impactadas diretamente em nossos projetos</p>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<span className="text-9xl font-bold absolute top-20 right-10 opacity-5 text-stroke select-none pointer-events-none">01</span>
<div className="flex items-center gap-3 reveal">
<div className="p-2 rounded-lg bg-secondary/10 text-secondary">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<span className="text-xs font-bold tracking-widest uppercase text-secondary">Quem Somos</span>
</div>
<h2 className="text-4xl md:text-6xl font-bold tracking-tighter reveal delay-100">
                        Compromisso com a <span className="text-primary">regeneração.</span>
</h2>
<p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed reveal delay-200">
                        Desde 2012, o Instituto Desponta Brasil atua como uma força motriz na articulação multissetorial. Somos uma ponte entre o setor público, privado e a sociedade civil.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4 reveal delay-300">
<div className="space-y-2">
<h3 className="text-xl font-semibold">Credibilidade</h3>
<p className="text-sm text-neutral-500">Ética e transparência em todas as ações e relatórios.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-semibold">Inclusão</h3>
<p className="text-sm text-neutral-500">Protagonismo das comunidades atendidas.</p>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section flex items-center justify-center px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-900/50"></div>
<div className="max-w-4xl w-full text-center relative z-10 space-y-12">
<span className="text-9xl font-bold absolute -top-32 left-1/2 -translate-x-1/2 opacity-5 text-stroke select-none pointer-events-none">02</span>
<div className="reveal">
<i className="w-12 h-12 mx-auto text-accent mb-6 stroke-[1]" data-lucide="target"></i>
<h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Nossa Missão</h2>
<p className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                        "Promover regeneração social, ambiental e econômica, por meio do desenvolvimento de soluções inovadoras."
                    </p>
</div>
<div className="h-px w-24 bg-neutral-300 dark:bg-neutral-700 mx-auto reveal delay-100"></div>
<div className="reveal delay-200">
<h3 className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4">Visão 2029</h3>
<p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                        Ser referência em governança corporativa e na coautoria de soluções para questões sustentáveis nos territórios onde atuamos.
                    </p>
</div>
</div>
</section>

<section className="snap-section flex items-center justify-center px-6 bg-white dark:bg-dark">
<div className="max-w-7xl w-full h-full flex flex-col justify-center py-20">
<div className="flex justify-between items-end mb-12 reveal">
<div>
<span className="text-sm font-bold tracking-widest uppercase text-primary mb-2 block">Onde Atuamos</span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Pilares Estratégicos</h2>
</div>
<span className="text-6xl font-bold opacity-10 text-stroke hidden md:block">03</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="flashlight-card p-8 rounded-2xl h-80 flex flex-col justify-between group cursor-default reveal delay-100">
<div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sprout"></i>
</div>
<div>
<h3 className="text-xl font-bold mb-2">Meio Ambiente</h3>
<p className="text-sm text-neutral-500">Economia circular, práticas sustentáveis e regeneração de ecossistemas locais.</p>
</div>
</div>

<div className="flashlight-card p-8 rounded-2xl h-80 flex flex-col justify-between group cursor-default reveal delay-200">
<div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div>
<h3 className="text-xl font-bold mb-2">Social &amp; Pessoas</h3>
<p className="text-sm text-neutral-500">Inclusão produtiva, assistência social e fortalecimento comunitário.</p>
</div>
</div>

<div className="flashlight-card p-8 rounded-2xl h-80 flex flex-col justify-between group cursor-default reveal delay-300">
<div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="lightbulb"></i>
</div>
<div>
<h3 className="text-xl font-bold mb-2">Inovação</h3>
<p className="text-sm text-neutral-500">Tecnologia social, educação criativa e novas metodologias de ensino.</p>
</div>
</div>

<div className="flashlight-card p-8 rounded-2xl h-80 flex flex-col justify-between group cursor-default reveal delay-100">
<div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="landmark"></i>
</div>
<div>
<h3 className="text-xl font-bold mb-2">Institucional</h3>
<p className="text-sm text-neutral-500">Articulação multissetorial, governança corporativa e interesse público.</p>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section flex items-center justify-center px-6 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
<div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 items-center">
<div className="lg:w-1/3 space-y-6 reveal z-20">
<span className="text-sm font-bold tracking-widest uppercase text-secondary">Nossos Projetos</span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Impacto na <br/>prática.</h2>
<p className="text-neutral-600 dark:text-neutral-400">
                        Conheça algumas das iniciativas que estão transformando realidades em todo o Brasil.
                    </p>
<div className="flex gap-4 pt-4">
<button aria-label="Anterior" className="w-12 h-12 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-white dark:hover:bg-neutral-800 transition-colors" id="prev-slide">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button aria-label="Próximo" className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center hover:scale-105 transition-transform" id="next-slide">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="lg:w-2/3 w-full relative h-[400px] perspective-1000 reveal delay-200">

<div className="relative w-full h-full preserve-3d transition-transform duration-700 ease-out" id="carousel-track">

<div className="absolute inset-0 bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row carousel-item" data-index="0" style={{transform: 'translateZ(0)'}}>
<div className="w-full md:w-1/2 h-48 md:h-full">
<img alt="Projeto Educação" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
<div className="text-xs font-bold text-accent uppercase mb-2">Educação</div>
<h3 className="text-2xl font-bold mb-4">Projeto Transforma</h3>
<p className="text-sm text-neutral-500 mb-6">Qualificação profissional para jovens em situação de vulnerabilidade, focando em tecnologia e soft skills.</p>
<a className="text-sm font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-primary transition-all" href="#">Saiba mais</a>
</div>
</div>

<div className="absolute inset-0 bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row carousel-item opacity-0 pointer-events-none" data-index="1" style={{transform: 'translateZ(-100px) translateX(50px)'}}>
<div className="w-full md:w-1/2 h-48 md:h-full">
<img alt="Projeto Meio Ambiente" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
<div className="text-xs font-bold text-primary uppercase mb-2">Meio Ambiente</div>
<h3 className="text-2xl font-bold mb-4">Verdejando</h3>
<p className="text-sm text-neutral-500 mb-6">Reflorestamento urbano e criação de hortas comunitárias em áreas periféricas.</p>
<a className="text-sm font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-primary transition-all" href="#">Saiba mais</a>
</div>
</div>

<div className="absolute inset-0 bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row carousel-item opacity-0 pointer-events-none" data-index="2" style={{transform: 'translateZ(-100px) translateX(50px)'}}>
<div className="w-full md:w-1/2 h-48 md:h-full">
<img alt="Projeto Cultura" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
<div className="text-xs font-bold text-secondary uppercase mb-2">Cultura</div>
<h3 className="text-2xl font-bold mb-4">Arte na Comunidade</h3>
<p className="text-sm text-neutral-500 mb-6">Oficinas de arte, música e teatro como ferramentas de inclusão e expressão.</p>
<a className="text-sm font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-primary transition-all" href="#">Saiba mais</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section flex flex-col items-center justify-center bg-white dark:bg-dark py-20">
<div className="max-w-4xl mx-auto text-center mb-16 px-6 reveal">
<span className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-2 block">Rede de Apoio</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Quem caminha conosco</h2>
</div>
<div className="w-full relative marquee-mask">
<div className="flex gap-16 animate-marquee whitespace-nowrap py-8 hover:[animation-play-state:paused] opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="hexagon"></i> EMPRESA A</div>
<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="triangle"></i> FUNDAÇÃO B</div>
<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="circle"></i> INSTITUTO C</div>
<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="square"></i> GOVERNO D</div>
<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="diamond"></i> TECH E</div>
<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="star"></i> GLOBAL F</div>

<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="hexagon"></i> EMPRESA A</div>
<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="triangle"></i> FUNDAÇÃO B</div>
<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="circle"></i> INSTITUTO C</div>
<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="square"></i> GOVERNO D</div>
<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="diamond"></i> TECH E</div>
<div className="flex items-center gap-2 font-bold text-2xl"><i className="w-8 h-8" data-lucide="star"></i> GLOBAL F</div>
</div>
</div>
</section>

<section className="snap-section flex flex-col justify-center px-6 bg-neutral-50 dark:bg-neutral-900/50">
<div className="max-w-7xl mx-auto w-full mb-12 reveal">
<span className="text-sm font-bold tracking-widest uppercase text-primary mb-2 block">Depoimentos</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Vozes da Transformação</h2>
</div>
<div className="w-full overflow-hidden marquee-mask">
<div className="flex gap-6 animate-marquee-reverse whitespace-nowrap p-4 hover:[animation-play-state:paused]">

<div className="w-[400px] flex-shrink-0 bg-white dark:bg-surface-dark p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm whitespace-normal">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">"O projeto mudou minha perspectiva de vida. Hoje tenho minha própria renda e consigo ajudar minha família."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div>
<div>
<p className="text-sm font-bold">Maria Silva</p>
<p className="text-xs text-neutral-500">Beneficiária, Projeto Transforma</p>
</div>
</div>
</div>

<div className="w-[400px] flex-shrink-0 bg-white dark:bg-surface-dark p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm whitespace-normal">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">"A seriedade e transparência do IDB nos dá segurança para investir em projetos de longo prazo."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div>
<div>
<p className="text-sm font-bold">João Santos</p>
<p className="text-xs text-neutral-500">Diretor, Empresa Parceira</p>
</div>
</div>
</div>

<div className="w-[400px] flex-shrink-0 bg-white dark:bg-surface-dark p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm whitespace-normal">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">"Ver a comunidade engajada em torno do Verdejando foi uma das experiências mais gratificantes."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div>
<div>
<p className="text-sm font-bold">Ana Oliveira</p>
<p className="text-xs text-neutral-500">Voluntária</p>
</div>
</div>
</div>

<div className="w-[400px] flex-shrink-0 bg-white dark:bg-surface-dark p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm whitespace-normal">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">"O projeto mudou minha perspectiva de vida. Hoje tenho minha própria renda e consigo ajudar minha família."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div>
<div>
<p className="text-sm font-bold">Maria Silva</p>
<p className="text-xs text-neutral-500">Beneficiária, Projeto Transforma</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section flex items-center justify-center px-6 bg-white dark:bg-dark text-center relative" id="contact">
<div className="max-w-4xl w-full space-y-12 z-10">
<div className="reveal">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Faça parte desta <br/><span className="text-primary">transformação.</span></h2>
<p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                        Seja um doador, voluntário ou parceiro institucional. Juntos podemos ir mais longe.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal delay-100">
<button className="group p-6 rounded-2xl bg-neutral-50 dark:bg-surface-dark border border-neutral-200 dark:border-neutral-800 hover:border-primary dark:hover:border-primary transition-all">
<i className="w-8 h-8 mx-auto mb-4 text-red-500 group-hover:scale-110 transition-transform" data-lucide="heart"></i>
<span className="block text-lg font-bold">Quero Doar</span>
</button>
<button className="group p-6 rounded-2xl bg-neutral-50 dark:bg-surface-dark border border-neutral-200 dark:border-neutral-800 hover:border-secondary dark:hover:border-secondary transition-all">
<i className="w-8 h-8 mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" data-lucide="hand"></i>
<span className="block text-lg font-bold">Ser Voluntário</span>
</button>
<button className="group p-6 rounded-2xl bg-neutral-50 dark:bg-surface-dark border border-neutral-200 dark:border-neutral-800 hover:border-accent dark:hover:border-accent transition-all">
<i className="w-8 h-8 mx-auto mb-4 text-orange-500 group-hover:scale-110 transition-transform" data-lucide="briefcase"></i>
<span className="block text-lg font-bold">Ser Parceiro</span>
</button>
</div>
<div className="border-t border-neutral-200 dark:border-neutral-800 pt-12 reveal delay-200">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">

<svg className="w-6 h-6" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<rect className="fill-primary/10 dark:fill-white/10" height="40" rx="10" width="40"></rect>
<path className="fill-primary" d="M20 12C20 12 14 18 14 24C14 27.3137 16.6863 30 20 30C23.3137 30 26 27.3137 26 24C26 18 20 12 20 12Z"></path>
<circle className="fill-accent" cx="26" cy="14" r="3"></circle>
</svg>
<div className="text-left">
<p className="font-bold text-sm">Instituto Desponta Brasil</p>
<p className="text-xs text-neutral-500">CNPJ: 00.000.000/0001-00</p>
</div>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-primary transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-500 hover:text-primary transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-neutral-500 hover:text-primary transition-colors" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 hidden md:flex">
<button aria-label="Seção 1" className="w-2 h-2 rounded-full bg-primary transition-all duration-300 hover:scale-150"></button>
<button aria-label="Seção 2" className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-300 hover:scale-150 hover:bg-primary"></button>
<button aria-label="Seção 3" className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-300 hover:scale-150 hover:bg-primary"></button>
<button aria-label="Seção 4" className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-300 hover:scale-150 hover:bg-primary"></button>
<button aria-label="Seção 5" className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-300 hover:scale-150 hover:bg-primary"></button>
<button aria-label="Seção 6" className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-300 hover:scale-150 hover:bg-primary"></button>
<button aria-label="Seção 7" className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-300 hover:scale-150 hover:bg-primary"></button>
<button aria-label="Seção 8" className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-300 hover:scale-150 hover:bg-primary"></button>
</div>


    </>
  );
}
