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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-white text-xl" data-icon="lucide:sparkles"></span>
<span className="text-white font-semibold tracking-widest text-sm uppercase">Astra</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#funcionalidades">Funcionalidades</a>
<a className="hover:text-white transition-colors" href="#ia">Inteligência Artificial</a>
<a className="hover:text-white transition-colors" href="#precos">Preços</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Entrar</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Começar</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
<div className="absolute inset-0 grid-bg pointer-events-none"></div>
<div className="absolute inset-0 hero-glow pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="iconify" data-icon="lucide:zap" data-inline="false"></span>
                Gestão Audiovisual 2.0
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                Astra. A estrela guia da <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">gestão audiovisual.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Propostas, roteiros, contratos, storyboard, finanças, tarefas e clientes — tudo organizado em um único lugar, com IAs que entendem o seu fluxo de produção.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" href="#">
                    Começar agora
                    <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 transition-all flex items-center justify-center gap-2" href="#">
<span className="iconify" data-icon="lucide:play-circle"></span>
                    Ver demonstração
                </a>
</div>

<div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-zinc-900/50 shadow-2xl overflow-hidden aspect-[16/9] group">

<div className="h-10 border-b border-white/5 bg-zinc-900 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 flex gap-4 text-xs font-medium text-zinc-500">
<span className="text-white">Projetos</span>
<span>Financeiro</span>
<span>Roteiros</span>
</div>
</div>

<div className="p-6 grid grid-cols-12 gap-6 h-full">

<div className="col-span-2 hidden md:flex flex-col gap-4 border-r border-white/5 pr-4">
<div className="h-8 bg-zinc-800/50 rounded w-3/4"></div>
<div className="h-4 bg-zinc-800/30 rounded w-full"></div>
<div className="h-4 bg-zinc-800/30 rounded w-5/6"></div>
<div className="h-4 bg-zinc-800/30 rounded w-4/5"></div>
<div className="mt-auto h-20 bg-indigo-500/10 border border-indigo-500/20 rounded p-3">
<div className="flex items-center gap-2 text-indigo-400 text-xs mb-2">
<span className="iconify" data-icon="lucide:sparkles"></span> Astra AI
                            </div>
<div className="h-2 bg-indigo-500/20 rounded w-full"></div>
</div>
</div>

<div className="col-span-12 md:col-span-10 flex flex-col gap-6">
<div className="flex justify-between items-end border-b border-white/5 pb-4">
<div>
<div className="text-2xl font-medium text-white tracking-tight">Comercial Nike - Summer 24</div>
<div className="text-xs text-zinc-500 mt-1">Atualizado há 2 min por IA</div>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded bg-green-500/10 text-green-400 text-xs border border-green-500/20">Em Produção</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4">

<div className="p-4 rounded-lg bg-zinc-800/40 border border-white/5 backdrop-blur-sm">
<div className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Orçamento</div>
<div className="text-xl font-medium text-white">R$ 145.000</div>
<div className="text-xs text-green-400 mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up"></span> Margem segura
                                </div>
</div>

<div className="p-4 rounded-lg bg-zinc-800/40 border border-white/5 backdrop-blur-sm">
<div className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Status do Roteiro</div>
<div className="text-sm font-medium text-white flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                    Gerado pela IA
                                </div>
<div className="mt-2 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-3/4"></div>
</div>
</div>

<div className="p-4 rounded-lg bg-zinc-800/40 border border-white/5 backdrop-blur-sm">
<div className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Próxima Etapa</div>
<div className="text-sm font-medium text-white">Aprovação de Storyboard</div>
<div className="flex -space-x-2 mt-2">
<div className="w-6 h-6 rounded-full bg-zinc-700 border border-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-600 border border-zinc-900"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-b border-white/5">
<div className="max-w-3xl mx-auto px-6 text-center">
<span className="iconify text-indigo-500 mx-auto text-3xl mb-6" data-icon="lucide:layers"></span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                Mais que um sistema de gestão. <br/>Um cérebro para sua produtora.
            </h2>
<p className="text-lg text-zinc-400 leading-relaxed">
                Um sistema completo de gestão audiovisual com inteligência artificial proprietária. A Astra substitui planilhas, WhatsApp, pastas soltas, Trello, Notion, Asana e ferramentas de orçamento — centralizando tudo em um só lugar.
            </p>
<div className="mt-8 p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-lg inline-block">
<p className="text-sm text-indigo-300 font-medium">
<span className="iconify inline mr-1" data-icon="lucide:lightbulb"></span>
                    A organização é só o começo. O que realmente muda o jogo são as IAs especializadas.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950/50" id="funcionalidades">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-2">Ecossistema Completo</h3>
<h2 className="text-3xl font-medium text-white tracking-tight">Tudo o que você precisa em uma ferramenta</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
<span className="iconify text-xl" data-icon="lucide:wand-2"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                        Propostas com IA
                        <span className="text-[10px] uppercase bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-bold tracking-wide">AI</span>
</h3>
<p className="text-sm text-zinc-400 mb-4">Gera propostas completas usando prints de WhatsApp ou áudio de reuniões. Lucro, entregáveis e custos calculados instantaneamente.</p>
<div className="text-xs font-medium text-white/60 pt-4 border-t border-white/5 uppercase tracking-wide">Velocidade</div>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
<span className="iconify text-xl" data-icon="lucide:file-text"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                        Roteiros Inteligentes
                        <span className="text-[10px] uppercase bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded font-bold tracking-wide">AI</span>
</h3>
<p className="text-sm text-zinc-400 mb-4">Roteiros profissionais, contextualizados e não genéricos. Criados com a metodologia Astra e conhecimento profundo de mercado.</p>
<div className="text-xs font-medium text-white/60 pt-4 border-t border-white/5 uppercase tracking-wide">Profissionalismo</div>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<span className="iconify text-xl" data-icon="lucide:shield-check"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                        Contratos Jurídicos
                        <span className="text-[10px] uppercase bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded font-bold tracking-wide">AI</span>
</h3>
<p className="text-sm text-zinc-400 mb-4">Monta o contrato completo com base na proposta aprovada. Cláusulas jurídicas blindadas prontas para exportação.</p>
<div className="text-xs font-medium text-white/60 pt-4 border-t border-white/5 uppercase tracking-wide">Segurança</div>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 text-pink-400">
<span className="iconify text-xl" data-icon="lucide:image"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                        Storyboard Automático
                        <span className="text-[10px] uppercase bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded font-bold tracking-wide">AI</span>
</h3>
<p className="text-sm text-zinc-400 mb-4">Selecione uma cena e a IA gera a visualização automaticamente. Cards em linha para fácil visualização do filme.</p>
<div className="text-xs font-medium text-white/60 pt-4 border-t border-white/5 uppercase tracking-wide">Visualidade</div>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-white">
<span className="iconify text-xl" data-icon="lucide:clock"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Ordem do Dia</h3>
<p className="text-sm text-zinc-400 mb-4">Organize horários, locações, refeições e equipe. Tudo visual, arrastável e intuitivo para o set de filmagem.</p>
<div className="text-xs font-medium text-white/60 pt-4 border-t border-white/5 uppercase tracking-wide">Clareza</div>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-white">
<span className="iconify text-xl" data-icon="lucide:kanban"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Gestão de Projetos</h3>
<p className="text-sm text-zinc-400 mb-4">Visão unificada com status, orçamento, equipe, entregas e próximos passos em um dashboard central.</p>
<div className="text-xs font-medium text-white/60 pt-4 border-t border-white/5 uppercase tracking-wide">Controle</div>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-white">
<span className="iconify text-xl" data-icon="lucide:dollar-sign"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Gestão Financeira</h3>
<p className="text-sm text-zinc-400 mb-4">Contas a pagar, receber, resultados e indicadores de performance interpretados pela IA.</p>
<div className="text-xs font-medium text-white/60 pt-4 border-t border-white/5 uppercase tracking-wide">Previsibilidade</div>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-white">
<span className="iconify text-xl" data-icon="lucide:calculator"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Tabela de Serviços</h3>
<p className="text-sm text-zinc-400 mb-4">Monte sua tabela de custos e fornecedores. Saiba exatamente o lucro e a margem de cada item vendido.</p>
<div className="text-xs font-medium text-white/60 pt-4 border-t border-white/5 uppercase tracking-wide">Precificação</div>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-white">
<span className="iconify text-xl" data-icon="lucide:users"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">CRM de Clientes</h3>
<p className="text-sm text-zinc-400 mb-4">Ranking, faturamento por cliente e histórico completo de contratação para fidelizar sua base.</p>
<div className="text-xs font-medium text-white/60 pt-4 border-t border-white/5 uppercase tracking-wide">Valor</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-2">O Diferencial</h3>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Por que produtoras escolhem a Astra?</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-indigo-500 text-xl mt-0.5" data-icon="lucide:check-circle-2"></span>
<span className="text-zinc-400"><strong>IAs Proprietárias:</strong> Treinadas especificamente para o mercado audiovisual.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-500 text-xl mt-0.5" data-icon="lucide:check-circle-2"></span>
<span className="text-zinc-400"><strong>Centralização Total:</strong> Elimina o caos de múltiplas ferramentas desconectadas.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-500 text-xl mt-0.5" data-icon="lucide:check-circle-2"></span>
<span className="text-zinc-400"><strong>Foco Real:</strong> Feito para quem opera no dia a dia da produção (Dark mode nativo).</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-500 text-xl mt-0.5" data-icon="lucide:check-circle-2"></span>
<span className="text-zinc-400"><strong>Zero Retrabalho:</strong> Dados da proposta alimentam roteiro, contrato e financeiro automaticamente.</span>
</li>
</ul>
</div>

<div className="relative h-[400px] rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide/grid.svg?color=%23333&amp;width=20&amp;height=20')] opacity-20"></div>
<div className="relative z-10 w-24 h-24 bg-black rounded-2xl border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.3)]">
<span className="iconify text-4xl text-white" data-icon="lucide:sparkles"></span>
</div>

<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-12 h-12 bg-zinc-800 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400">
<span className="iconify" data-icon="lucide:file-spreadsheet"></span>
</div>
<div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-12 h-12 bg-zinc-800 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400">
<span className="iconify" data-icon="lucide:message-circle"></span>
</div>
<div className="absolute bottom-1/4 left-1/3 -translate-y-1/2 w-12 h-12 bg-zinc-800 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400">
<span className="iconify" data-icon="lucide:trello"></span>
</div>
<div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-12 h-12 bg-zinc-800 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400">
<span className="iconify" data-icon="lucide:file-text"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="ia">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:brain-circuit"></span>
                    Inteligência Artificial
                </span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Potência Criativa</h2>
<p className="text-zinc-400 max-w-2xl mx-auto">Não misturamos organização com IA. Nossos modelos gerativos criam ativos reais para sua produção.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 h-[300px] flex flex-col justify-between">
<div className="p-8 z-10">
<div className="flex items-center gap-3 mb-2 text-indigo-400">
<span className="iconify text-xl" data-icon="lucide:wand-2"></span>
<span className="font-semibold tracking-tight">IA de Propostas</span>
</div>
<p className="text-sm text-zinc-400">De um áudio de WhatsApp para um PDF orçado e diagramado.</p>
</div>
<div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-zinc-800/50 rounded-tl-3xl border-t border-l border-white/5 p-4 translate-y-4 translate-x-4 group-hover:translate-y-2 group-hover:translate-x-2 transition-transform">

<div className="space-y-3">
<div className="h-2 w-1/3 bg-zinc-700 rounded"></div>
<div className="h-2 w-1/2 bg-zinc-700 rounded"></div>
<div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded text-[10px] text-indigo-300 font-mono">
                                &gt; Calculando margem de lucro...<br/>
                                &gt; Margem estimada: 32%<br/>
                                &gt; Gerando PDF...
                            </div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 h-[300px] flex flex-col justify-between">
<div className="p-8 z-10">
<div className="flex items-center gap-3 mb-2 text-purple-400">
<span className="iconify text-xl" data-icon="lucide:scroll-text"></span>
<span className="font-semibold tracking-tight">IA de Roteiros</span>
</div>
<p className="text-sm text-zinc-400">Criação narrativa baseada em metodologia de cinema.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 to-transparent z-20"></div>
<div className="absolute bottom-0 right-0 w-full p-8 font-mono text-xs text-zinc-500 opacity-50">
                        CENA 1. INT. ESCRITÓRIO - DIA<br/>
                        A câmera desliza suavemente revelando um ambiente caótico...
                     </div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 h-[300px] flex flex-col justify-between">
<div className="p-8 z-10">
<div className="flex items-center gap-3 mb-2 text-blue-400">
<span className="iconify text-xl" data-icon="lucide:scale"></span>
<span className="font-semibold tracking-tight">IA de Contratos</span>
</div>
<p className="text-sm text-zinc-400">Segurança jurídica instantânea.</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-10">
<span className="iconify text-9xl text-white" data-icon="lucide:shield"></span>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 h-[300px] flex flex-col justify-between">
<div className="p-8 z-10">
<div className="flex items-center gap-3 mb-2 text-pink-400">
<span className="iconify text-xl" data-icon="lucide:clapperboard"></span>
<span className="font-semibold tracking-tight">IA de Storyboard</span>
</div>
<p className="text-sm text-zinc-400">Selecione a cena. A IA desenha o frame.</p>
</div>
<div className="absolute bottom-0 right-0 w-full flex justify-end p-4 gap-2">
<div className="w-24 h-16 bg-zinc-800 rounded border border-white/10"></div>
<div className="w-24 h-16 bg-zinc-700 rounded border border-white/10"></div>
<div className="w-24 h-16 bg-zinc-600 rounded border border-white/10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="text-left md:w-1/3">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Resultados Reais</h2>
<p className="text-zinc-400 text-sm">Métricas de quem usa Astra diariamente.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-2/3">
<div className="text-center">
<div className="text-3xl font-semibold text-white tracking-tight">32%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Mais Margem</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white tracking-tight">5h</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Economia/Dia</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white tracking-tight">0</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Planilhas</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white tracking-tight">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Contratos Assinados</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">Substitua o caos por um sistema</h2>
<div className="relative p-8 rounded-2xl border border-white/10 bg-zinc-900/50">
<div className="flex flex-wrap justify-center gap-4 opacity-50 mb-8 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-zinc-400 line-through decoration-zinc-500 decoration-2">Trello</div>
<div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-zinc-400 line-through decoration-zinc-500 decoration-2">Notion</div>
<div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-zinc-400 line-through decoration-zinc-500 decoration-2">Asana</div>
<div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-zinc-400 line-through decoration-zinc-500 decoration-2">Excel</div>
<div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-zinc-400 line-through decoration-zinc-500 decoration-2">WhatsApp</div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-2 rounded-full border border-white/10 z-10">
<span className="iconify text-zinc-500" data-icon="lucide:arrow-down"></span>
</div>
<div className="flex items-center justify-center gap-3">
<span className="iconify text-2xl text-white" data-icon="lucide:sparkles"></span>
<span className="text-2xl font-semibold text-white tracking-widest uppercase">Astra</span>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="mb-4 text-white">
<span className="iconify text-2xl" data-icon="lucide:import"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Importação de Dados</h3>
<p className="text-sm text-zinc-400">A gente importa todos os seus dados. Você não perde histórico ao migrar para o Astra. A transição é suave e guiada.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="mb-4 text-white">
<span className="iconify text-2xl" data-icon="lucide:lock"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Privacidade Total</h3>
<p className="text-sm text-zinc-400">Dados criptografados de ponta a ponta. Nossa equipe só vê o que você permite explicitamente.</p>
</div>
</div>
</section>

<section className="py-24" id="precos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight">Planos Escaláveis</h2>
<p className="text-zinc-400 mt-2">Invista na organização da sua produtora.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/20">
<h3 className="font-medium text-white text-lg">Freelancer</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">R$ 97</span>
<span className="text-zinc-500">/mês</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-zinc-400">
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> 1 Usuário</li>
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> Gestão de Projetos</li>
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> Propostas Ilimitadas</li>
</ul>
<a className="mt-8 block w-full py-2 rounded-lg border border-zinc-700 text-center text-sm font-medium text-white hover:bg-zinc-800 transition-colors" href="#">Selecionar</a>
</div>

<div className="relative p-8 rounded-2xl border border-indigo-500/50 bg-zinc-900 shadow-[0_0_40px_rgba(99,102,241,0.1)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">Recomendado</div>
<h3 className="font-medium text-white text-lg">Produtora</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">R$ 247</span>
<span className="text-zinc-500">/mês</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-zinc-300">
<li className="flex gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Até 5 Usuários</li>
<li className="flex gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> <strong>Todas as IAs inclusas</strong></li>
<li className="flex gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Financeiro Completo</li>
<li className="flex gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Roteiros &amp; Storyboards</li>
</ul>
<a className="mt-8 block w-full py-2 rounded-lg bg-white text-center text-sm font-medium text-black hover:bg-zinc-200 transition-colors" href="#">Começar Agora</a>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/20">
<h3 className="font-medium text-white text-lg">Studio</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">Sob Consulta</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-zinc-400">
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> Usuários Ilimitados</li>
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> API Dedicada</li>
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> Onboarding Personalizado</li>
</ul>
<a className="mt-8 block w-full py-2 rounded-lg border border-zinc-700 text-center text-sm font-medium text-white hover:bg-zinc-800 transition-colors" href="#">Falar com Vendas</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-black pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Sua produtora merece a Astra.</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-lg" href="#">
                    Começar agora
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:sparkles"></span>
<span className="text-zinc-500 font-semibold tracking-widest text-xs uppercase">Astra © 2024</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
