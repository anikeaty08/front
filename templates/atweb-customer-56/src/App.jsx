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
      

<aside className="w-64 bg-white border-r border-zinc-200 flex flex-col hidden md:flex shrink-0 z-20 relative">

<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<span className="text-xl font-semibold tracking-tighter text-zinc-900 uppercase">Atweb</span>
</div>

<div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<div className="px-3 pb-2 pt-2">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Menu Principal</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-zinc-100 text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:headset-linear"></iconify-icon>
                Atendimentos
                <span className="ml-auto bg-white border border-zinc-200 text-zinc-600 py-0.5 px-2 rounded-full text-xs">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
                Conversas
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:clipboard-list-linear"></iconify-icon>
                Ordens de Serviço
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
                Pedidos
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
                Financeiro
            </a>
<div className="px-3 pb-2 pt-6">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Apoio &amp; Gestão</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                Cadastros
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                Info Técnica
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:megaphone-linear"></iconify-icon>
                Comunicados
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
                KPI &amp; Relatórios
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                Mapa de Postos
            </a>
</div>

<div className="p-4 border-t border-zinc-100">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-zinc-50 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-medium">JS</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-zinc-900 truncate">João Silva</p>
<p className="text-xs text-zinc-500 truncate">Atendimento N2</p>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#fafafa]">

<header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center flex-1 gap-6">
<button className="md:hidden text-zinc-500 hover:text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<div className="max-w-md w-full relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-zinc-50 border border-transparent focus:border-zinc-300 focus:bg-white rounded-lg pl-10 pr-4 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-zinc-100 transition-all" placeholder="Busque por protocolo, CPF, nome ou NF..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-zinc-900 relative p-2 rounded-lg hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-bing-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="bg-zinc-900 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                    Novo Atendimento
                </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-full lg:w-[45%] xl:w-[40%] border-r border-zinc-200 bg-white flex flex-col shrink-0">

<div className="p-6 border-b border-zinc-100 shrink-0 space-y-4">
<div className="flex items-center justify-between">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Atendimentos</h1>
<button className="text-zinc-500 hover:text-zinc-900 text-sm flex items-center gap-1">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
                            Filtros
                        </button>
</div>
<div className="flex gap-2">
<select className="custom-select flex-1 border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-zinc-400 transition-colors bg-white">
<option>Todos os Status</option>
<option>Aberto</option>
<option>Em andamento</option>
<option>Aguardando peças</option>
</select>
<select className="custom-select flex-1 border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-700 focus:outline-none focus:border-zinc-400 transition-colors bg-white">
<option>Últimos 30 dias</option>
<option>Últimos 7 dias</option>
<option>Hoje</option>
</select>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<button className="w-full text-left p-5 border-b border-zinc-100 bg-zinc-50 relative group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-900"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-zinc-900">AT-2023-1042</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-900 text-white rounded-md">Em andamento</span>
</div>
<p className="text-sm text-zinc-900 font-medium mb-1">Carlos Eduardo Mendes</p>
<p className="text-xs text-zinc-500 mb-3 line-clamp-1">Geladeira Frost Free Inox 400L - Defeito no painel</p>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Há 2 horas</span>
<span>João Silva</span>
</div>
</button>

<button className="w-full text-left p-5 border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-zinc-900">AT-2023-1041</span>
<span className="text-xs font-medium px-2 py-1 bg-white border border-zinc-200 text-zinc-600 rounded-md">Aberto</span>
</div>
<p className="text-sm text-zinc-900 font-medium mb-1">Mariana Costa e Silva</p>
<p className="text-xs text-zinc-500 mb-3 line-clamp-1">Micro-ondas 30L Espelhado - Não esquenta</p>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Ontem, 14:30</span>
<span>Fila Triagem</span>
</div>
</button>

<button className="w-full text-left p-5 border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-zinc-900">AT-2023-1039</span>
<span className="text-xs font-medium px-2 py-1 bg-orange-50 text-orange-700 border border-orange-100 rounded-md">Aguardando peças</span>
</div>
<p className="text-sm text-zinc-900 font-medium mb-1">Roberto Oliveira</p>
<p className="text-xs text-zinc-500 mb-3 line-clamp-1">Máquina de Lavar 12kg - Barulho excessivo na centrifugação</p>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 12/10/2023</span>
<span>Autorizada Central</span>
</div>
</button>

<button className="w-full text-left p-5 border-b border-zinc-100 hover:bg-zinc-50 transition-colors opacity-75">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-zinc-900">AT-2023-1035</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-100 text-zinc-500 border border-zinc-200 rounded-md">Resolvido</span>
</div>
<p className="text-sm text-zinc-900 font-medium mb-1">Fernanda Lima</p>
<p className="text-xs text-zinc-500 mb-3 line-clamp-1">Fogão 4 Bocas Inox - Queimador falhando</p>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> 10/10/2023</span>
<span>João Silva</span>
</div>
</button>
</div>
</div>

<div className="flex-1 bg-white flex flex-col min-w-0 hidden lg:flex">

<div className="px-8 py-6 border-b border-zinc-100 shrink-0 flex items-center justify-between">
<div>
<div className="flex items-center gap-3 mb-1">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">AT-2023-1042</h2>
<span className="text-xs font-medium px-2 py-1 bg-zinc-900 text-white rounded-md">Em andamento</span>
</div>
<p className="text-sm text-zinc-500">Aberto em 14 de Outubro de 2023, às 09:15</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:forward-linear"></iconify-icon>
                            Transferir
                        </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 shadow-sm transition-colors flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:check-square-linear"></iconify-icon>
                            Resolver
                        </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-8 bg-zinc-50/50">

<div className="grid grid-cols-2 gap-6 mb-8">

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-[0_10px_30px_rgba(24,24,27,0.03)]">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-900 flex items-center gap-2">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:user-linear"></iconify-icon>
                                    Consumidor
                                </h3>
<button className="text-xs text-zinc-500 hover:text-zinc-900 underline underline-offset-2">Ver 360°</button>
</div>
<div className="space-y-3">
<div>
<p className="text-sm font-medium text-zinc-900">Carlos Eduardo Mendes</p>
<p className="text-xs text-zinc-500 mt-0.5">CPF: 123.456.789-00</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-1.5 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:phone-linear"></iconify-icon>
                                        (11) 98765-4321
                                    </div>
<div className="flex items-center gap-1.5 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:letter-linear"></iconify-icon>
                                        carlos@email.com
                                    </div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-[0_10px_30px_rgba(24,24,27,0.03)]">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-900 flex items-center gap-2">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:box-linear"></iconify-icon>
                                    Produto &amp; Revenda
                                </h3>
<button className="text-xs text-zinc-500 hover:text-zinc-900 underline underline-offset-2">Manual Técnico</button>
</div>
<div className="space-y-3">
<div>
<p className="text-sm font-medium text-zinc-900">Geladeira Frost Free Inox 400L</p>
<p className="text-xs text-zinc-500 mt-0.5">Ref: GF400X | Série: 9988776655</p>
</div>
<div className="pt-2 border-t border-zinc-100 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:shop-linear"></iconify-icon>
<div>
<p className="text-xs font-medium text-zinc-700">Magazine Central</p>
<p className="text-[11px] text-zinc-500">NF: 123456 • 10/05/2023</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-sm font-medium text-zinc-900 mb-2">Relato do Consumidor</h3>
<div className="bg-white border border-zinc-200 rounded-lg p-4 text-sm text-zinc-700 leading-relaxed shadow-sm">
                            Cliente relata que o painel digital parou de funcionar completamente após uma queda de energia na região. O refrigerador continua gelando, mas não é possível alterar a temperatura. Anexou foto do painel apagado.
                        </div>
<div className="flex gap-2 mt-3">
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-600 hover:bg-zinc-50">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
                                foto_painel.jpg
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-600 hover:bg-zinc-50">
<iconify-icon icon="solar:document-linear"></iconify-icon>
                                nf_compra.pdf
                            </button>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-900">Histórico de Interações</h3>
<div className="flex items-center gap-3">
<label className="flex items-center gap-2 text-xs text-zinc-600 cursor-pointer">
<input checked="" className="custom-checkbox" type="checkbox"/>
                                    Mostrar OS
                                </label>
<label className="flex items-center gap-2 text-xs text-zinc-600 cursor-pointer">
<input checked="" className="custom-checkbox" type="checkbox"/>
                                    Apenas Privados
                                </label>
</div>
</div>

<div className="relative ml-4 border-l border-zinc-200 space-y-8 pb-4">

<div className="relative pl-6">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-zinc-200 rounded-full border-2 border-[#fafafa]"></div>
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-sm font-medium text-zinc-900">Sistema</span>
<span className="text-xs text-zinc-500 ml-2">Há 2 horas</span>
</div>
<span className="text-[11px] font-medium px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded">Log</span>
</div>
<p className="text-sm text-zinc-600">Atendimento transferido para fila <strong>Atendimento N2</strong>.</p>
</div>

<div className="relative pl-6">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-zinc-900 rounded-full border-2 border-[#fafafa]"></div>
<div className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm relative">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-700 flex items-center justify-center text-[11px] font-medium">MC</div>
<span className="text-sm font-medium text-zinc-900">Maria Clara (Triagem)</span>
<span className="text-xs text-zinc-500">Hoje, 09:30</span>
</div>
<span className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-md">
<iconify-icon icon="solar:lock-linear"></iconify-icon>
                                            Nota Privada
                                        </span>
</div>
<p className="text-sm text-zinc-700 leading-relaxed">
                                        Verifiquei no manual de serviço que a placa display desse lote pode apresentar falha de tensão. Solicitada avaliação técnica. Criei pré-OS para a autorizada Central.
                                    </p>
<div className="mt-3 pt-3 border-t border-zinc-100 flex items-center gap-4">
<a className="text-xs font-medium text-zinc-900 flex items-center gap-1 hover:underline" href="#">
<iconify-icon className="text-zinc-400" icon="solar:clipboard-list-linear"></iconify-icon>
                                            OS-5542 (Aguardando aceite)
                                        </a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 bg-white border-t border-zinc-200 shrink-0">
<div className="border border-zinc-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-zinc-900/10 focus-within:border-zinc-400 transition-all shadow-sm">

<div className="bg-zinc-50 border-b border-zinc-200 px-3 py-2 flex items-center justify-between">
<div className="flex gap-1">
<button className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded transition-colors" title="Negrito">
<iconify-icon icon="solar:text-bold-linear"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded transition-colors" title="Lista">
<iconify-icon icon="solar:list-linear"></iconify-icon>
</button>
<div className="w-px h-5 bg-zinc-300 mx-1 self-center"></div>
<button className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded transition-colors" title="Anexar arquivo">
<iconify-icon icon="solar:paperclip-linear"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded transition-colors" title="Info Técnica">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-zinc-500">Visibilidade:</span>
<select className="custom-select bg-transparent text-xs font-medium text-zinc-900 focus:outline-none cursor-pointer">
<option>Público (Cliente vê)</option>
<option selected="">Nota Privada</option>
</select>
</div>
</div>

<textarea className="w-full bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none resize-none" placeholder="Registre o diagnóstico, ação tomada ou resposta ao cliente..." rows="3"></textarea>

<div className="bg-white px-4 py-3 flex items-center justify-between border-t border-zinc-100">
<div className="flex items-center gap-2">
<select className="custom-select border border-zinc-200 rounded-md px-2 py-1.5 text-xs text-zinc-700 focus:outline-none bg-zinc-50">
<option>Manter Status</option>
<option>Resolver Atendimento</option>
<option>Aguardando Peças</option>
</select>
</div>
<button className="bg-zinc-900 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors shadow-sm flex items-center gap-2">
                                Salvar Interação
                                <iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
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
