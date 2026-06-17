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



        // Scroll Reveal Animation logic similar to Framer Motion
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px" 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Stop observing once active if you don't want it to re-animate
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md reveal active">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 font-medium tracking-tight text-sm">
<span className="text-white">ESCALA</span>
<span className="text-blue-500">EXPONENCIAL</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-normal">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Sobre nós</a>
<a className="hover:text-white transition-colors" href="#">Serviços</a>
<a className="hover:text-white transition-colors" href="#">Clientes</a>
<a className="hover:text-white transition-colors" href="#">Contato</a>
</div>
<button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-[0_0_15px_-3px_rgba(37,99,235,0.4)]">
                Entrar em Contato
            </button>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none opacity-50 animate-pulse"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-[10px] text-blue-400 font-medium tracking-wide uppercase mb-8">
                    Escala Exponencial
                </div>
</div>
<h1 className="reveal delay-100 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                A última agência de marketing <br className="hidden md:block"/>
<span className="text-gradient-blue">que você vai contratar.</span>
</h1>
<p className="reveal delay-200 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Nosso foco é crescer com nossos <br className="hidden md:block"/>
                clientes em parcerias de longo prazo
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-8 py-3 rounded-md transition-all flex items-center justify-center gap-2 group shadow-[0_4px_20px_-5px_rgba(37,99,235,0.5)]">
                    Quero Escalar Meu Negócio
                    <iconify-icon className="text-lg group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-transparent border border-white/10 hover:border-white/20 text-white text-sm font-medium px-8 py-3 rounded-md transition-all hover:bg-white/5">
                    Conhecer Serviços
                </button>
</div>

<div className="reveal delay-400 flex flex-wrap justify-center gap-4 opacity-80">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold border border-white/10 hover:scale-110 transition-transform cursor-default">IP</div>
<div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-[10px] font-bold border border-white/10 hover:scale-110 transition-transform cursor-default">GO</div>
<div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-[10px] font-bold border border-white/10 text-black hover:scale-110 transition-transform cursor-default">Cl</div>
<div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-bold border border-white/10 text-black hover:scale-110 transition-transform cursor-default">SU</div>
<div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold border border-white/10 hover:scale-110 transition-transform cursor-default">GI</div>
<div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-bold border border-white/10 text-black hover:scale-110 transition-transform cursor-default">CI</div>
<div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-bold border border-white/10 text-black hover:scale-110 transition-transform cursor-default">Cl</div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[10px] font-bold border border-white/10 text-black hover:scale-110 transition-transform cursor-default">On</div>
</div>
<div className="mt-20 flex justify-center reveal delay-500">
<div className="w-[20px] h-[32px] border border-white/20 rounded-full flex justify-center pt-2 opacity-50">
<div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<div className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] text-blue-400 font-medium tracking-wide uppercase mb-4">
                    Soluções Integradas
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Estratégias em Marketing e Vendas <br/>
<span className="text-gradient-blue">para empresas de todos os portes</span>
</h2>
<p className="text-gray-400 font-light text-base md:text-lg max-w-2xl mx-auto">
                    Corte gastos desnecessários, potencialize seu faturamento e expanda sua empresa com previsibilidade através das nossas soluções.
                </p>
</div>
<div className="relative pl-8 md:pl-12 border-l border-white/10 space-y-12">

<div className="relative reveal delay-100">
<div className="absolute -left-[39px] md:-left-[55px] top-1 w-8 h-8 rounded-full bg-[#0a0a0a] border border-blue-500/30 flex items-center justify-center text-blue-500 shadow-[0_0_10px_-3px_rgba(59,130,246,0.3)]">
<iconify-icon icon="solar:infinity-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Meta Ads</h3>
<p className="text-gray-500 text-sm font-light">Anúncios para Instagram e Facebook</p>
</div>

<div className="relative reveal delay-200">
<div className="absolute -left-[39px] md:-left-[55px] top-1 w-8 h-8 rounded-full bg-[#0a0a0a] border border-blue-500/30 flex items-center justify-center text-blue-500 shadow-[0_0_10px_-3px_rgba(59,130,246,0.3)]">
<span className="text-xs font-bold">G</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">Google Ads</h3>
<p className="text-gray-500 text-sm font-light">Apareça quando buscam por você</p>
</div>

<div className="relative reveal delay-300">
<div className="absolute -left-[39px] md:-left-[55px] top-1 w-8 h-8 rounded-full bg-[#0a0a0a] border border-purple-500/30 flex items-center justify-center text-purple-500 shadow-[0_0_10px_-3px_rgba(168,85,247,0.3)]">
<iconify-icon icon="solar:music-note-slider-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">TikTok Ads</h3>
<p className="text-gray-500 text-sm font-light">Alcance o público mais jovem</p>
</div>

<div className="relative reveal delay-400">
<div className="absolute -left-[39px] md:-left-[55px] top-1 w-8 h-8 rounded-full bg-[#0a0a0a] border border-pink-500/30 flex items-center justify-center text-pink-500 shadow-[0_0_10px_-3px_rgba(236,72,153,0.3)]">
<iconify-icon icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Inteligência Artificial</h3>
<p className="text-gray-500 text-sm font-light">Automação e respostas inteligentes</p>
</div>

<div className="relative reveal delay-500">
<div className="absolute -left-[39px] md:-left-[55px] top-1 w-8 h-8 rounded-full bg-[#0a0a0a] border border-green-500/30 flex items-center justify-center text-green-500 shadow-[0_0_10px_-3px_rgba(34,197,94,0.3)]">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Inside Sales</h3>
<p className="text-gray-500 text-sm font-light">Equipe comercial treinada</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808]">
<div className="max-w-5xl mx-auto px-6">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
                    Seu marketing precisa dar lucro, <span className="text-gradient-blue">não dor de cabeça.</span>
</h2>
<p className="text-gray-400 font-light text-center mb-16 max-w-2xl mx-auto">
                    Se você investe cada vez mais e o retorno financeiro não aumenta, enquanto você se perde em relatórios que não entende, seu lugar é aqui.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 glass-card p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-3xl text-blue-500 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="text-4xl font-semibold text-white mb-2 tracking-tight">+74</div>
<div className="text-sm font-medium text-white mb-1">clientes</div>
<div className="text-xs text-gray-500">confiam no nosso trabalho</div>
</div>

<div className="reveal delay-200 glass-card p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-3xl text-blue-500 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:target-linear"></iconify-icon>
<div className="text-4xl font-semibold text-white mb-2 tracking-tight">+20</div>
<div className="text-sm font-medium text-white mb-1">nichos</div>
<div className="text-xs text-gray-500">validados com método único</div>
</div>

<div className="reveal delay-300 glass-card p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-3xl text-blue-500 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:shield-check-linear"></iconify-icon>
<div className="text-4xl font-semibold text-white mb-2 tracking-tight">100%</div>
<div className="text-sm font-medium text-white mb-1">Garantia em contrato</div>
<div className="text-xs text-gray-500">mediante alinhamento</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative">
<div className="max-w-5xl mx-auto px-6">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
                    Você se identifica com <span className="text-gradient-red">algum desses cenários?</span>
</h2>
<p className="text-gray-400 font-light text-center mb-16 max-w-2xl mx-auto">
                    Se seu negócio passa por algum desses problemas, você não está sozinho. A boa notícia é que existe solução.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="reveal delay-100 glass-card p-6 rounded-lg flex items-start gap-4 hover:bg-red-950/5 transition-colors group">
<div className="mt-1 min-w-[32px] h-[32px] rounded-md bg-red-500/10 flex items-center justify-center text-red-500">
<iconify-icon className="text-lg" icon="solar:graph-down-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-2">As vendas estão fracas</h3>
<p className="text-xs text-gray-500 leading-relaxed">Você não sabe se esse mês vai ser bom ou ruim. Vive na incerteza, sem controle sobre o fluxo de clientes.</p>
</div>
</div>

<div className="reveal delay-200 glass-card p-6 rounded-lg flex items-start gap-4 hover:bg-red-950/5 transition-colors group">
<div className="mt-1 min-w-[32px] h-[32px] rounded-md bg-red-500/10 flex items-center justify-center text-red-500">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-2">Tempo desperdiçado</h3>
<p className="text-xs text-gray-500 leading-relaxed">Gasta horas tentando fazer anúncios, mexer no site, responder WhatsApp e nada parece funcionar direito.</p>
</div>
</div>

<div className="reveal delay-300 glass-card p-6 rounded-lg flex items-start gap-4 hover:bg-red-950/5 transition-colors group">
<div className="mt-1 min-w-[32px] h-[32px] rounded-md bg-red-500/10 flex items-center justify-center text-red-500">
<iconify-icon className="text-lg" icon="solar:chat-round-warning-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-2">O contatos não fecha comigo</h3>
<p className="text-xs text-gray-500 leading-relaxed">Pessoas até demonstram interesse, mas somem no WhatsApp. Você perde vendas por falta de processo.</p>
</div>
</div>

<div className="reveal delay-400 glass-card p-6 rounded-lg flex items-start gap-4 hover:bg-red-950/5 transition-colors group">
<div className="mt-1 min-w-[32px] h-[32px] rounded-md bg-red-500/10 flex items-center justify-center text-red-500">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-2">O investimento não retorna</h3>
<p className="text-xs text-gray-500 leading-relaxed">Já investiu em agências ou ferramentas que prometeram muito e entregaram pouco. Frustração constante.</p>
</div>
</div>
</div>
<p className="reveal delay-500 text-center text-sm font-medium text-gray-300 mt-12">Mas não precisa ser assim...</p>
</div>
</section>

<section className="py-24 bg-[#080808] border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<div className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] text-blue-400 font-medium tracking-wide uppercase mb-4">
                    Nossos Serviços
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    Tudo o que você precisa para <span className="text-gradient-blue">escalar de verdade</span>
</h2>
<p className="text-gray-400 font-light mt-4 max-w-2xl mx-auto">
                    Uma solução completa que cobre todas as frentes do seu marketing digital, de forma integrada e com foco em resultados.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal delay-100 glass-card p-6 rounded-xl hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-2xl text-blue-500" icon="solar:target-linear"></iconify-icon>
<span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">Demanda qualificada</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Criação e Gestão de Anúncios</h3>
<p className="text-xs text-gray-500 leading-relaxed">Planejamento, criação e gestão de campanhas com foco em geração de demanda qualificada. Acompanhamento diário e ajustes constantes.</p>
</div>

<div className="reveal delay-200 glass-card p-6 rounded-xl hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-2xl text-blue-500" icon="solar:sidebar-minimalistic-linear"></iconify-icon>
<span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">Alta conversão</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Estrutura Digital de Conversão</h3>
<p className="text-xs text-gray-500 leading-relaxed">Desenvolvimento de site, páginas e formulários focados em conversão e experiência do usuário. Tudo pensado para transformar interesse em contato real.</p>
</div>

<div className="reveal delay-300 glass-card p-6 rounded-xl hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-2xl text-blue-500" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">Zero perdas</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Funil Estruturado de WhatsApp</h3>
<p className="text-xs text-gray-500 leading-relaxed">Organização completa do WhatsApp como canal de vendas: mensagens estratégicas, fluxos de atendimento, etiquetas e estrutura para evitar perda de oportunidades.</p>
</div>

<div className="reveal delay-100 glass-card p-6 rounded-xl hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-2xl text-blue-500" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">Direção contínua</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Relatórios Estratégicos</h3>
<p className="text-xs text-gray-500 leading-relaxed">Relatórios claros, objetivos e completos, com análise de desempenho, pontos de melhoria, ajustes recomendados e próximos passos.</p>
</div>

<div className="reveal delay-200 glass-card p-6 rounded-xl hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-2xl text-blue-500" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">Melhoria constante</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Otimização Contínua</h3>
<p className="text-xs text-gray-500 leading-relaxed">Análise e otimização diária de toda a estrutura: anúncios, páginas, mensagens e fluxo de conversão. Sistema ajustado continuamente.</p>
</div>

<div className="reveal delay-300 glass-card p-6 rounded-xl hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-2xl text-blue-500" icon="solar:headset-linear"></iconify-icon>
<span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">Parceria real</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Acompanhamento Estratégico</h3>
<p className="text-xs text-gray-500 leading-relaxed">Acompanhamento próximo da operação, com visão estratégica e suporte direto. Antecipamos problemas e identificamos oportunidades.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-4xl mx-auto px-6">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
                    Do diagnóstico à <span className="text-gradient-blue">escala do seu negócio</span>
</h2>
<p className="text-gray-400 font-light text-center mb-20 max-w-xl mx-auto">
                    Um processo estruturado e validado que transforma negócios locais em máquinas de crescimento previsível.
                </p>
</div>
<div className="relative space-y-12">

<div className="absolute left-[15px] top-4 bottom-4 w-px bg-white/10 z-0"></div>

<div className="relative z-10 flex gap-6 md:gap-8 reveal delay-100">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_-2px_rgba(37,99,235,0.5)] border border-blue-400">1</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Diagnóstico Inicial</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-4">Entendemos profundamente seu negócio, seus desafios e objetivos. Mapeamos o cenário atual para criar a estratégia ideal.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Análise do negócio</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Estudo de mercado</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Definição de metas</span>
</div>
</div>
</div>

<div className="relative z-10 flex gap-6 md:gap-8 reveal delay-200">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_-2px_rgba(37,99,235,0.5)] border border-blue-400">2</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Estruturação Completa</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-4">Construímos toda a infraestrutura digital: páginas, anúncios, WhatsApp estruturado e processos de conversão.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Landing pages otimizadas</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Campanhas de anúncios</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Funil de WhatsApp</span>
</div>
</div>
</div>

<div className="relative z-10 flex gap-6 md:gap-8 reveal delay-300">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_-2px_rgba(37,99,235,0.5)] border border-blue-400">3</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Ativação e Testes</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-4">Colocamos tudo para rodar, monitoramos os resultados iniciais e fazemos ajustes rápidos para otimização.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Lançamento controlado</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Monitoramento 24/7</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Ajustes em tempo real</span>
</div>
</div>
</div>

<div className="relative z-10 flex gap-6 md:gap-8 reveal delay-400">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_-2px_rgba(37,99,235,0.5)] border border-blue-400">4</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Escala com Previsibilidade</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-4">Com os processos validados, escalamos os resultados mantendo eficiência e previsibilidade no crescimento.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Aumento gradual de investimento</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Resultados constantes</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">Crescimento sustentável</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030303]">
<div className="max-w-xl mx-auto px-6">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
                    Dê o primeiro passo para <span className="text-gradient-red">escalar seu negócio agora!</span>
</h2>
<p className="text-center text-xs text-gray-500 mb-12">Preencha abaixo</p>
</div>
<div className="reveal delay-200 glass-card p-8 rounded-xl border border-white/10 shadow-2xl">
<form className="space-y-6">
<div>
<label className="block text-xs font-medium text-white mb-2">Qual é o seu nome e sobrenome? <span className="text-red-500">*</span></label>
<input className="w-full bg-transparent border-b border-gray-700 focus:border-blue-500 text-sm py-2 px-0 text-white placeholder-gray-600 outline-none transition-colors" placeholder="Digite sua resposta aqui..." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-white mb-2">Qual é o seu e-mail? <span className="text-red-500">*</span></label>
<input className="w-full bg-transparent border-b border-gray-700 focus:border-blue-500 text-sm py-2 px-0 text-white placeholder-gray-600 outline-none transition-colors" placeholder="Digite sua resposta aqui..." type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-white mb-2">Qual é o seu telefone? <span className="text-red-500">*</span></label>
<input className="w-full bg-transparent border-b border-gray-700 focus:border-blue-500 text-sm py-2 px-0 text-white placeholder-gray-600 outline-none transition-colors" placeholder="Digite sua resposta aqui..." type="tel"/>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-3 rounded-md transition-all mt-4" type="button">
                        Enviar
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] text-blue-400 font-medium tracking-wide uppercase mb-6">
                    Sobre nós
                </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                    Mais que uma agência, <br/>
<span className="text-gradient-blue">um parceiro de crescimento</span>
</h2>
<div className="space-y-6 text-gray-400 text-sm font-light leading-relaxed">
<p>Aqui, o tráfego pago não é o nosso produto final. É tratado como parte de um sistema de vendas, pensado para gerar previsibilidade, crescimento e vendas.</p>
<p>Ao longo de mais de 5 anos de atuação, trabalhando diretamente com dezenas de empresas, entendemos uma verdade simples:</p>
<div className="pl-4 border-l-2 border-white/20 italic text-white text-base">
                        "Empresas não precisam de anúncios, precisam de estrutura para vender mais todos os meses."
                    </div>
<p>Por isso, nosso foco não é "rodar campanha". Nosso foco é construir <span className="text-blue-400">parcerias estratégicas</span>, onde o crescimento do cliente é também o nosso crescimento.</p>
</div>
</div>

<div className="reveal delay-200 glass-card p-6 md:p-8 rounded-2xl border border-white/10 bg-[#080808]">
<div className="flex items-center gap-4 mb-8">
<div className="w-14 h-14 rounded-full bg-gray-700 overflow-hidden border-2 border-blue-500/50">
<img alt="Profile" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Murilo"/>
</div>
<div>
<div className="font-medium text-white text-lg">Murilo Cruise</div>
<div className="text-xs text-blue-400">Fundador &amp; Estrategista</div>
</div>
</div>
<div className="space-y-6">
<div className="flex gap-3">
<iconify-icon className="text-xl text-blue-500 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Foco em Resultados</h4>
<p className="text-xs text-gray-500">Métricas objetivas de vendas. Cada ação é pensada para impactar no seu faturamento.</p>
</div>
</div>
<div className="flex gap-3">
<iconify-icon className="text-xl text-blue-500 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Parceria Genuína</h4>
<p className="text-xs text-gray-500">Não somos apenas fornecedores, somos parceiros estratégicos do seu crescimento.</p>
</div>
</div>
<div className="flex gap-3">
<iconify-icon className="text-xl text-blue-500 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Flexibilidade Máxima</h4>
<p className="text-xs text-gray-500">Soluções moldadas às estratégias de crescimento do seu negócio.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#030303] text-center reveal">
<p className="text-xs text-gray-600">© 2024 Escala Exponencial. Todos os direitos reservados.</p>
</footer>


    </>
  );
}
