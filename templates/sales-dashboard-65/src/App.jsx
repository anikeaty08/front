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
      

<div className="max-w-6xl mx-auto space-y-8">

<header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-white">Vendas</h1>
<p className="text-slate-500 text-base mt-1 font-light">Gerencie suas transações e acompanhe o desempenho.</p>
</div>

<div className="flex flex-wrap items-center gap-3">

<button className="group flex items-center gap-2 px-4 py-2.5 bg-[#0f141f] hover:bg-[#1a202c] border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-200">
<i className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="filter"></i>
<span className="text-sm font-medium text-slate-300 group-hover:text-white">Filtrar</span>
</button>

<div className="flex items-center rounded-lg border border-slate-800 bg-[#0f141f] overflow-hidden">
<button className="flex items-center gap-2 px-4 py-2.5 hover:bg-[#1a202c] transition-colors border-r border-slate-800">
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-up-down"></i>
<span className="text-sm font-medium text-slate-300">Número</span>
</button>
<button className="px-2.5 py-2.5 hover:bg-[#1a202c] transition-colors">
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
</div>

<button className="group flex items-center gap-2 px-4 py-2.5 bg-[#0f141f] hover:bg-[#1a202c] border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-200">
<i className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="settings"></i>
<span className="text-sm font-medium text-slate-300 group-hover:text-white">Campos</span>
</button>

<div className="flex items-center bg-[#0f141f] rounded-lg border border-slate-800 p-1">
<button className="p-1.5 rounded bg-slate-800 text-white shadow-sm">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
</button>
<button className="p-1.5 rounded text-slate-500 hover:text-slate-300 transition-colors">
<i className="w-4 h-4" data-lucide="list"></i>
</button>
</div>

<button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-200 border border-blue-500 hover:border-blue-400">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="text-sm font-medium">Adicionar</span>
</button>
</div>
</header>

<div className="grid grid-cols-1 gap-4">

<article className="group relative bg-[#0d121c] border border-slate-800/60 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
<div className="space-y-6">
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Número</p>
<p className="text-lg font-medium text-slate-200">#0001</p>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Pagante</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">AC</div>
<p className="text-base text-slate-200">Ana Costa</p>
</div>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Valor Final</p>
<p className="text-xl font-semibold text-emerald-400 tracking-tight">R$ 666,20</p>
</div>
</div>
<div className="space-y-6">
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Data da Venda</p>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="calendar"></i>
<span className="text-base">13/01/2025</span>
</div>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Total Produtos</p>
<p className="text-base text-slate-200">3 itens</p>
</div>
</div>
</div>
</article>

<article className="group relative bg-[#0d121c] border border-slate-800/60 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
<div className="space-y-6">
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Número</p>
<p className="text-lg font-medium text-slate-200">#0002</p>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Pagante</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-[10px] font-bold text-white">JS</div>
<p className="text-base text-slate-200">João Silva</p>
</div>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Valor Final</p>
<p className="text-xl font-semibold text-emerald-400 tracking-tight">R$ 2.005,90</p>
</div>
</div>
<div className="space-y-6">
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Data da Venda</p>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="calendar"></i>
<span className="text-base">11/01/2025</span>
</div>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Total Produtos</p>
<p className="text-base text-slate-200">2 itens</p>
</div>
</div>
</div>
</article>

<article className="group relative bg-[#0d121c] border border-slate-800/60 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
<div className="space-y-6">
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Número</p>
<p className="text-lg font-medium text-slate-200">#0003</p>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Pagante</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-[10px] font-bold text-white">CS</div>
<p className="text-base text-slate-200">Carlos Souza</p>
</div>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Valor Final</p>
<p className="text-xl font-semibold text-emerald-400 tracking-tight">R$ 1.315,55</p>
</div>
</div>
<div className="space-y-6">
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Data da Venda</p>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="calendar"></i>
<span className="text-base">15/01/2025</span>
</div>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Total Produtos</p>
<p className="text-base text-slate-200">1 item</p>
</div>
</div>
</div>
</article>

<article className="group relative bg-[#0d121c] border border-slate-800/60 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
<div className="space-y-6">
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Número</p>
<p className="text-lg font-medium text-slate-200">#0004</p>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Pagante</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-[10px] font-bold text-white">PO</div>
<p className="text-base text-slate-200">Pedro Oliveira</p>
</div>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Valor Final</p>
<p className="text-xl font-semibold text-emerald-400 tracking-tight">R$ 3.513,98</p>
</div>
</div>
<div className="space-y-6">
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Data da Venda</p>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="calendar"></i>
<span className="text-base">23/01/2025</span>
</div>
</div>
<div>
<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">Total Produtos</p>
<p className="text-base text-slate-200">3 itens</p>
</div>
</div>
</div>
</article>
</div>
</div>


    </>
  );
}
