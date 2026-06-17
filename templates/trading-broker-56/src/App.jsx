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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
},
blue: {
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
},
backgroundImage: {
'text-gradient': 'linear-gradient(to bottom, #ffffff, #94a3b8)',
'card-gradient': 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.8))',
}
}
}
}



        // Initialize Lucide Icons
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
      

<div className="w-full bg-blue-950/30 border-b border-blue-900/20 py-3 text-center backdrop-blur-sm">
<p className="text-blue-200/80 text-xs font-medium tracking-wide uppercase flex items-center justify-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Lançamento Exclusivo: Bônus Especiais Limitados
        </p>
</div>

<nav className="w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-white font-medium text-xl tracking-tight flex items-center gap-2">
<i className="text-blue-500 w-6 h-6 stroke-[1.5]" data-lucide="globe"></i>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">SAFIRION</span>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-blue-600/90 border border-blue-500/50 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-900 shadow-[0_0_15px_-3px_rgba(37,99,235,0.3)]" href="#cadastro">
                Abrir Conta
            </a>
</div>
</nav>

<section className="relative pt-24 pb-36 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none opacity-60"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-8">
<span className="text-gradient">O Novo Padrão Global em</span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">Experiência Profissional.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400 font-normal mb-12 max-w-3xl mx-auto leading-relaxed">
                Opere com a corretora que já executou <strong className="text-slate-100 font-medium">+17 Milhões de Ordens</strong> sem travamentos e garante saques instantâneos.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-16 text-sm md:text-base text-slate-300">
<div className="flex items-center gap-2 bg-slate-900/40 px-5 py-2.5 rounded-full border border-slate-800/60 backdrop-blur-sm">
<i className="text-blue-500 w-4 h-4 stroke-[1.5]" data-lucide="zap"></i>
                    Execução 0,8s mais rápida
                </div>
<div className="flex items-center gap-2 bg-slate-900/40 px-5 py-2.5 rounded-full border border-slate-800/60 backdrop-blur-sm">
<i className="text-blue-500 w-4 h-4 stroke-[1.5]" data-lucide="wallet"></i>
                    Saques &lt; 24h
                </div>
<div className="flex items-center gap-2 bg-slate-900/40 px-5 py-2.5 rounded-full border border-slate-800/60 backdrop-blur-sm">
<i className="text-blue-500 w-4 h-4 stroke-[1.5]" data-lucide="shield-check"></i>
                    Regulamentação Global
                </div>
</div>

<div className="mb-20 flex flex-col items-center">
<a className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-medium text-white transition-all duration-300 bg-blue-600 rounded-xl hover:bg-blue-500 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1" href="#cadastro">
                    Começar Agora
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<p className="mt-4 text-xs font-medium text-slate-500 tracking-wide uppercase">Oferta por tempo limitado</p>
</div>

<div className="relative w-full aspect-[16/9] bg-slate-950 rounded-2xl border border-slate-800/60 shadow-2xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>

<div className="h-12 border-b border-slate-800/60 flex items-center px-6 gap-4 bg-slate-900/30">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
</div>
<div className="w-px h-4 bg-slate-800"></div>
<div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-800/50 border border-slate-700/50">
<i className="w-3 h-3 text-slate-500" data-lucide="lock"></i>
<span className="text-xs text-slate-400">safirion.com/trade</span>
</div>
</div>

<div className="flex h-full bg-slate-950">

<div className="w-20 border-r border-slate-800/60 h-full hidden md:flex flex-col items-center py-6 gap-8 bg-slate-900/10">
<i className="text-blue-500 w-6 h-6 stroke-[1.5]" data-lucide="bar-chart-2"></i>
<i className="text-slate-600 w-6 h-6 stroke-[1.5] hover:text-slate-400 transition-colors cursor-pointer" data-lucide="pie-chart"></i>
<i className="text-slate-600 w-6 h-6 stroke-[1.5] hover:text-slate-400 transition-colors cursor-pointer" data-lucide="wallet"></i>
<i className="text-slate-600 w-6 h-6 stroke-[1.5] hover:text-slate-400 transition-colors cursor-pointer mt-auto mb-10" data-lucide="settings"></i>
</div>

<div className="flex-1 p-8 relative">
<div className="flex justify-between mb-10 items-end">
<div>
<div className="text-3xl text-white font-medium tracking-tight mb-1">EUR/USD</div>
<div className="text-base text-emerald-400 flex items-center gap-1.5 font-mono">
<i className="w-4 h-4" data-lucide="trending-up"></i> 1.0924 (+0.45%)
                                </div>
</div>
<div className="flex gap-3">
<button className="px-6 py-2 bg-emerald-500/10 text-emerald-500 text-sm font-medium rounded-lg border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors">Buy</button>
<button className="px-6 py-2 bg-red-500/10 text-red-500 text-sm font-medium rounded-lg border border-red-500/20 hover:bg-red-500/20 transition-colors">Sell</button>
</div>
</div>

<svg className="w-full h-64 overflow-visible" preserveaspectratio="none" viewbox="0 0 400 100">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 C50,70 80,90 120,50 C160,10 200,40 240,30 C280,20 320,60 360,20 L400,10 L400,100 L0,100 Z" fill="url(#chartGradient)"></path>
<path d="M0,80 C50,70 80,90 120,50 C160,10 200,40 240,30 C280,20 320,60 360,20 L400,10" fill="none" stroke="#3b82f6" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle className="animate-pulse" cx="400" cy="10" fill="#3b82f6" r="4">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="4;8;4"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="1;0.5;1"></animate>
</circle>
</svg>
<div className="absolute bottom-10 right-10 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl text-xs text-white shadow-2xl flex items-center gap-4">
<div>
<div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Status</div>
<div className="flex items-center gap-2 font-medium">
<span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_theme('colors.emerald.500')]"></span>
                                    Conectado
                                </div>
</div>
<div className="w-px h-8 bg-slate-800"></div>
<div>
<div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Latência</div>
<div className="font-mono text-blue-400">12ms</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide border border-blue-500/20 mb-8">
                    INFRAESTRUTURA GLOBAL
                </div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-8 leading-tight">
<span className="text-gradient">Tecnologia de Ponta para</span> <br/>
                    Segurança e Lucro.
                </h2>
<div className="space-y-8 text-slate-400 leading-relaxed text-lg font-light">
<p>
                        A Safirion nasceu em Seychelles, um centro financeiro estratégico, para entregar uma plataforma que elimina as limitações das corretoras comuns.
                    </p>
<p className="font-medium text-slate-200 border-l-2 border-blue-500 pl-6">
                        Resumindo: É a estrutura global que você precisa para operar com liberdade absoluta.
                    </p>
</div>
</div>

<div className="bg-gradient-to-br from-slate-900/50 to-slate-950 p-10 rounded-2xl border border-slate-800/60 relative backdrop-blur-sm">
<h3 className="text-slate-400 font-medium mb-10 text-xs uppercase tracking-widest">Comparativo de Latência (ms)</h3>
<div className="space-y-8">

<div className="group">
<div className="flex justify-between text-sm mb-3">
<span className="text-white font-medium flex items-center gap-2 group-hover:text-blue-400 transition-colors">
<i className="w-4 h-4 text-blue-500 fill-blue-500/20" data-lucide="zap"></i> Safirion
                            </span>
<span className="text-blue-400 font-mono">12ms</span>
</div>
<div className="w-full h-3 bg-slate-800/50 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[10%] rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)] animate-pulse"></div>
</div>
</div>

<div className="opacity-60">
<div className="flex justify-between text-sm mb-3">
<span className="text-slate-400">Corretoras Tradicionais</span>
<span className="text-slate-500 font-mono">250ms</span>
</div>
<div className="w-full h-3 bg-slate-800/50 rounded-full overflow-hidden">
<div className="h-full bg-slate-700 w-[60%] rounded-full"></div>
</div>
</div>

<div className="opacity-40">
<div className="flex justify-between text-sm mb-3">
<span className="text-slate-400">Corretoras "Low Cost"</span>
<span className="text-slate-500 font-mono">450ms+</span>
</div>
<div className="w-full h-3 bg-slate-800/50 rounded-full overflow-hidden">
<div className="h-full bg-slate-800 w-[85%] rounded-full"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-800/50 text-[10px] text-slate-600 uppercase tracking-wider text-center">
                    *Dados auditados de execução média a mercado
                </div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 relative overflow-hidden" id="cadastro">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6 leading-none">
<span className="text-gradient">Jornada do Trader</span><br/>
<span className="text-slate-500">Safirion</span>
</h2>
<p className="text-xl text-slate-400 font-light">
                        Um caminho claro e eficiente do cadastro ao primeiro lucro.
                    </p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-12 h-12 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="chevron-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800 text-white flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="relative w-full">

<div className="mb-16 relative px-4 md:px-0">

<div className="flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6 relative z-10">
<span className="w-1/4 text-center">Cadastro</span>
<span className="w-1/4 text-center text-blue-400">Ativação</span>
<span className="w-1/4 text-center">Trading</span>
<span className="w-1/4 text-center">Scale-up</span>
</div>

<div className="h-1.5 w-full bg-slate-900 rounded-full relative overflow-visible">

<div className="absolute left-0 top-0 h-full w-[38%] bg-gradient-to-r from-blue-900 to-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"></div>

<div className="absolute top-1/2 -translate-y-1/2 left-[0%] w-2 h-2 rounded-full bg-slate-800"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[33%] w-2 h-2 rounded-full bg-slate-800"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[66%] w-2 h-2 rounded-full bg-slate-800"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[100%] w-2 h-2 rounded-full bg-slate-800"></div>

<div className="absolute top-1/2 -translate-y-1/2 left-[38%] w-6 h-6 bg-slate-950 border-[3px] border-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] cursor-grab hover:scale-110 transition-transform z-20 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
</div>
</div>

<div className="flex gap-6 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory px-4 md:px-0">

<div className="min-w-[280px] md:min-w-[320px] snap-center opacity-50 hover:opacity-100 transition-opacity duration-300">
<div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl h-full flex flex-col justify-between group">
<div>
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-400 mb-6 font-mono text-sm border border-slate-700">01</div>
<h3 className="text-xl font-medium text-white mb-3">Cadastro Rápido</h3>
<p className="text-base text-slate-500 leading-relaxed">
                                    Processo simplificado com documentação mínima. Acesso liberado em 2 minutos.
                                </p>
</div>
<div className="mt-8 flex items-center gap-2 text-emerald-500 text-sm font-medium">
<i className="w-4 h-4" data-lucide="check-circle-2"></i> Concluído
                            </div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[360px] snap-center relative z-10">
<div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500 to-blue-600 rounded-[18px] opacity-30 blur-lg"></div>
<div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/50 p-10 rounded-2xl h-full shadow-[0_0_50px_-20px_rgba(37,99,235,0.3)] relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-0 font-mono text-sm shadow-lg shadow-blue-900/50">02</div>
<span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-widest rounded border border-blue-500/20">Etapa Atual</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Depósito &amp; Bônus</h3>
<p className="text-base text-slate-400 leading-relaxed mb-8">
                                    Ative sua conta com o primeiro depósito e receba <strong className="text-white">$100 de bônus</strong> para alavancar suas primeiras operações.
                                </p>
<a className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-blue-900/20" href="#">
                                    Ativar Minha Conta
                                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center opacity-50 hover:opacity-100 transition-opacity duration-300">
<div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl h-full flex flex-col justify-between">
<div>
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-500 mb-6 font-mono text-sm border border-slate-700/50">03</div>
<h3 className="text-xl font-medium text-slate-300 mb-3">Operação Profissional</h3>
<p className="text-base text-slate-500 leading-relaxed">
                                    Acesso à plataforma Safirion Pro. Spreads zero e execução instantânea.
                                </p>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center opacity-50 hover:opacity-100 transition-opacity duration-300">
<div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl h-full flex flex-col justify-between">
<div>
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-500 mb-6 font-mono text-sm border border-slate-700/50">04</div>
<h3 className="text-xl font-medium text-slate-300 mb-3">Saque Imediato</h3>
<p className="text-base text-slate-500 leading-relaxed">
                                    Lucre e saque via PIX ou Crypto em minutos, sem burocracia.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 border-t border-slate-900">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">
<span className="text-gradient">Redefinindo o Padrão</span> das<br /> Corretoras Digitais
                </br></h2>
</div>
<div className="grid md:grid-cols-2 gap-8 md:gap-0 bg-slate-900/20 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm">

<div className="p-10 md:border-r border-slate-800">
<h3 className="text-xl font-medium text-slate-400 mb-10 flex items-center gap-3">
<i className="text-red-500/70 w-6 h-6 stroke-[1.5]" data-lucide="x-circle"></i> Corretoras Comuns
                    </h3>
<ul className="space-y-8">
<li className="flex gap-4 text-slate-500 items-start">
<i className="text-red-900 w-5 h-5 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="font-light text-lg">Execução média de 0,45s</span>
</li>
<li className="flex gap-4 text-slate-500 items-start">
<i className="text-red-900 w-5 h-5 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="font-light text-lg">92% de uptime em volatilidade</span>
</li>
<li className="flex gap-4 text-slate-500 items-start">
<i className="text-red-900 w-5 h-5 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="font-light text-lg">Limites de saques diários</span>
</li>
</ul>
</div>

<div className="p-10 bg-blue-900/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-xl font-medium text-white mb-10 flex items-center gap-3">
<i className="text-blue-500 w-6 h-6 stroke-[1.5]" data-lucide="check-circle"></i> Safirion
                    </h3>
<ul className="space-y-8 relative z-10">
<li className="flex gap-4 text-white items-start">
<i className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="font-light text-lg">Execução ultrarrápida de 0,12s</span>
</li>
<li className="flex gap-4 text-white items-start">
<i className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="font-light text-lg">99,98% de uptime garantido</span>
</li>
<li className="flex gap-4 text-white items-start">
<i className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="font-light text-lg">Saques ilimitados e imediatos</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800/60 p-8 rounded-2xl">
<div className="flex gap-1 text-yellow-500/80 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-lg font-light leading-relaxed mb-8">"Já operei em mais de 5 corretoras grandes. A Safirion foi a única onde o saque de $12k caiu na conta em menos de 2 horas. Surreal."</p>
<div className="flex items-center gap-4 border-t border-slate-800 pt-6">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-medium">RP</div>
<div className="text-sm font-medium text-white">Roberto P. <span className="text-slate-500 font-normal block text-xs">Trader Profissional</span></div>
</div>
</div>

<div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800/60 p-8 rounded-2xl">
<div className="flex gap-1 text-yellow-500/80 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-lg font-light leading-relaxed mb-8">"Estabilidade é o nome. Opero notícias (Payroll) e a plataforma nem pisca. O spread se mantém e a ordem entra."</p>
<div className="flex items-center gap-4 border-t border-slate-800 pt-6">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-medium">AL</div>
<div className="text-sm font-medium text-white">André L. <span className="text-slate-500 font-normal block text-xs">Forex Trader</span></div>
</div>
</div>

<div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800/60 p-8 rounded-2xl">
<div className="flex gap-1 text-yellow-500/80 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-lg font-light leading-relaxed mb-8">"Suporte que resolve. Tive uma dúvida sobre documentação e fui atendido no chat em 30 segundos. Muito profissionalismo."</p>
<div className="flex items-center gap-4 border-t border-slate-800 pt-6">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-medium">MF</div>
<div className="text-sm font-medium text-white">Marcelo F. <span className="text-slate-500 font-normal block text-xs">Day Trader</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 border-t border-slate-900">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-16 text-center">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-200 font-medium marker:content-none hover:bg-slate-800/50 transition-colors">
                        Qual o depósito mínimo para começar?
                        <i className="text-slate-500 transition-transform group-open:rotate-180 w-5 h-5" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-400 text-lg font-light leading-relaxed">
                        Para ativar sua conta e receber o bônus, o depósito mínimo inicial é acessível. Recomendamos verificar os termos atuais da promoção de lançamento.
                    </div>
</details>
<details className="group bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-200 font-medium marker:content-none hover:bg-slate-800/50 transition-colors">
                        Como funciona o processo de saque?
                        <i className="text-slate-500 transition-transform group-open:rotate-180 w-5 h-5" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-400 text-lg font-light leading-relaxed">
                        Os saques são processados automaticamente. 100% dos saques nos últimos 6 meses foram processados em menos de 24 horas.
                    </div>
</details>
<details className="group bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-200 font-medium marker:content-none hover:bg-slate-800/50 transition-colors">
                        A Safirion é regulamentada?
                        <i className="text-slate-500 transition-transform group-open:rotate-180 w-5 h-5" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-400 text-lg font-light leading-relaxed">
                        Sim, operamos sob rigorosa regulamentação em Seychelles, garantindo a proteção do seu capital e transparência nas operações.
                    </div>
</details>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]" href="#cadastro">
                    Criar Conta Gratuita
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-white font-medium text-lg tracking-tight flex items-center gap-2">
<i className="text-blue-500 w-5 h-5" data-lucide="globe"></i>
                Safirion
            </div>
<div className="text-slate-600 text-sm">
                © 2023 Safirion Global Ltd. Todos os direitos reservados.
            </div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Termos</a>
<a className="hover:text-white transition-colors" href="#">Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Risco</a>
</div>
</div>
</footer>


    </>
  );
}
