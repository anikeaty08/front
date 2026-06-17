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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 border-b border-white/5 bg-[#080808]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="text-base font-semibold tracking-tighter text-white">HETZL</div>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon>
                    Projeção de Funil de Vendas
                </div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-emerald-400">Meta: R$ 50k/mês</span>
</div>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 py-8">

<header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Clínica Odontológica</h1>
<p className="text-sm text-neutral-500 max-w-lg leading-relaxed">Projeção detalhada de performance para campanhas de fundo de funil no Google Ads, focada em captação de leads qualificados.</p>
</div>
<div className="flex items-center gap-3 text-xs">
<button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors duration-200">
                    Exportar Relatório
                </button>
</div>
</header>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-8 rounded-2xl border border-white/5 bg-[#111111] p-6 lg:p-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-base font-medium text-white tracking-tight">Análise de Etapas do Funil</h2>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Visão Geral</span>
</div>
<div className="relative">

<div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-white/10 via-white/10 to-transparent"></div>

<div className="group relative flex gap-6 mb-2 rounded-xl p-3 -mx-3 hover:bg-white/[0.02] transition-colors">
<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/30 bg-[#181818] text-[#C9A96E] shadow-[0_0_15px_rgba(201,169,110,0.1)]">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
<div>
<h3 className="text-sm font-medium text-white">Investimento Mensal</h3>
<p className="text-xs text-neutral-500 mt-1">Google Ads (Fundo de funil)</p>
</div>
<div className="text-right">
<span className="text-xl font-semibold tracking-tight text-[#C9A96E]">R$ 2.500,00</span>
</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-4 ml-[19px] mb-2 py-1">
<div className="h-px w-6 bg-white/10"></div>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-[#7BAFD4]/20 bg-[#7BAFD4]/5 text-xs text-[#7BAFD4]">
<iconify-icon icon="solar:mouse-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Custo por clique (CPC): <strong>R$ 6,50</strong></span>
</div>
</div>

<div className="group relative flex gap-6 mb-2 rounded-xl p-3 -mx-3 hover:bg-white/[0.02] transition-colors">
<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8E84C8]/30 bg-[#181818] text-[#8E84C8]">
<iconify-icon className="text-lg" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
<div>
<h3 className="text-sm font-medium text-white">Visitantes da Landing Page</h3>
<p className="text-xs text-neutral-500 mt-1">Tráfego que carregou a página</p>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="text-xl font-semibold tracking-tight text-[#8E84C8]">289</span>
<div className="h-1 w-24 rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#8E84C8]/50 to-[#8E84C8]" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-4 ml-[19px] mb-2 py-1">
<div className="h-px w-6 bg-white/10"></div>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-xs text-neutral-400">
<iconify-icon icon="solar:link-broken-linear" strokeWidth="1.5"></iconify-icon>
<span>Connect rate: <strong>75%</strong></span>
</div>
</div>

<div className="group relative flex gap-6 mb-2 rounded-xl p-3 -mx-3 hover:bg-white/[0.02] transition-colors">
<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C47EB5]/30 bg-[#181818] text-[#C47EB5]">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
<div>
<h3 className="text-sm font-medium text-white">Leads Gerados</h3>
<p className="text-xs text-neutral-500 mt-1">Iniciaram contato via formulário/WhatsApp</p>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="text-xl font-semibold tracking-tight text-[#C47EB5]">35</span>
<div className="h-1 w-24 rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#C47EB5]/50 to-[#C47EB5]" style={{width: '12%'}}></div>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-4 ml-[19px] mb-2 py-1">
<div className="h-px w-6 bg-white/10"></div>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-xs text-neutral-400">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<span>Conversão da página: <strong>12%</strong></span>
</div>
</div>

<div className="group relative flex gap-6 mb-2 rounded-xl p-3 -mx-3 hover:bg-white/[0.02] transition-colors">
<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4A84B]/30 bg-[#181818] text-[#D4A84B]">
<iconify-icon className="text-lg" icon="solar:user-check-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
<div>
<h3 className="text-sm font-medium text-white">Leads Qualificados (SQL)</h3>
<p className="text-xs text-neutral-500 mt-1">Filtrados pela atendente ou IA</p>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="text-xl font-semibold tracking-tight text-[#D4A84B]">19</span>
<div className="h-1 w-24 rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#D4A84B]/50 to-[#D4A84B]" style={{width: '6.5%'}}></div>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-4 ml-[19px] mb-2 py-1">
<div className="h-px w-6 bg-white/10"></div>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-xs text-neutral-400">
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
<span>Taxa de qualificação: <strong>55%</strong></span>
</div>
</div>

<div className="group relative flex gap-6 mb-2 rounded-xl p-3 -mx-3 hover:bg-white/[0.02] transition-colors">
<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7DB88A]/30 bg-[#181818] text-[#7DB88A]">
<iconify-icon className="text-lg" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
<div>
<h3 className="text-sm font-medium text-white">Comparecimento (Avaliação)</h3>
<p className="text-xs text-neutral-500 mt-1">Oportunidades reais no consultório</p>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="text-xl font-semibold tracking-tight text-[#7DB88A]">12</span>
<div className="h-1 w-24 rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#7DB88A]/50 to-[#7DB88A]" style={{width: '4%'}}></div>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-4 ml-[19px] mb-2 py-1">
<div className="h-px w-6 bg-white/10"></div>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-xs text-neutral-400">
<iconify-icon icon="solar:walking-round-linear" strokeWidth="1.5"></iconify-icon>
<span>Taxa de comparecimento: <strong>65%</strong></span>
</div>
</div>

<div className="group relative flex gap-6 rounded-xl p-3 -mx-3 hover:bg-white/[0.02] transition-colors">
<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#4CAF7D]/40 bg-[#181818] text-[#4CAF7D] shadow-[0_0_20px_rgba(76,175,125,0.15)]">
<iconify-icon className="text-lg" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
<div>
<h3 className="text-sm font-medium text-white">Novos Clientes</h3>
<p className="text-xs text-neutral-500 mt-1">Fechamento presencial concluído</p>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="text-xl font-semibold tracking-tight text-[#4CAF7D]">9</span>
<div className="h-1 w-24 rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#4CAF7D]/50 to-[#4CAF7D]" style={{width: '3%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-6">

<div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#0D1F14] to-[#0a0a0a] p-6 lg:p-8">
<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-medium text-emerald-400 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                                Faturamento
                            </span>
</div>
<div className="mb-4">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-2">R$ 49.500,00</h2>
<p className="text-sm text-neutral-400 flex items-center gap-2">
                                Baseado em 9 clientes
                            </p>
</div>
<div className="mt-6 pt-6 border-t border-emerald-500/10 flex items-center justify-between">
<div>
<p className="text-xs text-neutral-500 mb-1">Ticket Médio</p>
<p className="text-sm font-medium text-white">R$ 5.500,00</p>
</div>
<div className="h-8 w-px bg-emerald-500/10"></div>
<div className="text-right">
<p className="text-xs text-neutral-500 mb-1">ROI Previsto</p>
<p className="text-sm font-medium text-emerald-400">1.880%</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/5 bg-[#111111] p-5">
<div className="flex items-center gap-2 mb-3 text-neutral-500">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xs font-medium uppercase tracking-wider">ROAS</h3>
</div>
<p className="text-2xl font-semibold tracking-tight text-white mb-1">19.8x</p>
<p className="text-xs text-neutral-500">Retorno s/ anúncio</p>
</div>
<div className="rounded-xl border border-white/5 bg-[#111111] p-5">
<div className="flex items-center gap-2 mb-3 text-neutral-500">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xs font-medium uppercase tracking-wider">CAC</h3>
</div>
<p className="text-2xl font-semibold tracking-tight text-white mb-1">R$ 277</p>
<p className="text-xs text-neutral-500">Custo de aquisição</p>
</div>
</div>

<div className="rounded-xl border border-[#C9A96E]/20 bg-[#C9A96E]/[0.03] p-5 mt-auto">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#C9A96E] text-lg mt-0.5 shrink-0" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-xs font-medium text-[#C9A96E] uppercase tracking-wider mb-1.5">Insight Estratégico</h4>
<p className="text-xs text-neutral-400 leading-relaxed">
                                A taxa de fechamento de 75% na avaliação presencial é o principal motor deste ROI. Manter o custo por clique otimizado em R$ 6,50 exige negativação constante de termos irrelevantes no Google Ads.
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
