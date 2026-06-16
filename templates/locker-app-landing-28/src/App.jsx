import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 justify-items-center">

<div className="w-full max-w-[360px] h-[780px] bg-[#fafafa] rounded-[3rem] shadow-xl border-[8px] border-white relative overflow-hidden flex flex-col ring-1 ring-slate-200/50">
<div className="flex-1 overflow-y-auto mockup-scroll pb-24">

<div className="pt-12 px-6 pb-2">

<div className="flex items-center gap-1.5 text-[#115c53]">
<i className="w-6 h-6" data-lucide="bird"></i>
<span className="text-xl font-medium tracking-tight">pertinho</span>
</div>
<div className="mt-8">
<h1 className="text-3xl font-medium tracking-tight text-slate-900">Olá, Marcos</h1>
<p className="text-base text-slate-500 mt-2 flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
                                Locker Pertinho — Condomínio Vista
                            </p>
</div>
</div>

<div className="mx-6 mt-6 mb-6 bg-[#e12b45]/5 rounded-2xl p-4 flex items-center gap-3 border border-[#e12b45]/10">
<i className="w-5 h-5 text-[#e12b45]" data-lucide="alert-circle"></i>
<span className="text-sm text-[#e12b45]">Atenção: 1 item expira em 3 horas</span>
</div>

<div className="mx-6 mb-6 bg-[#115c53] rounded-3xl p-6 text-white shadow-sm relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-5 border border-white/5">
<i className="w-6 h-6" data-lucide="package"></i>
</div>
<h2 className="text-xl font-medium tracking-tight mb-2">1 item para retirar</h2>
<p className="text-base text-white/70 mb-8">Disponível até hoje, 22:00</p>
<button className="w-full bg-white text-[#115c53] rounded-2xl py-4 text-base font-medium flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
                                Retirar agora
                                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="mx-6 mb-10 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
<div className="flex flex-col gap-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight mb-1 text-slate-900">Deixar um item</h3>
<p className="text-sm text-slate-500 leading-relaxed pr-4">Crie uma operação para outra pessoa retirar</p>
</div>
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 shrink-0 border border-slate-100">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
<button className="w-full bg-[#fafafa] border border-slate-200 text-slate-700 rounded-2xl py-3.5 text-base hover:bg-slate-50 transition-colors">
                                Nova operação
                            </button>
</div>
</div>

<div className="px-6">
<h4 className="text-sm text-slate-400 uppercase tracking-widest mb-4">Minhas operações</h4>
<div className="flex flex-col gap-4">

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#115c53] shrink-0 shadow-sm group-hover:border-[#115c53]/30 transition-colors">
<i className="w-5 h-5" data-lucide="package"></i>
</div>
<div className="flex-1 min-w-0 border-b border-slate-100 pb-4">
<div className="flex items-center justify-between mb-1">
<p className="text-base text-slate-900 truncate">Envelope — Locker 08</p>
<span className="text-xs text-[#115c53] bg-[#115c53]/5 px-2 py-1 rounded-md">Disponível</span>
</div>
<p className="text-sm text-slate-500 truncate">Expira hoje, 22:00</p>
</div>
</div>

<div className="flex items-center gap-4 opacity-70">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shrink-0 shadow-sm">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div className="flex-1 min-w-0 border-b border-slate-100 pb-4">
<div className="flex items-center justify-between mb-1">
<p className="text-base text-slate-900 truncate">Chave para Ana</p>
<span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Aguardando</span>
</div>
<p className="text-sm text-slate-500 truncate">Pronto para postagem</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-slate-100 px-8 py-5 flex justify-between items-center z-20">
<button className="flex flex-col items-center gap-1.5 text-[#115c53]">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-xs font-medium">Início</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="package"></i>
<span className="text-xs font-medium">Operações</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="history"></i>
<span className="text-xs font-medium">Histórico</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-xs font-medium">Perfil</span>
</button>
</div>
</div>

<div className="w-full max-w-[360px] h-[780px] bg-[#fafafa] rounded-[3rem] shadow-xl border-[8px] border-white relative overflow-hidden flex flex-col ring-1 ring-slate-200/50">
<div className="flex-1 overflow-y-auto mockup-scroll pb-32">

<div className="pt-12 px-6 pb-8">
<button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 mb-8 shadow-sm hover:bg-slate-50 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<span className="text-sm text-slate-400 uppercase tracking-widest mb-2 block">Nova operação</span>
<h1 className="text-2xl font-medium tracking-tight text-slate-900">Deixar item</h1>
</div>
<div className="px-6 flex flex-col gap-8">

<div className="flex flex-col gap-5">
<div className="flex flex-col gap-2">
<label className="text-sm text-slate-500 pl-1">Nome de quem vai retirar</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-900 outline-none focus:border-[#115c53] focus:ring-1 focus:ring-[#115c53] shadow-sm transition-all" placeholder="Ex: João Silva" type="text" value="Carlos Mendes"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm text-slate-500 pl-1">Descrição do item</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-900 outline-none focus:border-[#115c53] focus:ring-1 focus:ring-[#115c53] shadow-sm transition-all" placeholder="Ex: Chaves" type="text" value="Envelope com documentos"/>
</div>
<div className="flex flex-col gap-3 mt-2">
<label className="text-sm text-slate-500 pl-1">Prazo para retirada</label>

<div className="flex bg-slate-200/50 p-1 rounded-xl">
<button className="flex-1 py-2.5 text-sm text-slate-500 rounded-lg transition-colors">12h</button>
<button className="flex-1 py-2.5 text-sm bg-white text-slate-900 rounded-lg shadow-sm border border-slate-200/50">24h</button>
<button className="flex-1 py-2.5 text-sm text-slate-500 rounded-lg transition-colors">48h</button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between shadow-sm">
<div>
<span className="block text-base text-slate-900">Taxa de uso</span>
<span className="block text-sm text-slate-500 mt-1">Retirada incluída até 24h</span>
</div>
<div className="text-xl font-medium tracking-tight text-slate-900">R$ 3,90</div>
</div>

<div>
<label className="text-sm text-slate-500 pl-1 block mb-4">Forma de pagamento</label>
<div className="grid grid-cols-3 gap-3">
<button className="bg-[#115c53] text-white rounded-xl py-4 flex flex-col items-center justify-center gap-2 shadow-sm transition-transform active:scale-[0.98]">
<i className="w-5 h-5" data-lucide="qr-code"></i>
<span className="text-sm">PIX</span>
</button>
<button className="bg-white text-slate-600 border border-slate-200 rounded-xl py-4 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="credit-card"></i>
<span className="text-sm">Cartão</span>
</button>
<button className="bg-white text-slate-600 border border-slate-200 rounded-xl py-4 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="wallet"></i>
<span className="text-sm">Créditos</span>
</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-gradient-to-t from-[#fafafa] via-[#fafafa] to-transparent pt-10 pb-8 px-6 z-20">
<button className="w-full bg-[#115c53] text-white rounded-2xl py-4 text-base font-medium active:scale-[0.98] transition-transform shadow-md">
                        Gerar acesso
                    </button>
</div>
</div>

<div className="w-full max-w-[360px] h-[780px] bg-[#fafafa] rounded-[3rem] shadow-xl border-[8px] border-white relative overflow-hidden flex flex-col ring-1 ring-slate-200/50">
<div className="flex-1 overflow-y-auto mockup-scroll">

<div className="pt-12 px-6 pb-6">
<button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 mb-8 shadow-sm hover:bg-slate-50 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#115c53]/10 text-[#115c53] mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#115c53]"></span>
<span className="text-xs font-medium tracking-wide">Pronto para retirada</span>
</div>
<h1 className="text-3xl font-medium tracking-tight text-slate-900">Retirar item</h1>
</div>

<div className="mx-6 mt-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-6 border border-slate-100">
<i className="w-6 h-6" data-lucide="package"></i>
</div>
<div className="mb-8">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Envelope</h2>
<p className="text-base text-slate-500 mt-1">Enviado por Carlos Mendes</p>
</div>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
<div>
<span className="block text-sm text-slate-400 mb-1">Local</span>
<span className="block text-base text-slate-900">Condomínio Vista</span>
</div>
<div>
<span className="block text-sm text-slate-400 mb-1">Compartimento</span>
<span className="block text-base text-slate-900">Locker 08</span>
</div>
</div>
</div>

<div className="mt-auto pt-16 pb-12 mx-6 flex flex-col items-center">
<p className="text-sm text-slate-500 mb-8 text-center px-2">Aproxime-se do locker e use o app para destrancar a porta.</p>

<button className="w-full bg-[#115c53] text-white rounded-3xl p-8 flex flex-col items-center justify-center gap-5 relative overflow-hidden group active:scale-[0.98] transition-all duration-300 shadow-md hover:bg-[#0e4e47]">
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="unlock"></i>
</div>
<span className="text-xl font-medium tracking-tight">Abrir locker</span>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
