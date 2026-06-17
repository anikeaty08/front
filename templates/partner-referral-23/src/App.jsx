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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#09090b', // Zinc 950
surface: '#18181b', // Zinc 900
border: '#27272a', // Zinc 800
primary: '#fafafa', // Zinc 50
secondary: '#a1a1aa', // Zinc 400
accent: '#6366f1', // Indigo 500
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
      

<aside className="w-64 border-r border-border flex flex-col justify-between hidden md:flex bg-background/50 backdrop-blur-xl">
<div>

<div className="h-16 flex items-center px-6 border-b border-border/50">
<div className="flex items-center gap-2 text-primary tracking-tighter font-semibold text-lg">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-md flex items-center justify-center text-xs text-white font-bold">N</div>
                    NEXUS
                </div>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-primary bg-surface/50 rounded-md border border-border transition-all shadow-sm" href="#">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="16"></iconify-icon>
                    Visão Geral
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm hover:text-primary hover:bg-surface/30 rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
                    Indicações
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm hover:text-primary hover:bg-surface/30 rounded-md transition-colors group" href="#">
<iconify-icon icon="lucide:wallet" strokeWidth="1.5" width="16"></iconify-icon>
                    Comissões
                    <span className="ml-auto text-xxs bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded border border-indigo-500/20 group-hover:bg-indigo-500/20 transition">NOVO</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm hover:text-primary hover:bg-surface/30 rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="16"></iconify-icon>
                    Relatórios
                </a>
</nav>
</div>

<div className="p-4 border-t border-border/50">
<button className="flex items-center gap-3 w-full p-2 hover:bg-surface/30 rounded-md transition-colors text-left">
<img alt="User" className="w-8 h-8 rounded-full border border-border" src="https://ui-avatars.com/api/?name=Ricardo+Silva&amp;background=27272a&amp;color=a1a1aa"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-primary truncate">Ricardo Silva</p>
<p className="text-xs text-secondary truncate">Parceiro Gold</p>
</div>
<iconify-icon icon="lucide:chevron-up" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-primary">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
<h1 className="text-sm font-medium text-primary">Visão Geral</h1>
<span className="text-border">/</span>
<span className="text-sm text-secondary">Dashboard</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-hover:text-zinc-400 transition-colors" icon="lucide:search" width="14"></iconify-icon>
<input className="bg-surface/50 border border-border rounded-full py-1.5 pl-9 pr-4 text-xs text-primary placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 w-64 transition-all" placeholder="Buscar indicação..." type="text"/>
</div>
<button className="text-secondary hover:text-primary transition-colors relative">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="18"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full border-2 border-background"></span>
</button>
<button className="bg-primary text-background hover:bg-zinc-200 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2 transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="14"></iconify-icon>
                    Nova Indicação
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="bg-surface/30 border border-border p-5 rounded-xl hover:border-zinc-700 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-surface border border-border rounded-lg text-secondary group-hover:text-primary transition-colors">
<iconify-icon icon="lucide:wallet" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="flex items-center text-emerald-500 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            +12.5%
                        </span>
</div>
<p className="text-zinc-500 text-xs font-medium uppercase tracking-wide mb-1">Comissão Pendente</p>
<h3 className="text-2xl font-medium text-primary tracking-tight">R$ 4.250,00</h3>
</div>

<div className="bg-surface/30 border border-border p-5 rounded-xl hover:border-zinc-700 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-surface border border-border rounded-lg text-secondary group-hover:text-primary transition-colors">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<p className="text-zinc-500 text-xs font-medium uppercase tracking-wide mb-1">Total Pago</p>
<h3 className="text-2xl font-medium text-primary tracking-tight">R$ 12.800,00</h3>
</div>

<div className="bg-surface/30 border border-border p-5 rounded-xl hover:border-zinc-700 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-surface border border-border rounded-lg text-secondary group-hover:text-primary transition-colors">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<p className="text-zinc-500 text-xs font-medium uppercase tracking-wide mb-1">Indicações Ativas</p>
<h3 className="text-2xl font-medium text-primary tracking-tight">8</h3>
</div>

<div className="bg-surface/30 border border-border p-5 rounded-xl hover:border-zinc-700 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-surface border border-border rounded-lg text-secondary group-hover:text-primary transition-colors">
<iconify-icon icon="lucide:percent" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<p className="text-zinc-500 text-xs font-medium uppercase tracking-wide mb-1">Taxa de Conversão</p>
<h3 className="text-2xl font-medium text-primary tracking-tight">24%</h3>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-medium text-primary tracking-tight">Indicações Recentes</h2>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-md text-xs text-secondary hover:text-primary hover:border-zinc-600 transition-all">
<iconify-icon icon="lucide:filter" width="12"></iconify-icon>
                                Filtrar
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-md text-xs text-secondary hover:text-primary hover:border-zinc-600 transition-all">
<iconify-icon icon="lucide:download" width="12"></iconify-icon>
                                Exportar
                            </button>
</div>
</div>
<div className="border border-border rounded-xl overflow-hidden bg-surface/10">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border bg-surface/30">
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider w-8"><input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 focus:ring-offset-0 h-3 w-3" type="checkbox"/></th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Empresa / Contato</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Progresso</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Comissão Est.</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-border/50">

<tr className="group hover:bg-surface/40 transition-colors">
<td className="py-3 px-4"><input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 focus:ring-offset-0 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">T</div>
<div>
<p className="text-sm text-primary font-medium">TechSolutions Ltda</p>
<p className="text-xs text-zinc-500">Roberto Mendes</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                            Negociação
                                        </span>
</td>
<td className="py-3 px-4 w-32">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[60%] rounded-full"></div>
</div>
<span className="text-xs text-zinc-500 tabular-nums">60%</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<p className="text-sm text-primary tabular-nums">R$ 1.200</p>
</td>
<td className="py-3 px-4 text-right">
<button className="text-zinc-500 hover:text-primary transition-colors"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-surface/40 transition-colors">
<td className="py-3 px-4"><input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 focus:ring-offset-0 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">V</div>
<div>
<p className="text-sm text-primary font-medium">Verde Varejo</p>
<p className="text-xs text-zinc-500">Ana Souza</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                            Fechado
                                        </span>
</td>
<td className="py-3 px-4 w-32">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-[100%] rounded-full"></div>
</div>
<span className="text-xs text-zinc-500 tabular-nums">100%</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<p className="text-sm text-primary tabular-nums">R$ 3.500</p>
</td>
<td className="py-3 px-4 text-right">
<button className="text-zinc-500 hover:text-primary transition-colors"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-surface/40 transition-colors">
<td className="py-3 px-4"><input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 focus:ring-offset-0 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">A</div>
<div>
<p className="text-sm text-primary font-medium">Alpha Contabilidade</p>
<p className="text-xs text-zinc-500">Carlos Gomes</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                                            Contato Inicial
                                        </span>
</td>
<td className="py-3 px-4 w-32">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500 w-[20%] rounded-full"></div>
</div>
<span className="text-xs text-zinc-500 tabular-nums">20%</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<p className="text-sm text-primary tabular-nums">R$ 900</p>
</td>
<td className="py-3 px-4 text-right">
<button className="text-zinc-500 hover:text-primary transition-colors"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-surface/40 transition-colors">
<td className="py-3 px-4"><input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 focus:ring-offset-0 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-xs">L</div>
<div>
<p className="text-sm text-primary font-medium">Logística Express</p>
<p className="text-xs text-zinc-500">Fernanda Lima</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                            Perdido
                                        </span>
</td>
<td className="py-3 px-4 w-32">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500/50 w-[100%] rounded-full"></div>
</div>
<span className="text-xs text-zinc-500 tabular-nums">0%</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<p className="text-sm text-zinc-600 line-through tabular-nums">R$ 2.100</p>
</td>
<td className="py-3 px-4 text-right">
<button className="text-zinc-500 hover:text-primary transition-colors"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-6">

<div className="border border-border rounded-xl p-5 bg-surface/20">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-primary">Meta Mensal</h3>
<button className="text-zinc-500 hover:text-primary"><iconify-icon icon="lucide:more-vertical" width="16"></iconify-icon></button>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl font-medium text-primary tracking-tight tabular-nums">8</span>
<span className="text-sm text-zinc-500 mb-1">/ 10 indicações</span>
</div>

<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden mb-4">
<div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[80%] rounded-full"></div>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">
                            Faltam apenas <span className="text-primary font-medium">2 indicações</span> para atingir o nível Platinum e aumentar sua comissão para 15%.
                        </p>
</div>

<div className="border border-border rounded-xl p-0 bg-surface/10 overflow-hidden">
<div className="p-4 border-b border-border/50 flex justify-between items-center">
<h3 className="text-sm font-medium text-primary">Próximos Pagamentos</h3>
<a className="text-xxs text-indigo-400 hover:text-indigo-300 font-medium" href="#">VER TUDO</a>
</div>
<div className="divide-y divide-border/50">
<div className="p-4 flex items-center justify-between group hover:bg-surface/30 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700">
<iconify-icon icon="lucide:calendar" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">15 de Nov</p>
<p className="text-xs text-zinc-500">Ref. Verde Varejo</p>
</div>
</div>
<span className="text-sm font-medium text-primary tabular-nums">R$ 3.500</span>
</div>
<div className="p-4 flex items-center justify-between group hover:bg-surface/30 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700">
<iconify-icon icon="lucide:clock" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">30 de Nov</p>
<p className="text-xs text-zinc-500">Ref. TechSolutions</p>
</div>
</div>
<span className="text-sm font-medium text-zinc-500 tabular-nums">A calcular</span>
</div>
</div>
<div className="p-3 bg-zinc-900/50 text-center border-t border-border/50">
<button className="text-xs text-zinc-400 hover:text-primary flex items-center justify-center gap-1 w-full transition-colors">
<iconify-icon icon="lucide:download-cloud" width="12"></iconify-icon>
                                Baixar Comprovantes
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
