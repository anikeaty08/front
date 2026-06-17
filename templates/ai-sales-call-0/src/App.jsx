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



        document.addEventListener('DOMContentLoaded', () => {
            // 1. Scroll Nav Effect
            const nav = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 80) {
                    nav.classList.add('nav-scrolled');
                } else {
                    nav.classList.remove('nav-scrolled');
                }
            });

            // 1.5 Mobile Menu Toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let isMenuOpen = false;

            function toggleMenu() {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    mobileMenuBtn.classList.add('menu-open');
                    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                    mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenuBtn.classList.remove('menu-open');
                    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = '';
                }
            }

            mobileMenuBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (isMenuOpen) toggleMenu();
                });
            });

            // 2. Intersection Observer for Reveal Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up').forEach(el => {
                revealObserver.observe(el);
            });

            // 3. SVG Timeline Scroll Progress
            const timelineSection = document.getElementById('ecossistema');
            const scrollLine = document.getElementById('scroll-timeline');
            
            if (timelineSection && scrollLine) {
                window.addEventListener('scroll', () => {
                    const rect = timelineSection.getBoundingClientRect();
                    const viewHeight = window.innerHeight;
                    
                    // Start progress when top of section reaches middle of screen
                    const startPos = viewHeight / 2;
                    // Calculate relative scroll
                    const scrollDistance = startPos - rect.top;
                    
                    if (scrollDistance > 0) {
                        const percentage = Math.min(100, (scrollDistance / rect.height) * 100);
                        scrollLine.style.height = `${percentage}%`;
                    } else {
                        scrollLine.style.height = `0%`;
                    }
                });
            }

            // 4. FAQ Accordion Logic
            const accordionItems = document.querySelectorAll('.accordion-item');
            accordionItems.forEach(item => {
                item.addEventListener('click', () => {
                    const content = item.querySelector('.accordion-content');
                    const icon = item.querySelector('.accordion-icon');
                    const isOpen = content.classList.contains('open');

                    // Close all others
                    document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
                    document.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('open'));

                    // Toggle current
                    if (!isOpen) {
                        content.classList.add('open');
                        icon.classList.add('open');
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
      

<nav className="fixed top-0 w-full z-[60] transition-all duration-300 h-16 sm:h-20 flex items-center bg-transparent border-b border-transparent" id="navbar">
<div className="max-w-[960px] mx-auto w-full px-4 sm:px-8 flex justify-between items-center">

<a className="flex items-center gap-1.5 sm:gap-2 relative z-[70]" href="#">
<svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewbox="0 0 120 120">
<ellipse cx="60" cy="60" fill="none" rx="42" ry="18" stroke="#E8570F" strokeWidth="4"></ellipse>
<ellipse cx="60" cy="60" fill="none" opacity="0.65" rx="42" ry="18" stroke="#E8570F" strokeWidth="3.5" transform="rotate(60 60 60)"></ellipse>
<ellipse cx="60" cy="60" fill="none" opacity="0.35" rx="42" ry="18" stroke="#E8570F" strokeWidth="3" transform="rotate(120 60 60)"></ellipse>
<circle cx="60" cy="60" fill="#E8570F" r="6"></circle>
</svg>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5 pt-0.5">
<span className="text-base sm:text-lg font-normal text-white tracking-tight leading-none">Evollure</span>
<span className="font-mono text-xs uppercase text-[#E8570F] tracking-widest leading-none mt-1 sm:mt-0">Intelligence</span>
</div>
</a>

<div className="flex items-center gap-3 sm:gap-6 relative z-[70]">

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-normal text-[#BBBBBB] hover:text-white transition-colors" href="#ecossistema">O ecossistema</a>
<a className="text-xs font-normal text-[#BBBBBB] hover:text-white transition-colors" href="#para-quem">Para quem</a>
<a className="text-xs font-normal text-[#BBBBBB] hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<a className="bg-[#E8570F] text-white text-xs font-semibold px-4 py-2 sm:px-5 sm:py-2.5 hover:bg-white hover:text-[#050505] transition-colors duration-250 rounded-none tracking-tight flex-shrink-0" href="#cta">
<span className="hidden min-[400px]:inline">Agendar Demo</span>
<span className="min-[400px]:hidden">Agendar</span>
</a>

<button className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1.5 focus:outline-none ml-1" id="mobile-menu-btn">
<span className="w-5 h-[1.5px] bg-white transition-all duration-300 origin-center transform-gpu"></span>
<span className="w-5 h-[1.5px] bg-white transition-all duration-300 origin-center transform-gpu"></span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#050505]/95 backdrop-blur-xl z-[50] flex flex-col justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<div className="flex flex-col gap-8 items-center text-center w-full px-8">
<a className="mobile-link text-xl font-normal text-white hover:text-[#E8570F] transition-colors w-full tracking-tight" href="#ecossistema">O ecossistema</a>
<a className="mobile-link text-xl font-normal text-white hover:text-[#E8570F] transition-colors w-full tracking-tight" href="#para-quem">Para quem</a>
<a className="mobile-link text-xl font-normal text-white hover:text-[#E8570F] transition-colors w-full tracking-tight" href="#faq">FAQ</a>
</div>
</div>

<section className="md:pt-48 md:pb-32 overflow-hidden border-transparent border-b pt-40 pb-24 relative">

<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(#242424 1px, transparent 1px), linear-gradient(90deg, #242424 1px, transparent 1px)', backgroundSize: '80px 80px', opacity: '0.04'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none" style={{background: 'radial-gradient(circle, rgba(232,87,15,0.08) 0%, transparent 60%)'}}></div>
<div className="max-w-[960px] mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">

<div className="w-full md:w-[55%] flex flex-col gap-5">
<div className="animate-fade-up opacity-0" style={{animationFillMode: 'forwards'}}>
<span className="uppercase text-xs text-[#E8570F] tracking-[0.2em] font-mono">Evollure Intelligence</span>
</div>
<h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-[1.15] animate-fade-up opacity-0 delay-100 text-balance" style={{animationFillMode: 'forwards'}}>
                    Cada call do seu time<br/>
                    esconde dinheiro.<br/>
<span className="font-semibold italic text-[#E8570F]">A gente encontra.</span>
</h1>
<p className="md:text-base leading-[1.7] animate-fade-up delay-200 text-sm text-[#BBBBBB] opacity-0 max-w-[520px]" style={{animationFillMode: 'forwards'}}>Uma plataforma de inteligência comercial totalmente personalizada às diretrizes de venda da sua empresa. Cada conversa é avaliada contra os critérios que você definiu, não contra um template genérico.</p>
<div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-up opacity-0 delay-300" style={{animationFillMode: 'forwards'}}>
<a className="bg-[#E8570F] text-white text-sm font-semibold px-8 py-3.5 hover:bg-white hover:text-[#050505] transition-colors duration-250 text-center rounded-none tracking-tight" href="#cta">
                        Agendar Demo
                    </a>
<a className="bg-transparent text-white border border-[#333333] text-sm font-semibold px-8 py-3.5 hover:border-[#E8570F] hover:text-[#E8570F] transition-colors duration-250 flex items-center justify-center gap-2 rounded-none tracking-tight" href="#ecossistema">
                        Ver o ecossistema <iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="w-full md:w-[45%] h-[280px] md:h-[400px] relative animate-fade-in opacity-0 delay-300 flex justify-end" style={{animationFillMode: 'forwards'}}>
<svg className="w-full h-full max-w-[450px]" preserveaspectratio="xMidYMid meet" viewbox="0 0 450 400">

<defs>
<lineargradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#E8570F" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#E8570F" stop-opacity="0.1"></stop>
</lineargradient>
<filter height="140%" id="nodeGlow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="4"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>


<path className="animate-wave-pulse" d="M 0 160 C 50 110, 100 240, 200 180" fill="none" stroke="url(#waveGrad)" stroke-dasharray="6 4" strokeWidth="2"></path>

<path d="M 0 200 C 60 200, 120 150, 200 200" fill="none" opacity="0.6" stroke="#E8570F" strokeWidth="1.5"></path>

<path d="M 0 240 C 80 280, 140 160, 200 220" fill="none" opacity="0.4" stroke="#E8570F" strokeWidth="1"></path>

<g transform="translate(200, 200) scale(0.4)">
<ellipse cx="0" cy="0" fill="none" rx="42" ry="18" stroke="#E8570F" strokeWidth="4"></ellipse>
<ellipse cx="0" cy="0" fill="none" opacity="0.65" rx="42" ry="18" stroke="#E8570F" strokeWidth="3.5" transform="rotate(60)"></ellipse>
<ellipse cx="0" cy="0" fill="none" opacity="0.35" rx="42" ry="18" stroke="#E8570F" strokeWidth="3" transform="rotate(120)"></ellipse>
<circle cx="0" cy="0" fill="#E8570F" filter="url(#nodeGlow)" r="10"></circle>
</g>


<path d="M 220 200 L 260 120 L 420 120" fill="none" stroke="#333333" strokeWidth="1"></path>

<path className="animate-dash-svg" d="M 220 200 L 280 200 L 420 200" fill="none" stroke="#555555" stroke-dasharray="4 4" strokeWidth="1.5"></path>

<path d="M 220 200 L 260 280 L 420 280" fill="none" stroke="#333333" strokeWidth="1"></path>

<circle cx="420" cy="120" fill="#555555" r="4" stroke="#E8570F" strokeWidth="1"></circle>
<circle cx="420" cy="200" fill="#E8570F" filter="url(#nodeGlow)" r="5"></circle>
<circle cx="420" cy="280" fill="#555555" r="4" stroke="#E8570F" strokeWidth="1"></circle>

<rect fill="#111111" height="18" rx="0" stroke="#242424" strokeWidth="1" width="70" x="290" y="106"></rect>
<text fill="#999999" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letter-spacing="2" text-anchor="middle" x="325" y="118">RAPPORT</text>
<rect fill="#1A1A1A" height="18" rx="0" stroke="#E8570F" strokeWidth="1" width="60" x="310" y="186"></rect>
<text fill="#E8570F" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letter-spacing="2" text-anchor="middle" x="340" y="198">SCORE</text>
<rect fill="#111111" height="18" rx="0" stroke="#242424" strokeWidth="1" width="90" x="280" y="266"></rect>
<text className="" fill="#999999" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letter-spacing="2" text-anchor="middle" x="325" y="278">FECHAMENTO</text>
</svg>
</div>
</div>
</section>

<div className="overflow-hidden bg-[#0A0A0A] border-[#1A1A1A] border-b pt-4 pb-4">
<div className="w-[200%] flex items-center font-mono text-xs text-[#777777] tracking-[0.1em] animate-marquee">

<div className="flex items-center whitespace-nowrap w-1/2 justify-around">
<span className="">73% dos vendedores não fazem a pergunta que mais impacta o fechamento</span>
<span className="text-[#333333]">·</span>
<span className=""></span>
<span className="text-[#333333]">·</span>
<span>Vendedores falam mais de 60% do tempo nas calls que não fecham</span>
<span className="text-[#333333]">·</span>
<span>Apenas 12% das empresas analisam sistematicamente suas calls</span>
<span className="text-[#333333]">·</span>
<span>O custo médio de um vendedor improdutivo é R$8.000/mês em salário + comissão perdida</span>
<span className="text-[#333333]">·</span>
<span>4.2x mais conversões quando o vendedor fala menos de 40% do tempo</span>
<span className="text-[#333333]">·</span>
</div>

<div className="flex items-center whitespace-nowrap w-1/2 justify-around">
<span>73% dos vendedores não fazem a pergunta que mais impacta o fechamento</span>
<span className="text-[#333333]">·</span>
<span>O follow-up acima de 24h reduz a conversão em 38%</span>
<span className="text-[#333333]">·</span>
<span>Vendedores falam mais de 60% do tempo nas calls que não fecham</span>
<span className="text-[#333333]">·</span>
<span>Apenas 12% das empresas analisam sistematicamente suas calls</span>
<span className="text-[#333333]">·</span>
<span>O custo médio de um vendedor improdutivo é R$8.000/mês em salário + comissão perdida</span>
<span className="text-[#333333]">·</span>
<span>4.2x mais conversões quando o vendedor fala menos de 40% do tempo</span>
<span className="text-[#333333]">·</span>
</div>
</div>
</div>

<section className="md:py-40 bg-[#050505] border-[#1A1A1A] border-b pt-32 pb-32 relative">
<div className="max-w-[960px] mx-auto px-8 text-center flex flex-col items-center reveal-up">
<span className="text-7xl font-semibold text-[#E8570F] tracking-tighter mb-6 block leading-none">73%</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.2] mb-8 max-w-[720px] text-balance">
                dos gestores de vendas tomam decisões<br/>
                baseadas em <span className="font-semibold italic text-[#E8570F]">achismo</span> — não em dados.
            </h2>
<p className="text-sm md:text-base text-[#999999] leading-[1.9] max-w-[560px]">
                Você contrata, treina, cobra resultado. Mas não consegue ouvir cada call. Não sabe quem segue o processo comercial. Não sabe quem improvisa. Não sabe onde o dinheiro escapa.<br/><br/>
                Sem uma análise real e sistemática de cada conversa, você está pilotando a operação no escuro.
            </p>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0A0A0A] relative border-b border-[#1A1A1A]">
<div className="max-w-[960px] mx-auto px-8 relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8 reveal-up">

<div className="w-full md:w-[45%] flex flex-col gap-5">
<span className="font-mono text-xs text-[#E8570F] uppercase tracking-[0.2em]">O Diferencial</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.2] text-balance">
                    Não é uma ferramenta genérica.<br/>
                    É o <span className="font-semibold italic text-[#E8570F]">seu processo de vendas</span><br/>
                    transformado em inteligência.
                </h2>
<p className="text-sm md:text-base text-[#999999] leading-[1.9] max-w-[520px] mt-4">
                    O Cérebro Comercial é o coração do Evollure Intelligence. Antes de analisar uma única call, nós mapeamos junto com você as diretrizes comerciais da sua empresa — os critérios que definem uma boa venda no SEU negócio.<br/><br/>
                    Não são métricas genéricas. São os seus critérios, com os seus pesos, refletindo o seu processo.
                </p>
</div>

<div className="w-full md:w-[55%] flex flex-col gap-4">
<div className="bg-[#111111] border border-[#242424] p-8 rounded-none w-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
<span className="block text-xs font-mono text-[#777777] mb-8 border-b border-[#242424] pb-4">Exemplo: Cérebro Comercial — Rede de Franquias</span>
<div className="flex flex-col gap-4 font-mono text-xs text-[#BBBBBB]">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 w-[60%]">
<span className="text-[#555555]">①</span>
<span className="truncate">Rapport e conexão inicial</span>
</div>
<div className="flex items-center gap-4 w-[40%] justify-end">
<div className="hidden sm:block h-1 bg-[#242424] w-full max-w-[80px]">
<div className="h-full bg-[#E8570F] w-[20%] group-hover:bg-[#F07A3E] transition-colors"></div>
</div>
<span className="text-[#E8570F] w-16 text-right shrink-0">peso 10%</span>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 w-[60%]">
<span className="text-[#555555]">②</span>
<span className="truncate text-white">Diagnóstico da necessidade</span>
</div>
<div className="flex items-center gap-4 w-[40%] justify-end">
<div className="hidden sm:block h-1 bg-[#242424] w-full max-w-[80px]">
<div className="h-full bg-[#E8570F] w-[60%] group-hover:bg-[#F07A3E] transition-colors"></div>
</div>
<span className="text-[#E8570F] w-16 text-right font-semibold shrink-0">peso 20%</span>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 w-[60%]">
<span className="text-[#555555]">③</span>
<span className="truncate">Apresentação técnica</span>
</div>
<div className="flex items-center gap-4 w-[40%] justify-end">
<div className="hidden sm:block h-1 bg-[#242424] w-full max-w-[80px]">
<div className="h-full bg-[#E8570F] w-[40%] group-hover:bg-[#F07A3E] transition-colors"></div>
</div>
<span className="text-[#E8570F] w-16 text-right shrink-0">peso 15%</span>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 w-[60%]">
<span className="text-[#555555]">④</span>
<span className="truncate">Cálculo de economia e payback</span>
</div>
<div className="flex items-center gap-4 w-[40%] justify-end">
<div className="hidden sm:block h-1 bg-[#242424] w-full max-w-[80px]">
<div className="h-full bg-[#E8570F] w-[40%] group-hover:bg-[#F07A3E] transition-colors"></div>
</div>
<span className="text-[#E8570F] w-16 text-right shrink-0">peso 15%</span>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 w-[60%]">
<span className="text-[#555555]">⑤</span>
<span className="truncate">Quebra de objeções</span>
</div>
<div className="flex items-center gap-4 w-[40%] justify-end">
<div className="hidden sm:block h-1 bg-[#242424] w-full max-w-[80px]">
<div className="h-full bg-[#E8570F] w-[40%] group-hover:bg-[#F07A3E] transition-colors"></div>
</div>
<span className="text-[#E8570F] w-16 text-right shrink-0">peso 15%</span>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 w-[60%]">
<span className="text-[#555555]">⑥</span>
<span className="truncate">Fechamento e próximos passos</span>
</div>
<div className="flex items-center gap-4 w-[40%] justify-end">
<div className="hidden sm:block h-1 bg-[#242424] w-full max-w-[80px]">
<div className="h-full bg-[#E8570F] w-[20%] group-hover:bg-[#F07A3E] transition-colors"></div>
</div>
<span className="text-[#E8570F] w-16 text-right shrink-0">peso 10%</span>
</div>
</div>
</div>
</div>
<p className="text-xs text-[#777777] italic text-center px-4">
                    Cada empresa tem o seu. Franquias avaliam aderência ao script. SaaS avalia diagnóstico técnico. Seguros avaliam compliance. O Cérebro Comercial se adapta — porque a sua venda é única.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505] relative border-b border-[#1A1A1A]" id="ecossistema">
<div className="max-w-[960px] mx-auto px-8 relative">
<div className="text-center md:text-left mb-20 reveal-up">
<span className="font-mono text-xs text-[#E8570F] uppercase tracking-[0.2em] block mb-4">O Ecossistema Completo</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.2] mb-6">
                    Da gravação ao relatório.<br/>
<span className="font-semibold italic text-[#E8570F]">Tudo conectado.</span>
</h2>
<p className="md:text-base leading-[1.8] text-sm text-[#999999] max-w-[520px]">O Evollure Intelligence não é só um dashboard. É um ecossistema que cobre todo o processo, da captura da call até a decisão de coaching.</p>
</div>

<div className="relative max-w-[800px] md:mx-auto ml-2 mt-16">

<div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-[1px] bg-[#1A1A1A] md:-translate-x-1/2">
<div className="absolute top-0 left-0 w-full bg-[#E8570F] h-0 transition-all duration-100 ease-out shadow-[0_0_10px_#E8570F]" id="scroll-timeline" style={{height: '0%'}}></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-24 pl-12 md:pl-0 reveal-up">
<div className="md:w-[45%] md:text-right md:pr-12 order-2 md:order-1 mt-2 md:mt-0">
<h3 className="text-lg font-semibold text-white mb-3">O vendedor faz a call normalmente</h3>
<p className="text-sm text-[#999999] leading-[1.8]">O app da Evollure roda em segundo plano no computador do vendedor. Sem mudar a rotina, sem complicação. A call é gravada e enviada automaticamente.</p>
</div>
<div className="absolute left-[-11px] md:left-1/2 top-0 md:top-auto md:-translate-x-1/2 w-6 h-6 rounded-none bg-[#050505] border-2 border-[#E8570F] flex items-center justify-center order-1 md:order-2 shadow-[0_0_15px_rgba(232,87,15,0.2)]">
<iconify-icon className="text-[#E8570F] text-xs" icon="solar:soundwave-linear"></iconify-icon>
</div>
<div className="md:w-[45%] order-3 hidden md:block"></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-24 pl-12 md:pl-0 reveal-up delay-100">
<div className="md:w-[45%] order-1 hidden md:block"></div>
<div className="absolute left-[-11px] md:left-1/2 top-0 md:top-auto md:-translate-x-1/2 w-6 h-6 rounded-none bg-[#050505] border-2 border-[#E8570F] flex items-center justify-center order-1 md:order-2 shadow-[0_0_15px_rgba(232,87,15,0.2)]">
<iconify-icon className="text-[#E8570F] text-xs" icon="solar:text-square-linear"></iconify-icon>
</div>
<div className="md:w-[45%] md:pl-12 order-2 md:order-3 mt-2 md:mt-0">
<h3 className="text-lg font-semibold text-white mb-3">Cada palavra é transcrita com precisão</h3>
<p className="text-sm text-[#999999] leading-[1.8]">A inteligência artificial transcreve a call inteira — com separação de quem falou o quê, timestamps e identificação de trechos-chave. Você pode ler a conversa como se fosse um roteiro.</p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-24 pl-12 md:pl-0 reveal-up delay-200">
<div className="md:w-[45%] md:text-right md:pr-12 order-2 md:order-1 mt-2 md:mt-0">
<h3 className="text-lg font-semibold text-white mb-3">Avaliação automática contra o seu Cérebro Comercial</h3>
<p className="text-sm text-[#999999] leading-[1.8]">Cada call é avaliada critério por critério — com score individual e score geral. A IA não dá opinião. Ela mede contra as diretrizes que você definiu. Se o vendedor pulou a etapa de diagnóstico, o score reflete.</p>
</div>
<div className="absolute left-[-11px] md:left-1/2 top-0 md:top-auto md:-translate-x-1/2 w-6 h-6 rounded-none bg-[#050505] border-2 border-[#E8570F] flex items-center justify-center order-1 md:order-2 shadow-[0_0_15px_rgba(232,87,15,0.2)]">
<iconify-icon className="text-[#E8570F] text-xs" icon="solar:tuning-square-linear"></iconify-icon>
</div>
<div className="md:w-[45%] order-3 hidden md:block"></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between pl-12 md:pl-0 reveal-up delay-300">
<div className="md:w-[45%] order-1 hidden md:block"></div>
<div className="absolute left-[-11px] md:left-1/2 top-0 md:top-auto md:-translate-x-1/2 w-6 h-6 rounded-none bg-[#050505] border-2 border-[#E8570F] flex items-center justify-center order-1 md:order-2 shadow-[0_0_15px_rgba(232,87,15,0.2)]">
<iconify-icon className="text-[#E8570F] text-xs" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="md:w-[45%] md:pl-12 order-2 md:order-3 mt-2 md:mt-0">
<h3 className="text-lg font-semibold text-white mb-3">Dashboard com a verdade da sua operação</h3>
<p className="text-sm text-[#999999] leading-[1.8]">Você abre o painel e vê: quem está performando, quem precisa de coaching, qual critério está mais fraco no time, como a performance evolui semana a semana. Decisões de gestão baseadas em dados.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden border-b border-[#1A1A1A]">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(#242424 1px, transparent 1px), linear-gradient(90deg, #242424 1px, transparent 1px)', backgroundSize: '80px 80px', opacity: '0.04'}}></div>
<div className="max-w-[960px] mx-auto px-8 relative z-10 flex flex-col gap-32">

<div className="text-center md:text-left reveal-up">
<span className="font-mono text-xs text-[#E8570F] uppercase tracking-[0.2em] block mb-4">Na Prática</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.2] mb-6">
                    Exemplos reais do que<br/>
                    você vai <span className="font-semibold italic text-[#E8570F]">enxergar.</span>
</h2>
<p className="text-sm md:text-base text-[#999999] leading-[1.8] max-w-[520px]">
                    O dashboard do Evollure Intelligence não mostra só números. Ele conta a história da sua operação.
                </p>
</div>

<div className="flex flex-col md:flex-row items-center gap-16 reveal-up">
<div className="w-full md:w-[45%] order-2 md:order-1">
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-[1.3] mb-4">
<span className="text-[#E8570F]">"</span>Meu time tem 12 vendedores. 3 carregam 70% do resultado.<span className="text-[#E8570F]">"</span>
</h3>
<p className="text-sm text-[#999999] leading-[1.8]">
                        O painel do Diretor mostra o ranking de vendedores por score geral, volume de calls, taxa de conversão e evolução ao longo do tempo. Num relance, você sabe quem está performando e quem está custando dinheiro. Sem ouvir uma call sequer.
                    </p>
</div>
<div className="w-full md:w-[55%] h-[260px] bg-[#111111] border border-[#242424] p-6 relative order-1 md:order-2 flex flex-col justify-end overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
<div className="absolute top-6 right-6 font-mono text-xs text-[#E8570F] tracking-[0.1em]">SCORE MÉDIO: 7.8</div>
<svg className="w-full h-full mt-8" preserveaspectratio="none" viewbox="0 0 400 200">

<rect className="" fill="#E8570F" height="4" width="95%" x="0" y="20"></rect>
<rect fill="#E8570F" height="4" width="88%" x="0" y="35"></rect>
<rect fill="#E8570F" height="4" width="82%" x="0" y="50"></rect>
<rect fill="#333333" height="4" width="65%" x="0" y="75"></rect>
<rect fill="#333333" height="4" width="62%" x="0" y="90"></rect>
<rect className="" fill="#333333" height="4" width="58%" x="0" y="105"></rect>
<rect className="" fill="#333333" height="4" width="55%" x="0" y="120"></rect>
<rect fill="#242424" height="4" width="40%" x="0" y="145"></rect>
<rect fill="#242424" height="4" width="35%" x="0" y="160"></rect>
<rect fill="#242424" height="4" width="25%" x="0" y="175"></rect>
<rect fill="#242424" height="4" width="20%" x="0" y="190"></rect>
</svg>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-16 reveal-up">
<div className="w-full md:w-[55%] bg-[#111111] border border-[#242424] p-6 md:p-8 relative order-1 flex flex-col gap-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">

<div className="flex items-center justify-between font-mono text-xs">
<span className="text-[#777777] uppercase">Vendedor: João M.</span>
<span className="text-white">DETALHAMENTO</span>
</div>
<div className="flex flex-col gap-4 font-mono text-xs w-full">
<div className="flex justify-between items-center w-full">
<span className="w-1/4 text-[#BBBBBB]">Rapport</span>
<div className="w-1/2 h-1 bg-[#242424]"><div className="h-full bg-[#E8570F] w-[85%]"></div></div>
<span className="w-[10%] text-right text-white">8.5</span>
</div>
<div className="flex justify-between items-center w-full">
<span className="w-1/4 text-[#BBBBBB]">Diagnóstico</span>
<div className="w-1/2 h-1 bg-[#242424]"><div className="h-full bg-[#E8570F] w-[72%] opacity-80"></div></div>
<span className="w-[10%] text-right text-white">7.2</span>
</div>
<div className="flex justify-between items-center w-full">
<span className="w-1/4 text-[#BBBBBB]">Fechamento</span>
<div className="w-1/2 h-1 bg-[#242424]"><div className="h-full bg-[#E8570F] w-[42%] opacity-40"></div></div>
<span className="w-[10%] text-right text-[#E8570F]">4.2</span>
</div>
<div className="flex justify-between items-center w-full">
<span className="w-1/4 text-[#BBBBBB]">Follow-up</span>
<div className="w-1/2 h-1 bg-[#242424]"><div className="h-full bg-[#E8570F] w-[38%] opacity-30"></div></div>
<span className="w-[10%] text-right text-[#E8570F]">3.8</span>
</div>
</div>
</div>
<div className="w-full md:w-[45%] order-2">
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-[1.3] mb-4">
<span className="text-[#E8570F]">"</span>O João tem score 4.2 em fechamento. Toda semana.<span className="text-[#E8570F]">"</span>
</h3>
<p className="text-sm text-[#999999] leading-[1.8]">
                        O Gestor mergulha no time. Vê o score de cada vendedor por critério do Cérebro Comercial. Identifica padrões — o João é bom em rapport mas fraco em fechamento. A Maria qualifica bem mas pula o follow-up. Coaching cirúrgico, não genérico.
                    </p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-16 reveal-up">
<div className="w-full md:w-[45%] order-2 md:order-1">
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-[1.3] mb-4">
<span className="text-[#E8570F]">"</span>Eu sei exatamente onde preciso melhorar.<span className="text-[#E8570F]">"</span>
</h3>
<p className="text-sm text-[#999999] leading-[1.8]">
                        O vendedor acessa seus próprios scores. Vê a evolução call a call. Entende quais critérios estão puxando o score pra baixo. Não precisa esperar feedback do gestor — o dado está ali, transparente, em tempo real. O vendedor que quer crescer, cresce.
                    </p>
</div>
<div className="w-full md:w-[55%] h-[260px] bg-[#111111] border border-[#242424] p-6 relative order-1 md:order-2 overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
<div className="absolute top-6 left-6 font-mono text-xs text-[#E8570F] tracking-[0.1em] border border-[#E8570F]/20 px-2 py-1 bg-[#E8570F]/5">
                        SCORE GERAL: 6.1 → 7.8
                    </div>
<svg className="w-full h-full mt-10" preserveaspectratio="none" viewbox="0 0 400 200">

<line stroke="#242424" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>
<line stroke="#242424" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line className="" stroke="#242424" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>

<path className="animate-dash-svg" d="M 0 170 L 80 150 L 160 160 L 240 100 L 320 80 L 400 40" fill="none" stroke="#E8570F" strokeWidth="2"></path>

<circle cx="80" cy="150" fill="#111111" r="3" stroke="#E8570F" strokeWidth="2"></circle>
<circle cx="160" cy="160" fill="#111111" r="3" stroke="#E8570F" strokeWidth="2"></circle>
<circle cx="240" cy="100" fill="#111111" r="3" stroke="#E8570F" strokeWidth="2"></circle>
<circle cx="320" cy="80" fill="#111111" r="3" stroke="#E8570F" strokeWidth="2"></circle>
<circle cx="400" cy="40" fill="#E8570F" r="4"></circle>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505] border-b border-[#1A1A1A]" id="para-quem">
<div className="max-w-[960px] mr-auto ml-auto pr-8 pl-8">
<div className="mb-16 text-center md:text-left reveal-up">
<span className="font-mono text-xs text-[#E8570F] uppercase tracking-[0.2em] block mb-4">Para quem é o Evollure Intelligence</span>
<h2 className="md:text-4xl leading-[1.2] text-3xl font-semibold text-white tracking-tight">Se o seu time vende por telefone <br/> ou por reuniões, isso foi feito <span className="font-semibold italic text-[#E8570F]">pra você.</span></h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 hover:border-[#E8570F] transition-all duration-300 hover:-translate-y-1 reveal-up rounded-none group">
<iconify-icon className="text-2xl text-[#E8570F] mb-4 block group-hover:scale-110 transition-transform duration-300" icon="solar:widget-3-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">Franquias</h3>
<p className="text-xs text-[#999999] leading-[1.6]">Padronize o atendimento em todas as unidades.</p>
</div>

<div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 hover:border-[#E8570F] transition-all duration-300 hover:-translate-y-1 reveal-up delay-100 rounded-none group">
<iconify-icon className="text-2xl text-[#E8570F] mb-4 block group-hover:scale-110 transition-transform duration-300" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">Seguros</h3>
<p className="text-xs text-[#999999] leading-[1.6]">Garanta compliance e qualidade em cada proposta.</p>
</div>

<div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 hover:border-[#E8570F] transition-all duration-300 hover:-translate-y-1 reveal-up delay-200 rounded-none group">
<iconify-icon className="text-2xl text-[#E8570F] mb-4 block group-hover:scale-110 transition-transform duration-300" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">Energia Solar</h3>
<p className="text-xs text-[#999999] leading-[1.6]">Acompanhe a qualificação técnica do vendedor.</p>
</div>

<div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 hover:border-[#E8570F] transition-all duration-300 hover:-translate-y-1 reveal-up rounded-none group">
<iconify-icon className="text-2xl text-[#E8570F] mb-4 block group-hover:scale-110 transition-transform duration-300" icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">SaaS / Tecnologia</h3>
<p className="text-xs text-[#999999] leading-[1.6]">Meça a aderência ao playbook de vendas.</p>
</div>

<div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 hover:border-[#E8570F] transition-all duration-300 hover:-translate-y-1 reveal-up delay-100 rounded-none group">
<iconify-icon className="text-2xl text-[#E8570F] mb-4 block group-hover:scale-110 transition-transform duration-300" icon="solar:medical-kit-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">Clínicas e Saúde</h3>
<p className="text-xs text-[#999999] leading-[1.6]">Avalie o acolhimento e a conversão de agendamentos.</p>
</div>

<div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 hover:border-[#E8570F] transition-all duration-300 hover:-translate-y-1 reveal-up delay-200 rounded-none group">
<iconify-icon className="text-2xl text-[#E8570F] mb-4 block group-hover:scale-110 transition-transform duration-300" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">Educação</h3>
<p className="text-xs text-[#999999] leading-[1.6]">Otimize a matrícula e o follow-up de leads.</p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-[#0A0A0A] border-b border-[#1A1A1A]">
<div className="max-w-[800px] mx-auto px-8 text-center flex flex-col items-center reveal-up">
<h2 className="text-2xl md:text-3xl font-semibold text-white leading-[1.5] mb-8 text-balance">
<span className="text-[#E8570F]">"</span>Antes eu achava que sabia como meu time vendia. O Evollure me mostrou que eu não fazia ideia.<span className="text-[#E8570F]">"</span>
</h2>
<span className="font-mono text-xs text-[#777777]">Diretor Comercial — Rede de Franquias</span>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505]" id="faq">
<div className="max-w-[720px] mx-auto px-8">
<div className="mb-16 reveal-up text-center md:text-left">
<span className="font-mono text-xs text-[#E8570F] uppercase tracking-[0.2em]">Perguntas Frequentes</span>
</div>
<div className="flex flex-col reveal-up">

<div className="border-b border-[#242424] py-6 accordion-item cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="text-base font-semibold text-white group-hover:text-[#E8570F] transition-colors">Como funciona a gravação das calls?</h4>
<iconify-icon className="text-xl text-[#555555] accordion-icon" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="accordion-content">
<p className="text-sm text-[#999999] leading-[1.8] pt-4 pr-8">O vendedor usa nosso app desktop (Windows/Mac) que roda em segundo plano durante a ligação. Não precisa mudar nada na rotina. A call é gravada e enviada automaticamente pra plataforma assim que termina.</p>
</div>
</div>

<div className="border-b border-[#242424] py-6 accordion-item cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="text-base font-semibold text-white group-hover:text-[#E8570F] transition-colors">O que é o Cérebro Comercial?</h4>
<iconify-icon className="text-xl text-[#555555] accordion-icon" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="accordion-content">
<p className="text-sm text-[#999999] leading-[1.8] pt-4 pr-8">É o framework de avaliação totalmente personalizado da sua empresa. Nós mapeamos junto com você os critérios que definem uma boa venda no seu negócio — e atribuímos pesos a cada um. Cada call é avaliada contra esse framework, gerando um score de 0 a 10 por critério e um score geral.</p>
</div>
</div>

<div className="border-b border-[#242424] py-6 accordion-item cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="text-base font-semibold text-white group-hover:text-[#E8570F] transition-colors">É personalizado mesmo? Ou é um template?</h4>
<iconify-icon className="text-xl text-[#555555] accordion-icon" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="accordion-content">
<p className="text-sm text-[#999999] leading-[1.8] pt-4 pr-8">É sob medida. Cada empresa tem seu próprio Cérebro Comercial, configurado durante o onboarding. Uma franquia de energia solar tem critérios completamente diferentes de uma corretora de seguros. O sistema se adapta ao SEU processo, não o contrário.</p>
</div>
</div>

<div className="border-b border-[#242424] py-6 accordion-item cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="text-base font-semibold text-white group-hover:text-[#E8570F] transition-colors">Funciona pra qualquer tipo de venda?</h4>
<iconify-icon className="text-xl text-[#555555] accordion-icon" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="accordion-content">
<p className="text-sm text-[#999999] leading-[1.8] pt-4 pr-8">Funciona pra qualquer venda que aconteça por telefone ou videochamada. Franquias, seguros, energia solar, SaaS, clínicas, educação — qualquer operação com vendedores que fazem calls.</p>
</div>
</div>

<div className="border-b border-[#242424] py-6 accordion-item cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="text-base font-semibold text-white group-hover:text-[#E8570F] transition-colors">Quanto tempo leva pra implementar?</h4>
<iconify-icon className="text-xl text-[#555555] accordion-icon" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="accordion-content">
<p className="text-sm text-[#999999] leading-[1.8] pt-4 pr-8">Menos de uma semana. Dia 1: onboarding e configuração do Cérebro Comercial junto com a nossa equipe. Dia 2-3: instalação do app nos vendedores. Dia 4+: primeiras calls analisadas. Em poucos dias você já tem dados suficientes pra tomar decisões.</p>
</div>
</div>

<div className="border-b border-[#242424] py-6 accordion-item cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="text-base font-semibold text-white group-hover:text-[#E8570F] transition-colors">Quem tem acesso ao quê?</h4>
<iconify-icon className="text-xl text-[#555555] accordion-icon" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="accordion-content">
<p className="text-sm text-[#999999] leading-[1.8] pt-4 pr-8">O sistema tem três níveis de acesso: Diretor vê toda a operação. Gestor vê o time dele. Vendedor vê os próprios scores e evolução. Cada papel vê o que precisa pra tomar decisão — nada mais, nada menos.</p>
</div>
</div>

<div className="border-b border-[#242424] py-6 accordion-item cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="text-base font-semibold text-white group-hover:text-[#E8570F] transition-colors">É seguro? E o RGPD/LGPD?</h4>
<iconify-icon className="text-xl text-[#555555] accordion-icon" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="accordion-content">
<p className="text-sm text-[#999999] leading-[1.8] pt-4 pr-8">Sim. As calls são criptografadas em trânsito e em repouso. Os dados ficam em servidores seguros. Para clientes europeus, somos compliance com RGPD. Para Brasil, LGPD. Você controla quem tem acesso a quê.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-48 overflow-hidden flex flex-col text-center bg-[#050505] pt-32 pb-32 relative items-center justify-center" id="cta">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none" style={{background: 'radial-gradient(circle, rgba(232,87,15,0.10) 0%, transparent 60%)'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] opacity-10 pointer-events-none mb-16">
<svg className="w-full h-full" viewbox="0 0 120 120">
<ellipse cx="60" cy="60" fill="none" rx="42" ry="18" stroke="#E8570F" strokeWidth="4"></ellipse>
<ellipse cx="60" cy="60" fill="none" opacity="0.65" rx="42" ry="18" stroke="#E8570F" strokeWidth="3.5" transform="rotate(60 60 60)"></ellipse>
<ellipse cx="60" cy="60" fill="none" opacity="0.35" rx="42" ry="18" stroke="#E8570F" strokeWidth="3" transform="rotate(120 60 60)"></ellipse>
<circle cx="60" cy="60" fill="#E8570F" r="6"></circle>
</svg>
</div>
<div className="max-w-[800px] mx-auto px-8 relative z-10 reveal-up">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter leading-[1.1] mb-6">
                Sua operação tem respostas<br/>
                que você <span className="font-semibold italic text-[#E8570F]">ainda não ouviu.</span>
</h2>
<p className="md:text-base leading-[1.7] text-sm text-[#BBBBBB] max-w-[500px] mr-auto mb-10 ml-auto">Agende uma apresentação de 30 minutos. Nós vamos te mostrar exatamente como funcionaria para a sua empresa.</p>
<button className="hover:bg-white hover:text-[#050505] transition-colors duration-250 text-base font-semibold text-white tracking-tight bg-[#E8570F] rounded-none mb-4 pt-4 pr-12 pb-4 pl-12">Agendar</button>
<div className="uppercase text-xs text-[#999999] tracking-widest font-mono mt-2">
                30 minutos <span className="mx-2 text-[#555555]">·</span> Uma call real do seu time <span className="mx-2 text-[#555555]">·</span> Resultado na hora
            </div>
</div>
</section>

<footer className="bg-[#050505]" style={{borderTop: '1px solid transparent', borderImage: 'linear-gradient(90deg, transparent, #242424, transparent) 1'}}>
<div className="max-w-[960px] mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">

<div className="flex items-center gap-2">
<svg className="w-5 h-5 flex-shrink-0" viewbox="0 0 120 120">
<ellipse cx="60" cy="60" fill="none" rx="42" ry="18" stroke="#E8570F" strokeWidth="4"></ellipse>
<ellipse cx="60" cy="60" fill="none" opacity="0.65" rx="42" ry="18" stroke="#E8570F" strokeWidth="3.5" transform="rotate(60 60 60)"></ellipse>
<ellipse cx="60" cy="60" fill="none" opacity="0.35" rx="42" ry="18" stroke="#E8570F" strokeWidth="3" transform="rotate(120 60 60)"></ellipse>
<circle cx="60" cy="60" fill="#E8570F" r="6"></circle>
</svg>
<span className="text-base font-normal text-white tracking-tight pt-0.5">Evollure</span>
<span className="font-mono text-xs text-[#999999] uppercase ml-1.5 hidden sm:block pt-1 tracking-widest">IA aplicada a negócios</span>
</div>

<div className="flex items-center gap-4 text-xs text-[#999999]">
<a className="hover:text-white transition-colors" href="#">Intelligence</a>
<span className="">·</span>
<a className="hover:text-white transition-colors" href="#">Reach</a>
<span className="">·</span>
<a className="hover:text-white transition-colors" href="#">Prospect</a>
<span>·</span>
<a className="hover:text-white transition-colors" href="#">Sobre</a>
<span>·</span>
<a className="hover:text-white transition-colors" href="#">Contato</a>
</div>

<div className="flex items-center gap-6">
<span className="font-mono text-xs text-[#555555] uppercase tracking-widest">© 2026 Evollure</span>
<div className="flex gap-4 text-base text-[#777777]">
<a className="hover:text-[#E8570F] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#E8570F] transition-colors" href="#"><iconify-icon className="" icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#E8570F] transition-colors" href="#"><iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
