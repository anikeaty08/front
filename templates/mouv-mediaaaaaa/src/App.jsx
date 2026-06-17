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



tailwind.config = {
theme: {
extend: {
colors: {
brand: '#E3FF04', /* Adapted to Mouv's yellow accent color hint */
'brand-dark': '#CDE503',
background: '#161616', /* Adapted slightly darker to match Mouv vibe */
surface: '#1b1b1b',
'surface-hover': '#252525',
border: '#333333',
'border-light': '#404040',
text: {
primary: '#ffffff',
secondary: '#bebebe',
tertiary: '#888888',
}
},
fontFamily: {
sans: ["Inter", "sans-serif"],
},
letterSpacing: {
tight: '-0.02em',
widest: '0.1em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Mobile Menu Logic
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');

      if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          const isOpen = mobileMenu.classList.contains('menu-open');
          if (isOpen) {
            mobileMenu.classList.remove('menu-open');
            menuIcon.classList.remove('icon-hidden');
            closeIcon.classList.add('icon-hidden');
          } else {
            mobileMenu.classList.add('menu-open');
            menuIcon.classList.add('icon-hidden');
            closeIcon.classList.remove('icon-hidden');
          }
        });
        document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open');
            menuIcon.classList.remove('icon-hidden');
            closeIcon.classList.add('icon-hidden');
          });
        });
      }

      // Animation Logic
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px', threshold: 0.1 });

      const selector = 'h1, section h2, section p, article, .group, #pricing > div > div, #about .grid > div, .fade-up';
      document.querySelectorAll(selector).forEach((el) => {
        // Apply animations to main content, excluding nav/footer for auto-logic
        if(!el.closest('nav') && !el.closest('#mobile-menu') && !el.closest('footer')) {
           // Prevent nested animations for paragraphs inside cards
           if(el.tagName === 'P' && (el.closest('article') || el.closest('.group'))) return;

           el.classList.add('fade-up');
           observer.observe(el);
        }
      });

      // Footer specific animations
      const footer = document.querySelector('footer');
      if(footer) {
         footer.querySelectorAll('h2, p, .flex, form').forEach(el => {
           el.classList.add('fade-up');
           observer.observe(el);
         });
      }
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 border-b border-border backdrop-blur-md">
<div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="h-8 flex items-center">
<img alt="Mouv Mídia" className="h-full w-auto object-contain" src="https://mouvmidia.com.br/wp-content/uploads/2024/11/Logotipo_Mouv_SemFundo-08-1024x221.png"/>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-normal uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#services">
            Serviços
          </a>
<a className="text-xs font-normal uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#work">
            Soluções
          </a>
<a className="text-xs font-normal uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#pricing">
            Planos
          </a>
<a className="text-xs font-normal uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#about">
            Sobre
          </a>
<a className="text-xs font-normal uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#blog">
            Blog
          </a>
<a className="px-6 py-3 bg-white text-black text-xs font-medium uppercase tracking-widest hover:bg-brand transition-colors duration-200" href="#contact">
            (11) 98535-4876
          </a>
</div>

<button className="md:hidden p-2 text-white hover:text-brand transition-colors" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" id="menu-icon"></iconify-icon>
<iconify-icon className="text-2xl icon-hidden" icon="solar:close-circle-linear" id="close-icon"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-background border-b border-border flex-col p-6 space-y-6 md:hidden shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto z-40" id="mobile-menu">
<a className="text-sm font-normal uppercase tracking-widest text-text-secondary hover:text-white" href="#services">
          Serviços
        </a>
<a className="text-sm font-normal uppercase tracking-widest text-text-secondary hover:text-white" href="#work">
          Soluções
        </a>
<a className="text-sm font-normal uppercase tracking-widest text-text-secondary hover:text-white" href="#pricing">
          Planos
        </a>
<a className="text-sm font-normal uppercase tracking-widest text-text-secondary hover:text-white" href="#about">
          Sobre
        </a>
<a className="text-sm font-normal uppercase tracking-widest text-text-secondary hover:text-white" href="#blog">
          Blog
        </a>
<a className="block w-full text-center py-4 bg-brand text-black text-xs font-medium uppercase tracking-widest" href="#contact">
          Falar Conosco
        </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-background border-b border-border">

<div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{backgroundImage: 'url(\'https://mouvmidia.com.br/wp-content/uploads/2025/05/HOME-1.png\')'}}></div>
<div className="absolute inset-0 bg-grid z-0 opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen animate-pulse"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-10 hover:border-brand/50 transition-colors cursor-default group">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-none h-2 w-2 bg-brand"></span>
</span>
<span className="text-xs font-medium uppercase tracking-[0.2em] text-white group-hover:text-brand transition-colors">
            Quem é visto é lembrado
          </span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-10 leading-[0.9] select-none">
          MERCADO EM
          <br/>
<span className="text-white/30">MOVIMENTO.</span>
</h1>
<p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light delay-100 fade-up">
          Unimos estratégia e inovação para criar soluções inteligentes e sustentáveis. Foco no sucesso dos nossos parceiros, garantindo visibilidade, impacto e presença constante.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-200">
<a className="inline-flex items-center justify-center px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-brand transition-colors duration-200 min-w-[180px]" href="#services">
            Ver Serviços
          </a>
<a className="inline-flex items-center justify-center px-10 py-4 bg-transparent border border-white/20 text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-200 min-w-[180px]" href="#contact">
            Fale Conosco
          </a>
</div>
</div>
<div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-between px-10 text-xs text-text-secondary uppercase tracking-widest pointer-events-none z-20">
<span>São Paulo, Brasil</span>
<span className="animate-bounce">Deslize para baixo</span>
<span>Mouv Mídia</span>
</div>
</section>

<section className="py-24 border-y border-border bg-background" id="services">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-5">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4 lowercase leading-none">
              o que
              <br/>
              oferecemos
            </h2>
</div>
<div className="md:col-span-7 flex items-end">
<p className="text-lg text-text-secondary font-light max-w-2xl leading-relaxed">
              Transformamos desafios em oportunidades. Estamos preparados para liderar essa nova era — mais ágil, conectada e centrada nas necessidades reais dos pequenos negócios.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:city-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white uppercase">
              Publicidade em Elevadores
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Transformamos elevadores residenciais em canais de mídia impactantes, conectando marcas com o público local de forma direta e frequente.
            </p>
</div>

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white uppercase">
              Menu Digital Interativo
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Experiência moderna e prática para restaurantes e bares. Ganhe agilidade, controle e um visual atrativo que impressiona clientes.
            </p>
</div>

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:shop-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white uppercase">
              Vitrine Institucional
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Sua fachada como um canal ativo de comunicação. Vitrines digitais transformam o ponto de venda em uma extensão da sua marca 24/7.
            </p>
</div>

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white uppercase">
              Consultoria Digital
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Desenvolvemos soluções visuais inteligentes que unem inovação tecnológica com as reais necessidades do comércio local.
            </p>
</div>
</div>

<div className="mt-20">
<div className="mb-8">
<h4 className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2">
              Visão 2025
            </h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border border-border">
<div className="flex gap-4 p-6 bg-background border-r border-border hover:bg-surface transition-colors duration-200 items-start">
<iconify-icon className="text-xl text-text-secondary mt-1" icon="solar:target-linear"></iconify-icon>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                  Consolidação Local
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Tecnologia acessível para o bairro.
                </p>
</div>
</div>
<div className="flex gap-4 p-6 bg-background border-r border-border hover:bg-surface transition-colors duration-200 items-start">
<iconify-icon className="text-xl text-text-secondary mt-1" icon="solar:chart-square-linear"></iconify-icon>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                  Escala Regional
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Diversificação e ampliação de cobertura.
                </p>
</div>
</div>
<div className="flex gap-4 p-6 bg-background hover:bg-surface transition-colors duration-200 items-start">
<iconify-icon className="text-xl text-text-secondary mt-1" icon="solar:global-linear"></iconify-icon>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                  Expansão Nacional
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Inteligência de dados para crescimento.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background" id="work">
<div className="max-w-[1440px] mx-auto px-6">
<div className="mb-16 border-b border-border pb-8">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4 lowercase">
            soluções visuais
          </h2>
<p className="text-lg text-text-secondary font-light">
            Estratégias aplicadas para gerar reconhecimento e conversão real.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Publicidade em Elevadores" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://mouvmidia.com.br/wp-content/uploads/2025/05/Copia-de-Mouvmidia-3-1024x576.png"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-brand transition-colors">
              Mídia em Elevadores
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Display
              </span>
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Condomínios
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Telas digitais com exibição estratégica por torre e cobertura segmentada por perfil de público.
            </p>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Menu Digital" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://mouvmidia.com.br/wp-content/uploads/2025/05/best-tv-for-restaurant-menu-1725403848-img_66d792c83c8d0-1024x639.png"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-brand transition-colors">
              Cardápios Inteligentes
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Interativo
              </span>
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Gastronomia
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Acesso via QR Code ou telas, layouts responsivos e atualizações em tempo real para redução de custos.
            </p>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Vitrine Digital" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://mouvmidia.com.br/wp-content/uploads/2025/05/img-03-1024x680-1.jpg"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-brand transition-colors">
              Vitrines Institucionais
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Comunicação Visual
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Exibição de vídeos, mensagens e campanhas em loop. Ideal para lojas, clínicas e academias.
            </p>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Consultoria" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://mouvmidia.com.br/wp-content/uploads/2025/05/consultoria_midia_digital-1024x683.jpg"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-brand transition-colors">
              Inovação Local
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Consultoria
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Capacitação em mídia digital para pequenos empreendedores e modernização de canais físicos.
            </p>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Studio Culture" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://mouvmidia.com.br/wp-content/uploads/2024/11/about_home01-P8BGSB5-1024x722.jpg"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-brand transition-colors">
              Posicionamento Estratégico
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Estratégia
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Desenvolvimento de soluções sob medida garantindo visibilidade e presença constante no bairro.
            </p>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="AdFlow" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://mouvmidia.com.br/wp-content/uploads/2025/05/HOME-1.png"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-brand transition-colors">
              Tecnologia Acessível
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Sistemas
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Sistemas otimizados para telas e experiências mobile-first de baixo custo e alto retorno.
            </p>
</article>
</div>
<div className="mt-20 border-t border-border pt-8 text-center">
<p className="text-text-tertiary text-xs uppercase tracking-widest">
            Uma seleção de aplicações. Entre em contato para mais detalhes.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-surface border-t border-border" id="pricing">
<div className="max-w-[1440px] mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4 lowercase">
            planos de mídia
          </h2>
<p className="text-lg text-text-secondary font-light">
            Soluções flexíveis construídas para gerar impacto.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border border-border bg-border gap-px">

<div className="bg-background p-10 flex flex-col h-full hover:bg-surface transition-colors duration-200">
<div className="mb-8">
<h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-2">
                Elevadores
              </h3>
<p className="text-xs text-text-tertiary mb-6 min-h-[2.5em]">
                Exposição direta em condomínios locais.
              </p>
<div className="flex items-baseline gap-1">
<span className="text-xs font-normal text-text-tertiary uppercase">
                  Sob
                </span>
<span className="text-4xl font-semibold tracking-tight text-white">
                  Consulta
                </span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Telas Digitais
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Cobertura Segmentada
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Baixo Custo
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Alto Retorno
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-4 border border-border text-white text-xs font-semibold uppercase tracking-widest hover:border-white hover:bg-white hover:text-black transition-all duration-200" href="#contact">
              Saber Mais
            </a>
</div>

<div className="bg-surface-hover p-10 flex flex-col h-full border-border relative">
<div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
<div className="mb-8">
<h3 className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
                Menu Digital
              </h3>
<p className="text-xs text-text-tertiary mb-6 min-h-[2.5em]">
                Para restaurantes, bares e conveniências.
              </p>
<div className="flex items-baseline gap-1">
<span className="text-xs font-normal text-text-tertiary uppercase">
                  Sob
                </span>
<span className="text-4xl font-semibold tracking-tight text-white">
                  Consulta
                </span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Acesso QR Code
              </li>
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Layouts Responsivos
              </li>
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Atualizações em Tempo Real
              </li>
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Redução de Custos
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-4 bg-brand text-black text-xs font-semibold uppercase tracking-widest hover:bg-white transition-all duration-200" href="#contact">
              Solicitar Orçamento
            </a>
</div>

<div className="bg-background p-10 flex flex-col h-full hover:bg-surface transition-colors duration-200">
<div className="mb-8">
<h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-2">
                Vitrines
              </h3>
<p className="text-xs text-text-tertiary mb-6 min-h-[2.5em]">
                Comunicação institucional 24/7.
              </p>
<div className="flex items-baseline gap-1">
<span className="text-xs font-normal text-text-tertiary uppercase">
                  Sob
                </span>
<span className="text-4xl font-semibold tracking-tight text-white">
                  Consulta
                </span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Instalação em Fachada
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Vídeos em Loop
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Maior Engajamento
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<iconify-icon className="text-brand text-base" icon="solar:check-circle-linear"></iconify-icon>
                Conteúdo Personalizado
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-4 border border-border text-white text-xs font-semibold uppercase tracking-widest hover:border-white hover:bg-white hover:text-black transition-all duration-200" href="#contact">
              Saber Mais
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background border-t border-border" id="about">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<div className="inline-flex items-center gap-2 px-0 py-1 text-xs font-semibold uppercase tracking-widest mb-8 text-brand">
<span className="block w-1.5 h-1.5 bg-brand"></span>
              Visão Mouv
            </div>
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-8 lowercase leading-none">
              transformando
              <br/>
<span className="text-text-tertiary">desafios em oportunidades.</span>
</h2>
<div className="space-y-6 text-text-secondary font-light text-lg">
<p>
                Na
                <strong className="text-white">Mouv Mídia</strong>, desenvolvemos soluções visuais inteligentes que unem inovação tecnológica com as reais necessidades do comércio local.
              </p>
<p>
                Atuamos na modernização de comunicação, no design de experiências digitais e na
                <span className="text-white border-b border-brand">
                  capacitação
                </span>
                de pequenos negócios para a
                <span className="text-white border-b border-brand">nova era</span>
                da presença digital.
              </p>
</div>
</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-8">
              Nossos Especialistas
            </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">

<div className="p-8 bg-surface hover:bg-surface-hover transition-colors duration-200">
<h4 className="text-lg font-semibold tracking-tight text-white mb-1">Ricardo Café</h4>
<p className="text-xs font-normal text-text-tertiary uppercase tracking-widest mb-4">
                  CEO
                </p>
<p className="text-xs text-text-secondary leading-relaxed">
                  Lidera a estratégia e visão da Mouv, focando em soluções acessíveis e impacto real no mercado.
                </p>
</div>

<div className="p-8 bg-surface hover:bg-surface-hover transition-colors duration-200">
<h4 className="text-lg font-semibold tracking-tight text-white mb-1">Tiago B. Alexander</h4>
<p className="text-xs font-normal text-text-tertiary uppercase tracking-widest mb-4">
                  Programador
                </p>
<p className="text-xs text-text-secondary leading-relaxed">
                  Arquitetura de sistemas e implementação de tecnologias visuais de alta performance.
                </p>
</div>

<div className="p-8 bg-surface hover:bg-surface-hover transition-colors duration-200">
<h4 className="text-lg font-semibold tracking-tight text-white mb-1">Suelen Koffe</h4>
<p className="text-xs font-normal text-text-tertiary uppercase tracking-widest mb-4">
                  Designer
                </p>
<p className="text-xs text-text-secondary leading-relaxed">
                  Especialista em criar layouts responsivos e experiências visuais atrativas para as telas.
                </p>
</div>

<div className="p-8 bg-surface hover:bg-surface-hover transition-colors duration-200">
<h4 className="text-lg font-semibold tracking-tight text-white mb-1">Code</h4>
<p className="text-xs font-normal text-text-tertiary uppercase tracking-widest mb-4">
                  Desenvolvedor
                </p>
<p className="text-xs text-text-secondary leading-relaxed">
                  Focado em integrações de back-end e estabilidade das plataformas de gestão de conteúdo.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background border-t border-border" id="blog">
<div className="max-w-[1440px] mx-auto px-6">
<div className="mb-16">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4 lowercase">
            insights &amp; novidades
          </h2>
<p className="text-lg text-text-secondary font-light">
            Perspectivas sobre marketing, inovação local e presença digital.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-border bg-border gap-px">

<article className="p-10 bg-background hover:bg-surface transition-colors duration-200 flex flex-col items-start h-full group">
<div className="w-full aspect-video mb-8 bg-surface border border-border overflow-hidden relative">
<img alt="Marketing Local" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mb-6 flex items-center gap-2">
<span className="text-xs font-semibold uppercase tracking-widest text-brand">
                Estratégia
              </span>
<span className="text-xs text-text-tertiary uppercase tracking-widest">
                Out 24, 2023
              </span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-brand transition-colors">
              O Poder do Marketing de Bairro
            </h3>
<p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">
              Como as telas em elevadores residenciais geram mais conversão para pequenos negócios do que tráfego pago genérico.
            </p>
<a className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white hover:text-brand transition-colors" href="#">
              Ler Artigo
              <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</article>

<article className="p-10 bg-background hover:bg-surface transition-colors duration-200 flex flex-col items-start h-full group">
<div className="w-full aspect-video mb-8 bg-surface border border-border overflow-hidden relative">
<img alt="Menu Design" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mb-6 flex items-center gap-2">
<span className="text-xs font-semibold uppercase tracking-widest text-brand">
                Negócios
              </span>
<span className="text-xs text-text-tertiary uppercase tracking-widest">
                Set 12, 2023
              </span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-brand transition-colors">
              Cardápios Dinâmicos
            </h3>
<p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">
              A evolução do papel impresso para os menus interativos e como isso afeta o ticket médio dos restaurantes.
            </p>
<a className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white hover:text-brand transition-colors" href="#">
              Ler Artigo
              <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</article>

<article className="p-10 bg-background hover:bg-surface transition-colors duration-200 flex flex-col items-start h-full group">
<div className="w-full aspect-video mb-8 bg-surface border border-border overflow-hidden relative">
<img alt="Vitrines" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mb-6 flex items-center gap-2">
<span className="text-xs font-semibold uppercase tracking-widest text-brand">
                Inovação
              </span>
<span className="text-xs text-text-tertiary uppercase tracking-widest">
                Ago 05, 2023
              </span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-brand transition-colors">
              Vitrines Institucionais
            </h3>
<p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">
              Por que a fachada da sua loja deve trabalhar 24 horas por dia e como a comunicação visual ativa esse potencial.
            </p>
<a className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white hover:text-brand transition-colors" href="#">
              Ler Artigo
              <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</article>
</div>
</div>
</section>

<footer className="bg-surface pt-24 pb-12 border-t border-border" id="contact">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
<div>
<h2 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight text-white lowercase leading-[0.8]">
              vamos
              <br/>
              construir.
            </h2>
<p className="text-text-secondary text-lg mb-12 max-w-md font-light">
              Soluções Inteligentes para um Mercado em Movimento. Envie-nos uma mensagem para discutirmos o seu projeto.
            </p>
<div className="flex flex-col gap-6">
<a className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors" href="tel:+5511985354876">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
<span className="text-lg">(11) 98535-4876</span>
</a>
<a className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors" href="mailto:contato@mouvmidia.com.br">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
<span className="text-lg">contato@mouvmidia.com.br</span>
</a>
<div className="flex items-center gap-4 text-text-secondary">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
<span className="text-lg">São Paulo, Brasil</span>
</div>
</div>
</div>

<div className="bg-background p-8 border border-border">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                    Nome
                  </label>
<input className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="João Silva" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                    Email
                  </label>
<input className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="joao@empresa.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                  Interesse
                </label>
<div className="relative">
<select className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors cursor-pointer pr-10">
<option>Publicidade em Elevadores</option>
<option>Menu Digital Interativo</option>
<option>Vitrine Institucional</option>
<option>Consultoria Digital</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                  Mensagem
                </label>
<textarea className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="Conte-nos sobre sua necessidade..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black text-xs font-semibold uppercase tracking-widest py-4 hover:bg-brand transition-colors duration-200" type="button">
                Enviar Mensagem
              </button>
</form>
</div>
</div>
<div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="font-semibold text-sm text-white tracking-widest uppercase">
              Mouv Mídia
            </span>
</div>
<p className="text-text-tertiary text-xs uppercase tracking-widest">
            © 2024 Mouv Mídia.
          </p>
<div className="flex gap-6">
<a className="text-text-tertiary hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="text-text-tertiary hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="text-text-tertiary hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
