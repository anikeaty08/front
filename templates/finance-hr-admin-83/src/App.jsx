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



function switchTab(tabId, element, title) {
// Hide all tabs
document.querySelectorAll('.tab-content').forEach(el => {
el.classList.add('hidden');
});
// Show selected tab
document.getElementById(tabId).classList.remove('hidden');
// Update sidebar styles
document.querySelectorAll('.nav-link').forEach(el => {
el.classList.remove('bg-zinc-100', 'text-zinc-900');
el.classList.add('text-zinc-500', 'hover:bg-zinc-50', 'hover:text-zinc-900');
});
if(element) {
element.classList.remove('text-zinc-500', 'hover:bg-zinc-50', 'hover:text-zinc-900');
element.classList.add('bg-zinc-100', 'text-zinc-900');
}
// Update Header Title
if(title) {
document.getElementById('page-title').textContent = title;
}
}
function toggleForm(formId) {
const form = document.getElementById(formId);
form.classList.toggle('hidden');
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
      
<div className="flex min-h-screen">

<aside className="w-64 fixed h-full bg-white border-r border-zinc-200 hidden md:flex flex-col z-10">
<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<div className="font-bold text-lg tracking-tighter flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white text-xs">C</div>
                    Colaborador
                </div>
</div>
<div className="p-4 space-y-6 overflow-y-auto flex-1">

<div>
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 px-2">Menu Principal</h3>
<nav className="space-y-0.5">
<button className="nav-link w-full flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md transition-colors text-left" onclick="switchTab('dashboard', this, 'Visão Geral')">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Início
                        </button>
<button className="nav-link w-full flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors text-left" onclick="switchTab('enviar-nf', this, 'Enviar Nota Fiscal')">
<iconify-icon icon="solar:file-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Enviar NF
                        </button>
<button className="nav-link w-full flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors text-left" onclick="switchTab('reembolso', this, 'Meus Reembolsos')">
<iconify-icon icon="solar:hand-money-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Reembolso
                        </button>
<button className="nav-link w-full flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors text-left" onclick="switchTab('hora-extra', this, 'Banco de Horas')">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Hora Extra
                        </button>
</nav>
</div>

<div>
<div className="h-px bg-zinc-100 my-2 mx-2"></div>
<nav className="space-y-0.5 mt-4">
<button className="nav-link w-full flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors text-left" onclick="switchTab('dados-pessoais', this, 'Meu Perfil')">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Dados Pessoais
                        </button>
</nav>
</div>
</div>
<div className="mt-auto p-4 border-t border-zinc-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium text-xs border border-zinc-200">
                        AS
                    </div>
<div>
<p className="text-sm font-medium text-zinc-900 leading-none">Ana Silva</p>
<p className="text-xs text-zinc-500 mt-1">ana@empresa.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 md:ml-64">

<header className="h-16 bg-white/80 backdrop-blur-sm border-b border-zinc-200 sticky top-0 z-20 flex items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span>Área do Colaborador</span>
<iconify-icon className="opacity-50" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-900 font-medium" id="page-title">Visão Geral</span>
</div>
<div className="flex items-center gap-4">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full ring-2 ring-white"></span>
</button>
</div>
</header>
<div className="p-6 lg:p-8 max-w-5xl mx-auto">

<div className="tab-content space-y-6" id="dashboard">

<div className="bg-amber-50 border border-amber-100 rounded-lg p-4 flex items-start gap-3">
<iconify-icon className="text-amber-600 mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-amber-900">Atenção ao fechamento</h4>
<p className="text-sm text-amber-800 mt-1">O envio das Notas Fiscais deve ser realizado até o dia <strong>05 de Novembro</strong> para garantir o pagamento na data correta.</p>
</div>
</div>

<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">Olá, Ana</h2>
<p className="text-sm text-zinc-500">Aqui está o resumo das suas atividades recentes.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Última NF Enviada</span>
<iconify-icon className="text-zinc-400" icon="solar:file-check-linear" width="20"></iconify-icon>
</div>
<div className="mt-auto space-y-1">
<div className="text-2xl font-semibold tracking-tight text-zinc-900">NF #2023-104</div>
<div className="text-sm text-zinc-500">Enviada em 02 Out 2023</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
<span className="text-sm font-medium text-zinc-600">Valor: R$ 12.500,00</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Pago
                                </span>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Último Reembolso</span>
<iconify-icon className="text-zinc-400" icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<div className="mt-auto space-y-1">
<div className="text-2xl font-semibold tracking-tight text-zinc-900">Uber - Visita Cliente</div>
<div className="text-sm text-zinc-500">Solicitado em 15 Out 2023</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
<span className="text-sm font-medium text-zinc-600">Valor: R$ 42,90</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Em Análise
                                </span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden max-w-2xl mx-auto" id="enviar-nf">
<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="p-6 border-b border-zinc-100 bg-zinc-50/50">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Enviar Nota Fiscal</h2>
<p className="text-sm text-zinc-500 mt-1">Envie suas notas mensais para processamento do pagamento.</p>
</div>
<div className="p-6 space-y-6">

<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Empresa Destino</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="empresa" type="radio"/>
<div className="text-center py-3 px-4 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all hover:bg-zinc-50">
                                                Talk
                                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="empresa" type="radio"/>
<div className="text-center py-3 px-4 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all hover:bg-zinc-50">
                                                Intendesse
                                            </div>
</label>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Mês de Referência</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2.5 outline-none input-focus transition-all" type="month"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Valor Bruto (R$)</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2.5 outline-none input-focus transition-all" placeholder="0,00" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Anexo (PDF ou XML)</label>
<label className="flex flex-col items-center justify-center w-full h-32 border-2 border-zinc-200 border-dashed rounded-lg cursor-pointer bg-zinc-50 hover:bg-zinc-100 transition-colors">
<div className="flex flex-col items-center justify-center pt-5 pb-6">
<iconify-icon className="text-zinc-400 mb-2" icon="solar:cloud-upload-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-500"><span className="font-medium text-zinc-900">Clique para enviar</span> ou arraste</p>
<p className="text-xs text-zinc-400 mt-1">PDF, XML (MAX. 5MB)</p>
</div>
<input className="hidden" type="file" />
</input></label>
</div>
</div>

<div className="pt-2">
<button className="text-sm text-zinc-600 hover:text-zinc-900 font-medium flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                                    Adicionar outra Nota Fiscal
                                </button>
</div>
<div className="pt-4 border-t border-zinc-100">
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 rounded-lg shadow-sm transition-all flex justify-center items-center gap-2">
<iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
                                    Enviar Notas
                                </button>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-6" id="reembolso">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Histórico de Reembolsos</h2>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition-all flex items-center gap-2" onclick="toggleForm('form-reembolso')">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                            Solicitar Novo
                        </button>
</div>

<div className="hidden bg-white border border-zinc-200 rounded-xl p-6 shadow-sm mb-6 animate-fade-in" id="form-reembolso">
<h3 className="font-medium text-zinc-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:bill-list-linear"></iconify-icon>
                            Nova Solicitação
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Categoria</label>
<select className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 outline-none input-focus">
<option>Transporte / Uber</option>
<option>Alimentação</option>
<option>Hospedagem</option>
<option>Material de Escritório</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Valor Total (R$)</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 outline-none input-focus" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-zinc-700 mb-1">Descrição</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 outline-none input-focus" placeholder="Ex: Jantar com cliente XPTO" type="text"/>
</div>
</div>
<div className="flex justify-end gap-3">
<button className="text-sm text-zinc-500 hover:text-zinc-900 font-medium px-4 py-2" onclick="toggleForm('form-reembolso')">Cancelar</button>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-800">Enviar Solicitação</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-sm text-left">
<thead className="text-xs text-zinc-500 bg-zinc-50/50 uppercase border-b border-zinc-100">
<tr>
<th className="px-6 py-3 font-medium">Descrição</th>
<th className="px-6 py-3 font-medium">Categoria</th>
<th className="px-6 py-3 font-medium">Data</th>
<th className="px-6 py-3 font-medium">Valor</th>
<th className="px-6 py-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-zinc-900">Uber - Visita Cliente</td>
<td className="px-6 py-4 text-zinc-500">Transporte</td>
<td className="px-6 py-4 text-zinc-500">15 Out 2023</td>
<td className="px-6 py-4 text-zinc-900">R$ 42,90</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                            Pendente
                                        </span>
</td>
</tr>
<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-zinc-900">Licença Adobe CC</td>
<td className="px-6 py-4 text-zinc-500">Software</td>
<td className="px-6 py-4 text-zinc-500">01 Out 2023</td>
<td className="px-6 py-4 text-zinc-900">R$ 220,00</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                            Aprovado
                                        </span>
</td>
</tr>
<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-zinc-900">Almoço Equipe</td>
<td className="px-6 py-4 text-zinc-500">Alimentação</td>
<td className="px-6 py-4 text-zinc-500">20 Set 2023</td>
<td className="px-6 py-4 text-zinc-900">R$ 350,00</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                                            Reprovado
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-content hidden space-y-6" id="hora-extra">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Banco de Horas</h2>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition-all flex items-center gap-2" onclick="toggleForm('form-horaextra')">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
                            Inserir Nova
                        </button>
</div>

<div className="hidden bg-white border border-zinc-200 rounded-xl p-6 shadow-sm mb-6 animate-fade-in" id="form-horaextra">
<h3 className="font-medium text-zinc-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:calendar-add-linear"></iconify-icon>
                            Reportar Horas Extras
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Mês de Referência</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 outline-none input-focus" type="month"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Total de Horas</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 outline-none input-focus" placeholder="0" type="number"/>
</div>
</div>
<div className="flex justify-end gap-3 mt-4">
<button className="text-sm text-zinc-500 hover:text-zinc-900 font-medium px-4 py-2" onclick="toggleForm('form-horaextra')">Cancelar</button>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-800">Salvar Registro</button>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-sm text-left">
<thead className="text-xs text-zinc-500 bg-zinc-50/50 uppercase border-b border-zinc-100">
<tr>
<th className="px-6 py-3 font-medium">Mês Referência</th>
<th className="px-6 py-3 font-medium">Data Envio</th>
<th className="px-6 py-3 font-medium text-right">Horas Reportadas</th>
<th className="px-6 py-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-zinc-900">Setembro 2023</td>
<td className="px-6 py-4 text-zinc-500">02 Out 2023</td>
<td className="px-6 py-4 text-right font-medium text-zinc-900">12h</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                            Compensado
                                        </span>
</td>
</tr>
<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-zinc-900">Agosto 2023</td>
<td className="px-6 py-4 text-zinc-500">01 Set 2023</td>
<td className="px-6 py-4 text-right font-medium text-zinc-900">4h</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                            Pago
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-content hidden max-w-3xl mx-auto" id="dados-pessoais">
<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-6 border-b border-zinc-100 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Meu Perfil</h2>
<button className="text-sm text-zinc-500 hover:text-zinc-900 font-medium">Editar Informações</button>
</div>
<div className="p-6 space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Nome Completo</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none focus:bg-white focus:border-zinc-400 transition-colors" readonly="" type="text" value="Ana Silva"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Email Corporativo</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none focus:bg-white focus:border-zinc-400 transition-colors" readonly="" type="email" value="ana@empresa.com"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">CPF</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none focus:bg-white focus:border-zinc-400 transition-colors" readonly="" type="text" value="000.111.222-33"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Função</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none focus:bg-white focus:border-zinc-400 transition-colors" readonly="" type="text" value="Designer Senior"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">CNPJ (Se PJ)</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none focus:bg-white focus:border-zinc-400 transition-colors" readonly="" type="text" value="12.345.678/0001-90"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Telefone</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none focus:bg-white focus:border-zinc-400 transition-colors" readonly="" type="text" value="(11) 99999-8888"/>
</div>
</div>
<div className="h-px bg-zinc-100"></div>

<h3 className="text-sm font-semibold text-zinc-900">Dados Bancários</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<label className="block text-xs font-medium text-zinc-500 mb-1">Chave PIX</label>
<div className="relative">
<iconify-icon className="absolute right-3 top-2.5 text-zinc-400 cursor-pointer hover:text-zinc-600" icon="solar:copy-linear" width="16"></iconify-icon>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none" readonly="" type="text" value="ana@empresa.com"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Banco</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none" readonly="" type="text" value="Nubank (260)"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Agência / Conta</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none" readonly="" type="text" value="0001 / 123456-7"/>
</div>
</div>
<div className="h-px bg-zinc-100"></div>

<h3 className="text-sm font-semibold text-zinc-900">Detalhes do Contrato</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Salário Talk</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none" readonly="" type="text" value="R$ 8.000,00"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Salário Intendesse</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded px-3 py-2 text-zinc-900 outline-none" readonly="" type="text" value="-"/>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 pt-2">
<div className="flex items-center justify-between w-full md:w-auto gap-4 p-3 border border-zinc-100 rounded-lg bg-zinc-50/50">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">Tem Comissão?</span>
<span className="text-xs text-zinc-500">Elegível a bônus variável</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-200 appearance-none cursor-pointer transition-all duration-300 pointer-events-none" id="toggle-comissao" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-200 cursor-default" htmlFor="toggle-comissao"></label>
</input></div>
</div>
<div className="flex items-center justify-between w-full md:w-auto gap-4 p-3 border border-zinc-100 rounded-lg bg-zinc-50/50">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">Hora Extra?</span>
<span className="text-xs text-zinc-500">Registro de horas excedentes</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-200 appearance-none cursor-pointer transition-all duration-300 pointer-events-none" id="toggle-he" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-200 cursor-default" htmlFor="toggle-he"></label>
</input></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
