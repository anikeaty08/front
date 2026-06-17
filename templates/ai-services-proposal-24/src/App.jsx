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
      


<main className="print-container w-full max-w-3xl bg-white rounded-xl border border-gray-200 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.06)] p-8 md:p-12 relative overflow-hidden">

<div className="no-print absolute top-0 inset-x-0 h-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent opacity-70"></div>

<header className="flex flex-col md:flex-row justify-between items-start mb-12 relative z-10 gap-8 md:gap-0">
<div>

<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-gray-200">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">XLINK</span>
</div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Proposta de Implementação</h1>
<p className="text-sm text-gray-400 mt-1 font-light">Soluções de IA Generativa &amp; Automação</p>
</div>
<div className="flex flex-col items-start md:items-end">
<div className="text-right mb-4">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1 block">Preparado para</span>

<h2 className="text-lg font-semibold text-gray-900 tracking-tight">Fernanda</h2>
</div>
<div className="flex gap-6 text-right">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Data</span>
<span className="text-xs text-gray-600 font-medium">24 Out, 2024</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Válido até</span>

<span className="text-xs text-gray-600 font-medium">28 Fev</span>
</div>
</div>
</div>
</header>

<div className="mb-10">
<h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:object-scan-linear"></iconify-icon>
                Resumo Executivo
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-2xl border-l-2 border-gray-100 pl-4">
                Implementação estratégica de agentes de Inteligência Artificial e estruturação de CRM para potencializar a aquisição e retenção de clientes. O projeto visa automatizar o tráfego pago e centralizar a comunicação multicanal.
            </p>
</div>

<div className="mb-10 page-break">
<div className="flex justify-between items-end mb-4">
<h3 className="text-sm font-medium text-gray-900">Escopo dos Serviços</h3>
<span className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full font-medium">Pacote Full Stack</span>
</div>
<div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">

<div className="bg-gray-50/80 border-b border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h4 className="text-base font-semibold text-gray-900 tracking-tight">Ecossistema de IA &amp; Vendas</h4>
<p className="text-xs text-gray-500 font-light mt-1">Desenvolvimento, configuração e implementação.</p>
</div>
<div className="text-left sm:text-right">
<div className="text-lg font-semibold text-gray-900 tracking-tight">R$ 25.000,00</div>
<div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Investimento Único</div>
</div>
</div>

<div className="p-6">
<ul className="grid grid-cols-1 gap-6">

<li className="flex gap-4 items-start group">
<div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-100 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-gray-900">Agente de IA para Tráfego Pago</h5>
<p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">
                                    Desenvolvimento de agente autônomo para otimização de campanhas, análise de dados em tempo real e ajustes de bid/budget para maximizar ROAS.
                                </p>
</div>
</li>


<li className="flex gap-4 items-start group">
<div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 border border-orange-100 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-gray-900">Organização de Manychat</h5>
<p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">
                                    Estruturação completa de fluxos de conversação, tags, automações de direct e integração com funil de vendas.
                                </p>
</div>
</li>

<li className="flex gap-4 items-start group">
<div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-gray-900">CRM de Mensagens Omnichannel</h5>
<p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">
                                    Centralização de Inbox (Instagram, WhatsApp e Facebook) com pipelines de vendas personalizados e rastreamento de histórico do cliente.
                                </p>
</div>
</li>
</ul>
</div>

<div className="bg-gray-50 border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
<div className="flex items-center gap-2 text-xs text-gray-500 font-light">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon>

                        Prazo estimado: 15 dias
                    </div>
<div className="flex items-center gap-2 text-xs text-gray-500 font-light">
<iconify-icon className="text-gray-400" icon="solar:shield-check-linear"></iconify-icon>
                        Garantia de 30 dias pós-entrega
                    </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-8 border-t border-gray-100">

<div>
<h5 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    Condições de Pagamento
                </h5>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 border border-gray-100 rounded-lg bg-gray-50/50">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700 shadow-sm">1</div>
<div className="flex-1">
<p className="text-xs font-medium text-gray-900">Setup Inicial (50%)</p>
<p className="text-[10px] text-gray-400 font-light">Pagamento para início imediato do desenvolvimento.</p>
</div>
<span className="text-xs font-semibold text-gray-900">R$ 12.500</span>
</div>
<div className="flex items-center gap-4 p-3 border border-gray-100 rounded-lg bg-gray-50/50">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700 shadow-sm">2</div>
<div className="flex-1">
<p className="text-xs font-medium text-gray-900">Entrega Final (50%)</p>
<p className="text-[10px] text-gray-400 font-light">Após implementação e testes das soluções.</p>
</div>
<span className="text-xs font-semibold text-gray-900">R$ 12.500</span>
</div>

<div className="mt-4 flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded-md border border-gray-100">
<iconify-icon className="text-gray-400" icon="solar:card-linear"></iconify-icon>
<span className="font-medium">Disponível parcelamento em até 12x no cartão.</span>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="bg-gray-900 rounded-xl p-6 text-white relative overflow-hidden shadow-xl">
<div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 bg-gray-800 rounded-full blur-2xl opacity-50"></div>
<div className="relative z-10">
<span className="text-xs text-gray-400 font-medium uppercase tracking-widest">Valor Total do Projeto</span>
<div className="flex items-baseline gap-1 mt-2 mb-4">
<span className="text-3xl font-semibold tracking-tight">R$ 25.000</span>
<span className="text-sm text-gray-400">,00</span>
</div>
<div className="h-px bg-gray-800 my-4"></div>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-400">Inclui impostos (NF-e)</span>

</div>
</div>
</div>
</div>
</div>

<footer className="mt-16 text-center">
<p className="text-xs text-gray-400 font-light mb-2">Este documento é confidencial e exclusivo para Fernanda.</p>

</footer>
</main>

    </>
  );
}
