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



(function() {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  // Configuração atualizada do Lenis para um scroll muito mais rápido
  const lenis = new Lenis({
    lerp: 0.15,
    wheelMultiplier: 1.5,
    smoothWheel: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-child').forEach(el => {
    revealObserver.observe(el);
  });

})();

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
      
<nav className="nav" id="nav">
<div className="nav-inner">
<a className="nav-logo" href="#inicio">VenomW</a>
<div className="nav-links">
<a href="#inicio">Página Inicial</a>
<a href="#como-funciona">Metodologia</a>
<a href="#artigos">Journal</a>
<button className="nav-cta" onclick="window.location.hash='agendar'">Agendar Call</button>
</div>
<button aria-label="Menu" className="hamburger" id="hamburger">
<span></span><span></span><span></span>
</button>
</div>
</nav>
<div className="mobile-menu" id="mobile-menu">
<a className="mobile-link text-xl font-heading font-light" href="#inicio">Página Inicial</a>
<a className="mobile-link text-xl font-heading font-light" href="#como-funciona">Metodologia</a>
<a className="mobile-link text-xl font-heading font-light" href="#artigos">Journal</a>
<button className="nav-cta" onclick="window.location.hash='agendar'; document.getElementById('hamburger').click()">Agendar Call</button>
</div>

<header className="pt-40 md:pt-48 pb-24 relative overflow-hidden" id="inicio">
<div className="container relative z-10 text-center flex flex-col items-center">
<div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(96,232,159,0.2)] bg-[rgba(96,232,159,0.06)] text-xs font-medium text-[var(--accent2)] tracking-wide mb-8 reveal">
<span className="w-1.5 h-1.5 rounded-full bg-[var(--accent2)] animate-[pulse-dot_2s_ease-in-out_infinite]"></span>
      Apenas 3 vagas por mês
    </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light tracking-tight mb-8 text-white leading-[1.1] max-w-4xl reveal">
      Transformamos o problema da sua empresa em um <strong className="text-gradient">ativo milionário</strong>.
    </h1>
<p className="text-[var(--text-muted)] text-base md:text-xl font-light max-w-2xl leading-relaxed mb-10 reveal" style={{transitionDelay: '0.1s'}}>
      Construímos o seu SaaS, Aplicativo ou Sistema com inteligência artificial e marketing embutido. Do zero ao mercado em exatos 30 dias.
    </p>
<div className="flex flex-col sm:flex-row gap-4 reveal" style={{transitionDelay: '0.2s'}}>
<button className="btn-conic text-sm px-8 py-4" onclick="window.location.hash='agendar'">
<span className="shimmer"></span>
        AGENDAR CALL DE QUALIFICAÇÃO
      </button>
<a className="px-8 py-4 rounded-xl text-sm font-medium border border-[var(--border)] text-white hover:bg-[rgba(255,255,255,0.03)] transition-colors flex items-center justify-center gap-2" href="#artigos">
        Ler o Journal <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
</header>

<section className="py-24 relative border-t border-[var(--border)]" id="como-funciona">
<div className="container">
<div className="text-center mb-16 reveal">
<div className="eyebrow justify-center mb-4">A Metodologia VenomW</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light tracking-tight text-white mb-6">Esqueça os meses de espera.</h2>
<p className="text-[var(--text-muted)] text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
        Não operamos como agências tradicionais. Somos sócios de tecnologia focados no resultado e na receita da sua empresa.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-[var(--border)] hover:bg-[rgba(96,232,159,0.03)] transition-colors duration-500 reveal">
<div className="text-4xl font-heading font-light text-[var(--accent2)] opacity-30 mb-4">01</div>
<h3 className="text-xl font-heading text-white mb-3 tracking-tight">Estratégia e Base</h3>
<p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">Mergulhamos no seu negócio. Desenhamos a arquitetura do sistema e a estratégia de marketing antes de escrever qualquer código.</p>
</div>
<div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-[var(--border)] hover:bg-[rgba(96,232,159,0.03)] transition-colors duration-500 reveal" style={{transitionDelay: '0.1s'}}>
<div className="text-4xl font-heading font-light text-[var(--accent2)] opacity-30 mb-4">02</div>
<h3 className="text-xl font-heading text-white mb-3 tracking-tight">Design e Identidade</h3>
<p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">Sua ideia ganha forma. Entregamos protótipos de alta fidelidade e branding completo feito exclusivamente para converter usuários.</p>
</div>
<div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-[var(--border)] hover:bg-[rgba(96,232,159,0.03)] transition-colors duration-500 reveal" style={{transitionDelay: '0.2s'}}>
<div className="text-4xl font-heading font-light text-[var(--accent2)] opacity-30 mb-4">03</div>
<h3 className="text-xl font-heading text-white mb-3 tracking-tight">Desenvolvimento</h3>
<p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">Construção em velocidade máxima. O seu primeiro MVP fica pronto e você já pode testar o sistema no seu próprio celular.</p>
</div>
<div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-[var(--border)] hover:bg-[rgba(96,232,159,0.03)] transition-colors duration-500 reveal" style={{transitionDelay: '0.3s'}}>
<div className="text-4xl font-heading font-light text-[var(--accent2)] opacity-30 mb-4">04</div>
<h3 className="text-xl font-heading text-white mb-3 tracking-tight">Tração e Escala</h3>
<p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">Produto no ar com beta-testers reais. Focamos em retenção, LTV e captação para transform seu problema em receita.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[rgba(255,255,255,0.005)] border-t border-[var(--border)]" id="artigos">

<div className="container max-w-4xl text-center reveal mb-16">
<div className="eyebrow justify-center mb-4">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
      VenomW Journal
    </div>
<h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight mb-6 text-white leading-tight">Bastidores, Estratégias e <strong className="text-gradient">Tecnologia</strong></h2>
<p className="text-[var(--text-muted)] text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
      Artigos e estudos de caso sobre como estamos reconstruindo o padrão de desenvolvimento e escala de negócios digitais no Brasil.
    </p>
</div>

<div className="container">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group flex flex-col h-full p-8 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-[var(--border)] hover:bg-[rgba(96,232,159,0.03)] transition-all duration-500 reveal" href="/journal/problema-2-bilhoes">
<div className="text-[10px] font-mono tracking-widest text-[var(--accent2)] uppercase mb-4 opacity-80">SaaS e Mercado</div>
<h3 className="text-xl font-heading font-light text-white mb-4 tracking-tight group-hover:text-[var(--accent)] transition-colors line-clamp-3">O mercado de SaaS brasileiro tem um problema de R$2 bilhões. A Venomw diz que sabe resolver.</h3>
<p className="text-sm text-[var(--text-muted)] font-light leading-relaxed mb-8 line-clamp-3 flex-grow">Existe um número que poucos empresários brasileiros conhecem, mas que define silenciosamente o destino de milhares de negócios em projetos que não entregam o que prometem...</p>
<div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] group-hover:text-white transition-colors mt-auto uppercase tracking-wide">
          Ler artigo <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>

<a className="group flex flex-col h-full p-8 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-[var(--border)] hover:bg-[rgba(96,232,159,0.03)] transition-all duration-500 reveal" href="/journal/pedro-silvestrini" style={{transitionDelay: '0.1s'}}>
<div className="text-[10px] font-mono tracking-widest text-[var(--accent2)] uppercase mb-4 opacity-80">Bastidores e Liderança</div>
<h3 className="text-xl font-heading font-light text-white mb-4 tracking-tight group-hover:text-[var(--accent)] transition-colors line-clamp-3">De líder mais jovem da Amazon a fundador de apps globais: como Pedro construiu R$8M em vendas</h3>
<p className="text-sm text-[var(--text-muted)] font-light leading-relaxed mb-8 line-clamp-3 flex-grow">Ele criou um projeto que não deveria existir. Uma empresa que entrega aplicativos em 30 dias, recusa a maioria dos clientes e cobra acima de cento e cinquenta mil reais por projeto...</p>
<div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] group-hover:text-white transition-colors mt-auto uppercase tracking-wide">
          Ler artigo <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>

<a className="group flex flex-col h-full p-8 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-[var(--border)] hover:bg-[rgba(96,232,159,0.03)] transition-all duration-500 reveal" href="/journal/samuel-rodrigues" style={{transitionDelay: '0.2s'}}>
<div className="text-[10px] font-mono tracking-widest text-[var(--accent2)] uppercase mb-4 opacity-80">Engenharia e Inovação</div>
<h3 className="text-xl font-heading font-light text-white mb-4 tracking-tight group-hover:text-[var(--accent)] transition-colors line-clamp-3">Samuel Rodrigues: o brasileiro com 10 anos de SaaS que constrói da Bélgica o que o mercado não consegue</h3>
<p className="text-sm text-[var(--text-muted)] font-light leading-relaxed mb-8 line-clamp-3 flex-grow">Numa tarde em Bruxelas, enquanto desenvolvedores brasileiros abrem o notebook, ele já entregou atualizações e revisou MVPs. O fuso horário se tornou uma grande vantagem...</p>
<div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] group-hover:text-white transition-colors mt-auto uppercase tracking-wide">
          Ler artigo <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>
</div>

<div className="mt-14 text-center reveal" style={{transitionDelay: '0.3s'}}>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium border border-[var(--border)] text-white hover:bg-[rgba(255,255,255,0.03)] transition-colors" href="/journal">
        Acessar Journal Completo <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer-grid">
<div className="footer-brand">
<a className="nav-logo" href="#inicio">VenomW</a>
<p>A tecnologia certa para resolver qualquer problema da sua empresa. Construída sob medida, do zero, para o seu negócio.</p>
</div>
</div>
<div className="footer-bottom">
<span>© <span id="year"></span> VenomW. Todos os direitos reservados.</span>
<div className="flex gap-6">
<span>CNPJ: 00.000.000/0001-00</span>
</div>
</div>
</div>
</footer>





    </>
  );
}
