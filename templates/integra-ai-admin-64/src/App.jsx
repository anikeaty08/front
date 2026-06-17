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
      

<header className="bg-white/80 backdrop-blur-md h-16 shrink-0 flex items-center justify-between px-6 border-b border-neutral-100 z-30 relative">
<div className="flex items-center gap-8">

<a className="flex items-center gap-1 select-none group" href="#">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-amber-400">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layers"></i>
</div>
<div className="flex flex-col -gap-1 ml-1">
<span className="font-bold text-lg tracking-tight text-neutral-900 leading-none">integra<span className="text-amber-500">.ai</span></span>
</div>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 rounded-md transition-smooth" href="#">Dashboard</a>
<a className="px-3 py-1.5 text-sm font-semibold text-neutral-900 bg-neutral-100/80 rounded-md" href="#">Anúncios</a>
<a className="px-3 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 rounded-md transition-smooth" href="#">Estoque</a>
<a className="px-3 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 rounded-md transition-smooth" href="#">Financeiro</a>
</nav>
</div>

<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<input className="pl-9 pr-4 py-1.5 bg-neutral-50 border-none rounded-full text-sm w-48 focus:w-64 focus:ring-1 focus:ring-amber-400 transition-all placeholder-neutral-400 text-neutral-700" placeholder="Busca rápida..." type="text"/>
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 stroke-[1.5]" data-lucide="search"></i>
</div>
<div className="h-6 w-px bg-neutral-200 hidden sm:block"></div>
<button className="relative text-neutral-400 hover:text-neutral-900 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-amber-500 rounded-full ring-2 ring-white"></span>
</button>
<div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center text-xs font-bold text-amber-800 cursor-pointer ring-2 ring-white shadow-sm">
                AB
            </div>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="w-64 bg-white border-r border-neutral-100 overflow-y-auto hidden xl:flex flex-col pt-6 pb-4">
<div className="px-4 space-y-6">

<div>
<h3 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3 px-2">Visão Geral</h3>
<div className="space-y-0.5">
<a className="flex items-center justify-between px-3 py-2 text-sm text-neutral-900 bg-amber-50 rounded-lg font-medium transition-smooth" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-600 stroke-[1.5]" data-lucide="layout-grid"></i> Painel Geral
                            </div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg transition-smooth" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-400 stroke-[1.5]" data-lucide="bar-chart-3"></i> Relatórios
                            </div>
</a>
</div>
</div>

<div>
<h3 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3 px-2">Canais</h3>
<div className="space-y-0.5">
<a className="flex items-center justify-between px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg group transition-smooth" href="#">
<div className="flex items-center gap-3">
<span className="iconify text-[#FFE600] text-lg opacity-80 group-hover:opacity-100 transition-opacity" data-icon="simple-icons:mercadolibre"></span>
<span className="font-medium">Mercado Livre</span>
</div>
<span className="text-[10px] font-bold text-neutral-400 group-hover:text-neutral-600 transition-colors">12</span>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg group transition-smooth" href="#">
<div className="flex items-center gap-3">
<span className="iconify text-[#EE4D2D] text-lg opacity-80 group-hover:opacity-100 transition-opacity" data-icon="simple-icons:shopee"></span>
<span className="font-medium">Shopee</span>
</div>
<span className="text-[10px] font-bold text-neutral-400 group-hover:text-neutral-600 transition-colors">5</span>
</a>
</div>
</div>

<div>
<h3 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3 px-2">Ferramentas</h3>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg font-medium transition-smooth" href="#">
<i className="w-4 h-4 text-neutral-400 stroke-[1.5]" data-lucide="tag"></i> Catálogo
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg font-medium transition-smooth" href="#">
<i className="w-4 h-4 text-neutral-400 stroke-[1.5]" data-lucide="zap"></i> Automações
                        </a>
</div>
</div>
</div>
<div className="mt-auto px-4 pb-2">
<div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-4 text-white relative overflow-hidden group cursor-pointer">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-amber-400 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
<p className="text-xs font-medium text-neutral-400 mb-1">Plano Pro</p>
<div className="flex items-center justify-between">
<span className="font-bold text-sm">Upgrade</span>
<i className="w-4 h-4 text-amber-400 stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#fafafa]">

<div className="flex flex-col bg-white border-b border-neutral-100 z-10 sticky top-0">

<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-5 pb-0">
<div>
<h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Gerenciamento</h1>
<p className="text-sm text-neutral-500 mt-1">Controle seus anúncios em múltiplos marketplaces.</p>
</div>

<div className="flex items-center gap-3 w-full lg:w-auto">
<button className="px-4 py-2 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-sm font-semibold rounded-lg transition-smooth shadow-sm flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400 stroke-[1.5]" data-lucide="download"></i> Exportar
                        </button>
<button className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-neutral-900 text-sm font-bold rounded-lg transition-all shadow-[0_2px_10px_rgba(251,191,36,0.2)] flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i> Novo Anúncio
                        </button>
</div>
</div>

<div className="mt-6 px-5 border-b border-neutral-100">
<div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
<button className="pb-3 text-sm font-semibold text-neutral-900 border-b-2 border-amber-400 whitespace-nowrap flex items-center gap-2">
                            Ativos <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[10px] font-bold">171</span>
</button>
<button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-800 whitespace-nowrap flex items-center gap-2 transition-colors border-b-2 border-transparent hover:border-neutral-200">
                            Pausados <span className="bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full text-[10px] font-bold">5</span>
</button>
<button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-800 whitespace-nowrap flex items-center gap-2 transition-colors border-b-2 border-transparent hover:border-neutral-200">
                            Revisando <span className="bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full text-[10px] font-bold">2</span>
</button>
<button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-800 whitespace-nowrap flex items-center gap-2 transition-colors border-b-2 border-transparent hover:border-neutral-200">
                            Excluídos <span className="text-neutral-400 font-normal ml-1 border border-neutral-200 rounded-full w-4 h-4 flex items-center justify-center text-[10px] hover:border-neutral-300">?</span>
</button>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between px-5 py-3 bg-white gap-3 border-b border-neutral-50">

<div className="flex items-center gap-4 w-full sm:w-auto text-sm">
<span className="text-neutral-500 font-medium">Selecionado <strong className="text-neutral-900 ml-1">0</strong></span>
<div className="h-4 w-px bg-neutral-200"></div>
<button className="text-neutral-600 font-medium hover:text-neutral-900 transition-colors">Editar em Massa</button>
<button className="flex items-center gap-1 text-neutral-600 font-medium hover:text-neutral-900 transition-colors">
                            Ações em Massa <i className="w-3.5 h-3.5 text-neutral-400" data-lucide="chevron-down"></i>
</button>
</div>

<div className="flex items-center gap-3 text-sm text-neutral-500">
<button className="flex items-center gap-1.5 px-2 py-1 bg-white border border-neutral-200 rounded text-xs font-medium text-neutral-600 hover:bg-neutral-50 transition-colors">
                            Ordem <i className="w-3 h-3 text-amber-500" data-lucide="arrow-up-down"></i>
</button>
<span className="hidden sm:inline text-xs">Total 154</span>
<div className="flex items-center gap-2">
<button className="hover:text-neutral-900 disabled:opacity-50 transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-left"></i></button>
<span className="text-xs font-medium text-neutral-900">1/4</span>
<button className="hover:text-neutral-900 transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i></button>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-auto px-5 py-6">
<div className="bg-white border border-neutral-100 rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.02)] overflow-hidden">
<table className="w-full text-left border-collapse min-w-[1200px]">
<thead className="bg-neutral-50/50 border-b border-neutral-100">
<tr>
<th className="py-3 px-4 w-12 text-center">
<label className="custom-checkbox cursor-pointer flex items-center justify-center">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-300 rounded flex items-center justify-center bg-white hover:border-neutral-400 transition-colors">
<i className="w-3 h-3 stroke-[3] hidden" data-lucide="check"></i>
</div>
</label>
</th>
<th className="py-3 px-4 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider w-[320px]">Título</th>
<th className="py-3 px-4 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider w-[160px]">SKU/ID do Anúncio</th>
<th className="py-3 px-4 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider w-[120px]">Status</th>
<th className="py-3 px-4 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider text-right w-[100px]">Preço</th>
<th className="py-3 px-4 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider text-right w-[80px]">Estoque</th>
<th className="py-3 px-4 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider w-[180px]">Tipo de Anúncio</th>
<th className="py-3 px-4 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider w-[180px]">Desempenho</th>
<th className="py-3 px-4 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider text-right w-[120px]">Ações</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-50 text-sm">

<tr className="group hover:bg-amber-50/30 transition-smooth">
<td className="py-4 px-4 text-center align-top">
<label className="custom-checkbox cursor-pointer flex items-center justify-center mt-2">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-300 rounded flex items-center justify-center bg-white group-hover:border-neutral-400 transition-colors">
<i className="w-3 h-3 stroke-[3] hidden" data-lucide="check"></i>
</div>
</label>
</td>
<td className="py-4 px-4 align-top">
<div className="flex gap-4">
<div className="relative w-12 h-12 bg-neutral-100 rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-neutral-100">
<i className="w-6 h-6 text-neutral-400 stroke-[1.5]" data-lucide="lightbulb"></i>
</div>
<div className="flex flex-col gap-0.5">
<a className="text-neutral-900 font-semibold hover:text-amber-600 line-clamp-2 leading-snug text-sm transition-colors" href="#">Ultra Led Super 8.000k</a>
<span className="text-[11px] text-neutral-400">[Lâmpadas de Led]</span>
<span className="text-[10px] text-neutral-400 uppercase tracking-wide font-medium mt-0.5">AUTOBESTBUY</span>
<button className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 mt-1 font-medium">
                                                Variantes (8) <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 font-mono">-</span>
<a className="text-[11px] font-mono text-blue-600 hover:text-blue-700 hover:underline" href="#">MLB5115603712</a>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col items-start gap-1.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-green-50 text-green-700 tracking-wide border border-green-100">
                                            ATIVO
                                        </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 tracking-tight border border-amber-100">
                                            Parcialmente Esgotado
                                        </span>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<div className="flex items-center justify-end gap-1.5">
<span className="bg-neutral-100 text-neutral-600 text-[9px] font-bold px-1 rounded">ML</span>
<span className="text-neutral-900 font-medium">R$ 42,05</span>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<span className="text-sm text-neutral-900">241</span>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-[#fff159] flex items-center justify-center shrink-0">
<span className="iconify text-[#2d3278] text-[9px]" data-icon="simple-icons:mercadolibre"></span>
</div>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-100 text-neutral-600">
                                                Clássico
                                            </span>
</div>
<span className="text-[11px] text-neutral-500">Envios | Flex</span>
<span className="text-[11px] text-neutral-400">Sem Frete Grátis</span>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1 w-full">
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Vendas:</span>
<span className="font-semibold text-neutral-900">1</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Visitas:</span>
<span className="font-semibold text-neutral-900">8</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Perguntas:</span>
<div className="flex items-center gap-1 font-semibold text-neutral-900">
                                                0 <i className="w-3 h-3 text-blue-500 stroke-[2]" data-lucide="message-square"></i>
</div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Qualidade:</span>
<span className="font-semibold text-neutral-900">Padrão</span>
</div>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<div className="flex flex-col items-end gap-2">
<a className="text-xs font-semibold text-blue-600 hover:text-blue-700" href="#">Editar</a>
<button className="text-xs font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1">
                                            Mais <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-down"></i>
</button>
<div className="text-[10px] text-neutral-400 mt-2">
                                            16/11/2025<br/>17:48
                                        </div>
</div>
</td>
</tr>

<tr className="group hover:bg-amber-50/30 transition-smooth">
<td className="py-4 px-4 text-center align-top">
<label className="custom-checkbox cursor-pointer flex items-center justify-center mt-2">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-300 rounded flex items-center justify-center bg-white group-hover:border-neutral-400 transition-colors">
<i className="w-3 h-3 stroke-[3] hidden" data-lucide="check"></i>
</div>
</label>
</td>
<td className="py-4 px-4 align-top">
<div className="flex gap-4">
<div className="relative w-12 h-12 bg-neutral-100 rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-neutral-100">
<i className="w-6 h-6 text-neutral-400 stroke-[1.5]" data-lucide="car"></i>
</div>
<div className="flex flex-col gap-0.5">
<a className="text-neutral-900 font-semibold hover:text-amber-600 line-clamp-2 leading-snug text-sm transition-colors" href="#">Kit Farol Milha Led + Chicote Universal</a>
<span className="text-[11px] text-neutral-400">[Acessórios Auto]</span>
<span className="text-[10px] text-neutral-400 uppercase tracking-wide font-medium mt-0.5">AUTOBESTBUY</span>
<button className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 mt-1 font-medium">
                                                Variantes (2) <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 font-mono">FAR-LED-UNI</span>
<a className="text-[11px] font-mono text-blue-600 hover:text-blue-700 hover:underline" href="#">SHP-9928371</a>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col items-start gap-1.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-green-50 text-green-700 tracking-wide border border-green-100">
                                            ATIVO
                                        </span>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<div className="flex items-center justify-end gap-1.5">
<span className="text-neutral-900 font-medium">R$ 39,94</span>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<span className="text-sm text-neutral-900">232</span>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-[#ffebd9] flex items-center justify-center shrink-0">
<span className="iconify text-[#ee4d2d] text-[10px]" data-icon="simple-icons:shopee"></span>
</div>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-100 text-neutral-600">
                                                Padrão
                                            </span>
</div>
<span className="text-[11px] text-neutral-500">Envios | Padrão</span>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1 w-full">
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Vendas:</span>
<span className="font-semibold text-neutral-900">11</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Visitas:</span>
<span className="font-semibold text-neutral-900">21</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Avaliações:</span>
<div className="flex items-center gap-1 font-semibold text-amber-500">
                                                4.8 <i className="w-3 h-3 fill-current stroke-none" data-lucide="star"></i>
</div>
</div>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<div className="flex flex-col items-end gap-2">
<a className="text-xs font-semibold text-blue-600 hover:text-blue-700" href="#">Editar</a>
<button className="text-xs font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1">
                                            Mais <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-down"></i>
</button>
<div className="text-[10px] text-neutral-400 mt-2">
                                            15/11/2025<br/>09:22
                                        </div>
</div>
</td>
</tr>

<tr className="group hover:bg-amber-50/30 transition-smooth">
<td className="py-4 px-4 text-center align-top">
<label className="custom-checkbox cursor-pointer flex items-center justify-center mt-2">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-300 rounded flex items-center justify-center bg-white group-hover:border-neutral-400 transition-colors">
<i className="w-3 h-3 stroke-[3] hidden" data-lucide="check"></i>
</div>
</label>
</td>
<td className="py-4 px-4 align-top">
<div className="flex gap-4">
<div className="relative w-12 h-12 bg-neutral-100 rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-neutral-100">
<i className="w-6 h-6 text-neutral-400 stroke-[1.5]" data-lucide="zap"></i>
</div>
<div className="flex flex-col gap-0.5">
<a className="text-neutral-900 font-semibold hover:text-amber-600 line-clamp-2 leading-snug text-sm transition-colors" href="#">Lâmpada Led H4 Super Branca 6000k</a>
<span className="text-[11px] text-neutral-400">[Lâmpadas]</span>
<span className="text-[10px] text-neutral-400 uppercase tracking-wide font-medium mt-0.5">AUTOBESTBUY</span>
<span className="text-[11px] text-neutral-400 mt-1">Único</span>
</div>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 font-mono">H4-6000K</span>
<a className="text-[11px] font-mono text-blue-600 hover:text-blue-700 hover:underline" href="#">MLB3691274593</a>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col items-start gap-1.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-green-50 text-green-700 tracking-wide border border-green-100">
                                            ATIVO
                                        </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-neutral-900 text-white tracking-wide uppercase">
<i className="w-2.5 h-2.5 mr-0.5 fill-current" data-lucide="zap"></i> FULL
                                        </span>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<div className="flex items-center justify-end gap-1.5">
<span className="bg-neutral-100 text-neutral-600 text-[9px] font-bold px-1 rounded">ML</span>
<span className="text-neutral-900 font-medium">R$ 39,94</span>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<span className="text-sm text-neutral-900">195</span>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-[#fff159] flex items-center justify-center shrink-0">
<span className="iconify text-[#2d3278] text-[9px]" data-icon="simple-icons:mercadolibre"></span>
</div>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-100 text-neutral-600">
                                                Premium
                                            </span>
</div>
<span className="text-[11px] text-neutral-500">Envios | Full</span>
<span className="text-[11px] text-green-600 font-medium">Frete Grátis</span>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1 w-full">
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Vendas:</span>
<span className="font-semibold text-neutral-900">309</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Visitas:</span>
<span className="font-semibold text-neutral-900">2.1k</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Perguntas:</span>
<div className="flex items-center gap-1 font-semibold text-neutral-900">
                                                7 <i className="w-3 h-3 text-blue-500 stroke-[2]" data-lucide="message-square"></i>
</div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Qualidade:</span>
<span className="font-semibold text-neutral-900">Pro</span>
</div>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<div className="flex flex-col items-end gap-2">
<a className="text-xs font-semibold text-blue-600 hover:text-blue-700" href="#">Editar</a>
<button className="text-xs font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1">
                                            Mais <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-down"></i>
</button>
<div className="text-[10px] text-neutral-400 mt-2">
                                            Hoje<br/>14:02
                                        </div>
</div>
</td>
</tr>

<tr className="group hover:bg-amber-50/30 transition-smooth">
<td className="py-4 px-4 text-center align-top">
<label className="custom-checkbox cursor-pointer flex items-center justify-center mt-2">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-300 rounded flex items-center justify-center bg-white group-hover:border-neutral-400 transition-colors">
<i className="w-3 h-3 stroke-[3] hidden" data-lucide="check"></i>
</div>
</label>
</td>
<td className="py-4 px-4 align-top">
<div className="flex gap-4">
<div className="relative w-12 h-12 bg-neutral-100 rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-neutral-100">
<i className="w-6 h-6 text-neutral-400 stroke-[1.5]" data-lucide="cpu"></i>
</div>
<div className="flex flex-col gap-0.5">
<a className="text-neutral-900 font-semibold hover:text-amber-600 line-clamp-2 leading-snug text-sm transition-colors" href="#">Ultra Led H-tech 20w - Modelo 2025</a>
<span className="text-[11px] text-neutral-400">[Eletrônicos]</span>
<span className="text-[10px] text-neutral-400 uppercase tracking-wide font-medium mt-0.5">AUTOBESTBUY</span>
<button className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 mt-1 font-medium">
                                                Variantes (8) <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1.5">
<span className="text-[11px] text-neutral-500 font-mono">HTECH-20W</span>
<a className="text-[11px] font-mono text-blue-600 hover:text-blue-700 hover:underline" href="#">MLB3870229189</a>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col items-start gap-1.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-green-50 text-green-700 tracking-wide border border-green-100">
                                            ATIVO
                                        </span>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<div className="flex items-center justify-end gap-1.5">
<span className="bg-neutral-100 text-neutral-600 text-[9px] font-bold px-1 rounded">ML</span>
<span className="text-neutral-900 font-medium">R$ 39,94</span>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<span className="text-sm text-neutral-900">185</span>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-[#fff159] flex items-center justify-center shrink-0">
<span className="iconify text-[#2d3278] text-[9px]" data-icon="simple-icons:mercadolibre"></span>
</div>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-100 text-neutral-600">
                                                Clássico
                                            </span>
</div>
<span className="text-[11px] text-neutral-500">Envios | Flex</span>
</div>
</td>
<td className="py-4 px-4 align-top">
<div className="flex flex-col gap-1 w-full">
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Vendas:</span>
<span className="font-semibold text-neutral-900">72</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Visitas:</span>
<span className="font-semibold text-neutral-900">77</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Perguntas:</span>
<div className="flex items-center gap-1 font-semibold text-neutral-900">
                                                1 <i className="w-3 h-3 text-blue-500 stroke-[2]" data-lucide="message-square"></i>
</div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Qualidade:</span>
<span className="font-semibold text-neutral-900">Padrão</span>
</div>
</div>
</td>
<td className="py-4 px-4 align-top text-right">
<div className="flex flex-col items-end gap-2">
<a className="text-xs font-semibold text-blue-600 hover:text-blue-700" href="#">Editar</a>
<button className="text-xs font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1">
                                            Mais <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-down"></i>
</button>
<div className="text-[10px] text-neutral-400 mt-2">
                                            Ontem<br/>20:15
                                        </div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>


    </>
  );
}
