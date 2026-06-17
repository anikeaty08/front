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
      

<header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#262626] pb-6 gap-4">
<div>
<div className="flex items-center gap-3 mb-1">
<iconify-icon className="text-[#FF5C00]" height="32" icon="solar:infinity-linear" width="32"></iconify-icon>
<h1 className="text-3xl font-semibold tracking-tighter uppercase leading-none text-white">Fluxo</h1>
</div>
<p className="text-xs uppercase tracking-[0.2em] text-[#666666]">Painel de Controle Operacional v.2.4</p>
</div>
<div className="flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-xs text-[#666666] uppercase tracking-wider">Status do Sistema</span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#00FF88] shadow-[0_0_8px_#00FF88]"></span>
<span className="text-sm font-medium tracking-tight">OPERACIONAL</span>
</div>
</div>
<div className="h-8 w-[1px] bg-[#262626]"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-sm bg-[#1A1A1A] border border-[#262626] flex items-center justify-center">
<iconify-icon className="text-[#888888]" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
</div>
</header>

<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<section className="col-span-1 md:col-span-2 bg-[#0D0D0D] border border-[#262626] rounded-sm p-6 relative group overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex justify-between items-center mb-6">
<h2 className="text-xs uppercase tracking-[0.15em] text-[#888888] flex items-center gap-2">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
                    Tráfego Pago
                </h2>
<span className="text-[10px] px-2 py-1 border border-[#FF3333]/30 bg-[#FF3333]/10 text-[#FF3333] rounded-sm uppercase tracking-wider">Atenção Requerida</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">

<div className="space-y-1">
<span className="text-[10px] uppercase tracking-wider text-[#666666]">CPM (Custo/Mil)</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-white">R$ 54,20</span>
<span className="text-xs text-[#FF3333] font-medium">▲ 12%</span>
</div>
<div className="text-[10px] text-[#FF3333] mt-2 flex items-start gap-1 leading-tight">
<iconify-icon className="mt-[1px] shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
                        ⚠️ OTIMIZAR CRIATIVOS<br/><span className="opacity-70">Testar novos ângulos</span>
</div>
</div>

<div className="space-y-1">
<span className="text-[10px] uppercase tracking-wider text-[#666666]">CTR Médio</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-white">0.85%</span>
<span className="text-xs text-[#FF3333] font-medium">▼ 0.3%</span>
</div>

<div className="flex items-end gap-[2px] h-6 mt-1 w-20 opacity-50">
<div className="w-1 bg-[#262626] h-[40%]"></div>
<div className="w-1 bg-[#262626] h-[60%]"></div>
<div className="w-1 bg-[#262626] h-[30%]"></div>
<div className="w-1 bg-[#262626] h-[50%]"></div>
<div className="w-1 bg-[#FF3333] h-[20%]"></div> 
</div>
<div className="text-[10px] text-[#FF3333] mt-1 leading-tight">
                        🔴 URGENTE: Revisar headlines
                    </div>
</div>

<div className="space-y-1">
<span className="text-[10px] uppercase tracking-wider text-[#666666]">ROAS Geral</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-white">2.4x</span>
<span className="text-xs text-[#FFD700] font-medium">Meta: 3x</span>
</div>
<div className="w-full bg-[#1A1A1A] h-1 rounded-none mt-3 overflow-hidden">
<div className="bg-[#FFD700] h-full w-[70%]"></div>
</div>
<div className="text-[10px] text-[#FFD700] mt-2 leading-tight">
                        📊 Analisar jornada pós-clique
                    </div>
</div>

<div className="space-y-1 border-t border-[#262626] pt-4 md:border-none md:pt-0">
<span className="text-[10px] uppercase tracking-wider text-[#666666]">CPC Médio</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-white">R$ 5,20</span>
</div>
<div className="text-[10px] text-[#FF3333] mt-2 leading-tight">
                        ⚡ Refinar segmentação
                    </div>
</div>
</div>
</section>

<section className="col-span-1 md:col-span-2 bg-[#0D0D0D] border border-[#262626] rounded-sm p-6 relative group">
<div className="absolute top-0 left-0 w-1 h-full bg-[#00FF88] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex justify-between items-center mb-6">
<h2 className="text-xs uppercase tracking-[0.15em] text-[#888888] flex items-center gap-2">
<iconify-icon icon="solar:wallet-linear" width="14"></iconify-icon>
                    Produto &amp; Vendas
                </h2>
<span className="text-[10px] px-2 py-1 border border-[#00FF88]/30 bg-[#00FF88]/10 text-[#00FF88] rounded-sm uppercase tracking-wider">Estável</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="col-span-2 md:col-span-1">
<span className="text-[10px] uppercase tracking-wider text-[#666666]">Ticket Médio</span>
<div className="text-2xl font-semibold tracking-tight text-white mt-1">R$ 2.850</div>
<div className="text-[10px] text-[#FFD700] mt-2 leading-tight border-l-2 border-[#FFD700] pl-2">
                        💰 UPSELL Necessário<br/><span className="opacity-70">Criar pacote premium</span>
</div>
</div>

<div className="col-span-2 md:col-span-1">
<span className="text-[10px] uppercase tracking-wider text-[#666666]">Lançamentos Ativos</span>
<div className="text-2xl font-semibold tracking-tight text-white mt-1">5</div>
<div className="text-[10px] text-[#00FF88] mt-2 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Capacidade Ideal
                    </div>
</div>

<div className="col-span-2 md:col-span-1">
<span className="text-[10px] uppercase tracking-wider text-[#666666]">Pipeline B2B</span>
<div className="text-2xl font-semibold tracking-tight text-white mt-1">R$ 145k</div>
<div className="h-1 w-full bg-[#1A1A1A] mt-3">
<div className="h-full bg-[#00D4FF] w-[65%]"></div>
</div>
</div>

<div className="col-span-2 md:col-span-1">
<span className="text-[10px] uppercase tracking-wider text-[#666666]">NPS Global</span>
<div className="flex items-center gap-2 mt-1">
<span className="text-3xl font-semibold tracking-tight text-white">78</span>
<span className="px-1.5 py-0.5 bg-[#00FF88]/20 text-[#00FF88] text-[9px] rounded-sm">BOM</span>
</div>
<div className="text-[10px] text-[#666666] mt-2">
                        Meta: 85+
                    </div>
</div>
</div>
</section>

<section className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-[#0D0D0D] border border-[#262626] rounded-sm p-6 relative">
<div className="flex justify-between items-center mb-8">
<h2 className="text-xs uppercase tracking-[0.15em] text-[#888888] flex items-center gap-2">
<iconify-icon icon="solar:filter-linear" width="14"></iconify-icon>
                    Diagnóstico de Funil
                </h2>
<div className="flex gap-2">
<button className="text-[10px] uppercase tracking-wider text-[#666666] hover:text-white transition-colors">7D</button>
<button className="text-[10px] uppercase tracking-wider text-[#FF5C00] border-b border-[#FF5C00]">30D</button>
</div>
</div>

<div className="space-y-6 relative">

<div className="absolute left-[19px] top-4 bottom-8 w-[1px] bg-[#262626] -z-10"></div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-sm bg-[#141414] border border-[#262626] flex items-center justify-center shrink-0 z-10">
<iconify-icon className="text-[#888888]" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<h3 className="text-sm font-medium text-white">Visitantes Tráfego</h3>
<span className="text-sm font-mono text-[#888888]">15,420</span>
</div>
</div>
</div>

<div className="ml-14 -mt-2 mb-2">
<div className="text-[10px] bg-[#FF3333]/10 border border-[#FF3333]/20 text-[#FF3333] inline-block px-2 py-1 rounded-sm mb-1">
                        12% Conv. (Meta: 15%)
                    </div>
<div className="text-[10px] text-[#FF3333] flex gap-1 items-center">
<iconify-icon icon="solar:gift-linear"></iconify-icon>
                        AÇÃO: Melhorar Isca Digital
                    </div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-sm bg-[#141414] border border-[#262626] flex items-center justify-center shrink-0 z-10">
<iconify-icon className="text-[#00D4FF]" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<h3 className="text-sm font-medium text-white">Leads Capturados</h3>
<span className="text-sm font-mono text-[#888888]">1,850</span>
</div>
<div className="w-full bg-[#1A1A1A] h-1.5 mt-2">
<div className="bg-[#00D4FF] h-full w-[12%]"></div>
</div>
</div>
</div>

<div className="ml-14 -mt-2 mb-2 pt-2">
<div className="text-[10px] text-[#00FF88] flex gap-1 items-center mb-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                        42% Conv. (Saudável)
                    </div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-sm bg-[#141414] border border-[#262626] flex items-center justify-center shrink-0 z-10">
<iconify-icon className="text-[#FFD700]" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<h3 className="text-sm font-medium text-white">Assistiram VSL</h3>
<span className="text-sm font-mono text-[#888888]">777</span>
</div>
<div className="w-full bg-[#1A1A1A] h-1.5 mt-2">
<div className="bg-[#FFD700] h-full w-[42%]"></div>
</div>
</div>
</div>

<div className="ml-14 -mt-2 mb-2 pt-2">
<div className="text-[10px] bg-[#FF3333]/10 border border-[#FF3333]/20 text-[#FF3333] inline-block px-2 py-1 rounded-sm mb-1">
                        2.5% Conv. (Meta: 3%)
                    </div>
<div className="text-[10px] text-[#FF3333] flex gap-1 items-center">
<iconify-icon icon="solar:microphone-2-linear"></iconify-icon>
                        AÇÃO: Revisar Pitch de Venda
                    </div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-sm bg-[#141414] border border-[#00FF88] flex items-center justify-center shrink-0 z-10 shadow-[0_0_10px_rgba(0,255,136,0.2)]">
<iconify-icon className="text-[#00FF88]" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<h3 className="text-sm font-medium text-white">Vendas Confirmadas</h3>
<span className="text-sm font-mono text-[#00FF88] font-bold">19</span>
</div>
<div className="w-full bg-[#1A1A1A] h-1.5 mt-2">
<div className="bg-[#00FF88] h-full w-[2.5%]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="col-span-1 bg-[#0D0D0D] border border-[#262626] rounded-sm p-6 flex flex-col gap-6">
<div className="flex justify-between items-center">
<h2 className="text-xs uppercase tracking-[0.15em] text-[#888888]">Social Pulse</h2>
<iconify-icon className="text-[#666666]" icon="solar:smartphone-linear"></iconify-icon>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white" icon="solar:camera-linear"></iconify-icon>
<span className="text-sm font-semibold">Instagram</span>
</div>
<div className="flex justify-between items-center border-b border-[#262626] pb-2">
<span className="text-[10px] uppercase text-[#666666]">Engajamento</span>
<span className="text-sm font-mono text-[#FF3333]">1.2%</span>
</div>
<div className="text-[10px] text-[#FF3333] bg-[#FF3333]/5 p-2 rounded-sm border-l-2 border-[#FF3333]">
                    📱 CONTEÚDO: Aumentar frequência de stories
                </div>
<div className="flex justify-between items-center border-b border-[#262626] pb-2 pt-2">
<span className="text-[10px] uppercase text-[#666666]">Novos Seg.</span>
<span className="text-sm font-mono text-[#00FF88]">+342</span>
</div>
</div>

<div className="space-y-4 pt-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white" icon="solar:case-round-linear"></iconify-icon>
<span className="text-sm font-semibold">LinkedIn</span>
</div>
<div className="flex justify-between items-center border-b border-[#262626] pb-2">
<span className="text-[10px] uppercase text-[#666666]">Alcance</span>
<span className="text-sm font-mono text-white">12.4k</span>
</div>
</div>
</section>

<section className="col-span-1 bg-[#0D0D0D] border border-[#262626] rounded-sm p-6 flex flex-col h-full">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xs uppercase tracking-[0.15em] text-[#FF5C00] flex items-center gap-2">
<iconify-icon icon="solar:bell-bing-linear"></iconify-icon>
                    Action Feed
                </h2>
<span className="w-2 h-2 bg-[#FF5C00] rounded-full animate-pulse"></span>
</div>
<div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2">

<div className="bg-[#141414] border-l-2 border-[#FF3333] p-3 rounded-r-sm hover:bg-[#1A1A1A] transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<span className="text-[9px] uppercase tracking-wider text-[#FF3333] font-bold">Crítico</span>
<span className="text-[9px] text-[#666666]">Agora</span>
</div>
<div className="text-xs text-white font-medium mb-2">ROAS em queda (1.8x)</div>
<div className="text-[10px] text-[#888888] leading-relaxed group-hover:text-white transition-colors">
                        Pausar campanhas ID #402 e #491 imediatamente. Fricção detectada no checkout.
                    </div>
<button className="mt-2 text-[9px] uppercase tracking-wider text-[#FF3333] border border-[#FF3333]/30 px-2 py-1 rounded-sm hover:bg-[#FF3333] hover:text-white transition-all">
                        Executar Pausa
                    </button>
</div>

<div className="bg-[#141414] border-l-2 border-[#FFD700] p-3 rounded-r-sm hover:bg-[#1A1A1A] transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-[9px] uppercase tracking-wider text-[#FFD700] font-bold">Alta Prioridade</span>
<span className="text-[9px] text-[#666666]">2h atrás</span>
</div>
<div className="text-xs text-white font-medium mb-1">Pipeline B2B Baixo</div>
<div className="text-[10px] text-[#888888] leading-relaxed">
                        Agendar 5 reuniões de prospecção até Sexta-feira. Lista de leads frios disponível.
                    </div>
</div>

<div className="bg-[#141414] border-l-2 border-[#00D4FF] p-3 rounded-r-sm hover:bg-[#1A1A1A] transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-[9px] uppercase tracking-wider text-[#00D4FF] font-bold">Sugestão</span>
<span className="text-[9px] text-[#666666]">5h atrás</span>
</div>
<div className="text-xs text-white font-medium mb-1">Oportunidade Reels</div>
<div className="text-[10px] text-[#888888] leading-relaxed">
                        Vídeo sobre "Automação WhatsApp" com tendência de alta. Gravar hoje.
                    </div>
</div>
</div>
</section>
</main>

<footer className="mt-auto border-t border-[#262626] pt-6 flex flex-col md:flex-row justify-between items-center text-[#444444] text-[10px] uppercase tracking-widest gap-4">
<div>
            Fluxo Automações © 2024 - Sistema Aura.Build
        </div>
<div className="flex gap-6">
<div className="flex items-center gap-2">
<span>Refresh Rate:</span>
<span className="text-[#888888]">REAL-TIME</span>
</div>
<div className="flex items-center gap-2">
<span>Database:</span>
<span className="text-[#00FF88]">CONNECTED</span>
</div>
</div>
</footer>

    </>
  );
}
