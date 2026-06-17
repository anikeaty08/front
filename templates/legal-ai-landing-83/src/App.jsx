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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Magnetic Buttons
            const magneticBtns = document.querySelectorAll('.magnetic-btn');
            magneticBtns.forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
                    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
                    gsap.to(btn, { x: x, y: y, scale: 1.03, duration: 0.4, ease: "power2.out" });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.3)" });
                });
            });

            // 2. Navbar Morphing
            ScrollTrigger.create({
                start: "top -10%",
                onUpdate: (self) => {
                    const nav = document.getElementById('navbar');
                    if(self.direction === 1) {
                        nav.classList.add('bg-[#F2F0E9]/90', 'text-[#0D0822]', 'border-[#0D0822]/10', 'shadow-sm');
                        nav.classList.remove('text-[#F2F0E9]', 'border-transparent');
                    } else if(self.progress === 0) {
                        nav.classList.remove('bg-[#F2F0E9]/90', 'text-[#0D0822]', 'border-[#0D0822]/10', 'shadow-sm');
                        nav.classList.add('text-[#F2F0E9]', 'border-transparent');
                    }
                }
            });

            // 3. Hero Entrance
            gsap.from(".hero-el", {
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2
            });

            // 4. Feature Card 1: Diagnostic Shuffler
            const cards = Array.from(document.querySelectorAll('.shuffle-card'));
            let zIndexes = [3, 2, 1];
            let scales = [1, 0.95, 0.9];
            let yOffsets = [0, 15, 30];
            
            setInterval(() => {
                zIndexes.unshift(zIndexes.pop());
                cards.forEach((card, i) => {
                    gsap.to(card, {
                        zIndex: zIndexes[i],
                        scale: scales[zIndexes[i]-1],
                        y: yOffsets[zIndexes[i]-1],
                        duration: 0.8,
                        ease: "back.out(1.2)"
                    });
                });
            }, 3500);

            // 5. Feature Card 2: Topographical Align (Risk Meter)
            const bubble = document.getElementById('bubble-level');
            const grade = document.getElementById('grade-readout');
            
            gsap.to(bubble, {
                x: 30,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                onUpdate: function() {
                    const progress = this.progress();
                    // fluctuate between 85.0% and 98.4%
                    const value = 85 + (progress * 13.4);
                    grade.innerText = value.toFixed(1) + "%";
                }
            });

            // 6. Feature Card 3: Scheduler -> Tool Scanner
            const cursor = document.getElementById('scheduler-cursor');
            const targetCell = document.getElementById('target-cell');
            
            const schedTl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
            schedTl.to(cursor, { x: 140, y: 50, duration: 1, ease: "power2.inOut" })
                   .to(cursor, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                   .to(targetCell, { backgroundColor: "rgba(32, 21, 76, 0.8)", duration: 0.2 }, "-=0.1")
                   .to(cursor, { x: 220, y: 80, duration: 0.8, ease: "power2.inOut", delay: 0.4 })
                   .to(cursor, { opacity: 0, duration: 0.3 })
                   .to(targetCell, { backgroundColor: "rgba(32, 21, 76, 0.4)", duration: 0.2, delay: 0.8 })
                   .set(cursor, { x: 0, y: 0, opacity: 1 });

            // 7. Philosophy Parallax
            gsap.to(".parallax-bg", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: "#credibilidade",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            gsap.fromTo("#phil-subtitle", 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: "#credibilidade", start: "top 70%" } }
            );
            gsap.fromTo("#phil-title", 
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.2, scrollTrigger: { trigger: "#credibilidade", start: "top 70%" } }
            );

            // 8. Protocol Sticky Stacking
            const panels = gsap.utils.toArray('.protocol-panel');
            panels.forEach((panel, i) => {
                if (i < panels.length - 1) {
                    gsap.to(panel, {
                        scale: 0.92,
                        opacity: 0.4,
                        filter: "blur(8px)",
                        scrollTrigger: {
                            trigger: panels[i + 1],
                            start: "top bottom",
                            end: "top top",
                            scrub: true
                        }
                    });
                }
            });

            gsap.to("#blueprint-line", { top: "90%", duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
            gsap.to("#doc-svg", { y: -10, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });

            // 9. Portfolio Slider Logic
            const portfolioSlider = document.getElementById('portfolio-slider');
            const slideLeft = document.getElementById('slide-left');
            const slideRight = document.getElementById('slide-right');
            const slideAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 650;

            slideLeft.addEventListener('click', () => {
                portfolioSlider.scrollBy({ left: -slideAmount - 24, behavior: 'smooth' });
            });
            slideRight.addEventListener('click', () => {
                portfolioSlider.scrollBy({ left: slideAmount + 24, behavior: 'smooth' });
            });

            let isDown = false;
            let startX;
            let scrollLeft;

            portfolioSlider.addEventListener('mousedown', (e) => {
                isDown = true;
                portfolioSlider.classList.add('active:cursor-grabbing');
                startX = e.pageX - portfolioSlider.offsetLeft;
                scrollLeft = portfolioSlider.scrollLeft;
            });
            portfolioSlider.addEventListener('mouseleave', () => { isDown = false; });
            portfolioSlider.addEventListener('mouseup', () => { isDown = false; });
            portfolioSlider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - portfolioSlider.offsetLeft;
                const walk = (x - startX) * 2;
                portfolioSlider.scrollLeft = scrollLeft - walk;
            });
        });

        // 10. Single Pages Modal Logic
        const pageModal = document.getElementById('page-modal');
        const modalContent = document.getElementById('modal-content');
        const closeModal = document.getElementById('close-modal');

        const pageData = {
            "Funcionalidades": `
                <div class="max-w-3xl">
                    <span class="text-sm text-[#20154C] uppercase tracking-[0.2em] mb-4 block font-normal">Capacidades da IA</span>
                    <h2 class="text-5xl font-['Outfit',sans-serif] font-normal tracking-tighter text-[#0D0822] mb-8">Nossa Tecnologia</h2>
                    <p class="text-[#1A1A1A]/70 mb-12 text-lg font-light leading-relaxed">A Arbitralis não substitui a decisão jurídica; ela ilumina o caminho. Desenvolvemos nossa matriz de inteligência utilizando milhares de precedentes do STJ e STF, garantindo que a análise de risco tenha respaldo prático nas cortes brasileiras.</p>
                    
                    <div class="space-y-12">
                        <div class="bg-white p-10 rounded-[2rem] border border-[#0D0822]/10 shadow-sm relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-2 h-full bg-[#0D0822]"></div>
                            <h3 class="text-3xl font-['Outfit',sans-serif] font-normal tracking-tighter mb-4 text-[#0D0822]">Matriz de Risco Nativa</h3>
                            <p class="text-base text-[#1A1A1A]/70 font-light mb-6 leading-relaxed">Operando 100% dentro do ambiente Microsoft Word, nosso algoritmo processa texto legal não estruturado, categorizando cláusulas de rescisão, penalidades, foro e obrigações cruzadas instantaneamente.</p>
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light text-[#1A1A1A]/80 border-t border-[#0D0822]/10 pt-6">
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#20154C] text-base"></iconify-icon> Reconhecimento semântico legal</li>
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#20154C] text-base"></iconify-icon> Identificação de cláusulas abusivas</li>
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#20154C] text-base"></iconify-icon> Sugestão de redação mitigadora</li>
                            </ul>
                        </div>
                    </div>
                </div>`,
            "Privacy": `
                <div class="max-w-3xl">
                    <span class="text-sm text-[#20154C] uppercase tracking-[0.2em] mb-4 block font-normal">Legal Documentation</span>
                    <h2 class="text-5xl font-['Outfit',sans-serif] font-normal tracking-tighter text-[#0D0822] mb-10">Privacidade e Dados</h2>
                    <div class="prose prose-base text-[#1A1A1A]/70 font-light space-y-6 max-w-none">
                        <p class="text-lg leading-relaxed">Na Arbitralis, entendemos que o sigilo é a base da profissão jurídica. O processamento dos contratos ocorre sob protocolos estritos de confidencialidade.</p>
                        
                        <h4 class="text-2xl font-['Outfit',sans-serif] font-normal tracking-tight text-[#0D0822] mt-12 mb-4">1. Processamento Efêmero</h4>
                        <p>Os textos processados pelo nosso suplemento no Word são analisados e o relatório é gerado em tempo real. A Arbitralis não armazena, não treina modelos e não guarda o conteúdo dos contratos dos nossos usuários institucionais após a entrega da análise.</p>
                        
                        <h4 class="text-2xl font-['Outfit',sans-serif] font-normal tracking-tight text-[#0D0822] mt-10 mb-4">2. Infraestrutura Criptografada</h4>
                        <p>Toda comunicação entre o suplemento no seu Word e nossos servidores de IA ocorre via túneis criptografados TLS 1.3 de ponta a ponta, alinhados com os padrões exigidos pela LGPD e GDPR.</p>
                    </div>
                </div>`,
            "Terms": `
                <div class="max-w-3xl">
                    <span class="text-sm text-[#20154C] uppercase tracking-[0.2em] mb-4 block font-normal">Legal Documentation</span>
                    <h2 class="text-5xl font-['Outfit',sans-serif] font-normal tracking-tighter text-[#0D0822] mb-10">Termos de Uso</h2>
                    <div class="prose prose-base text-[#1A1A1A]/70 font-light space-y-6 max-w-none">
                        <p class="text-lg leading-relaxed">Ao aderir ao Acesso Antecipado e utilizar a ferramenta Arbitralis, você concorda com os limites operacionais da nossa Inteligência Artificial.</p>
                        
                        <h4 class="text-2xl font-['Outfit',sans-serif] font-normal tracking-tight text-[#0D0822] mt-12 mb-4">Natureza da Ferramenta</h4>
                        <p>A Arbitralis é uma ferramenta de suporte à revisão contratual. Os relatórios gerados não constituem pareceres jurídicos formais, tampouco substituem a validação técnica humana promovida pelo advogado, árbitro ou corpo jurídico competente.</p>
                        
                        <h4 class="text-2xl font-['Outfit',sans-serif] font-normal tracking-tight text-[#0D0822] mt-10 mb-4">Responsabilidade Profissional</h4>
                        <p>A aprovação final de qualquer redação, aceitação de risco ou negociação contratual permanece de inteira responsabilidade do usuário profissional, atuando a Arbitralis puramente como vetor acelerador na identificação de padrões e busca jurisprudencial.</p>
                    </div>
                </div>`
        };

        window.openPageModal = function(pageName) {
            modalContent.innerHTML = pageData[pageName] || "<h2 class='text-4xl font-[Outfit]'>Conteúdo não encontrado.</h2>";
            pageModal.classList.remove('translate-y-full');
            document.body.classList.add('page-modal-active');
        };

        closeModal.addEventListener('click', () => {
            pageModal.classList.add('translate-y-full');
            setTimeout(() => {
                document.body.classList.remove('page-modal-active');
            }, 700);
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
      

<svg className="pointer-events-none fixed z-[100] opacity-[0.05] w-full h-full top-0 right-0 bottom-0 left-0" style={{mixBlendMode: 'multiply'}}>
<filter className="" id="noiseFilter">
<feturbulence basefrequency="0.8" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect className="" filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>

<nav className="fixed flex transition-all duration-500 md:px-12 w-full z-50 border-slate-500/10 border-b pt-4 pr-6 pb-4 pl-6 top-0 left-0 backdrop-blur-md items-center justify-between" id="navbar">
<a className="block w-36 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54d6590b-8b11-4989-b306-ec99e709dbd9_320w.png)] bg-contain bg-no-repeat bg-left" href="#"><span className="sr-only">Arbitralis</span></a>
<a className="magnetic-btn overflow-hidden group flex items-center gap-2 text-sm font-normal text-[#F2F0E9] bg-[#C81E1E] rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative" href="#acesso">
<span className="group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0 bg-[#0D0822] absolute top-0 right-0 bottom-0 left-0 translate-y-full"></span>
<span className="z-10 transition-colors duration-500 tracking-tight relative">Acesso Antecipado</span>
<iconify-icon className="relative z-10 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</nav>

<div className="fixed inset-0 z-[60] bg-[#F2F0E9] translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col" id="page-modal">
<div className="flex items-center justify-between px-6 py-6 md:px-12 border-b border-[#0D0822]/10">
<div className="font-['Outfit',sans-serif] font-normal text-lg uppercase tracking-[0.2em] text-[#0D0822]">Arbitralis Docs</div>
<button className="text-[#1A1A1A] hover:text-[#20154C] transition-colors flex items-center gap-2 text-sm font-normal" id="close-modal">
<span>Fechar</span>
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto px-6 py-16 md:px-12 max-w-4xl mx-auto w-full" id="modal-content">

</div>
</div>

<header className="h-[100dvh] flex md:px-12 w-full pr-6 pb-0 pl-6 relative items-center" id="hero">
<div className="z-0 bg-[#1A1A1A] absolute top-0 right-0 bottom-0 left-0">
<img alt="Abstract Tech Legal" className="opacity-60 mix-blend-luminosity w-full h-full object-cover" src="https://images.unsplash.com/photo-1505664173691-a281e533010b?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12c1c130-5c0b-4615-9155-5e3f1df37789_3840w.webp)] bg-repeat absolute top-0 right-0 bottom-0 left-0">
<style>
        #hero {
            height: 75dvh !important;
            min-height: 650px !important;
        }
    </style>
</div>
</div>
<div className="z-10 flex flex-col md:mt-0 w-full max-w-6xl mt-20 mr-auto ml-auto relative items-start">
<div className="overflow-hidden flex gap-3 mb-2 gap-x-3 gap-y-3 items-center">
<div className="hero-el w-2 h-2 rounded-full bg-[#6A80FF] animate-pulse"></div>
<p className="hero-el uppercase text-xs font-normal text-[#6A80FF] tracking-[0.2em] font-['Outfit',sans-serif]">Novo · Análise de Risco com IA</p>
</div>
<div className="overflow-hidden">
<h1 className="hero-el text-5xl md:text-7xl leading-[1.05] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#F2F0E9]">
                    Identifique riscos contratuais
                </h1>
</div>
<div className="overflow-hidden">
<h2 className="hero-el text-6xl md:text-8xl leading-[1] font-['Cormorant_Garamond',serif] font-normal italic tracking-tighter text-[#F2F0E9] mt-2 mb-8">
                    em segundos, direto no Word.
                </h2>
</div>
<div className="overflow-hidden max-w-2xl mb-12">
<p className="hero-el text-[#F2F0E9]/80 text-lg leading-relaxed font-light">
                    Sem trocar de sistema. Sem copiar texto. A Arbitralis analisa o contrato aberto e entrega um relatório completo de riscos, com base na nossa Matriz e na jurisprudência do STJ e STF.
                </p>
</div>
<div className="hero-el flex flex-col sm:flex-row gap-4">
<a className="magnetic-btn relative overflow-hidden group rounded-full bg-[#F2F0E9] text-[#1A1A1A] px-8 py-4 text-base font-normal inline-flex items-center justify-center gap-3 shadow-lg" href="#acesso">
<span className="absolute inset-0 bg-[#20154C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0"></span>
<span className="relative z-10 group-hover:text-[#F2F0E9] transition-colors duration-500">Garantir acesso antecipado</span>
<iconify-icon className="relative z-10 text-xl group-hover:text-[#F2F0E9] transition-colors duration-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="md:px-12 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6" id="problema">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<span className="font-['Outfit',sans-serif] text-sm text-[#20154C] uppercase tracking-[0.2em] mb-4 block font-normal">O Problema</span>
<h3 className="md:text-6xl leading-[1.1] text-4xl font-normal text-[#0D0822] tracking-tighter font-['Outfit',sans-serif] max-w-3xl">
                    Revisar contratos é lento, cansativo e arriscado
                </h3>
</div>
<p className="text-base text-[#1A1A1A]/70 max-w-sm mt-6 md:mt-0 font-light leading-relaxed">Uma revisão completa pode levar horas. Com volume alto de contratos, isso se torna insustentável para qualquer equipe.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="feature-card bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#0D0822]/5 flex flex-col h-[28rem]">
<div className="flex justify-between items-start mb-auto">
<div className="">
<h4 className="font-['Outfit',sans-serif] font-normal tracking-tight text-2xl text-[#0D0822] leading-tight">Cláusulas problemáticas<br/>passam despercebidas</h4>
<p className="text-sm text-[#1A1A1A]/50 mt-2 font-light">A fadiga na leitura oculta riscos reais.</p>
</div>
<iconify-icon className="text-2xl text-[#20154C] shrink-0" icon="solar:eye-closed-linear"></iconify-icon>
</div>
<div className="relative h-56 w-full mt-8 flex justify-center" style={{perspective: '1000px'}}>
<div className="shuffle-card absolute w-full max-w-[15rem] bg-[#F2F0E9] border border-[#0D0822]/10 rounded-2xl p-5 shadow-sm" style={{zIndex: '3', transform: 'translateY(0) scale(1)'}}>
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-['Outfit',sans-serif] font-normal text-[#0D0822]">Cláusula 4.2</span>
<iconify-icon className="text-[#20154C] text-base" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="h-1.5 w-full bg-[#0D0822]/10 rounded-full overflow-hidden"><div className="h-full bg-[#20154C] w-[95%]"></div></div>
<div className="flex justify-between text-xs text-[#1A1A1A]/40 uppercase tracking-widest"><span className="">Abusiva</span><span>Alta</span></div>
</div>
</div>
<div className="shuffle-card absolute w-full max-w-[15rem] bg-white border border-[#0D0822]/10 rounded-2xl p-5 shadow-sm" style={{zIndex: '2', transform: 'translateY(15px) scale(0.95)'}}>
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-['Outfit',sans-serif] font-normal text-[#0D0822]">Cláusula 7.1</span>
<iconify-icon className="text-[#1A1A1A]/30 text-base" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="h-1.5 w-full bg-[#0D0822]/10 rounded-full overflow-hidden"><div className="h-full bg-[#0D0822] w-[75%]"></div></div>
<div className="flex justify-between text-xs text-[#1A1A1A]/40 uppercase tracking-widest"><span>Prazo</span><span>Médio</span></div>
</div>
</div>
<div className="shuffle-card absolute w-full max-w-[15rem] bg-[#F2F0E9] border border-[#0D0822]/10 rounded-2xl p-5 shadow-sm" style={{zIndex: '1', transform: 'translateY(30px) scale(0.9)'}}>
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-['Outfit',sans-serif] font-normal text-[#0D0822]">Cláusula 9.5</span>
<iconify-icon className="text-[#1A1A1A]/30 text-base" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="h-1.5 w-full bg-[#0D0822]/10 rounded-full overflow-hidden"><div className="h-full bg-[#1A1A1A] w-[90%]"></div></div>
<div className="flex justify-between text-xs text-[#1A1A1A]/40 uppercase tracking-widest"><span>Multa</span><span>Alta</span></div>
</div>
</div>
</div>
</div>

<div className="feature-card flex flex-col text-[#F2F0E9] bg-gray-500 h-[28rem] rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg">
<div className="flex justify-between items-start mb-8">
<div className="">
<h4 className="font-['Outfit',sans-serif] font-normal tracking-tight text-2xl text-[#F2F0E9] leading-tight">Jurisprudência<br/>fora do alcance</h4>
<p className="text-sm text-[#F2F0E9]/50 mt-2 font-light">Decisões expostas a riscos evitáveis.</p>
</div>
<div className="flex items-center gap-2 bg-[#1A1A1A]/40 rounded-full px-3 py-1.5 border border-[#F2F0E9]/10 shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-[#6A80FF] animate-pulse"></div>
<span className="text-xs font-['Outfit',sans-serif] tracking-[0.1em] uppercase">STJ/STF</span>
</div>
</div>
<div className="flex-1 bg-[#1A1A1A]/30 rounded-2xl border border-[#F2F0E9]/5 p-6 flex flex-col justify-center relative overflow-hidden">
<div className="w-full mb-8">
<div className="flex justify-between text-xs text-[#F2F0E9]/40 uppercase tracking-widest mb-3">
<span className="">Exposição de Risco</span>
<span id="grade-readout">90.0%</span>
</div>
<div className="w-full h-10 bg-[#1A1A1A]/50 rounded-xl relative overflow-hidden border border-[#F2F0E9]/5 flex items-center justify-center">
<div className="w-3/4 h-5 rounded-full border border-[#F2F0E9]/20 flex items-center justify-start px-1">
<div className="w-3 h-3 rounded-full bg-[#6A80FF] transition-transform duration-300 shadow-[0_0_12px_#6A80FF]" id="bubble-level"></div>
</div>
</div>
</div>
<div className="flex items-end justify-between h-20 px-2 gap-1 relative z-10">
<div className="w-1/5 bg-[#F2F0E9]/20 rounded-t-sm h-[30%] transition-all duration-700"></div>
<div className="w-1/5 bg-[#F2F0E9]/40 rounded-t-sm h-[50%] transition-all duration-700 relative"></div>
<div className="w-1/5 bg-[#F2F0E9]/80 rounded-t-sm h-[90%] transition-all duration-700 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-[#6A80FF] font-['Outfit'] font-normal tracking-wider">ALTO</div>
</div>
<div className="w-1/5 bg-[#F2F0E9]/40 rounded-t-sm h-[60%] transition-all duration-700"></div>
<div className="w-1/5 bg-[#F2F0E9]/20 rounded-t-sm h-[40%] transition-all duration-700"></div>
</div>
<div className="absolute bottom-6 left-0 w-full h-[1px] bg-[#6A80FF]/30 border-t border-dashed border-[#6A80FF]/50"></div>
</div>
</div>

<div className="feature-card bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#0D0822]/5 flex flex-col h-[28rem]">
<div className="flex justify-between items-start mb-8">
<div className="">
<h4 className="font-['Outfit',sans-serif] font-normal tracking-tight text-2xl text-[#0D0822] leading-tight">Troca constante<br/>de ferramentas</h4>
<p className="text-sm text-[#1A1A1A]/50 mt-2 font-light">Um fluxo quebrado que consome foco.</p>
</div>
<iconify-icon className="text-2xl text-[#0D0822] shrink-0" icon="solar:minimize-square-3-linear"></iconify-icon>
</div>
<div className="relative flex-1 bg-[#F2F0E9]/50 rounded-2xl border border-[#0D0822]/5 p-5 overflow-hidden flex flex-col justify-between">
<div className="">
<div className="flex justify-between text-xs font-normal text-[#1A1A1A]/40 mb-4 uppercase tracking-wider">
<span className="">Documento Word</span>
<span>IA Scanner</span>
</div>
<div className="space-y-2 h-28 relative">
<div className="bg-white rounded border border-[#0D0822]/5 h-6 w-full"></div>
<div className="bg-white rounded border border-[#20154C]/40 h-6 w-3/4 transition-colors" id="target-cell" style={{backgroundColor: 'rgba(32, 21, 76, 0.4)'}}></div>
<div className="bg-white rounded border border-[#0D0822]/5 h-6 w-5/6"></div>
<div className="bg-white rounded border border-[#0D0822]/5 h-6 w-full"></div>
</div>
</div>
<div className="flex justify-between items-center mt-4">
<div className="text-xs text-[#0D0822] font-['Outfit'] bg-[#0D0822]/5 px-3 py-1 rounded-full border border-[#0D0822]/10">Analisa no mesmo app</div>
<div className="flex items-center gap-1 text-[#20154C]">
<iconify-icon className="text-base" icon="solar:bolt-linear"></iconify-icon>
</div>
</div>
<iconify-icon className="absolute z-20 text-[#20154C] text-2xl drop-shadow-md" icon="solar:magic-stick-3-linear" id="scheduler-cursor" style={{top: '10%', left: '10%'}}></iconify-icon>
</div>
</div>
</div>
</section>

<section className="relative py-48 px-6 md:px-12 bg-[#1A1A1A] text-[#F2F0E9] overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]" id="credibilidade">
<div className="absolute inset-0 z-0 opacity-50 parallax-bg" style={{background: 'radial-gradient(circle at 50% 10%, #20154C 0%, #1A1A1A 80%)'}}></div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
<p className="font-['Outfit',sans-serif] text-base md:text-lg text-[#F2F0E9]/60 mb-10 uppercase tracking-[0.2em]" id="phil-subtitle">
                "A análise de risco deixou de ser algo que fazíamos ao final do processo."
            </p>
<h2 className="text-5xl md:text-7xl leading-[1.1] font-['Cormorant_Garamond',serif] italic text-[#F2F0E9] tracking-tighter max-w-4xl mx-auto" id="phil-title">
                Com a Arbitralis, ela passa a <span className="text-[#6A80FF] not-italic font-['Outfit',sans-serif] font-normal tracking-tighter">guiar</span> toda a revisão.
            </h2>
<div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-['Outfit'] uppercase tracking-widest text-[#F2F0E9]/50">
<span className="flex items-center gap-2"><iconify-icon className="text-xl text-[#6A80FF]" icon="solar:check-read-linear"></iconify-icon> 3× mais rápido</span>
<span className="flex items-center gap-2"><iconify-icon className="text-xl text-[#6A80FF]" icon="solar:document-text-linear"></iconify-icon> 100% no Word</span>
<span className="flex items-center gap-2"><iconify-icon className="text-xl text-[#6A80FF]" icon="solar:scale-linear"></iconify-icon> Base STJ / STF</span>
</div>
</div>
</section>


<section className="relative bg-[#F2F0E9]" id="solucao">

<div className="protocol-panel h-screen w-full flex items-center justify-center sticky top-0 bg-[#F2F0E9] px-6 z-10" style={{filter: 'none'}}>
<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<span className="font-['Outfit',sans-serif] text-sm text-[#20154C] uppercase tracking-[0.2em] mb-6 block font-normal">Passo 01</span>
<h3 className="text-5xl md:text-6xl leading-[1.1] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#0D0822] mb-8">
                        Abra o contrato no Word
                    </h3>
<p className="text-lg text-[#1A1A1A]/70 leading-relaxed max-w-md font-light">
                        Trabalhe normalmente no seu documento. Nenhuma mudança de hábito é necessária. A Arbitralis vive onde você já executa suas revisões diariamente.
                    </p>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="w-72 h-72 md:w-[28rem] md:h-[28rem] relative border border-[#0D0822]/10 rounded-full flex items-center justify-center bg-white shadow-[0_20px_40px_rgba(0,0,0,0.03)]">
<iconify-icon className="text-[8rem] text-[#0D0822] opacity-80" icon="solar:document-text-linear" id="doc-svg"></iconify-icon>
<div className="absolute top-10 right-10 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
<span className="font-['Outfit'] font-normal text-xl">W</span>
</div>
</div>
</div>
</div>
</div>

<div className="protocol-panel h-screen w-full flex items-center justify-center sticky top-0 bg-[#F2F0E9] px-6 z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]" style={{filter: 'none'}}>
<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<span className="font-['Outfit',sans-serif] text-sm text-[#20154C] uppercase tracking-[0.2em] mb-6 block font-normal">Passo 02</span>
<h3 className="text-5xl md:text-6xl leading-[1.1] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#0D0822] mb-8">
                        Clique em "Analisar"
                    </h3>
<p className="text-lg text-[#1A1A1A]/70 leading-relaxed max-w-md font-light">
                        O suplemento lê o documento aberto e envia para análise avançada da nossa IA — tudo em um único clique, na sua barra lateral nativa.
                    </p>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="w-72 h-72 md:w-[28rem] md:h-[28rem] relative border border-[#0D0822]/10 rounded-[2rem] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col p-10 justify-between">
<div className="flex justify-between items-center mb-6">
<div className="font-['Outfit'] text-sm text-[#0D0822] tracking-wider uppercase border border-[#0D0822]/20 px-4 py-1.5 rounded-full">Painel Lateral</div>
<div className="w-10 h-10 rounded-full border border-[#20154C] flex items-center justify-center text-[#20154C]">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 border border-[#0D0822]/10 rounded-xl relative overflow-hidden bg-[#F2F0E9]/30 flex flex-col items-center justify-center p-6 text-center">
<button className="bg-[#0D0822] text-[#F2F0E9] px-6 py-3 rounded-full font-['Outfit'] font-normal text-sm uppercase tracking-widest shadow-lg flex items-center gap-2 mb-4 hover:scale-105 transition-transform cursor-default">
<iconify-icon className="text-lg" icon="solar:scanner-linear"></iconify-icon> Analisar Risco
                            </button>
<div className="w-full h-px bg-[#475BE8] shadow-[0_0_12px_#475BE8] absolute left-0" id="blueprint-line" style={{top: '90%'}}></div>
<p className="text-xs text-[#1A1A1A]/40 mt-4">Processando cláusulas...</p>
</div>
</div>
</div>
</div>
</div>

<div className="protocol-panel flex sticky bg-[#F2F0E9] w-full h-screen z-30 pr-6 pl-6 top-0 shadow-[0_-20px_40px_rgba(0,0,0,0.02)] items-center justify-center">
<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<span className="font-['Outfit',sans-serif] text-sm text-[#20154C] uppercase tracking-[0.2em] mb-6 block font-normal">Passo 03</span>
<h3 className="text-5xl md:text-6xl leading-[1.1] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#0D0822] mb-8">
                        Receba o relatório completo
                    </h3>
<p className="text-lg text-[#1A1A1A]/70 leading-relaxed max-w-md font-light">
                        Em segundos, você tem uma análise estruturada. Visão clara das cláusulas com nível de risco sinalizado, referências diretas de tribunais e sugestões de redação.
                    </p>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="w-72 h-72 md:w-[28rem] md:h-[28rem] relative border border-[#0D0822]/10 rounded-[2rem] bg-[#0D0822]/5 shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden">
<img alt="Relatório no Laptop" className="transition-transform duration-1000 hover:scale-105 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaba42c6-b276-4f8b-88ad-4c7bf2eafe09_1600w.webp"/>
<div className="flex md:p-10 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-5 py-2.5 text-[#F2F0E9] text-sm font-normal border border-white/20 shadow-lg">
<iconify-icon className="text-lg text-[#20154C]" icon="solar:shield-check-linear"></iconify-icon> Análise Finalizada
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#F2F0E9] relative z-40" id="acesso">
<div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 border border-[#0D0822]/10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] text-center">
<span className="font-['Outfit',sans-serif] text-sm text-[#20154C] uppercase tracking-[0.2em] mb-6 block font-normal">Acesso Antecipado</span>
<h2 className="text-4xl md:text-5xl leading-[1.1] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#0D0822] mb-6">
                Seja um dos primeiros a testar
            </h2>
<p className="text-base text-[#1A1A1A]/70 max-w-xl mx-auto font-light leading-relaxed mb-12">
                Estamos abrindo acesso para um grupo seleto de profissionais. Entre na lista e garanta condições especiais de lançamento.
            </p>
<form className="text-left space-y-8 max-w-2xl mx-auto" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative">
<label className="text-xs text-[#1A1A1A]/50 uppercase tracking-widest block mb-2 font-normal">Nome Completo</label>
<input className="w-full bg-transparent border-b border-[#0D0822]/20 py-2 outline-none focus:border-[#20154C] transition-colors font-light text-[#1A1A1A]" required="" type="text"/>
</div>
<div className="relative">
<label className="text-xs text-[#1A1A1A]/50 uppercase tracking-widest block mb-2 font-normal">E-mail Profissional</label>
<input className="w-full bg-transparent border-b border-[#0D0822]/20 py-2 outline-none focus:border-[#20154C] transition-colors font-light text-[#1A1A1A]" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative">
<label className="text-xs text-[#1A1A1A]/50 uppercase tracking-widest block mb-2 font-normal">Perfil</label>
<select className="w-full bg-transparent border-b border-[#0D0822]/20 py-2 outline-none focus:border-[#20154C] transition-colors font-light text-[#1A1A1A] appearance-none cursor-pointer">
<option value="">Selecione...</option>
<option value="advogado">Advogado(a) / Escritório</option>
<option value="departamento">Dep. Jurídico Corporativo</option>
<option value="arbitro">Árbitro / Mediador</option>
<option value="empresa">Empresa / Negócios</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-[#1A1A1A]/40 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<label className="text-xs text-[#1A1A1A]/50 uppercase tracking-widest block mb-2 font-normal">Volume Mensal de Contratos</label>
<select className="w-full bg-transparent border-b border-[#0D0822]/20 py-2 outline-none focus:border-[#20154C] transition-colors font-light text-[#1A1A1A] appearance-none cursor-pointer">
<option value="">Selecione...</option>
<option value="1-10">1 a 10</option>
<option value="11-50">11 a 50</option>
<option value="51-200">51 a 200</option>
<option value="200+">Mais de 200</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-[#1A1A1A]/40 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="pt-8 flex flex-col items-center">
<button className="magnetic-btn relative overflow-hidden group rounded-full bg-[#0D0822] text-[#F2F0E9] px-10 py-4 text-base font-normal flex items-center justify-center gap-3 w-full md:w-auto" type="submit">
<span className="absolute inset-0 bg-[#20154C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0"></span>
<span className="relative z-10 transition-colors duration-500">Garantir meu acesso antecipado</span>
<iconify-icon className="relative z-10 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-[#1A1A1A]/40 mt-6 max-w-xs text-center">Seus dados são usados apenas para contato sobre o produto. Não enviamos spam.</p>
</div>
</form>
</div>
</section>

<footer className="bg-[#1A1A1A] text-[#F2F0E9] rounded-t-[3rem] md:rounded-t-[4rem] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden -mt-10 z-30">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 mb-24 relative z-10">
<div className="col-span-1 md:col-span-2">
<div className="font-['Outfit',sans-serif] font-normal text-4xl uppercase tracking-[0.2em] mb-6 text-[#6A80FF]">Arbitralis</div>
<p className="text-base text-[#F2F0E9]/60 max-w-sm leading-relaxed font-light mb-6">
                    Identifique riscos contratuais em segundos. O futuro da revisão jurídica corporativa, integrado nativamente ao seu fluxo de trabalho.
                </p>
<div className="flex flex-col gap-2 text-sm text-[#F2F0E9]/40 font-light">
<span>Advogados e escritórios</span>
<span>Departamentos jurídicos corporativos</span>
<span>Árbitros e mediadores</span>
</div>
</div>
<div>
<h5 className="font-['Outfit',sans-serif] text-sm text-[#F2F0E9]/40 uppercase tracking-[0.2em] mb-8 font-normal">Navegação</h5>
<ul className="space-y-4 text-base font-light">
<li><a className="hover:text-[#6A80FF] transition-colors block" href="#problema">O Problema</a></li>
<li><a className="hover:text-[#6A80FF] transition-colors block" href="#relatorio">O Relatório</a></li>
<li><a className="hover:text-[#6A80FF] transition-colors block" href="#solucao">Como Funciona</a></li>
<li><button className="hover:text-[#6A80FF] transition-colors text-left" onclick="openPageModal('Funcionalidades')">Mais Detalhes</button></li>
</ul>
</div>
<div>
<h5 className="font-['Outfit',sans-serif] text-sm text-[#F2F0E9]/40 uppercase tracking-[0.2em] mb-8 font-normal">Legal Reference</h5>
<ul className="space-y-4 text-base font-light">
<li><button className="hover:text-[#F2F0E9]/70 transition-colors text-left" onclick="openPageModal('Privacy')">Privacidade e Dados</button></li>
<li><button className="hover:text-[#F2F0E9]/70 transition-colors text-left" onclick="openPageModal('Terms')">Termos de Uso</button></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-[#F2F0E9]/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
<p className="text-sm text-[#F2F0E9]/40 tracking-wider font-light">© 2024 ARBITRALIS. TODOS OS DIREITOS RESERVADOS.</p>
<div className="flex items-center gap-3 bg-[#F2F0E9]/5 rounded-full px-5 py-2 border border-[#F2F0E9]/10">
<div className="w-2 h-2 rounded-full bg-[#6A80FF] animate-pulse shadow-[0_0_8px_#6A80FF]"></div>
<span className="text-xs font-['Outfit',sans-serif] text-[#F2F0E9]/60 tracking-[0.2em] uppercase font-normal">Vagas Limitadas</span>
</div>
</div>
<div className="absolute bottom-[2%] left-0 w-full text-[13vw] font-['Outfit',sans-serif] font-normal text-[#F2F0E9]/[0.02] leading-none pointer-events-none select-none text-center tracking-tighter">
            ARBITRALIS
        </div>
</footer>



    </>
  );
}
