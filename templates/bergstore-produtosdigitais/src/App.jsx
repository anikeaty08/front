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
            // Header Scroll Effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    header.classList.add('bg-[#050510]/90', 'backdrop-blur-xl', 'border-[#00B0F0]/10', 'shadow-md');
                    header.classList.remove('bg-transparent', 'border-transparent');
                } else {
                    header.classList.remove('bg-[#050510]/90', 'backdrop-blur-xl', 'border-[#00B0F0]/10', 'shadow-md');
                    header.classList.add('bg-transparent', 'border-transparent');
                }
            });

            // Mobile Menu Toggle
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            
            function toggleMenu() {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
                const icon = menuBtn.querySelector('i');
                if(icon) {
                    if(mobileMenu.classList.contains('hidden')) {
                        icon.setAttribute('data-lucide', 'menu');
                    } else {
                        icon.setAttribute('data-lucide', 'x-circle');
                    }
                    lucide.createIcons();
                }
            }
            
            menuBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => link.addEventListener('click', () => {
                if(!mobileMenu.classList.contains('hidden')) toggleMenu();
            }));

            // Toggle Feature Lists
            const toggleBtns = document.querySelectorAll('.toggle-btn');
            toggleBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const targetId = e.target.getAttribute('data-target');
                    const count = e.target.getAttribute('data-count');
                    const targetEl = document.getElementById(targetId);
                    
                    if (targetEl.classList.contains('hidden')) {
                        targetEl.classList.remove('hidden');
                        targetEl.classList.add('flex');
                        e.target.textContent = '▲ Ver menos';
                    } else {
                        targetEl.classList.add('hidden');
                        targetEl.classList.remove('flex');
                        e.target.textContent = `▼ Ver mais (${count})`;
                    }
                });
            });

            // Carousel Controls
            const slider = document.getElementById('carousel-slider');
            const prevBtn = document.getElementById('carousel-prev');
            const nextBtn = document.getElementById('carousel-next');
            const arrowLeft = document.getElementById('prev-btn');
            const arrowRight = document.getElementById('next-btn');

            function scrollSlider(direction) {
                if(!slider) return;
                // Scroll by approximately one card width plus gap
                const scrollAmount = (slider.offsetWidth / 2) * direction; 
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }

            if(arrowLeft) arrowLeft.addEventListener('click', () => scrollSlider(-1));
            if(arrowRight) arrowRight.addEventListener('click', () => scrollSlider(1));

            // Initialize Lucide Icons
            lucide.createIcons();
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent" id="header">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<a className="flex items-center gap-2.5 hover:opacity-90 transition-opacity" href="#">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B0F0] to-[#0070a0] flex items-center justify-center shadow-[0_0_1rem_rgba(0,176,240,0.4)]">
<i className="text-white w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tighter text-white leading-none">BERG STORE</span>
<span className="text-sm text-[#00B0F0] tracking-widest font-medium mt-0.5 leading-none">PRODUTOS DIGITAIS</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-normal text-white/70 hover:text-[#00B0F0] transition-colors" href="#inicio">Início</a>
<a className="text-base font-normal text-white/70 hover:text-[#00B0F0] transition-colors" href="#produtos">Produtos</a>
<a className="text-base font-normal text-white/70 hover:text-[#00B0F0] transition-colors" href="#vantagens">Vantagens</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-black font-medium text-base transition-transform hover:scale-105 shadow-[0_0_1rem_rgba(255,215,0,0.2)]" href="https://chat.whatsapp.com/KmgidHH3e1R0vHNhLHzbKs" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="crown" strokeWidth="1.5"></i> GRUPO VIP
                </a>
<a className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-br from-[#00B0F0] to-[#0070a0] text-white font-medium text-base transition-transform hover:scale-105 shadow-[0_0_1rem_rgba(0,176,240,0.3)]" href="#produtos">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i> Loja
                </a>
</div>

<button className="md:hidden text-white/80 hover:text-white transition-colors" id="menu-btn">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden md:hidden bg-[#050510]/98 border-t border-[#00B0F0]/10 px-6 py-6 flex-col gap-5 absolute w-full backdrop-blur-xl shadow-2xl" id="mobile-menu">
<a className="mobile-link text-lg font-normal text-white/80 hover:text-[#00B0F0]" href="#inicio">Início</a>
<a className="mobile-link text-lg font-normal text-white/80 hover:text-[#00B0F0]" href="#produtos">Produtos</a>
<a className="mobile-link text-lg font-normal text-white/80 hover:text-[#00B0F0]" href="#vantagens">Vantagens</a>
<div className="h-px w-full bg-white/5 my-2"></div>
<a className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-black font-medium text-base w-full" href="https://chat.whatsapp.com/KmgidHH3e1R0vHNhLHzbKs" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="crown" strokeWidth="1.5"></i> GRUPO VIP
            </a>
<a className="mobile-link flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br from-[#00B0F0] to-[#0070a0] text-white font-medium text-base w-full shadow-[0_0_1.5rem_rgba(0,176,240,0.3)]" href="#produtos">
<i className="w-5 h-5" data-lucide="shopping-cart" strokeWidth="1.5"></i> VER PRODUTOS
            </a>
</div>
</header>

<section className="relative pt-36 pb-20 text-center overflow-hidden flex flex-col items-center px-6" id="inicio">

<div className="absolute top-[-6rem] left-1/2 -translate-x-1/2 w-[37.5rem] h-[37.5rem] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(0,176,240,.12) 0%, transparent 70%)'}}></div>
<div className="relative max-w-4xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#00B0F0]/30 bg-[#00B0F0]/10 text-[#00B0F0] text-sm font-medium tracking-wider mb-6">
<i className="mr-1.5 w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i> BERG STORE — PRODUTOS DIGITAIS PREMIUM
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-5 text-white">
                Tudo que você precisa, <span className="text-[#00B0F0]">num só lugar.</span>
</h1>
<p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed font-normal">
                Produtos digitais premium com entrega imediata, suporte 24/7 e os melhores preços do mercado.
            </p>
<div className="flex flex-wrap justify-center gap-4 mb-14">
<a className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-br from-[#00B0F0] to-[#0070a0] text-white font-medium text-base transition-transform hover:scale-105 shadow-[0_0_1.5rem_rgba(0,176,240,0.3)]" href="#produtos">
<i className="w-5 h-5" data-lucide="shopping-cart" strokeWidth="1.5"></i> VER PRODUTOS
                </a>
<a className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-black font-medium text-base transition-transform hover:scale-105 shadow-[0_0_1.5rem_rgba(255,215,0,0.2)]" href="https://chat.whatsapp.com/KmgidHH3e1R0vHNhLHzbKs" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="crown" strokeWidth="1.5"></i> GRUPO VIP
                </a>
</div>

<div className="flex flex-wrap justify-center gap-8 md:gap-14 border-t border-white/5 pt-10">
<div className="text-center">
<div className="text-3xl font-bold text-[#00B0F0] tracking-tight">2.500+</div>
<div className="text-sm text-white/50 mt-1 font-normal tracking-wide uppercase">Clientes</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-[#00B0F0] tracking-tight">4.9★</div>
<div className="text-sm text-white/50 mt-1 font-normal tracking-wide uppercase">Avaliação</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-[#00B0F0] tracking-tight">24/7</div>
<div className="text-sm text-white/50 mt-1 font-normal tracking-wide uppercase">Suporte</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-[#00B0F0] tracking-tight">100%</div>
<div className="text-sm text-white/50 mt-1 font-normal tracking-wide uppercase">Entrega</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16 md:py-24" id="produtos">
<div className="text-center mb-14">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 flex justify-center items-center gap-3">
<i className="text-[#00B0F0] w-8 h-8 md:w-10 md:h-10" data-lucide="shopping-cart" strokeWidth="1.5"></i> Nossos <span className="text-[#00B0F0]">Produtos</span>
</h2>
<p className="text-lg text-white/50 font-normal">Escolha o seu e receba na hora!</p>
</div>

<div className="relative rounded-[1.25rem] border border-[#00B0F0]/25 bg-gradient-to-br from-[#00B0F0]/10 to-[#050510]/95 overflow-hidden shadow-[0_0_3rem_rgba(0,176,240,0.1)] group mb-16">
<div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-lg bg-gradient-to-br from-[#ff4444] to-[#cc0000] text-white text-sm font-semibold tracking-widest uppercase shadow-lg">
                #1 MAIS VENDIDO
            </div>
<div className="flex flex-col md:flex-row w-full h-full">

<div className="md:w-2/5 min-h-[17.5rem] flex overflow-hidden group-hover:from-[#00B0F0]/20 transition-all duration-500 bg-gradient-to-br from-[#00B0F0]/15 to-[#00B0F0]/5 w-full pt-10 pr-10 pb-10 pl-10 relative items-center justify-center">
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0"></div><img alt="ChatGPT Pro" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="chatgpt-cover.jpg"/><div className="z-10 md:bg-gradient-to-l md:from-[#050510] md:via-[#050510]/40 bg-gradient-to-t from-[#050510] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="w-full md:w-3/5 p-7 md:p-10 flex flex-col justify-center relative">
<div className="inline-flex px-2.5 py-1 rounded-md bg-[#ff4444] text-white text-xs font-semibold tracking-wider uppercase mb-3 w-fit">
                        🔥 MAIS VENDIDO
                    </div>
<h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">CHATGPT PRO</h3>
<p className="text-[#00B0F0] text-base md:text-lg font-medium mb-6">📅 30 DIAS DE ACESSO PREMIUM GARANTIDO</p>
<div className="flex flex-col gap-2.5 mb-6 text-base text-white/80 leading-relaxed font-normal">
<div className="flex items-start gap-2.5"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>🤖 Acesso total ao ChatGPT 5.0 para uso ilimitado de recursos avançados.</span></div>
<div className="flex items-start gap-2.5"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>🧠 Inteligência Artificial de ponta com respostas rápidas e precisas.</span></div>
<div className="flex items-start gap-2.5"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>🌍 Acesse o ChatGPT 5.0 de qualquer lugar, a qualquer momento.</span></div>
<div className="flex items-start gap-2.5"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span className="">🚀 ENTREGA Via Whatsapp - Receba os dados de acesso imediatamente.</span></div>
<div className="flex items-start gap-2.5"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>⏱️ Sem enrolação, sem espera!</span></div>

<div className="hidden flex-col gap-2.5 mt-2.5" id="feat-chatgpt">
<div className="flex items-start gap-2.5"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>🧠 SUPORTE ESPECIALIZADO 24/7 - Disponíveis para tirar dúvidas.</span></div>
<div className="flex items-start gap-2.5"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>🔐 USO EXCLUSIVO E SEGURO - Estabilidade garantida.</span></div>
<div className="flex items-start gap-2.5"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>📱 Máximo de 5 logins ativos.</span></div>
<div className="flex items-start gap-2.5"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>❌ Não realizamos reembolsos, compre ciente.</span></div>
</div>
</div>
<button className="toggle-btn text-[#00B0F0] text-base font-medium text-left mb-8 hover:text-white transition-colors w-fit" data-count="4" data-target="feat-chatgpt">▼ Ver mais (4)</button>
<div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-auto">
<div>
<div className="flex items-end gap-3 flex-wrap">
<span className="text-4xl font-bold text-white tracking-tight leading-none">R$ 50,00</span>
<span className="text-base text-white/40 line-through mb-1">R$ 99,90</span>
<span className="bg-[#22c55e]/15 text-[#22c55e] text-sm font-semibold px-2 py-1 rounded-md mb-1">-50%</span>
</div>
<div className="text-sm text-white/40 mt-1.5 font-normal">ou 3x de R$ 16,66</div>
</div>
<a className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-br from-[#00B0F0] to-[#0070a0] text-white font-medium text-base transition-transform hover:scale-105 shadow-[0_0_1.5rem_rgba(0,176,240,0.3)] whitespace-nowrap" href="https://wa.me/5583988244529" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="shopping-cart" strokeWidth="1.5"></i> COMPRAR AGORA
                        </a>
</div>
</div>
</div>
</div>

<div className="relative group/carousel">

<button className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-xl border border-[#00B0F0]/30 bg-[#050510]/90 text-[#00B0F0] items-center justify-center cursor-pointer transition-all hover:bg-[#00B0F0]/15 hover:border-[#00B0F0] hover:scale-110 shadow-xl opacity-0 group-hover/carousel:opacity-100 backdrop-blur-md" id="prev-btn">
<i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-xl border border-[#00B0F0]/30 bg-[#050510]/90 text-[#00B0F0] items-center justify-center cursor-pointer transition-all hover:bg-[#00B0F0]/15 hover:border-[#00B0F0] hover:scale-110 shadow-xl opacity-0 group-hover/carousel:opacity-100 backdrop-blur-md" id="next-btn">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 w-full scroll-smooth" id="carousel-slider" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="snap-start min-w-[100%] md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] rounded-2xl border border-white/5 bg-gradient-to-br from-[#0f0f23]/95 to-[#050510]/98 overflow-hidden hover:border-[#00B0F0]/30 hover:shadow-[0_0_2rem_rgba(0,176,240,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group/card">
<div className="h-44 relative bg-gradient-to-br from-[#8b5cf6]/15 to-transparent flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0,transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#8b5cf6] text-white text-xs font-semibold tracking-wider uppercase">🎬 EDIÇÃO PRO</div>
<span className="text-7xl relative z-10 transform group-hover/card:scale-110 transition-transform duration-500">🎬</span>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">CAPCUT PRO</h3>
<p className="text-[#00B0F0] text-sm font-medium mb-4 leading-relaxed">🔑 Login e senha enviados no chat. 📧 Acesso exclusivo.</p>
<div className="flex flex-col gap-2 mb-4 flex-1 text-sm text-white/75 font-normal">
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ Recursos avançados de edição de vídeo</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ Efeitos e transições premium exclusivas</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ Fontes profissionais liberadas</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ Músicas e áudios sem direitos autorais</span></div>
<div className="hidden flex-col gap-2 mt-2" id="feat-capcut">
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ Vídeos sem marca d'água</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ Ferramentas de IA (remoção de fundo, etc)</span></div>
</div>
</div>
<button className="toggle-btn text-[#00B0F0] text-sm font-medium text-left mb-5 hover:text-white transition-colors" data-count="2" data-target="feat-capcut">▼ Ver mais (2)</button>
<div className="mb-5 border-t border-white/5 pt-4 mt-auto">
<div className="flex items-end gap-2.5 flex-wrap">
<span className="text-2xl font-bold text-white tracking-tight leading-none">R$ 20,00</span>
<span className="text-sm text-white/40 line-through mb-0.5">R$ 49,90</span>
<span className="bg-[#22c55e]/15 text-[#22c55e] text-xs font-semibold px-1.5 py-0.5 rounded mb-0.5">-60%</span>
</div>
</div>
<a className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-br from-[#00B0F0] to-[#0070a0] text-white font-medium text-base transition-transform hover:scale-[1.03] shadow-[0_0_1rem_rgba(0,176,240,0.2)]" href="https://wa.me/5583988244529" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i> COMPRAR AGORA
                        </a>
</div>
</div>

<div className="snap-start min-w-[100%] md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] rounded-2xl border border-white/5 bg-gradient-to-br from-[#0f0f23]/95 to-[#050510]/98 overflow-hidden hover:border-[#00B0F0]/30 hover:shadow-[0_0_2rem_rgba(0,176,240,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group/card">
<div className="h-44 relative bg-gradient-to-br from-[#ef4444]/15 to-transparent flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.3)_0,transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#ef4444] text-white text-xs font-semibold tracking-wider uppercase">▶️ STREAMING</div>
<span className="text-7xl relative z-10 transform group-hover/card:scale-110 transition-transform duration-500">▶️</span>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">YOUTUBE PREMIUM</h3>
<p className="text-[#00B0F0] text-sm font-medium mb-4 leading-relaxed">▶️ Combo YouTube Premium 30 Dias</p>
<div className="flex flex-col gap-2 mb-4 flex-1 text-sm text-white/75 font-normal">
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ ASSINE O COMBO COMPLETO — 30 DIAS!</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>Vídeos e músicas sem anúncios, download offline.</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>📌 Convite para grupo familiar do YouTube.</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>📌 ATENÇÃO: SÓ PARA CONTAS NOVAS NO PREMIUM</span></div>
<div className="hidden flex-col gap-2 mt-2" id="feat-yt">
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>📱 Funciona em celulares, tablets, PCs e Smart TVs</span></div>
</div>
</div>
<button className="toggle-btn text-[#00B0F0] text-sm font-medium text-left mb-5 hover:text-white transition-colors" data-count="1" data-target="feat-yt">▼ Ver mais (1)</button>
<div className="mb-5 border-t border-white/5 pt-4 mt-auto">
<div className="flex items-end gap-2.5 flex-wrap">
<span className="text-2xl font-bold text-white tracking-tight leading-none">R$ 10,00</span>
<span className="text-sm text-white/40 line-through mb-0.5">R$ 34,90</span>
<span className="bg-[#22c55e]/15 text-[#22c55e] text-xs font-semibold px-1.5 py-0.5 rounded mb-0.5">-71%</span>
</div>
</div>
<a className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-br from-[#00B0F0] to-[#0070a0] text-white font-medium text-base transition-transform hover:scale-[1.03] shadow-[0_0_1rem_rgba(0,176,240,0.2)]" href="https://wa.me/5583988244529" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i> COMPRAR AGORA
                        </a>
</div>
</div>

<div className="snap-start min-w-[100%] md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] rounded-2xl border border-white/5 bg-gradient-to-br from-[#0f0f23]/95 to-[#050510]/98 overflow-hidden hover:border-[#00B0F0]/30 hover:shadow-[0_0_2rem_rgba(0,176,240,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group/card">
<div className="h-44 relative bg-gradient-to-br from-[#06b6d4]/15 to-transparent flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.3)_0,transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#06b6d4] text-white text-xs font-semibold tracking-wider uppercase">🎨 DESIGN</div>
<span className="text-7xl relative z-10 transform group-hover/card:scale-110 transition-transform duration-500">🎨</span>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">CANVA PRO</h3>
<p className="text-[#00B0F0] text-sm font-medium mb-4 leading-relaxed">🔑 Ativação direto no e-mail pessoal.</p>
<div className="flex flex-col gap-2 mb-4 flex-1 text-sm text-white/75 font-normal">
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>🚫 Uso individual e privado.</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ Acesso completo a todos os recursos premium</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ Templates profissionais ilimitados</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ Remoção de fundo com IA</span></div>
<div className="hidden flex-col gap-2 mt-2" id="feat-canva">
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>✅ Kit de marca personalizado</span></div>
</div>
</div>
<button className="toggle-btn text-[#00B0F0] text-sm font-medium text-left mb-5 hover:text-white transition-colors" data-count="1" data-target="feat-canva">▼ Ver mais (1)</button>
<div className="mb-5 border-t border-white/5 pt-4 mt-auto">
<div className="flex items-end gap-2.5 flex-wrap">
<span className="text-2xl font-bold text-white tracking-tight leading-none">R$ 16,00</span>
<span className="text-sm text-white/40 line-through mb-0.5">R$ 44,90</span>
<span className="bg-[#22c55e]/15 text-[#22c55e] text-xs font-semibold px-1.5 py-0.5 rounded mb-0.5">-64%</span>
</div>
</div>
<a className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-br from-[#00B0F0] to-[#0070a0] text-white font-medium text-base transition-transform hover:scale-[1.03] shadow-[0_0_1rem_rgba(0,176,240,0.2)]" href="https://wa.me/5583988244529" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i> COMPRAR AGORA
                        </a>
</div>
</div>

<div className="snap-start min-w-[100%] md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] rounded-2xl border border-white/5 bg-gradient-to-br from-[#0f0f23]/95 to-[#050510]/98 overflow-hidden hover:border-[#00B0F0]/30 hover:shadow-[0_0_2rem_rgba(0,176,240,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group/card">
<div className="h-44 relative bg-gradient-to-br from-[#f59e0b]/15 to-transparent flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.3)_0,transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#f59e0b] text-white text-xs font-semibold tracking-wider uppercase">⚡ AUTOMAÇÃO</div>
<span className="text-7xl relative z-10 transform group-hover/card:scale-110 transition-transform duration-500">⚡</span>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">CRÉDITOS INFINITOS</h3>
<p className="text-[#00B0F0] text-sm font-medium mb-4 leading-relaxed">Zero Bloqueios — Plano Anual Exclusivo.</p>
<div className="flex flex-col gap-2 mb-4 flex-1 text-sm text-white/75 font-normal">
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>Economia Real: Pare de pagar taxas abusivas.</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>Fluxo Contínuo: Ideal para desenvolvedores.</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>LICENÇA É VÁLIDA SOMENTE PARA UMA CONTA.</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>Você recebe 1 ano de acesso completo!</span></div>
</div>
<div className="mb-5 border-t border-white/5 pt-4 mt-auto">
<div className="flex items-end gap-2.5 flex-wrap">
<span className="text-2xl font-bold text-white tracking-tight leading-none">R$ 170,00</span>
<span className="text-sm text-white/40 line-through mb-0.5">R$ 499,90</span>
<span className="bg-[#22c55e]/15 text-[#22c55e] text-xs font-semibold px-1.5 py-0.5 rounded mb-0.5">-66%</span>
</div>
</div>
<a className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-br from-[#00B0F0] to-[#0070a0] text-white font-medium text-base transition-transform hover:scale-[1.03] shadow-[0_0_1rem_rgba(0,176,240,0.2)]" href="https://wa.me/5583988244529" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i> COMPRAR AGORA
                        </a>
</div>
</div>

<div className="snap-start min-w-[100%] md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] rounded-2xl border border-white/5 bg-gradient-to-br from-[#0f0f23]/95 to-[#050510]/98 overflow-hidden hover:border-[#00B0F0]/30 hover:shadow-[0_0_2rem_rgba(0,176,240,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group/card">
<div className="h-44 relative bg-gradient-to-br from-[#ef4444]/15 to-transparent flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.3)_0,transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#ef4444] text-white text-xs font-semibold tracking-wider uppercase">🎬 STREAMING</div>
<span className="text-7xl relative z-10 transform group-hover/card:scale-110 transition-transform duration-500">🎥</span>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">NETFLIX PREMIUM</h3>
<p className="text-[#00B0F0] text-sm font-medium mb-4 leading-relaxed">🎬 TELA INDIVIDUAL E PRIVADA 30 DIAS</p>
<div className="flex flex-col gap-2 mb-4 flex-1 text-sm text-white/75 font-normal">
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>📺 Acesso completo à Netflix Premium</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>👤 Tela 100% privada — uso exclusivo e seguro</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>🚀 ENTREGA AUTOMÁTICA E IMEDIATA</span></div>
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>💡 SUPORTE ATIVO DURANTE OS 30 DIAS</span></div>
<div className="hidden flex-col gap-2 mt-2" id="feat-netflix">
<div className="flex items-start gap-2"><span className="text-[#00B0F0] mt-0.5 shrink-0">✓</span><span>📲 Assista em celular, TV, PC, tablet ou onde quiser!</span></div>
</div>
</div>
<button className="toggle-btn text-[#00B0F0] text-sm font-medium text-left mb-5 hover:text-white transition-colors" data-count="1" data-target="feat-netflix">▼ Ver mais (1)</button>
<div className="mb-5 border-t border-white/5 pt-4 mt-auto">
<div className="flex items-end gap-2.5 flex-wrap">
<span className="text-2xl font-bold text-white tracking-tight leading-none">R$ 15,00</span>
<span className="text-sm text-white/40 line-through mb-0.5">R$ 39,90</span>
<span className="bg-[#22c55e]/15 text-[#22c55e] text-xs font-semibold px-1.5 py-0.5 rounded mb-0.5">-62%</span>
</div>
</div>
<a className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-br from-[#00B0F0] to-[#0070a0] text-white font-medium text-base transition-transform hover:scale-[1.03] shadow-[0_0_1rem_rgba(0,176,240,0.2)]" href="https://wa.me/5583988244529" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i> COMPRAR AGORA
                        </a>
</div>
</div>
</div>

<div className="md:hidden text-center text-xs text-white/40 mt-2 tracking-wide uppercase font-normal flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="chevron-left" strokeWidth="1.5"></i> Deslize para ver mais <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24 pt-10" id="vantagens">
<div className="text-center mb-14">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
                Por que escolher a <span className="text-[#00B0F0]">Berg Store</span>?
            </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 rounded-[1.25rem] border border-white/5 bg-[#0a0a1e]/60 text-center hover:border-[#00B0F0]/30 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg hover:shadow-[0_0_2rem_rgba(0,176,240,0.05)]">
<div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#00B0F0]/20 to-[#00B0F0]/5 text-[#00B0F0] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[#00B0F0]/10">
<i className="w-8 h-8" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2.5 tracking-tight">Entrega Imediata</h3>
<p className="text-base text-white/50 leading-relaxed font-normal">Receba seu produto em menos de 5 minutos após a confirmação da compra.</p>
</div>
<div className="p-8 rounded-[1.25rem] border border-white/5 bg-[#0a0a1e]/60 text-center hover:border-[#00B0F0]/30 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg hover:shadow-[0_0_2rem_rgba(0,176,240,0.05)]">
<div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#00B0F0]/20 to-[#00B0F0]/5 text-[#00B0F0] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[#00B0F0]/10">
<i className="w-8 h-8" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2.5 tracking-tight">100% Seguro</h3>
<p className="text-base text-white/50 leading-relaxed font-normal">Transação totalmente segura e dados protegidos com criptografia de ponta.</p>
</div>
<div className="p-8 rounded-[1.25rem] border border-white/5 bg-[#0a0a1e]/60 text-center hover:border-[#00B0F0]/30 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg hover:shadow-[0_0_2rem_rgba(0,176,240,0.05)]">
<div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#00B0F0]/20 to-[#00B0F0]/5 text-[#00B0F0] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[#00B0F0]/10">
<i className="w-8 h-8" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2.5 tracking-tight">Suporte 24/7</h3>
<p className="text-base text-white/50 leading-relaxed font-normal">Nossa equipe está disponível 24 horas por dia para ajudar você no que precisar.</p>
</div>
<div className="p-8 rounded-[1.25rem] border border-white/5 bg-[#0a0a1e]/60 text-center hover:border-[#00B0F0]/30 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg hover:shadow-[0_0_2rem_rgba(0,176,240,0.05)]">
<div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#00B0F0]/20 to-[#00B0F0]/5 text-[#00B0F0] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[#00B0F0]/10">
<i className="w-8 h-8" data-lucide="star" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2.5 tracking-tight">Qualidade Premium</h3>
<p className="text-base text-white/50 leading-relaxed font-normal">Todos os produtos são rigorosamente selecionados e testados por especialistas.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#03030a]/90 pt-16 pb-10 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 mb-12">
<div className="max-w-xs">
<div className="flex items-center gap-2.5 mb-4">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00B0F0] to-[#0070a0] flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tighter text-white">BERG STORE</span>
</div>
<p className="text-base text-white/40 leading-relaxed font-normal">
                    Sua loja de produtos digitais premium com entrega imediata e suporte especializado garantido.
                </p>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="text-base font-semibold text-white mb-4 uppercase tracking-wider">Navegação</h4>
<div className="flex flex-col gap-3">
<a className="text-base text-white/40 hover:text-[#00B0F0] font-normal transition-colors" href="#inicio">Início</a>
<a className="text-base text-white/40 hover:text-[#00B0F0] font-normal transition-colors" href="#produtos">Produtos</a>
<a className="text-base text-white/40 hover:text-[#00B0F0] font-normal transition-colors" href="#vantagens">Vantagens</a>
</div>
</div>
<div>
<h4 className="text-base font-semibold text-white mb-4 uppercase tracking-wider">Comunidade</h4>
<div className="flex flex-col gap-3">
<a className="flex items-center gap-2 text-base text-[#FFD700] hover:text-white font-medium transition-colors" href="https://chat.whatsapp.com/KmgidHH3e1R0vHNhLHzbKs" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="crown" strokeWidth="1.5"></i> Grupo VIP
                        </a>
<a className="flex items-center gap-2 text-base text-[#25D366] hover:text-white font-medium transition-colors" href="https://wa.me/5583988244529" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i> WhatsApp
                        </a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-sm text-white/30 font-normal">
            © 2024 Berg Store. Todos os direitos reservados.
        </div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_0.25rem_1.25rem_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300" href="https://wa.me/5583988244529" rel="noopener noreferrer" target="_blank" title="Fale conosco no WhatsApp">
<i className="text-white w-8 h-8" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>



    </>
  );
}
