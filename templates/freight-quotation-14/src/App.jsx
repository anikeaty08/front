import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-30">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex flex-col">
<div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
<span>Cotações</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-right"></i>
<span>Importação</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 flex items-center gap-3">
                        Cotação #38697
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                            Em Andamento
                        </span>
</h1>
</div>

<nav className="hidden md:flex items-center gap-1">
<span className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Dados Gerais</span>
<i className="w-4 h-4 text-gray-300" data-lucide="chevron-right"></i>
<span className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg">Definição de Valores</span>
<i className="w-4 h-4 text-gray-300" data-lucide="chevron-right"></i>
<span className="px-4 py-2 text-sm font-medium text-gray-400">Resumo</span>
</nav>

<div className="flex items-center gap-3">
<button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                        Salvar Rascunho
                    </button>
<button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all shadow-sm">
                        Finalizar Cotação
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</header>
<main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-gray-500 mb-1">
<i className="w-4 h-4" data-lucide="user"></i>
<span className="text-xs font-medium uppercase tracking-wide">Cliente</span>
</div>
<div>
<p className="text-base font-semibold text-gray-900">4120 - Cliente Teste</p>
<p className="text-sm text-gray-500 mt-1">Ref: Importação Q4</p>
</div>
</div>

<div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-gray-500 mb-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="text-xs font-medium uppercase tracking-wide">Rota</span>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-2xl font-semibold tracking-tight text-gray-900">SSZ</p>
<p className="text-xs text-gray-500">Santos, BR</p>
</div>
<div className="flex-1 px-4 flex justify-center">
<i className="w-5 h-5 text-gray-300" data-lucide="move-right"></i>
</div>
<div className="text-right">
<p className="text-2xl font-semibold tracking-tight text-gray-900">BUE</p>
<p className="text-xs text-gray-500">Buenos Aires, AR</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-gray-500 mb-1">
<i className="w-4 h-4" data-lucide="box"></i>
<span className="text-xs font-medium uppercase tracking-wide">Detalhes da Carga</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="text-xs text-gray-500">Tipo</span>
<p className="text-sm font-medium text-gray-900">FCL</p>
</div>
<div>
<span className="text-xs text-gray-500">Incoterm</span>
<p className="text-sm font-medium text-gray-900">EXW</p>
</div>
<div>
<span className="text-xs text-gray-500">Peso Bruto</span>
<p className="text-sm font-medium text-gray-900">33 kg</p>
</div>
<div>
<span className="text-xs text-gray-500">Volume</span>
<p className="text-sm font-medium text-gray-900">33 m³</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-gray-500 mb-1">
<i className="w-4 h-4" data-lucide="calendar-clock"></i>
<span className="text-xs font-medium uppercase tracking-wide">Cronograma</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-sm text-gray-500">Previsão Início</span>
<span className="text-sm font-medium text-gray-900">-</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-500">Validade</span>
<span className="text-sm font-medium text-gray-900">-</span>
</div>
</div>
</div>
</section>

<section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

<div className="px-6 py-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/50">
<h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="dollar-sign"></i>
                    Composição de Valores
                </h2>
<button className="flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-md hover:bg-emerald-100 transition-colors border border-emerald-200">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
                    Recarregar Tarifas
                </button>
</div>

<div className="overflow-x-auto hide-scroll">
<table className="w-full min-w-[1200px]">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-64">Item</th>

<th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-l border-gray-200 bg-gray-50/80" colspan="2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
                                    Custo Estimado
                                </div>
</th>

<th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-l border-gray-200 bg-gray-50/80" colspan="5">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                    Valor de Venda
                                </div>
</th>
<th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Ações</th>
</tr>
<tr className="border-b border-gray-200">

<th className="px-6 py-2"></th>

<th className="px-4 py-2 text-xs font-medium text-gray-400 border-l border-gray-100">Valor</th>
<th className="px-4 py-2 text-xs font-medium text-gray-400">Moeda</th>

<th className="px-4 py-2 text-xs font-medium text-gray-400 border-l border-gray-100">Qtd.</th>
<th className="px-4 py-2 text-xs font-medium text-gray-400">Unid.</th>
<th className="px-4 py-2 text-xs font-medium text-gray-400">Preço Unit.</th>
<th className="px-4 py-2 text-xs font-medium text-gray-400">Moeda</th>
<th className="px-4 py-2 text-xs font-medium text-gray-400">Total</th>
<th className="px-4 py-2"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Frete Marítimo</span>
<span className="text-xs text-gray-400 mt-0.5">TT: 28 dias | Freetime: 14 dias</span>
</div>
</td>

<td className="px-4 py-3 border-l border-gray-100 bg-orange-50/10 group-hover:bg-orange-50/30">
<input className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5" placeholder="0.00" type="number"/>
</td>
<td className="px-4 py-3 bg-orange-50/10 group-hover:bg-orange-50/30">
<select className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option>USD</option>
<option>BRL</option>
</select>
</td>

<td className="px-4 py-3 border-l border-gray-100 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<input className="block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5 text-center" type="number" value="1"/>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<select className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option>p/ BL</option>
<option selected="">p/ Ctnr</option>
</select>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<input className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5" placeholder="0,00" type="text"/>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<select className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option>USD</option>
</select>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<span className="text-sm font-semibold text-gray-900">$ 0.00</span>
</td>

<td className="px-6 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<button className="text-gray-400 hover:text-indigo-600 p-1.5 rounded-md hover:bg-indigo-50 transition-colors" title="Buscar">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<button className="text-gray-400 hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-colors" title="Excluir">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<span className="text-sm font-medium text-gray-900">Capatazias</span>
</td>
<td className="px-4 py-3 border-l border-gray-100 bg-orange-50/10 group-hover:bg-orange-50/30">
<input className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5" placeholder="0.00" type="number"/>
</td>
<td className="px-4 py-3 bg-orange-50/10 group-hover:bg-orange-50/30">
<select className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option>BRL</option>
<option>USD</option>
</select>
</td>
<td className="px-4 py-3 border-l border-gray-100 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<input className="block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5 text-center" type="number" value="0"/>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<select className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option selected="">p/ Ctnr</option>
</select>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<input className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5" placeholder="0,00" type="text"/>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<select className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option>BRL</option>
</select>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<span className="text-sm font-semibold text-gray-900">R$ 0,00</span>
</td>
<td className="px-6 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<button className="text-gray-400 hover:text-indigo-600 p-1.5 rounded-md hover:bg-indigo-50 transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<button className="text-gray-400 hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-colors">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<span className="text-sm font-medium text-gray-900">Liberação de BL</span>
</td>
<td className="px-4 py-3 border-l border-gray-100 bg-orange-50/10 group-hover:bg-orange-50/30">
<input className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5" placeholder="0.00" type="number"/>
</td>
<td className="px-4 py-3 bg-orange-50/10 group-hover:bg-orange-50/30">
<select className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option>BRL</option>
</select>
</td>
<td className="px-4 py-3 border-l border-gray-100 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<input className="block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5 text-center" type="number" value="1"/>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<select className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option selected="">p/ BL</option>
</select>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<input className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5" placeholder="0,00" type="text"/>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<select className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option>BRL</option>
</select>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<span className="text-sm font-semibold text-gray-900">R$ 0,00</span>
</td>
<td className="px-6 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<button className="text-gray-400 hover:text-indigo-600 p-1.5 rounded-md hover:bg-indigo-50 transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<button className="text-gray-400 hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-colors">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<span className="text-sm font-medium text-gray-900">ISPS</span>
</td>
<td className="px-4 py-3 border-l border-gray-100 bg-orange-50/10 group-hover:bg-orange-50/30">
<input className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5" placeholder="0.00" type="number"/>
</td>
<td className="px-4 py-3 bg-orange-50/10 group-hover:bg-orange-50/30">
<select className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option>BRL</option>
</select>
</td>
<td className="px-4 py-3 border-l border-gray-100 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<input className="block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5 text-center" type="number" value="0"/>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<select className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option selected="">p/ Ctnr</option>
</select>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<input className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5" placeholder="0,00" type="text"/>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<select className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-1.5">
<option>BRL</option>
</select>
</td>
<td className="px-4 py-3 bg-indigo-50/10 group-hover:bg-indigo-50/30">
<span className="text-sm font-semibold text-gray-900">R$ 0,00</span>
</td>
<td className="px-6 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<button className="text-gray-400 hover:text-indigo-600 p-1.5 rounded-md hover:bg-indigo-50 transition-colors"><i className="w-4 h-4" data-lucide="search"></i></button>
<button className="text-gray-400 hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-colors"><i className="w-4 h-4" data-lucide="trash-2"></i></button>
</div>
</td>
</tr>

<tr className="bg-gray-50/50 border-t border-gray-200">
<td className="px-6 py-3" colspan="9">
<button className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 font-medium transition-colors">
<i className="w-4 h-4" data-lucide="plus-circle"></i>
                                    Adicionar novo item de custo
                                </button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">

<div className="w-full sm:w-1/3">
<div className="relative">
<i className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" data-lucide="file-text"></i>
<input className="w-full pl-9 pr-4 py-2 text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-gray-50 hover:bg-white transition-colors" placeholder="Adicionar observações gerais..." type="text"/>
</div>
</div>

<div className="flex items-center gap-6 sm:gap-12 w-full sm:w-auto justify-end">
<div className="text-right">
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Custo Total</p>
<p className="text-lg font-semibold text-gray-700">R$ 0,00</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Venda Total</p>
<p className="text-lg font-semibold text-gray-900">R$ 0,00</p>
</div>
<div className="pl-6 border-l border-gray-200 text-right">
<p className="text-xs text-emerald-600 font-bold uppercase tracking-wide">Saldo Final</p>
<p className="text-xl font-bold tracking-tight text-emerald-600">R$ 0,00</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
