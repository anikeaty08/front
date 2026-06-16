import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r flex flex-col hidden md:flex z-20 bg-black border-gray-800">
<div className="h-16 flex items-center px-6 border-b border-gray-800">
<div className="flex items-center gap-2 text-gray-100">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-base tracking-tight uppercase font-jakarta font-medium">CtrlSys</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto pt-4 pr-3 pb-4 pl-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm bg-gray-900 text-gray-100 font-jakarta font-medium" href="#">
<iconify-icon className="text-gray-500" height="20" icon="solar:widget-5-linear" width="20"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-gray-400 hover:bg-gray-950 hover:text-gray-100 font-jakarta font-medium" href="#">
<iconify-icon className="text-gray-600" height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
                Contratos
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-gray-400 hover:bg-gray-950 hover:text-gray-100 font-jakarta font-medium" href="#">
<iconify-icon className="text-gray-600" height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
                Relatórios
            </a>
<div className="pt-4 pb-2">
<p className="px-3 text-xs uppercase tracking-widest text-gray-600 font-jakarta font-medium">Automação</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-gray-400 hover:bg-gray-950 hover:text-gray-100 font-jakarta font-medium" href="#">
<iconify-icon className="text-gray-600" height="20" icon="solar:plain-2-linear" width="20"></iconify-icon>
                WhatsApp API
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-gray-400 hover:bg-gray-950 hover:text-gray-100 font-jakarta font-medium" href="#">
<iconify-icon className="text-gray-600" height="20" icon="solar:alarm-linear" width="20"></iconify-icon>
                Agendamentos
            </a>
</nav>
<div className="border-gray-800 border-t pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs bg-gray-800 text-gray-400 font-jakarta font-medium">
                    AD
                </div>
<div className="flex flex-col">
<span className="text-sm text-gray-100 font-jakarta font-medium">Admin</span>
<span className="text-xs flex items-center gap-1 text-green-400 font-jakarta font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                    </span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

<header className="flex lg:px-8 z-10 bg-black h-16 border-gray-800 border-b pr-6 pl-6 items-center justify-between">
<div className="flex gap-4 items-center">
<button className="md:hidden text-gray-500 hover:text-gray-100">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h1 className="text-xl tracking-tight text-gray-100 font-geist font-semibold">Visão Geral</h1>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-gray-500 hidden sm:block font-jakarta font-medium">Última sync: Hoje, 15:45</span>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-lg transition-colors shadow-sm bg-black border-gray-800 text-gray-300 hover:bg-gray-950 font-jakarta font-medium">
<iconify-icon height="16" icon="solar:refresh-linear" width="16"></iconify-icon>
                    Sincronizar
                </button>
<button className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-lg transition-colors shadow-sm bg-gray-100 text-black hover:bg-gray-200 font-jakarta font-medium">
<iconify-icon height="18" icon="solar:add-circle-linear" width="18"></iconify-icon>
                    Novo Registro
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="border rounded-xl p-3 flex items-center justify-between bg-purple-950/50 border-purple-900">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-900 text-purple-400">
<iconify-icon className="" height="18" icon="solar:plain-3-linear" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-sm tracking-tight text-purple-100 font-jakarta font-medium">Relatório Automático Agendado</p>
<p className="text-xs text-purple-300 font-jakarta font-medium">Próximo envio via WhatsApp para +55 11 99999-9999 às 16:00.</p>
</div>
</div>
<button className="text-xs border rounded px-2 py-1 shadow-sm text-purple-400 hover:text-purple-200 bg-black border-purple-800 font-jakarta font-medium">
                        Executar Agora
                    </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="rounded-xl border p-5 shadow-sm flex flex-col bg-black border-gray-800">
<span className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-jakarta font-medium">Total (Mês)</span>
<div className="flex items-baseline gap-2 mt-auto">
<span className="text-3xl tracking-tight text-gray-100 font-geist font-semibold">1,248</span>
</div>
</div>

<div className="rounded-xl border p-5 shadow-sm flex flex-col bg-black border-gray-800">
<span className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-jakarta font-medium">Ativos</span>
<div className="flex items-baseline gap-2 mt-auto">
<span className="text-3xl tracking-tight text-gray-100 font-geist font-semibold">1,092</span>
<span className="text-xs px-1.5 py-0.5 rounded flex items-center gap-0.5 text-green-400 bg-green-950 font-jakarta font-medium">
<iconify-icon height="12" icon="solar:arrow-up-linear" width="12"></iconify-icon> 4%
                            </span>
</div>
</div>

<div className="rounded-xl border p-5 shadow-sm flex flex-col bg-black border-gray-800">
<span className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-jakarta font-medium">Cancelados</span>
<div className="flex items-baseline gap-2 mt-auto">
<span className="text-3xl tracking-tight text-gray-100 font-geist font-semibold">156</span>
<span className="text-xs px-1.5 py-0.5 rounded flex items-center gap-0.5 text-blue-400 bg-blue-950 font-jakarta font-medium">
<iconify-icon height="12" icon="solar:arrow-up-linear" width="12"></iconify-icon> 2%
                            </span>
</div>
</div>

<div className="rounded-xl border p-5 shadow-sm flex flex-col bg-black border-gray-800">
<span className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-jakarta font-medium">Taxa Retenção</span>
<div className="flex items-baseline gap-2 mt-auto">
<span className="text-3xl tracking-tight text-gray-100 font-geist font-semibold">87.5%</span>
</div>
<div className="w-full rounded-full h-1.5 mt-3 bg-gray-900">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '87.5%'}}></div>
</div>
</div>

<div className="rounded-xl border p-5 shadow-sm flex flex-col bg-black border-gray-800">
<span className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-jakarta font-medium">Taxa Churn</span>
<div className="flex items-baseline gap-2 mt-auto">
<span className="text-3xl tracking-tight text-gray-100 font-geist font-semibold">12.5%</span>
</div>
<div className="w-full rounded-full h-1.5 mt-3 bg-gray-900">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '12.5%'}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border p-6 shadow-sm bg-black border-gray-800">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base tracking-tight text-gray-100 font-jakarta font-medium">Evolução de Contratos</h2>
<select className="text-sm bg-transparent border-none text-gray-500 focus:ring-0 cursor-pointer outline-none">
<option className="font-jakarta font-medium">Este Mês</option>
<option className="font-jakarta font-medium">Mês Anterior</option>
</select>
</div>
<div className="h-64 w-full relative flex items-end pb-6">

<div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-600">
<span className="font-jakarta font-medium">50</span>
<span className="font-jakarta font-medium">25</span>
<span className="font-jakarta font-medium">0</span>
</div>

<div className="absolute inset-0 ml-6 mb-6 flex flex-col justify-between border-l border-b border-gray-900">
<div className="w-full border-t border-dashed border-gray-900"></div>
<div className="w-full border-t border-dashed border-gray-900"></div>
<div className="w-full"></div>
</div>

<svg className="absolute inset-0 ml-6 mb-6 w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)]" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#18181b" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#18181b" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="" d="M0,100 L0,80 C10,70 20,90 30,60 C40,30 50,70 60,40 C70,10 80,50 90,20 C95,10 100,25 100,25 L100,100 Z" fill="url(#gradient)"></path>
<path d="M0,80 C10,70 20,90 30,60 C40,30 50,70 60,40 C70,10 80,50 90,20 C95,10 100,25 100,25" fill="none" stroke="#18181b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>

<div className="absolute bottom-0 left-6 right-0 flex justify-between text-xs text-gray-600">
<span className="font-jakarta font-medium">01</span>
<span className="font-jakarta font-medium">07</span>
<span className="font-jakarta font-medium">14</span>
<span className="font-jakarta font-medium">21</span>
<span className="font-jakarta font-medium">28</span>
</div>
</div>
</div>

<div className="rounded-xl border p-6 shadow-sm flex flex-col bg-black border-gray-800">
<h2 className="text-base tracking-tight mb-6 text-gray-100 font-jakarta font-medium">Status (Proporção)</h2>
<div className="flex-1 flex items-center justify-center">
<div className="relative w-40 h-40">

<div className="w-full h-full rounded-full" style={{background: 'conic-gradient(#ef4444 0% 12.5%, #10b981 12.5% 100%)'}}></div>
<div className="absolute inset-2 rounded-full flex items-center justify-center bg-black">
<div className="text-center">
<span className="block text-2xl tracking-tight text-gray-100 font-geist font-semibold">1.2k</span>
<span className="text-xs text-gray-500 font-jakarta font-medium">Total</span>
</div>
</div>
</div>
</div>
<div className="mt-6 flex justify-center gap-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-pink-500"></span>
<span className="text-xs text-gray-400 font-jakarta font-medium">Ativo</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs text-gray-400 font-jakarta font-medium">Cancelado</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl border shadow-sm overflow-hidden bg-black border-gray-800">

<div className="p-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-gray-800">
<div className="flex items-center gap-2">
<h2 className="text-base tracking-tight text-gray-100 font-jakarta font-medium">Registros Recentes</h2>
<span className="px-2 py-0.5 rounded-full text-xs bg-gray-900 text-gray-400 font-jakarta font-medium">24 hoje</span>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm border rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 w-full sm:w-64 placeholder-gray-400 border-gray-800 text-gray-100" placeholder="Buscar contrato..." type="text"/>
</div>
<button className="p-1.5 border rounded-lg text-gray-500 transition-colors border-gray-800 hover:bg-gray-950 hover:text-gray-100">
<iconify-icon height="18" icon="solar:filter-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 border rounded-lg text-gray-500 transition-colors border-gray-800 hover:bg-gray-950 hover:text-gray-100">
<iconify-icon height="18" icon="solar:export-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="text-xs font-medium text-gray-500 uppercase tracking-wider border-b bg-gray-950/50 border-gray-800">
<tr className="">
<th className="px-6 py-3 font-jakarta font-medium">Contrato</th>
<th className="px-6 py-3 font-jakarta font-medium">Tipo / Serviço</th>
<th className="px-6 py-3 font-jakarta font-medium">Data Inst.</th>
<th className="px-6 py-3 text-right font-jakarta font-medium">Valor</th>
<th className="px-6 py-3 font-jakarta font-medium">Status</th>
<th className="px-6 py-3 text-right font-jakarta font-medium">Ações</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-900 text-gray-300">

<tr className="transition-colors hover:bg-gray-950/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg border flex items-center justify-center text-gray-500 bg-gray-900 border-gray-800">
<iconify-icon height="16" icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="">
<div className="text-gray-100 font-jakarta font-medium">CTR-2023-8901</div>
<div className="text-xs text-gray-500 font-jakarta font-medium">João Silva Costa</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-gray-600" height="14" icon="solar:phone-calling-linear" width="14"></iconify-icon>
<span className="font-jakarta font-medium">Internet Fibra 500MB</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 font-jakarta font-medium">24 Out 2023</td>
<td className="px-6 py-4 text-right text-gray-100 font-jakarta font-medium">R$ 119,90</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs border bg-pink-950 text-pink-300 border-pink-900 font-jakarta font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Ativo
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="transition-colors text-gray-600 hover:text-gray-100"><iconify-icon height="18" icon="solar:pen-linear" width="18"></iconify-icon></button>
<button className="transition-colors text-gray-600 hover:text-blue-400"><iconify-icon height="18" icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</td>
</tr>

<tr className="transition-colors hover:bg-gray-950/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg border flex items-center justify-center text-gray-500 bg-gray-900 border-gray-800">
<iconify-icon className="" height="16" icon="solar:buildings-2-linear" width="16"></iconify-icon>
</div>
<div className="">
<div className="text-gray-100 font-jakarta font-medium">CTR-2023-8902</div>
<div className="text-xs text-gray-500 font-jakarta font-medium">Empresa Alpha Ltda</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-gray-600" height="14" icon="solar:chat-line-linear" width="14"></iconify-icon>
<span className="font-jakarta font-medium">Link Dedicado 1GB</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 font-jakarta font-medium">23 Out 2023</td>
<td className="px-6 py-4 text-right text-gray-100 font-jakarta font-medium">R$ 850,00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs border bg-pink-950 text-pink-300 border-pink-900 font-jakarta font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Ativo
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="transition-colors text-gray-600 hover:text-gray-100"><iconify-icon height="18" icon="solar:pen-linear" width="18"></iconify-icon></button>
<button className="transition-colors text-gray-600 hover:text-blue-400"><iconify-icon height="18" icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</td>
</tr>

<tr className="transition-colors hover:bg-gray-950/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg border flex items-center justify-center text-gray-500 bg-gray-900 border-gray-800">
<iconify-icon height="16" icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="">
<div className="text-gray-100 font-jakarta font-medium">CTR-2023-8895</div>
<div className="text-xs text-gray-500 font-jakarta font-medium">Maria Oliveira</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-gray-600" height="14" icon="solar:phone-calling-linear" width="14"></iconify-icon>
<span className="font-jakarta font-medium">Internet Fibra 300MB</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 font-jakarta font-medium">15 Out 2023</td>
<td className="px-6 py-4 text-right text-gray-100 font-jakarta font-medium">R$ 99,90</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs border bg-blue-950 text-blue-300 border-blue-900 font-jakarta font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Cancelado
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="transition-colors text-gray-600 hover:text-gray-100"><iconify-icon height="18" icon="solar:pen-linear" width="18"></iconify-icon></button>
<button className="transition-colors text-gray-600 hover:text-blue-400"><iconify-icon height="18" icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t flex items-center justify-between text-sm text-gray-500 border-gray-800">
<span className="font-jakarta font-medium">Mostrando 1 a 3 de 1,248 resultados</span>
<div className="flex gap-1">
<button className="px-3 py-1 border rounded-md disabled:opacity-50 border-gray-800 hover:bg-gray-950 font-jakarta font-medium">Anterior</button>
<button className="px-3 py-1 border rounded-md border-gray-800 bg-gray-100 text-black hover:bg-gray-200 font-jakarta font-medium">1</button>
<button className="px-3 py-1 border rounded-md border-gray-800 hover:bg-gray-950 font-jakarta font-medium">2</button>
<button className="px-3 py-1 border rounded-md border-gray-800 hover:bg-gray-950 font-jakarta font-medium">3</button>
<button className="px-3 py-1 border rounded-md border-gray-800 hover:bg-gray-950 font-jakarta font-medium">Próxima</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
