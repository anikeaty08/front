import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#050505',
surface: '#0f0f0f',
primary: '#3b82f6',
accent: '#06b6d4',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'blob': 'blob 10s infinite',
'shimmer': 'shimmer 2s linear infinite',
'meteor': 'meteor 5s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' },
},
meteor: {
'0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
'70%': { opacity: '1' },
'100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // 1. Hero Title Animation (Letter by Letter Clip)
        const titleText = "Engenharia de software de ponta a ponta.";
        const titleElement = document.getElementById('hero-title');
        
        // Split text into words for better responsive wrapping, then chars
        const words = titleText.split(' ');
        let html = '';
        let charIndex = 0;
        
        words.forEach((word, wordIdx) => {
            html += '<span class="inline-block mr-2 sm:mr-4 whitespace-nowrap">';
            [...word].forEach(char => {
                html += `<span class="reveal-text inline-block" style="animation-delay: ${charIndex * 0.05}s">${char}</span>`;
                charIndex++;
            });
            html += '</span>';
        });
        
        titleElement.innerHTML = html;

        // 2. Intersection Observer for Fade-in Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Run once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-enter').forEach(el => observer.observe(el));

        // 3. Spotlight / Flashlight Effect on Cards AND Background
        const cards = document.querySelectorAll('.spotlight-card');
        
        // Background Spotlight Logic
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.body.style.setProperty('--mouse-x', `${x}px`);
            document.body.style.setProperty('--mouse-y', `${y}px`);
        });

        // Card Spotlight Logic
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--card-x', `${x}px`);
                card.style.setProperty('--card-y', `${y}px`);
            });
        });

        // 4. 3D Carousel Logic
        const slides = document.querySelectorAll('.carousel-card');
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        let currentSlide = 0;
        const totalSlides = slides.length;

        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.className = 'carousel-card bg-[#0f0f0f] rounded-2xl border border-white/10 overflow-hidden group shadow-2xl shadow-black/50';
                
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else if (index === (currentSlide + 1) % totalSlides) {
                    slide.classList.add('next');
                } else if (index === (currentSlide - 1 + totalSlides) % totalSlides) {
                    slide.classList.add('prev');
                } else {
                    // Hidden slides
                    slide.style.opacity = '0';
                    slide.style.zIndex = '0';
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Auto rotate carousel
        let carouselInterval = setInterval(nextSlide, 5000);
        
        // Pause on hover
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => clearInterval(carouselInterval));
        carouselContainer.addEventListener('mouseleave', () => carouselInterval = setInterval(nextSlide, 5000));

        updateCarousel(); // Initial state

        // 5. Navbar Blur on Scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('border-white/10');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('border-white/10');
                navbar.classList.add('border-transparent');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full pointer-events-none z-0">

<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-blob" style={{animationDelay: '2s'}}></div>

<div className="absolute inset-0 grid-pattern opacity-30"></div>

<div className="spotlight-bg"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-white hover:opacity-80 transition-opacity uppercase" href="#">
                Portfolio<span className="text-blue-500">.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#work">Projetos</a>
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#contact">Contato</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:scale-105 focus:ring-2 ring-blue-500/50 outline-none" href="#contact">
                Vamos Conversar
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
<div className="meteor-effect" style={{top: '0px', left: '80%', animationDelay: '0s', animationDuration: '2s'}}></div>
<div className="meteor-effect" style={{top: '0px', left: '20%', animationDelay: '2s', animationDuration: '3s'}}></div>
<div className="meteor-effect" style={{top: '100px', left: '60%', animationDelay: '4s', animationDuration: '2.5s'}}></div>
<div className="meteor-effect" style={{top: '-50px', left: '40%', animationDelay: '6s', animationDuration: '3.5s'}}></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8 fade-enter delay-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Disponível para novos projetos
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]" id="hero-title">

</h1>
<p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed fade-enter delay-200">
                Desenvolvedor Fullstack especializado em .NET, React e arquitetura escalável. Transformando requisitos complexos em sistemas digitais robustos e de alta performance.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 fade-enter delay-300">
<a className="group btn-shine relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:bg-white/15 hover:border-white/20" href="#work">
<span className="relative z-10">Ver Projetos</span>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors" href="https://github.com" target="_blank">
<i className="w-4 h-4" data-lucide="github"></i>
                    GitHub
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce z-20">
<span className="text-[10px] uppercase tracking-widest text-slate-500">Scroll</span>
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.02] relative overflow-hidden z-10">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="flex w-full overflow-hidden">
<div className="flex items-center gap-16 animate-marquee whitespace-nowrap min-w-full pl-16 hover:[animation-play-state:paused]">

<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-purple-500" data-lucide="code"></i> .NET Core
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-blue-400" data-lucide="terminal"></i> C#
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-cyan-400" data-lucide="code-2"></i> React.js
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-white" data-lucide="layers"></i> Next.js
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-green-400" data-lucide="cpu"></i> Node.js
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-yellow-400" data-lucide="database"></i> SQL Server
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-blue-300" data-lucide="container"></i> Docker
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-yellow-300" data-lucide="file-code"></i> Python
                </div>

<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-purple-500" data-lucide="code"></i> .NET Core
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-blue-400" data-lucide="terminal"></i> C#
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-cyan-400" data-lucide="code-2"></i> React.js
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-white" data-lucide="layers"></i> Next.js
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-green-400" data-lucide="cpu"></i> Node.js
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-yellow-400" data-lucide="database"></i> SQL Server
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-blue-300" data-lucide="container"></i> Docker
                </div>
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
<i className="w-5 h-5 text-yellow-300" data-lucide="file-code"></i> Python
                </div>
</div>
</div>
</section>

<section className="pt-24 pb-12 relative overflow-hidden z-10" id="work">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 fade-enter">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">Projetos em Destaque</h2>
<p className="text-slate-400">Soluções desenvolvidas com foco em escalabilidade e automação.</p>
</div>
<div className="flex gap-2">
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white" id="prev-slide">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white" id="next-slide">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="carousel-container relative h-[450px] md:h-[500px] w-full max-w-4xl mx-auto mb-20">

<div className="carousel-card active bg-[#0f0f0f] rounded-2xl border border-white/10 overflow-hidden group shadow-2xl shadow-black/50" data-index="0">
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-10"></div>
<img alt="Paralela Hospedagem" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" src="https://images.unsplash.com/photo-1558494949-ef526b004297?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
<div className="flex items-center justify-between w-full mb-2">
<div className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Infrastructure</div>
<a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" href="https://paralela.net/" target="_blank"><i className="w-4 h-4 text-white" data-lucide="external-link"></i></a>
</div>
<h3 className="text-2xl md:text-4xl font-medium text-white mb-4">Paralela Hospedagem</h3>
<p className="text-slate-400 max-w-md mb-6 text-sm md:text-base line-clamp-2">Plataforma robusta de servidores e hospedagem, oferecendo alta disponibilidade e gerenciamento simplificado de infraestrutura.</p>
<div className="flex gap-3">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">Cloud</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">DevOps</span>
</div>
</div>
</div>

<div className="carousel-card next bg-[#0f0f0f] rounded-2xl border border-white/10 overflow-hidden group shadow-2xl shadow-black/50" data-index="1">
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-10"></div>
<img alt="Paralela AI" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
<div className="flex items-center justify-between w-full mb-2">
<div className="text-purple-400 text-xs font-semibold uppercase tracking-widest">Artificial Intelligence</div>
<a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" href="https://paralela.ai/" target="_blank"><i className="w-4 h-4 text-white" data-lucide="external-link"></i></a>
</div>
<h3 className="text-2xl md:text-4xl font-medium text-white mb-4">Paralela AI</h3>
<p className="text-slate-400 max-w-md mb-6 text-sm md:text-base line-clamp-2">Sistema de automação de atendimento inteligente utilizando IA para otimizar suporte e interação com clientes.</p>
<div className="flex gap-3">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">LLMs</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">Python</span>
</div>
</div>
</div>

<div className="carousel-card prev bg-[#0f0f0f] rounded-2xl border border-white/10 overflow-hidden group shadow-2xl shadow-black/50" data-index="2">
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-10"></div>
<img alt="Teórico" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
<div className="flex items-center justify-between w-full mb-2">
<div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">EdTech</div>
<a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" href="https://teorico.com.br/" target="_blank"><i className="w-4 h-4 text-white" data-lucide="external-link"></i></a>
</div>
<h3 className="text-2xl md:text-4xl font-medium text-white mb-4">Teórico - Sistema Educacional</h3>
<p className="text-slate-400 max-w-md mb-6 text-sm md:text-base line-clamp-2">Ecossistema educacional completo para gestão de aprendizado, integrando alunos e professores de forma intuitiva.</p>
<div className="flex gap-3">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">.NET</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">React</span>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto mt-16 fade-enter">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-6 pl-2">Outros Projetos</h3>
<div className="grid gap-4">

<a className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all" href="https://drivin.com.br/" target="_blank">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
<i className="w-5 h-5" data-lucide="car"></i>
</div>
<div>
<div className="text-white font-medium group-hover:text-blue-400 transition-colors">Drivin - EAD Autoescola</div>
<div className="text-xs text-slate-500">Plataforma de ensino à distância especializada.</div>
</div>
</div>
<i className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</a>

<a className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all" href="http://sermaisvet.com.br/" target="_blank">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<i className="w-5 h-5" data-lucide="stethoscope"></i>
</div>
<div>
<div className="text-white font-medium group-hover:text-blue-400 transition-colors">Ser Mais Vet</div>
<div className="text-xs text-slate-500">Portal institucional para clínica veterinária.</div>
</div>
</div>
<i className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</a>

<a className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all" href="https://petrofprojetos.com.br/" target="_blank">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<i className="w-5 h-5" data-lucide="hard-hat"></i>
</div>
<div>
<div className="text-white font-medium group-hover:text-blue-400 transition-colors">Petrof Projetos</div>
<div className="text-xs text-slate-500">Site institucional de engenharia.</div>
</div>
</div>
<i className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</a>

<a className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all" href="https://farukengenharia.com.br/" target="_blank">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-500/10 flex items-center justify-center text-slate-400">
<i className="w-5 h-5" data-lucide="factory"></i>
</div>
<div>
<div className="text-white font-medium group-hover:text-blue-400 transition-colors">Faruk Engenharia</div>
<div className="text-xs text-slate-500">Página institucional industrial.</div>
</div>
</div>
<i className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</a>

<div className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 opacity-75 cursor-default">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<div>
<div className="text-white font-medium">Go Travel Admin</div>
<div className="text-xs text-slate-500">Painel administrativo interno.</div>
</div>
</div>
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-slate-500">Internal</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#080808] border-t border-white/5 z-10 relative" id="expertise">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl font-medium text-white mb-4">Expertise Técnica</h2>
<p className="text-slate-400">Áreas onde entrego resultados excepcionais.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="spotlight-card group rounded-2xl bg-[#0f0f0f] border border-white/5 p-8 fade-enter hover:border-blue-500/30 transition-colors cursor-default relative overflow-hidden">
<span className="absolute top-6 right-6 text-6xl font-bold text-white/[0.02] select-none">01</span>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
<i className="w-6 h-6" data-lucide="server"></i>
</div>
<h4 className="text-xl font-medium text-white mb-3">Backend Development</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        APIs RESTful, microserviços e arquitetura escalável. Foco em performance e segurança no lado do servidor.
                    </p>
<div className="flex flex-wrap gap-2 mt-auto border-t border-white/5 pt-4">
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">.NET Core</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">C#</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">Node.js</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">SQL Server</span>
</div>
</div>

<div className="spotlight-card group rounded-2xl bg-[#0f0f0f] border border-white/5 p-8 fade-enter hover:border-cyan-500/30 transition-colors cursor-default relative overflow-hidden" style={{animationDelay: '100ms'}}>
<span className="absolute top-6 right-6 text-6xl font-bold text-white/[0.02] select-none">02</span>
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/20">
<i className="w-6 h-6" data-lucide="layout"></i>
</div>
<h4 className="text-xl font-medium text-white mb-3">Frontend Development</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Interfaces modernas e responsivas com foco em experiência do usuário, acessibilidade e renderização otimizada.
                    </p>
<div className="flex flex-wrap gap-2 mt-auto border-t border-white/5 pt-4">
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">React.js</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">Next.js</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">TypeScript</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">Tailwind CSS</span>
</div>
</div>

<div className="spotlight-card group rounded-2xl bg-[#0f0f0f] border border-white/5 p-8 fade-enter hover:border-green-500/30 transition-colors cursor-default relative overflow-hidden" style={{animationDelay: '200ms'}}>
<span className="absolute top-6 right-6 text-6xl font-bold text-white/[0.02] select-none">03</span>
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 text-green-400 border border-green-500/20">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h4 className="text-xl font-medium text-white mb-3">Quality Assurance</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Garantia de qualidade através de testes automatizados e validação rigorosa de sistemas complexos.
                    </p>
<div className="flex flex-wrap gap-2 mt-auto border-t border-white/5 pt-4">
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">QA Testing</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">Automation</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">Bug Tracking</span>
</div>
</div>

<div className="spotlight-card group rounded-2xl bg-[#0f0f0f] border border-white/5 p-8 fade-enter hover:border-orange-500/30 transition-colors cursor-default relative overflow-hidden" style={{animationDelay: '300ms'}}>
<span className="absolute top-6 right-6 text-6xl font-bold text-white/[0.02] select-none">04</span>
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400 border border-orange-500/20">
<i className="w-6 h-6" data-lucide="cloud-cog"></i>
</div>
<h4 className="text-xl font-medium text-white mb-3">DevOps &amp; Cloud</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Containerização, pipelines de CI/CD e gerenciamento de infraestrutura em nuvem para deploys eficientes.
                    </p>
<div className="flex flex-wrap gap-2 mt-auto border-t border-white/5 pt-4">
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">Docker</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">CI/CD</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">Git</span>
<span className="text-[11px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">Python</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden z-10" id="contact">
<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50 fade-enter">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-3">Vamos criar algo grandioso</h2>
<p className="text-slate-400">Tem um projeto em mente? Entre em contato.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 pl-1">Nome</label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600" placeholder="Seu nome" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 pl-1">Email</label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600" placeholder="seu@email.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 pl-1">Mensagem</label>
<textarea className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 resize-none" placeholder="Fale sobre seu projeto..." rows="4"></textarea>
</div>
<button className="w-full relative group overflow-hidden rounded-xl bg-white text-black font-medium py-4 transition-transform active:scale-[0.98]" type="submit">
<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-10 transition-opacity"></div>
<span className="relative flex items-center justify-center gap-2">
                            Enviar Mensagem
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="send"></i>
</span>
</button>
</form>
<div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm text-slate-500">
<a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:contato@exemplo.com">
<i className="w-4 h-4" data-lucide="mail"></i> contato@exemplo.com
                    </a>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-8 text-center text-slate-600 text-xs border-t border-white/5 bg-[#050505] z-10 relative">
<p>© 2024 Portfolio. Todos os direitos reservados. Designed &amp; Developed with precision.</p>
</footer>


    </>
  );
}
