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
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Setup Lenis Smooth Scroll
        const lenis = new Lenis({
            lerp: 0.08,
            smooth: true,
            direction: 'vertical',
        });
        
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({ ease: "expo.out" });

        // Hero Sequence
        const tlHero = gsap.timeline({ delay: 0.2 });
        tlHero.to('.gsap-hero', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
        }).to('#hero-mockup', {
            opacity: 1,
            scale: 1,
            duration: 1.5,
        }, "-=0.8");

        // Bento Cards Reveal
        gsap.utils.toArray('.reveal-card').forEach((card, i) => {
            gsap.fromTo(card, 
                { opacity: 0, y: 40, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Simple Fade Up Items
        gsap.utils.toArray('.reveal-item').forEach(item => {
            gsap.fromTo(item, 
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    }
                }
            );
        });

        // Process Steps Stagger
        gsap.fromTo('.process-step', 
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#processo",
                    start: "top 70%",
                }
            }
        );

        // Progress Bar Animation
        const progressBar = document.querySelector('.progress-bar');
        if(progressBar) {
            ScrollTrigger.create({
                trigger: progressBar,
                start: "top 90%",
                onEnter: () => {
                    gsap.to(progressBar, {
                        width: progressBar.getAttribute('data-width'),
                        duration: 1.5,
                        ease: "power3.out",
                        delay: 0.3
                    });
                }
            });
        }

        // Counter Animation
        const counter = document.querySelector('.counter');
        if(counter) {
            gsap.from(counter, {
                textContent: 0,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 90%",
                    once: true
                },
                onUpdate: function() {
                    this.targets()[0].innerHTML = this.targets()[0].textContent;
                }
            });
        }

        // Navbar interaction
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-sm');
                nav.style.background = 'rgba(250, 250, 250, 0.85)';
            } else {
                nav.classList.remove('shadow-sm');
                nav.style.background = 'rgba(250, 250, 250, 0.6)';
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('invisible', 'opacity-0');
                gsap.to(mobileMenu, { opacity: 1, visibility: 'visible', duration: 0.4, ease: 'expo.out' });
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" stroke-width="1.5"></iconify-icon>';
                document.body.style.overflow = 'hidden';
            } else {
                gsap.to(mobileMenu, { opacity: 0, visibility: 'hidden', duration: 0.3, ease: 'power2.in', onComplete: () => mobileMenu.classList.add('invisible', 'opacity-0') });
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" stroke-width="1.5"></iconify-icon>';
                document.body.style.overflow = '';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 bg-[#FAFAFA] -z-50"></div>

<div className="fixed top-[-20%] left-[20%] w-[60%] h-[50%] bg-[#0071E3] opacity-[0.03] blur-[120px] rounded-full pointer-events-none -z-40"></div>
<div className="noise-overlay"></div>
<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-500">
<div className="flex h-14 md:h-16 max-w-5xl mx-auto px-6 items-center justify-between">
<a className="z-50 flex items-center gap-2 group" href="#">
<span className="text-xl text-[#1D1D1F] flex items-center justify-center transition-transform group-hover:scale-105">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="text-base text-[#1D1D1F] tracking-tighter font-medium">NEXUS</span>
</a>
<div className="hidden md:flex gap-8 text-xs font-sans text-[#86868B] font-normal">
<a className="hover:text-[#1D1D1F] transition-colors duration-300" href="#servicos">Serviços</a>
<a className="hover:text-[#1D1D1F] transition-colors duration-300" href="#processo">Processo</a>
<a className="hover:text-[#1D1D1F] transition-colors duration-300" href="#planos">Planos</a>
</div>
<div className="hidden md:flex items-center">
<button className="bg-[#1D1D1F] text-white rounded-full px-5 py-2 font-medium text-xs transition-all duration-300 hover:bg-[#333336] hover:scale-105 active:scale-95 shadow-sm">
                    Iniciar Projeto
                </button>
</div>
<button className="md:hidden z-50 text-[#1D1D1F] p-2 focus:outline-none flex items-center justify-center text-xl transition-transform active:scale-90" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>
<div className="fixed inset-0 z-40 bg-[#FAFAFA]/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 invisible opacity-0" id="mobile-menu">
<div className="flex flex-col gap-6 text-center w-full px-10">
<a className="text-2xl font-sans font-medium tracking-tight text-[#1D1D1F] mobile-link" href="#servicos">Serviços</a>
<a className="text-2xl font-sans font-medium tracking-tight text-[#1D1D1F] mobile-link" href="#processo">Processo</a>
<a className="text-2xl font-sans font-medium tracking-tight text-[#1D1D1F] mobile-link" href="#planos">Planos</a>
<div className="w-full h-px bg-black/5 my-4"></div>
<button className="w-full bg-[#1D1D1F] text-white rounded-full py-3 font-medium text-sm transition-all active:scale-95">
                Iniciar Projeto
            </button>
</div>
</div>
<main className="pt-24 md:pt-32">

<section className="relative w-full flex flex-col justify-start items-center overflow-visible pb-10">
<div className="relative z-20 text-center max-w-4xl px-6 flex flex-col items-center">
<div className="gsap-hero opacity-0 translate-y-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-sm text-xs font-medium text-[#1D1D1F] mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] animate-pulse-subtle"></span>
                    Nexus Studio 2.0
                </div>
<h1 className="gsap-hero font-sans font-medium text-5xl md:text-7xl tracking-tighter mb-6 leading-[1.1] text-[#1D1D1F] opacity-0 translate-y-8">
                    Design que encanta.<br/>
<span className="text-[#86868B]">Performance que converte.</span>
</h1>
<p className="gsap-hero text-[#86868B] text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-normal opacity-0 translate-y-8">
                    Criamos presenças digitais minimalistas para marcas de elite. Sites extremamente rápidos, visualmente impecáveis e perfeitamente otimizados.
                </p>
<div className="gsap-hero flex flex-col sm:flex-row gap-5 justify-center items-center opacity-0 translate-y-8 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-[#0071E3] text-white rounded-full px-8 py-3.5 font-medium text-sm transition-all duration-300 premium-shadow hover:-translate-y-0.5 active:translate-y-0">
                        Iniciar Projeto
                    </button>
<a className="text-[#86868B] hover:text-[#1D1D1F] font-medium text-sm transition-all duration-300 inline-flex items-center gap-1.5 group" href="#servicos">
                        Conhecer serviços
                        <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto h-[350px] sm:h-[450px] mt-16 sm:mt-24 opacity-0 scale-95 px-6 sm:px-0 z-10 perspective-1000" id="hero-mockup">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#0071E3]/10 blur-[80px] rounded-full -z-10"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-[85%] h-[90%] bg-[#FFFFFF]/90 backdrop-blur-md rounded-t-[1.5rem] border-t border-x border-white shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden animate-float">

<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none z-20"></div>
<div className="w-full h-6 sm:h-10 bg-[#FAFAFA] border-b border-black/[0.03] flex items-center px-5 gap-2 relative z-10">
<div className="w-2.5 h-2.5 rounded-full bg-[#E5E5EA]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#E5E5EA]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#E5E5EA]"></div>
</div>
<div className="flex-1 p-6 sm:p-12 bg-[#FFFFFF] relative z-10 flex flex-col">
<div className="w-1/3 h-4 bg-[#F5F5F7] rounded-full mb-8"></div>
<div className="flex gap-6 sm:gap-10 h-full">
<div className="w-1/2 h-full bg-gradient-to-br from-[#F5F5F7] to-[#FAFAFA] rounded-2xl border border-black/[0.02]"></div>
<div className="w-1/2 flex flex-col gap-5 sm:gap-6">
<div className="w-full h-2/5 bg-[#F5F5F7] rounded-2xl border border-black/[0.02]"></div>
<div className="w-4/5 h-8 bg-[#F5F5F7] rounded-lg"></div>
<div className="w-3/5 h-5 bg-[#F5F5F7] rounded-md"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-4 sm:right-[5%] w-[30%] sm:w-[24%] h-[100%] bg-[#FFFFFF]/95 backdrop-blur-xl rounded-t-[2rem] border-t border-x border-white shadow-[0_-10px_40px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden z-30 transform translate-y-4 hover:translate-y-2 transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/60 pointer-events-none z-20"></div>
<div className="w-full h-8 bg-[#FFFFFF] flex items-center justify-center pt-3 border-b border-black/[0.02] relative z-10">
<div className="w-1/4 h-1.5 bg-[#E5E5EA] rounded-full"></div>
</div>
<div className="flex-1 p-5 bg-[#FFFFFF] flex flex-col gap-4 relative z-10">
<div className="w-3/4 h-4 bg-[#F5F5F7] rounded-full mb-2"></div>
<div className="w-full h-32 bg-gradient-to-br from-[#F5F5F7] to-[#FAFAFA] rounded-xl border border-black/[0.02]"></div>
<div className="w-full h-20 bg-[#F5F5F7] rounded-xl"></div>
<div className="w-5/6 h-20 bg-[#F5F5F7] rounded-xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative z-20" id="servicos">
<div className="max-w-5xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 reveal-item">
<h2 className="font-sans font-medium text-[#1D1D1F] text-3xl md:text-4xl tracking-tight mb-5">Engenharia de Elite</h2>
<p className="text-[#86868B] text-base font-normal leading-relaxed">A união perfeita entre forma e função. Cada detalhe construído metodicamente para maximizar seus resultados digitais.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="bento-card p-8 md:p-10 flex flex-col justify-between min-h-[320px] reveal-card">
<div className="w-12 h-12 text-[#1D1D1F] flex items-center justify-center rounded-2xl mb-8 icon-box">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-sans font-medium text-xl text-[#1D1D1F] mb-3 tracking-tight">Design UI/UX</h3>
<p className="text-[#86868B] text-sm leading-relaxed font-normal">Interfaces limpas, minimalistas e altamente intuitivas. Focamos em guiar a atenção do usuário perfeitamente para a conversão, usando a estética a seu favor.</p>
</div>
</div>

<div className="bento-card p-8 md:p-10 flex flex-col justify-between min-h-[320px] reveal-card">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 text-[#1D1D1F] flex items-center justify-center rounded-2xl icon-box">
<iconify-icon className="text-2xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-[#0071E3]/5 border border-[#0071E3]/10 px-3 py-1.5 rounded-full text-xs font-medium text-[#0071E3] flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] animate-pulse-subtle"></span>
                                Vitals
                            </div>
</div>
<div>
<div className="flex items-baseline gap-1 mb-3">
<span className="text-5xl font-medium text-[#1D1D1F] tracking-tighter counter" data-target="99">90</span>
<span className="text-2xl text-[#0071E3] font-medium">+</span>
</div>
<h3 className="font-sans font-medium text-lg text-[#1D1D1F] mb-2 tracking-tight">Velocidade Extrema</h3>
<p className="text-[#86868B] text-sm leading-relaxed font-normal">Arquitetura livre de inchaços genéricos. Código limpo que garante notas máximas no Google PageSpeed Insights.</p>
</div>
</div>

<div className="bento-card p-8 md:p-10 flex flex-col justify-between min-h-[320px] reveal-card">
<div className="w-12 h-12 text-[#1D1D1F] flex items-center justify-center rounded-2xl mb-8 icon-box">
<iconify-icon className="text-2xl" icon="solar:global-search-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-5">
<div>
<h3 className="font-sans font-medium text-xl text-[#1D1D1F] mb-3 tracking-tight">SEO Técnico Avançado</h3>
<p className="text-[#86868B] text-sm leading-relaxed font-normal">Estruturação semântica de HTML5, Schema Markup e meta-tags otimizadas para domínio nos resultados orgânicos.</p>
</div>
<div className="flex flex-col gap-3 pt-2">
<div className="w-full h-1.5 bg-[#F5F5F7] rounded-full overflow-hidden">
<div className="w-0 h-full bg-[#1D1D1F] rounded-full progress-bar" data-width="95%"></div>
</div>
<div className="flex justify-between text-[10px] text-[#86868B] uppercase tracking-widest font-medium">
<span>Indexação</span>
<span className="text-[#1D1D1F]">Otimizado</span>
</div>
</div>
</div>
</div>

<div className="bento-card p-8 md:p-10 flex flex-col justify-between min-h-[320px] reveal-card">
<div className="w-12 h-12 text-[#1D1D1F] flex items-center justify-center rounded-2xl mb-8 icon-box">
<iconify-icon className="text-2xl" icon="solar:devices-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-sans font-medium text-xl text-[#1D1D1F] mb-3 tracking-tight">Responsividade Fluida</h3>
<p className="text-[#86868B] text-sm leading-relaxed font-normal">A experiência do seu usuário deve ser perfeita em qualquer tela. Desenvolvemos interfaces adaptáveis que mantêm a elegância no celular, tablet ou desktop.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative z-20" id="processo">
<div className="absolute inset-0 bg-white/50 border-y border-black/[0.02] -z-10"></div>
<div className="max-w-4xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20 md:mb-28 reveal-item">
<h2 className="font-sans font-medium text-[#1D1D1F] text-3xl md:text-4xl tracking-tight mb-5">Como Trabalhamos</h2>
<p className="text-[#86868B] text-base font-normal leading-relaxed">Um processo simples, transparente e focado em entregar excelência sem atritos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative">

<div className="hidden md:block absolute top-[32px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#E5E5EA] to-transparent">
<div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-[#1D1D1F]/20 to-transparent animate-[slide_3s_ease-in-out_infinite]"></div>
</div>

<div className="flex flex-col items-center text-center relative z-10 process-step">
<div className="w-16 h-16 bg-[#FFFFFF] text-[#1D1D1F] border border-black/[0.04] shadow-sm rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-lg text-[#1D1D1F] mb-3 tracking-tight">01. Descoberta</h3>
<p className="text-[#86868B] text-sm font-normal leading-relaxed px-4">Imersão na sua marca e objetivos. Criamos wireframes estruturais e definimos a identidade visual e estratégias de conversão.</p>
</div>
<div className="flex flex-col items-center text-center relative z-10 process-step">
<div className="w-16 h-16 bg-[#FFFFFF] text-[#1D1D1F] border border-black/[0.04] shadow-sm rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-lg text-[#1D1D1F] mb-3 tracking-tight">02. Construção</h3>
<p className="text-[#86868B] text-sm font-normal leading-relaxed px-4">Design de alta fidelidade e codificação limpa. Implementamos as animações, arquitetura semântica e otimizações.</p>
</div>
<div className="flex flex-col items-center text-center relative z-10 process-step">
<div className="w-16 h-16 bg-[#FFFFFF] text-[#1D1D1F] border border-black/[0.04] shadow-sm rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-lg text-[#1D1D1F] mb-3 tracking-tight">03. Lançamento</h3>
<p className="text-[#86868B] text-sm font-normal leading-relaxed px-4">Revisão rigorosa de SEO e responsividade. O site é publicado em infraestrutura de elite, seguro e pronto para escalar.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative z-20" id="planos">
<div className="max-w-5xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 reveal-item">
<h2 className="font-sans font-medium text-[#1D1D1F] text-3xl md:text-4xl tracking-tight mb-5">Investimento</h2>
<p className="text-[#86868B] text-base font-normal leading-relaxed">Soluções modulares para cada estágio do seu negócio.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

<div className="bento-card p-8 md:p-10 flex flex-col h-full reveal-card">
<div className="font-sans text-xl text-[#1D1D1F] font-medium mb-3 tracking-tight">Presença</div>
<p className="text-sm text-[#86868B] mb-10 font-normal leading-relaxed">Ideal para marcas pessoais e landing pages de alta conversão.</p>
<div className="text-[10px] uppercase tracking-widest text-[#1D1D1F] font-medium mb-6">O que inclui</div>
<ul className="space-y-4 text-sm text-[#86868B] mb-12 font-sans flex-grow font-normal">
<li className="flex gap-3 items-start"><iconify-icon className="text-lg text-[#1D1D1F]/40 mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Design UI/UX Personalizado</li>
<li className="flex gap-3 items-start"><iconify-icon className="text-lg text-[#1D1D1F]/40 mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Responsividade Completa</li>
<li className="flex gap-3 items-start"><iconify-icon className="text-lg text-[#1D1D1F]/40 mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> SEO Técnico Básico</li>
</ul>
<button className="w-full bg-[#FAFAFA] border border-black/[0.05] text-[#1D1D1F] rounded-full py-3.5 font-medium text-xs transition-colors hover:bg-[#F5F5F7] mt-auto">Solicitar Proposta</button>
</div>

<div className="bento-card p-8 md:p-10 flex flex-col h-full border-[#0071E3]/10 shadow-[0_8px_30px_rgba(0,113,227,0.06)] md:-translate-y-4 relative reveal-card group">
<div className="absolute top-0 left-0 w-full h-1 bg-[#0071E3] opacity-80"></div>
<div className="flex justify-between items-center mb-3">
<div className="font-sans text-xl text-[#1D1D1F] font-medium tracking-tight">Performance</div>
<span className="bg-[#1D1D1F] text-white text-[10px] uppercase tracking-widest font-medium px-3 py-1.5 rounded-full shadow-sm">Popular</span>
</div>
<p className="text-sm text-[#86868B] mb-10 font-normal leading-relaxed">Sites institucionais completos ou E-commerce altamente otimizado.</p>
<div className="text-[10px] uppercase tracking-widest text-[#1D1D1F] font-medium mb-6">O que inclui</div>
<ul className="space-y-4 text-sm text-[#86868B] mb-12 font-sans flex-grow font-normal">
<li className="flex gap-3 items-start"><iconify-icon className="text-lg text-[#0071E3] mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Tudo do plano Presença</li>
<li className="flex gap-3 items-start text-[#1D1D1F] font-medium"><iconify-icon className="text-lg text-[#0071E3] mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Otimização PageSpeed 90+</li>
<li className="flex gap-3 items-start"><iconify-icon className="text-lg text-[#0071E3] mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> CMS Avançado Integrado</li>
<li className="flex gap-3 items-start"><iconify-icon className="text-lg text-[#0071E3] mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Setup de Analytics Avançado</li>
</ul>
<button className="w-full bg-[#0071E3] text-white rounded-full py-3.5 font-medium text-xs transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 mt-auto premium-shadow">Iniciar Diagnóstico</button>
</div>

<div className="bento-card p-8 md:p-10 flex flex-col h-full reveal-card">
<div className="font-sans text-xl text-[#1D1D1F] font-medium mb-3 tracking-tight">Elite</div>
<p className="text-sm text-[#86868B] mb-10 font-normal leading-relaxed">Projetos sob medida, portais complexos ou plataformas integradas.</p>
<div className="text-[10px] uppercase tracking-widest text-[#1D1D1F] font-medium mb-6">O que inclui</div>
<ul className="space-y-4 text-sm text-[#86868B] mb-12 font-sans flex-grow font-normal">
<li className="flex gap-3 items-start"><iconify-icon className="text-lg text-[#1D1D1F]/40 mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Arquitetura Sob Medida</li>
<li className="flex gap-3 items-start"><iconify-icon className="text-lg text-[#1D1D1F]/40 mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Integrações API Complexas</li>
<li className="flex gap-3 items-start"><iconify-icon className="text-lg text-[#1D1D1F]/40 mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Consultoria de Conversão (CRO)</li>
</ul>
<button className="w-full bg-[#FAFAFA] border border-black/[0.05] text-[#1D1D1F] rounded-full py-3.5 font-medium text-xs transition-colors hover:bg-[#F5F5F7] mt-auto">Falar com Especialista</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#FFFFFF] pt-20 pb-10 px-6 border-t border-black/[0.04]">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-6 group" href="#">
<span className="text-xl text-[#1D1D1F] flex items-center justify-center transition-transform group-hover:scale-105">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="text-base text-[#1D1D1F] tracking-tighter font-medium">NEXUS</span>
</a>
<p className="text-sm text-[#86868B] font-normal mb-6 leading-relaxed">Receba insights mensais sobre performance web, design e conversão.</p>
<div className="flex gap-2">
<input className="bg-[#FAFAFA] border border-black/[0.04] px-4 py-2.5 rounded-xl text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#0071E3]/20 focus:border-[#0071E3]/20 text-[#1D1D1F] font-normal placeholder:text-[#86868B]/70 transition-all" placeholder="seu@email.com" type="email"/>
<button className="bg-[#1D1D1F] text-white rounded-xl px-4 py-2.5 font-medium text-xs transition-colors hover:bg-[#333336] shrink-0 active:scale-95">Assinar</button>
</div>
</div>
<div className="flex gap-16 text-sm text-[#86868B] font-sans">
<div className="flex flex-col gap-3.5 font-normal">
<span className="text-[#1D1D1F] font-medium mb-1 text-[10px] uppercase tracking-widest">Navegação</span>
<a className="hover:text-[#1D1D1F] transition-colors" href="#servicos">Serviços</a>
<a className="hover:text-[#1D1D1F] transition-colors" href="#processo">Processo</a>
<a className="hover:text-[#1D1D1F] transition-colors" href="#planos">Planos</a>
</div>
<div className="flex flex-col gap-3.5 font-normal">
<span className="text-[#1D1D1F] font-medium mb-1 text-[10px] uppercase tracking-widest">Legal</span>
<a className="hover:text-[#1D1D1F] transition-colors" href="#">Privacidade</a>
<a className="hover:text-[#1D1D1F] transition-colors" href="#">Termos</a>
</div>
</div>
</div>
<div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-black/[0.04] flex flex-col md:flex-row justify-between items-center text-[11px] text-[#86868B] font-sans gap-4 font-normal">
<span>© 2025 Nexus Studio. Todos os direitos reservados.</span>
<span className="flex items-center gap-1.5 uppercase tracking-widest text-[#1D1D1F]/50">
<span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]/50"></span>
                    Design First
                </span>
</div>
</footer>
</main>


    </>
  );
}
