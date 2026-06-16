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
      

<aside className="w-64 border-r border-white/[0.05] bg-[#0a0a0a] flex flex-col justify-between hidden lg:flex relative z-20">
<div>

<div className="h-20 flex items-center px-6 border-b border-white/[0.02]">
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#ff7900] to-[#cc6100] flex items-center justify-center shadow-[0_0_15px_rgba(255,121,0,0.2)]">
<span className="text-sm font-semibold tracking-tighter text-black">BSS</span>
</div>
<span className="text-sm font-medium tracking-tight">Build Scale</span>
</div>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#141414] text-white border border-white/[0.05] transition-all group" href="#">
<iconify-icon className="text-xl text-[#ff7900]" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02] transition-colors group" href="#">
<iconify-icon className="text-xl group-hover:text-zinc-300" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Timeline</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02] transition-colors group" href="#">
<iconify-icon className="text-xl group-hover:text-zinc-300" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Arquivos</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-white/[0.05] space-y-4">
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-xs font-medium">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
                Suporte via WhatsApp
            </button>
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
<span className="text-xs font-medium text-zinc-300">EC</span>
</div>
<div>
<p className="text-xs font-medium text-white">Empresa Cliente</p>
<p className="text-[10px] text-zinc-500">Plano Enterprise</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-[#050505]">

<header className="h-20 border-b border-white/[0.02] px-6 lg:px-10 flex items-center justify-between sticky top-0 bg-[#050505]/80 backdrop-blur-md z-10">
<div className="flex flex-col">
<h1 className="text-lg lg:text-xl font-semibold tracking-tight text-white">Visão Geral do Projeto</h1>
<div className="flex items-center gap-2 mt-0.5">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7900] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7900]"></span>
</span>
<span className="text-xs text-zinc-400 font-medium tracking-wide uppercase">Execução em andamento</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 bg-zinc-900/50 px-3 py-1.5 rounded-full border border-white/[0.02]">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Atualizado há 12 minutos
                </div>
</div>
</header>

<div className="p-6 lg:p-10 max-w-6xl w-full mx-auto space-y-8">

<div className="flex flex-col gap-1">
<p className="text-sm text-zinc-400">Olá, <span className="text-zinc-200 font-medium">João Silva</span></p>
<h2 className="text-2xl font-semibold tracking-tight text-white">Seu sistema está sendo construído.</h2>
<p className="text-sm text-zinc-500 max-w-2xl mt-1">Acompanhe em tempo real a evolução da sua infraestrutura. Nossa equipe está operando na fase de automação de fluxo.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/[0.04] relative overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7900] opacity-[0.03] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 group-hover:opacity-[0.05]"></div>
<div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
<div className="space-y-4 w-full lg:w-2/3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-[#ff7900] text-lg" icon="solar:rocket-linear"></iconify-icon>
                                Status de Desenvolvimento
                            </h3>
<span className="text-2xl font-semibold tracking-tight text-[#ff7900]">68%</span>
</div>

<div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden shadow-inner">
<div className="h-full bg-gradient-to-r from-[#cc6100] to-[#ff7900] rounded-full w-[68%] relative">
<div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12" style={{backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'}}></div>
</div>
</div>
<div className="flex items-center justify-between text-xs text-zinc-500">
<span>Início: 01/10</span>
<span className="text-zinc-300 font-medium">Etapa atual: Integração de Pagamentos</span>
</div>
</div>
<div className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.02] w-full lg:w-auto min-w-[240px]">
<p className="text-xs text-zinc-500 mb-1 uppercase tracking-wide">Próxima Entrega</p>
<p className="text-sm font-medium text-white">Checkout Transparente</p>
<p className="text-xs text-[#ff7900] mt-2 font-medium flex items-center gap-1.5">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                            Previsto para 24/10
                        </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-5 rounded-xl border border-white/[0.04] bg-[#0a0a0a] flex flex-col justify-between hover:border-zinc-800 transition-colors">
<div className="flex items-center justify-between mb-4">
<div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">+14.2%</span>
</div>
<p className="text-xs text-zinc-500 font-medium mb-1">Leads Capturados (Mês)</p>
<p className="text-2xl font-semibold tracking-tight text-white">12,408</p>
</div>

<div className="p-5 rounded-xl border border-white/[0.04] bg-[#0a0a0a] flex flex-col justify-between hover:border-zinc-800 transition-colors">
<div className="flex items-center justify-between mb-4">
<div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-lg" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">+5.8%</span>
</div>
<p className="text-xs text-zinc-500 font-medium mb-1">Taxa de Conversão Média</p>
<p className="text-2xl font-semibold tracking-tight text-white">4.2%</p>
</div>

<div className="p-5 rounded-xl border border-white/[0.04] bg-[#0a0a0a] flex flex-col justify-between hover:border-zinc-800 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#ff7900]/5 to-transparent pointer-events-none"></div>
<div className="flex items-center justify-between mb-4 relative z-10">
<div className="w-8 h-8 rounded bg-[#ff7900]/10 border border-[#ff7900]/20 flex items-center justify-center text-[#ff7900]">
<iconify-icon className="text-lg" icon="solar:dollar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">+22.4%</span>
</div>
<div className="relative z-10">
<p className="text-xs text-zinc-500 font-medium mb-1">Receita Gerada (Simulada)</p>
<p className="text-2xl font-semibold tracking-tight text-white">R$ 142.500</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="p-6 rounded-2xl border border-white/[0.04] bg-[#0a0a0a] flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Últimas Movimentações</h3>
<a className="text-xs text-zinc-500 hover:text-[#ff7900] transition-colors flex items-center gap-1" href="#">Ver tudo <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></a>
</div>
<div className="relative pl-3 space-y-6 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-zinc-800">

<div className="relative">
<span className="absolute -left-[18px] top-1 h-2.5 w-2.5 rounded-full bg-[#ff7900] ring-4 ring-[#0a0a0a]"></span>
<div className="pl-4 flex flex-col gap-1">
<span className="text-[10px] text-[#ff7900] font-medium uppercase tracking-wide">Em execução</span>
<p className="text-sm font-medium text-white">Setup de Gateway de Pagamento</p>
<p className="text-xs text-zinc-500">Configurando webhooks e regras de split.</p>
</div>
</div>

<div className="relative">
<span className="absolute -left-[18px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-700 ring-4 ring-[#0a0a0a]"></span>
<div className="pl-4 flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Ontem, 14:30</span>
<p className="text-sm font-medium text-zinc-300">Design System Aplicado</p>
<p className="text-xs text-zinc-500">Componentes base estruturados no frontend.</p>
</div>
</div>

<div className="relative">
<span className="absolute -left-[18px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-700 ring-4 ring-[#0a0a0a]"></span>
<div className="pl-4 flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Segunda, 09:00</span>
<p className="text-sm font-medium text-zinc-300">Kickoff do Projeto</p>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/[0.04] bg-[#0a0a0a] flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Arquivos Liberados</h3>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.02] bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800/50 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:document-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-200">Mapa_Estrategico_v1.pdf</p>
<p className="text-[10px] text-zinc-500">Adicionado há 2 dias</p>
</div>
</div>
<button className="w-8 h-8 rounded flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.02] bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800/50 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:figma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-200">Aprovacao_Layout_Final.fig</p>
<p className="text-[10px] text-zinc-500">Adicionado há 5 dias</p>
</div>
</div>
<button className="w-8 h-8 rounded flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>

<div className="mt-auto pt-6">
<button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#ff7900] text-black font-medium hover:bg-[#ff7900]/90 transition-all text-sm shadow-[0_0_20px_rgba(255,121,0,0.15)]">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                            Falar com o Especialista (WhatsApp)
                        </button>
</div>
</div>
</div>

<div className="h-10"></div>
</div>
</main>

    </>
  );
}
