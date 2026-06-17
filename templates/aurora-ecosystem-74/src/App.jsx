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
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Stop observing once animated
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Select all elements with the 'reveal' class
            document.querySelectorAll('.reveal').forEach((element) => {
                observer.observe(element);
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
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference text-[#EBE6E0] px-6 py-6 flex justify-between items-center transition-all duration-500">
<div className="font-serif-display text-2xl tracking-tighter uppercase leading-none">AURORA</div>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#C8622A] hover:-translate-y-0.5 transition-all duration-300" href="#services">Serviços</a>
<a className="hover:text-[#C8622A] hover:-translate-y-0.5 transition-all duration-300" href="#work">Portfólio</a>
<a className="hover:text-[#C8622A] hover:-translate-y-0.5 transition-all duration-300" href="#insights">Insights</a>
</div>
<button className="text-sm font-medium uppercase tracking-wide px-6 py-2.5 rounded-full border border-[#EBE6E0]/30 hover:bg-[#EBE6E0] hover:text-[#121110] hover:scale-105 hover:shadow-[0_0_20px_rgba(235,230,224,0.3)] transition-all duration-500 ease-out">
            Iniciar
        </button>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dots-light">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F5F0EB_70%)] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F0EB] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">
<div className="reveal inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D4CEC8] bg-[#F5F0EB]/60 backdrop-blur-md mb-8">
<span className="w-2 h-2 rounded-full bg-[#C8622A] relative">
<span className="absolute inset-0 rounded-full bg-[#C8622A] animate-ping opacity-75"></span>
</span>
<span className="text-xs font-medium tracking-widest uppercase text-[#6B655D]">Nova arquitetura disponível</span>
</div>
<h1 className="reveal delay-100 font-serif-display text-7xl md:text-[9rem] tracking-tighter leading-[0.85] mb-8 text-[#1F1D1B]">
                Sistemas <br/>
<span className="text-[#C8622A] italic pr-4">conectados.</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl text-[#6B655D] max-w-2xl mx-auto font-medium tracking-wide mb-12">
                A arquitetura de crescimento não é linear. É um ecossistema onde cada nó alimenta o próximo. Construímos fundações digitais que escalam exponencialmente.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="bg-[#1F1D1B] text-[#F5F0EB] px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#C8622A] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,98,42,0.3)] transition-all duration-500 ease-out">
                    Explorar Ecossistema
                </button>
<button className="px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest text-[#1F1D1B] border border-[#D4CEC8] hover:bg-[#EBE6E0] transition-all duration-500 ease-out flex items-center justify-center gap-2 group">
                    Ver Portfólio 
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-[#121110] text-[#6B655D] py-16 border-y border-[#2A2624]">
<div className="max-w-7xl mx-auto overflow-hidden relative reveal">
<p className="text-xs uppercase tracking-widest text-center mb-10">Operando na infraestrutura de</p>
<div className="marquee-wrapper relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
<div className="marquee-content gap-24 items-center cursor-pointer">

<span className="client-logo font-serif-display text-4xl tracking-tighter opacity-40 grayscale">Vortex</span>
<span className="client-logo font-medium text-2xl tracking-widest uppercase opacity-40 grayscale">Nexus</span>
<span className="client-logo font-serif-display text-4xl tracking-tighter italic opacity-40 grayscale">Lumina</span>
<span className="client-logo font-medium text-2xl tracking-widest uppercase opacity-40 grayscale">Aether</span>
<span className="client-logo font-serif-display text-4xl tracking-tighter opacity-40 grayscale">Synthetix</span>

<span className="client-logo font-serif-display text-4xl tracking-tighter opacity-40 grayscale">Vortex</span>
<span className="client-logo font-medium text-2xl tracking-widest uppercase opacity-40 grayscale">Nexus</span>
<span className="client-logo font-serif-display text-4xl tracking-tighter italic opacity-40 grayscale">Lumina</span>
<span className="client-logo font-medium text-2xl tracking-widest uppercase opacity-40 grayscale">Aether</span>
<span className="client-logo font-serif-display text-4xl tracking-tighter opacity-40 grayscale">Synthetix</span>

<span className="client-logo font-serif-display text-4xl tracking-tighter opacity-40 grayscale">Vortex</span>
<span className="client-logo font-medium text-2xl tracking-widest uppercase opacity-40 grayscale">Nexus</span>
<span className="client-logo font-serif-display text-4xl tracking-tighter italic opacity-40 grayscale">Lumina</span>
<span className="client-logo font-medium text-2xl tracking-widest uppercase opacity-40 grayscale">Aether</span>
<span className="client-logo font-serif-display text-4xl tracking-tighter opacity-40 grayscale">Synthetix</span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[#F5F0EB]">
<div className="max-w-4xl mx-auto text-center">
<h2 className="reveal font-serif-display text-5xl md:text-7xl tracking-tighter leading-tight text-[#1F1D1B]">
                Táticas isoladas geram picos efêmeros. <br/>
<span className="text-[#6B655D]">Nós construímos fundações que evoluem de forma orgânica.</span>
</h2>
</div>
</section>

<section className="relative py-32 px-6 bg-[#121110] text-[#EBE6E0] overflow-hidden" id="services">

<div className="absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)] pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="reveal font-serif-display text-5xl md:text-6xl tracking-tighter mb-4">Arquitetura de Valor</h2>
<p className="reveal delay-100 text-[#A39D96] max-w-md text-lg">Os pilares do nosso ecossistema integrado de performance e desenvolvimento estruturado.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal delay-100 group relative rounded-[2.5rem] bg-[#1A1817] p-8 md:p-12 flex flex-col justify-between min-h-[400px] border border-[#2A2624] hover:border-[#C8622A]/40 transition-all duration-700 ease-out hover:-translate-y-2 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#C8622A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-16 h-16 mb-8 text-[#C8622A] group-hover:scale-110 transition-transform duration-700">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 4h18l-7 9v7l-4 2v-9L3 4z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M7 4l5 15M17 4l-5 15" opacity="0.3" stroke-dasharray="1 2"></path>
</svg>
</div>
<div className="relative z-10">
<h3 className="font-serif-display text-4xl tracking-tighter mb-4">Engenharia de Conversão</h3>
<p className="text-[#A39D96] text-sm leading-relaxed">Otimização rigorosa de cada ponto de atrito no funil. Transformamos tráfego diluído em aquisição concentrada.</p>
</div>
</div>

<div className="reveal delay-200 group relative rounded-[2.5rem] bg-[#1A1817] p-8 md:p-12 flex flex-col justify-between min-h-[400px] border border-[#2A2624] hover:border-[#C8622A]/40 transition-all duration-700 ease-out hover:-translate-y-2 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#C8622A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-16 h-16 mb-8 text-[#C8622A] group-hover:scale-110 transition-transform duration-700">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="18" rx="4" width="20" x="2" y="3"></rect>
<path d="M2 9h20M6 9v12M14 3v6" opacity="0.5"></path>
<circle cx="10" cy="15" r="1.5"></circle>
</svg>
</div>
<div className="relative z-10">
<h3 className="font-serif-display text-4xl tracking-tighter mb-4">Interfaces Modulares</h3>
<p className="text-[#A39D96] text-sm leading-relaxed">Sistemas web desenvolvidos para performance, acessibilidade e evolução contínua, não apenas estética de superfície.</p>
</div>
</div>

<div className="reveal delay-100 group relative rounded-[2.5rem] bg-[#1A1817] p-8 md:p-12 flex flex-col justify-between min-h-[400px] border border-[#2A2624] hover:border-[#C8622A]/40 transition-all duration-700 ease-out hover:-translate-y-2 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#C8622A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-16 h-16 mb-8 text-[#C8622A] group-hover:scale-110 transition-transform duration-700">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 21h18M3 21V3" strokeLinecap="round"></path>
<path d="M7 16c2-4 5-8 9-10 2-1 3-1 4-1" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="16" cy="6" fill="currentColor" r="2"></circle>
</svg>
</div>
<div className="relative z-10">
<h3 className="font-serif-display text-4xl tracking-tighter mb-4">Tração Orgânica</h3>
<p className="text-[#A39D96] text-sm leading-relaxed">Domínio de intenção de busca através de semântica estruturada e autoridade de domínio real em seu nicho de atuação.</p>
</div>
</div>

<div className="reveal delay-200 group relative rounded-[2.5rem] bg-[#1A1817] p-8 md:p-12 flex flex-col justify-between min-h-[400px] border border-[#2A2624] hover:border-[#C8622A]/40 transition-all duration-700 ease-out hover:-translate-y-2 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#C8622A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-16 h-16 mb-8 text-[#C8622A] group-hover:scale-110 transition-transform duration-700">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="6" rx="1" width="4" x="4" y="14"></rect>
<rect height="12" rx="1" width="4" x="10" y="8"></rect>
<rect height="16" rx="1" width="4" x="16" y="4"></rect>
<path d="M4 14l6-6 6-4" opacity="0.4" stroke-dasharray="2 2" strokeLinecap="round"></path>
</svg>
</div>
<div className="relative z-10">
<h3 className="font-serif-display text-4xl tracking-tighter mb-4">Inteligência de Dados</h3>
<p className="text-[#A39D96] text-sm leading-relaxed">Modelagem de atribuição e telemetria avançada para decisões baseadas em correlações causais, não achismos de mercado.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#F5F0EB]">
<div className="max-w-7xl mx-auto">
<h2 className="reveal font-serif-display text-5xl md:text-6xl tracking-tighter mb-16">Metodologia</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-[#D4CEC8] z-0"></div>
<div className="reveal delay-100 relative z-10 group cursor-default">
<div className="w-12 h-12 rounded-full bg-[#121110] text-[#F5F0EB] flex items-center justify-center font-serif-display text-2xl mb-6 transition-transform duration-500 group-hover:scale-110">1</div>
<h4 className="text-xl font-medium tracking-tight mb-3 transition-colors duration-300 group-hover:text-[#C8622A]">Auditoria Estrutural</h4>
<p className="text-sm text-[#6B655D] leading-relaxed">Mapeamento completo de dívida técnica, gaps de conversão e arquitetura de dados existente.</p>
</div>
<div className="reveal delay-200 relative z-10 group cursor-default">
<div className="w-12 h-12 rounded-full bg-[#121110] text-[#F5F0EB] flex items-center justify-center font-serif-display text-2xl mb-6 transition-transform duration-500 group-hover:scale-110">2</div>
<h4 className="text-xl font-medium tracking-tight mb-3 transition-colors duration-300 group-hover:text-[#C8622A]">Síntese &amp; Planejamento</h4>
<p className="text-sm text-[#6B655D] leading-relaxed">Definição da topologia do novo ecossistema, priorizando ações pelo impacto no ROI de curto prazo.</p>
</div>
<div className="reveal delay-300 relative z-10 group cursor-default">
<div className="w-12 h-12 rounded-full bg-[#C8622A] text-[#F5F0EB] flex items-center justify-center font-serif-display text-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(200,98,42,0.4)]">3</div>
<h4 className="text-xl font-medium tracking-tight mb-3 transition-colors duration-300 group-hover:text-[#C8622A]">Execução Contínua</h4>
<p className="text-sm text-[#6B655D] leading-relaxed">Implementação em sprints iterativos, monitoramento em tempo real e ajustes de rota orientados a dados.</p>
</div>
</div>
</div>
</section>

<section className="pb-32 px-6 bg-[#F5F0EB]">
<div className="max-w-7xl mx-auto border-t border-[#D4CEC8] pt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="reveal delay-100 group">
<div className="font-serif-display text-7xl md:text-8xl text-[#C8622A] tracking-tighter leading-none mb-2 transition-transform duration-500 group-hover:-translate-y-1">3.4x</div>
<div className="text-xs font-medium uppercase tracking-widest text-[#6B655D]">Aumento médio em LTV</div>
</div>
<div className="reveal delay-200 group">
<div className="font-serif-display text-7xl md:text-8xl text-[#C8622A] tracking-tighter leading-none mb-2 transition-transform duration-500 group-hover:-translate-y-1">-42%</div>
<div className="text-xs font-medium uppercase tracking-widest text-[#6B655D]">Redução no CAC global</div>
</div>
<div className="reveal delay-300 group">
<div className="font-serif-display text-7xl md:text-8xl text-[#C8622A] tracking-tighter leading-none mb-2 transition-transform duration-500 group-hover:-translate-y-1">12k+</div>
<div className="text-xs font-medium uppercase tracking-widest text-[#6B655D]">Horas de automação</div>
</div>
</div>
</section>

<section className="py-40 bg-[#121110] text-[#F5F0EB] px-6 flex items-center min-h-[80vh]">
<div className="max-w-5xl mx-auto">
<p className="reveal font-serif-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] mb-12">
                "A transição de agências fragmentadas para o ecossistema da Aurora foi o ponto de inflexão. Nossa infraestrutura digital agora atua como uma máquina de aquisição previsível."
            </p>
<div className="reveal delay-100 flex items-center gap-4">
<div className="w-12 h-[2px] bg-[#C8622A] rounded-full"></div>
<div>
<div className="font-medium tracking-wide">Diretor de Operações</div>
<div className="text-xs text-[#6B655D] tracking-widest uppercase mt-1">SaaS Enterprise Global</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#F5F0EB]" id="work">
<div className="max-w-7xl mx-auto">
<div className="reveal flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-[#D4CEC8] pb-6 gap-6">
<h2 className="font-serif-display text-5xl md:text-6xl tracking-tighter">Estudos de Caso</h2>
<a className="text-xs font-medium uppercase tracking-wide flex items-center gap-2 group bg-[#1F1D1B] text-[#F5F0EB] px-6 py-3 rounded-full hover:bg-[#C8622A] transition-all duration-500 hover:shadow-[0_0_15px_rgba(200,98,42,0.3)] hover:-translate-y-1" href="#">
                    Ver arquivo
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform duration-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="reveal delay-100 md:col-span-7 bg-[#EBE6E0] border border-[#D4CEC8] p-2 flex flex-col rounded-[2.5rem] group hover:border-[#C8622A]/30 transition-all duration-500">
<div className="p-6 md:p-10 pb-12 flex-grow">
<div className="flex justify-between items-center mb-12">
<h3 className="font-serif-display text-3xl tracking-tighter">Fintech Nexus</h3>
<span className="text-xs bg-[#1F1D1B] text-[#F5F0EB] px-3 py-1.5 rounded-full uppercase tracking-widest">Ativo</span>
</div>

<div className="bg-white border border-[#D4CEC8] rounded-3xl shadow-sm p-6 h-64 flex flex-col group-hover:shadow-md transition-shadow duration-500">
<div className="flex justify-between text-xs text-[#6B655D] uppercase tracking-widest mb-6 border-b border-[#F5F0EB] pb-3">
<span>Métricas de Adoção</span>
<span>Q3 2023</span>
</div>
<div className="flex-grow flex items-end gap-3 px-2 h-full">
<div className="w-full bg-[#F5F0EB] rounded-t-xl relative overflow-hidden">
<div className="absolute bottom-0 w-full bg-[#1F1D1B] rounded-t-xl transition-all duration-1000 delay-100 h-0 group-hover:h-[30%]"></div>
</div>
<div className="w-full bg-[#F5F0EB] rounded-t-xl relative overflow-hidden">
<div className="absolute bottom-0 w-full bg-[#1F1D1B] rounded-t-xl transition-all duration-1000 delay-200 h-0 group-hover:h-[45%]"></div>
</div>
<div className="w-full bg-[#F5F0EB] rounded-t-xl relative overflow-hidden">
<div className="absolute bottom-0 w-full bg-[#1F1D1B] rounded-t-xl transition-all duration-1000 delay-300 h-0 group-hover:h-[60%]"></div>
</div>
<div className="w-full bg-[#F5F0EB] rounded-t-xl relative overflow-hidden">
<div className="absolute bottom-0 w-full bg-[#C8622A] rounded-t-xl transition-all duration-1000 delay-500 h-0 group-hover:h-[95%]"></div>
</div>
</div>
</div>
</div>
<div className="px-8 py-5 border-t border-[#D4CEC8] flex justify-between items-center text-sm text-[#6B655D]">
<span>Otimização de Onboarding</span>
<span className="font-medium text-[#1F1D1B] group-hover:text-[#C8622A] transition-colors duration-500">+184% Conversão</span>
</div>
</div>

<div className="reveal delay-200 md:col-span-5 flex flex-col gap-6">
<div className="bg-[#121110] text-[#EBE6E0] p-10 flex-grow flex flex-col justify-between group cursor-pointer border border-[#2A2624] hover:border-[#C8622A] transition-all duration-500 rounded-[2.5rem] hover:-translate-y-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#C8622A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10">
<span className="text-xs uppercase tracking-widest text-[#6B655D] mb-6 block">E-commerce</span>
<h3 className="font-serif-display text-4xl tracking-tighter mb-4">Aether Retail</h3>
<p className="text-sm text-[#A39D96] leading-relaxed">Migração de arquitetura monolítica para headless commerce focado em velocidade extrema e SEO programático.</p>
</div>
<div className="mt-12 flex justify-between items-center text-sm border-t border-[#2A2624] pt-6 relative z-10">
<span className="text-[#C8622A] font-medium">Ver caso de estudo</span>
<div className="w-10 h-10 rounded-full bg-[#1F1D1B] group-hover:bg-[#C8622A] flex items-center justify-center transition-colors duration-500">
<iconify-icon className="text-xl group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F5F0EB]" id="insights">
<div className="max-w-4xl mx-auto">
<h2 className="reveal text-xs uppercase tracking-widest text-[#6B655D] mb-12">Escritos Recentes</h2>
<div className="flex flex-col">
<a className="reveal delay-100 group py-8 border-b border-[#D4CEC8] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-500 hover:px-4 hover:bg-[#EBE6E0] rounded-2xl border-transparent" href="#">
<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
<span className="text-sm text-[#6B655D] w-24">12 Out 2023</span>
<h3 className="font-serif-display text-2xl md:text-3xl tracking-tighter group-hover:text-[#C8622A] transition-colors duration-500">O mito da atribuição last-click em ciclos B2B complexos</h3>
</div>
<iconify-icon className="text-2xl text-[#A39D96] group-hover:text-[#C8622A] group-hover:translate-x-2 transition-all duration-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="reveal delay-200 group py-8 border-b border-[#D4CEC8] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-500 hover:px-4 hover:bg-[#EBE6E0] rounded-2xl border-transparent" href="#">
<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
<span className="text-sm text-[#6B655D] w-24">28 Set 2023</span>
<h3 className="font-serif-display text-2xl md:text-3xl tracking-tighter group-hover:text-[#C8622A] transition-colors duration-500">Core Web Vitals como métrica primária de conversão</h3>
</div>
<iconify-icon className="text-2xl text-[#A39D96] group-hover:text-[#C8622A] group-hover:translate-x-2 transition-all duration-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="reveal delay-300 group py-8 border-b border-[#D4CEC8] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-500 hover:px-4 hover:bg-[#EBE6E0] rounded-2xl border-transparent" href="#">
<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
<span className="text-sm text-[#6B655D] w-24">15 Set 2023</span>
<h3 className="font-serif-display text-2xl md:text-3xl tracking-tighter group-hover:text-[#C8622A] transition-colors duration-500">Silos de dados estão sangrando sua margem operacional</h3>
</div>
<iconify-icon className="text-2xl text-[#A39D96] group-hover:text-[#C8622A] group-hover:translate-x-2 transition-all duration-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative bg-[#121110] text-[#F5F0EB] py-32 md:py-48 px-6 text-center border-t border-[#2A2624] overflow-hidden">

<div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="reveal font-serif-display text-6xl md:text-8xl tracking-tighter mb-8">Inicie a transição.</h2>
<p className="reveal delay-100 text-[#A39D96] text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                Auditorias são o primeiro passo para mapear a ineficiência. Solicite uma avaliação técnica profunda do seu ecossistema.
            </p>
<div className="reveal delay-200">
<button className="bg-[#C8622A] text-[#F5F0EB] px-10 py-5 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#EBE6E0] hover:text-[#121110] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,98,42,0.4)] transition-all duration-500 ease-out">
                    Agendar Diagnóstico
                </button>
</div>
</div>
</section>
<footer className="bg-[#121110] text-[#6B655D] py-8 px-6 text-xs flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#1A1817]">
<div>© 2023 Aurora Ecosystem. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-[#EBE6E0] transition-colors duration-300" href="#">Privacidade</a>
<a className="hover:text-[#EBE6E0] transition-colors duration-300" href="#">Termos</a>
<a className="hover:text-[#EBE6E0] transition-colors duration-300" href="#">Contato</a>
</div>
</footer>



    </>
  );
}
