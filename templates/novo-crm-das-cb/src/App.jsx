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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white text-xs font-semibold tracking-tighter">
                    C
                </div>
<span className="text-sm font-medium text-zinc-900 tracking-tight">CRM de Conversão</span>
<span className="bg-zinc-100 text-zinc-500 text-[10px] px-2 py-0.5 rounded-full border border-zinc-200 uppercase tracking-wider font-medium">Interno</span>
</div>
<a className="text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">
                Login via SSO
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-200/40 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 items-center">

<div className="lg:col-span-3 flex flex-col gap-6 fade-up">
<div className="inline-flex items-center gap-2 text-zinc-500 border border-zinc-200 bg-white/50 rounded-full px-3 py-1 w-fit">
<iconify-icon icon="solar:chart-2-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Dados reais em tempo real</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-zinc-900 tracking-tight leading-[1.1]">
                    Converta cadastros em <span className="text-zinc-400">metade do tempo.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed max-w-xl">
                    Elimine o caos das planilhas. Um sistema inteligente que traduz erros técnicos em ações humanas e prioriza quem está pronto para comprar.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-zinc-900/10 flex items-center justify-center gap-2 group">
                        Acessar Sistema
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-200 px-8 py-3.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        Ver Demo (2min)
                    </button>
</div>
</div>

<div className="lg:col-span-2 fade-up delay-200 relative">

<div className="relative z-10 bg-white rounded-xl shadow-2xl border border-zinc-200 overflow-hidden transform rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">

<div className="h-10 border-b border-zinc-100 flex items-center px-4 gap-2 bg-zinc-50/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
</div>
<div className="ml-auto w-24 h-2 bg-zinc-200 rounded-full"></div>
</div>

<div className="p-4 grid gap-3 bg-zinc-50/30">

<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Atenção Prioritária</span>
<span className="text-[10px] bg-red-100 text-red-700 px-1.5 rounded font-medium">3</span>
</div>

<div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200 border-l-4 border-l-red-500 group cursor-default hover:border-zinc-300 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-600">LP</div>
<span className="text-[10px] font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 5d parado
                                </span>
</div>
<div className="h-3 w-3/4 bg-zinc-900 rounded-sm mb-2"></div> 
<div className="h-2 w-1/2 bg-zinc-200 rounded-sm mb-4"></div> 

<div className="flex gap-2">
<div className="flex-1 bg-green-50 border border-green-100 rounded py-1.5 flex items-center justify-center gap-1 text-green-700 cursor-pointer hover:bg-green-100 transition-colors">
<iconify-icon icon="solar:brand-whatsapp-linear" width="14"></iconify-icon>
<span className="text-[10px] font-medium">Chamar</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200 border-l-4 border-l-orange-400 opacity-60">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-600">MR</div>
</div>
<div className="h-3 w-2/3 bg-zinc-400 rounded-sm mb-2"></div>
<div className="h-2 w-1/2 bg-zinc-200 rounded-sm"></div>
</div>
</div>
</div>

<div className="absolute -left-8 top-1/2 bg-zinc-900 text-white text-xs py-2 px-3 rounded-lg shadow-xl z-20 flex items-center gap-2">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear"></iconify-icon>
                    Problema identificado
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-8">
                        A realidade atual: <br/>
<span className="text-zinc-400">Gerenciando no escuro.</span>
</h2>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<div className="mt-1 bg-red-50 text-red-600 p-2 rounded-lg">
<iconify-icon icon="solar:code-file-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Códigos técnicos indecifráveis</h3>
<p className="text-sm text-zinc-500">Substatus como "Err_504_Doc" que não dizem qual é a ação necessária.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 bg-red-50 text-red-600 p-2 rounded-lg">
<iconify-icon icon="solar:sort-from-bottom-to-top-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Sem priorização real</h3>
<p className="text-sm text-zinc-500">Quem chegou agora recebe a mesma atenção de quem está travado há 10 dias.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 bg-red-50 text-red-600 p-2 rounded-lg">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Perda de histórico</h3>
<p className="text-sm text-zinc-500">Múltiplas planilhas desconectadas fazem o prospect se perder no limbo.</p>
</div>
</li>
</ul>
</div>

<div className="order-1 md:order-2 bg-zinc-50 rounded-2xl p-8 border border-zinc-100 flex flex-col justify-center h-full text-center md:text-left">
<iconify-icon className="text-zinc-400 mb-6 mx-auto md:mx-0" icon="solar:danger-triangle-linear" width="32"></iconify-icon>
<div className="text-6xl font-medium text-zinc-900 tracking-tighter mb-2">15 min</div>
<p className="text-zinc-500 text-sm mb-8">Tempo médio perdido por cadastro apenas tentando diagnosticar o problema.</p>
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm relative">
<div className="absolute -top-2 left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-zinc-200"></div>
<div className="absolute -top-[7px] left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white z-10"></div>
<p className="text-xs text-zinc-600 italic">"Eu passo mais tempo decifrando planilha do que falando com o cliente."</p>
<div className="mt-2 text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">– Feedback de Líder GV</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight">De passivo para ativo</h2>
<p className="text-zinc-500 mt-2">A diferença visual entre gerenciar dados e gerenciar conversões.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="relative group">
<div className="absolute -top-3 left-4 bg-zinc-200 text-zinc-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Antes</div>
<div className="bg-zinc-100 rounded-xl p-6 border border-zinc-200 h-full opacity-70 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">

<div className="w-full bg-white border border-zinc-300 rounded shadow-sm overflow-hidden text-[10px] font-mono">
<div className="bg-zinc-200 p-2 border-b border-zinc-300 flex gap-4">
<span className="w-1/4 font-bold text-zinc-500">ID_USER</span>
<span className="w-1/4 font-bold text-zinc-500">SUB_STAT</span>
<span className="w-1/4 font-bold text-zinc-500">LAST_UP</span>
</div>
<div className="p-2 border-b border-zinc-100 flex gap-4 text-zinc-400">
<span className="w-1/4">#99281</span>
<span className="w-1/4">ERR_RG_V</span>
<span className="w-1/4">2023-10...</span>
</div>
<div className="p-2 border-b border-zinc-100 flex gap-4 text-zinc-400">
<span className="w-1/4">#99282</span>
<span className="w-1/4">WAIT_APR</span>
<span className="w-1/4">2023-10...</span>
</div>
<div className="p-2 flex gap-4 text-zinc-400">
<span className="w-1/4">#99283</span>
<span className="w-1/4">DOC_PEN</span>
<span className="w-1/4">2023-10...</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 rotate-12 opacity-80 border-2 border-red-500 p-2 rounded font-bold text-sm tracking-widest uppercase">
                        Difícil leitura
                    </div>
</div>
</div>

<div className="relative">
<div className="absolute -top-3 left-4 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-lg z-20">Agora</div>
<div className="bg-white rounded-xl p-6 border border-zinc-200 h-full shadow-2xl relative overflow-hidden">
<div className="grid gap-3">

<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Pendente: Verso do RG</div>
<div className="text-[10px] text-zinc-500">Joana Silva • Cadastro ontem</div>
</div>
</div>
<button className="bg-green-600 hover:bg-green-700 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-sm transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:brand-whatsapp-linear"></iconify-icon>
                                Resolver
                            </button>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm flex items-center justify-between opacity-50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Selfie ilegível</div>
<div className="text-[10px] text-zinc-500">Marcos P. • Cadastro hoje</div>
</div>
</div>
<button className="bg-zinc-100 text-zinc-400 text-xs font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5 cursor-not-allowed">
<iconify-icon icon="solar:brand-whatsapp-linear"></iconify-icon>
                                Resolver
                            </button>
</div>
</div>

<div className="absolute bottom-4 right-4 text-green-600 flex items-center gap-1 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        Ação clara e imediata
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">O motor de eficiência</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col h-full group hover:border-zinc-300 transition-all">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Tradução Humana</h3>
<p className="text-sm text-zinc-500 mb-6 flex-grow">O sistema lê o código do banco de dados e exibe exatamente o que o cliente precisa fazer.</p>

<div className="mt-auto bg-zinc-50 rounded border border-zinc-100 p-3">
<div className="flex items-center gap-2 mb-2 opacity-40">
<span className="text-[10px] font-mono text-zinc-400">code: 504_fail</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400 text-xs" icon="solar:arrow-down-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-900 bg-white px-2 py-0.5 rounded border border-zinc-200 shadow-sm">"Reenviar RG"</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col h-full group hover:border-zinc-300 transition-all">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon icon="solar:stopwatch-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Priorização por Urgência</h3>
<p className="text-sm text-zinc-500 mb-6 flex-grow">Os cards se organizam automaticamente baseados no tempo que o cliente está esperando.</p>

<div className="mt-auto flex gap-2">
<div className="bg-red-50 border border-red-100 text-red-700 px-2 py-1 rounded text-[10px] font-medium flex items-center gap-1 w-fit">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                            7 dias parado
                        </div>
<div className="bg-zinc-50 border border-zinc-100 text-zinc-400 px-2 py-1 rounded text-[10px] w-fit">
                            2h parado
                        </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col h-full group hover:border-zinc-300 transition-all">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Ação em 1 Clique</h3>
<p className="text-sm text-zinc-500 mb-6 flex-grow">Scripts pré-prontos para WhatsApp baseados no erro específico do cliente.</p>

<div className="mt-auto bg-green-50 rounded border border-green-100 p-3 cursor-pointer hover:bg-green-100 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[10px] font-medium text-green-800">Enviar msg padrão</span>
<iconify-icon className="text-green-600 text-xs" icon="solar:plain-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row gap-16 items-center mb-24">
<div className="md:w-1/2">
<div className="inline-block px-2 py-1 bg-zinc-100 rounded text-[10px] font-semibold tracking-wider text-zinc-500 uppercase mb-4">Eficiência</div>
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-4">Menos tempo na tela, <br/>mais resultado no bolso.</h2>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">Reduzimos drasticamente o tempo cognitivo necessário para entender cada caso. O que levava 10 minutos de análise, agora leva segundos.</p>
<div className="flex items-center gap-4">
<div>
<div className="text-2xl font-semibold text-zinc-900">10min</div>
<div className="text-[10px] text-zinc-400 uppercase tracking-wide">Antes</div>
</div>
<iconify-icon className="text-zinc-300" icon="solar:arrow-right-linear"></iconify-icon>
<div>
<div className="text-2xl font-semibold text-zinc-900 text-green-600">&lt;1min</div>
<div className="text-[10px] text-zinc-400 uppercase tracking-wide">Agora</div>
</div>
</div>
</div>
<div className="md:w-1/2 bg-zinc-50 rounded-2xl p-8 border border-zinc-100 w-full">

<div className="space-y-4">
<div className="w-full">
<div className="flex justify-between text-xs mb-1 text-zinc-500">
<span>Processo Antigo</span>
<span>10m</span>
</div>
<div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full w-full bg-zinc-300"></div>
</div>
</div>
<div className="w-full">
<div className="flex justify-between text-xs mb-1 text-zinc-900 font-medium">
<span>Com CRM</span>
<span>45s</span>
</div>
<div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-[10%] bg-zinc-900"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-16 items-center">
<div className="md:w-1/2">
<div className="inline-block px-2 py-1 bg-zinc-100 rounded text-[10px] font-semibold tracking-wider text-zinc-500 uppercase mb-4">Retenção</div>
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-4">Estanque o vazamento do funil.</h2>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">Quando você atua no momento exato do erro, a chance de conversão dispara. Não deixe o lead esfriar por burocracia técnica.</p>
<div className="border-l-2 border-zinc-200 pl-4">
<div className="text-lg font-medium text-zinc-900">"30% mais contatos em 48h"</div>
<div className="text-xs text-zinc-500 mt-1">Média registrada nos testes beta.</div>
</div>
</div>
<div className="md:w-1/2 w-full flex justify-center">

<div className="relative w-64">
<div className="h-12 bg-zinc-100 border border-zinc-200 rounded-t-lg w-full mb-1 mx-auto flex items-center justify-center text-xs text-zinc-400">Leads</div>
<div className="h-12 bg-zinc-200 border border-zinc-300 w-[80%] mb-1 mx-auto flex items-center justify-center text-xs text-zinc-500">Cadastro</div>
<div className="h-12 bg-zinc-800 border border-zinc-900 w-[60%] rounded-b-lg mx-auto flex items-center justify-center text-xs text-white font-medium shadow-xl shadow-zinc-200">
                        Conversão (+30%)
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-100">
<div className="text-center md:text-left px-4">
<div className="text-4xl font-semibold text-zinc-900 tracking-tighter mb-1">160k</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Cadastros Gerenciados</div>
</div>
<div className="text-center md:text-left px-4">
<div className="text-4xl font-semibold text-zinc-900 tracking-tighter mb-1">2s</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Tempo de Carregamento</div>
</div>
<div className="text-center md:text-left px-4">
<div className="text-4xl font-semibold text-zinc-900 tracking-tighter mb-1">40+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Substatus Mapeados</div>
</div>
<div className="text-center md:text-left px-4">
<div className="text-4xl font-semibold text-zinc-900 tracking-tighter mb-1">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Rastreabilidade</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 relative overflow-hidden text-center">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 max-w-2xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Pronto para organizar a operação?</h2>
<div className="flex flex-col items-center gap-6">
<button className="w-full sm:w-auto bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-xl shadow-black/20 transform hover:-translate-y-1">
                    Solicitar Acesso ao Sistema
                </button>
<p className="text-xs text-zinc-500">Disponível exclusivamente para Líderes e GVs habilitados.</p>
</div>
</div>
</section>

<footer className="bg-zinc-50 py-12 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
<div className="w-5 h-5 bg-zinc-800 rounded flex items-center justify-center text-white text-[10px] font-bold">C</div>
<span className="text-xs font-semibold text-zinc-700 tracking-tight">CRM de Conversão</span>
</div>
<div className="text-[10px] text-zinc-400 text-center md:text-right">
<p>© 2026 Ferramenta Interna. Uso restrito.</p>
<p className="mt-1">Design System v2.1 • Linear Style</p>
</div>
</div>
</footer>

    </>
  );
}
