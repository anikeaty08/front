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
      

<div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-8 xl:gap-12 w-full max-w-7xl">

<div className="relative w-full max-w-[360px] h-[780px] bg-white rounded-[2.5rem] shadow-xl border-4 border-white overflow-hidden flex flex-col">

<div className="px-6 pt-12 pb-4 bg-white z-10">
<div className="flex justify-between items-center mb-6">
<span className="text-lg font-semibold tracking-tighter text-[#175C53]">PERTINHO</span>
<button className="w-10 h-10 rounded-full bg-[#EFEFEA]/50 border border-[#EFEFEA] flex items-center justify-center text-[#31807A]">
<iconify-icon height="22" icon="solar:bell-linear" width="22"></iconify-icon>
</button>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight text-[#175C53]">Olá, Marcos</h1>
<p className="text-sm text-zinc-500 mt-1 flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                        Locker Pertinho — Condomínio Vista
                    </p>
</div>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-24">

<div className="mb-5 bg-[#E51E45]/5 border border-[#E51E45]/20 rounded-2xl p-4 flex items-start gap-3 text-[#E51E45]">
<iconify-icon className="mt-0.5 shrink-0" height="20" icon="solar:danger-circle-linear" width="20"></iconify-icon>
<div>
<p className="text-sm font-medium">Atenção: 1 item expira em 3 horas</p>
</div>
</div>

<div className="mb-4 bg-[#175C53] rounded-3xl p-6 text-white shadow-lg shadow-[#175C53]/20 relative overflow-hidden">
<div className="absolute -right-4 -top-4 opacity-10">
<iconify-icon height="120" icon="solar:box-minimalistic-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-xs font-medium backdrop-blur-sm mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#E51E45]"></div>
                            Ação necessária
                        </div>
<h2 className="text-2xl font-semibold tracking-tight leading-tight mb-2">Você tem 1 item<br/>para retirar</h2>
<p className="text-sm text-white/70 mb-6">Disponível até hoje, 22:00</p>
<button className="w-full bg-white text-[#175C53] font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95">
                            Retirar agora
                            <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="mb-8 bg-[#EFEFEA]/30 border border-[#EFEFEA] rounded-3xl p-6">
<div className="w-10 h-10 rounded-full bg-[#31807A]/10 flex items-center justify-center text-[#31807A] mb-4">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<h2 className="text-lg font-semibold tracking-tight text-[#175C53] mb-1">Deixar um item</h2>
<p className="text-sm text-zinc-500 mb-5 leading-relaxed">Crie uma operação para outra pessoa retirar depois.</p>
<button className="w-full bg-white border border-[#EFEFEA] text-[#175C53] font-medium py-3 rounded-xl flex items-center justify-center transition-transform active:scale-95 shadow-sm">
                        Nova operação
                    </button>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-[#175C53]">Minhas operações</h3>
<button className="text-xs text-[#31807A] font-medium">Ver todas</button>
</div>
<div className="flex flex-col gap-3">

<div className="bg-white border border-[#EFEFEA] p-4 rounded-2xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#31807A]/10 text-[#31807A] flex items-center justify-center shrink-0">
<iconify-icon height="20" icon="solar:box-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Envelope — Locker 08</p>
<p className="text-xs text-[#E51E45] mt-0.5">Expira hoje, 22:00</p>
</div>
</div>
</div>

<div className="bg-white border border-[#EFEFEA] p-4 rounded-2xl flex items-center justify-between opacity-70">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#EFEFEA] text-zinc-500 flex items-center justify-center shrink-0">
<iconify-icon height="20" icon="solar:key-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Chave para Ana</p>
<p className="text-xs text-zinc-500 mt-0.5">Aguardando depósito</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#EFEFEA] pb-safe pt-2 px-6">
<div className="flex justify-between items-center py-2 pb-6">
<button className="flex flex-col items-center gap-1 text-[#175C53]">
<iconify-icon height="24" icon="solar:home-2-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Início</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Operações</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400">
<iconify-icon height="24" icon="solar:history-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Histórico</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400">
<iconify-icon height="24" icon="solar:user-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Perfil</span>
</button>
</div>
</div>
</div>

<div className="relative w-full max-w-[360px] h-[780px] bg-white rounded-[2.5rem] shadow-xl border-4 border-white overflow-hidden flex flex-col">

<div className="px-6 pt-12 pb-4 bg-white z-10 border-b border-[#EFEFEA]">
<div className="flex items-center gap-4 mb-4">
<button className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-[#175C53] transition-colors hover:bg-[#EFEFEA]">
<iconify-icon height="24" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-[#175C53] mb-1">Deixar item</h1>
<p className="text-sm text-zinc-500">Crie uma operação para outra pessoa retirar depois.</p>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-6 pb-32">
<div className="space-y-5">

<div>
<label className="block text-xs font-medium text-[#31807A] mb-1.5 ml-1">Quem vai retirar?</label>
<input className="w-full bg-[#EFEFEA]/30 border border-[#EFEFEA] rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#31807A] transition-colors" placeholder="Nome da pessoa" type="text" value="Ana Carolina"/>
</div>

<div>
<label className="block text-xs font-medium text-[#31807A] mb-1.5 ml-1">Descrição do item</label>
<input className="w-full bg-[#EFEFEA]/30 border border-[#EFEFEA] rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#31807A] transition-colors" placeholder="Ex: Envelope, chaves..." type="text" value="Chaves do apartamento"/>
</div>

<div>
<label className="block text-xs font-medium text-[#31807A] mb-1.5 ml-1">Local de depósito</label>
<div className="w-full bg-[#EFEFEA]/30 border border-[#EFEFEA] rounded-xl px-4 py-3 text-sm text-zinc-900 flex justify-between items-center">
<span>Locker Condomínio Vista</span>
<iconify-icon className="text-zinc-400" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div>
<label className="block text-xs font-medium text-[#31807A] mb-2 ml-1">Prazo para retirada</label>
<div className="flex gap-2 bg-[#EFEFEA]/50 p-1 rounded-xl">
<button className="flex-1 py-2 text-sm font-medium text-zinc-500 rounded-lg">12h</button>
<button className="flex-1 py-2 text-sm font-medium bg-[#175C53] text-white rounded-lg shadow-sm">24h</button>
<button className="flex-1 py-2 text-sm font-medium text-zinc-500 rounded-lg">48h</button>
</div>
</div>
</div>
<hr className="border-[#EFEFEA] my-6"/>

<div className="space-y-4">
<h3 className="text-sm font-medium text-[#175C53]">Resumo</h3>
<div className="bg-[#EFEFEA]/30 border border-[#EFEFEA] rounded-2xl p-4">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-zinc-600">Taxa de uso</span>
<span className="text-sm font-semibold text-[#175C53]">R$ 3,90</span>
</div>
<p className="text-xs text-zinc-500">Retirada incluída até 24h. Após esse prazo, taxa adicional de R$ 2,00/dia.</p>
</div>

<div className="space-y-2 mt-4">
<label className="flex items-center justify-between p-3 border border-[#EFEFEA] rounded-xl cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#EFEFEA] flex items-center justify-center text-[#31807A]">
<iconify-icon height="18" icon="solar:wallet-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900">Créditos Pertinho</span>
</div>

<div className="w-5 h-5 rounded-full border-[5px] border-[#175C53] bg-white"></div>
</label>
<label className="flex items-center justify-between p-3 border border-[#EFEFEA]/50 rounded-xl cursor-pointer opacity-60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#EFEFEA]/50 flex items-center justify-center text-zinc-400">
<iconify-icon height="18" icon="solar:qr-code-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-500">PIX</span>
</div>
<div className="w-5 h-5 rounded-full border-2 border-zinc-200 bg-white"></div>
</label>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-white p-6 pt-4 border-t border-[#EFEFEA]">
<button className="w-full bg-[#175C53] text-white font-medium py-4 rounded-xl flex items-center justify-center transition-transform active:scale-95 shadow-lg shadow-[#175C53]/20 text-base">
                    Gerar acesso para depósito
                </button>
</div>
</div>

<div className="relative w-full max-w-[360px] h-[780px] bg-white rounded-[2.5rem] shadow-xl border-4 border-white overflow-hidden flex flex-col">

<div className="px-6 pt-12 pb-6 bg-[#EFEFEA]/30 border-b border-[#EFEFEA] z-10 flex flex-col items-center relative">
<button className="absolute left-4 top-12 w-10 h-10 rounded-full flex items-center justify-center text-[#175C53]">
<iconify-icon height="24" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="mt-2 mb-4 w-16 h-16 rounded-full bg-white shadow-sm border border-[#EFEFEA] flex items-center justify-center text-[#31807A]">
<iconify-icon height="32" icon="solar:box-linear" width="32"></iconify-icon>
</div>
<h1 className="text-xl font-semibold tracking-tight text-[#175C53] mb-2">Retirar item</h1>

<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#31807A]/10 text-[#31807A] text-xs font-semibold">
<iconify-icon height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
                    Disponível para retirada
                </div>
</div>

<div className="flex-1 px-6 py-8 flex flex-col">

<div className="bg-white border border-[#EFEFEA] rounded-2xl p-5 mb-6 shadow-sm">
<div className="space-y-4">
<div className="flex justify-between items-start">
<span className="text-sm text-zinc-500">Item</span>
<span className="text-sm font-medium text-zinc-900 text-right">Envelope Documentos</span>
</div>
<div className="flex justify-between items-start">
<span className="text-sm text-zinc-500">Enviado por</span>
<span className="text-sm font-medium text-zinc-900 text-right">Carlos Mendes</span>
</div>
<div className="w-full h-[1px] bg-[#EFEFEA] my-2"></div>
<div className="flex justify-between items-start">
<span className="text-sm text-zinc-500">Local</span>
<span className="text-sm font-medium text-zinc-900 text-right">Condomínio Vista<br/><span className="text-xs text-[#31807A] font-normal">Compartimento 08</span></span>
</div>
<div className="flex justify-between items-center bg-[#EFEFEA]/30 -mx-5 -mb-5 mt-2 p-4 rounded-b-2xl border-t border-[#EFEFEA]">
<span className="text-xs font-medium text-zinc-600 flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                Retirar até
                            </span>
<span className="text-sm font-semibold text-[#175C53]">Hoje, 22:00</span>
</div>
</div>
</div>

<div className="flex-1"></div>

<div className="flex flex-col items-center text-center mt-auto mb-10">
<p className="text-sm text-zinc-500 mb-6 max-w-[240px]">
                        Aproxime-se do locker e use o botão abaixo para destravar a porta.
                    </p>

<button className="relative group w-32 h-32 bg-[#175C53] rounded-full flex flex-col items-center justify-center text-white shadow-xl shadow-[#175C53]/30 transition-transform active:scale-95">
<div className="absolute inset-0 rounded-full border-[6px] border-[#31807A] scale-110 opacity-0 group-active:scale-100 group-active:opacity-100 transition-all duration-300"></div>
<iconify-icon className="mb-2" height="40" icon="solar:lock-unlocked-linear" width="40"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Abrir locker<br/>agora</span>
</button>

<div className="mt-8 text-xs text-zinc-400">
                        Nenhuma taxa pendente.
                    </div>
</div>
</div>
</div>
</div>

    </>
  );
}
