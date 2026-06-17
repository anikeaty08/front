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
      

<header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
<nav className="w-full max-w-5xl bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-blue-900/20 transition-all hover:border-white/20">
<div className="flex items-center gap-2">

<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
<i className="text-white w-5 h-5" data-lucide="zap"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-white">WideFlow</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#features">Funcionalidades</a>
<a className="hover:text-white transition-colors" href="#pricing">Planos</a>
<a className="hover:text-white transition-colors" href="#security">Segurança</a>
</div>
<a className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium tracking-tighter text-white bg-blue-600 rounded-full shadow-[0_0_20px_-5px_rgba(37,99,235,0.6)] hover:bg-blue-500 transition-all duration-300" href="#">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
<span className="relative flex items-center gap-2">
                    Entrar
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</a>
</nav>
</header>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden">

<div className="absolute inset-0 bg-grid -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>

<div className="text-center max-w-4xl px-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 animate-pulse">
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
                O Futuro da Comunicação B2B
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                O E-mail agora é <br/>
<span className="text-gradient">Bidirecional &amp; Inteligente.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                WideFlow centraliza sua infraestrutura, responde leads automaticamente com 
                Assistentes de IA e conecta webhooks dinâmicos em uma única plataforma.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-colors shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] flex items-center gap-2">
                    Começar Agora
                </button>
<button className="px-8 py-4 bg-slate-800/50 text-white border border-slate-700 rounded-xl font-medium text-sm hover:bg-slate-800 transition-colors flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4 text-blue-400" data-lucide="play-circle"></i> Ver Demo
                </button>
</div>
</div>

<div className="relative w-full max-w-5xl h-[300px] md:h-[400px] mt-16 opacity-80">
<svg className="w-full h-full drop-shadow-2xl" viewbox="0 0 300 100">

<defs>
<radialgradient cx="50%" cy="50%" id="glow" r="50%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '0'}}></stop>
</radialgradient>
</defs>

<path d="M10,50 Q50,0 90,50 T190,50 T290,50" fill="none" stroke="#1e293b" strokeWidth="0.5"></path>
<path d="M290,50 Q250,100 150,50" fill="none" stroke="#1e293b" strokeWidth="0.5"></path>
<path d="M50,90 Q150,10 250,90" fill="none" stroke="#1e293b" strokeWidth="0.5"></path>
<path d="M20,20 Q150,150 280,20" fill="none" stroke="#1e293b" strokeWidth="0.5"></path>

<circle className="mail-particle" r="1.5"></circle>
<circle className="mail-particle" r="1.5"></circle>
<circle className="mail-particle" r="1.5"></circle>
<circle className="mail-particle" r="1.5"></circle>

<circle className="animate-pulse" cx="10" cy="50" fill="#3b82f6" r="2"></circle>
<circle className="animate-pulse" cx="290" cy="50" fill="#8b5cf6" r="2"></circle>
<circle className="animate-pulse" cx="150" cy="50" fill="white" r="3" style={{filter: 'drop-shadow(0 0 5px white)'}}></circle>
</svg>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[90%] md:w-[700px] h-[400px] bg-[#0f172a] border border-slate-800 rounded-t-2xl shadow-2xl overflow-hidden animate-float">

<div className="h-12 border-b border-slate-800 flex items-center px-4 gap-2 bg-[#020617]">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
<div className="ml-4 h-6 w-64 bg-slate-800/50 rounded-md"></div>
</div>

<div className="p-6 flex gap-6 h-full">

<div className="w-16 md:w-48 hidden md:flex flex-col gap-3">
<div className="h-8 bg-blue-600/20 border border-blue-600/30 rounded-md w-full"></div>
<div className="h-8 bg-slate-800/30 rounded-md w-full"></div>
<div className="h-8 bg-slate-800/30 rounded-md w-full"></div>
</div>

<div className="flex-1 flex flex-col gap-4">
<div className="flex justify-between">
<div className="h-8 w-32 bg-slate-800/50 rounded-md"></div>
<div className="h-8 w-24 bg-blue-600 rounded-md shadow-lg shadow-blue-600/20"></div>
</div>

<div className="space-y-3">
<div className="h-16 bg-slate-800/20 border border-slate-800 rounded-lg flex items-center px-4 gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs">IA</div>
<div className="flex-1 space-y-2">
<div className="h-2 w-32 bg-slate-700/50 rounded"></div>
<div className="h-2 w-64 bg-slate-800/50 rounded"></div>
</div>
<div className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs border border-green-500/20">Respondido</div>
</div>
<div className="h-16 bg-slate-800/20 border border-slate-800 rounded-lg flex items-center px-4 gap-4 opacity-60">
<div className="w-8 h-8 rounded-full bg-slate-700/50"></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-24 bg-slate-700/50 rounded"></div>
<div className="h-2 w-48 bg-slate-800/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 relative overflow-hidden" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100 p-6 w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900">SDR Assistente</h4>
<p className="text-xs text-green-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online agora
                                </p>
</div>
</div>
<div className="space-y-4 text-sm">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0"></div>
<div className="bg-slate-100 p-3 rounded-r-xl rounded-bl-xl text-slate-600">
                                    Olá, vi o produto no site. Qual o prazo de entrega para SP?
                                </div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-blue-600" data-lucide="sparkles"></i>
</div>
<div className="bg-blue-600 text-white p-3 rounded-l-xl rounded-br-xl shadow-lg shadow-blue-200">
                                    Olá! Para São Paulo capital, o prazo é de 24h após a confirmação. Posso gerar seu link de pagamento?
                                </div>
</div>
</div>

<div className="absolute -right-12 bottom-10 bg-slate-900 text-white p-4 rounded-xl text-xs w-48 shadow-xl rotate-3 hidden md:block">
<div className="flex items-center gap-2 mb-2 text-slate-400">
<i className="w-3 h-3" data-lucide="settings-2"></i> Configuração
                            </div>
<p className="font-mono opacity-80">"Atue como um SDR experiente. Seja breve e focado em conversão."</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
<span>Módulo de IA</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Seu e-mail responde <br/>enquanto você dorme.
                    </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                        Não apenas gere textos. O WideFlow <strong>lê</strong> sua caixa de entrada, entende o contexto e responde leads instantaneamente com assistentes treinados nas suas regras de negócio.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                            Respostas 24/7 sem intervenção humana.
                        </li>
<li className="flex items-center gap-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                            Treinamento via prompts simples.
                        </li>
<li className="flex items-center gap-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                            Geração de templates criativos.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020617] relative border-y border-white/5">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5"></div> 
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 text-purple-400 font-semibold mb-4">
<i className="w-5 h-5" data-lucide="webhook"></i>
<span>Conectividade Avançada</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-white mb-6">
                        Dados externos,<br/>
<span className="text-purple-400">e-mails hiper-personalizados.</span>
</h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                        Esqueça integrações complexas. Envie um JSON via webhook e o WideFlow mapeia as variáveis dinamicamente para dentro do corpo do e-mail.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-white/5 border border-white/10">
<i className="w-6 h-6 text-purple-400 mb-3" data-lucide="shopping-cart"></i>
<h4 className="text-white font-medium text-sm">Compra Realizada</h4>
<p className="text-slate-500 text-xs mt-1">Gatilho automático</p>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/10">
<i className="w-6 h-6 text-blue-400 mb-3" data-lucide="braces"></i>
<h4 className="text-white font-medium text-sm">Mapeamento JSON</h4>
<p className="text-slate-500 text-xs mt-1">Injeção de variáveis</p>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative bg-[#0f172a] border border-slate-800 rounded-2xl p-1 overflow-hidden">
<div className="flex h-[300px]">

<div className="w-1/2 bg-[#0b1120] p-4 font-mono text-xs text-slate-300 border-r border-slate-800 overflow-hidden">
<div className="flex items-center gap-2 mb-4 text-slate-500">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span>payload.json</span>
</div>
<p><span className="text-purple-400">{</span></p>
<p className="pl-4"><span className="text-blue-400">"event"</span>: <span className="text-green-400">"compra_aprovada"</span>,</p>
<p className="pl-4"><span className="text-blue-400">"cliente"</span>: <span className="text-green-400">"Ana Silva"</span>,</p>
<p className="pl-4"><span className="text-blue-400">"curso"</span>: <span className="text-green-400">"Masterclass UX"</span></p>
<p><span className="text-purple-400">}</span></p>

<div className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full animate-pulse"></div>
</div>

<div className="w-1/2 bg-white p-6 flex flex-col justify-center relative">
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent"></div>
<div className="relative z-10">
<p className="text-xs text-slate-400 mb-2">Assunto: Acesso liberado!</p>
<h3 className="text-slate-900 font-bold text-lg mb-2">Olá, <span className="bg-green-100 text-green-700 px-1 rounded">Ana Silva</span></h3>
<p className="text-slate-600 text-xs leading-relaxed">
                                        Obrigado por adquirir o <span className="bg-purple-100 text-purple-700 px-1 rounded">Masterclass UX</span>.
                                        Seu acesso já está liberado.
                                    </p>
<button className="mt-4 w-full py-2 bg-slate-900 text-white text-xs rounded font-medium">Acessar Curso</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="security">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Gestão Granular &amp; Segurança</h2>
<p className="text-lg text-slate-500 font-light">Controle total sobre quem acessa o quê. Ideal para times em crescimento.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden relative group hover:shadow-xl transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-blue-600" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Restrição de Visualização</h3>
<p className="text-slate-500 font-light max-w-md">Colaboradores acessam apenas o Dashboard. Configurações sensíveis e listas de leads completas permanecem invisíveis.</p>
</div>

<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white to-transparent z-0"></div>
<div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-slate-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
</div>

<div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-blue-400" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Multi-Sender</h3>
<p className="text-slate-400 font-light text-sm">Defina limites diários por conta (suporte@, vendas@) para evitar bloqueios.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Dashboard Geral</h3>
<p className="text-slate-500 font-light text-sm mb-6">Visão macro de assistentes ativos, consumo de limites e reputação de domínio.</p>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-3/4"></div>
</div>
<div className="mt-2 flex justify-between text-xs text-slate-400">
<span>Saúde do Domínio</span>
<span className="text-green-600 font-medium">98/100</span>
</div>
</div>

<div className="md:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 relative group">
<div className="flex items-center justify-between relative z-10">
<div>
<h3 className="text-xl font-semibold text-blue-900 mb-2">Infraestrutura Centralizada</h3>
<p className="text-blue-700/80 font-light text-sm max-w-sm">Adicione e verifique domínios com facilidade. Gerenciamento de DNS simplificado.</p>
</div>
<div className="hidden md:block">
<div className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-mono text-slate-600 border border-blue-200 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                mg.wideflow.com verified
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 relative" id="pricing">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Planos Escaláveis</h2>
<p className="text-lg text-slate-400 font-light">Comece pequeno, cresça sem limites.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-2 duration-300 group">
<h3 className="text-slate-400 font-medium mb-4">Discovery</h3>
<div className="text-3xl font-bold text-white mb-2">R$ 97<span className="text-sm font-normal text-slate-500">/mês</span></div>
<p className="text-sm text-slate-500 mb-8">Para validação inicial e solopreneurs.</p>
<button className="w-full py-3 rounded-xl border border-slate-700 text-white font-medium text-sm hover:bg-slate-800 transition-colors mb-8">Assinar Discovery</button>
<ul className="space-y-4 text-sm text-slate-300 font-light">
<li className="flex gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> 1 Domínio</li>
<li className="flex gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> 1.000 Envios</li>
<li className="flex gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> 1 Assistente IA</li>
<li className="flex gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> 10 Webhooks</li>
</ul>
</div>

<div className="p-8 rounded-3xl bg-[#0f172a] border border-blue-600 relative transform md:-translate-y-4 shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">Mais Popular</div>
<h3 className="text-blue-400 font-medium mb-4">Master</h3>
<div className="text-4xl font-bold text-white mb-2">R$ 297<span className="text-sm font-normal text-slate-500">/mês</span></div>
<p className="text-sm text-slate-400 mb-8">Para empresas em crescimento constante.</p>
<button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 mb-8 group-hover:scale-105">Assinar Master</button>
<ul className="space-y-4 text-sm text-slate-200 font-light">
<li className="flex gap-3"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> 3 Domínios</li>
<li className="flex gap-3"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> 5.000 Envios</li>
<li className="flex gap-3"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> 3 Assistentes IA</li>
<li className="flex gap-3"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> 30 Webhooks</li>
<li className="flex gap-3"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> 5 Colaboradores</li>
</ul>
</div>

<div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-900/50 transition-all hover:-translate-y-2 duration-300 group">
<h3 className="text-purple-400 font-medium mb-4">Prime</h3>
<div className="text-3xl font-bold text-white mb-2">R$ 497<span className="text-sm font-normal text-slate-500">/mês</span></div>
<p className="text-sm text-slate-500 mb-8">Operações de alta escala e demanda.</p>
<button className="w-full py-3 rounded-xl border border-slate-700 text-white font-medium text-sm hover:bg-purple-900/20 hover:border-purple-800 transition-colors mb-8">Assinar Prime</button>
<ul className="space-y-4 text-sm text-slate-300 font-light">
<li className="flex gap-3"><i className="w-4 h-4 text-purple-500" data-lucide="check"></i> 10 Domínios</li>
<li className="flex gap-3"><i className="w-4 h-4 text-purple-500" data-lucide="check"></i> 25.000 Envios</li>
<li className="flex gap-3"><i className="w-4 h-4 text-purple-500" data-lucide="check"></i> 20 Assistentes IA</li>
<li className="flex gap-3"><i className="w-4 h-4 text-purple-500" data-lucide="check"></i> Suporte VIP 24/7</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold text-white tracking-tight">WideFlow</span>
</div>
<p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
                        A plataforma all-in-one para automação e gestão de e-mails. Potencialize seu time com IA, Webhooks e controle granular.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Produto</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Assistentes IA</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Webhooks</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Templates</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Segurança</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Empresa</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Sobre nós</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Contato</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2023 WideFlow Inc. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Privacidade</a>
<a className="hover:text-slate-400" href="#">Termos</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
