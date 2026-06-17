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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex text-[#1A1A1A] bg-[#00D97E] w-8 h-8 rounded-lg items-center justify-center">
<svg className="lucide lucide-layers w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(26, 26, 26)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-xl font-bold tracking-tighter text-[#00D97E] group-hover:text-white transition-colors duration-300">HYGROS</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-[#00D97E] transition-colors" href="#features">Soluções</a>
<a className="text-sm text-neutral-400 hover:text-[#00D97E] transition-colors" href="#integration">Integração</a>
<a className="text-sm text-neutral-400 hover:text-[#00D97E] transition-colors" href="#testimonials">Clientes</a>
<a className="text-sm text-neutral-400 hover:text-[#00D97E] transition-colors" href="#">Documentação</a>
<a className="text-sm text-neutral-400 hover:text-[#00D97E] transition-colors" href="#contact">Contato</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-[#00D97E] transition-colors" href="#">Login</a>
<a className="px-5 py-2.5 rounded-full bg-[#00D97E] text-[#1A1A1A] text-sm font-semibold hover:bg-[#00b569] transition-all neon-glow-hover" href="#">
                    Criar Conta
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-full grid-bg opacity-30 pointer-events-none"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#1A4D3A] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00D9FF] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00D97E]/30 bg-[#00D97E]/10">
<span className="w-2 h-2 rounded-full bg-[#00D97E] animate-pulse"></span>
<span className="text-xs font-medium text-[#00D97E] tracking-wide uppercase">Fintech 2.0</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1]">
                    Transforme cada <span className="text-[#00D97E]">transação</span> em um fluxo de resultados.
                </h1>
<p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                    Fintech moderna, segura e tecnológica. Junte-se a Hygros para automação financeira com IA, integração multi-adquirente e performance extrema.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 rounded-lg bg-[#00D97E] text-[#1A1A1A] font-semibold text-base hover:bg-[#00b569] transition-all neon-glow flex items-center justify-center gap-2">
                        Começar Agora
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="px-8 py-4 rounded-lg glass-panel text-white font-medium text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        Falar com Suporte
                    </button>
</div>
</div>

<div className="relative">
<div className="relative rounded-2xl glass-panel p-6 border border-white/10 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">

<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-[#00D97E]"></div>
</div>
<div className="text-xs text-neutral-500 font-mono">dashboard.hygros.com</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<div className="text-xs text-neutral-400 mb-1">Receita Total</div>
<div className="text-2xl font-semibold text-white tracking-tight">R$ 1.240.092</div>
<div className="text-xs text-[#00D97E] mt-2 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +12.5%
                            </div>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<div className="text-xs text-neutral-400 mb-1">Taxa de Aprovação</div>
<div className="text-2xl font-semibold text-white tracking-tight">99.4%</div>
<div className="text-xs text-[#00D9FF] mt-2 flex items-center gap-1">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> IA Otimizada
                            </div>
</div>
</div>

<div className="h-32 flex items-end gap-2 px-2">
<div className="flex-1 bg-gradient-to-t from-[#00D97E]/20 to-[#00D97E] h-[40%] rounded-t-sm opacity-50"></div>
<div className="flex-1 bg-gradient-to-t from-[#00D97E]/20 to-[#00D97E] h-[60%] rounded-t-sm opacity-60"></div>
<div className="flex-1 bg-gradient-to-t from-[#00D97E]/20 to-[#00D97E] h-[30%] rounded-t-sm opacity-40"></div>
<div className="flex-1 bg-gradient-to-t from-[#00D97E]/20 to-[#00D97E] h-[80%] rounded-t-sm opacity-80"></div>
<div className="flex-1 bg-gradient-to-t from-[#00D97E]/20 to-[#00D97E] h-[55%] rounded-t-sm opacity-60"></div>
<div className="flex-1 bg-gradient-to-t from-[#00D97E]/20 to-[#00D97E] h-[95%] rounded-t-sm shadow-[0_0_15px_#00D97E]"></div>
<div className="flex-1 bg-gradient-to-t from-[#00D97E]/20 to-[#00D97E] h-[70%] rounded-t-sm opacity-70"></div>
</div>

<div className="absolute top-20 right-8 px-3 py-1.5 bg-[#1A1A1A]/90 border border-[#00D97E]/30 backdrop-blur-md rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
<div className="w-2 h-2 rounded-full bg-[#00D97E]"></div>
<span className="text-xs text-white">Pagamento Aprovado</span>
</div>
</div>

<div className="absolute -inset-4 bg-[#00D97E] opacity-20 blur-2xl -z-10 rounded-full"></div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#1A1A1A] py-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 group">
<svg className="lucide lucide-shield-check text-[#28A745] w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-semibold tracking-wide">PCI COMPLIANCE L1</span>
</div>
<div className="flex items-center gap-2 group">
<svg className="lucide lucide-cpu text-[#9D00FF] w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-sm font-semibold tracking-wide">AI-DRIVEN CORE</span>
</div>
<div className="flex items-center gap-2 group">
<svg className="lucide lucide-zap text-[#00D9FF] w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-semibold tracking-wide">LATÊNCIA &lt; 50ms</span>
</div>
<div className="flex items-center gap-2 group">
<svg className="lucide lucide-lock text-[#00D97E] w-6 h-6" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-sm font-semibold tracking-wide">E2E ENCRYPTION</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Plataforma Completa</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">Tecnologia financeira construída para escalar sua operação sem atritos.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl bg-[#1F1F1F] border border-white/5 hover:border-[#00D97E] transition-all duration-300 hover:bg-[#252525]">
<div className="w-12 h-12 rounded-lg bg-[#1A4D3A]/50 flex items-center justify-center mb-6 text-[#00D97E] group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Pix Imediato</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Conciliação instantânea e QR Codes dinâmicos com alta disponibilidade.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#1F1F1F] border border-white/5 hover:border-[#00D97E] transition-all duration-300 hover:bg-[#252525]">
<div className="w-12 h-12 rounded-lg bg-[#1A4D3A]/50 flex items-center justify-center mb-6 text-[#00D9FF] group-hover:scale-110 transition-transform">
<svg className="lucide lucide-network w-6 h-6" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Integração Multi</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Roteamento inteligente entre múltiplos adquirentes para maximizar aprovação.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#1F1F1F] border border-white/5 hover:border-[#00D97E] transition-all duration-300 hover:bg-[#252525]">
<div className="w-12 h-12 rounded-lg bg-[#1A4D3A]/50 flex items-center justify-center mb-6 text-[#9D00FF] group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-alert w-6 h-6" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Anti-Fraude AI</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Análise comportamental em tempo real com machine learning preditivo.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#1F1F1F] border border-white/5 hover:border-[#00D97E] transition-all duration-300 hover:bg-[#252525]">
<div className="w-12 h-12 rounded-lg bg-[#1A4D3A]/50 flex items-center justify-center mb-6 text-[#A8D5A8] group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bar-chart-3 w-6 h-6" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Dashboard Live</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Métricas financeiras e operacionais atualizadas milissegundo a milissegundo.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#151515] border-y border-white/5" id="integration">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Integre em minutos, <br/>escale por anos.</h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                    Nossa API RESTful foi desenhada por desenvolvedores para desenvolvedores. Webhooks robustos, ambientes de sandbox idênticos à produção e SDKs para as principais linguagens.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 text-[#00D97E] w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300">Documentação interativa</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 text-[#00D97E] w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300">SDKs para Node, Python, PHP e Go</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 text-[#00D97E] w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300">Suporte técnico dedicado via Slack</span>
</li>
</ul>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#00D9FF] text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2">
<svg className="lucide lucide-file-code w-4 h-4 text-[#00D9FF]" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg>
                        Documentação API
                    </button>
<button className="px-6 py-3 rounded-lg bg-transparent text-neutral-400 hover:text-white transition-colors">
                        Ver SDKs
                    </button>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#00D97E] to-[#00D9FF] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-xl bg-[#0F0F0F] border border-white/10 p-6 shadow-2xl font-mono text-xs md:text-sm overflow-x-auto">

<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>

<pre className="text-neutral-300"><span className="text-[#9D00FF]">const</span> hygros = <span className="text-[#9D00FF]">require</span>(<span className="text-[#A8D5A8]">'hygros-node'</span>);

<span className="text-[#565656]">// Inicializar transação</span>
<span className="text-[#9D00FF]">const</span> transaction = <span className="text-[#9D00FF]">await</span> hygros.charges.<span className="text-[#00D9FF]">create</span>({
  amount: <span className="text-[#F0F0F0]">24900</span>, <span className="text-[#565656]">// R$ 249,00</span>
  currency: <span className="text-[#A8D5A8]">'brl'</span>,
  payment_method: <span className="text-[#A8D5A8]">'pix'</span>,
  customer: {
    email: <span className="text-[#A8D5A8]">'cliente@email.com'</span>,
    tax_id: <span className="text-[#A8D5A8]">'000.000.000-00'</span>
  },
  split_rules: [
    { recipient_id: <span className="text-[#A8D5A8]">'rp_123'</span>, percentage: <span className="text-[#F0F0F0]">10</span> }
  ]
});

<span className="text-[#00D97E]">console</span>.log(transaction.status); 
<span className="text-[#565656]">// Output: "approved" 🔒</span>
</pre>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 text-center relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#00D97E]/30 to-transparent -z-10"></div>

<div className="relative group">
<div className="w-24 h-24 mx-auto rounded-full bg-[#1A1A1A] border border-[#00D97E]/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,217,126,0.1)] group-hover:scale-110 transition-transform duration-300">
<span className="text-3xl font-bold text-[#00D97E]">1</span>
</div>
<h3 className="text-xl font-semibold mb-2">Crie sua conta</h3>
<p className="text-sm text-neutral-400 px-8">Cadastro simplificado com aprovação de compliance em tempo real via IA.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto rounded-full bg-[#1A1A1A] border border-[#00D97E]/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,217,126,0.1)] group-hover:scale-110 transition-transform duration-300">
<span className="text-3xl font-bold text-[#00D97E]">2</span>
</div>
<h3 className="text-xl font-semibold mb-2">Configure a plataforma</h3>
<p className="text-sm text-neutral-400 px-8">Defina regras de split, anti-fraude e integre nossa API ou SDK.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto rounded-full bg-[#1A1A1A] border border-[#00D97E]/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,217,126,0.1)] group-hover:scale-110 transition-transform duration-300">
<span className="text-3xl font-bold text-[#00D97E]">3</span>
</div>
<h3 className="text-xl font-semibold mb-2">Receba pagamentos</h3>
<p className="text-sm text-neutral-400 px-8">Acompanhe o fluxo de caixa no dashboard e escale suas vendas.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#151515]" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">Quem confia na Hygros</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-[#1A1A1A] border border-white/5 relative">
<svg className="lucide lucide-quote absolute top-8 right-8 text-[#1A4D3A] w-8 h-8 opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<div className="flex items-center gap-1 text-[#F59E0B] mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 mb-6 leading-relaxed">"A estabilidade da Hygros é incomparável. Reduzimos nosso churn involuntário em 18% apenas trocando o gateway de pagamentos."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#00D9FF] flex items-center justify-center text-[#1A1A1A] font-bold text-sm">RM</div>
<div>
<div className="font-semibold text-white text-sm">Ricardo Mendes</div>
<div className="text-xs text-neutral-500">CTO @ HyperCash</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#1A1A1A] border border-white/5 relative">
<svg className="lucide lucide-quote absolute top-8 right-8 text-[#1A4D3A] w-8 h-8 opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<div className="flex items-center gap-1 text-[#F59E0B] mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 mb-6 leading-relaxed">"A documentação é um sonho para qualquer dev. Integramos o split de pagamentos em menos de 2 horas. Suporte fenomenal."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#9D00FF] flex items-center justify-center text-white font-bold text-sm">AL</div>
<div>
<div className="font-semibold text-white text-sm">Ana Lima</div>
<div className="text-xs text-neutral-500">Tech Lead @ VarejoNow</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#1A1A1A] border border-white/5 relative">
<svg className="lucide lucide-quote absolute top-8 right-8 text-[#1A4D3A] w-8 h-8 opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<div className="flex items-center gap-1 text-[#F59E0B] mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 mb-6 leading-relaxed">"O dashboard em tempo real mudou a forma como nosso time financeiro opera. Transparência total e zero surpresas no fim do mês."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#00D97E] flex items-center justify-center text-[#1A1A1A] font-bold text-sm">CS</div>
<div>
<div className="font-semibold text-white text-sm">Carlos Silva</div>
<div className="text-xs text-neutral-500">CFO @ PayFuture</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden text-center">
<div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#1A4D3A] opacity-30"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00D97E] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Pronto para transformar suas transações?</h2>
<p className="text-neutral-400 text-lg mb-10">Junte-se a milhares de empresas que escolheram a performance e segurança da Hygros.</p>
<a className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#00D97E] text-[#1A1A1A] font-bold text-lg hover:bg-[#00b569] transition-all neon-glow hover:scale-105 transform duration-200" href="#">
                Criar Conta Gratuitamente
                <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<footer className="bg-[#111111] border-t border-white/5 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-[#00D97E] flex items-center justify-center text-[#1A1A1A]">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-lg font-bold tracking-tighter text-white">HYGROS</span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Infraestrutura de pagamentos de próxima geração para a economia digital.
                    </p>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Plataforma</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-[#00D97E] transition-colors" href="#">Pix &amp; Boletos</a></li>
<li><a className="hover:text-[#00D97E] transition-colors" href="#">Cartões de Crédito</a></li>
<li><a className="hover:text-[#00D97E] transition-colors" href="#">Split de Pagamentos</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Desenvolvedores</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-[#00D97E] transition-colors" href="#">Documentação da API</a></li>
<li><a className="hover:text-[#00D97E] transition-colors" href="#">Bibliotecas &amp; SDKs</a></li>
<li><a className="hover:text-[#00D97E] transition-colors" href="#">Status da API</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Empresa</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-[#00D97E] transition-colors" href="#">Sobre Nós</a></li>
<li><a className="hover:text-[#00D97E] transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-[#00D97E] transition-colors" href="#">Contato</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs">
                    © 2026 Hygros Pagamentos S.A. Todos os direitos reservados.
                </p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
