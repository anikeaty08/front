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
      
tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
extend: {
colors: {
neutral: {
850: '#1f1f22',
950: '#0a0a0a',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md z-50">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="text-white font-medium tracking-tight text-xl flex items-center gap-2">
<iconify-icon className="" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
                BUILD.AI
            </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Maturity Model
            </div>
</div>
</nav>

<header className="pt-40 pb-24 px-6 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="text-center max-w-4xl z-10 mr-auto ml-auto relative">
<div className="inline-flex gap-2 text-xs font-medium text-neutral-400 bg-neutral-900/50 border-neutral-800 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                O Futuro da Engenharia
            </div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                Modelo de Maturidade em IA <br className="hidden md:block"/>para Construtoras
            </h1>
<p className="text-lg md:text-xl text-neutral-400 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                Um mapa claro para evoluir do uso básico de ferramentas até a criação de inteligência estratégica proprietária na sua empresa.
            </p>
</div>
</header>

<section className="py-16 px-6 border-y border-neutral-900 bg-neutral-900/20">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/40">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon className="text-xl" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium tracking-tight mb-2">O que é?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Um framework que define estágios de evolução no uso de Inteligência Artificial, medindo impacto, integração e autonomia da equipe.</p>
</div>
<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/40">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon className="text-xl" icon="solar:chart-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium tracking-tight mb-2">Por que evoluir?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Sair do uso reativo e pontual para construir vantagens competitivas reais, reduzindo custos, mitigando riscos e acelerando obras.</p>
</div>
<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/40">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white mb-4">
<iconify-icon className="text-xl" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium tracking-tight mb-2">A Progressão</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Uma jornada estruturada em 6 níveis: do ganho de velocidade individual à transformação do conhecimento interno em um ativo gerador de lucro.</p>
</div>
</div>
</section>

<main className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto px-4 space-y-32">

<section className="relative">
<div className="-left-px w-px hidden md:block bg-neutral-800 absolute top-0 bottom-0"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
<div className="md:col-span-4 relative">
<div className="md:absolute -left-[17px] flex md:mb-0 hidden md:flex bg-neutral-950 w-8 h-8 border-emerald-500/30 border-2 rounded-full mb-4 top-0 items-center justify-center">
<div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
</div>
<div className="inline-flex items-center gap-2 text-emerald-500 text-xs font-medium uppercase tracking-widest mb-3">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon> Nível 1
                        </div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Básico</h2>
<p className="text-sm text-neutral-400 mb-6">Acesso à informação. Uso da IA para obter respostas rápidas e substituir buscas tradicionais na internet.</p>
<div className="space-y-4">
<h4 className="text-xs text-white font-medium uppercase tracking-wider">Características</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="flex gap-2"><iconify-icon className="text-emerald-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Uso pontual e reativo</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Sem padronização</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Foco em perguntas rápidas</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Não integrado ao trabalho</li>
</ul>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="col-span-1 sm:col-span-2 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 glow-emerald">
<h4 className="text-xs text-white font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon icon="solar:chat-line-linear"></iconify-icon> Exemplos de Uso
                            </h4>
<div className="space-y-3 font-mono text-xs text-neutral-300">
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60 border-l-2 border-l-emerald-500">"Explique o que é concreto usinado e quando usar em lajes."</div>
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60 border-l-2 border-l-emerald-500">"Qual a diferença técnica entre reboco e emboço?"</div>
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60 border-l-2 border-l-emerald-500">"Melhore esse texto para o cliente sobre o atraso da obra devido à chuva."</div>
</div>
</div>
<div className="col-span-1 sm:col-span-2 mt-2 p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-500" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm text-white font-medium mb-1">Resultados Esperados</h4>
<p className="text-xs text-neutral-400">Ganho de velocidade individual (5x–10x em tarefas de texto), redução drástica do tempo de pesquisa e menor dependência de Google e fóruns técnicos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="absolute -left-px top-0 bottom-0 w-px bg-neutral-800 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
<div className="md:col-span-4 relative">
<div className="md:absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-neutral-950 border-2 border-yellow-500/30 flex items-center justify-center mb-4 md:mb-0 hidden md:flex">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
</div>
<div className="inline-flex items-center gap-2 text-yellow-500 text-xs font-medium uppercase tracking-widest mb-3">
<iconify-icon icon="solar:widget-linear"></iconify-icon> Nível 2
                        </div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Produtivo</h2>
<p className="text-sm text-neutral-400 mb-6">Padronização e execução. A IA atua como um assistente operacional poderoso no dia a dia da equipe.</p>
<div className="space-y-4">
<h4 className="text-xs text-white font-medium uppercase tracking-wider">Características</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="flex gap-2"><iconify-icon className="text-yellow-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Uso recorrente</li>
<li className="flex gap-2"><iconify-icon className="text-yellow-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Padronização de comunicação</li>
<li className="flex gap-2"><iconify-icon className="text-yellow-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Redução de retrabalho</li>
<li className="flex gap-2"><iconify-icon className="text-yellow-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Aplicação administrativa</li>
</ul>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="col-span-1 sm:col-span-2 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 glow-yellow">
<h4 className="text-xs text-white font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> Exemplos de Uso
                            </h4>
<div className="space-y-3 font-mono text-xs text-neutral-300">
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60 border-l-2 border-l-yellow-500">"Gere uma lista de solicitação de materiais no padrão da empresa: descrição, quantidade, unidade, prioridade e observações."</div>
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60 border-l-2 border-l-yellow-500">"Gere um relatório diário de obra (RDO) estruturado com base nestes apontamentos rápidos em áudio/texto."</div>
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60 border-l-2 border-l-yellow-500">"Organize minhas tarefas do dia como engenheiro residente, priorizando concretagem."</div>
</div>
</div>
<div className="col-span-1 sm:col-span-2 mt-2 p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/10 flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-yellow-500" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1">Resultados Esperados</h4>
<p className="text-xs text-neutral-400">Aumento real de produtividade, comunicação mais profissional com clientes e fornecedores, menos erros operacionais e economia de horas semanais.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="absolute -left-px top-0 bottom-0 w-px bg-neutral-800 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
<div className="md:col-span-4 relative">
<div className="md:absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-neutral-950 border-2 border-blue-500/30 flex items-center justify-center mb-4 md:mb-0 hidden md:flex">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
</div>
<div className="inline-flex items-center gap-2 text-blue-500 text-xs font-medium uppercase tracking-widest mb-3">
<iconify-icon icon="solar:code-square-linear"></iconify-icon> Nível 3
                        </div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Avançado</h2>
<p className="text-sm text-neutral-400 mb-6">Builder / No-code. O usuário passa a construir soluções funcionais mesmo sem saber programar código tradicional.</p>
<div className="space-y-4">
<h4 className="text-xs text-white font-medium uppercase tracking-wider">Características</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="flex gap-2"><iconify-icon className="text-blue-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Perfil explorador</li>
<li className="flex gap-2"><iconify-icon className="text-blue-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Sensibilidade a dados</li>
<li className="flex gap-2"><iconify-icon className="text-blue-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Testes constantes</li>
<li className="flex gap-2"><iconify-icon className="text-blue-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Foco na resolução</li>
</ul>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="col-span-1 sm:col-span-2 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 glow-blue">
<h4 className="text-xs text-white font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> Exemplos de Uso
                            </h4>
<div className="space-y-3 font-mono text-xs text-neutral-300">
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60 border-l-2 border-l-blue-500">"Escreva um script para Google Sheets que organize essa planilha de custos em uma estrutura de banco de dados."</div>
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60 border-l-2 border-l-blue-500">"Crie uma estrutura no Airtable/Notion para um sistema simples de controle logístico de obras."</div>
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60 border-l-2 border-l-blue-500">"Escreva o código HTML/CSS para uma landing page de captação de clientes para reformas residenciais."</div>
</div>
</div>
<div className="col-span-1 sm:col-span-2 mt-2 p-5 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-500" icon="solar:rocket-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1">Resultados Esperados</h4>
<p className="text-xs text-neutral-400">Criação rápida de MVPs internos, autonomia técnica da equipe de engenharia, redução da dependência da TI/desenvolvedores para problemas simples.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="absolute -left-px top-0 bottom-0 w-px bg-neutral-800 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
<div className="md:col-span-4 relative">
<div className="md:absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-neutral-950 border-2 border-purple-500/30 flex items-center justify-center mb-4 md:mb-0 hidden md:flex">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
</div>
<div className="inline-flex items-center gap-2 text-purple-500 text-xs font-medium uppercase tracking-widest mb-3">
<iconify-icon icon="solar:infinity-linear"></iconify-icon> Nível 4
                        </div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Engenharia de Automação</h2>
<p className="text-sm text-neutral-400 mb-6">A IA deixa de ser uma ferramenta isolada e passa a ser inserida nos fluxos de processos entre sistemas da construtora.</p>
<div className="space-y-4">
<h4 className="text-xs text-white font-medium uppercase tracking-wider">Características</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="flex gap-2"><iconify-icon className="text-purple-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Automações compartilhadas</li>
<li className="flex gap-2"><iconify-icon className="text-purple-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Integração de sistemas (APIs)</li>
<li className="flex gap-2"><iconify-icon className="text-purple-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> IA invisível nos fluxos</li>
<li className="flex gap-2"><iconify-icon className="text-purple-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Uso multiusuário</li>
</ul>
</div>
</div>
<div className="md:col-span-8 space-y-4">
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 glow-purple">
<h4 className="text-xs text-white font-medium uppercase tracking-wider mb-6 flex items-center gap-2">
<iconify-icon icon="solar:share-circle-linear"></iconify-icon> Arquitetura Típica
                            </h4>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-2">
<div className="flex flex-col items-center gap-2 w-full md:w-auto">
<div className="w-12 h-12 rounded-lg border border-neutral-700 bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-neutral-400 text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 font-mono uppercase">Entrada (E-mail)</span>
</div>
<iconify-icon className="text-purple-500 text-xl hidden md:block" icon="solar:arrow-right-linear"></iconify-icon>
<iconify-icon className="text-purple-500 text-xl md:hidden" icon="solar:arrow-down-linear"></iconify-icon>
<div className="flex flex-col items-center gap-2 w-full md:w-auto relative">
<div className="absolute -inset-2 bg-purple-500/20 blur-xl rounded-full"></div>
<div className="w-16 h-16 rounded-xl border border-purple-500/50 bg-purple-950/50 flex items-center justify-center relative z-10">
<iconify-icon className="text-purple-400 text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<span className="text-[10px] text-purple-400 font-mono uppercase">Processamento IA</span>
</div>
<iconify-icon className="text-purple-500 text-xl hidden md:block" icon="solar:arrow-right-linear"></iconify-icon>
<iconify-icon className="text-purple-500 text-xl md:hidden" icon="solar:arrow-down-linear"></iconify-icon>
<div className="flex flex-col items-center gap-2 w-full md:w-auto">
<div className="w-12 h-12 rounded-lg border border-neutral-700 bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-neutral-400 text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 font-mono uppercase">Saída (CRM/ERP)</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="text-xs text-neutral-400"><strong className="text-neutral-200">Exemplo 1:</strong> E-mails de novos contatos viram propostas pré-preenchidas automaticamente no sistema.</div>
<div className="text-xs text-neutral-400"><strong className="text-neutral-200">Exemplo 2:</strong> Reuniões de alinhamento de obra geram tarefas automáticas no Trello/Asana dos engenheiros.</div>
</div>
</div>
<div className="mt-2 p-5 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-purple-500" icon="solar:layers-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1">Resultados Esperados</h4>
<p className="text-xs text-neutral-400">Produtividade coletiva, drástica redução de trabalho manual invisível, padronização organizacional em larga escala e processos altamente escaláveis.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="absolute -left-px top-0 bottom-0 w-px bg-neutral-800 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
<div className="md:col-span-4 relative">
<div className="md:absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-neutral-950 border-2 border-rose-500/30 flex items-center justify-center mb-4 md:mb-0 hidden md:flex">
<div className="w-2 h-2 rounded-full bg-rose-500"></div>
</div>
<div className="inline-flex items-center gap-2 text-rose-500 text-xs font-medium uppercase tracking-widest mb-3">
<iconify-icon icon="solar:cpu-bolt-linear"></iconify-icon> Nível 5
                        </div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Plataforma Proprietária</h2>
<p className="text-sm text-neutral-400 mb-6">A empresa transcende softwares de prateleira e passa a criar seus próprios ecossistemas nativamente integrados com IA.</p>
<div className="space-y-4">
<h4 className="text-xs text-white font-medium uppercase tracking-wider">Características</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="flex gap-2"><iconify-icon className="text-rose-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Desenvolvimento interno</li>
<li className="flex gap-2"><iconify-icon className="text-rose-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Sistemas ultra-personalizados</li>
<li className="flex gap-2"><iconify-icon className="text-rose-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> IA integrada no "Core"</li>
<li className="flex gap-2"><iconify-icon className="text-rose-500 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Controle total da operação</li>
</ul>
</div>
</div>
<div className="md:col-span-8 space-y-4">
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 glow-rose">
<h4 className="text-xs text-white font-medium uppercase tracking-wider mb-6 flex items-center gap-2">
<iconify-icon icon="solar:structure-linear"></iconify-icon> Visão Arquitetural
                            </h4>

<div className="relative max-w-sm mx-auto p-4 border border-neutral-800 rounded-xl bg-neutral-900/30">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/20 via-transparent to-transparent"></div>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="p-3 border border-neutral-700 rounded bg-neutral-800/80 text-center text-xs text-neutral-300">Módulo de Vendas</div>
<div className="p-3 border border-neutral-700 rounded bg-neutral-800/80 text-center text-xs text-neutral-300">Gestão de Obras</div>
<div className="col-span-2 p-4 border border-rose-500/50 rounded-lg bg-rose-950/30 text-center flex flex-col items-center gap-2 my-2 relative">
<div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center">
<iconify-icon className="text-rose-400" icon="solar:brain-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-rose-300">Core Engine IA</span>

</div>
<div className="p-3 border border-neutral-700 rounded bg-neutral-800/80 text-center text-xs text-neutral-300">Suprimentos</div>
<div className="p-3 border border-neutral-700 rounded bg-neutral-800/80 text-center text-xs text-neutral-300">Financeiro</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-neutral-800 text-xs text-neutral-400 text-center">
                                Exemplo: Um CRM próprio para a construtora onde a IA analisa o perfil do cliente, orça a obra baseado no histórico de suprimentos e aprova o crédito integrado ao financeiro.
                            </div>
</div>
<div className="mt-2 p-5 rounded-xl bg-rose-500/5 border border-rose-500/10 flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-rose-500" icon="solar:shield-star-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1">Resultados Esperados</h4>
<p className="text-xs text-neutral-400">Independência tecnológica de grandes fornecedores (SaaS), vantagem competitiva inatingível por concorrentes menores, eficiência sob medida.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="absolute -left-px top-0 bottom-0 w-px bg-neutral-800 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
<div className="md:col-span-4 relative">
<div className="md:absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-neutral-950 border-2 border-neutral-300/30 flex items-center justify-center mb-4 md:mb-0 hidden md:flex">
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
</div>
<div className="inline-flex items-center gap-2 text-neutral-300 text-xs font-medium uppercase tracking-widest mb-3">
<iconify-icon icon="solar:global-linear"></iconify-icon> Nível 6
                        </div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Inteligência Organizacional</h2>
<p className="text-sm text-neutral-400 mb-6">O Ápice. A IA consome os dados e documentos históricos da empresa (RAG) para gerar insights estratégicos e decisões de alto nível.</p>
<div className="space-y-4">
<h4 className="text-xs text-white font-medium uppercase tracking-wider">Características</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="flex gap-2"><iconify-icon className="text-neutral-300 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Dados perfeitamente estruturados</li>
<li className="flex gap-2"><iconify-icon className="text-neutral-300 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Processos cristalinos</li>
<li className="flex gap-2"><iconify-icon className="text-neutral-300 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> IA treinada com conhecimento interno</li>
<li className="flex gap-2"><iconify-icon className="text-neutral-300 shrink-0 text-base mt-0.5" icon="solar:check-read-linear"></iconify-icon> Análise preditiva e decisão</li>
</ul>
</div>
</div>
<div className="md:col-span-8 space-y-4">
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 glow-white">
<h4 className="text-xs text-white font-medium uppercase tracking-wider mb-6 flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon> Decisão Baseada em Dados
                            </h4>

<div className="flex flex-col md:flex-row items-center justify-between gap-3 py-6 px-4 bg-neutral-950 rounded-xl border border-neutral-800/60">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-neutral-500 text-2xl" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="text-[9px] text-neutral-500 font-mono uppercase">Histórico Obras</span>
</div>
<iconify-icon className="text-neutral-700 hidden md:block" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full border border-neutral-600 bg-neutral-800 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-white text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<span className="text-[9px] text-neutral-400 font-mono uppercase">Análise RAG</span>
</div>
<iconify-icon className="text-neutral-700 hidden md:block" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-neutral-300 text-2xl" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-[9px] text-neutral-300 font-mono uppercase">Insights</span>
</div>
<iconify-icon className="text-neutral-700 hidden md:block" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-white text-2xl" icon="solar:target-linear"></iconify-icon>
<span className="text-[9px] text-white font-mono uppercase font-semibold">Decisão</span>
</div>
</div>
<div className="mt-6 space-y-3 font-mono text-xs text-neutral-300">
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60">"Analise este contrato e aponte cláusulas fora do padrão histórico de aceitação da empresa."</div>
<div className="p-3 bg-neutral-950 rounded border border-neutral-800/60">"Com base nas últimas 50 obras finalizadas, quais tipologias apresentaram maior desvio de custo no aço?"</div>
</div>
</div>
<div className="mt-2 p-5 rounded-xl bg-neutral-800/30 border border-neutral-700/50 flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-700/50 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1">Resultados Esperados</h4>
<p className="text-xs text-neutral-400">Decisões frias baseadas em dados consolidados, redução crítica de riscos contratuais e orçamentários, aumento de rentabilidade e o conhecimento corporativo transformado em ativo estratégico imensurável.</p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

<section className="py-24 px-6 border-t border-neutral-900 bg-neutral-950">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Resumo da Evolução</h2>
<p className="text-sm text-neutral-400">Como o papel da equipe e o valor entregue mudam a cada estágio.</p>
</div>
<div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/30">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-neutral-800 text-xs uppercase tracking-wider text-neutral-500 bg-neutral-900/50">
<th className="p-4 font-medium">Nível</th>
<th className="p-4 font-medium">Estágio</th>
<th className="p-4 font-medium">Papel do Humano</th>
<th className="p-4 font-medium text-right">Resultado Principal</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-300 divide-y divide-neutral-800/50">
<tr className="hover:bg-neutral-800/20 transition-colors">
<td className="p-4 font-mono text-emerald-500">01</td>
<td className="p-4 font-medium text-white">Básico</td>
<td className="p-4 text-neutral-400">Usuário de buscas</td>
<td className="p-4 text-right font-medium text-emerald-400">Velocidade Bruta</td>
</tr>
<tr className="hover:bg-neutral-800/20 transition-colors">
<td className="p-4 font-mono text-yellow-500">02</td>
<td className="p-4 font-medium text-white">Produtivo</td>
<td className="p-4 text-neutral-400">Operador / Assistido</td>
<td className="p-4 text-right font-medium text-yellow-400">Produtividade de Tarefa</td>
</tr>
<tr className="hover:bg-neutral-800/20 transition-colors">
<td className="p-4 font-mono text-blue-500">03</td>
<td className="p-4 font-medium text-white">Avançado</td>
<td className="p-4 text-neutral-400">Construtor (Builder)</td>
<td className="p-4 text-right font-medium text-blue-400">Criação de MVPs</td>
</tr>
<tr className="hover:bg-neutral-800/20 transition-colors">
<td className="p-4 font-mono text-purple-500">04</td>
<td className="p-4 font-medium text-white">Automação</td>
<td className="p-4 text-neutral-400">Engenheiro de Fluxos</td>
<td className="p-4 text-right font-medium text-purple-400">Escala de Processos</td>
</tr>
<tr className="hover:bg-neutral-800/20 transition-colors">
<td className="p-4 font-mono text-rose-500">05</td>
<td className="p-4 font-medium text-white">Plataforma</td>
<td className="p-4 text-neutral-400">Arquiteto de Sistemas</td>
<td className="p-4 text-right font-medium text-rose-400">Independência (Sistema Próprio)</td>
</tr>
<tr className="hover:bg-neutral-800/20 transition-colors bg-neutral-900/20">
<td className="p-4 font-mono text-white">06</td>
<td className="p-4 font-medium text-white">Inteligência</td>
<td className="p-4 text-neutral-400">Estrategista</td>
<td className="p-4 text-right font-medium text-white">Decisão Inteligente &amp; Risco Mínimo</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<footer className="py-12 border-t border-neutral-900 text-center">
<div className="text-white font-medium tracking-tight text-lg mb-2 flex items-center justify-center gap-2">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
            BUILD.AI
        </div>
<p className="text-xs text-neutral-600">Transformando dados em concreto e IA em lucro.</p>
</footer>

    </>
  );
}
