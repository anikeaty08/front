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
      

<nav className="fixed top-0 w-full z-50 border-b border-[#3A3A3A]/30 bg-[#0E0E0E]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full gradient-bg"></div>
<span className="text-lg font-semibold tracking-tight">LeadFlow</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[#C7C7C7] text-sm font-medium">
<a className="hover:text-white transition-colors" href="#sobre">Sobre</a>
<a className="hover:text-white transition-colors" href="#metodo">Método</a>
<a className="hover:text-white transition-colors" href="#servicos">Planos</a>
</div>
<a className="hidden md:block px-4 py-2 text-sm font-medium bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg hover:border-[#FF0058] transition-all hover:text-white" href="#contato">
                Fale Comigo
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] hero-glow blur-[120px] pointer-events-none z-0"></div>

<div className="absolute top-1/4 right-[10%] w-32 h-32 md:w-64 md:h-64 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-xl animate-pulse hidden lg:block z-0"></div>
<div className="absolute bottom-1/4 left-[10%] w-24 h-24 md:w-48 md:h-48 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-xl hidden lg:block z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#3A3A3A] mb-8">
<span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse"></span>
<span className="text-xs font-medium text-[#C7C7C7] uppercase tracking-wide">Estratégia &amp; Growth</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Marketing e aquisição de clientes com <span className="gradient-text">previsibilidade.</span>
</h1>
<p className="text-lg md:text-xl text-[#C7C7C7] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Acelero vendas, posicionamento e presença digital de empresas que querem crescer com estratégia, não com tentativa e erro.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-4 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2" href="#contato">
                    Quero aumentar minhas vendas
                    <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full md:w-auto px-8 py-4 rounded-lg bg-[#1A1A1A] border border-[#3A3A3A] text-[#F2F2F2] font-medium hover:bg-[#252525] transition-colors" href="#servicos">
                    Ver planos e soluções
                </a>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
</section>

<section className="bg-[#0E0E0E] border-[#1A1A1A] border-t pt-24 pb-24 relative" id="sobre">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                        Especialista em marketing e vendas para quem leva o negócio a sério.
                    </h2>
<div className="space-y-6 text-lg text-[#C7C7C7] font-light">
<p className="">
                            Nos últimos anos, aumentei faturamento, fluxo de alunos, captação de projetos, presença digital e geração de oportunidades em diversos segmentos — educação, arquitetura, e-commerce, serviços, consultorias e negócios locais.
                        </p>
<p>
                            Trabalho com planejamento, estratégia, tráfego, posicionamento e sistemas de aquisição. Sempre baseado em dados, performance e previsibilidade.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 gap-4">
<div className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-[#FF5722]/30 transition-colors">
<div className="p-3 rounded-lg bg-[#FF5722]/10 text-[#FF5722]">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">+100 alunos matriculados</h3>
<p className="text-[#909090]">Em apenas 2 meses (case real)</p>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-[#FF0058]/30 transition-colors">
<div className="p-3 rounded-lg bg-[#FF0058]/10 text-[#FF0058]">
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-1">Negócios locais</h3>
<p className="text-[#909090]">Em menos de 7 dias de campanha</p>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-[#FF1E50]/30 transition-colors">
<div className="p-3 rounded-lg bg-[#FF1E50]/10 text-[#FF1E50]">
<svg className="lucide lucide-trending-down w-6 h-6" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">CPL 40% menor</h3>
<p className="text-[#909090]">Que a média do mercado no segmento</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#121212]">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FF1E50]/10 text-[#FF1E50] mb-6">
<svg className="lucide lucide-flame w-6 h-6" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    A maioria das empresas não cresce porque apaga incêndios…
                </h2>
<p className="text-xl text-[#C7C7C7] max-w-2xl mx-auto font-light">
                    Não porque falta potencial. Empresários fazem o que precisam, não o que querem — e isso cria um ritmo caótico. Sem estratégia, o negócio trava.
                </p>
</div>
<div className="glass-card p-8 md:p-12 rounded-2xl border border-[#3A3A3A]">
<h3 className="text-2xl font-medium mb-8 text-center">Você precisa de um ecossistema:</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#FF5722]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg text-[#F2F2F2]">Uma linha editorial clara</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#FF5722]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg text-[#F2F2F2]">Anúncios funcionando</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#FF5722]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg text-[#F2F2F2]">Funis ativos</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#FF5722]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg text-[#F2F2F2]">Conteúdo de autoridade</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#FF5722]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg text-[#F2F2F2]">Captação constante</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#FF5722]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg text-[#F2F2F2]">Otimização semanal</span>
</div>
</div>
<div className="mt-10 pt-8 border-t border-[#3A3A3A] text-center">
<p className="text-lg font-medium gradient-text">E isso é exatamente o que a assessoria entrega.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0E0E0E] relative overflow-hidden" id="metodo">

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#FF0058]/5 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-16">
<span className="text-[#FF0058] font-semibold tracking-wider text-xs uppercase mb-2 block">O Método</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">LeadFlow System</h2>
<p className="text-xl text-[#909090] mt-4 max-w-2xl font-light">Como construo previsibilidade no seu marketing passo a passo.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="group">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#3A3A3A] flex items-center justify-center text-[#F2F2F2] font-semibold mb-4 group-hover:border-[#FF5722] transition-colors">1</div>
<h3 className="text-lg font-medium text-white mb-2">Diagnóstico</h3>
<p className="text-[#909090] text-sm leading-relaxed">Leitura do momento atual, métricas, presença digital e oportunidades ocultas.</p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#3A3A3A] flex items-center justify-center text-[#F2F2F2] font-semibold mb-4 group-hover:border-[#FF5722] transition-colors">2</div>
<h3 className="text-lg font-medium text-white mb-2">Planejamento</h3>
<p className="text-[#909090] text-sm leading-relaxed">Definição estratégica mensal: funis, ofertas, narrativas e posicionamento.</p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#3A3A3A] flex items-center justify-center text-[#F2F2F2] font-semibold mb-4 group-hover:border-[#FF0058] transition-colors">3</div>
<h3 className="text-lg font-medium text-white mb-2">Execução</h3>
<p className="text-[#909090] text-sm leading-relaxed">Mão na massa: Tráfego, campanhas, criação de copies, anúncios e ajustes.</p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#3A3A3A] flex items-center justify-center text-[#F2F2F2] font-semibold mb-4 group-hover:border-[#FF1E50] transition-colors">4</div>
<h3 className="text-lg font-medium text-white mb-2">Otimização</h3>
<p className="text-[#909090] text-sm leading-relaxed">Análise de dados contínua, reuniões de alinhamento e relatórios de evolução.</p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#3A3A3A] flex items-center justify-center text-[#F2F2F2] font-semibold mb-4 group-hover:border-[#FF1E50] transition-colors">5</div>
<h3 className="text-lg font-medium text-white mb-2">Escala</h3>
<p className="text-[#909090] text-sm leading-relaxed">Expansão agressiva para novas plataformas, públicos e ofertas.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0E0E0E]" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Escolha o nível do seu crescimento</h2>
<p className="text-[#C7C7C7] text-lg font-light">Soluções adaptadas para cada estágio de maturidade do seu negócio.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl bg-[#1A1A1A] border border-[#3A3A3A] hover:border-[#555] transition-all">
<h3 className="text-xl font-medium text-white mb-2">Essencial</h3>
<p className="text-sm text-[#909090] mb-8">Para quem está começando e precisa validar.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-[#C7C7C7] text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF5722] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Tráfego básico
                        </li>
<li className="flex items-start gap-3 text-[#C7C7C7] text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF5722] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Planejamento estratégico
                        </li>
<li className="flex items-start gap-3 text-[#C7C7C7] text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF5722] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Funil simples
                        </li>
<li className="flex items-start gap-3 text-[#C7C7C7] text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF5722] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Acompanhamento mensal
                        </li>
</ul>
<a className="block w-full py-3 text-center rounded-lg border border-[#3A3A3A] text-white text-sm font-medium hover:bg-[#252525] transition-colors" href="#contato">Solicitar proposta</a>
</div>

<div className="relative transform md:-translate-y-4">
<div className="absolute inset-0 bg-gradient-to-r from-[#FF5722] via-[#FF0058] to-[#FF1E50] rounded-2xl blur-sm opacity-50"></div>
<div className="relative p-8 rounded-2xl bg-[#121212] border border-[#FF0058]/30 h-full">
<div className="absolute top-0 right-0 bg-[#FF0058] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg tracking-widest uppercase">Mais Vendido</div>
<h3 className="text-xl font-medium text-white mb-2">Crescimento</h3>
<p className="text-sm text-[#909090] mb-8">O sistema completo para escalar vendas.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-white text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF0058] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Gestão de tráfego avançada
                            </li>
<li className="flex items-start gap-3 text-white text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF0058] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Estratégia completa
                            </li>
<li className="flex items-start gap-3 text-white text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF0058] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Funis e LPs de alta conversão
                            </li>
<li className="flex items-start gap-3 text-white text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF0058] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Conteúdo estratégico
                            </li>
</ul>
<a className="block w-full py-3 text-center rounded-lg gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity" href="#contato">Solicitar proposta</a>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#1A1A1A] border border-[#3A3A3A] hover:border-[#555] transition-all">
<h3 className="text-xl font-medium text-white mb-2">Performance</h3>
<p className="text-sm text-[#909090] mb-8">Para grandes operações e escala.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-[#C7C7C7] text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF1E50] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Tudo do plano Crescimento
                        </li>
<li className="flex items-start gap-3 text-[#C7C7C7] text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF1E50] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Multiplataformas (Ads, LinkedIn, etc)
                        </li>
<li className="flex items-start gap-3 text-[#C7C7C7] text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF1E50] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Estratégias de escala agressiva
                        </li>
<li className="flex items-start gap-3 text-[#C7C7C7] text-sm">
<svg className="lucide lucide-check w-4 h-4 text-[#FF1E50] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Relatórios quinzenais
                        </li>
</ul>
<a className="block w-full py-3 text-center rounded-lg border border-[#3A3A3A] text-white text-sm font-medium hover:bg-[#252525] transition-colors" href="#contato">Solicitar proposta</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#121212] border-y border-[#1A1A1A]">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-12 text-center">Resultados reais em diversos segmentos</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#3A3A3A] border border-[#3A3A3A] rounded-lg overflow-hidden">
<div className="bg-[#121212] p-8 text-center hover:bg-[#1A1A1A] transition-colors">
<div className="text-3xl font-semibold text-[#FF5722] mb-1">+40</div>
<div className="text-sm text-[#909090]">Matrículas/mêsEducação</div>
</div>
<div className="bg-[#121212] p-8 text-center hover:bg-[#1A1A1A] transition-colors">
<div className="text-3xl font-semibold text-[#FF0058] mb-1">7 dias</div>
<div className="text-sm text-[#909090]">Para fechar projetoArquitetura</div>
</div>
<div className="bg-[#121212] p-8 text-center hover:bg-[#1A1A1A] transition-colors">
<div className="text-3xl font-semibold text-[#FF1E50] mb-1">-40%</div>
<div className="text-sm text-[#909090]">Redução no CPLE-commerce</div>
</div>
<div className="bg-[#121212] p-8 text-center hover:bg-[#1A1A1A] transition-colors">
<div className="text-3xl font-semibold text-white mb-1">High</div>
<div className="text-sm text-[#909090]">Ticket &amp; RecorrênciaConsultorias</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0E0E0E]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-10 text-center">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] open:border-[#FF5722]/50 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-[#F2F2F2]">
<span>Qual é o prazo para ver resultados?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-[#909090]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-[#909090] p-5 pt-0 text-sm leading-relaxed">
                        Os resultados variam de acordo com o nicho e o investimento, mas geralmente começamos a ver tracionamento nas primeiras 4 semanas após a implementação da estratégia.
                    </div>
</details>
<details className="group bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] open:border-[#FF5722]/50 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-[#F2F2F2]">
<span>Sua assessoria atende qualquer nicho?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-[#909090]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-[#909090] p-5 pt-0 text-sm leading-relaxed">
                        Tenho experiência vasta em educação, serviços, e-commerce e negócios locais. Analiso cada negócio individualmente para garantir que posso entregar valor real.
                    </div>
</details>
<details className="group bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] open:border-[#FF5722]/50 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-[#F2F2F2]">
<span>Você faz criação de conteúdo?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-[#909090]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-[#909090] p-5 pt-0 text-sm leading-relaxed">
                        Focamos na estratégia de conteúdo e linhas editoriais. A produção (design/vídeo) pode ser adicionada como ativo extra ou orientada para sua equipe interna.
                    </div>
</details>
<details className="group bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] open:border-[#FF5722]/50 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-[#F2F2F2]">
<span>Qual a diferença entre assessoria e tráfego?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-[#909090]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-[#909090] p-5 pt-0 text-sm leading-relaxed">
                        Gestores de tráfego apenas apertam botões. A assessoria olha para o todo: oferta, comercial, funil, posicionamento e dados para gerar lucro, não apenas cliques.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#0E0E0E]" id="contato">

<div className="absolute inset-0 bg-gradient-to-t from-[#FF0058]/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF5722] opacity-20 blur-[150px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
                Se você busca previsibilidade, presença e vendas, eu posso ajudar.
            </h2>
<p className="text-xl text-[#C7C7C7] mb-12 font-light">
                Vamos construir um sistema de aquisição para seu negócio — sólido, estratégico e lucrativo.
            </p>
<a className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-xl gradient-bg text-white hover:shadow-[0_0_40px_-10px_rgba(255,0,88,0.5)] transition-all transform hover:-translate-y-1" href="#">
                Quero crescer com estratégia
                <svg className="lucide lucide-arrow-up-right w-6 h-6 ml-2" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section>

<footer className="py-12 border-t border-[#1A1A1A] bg-[#0E0E0E]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full gradient-bg"></div>
<span className="text-lg font-semibold text-[#F2F2F2]">LeadFlow</span>
</div>
<div className="text-[#909090] text-sm">
                © 2024 LeadFlow System. Todos os direitos reservados.
            </div>
<div className="flex gap-6">
<a className="text-[#909090] hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-[#909090] hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-[#909090] hover:text-white transition-colors" href="#"><svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
</div>
</footer>


    </>
  );
}
