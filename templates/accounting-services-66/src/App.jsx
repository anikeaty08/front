import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // Init Lucide Icons
        lucide.createIcons();

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('#hero-badge', { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
        gsap.to('#hero-title', { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' });
        gsap.to('#hero-sub', { opacity: 1, y: 0, duration: 1, delay: 0.7, ease: 'power3.out' });
        gsap.to('#hero-ctas', { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: 'power3.out' });
        gsap.to('#hero-note', { opacity: 1, y: 0, duration: 1, delay: 1.1, ease: 'power3.out' });

        // Horizontal Scroll for Differentiators
        const processInner = document.getElementById('process-inner');
        
        let scrollTween = gsap.to(processInner, {
            x: () => -(processInner.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: '#diferenciais',
                start: 'center center',
                end: () => '+=' + processInner.scrollWidth,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true
            }
        });

        const processCards = gsap.utils.toArray('.process-card');
        processCards.forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                y: 40,
                scale: 0.95,
                scrollTrigger: {
                    trigger: card,
                    containerAnimation: scrollTween,
                    start: 'left right-=100',
                    end: 'left center',
                    scrub: 1
                }
            });
        });

        // Grid Items Animations
        gsap.from('#problemas .grid > div', {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            duration: 0.8,
            scrollTrigger: { trigger: '#problemas', start: 'top 85%' }
        });

        gsap.from('#paths .grid > div', {
            opacity: 0,
            y: 40,
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: { trigger: '#paths', start: 'top 85%' }
        });
        
        // Servicos header animation to fix "nao aparece nada" issue
        gsap.from('#servicos-header > *', {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
            scrollTrigger: { trigger: '#servicos', start: 'top 85%' }
        });

        gsap.from('#servicos .grid > div', {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            duration: 0.8,
            scrollTrigger: { trigger: '#servicos', start: 'top 80%' }
        });

        gsap.from('#depoimentos .grid > div', {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: { trigger: '#depoimentos', start: 'top 85%' }
        });

        // Smooth Scroll anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="aura-background-component absolute inset-0">
<div className="absolute inset-0" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>
</div>
<div className="absolute inset-0 bg-[#b89818] mix-blend-color opacity-100"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] max-w-[1600px] max-h-[1600px] rounded-full blur-[100px] animate-[pulseBg_12s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(184, 152, 24, 0.15) 0%, rgba(184, 152, 24, 0.05) 40%, transparent 70%)'}}></div>
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,11,0.85) 100%)'}}></div>
</div>


<div className="relative z-10" id="scroll-container">

<nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0a0a0b]/60 border-b border-white/[0.06]">
<div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
<div className="font-['Space_Grotesk'] font-normal tracking-tighter text-xl text-white">
                    HÓRUS
                </div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#e8e6e3]/50 hover:text-[#e8e6e3] transition-colors tracking-widest uppercase font-light" href="#solucoes">Soluções</a>
<a className="text-sm text-[#e8e6e3]/50 hover:text-[#e8e6e3] transition-colors tracking-widest uppercase font-light" href="#diferenciais">Diferenciais</a>
<a className="text-sm text-[#e8e6e3]/50 hover:text-[#e8e6e3] transition-colors tracking-widest uppercase font-light" href="#servicos">Serviços</a>
<a className="text-sm text-[#e8e6e3]/50 hover:text-[#e8e6e3] transition-colors tracking-widest uppercase font-light" href="#depoimentos">Depoimentos</a>
</div>
<a className="hidden sm:block bg-[#b89818] hover:bg-[#d4af1c] text-[#0a0a0b] px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all no-underline" href="#contato">
                    Fale Conosco
                </a>
</div>
</nav>

<section className="min-h-screen flex flex-col items-center justify-center relative px-8 pt-32 pb-16" id="hero">
<div className="text-center w-full max-w-5xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#b89818]/30 mb-10 opacity-0 translate-y-5 bg-[#b89818]/5 rounded-full" id="hero-badge">
<div className="w-1.5 h-1.5 bg-[#b89818] rounded-full animate-pulse"></div>
<span className="text-sm text-[#e8e6e3]/80 tracking-wider font-light">Precisa abrir sua empresa ou quer uma contabilidade realmente melhor?</span>
</div>
<h1 className="font-['Space_Grotesk'] font-light leading-[1.05] tracking-tight opacity-0 translate-y-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl" id="hero-title">
                    A Contabilidade Da Hórus Resolve Em <span className="font-medium text-[#b89818]">Minutos</span> O Que Outros Escritórios Pedem <span className="font-medium">Semanas</span> Para Entregar
                </h1>
<p className="text-lg sm:text-xl text-[#e8e6e3]/50 max-w-[600px] mt-8 mx-auto leading-relaxed font-light opacity-0 translate-y-[30px]" id="hero-sub">
                    Abertura de CNPJ, contabilidade mensal, certificado digital na hora e suporte humano que atende quando você precisa. Em todo o Brasil.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-10 opacity-0 translate-y-[30px]" id="hero-ctas">
<a className="bg-[#b89818] hover:bg-[#d4af1c] text-[#0a0a0b] px-8 py-4 text-base font-medium tracking-wider uppercase transition-all no-underline" href="#paths">
                        Quero abrir minha empresa
                    </a>
<a className="bg-transparent hover:bg-[#b89818]/10 border border-[#b89818]/40 hover:border-[#b89818] text-[#e8e6e3] px-8 py-4 text-base font-medium tracking-wider uppercase transition-all no-underline" href="#paths">
                        Quero uma contabilidade melhor
                    </a>
</div>
<div className="flex items-center gap-2 mt-6 opacity-0 text-sm text-white/40 font-light translate-y-5" id="hero-note">
<i className="text-[#b89818]" data-lucide="shield-check" height="16" strokeWidth="1.5" width="16"></i>
                    Atendimento humano. Sem robô. Sem fila.
                </div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
<div className="w-px h-12 bg-gradient-to-b from-transparent via-[#b89818]/50 to-transparent animate-[scrollPulse_2s_infinite]"></div>
</div>
</section>

<section className="py-16 px-8 border-t border-white/[0.04] bg-black/20 backdrop-blur-md" id="trust">
<div className="max-w-7xl mx-auto text-center">
<p className="text-lg font-light text-white/50 mb-8">Empresas em todo o Brasil já confiam na Hórus para cuidar da contabilidade.</p>
<h3 className="text-2xl sm:text-3xl font-['Space_Grotesk'] tracking-tight mb-12 max-w-2xl mx-auto font-light">
                    Especialistas em contabilidade para empresas de serviço e profissionais que precisam de agilidade, segurança e suporte real.
                </h3>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70">
<div className="flex flex-col items-center gap-3">
<i className="text-[#b89818]" data-lucide="stethoscope" height="28" strokeWidth="1.5" width="28"></i>
<span className="text-sm uppercase tracking-widest font-normal text-white/60">Médicos</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="text-[#b89818]" data-lucide="briefcase" height="28" strokeWidth="1.5" width="28"></i>
<span className="text-sm uppercase tracking-widest font-normal text-white/60">Advogados</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="text-[#b89818]" data-lucide="ruler" height="28" strokeWidth="1.5" width="28"></i>
<span className="text-sm uppercase tracking-widest font-normal text-white/60">Arquitetos</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="text-[#b89818]" data-lucide="building-2" height="28" strokeWidth="1.5" width="28"></i>
<span className="text-sm uppercase tracking-widest font-normal text-white/60">Engenheiros</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="text-[#b89818]" data-lucide="code" height="28" strokeWidth="1.5" width="28"></i>
<span className="text-sm uppercase tracking-widest font-normal text-white/60">Devs</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="text-[#b89818]" data-lucide="users" height="28" strokeWidth="1.5" width="28"></i>
<span className="text-sm uppercase tracking-widest font-normal text-white/60">Serviços</span>
</div>
</div>
<p className="text-sm font-light text-white/40 mt-12 tracking-widest uppercase">Empresas que precisam que a contabilidade funcione e não atrapalhe.</p>
</div>
</section>

<section className="min-h-screen py-32 px-8" id="problemas">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="max-w-2xl">
<span className="text-sm text-[#b89818] tracking-[0.2em] uppercase font-medium block mb-6">A Realidade do Mercado</span>
<h2 className="font-['Space_Grotesk'] font-light tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl">
                            "Eu pago todo mês, mas na hora que preciso, <span className="font-medium text-[#b89818]">parece que estou pedindo um favor.</span>"
                        </h2>
</div>
<div className="text-lg text-[#e8e6e3]/50 font-light leading-relaxed max-w-sm">
                        Se você ainda não tem uma empresa, a frase acima é a realidade hoje no mercado. Pergunte a qualquer PJ. Todos os dias, pessoas chegam à Hórus com os seguintes problemas:
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
<div className="group lg:col-span-2 relative overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-[#b89818]/30 transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between min-h-[320px]">
<div className="absolute inset-0 bg-gradient-to-br from-[#b89818]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="text-[#b89818] mb-6" data-lucide="triangle-alert" height="32" strokeWidth="1.5" width="32"></i>
<h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-white">"A gente aceita de contador o que não aceitaria de nenhum outro profissional."</h3>
<p className="text-lg text-white/50 leading-relaxed font-light max-w-xl">Você paga um contador todo mês, sem falta e quando precisa de um documento, espera 15 dias. Quando liga, ninguém atende. Quando finalmente atendem, pedem mais prazo. Quando entregam, cometem erros.</p>
</div>
<div className="group relative overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-[#b89818]/30 transition-all duration-500 p-8 flex flex-col justify-between min-h-[320px]">
<i className="text-[#b89818] mb-6" data-lucide="app-window" height="28" strokeWidth="1.5" width="28"></i>
<h3 className="font-['Space_Grotesk'] text-xl font-medium tracking-tight mb-3 text-white">"Quero abrir empresa, mas cada site fala uma coisa. Tenho medo de errar."</h3>
<p className="text-lg text-white/50 leading-relaxed font-light">Um desenvolvedor recebeu proposta de R$12 mil/mês como PJ. Não tinha CNPJ. Enquanto pesquisava como abrir, a empresa contratou outro. Perdeu R$72 mil no ano. Por burocracia.</p>
</div>
<div className="group relative overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-[#b89818]/30 transition-all duration-500 p-8 flex flex-col justify-between min-h-[320px]">
<i className="text-[#b89818] mb-6" data-lucide="phone-call" height="28" strokeWidth="1.5" width="28"></i>
<h3 className="font-['Space_Grotesk'] text-xl font-medium tracking-tight mb-3 text-white">"Ligo para o contador e ninguém atende. Quando atende, não resolve."</h3>
<p className="text-lg text-white/50 leading-relaxed font-light">Um médico precisou de demonstrações financeiras. O escritório demorou semanas por lentidão. O dinheiro do plantão ficou travado. Não era um contador ruim, apenas lento demais.</p>
</div>
<div className="group relative overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-[#b89818]/30 transition-all duration-500 p-8 flex flex-col justify-between min-h-[320px]">
<i className="text-[#b89818] mb-6" data-lucide="file-plus-2" height="28" strokeWidth="1.5" width="28"></i>
<h3 className="font-['Space_Grotesk'] text-xl font-medium tracking-tight mb-3 text-white">"Abri meu CNPJ sozinho. Torço para estar tudo certo."</h3>
<p className="text-lg text-white/50 leading-relaxed font-light">Uma fisioterapeuta abriu um MEI pelo YouTube. Escolheu o CNAE errado. Seis meses depois: notificação, multa e retroativo. Ela achava que estava economizando.</p>
</div>
<div className="group relative overflow-hidden bg-[#b89818] border border-[#b89818] transition-all duration-500 p-8 flex flex-col justify-between min-h-[320px]">
<i className="text-black mb-6" data-lucide="shield-alert" height="28" strokeWidth="1.5" width="28"></i>
<h3 className="font-['Space_Grotesk'] text-2xl font-medium tracking-tight mb-3 text-black">"Meu contador erra, atrasa, e quem paga a multa sou eu."</h3>
<p className="text-lg text-black/70 leading-relaxed font-normal">Um empresário precisava de crédito para expandir. O banco pediu balanço. O contador entregou tarde demais. O crédito foi negado. O crescimento parou.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 relative bg-gradient-to-b from-[#b89818]/[0.03] to-transparent" id="paths">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="text-sm text-[#b89818] tracking-[0.2em] uppercase font-medium">A Solução Hórus</span>
<h2 className="text-4xl sm:text-5xl md:text-6xl mt-4 font-['Space_Grotesk'] tracking-tight font-light">Do primeiro CNPJ à <span className="font-medium text-white">contabilidade completa</span></h2>
<p className="text-lg text-white/50 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
                        O que a Hórus faz não é extraordinário. É o que toda contabilidade deveria fazer: atende o telefone, entrega rápido, avisa mudanças de lei e trata você como gente. O mínimo que virou exceção.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
<div className="p-8 sm:p-12 bg-[#0a0a0b]/80 backdrop-blur-sm border border-white/[0.06] hover:border-[#b89818]/40 transition-all duration-300 relative group flex flex-col">
<div className="w-12 h-12 rounded-full border border-[#b89818]/30 flex items-center justify-center mb-8 bg-[#b89818]/5 group-hover:bg-[#b89818]/10 transition-colors">
<i className="text-[#b89818]" data-lucide="rocket" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="font-['Space_Grotesk'] text-3xl font-medium tracking-tight text-white mb-4">Quer abrir seu CNPJ?</h3>
<p className="text-lg text-white/50 mb-8 font-light leading-relaxed flex-grow">
                            Você não precisa entender de contabilidade. A gente escolhe o tipo certo de empresa para o seu perfil, abre tudo, emite seu certificado digital na hora e te acompanha desde o dia 1. Você foca no que sabe fazer — a parte chata é com a gente.
                        </p>
<div className="space-y-4 mb-10">
<div className="flex gap-4">
<span className="text-[#b89818] text-base font-['Space_Grotesk'] font-medium">01</span>
<span className="text-lg text-white/70 font-light">Análise de perfil em 5 minutos</span>
</div>
<div className="flex gap-4">
<span className="text-[#b89818] text-base font-['Space_Grotesk'] font-medium">02</span>
<span className="text-lg text-white/70 font-light">Cuidamos de todo o registro e burocracia</span>
</div>
<div className="flex gap-4">
<span className="text-[#b89818] text-base font-['Space_Grotesk'] font-medium">03</span>
<span className="text-lg text-white/70 font-light">Sua empresa nasce organizada e com App</span>
</div>
</div>
<a className="inline-flex items-center justify-between w-full py-5 px-6 text-sm font-medium uppercase tracking-widest border border-white/10 hover:border-[#b89818] hover:bg-[#b89818]/5 transition-all text-white" href="#contato">
                            Quero abrir minha empresa
                            <i data-lucide="arrow-right" height="16" strokeWidth="1.5" width="16"></i>
</a>
</div>
<div className="p-8 sm:p-12 bg-[#0a0a0b]/80 backdrop-blur-sm border border-white/[0.06] hover:border-[#b89818]/40 transition-all duration-300 relative group flex flex-col">
<div className="w-12 h-12 rounded-full border border-[#b89818]/30 flex items-center justify-center mb-8 bg-[#b89818]/5 group-hover:bg-[#b89818]/10 transition-colors">
<i className="text-[#b89818]" data-lucide="refresh-ccw" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="font-['Space_Grotesk'] text-3xl font-medium tracking-tight text-white mb-4">Merece uma contabilidade melhor?</h3>
<p className="text-lg text-white/50 mb-8 font-light leading-relaxed flex-grow">
                            Se você já tem empresa: A gente cuida da transição. Entramos em contato com o escritório anterior, pedimos os documentos e assumimos a responsabilidade. Seu calendário fica organizado no app e quando você liga, alguém atende.
                        </p>
<div className="space-y-4 mb-10">
<div className="flex gap-4">
<span className="text-[#b89818] text-base font-['Space_Grotesk'] font-medium">01</span>
<span className="text-lg text-white/70 font-light">Entendemos o que te incomoda hoje</span>
</div>
<div className="flex gap-4">
<span className="text-[#b89818] text-base font-['Space_Grotesk'] font-medium">02</span>
<span className="text-lg text-white/70 font-light">Assumimos o contato com o escritório antigo</span>
</div>
<div className="flex gap-4">
<span className="text-[#b89818] text-base font-['Space_Grotesk'] font-medium">03</span>
<span className="text-lg text-white/70 font-light">Você sente a diferença no 1º dia (sem riscos)</span>
</div>
</div>
<a className="inline-flex items-center justify-between w-full py-5 px-6 text-sm font-medium uppercase tracking-widest border border-white/10 hover:border-[#b89818] hover:bg-[#b89818]/5 transition-all text-white" href="#contato">
                            Quero conhecer a Hórus
                            <i data-lucide="arrow-right" height="16" strokeWidth="1.5" width="16"></i>
</a>
</div>
</div>
</div>
</section>

<section className="relative bg-[#0a0a0b]/50 backdrop-blur-xl border-y border-white/[0.04] overflow-hidden" id="diferenciais">
<div className="h-screen flex items-center">
<div className="flex gap-8 md:gap-16 px-[5vw] md:px-[10vw] w-max will-change-transform items-center" id="process-inner">
<div className="w-[85vw] md:w-[45vw] shrink-0 pr-8 md:pr-16 flex flex-col justify-center">
<span className="text-sm text-[#b89818] tracking-[0.2em] uppercase font-medium mb-6">O Novo Padrão</span>
<h2 className="font-['Space_Grotesk'] font-light tracking-tight leading-[1.1] text-5xl sm:text-6xl md:text-7xl max-w-lg text-white">
                            O que você encontra na Hórus e <span className="font-medium text-[#b89818]">não encontra em lugar nenhum.</span>
</h2>
<p className="mt-8 text-lg text-white/40 font-light max-w-md">Arraste para descobrir nossos 5 pilares estruturais.</p>
</div>
<div className="process-card w-[340px] shrink-0 bg-[#0a0a0b]/80 border border-white/[0.06] p-10 flex flex-col backdrop-blur-md">
<div className="w-12 h-12 border border-[#b89818]/30 flex items-center justify-center mb-8 bg-[#b89818]/5">
<i className="text-[#b89818]" data-lucide="smartphone" height="22" strokeWidth="1.5" width="22"></i>
</div>
<div className="text-sm text-[#e8e6e3]/30 tracking-[0.15em] uppercase font-medium mb-4">Diferencial 01</div>
<h3 className="font-['Space_Grotesk'] font-medium tracking-tight mb-6 text-2xl text-white">App próprio com tudo na sua mão</h3>
<p className="text-lg text-[#e8e6e3]/50 leading-relaxed font-light mb-4">Documentos, guias, boletos: abre, copia o código e paga.</p>
<p className="text-base text-[#e8e6e3]/40 leading-relaxed font-light">"Mas e se eu trocar, perco documentos?" Não. A gente organiza tudo no app. Totalmente seguro, só você e o contador têm acesso.</p>
</div>
<div className="process-card w-[340px] shrink-0 bg-[#0a0a0b]/80 border border-white/[0.06] p-10 flex flex-col backdrop-blur-md">
<div className="w-12 h-12 border border-[#b89818]/30 flex items-center justify-center mb-8 bg-[#b89818]/5">
<i className="text-[#b89818]" data-lucide="shield-check" height="22" strokeWidth="1.5" width="22"></i>
</div>
<div className="text-sm text-[#e8e6e3]/30 tracking-[0.15em] uppercase font-medium mb-4">Diferencial 02</div>
<h3 className="font-['Space_Grotesk'] font-medium tracking-tight mb-6 text-2xl text-white">Certificado digital em 5 minutos</h3>
<p className="text-lg text-[#e8e6e3]/50 leading-relaxed font-light mb-4">Todo mundo demora de 7 a 15 dias. A gente emite na hora. As pessoas saem rindo de tão rápido.</p>
<p className="text-base text-[#e8e6e3]/40 leading-relaxed font-light">"Meu certificado está com o escritório anterior." A gente resolve. Emitimos um novo em 5 min. NUNCA precisou levar dias.</p>
</div>
<div className="process-card w-[340px] shrink-0 bg-[#0a0a0b]/80 border border-white/[0.06] p-10 flex flex-col backdrop-blur-md">
<div className="w-12 h-12 border border-[#b89818]/30 flex items-center justify-center mb-8 bg-[#b89818]/5">
<i className="text-[#b89818]" data-lucide="users" height="22" strokeWidth="1.5" width="22"></i>
</div>
<div className="text-sm text-[#e8e6e3]/30 tracking-[0.15em] uppercase font-medium mb-4">Diferencial 03</div>
<h3 className="font-['Space_Grotesk'] font-medium tracking-tight mb-6 text-2xl text-white">Suporte humano de verdade</h3>
<p className="text-lg text-[#e8e6e3]/50 leading-relaxed font-light mb-4">Mais de 10 profissionais dedicados. Você liga, alguém atende. Aqui você tem um nome, não é o cliente 501.</p>
<p className="text-base text-[#e8e6e3]/40 leading-relaxed font-light">"E se eu não entender nada?" Estamos aqui para isso. Toda pergunta é bem-vinda. Você não precisa saber, precisa de quem saiba.</p>
</div>
<div className="process-card w-[340px] shrink-0 bg-[#0a0a0b]/80 border border-white/[0.06] p-10 flex flex-col backdrop-blur-md">
<div className="w-12 h-12 border border-[#b89818]/30 flex items-center justify-center mb-8 bg-[#b89818]/5">
<i className="text-[#b89818]" data-lucide="zap" height="22" strokeWidth="1.5" width="22"></i>
</div>
<div className="text-sm text-[#e8e6e3]/30 tracking-[0.15em] uppercase font-medium mb-4">Diferencial 04</div>
<h3 className="font-['Space_Grotesk'] font-medium tracking-tight mb-6 text-2xl text-white">Velocidade que o mercado não acompanha</h3>
<p className="text-lg text-[#e8e6e3]/50 leading-relaxed font-light mb-4">Demonstração para o banco? 5 minutos. Certidão? Minutos. Guia do mês? No app.</p>
<p className="text-base text-[#e8e6e3]/40 leading-relaxed font-light">Enquanto seu contador atual lê seu e-mail, a gente já resolveu. E na transição você nunca fica descoberto.</p>
</div>
<div className="process-card w-[340px] shrink-0 bg-[#0a0a0b]/80 border border-white/[0.06] p-10 flex flex-col backdrop-blur-md">
<div className="w-12 h-12 border border-[#b89818]/30 flex items-center justify-center mb-8 bg-[#b89818]/5">
<i className="text-[#b89818]" data-lucide="calendar-check" height="22" strokeWidth="1.5" width="22"></i>
</div>
<div className="text-sm text-[#e8e6e3]/30 tracking-[0.15em] uppercase font-medium mb-4">Diferencial 05</div>
<h3 className="font-['Space_Grotesk'] font-medium tracking-tight mb-6 text-2xl text-white">Você nunca é pego de surpresa</h3>
<p className="text-lg text-[#e8e6e3]/50 leading-relaxed font-light mb-4">Mudou a lei? Disparo automático para todos os clientes explicando o que afeta você.</p>
<p className="text-base text-[#e8e6e3]/40 leading-relaxed font-light">Calendário no app com cada prazo e cada guia. Nunca mais multa por esquecimento. Nunca mais "eu não sabia".</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 border-t border-white/[0.04] relative overflow-hidden bg-[#0a0a0b]" id="servicos">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-[#b89818]/[0.05] via-[#b89818]/[0.02] to-transparent blur-[100px] pointer-events-none rounded-full"></div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="text-center mb-20 flex flex-col items-center" id="servicos-header">
<span className="text-xs text-[#b89818] tracking-[0.25em] uppercase font-medium mb-6">Nossos Serviços</span>
<h2 className="text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.1] font-['Space_Grotesk'] tracking-tight mb-6">
<span className="font-light text-[#e8e6e3]/90">Tudo que sua empresa precisa.</span>
<span className="font-medium text-white block sm:inline mt-2 sm:mt-0">Num lugar só.</span>
</h2>
<p className="text-lg text-[#e8e6e3]/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Criada para empresas e profissionais que precisam de agilidade,<br className="hidden md:block"/> organização e suporte real.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 sm:p-10 bg-black/40 border border-white/[0.06] hover:border-[#b89818]/20 transition-all duration-300 group">
<i className="text-[#b89818] mb-6" data-lucide="flag" height="28" strokeWidth="1.5" width="28"></i>
<h3 className="font-['Space_Grotesk'] text-xl tracking-tight font-medium text-white mb-4">Abertura de empresa</h3>
<p className="text-lg text-white/50 font-light leading-relaxed">Do zero ao CNPJ pronto. Regime certo. Certificado digital na hora. Você não entende de contabilidade — e não precisa.</p>
</div>
<div className="p-8 sm:p-10 bg-black/40 border border-white/[0.06] hover:border-[#b89818]/20 transition-all duration-300 group">
<i className="text-[#b89818] mb-6" data-lucide="calculator" height="28" strokeWidth="1.5" width="28"></i>
<h3 className="font-['Space_Grotesk'] text-xl tracking-tight font-medium text-white mb-4">Contabilidade mensal</h3>
<p className="text-lg text-white/50 font-light leading-relaxed">Escrituração, guias, obrigações, relatórios. Tudo no app, em tempo real, com suporte que responde no mesmo dia.</p>
</div>
<div className="p-8 sm:p-10 bg-black/40 border border-white/[0.06] hover:border-[#b89818]/20 transition-all duration-300 group">
<i className="text-[#b89818] mb-6" data-lucide="key" height="28" strokeWidth="1.5" width="28"></i>
<h3 className="font-['Space_Grotesk'] text-xl tracking-tight font-medium text-white mb-4">Certificado digital</h3>
<p className="text-lg text-white/50 font-light leading-relaxed">5 minutos. Não 15 dias. Válido no Brasil inteiro. Você sai com ele pronto e funcionando perfeitamente.</p>
</div>
<div className="p-8 sm:p-10 bg-black/40 border border-white/[0.06] hover:border-[#b89818]/20 transition-all duration-300 group">
<i className="text-[#b89818] mb-6" data-lucide="bar-chart-2" height="28" strokeWidth="1.5" width="28"></i>
<h3 className="font-['Space_Grotesk'] text-xl tracking-tight font-medium text-white mb-4">BPO Financeiro</h3>
<p className="text-lg text-white/50 font-light leading-relaxed">Fluxo de caixa, contas a pagar e receber, conciliação bancária. A gente organiza a base. Você foca em empreender.</p>
</div>
<div className="p-8 sm:p-10 bg-black/40 border border-white/[0.06] hover:border-[#b89818]/20 transition-all duration-300 group">
<i className="text-[#b89818] mb-6" data-lucide="banknote" height="28" strokeWidth="1.5" width="28"></i>
<h3 className="font-['Space_Grotesk'] text-xl tracking-tight font-medium text-white mb-4">Holding e blindagem</h3>
<p className="text-lg text-white/50 font-light leading-relaxed">Proteção do que você construiu. Planejamento sucessório e transferência de bens com total segurança jurídica e fiscal.</p>
</div>
<div className="p-8 sm:p-10 bg-black/40 border border-white/[0.06] hover:border-[#b89818]/20 transition-all duration-300 group">
<i className="text-[#b89818] mb-6" data-lucide="building" height="28" strokeWidth="1.5" width="28"></i>
<h3 className="font-['Space_Grotesk'] text-xl tracking-tight font-medium text-white mb-4">Empreendimentos imob.</h3>
<p className="text-lg text-white/50 font-light leading-relaxed">Assessoria jurídica, financeira e contábil completa para garantir a rentabilidade e conformidade do seu projeto.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 border-t border-white/[0.04] bg-black/60 backdrop-blur-md" id="depoimentos">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="text-sm text-[#b89818] tracking-[0.2em] uppercase font-medium">Confiança Comprovada</span>
<h2 className="text-4xl sm:text-5xl md:text-6xl mt-6 font-['Space_Grotesk'] tracking-tight font-light">Eles poderiam escolher qualquer contabilidade.<br/><span className="font-medium text-white">Escolheram a Hórus.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 sm:p-10 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-white/10 transition-colors duration-300">
<div className="flex gap-1 mb-8 text-[#b89818]">
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
</div>
<p className="text-lg leading-relaxed text-white/70 mb-10 font-light italic">
                            "A transição foi tão silenciosa que eu só percebi que havia mudado de contador quando recebi as guias pelo aplicativo no primeiro dia do mês. Sem dor de cabeça, sem burocracia."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-sm font-medium font-['Space_Grotesk']">DR</div>
<div>
<div className="text-lg font-medium text-white">Dr. Roberto Almeida</div>
<div className="text-base text-white/40 font-light">Clínica Médica</div>
</div>
</div>
</div>
<div className="p-8 sm:p-10 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-white/10 transition-colors duration-300">
<div className="flex gap-1 mb-8 text-[#b89818]">
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
</div>
<p className="text-lg leading-relaxed text-white/70 mb-10 font-light italic">
                            "Eu não entendia nada de impostos ou notas fiscais. A equipe da Hórus abriu meu CNPJ e me ensinou a usar o sistema em uma call rápida. Agora eu só me preocupo em fechar projetos."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-sm font-medium font-['Space_Grotesk']">CS</div>
<div>
<div className="text-lg font-medium text-white">Camila Santos</div>
<div className="text-base text-white/40 font-light">Engenheira de Software</div>
</div>
</div>
</div>
<div className="p-8 sm:p-10 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-white/10 transition-colors duration-300">
<div className="flex gap-1 mb-8 text-[#b89818]">
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
<i className="fill-current" data-lucide="star" height="16" strokeWidth="1.5" width="16"></i>
</div>
<p className="text-lg leading-relaxed text-white/70 mb-10 font-light italic">
                            "Agilidade é a palavra. Precisava de uma certidão negativa urgente para fechar um contrato. Pedi no WhatsApp e em 10 minutos estava na minha mão. Salvou o negócio."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-sm font-medium font-['Space_Grotesk']">MV</div>
<div>
<div className="text-lg font-medium text-white">Marcelo Vieira</div>
<div className="text-base text-white/40 font-light">Agência de Marketing</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[90vh] flex items-center justify-center relative py-32 px-8 border-t border-white/[0.04]" id="contato">
<div className="w-full max-w-[680px]">
<div className="text-center mb-16">
<span className="text-sm text-[#b89818] tracking-[0.2em] uppercase font-medium block mb-6">Próximos Passos</span>
<h2 className="font-['Space_Grotesk'] font-light tracking-tight leading-[1.1] text-5xl sm:text-6xl md:text-7xl">
                        A contabilidade que você queria ter <span className="font-medium text-[#b89818]">está a uma conversa de distância.</span>
</h2>
<div className="mt-10 text-lg text-white/50 font-light flex flex-col items-center gap-4">
<p>Em 5 minutos de conversa você pode descobrir:</p>
<ul className="text-left inline-block space-y-3 mt-4">
<li className="flex items-center gap-3"><i className="text-[#b89818]" data-lucide="circle-check" height="18" strokeWidth="1.5" width="18"></i> Se seu tipo de empresa está correto</li>
<li className="flex items-center gap-3"><i className="text-[#b89818]" data-lucide="circle-check" height="18" strokeWidth="1.5" width="18"></i> Se está pagando mais imposto do que deveria</li>
<li className="flex items-center gap-3"><i className="text-[#b89818]" data-lucide="circle-check" height="18" strokeWidth="1.5" width="18"></i> Se existe forma mais simples de organizar tudo</li>
</ul>
<p className="mt-8 text-[#b89818] font-medium">5 minutos de conversa. Sem enrolação. Sem compromisso.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
<button className="w-full py-5 text-sm font-medium uppercase tracking-widest bg-[#b89818] text-black hover:bg-[#d4af1c] transition-colors flex items-center justify-center gap-2">
                        Quero abrir minha empresa
                        <i data-lucide="arrow-right" height="16" strokeWidth="1.5" width="16"></i>
</button>
<button className="w-full py-5 text-sm font-medium uppercase tracking-widest border border-white/20 text-white hover:border-[#b89818] hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                        Quero conhecer a Hórus
                        <i data-lucide="arrow-right" height="16" strokeWidth="1.5" width="16"></i>
</button>
</div>
</div>
</section>

<footer className="pt-16 pb-12 px-8 border-t border-white/[0.04] bg-[#050505] relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
<div>
<div className="font-['Space_Grotesk'] font-medium tracking-tighter text-2xl text-white mb-6">HÓRUS</div>
<p className="text-base text-white/40 font-light max-w-sm mb-8 leading-relaxed">
                            Gestão Financeira e Contábil<br/>
                            Rua Monsenhor Leite, 200 - Sala 03 - Centro<br/>
                            Boa Esperança - MG<br/>
                            Atendimento no Brasil inteiro.
                        </p>
<div className="flex gap-5">
<a className="text-white/40 hover:text-[#b89818] transition-colors" href="#"><i data-lucide="phone" height="22" strokeWidth="1.5" width="22"></i></a>
<a className="text-white/40 hover:text-[#b89818] transition-colors" href="#"><i data-lucide="camera" height="22" strokeWidth="1.5" width="22"></i></a>
<a className="text-white/40 hover:text-[#b89818] transition-colors" href="#"><i data-lucide="mail" height="22" strokeWidth="1.5" width="22"></i></a>
</div>
</div>
<div className="grid grid-cols-2 gap-6 text-base text-white/40 font-light">
<div className="flex flex-col gap-4">
<a className="hover:text-white transition-colors" href="#">Início</a>
<a className="hover:text-white transition-colors" href="#">Nossos serviços</a>
<a className="hover:text-white transition-colors" href="#">Gestão financeira</a>
<a className="hover:text-white transition-colors" href="#">Gestão contábil</a>
<a className="hover:text-white transition-colors" href="#">Quem somos</a>
</div>
<div className="flex flex-col gap-4">
<a className="hover:text-white transition-colors" href="#">Parceiros</a>
<a className="hover:text-white transition-colors" href="#">Depoimentos</a>
<a className="hover:text-white transition-colors" href="#">Contato</a>
<a className="text-[#b89818] font-medium hover:text-[#d4af1c] transition-colors mt-2" href="#">Área VIP</a>
<a className="text-[#b89818] font-medium hover:text-[#d4af1c] transition-colors" href="#">Portal do cliente</a>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
<div className="text-sm text-[#e8e6e3]/30 font-light">© 2025 Hórus Gestão Financeira e Contábil. Todos os direitos reservados.</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
