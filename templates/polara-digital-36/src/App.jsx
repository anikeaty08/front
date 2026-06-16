import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons with 1.5 stroke width
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Navegação por setas no carrossel de projetos
        const carousel = document.getElementById('projetosCarousel');
        const btnPrev = document.getElementById('projPrev');
        const btnNext = document.getElementById('projNext');

        if (carousel && btnPrev && btnNext) {
          const updateArrows = () => {
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            const atStart = carousel.scrollLeft <= 0;
            const atEnd = carousel.scrollLeft >= maxScroll - 1;

            btnPrev.classList.toggle('opacity-40', atStart);
            btnPrev.classList.toggle('cursor-not-allowed', atStart);
            btnPrev.setAttribute('aria-disabled', atStart);

            btnNext.classList.toggle('opacity-40', atEnd);
            btnNext.classList.toggle('cursor-not-allowed', atEnd);
            btnNext.setAttribute('aria-disabled', atEnd);
          };

          btnPrev.addEventListener('click', () => {
            carousel.scrollBy({ left: -carousel.clientWidth * 0.9, behavior: 'smooth' });
          });

          btnNext.addEventListener('click', () => {
            carousel.scrollBy({ left: carousel.clientWidth * 0.9, behavior: 'smooth' });
          });

          carousel.addEventListener('scroll', updateArrows);
          window.addEventListener('resize', updateArrows);
          updateArrows();
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur border-b border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="h-16 flex items-center justify-between">
<a className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50 rounded" href="#">
<span className="text-[18px] md:text-[20px] tracking-tight uppercase font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif', color: '#C4A24B'}}>POLARA</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#F5F5F5]/80 hover:text-[#F5F5F5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50 rounded px-1 py-1 uppercase tracking-tight" href="#projetos">Projetos</a>
<a className="text-sm font-medium text-[#F5F5F5]/80 hover:text-[#F5F5F5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50 rounded px-1 py-1 uppercase tracking-tight" href="#sobre">Sobre</a>
<a className="text-sm font-medium text-[#F5F5F5]/80 hover:text-[#F5F5F5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50 rounded px-1 py-1 uppercase tracking-tight" href="#contato">Fale Conosco</a>
</nav>
<a className="md:hidden inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50 uppercase tracking-tight" href="#contato">
            Contato
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden pt-28 md:pt-36">

<div className="absolute inset-0 -z-10 opacity-[0.12]" style={{backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px, 24px 24px', backgroundPosition: 'center'}}></div>
<div className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-30 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(196,162,75,0.28), rgba(10,10,10,0))'}}></div>
<div className="absolute -bottom-24 -right-24 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-25 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(0,173,239,0.25), rgba(10,10,10,0))'}}></div>
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 mx-auto w-[800px] h-[800px] rounded-full border border-[#00ADEF]/10 animate-spin slow pointer-events-none" style={{maskImage: 'radial-gradient(circle at center, rgba(0,0,0,0) 48%, rgba(0,0,0,1) 52%)'}}></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-12 mx-auto text-center">
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight uppercase font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif', color: '#C4A24B'}}>
                POLARA
              </h1>
<h2 className="mt-4 text-xl md:text-2xl lg:text-3xl tracking-tight uppercase font-semibold text-[#F5F5F5]" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif'}}>
                Desenvolvedora de Soluções e Automações Digitais
              </h2>
<p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-[#F5F5F5]/75">
                “Transformamos ideias em MVPs e sistemas inteligentes, prontos para escalar.”
              </p>
<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-semibold tracking-tight uppercase text-[#0A0A0A] bg-[#C4A24B] hover:bg-[#C4A24B]/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" href="#projetos">
                  Ver Projetos
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-semibold tracking-tight uppercase border border-white/10 hover:border-white/20 text-[#F5F5F5] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" href="#contato">
                  Fale Conosco
                  <i className="w-4 h-4" data-lucide="message-square"></i>
</a>
</div>
<div className="mt-10 flex items-center justify-center gap-4 text-xs text-[#F5F5F5]/50">
<div className="h-px w-12 bg-white/10"></div>
<span>Software sob medida • Integrações • MVPs • Automações</span>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 border-t border-white/10" id="projetos">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="flex items-end justify-between gap-6">
<div>
<h3 className="text-2xl md:text-3xl tracking-tight uppercase font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif', color: '#C4A24B'}}>
                Projetos &amp; Cases
              </h3>
<p className="mt-2 text-sm md:text-base text-[#F5F5F5]/70">Soluções reais para operações que exigem velocidade e confiabilidade.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-[#F5F5F5]/50">
<span className="h-px w-10 bg-white/10"></span>
              Use as setas
              <i className="w-4 h-4" data-lucide="arrow-left-right"></i>
</div>
</div>
<div className="mt-8 relative">

<button aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 bg-black/40 hover:bg-black/60 hover:border-white/20 text-white backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" id="projPrev" type="button">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button aria-label="Próximo" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 bg-black/40 hover:bg-black/60 hover:border-white/20 text-white backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" id="projNext" type="button">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
<div className="overflow-x-auto pb-4" id="projetosCarousel">
<div className="flex gap-6 snap-x snap-mandatory min-w-full">

<article className="snap-start shrink-0 w-[300px] md:w-[360px] rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors">
<div className="relative aspect-[16/10]">
<img alt="Sistema de Automação" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] uppercase tracking-tight bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20">Sistema de Automação</span>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
<h4 className="text-sm font-semibold tracking-tight">Grupo Orion</h4>
<p className="text-[12px] text-[#F5F5F5]/70">Robôs de integração e orquestração</p>
</div>
</div>
</article>

<article className="snap-start shrink-0 w-[300px] md:w-[360px] rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors">
<div className="relative aspect-[16/10]">
<img alt="MVP Web" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] uppercase tracking-tight bg-[#00ADEF]/10 text-[#00ADEF] border border-[#00ADEF]/20">MVP Web</span>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
<h4 className="text-sm font-semibold tracking-tight">Aether Labs</h4>
<p className="text-[12px] text-[#F5F5F5]/70">Plataforma de validação de hipóteses</p>
</div>
</div>
</article>

<article className="snap-start shrink-0 w-[300px] md:w-[360px] rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors">
<div className="relative aspect-[16/10]">
<img alt="Integração API" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] uppercase tracking-tight bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20">Integração API</span>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
<h4 className="text-sm font-semibold tracking-tight">NovaPay</h4>
<p className="text-[12px] text-[#F5F5F5]/70">Conectores de pagamentos e antifraude</p>
</div>
</div>
</article>

<article className="snap-start shrink-0 w-[300px] md:w-[360px] rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors">
<div className="relative aspect-[16/10]">
<img alt="Dashboard Operacional" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] uppercase tracking-tight bg-[#00ADEF]/10 text-[#00ADEF] border border-[#00ADEF]/20">Dashboard</span>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
<h4 className="text-sm font-semibold tracking-tight">Atlas Logistics</h4>
<p className="text-[12px] text-[#F5F5F5]/70">Monitoramento de SLA em tempo real</p>
</div>
</div>
</article>

<article className="snap-start shrink-0 w-[300px] md:w-[360px] rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors">
<div className="relative aspect-[16/10]">
<img alt="Bots e RPA" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] uppercase tracking-tight bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20">Bots &amp; RPA</span>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
<h4 className="text-sm font-semibold tracking-tight">HelixCare</h4>
<p className="text-[12px] text-[#F5F5F5]/70">Automação de processos clínicos</p>
</div>
</div>
</article>

<article className="snap-start shrink-0 w-[300px] md:w-[360px] rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors">
<div className="relative aspect-[16/10]">
<img alt="Data Pipeline" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] uppercase tracking-tight bg-[#00ADEF]/10 text-[#00ADEF] border border-[#00ADEF]/20">Data Pipeline</span>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
<h4 className="text-sm font-semibold tracking-tight">Vertex Analytics</h4>
<p className="text-[12px] text-[#F5F5F5]/70">ETL e qualidade de dados</p>
</div>
</div>
</article>
</div>
</div>
</div>
<div className="mt-10 flex items-center justify-center">
<a className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight uppercase px-5 py-3 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" href="#contato">
              Vamos construir algo juntos
              <i className="w-4 h-4" data-lucide="rocket"></i>
</a>
</div>
</div>
</section>

<section className="scroll-mt-24 border-t border-white/10" id="sobre">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h3 className="text-2xl md:text-3xl tracking-tight uppercase font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif', color: '#C4A24B'}}>Sobre</h3>
<p className="mt-4 text-base md:text-lg text-[#F5F5F5]/80">
                Somos a <span className="font-semibold" style={{color: '#C4A24B'}}>POLARA</span>, uma software house que cria soluções digitais sob medida.
                Nosso foco é entregar produtos ágeis, inteligentes e escaláveis — do conceito ao lançamento.
              </p>
<ul className="mt-6 space-y-3 text-sm text-[#F5F5F5]/70">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00ADEF]"></span> MVPs em semanas, não meses.</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span> Integrações robustas com APIs e serviços.</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C4A24B]"></span> Monitoramento, segurança e escalabilidade.</li>
</ul>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-semibold tracking-tight uppercase text-[#0A0A0A] bg-[#C4A24B] hover:bg-[#C4A24B]/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" href="#projetos">
                  Ver Cases
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight uppercase px-5 py-3 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" href="#contato">
                  Contato
                  <i className="w-4 h-4" data-lucide="mail"></i>
</a>
</div>
</div>
<div>
<div className="relative rounded-xl overflow-hidden border border-white/10">
<img alt="Equipe trabalhando" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
<p className="text-xs text-[#F5F5F5]/80">Bastidores: código, design e estratégia lado a lado.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 border-t border-white/10" id="servicos">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<h3 className="text-2xl md:text-3xl tracking-tight uppercase font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif', color: '#C4A24B'}}>Serviços</h3>
<p className="mt-2 text-sm md:text-base text-[#F5F5F5]/70">Do MVP às integrações em produção — cobrimos toda a jornada.</p>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10">
<i className="w-4.5 h-4.5" data-lucide="code-2"></i>
</div>
<span className="text-[11px] px-2 py-1 rounded-md uppercase tracking-tight bg-[#00ADEF]/10 text-[#00ADEF] border border-[#00ADEF]/20">Web</span>
</div>
<h4 className="mt-4 text-base font-semibold tracking-tight">MVPs e Produtos</h4>
<p className="mt-2 text-sm text-[#F5F5F5]/70">Aplicações modernas, responsivas e prontas para escalar.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10">
<i className="w-4.5 h-4.5" data-lucide="bot"></i>
</div>
<span className="text-[11px] px-2 py-1 rounded-md uppercase tracking-tight bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20">RPA</span>
</div>
<h4 className="mt-4 text-base font-semibold tracking-tight">Automações &amp; Bots</h4>
<p className="mt-2 text-sm text-[#F5F5F5]/70">Robôs para processos repetitivos, integrações e orquestração.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10">
<i className="w-4.5 h-4.5" data-lucide="workflow"></i>
</div>
<span className="text-[11px] px-2 py-1 rounded-md uppercase tracking-tight bg-[#C4A24B]/10 text-[#C4A24B] border border-[#C4A24B]/20">Ops</span>
</div>
<h4 className="mt-4 text-base font-semibold tracking-tight">Integrações &amp; APIs</h4>
<p className="mt-2 text-sm text-[#F5F5F5]/70">Conectores resilientes, webhooks, filas e monitoramento.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10">
<i className="w-4.5 h-4.5" data-lucide="database"></i>
</div>
<span className="text-[11px] px-2 py-1 rounded-md uppercase tracking-tight bg-white/10 text-white border border-white/20">Data</span>
</div>
<h4 className="mt-4 text-base font-semibold tracking-tight">Data &amp; Analytics</h4>
<p className="mt-2 text-sm text-[#F5F5F5]/70">Pipelines ETL, qualidade e visualização orientada a métricas.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 border-t border-white/10" id="processo">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<h3 className="text-2xl md:text-3xl tracking-tight uppercase font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif', color: '#C4A24B'}}>Processo</h3>
<p className="mt-2 text-sm md:text-base text-[#F5F5F5]/70">Ciclos curtos, entregas constantes e alinhamento contínuo.</p>
<div className="mt-8 grid md:grid-cols-4 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs">1</div>
<span className="text-sm font-semibold tracking-tight">Descoberta</span>
</div>
<p className="mt-3 text-sm text-[#F5F5F5]/70">Mapeamos objetivos, restrições e métricas de sucesso.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs">2</div>
<span className="text-sm font-semibold tracking-tight">Desenho</span>
</div>
<p className="mt-3 text-sm text-[#F5F5F5]/70">Arquitetura, jornadas e escopo incremental priorizado.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs">3</div>
<span className="text-sm font-semibold tracking-tight">Construção</span>
</div>
<p className="mt-3 text-sm text-[#F5F5F5]/70">Sprints semanais com demos, feedback e ajustes.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs">4</div>
<span className="text-sm font-semibold tracking-tight">Go-live</span>
</div>
<p className="mt-3 text-sm text-[#F5F5F5]/70">Deploy, observabilidade e melhorias contínuas.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 border-t border-white/10" id="faq">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<h3 className="text-2xl md:text-3xl tracking-tight uppercase font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif', color: '#C4A24B'}}>FAQ</h3>
<p className="mt-2 text-sm md:text-base text-[#F5F5F5]/70">Perguntas frequentes sobre como trabalhamos.</p>
<div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 overflow-hidden">
<div className="p-5 md:p-6">
<div className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-[#C4A24B]" data-lucide="clock"></i>
<div>
<h4 className="text-sm font-semibold tracking-tight">Em quanto tempo entregam um MVP?</h4>
<p className="mt-1.5 text-sm text-[#F5F5F5]/70">Entre 3 e 6 semanas, dependendo do escopo e integrações necessárias.</p>
</div>
</div>
</div>
<div className="p-5 md:p-6">
<div className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-[#00ADEF]" data-lucide="shield"></i>
<div>
<h4 className="text-sm font-semibold tracking-tight">Como tratam segurança e dados?</h4>
<p className="mt-1.5 text-sm text-[#F5F5F5]/70">Boas práticas de auth, logs, rate limiting, criptografia em trânsito e repouso.</p>
</div>
</div>
</div>
<div className="p-5 md:p-6">
<div className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-[#FF6B00]" data-lucide="handshake"></i>
<div>
<h4 className="text-sm font-semibold tracking-tight">Trabalham com escopo fechado?</h4>
<p className="mt-1.5 text-sm text-[#F5F5F5]/70">Podemos trabalhar por escopo fechado ou por sprints com backlog priorizado.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 border-t border-white/10" id="contato">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="max-w-2xl">
<h3 className="text-2xl md:text-3xl tracking-tight uppercase font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif', color: '#C4A24B'}}>
              Fale Conosco
            </h3>
<p className="mt-2 text-[#F5F5F5]/75">Vamos construir algo juntos.</p>
</div>
<form className="mt-8 max-w-2xl space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-sm text-[#F5F5F5]/70 mb-2 uppercase tracking-tight" htmlFor="nome">Nome</label>
<input className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2.5 text-sm placeholder:text-[#F5F5F5]/40 focus:outline-none focus:ring-2 focus:ring-[#00ADEF]/40 focus:border-white/20" id="nome" name="nome" placeholder="Seu nome" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-[#F5F5F5]/70 mb-2 uppercase tracking-tight" htmlFor="email">Email</label>
<input className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2.5 text-sm placeholder:text-[#F5F5F5]/40 focus:outline-none focus:ring-2 focus:ring-[#00ADEF]/40 focus:border-white/20" id="email" name="email" placeholder="seu@email.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm text-[#F5F5F5]/70 mb-2 uppercase tracking-tight" htmlFor="mensagem">Mensagem</label>
<textarea className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2.5 text-sm placeholder:text-[#F5F5F5]/40 focus:outline-none focus:ring-2 focus:ring-[#00ADEF]/40 focus:border-white/20" id="mensagem" name="mensagem" placeholder="Conte brevemente o desafio ou objetivo." required="" rows="5"></textarea>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-semibold tracking-tight uppercase text-[#0A0A0A] bg-[#00ADEF] hover:bg-[#00ADEF]/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" type="submit">
                Enviar
                <i className="w-4 h-4" data-lucide="send"></i>
</button>
<span className="text-xs text-[#F5F5F5]/50">Resposta em até 1 dia útil.</span>
</div>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="text-base tracking-tight uppercase font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif', color: '#C4A24B'}}>POLARA</span>
<span className="text-xs text-[#F5F5F5]/50">© 2025</span>
</div>
<div className="flex items-center gap-4">
<a aria-label="LinkedIn" className="inline-flex items-center p-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a aria-label="GitHub" className="inline-flex items-center p-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a aria-label="Instagram" className="inline-flex items-center p-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEF]/50" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
