import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#151b28',
}
},
spacing: {
'128': '32rem',
}
}
}
}



        function switchTab(tabId) {
            // Update Navigation state
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-gray-50', 'text-slate-900', 'font-medium');
                el.classList.add('text-slate-600');
                // Reset icons
                const icon = el.querySelector('iconify-icon');
                if(icon) icon.classList.replace('text-slate-900', 'text-slate-400');
            });
            
            const activeNav = document.getElementById('nav-' + tabId);
            if (activeNav) {
                activeNav.classList.add('bg-gray-50', 'text-slate-900', 'font-medium');
                activeNav.classList.remove('text-slate-600');
                const activeIcon = activeNav.querySelector('iconify-icon');
                if(activeIcon) activeIcon.classList.replace('text-slate-400', 'text-slate-900');
            }

            // Hide all views
            ['dashboard', 'properties', 'analyze', 'settings', 'architecture'].forEach(id => {
                const el = document.getElementById('view-' + id);
                if (el) el.classList.add('hidden');
            });

            // Show target view
            const target = document.getElementById('view-' + tabId);
            if (target) {
                target.classList.remove('hidden');
                // Trigger animation reset
                target.classList.remove('fade-in');
                void target.offsetWidth; // trigger reflow
                target.classList.add('fade-in');
            }

            // Update Header Title
            const titles = {
                'dashboard': 'Dashboard',
                'properties': 'Propriedades',
                'analyze': 'Análise',
                'settings': 'Configurações',
                'architecture': 'Architecture'
            };
            document.getElementById('header-title').innerText = titles[tabId];
        }

        // Modal Logic
        const modal = document.getElementById('detail-modal');
        const panel = document.getElementById('detail-panel');

        function openDetailModal() {
            modal.classList.remove('hidden');
            setTimeout(() => {
                panel.classList.remove('translate-x-full');
            }, 10);
        }

        function closeDetailModal() {
            panel.classList.add('translate-x-full');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function simulateAnalysis() {
            const btn = document.querySelector('#view-analyze button');
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="svg-spinners:ring-resize" width="18"></iconify-icon> Processando...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.disabled = false;
                switchTab('properties');
                // Simulate new item notification
                alert("Análise concluída! Imóvel adicionado ao quadro.");
            }, 2000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between hidden md:flex z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-900" icon="simple-icons:openai" width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-slate-900">Leilão AI</span>
</div>
</div>

<nav className="p-4 space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group text-left bg-gray-50 text-slate-900 font-medium" id="nav-dashboard" onclick="switchTab('dashboard')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:widget-linear" width="18"></iconify-icon>
                    Dashboard
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group text-left" id="nav-properties" onclick="switchTab('properties')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:home-smile-linear" width="18"></iconify-icon>
                    Propriedades
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group text-left" id="nav-analyze" onclick="switchTab('analyze')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:scanner-linear" width="18"></iconify-icon>
                    Nova Análise
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group text-left" id="nav-settings" onclick="switchTab('settings')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:settings-linear" width="18"></iconify-icon>
                    Configurações
                </button>
</nav>

<div className="px-4 mt-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 px-3">System</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group text-left" id="nav-architecture" onclick="switchTab('architecture')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:server-square-linear" width="18"></iconify-icon>
                    Architecture
                </button>
</div>
</div>

<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-md transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 border border-gray-200">
<span className="font-medium text-xs">JS</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate">João Silva</p>
<p className="text-xs text-slate-500 truncate">joao@invest.com</p>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-50">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
<div className="flex items-center gap-2 text-slate-500">
<span className="text-xs font-medium hover:text-slate-900 cursor-pointer">Workspace</span>
<iconify-icon className="opacity-50" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-xs font-medium text-slate-900" id="header-title">Dashboard</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<iconify-icon className="text-slate-400 hover:text-slate-900 cursor-pointer" icon="solar:bell-linear" width="20"></iconify-icon>
<div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded shadow-sm transition-all flex items-center gap-2" onclick="switchTab('analyze')">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    Nova Análise
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8" id="content-area">

<div className="fade-in max-w-6xl mx-auto space-y-8" id="view-dashboard">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-50 rounded-md">
<iconify-icon className="text-slate-600" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">142</div>
<div className="text-xs text-slate-500 mt-1">Imóveis Analisados</div>
</div>
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-green-50 rounded-md">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">28</div>
<div className="text-xs text-slate-500 mt-1">Sinal Verde (Alta Margem)</div>
</div>
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-red-50 rounded-md">
<iconify-icon className="text-red-600" icon="solar:danger-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">84</div>
<div className="text-xs text-slate-500 mt-1">Sinal Vermelho (Risco)</div>
</div>
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-50 rounded-md">
<iconify-icon className="text-slate-600" icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">28.4%</div>
<div className="text-xs text-slate-500 mt-1">Margem Média Projetada</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
<h3 className="font-medium text-slate-900">Atividade Recente</h3>
<button className="text-xs text-slate-500 hover:text-slate-900">Ver tudo</button>
</div>
<div className="divide-y divide-gray-50">

<div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer" onclick="openDetailModal()">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500">
<iconify-icon icon="solar:home-angle-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Apt. 3 Quartos - Vila Madalena</div>
<div className="text-xs text-slate-500">Leilão: 24/11/2023 • Lance Inicial: R$ 450k</div>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100 mb-1">
                                        Sinal Verde
                                    </div>
<div className="text-xs text-slate-400">Há 2 horas</div>
</div>
</div>

<div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500">
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Sala Comercial - Centro SP</div>
<div className="text-xs text-slate-500">Leilão: 30/11/2023 • Lance Inicial: R$ 120k</div>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-700 border border-red-100 mb-1">
                                        Sinal Vermelho
                                    </div>
<div className="text-xs text-slate-400">Há 5 horas</div>
</div>
</div>

<div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500">
<iconify-icon icon="solar:home-wifi-angle-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Casa Residencial - Moema</div>
<div className="text-xs text-slate-500">Processando documentos...</div>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 mb-1">
<iconify-icon className="mr-1" icon="svg-spinners:ring-resize"></iconify-icon> Analisando
                                    </div>
<div className="text-xs text-slate-400">Agora</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 flex flex-col justify-between">
<div>
<h3 className="font-medium text-slate-900 mb-1">Distribuição de Custos</h3>
<p className="text-xs text-slate-500 mb-6">Média dos últimos 30 dias</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Aquisição</span>
<span className="font-medium text-slate-900">65%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-slate-900 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Reforma</span>
<span className="font-medium text-slate-900">20%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-slate-500 h-1.5 rounded-full" style={{width: '20%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Legal/Taxas</span>
<span className="font-medium text-slate-900">10%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-slate-400 h-1.5 rounded-full" style={{width: '10%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Condomínio/Dívidas</span>
<span className="font-medium text-slate-900">5%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-slate-300 h-1.5 rounded-full" style={{width: '5%'}}></div>
</div>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 border border-gray-200 rounded text-xs font-medium text-slate-600 hover:bg-gray-50 transition-colors">
                            Ver Relatório Completo
                        </button>
</div>
</div>
</div>

<div className="hidden fade-in max-w-6xl mx-auto h-full flex flex-col" id="view-properties">

<div className="flex flex-wrap items-center justify-between mb-4 gap-4">
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-2.5 text-gray-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 w-64 shadow-sm placeholder:text-gray-400" placeholder="Buscar por endereço, ID..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-2 border border-gray-200 bg-white rounded-md text-xs font-medium text-slate-600 hover:bg-gray-50">
<iconify-icon icon="solar:filter-linear" width="14"></iconify-icon> Filtros
                        </button>
<button className="flex items-center gap-2 px-3 py-2 border border-gray-200 bg-white rounded-md text-xs font-medium text-slate-600 hover:bg-gray-50">
<iconify-icon icon="solar:sort-vertical-linear" width="14"></iconify-icon> Ordenar
                        </button>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-500">Exibindo 12 de 142</span>
<div className="flex gap-1">
<button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50 text-gray-500 disabled:opacity-50"><iconify-icon icon="solar:alt-arrow-left-linear" width="14"></iconify-icon></button>
<button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50 text-gray-500"><iconify-icon icon="solar:alt-arrow-right-linear" width="14"></iconify-icon></button>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex-1">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 border-b border-gray-100">
<th className="py-3 px-4 w-12 text-center"><input type="checkbox"/></th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Imóvel</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Data Leilão</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Valor Leilão</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Custo Total</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider text-center">Margem</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider text-center">Status</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50">

<tr className="group hover:bg-blue-50/30 transition-colors cursor-pointer" onclick="openDetailModal()">
<td className="py-3 px-4 text-center"><input type="checkbox"/></td>
<td className="py-3 px-4">
<div className="text-sm font-medium text-slate-900">Apt. Vila Madalena</div>
<div className="text-xs text-slate-500">R. Harmonia, 123 - SP</div>
</td>
<td className="py-3 px-4 text-xs text-slate-600">24 Nov 2023</td>
<td className="py-3 px-4 text-xs font-medium text-slate-900 text-right">R$ 450.000</td>
<td className="py-3 px-4 text-xs text-slate-600 text-right">R$ 620.000</td>
<td className="py-3 px-4 text-xs font-semibold text-green-600 text-center">+32%</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">Sinal Verde</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-slate-900"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-blue-50/30 transition-colors cursor-pointer">
<td className="py-3 px-4 text-center"><input type="checkbox"/></td>
<td className="py-3 px-4">
<div className="text-sm font-medium text-slate-900">Sala Centro SP</div>
<div className="text-xs text-slate-500">Av. Ipiranga, 900 - SP</div>
</td>
<td className="py-3 px-4 text-xs text-slate-600">30 Nov 2023</td>
<td className="py-3 px-4 text-xs font-medium text-slate-900 text-right">R$ 120.000</td>
<td className="py-3 px-4 text-xs text-slate-600 text-right">R$ 195.000</td>
<td className="py-3 px-4 text-xs font-semibold text-red-600 text-center">-5%</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-700 border border-red-100">Sinal Vermelho</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-slate-900"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-blue-50/30 transition-colors cursor-pointer">
<td className="py-3 px-4 text-center"><input type="checkbox"/></td>
<td className="py-3 px-4">
<div className="text-sm font-medium text-slate-900">Casa Moema</div>
<div className="text-xs text-slate-500">Al. dos Arapanés, 440 - SP</div>
</td>
<td className="py-3 px-4 text-xs text-slate-600">05 Dez 2023</td>
<td className="py-3 px-4 text-xs font-medium text-slate-900 text-right">R$ 1.200.000</td>
<td className="py-3 px-4 text-xs text-slate-600 text-right">R$ 1.450.000</td>
<td className="py-3 px-4 text-xs font-semibold text-green-600 text-center">+18%</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">Sinal Verde</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-slate-900"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="hidden fade-in max-w-2xl mx-auto pt-10" id="view-analyze">
<div className="text-center mb-10">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
<iconify-icon className="text-indigo-600" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">Nova Análise de Leilão</h2>
<p className="text-slate-500 mt-2 text-sm">Cole o link do leilão ou envie o edital/matrícula (PDF) para nossa IA processar.</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-1 bg-gray-50 border-b border-gray-100 flex p-1">
<button className="flex-1 py-2 text-xs font-medium text-slate-900 bg-white rounded shadow-sm border border-gray-200">Via Link</button>
<button className="flex-1 py-2 text-xs font-medium text-slate-500 hover:text-slate-700">Via Arquivo (PDF)</button>
</div>
<div className="p-8 space-y-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Link do Leilão ou Portal</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-gray-400" icon="solar:link-linear" width="16"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-shadow" placeholder="https://www.portaldeleiloes.com.br/lote/..." type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Ou arraste seus documentos</label>
<div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
<iconify-icon className="text-gray-400 mb-2 mx-auto" icon="solar:upload-track-linear" width="32"></iconify-icon>
<p className="text-sm font-medium text-slate-700">Clique para enviar ou arraste</p>
<p className="text-xs text-gray-500 mt-1">PDF até 10MB (Matrícula ou Edital)</p>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg shadow-lg shadow-slate-900/10 transition-all flex items-center justify-center gap-2" onclick="simulateAnalysis()">
<iconify-icon icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
                                Processar com IA
                            </button>
</div>
</div>
</div>
</div>

<div className="hidden fade-in max-w-3xl mx-auto" id="view-settings">
<h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-6">Configurações</h2>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-100">
<div className="p-6">
<h3 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-green-600" icon="simple-icons:googlesheets"></iconify-icon> Integração de Dados
                        </h3>
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-slate-700">Planilha Base (Google Sheets)</p>
<p className="text-xs text-slate-500 mt-1">Sincronize análises automaticamente com sua planilha.</p>
</div>
<button className="px-3 py-1.5 border border-gray-200 rounded text-xs font-medium text-slate-600 hover:bg-gray-50">Conectar</button>
</div>
</div>
<div className="p-6">
<h3 className="text-sm font-medium text-slate-900 mb-4">Parâmetros de Custo (Padrão)</h3>
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">ITBI (%)</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded text-sm bg-gray-50" type="number" value="3.0"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Registro (%)</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded text-sm bg-gray-50" type="number" value="1.5"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Corretagem Venda (%)</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded text-sm bg-gray-50" type="number" value="6.0"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Margem de Erro Reforma (%)</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded text-sm bg-gray-50" type="number" value="20.0"/>
</div>
</div>
</div>
<div className="p-6 bg-gray-50 rounded-b-lg flex justify-end">
<button className="bg-slate-900 text-white px-4 py-2 rounded text-xs font-medium hover:bg-slate-800">Salvar Alterações</button>
</div>
</div>
</div>

<div className="hidden fade-in max-w-5xl mx-auto space-y-8 pb-10" id="view-architecture">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">System Architecture &amp; Deliverables</h2>
<span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-bold uppercase tracking-wider">Internal Only</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-slate-850 rounded-lg shadow-sm border border-slate-700 overflow-hidden text-slate-300">
<div className="bg-slate-900 px-4 py-3 border-b border-slate-700 font-mono text-xs flex justify-between">
<span>schema.prisma</span>
<span className="text-slate-500">PostgreSQL</span>
</div>
<div className="p-4 font-mono text-xs overflow-x-auto">
<pre className="text-blue-300">model <span className="text-yellow-300">Workspace</span> {
  id        String     @id @default(cuid())
  name      String
  users     User[]
  datasets  Property[]
}</pre>
<pre className="mt-2 text-blue-300">model <span className="text-yellow-300">Property</span> {
  id            String   @id @default(cuid())
  workspaceId   String
  auctionUrl    String?
  address       String
  auctionDate   DateTime
  initialBid    Decimal
  marketValue   Decimal
  status        Status   @default(ANALYZING)
  
  // Cost breakdown (JSON or relations)
  costs         CostBreakdown?
  
  // AI Analysis
  aiSummary     String?  @db.Text
  legalRisk     RiskLevel
  
  createdAt     DateTime @default(now())
}</pre>
<pre className="mt-2 text-blue-300">enum <span className="text-yellow-300">Status</span> {
  GREEN_SIGNAL
  RED_SIGNAL
  NEUTRAL
}</pre>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
<div className="bg-gray-50 px-4 py-3 border-b border-gray-200 font-mono text-xs font-medium text-slate-700">
                            API Endpoints (Node.js/Next.js)
                        </div>
<div className="divide-y divide-gray-100">
<div className="p-3 flex items-center gap-3">
<span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[10px] font-bold">POST</span>
<code className="text-xs text-slate-600">/api/v1/ingest/url</code>
<span className="text-xs text-slate-400 ml-auto">Trigger AI Scraping</span>
</div>
<div className="p-3 flex items-center gap-3">
<span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[10px] font-bold">POST</span>
<code className="text-xs text-slate-600">/api/v1/ingest/upload</code>
<span className="text-xs text-slate-400 ml-auto">PDF Parsing Pipeline</span>
</div>
<div className="p-3 flex items-center gap-3">
<span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">GET</span>
<code className="text-xs text-slate-600">/api/v1/properties</code>
<span className="text-xs text-slate-400 ml-auto">List with Filters</span>
</div>
<div className="p-3 flex items-center gap-3">
<span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-[10px] font-bold">PUT</span>
<code className="text-xs text-slate-600">/api/v1/costs/:id</code>
<span className="text-xs text-slate-400 ml-auto">Recalculate Totals</span>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
<h3 className="text-sm font-medium text-slate-900 mb-4">AI Processing Pipeline</h3>
<div className="flex items-center justify-between text-xs text-slate-500">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<span>Input</span>
</div>
<div className="h-px bg-gray-200 flex-1 mx-2 relative">
<iconify-icon className="absolute right-0 -top-2 text-gray-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
</div>
<span>OCR/Extract</span>
</div>
<div className="h-px bg-gray-200 flex-1 mx-2 relative">
<iconify-icon className="absolute right-0 -top-2 text-gray-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon icon="simple-icons:openai" width="18"></iconify-icon>
</div>
<span>LLM Logic</span>
</div>
<div className="h-px bg-gray-200 flex-1 mx-2 relative">
<iconify-icon className="absolute right-0 -top-2 text-gray-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
<iconify-icon icon="solar:calculator-linear" width="20"></iconify-icon>
</div>
<span>Cost Engine</span>
</div>
<div className="h-px bg-gray-200 flex-1 mx-2 relative">
<iconify-icon className="absolute right-0 -top-2 text-gray-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:flag-bold" width="20"></iconify-icon>
</div>
<span>Decision</span>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden" id="detail-modal">
<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onclick="closeDetailModal()"></div>
<div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl transform transition-transform duration-300 translate-x-full" id="detail-panel">
<div className="h-full flex flex-col">

<div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-white">
<div>
<div className="flex items-center gap-3">
<h2 className="text-lg font-semibold text-slate-900">Apt. Vila Madalena</h2>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">Sinal Verde</span>
</div>
<p className="text-xs text-slate-500 mt-0.5">ID: #8921 • Leilão Judicial</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-slate-400 hover:text-slate-900 rounded hover:bg-gray-100"><iconify-icon icon="solar:link-linear" width="20"></iconify-icon></button>
<button className="p-2 text-slate-400 hover:text-slate-900 rounded hover:bg-gray-100" onclick="closeDetailModal()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 bg-gray-50">

<div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6 flex gap-3">
<iconify-icon className="text-indigo-600 shrink-0 mt-0.5" icon="solar:stars-minimalistic-bold" width="18"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-indigo-900">Análise da IA</h4>
<p className="text-xs text-indigo-800 mt-1 leading-relaxed">
                                Imóvel com excelente potencial. Valor de leilão 40% abaixo do mercado. Matrícula não apresenta dívidas trabalhistas impeditivas. Necessária reforma média (pintura e pisos).
                            </p>
</div>
</div>
<div className="grid grid-cols-2 gap-6 mb-6">

<div className="space-y-4">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Dados do Imóvel</h3>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm space-y-3">
<div>
<label className="text-xs text-gray-500 block">Endereço</label>
<div className="text-sm font-medium text-slate-900">Rua Harmonia, 123, Apt 42</div>
</div>
<div>
<label className="text-xs text-gray-500 block">Área</label>
<div className="text-sm font-medium text-slate-900">84m² Útil</div>
</div>
<div>
<label className="text-xs text-gray-500 block">Valor de Mercado</label>
<div className="text-sm font-medium text-slate-900">R$ 820.000,00</div>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Dados do Leilão</h3>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm space-y-3">
<div>
<label className="text-xs text-gray-500 block">Lance Inicial</label>
<div className="text-sm font-medium text-slate-900">R$ 450.000,00</div>
</div>
<div>
<label className="text-xs text-gray-500 block">Data</label>
<div className="text-sm font-medium text-slate-900">24/11/2023 - 14:00</div>
</div>
<div>
<label className="text-xs text-gray-500 block">Leiloeiro</label>
<div className="text-sm font-medium text-slate-900">Mega Leilões</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gestão de Custos</h3>
<button className="text-xs text-indigo-600 font-medium flex items-center gap-1">
<iconify-icon icon="solar:restart-linear"></iconify-icon> Recalcular com IA
                            </button>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<table className="w-full text-sm">
<thead className="bg-gray-50 border-b border-gray-100">
<tr>
<th className="py-2 px-4 text-left text-xs font-medium text-slate-500">Item</th>
<th className="py-2 px-4 text-right text-xs font-medium text-slate-500">Valor (R$)</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50">
<tr>
<td className="py-3 px-4 text-slate-600">Arrematação</td>
<td className="py-3 px-4 text-right font-medium text-slate-900">450.000</td>
</tr>
<tr>
<td className="py-3 px-4 text-slate-600">Comissão Leiloeiro (5%)</td>
<td className="py-3 px-4 text-right text-slate-600">22.500</td>
</tr>
<tr>
<td className="py-3 px-4 text-slate-600">ITBI (3%)</td>
<td className="py-3 px-4 text-right text-slate-600">13.500</td>
</tr>
<tr>
<td className="py-3 px-4 text-slate-600">Registro</td>
<td className="py-3 px-4 text-right text-slate-600">4.500</td>
</tr>
<tr>
<td className="py-3 px-4 text-slate-600 flex items-center gap-2">
                                            Reforma Estimada
                                            <iconify-icon className="text-gray-300 hover:text-gray-500 cursor-pointer" icon="solar:pen-linear" width="12"></iconify-icon>
</td>
<td className="py-3 px-4 text-right">
<input className="w-24 text-right border-b border-gray-200 focus:border-slate-900 focus:outline-none text-slate-900 font-medium" type="text" value="80.000"/>
</td>
</tr>
<tr>
<td className="py-3 px-4 text-slate-600">Condomínio Atrasado</td>
<td className="py-3 px-4 text-right text-slate-600">45.000</td>
</tr>
<tr>
<td className="py-3 px-4 text-slate-600">Advogado</td>
<td className="py-3 px-4 text-right text-slate-600">5.000</td>
</tr>
<tr className="bg-slate-50">
<td className="py-4 px-4 font-semibold text-slate-900">Custo Total</td>
<td className="py-4 px-4 text-right font-bold text-slate-900 text-lg">R$ 620.500</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-200 bg-white flex justify-end gap-3">
<button className="px-4 py-2 border border-gray-200 rounded text-xs font-medium text-slate-600 hover:bg-gray-50" onclick="closeDetailModal()">Cancelar</button>
<button className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-medium hover:bg-slate-800 shadow-sm">Salvar Análise</button>
</div>
</div>
</div>
</div>


    </>
  );
}
