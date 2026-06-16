import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar Scrolled State
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#050505]/85', 'backdrop-blur-[12px]', 'border-b', 'border-[#1A1A1A]');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('bg-[#050505]/85', 'backdrop-blur-[12px]', 'border-b', 'border-[#1A1A1A]');
                navbar.classList.add('bg-transparent');
            }
        });

        // Intersection Observer for Reveal Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.group-anim').forEach(el => {
            observer.observe(el);
        });

        // FAQ Accordion Toggle
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const btn = item.querySelector('button');
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('.icon');
            const textSpan = item.querySelector('button > span:first-child');
            
            btn.addEventListener('click', () => {
                const isOpen = content.style.height && content.style.height !== '0px';
                
                // Close all others
                faqItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('.faq-content');
                    const otherIcon = otherItem.querySelector('.icon');
                    const otherText = otherItem.querySelector('button > span:first-child');
                    
                    otherContent.style.height = '0px';
                    otherIcon.textContent = '+';
                    otherIcon.style.transform = 'rotate(0deg)';
                    otherIcon.classList.remove('text-[#E8570F]');
                    otherText.classList.remove('text-[#E8570F]');
                });

                // Toggle current
                if (!isOpen) {
                    content.style.height = content.scrollHeight + 'px';
                    icon.textContent = '×';
                    icon.style.transform = 'rotate(90deg)';
                    icon.classList.add('text-[#E8570F]');
                    textSpan.classList.add('text-[#E8570F]');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-noise"></div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 h-16 flex items-center bg-transparent" id="navbar">
<div className="max-w-[960px] w-full mx-auto px-8 flex justify-between items-center">

<div className="flex items-center gap-3">
<svg className="w-7 h-7 text-[#E8570F]" viewbox="0 0 120 120">
<ellipse cx="60" cy="60" fill="none" opacity="1" rx="42" ry="18" stroke="currentColor" strokeWidth="4"></ellipse>
<ellipse cx="60" cy="60" fill="none" opacity="0.65" rx="42" ry="18" stroke="currentColor" strokeWidth="3.5" transform="rotate(60 60 60)"></ellipse>
<ellipse cx="60" cy="60" fill="none" opacity="0.35" rx="42" ry="18" stroke="currentColor" strokeWidth="3" transform="rotate(120 60 60)"></ellipse>
<circle cx="60" cy="60" fill="currentColor" r="6"></circle>
</svg>
<span className="text-white text-[18px] font-normal tracking-[-1px]">Evollure</span>
<span className="font-mono text-[9px] uppercase tracking-[2px] px-2 py-[2px] rounded-none bg-[rgba(232,87,15,0.08)] text-[#E8570F] ml-1 flex items-center h-5 border border-[#E8570F]/20">Group</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-[13px] text-[#999999] hover:text-white transition-colors duration-200" href="#sobre">Sobre</a>
<a className="text-[13px] text-[#999999] hover:text-white transition-colors duration-200" href="#solucoes">Soluções</a>
<a className="text-[13px] text-[#999999] hover:text-white transition-colors duration-200" href="#para-quem">Para Quem</a>
<a className="text-[13px] text-[#999999] hover:text-white transition-colors duration-200" href="#faq">FAQ</a>
<a className="bg-[#E8570F] text-white text-[13px] font-[700] px-6 py-2.5 rounded-none btn-ember tracking-tight" href="#cta">Fale Conosco</a>
</div>

<div className="md:hidden text-white cursor-pointer">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-16 bg-[#050505] bg-grid overflow-hidden group-anim">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[600px] h-[500px] md:h-[600px] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(232,87,15,0.08) 0%, transparent 60%)'}}></div>

<div className="absolute top-8 left-8 hidden md:block opacity-[0.12] pointer-events-none">
<div className="w-4 h-4 border-t border-l border-[#E8570F]"></div>
</div>
<div className="absolute top-8 right-8 hidden md:block opacity-[0.12] pointer-events-none">
<div className="w-4 h-4 border-t border-r border-[#E8570F]"></div>
</div>
<div className="absolute bottom-8 left-8 hidden md:block opacity-[0.12] pointer-events-none">
<div className="w-4 h-4 border-b border-l border-[#E8570F]"></div>
<span className="absolute bottom-6 left-0 font-mono text-[9px] text-white tracking-[2px] whitespace-nowrap opacity-50">EVOLLURE.SYS</span>
</div>
<div className="absolute bottom-8 right-8 hidden md:block opacity-[0.12] pointer-events-none">
<div className="w-4 h-4 border-b border-r border-[#E8570F]"></div>
<span className="absolute bottom-6 right-0 font-mono text-[9px] text-white tracking-[2px] opacity-50">2026</span>
</div>
<div className="max-w-[960px] w-full mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center relative z-10">

<div className="flex flex-col items-start w-full">
<span className="font-mono text-[9px] uppercase tracking-label text-[#E8570F] mb-6 font-[500] reveal-up">AI SALES AGENCY</span>
<h1 className="text-[42px] md:text-[52px] font-[800] text-white tracking-hero leading-[1.1] mb-6">
<div className="reveal-up delay-100">Inteligência artificial</div>
<div className="reveal-up delay-200">projetada sob medida</div>
<div className="reveal-up delay-300"><span className="em-fire">para o seu negócio.</span></div>
</h1>
<p className="text-[16px] md:text-[18px] text-[#999999] leading-[1.7] max-w-[500px] mb-10 reveal-up delay-400">
                    Projetamos soluções de inteligência artificial que se adaptam ao seu processo, aos seus critérios e aos seus objetivos. Nada de prateleira.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto reveal-up delay-500">
<a className="bg-[#E8570F] text-white text-[14px] font-[700] px-8 py-3.5 rounded-none btn-ember text-center tracking-[-0.2px]" href="#cta">
                        Falar com a Evollure
                    </a>
<a className="border border-[#333333] text-white text-[14px] font-[700] px-8 py-3.5 rounded-none hover:border-[#E8570F] hover:text-[#E8570F] transition-all duration-300 text-center tracking-[-0.2px]" href="#solucoes">
                        Conhecer soluções ↓
                    </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-[450px] flex justify-center items-center reveal-scale delay-300">
<svg className="w-full h-full max-w-[450px] opacity-85" viewbox="0 0 450 400">

<circle cx="225" cy="200" fill="#E8570F" filter="blur(40px)" opacity="0.05" r="100"></circle>

<path d="M 0 150 Q 80 120 150 200 T 225 200" fill="none" opacity="1" stroke="#E8570F" strokeWidth="2"></path>
<path d="M 0 200 Q 80 230 150 200 T 225 200" fill="none" opacity="0.6" stroke="#E8570F" strokeWidth="1.5"></path>
<path d="M 0 250 Q 80 280 150 200 T 225 200" fill="none" opacity="0.3" stroke="#E8570F" strokeWidth="1"></path>

<path className="path-draw" d="M 225 200 Q 280 140 350 100" fill="none" opacity="0.3" stroke="#E8570F" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="path-draw" d="M 225 200 L 320 200" fill="none" opacity="0.3" stroke="#E8570F" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="path-draw" d="M 225 200 Q 280 260 350 300" fill="none" opacity="0.3" stroke="#E8570F" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="path-draw" d="M 350 100 Q 400 150 320 200" fill="none" stroke="#333333" strokeWidth="1"></path>
<path className="path-draw" d="M 320 200 Q 400 250 350 300" fill="none" stroke="#333333" strokeWidth="1"></path>


<g transform="translate(225, 200)">
<circle cx="0" cy="0" fill="#E8570F" opacity="0.1" r="16"></circle>
<circle cx="0" cy="0" fill="#E8570F" r="8"></circle>
<circle cx="0" cy="0" fill="none" opacity="0.4" r="24" stroke="#E8570F" strokeWidth="1"></circle>
</g>

<g transform="translate(350, 100)">
<circle cx="0" cy="0" fill="#111111" r="10" stroke="#E8570F" strokeWidth="1.5"></circle>
<text fill="#555555" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letter-spacing="1" x="18" y="3">INTELIGÊNCIA</text>
</g>

<g transform="translate(320, 200)">
<circle cx="0" cy="0" fill="#111111" opacity="0.6" r="10" stroke="#E8570F" strokeWidth="1.5"></circle>
<text fill="#555555" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letter-spacing="1" x="18" y="3">AQUISIÇÃO</text>
</g>

<g transform="translate(350, 300)">
<circle cx="0" cy="0" fill="#111111" opacity="0.3" r="10" stroke="#E8570F" strokeWidth="1.5"></circle>
<text fill="#555555" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letter-spacing="1" x="18" y="3">SOB MEDIDA</text>
</g>
</svg>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] border-y border-[#1A1A1A] py-8 overflow-hidden flex flex-col items-center group-anim">
<span className="font-mono text-[9px] uppercase tracking-label text-[#555555] mb-6 reveal-in">TECNOLOGIAS QUE IMPULSIONAM NOSSAS SOLUÇÕES</span>
<div className="flex whitespace-nowrap w-full overflow-hidden relative">
<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
<div className="animate-marquee flex items-center justify-start gap-12 text-[#777777] font-mono text-[11px] tracking-wide uppercase">
<div className="flex items-center gap-12 group">
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Google Ads</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Replicate</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Vercel</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Notion</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Gemini</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Anthropic</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">ChatGPT</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Claude</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">N8N</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Meta AI</span>
<span className="text-[#333333] pr-12">·</span>
</div>

<div className="flex items-center gap-12 group">
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Google Ads</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Replicate</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Vercel</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Notion</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Gemini</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Anthropic</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">ChatGPT</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Claude</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">N8N</span>
<span className="text-[#333333]">·</span>
<span className="hover:text-white transition-colors duration-300 cursor-default opacity-40 hover:opacity-100">Meta AI</span>
<span className="text-[#333333]">·</span>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-32 md:py-40 relative group-anim">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(232,87,15,0.04) 0%, transparent 60%)'}}></div>
<div className="max-w-[640px] mx-auto px-8 flex flex-col items-center text-center relative z-10">
<span className="font-mono text-[9px] uppercase tracking-label text-[#E8570F] mb-8 font-[500] reveal-up">O CENÁRIO</span>
<h2 className="text-[28px] md:text-[36px] font-[800] text-white tracking-heading leading-[1.2] mb-12">
<div className="reveal-up delay-100">Ferramentas, qualquer empresa tem.</div>
<div className="reveal-up delay-200">Inteligência aplicada ao seu negócio, <span className="em-fire">não.</span></div>
</h2>
<div className="space-y-6 text-[16px] text-[#999999] leading-[1.8] font-[400] mb-16 max-w-[500px] mx-auto">
<p className="reveal-up delay-300">O mercado está cheio de soluções prontas que não conhecem a sua operação.</p>
<p className="reveal-up delay-400">A Evollure não promete. Constrói. Do diagnóstico à entrega. Do zero. Funcionando.</p>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8570F] to-transparent opacity-30 mb-16 reveal-in delay-500"></div>
<h3 className="text-[20px] font-[800] text-white tracking-[-0.5px] leading-[1.4] reveal-up delay-[600ms]">
                Não adaptamos soluções prontas.<br/>
                Construímos <span className="em-fire">a sua.</span>
</h3>
</div>
</section>

<section className="bg-[#0A0A0A] py-32 border-t border-[#1A1A1A] relative group-anim overflow-hidden">

<div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[80%] h-[100px] rounded-full pointer-events-none opacity-30" style={{background: 'radial-gradient(ellipse, rgba(232,87,15,0.03) 0%, transparent 70%)'}}></div>
<div className="max-w-[960px] mx-auto px-8 relative z-10">
<div className="text-center mb-24 flex flex-col items-center">
<span className="font-mono text-[9px] uppercase tracking-label text-[#E8570F] mb-6 font-[500] reveal-up">COMO TRABALHAMOS</span>
<h2 className="text-[28px] md:text-[36px] font-[800] text-white tracking-heading leading-[1.2] mb-6 reveal-up delay-100">
                    Diagnóstico. Desenho. Construção. Entrega.
                </h2>
<p className="text-[16px] text-[#999999] leading-[1.8] max-w-[560px] reveal-up delay-200">
                    Antes de escrever uma linha de código, entendemos a sua operação. Seus critérios. Seus gargalos. Seu processo de vendas.<br/><br/>
                    Depois construímos a solução que resolve exatamente o que precisa ser resolvido. Sem escopo inflado. Sem feature que ninguém usa.
                </p>
</div>

<div className="relative w-full max-w-[800px] mx-auto pt-8">

<div className="hidden md:block absolute top-[44px] left-[10%] w-[80%] h-[2px]">
<svg height="2" preserveaspectratio="none" width="100%">
<line className="path-draw" opacity="0.2" stroke="#E8570F" stroke-dasharray="4 4" strokeWidth="1.5" x1="0" x2="100%" y1="1" y2="1"></line>
</svg>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative">

<div className="flex flex-col items-center md:items-start text-center md:text-left reveal-up delay-200">
<div className="w-[28px] h-[28px] rounded-full border border-[#242424] bg-[#0A0A0A] flex items-center justify-center mb-6 relative z-10 mx-auto md:mx-0">
<span className="font-mono text-[10px] text-[#E8570F]">01</span>
</div>
<span className="font-mono text-[7px] text-[#555555] tracking-label mb-3 block">DIAGNÓSTICO</span>
<p className="text-[14px] font-[800] text-white mb-2 tracking-tight">Imersão</p>
<p className="text-[13px] text-[#777777] leading-[1.6]">Entendimento profundo do seu negócio e gargalos.</p>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left reveal-up delay-300">
<div className="w-[28px] h-[28px] rounded-full border border-[#242424] bg-[#0A0A0A] flex items-center justify-center mb-6 relative z-10 mx-auto md:mx-0">
<span className="font-mono text-[10px] text-[#E8570F]">02</span>
</div>
<span className="font-mono text-[7px] text-[#555555] tracking-label mb-3 block">DESENHO</span>
<p className="text-[14px] font-[800] text-white mb-2 tracking-tight">Arquitetura</p>
<p className="text-[13px] text-[#777777] leading-[1.6]">Desenho estratégico da solução de IA sem achismos.</p>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left reveal-up delay-400">
<div className="w-[28px] h-[28px] rounded-full border border-[#242424] bg-[#0A0A0A] flex items-center justify-center mb-6 relative z-10 mx-auto md:mx-0">
<span className="font-mono text-[10px] text-[#E8570F]">03</span>
</div>
<span className="font-mono text-[7px] text-[#555555] tracking-label mb-3 block">CONSTRUÇÃO</span>
<p className="text-[14px] font-[800] text-white mb-2 tracking-tight">Engenharia</p>
<p className="text-[13px] text-[#777777] leading-[1.6]">Desenvolvimento sob medida. Código proprietário.</p>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left reveal-up delay-500">
<div className="w-[28px] h-[28px] rounded-full border border-[#242424] bg-[#0A0A0A] flex items-center justify-center mb-6 relative z-10 mx-auto md:mx-0">
<span className="font-mono text-[10px] text-[#E8570F]">04</span>
</div>
<span className="font-mono text-[7px] text-[#555555] tracking-label mb-3 block">ENTREGA</span>
<p className="text-[14px] font-[800] text-white mb-2 tracking-tight">Aceleração</p>
<p className="text-[13px] text-[#777777] leading-[1.6]">Deploy, onboarding assistido e resultados visíveis.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-40 border-t border-[#1A1A1A] group-anim">
<div className="max-w-[640px] mx-auto px-8 flex flex-col items-center text-center">
<div className="space-y-3 mb-16 text-[15px] font-[400] text-[#777777] leading-[1.6]">
<p className="reveal-up delay-100">Não acreditamos em IA genérica.</p>
<p className="reveal-up delay-200">Não acreditamos em automação sem contexto.</p>
<p className="reveal-up delay-300">Não acreditamos em soluções que não geram números claros.</p>
</div>
<div className="w-[60px] h-[1.5px] bg-[#242424] mb-16 reveal-in delay-400"></div>
<h3 className="text-[20px] font-[800] text-white leading-[1.5] tracking-[-0.5px] reveal-up delay-500 max-w-[480px]">
                A Evollure existe para transformar complexidade operacional em eficiência mensurável e estratégica.
            </h3>
</div>
</section>

<section className="bg-[#0A0A0A] py-32 border-t border-[#1A1A1A] relative group-anim">
<div className="max-w-[960px] mx-auto px-8">
<div className="text-center mb-24 flex flex-col items-center">
<span className="font-mono text-[9px] uppercase tracking-label text-[#E8570F] mb-6 font-[500] reveal-up">MÉTODO EVOLLURE</span>
<h2 className="text-[28px] md:text-[36px] font-[800] text-white tracking-heading leading-[1.2] reveal-up delay-100">
                    Os 4 pilares do Método Evollure.
                </h2>
</div>
<div className="relative w-full flex flex-col items-center">

<div className="relative w-full max-w-[500px] aspect-square md:h-[400px] md:aspect-auto flex justify-center items-center mb-16 reveal-scale delay-200">
<svg className="w-full h-full" viewbox="0 0 400 400">

<circle cx="200" cy="200" fill="#E8570F" filter="blur(30px)" opacity="0.08" r="100"></circle>

<path className="path-draw" d="M 200 200 Q 150 100 200 60" fill="none" opacity="0.15" stroke="#E8570F" strokeWidth="1"></path>
<path className="path-draw" d="M 200 200 Q 300 150 340 200" fill="none" opacity="0.15" stroke="#E8570F" strokeWidth="1"></path>
<path className="path-draw" d="M 200 200 Q 250 300 200 340" fill="none" opacity="0.15" stroke="#E8570F" strokeWidth="1"></path>
<path className="path-draw" d="M 200 200 Q 100 250 60 200" fill="none" opacity="0.15" stroke="#E8570F" strokeWidth="1"></path>

<g transform="translate(200, 200) scale(0.6)">
<ellipse cx="0" cy="0" fill="none" opacity="1" rx="42" ry="18" stroke="#E8570F" strokeWidth="4"></ellipse>
<ellipse cx="0" cy="0" fill="none" opacity="0.65" rx="42" ry="18" stroke="#E8570F" strokeWidth="3.5" transform="rotate(60)"></ellipse>
<ellipse cx="0" cy="0" fill="none" opacity="0.35" rx="42" ry="18" stroke="#E8570F" strokeWidth="3" transform="rotate(120)"></ellipse>
<circle cx="0" cy="0" fill="#E8570F" r="6"></circle>
</g>

<g transform="translate(200, 60)">
<circle cx="0" cy="0" fill="#111111" opacity="0.2" r="10" stroke="#E8570F" strokeWidth="1"></circle>
<text fill="#555555" fontFamily="'IBM Plex Mono', monospace" fontSize="7" letter-spacing="1" x="18" y="3">imersao_ia () · 1</text>
</g>

<g transform="translate(340, 200)">
<circle cx="0" cy="0" fill="#111111" opacity="0.2" r="10" stroke="#E8570F" strokeWidth="1"></circle>
<text fill="#555555" fontFamily="'IBM Plex Mono', monospace" fontSize="7" letter-spacing="1" text-anchor="end" x="-18" y="3">diagnostico_para_ia () · 2</text>
</g>

<g transform="translate(200, 340)">
<circle cx="0" cy="0" fill="#111111" opacity="0.2" r="10" stroke="#E8570F" strokeWidth="1"></circle>
<text fill="#555555" fontFamily="'IBM Plex Mono', monospace" fontSize="7" letter-spacing="1" x="18" y="3">desenvolver_ia () · 3</text>
</g>

<g transform="translate(60, 200)">
<circle cx="0" cy="0" fill="#111111" opacity="0.2" r="10" stroke="#E8570F" strokeWidth="1"></circle>
<text fill="#555555" fontFamily="'IBM Plex Mono', monospace" fontSize="7" letter-spacing="1" x="18" y="3">escalar_com_ia () · 4</text>
</g>
</svg>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">

<div className="bg-[#111111] border border-[#1A1A1A] border-l-[3px] border-l-[#E8570F] p-8 rounded-none card-hover reveal-up delay-200">
<span className="font-mono text-[9px] text-[#E8570F] tracking-label block mb-4">01 — Imersão no seu negócio</span>
<p className="text-[14px] text-[#999999] leading-[1.8]">Entendemos a fundo seus processos, gargalos e onde a inteligência artificial gera impacto real. Não começamos pelo código. Começamos por você.</p>
</div>

<div className="bg-[#111111] border border-[#1A1A1A] border-l-[3px] border-l-[#E8570F] p-8 rounded-none card-hover reveal-up delay-300">
<span className="font-mono text-[9px] text-[#E8570F] tracking-label block mb-4">02 — Diagnóstico estratégico</span>
<p className="text-[14px] text-[#999999] leading-[1.8]">Mapeamos onde a IA entra com mais força e menos esforço operacional. Sem achismo. Com dados.</p>
</div>

<div className="bg-[#111111] border border-[#1A1A1A] border-l-[3px] border-l-[#E8570F] p-8 rounded-none card-hover reveal-up delay-400">
<span className="font-mono text-[9px] text-[#E8570F] tracking-label block mb-4">03 — Desenvolvimento sob medida</span>
<p className="text-[14px] text-[#999999] leading-[1.8]">Construímos soluções de IA e estratégias de aquisição personalizadas. Alinhadas à sua operação, aos seus critérios e aos seus objetivos.</p>
</div>

<div className="bg-[#111111] border border-[#1A1A1A] border-l-[3px] border-l-[#E8570F] p-8 rounded-none card-hover reveal-up delay-500">
<span className="font-mono text-[9px] text-[#E8570F] tracking-label block mb-4">04 — Escala com resultados</span>
<p className="text-[14px] text-[#999999] leading-[1.8]">Cada solução entregue gera ganhos mensuráveis. Automáticos. Sustentáveis. Visíveis no dashboard e no caixa.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] bg-grid py-32 md:py-40 border-t border-[#1A1A1A] group-anim">
<div className="max-w-[960px] mx-auto px-8">
<h2 className="text-[28px] md:text-[36px] font-[800] text-white tracking-heading text-center mb-20 reveal-up">
                Antes vs Depois da Evollure.
            </h2>
<div className="flex flex-col gap-6 w-full max-w-[800px] mx-auto">

<div className="flex flex-col md:flex-row items-center gap-4 reveal-up delay-100 group">
<div className="w-full md:w-[45%] bg-[#0A0A0A] border border-[#1A1A1A] p-6 min-h-[140px] flex flex-col justify-center">
<span className="font-mono text-[8px] text-[#EF4444]/30 tracking-label mb-3 block">ANTES</span>
<p className="text-[13px] text-[#777777] leading-[1.7]">Tentando entender IA no meio do hype e das promessas vazias</p>
</div>
<div className="text-[#E8570F] text-[16px] md:rotate-0 rotate-90 shrink-0 opacity-50 transition-opacity group-hover:opacity-100">→</div>
<div className="w-full md:w-[45%] bg-[rgba(232,87,15,0.03)] border border-[rgba(232,87,15,0.15)] p-6 min-h-[140px] flex flex-col justify-center transition-all duration-300 group-hover:border-[#E8570F]/50 group-hover:-translate-y-0.5">
<span className="font-mono text-[8px] text-[#E8570F] tracking-label mb-3 block">DEPOIS</span>
<p className="text-[13px] text-[#DDDDDD] leading-[1.7]">Agentes de IA sob medida, criados para atuar na sua rotina e nos seus processos específicos</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-4 reveal-up delay-200 group">
<div className="w-full md:w-[45%] bg-[#0A0A0A] border border-[#1A1A1A] p-6 min-h-[140px] flex flex-col justify-center">
<span className="font-mono text-[8px] text-[#EF4444]/30 tracking-label mb-3 block">ANTES</span>
<p className="text-[13px] text-[#777777] leading-[1.7]">Gastando tempo e dinheiro com processos manuais e retrabalho</p>
</div>
<div className="text-[#E8570F] text-[16px] md:rotate-0 rotate-90 shrink-0 opacity-50 transition-opacity group-hover:opacity-100">→</div>
<div className="w-full md:w-[45%] bg-[rgba(232,87,15,0.03)] border border-[rgba(232,87,15,0.15)] p-6 min-h-[140px] flex flex-col justify-center transition-all duration-300 group-hover:border-[#E8570F]/50 group-hover:-translate-y-0.5">
<span className="font-mono text-[8px] text-[#E8570F] tracking-label mb-3 block">DEPOIS</span>
<p className="text-[13px] text-[#DDDDDD] leading-[1.7]">Processos críticos automatizados, custos reduzidos, equipe focada em atividades de alto impacto</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-4 reveal-up delay-300 group">
<div className="w-full md:w-[45%] bg-[#0A0A0A] border border-[#1A1A1A] p-6 min-h-[140px] flex flex-col justify-center">
<span className="font-mono text-[8px] text-[#EF4444]/30 tracking-label mb-3 block">ANTES</span>
<p className="text-[13px] text-[#777777] leading-[1.7]">Contratando mais pessoas para dar conta do crescimento</p>
</div>
<div className="text-[#E8570F] text-[16px] md:rotate-0 rotate-90 shrink-0 opacity-50 transition-opacity group-hover:opacity-100">→</div>
<div className="w-full md:w-[45%] bg-[rgba(232,87,15,0.03)] border border-[rgba(232,87,15,0.15)] p-6 min-h-[140px] flex flex-col justify-center transition-all duration-300 group-hover:border-[#E8570F]/50 group-hover:-translate-y-0.5">
<span className="font-mono text-[8px] text-[#E8570F] tracking-label mb-3 block">DEPOIS</span>
<p className="text-[13px] text-[#DDDDDD] leading-[1.7]">Operações escaladas sem aumentar o time, com IA trabalhando 24/7</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-4 reveal-up delay-400 group">
<div className="w-full md:w-[45%] bg-[#0A0A0A] border border-[#1A1A1A] p-6 min-h-[140px] flex flex-col justify-center">
<span className="font-mono text-[8px] text-[#EF4444]/30 tracking-label mb-3 block">ANTES</span>
<p className="text-[13px] text-[#777777] leading-[1.7]">Recebendo dados sem saber como transformá-los em decisões estratégicas</p>
</div>
<div className="text-[#E8570F] text-[16px] md:rotate-0 rotate-90 shrink-0 opacity-50 transition-opacity group-hover:opacity-100">→</div>
<div className="w-full md:w-[45%] bg-[rgba(232,87,15,0.03)] border border-[rgba(232,87,15,0.15)] p-6 min-h-[140px] flex flex-col justify-center transition-all duration-300 group-hover:border-[#E8570F]/50 group-hover:-translate-y-0.5">
<span className="font-mono text-[8px] text-[#E8570F] tracking-label mb-3 block">DEPOIS</span>
<p className="text-[13px] text-[#DDDDDD] leading-[1.7]">Dados transformados em insights acionáveis, decisões rápidas e precisas</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-4 reveal-up delay-500 group">
<div className="w-full md:w-[45%] bg-[#0A0A0A] border border-[#1A1A1A] p-6 min-h-[140px] flex flex-col justify-center">
<span className="font-mono text-[8px] text-[#EF4444]/30 tracking-label mb-3 block">ANTES</span>
<p className="text-[13px] text-[#777777] leading-[1.7]">Dependendo de soluções genéricas que não se adaptam à operação</p>
</div>
<div className="text-[#E8570F] text-[16px] md:rotate-0 rotate-90 shrink-0 opacity-50 transition-opacity group-hover:opacity-100">→</div>
<div className="w-full md:w-[45%] bg-[rgba(232,87,15,0.03)] border border-[rgba(232,87,15,0.15)] p-6 min-h-[140px] flex flex-col justify-center transition-all duration-300 group-hover:border-[#E8570F]/50 group-hover:-translate-y-0.5">
<span className="font-mono text-[8px] text-[#E8570F] tracking-label mb-3 block">DEPOIS</span>
<p className="text-[13px] text-[#DDDDDD] leading-[1.7]">Soluções integradas, adaptadas à sua operação e aos seus objetivos estratégicos</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-32 border-t border-[#1A1A1A] group-anim" id="para-quem">
<div className="max-w-[960px] mx-auto px-8">
<div className="mb-16 flex flex-col items-start text-left">
<span className="font-mono text-[9px] uppercase tracking-label text-[#E8570F] mb-6 font-[500] reveal-up">PARA QUEM É A EVOLLURE</span>
<h2 className="text-[28px] md:text-[36px] font-[800] text-white tracking-heading leading-[1.2] reveal-up delay-100 max-w-[500px]">
                    Se a sua operação comercial envolve conversa, a Evollure foi feita <span className="em-fire">pra você.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#111111] border border-[#1A1A1A] border-l-[3px] border-l-[#E8570F] p-6 rounded-none card-hover reveal-up delay-100">
<iconify-icon className="text-[#E8570F] mb-4" height="24" icon="solar:widget-3-linear" width="24"></iconify-icon>
<h4 className="text-white font-[800] text-[16px] mb-2 tracking-tight">Franquias</h4>
<p className="text-[13px] text-[#999999] leading-[1.7]">Padronize qualidade de vendas em todas as unidades. Mesmo script, mesmo critério, visibilidade total.</p>
</div>

<div className="bg-[#111111] border border-[#1A1A1A] border-l-[3px] border-l-[#E8570F] p-6 rounded-none card-hover reveal-up delay-200">
<iconify-icon className="text-[#E8570F] mb-4" height="24" icon="solar:shield-star-linear" width="24"></iconify-icon>
<h4 className="text-white font-[800] text-[16px] mb-2 tracking-tight">Seguros e financeiro</h4>
<p className="text-[13px] text-[#999999] leading-[1.7]">Calls complexas que exigem técnica, compliance e argumentação de valor.</p>
</div>

<div className="bg-[#111111] border border-[#1A1A1A] border-l-[3px] border-l-[#E8570F] p-6 rounded-none card-hover reveal-up delay-300">
<iconify-icon className="text-[#E8570F] mb-4" height="24" icon="solar:sun-2-linear" width="24"></iconify-icon>
<h4 className="text-white font-[800] text-[16px] mb-2 tracking-tight">Energia solar</h4>
<p className="text-[13px] text-[#999999] leading-[1.7]">Venda consultiva de alto ticket. Ciclo longo. Cada call cirúrgica.</p>
</div>

<div className="bg-[#111111] border border-[#1A1A1A] border-l-[3px] border-l-[#E8570F] p-6 rounded-none card-hover reveal-up delay-400">
<iconify-icon className="text-[#E8570F] mb-4" height="24" icon="solar:code-square-linear" width="24"></iconify-icon>
<h4 className="text-white font-[800] text-[16px] mb-2 tracking-tight">SaaS e tecnologia</h4>
<p className="text-[13px] text-[#999999] leading-[1.7]">Demos, trials, onboarding. Meça aderência ao playbook e otimize conversão.</p>
</div>

<div className="bg-[#111111] border border-[#1A1A1A] border-l-[3px] border-l-[#E8570F] p-6 rounded-none card-hover reveal-up delay-500">
<iconify-icon className="text-[#E8570F] mb-4" height="24" icon="solar:medical-kit-linear" width="24"></iconify-icon>
<h4 className="text-white font-[800] text-[16px] mb-2 tracking-tight">Clínicas e saúde</h4>
<p className="text-[13px] text-[#999999] leading-[1.7]">Agendamento é venda. Atendimento é retenção. Meça os dois.</p>
</div>

<div className="bg-[#111111] border border-[#1A1A1A] border-l-[3px] border-l-[#E8570F] p-6 rounded-none card-hover reveal-up delay-[600ms]">
<iconify-icon className="text-[#E8570F] mb-4" height="24" icon="solar:book-bookmark-linear" width="24"></iconify-icon>
<h4 className="text-white font-[800] text-[16px] mb-2 tracking-tight">Educação e cursos</h4>
<p className="text-[13px] text-[#999999] leading-[1.7]">Matrícula é venda. Objeções específicas. Técnica necessária.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-32 border-t border-[#1A1A1A] group-anim">
<div className="max-w-[960px] mx-auto px-8 flex flex-col items-center">
<div className="text-center mb-16 flex flex-col items-center">
<span className="font-mono text-[9px] uppercase tracking-label text-[#E8570F] mb-6 font-[500] reveal-up">COMO ENTREGAMOS</span>
<h2 className="text-[28px] md:text-[36px] font-[800] text-white tracking-heading leading-[1.2] mb-6 reveal-up delay-100">
                    Tecnologia de ponta.<br/>
                    Execução <span className="em-fire">impecável.</span>
</h2>
<p className="text-[16px] text-[#999999] leading-[1.8] max-w-[560px] reveal-up delay-200">
                    Por trás de cada solução existe uma stack robusta, segura e escalável. Você não precisa saber o que roda por trás. Precisa saber que funciona, que é seguro, e que tem gente séria cuidando da sua operação.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">

<div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 rounded-none text-center hover:border-[#E8570F] transition-colors duration-300 reveal-up delay-100 flex flex-col items-center">
<span className="font-mono text-[8px] text-[#E8570F] tracking-label mb-4 block">INFRAESTRUTURA</span>
<iconify-icon className="text-[#777777] mb-3" height="20" icon="solar:server-square-linear" width="20"></iconify-icon>
<h4 className="text-white font-[800] text-[14px] mb-2">Cloud robusta</h4>
<p className="text-[12px] text-[#999999] leading-[1.7]">Deploy contínuo. Monitoramento. Escalabilidade sob demanda.</p>
</div>

<div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 rounded-none text-center hover:border-[#E8570F] transition-colors duration-300 reveal-up delay-200 flex flex-col items-center">
<span className="font-mono text-[8px] text-[#E8570F] tracking-label mb-4 block">SEGURANÇA</span>
<iconify-icon className="text-[#777777] mb-3" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
<h4 className="text-white font-[800] text-[14px] mb-2">LGPD compliant</h4>
<p className="text-[12px] text-[#999999] leading-[1.7]">Dados criptografados. Compliance total. Zero vazamento.</p>
</div>

<div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 rounded-none text-center hover:border-[#E8570F] transition-colors duration-300 reveal-up delay-300 flex flex-col items-center">
<span className="font-mono text-[8px] text-[#E8570F] tracking-label mb-4 block">ENGENHARIA</span>
<iconify-icon className="text-[#777777] mb-3" height="20" icon="solar:wrench-linear" width="20"></iconify-icon>
<h4 className="text-white font-[800] text-[14px] mb-2">Sob medida</h4>
<p className="text-[12px] text-[#999999] leading-[1.7]">Código proprietário. Engenharia pro seu negócio. Não é plugin.</p>
</div>

<div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 rounded-none text-center hover:border-[#E8570F] transition-colors duration-300 reveal-up delay-400 flex flex-col items-center">
<span className="font-mono text-[8px] text-[#E8570F] tracking-label mb-4 block">ATENDIMENTO</span>
<iconify-icon className="text-[#777777] mb-3" height="20" icon="solar:headphones-round-linear" width="20"></iconify-icon>
<h4 className="text-white font-[800] text-[14px] mb-2">Suporte dedicado</h4>
<p className="text-[12px] text-[#999999] leading-[1.7]">Onboarding assistido. Canal direto. Gente real.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-32 border-t border-[#1A1A1A] group-anim" id="faq">
<div className="max-w-[680px] mx-auto px-8">
<div className="text-center mb-16 flex flex-col items-center">
<span className="font-mono text-[9px] uppercase tracking-label text-[#E8570F] mb-6 font-[500] reveal-up">PERGUNTAS FREQUENTES</span>
<h2 className="text-[28px] md:text-[36px] font-[800] text-white tracking-heading leading-[1.2] reveal-up delay-100">
                    Dúvidas? A gente responde<br/>
<span className="em-fire">sem rodeio.</span>
</h2>
</div>
<div className="space-y-0 reveal-up delay-200">

<div className="faq-item border-b border-[#1A1A1A]">
<button className="w-full text-left py-6 flex justify-between items-center group">
<span className="text-white font-[800] text-[16px] group-hover:text-[#E8570F] transition-colors">O que é a Evollure Group?</span>
<span className="icon text-[#555555] font-mono text-[20px] transition-transform duration-300 group-hover:text-[#E8570F]">+</span>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-400 ease-in-out">
<p className="pb-6 text-[14px] text-[#999999] leading-[1.8]">Uma AI Sales Agency. Aplicamos inteligência artificial sob medida em operações comerciais. Da geração de demanda até a análise de cada conversa de vendas.</p>
</div>
</div>

<div className="faq-item border-b border-[#1A1A1A]">
<button className="w-full text-left py-6 flex justify-between items-center group">
<span className="text-white font-[800] text-[16px] group-hover:text-[#E8570F] transition-colors">O que é o Evollure Intelligence?</span>
<span className="icon text-[#555555] font-mono text-[20px] transition-transform duration-300 group-hover:text-[#E8570F]">+</span>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-400 ease-in-out">
<p className="pb-6 text-[14px] text-[#999999] leading-[1.8]">Nosso produto principal. Analisa automaticamente cada call do time de vendas contra os critérios definidos pela sua empresa. Scores, rankings, tendências e insights de coaching em um dashboard.</p>
</div>
</div>

<div className="faq-item border-b border-[#1A1A1A]">
<button className="w-full text-left py-6 flex justify-between items-center group">
<span className="text-white font-[800] text-[16px] group-hover:text-[#E8570F] transition-colors">Vocês fazem marketing e mídia paga?</span>
<span className="icon text-[#555555] font-mono text-[20px] transition-transform duration-300 group-hover:text-[#E8570F]">+</span>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-400 ease-in-out">
<p className="pb-6 text-[14px] text-[#999999] leading-[1.8]">Sim. Estratégia de aquisição e mídia de performance potencializada por IA. Google, Meta, LinkedIn. Segmentação inteligente, otimização de criativos e rastreamento até a conversão. Brasil e exterior.</p>
</div>
</div>

<div className="faq-item border-b border-[#1A1A1A]">
<button className="w-full text-left py-6 flex justify-between items-center group">
<span className="text-white font-[800] text-[16px] group-hover:text-[#E8570F] transition-colors">O que significa "sob medida"?</span>
<span className="icon text-[#555555] font-mono text-[20px] transition-transform duration-300 group-hover:text-[#E8570F]">+</span>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-400 ease-in-out">
<p className="pb-6 text-[14px] text-[#999999] leading-[1.8]">Não temos produto de prateleira. Cada solução é construída do zero em torno da operação do cliente. Critérios, automações, integrações, estratégia. Tudo desenhado pro seu negócio.</p>
</div>
</div>

<div className="faq-item border-b border-[#1A1A1A]">
<button className="w-full text-left py-6 flex justify-between items-center group">
<span className="text-white font-[800] text-[16px] group-hover:text-[#E8570F] transition-colors">Preciso de conhecimento técnico?</span>
<span className="icon text-[#555555] font-mono text-[20px] transition-transform duration-300 group-hover:text-[#E8570F]">+</span>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-400 ease-in-out">
<p className="pb-6 text-[14px] text-[#999999] leading-[1.8]">Nenhum. Onboarding 100% assistido. Configuramos tudo. Treinamos a equipe. Você usa o dashboard e toma decisão. O técnico fica com a gente.</p>
</div>
</div>

<div className="faq-item border-b border-[#1A1A1A]">
<button className="w-full text-left py-6 flex justify-between items-center group">
<span className="text-white font-[800] text-[16px] group-hover:text-[#E8570F] transition-colors">Funciona pra qualquer tipo de empresa?</span>
<span className="icon text-[#555555] font-mono text-[20px] transition-transform duration-300 group-hover:text-[#E8570F]">+</span>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-400 ease-in-out">
<p className="pb-6 text-[14px] text-[#999999] leading-[1.8]">Funciona pra qualquer operação que envolva conversa. Call, videochamada, atendimento. Se tem vendedor e tem conversa, a Evollure potencializa.</p>
</div>
</div>

<div className="faq-item border-b border-[#1A1A1A]">
<button className="w-full text-left py-6 flex justify-between items-center group">
<span className="text-white font-[800] text-[16px] group-hover:text-[#E8570F] transition-colors">Quanto custa?</span>
<span className="icon text-[#555555] font-mono text-[20px] transition-transform duration-300 group-hover:text-[#E8570F]">+</span>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-400 ease-in-out">
<p className="pb-6 text-[14px] text-[#999999] leading-[1.8]">Depende do escopo. Não temos plano fixo. Cada proposta é construída após entendermos a operação. Fala com a gente pelo WhatsApp. Sem compromisso.</p>
</div>
</div>

<div className="faq-item border-b border-[#1A1A1A]">
<button className="w-full text-left py-6 flex justify-between items-center group">
<span className="text-white font-[800] text-[16px] group-hover:text-[#E8570F] transition-colors">Meus dados estão seguros?</span>
<span className="icon text-[#555555] font-mono text-[20px] transition-transform duration-300 group-hover:text-[#E8570F]">+</span>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-400 ease-in-out">
<p className="pb-6 text-[14px] text-[#999999] leading-[1.8]">100%. Infraestrutura cloud, criptografia em trânsito e em repouso, compliance com LGPD. Segurança é premissa, não feature.</p>
</div>
</div>

<div className="faq-item border-b border-[#1A1A1A]">
<button className="w-full text-left py-6 flex justify-between items-center group">
<span className="text-white font-[800] text-[16px] group-hover:text-[#E8570F] transition-colors">Vocês atendem fora do Brasil?</span>
<span className="icon text-[#555555] font-mono text-[20px] transition-transform duration-300 group-hover:text-[#E8570F]">+</span>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-400 ease-in-out">
<p className="pb-6 text-[14px] text-[#999999] leading-[1.8]">Sim. Operações em português e inglês. Mídia no Brasil e exterior. O Intelligence funciona em qualquer idioma.</p>
</div>
</div>

<div className="faq-item border-b border-[#1A1A1A]">
<button className="w-full text-left py-6 flex justify-between items-center group">
<span className="text-white font-[800] text-[16px] group-hover:text-[#E8570F] transition-colors">Como começo?</span>
<span className="icon text-[#555555] font-mono text-[20px] transition-transform duration-300 group-hover:text-[#E8570F]">+</span>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-400 ease-in-out">
<p className="pb-6 text-[14px] text-[#999999] leading-[1.8]">WhatsApp. 15 minutos pra entender sua operação. Sem pitch. Sem slide de 40 páginas. Só conversa honesta.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-40 md:py-48 relative overflow-hidden border-t border-[#1A1A1A] group-anim flex items-center justify-center" id="cta">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(232,87,15,0.12) 0%, transparent 60%)'}}></div>

<div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] opacity-[0.08] pointer-events-none z-0">
<svg className="w-full h-full text-[#E8570F]" viewbox="0 0 120 120">
<ellipse cx="60" cy="60" fill="none" rx="42" ry="18" stroke="currentColor" strokeWidth="4"></ellipse>
<ellipse cx="60" cy="60" fill="none" rx="42" ry="18" stroke="currentColor" strokeWidth="3.5" transform="rotate(60 60 60)"></ellipse>
<ellipse cx="60" cy="60" fill="none" rx="42" ry="18" stroke="currentColor" strokeWidth="3" transform="rotate(120 60 60)"></ellipse>
<circle cx="60" cy="60" fill="currentColor" r="6"></circle>
</svg>
</div>
<div className="max-w-[960px] mx-auto px-8 relative z-10 flex flex-col items-center text-center">
<h2 className="text-[32px] md:text-[48px] font-[800] text-white tracking-hero leading-[1.1] mb-6 max-w-[600px] reveal-up">
                O achismo tem prazo de validade.<br/>
                Fala com a <span className="em-fire">Evollure.</span>
</h2>
<p className="text-[16px] text-[#BBBBBB] max-w-[480px] leading-[1.8] mb-12 reveal-up delay-200">
                15 minutos de conversa. Sem compromisso. Sem pitch. Só uma análise honesta de como IA pode transformar a sua operação comercial.
            </p>
<a className="bg-[#E8570F] text-white text-[16px] font-[700] px-12 py-4 rounded-none btn-ember mb-6 reveal-up delay-400" href="#">
                Falar pelo WhatsApp
            </a>
<p className="font-mono text-[10px] text-[#555555] uppercase tracking-label reveal-up delay-500">
                15 minutos · Sem compromisso · Conversa direta
            </p>
</div>
</section>

<footer className="bg-[#050505] py-12 border-t border-[#1A1A1A]">
<div className="max-w-[960px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

<div className="flex flex-col items-center md:items-start gap-1">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-[#E8570F]" viewbox="0 0 120 120">
<ellipse cx="60" cy="60" fill="none" rx="42" ry="18" stroke="currentColor" strokeWidth="4"></ellipse>
<ellipse cx="60" cy="60" fill="none" rx="42" ry="18" stroke="currentColor" strokeWidth="3.5" transform="rotate(60 60 60)"></ellipse>
<ellipse cx="60" cy="60" fill="none" rx="42" ry="18" stroke="currentColor" strokeWidth="3" transform="rotate(120 60 60)"></ellipse>
<circle cx="60" cy="60" fill="currentColor" r="6"></circle>
</svg>
<span className="text-white text-[16px] font-[400] tracking-tight">Evollure</span>
</div>
<span className="font-mono text-[9px] text-[#555555] tracking-label uppercase ml-[28px]">AI Sales Agency</span>
</div>

<div className="flex justify-center gap-6">
<a className="text-[12px] text-[#777777] hover:text-white transition-colors duration-200" href="#solucoes">Intelligence</a>
<a className="text-[12px] text-[#777777] hover:text-white transition-colors duration-200" href="#sobre">Sobre</a>
<a className="text-[12px] text-[#777777] hover:text-white transition-colors duration-200" href="#para-quem">Para Quem</a>
<a className="text-[12px] text-[#777777] hover:text-white transition-colors duration-200" href="#faq">FAQ</a>
</div>

<div className="flex flex-col items-center md:items-end gap-3">
<div className="flex gap-4 text-[#555555]">
<a className="hover:text-[#E8570F] transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="18"></iconify-icon></a>
<a className="hover:text-[#E8570F] transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon></a>
<a className="hover:text-[#E8570F] transition-colors" href="#"><iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon></a>
</div>
<span className="font-mono text-[9px] text-[#333333] tracking-label">© 2026 EVOLLURE GROUP</span>
</div>
</div>
</footer>



    </>
  );
}
