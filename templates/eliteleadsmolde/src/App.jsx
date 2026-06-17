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



        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const bg = document.getElementById('hero-bg');
            bg.style.transform = `translateY(${scrolled * 0.5}px)`;
        });

        const titleContainer = document.getElementById('hero-title');
        const text = "Mais do que estética,\numa experiência premium";
        const lines = text.split('\n');

        lines.forEach((line, lineIndex) => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'block';

            line.split('').forEach((char, charIndex) => {
                if(char === ' ') {
                    const space = document.createElement('span');
                    space.innerHTML = '&nbsp;';
                    space.className = 'inline-block';
                    lineDiv.appendChild(space);
                    return;
                }
                const wrapper = document.createElement('span');
                wrapper.className = 'clip-text-wrapper';
                const span = document.createElement('span');
                span.textContent = char;
                span.className = 'clip-char';
                span.style.animationDelay = `${(lineIndex * 10 + charIndex) * 0.03}s`;
                wrapper.appendChild(span);
                lineDiv.appendChild(wrapper);
            });
            titleContainer.appendChild(lineDiv);
        });
      


      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('in-view');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));

          const menuToggle = document.getElementById('menu-toggle');
          const menuClose = document.getElementById('menu-close');
          const menuLinks = document.querySelectorAll('.menu-link-container');
          const body = document.body;

          function toggleMenu() { body.classList.toggle('menu-active'); }

          if(menuToggle) menuToggle.addEventListener('click', toggleMenu);
          if(menuClose) menuClose.addEventListener('click', toggleMenu);

          menuLinks.forEach(link => {
              link.addEventListener('click', (e) => {
                  body.classList.remove('menu-active');
                  const href = link.getAttribute('href');
                  if (href && href.startsWith('#')) {
                      e.preventDefault();
                      const target = href === '#' ? document.body : document.querySelector(href);
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }
              });
          });

          // Mouse move for bento card glow
          const cards = document.querySelectorAll('.bento-card');
          document.addEventListener('mousemove', e => {
              cards.forEach(card => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--mouse-x', `${x}px`);
                  card.style.setProperty('--mouse-y', `${y}px`);
              });
          });
      });
    


      const cursor=document.getElementById('custom-cursor');document.addEventListener('mousemove',(e)=>{cursor.style.transform=`translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`});document.querySelectorAll('a, button, input, .cursor-hover').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('scale-[2.5]','bg-white'));el.addEventListener('mouseleave',()=>cursor.classList.remove('scale-[2.5]','bg-white'));});
    
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
      

<div className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col justify-between p-6 md:p-12 overflow-hidden" id="menu-overlay">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#FF2800]/10 rounded-full blur-[120px]"></div>
</div>
<div className="w-full max-w-[1800px] mx-auto flex justify-between items-center relative z-10 h-20">
<button className="flex items-center gap-3 group text-white hover:text-[#FF2800] transition-colors" id="menu-close">
<div className="w-8 h-8 flex items-center justify-center relative">
<span className="absolute w-full h-[1px] bg-current rotate-45 transform transition-transform duration-300 group-hover:rotate-0"></span>
<span className="absolute w-full h-[1px] bg-current -rotate-45 transform transition-transform duration-300 group-hover:rotate-0"></span>
</div>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium hidden md:block">
            Fechar
          </span>
</button>
<span className="text-lg font-display font-semibold tracking-[0.25em] text-white">
          ZEZINHO
        </span>
</div>
<div className="flex-1 flex flex-col justify-center items-center relative z-10">
<nav className="flex flex-col gap-6 md:gap-8 text-center">
<div className="menu-link-item overflow-hidden">
<a className="menu-link-container block relative group" href="#">
<span className="text-4xl md:text-7xl font-display font-medium text-white tracking-tighter uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF2800] transition-all duration-300 font-semibold">
                Início
              </span>
</a>
</div>
<div className="menu-link-item overflow-hidden">
<a className="menu-link-container block relative group" href="#servicos">
<span className="text-4xl md:text-7xl font-display font-medium text-white tracking-tighter uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF2800] transition-all duration-300">
                Serviços
              </span>
</a>
</div>
<div className="menu-link-item overflow-hidden">
<a className="menu-link-container block relative group" href="#galeria">
<span className="text-4xl md:text-7xl font-display font-medium text-white tracking-tighter uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF2800] transition-all duration-300">
                Galeria
              </span>
</a>
</div>
<div className="menu-link-item overflow-hidden">
<a className="menu-link-container block relative group" href="#orcamento">
<span className="text-4xl md:text-7xl font-display font-medium text-white tracking-tighter uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF2800] transition-all duration-300">
                Contato
              </span>
</a>
</div>
</nav>
</div>
<div className="w-full max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-end md:items-center relative z-10 border-t border-white/10 pt-8 gap-6">
<div className="flex flex-col gap-2">
<span className="text-[10px] uppercase tracking-widest text-neutral-500">
            Endereço
          </span>
<p className="text-xs text-neutral-300 font-normal">
            Av. Europa, 1200 - Jardins, São Paulo
          </p>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-[#FF2800] transition-colors" href="#">
<iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-[#FF2800] transition-colors" href="#">
<iconify-icon icon="simple-icons:whatsapp" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-[1800px] mx-auto px-6 h-20 flex items-center justify-between">
<button className="flex items-center gap-3 group z-50" id="menu-toggle">
<div className="w-8 h-[10px] flex flex-col justify-between items-start">
<span className="w-full h-[1px] bg-white group-hover:w-2/3 transition-all duration-300 group-hover:bg-[#FF2800]"></span>
<span className="w-1/2 h-[1px] bg-white group-hover:w-full transition-all duration-300 group-hover:bg-[#FF2800]"></span>
</div>
<span className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-medium text-white/80 group-hover:text-white transition-colors">
            Menu
          </span>
</button>
<a className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group text-white z-50" href="#">
<iconify-icon className="text-[#FF2800]" icon="lucide:sparkles" width="20"></iconify-icon>
<span className="text-lg font-display font-semibold tracking-[0.25em]">
            ZEZINHO
          </span>
</a>
<div className="flex items-center gap-6">
<a className="hidden md:block text-[10px] font-semibold tracking-[0.15em] uppercase hover:text-[#FF2800] text-neutral-400 transition-colors" href="#orcamento">
            Contato
          </a>
</div>
</div>
</nav>

<section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
<div className="absolute inset-0 z-0 h-[120%] -top-[10%] w-full will-change-transform" id="hero-bg">
<video autoplay="" className="w-full h-full object-cover grayscale-[20%]" id="hero-video" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&amp;w=2070&amp;auto=format&amp;fit=crop">
<source src="https://videos.porsche.com/id/dublinmobile/hls.m3u8" type="application/x-mpegURL"/>
</video>
<div className="absolute inset-0 bg-black/50"></div>
</div>
<div className="relative z-10 text-center px-6">
<h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-display tracking-tighter leading-tight mix-blend-screen mb-8 font-bold uppercase" id="hero-title">

</h1>
<p className="max-w-xl mx-auto text-sm md:text-base text-neutral-300 leading-relaxed reveal-element delay-200 font-normal">
          Exclusividade para veículos de alto padrão.
          <br className="hidden md:block"/>
          Porque excelência não é opcional.
        </p>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce reveal-element delay-300">
<iconify-icon className="text-[#FF2800]" icon="lucide:arrow-down" width="20"></iconify-icon>
</div>

</section>

<section className="py-16 bg-[#050505] border-b border-white/5">
<div className="max-w-[1800px] mx-auto px-6 mb-8 text-center reveal-element">
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          Veículos Trabalhados
        </span>
</div>
<div className="w-full overflow-hidden marquee-mask relative reveal-element">
<div className="animate-scroll gap-16 md:gap-32 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-16 md:gap-32 shrink-0">
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:porsche" width="36"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:ferrari" width="36"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:lamborghini" width="36"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:mclaren" width="36"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:astonmartin" width="36"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:mercedes" width="36"></iconify-icon>
</div>
<div className="flex items-center gap-16 md:gap-32 shrink-0">
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:porsche" width="36"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:ferrari" width="36"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:lamborghini" width="36"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:mclaren" width="36"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:astonmartin" width="36"></iconify-icon>
<iconify-icon className="text-white hover:text-[#FF2800] transition-colors" icon="simple-icons:mercedes" width="36"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]" id="servicos">
<div className="max-w-[1800px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-element">
<div>
<span className="text-[10px] text-[#FF2800] font-semibold tracking-[0.2em] uppercase block mb-4">
              Nossa Expertise
            </span>
<h3 className="text-3xl md:text-5xl text-white font-display font-medium tracking-tight">
              Menu de Serviços
            </h3>
</div>
<p className="max-w-md text-sm text-neutral-400 font-light mt-6 md:mt-0 text-right">
            Cuidados essenciais para manter o brilho e a integridade do seu
            automóvel.
          </p>
</div>

<div className="bento-grid reveal-element">

<a className="bento-card md:col-span-4 md:row-span-2 group" href="lavagem-detalhes.html" target="_blank">
<div className="absolute inset-0 noise-bg z-0"></div>
<img alt="Lavagem Técnica" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
<div className="bento-card-content p-8 md:p-10 justify-center">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md group-hover:bg-[#FF2800] group-hover:border-[#FF2800] transition-colors duration-300">
<iconify-icon className="text-white" icon="lucide:droplets" width="24"></iconify-icon>
</div>
<h4 className="text-3xl font-display font-medium text-white mb-4">
                Lavagem Técnica Detalhada
              </h4>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md font-light">
                Higienização minuciosa externa com pré-lavagem (Snow Foam),
                descontaminação ferrosa de rodas e limpeza técnica de motor. O
                padrão ouro para manutenção regular.
              </p>
<div className="mt-8 flex gap-4">
<div className="flex flex-col">
<span className="text-xs text-[#FF2800] font-bold tracking-widest uppercase">
                    4 Horas
                  </span>
<span className="text-[10px] text-neutral-500 uppercase">
                    Duração Média
                  </span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-xs text-white font-bold tracking-widest">
                    pH Neutro
                  </span>
<span className="text-[10px] text-neutral-500 uppercase">
                    Produtos
                  </span>
</div>
</div>
<div className="absolute bottom-10 right-10 flex items-center gap-2 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                Ver Detalhes
                <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</a>

<a className="bento-card md:col-span-2 md:row-span-2 group" href="higienizacao-detalhes.html" target="_blank">
<div className="absolute inset-0 bg-[#0A0A0A]"></div>
<img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="bento-card-content p-8 justify-end">
<div className="mb-4">
<iconify-icon className="text-white group-hover:text-[#FF2800] transition-colors mb-4" icon="lucide:armchair" width="28"></iconify-icon>
<h4 className="text-xl font-display font-medium text-white mb-2">
                  Higienização Interna
                </h4>
<p className="text-neutral-400 text-xs leading-relaxed font-light">
                  Limpeza profunda de estofados, hidratação de couros nobres e
                  oxi-sanitização de dutos de ar.
                </p>
</div>
<span className="text-[10px] text-white/50 uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors">
                Saiba Mais <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</span>
</div>
</a>

<a className="bento-card md:col-span-4 group overflow-hidden" href="polimento-detalhes.html" target="_blank">
<div className="absolute inset-0 bg-[#121212]"></div>
<div className="absolute right-0 top-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#121212]"></div>
</div>
<div className="bento-card-content p-6 flex-row items-center justify-between relative z-10">
<div className="flex flex-col justify-center h-full max-w-lg">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#FF2800]" icon="lucide:sparkles" width="20"></iconify-icon>
<h4 className="text-lg font-display font-medium text-white">
                    Estética &amp; Polimento
                  </h4>
</div>
<p className="text-neutral-500 text-xs">
                  Correção de pintura, remoção de microrriscos e aplicação de
                  selantes para brilho profundo.
                </p>
</div>
<div className="hidden md:flex items-center justify-center w-10 h-10 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</a>

<div className="bento-card md:col-span-2 group cursor-pointer bg-[#FF2800] border-[#FF2800] hover:bg-[#D92200]">
<a className="w-full h-full flex flex-col justify-between p-6" href="#orcamento">
<div className="flex justify-end">
<iconify-icon className="text-black" icon="lucide:calendar-check" width="24"></iconify-icon>
</div>
<span className="text-xs font-bold text-black uppercase tracking-widest">
                Agendar Avaliação
              </span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative" id="assinatura">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF2800]/5 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-[1800px] mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal-element">
<span className="text-[10px] text-[#FF2800] font-semibold tracking-[0.2em] uppercase block mb-4">
            Membership
          </span>
<h3 className="text-3xl md:text-5xl text-white font-display font-medium tracking-tight">
            Planos de Assinatura
          </h3>
<p className="max-w-md mx-auto text-sm text-neutral-400 font-light mt-6">
            Garanta a manutenção impecável do seu veículo o ano todo com
            condições exclusivas.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto reveal-element">

<div className="p-8 border border-white/10 rounded-sm bg-[#0A0A0A] flex flex-col hover:border-white/20 transition-all duration-300 group">
<h4 className="text-2xl font-display text-white mb-2">Essential</h4>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-8">
              Cobrança Mensal
            </span>
<div className="text-4xl text-white mb-8">
              R$ 490
              <span className="text-sm font-normal text-neutral-500">/mês</span>
</div>
<ul className="space-y-4 mb-10 text-sm text-neutral-300 font-light flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF2800]" icon="lucide:check"></iconify-icon>
                2 Lavagens Técnicas
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF2800]" icon="lucide:check"></iconify-icon>
                Hidratação de Couros
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF2800]" icon="lucide:check"></iconify-icon>
                Prioridade de Agendamento
              </li>
</ul>
<button className="w-full py-4 border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
              Assinar Mensal
            </button>
</div>

<div className="p-8 border border-[#FF2800]/40 rounded-sm bg-gradient-to-b from-[#1C1C1C] to-[#0A0A0A] flex flex-col relative overflow-hidden shadow-2xl shadow-[#FF2800]/5 group">
<div className="absolute top-0 right-0 bg-[#FF2800] text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest">
              Recomendado
            </div>
<h4 className="text-2xl font-display text-white mb-2">Prestige</h4>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-8">
              Cobrança Anual
            </span>
<div className="text-4xl font-bold text-white mb-8">
              R$ 4.900
              <span className="text-sm font-normal text-neutral-500">/ano</span>
</div>
<ul className="space-y-4 mb-10 text-sm text-neutral-300 font-light flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF2800]" icon="lucide:check"></iconify-icon>
                Lavagens Ilimitadas
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF2800]" icon="lucide:check"></iconify-icon>
                Manutenção de Vitrificação
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF2800]" icon="lucide:check"></iconify-icon>
                Valet Service Incluso
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF2800]" icon="lucide:check"></iconify-icon>
                15% OFF em Serviços Extras
              </li>
</ul>
<button className="w-full py-4 bg-white text-black text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#FF2800] hover:text-white transition-all">
              Assinar Anual
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5" id="galeria">
<div className="max-w-[1800px] mx-auto px-6">
<div className="mb-12 text-center reveal-element">
<span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] mb-3 block">
            Portfolio
          </span>
<h3 className="text-3xl font-display font-medium text-white">
            Resultados Impecáveis
          </h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 reveal-element">

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-zoom-in">
<img alt="Porsche 911" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-zoom-in md:mt-12">
<img alt="Ferrari" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-zoom-in">
<img alt="McLaren P1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-zoom-in md:mt-12">
<img alt="Mercedes AMG" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-[#FF2800] hover:text-[#FF2800] transition-colors" href="#">
            Ver Galeria Completa
            <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative overflow-hidden">
<div className="max-w-[1800px] mx-auto px-6 relative z-10">
<h3 className="text-2xl text-white font-display font-medium text-center mb-16 reveal-element">
          O que dizem nossos clientes
        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-element">

<div className="p-8 border border-white/5 bg-[#0A0A0A] rounded-sm hover:bg-[#121212] hover:border-[#FF2800]/30 transition-all duration-300">
<div className="flex gap-1 text-[#FF2800] mb-6">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
              "O cuidado na lavagem técnica é impressionante. Meu GT3 nunca teve
              um acabamento tão perfeito. A equipe é meticulosa."
            </p>
<div>
<span className="block text-white text-sm font-medium">
                Ricardo M.
              </span>
<span className="block text-neutral-600 text-xs mt-1">
                Porsche 911 GT3
              </span>
</div>
</div>

<div className="p-8 border border-white/5 bg-[#0A0A0A] rounded-sm hover:bg-[#121212] hover:border-[#FF2800]/30 transition-all duration-300">
<div className="flex gap-1 text-[#FF2800] mb-6">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
              "A higienização interna revitalizou o couro claro da minha BMW.
              Parece que saiu da concessionária hoje. Recomendo muito."
            </p>
<div>
<span className="block text-white text-sm font-medium">André S.</span>
<span className="block text-neutral-600 text-xs mt-1">
                BMW M4 Competition
              </span>
</div>
</div>

<div className="p-8 border border-white/5 bg-[#0A0A0A] rounded-sm hover:bg-[#121212] hover:border-[#FF2800]/30 transition-all duration-300">
<div className="flex gap-1 text-[#FF2800] mb-6">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
              "Profissionalismo do início ao fim. O polimento técnico removeu
              todos os microrriscos. Serviço de primeira classe."
            </p>
<div>
<span className="block text-white text-sm font-medium">
                Fernanda L.
              </span>
<span className="block text-neutral-600 text-xs mt-1">
                Range Rover Sport
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5">
<div className="max-w-3xl mx-auto px-6 reveal-element">
<h3 className="text-2xl text-white font-display font-medium mb-12">
          Perguntas Frequentes
        </h3>
<div className="space-y-4">
<details className="group bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm text-white font-medium select-none">
              Qual a diferença entre Lavagem Técnica e Comum?
              <iconify-icon className="accordion-icon text-neutral-500 transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-transparent group-open:border-white/5 transition-colors font-normal">
              A lavagem técnica utiliza processos detalhados para evitar riscos
              na pintura (método de dois baldes, luvas de microfibra
              específicas), produtos com pH neutro e inclui descontaminação de
              rodas, limpeza de caixas de roda e acabamento detalhado, ao
              contrário da lavagem rápida convencional.
            </div>
</details>
<details className="group bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm text-white font-medium select-none">
              O que está incluso na Higienização Interna?
              <iconify-icon className="accordion-icon text-neutral-500 transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-transparent group-open:border-white/5 transition-colors font-normal">
              Nossa higienização contempla a limpeza profunda de estofados
              (tecido ou couro), carpete, teto, painel e portas. Inclui também a
              hidratação de couros com produtos premium e oxi-sanitização para
              eliminar fungos e bactérias do ar-condicionado.
            </div>
</details>
<details className="group bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm text-white font-medium select-none">
              Quanto tempo demora o Polimento Técnico?
              <iconify-icon className="accordion-icon text-neutral-500 transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-transparent group-open:border-white/5 transition-colors font-normal">
              O tempo varia conforme o estado da pintura, mas geralmente
              solicitamos de 2 a 3 dias úteis. Isso garante que possamos fazer a
              correção, o refinamento e o lustro com a devida atenção, seguido
              da aplicação da proteção escolhida.
            </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative overflow-hidden" id="orcamento">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[#FF2800]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 reveal-element">
<h2 className="text-3xl md:text-4xl text-white font-display font-medium tracking-tight mb-4">
            Inicie seu Projeto
          </h2>
<p className="text-neutral-500 font-light text-sm">
            Projetos personalizados. Atendimento exclusivo com hora marcada.
          </p>
</div>
<form className="space-y-8 backdrop-blur-sm bg-[#0A0A0A] border border-white/10 p-8 md:p-12 rounded-sm reveal-element delay-100 shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-[#FF2800] transition-colors">
                Nome
              </label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-white outline-none focus:border-[#FF2800] transition-colors placeholder:text-neutral-800 font-normal" placeholder="Seu nome" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-[#FF2800] transition-colors">
                Telefone
              </label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-white outline-none focus:border-[#FF2800] transition-colors placeholder:text-neutral-800 font-normal" placeholder="(11) 99999-9999" type="tel"/>
</div>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-[#FF2800] transition-colors">
              Veículo
            </label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-white outline-none focus:border-[#FF2800] transition-colors placeholder:text-neutral-800 font-normal" placeholder="Ex: Porsche 911 GT3 RS" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-4">
              Interesse
            </label>
<div className="flex flex-wrap gap-3">
<label className="checkbox-wrapper cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="px-4 py-2 border border-white/10 text-xs text-neutral-400 font-medium transition-all duration-300 hover:border-[#FF2800] hover:text-white select-none">
                  Lavagem Técnica
                </div>
</label>
<label className="checkbox-wrapper cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="px-4 py-2 border border-white/10 text-xs text-neutral-400 font-medium transition-all duration-300 hover:border-[#FF2800] hover:text-white select-none">
                  Higienização
                </div>
</label>
<label className="checkbox-wrapper cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="px-4 py-2 border border-white/10 text-xs text-neutral-400 font-medium transition-all duration-300 hover:border-[#FF2800] hover:text-white select-none">
                  Polimento
                </div>
</label>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-white text-black text-xs font-semibold uppercase tracking-[0.2em] py-4 hover:bg-[#FF2800] hover:text-white transition-colors flex items-center justify-center gap-2 group" type="button">
<span>Solicitar Cotação</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="bg-black pt-24 pb-12 border-t border-white/5 reveal-element">
<div className="max-w-[1800px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-6 text-white hover:text-[#FF2800] transition-colors" href="#">
<iconify-icon icon="lucide:sparkles" width="20"></iconify-icon>
<span className="text-lg font-display font-semibold tracking-[0.25em]">
                ZEZINHO
              </span>
</a>
<p className="text-neutral-500 text-xs leading-relaxed font-normal">
              Elevando o padrão estético automotivo. Especialistas em lavagem
              técnica, higienização e restauração de veículos de luxo.
            </p>
</div>
<div className="flex gap-16 md:gap-24">
<div>
<h4 className="text-white text-[10px] font-semibold uppercase tracking-widest mb-6">
                Menu
              </h4>
<ul className="space-y-3 text-xs text-neutral-400 font-normal">
<li>
<a className="hover:text-[#FF2800] transition-colors" href="#servicos">
                    Serviços
                  </a>
</li>
<li>
<a className="hover:text-[#FF2800] transition-colors" href="#galeria">
                    Galeria
                  </a>
</li>
<li>
<a className="hover:text-[#FF2800] transition-colors" href="#">
                    Studio
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 uppercase tracking-widest gap-4">
<span>© 2024 ZEZINHO.</span>
<div className="flex gap-6">
<a className="hover:text-[#FF2800] transition-colors" href="#">Legal</a>
<a className="hover:text-[#FF2800] transition-colors" href="#">
              Privacidade
            </a>
</div>
</div>
</div>
</footer>


<div className="fixed top-0 left-0 w-6 h-6 border border-white rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block" id="custom-cursor"></div>


    </>
  );
}
