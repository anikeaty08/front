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



    // Initialize Icons
    lucide.createIcons();

    // Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    menuToggle.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        mobileMenu.classList.remove('translate-x-full');
      } else {
        mobileMenu.classList.add('translate-x-full');
      }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('translate-x-full');
      });
    });

    // Accordion Logic
    const accordions = document.querySelectorAll('.accordion-btn');
    accordions.forEach(acc => {
      acc.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector('[data-lucide="plus"]');

        content.classList.toggle('hidden');

        if (content.classList.contains('hidden')) {
          icon.style.transform = 'rotate(0deg)';
          icon.classList.remove('text-amber-500');
        } else {
          icon.style.transform = 'rotate(45deg)';
          icon.classList.add('text-amber-500');
        }
      });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Scroll to Top Logic
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollToTopBtn.classList.remove('translate-y-20', 'opacity-0');
        scrollToTopBtn.classList.add('translate-y-0', 'opacity-100');
      } else {
        scrollToTopBtn.classList.add('translate-y-20', 'opacity-0');
        scrollToTopBtn.classList.remove('translate-y-0', 'opacity-100');
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-semibold tracking-tighter text-blue-900 uppercase">
          Brenda<span className="text-amber-500">Jafrudy</span>
</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-blue-900 hover:text-amber-600 transition-colors" href="tel:+5544999324635">
<i className="w-4 h-4" data-lucide="phone"></i> (44) 99932-4635
        </a>
<a className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-amber-500/30" href="#contact">
          Agendar Consulta Gratuita
        </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" id="menu-toggle" type="button">
<span className="sr-only">Abrir menu principal</span>
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a className="block py-2 px-3 text-slate-600 hover:text-blue-900 md:p-0 transition-colors" href="#services">Serviços</a></li>
<li><a className="block py-2 px-3 text-slate-600 hover:text-blue-900 md:p-0 transition-colors" href="#process">Processo</a></li>
<li><a className="block py-2 px-3 text-slate-600 hover:text-blue-900 md:p-0 transition-colors" href="#about">Sobre</a></li>
<li><a className="block py-2 px-3 text-slate-600 hover:text-blue-900 md:p-0 transition-colors" href="#resources">Recursos</a></li>
</ul>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white transform translate-x-full transition-transform duration-300 md:hidden pt-24 px-6" id="mobile-menu">
<div className="flex flex-col space-y-6 text-lg font-medium text-blue-900">
<a className="border-b border-slate-100 pb-2" href="#services">Serviços</a>
<a className="border-b border-slate-100 pb-2" href="#process">Processo</a>
<a className="border-b border-slate-100 pb-2" href="#about">Sobre Brenda</a>
<a className="border-b border-slate-100 pb-2" href="#resources">Recursos</a>
<a className="flex items-center gap-2 text-amber-600" href="https://wa.me/5544999324635" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle"></i> WhatsApp
      </a>
</div>
</div>

<section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
<div className="space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-xs font-medium tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Licença M17000206
        </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
          Vá além de um único banco. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Explore todas as suas opções de hipoteca.</span>
</h1>
<p className="text-lg text-slate-300 max-w-lg font-light leading-relaxed">
          Agente de Hipoteca ajudando compradores de primeira viagem, proprietários 55+ e autônomos a garantir o melhor financiamento, alinhado com a sua história.
        </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:ring-amber-500/30 transition-all shadow-lg shadow-amber-500/20" href="#contact">
            Agendar Consulta Gratuita
          </a>
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white border border-slate-400 rounded-lg hover:bg-white/10 focus:ring-4 focus:ring-slate-500/30 transition-all" href="#process">
            Fazer Pré-Aprovação Agora
          </a>
</div>
<div className="pt-6 flex items-center gap-6 text-slate-400 text-sm border-t border-blue-800/50">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-400" data-lucide="shield-check"></i>
<span>15+ anos</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-400" data-lucide="building-2"></i>
<span>100+ credores</span>
</div>
</div>
</div>
<div className="relative h-full flex justify-center md:justify-end reveal delay-200">
<div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/50 border border-white/10 bg-slate-800">
<img alt="Brenda Jafrudy Agente de Hipoteca" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iLcy23XY9dHWgd0toyUV/media/6939d4c6f282864c5bffbb42.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-lg font-semibold">Brenda Jafrudy</p>
<p className="text-sm text-slate-300">Agente de Hipoteca Nível 2</p>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
<i className="w-6 h-6" data-lucide="chevron-down"></i>
</div>
</section>

<section className="bg-slate-50 border-b border-slate-200 py-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center justify-center text-center gap-2 reveal">
<i className="w-6 h-6 text-blue-900 mb-1" data-lucide="award"></i>
<h3 className="font-semibold text-blue-900 text-lg">15+ anos</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Experiência</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2 reveal delay-100">
<i className="w-6 h-6 text-blue-900 mb-1" data-lucide="file-check"></i>
<h3 className="font-semibold text-blue-900 text-lg">M17000206</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Agente Licenciada</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2 reveal delay-200">
<i className="w-6 h-6 text-blue-900 mb-1" data-lucide="landmark"></i>
<h3 className="font-semibold text-blue-900 text-lg">100+ credores</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Parceiros</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2 reveal delay-300">
<i className="w-6 h-6 text-blue-900 mb-1" data-lucide="briefcase"></i>
<h3 className="font-semibold text-blue-900 text-lg">Experiência bancária</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Visão de mercado</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative reveal">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full blur-2xl z-0"></div>
<img alt="Casal preocupado com finanças" className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-6 reveal delay-200">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900">Você está se limitando às taxas de um único banco?</h2>
<p className="text-lg text-slate-600 font-light">
            Muitas pessoas vão direto ao banco principal e não percebem que podem estar pagando mais caro, ou até correndo risco de reprovação por políticas rígidas.
          </p>
<ul className="space-y-4 pt-2">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" data-lucide="x-circle"></i>
<span className="text-slate-600">Perder taxas mais baixas disponíveis em outros canais.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" data-lucide="x-circle"></i>
<span className="text-slate-600">Encarar termos e multas complexas sem suporte.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" data-lucide="x-circle"></i>
<span className="text-slate-600">Incerteza para aprovar sendo autônomo(a) ou com crédito comprometido.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" data-lucide="x-circle"></i>
<span className="text-slate-600">Perder tempo enviando propostas para várias instituições separadamente.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 space-y-8 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900">Eu comparo 100+ credores para você conseguir o melhor negócio</h2>
<p className="text-lg text-slate-600 font-light">
            Como especialista independente, eu trabalho para <i>você</i>, não para o banco. Eu uso minha rede de parceiros para encontrar a melhor solução para o seu perfil.
          </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-blue-900">Acesso amplo</h4>
<p className="text-slate-600 text-sm mt-1">Bancos, cooperativas, monolines e opções privadas.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700">
<i className="w-6 h-6" data-lucide="user-check"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-blue-900">Orientação personalizada</h4>
<p className="text-slate-600 text-sm mt-1">Estratégias para autônomos, crédito comprometido e primeira compra.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-blue-900">Suporte contínuo</h4>
<p className="text-slate-600 text-sm mt-1">Apoio em renovação, refinanciamento e dúvidas após o fechamento.</p>
</div>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-sm px-6 py-3 transition-colors shadow-md" href="#process">
              Veja como funciona <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="order-1 md:order-2 relative reveal delay-200">
<img alt="Fechamento de contrato com aperto de mãos" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Soluções para cada momento</h2>
<p className="text-blue-200 font-light text-lg">Seja para começar agora ou para aproveitar sua equidade, existe um caminho ideal para você.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 reveal">
<div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="home"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Primeira compra</h3>
<p className="text-blue-200 text-sm leading-relaxed mb-6">
            Compre com confiança. Apoio em pré-aprovação, entrada e explicação clara de cada etapa.
          </p>
<a className="text-amber-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
            Saiba mais <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 reveal delay-100">
<div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="armchair"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Proprietários 55+</h3>
<p className="text-blue-200 text-sm leading-relaxed mb-6">
            Desbloqueie a equidade do seu imóvel sem vender. Soluções de hipoteca reversa, com orientação completa.
          </p>
<a className="text-amber-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#reverse-mortgage">
            Saiba mais <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 reveal delay-200">
<div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Autônomos e casos especiais</h3>
<p className="text-blue-200 text-sm leading-relaxed mb-6">
            Crédito comprometido? Renda variável? Separação? Eu conecto você a credores que analisam seu cenário completo.
          </p>
<a className="text-amber-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
            Saiba mais <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-12 reveal">Soluções completas em hipoteca</h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-left bg-slate-50 p-8 rounded-2xl border border-slate-100 reveal delay-100">
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Pré-aprovação e compra</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Refinanciamento e renovação</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Programas para primeira compra</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Financiamento para investimento</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Hipoteca reversa (55+)</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Consolidação de dívidas</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Hipoteca para autônomos</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Linha de crédito com garantia (HELOC)</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Financiamento privado</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Soluções para crédito comprometido</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Separação/Divórcio</span></div>
<div className="flex items-center gap-3"><i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i><span className="text-slate-700">Reforma e melhorias</span></div>
</div>
<div className="mt-10 reveal">
<a className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 transition-all shadow-md" href="#contact">
          Agendar uma consulta
        </a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-4">Seu caminho até a aprovação, simplificado</h2>
<p className="text-slate-600 max-w-2xl mx-auto">Da primeira conversa até o fechamento, eu cuido do trabalho pesado.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">
<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center reveal delay-100">
<div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<i className="w-8 h-8 text-amber-500" data-lucide="message-circle"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Consulta gratuita</h3>
<p className="text-sm text-slate-500 leading-relaxed">Entendemos seus objetivos e mapeamos possibilidades.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center reveal delay-200">
<div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<i className="w-8 h-8 text-amber-500" data-lucide="search"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Pesquisa de credores</h3>
<p className="text-sm text-slate-500 leading-relaxed">Comparo opções para buscar as melhores taxas e condições.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center reveal delay-300">
<div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<i className="w-8 h-8 text-amber-500" data-lucide="file-signature"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Proposta e aprovação</h3>
<p className="text-sm text-slate-500 leading-relaxed">Organizo documentos e acompanho até a aprovação.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center reveal delay-400">
<div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<i className="w-8 h-8 text-amber-500" data-lucide="key"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Fechamento e suporte</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fechamento tranquilo e suporte para próximas oportunidades.</p>
</div>
</div>
</div>
</section>

<section className="py-0 bg-blue-900 text-white overflow-hidden" id="about">
<div className="grid md:grid-cols-2">
<div className="relative h-96 md:h-auto">
<img alt="Brenda Jafrudy" className="absolute inset-0 w-full h-full object-cover object-top" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iLcy23XY9dHWgd0toyUV/media/6939d4c6f282864c5bffbb42.jpg"/>
<div className="absolute inset-0 bg-blue-900/20"></div>
</div>
<div className="p-12 md:p-20 flex flex-col justify-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Por que trabalhar com a Brenda?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<i className="w-6 h-6 text-amber-400 flex-shrink-0" data-lucide="map-pin"></i>
<div>
<h4 className="font-medium text-lg">Atendimento em Maringá - PR</h4>
<p className="text-blue-200 text-sm font-light mt-1">Orientação com foco na sua realidade e objetivos.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-amber-400 flex-shrink-0" data-lucide="graduation-cap"></i>
<div>
<h4 className="font-medium text-lg">Base sólida em finanças</h4>
<p className="text-blue-200 text-sm font-light mt-1">Formação e experiência para orientar decisões com clareza.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-amber-400 flex-shrink-0" data-lucide="lightbulb"></i>
<div>
<h4 className="font-medium text-lg">Abordagem educativa</h4>
<p className="text-blue-200 text-sm font-light mt-1">Explico cada passo para você decidir com segurança.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-amber-400 flex-shrink-0" data-lucide="heart"></i>
<div>
<h4 className="font-medium text-lg">Defesa do seu interesse</h4>
<p className="text-blue-200 text-sm font-light mt-1">Eu negocio e acompanho como se fosse meu próprio processo.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-900 bg-amber-400 rounded-lg hover:bg-amber-300 transition-all" href="#contact">
            Agendar Consulta Gratuita
          </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 text-center mb-16 reveal">O que os clientes dizem</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 reveal">
<div className="flex gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 italic text-sm mb-6 leading-relaxed">
            "A Brenda tornou a nossa primeira compra muito mais tranquila. Ela explicou tudo com clareza e encontrou condições melhores do que o banco ofereceu. Fomos apoiados em cada etapa."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">SM</div>
<div>
<p className="text-sm font-semibold text-blue-900">Sarah &amp; Michael T.</p>
<p className="text-xs text-slate-500">Primeira compra</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 reveal delay-100">
<div className="flex gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 italic text-sm mb-6 leading-relaxed">
            "Como autônomo, eu achava que seria impossível aprovar. A Brenda soube exatamente quais credores procurar e conseguiu a aprovação rápido. A experiência dela fez toda diferença."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">DL</div>
<div>
<p className="text-sm font-semibold text-blue-900">David L.</p>
<p className="text-xs text-slate-500">Autônomo</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 reveal delay-200">
<div className="flex gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 italic text-sm mb-6 leading-relaxed">
            "Meus pais tinham dúvidas sobre hipoteca reversa. A Brenda foi muito paciente, explicou tudo e trouxe segurança para a família. Foi uma orientação completa."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">JK</div>
<div>
<p className="text-sm font-semibold text-blue-900">Jennifer K.</p>
<p className="text-xs text-slate-500">Família de cliente 55+</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="resources">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-12 text-center reveal">Recursos gratuitos para você decidir melhor</h2>
<div className="grid md:grid-cols-3 gap-8">
<a className="group block p-6 border border-slate-200 rounded-xl hover:border-amber-400 transition-colors reveal" href="#">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="calculator"></i>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Calculadoras</h3>
<p className="text-sm text-slate-500 mb-4">Estime parcelas e compare cenários para planejar seu orçamento.</p>
<span className="text-amber-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Usar calculadoras <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
<a className="group block p-6 border border-slate-200 rounded-xl hover:border-amber-400 transition-colors reveal delay-100" href="#">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="book-open"></i>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Blog educativo</h3>
<p className="text-sm text-slate-500 mb-4">Conteúdo sobre taxas, pré-aprovação, estratégias e mais.</p>
<span className="text-amber-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Ler blog <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
<a className="group block p-6 border border-slate-200 rounded-xl hover:border-amber-400 transition-colors reveal delay-200" href="#">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="monitor-play"></i>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Webinars gratuitos</h3>
<p className="text-sm text-slate-500 mb-4">Participe ao vivo, aprenda e tire dúvidas diretamente comigo.</p>
<span className="text-amber-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Ver agenda <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-8 text-center reveal">Dúvidas frequentes</h2>
<div className="space-y-4 reveal delay-100" id="accordion">
<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors accordion-btn">
<span>O que um(a) agente de hipoteca faz de diferente de um banco?</span>
<i className="w-5 h-5 text-slate-400 transform transition-transform duration-200" data-lucide="plus"></i>
</button>
<div className="hidden px-5 pb-5 pt-0 text-sm text-slate-600 accordion-content">
            Enquanto o banco oferece apenas os produtos da própria instituição, eu posso comparar opções com diversos credores e encontrar taxas e condições adequadas ao seu perfil, em vez de encaixar você em uma única política.
          </div>
</div>
<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors accordion-btn">
<span>Quanto custa usar um(a) agente de hipoteca?</span>
<i className="w-5 h-5 text-slate-400 transform transition-transform duration-200" data-lucide="plus"></i>
</button>
<div className="hidden px-5 pb-5 pt-0 text-sm text-slate-600 accordion-content">
            Na maioria dos casos, o atendimento não tem custo para você: a remuneração ocorre via credor escolhido. Em situações específicas (como operações privadas), eventuais taxas seriam informadas previamente.
          </div>
</div>
<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors accordion-btn">
<span>Você ajuda quem tem crédito comprometido ou é autônomo(a)?</span>
<i className="w-5 h-5 text-slate-400 transform transition-transform duration-200" data-lucide="plus"></i>
</button>
<div className="hidden px-5 pb-5 pt-0 text-sm text-slate-600 accordion-content">
            Sim. Eu trabalho com alternativas além do padrão bancário tradicional, avaliando seu cenário completo e buscando opções viáveis para aprovação.
          </div>
</div>
<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors accordion-btn">
<span>Quais documentos eu preciso enviar?</span>
<i className="w-5 h-5 text-slate-400 transform transition-transform duration-200" data-lucide="plus"></i>
</button>
<div className="hidden px-5 pb-5 pt-0 text-sm text-slate-600 accordion-content">
            Normalmente: comprovantes de renda, documentos pessoais e comprovação de recursos (entrada). Dependendo do caso (ex.: autônomo), pode haver documentação adicional. Eu envio uma lista objetiva para facilitar.
          </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-8 text-center reveal">Tenha uma noção de valores</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 reveal">
<h3 className="text-xl font-semibold text-blue-900 mb-6">Calculadora de compra</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Valor do imóvel</label>
<div className="h-10 bg-white border border-slate-300 rounded flex items-center px-3 text-slate-400">R$ 800.000</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Entrada</label>
<div className="h-10 bg-white border border-slate-300 rounded flex items-center px-3 text-slate-400">R$ 160.000 (20%)</div>
</div>
<button className="w-full h-10 bg-blue-900 text-white rounded font-medium text-sm mt-2">Calcular parcelas</button>
<div className="pt-4 border-t border-slate-200 text-center">
<p className="text-xs text-slate-500">Parcela mensal estimada</p>
<p className="text-2xl font-bold text-blue-900">R$ 3.845*</p>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 reveal delay-100">
<h3 className="text-xl font-semibold text-blue-900 mb-6">Economia no refinanciamento</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Saldo atual</label>
<div className="h-10 bg-white border border-slate-300 rounded flex items-center px-3 text-slate-400">R$ 450.000</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Valor adicional</label>
<div className="h-10 bg-white border border-slate-300 rounded flex items-center px-3 text-slate-400">R$ 50.000</div>
</div>
<button className="w-full h-10 bg-amber-500 text-white rounded font-medium text-sm mt-2">Verificar elegibilidade</button>
<div className="pt-4 border-t border-slate-200 text-center">
<p className="text-xs text-slate-500">Resultado</p>
<p className="text-lg font-semibold text-slate-700">Fale comigo para um cálculo preciso</p>
</div>
</div>
</div>
</div>
<div className="text-center mt-10 reveal">
<a className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700" href="#contact">
          Agende uma conversa para revisar seus números <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
<p className="text-xs text-slate-400 mt-2">*Estimativas apenas. Sujeito a análise.</p>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50/50" id="reverse-mortgage">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<img alt="Casal de idosos feliz" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-6 reveal delay-200">
<div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full uppercase tracking-wide">Solução 55+</div>
<h2 className="text3xl md:text-4xl font-semibold tracking-tight text-blue-900">55+: desbloqueie a equidade do seu imóvel</h2>
<h3 className="text-xl text-slate-600 font-light">Acesse dinheiro sem vender o imóvel e sem parcelas mensais.</h3>
<ul className="space-y-4 pt-2">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1" data-lucide="check"></i>
<span className="text-slate-700">Permaneça no imóvel enquanto acessa a equidade.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1" data-lucide="check"></i>
<span className="text-slate-700">Sem pagamentos mensais de hipoteca.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1" data-lucide="check"></i>
<span className="text-slate-700">Recursos para aposentadoria, reformas ou ajudar a família.</span>
</li>
</ul>
<div className="pt-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-all shadow-md" href="#contact">
              Quero entender a hipoteca reversa
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-900 text-white relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Vamos encontrar a melhor solução para você</h2>
<p className="text-xl text-blue-200 font-light mb-10 max-w-2xl mx-auto">
        Agende uma consulta gratuita e sem compromisso. Eu analiso seu cenário e mostro as melhores opções alinhadas ao seu objetivo.
      </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 text-lg font-medium text-blue-900 bg-amber-400 rounded-lg hover:bg-amber-300 focus:ring-4 focus:ring-amber-500/30 transition-all shadow-lg shadow-amber-500/20" href="https://wa.me/5544999324635" rel="noopener noreferrer" target="_blank">
          Falar no WhatsApp
        </a>
<a className="inline-flex justify-center items-center px-8 py-4 text-lg font-medium text-white border border-blue-400 rounded-lg hover:bg-blue-800 transition-all" href="tel:+5544999324635">
          Ligar agora: (44) 99932-4635
        </a>
</div>
<div className="mt-8 text-sm text-blue-300">
<p>Sem pressão. Sem obrigação. Só orientação honesta.</p>
<p className="mt-1 opacity-70">Seg–Sex 9h–20h</p>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 mb-12">
<div>
<span className="text-xl font-semibold tracking-tighter text-white uppercase block mb-6">
            Brenda<span className="text-amber-500">Jafrudy</span>
</span>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="mail"></i>
<a className="hover:text-white transition-colors" href="mailto:mortgages@brendajafrudy.com">mortgages@brendajafrudy.com</a>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="phone"></i>
<a className="hover:text-white transition-colors" href="tel:+5544999324635">(44) 99932-4635</a>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="message-circle"></i>
<a className="hover:text-white transition-colors" href="https://wa.me/5544999324635" rel="noopener noreferrer" target="_blank">WhatsApp: (44) 99932-4635</a>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="map-pin"></i>
<span>Maringá - PR</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="clock"></i>
<span>Seg–Sex: 9:00 - 20:00</span>
</li>
</ul>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Links rápidos</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-amber-500 transition-colors" href="#services">Serviços</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#resources">Calculadoras</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#resources">Blog &amp; Webinars</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#contact">Agendar</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#about">Sobre</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Recursos</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-amber-500 transition-colors" href="#">Guia para primeira compra</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#reverse-mortgage">Hipoteca reversa</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Política de privacidade</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<div className="text-center md:text-left space-y-1">
<p>© <span id="year"></span> Brenda Jafrudy. Todos os direitos reservados.</p>
<p>
            Criado por
            <a className="text-slate-300 hover:text-white transition-colors underline underline-offset-4" href="https://webstudiomga.vercel.app/" rel="noopener noreferrer" target="_blank">
              WebStudio
            </a>
</p>
</div>
<div className="text-center md:text-right">
<p>Brenda Jafrudy, Agente de Hipoteca Nível 2 - Licença M17000206</p>
<p>Tango Financial (ON) #13691</p>
<p>Maringá - PR</p>
</div>
</div>
</div>
</footer>

<button aria-label="Voltar ao topo" className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-900 text-white shadow-lg translate-y-20 opacity-0 transition-all duration-300 hover:bg-amber-500 z-50" id="scrollToTop">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</button>


    </>
  );
}
