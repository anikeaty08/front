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



        lucide.createIcons();
    
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
      

<div className="absolute top-0 z-[-1] w-full flex justify-center opacity-30 pointer-events-none">
<div className="w-[800px] h-[400px] bg-zinc-600/20 blur-[120px] rounded-full"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-white" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight text-white">Kora</span>
</div>
<div className="flex items-center gap-6">
<a className="text-base text-zinc-400 hover:text-white transition-colors font-light" href="#">Entrar</a>
<a className="text-base bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-zinc-200 transition-colors" href="#planos">Começar agora</a>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-32 pb-8 md:pt-40 md:pb-12 px-6 text-center z-10">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-base text-zinc-300 mb-8 backdrop-blur-sm font-light">
<i className="w-4 h-4 text-zinc-400" data-lucide="sparkles" strokeWidth="1.5"></i>
                    Sistema financeiro inteligente
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-8 leading-tight">
                    Controle financeiro<br/>sem distrações.
                </h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light mb-4 leading-relaxed">
                    Um dashboard minimalista, disruptivo e poderoso para você tomar as melhores decisões. Monitore saldos, projete tendências e alcance suas metas com clareza absoluta.
                </p>
</div>
</section>

<div className="relative w-full flex flex-col items-center">

<section className="pt-4 pb-0 px-4 md:px-6 w-full max-w-[1400px] mx-auto z-20 relative">
<div className="rounded-2xl border border-white/10 bg-[#0e0e11] shadow-2xl overflow-hidden flex flex-col">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 shrink-0">
<div className="flex items-center gap-4">
<i className="w-5 h-5 text-zinc-400 cursor-pointer" data-lucide="menu" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight text-white">Kora</span>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-md border border-white/5 hover:bg-white/5 transition-colors text-zinc-400 hover:text-white">
<i className="w-4 h-4" data-lucide="sun" strokeWidth="1.5"></i>
</button>
<button className="p-2 rounded-md border border-white/5 hover:bg-white/5 transition-colors text-zinc-400 hover:text-white">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i>
</button>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-8 shrink-0 hidden md:flex bg-[#0e0e11]">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black shadow-sm cursor-pointer">
<i className="w-5 h-5" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-6 w-full items-center">
<i className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="arrow-up-circle" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="arrow-down-circle" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="refresh-cw" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="repeat" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="tag" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="pie-chart" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="target" strokeWidth="1.5"></i>
</div>
<div className="mt-auto flex flex-col gap-6 items-center">
<i className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="settings" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="log-out" strokeWidth="1.5"></i>
</div>
</aside>

<main className="flex-1 p-6 md:p-8 overflow-y-auto bg-[#131315]">

<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
<h2 className="text-3xl font-medium tracking-tight text-white">Dashboard</h2>
<div className="flex items-center gap-3">
<div className="flex items-center bg-[#1a1a1c] rounded-full p-1 border border-white/5">
<button className="px-5 py-2 rounded-full text-sm font-light text-zinc-400 hover:text-white transition-colors">Dia</button>
<button className="px-5 py-2 rounded-full text-sm font-light text-zinc-400 hover:text-white transition-colors">Semana</button>
<button className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium shadow-sm border border-white/5">Mês</button>
<button className="px-5 py-2 rounded-full text-sm font-light text-zinc-400 hover:text-white transition-colors">Ano</button>
</div>
<button className="p-2.5 rounded-full bg-[#1a1a1c] border border-white/5 text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-5">

<div className="bg-[#1a1a1c] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group">
<div className="flex justify-between items-start mb-6">
<span className="text-base text-zinc-300 font-light">Saldo Total</span>
<i className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors cursor-pointer" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-3">R$ 1.730,00</div>
<div className="flex items-start gap-1 text-sm text-[#22c55e] font-light">
<i className="w-4 h-4 mt-0.5 shrink-0" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<span>+100.0% em comparação ao<br/>período anterior</span>
</div>
</div>
</div>

<div className="bg-[#1a1a1c] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group">
<div className="flex justify-between items-start mb-6">
<span className="text-base text-zinc-300 font-light">Receitas</span>
<i className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors cursor-pointer" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-3">R$ 2.200,00</div>
<div className="flex items-start gap-1 text-sm text-[#22c55e] font-light">
<i className="w-4 h-4 mt-0.5 shrink-0" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<span>+100.0% em comparação ao<br/>período anterior</span>
</div>
</div>
</div>

<div className="bg-[#1a1a1c] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group">
<div className="flex justify-between items-start mb-6">
<span className="text-base text-zinc-300 font-light">Despesas</span>
<i className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors cursor-pointer" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-3">R$ 470,00</div>
<div className="flex items-start gap-1 text-sm text-[#22c55e] font-light">
<i className="w-4 h-4 mt-0.5 shrink-0" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<span>+100.0% em comparação ao<br/>período anterior</span>
</div>
</div>
</div>

<div className="bg-[#1a1a1c] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group">
<div className="flex justify-between items-start mb-6">
<span className="text-base text-zinc-300 font-light">Recorrência</span>
<i className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors cursor-pointer" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-3">R$ 0,00</div>
<div className="flex items-start gap-1 text-sm text-zinc-400 font-light">
<i className="w-4 h-4 mt-0.5 shrink-0" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>sem alteração em comparação ao<br/>período anterior</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-[1.3fr_1fr] gap-5">

<div className="bg-[#1a1a1c] border border-white/5 rounded-2xl p-6 flex flex-col">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10">
<h3 className="text-xl font-medium tracking-tight text-white">Tendências Financeiras</h3>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium">Saldo</button>
<button className="px-4 py-2 rounded-md bg-transparent border border-white/10 text-white text-sm font-light hover:bg-white/5 transition-colors">Receitas</button>
<button className="px-4 py-2 rounded-md bg-transparent border border-white/10 text-white text-sm font-light hover:bg-white/5 transition-colors">Despesas</button>
</div>
</div>
<div className="flex-1 relative min-h-[240px] w-full flex items-end">

<div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-sm text-zinc-500 pr-4 z-10 text-right w-14 font-light">
<span>1800</span>
<span>1350</span>
<span>900</span>
<span>450</span>
<span>0</span>
</div>

<div className="relative w-full h-full pl-14 pb-8">

<svg className="absolute inset-0 w-full h-full pl-14 pb-8 overflow-visible" preserveaspectratio="none" viewbox="0 0 500 200">

<path d="M 0 0 H 500 M 0 50 H 500 M 0 100 H 500 M 0 150 H 500" fill="none" stroke="#ffffff" stroke-dasharray="4 4" stroke-opacity="0.05"></path>
<path d="M 0 200 H 500" fill="none" stroke="#ffffff" stroke-opacity="0.1"></path>

<path d="M 0 0 V 200 M 100 0 V 200 M 200 0 V 200 M 300 0 V 200 M 400 0 V 200 M 500 0 V 200" fill="none" stroke="#ffffff" stroke-dasharray="4 4" stroke-opacity="0.05"></path>

<path d="M 0 200 L 100 200 L 200 200 L 300 200 L 400 200 C 450 200, 470 60, 500 20" fill="none" stroke="#fafafa" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<circle cx="0" cy="200" fill="#fafafa" r="4.5"></circle>
<circle cx="100" cy="200" fill="#fafafa" r="4.5"></circle>
<circle cx="200" cy="200" fill="#fafafa" r="4.5"></circle>
<circle cx="300" cy="200" fill="#fafafa" r="4.5"></circle>
<circle cx="400" cy="200" fill="#fafafa" r="4.5"></circle>
<circle cx="500" cy="20" fill="#fafafa" r="4.5"></circle>
</svg>

<div className="absolute bottom-0 left-14 right-0 flex justify-between text-sm text-zinc-500 font-light translate-y-1">
<span className="-translate-x-1/2">Oct</span>
<span className="-translate-x-1/2">Nov</span>
<span className="-translate-x-1/2">Dec</span>
<span className="-translate-x-1/2">Jan</span>
<span className="-translate-x-1/2">Feb</span>
<span className="translate-x-2">Mar</span>
</div>
</div>
</div>
<div className="mt-8 flex justify-center items-center gap-2 text-sm text-white font-medium">
<div className="flex items-center">
<div className="w-2 h-2 rounded-full border border-white"></div>
<div className="w-3 h-[1px] bg-white"></div>
<div className="w-2 h-2 rounded-full border border-white"></div>
</div>
                                        Saldo
                                    </div>
</div>

<div className="bg-[#1a1a1c] border border-white/5 rounded-2xl p-6">
<h3 className="text-xl font-medium tracking-tight text-white mb-8">Metas</h3>
<div className="space-y-10">

<div>
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#3f2c1b] flex items-center justify-center border border-[#5c3e21]">
<i className="w-5 h-5 text-[#f59e0b]" data-lucide="piggy-bank" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white">Viagem Internacional</span>
</div>
<span className="text-base text-zinc-300 font-light">28%</span>
</div>
<div className="h-2.5 w-full bg-[#2a223f] rounded-full overflow-hidden mb-3">
<div className="h-full bg-white rounded-full w-[28%] relative"></div>
</div>
<div className="flex justify-between text-sm text-zinc-500 font-light">
<span>R$ 12800.00</span>
<span>R$ 45000.00</span>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#3f2c1b] flex items-center justify-center border border-[#5c3e21]">
<i className="w-5 h-5 text-[#f59e0b]" data-lucide="piggy-bank" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white">Carro Novo</span>
</div>
<span className="text-base text-zinc-300 font-light">50%</span>
</div>
<div className="h-2.5 w-full bg-[#2a223f] rounded-full overflow-hidden mb-3">
<div className="h-full bg-white rounded-full w-[50%] relative"></div>
</div>
<div className="flex justify-between text-sm text-zinc-500 font-light">
<span>R$ 123800.00</span>
<span>R$ 250000.00</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</section>

<div className="absolute bottom-0 left-0 w-full h-64 md:h-96 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent z-30 pointer-events-none"></div>
</div>

<section className="pb-24 px-6 relative z-40 -mt-16 md:-mt-32 w-full" id="planos">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Invista na sua organização</h2>
<p className="text-xl text-zinc-400 font-light">Escolha o plano que melhor se adapta ao seu momento.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="relative group h-full">
<div className="absolute -inset-[1px] bg-gradient-to-b from-white/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
<div className="relative flex flex-col h-full bg-[#121214] border border-white/10 rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Anual</h3>
<p className="text-base text-zinc-400 font-light">Otimize seus resultados</p>
</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/10 text-white text-sm font-medium border border-white/5">
                                    Melhor custo-benefício
                                </span>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tight text-white">R$ 22</span>
<span className="text-lg text-zinc-500 font-light">/mês</span>
</div>
<div className="mt-2 flex flex-col gap-1">
<span className="text-sm text-zinc-500 font-light">ou R$ 264 à vista</span>
<span className="text-sm text-[#22c55e] font-light flex items-center gap-1">
<i className="w-4 h-4" data-lucide="trending-up" strokeWidth="1.5"></i>
                                        Economia de R$ 300/ano
                                    </span>
</div>
</div>
<button className="w-full py-3 px-4 bg-white text-black rounded-md font-medium text-base hover:bg-zinc-200 transition-colors mb-8 mt-auto">
                                Assinar Plano Anual
                            </button>
<div className="space-y-4">
<p className="text-base font-medium text-white mb-4">O que está incluído:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300 font-light">Dashboard completo</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300 font-light">Controle de receitas e despesas</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300 font-light">Metas financeiras ilimitadas</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-base text-zinc-300 font-light">Relatórios detalhados</span>
</li>
</ul>
</div>
</div>
</div>

<div className="relative flex flex-col h-full bg-[#09090b] border border-white/5 rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Mensal</h3>
<p className="text-base text-zinc-400 font-light">Pague conforme usa</p>
</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-300 text-sm font-medium border border-white/5">
                                Flexibilidade total
                            </span>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tight text-white">R$ 47</span>
<span className="text-lg text-zinc-500 font-light">/mês</span>
</div>
<div className="mt-2 flex flex-col gap-1">
<span className="text-sm text-zinc-500 font-light">Cobrado mensalmente</span>
<span className="text-sm text-transparent select-none h-[20px]">Spacer</span>
</div>
</div>
<button className="w-full py-3 px-4 bg-zinc-800 text-white rounded-md font-medium text-base hover:bg-zinc-700 border border-white/5 transition-colors mb-8 mt-auto">
                            Assinar Plano Mensal
                        </button>
<div className="space-y-4">
<p className="text-base font-medium text-white mb-4">O que está incluído:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400 font-light">Dashboard completo</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400 font-light">Controle de receitas e despesas</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400 font-light">Metas financeiras ilimitadas</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400 font-light">Relatórios detalhados</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-8 mt-auto relative z-10 bg-[#09090b]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-zinc-500" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-base font-medium tracking-tight text-zinc-500">Kora</span>
</div>
<p className="text-sm text-zinc-600 font-light">
                © 2024 Kora. Todos os direitos reservados.
            </p>
</div>
</footer>


    </>
  );
}
