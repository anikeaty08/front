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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-[#003366]">C+</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#solucao">Solução</a>
<a className="hover:text-gray-900 transition-colors" href="#features">Recursos</a>
<a className="hover:text-gray-900 transition-colors" href="#pricing">Preço</a>
</div>
<div>
<a className="bg-[#003366] text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors" href="#pricing">Entrar</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 px-4 overflow-hidden hero-pattern">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAFAFA] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#003366] leading-[1.1]">
                Centralize seu atendimento e venda no WhatsApp, Instagram e Telegram — tudo em um painel
            </h1>
<p className="mt-6 text-base md:text-lg text-gray-500 max-w-2xl font-normal leading-relaxed">
                IA que vende 24/7 + e-commerce integrado + CRM organizado = mais vendas, menos custo.
            </p>
<a className="mt-10 group relative inline-flex items-center justify-center gap-2 bg-[#00CC00] text-white text-base font-semibold px-8 py-4 rounded-full shadow-[0_0_40px_-10px_#00CC00] hover:scale-[1.02] transition-all duration-300" href="#pricing">
                Testar Grátis
                <span className="text-xs font-normal opacity-80">(sem cartão)</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>

<div className="mt-20 w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] bg-white rounded-2xl border border-gray-200/60 shadow-2xl shadow-gray-200/50 flex overflow-hidden relative">

<div className="hidden md:flex flex-col w-64 border-r border-gray-100 bg-gray-50/50 p-4 gap-4">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded bg-[#003366]/10 flex items-center justify-center"><iconify-icon className="text-[#003366]" icon="solar:user-rounded-linear"></iconify-icon></div>
<div className="h-4 w-24 bg-gray-200 rounded"></div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-gray-100 shadow-sm"><iconify-icon className="text-gray-400" icon="solar:chat-round-dots-linear"></iconify-icon><div className="h-3 w-16 bg-gray-200 rounded"></div></div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white"><iconify-icon className="text-gray-400" icon="solar:cart-large-linear"></iconify-icon><div className="h-3 w-20 bg-gray-200 rounded"></div></div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white"><iconify-icon className="text-gray-400" icon="solar:chart-2-linear"></iconify-icon><div className="h-3 w-14 bg-gray-200 rounded"></div></div>
</div>
</div>

<div className="flex-1 flex flex-col bg-white">
<div className="h-14 border-b border-gray-100 flex items-center justify-between px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#00CC00]"></div>
<div className="h-4 w-32 bg-gray-200 rounded"></div>
</div>
<div className="flex gap-2">
<iconify-icon className="text-gray-400" icon="solar:phone-linear"></iconify-icon>
<iconify-icon className="text-gray-400" icon="solar:menu-dots-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 p-6 space-y-6 overflow-hidden relative">

<div className="flex justify-start">
<div className="max-w-[70%] bg-gray-100 text-gray-500 rounded-2xl rounded-tl-sm p-4 text-sm"><div className="h-3 w-48 bg-gray-300 rounded mb-2"></div><div className="h-3 w-32 bg-gray-300 rounded"></div></div>
</div>
<div className="flex justify-end">
<div className="max-w-[70%] bg-[#003366] text-white rounded-2xl rounded-tr-sm p-4 text-sm"><div className="h-3 w-40 bg-white/30 rounded mb-2"></div><div className="h-3 w-24 bg-white/30 rounded"></div></div>
</div>
<div className="flex justify-start">
<div className="max-w-[70%] bg-gray-100 rounded-2xl rounded-tl-sm p-4 text-sm flex items-center gap-3">
<iconify-icon className="text-[#00CC00] text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<div><div className="h-3 w-56 bg-gray-300 rounded mb-2"></div><div className="h-3 w-20 bg-gray-300 rounded"></div></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
</div>
</div>

<div className="hidden lg:flex flex-col w-72 border-l border-gray-100 bg-white p-6">
<div className="h-4 w-24 bg-gray-200 rounded mb-6"></div>
<div className="space-y-4">
<div className="p-4 border border-gray-100 rounded-xl bg-gray-50/50">
<div className="flex justify-between items-center mb-3">
<div className="h-3 w-16 bg-gray-200 rounded"></div>
<div className="h-5 w-12 bg-[#00CC00]/10 rounded flex items-center justify-center"><div className="h-2 w-6 bg-[#00CC00] rounded"></div></div>
</div>
<div className="h-6 w-full bg-gray-200 rounded mb-2"></div>
<div className="h-3 w-2/3 bg-gray-200 rounded"></div>
</div>
<div className="p-4 border border-gray-100 rounded-xl bg-gray-50/50">
<div className="h-3 w-20 bg-gray-200 rounded mb-3"></div>
<div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
<div className="h-2 w-4/5 bg-gray-200 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-gray-200 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white border-y border-gray-100" id="solucao">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="space-y-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#003366]">Você está perdendo vendas por isso</h2>
<div className="flex gap-4 p-6 bg-red-50/50 rounded-2xl border border-red-100/50">
<div className="flex gap-2">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm relative">
<iconify-icon className="text-gray-400" icon="solar:chat-round-linear" width="24"></iconify-icon>
<div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white"><iconify-icon className="text-white" icon="solar:close-linear" width="12"></iconify-icon></div>
</div>
<div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm relative">
<iconify-icon className="text-gray-400" icon="solar:camera-linear" width="24"></iconify-icon>
<div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white"><iconify-icon className="text-white" icon="solar:close-linear" width="12"></iconify-icon></div>
</div>
<div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm relative">
<iconify-icon className="text-gray-400" icon="solar:letter-linear" width="24"></iconify-icon>
<div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white"><iconify-icon className="text-white" icon="solar:close-linear" width="12"></iconify-icon></div>
</div>
</div>
</div>
<ul className="space-y-5">
<li className="flex items-center gap-4 text-base text-gray-600">
<iconify-icon className="text-red-400 shrink-0" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span><strong className="font-medium text-gray-900">Atendimento fragmentado</strong> → mensagens perdidas</span>
</li>
<li className="flex items-center gap-4 text-base text-gray-600">
<iconify-icon className="text-red-400 shrink-0" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span><strong className="font-medium text-gray-900">Vendas manuais</strong> → conversão baixa</span>
</li>
<li className="flex items-center gap-4 text-base text-gray-600">
<iconify-icon className="text-red-400 shrink-0" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span><strong className="font-medium text-gray-900">Leads desorganizados</strong> → perdidos</span>
</li>
</ul>
</div>

<div className="space-y-8 relative">
<div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#003366]">C-Plus Chat resolve tudo</h2>
<div className="p-6 bg-[#00CC00]/5 rounded-2xl border border-[#00CC00]/20">
<div className="flex items-center justify-center gap-4 w-full max-w-[200px]">
<div className="w-full h-12 rounded-xl bg-white border border-[#00CC00]/30 shadow-sm flex items-center justify-center gap-2 relative">
<span className="text-sm font-semibold tracking-tighter text-[#003366]">C+</span>
<div className="absolute -top-2 -right-2 w-5 h-5 bg-[#00CC00] rounded-full flex items-center justify-center border-2 border-white"><iconify-icon className="text-white" icon="solar:check-linear" width="12"></iconify-icon></div>
</div>
</div>
</div>
<ul className="space-y-5">
<li className="flex items-center gap-4 text-base text-gray-600">
<iconify-icon className="text-[#00CC00] shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span><strong className="font-medium text-gray-900">Um painel para tudo</strong> → nada se perde</span>
</li>
<li className="flex items-center gap-4 text-base text-gray-600">
<iconify-icon className="text-[#00CC00] shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span><strong className="font-medium text-gray-900">IA que vende automaticamente</strong> → 35-50% mais conversão</span>
</li>
<li className="flex items-center gap-4 text-base text-gray-600">
<iconify-icon className="text-[#00CC00] shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span><strong className="font-medium text-gray-900">CRM integrado</strong> → leads organizados</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-4" id="features">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#003366] mb-16 text-center">Tudo que você precisa</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#003366]/5 transition-colors">
<iconify-icon className="text-gray-700" icon="solar:cart-large-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">E-commerce Integrado</h3>
<p className="text-sm text-gray-500 leading-relaxed">Cliente compra direto no WhatsApp, sem sair do chat.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#00CC00]/10 border border-[#00CC00]/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-[#00CC00]" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">IA que Vende</h3>
<p className="text-sm text-gray-500 leading-relaxed">Recomenda produtos 24/7, manipula carrinho automaticamente.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#003366]/5 transition-colors">
<iconify-icon className="text-gray-700" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Múltiplos Canais</h3>
<p className="text-sm text-gray-500 leading-relaxed">WhatsApp + Instagram + Telegram + Messenger + Site em 1 painel.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#003366]/5 transition-colors">
<iconify-icon className="text-gray-700" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">CRM Kanban</h3>
<p className="text-sm text-gray-500 leading-relaxed">Organize leads em pipeline visual, arraste para fechar deals.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#003366]/5 transition-colors">
<iconify-icon className="text-gray-700" icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Automações</h3>
<p className="text-sm text-gray-500 leading-relaxed">Fluxos personalizados, respostas automáticas, APIs abertas.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#003366]/5 transition-colors">
<iconify-icon className="text-gray-700" icon="solar:microphone-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Voice Studio</h3>
<p className="text-sm text-gray-500 leading-relaxed">Clone sua voz, crie respostas em áudio personalizadas.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white border-y border-gray-100">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#003366] mb-16 text-center">Confiam em nós</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="flex flex-col p-8 rounded-2xl bg-[#FAFAFA] border border-gray-100">
<p className="text-base text-gray-700 mb-8 flex-1 italic">"Aumentamos vendas em 40% nos primeiros 2 meses. A IA atendendo de madrugada mudou nosso jogo."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-500" icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900">João Silva</h4>
<p className="text-xs text-gray-500">Gerente de Vendas, TechStore</p>
</div>
<iconify-icon className="ml-auto text-gray-300" icon="solar:shop-linear" width="20"></iconify-icon>
</div>
</div>

<div className="flex flex-col p-8 rounded-2xl bg-[#FAFAFA] border border-gray-100">
<p className="text-base text-gray-700 mb-8 flex-1 italic">"Ter WhatsApp e Insta no mesmo painel economiza umas 3 horas do meu time todo dia."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-500" icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900">Marina Costa</h4>
<p className="text-xs text-gray-500">Sócia, Fashion Rio</p>
</div>
<iconify-icon className="ml-auto text-gray-300" icon="solar:hanger-linear" width="20"></iconify-icon>
</div>
</div>

<div className="flex flex-col p-8 rounded-2xl bg-[#FAFAFA] border border-gray-100">
<p className="text-base text-gray-700 mb-8 flex-1 italic">"O CRM Kanban direto no chat me fez parar de perder contatos. Simples e direto."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-500" icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900">Pedro Alves</h4>
<p className="text-xs text-gray-500">Corretor Imobiliário</p>
</div>
<iconify-icon className="ml-auto text-gray-300" icon="solar:home-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4" id="pricing">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#003366] mb-4">Escolha seu plano</h2>
<p className="text-sm text-gray-500">Sem contrato | Sem taxa de setup | Cancela quando quiser</p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">

<div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm mt-0 md:mt-4">
<h3 className="text-lg font-medium text-gray-600 mb-2">Starter</h3>
<div className="mb-6">
<span className="text-sm text-gray-500">R$</span>
<span className="text-3xl font-semibold tracking-tighter text-gray-900">199</span>
<span className="text-sm text-gray-500">/mês</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> 1 agente</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> Múltiplos canais</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> IA básica</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> E-commerce</li>
</ul>
<button className="w-full py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Selecionar Starter</button>
</div>

<div className="p-8 bg-white rounded-3xl border-2 border-[#00CC00] shadow-lg shadow-[#00CC00]/5 relative z-10 scale-100 md:scale-105">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00CC00] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:star-linear" width="12"></iconify-icon> Destaque
                    </div>
<h3 className="text-lg font-medium text-[#003366] mb-2">Professional</h3>
<div className="mb-6">
<span className="text-sm text-gray-500">R$</span>
<span className="text-4xl font-semibold tracking-tighter text-gray-900">499</span>
<span className="text-sm text-gray-500">/mês</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> <strong className="font-medium text-gray-900">5 agentes</strong></li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> IA completa</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> Voice Studio</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> Automações avançadas</li>
</ul>
<button className="w-full py-3 rounded-xl bg-[#00CC00] text-white text-sm font-semibold hover:bg-[#00b300] transition-colors shadow-md shadow-[#00CC00]/20">Comece o Teste Grátis</button>
</div>

<div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm mt-0 md:mt-4">
<h3 className="text-lg font-medium text-gray-600 mb-2">Enterprise</h3>
<div className="mb-6">
<span className="text-2xl font-semibold tracking-tight text-gray-900">Sob medida</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> Agentes ilimitados</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> Suporte 24/7</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00CC00]" icon="solar:check-circle-linear"></iconify-icon> SLA garantido</li>
</ul>
<button className="w-full py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mt-auto">Falar com vendas</button>
</div>
</div>

<div className="mt-24 max-w-xl mx-auto text-center">
<p className="text-sm text-gray-500 mb-4">Pronto para centralizar seu atendimento?</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003366] focus:ring-1 focus:ring-[#003366] text-sm bg-white shadow-sm placeholder-gray-400" placeholder="Seu melhor e-mail" required="" type="email"/>
<button className="bg-[#003366] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-900 transition-colors whitespace-nowrap" type="submit">Criar conta grátis</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-gray-200/60 bg-white py-8 px-4">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-[#003366]">C+</span>
<span className="text-xs text-gray-400">© 2024 C-Plus Chat.</span>
</div>
<div className="flex items-center gap-6 text-xs text-gray-500">
<a className="hover:text-gray-900" href="#">Termos</a>
<a className="hover:text-gray-900" href="#">Privacidade</a>
<a className="hover:text-gray-900" href="#">Contato</a>
</div>
</div>
</footer>

    </>
  );
}
