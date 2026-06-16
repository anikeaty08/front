import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<aside className="w-64 bg-[#09090b] border-r border-zinc-800/60 hidden lg:flex flex-col z-20 shrink-0">
<div className="h-16 flex items-center px-6 border-b border-zinc-800/60">
<span className="text-xl font-medium tracking-tighter text-zinc-50">FINCORE</span>
</div>
<div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<p className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Principal</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800/50 text-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-linear"></iconify-icon>
<span className="text-sm font-medium">Transações</span>
<span className="ml-auto bg-zinc-800 text-zinc-300 text-xs py-0.5 px-2 rounded-md">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm font-medium">Faturas</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-medium">Clientes</span>
</a>
<p className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mt-8 mb-2">Análise</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-sm font-medium">Relatórios</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:calculator-linear"></iconify-icon>
<span className="text-sm font-medium">Orçamentos</span>
</a>
</div>
<div className="p-4 border-t border-zinc-800/60">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 transition-colors mb-2" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
<span className="text-sm font-medium">Configurações</span>
</a>
<div className="flex items-center gap-3 px-3 py-2 mt-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-50 shrink-0">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">João Doe</p>
<p className="text-xs text-zinc-500 truncate">joao@empresa.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#09090b]">

<header className="h-16 border-b border-zinc-800/60 flex items-center justify-between px-4 sm:px-8 sticky top-0 bg-[#09090b]/80 backdrop-blur-md z-10">
<div className="flex items-center gap-4">
<button className="lg:hidden text-zinc-400 hover:text-zinc-100">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<h1 className="text-xl font-medium tracking-tight text-zinc-50 hidden sm:block">Visão Geral</h1>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-zinc-900/50 border border-zinc-800/80 text-sm text-zinc-200 rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:border-zinc-600 focus:bg-zinc-800/50 transition-colors w-64 placeholder:text-zinc-500" placeholder="Buscar transações..." type="text"/>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-200 bg-zinc-900/50 border border-zinc-800/80 px-3 py-1.5 rounded-full transition-colors">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
<span className="hidden sm:inline">Este Mês</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="w-px h-5 bg-zinc-800/60 mx-1"></div>
<button className="relative text-zinc-400 hover:text-zinc-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#09090b]"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Saldo Total</p>
<div className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400 group-hover:text-zinc-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
</div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-2">R$ 142.305,00</h2>
<div className="flex items-center gap-2">
<span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                                12.5%
                            </span>
<span className="text-xs text-zinc-500">vs. mês passado</span>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Receitas</p>
<div className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400 group-hover:text-zinc-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:round-transfer-diagonal-linear"></iconify-icon>
</div>
</div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-2">R$ 48.230,00</h2>
<div className="flex items-center gap-2">
<span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                                4.1%
                            </span>
<span className="text-xs text-zinc-500">vs. mês passado</span>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Despesas</p>
<div className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400 group-hover:text-zinc-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:card-send-linear"></iconify-icon>
</div>
</div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-2">R$ 12.845,00</h2>
<div className="flex items-center gap-2">
<span className="flex items-center gap-1 text-xs font-medium text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded-md">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon>
                                2.3%
                            </span>
<span className="text-xs text-zinc-500">vs. mês passado</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6 flex flex-col">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-base font-medium text-zinc-100">Fluxo de Caixa</h3>
<p className="text-sm text-zinc-500">Análise de entradas e saídas diárias</p>
</div>
<div className="flex gap-2 bg-zinc-900/80 p-1 rounded-lg border border-zinc-800/60">
<button className="px-3 py-1 text-xs font-medium rounded-md text-zinc-400 hover:text-zinc-200 transition-colors">7D</button>
<button className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-800 text-zinc-100 shadow-sm">30D</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-zinc-400 hover:text-zinc-200 transition-colors">1A</button>
</div>
</div>
<div className="flex-1 relative min-h-[200px] mt-4 flex items-end">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full border-t border-zinc-800/40"></div>
<div className="w-full border-t border-zinc-800/40"></div>
<div className="w-full border-t border-zinc-800/40"></div>
<div className="w-full border-t border-zinc-800/40"></div>
<div className="w-full border-t border-zinc-800/40"></div>
</div>

<svg className="w-full h-full absolute inset-0 preserve-3d" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="area-grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#818cf8" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#818cf8" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 40 L0 25 C 10 25, 15 15, 25 20 C 35 25, 40 10, 50 15 C 60 20, 65 30, 75 25 C 85 20, 90 10, 100 5 L100 40 Z" fill="url(#area-grad)"></path>
<path d="M0 25 C 10 25, 15 15, 25 20 C 35 25, 40 10, 50 15 C 60 20, 65 30, 75 25 C 85 20, 90 10, 100 5" fill="none" stroke="#818cf8" strokeLinecap="round" strokeWidth="0.5"></path>
</svg>
</div>

<div className="flex justify-between mt-4 text-xs text-zinc-500 px-2">
<span>01 Jun</span>
<span>08 Jun</span>
<span>15 Jun</span>
<span>22 Jun</span>
<span>30 Jun</span>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6">
<h3 className="text-base font-medium text-zinc-100 mb-1">Pagamento Rápido</h3>
<p className="text-sm text-zinc-500 mb-6">Inicie uma transferência imediatamente.</p>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Favorecido</label>
<div className="relative">
<select className="w-full bg-[#09090b] border border-zinc-800 text-sm text-zinc-200 rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:border-zinc-600 transition-colors">
<option>Cloud Services Ltda</option>
<option>Agência de Marketing</option>
<option>Fornecedor de Equipamentos</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Valor (R$)</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">R$</span>
<input className="w-full bg-[#09090b] border border-zinc-800 text-sm text-zinc-200 rounded-lg pl-9 pr-3 py-2.5 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600" placeholder="0,00" type="text"/>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-sm py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2" type="button">
<iconify-icon className="text-lg" icon="solar:plain-2-linear"></iconify-icon>
                                    Enviar Pagamento
                                </button>
</div>
</form>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl overflow-hidden">
<div className="px-6 py-5 border-b border-zinc-800/60 flex items-center justify-between">
<h3 className="text-base font-medium text-zinc-100">Transações Recentes</h3>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1" href="#">
                            Ver todas <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider w-10">
<input className="custom-checkbox" type="checkbox"/>
</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Descrição</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Categoria</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Data</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Valor</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/60 text-sm">
<tr className="hover:bg-zinc-800/20 transition-colors group">
<td className="px-6 py-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Amazon Web Services</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400">Infraestrutura</td>
<td className="px-6 py-4 text-zinc-400">Hoje, 10:42</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                            Concluído
                                        </span>
</td>
<td className="px-6 py-4 text-right font-medium text-zinc-200">- R$ 3.420,00</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors group">
<td className="px-6 py-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:case-linear"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Consultoria Alpha Ltda</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400">Serviços</td>
<td className="px-6 py-4 text-zinc-400">Ontem, 15:30</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                            Processando
                                        </span>
</td>
<td className="px-6 py-4 text-right font-medium text-zinc-200">- R$ 1.500,00</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors group">
<td className="px-6 py-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:shop-linear"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Pagamento Cliente: TechNova</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400">Vendas</td>
<td className="px-6 py-4 text-zinc-400">28 Jun, 09:15</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                            Concluído
                                        </span>
</td>
<td className="px-6 py-4 text-right font-medium text-emerald-400">+ R$ 12.500,00</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors group">
<td className="px-6 py-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:monitor-linear"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Assinatura Figma</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400">Software</td>
<td className="px-6 py-4 text-zinc-400">25 Jun, 14:20</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                            Concluído
                                        </span>
</td>
<td className="px-6 py-4 text-right font-medium text-zinc-200">- R$ 350,00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
