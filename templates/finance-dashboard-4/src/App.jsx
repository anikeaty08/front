import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchTab(tabId) {
            // Hide all sections
            const sections = document.querySelectorAll('.view-section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show target section
            const targetSection = document.getElementById('view-' + tabId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }

            // Update nav items state
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                // Reset styles
                item.className = 'nav-item w-full group flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors';
                const icon = item.querySelector('iconify-icon');
                if(icon) icon.className = "mr-3 text-gray-400 group-hover:text-gray-600";
            });

            // Set active state
            const activeNav = document.getElementById('nav-' + tabId);
            if (activeNav) {
                activeNav.className = 'nav-item w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900';
                const icon = activeNav.querySelector('iconify-icon');
                if(icon) icon.className = "mr-3 text-gray-900";
            }

            // Update Title
            const titleMap = {
                'dashboard': 'Dashboard',
                'pagar': 'Contas a Pagar',
                'receber': 'Contas a Receber',
                'importacao': 'Importação',
                'categorias': 'Categorias',
                'fornecedores': 'Fornecedores',
                'clientes': 'Clientes',
                'empresa': 'Empresa',
                'usuarios': 'Usuários'
            };
            document.getElementById('page-title').textContent = titleMap[tabId] || 'Dashboard';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="md:hidden fixed w-full z-50 border-b p-4 flex justify-between items-center bg-white border-gray-100">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold bg-gray-900 text-white">F</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">FinDash</span>
</div>
<button className="text-gray-500 transition-colors hover:text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<aside className="hidden md:flex w-64 flex-col border-r h-full fixed left-0 top-0 bottom-0 z-10 border-gray-200 bg-white">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold bg-gray-900 text-white">F</div>
<h1 className="text-base font-semibold tracking-tight text-gray-900">FinDash</h1>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-0.5">
<button className="nav-item w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900" id="nav-dashboard" onclick="switchTab('dashboard')">
<iconify-icon className="mr-3 text-gray-900" icon="solar:widget-5-linear" width="20"></iconify-icon>
                Dashboard
            </button>
<div className="pt-4 pb-1 px-3 text-xs font-medium uppercase tracking-wider text-gray-400">Financeiro</div>
<button className="nav-item w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900" id="nav-pagar" onclick="switchTab('pagar')">
<iconify-icon className="mr-3 group-hover:text-gray-600 text-gray-400" icon="solar:card-send-linear" width="20"></iconify-icon>
                Contas a Pagar
            </button>
<button className="nav-item w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900" id="nav-receber" onclick="switchTab('receber')">
<iconify-icon className="mr-3 group-hover:text-gray-600 text-gray-400" icon="solar:card-recive-linear" width="20"></iconify-icon>
                Contas a Receber
            </button>
<button className="nav-item w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900" id="nav-importacao" onclick="switchTab('importacao')">
<iconify-icon className="mr-3 group-hover:text-gray-600 text-gray-400" icon="solar:import-linear" width="20"></iconify-icon>
                Importação OFX
            </button>
<div className="pt-4 pb-1 px-3 text-xs font-medium uppercase tracking-wider text-gray-400">Cadastros</div>
<button className="nav-item w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900" id="nav-categorias" onclick="switchTab('categorias')">
<iconify-icon className="mr-3 group-hover:text-gray-600 text-gray-400" icon="solar:tag-linear" width="20"></iconify-icon>
                Categorias
            </button>
<button className="nav-item w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900" id="nav-fornecedores" onclick="switchTab('fornecedores')">
<iconify-icon className="mr-3 group-hover:text-gray-600 text-gray-400" icon="solar:shop-2-linear" width="20"></iconify-icon>
                Fornecedores
            </button>
<button className="nav-item w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900" id="nav-clientes" onclick="switchTab('clientes')">
<iconify-icon className="mr-3 group-hover:text-gray-600 text-gray-400" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                Clientes
            </button>
<div className="pt-4 pb-1 px-3 text-xs font-medium uppercase tracking-wider text-gray-400">Configurações</div>
<button className="nav-item w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900" id="nav-empresa" onclick="switchTab('empresa')">
<iconify-icon className="mr-3 group-hover:text-gray-600 text-gray-400" icon="solar:buildings-2-linear" width="20"></iconify-icon>
                Empresa
            </button>
<button className="nav-item w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900" id="nav-usuarios" onclick="switchTab('usuarios')">
<iconify-icon className="mr-3 group-hover:text-gray-600 text-gray-400" icon="solar:user-id-linear" width="20"></iconify-icon>
                Usuários
            </button>
</nav>

<div className="border-t p-4 border-gray-100">
<div className="flex items-center w-full">
<div className="h-8 w-8 rounded-full flex items-center justify-center text-gray-500 text-xs font-medium bg-gray-200">AD</div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">Admin User</p>
<p className="text-xs text-gray-500">admin@findash.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col md:ml-64 min-w-0 h-full overflow-hidden bg-white">

<header className="flex-shrink-0 flex md:px-8 bg-white h-16 z-20 border-gray-100 border-b pr-6 pl-6 items-center justify-between">
<div className="hidden md:flex items-center text-sm text-gray-400">
<span className="text-gray-500">App</span>
<span className="mx-2">/</span>
<span className="font-medium text-gray-900" id="page-title">Dashboard</span>
</div>
<div className="flex items-center space-x-4 w-full md:w-auto justify-end mt-14 md:mt-0">
<div className="relative">
<iconify-icon className="cursor-pointer text-gray-400 hover:text-gray-600" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500"></span>
</div>
<div className="h-4 w-px bg-gray-200"></div>
<button className="flex items-center space-x-2 text-sm text-gray-500 transition-colors hover:text-red-600">
<span>Sair</span>
<iconify-icon icon="solar:logout-2-linear" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 relative bg-white">

<div className="view-section fade-in space-y-8" id="view-dashboard">
<div className="flex justify-between items-end">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Visão Geral</h2>
<p className="text-sm text-gray-500 mt-1">Resumo financeiro da empresa em tempo real.</p>
</div>
<div className="flex gap-2">
<select className="text-sm border rounded-md py-1.5 pl-3 pr-8 focus:ring-1 focus:ring-gray-200 focus:outline-none border-gray-200 text-gray-600 bg-white">
<option>Este Mês</option>
<option>Últimos 30 dias</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-5 rounded-xl border shadow-[0px_2px_4px_rgba(0,0,0,0.02)] border-gray-200 bg-white">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg border bg-gray-50 border-gray-100">
<iconify-icon className="text-gray-600" icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-full text-green-600 bg-green-50">+12%</span>
</div>
<p className="text-sm font-medium text-gray-500">Saldo Atual</p>
<h3 className="text-2xl font-semibold tracking-tight mt-1 text-gray-900">R$ 124.500</h3>
</div>
<div className="p-5 rounded-xl border shadow-[0px_2px_4px_rgba(0,0,0,0.02)] border-gray-200 bg-white">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg border bg-gray-50 border-gray-100">
<iconify-icon className="text-gray-600" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-full text-green-600 bg-green-50">+8.1%</span>
</div>
<p className="text-sm font-medium text-gray-500">Receitas</p>
<h3 className="text-2xl font-semibold tracking-tight mt-1 text-gray-900">R$ 45.230</h3>
</div>
<div className="p-5 rounded-xl border shadow-[0px_2px_4px_rgba(0,0,0,0.02)] border-gray-200 bg-white">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg border bg-gray-50 border-gray-100">
<iconify-icon className="text-gray-600" icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-full text-red-600 bg-red-50">+2.3%</span>
</div>
<p className="text-sm font-medium text-gray-500">Despesas</p>
<h3 className="text-2xl font-semibold tracking-tight mt-1 text-gray-900">R$ 18.400</h3>
</div>
<div className="p-5 rounded-xl border shadow-[0px_2px_4px_rgba(0,0,0,0.02)] border-gray-200 bg-white">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg border bg-gray-50 border-gray-100">
<iconify-icon className="text-gray-600" icon="solar:stopwatch-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-500">7 dias</span>
</div>
<p className="text-sm font-medium text-gray-500">A Receber</p>
<h3 className="text-2xl font-semibold tracking-tight mt-1 text-gray-900">R$ 8.150</h3>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 p-6 rounded-xl border shadow-[0px_2px_4px_rgba(0,0,0,0.02)] border-gray-200 bg-white">
<div className="flex justify-between items-center mb-6">
<h3 className="font-semibold text-gray-900">Fluxo de Caixa</h3>
</div>
<div className="h-64 flex items-end justify-between space-x-4">

<div className="w-full rounded-t h-[40%] relative group bg-gray-50"><div className="absolute bottom-0 w-full h-[60%] rounded-t opacity-90 bg-gray-900"></div></div>
<div className="w-full rounded-t h-[55%] relative group bg-gray-50"><div className="absolute bottom-0 w-full h-[70%] rounded-t opacity-90 bg-gray-900"></div></div>
<div className="w-full rounded-t h-[35%] relative group bg-gray-50"><div className="absolute bottom-0 w-full h-[50%] rounded-t opacity-90 bg-gray-900"></div></div>
<div className="w-full rounded-t h-[65%] relative group bg-gray-50"><div className="absolute bottom-0 w-full h-[80%] rounded-t opacity-90 bg-gray-900"></div></div>
<div className="w-full rounded-t h-[45%] relative group bg-gray-50"><div className="absolute bottom-0 w-full h-[55%] rounded-t opacity-90 bg-gray-900"></div></div>
<div className="w-full rounded-t h-[75%] relative group bg-gray-50"><div className="absolute bottom-0 w-full h-[85%] rounded-t opacity-90 bg-gray-900"></div></div>
</div>
<div className="flex justify-between mt-4 text-xs text-gray-400">
<span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
</div>
</div>

<div className="p-6 rounded-xl border shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col border-gray-200 bg-white">
<h3 className="font-semibold mb-4 text-gray-900">Ações Rápidas</h3>
<div className="space-y-3 flex-1">
<button className="w-full flex items-center p-3 border rounded-lg transition-colors text-left group border-gray-100 hover:bg-gray-50">
<div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-200 bg-gray-100 text-gray-600">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Nova Receita</p>
<p className="text-xs text-gray-500">Registrar entrada manual</p>
</div>
</button>
<button className="w-full flex items-center p-3 border rounded-lg transition-colors text-left group border-gray-100 hover:bg-gray-50">
<div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-200 bg-gray-100 text-gray-600">
<iconify-icon icon="solar:minus-circle-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Nova Despesa</p>
<p className="text-xs text-gray-500">Registrar saída manual</p>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6" id="view-pagar">
<div className="flex justify-between items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Contas a Pagar</h2>
<p className="text-sm text-gray-500">Gerencie seus compromissos financeiros e vencimentos.</p>
</div>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm bg-gray-900 hover:bg-gray-800 text-white">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Nova Conta
                    </button>
</div>

<div className="flex gap-3 pb-2 overflow-x-auto">
<button className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-900 text-white">Todos</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full border bg-white border-gray-200 text-gray-600 hover:bg-gray-50">Pendentes</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full border bg-white border-gray-200 text-gray-600 hover:bg-gray-50">Pagos</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full border bg-white border-gray-200 text-gray-600 hover:bg-gray-50">Atrasados</button>
</div>

<div className="rounded-xl border overflow-hidden shadow-sm border-gray-200 bg-white">
<table className="w-full text-left text-sm">
<thead className="border-b text-gray-500 bg-gray-50/50 border-gray-100">
<tr>
<th className="px-6 py-4 font-medium font-normal">Fornecedor</th>
<th className="px-6 py-4 font-medium font-normal">Vencimento</th>
<th className="px-6 py-4 font-medium font-normal">Categoria</th>
<th className="px-6 py-4 font-medium font-normal">Status</th>
<th className="px-6 py-4 font-medium font-normal text-right">Valor</th>
<th className="px-6 py-4 font-medium font-normal"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50">
<td className="px-6 py-4 font-medium text-gray-900">AWS Cloud Services</td>
<td className="px-6 py-4 text-gray-500">15 Jun 2024</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-600">Infraestrutura</span></td>
<td className="px-6 py-4"><span className="flex items-center text-xs font-medium text-yellow-600"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>Pendente</span></td>
<td className="px-6 py-4 text-right text-gray-900">- R$ 350,00</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50">
<td className="px-6 py-4 font-medium text-gray-900">Aluguel Escritório</td>
<td className="px-6 py-4 text-gray-500">10 Jun 2024</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-600">Operacional</span></td>
<td className="px-6 py-4"><span className="flex items-center text-xs font-medium text-red-600"><span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>Atrasado</span></td>
<td className="px-6 py-4 text-right text-gray-900">- R$ 2.500,00</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden fade-in space-y-6" id="view-receber">
<div className="flex justify-between items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Contas a Receber</h2>
<p className="text-sm text-gray-500">Acompanhe as entradas e faturamentos.</p>
</div>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm bg-gray-900 hover:bg-gray-800 text-white">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Novo Recebimento
                    </button>
</div>
<div className="rounded-xl border overflow-hidden shadow-sm border-gray-200 bg-white">
<table className="w-full text-left text-sm">
<thead className="border-b text-gray-500 bg-gray-50/50 border-gray-100">
<tr>
<th className="px-6 py-4 font-medium font-normal">Cliente</th>
<th className="px-6 py-4 font-medium font-normal">Data</th>
<th className="px-6 py-4 font-medium font-normal">Categoria</th>
<th className="px-6 py-4 font-medium font-normal">Status</th>
<th className="px-6 py-4 font-medium font-normal text-right">Valor</th>
<th className="px-6 py-4 font-medium font-normal"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50">
<td className="px-6 py-4 font-medium text-gray-900">Tech Solutions Ltda</td>
<td className="px-6 py-4 text-gray-500">Hoje</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-600">Consultoria</span></td>
<td className="px-6 py-4"><span className="flex items-center text-xs font-medium text-green-600"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>Recebido</span></td>
<td className="px-6 py-4 font-medium text-right text-green-600">+ R$ 4.500,00</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50">
<td className="px-6 py-4 font-medium text-gray-900">Design Studio A</td>
<td className="px-6 py-4 text-gray-500">Amanhã</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-600">Projeto</span></td>
<td className="px-6 py-4"><span className="flex items-center text-gray-500 text-xs font-medium"><span className="w-1.5 h-1.5 rounded-full mr-2 bg-gray-300"></span>Agendado</span></td>
<td className="px-6 py-4 text-right text-gray-900">+ R$ 2.100,00</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden fade-in space-y-6" id="view-importacao">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Importação OFX</h2>
<p className="text-sm text-gray-500">Importe extratos bancários para conciliação automática.</p>
</div>
<div className="border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-colors cursor-pointer border-gray-300 hover:bg-gray-50 bg-white">
<div className="h-12 w-12 rounded-full flex items-center justify-center mb-4 bg-blue-50 text-blue-600">
<iconify-icon icon="solar:upload-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900">Clique para fazer upload</h3>
<p className="text-sm text-gray-500 mt-1 max-w-xs">Arraste seu arquivo OFX ou clique aqui. Tamanho máximo 10MB.</p>
</div>
<div className="space-y-4">
<h3 className="text-sm font-medium uppercase tracking-wide text-gray-900">Últimas Importações</h3>
<div className="border rounded-lg p-4 flex items-center justify-between bg-white border-gray-200">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" icon="solar:file-text-linear" width="24"></iconify-icon>
<div>
<p className="text-sm font-medium text-gray-900">extrato_nubank_junho.ofx</p>
<p className="text-xs text-gray-500">Importado em 01/06/2024 às 10:30</p>
</div>
</div>
<span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-green-50 text-green-700 border-green-100">Processado</span>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6" id="view-categorias">
<div className="flex justify-between items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Categorias</h2>
<p className="text-sm text-gray-500">Organize suas transações por tipo.</p>
</div>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm bg-gray-900 hover:bg-gray-800 text-white">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Nova Categoria
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="p-4 border rounded-lg flex items-center justify-between group transition-colors bg-white border-gray-200 hover:border-gray-300">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50 text-blue-600">
<iconify-icon icon="solar:server-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Infraestrutura</span>
</div>
<button className="group-hover:text-gray-500 text-gray-300"><iconify-icon icon="solar:pen-linear" width="16"></iconify-icon></button>
</div>
<div className="p-4 border rounded-lg flex items-center justify-between group transition-colors bg-white border-gray-200 hover:border-gray-300">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-50 text-green-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Serviços</span>
</div>
<button className="group-hover:text-gray-500 text-gray-300"><iconify-icon icon="solar:pen-linear" width="16"></iconify-icon></button>
</div>
<div className="p-4 border rounded-lg flex items-center justify-between group transition-colors bg-white border-gray-200 hover:border-gray-300">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-50 text-orange-600">
<iconify-icon icon="solar:cart-large-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Operacional</span>
</div>
<button className="group-hover:text-gray-500 text-gray-300"><iconify-icon icon="solar:pen-linear" width="16"></iconify-icon></button>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6" id="view-fornecedores">
<div className="flex justify-between items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Fornecedores</h2>
<p className="text-sm text-gray-500">Base de dados de parceiros comerciais.</p>
</div>
<button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white">Novo Fornecedor</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border shadow-sm flex flex-col gap-4 bg-white border-gray-200">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-gray-100 text-gray-600">A</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">AWS Services</h3>
<p className="text-xs text-gray-500">Tecnologia</p>
</div>
</div>
<button className="text-gray-400"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</div>
<div className="text-xs text-gray-500 space-y-1">
<p className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> billing@aws.com</p>
<p className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> +1 555 0123</p>
</div>
</div>
<div className="p-6 rounded-xl border shadow-sm flex flex-col gap-4 bg-white border-gray-200">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-gray-100 text-gray-600">D</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Dell Computadores</h3>
<p className="text-xs text-gray-500">Hardware</p>
</div>
</div>
<button className="text-gray-400"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</div>
<div className="text-xs text-gray-500 space-y-1">
<p className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> vendas@dell.com.br</p>
<p className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> 0800 999 9999</p>
</div>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6" id="view-clientes">
<div className="flex justify-between items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Clientes</h2>
<p className="text-sm text-gray-500">Gestão de carteira de clientes.</p>
</div>
<button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white">Novo Cliente</button>
</div>
<div className="rounded-xl border overflow-hidden shadow-sm border-gray-200 bg-white">
<table className="w-full text-left text-sm">
<thead className="border-b text-gray-500 bg-gray-50/50 border-gray-100">
<tr>
<th className="px-6 py-4 font-medium font-normal">Nome</th>
<th className="px-6 py-4 font-medium font-normal">Contato</th>
<th className="px-6 py-4 font-medium font-normal">Status</th>
<th className="px-6 py-4 font-medium font-normal text-right">Receita Total</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50">
<td className="px-6 py-4 font-medium text-gray-900">Tech Solutions Ltda</td>
<td className="px-6 py-4 text-gray-500">contato@techsolutions.com</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs border bg-green-50 text-green-700 border-green-100">Ativo</span></td>
<td className="px-6 py-4 text-right text-gray-900">R$ 15.400,00</td>
</tr>
<tr className="hover:bg-gray-50/50">
<td className="px-6 py-4 font-medium text-gray-900">Grupo Alpha</td>
<td className="px-6 py-4 text-gray-500">financeiro@alpha.com</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs border bg-green-50 text-green-700 border-green-100">Ativo</span></td>
<td className="px-6 py-4 text-right text-gray-900">R$ 42.100,00</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden fade-in space-y-6" id="view-empresa">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Configurações da Empresa</h2>
<p className="text-sm text-gray-500">Dados cadastrais da sua organização.</p>
</div>
<div className="max-w-3xl border rounded-xl p-6 shadow-sm bg-white border-gray-200">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium uppercase text-gray-700">Razão Social</label>
<input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 border-gray-200 text-gray-900" type="text" value="DF Prime Soluções Digitais Ltda"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase text-gray-700">Nome Fantasia</label>
<input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 border-gray-200 text-gray-900" type="text" value="DF Prime"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase text-gray-700">CNPJ</label>
<input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 border-gray-200 text-gray-900" type="text" value="12.345.678/0001-90"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase text-gray-700">E-mail Financeiro</label>
<input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 border-gray-200 text-gray-900" type="email" value="financeiro@dfprime.com"/>
</div>
</div>
<div className="mt-6 flex justify-end">
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-900 text-white hover:bg-gray-800">Salvar Alterações</button>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6" id="view-usuarios">
<div className="flex justify-between items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Usuários</h2>
<p className="text-sm text-gray-500">Gerencie o acesso ao sistema.</p>
</div>
<button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white">Convidar Usuário</button>
</div>
<div className="border rounded-xl overflow-hidden shadow-sm bg-white border-gray-200">
<div className="p-4 flex items-center justify-between border-b transition-colors border-gray-100 hover:bg-gray-50">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full flex items-center justify-center text-gray-500 font-medium bg-gray-200">AD</div>
<div>
<p className="text-sm font-medium text-gray-900">Admin User</p>
<p className="text-xs text-gray-500">admin@findash.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">Administrador</span>
<button className="text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:settings-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="p-4 flex items-center justify-between border-b transition-colors border-gray-100 hover:bg-gray-50">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full flex items-center justify-center font-medium bg-blue-100 text-blue-600">JS</div>
<div>
<p className="text-sm font-medium text-gray-900">João Silva</p>
<p className="text-xs text-gray-500">joao@findash.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">Editor</span>
<button className="text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:settings-linear" width="18"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="text-center text-xs py-8 text-gray-400">
                © 2024 FinDash Tecnologia. Todos os direitos reservados.
            </div>
</div>
</main>


    </>
  );
}
