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



        // Init Icons
        lucide.createIcons();

        // Simple form handling (visual only)
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Você está na fila! 🚀';
            btn.classList.add('bg-green-500', 'text-white', 'hover:bg-green-600');
            btn.classList.remove('bg-white', 'text-neutral-950', 'hover:bg-neutral-200');
            
            setTimeout(() => {
                // Reset (simulated)
            }, 3000);
        });
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-neutral-950 font-bold text-xs">4</div>
<span>4Pay</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#docs">Docs</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-xs font-medium bg-white text-neutral-950 px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#waitlist">
                    Entrar na waitlist
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-neutral-800/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span>Waitlist aberta v1.0</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Pix para devs que não têm <br className="hidden md:block"/> paciência para docs ruins.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                API simples, documentação que faz sentido, e o primeiro gateway com integração nativa de IA. <span className="text-white font-normal">R$0,39 por transação.</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-6 py-3 bg-white text-neutral-950 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="#waitlist">
                    Entrar na waitlist <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md text-sm font-medium hover:border-neutral-700 transition-colors flex items-center justify-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="book"></i> Ver documentação
                </a>
</div>

<div className="max-w-3xl mx-auto bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl overflow-hidden text-left">
<div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02] gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
</div>
<div className="ml-4 text-xs text-neutral-500 font-mono">create-pix.ts</div>
</div>
<div className="p-6 overflow-x-auto no-scrollbar">
<pre className="font-mono text-xs md:text-sm leading-relaxed text-neutral-300"><code><span className="text-purple-400">import</span> { 4Pay } <span className="text-purple-400">from</span> <span className="text-green-400">'@4pay/sdk'</span>;

<span className="text-neutral-500">// Simples assim.</span>
<span className="text-purple-400">const</span> payment = <span className="text-purple-400">await</span> 4Pay.pix.create({
  amount: <span className="text-yellow-300">9900</span>, <span className="text-neutral-500">// R$ 99,00</span>
  description: <span className="text-green-400">'Assinatura Pro'</span>,
  expiresIn: <span className="text-green-400">'30m'</span>
});

console.<span className="text-blue-400">log</span>(payment.qrCode);</code></pre>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12 text-center">Você já passou por isso?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-lg bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors">
<i className="w-6 h-6 text-neutral-500 mb-4" data-lucide="file-warning"></i>
<h3 className="text-sm font-medium text-white mb-2">Docs de 2010</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Exemplos desatualizados, endpoints XML misturados com JSON, SDK que nunca compila.</p>
</div>

<div className="p-6 rounded-lg bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors">
<i className="w-6 h-6 text-neutral-500 mb-4" data-lucide="layout-dashboard"></i>
<h3 className="text-sm font-medium text-white mb-2">Dashboard jurássico</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Interface poluída. São necessários 47 cliques apenas para achar o ID de uma transação.</p>
</div>

<div className="p-6 rounded-lg bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors">
<i className="w-6 h-6 text-neutral-500 mb-4" data-lucide="trending-down"></i>
<h3 className="text-sm font-medium text-white mb-2">Taxas abusivas</h3>
<p className="text-sm text-neutral-500 leading-relaxed">0,99% parece pouco até você escalar e fazer as contas no final do mês. Sua margem agradece.</p>
</div>

<div className="p-6 rounded-lg bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors">
<i className="w-6 h-6 text-neutral-500 mb-4" data-lucide="globe"></i>
<h3 className="text-sm font-medium text-white mb-2">Stripe sem Pix</h3>
<p className="text-sm text-neutral-500 leading-relaxed">O melhor gateway do mundo infelizmente não processa o método mais usado no Brasil.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/20">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Um gateway feito por dev, pra dev.</h2>
<p className="text-lg text-neutral-400 font-light mb-8">
                    4Pay é o que acontece quando quem sofreu com Mercado Pago resolve fazer diferente. Documentação tratada como produto, dashboard que você não tem vergonha de abrir e tipos TypeScript reais.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                        SDK TypeScript com tipos estritos (Zero `any`)
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                        Webhooks com retry automático e logs claros
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                        Dashboard Dark Mode nativo
                    </li>
</ul>
</div>
<div className="lg:w-1/2 w-full">

<div className="bg-neutral-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden aspect-[4/3] relative">

<div className="absolute top-0 left-0 w-16 h-full border-r border-white/5 flex flex-col items-center py-4 gap-4">
<div className="w-6 h-6 rounded bg-neutral-800"></div>
<div className="w-6 h-6 rounded bg-neutral-800/50"></div>
<div className="w-6 h-6 rounded bg-neutral-800/50"></div>
<div className="w-6 h-6 rounded bg-neutral-800/50"></div>
</div>

<div className="ml-16 p-6">
<div className="h-8 w-32 bg-neutral-800/50 rounded mb-8"></div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="h-24 bg-neutral-900 border border-white/5 rounded p-3">
<div className="w-4 h-4 bg-green-500/20 rounded-full mb-2"></div>
<div className="w-16 h-3 bg-neutral-800 rounded mb-1"></div>
<div className="w-20 h-5 bg-neutral-700 rounded"></div>
</div>
<div className="h-24 bg-neutral-900 border border-white/5 rounded p-3">
<div className="w-4 h-4 bg-blue-500/20 rounded-full mb-2"></div>
<div className="w-16 h-3 bg-neutral-800 rounded mb-1"></div>
<div className="w-20 h-5 bg-neutral-700 rounded"></div>
</div>
<div className="h-24 bg-neutral-900 border border-white/5 rounded p-3">
<div className="w-4 h-4 bg-purple-500/20 rounded-full mb-2"></div>
<div className="w-16 h-3 bg-neutral-800 rounded mb-1"></div>
<div className="w-20 h-5 bg-neutral-700 rounded"></div>
</div>
</div>

<div className="space-y-3">
<div className="h-10 bg-neutral-900/50 rounded w-full border border-white/5"></div>
<div className="h-10 bg-neutral-900/50 rounded w-full border border-white/5"></div>
<div className="h-10 bg-neutral-900/50 rounded w-full border border-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Tudo que você precisa.</h2>
<p className="text-neutral-400">Nada que você não precisa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group">
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white mb-4 group-hover:bg-white/10 transition-colors">
<i className="w-5 h-5" data-lucide="terminal"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">API que faz sentido</h3>
<p className="text-sm text-neutral-500 leading-relaxed">REST intuitivo. Sem XML, sem SOAP, sem surpresas de 2005.</p>
</div>

<div>
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white mb-4">
<i className="w-5 h-5" data-lucide="code-2"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">SDK TypeScript</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Tipos completos, autocomplete que funciona. `npm install` e vai.</p>
</div>

<div>
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white mb-4">
<i className="w-5 h-5" data-lucide="book-open"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">Docs como produto</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Exemplos funcionais, playground para testar, busca eficiente.</p>
</div>

<div>
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white mb-4">
<i className="w-5 h-5" data-lucide="webhook"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">Webhooks confiáveis</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Retry automático, logs de entrega e payload limpo.</p>
</div>

<div>
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white mb-4">
<i className="w-5 h-5" data-lucide="layout"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">Dashboard moderno</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Clean, filtros úteis, extrato claro e Dark Mode nativo.</p>
</div>

<div className="relative overflow-hidden rounded-lg p-px bg-gradient-to-b from-purple-500/20 to-transparent">
<div className="absolute inset-0 bg-neutral-950 m-px rounded-lg"></div>
<div className="relative p-0 h-full">
<div className="w-10 h-10 rounded flex items-center justify-center text-purple-400 mb-4">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">MCP Nativo</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Primeiro gateway com servidor Model Context Protocol. A IA coda pra você.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 border-y border-white/5 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
<div className="lg:w-1/2">
<div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                    Exclusivo 4Pay
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Integre pagamento com um prompt.</h2>
<p className="text-lg text-neutral-400 mb-8 font-light">
                    4Pay é o primeiro gateway com servidor MCP nativo. Conecte no Cursor, Claude ou qualquer cliente MCP e integre Pix conversando com a IA.
                </p>
<a className="text-white text-sm border-b border-white/30 hover:border-white pb-0.5 transition-colors" href="#">Saiba mais sobre MCP</a>
</div>
<div className="lg:w-1/2 w-full">

<div className="bg-neutral-950 border border-white/10 rounded-lg p-6 max-w-lg mx-auto shadow-2xl">
<div className="space-y-6">

<div className="flex gap-4">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-xs text-neutral-400">Eu</div>
<div className="bg-neutral-900 px-4 py-2 rounded-lg rounded-tl-none border border-white/5 text-sm text-neutral-300">
                                Adiciona pix de R$99 no checkout do meu SaaS
                            </div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded bg-purple-600/20 flex items-center justify-center text-purple-400">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="flex-1 space-y-2">
<div className="text-xs text-neutral-500 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="wrench"></i> Usando 4Pay MCP...
                                </div>
<div className="bg-[#0f0f0f] border border-white/5 rounded p-3 font-mono text-xs text-green-400 overflow-x-auto no-scrollbar">
                                    // Gerando integração...<br/>
                                    await 4Pay.checkout.create({ price: 9900, type: 'pix' });
                                </div>
<div className="text-sm text-neutral-300">
                                    Pronto! O código foi gerado e inserido no seu arquivo <code>checkout.ts</code>.
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="pricing">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Um preço. Sem pegadinha.</h2>
<p className="text-neutral-400 mb-12">Simples como deve ser.</p>
<div className="bg-neutral-900/30 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full"></div>
<div className="flex flex-col items-center justify-center mb-8">
<div className="flex items-baseline gap-1 text-white">
<span className="text-2xl font-light text-neutral-400">R$</span>
<span className="text-6xl md:text-7xl font-semibold tracking-tighter">0,39</span>
</div>
<span className="text-neutral-500 mt-2">por transação aprovada</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-10">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Sem mensalidade
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Sem taxa de setup
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Sem mínimo mensal
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Sandbox grátis
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-300 col-span-full justify-center md:justify-start">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Suporte direto de Dev para Dev
                    </div>
</div>

<div className="w-full bg-neutral-950 rounded border border-white/5 p-4 text-sm">
<div className="flex justify-between border-b border-white/5 pb-2 mb-2 text-neutral-500 text-xs uppercase tracking-wider font-medium">
<span>Gateway</span>
<span>Taxa (R$100 Pix)</span>
</div>
<div className="flex justify-between py-2 text-neutral-400">
<span>Mercado Pago</span>
<span>R$ 0,99</span>
</div>
<div className="flex justify-between py-2 text-neutral-400">
<span>PagSeguro</span>
<span>R$ 0,99</span>
</div>
<div className="flex justify-between py-2 text-white font-medium bg-white/5 -mx-4 px-4">
<span>4Pay</span>
<span>R$ 0,39</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl font-medium tracking-tight text-white mb-12">Feito por quem entende</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex items-center gap-4 text-left p-4 bg-neutral-900/20 rounded-lg border border-transparent hover:border-white/5 transition-colors">
<div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center font-bold text-white">S</div>
<div>
<div className="text-white font-medium">Samuel</div>
<div className="text-xs text-neutral-500">Co-founder &amp; CTO</div>
<p className="text-sm text-neutral-400 mt-1">10 anos de XP, Tech YouTuber.</p>
</div>
</div>
<div className="flex items-center gap-4 text-left p-4 bg-neutral-900/20 rounded-lg border border-transparent hover:border-white/5 transition-colors">
<div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center font-bold text-white">G</div>
<div>
<div className="text-white font-medium">Goku</div>
<div className="text-xs text-neutral-500">Co-founder &amp; CEO</div>
<p className="text-sm text-neutral-400 mt-1">Ex-XP Pagamentos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-white mb-12">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group bg-neutral-900/20 border border-white/5 rounded-lg open:bg-neutral-900/40 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-neutral-200">
<span>Como funciona o 4Pay por baixo?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 mt-0 px-5 pb-5 text-sm leading-relaxed">
                    Usamos parceiros de infraestrutura bancária licenciados pelo Banco Central. Toda a parte regulatória é garantida por eles, então você só precisa se preocupar com o código.
                </div>
</details>
<details className="group bg-neutral-900/20 border border-white/5 rounded-lg open:bg-neutral-900/40 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-neutral-200">
<span>Preciso de CNPJ?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 mt-0 px-5 pb-5 text-sm leading-relaxed">
                    No início da fase beta, estamos aceitando CPF para facilitar a vida de indie hackers. O suporte completo para PJ (e emissão de nota fiscal automática) vem na v2.
                </div>
</details>
<details className="group bg-neutral-900/20 border border-white/5 rounded-lg open:bg-neutral-900/40 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-neutral-200">
<span>Quanto tempo pra receber o dinheiro?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 mt-0 px-5 pb-5 text-sm leading-relaxed">
                    O Pix é confirmado instantaneamente via webhook. O repasse para sua conta bancária acontece em D+1 (dia seguinte).
                </div>
</details>
<details className="group bg-neutral-900/20 border border-white/5 rounded-lg open:bg-neutral-900/40 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-neutral-200">
<span>O que é esse MCP?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 mt-0 px-5 pb-5 text-sm leading-relaxed">
                    MCP (Model Context Protocol) é um padrão aberto que permite que IAs (como Claude Desktop ou Cursor) se conectem a ferramentas externas. Nosso servidor MCP permite que você integre e gerencie pagamentos usando linguagem natural direto no seu editor.
                </div>
</details>
</div>
</section>

<section className="py-32 px-6 text-center border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900/50" id="waitlist">
<div className="max-w-xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Cansado de docs ruins?</h2>
<p className="text-neutral-400 mb-8">Entre na waitlist e seja um dos primeiros a testar o 4Pay. <br/>Sem spam, só código.</p>
<form className="space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-sm" id="email" placeholder="seu@email.com" required="" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="project">O que você está construindo?</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-sm resize-none" id="project" placeholder="O que você está construindo? (Opcional)" rows="2"></textarea>
</div>
<button className="w-full bg-white text-neutral-950 font-medium py-3 rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 text-sm" type="submit">
                    Entrar na waitlist
                </button>
</form>
<p className="mt-4 text-xs text-neutral-600">Junte-se a outros 100+ devs na fila.</p>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 text-sm text-neutral-500">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold text-[8px]">4</div>
<span className="text-neutral-300 font-medium">4Pay</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
<div className="text-xs">
                © 2026 4Pay. Todos os direitos reservados.
            </div>
</div>
</footer>


    </>
  );
}
