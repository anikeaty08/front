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
darkMode: 'class',
theme: {
extend: {
colors: {
background: '#050505', /* Ultra dark */
surface: '#0F0F11',
border: '#1E1E21',
subtle: '#27272a',
primary: '#D1D5DB',
accent: '#10b981',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
fontSize: {
xxs: '0.65rem',
}
}
}
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
      

<aside className="w-64 border-r border-border bg-background flex flex-col flex-shrink-0 z-30 transition-all duration-300">

<div className="h-14 flex items-center px-4 border-b border-border">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 bg-zinc-100 rounded flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="font-medium text-zinc-100 tracking-tight text-sm">M11</span>
</div>
<div className="ml-auto">
<span className="text-xs border border-border px-1.5 py-0.5 rounded text-zinc-600 bg-surface">Beta</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-2 py-4 space-y-0.5">
<div className="px-2 mb-2 text-xs font-medium text-zinc-600 uppercase tracking-widest">Plataforma</div>
<a className="group flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-surface transition-all" href="#">
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
<span className="font-normal">Dashboard</span>
</a>

<div className="relative group">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded bg-surface border border-border/50 text-zinc-100 transition-all" href="#">
<iconify-icon className="text-zinc-100" icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="font-medium">Análise de Edital</span>
</a>

<div className="pl-2.5 mt-1 space-y-0.5">
<div className="flex gap-2">
<div className="w-px bg-zinc-800 h-full ml-2"></div>
<div className="flex-1 space-y-0.5 pb-2 pt-1">
<a className="flex items-center gap-2 px-2 py-1 text-zinc-300 rounded hover:bg-zinc-900" href="#">
<span className="w-1 h-1 rounded-full bg-accent"></span>
<span className="text-xs">Visão Geral</span>
</a>
<a className="flex items-center gap-2 px-2 py-1 text-zinc-500 rounded hover:bg-zinc-900 hover:text-zinc-300" href="#">
<span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-zinc-500"></span>
<span className="text-xs">Jurídico</span>
</a>
<a className="flex items-center gap-2 px-2 py-1 text-zinc-500 rounded hover:bg-zinc-900 hover:text-zinc-300" href="#">
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="text-xs">Financeiro</span>
</a>
</div>
</div>
</div>
</div>
<a className="group flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-surface transition-all" href="#">
<iconify-icon icon="solar:chart-2-linear" width="18"></iconify-icon>
<span className="font-normal">Concorrência</span>
</a>
<a className="group flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-surface transition-all" href="#">
<iconify-icon icon="solar:folder-with-files-linear" width="18"></iconify-icon>
<span className="font-normal">Documentos</span>
</a>
</nav>

<div className="p-2 border-t border-border">
<button className="w-full flex items-center gap-2.5 px-2 py-2 rounded hover:bg-surface text-left transition-colors">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-xs text-zinc-400 border border-zinc-700">SH</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">Sergio Henrique</span>
</div>
<iconify-icon className="ml-auto text-zinc-600" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-background relative">

<header className="h-14 border-b border-border flex items-center justify-between px-6 bg-background/80 backdrop-blur-sm sticky top-0 z-20">
<div className="flex items-center gap-2 text-sm">
<span className="text-zinc-500">Projetos</span>
<iconify-icon className="text-zinc-700" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-500">Prefeitura Formoso</span>
<iconify-icon className="text-zinc-700" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-100 font-medium tracking-tight">Edital 028/2025</span>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-xs text-zinc-500 bg-surface border border-border px-2 py-1 rounded-md">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                    Salvo 2m atrás
                </span>
<div className="h-4 w-px bg-zinc-800"></div>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="max-w-4xl mx-auto py-10 px-8">

<div className="mb-10">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-medium text-zinc-100 tracking-tight mb-2">Aquisição de Materiais Eletrônicos</h1>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
<span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                                    Pregão Eletrônico
                                </span>
<span>ID: 9283-A</span>
<span>Responsável: Sergio H.</span>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-surface border border-border rounded hover:border-zinc-600 transition-colors">
                                Exportar PDF
                            </button>
<button className="px-3 py-1.5 text-xs font-medium text-black bg-zinc-100 hover:bg-zinc-200 border border-transparent rounded transition-colors flex items-center gap-2">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
                                Gerar Insights
                            </button>
</div>
</div>
</div>

<div className="space-y-8">

<section className="group">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:stars-linear"></iconify-icon>
                                Resumo da Inteligência
                            </h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
<button className="text-zinc-500 hover:text-zinc-300"><iconify-icon icon="solar:copy-linear" width="14"></iconify-icon></button>
<button className="text-zinc-500 hover:text-zinc-300"><iconify-icon icon="solar:refresh-linear" width="14"></iconify-icon></button>
</div>
</div>
<div className="bg-surface border border-border rounded-lg p-5 relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-transparent"></div>
<p className="text-zinc-300 leading-relaxed font-light">
                                O edital refere-se ao <span className="text-zinc-100 font-normal border-b border-zinc-700 pb-0.5">Pregão nº 028/2025</span> para registro de preços. O ponto de atenção principal é o prazo exíguo para a sessão pública (<span className="text-zinc-100 font-normal">18/11/2025</span>). O critério de julgamento é menor preço por item, favorecendo a competitividade em lotes específicos.
                            </p>
<div className="mt-6 grid grid-cols-3 gap-px bg-border rounded overflow-hidden">
<div className="bg-surface p-3">
<span className="block text-xs text-zinc-500 mb-1">Valor Total</span>
<span className="block text-sm font-medium text-zinc-100">R$ 2.7M</span>
</div>
<div className="bg-surface p-3">
<span className="block text-xs text-zinc-500 mb-1">Itens</span>
<span className="block text-sm font-medium text-zinc-100">142 Lotes</span>
</div>
<div className="bg-surface p-3">
<span className="block text-xs text-zinc-500 mb-1">Risco</span>
<span className="block text-sm font-medium text-green-400">Baixo</span>
</div>
</div>
</div>
</section>

<div className="h-px bg-zinc-900 w-full"></div>

<section>
<h3 className="text-sm font-medium text-zinc-200 mb-4">Pontos de Atenção</h3>
<div className="space-y-3">

<div className="flex gap-4 items-start p-3 rounded-lg hover:bg-surface border border-transparent hover:border-border transition-all cursor-default">
<div className="mt-0.5 text-red-400">
<iconify-icon icon="solar:danger-triangle-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="text-sm text-zinc-200 font-medium">Exigência de Qualificação Técnica</p>
<span className="text-xs text-zinc-600 font-mono">Item 7.2.1</span>
</div>
<p className="text-sm text-zinc-500 mt-1 font-light leading-relaxed">
                                        Solicita-se atestado de capacidade técnica para fornecimento de quantitativo mínimo de 50% do objeto licitado. Verificar base de atestados atual.
                                    </p>
</div>
</div>

<div className="flex gap-4 items-start p-3 rounded-lg hover:bg-surface border border-transparent hover:border-border transition-all cursor-default">
<div className="mt-0.5 text-yellow-500">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="text-sm text-zinc-200 font-medium">Prazo de Entrega</p>
<span className="text-xs text-zinc-600 font-mono">Item 12.4</span>
</div>
<p className="text-sm text-zinc-500 mt-1 font-light leading-relaxed">
                                        Prazo de entrega fixado em 10 dias corridos após a nota de empenho. Logística precisa estar alinhada.
                                    </p>
</div>
</div>
</div>
</section>

<div className="h-px bg-zinc-900 w-full"></div>

<section>
<h3 className="text-sm font-medium text-zinc-200 mb-4">Requisitos Financeiros</h3>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 border border-border rounded bg-surface/50">
<span className="text-xs text-zinc-500">Capital Social Mínimo</span>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-zinc-200 text-sm">10% do Valor Estimado</span>
<iconify-icon className="text-accent" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
</div>
<div className="p-4 border border-border rounded bg-surface/50">
<span className="text-xs text-zinc-500">Índices Contábeis</span>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-zinc-200 text-sm">LG, SG e LC &gt; 1,0</span>
<iconify-icon className="text-accent" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</section>
</div>

<div className="h-20"></div>
</div>
</div>
</main>

<aside className="w-72 bg-background border-l border-border hidden xl:flex flex-col z-20">

<div className="h-14 flex items-center px-5 border-b border-border">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Detalhes do Edital</span>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-8">

<div>
<h4 className="text-xs font-medium text-zinc-400 mb-3">Cronograma</h4>
<div className="relative pl-2 border-l border-zinc-800 space-y-6">
<div className="relative">
<div className="absolute -left-[13px] top-1 w-2.5 h-2.5 rounded-full border border-zinc-700 bg-background"></div>
<p className="text-xs text-zinc-500 mb-0.5">Publicação</p>
<p className="text-sm text-zinc-300">01 Nov, 2025</p>
</div>
<div className="relative">
<div className="absolute -left-[13px] top-1 w-2.5 h-2.5 rounded-full border border-accent bg-accent shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
<p className="text-xs text-accent mb-0.5">Sessão Pública</p>
<p className="text-sm text-zinc-100 font-medium">18 Nov, 08:00h</p>
<span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] bg-red-500/10 text-red-400 border border-red-500/20">Faltam 5 dias</span>
</div>
<div className="relative">
<div className="absolute -left-[13px] top-1 w-2.5 h-2.5 rounded-full border border-zinc-700 bg-background"></div>
<p className="text-xs text-zinc-500 mb-0.5">Homologação Est.</p>
<p className="text-sm text-zinc-300">25 Nov, 2025</p>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-medium text-zinc-400 mb-3">Arquivos</h4>
<ul className="space-y-2">
<li className="group flex items-center justify-between p-2 rounded hover:bg-surface border border-transparent hover:border-border transition-all cursor-pointer">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:file-text-linear" width="16"></iconify-icon>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200 truncate max-w-[120px]">Edital_Final.pdf</span>
</div>
<span className="text-[10px] text-zinc-600">2.4MB</span>
</li>
<li className="group flex items-center justify-between p-2 rounded hover:bg-surface border border-transparent hover:border-border transition-all cursor-pointer">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:file-text-linear" width="16"></iconify-icon>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200 truncate max-w-[120px]">Anexo_I_TR.pdf</span>
</div>
<span className="text-[10px] text-zinc-600">1.1MB</span>
</li>
</ul>
<button className="w-full mt-3 py-1.5 text-xs text-zinc-500 hover:text-zinc-300 border border-dashed border-zinc-800 rounded hover:border-zinc-600 transition-colors">
                    + Adicionar Arquivo
                </button>
</div>

<div>
<h4 className="text-xs font-medium text-zinc-400 mb-3">Responsáveis</h4>
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-zinc-800 border-2 border-background flex items-center justify-center text-[10px] text-white">SH</div>
<div className="w-7 h-7 rounded-full bg-zinc-700 border-2 border-background flex items-center justify-center text-[10px] text-white">AL</div>
<button className="w-7 h-7 rounded-full bg-zinc-900 border-2 border-dashed border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-500 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="p-4 border-t border-border">
<button className="w-full py-2 bg-zinc-100 hover:bg-white text-black text-xs font-medium rounded transition-colors shadow-lg shadow-zinc-100/10">
                Iniciar Participação
            </button>
</div>
</aside>

    </>
  );
}
