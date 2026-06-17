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



      lucide.createIcons();
    


      gsap.registerPlugin(ScrollTrigger);

      // Hero Section
      const heroTl = gsap.timeline();
      heroTl.from(".hero-content > *", {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out"
      })
      .from(".hero-illustration", {
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
      }, "-=0.8");

      // Hero Floating Icons
      gsap.to(".hero-icon-float", {
          y: -15,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
              each: 0.5,
              from: "random"
          }
      });

      // Infinite Logo Marquee
      gsap.to(".logo-track", {
          xPercent: -50,
          ease: "none",
          duration: 30,
          repeat: -1
      });

      // Services Cards Stagger
      gsap.from(".services-grid > div", {
          scrollTrigger: {
              trigger: ".services-grid",
              start: "top 85%"
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
      });

      // CTA Section
      gsap.from(".cta-section", {
          scrollTrigger: {
              trigger: ".cta-section",
              start: "top 80%"
          },
          scale: 0.98,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
      });

      // Case Studies
      gsap.from(".case-studies-card", {
          scrollTrigger: {
              trigger: ".case-studies-card",
              start: "top 85%"
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
      });

      // Hover scale effect for Service Cards
      document.querySelectorAll(".services-grid > div").forEach(card => {
          card.addEventListener("mouseenter", () => gsap.to(card, { y: -5, duration: 0.3, ease: "power1.out" }));
          card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, duration: 0.3, ease: "power1.out" }));
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
      

<nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
<div className="flex items-center gap-2">

<div className="relative w-7 h-7 flex items-center justify-center">
<div className="absolute w-full h-1 bg-blue-600 rotate-45"></div>
<div className="absolute w-full h-1 bg-blue-600 -rotate-45"></div>
<div className="absolute w-2 h-2 bg-[#00CC66] rounded-full z-10"></div>
</div>
<span className="text-2xl font-bold tracking-tight display-font">
          INTEGRA.AI
        </span>
</div>
<div className="hidden lg:flex items-center gap-10 text-sm font-medium text-zinc-600">
<a className="hover:text-[#0066FF] transition-colors" href="#">Soluções</a>
<a className="hover:text-[#0066FF] transition-colors" href="#">Preços</a>
<a className="hover:text-[#0066FF] transition-colors" href="#">Parceiros</a>
<a className="hover:text-[#0066FF] transition-colors" href="#">Blog</a>
<a className="text-zinc-900 hover:text-[#0066FF] transition-colors" href="#">Login</a>
<a className="bg-[#0066FF] border border-[#0066FF] rounded-lg px-5 py-2.5 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20" href="#">
          Começar Grátis
        </a>
</div>

<button className="lg:hidden">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</nav>

<section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-xl hero-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-xs font-semibold mb-6 border border-blue-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]"></span>
</span>
            Nova Integração Amazon Disponível
          </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-zinc-900">
            Venda Inteligente em Todos os Marketplaces
          </h1>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-md">
            Sincronize estoque, otimize anúncios e cresça com IA. 
            Tudo em um só lugar, sem complicação.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#0066FF] text-white text-lg font-medium px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
              Começar sem cartão
            </button>
<button className="bg-white border border-zinc-200 text-zinc-900 text-lg font-medium px-8 py-4 rounded-xl hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle"></i>
              Ver Demo
            </button>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-zinc-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-zinc-400 border-2 border-white"></div>
</div>
<p>Usado por +500 vendedores</p>
</div>
</div>

<div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center hidden md:flex hero-illustration">

<div className="absolute inset-0 flex items-center justify-center">

<div className="absolute w-[80%] h-[80%] border border-blue-100 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-[60%] h-[60%] border border-blue-200 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="absolute top-10 right-20 bg-white shadow-lg p-3 rounded-xl border border-zinc-100 hero-icon-float z-20">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#00CC66]"></div>
<span className="text-xs font-bold font-mono">R$ +15k</span>
</div>
</div>
<div className="absolute bottom-20 left-10 bg-zinc-900 text-white p-3 rounded-xl hero-icon-float z-20" style={{animationDelay: '1s'}}>
<i className="w-6 h-6 text-[#0066FF]" data-lucide="package-check"></i>
</div>
<div className="absolute top-1/2 right-0 bg-[#FF6600] text-white p-3 rounded-xl hero-icon-float z-20" style={{animationDelay: '0.5s'}}>
<i className="w-5 h-5" data-lucide="zap"></i>
</div>

<div className="relative z-10 hover:scale-105 transition-transform duration-500">

<div className="w-40 h-40 bg-[#0066FF] rounded-3xl rotate-45 flex items-center justify-center shadow-2xl shadow-blue-500/40 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-400 opacity-90"></div>
<i className="w-16 h-16 text-white -rotate-45 relative z-10" data-lucide="cpu"></i>

<div className="absolute top-0 left-0 w-full h-1 bg-white/30 blur-sm animate-[ping_2s_linear_infinite]"></div>
</div>

<div className="absolute -top-12 -right-4 w-16 h-16 bg-white border-2 border-zinc-100 rounded-2xl flex items-center justify-center shadow-lg">
<i className="w-6 h-6 text-zinc-900" data-lucide="shopping-bag"></i>
</div>
<div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white border-2 border-zinc-100 rounded-2xl flex items-center justify-center shadow-lg">
<i className="w-8 h-8 text-[#00CC66]" data-lucide="bar-chart-2"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-10 overflow-hidden border-y border-zinc-100 bg-zinc-50/50">
<p className="text-center text-sm text-zinc-400 mb-8 font-medium">INTEGRAÇÃO NATIVA COM OS MAIORES PLAYERS</p>
<div className="logo-track flex gap-20 min-w-max items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-2xl font-bold font-sans tracking-tight text-[#FFE600] drop-shadow-sm" style={{WebkitTextStroke: '1px #d1a000'}}>Mercado Livre</span>
<span className="text-2xl font-bold font-sans tracking-tight text-zinc-900">amazon</span>
<span className="text-2xl font-bold font-sans tracking-tighter text-[#ee4d2d]">Shopee</span>
<span className="text-2xl font-bold font-sans tracking-tight text-[#0086FF]">Magalu</span>
<span className="text-2xl font-bold font-serif italic text-black">SHEIN</span>
<span className="text-2xl font-bold font-sans tracking-tight text-[#FF4747]">AliExpress</span>

<span className="text-2xl font-bold font-sans tracking-tight text-[#FFE600] drop-shadow-sm" style={{WebkitTextStroke: '1px #d1a000'}}>Mercado Livre</span>
<span className="text-2xl font-bold font-sans tracking-tight text-zinc-900">amazon</span>
<span className="text-2xl font-bold font-sans tracking-tighter text-[#ee4d2d]">Shopee</span>
<span className="text-2xl font-bold font-sans tracking-tight text-[#0086FF]">Magalu</span>
<span className="text-2xl font-bold font-serif italic text-black">SHEIN</span>
<span className="text-2xl font-bold font-sans tracking-tight text-[#FF4747]">AliExpress</span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-end mb-16 justify-between">
<div className="max-w-2xl">
<h2 className="bg-blue-50 text-[#0066FF] px-2 py-1 rounded-md text-sm font-bold tracking-wide uppercase inline-block mb-4">
            Nossas Soluções
          </h2>
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900">
             Automatize. Otimize. Cresça.
          </h3>
</div>
<p className="max-w-md text-lg text-zinc-600">
          A plataforma completa para transformar sua operação de vendas em uma máquina escalável e data-driven.
        </p>
</div>
<div className="grid md:grid-cols-2 gap-6 services-grid">

<div className="bg-zinc-50 p-10 rounded-[32px] border border-zinc-200 hover:border-[#0066FF] transition-colors card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-white border border-zinc-200 px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit shadow-sm">
                Automação de
              </span>
<span className="bg-white border border-zinc-200 px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit shadow-sm">
                Estoque
              </span>
</div>
<div className="hidden sm:block">
<div className="relative w-24 h-24">
<div className="absolute inset-0 bg-white rounded-xl border border-zinc-200 flex items-center justify-center">
<i className="w-10 h-10 text-[#00CC66]" data-lucide="refresh-cw"></i>
</div>
<div className="absolute -top-2 -right-2 bg-[#00CC66] text-white text-[10px] font-bold px-2 py-1 rounded-full">AUTO</div>
</div>
</div>
</div>
<div className="mt-8">
<p className="text-zinc-500 mb-6">Sincronização em tempo real entre todos os canais. Diga adeus ao "furo de estoque".</p>
<div className="flex items-center gap-3 cursor-pointer group text-zinc-900 font-medium">
<div className="bg-zinc-900 text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#0066FF] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
<span className="group-hover:text-[#0066FF] transition-colors">Saiba mais</span>
</div>
</div>
</div>

<div className="bg-[#0066FF] p-10 rounded-[32px] border border-blue-700 card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-blue-500/40 backdrop-blur-sm text-white px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit border border-blue-400/50">
                Análise de
              </span>
<span className="bg-blue-500/40 backdrop-blur-sm text-white px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit border border-blue-400/50">
                Concorrência IA
              </span>
</div>
<div className="hidden sm:block">
<div className="w-24 h-24 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
<i className="w-10 h-10 text-white" data-lucide="bot"></i>
</div>
</div>
</div>
<div className="mt-8">
<p className="text-blue-100 mb-6">Nossa IA monitora preços, sugere otimizações e cria descrições que convertem.</p>
<div className="flex items-center gap-3 cursor-pointer group text-white font-medium">
<div className="bg-white text-[#0066FF] rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
<span>Ver demonstração</span>
</div>
</div>
</div>

<div className="bg-zinc-900 p-10 rounded-[32px] border border-black card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-zinc-800 text-white px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit border border-zinc-700">
                Gestão
              </span>
<span className="bg-zinc-800 text-white px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit border border-zinc-700">
                Unificada
              </span>
</div>
<div className="hidden sm:block">
<i className="w-12 h-12 text-zinc-500" data-lucide="layers"></i>
</div>
</div>
<div className="mt-8">
<p className="text-zinc-400 mb-6">Controle 10, 100 ou 1.000 anúncios com a mesma facilidade. Um painel para tudo.</p>
<div className="flex items-center gap-3 cursor-pointer group text-white font-medium">
<div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#00CC66] group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
<span>Explorar recursos</span>
</div>
</div>
</div>

<div className="bg-zinc-50 p-10 rounded-[32px] border border-zinc-200 hover:border-[#00CC66] transition-colors card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-white border border-zinc-200 px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit shadow-sm">
                Proteção de
              </span>
<span className="bg-white border border-zinc-200 px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit shadow-sm">
                Reputação
              </span>
</div>
<div className="hidden sm:block">
<i className="w-12 h-12 text-[#00CC66]" data-lucide="shield-check"></i>
</div>
</div>
<div className="mt-8">
<p className="text-zinc-500 mb-6">Monitore métricas vitais e evite suspensões. Identifique problemas antes que virem crises.</p>
<div className="flex items-center gap-3 cursor-pointer group text-zinc-900 font-medium">
<div className="bg-zinc-900 text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#00CC66] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
<span className="group-hover:text-[#00CC66] transition-colors">Saiba mais</span>
</div>
</div>
</div>

<div className="bg-[#00CC66] p-10 rounded-[32px] border border-green-600 card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-green-500/40 backdrop-blur-sm text-white px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit border border-green-400/50">
                Analytics &amp;
              </span>
<span className="bg-green-500/40 backdrop-blur-sm text-white px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit border border-green-400/50">
                ROI
              </span>
</div>
<div className="hidden sm:block">
<div className="bg-white rounded-lg p-2 w-24 h-24 flex items-end gap-1 justify-center pb-4">
<div className="w-3 h-[40%] bg-zinc-200 rounded-t"></div>
<div className="w-3 h-[60%] bg-zinc-300 rounded-t"></div>
<div className="w-3 h-[85%] bg-[#00CC66] rounded-t"></div>
</div>
</div>
</div>
<div className="mt-8">
<p className="text-green-50 mb-6">Veja exatamente o que vende e quanto lucra. Dados acionáveis para crescer.</p>
<div className="flex items-center gap-3 cursor-pointer group text-white font-medium">
<div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
<span>Ver relatórios</span>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-[32px] border border-zinc-200 hover:border-[#FF6600] transition-colors card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-zinc-50 border border-zinc-100 px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit">
                Ads
              </span>
<span className="bg-zinc-50 border border-zinc-100 px-3 py-1 text-xl lg:text-2xl font-medium rounded-lg block w-fit">
                Inteligentes
              </span>
</div>
<div className="hidden sm:block">
<div className="relative w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center">
<i className="w-10 h-10 text-[#FF6600]" data-lucide="target"></i>
</div>
</div>
</div>
<div className="mt-8">
<p className="text-zinc-500 mb-6">Campanhas otimizadas automaticamente para o maior ROAS possível.</p>
<div className="flex items-center gap-3 cursor-pointer group text-zinc-900 font-medium">
<div className="bg-zinc-900 text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#FF6600] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
<span className="group-hover:text-[#FF6600] transition-colors">Saiba mais</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="bg-[#0066FF] rounded-[40px] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between cta-section text-white">
<div className="max-w-lg z-10">
<h3 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Você está deixando dinheiro na mesa?
          </h3>
<p className="text-lg text-blue-100 mb-10 leading-relaxed">
            Pare de perder vendas por falta de estoque ou preços desatualizados. 
            Comece a operar como um gigante do e-commerce hoje.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-[#0066FF] text-lg font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
               Ver Planos e Preços
             </button>
<button className="bg-transparent border border-white text-white text-lg font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
               Falar com consultor
             </button>
</div>
</div>

<div className="relative w-80 h-80 mt-12 lg:mt-0 lg:absolute lg:right-24 lg:top-1/2 lg:-translate-y-1/2 hidden md:block cta-illustration">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="relative w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-2xl">
<i className="w-16 h-16 text-[#00CC66]" data-lucide="trending-up"></i>
</div>

<div className="absolute inset-0 border-2 border-white/30 rounded-full scale-125 rotate-12"></div>
<div className="absolute inset-0 border-2 border-white/20 rounded-full scale-[1.5] -rotate-6"></div>

<div className="absolute -top-10 right-0 bg-[#00CC66] p-3 rounded-lg animate-bounce">
<i className="w-6 h-6 text-white" data-lucide="dollar-sign"></i>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center mb-12 justify-between">
<div>
<h2 className="bg-green-100 text-[#008a44] px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase inline-block mb-2">
            Resultados Reais
          </h2>
<h3 className="text-4xl font-semibold tracking-tight text-zinc-900">
            Histórias de Sucesso
          </h3>
</div>
<p className="max-w-xl text-lg text-zinc-600">
          Veja como empresas de todos os tamanhos estão escalando suas operações com a Integra.ai
        </p>
</div>
<div className="bg-zinc-900 rounded-[40px] p-8 lg:p-14 text-white case-studies-card">
<div className="grid lg:grid-cols-3 gap-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-700">

<div className="space-y-6 px-4">
<div className="flex items-center gap-2 text-[#00CC66] mb-2">
<i className="w-5 h-5" data-lucide="store"></i>
<span className="text-sm font-bold uppercase tracking-wider">Vendedor Local</span>
</div>
<p className="text-xl font-medium leading-relaxed text-zinc-200">
              "Com campanhas PPC automatizadas, aumentamos o tráfego em <span className="text-[#00CC66]">50%</span> e as vendas em <span className="text-[#00CC66]">25%</span> em apenas 3 meses."
            </p>
<div className="pt-4 border-t border-zinc-800">
<p className="text-sm text-zinc-400">Restaurante &amp; Empório Local</p>
</div>
</div>

<div className="space-y-6 px-4 pt-8 lg:pt-0">
<div className="flex items-center gap-2 text-[#0066FF] mb-2">
<i className="w-5 h-5" data-lucide="briefcase"></i>
<span className="text-sm font-bold uppercase tracking-wider">B2B Software</span>
</div>
<p className="text-xl font-medium leading-relaxed text-zinc-200">
              "A estratégia de SEO da Integra nos colocou na primeira página, gerando um aumento de <span className="text-[#0066FF]">200%</span> no tráfego orgânico."
            </p>
<div className="pt-4 border-t border-zinc-800">
<p className="text-sm text-zinc-400">Tech Solutions Ltda</p>
</div>
</div>

<div className="space-y-6 px-4 pt-8 lg:pt-0">
<div className="flex items-center gap-2 text-[#FF6600] mb-2">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
<span className="text-sm font-bold uppercase tracking-wider">Varejo Nacional</span>
</div>
<p className="text-xl font-medium leading-relaxed text-zinc-200">
              "Unificamos 15 lojas em uma plataforma. Resultado: <span className="text-[#FF6600]">+25% seguidores</span> e <span className="text-[#FF6600]">+20% vendas</span> online."
            </p>
<div className="pt-4 border-t border-zinc-800">
<p className="text-sm text-zinc-400">Rede Nacional de Varejo</p>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 py-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-[#0066FF] rounded-sm"></div>
<span className="font-bold text-lg">INTEGRA.AI</span>
</div>
<p className="text-zinc-500 text-sm">© 2025 Integra.ai. Todos os direitos reservados.</p>
<div className="flex gap-6 text-zinc-400">
<i className="w-5 h-5 hover:text-black cursor-pointer transition-colors" data-lucide="instagram"></i>
<i className="w-5 h-5 hover:text-[#0077b5] cursor-pointer transition-colors" data-lucide="linkedin"></i>
<i className="w-5 h-5 hover:text-red-600 cursor-pointer transition-colors" data-lucide="youtube"></i>
</div>
</footer>



    </>
  );
}
