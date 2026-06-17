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
      

<nav className="border-b border-gray-200 bg-white sticky top-0 z-30">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="package"></i>
</div>
<span className="font-medium text-gray-900 tracking-tight text-lg">Logistics<span className="text-gray-400">Pro</span></span>
<span className="text-gray-300 mx-2">/</span>
<span className="text-gray-900 font-medium">Adicionar Cotação</span>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Cancelar</button>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="save"></i>
                    Salvar Cotação
                </button>
</div>
</div>
</nav>

<main className="max-w-5xl mx-auto px-6 py-10">

<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<h2 className="text-xl font-medium text-gray-900 tracking-tight">Dados Gerais</h2>
</div>
<div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-200 p-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">

<div className="space-y-6">

<div className="relative group">
<label className="block text-sm font-medium text-gray-700 mb-1.5">Nome do Cliente <span className="text-red-500">*</span></label>
<div className="flex gap-2">
<div className="relative w-full">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none placeholder:text-gray-400" placeholder="Digite o nome do cliente..." type="text"/>
</div>
<button className="flex-shrink-0 p-2.5 text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 rounded-lg transition-all" title="Cadastrar Novo Cliente">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Dt. Retorno</label>
<div className="relative">
<input className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none" type="date"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Dt. Validade</label>
<div className="relative">
<input className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none" type="date"/>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Incoterm <span className="text-red-500">*</span></label>
<select className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25em] bg-[right:0.75rem_center] bg-no-repeat">
<option>Selecione...</option>
<option>EXW - Ex Works</option>
<option>FOB - Free on Board</option>
<option>CIF - Cost, Insurance &amp; Freight</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Routing Order</label>
<div className="inline-flex bg-gray-100 p-1 rounded-lg border border-gray-200">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="routing" type="radio"/>
<span className="block px-4 py-1.5 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-white peer-checked:text-indigo-600 peer-checked:shadow-sm transition-all">Não</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="routing" type="radio"/>
<span className="block px-4 py-1.5 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-white peer-checked:text-indigo-600 peer-checked:shadow-sm transition-all">Sim</span>
</label>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Carga Empilhável <span className="text-red-500">*</span></label>
<select className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none">
<option>Selecione...</option>
<option>Sim</option>
<option>Não</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Carga Específica</label>
<select className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none">
<option>Não</option>
<option>Perigosa</option>
<option>Refrigerada</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Target</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
<input className="w-full pl-8 pr-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none" type="number"/>
</div>
</div>
</div>

<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Mercadoria / NCM <span className="text-red-500">*</span></label>
<textarea className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none resize-none" rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Valor da Carga</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">R$</span>
<input className="w-full pl-10 pr-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none" type="number"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Pick-up (EXW / DAP / DDP)</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<input className="w-full pl-10 pr-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Delivery (EXW / DAP / DDP)</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<input className="w-full pl-10 pr-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Observações</label>
<textarea className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none resize-none" rows="4"></textarea>
</div>
</div>
</div>

<div className="mt-8 bg-amber-50 border border-amber-100 rounded-lg p-4 flex gap-3">
<i className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" data-lucide="alert-circle"></i>
<p className="text-sm text-amber-800 leading-relaxed">
                        Campos adicionados recentemente (Carga Empilhável, Target, Referência do Cliente, Valor da Carga, Pickup e Delivery) estão presentes somente nas telas de cotação, ainda não são repassadas ao booking.
                    </p>
</div>
</div>
</div>

<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<div>
<h2 className="text-xl font-medium text-gray-900 tracking-tight">Serviços Ofertados</h2>
<p className="text-sm text-gray-500 mt-1">Selecione os modais e serviços adicionais.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 peer-checked:border-indigo-600 peer-checked:ring-1 peer-checked:ring-indigo-600 transition-all shadow-sm h-full flex items-start gap-3">
<div className="w-5 h-5 rounded border border-gray-300 bg-white flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors mt-0.5">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
<div>
<span className="block text-base font-medium text-gray-900">Frete Marítimo</span>
<span className="text-xs text-gray-400 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="ship"></i> Modal Principal</span>
</div>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 peer-checked:border-indigo-600 peer-checked:ring-1 peer-checked:ring-indigo-600 transition-all shadow-sm h-full flex items-start gap-3">
<div className="w-5 h-5 rounded border border-gray-300 bg-white flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors mt-0.5">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
<div>
<span className="block text-base font-medium text-gray-900">Frete Aéreo</span>
<span className="text-xs text-gray-400 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="plane"></i> Modal Principal</span>
</div>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 peer-checked:border-indigo-600 peer-checked:ring-1 peer-checked:ring-indigo-600 transition-all shadow-sm h-full flex items-start gap-3">
<div className="w-5 h-5 rounded border border-gray-300 bg-white flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors mt-0.5">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
<div>
<span className="block text-base font-medium text-gray-900">Frete Rodoviário</span>
<span className="text-xs text-gray-400 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="truck"></i> Modal Principal</span>
</div>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 peer-checked:border-indigo-600 peer-checked:ring-1 peer-checked:ring-indigo-600 transition-all shadow-sm h-full flex items-start gap-3">
<div className="w-5 h-5 rounded border border-gray-300 bg-white flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors mt-0.5">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
<div>
<span className="block text-base font-medium text-gray-900">Desembaraço</span>
<span className="text-xs text-gray-400 mt-1">Serviço Aduaneiro</span>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 peer-checked:border-indigo-600 peer-checked:ring-1 peer-checked:ring-indigo-600 transition-all shadow-sm h-full flex items-start gap-3">
<div className="w-5 h-5 rounded border border-gray-300 bg-white flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors mt-0.5">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="block text-base font-medium text-gray-700">Palletização</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 peer-checked:border-indigo-600 peer-checked:ring-1 peer-checked:ring-indigo-600 transition-all shadow-sm h-full flex items-start gap-3">
<div className="w-5 h-5 rounded border border-gray-300 bg-white flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors mt-0.5">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="block text-base font-medium text-gray-700">Seguro Internacional</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 peer-checked:border-indigo-600 peer-checked:ring-1 peer-checked:ring-indigo-600 transition-all shadow-sm h-full flex items-start gap-3">
<div className="w-5 h-5 rounded border border-gray-300 bg-white flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors mt-0.5">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="block text-base font-medium text-gray-700">Representação</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 peer-checked:border-indigo-600 peer-checked:ring-1 peer-checked:ring-indigo-600 transition-all shadow-sm h-full flex items-start gap-3">
<div className="w-5 h-5 rounded border border-gray-300 bg-white flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors mt-0.5">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="block text-base font-medium text-gray-700">Fumigação</span>
</div>
</label>
</div>
</div>

<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
<i className="w-5 h-5" data-lucide="map"></i>
</div>
<h2 className="text-xl font-medium text-gray-900 tracking-tight">Rota e Portos</h2>
</div>
<div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border border-gray-200 p-8">
<div className="flex flex-col md:flex-row gap-6 items-end">
<div className="flex-1 w-full">
<label className="block text-sm font-medium text-gray-700 mb-1.5">Porto de Origem</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="anchor"></i>
<select className="w-full pl-10 pr-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none appearance-none">
<option>Selecione a origem...</option>
<option>Santos, Brasil</option>
<option>Shanghai, China</option>
</select>
</div>
</div>
<div className="hidden md:flex pb-3 text-gray-400">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
<div className="flex-1 w-full">
<label className="block text-sm font-medium text-gray-700 mb-1.5">Porto de Destino</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="anchor"></i>
<select className="w-full pl-10 pr-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none appearance-none">
<option>Selecione o destino...</option>
<option>Rotterdam, Netherlands</option>
<option>Hamburg, Germany</option>
</select>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
<i className="w-5 h-5" data-lucide="box"></i>
</div>
<h2 className="text-xl font-medium text-gray-900 tracking-tight">Especificações da Carga</h2>
</div>
<div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border border-gray-200 p-8">
<div className="mb-8">
<span className="block text-sm font-medium text-gray-700 mb-3">Tipo de Carga</span>
<div className="flex gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="load_type" type="radio"/>
<div className="px-5 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 transition-all text-sm font-medium">
                                FCL (Full Container)
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="load_type" type="radio"/>
<div className="px-5 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 transition-all text-sm font-medium">
                                LCL (Less Container)
                            </div>
</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
<div className="md:col-span-3">
<label className="block text-sm font-medium text-gray-700 mb-1.5">Tamanho Container</label>
<select className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none">
<option>20' DRY</option>
<option>40' DRY</option>
<option>40' HC</option>
</select>
</div>
<div className="md:col-span-4">
<label className="block text-sm font-medium text-gray-700 mb-1.5 text-center">Dimensões (cm)</label>
<div className="flex items-center gap-2">
<input className="w-full text-center px-2 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none" placeholder="C" type="number"/>
<span className="text-gray-400">x</span>
<input className="w-full text-center px-2 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none" placeholder="L" type="number"/>
<span className="text-gray-400">x</span>
<input className="w-full text-center px-2 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none" placeholder="A" type="number"/>
</div>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-gray-700 mb-1.5">Peso Bruto</label>
<div className="relative">
<input className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none" type="number"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Kg</span>
</div>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-gray-700 mb-1.5">Peso Cubado</label>
<div className="relative">
<input className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none bg-gray-50" readonly="" type="number"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Kg</span>
</div>
</div>
<div className="md:col-span-1 flex justify-center pb-2">
<button className="text-gray-400 hover:text-red-500 transition-colors">
<i className="w-6 h-6" data-lucide="x-circle"></i>
</button>
</div>
</div>
<div className="mt-6 flex justify-between items-center border-t border-gray-100 pt-4">
<p className="text-xs text-red-500">M³ para Marítimo</p>
<button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="plus"></i> Adicionar Container
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
