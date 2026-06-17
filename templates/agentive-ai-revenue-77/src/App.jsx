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
      

<div className="fixed inset-0 z-0 pointer-events-none hero-glow w-full h-[100vh]"></div>
<div className="fixed inset-0 z-0 pointer-events-none bg-grid-dark w-full h-full opacity-50"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
<a className="text-lg font-normal tracking-tighter flex items-center gap-1 text-white" href="#">
                A<iconify-icon className="text-blue-500 text-sm drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" icon="solar:stars-linear"></iconify-icon>GENTIVE
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
<a className="hover:text-blue-400 transition-colors flex items-center gap-1" href="#agentes">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-colors"></span> Agentes
                </a>
<a className="hover:text-blue-400 transition-colors" href="#visao">Visão</a>
<a className="hover:text-blue-400 transition-colors" href="#resultados">Resultados</a>
<a className="hover:text-blue-400 transition-colors" href="#sobre">Sobre</a>
</nav>
<div className="flex items-center gap-4">
<span className="hidden lg:flex items-center gap-2 text-xs font-mono text-blue-400/50 mr-4">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> SYS_ONLINE
                </span>
<a className="bg-blue-600/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 text-sm font-normal hover:bg-blue-600/20 hover:border-blue-500/50 transition-all rounded-sm flex items-center gap-2 backdrop-blur-md" href="#calendly">
<iconify-icon icon="solar:login-2-linear"></iconify-icon> Portal
                </a>
</div>
</div>
</header>

<section className="relative pt-32 md:pt-40 pb-20 px-6 border-b border-white/5 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
<div className="max-w-5xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
<div className="inline-flex items-center justify-center gap-3 px-3 py-1.5 border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-xs text-blue-300 mb-8 rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.15)] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<iconify-icon className="text-blue-400" icon="solar:cpu-linear"></iconify-icon>
<span className="tracking-widest uppercase font-normal font-mono">Motor de Receita Cognitivo</span>
</div>
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-6 leading-[1.1]">
                Crie. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 border-b-2 border-blue-500/30 pb-2 inline-block">Converta.</span> Feche.
            </h1>
<p className="text-lg text-slate-400 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
                Nossos agentes de IA trabalham lado a lado com sua equipe. Preencha seu funil de vendas com velocidade, previsibilidade e precisão algorítmica.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full">
<a className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 text-sm font-normal hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] rounded-sm relative overflow-hidden" href="#calendly">
                    Agendar Demo <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto glass-card text-slate-300 px-8 py-3 text-sm font-normal hover:text-white transition-colors flex items-center justify-center gap-2 rounded-sm group" href="https://wa.me/suonumero">
<iconify-icon className="text-slate-500 group-hover:text-blue-400 transition-colors" icon="solar:terminal-outline"></iconify-icon> Documentation
                </a>
</div>
</div>
</section>

<section className="py-6 bg-[#0f172a] relative z-10 border-b border-white/5 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3 shrink-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Data_Sources [Active]</p>
</div>
<div className="flex flex-wrap justify-center md:justify-end items-center gap-6 md:gap-10 opacity-70">
<div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-sm">
<iconify-icon className="text-slate-300" icon="solar:cloud-linear"></iconify-icon>
<span className="text-xs font-mono tracking-tight">Salesforce</span>
</div>
<div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-sm">
<iconify-icon className="text-slate-300" icon="solar:hub-linear"></iconify-icon>
<span className="text-xs font-mono tracking-tight">HubSpot</span>
</div>
<div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-sm">
<iconify-icon className="text-slate-300" icon="solar:record-circle-linear"></iconify-icon>
<span className="text-xs font-mono tracking-tight">Gong</span>
</div>
<div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-sm">
<iconify-icon className="text-slate-300" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-xs font-mono tracking-tight">Clari</span>
</div>
<div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-sm">
<iconify-icon className="text-slate-300" icon="solar:hashtag-linear"></iconify-icon>
<span className="text-xs font-mono tracking-tight">Slack</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 relative z-10 border-b border-slate-200" id="agentes">
<div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-slate-200 pb-8">
<div className="border-l-2 border-blue-600 pl-6 relative">
<div className="absolute -left-[2px] top-0 h-1/3 w-[2px] bg-blue-400 blur-[2px]"></div>
<span className="text-xs font-mono text-blue-600 uppercase tracking-widest mb-2 block">System.Modules</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-900 mb-4">O Time de Agentes Autônomos</h2>
<p className="text-base text-slate-600 font-light max-w-2xl">Aplicações especializadas de IA desenhadas para atuar em etapas críticas, suportando executivos com dados tridimensionais.</p>
</div>
<div className="text-right hidden md:block">
<span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 border border-slate-200 rounded-sm">CAPACITY: OPTIMAL</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-500 flex flex-col h-full rounded-sm overflow-hidden relative">
<div className="absolute top-0 right-0 p-3 z-20">
<span className="text-[10px] font-mono bg-blue-500/10 text-blue-600 px-2 py-1 rounded-sm border border-blue-500/20 backdrop-blur-sm">ID: 0x1A</span>
</div>
<div className="h-40 overflow-hidden relative border-b border-slate-100">
<img alt="3D Glass" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1634454955745-f00e9fc325aa?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-8 pt-6 flex-1 flex flex-col bg-white relative">
<div className="absolute -top-6 left-8 w-12 h-12 bg-white rounded-sm flex items-center justify-center text-blue-600 border border-slate-200 shadow-sm group-hover:border-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:eye-scan-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-900 mt-4 mb-3 group-hover:text-blue-600 transition-colors">Inspeção de Funil</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6">Avalia continuamente oportunidades com base em critérios comprovados. Sinaliza riscos e recomenda ações para eliminar gaps no pipeline.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-[10px] font-mono text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:server-square-linear"></iconify-icon> NODE_ACTIVE</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-500 flex flex-col h-full rounded-sm overflow-hidden relative">
<div className="absolute top-0 right-0 p-3 z-20">
<span className="text-[10px] font-mono bg-blue-500/10 text-blue-600 px-2 py-1 rounded-sm border border-blue-500/20 backdrop-blur-sm">ID: 0x2B</span>
</div>
<div className="h-40 overflow-hidden relative border-b border-slate-100">
<img alt="3D Nodes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620825937374-87fc1d62c30c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-8 pt-6 flex-1 flex flex-col bg-white relative">
<div className="absolute -top-6 left-8 w-12 h-12 bg-white rounded-sm flex items-center justify-center text-blue-600 border border-slate-200 shadow-sm group-hover:border-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:radar-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-900 mt-4 mb-3 group-hover:text-blue-600 transition-colors">Análise de Forecast</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6">Varre milhares de objetos de receita e identifica padrões em dados. Entrega insights proativos para mitigar riscos e manter previsibilidade.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-[10px] font-mono text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:server-square-linear"></iconify-icon> NODE_ACTIVE</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-500 flex flex-col h-full rounded-sm overflow-hidden relative">
<div className="absolute top-0 right-0 p-3 z-20">
<span className="text-[10px] font-mono bg-blue-500/10 text-blue-600 px-2 py-1 rounded-sm border border-blue-500/20 backdrop-blur-sm">ID: 0x3C</span>
</div>
<div className="h-40 overflow-hidden relative border-b border-slate-100">
<img alt="Abstract Glow" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-8 pt-6 flex-1 flex flex-col bg-white relative">
<div className="absolute -top-6 left-8 w-12 h-12 bg-white rounded-sm flex items-center justify-center text-blue-600 border border-slate-200 shadow-sm group-hover:border-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:user-heart-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-900 mt-4 mb-3 group-hover:text-blue-600 transition-colors">Customer Success</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6">Organiza as demandas dos clientes a partir de dados não estruturados. Garante visão completa de pendências.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-[10px] font-mono text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:server-square-linear"></iconify-icon> NODE_ACTIVE</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-500 flex flex-col h-full rounded-sm overflow-hidden relative">
<div className="absolute top-0 right-0 p-3 z-20">
<span className="text-[10px] font-mono bg-blue-500/10 text-blue-600 px-2 py-1 rounded-sm border border-blue-500/20 backdrop-blur-sm">ID: 0x4D</span>
</div>
<div className="h-40 overflow-hidden relative border-b border-slate-100">
<img alt="Circuit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-8 pt-6 flex-1 flex flex-col bg-white relative">
<div className="absolute -top-6 left-8 w-12 h-12 bg-white rounded-sm flex items-center justify-center text-blue-600 border border-slate-200 shadow-sm group-hover:border-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-900 mt-4 mb-3 group-hover:text-blue-600 transition-colors">Sales Engineer</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6">Apoio técnico instantâneo ao processo comercial. Qualifica demandas complexas e prepara o terreno para demos.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-[10px] font-mono text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:server-square-linear"></iconify-icon> NODE_ACTIVE</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-500 flex flex-col h-full rounded-sm overflow-hidden relative">
<div className="absolute top-0 right-0 p-3 z-20">
<span className="text-[10px] font-mono bg-blue-500/10 text-blue-600 px-2 py-1 rounded-sm border border-blue-500/20 backdrop-blur-sm">ID: 0x5E</span>
</div>
<div className="h-40 overflow-hidden relative border-b border-slate-100">
<img alt="Fluid" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-8 pt-6 flex-1 flex flex-col bg-white relative">
<div className="absolute -top-6 left-8 w-12 h-12 bg-white rounded-sm flex items-center justify-center text-blue-600 border border-slate-200 shadow-sm group-hover:border-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-900 mt-4 mb-3 group-hover:text-blue-600 transition-colors">Sales Coach</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6">Melhoria contínua de performance através de simulações. Eleva a confiança e padroniza o discurso.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-[10px] font-mono text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:server-square-linear"></iconify-icon> NODE_ACTIVE</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-slate-900 border border-slate-800 shadow-sm hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500 flex flex-col h-full rounded-sm overflow-hidden relative text-white">
<div className="absolute inset-0 bg-grid-dark opacity-30"></div>
<div className="absolute top-0 right-0 p-3 z-20">
<span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-sm border border-indigo-500/30 backdrop-blur-sm">CUSTOM_BUILD</span>
</div>
<div className="p-8 flex-1 flex flex-col relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-blue-400 border border-white/10 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight mb-3 text-white">Agentes Sob Demanda</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">Desenvolvimento customizado de inteligência artificial aplicada, configurada exatamente para as particularidades do seu modelo de negócio.</p>
<div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
<span className="text-[10px] font-mono text-slate-500">INITIATE_DEPLOYMENT</span>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors" icon="solar:programming-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black relative z-10 overflow-hidden border-b border-white/5" id="visao">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="h-[1px] w-8 bg-blue-500"></div>
<span className="text-xs font-mono tracking-widest text-blue-400 uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Core.Architecture</span>
</div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6 leading-tight">Inteligência contextual estruturada para sua operação</h2>
<div className="pl-4 border-l border-white/10 space-y-6 mb-8">
<p className="text-base text-slate-400 font-light leading-relaxed">
                            A IA genérica falha no B2B. Criamos agentes com letramento específico para a sua empresa. O processo inicia na assimilação das suas diretrizes comerciais, playbooks de vendas e dados transacionais.
                        </p>
<p className="text-base text-slate-400 font-light leading-relaxed">
                            Através do nosso modelo de <span className="text-blue-300 font-mono text-sm px-1 bg-blue-500/10 rounded-sm">Managed AI Agents</span>, garantimos monitoramento, retraining e evolução constante. A tecnologia adapta-se à sua estratégia.
                        </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-normal text-white bg-white/5 border border-white/10 px-6 py-2 rounded-sm hover:bg-white/10 transition-colors group" href="#calendly">
                        Metodologia <iconify-icon className="group-hover:translate-x-1 transition-transform text-blue-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="relative h-[500px] glass-card group overflow-hidden p-1 rounded-sm border border-blue-500/20 shadow-[0_0_40px_rgba(37,99,235,0.1)]">

<div className="absolute top-4 left-4 z-20 text-[10px] font-mono text-blue-400 bg-black/80 px-2 py-1 rounded-sm border border-blue-500/30 backdrop-blur-md flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span> NEURAL_NET_SYNC
                    </div>
<div className="absolute top-4 right-4 z-20 flex gap-1">
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
</div>
<img alt="3D Neural Network" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 mix-blend-screen" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

<div className="absolute bottom-0 left-0 right-0 p-6 z-20">
<div className="glass-panel p-4 rounded-sm border border-white/10">
<h4 className="text-sm font-mono text-white mb-2 flex justify-between items-center">
                                Processing Matrix <span className="text-blue-400">99.9%</span>
</h4>
<div className="flex gap-1 mb-2">
<div className="h-1 flex-1 bg-blue-500 rounded-full"></div>
<div className="h-1 flex-1 bg-blue-500/50 rounded-full"></div>
<div className="h-1 flex-1 bg-blue-500/20 rounded-full"></div>
<div className="h-1 flex-1 bg-white/5 rounded-full"></div>
</div>
<p className="text-xs text-slate-400 font-mono">Processamento neural conectado diretamente à sua camada de dados estruturada.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0f172a] relative z-10 border-b border-white/5">
<div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-2 block">Use.Cases</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">Aplicação em Tempo Real</h2>
<p className="text-base text-slate-400 font-light max-w-2xl mx-auto">Como a inteligência se materializa no dia a dia da sua equipe comercial.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative h-80 bg-black overflow-hidden group rounded-sm shadow-sm border border-white/10">
<div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>
<img alt="CRM" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity mix-blend-luminosity" src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute top-6 right-6 w-16 h-16 border border-blue-500/20 rounded-full flex items-center justify-center opacity-50 group-hover:rotate-90 transition-transform duration-700">
<div className="w-12 h-12 border border-dashed border-slate-500/50 rounded-full"></div>
</div>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
<iconify-icon className="text-3xl text-blue-400 mb-4 bg-blue-500/10 p-2 rounded-sm w-fit border border-blue-500/20" icon="solar:database-linear"></iconify-icon>
<h4 className="text-lg font-normal text-white mb-2">Integração CRM</h4>
<p className="text-xs text-slate-400 font-light leading-relaxed">Análise nativa e estruturação de dados dentro do Salesforce e HubSpot.</p>
</div>
</div>

<div className="relative h-80 bg-black overflow-hidden group rounded-sm shadow-sm border border-white/10">
<div className="absolute top-0 left-0 w-full h-[1px] bg-indigo-500/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>
<img alt="Contexto IA" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity mix-blend-luminosity" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-6 right-6 w-16 h-16 border border-indigo-500/20 rounded-full flex items-center justify-center opacity-50 group-hover:-rotate-90 transition-transform duration-700">
<div className="w-12 h-12 border border-dashed border-slate-500/50 rounded-full"></div>
</div>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
<iconify-icon className="text-3xl text-indigo-400 mb-4 bg-indigo-500/10 p-2 rounded-sm w-fit border border-indigo-500/20" icon="solar:soundwave-linear"></iconify-icon>
<h4 className="text-lg font-normal text-white mb-2">Análise de Contexto</h4>
<p className="text-xs text-slate-400 font-light leading-relaxed">Processamento de linguagem natural (NLP) em calls, reuniões e e-mails.</p>
</div>
</div>

<div className="relative h-80 bg-black overflow-hidden group rounded-sm shadow-sm border border-white/10">
<div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>
<img alt="Insights" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity mix-blend-luminosity" src="https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-6 right-6 w-16 h-16 border border-blue-500/20 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-700">
<div className="w-12 h-12 border border-dashed border-slate-500/50 rounded-full"></div>
</div>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
<iconify-icon className="text-3xl text-blue-400 mb-4 bg-blue-500/10 p-2 rounded-sm w-fit border border-blue-500/20" icon="solar:target-linear"></iconify-icon>
<h4 className="text-lg font-normal text-white mb-2">Prescrição Tática</h4>
<p className="text-xs text-slate-400 font-light leading-relaxed">Próximos passos gerados via IA com base em probabilidade de fechamento.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black relative z-10 border-b border-white/5" id="resultados">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-10">
<div className="h-[1px] w-8 bg-blue-500"></div>
<h2 className="text-xl font-mono tracking-tight text-white uppercase">Impacto Analítico</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-xl text-slate-400" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-[10px] text-slate-500 uppercase font-mono border border-white/10 px-2 py-0.5 rounded-sm bg-white/5">Forrester</span>
</div>
<div className="text-5xl font-normal tracking-tighter text-white mb-2 group-hover:text-blue-400 transition-colors">45%</div>
<div className="h-[1px] w-full bg-gradient-to-r from-blue-500/30 to-transparent my-4"></div>
<h4 className="text-sm font-normal text-slate-200 mb-2">Aumento de Conversão</h4>
<p className="text-xs text-slate-400 font-light leading-relaxed">Equipes operando com IA fecham substancialmente mais deals do que operações manuais.</p>
</div>

<div className="glass-card p-6 rounded-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/10 blur-2xl rounded-full group-hover:bg-indigo-500/20 transition-colors"></div>
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-xl text-slate-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-[10px] text-slate-500 uppercase font-mono border border-white/10 px-2 py-0.5 rounded-sm bg-white/5">McKinsey</span>
</div>
<div className="text-5xl font-normal tracking-tighter text-white mb-2 group-hover:text-indigo-400 transition-colors">65%</div>
<div className="h-[1px] w-full bg-gradient-to-r from-indigo-500/30 to-transparent my-4"></div>
<h4 className="text-sm font-normal text-slate-200 mb-2">Redução em Perdas</h4>
<p className="text-xs text-slate-400 font-light leading-relaxed">Identificação algorítmica de riscos antes que se tornem perdas irreparáveis de pipeline.</p>
</div>

<div className="glass-card p-6 rounded-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-xl text-slate-400" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-[10px] text-slate-500 uppercase font-mono border border-white/10 px-2 py-0.5 rounded-sm bg-white/5">Gartner</span>
</div>
<div className="text-5xl font-normal tracking-tighter text-white mb-2 group-hover:text-blue-400 transition-colors">-35%</div>
<div className="h-[1px] w-full bg-gradient-to-r from-blue-500/30 to-transparent my-4"></div>
<h4 className="text-sm font-normal text-slate-200 mb-2">Variância de Forecast</h4>
<p className="text-xs text-slate-400 font-light leading-relaxed">Redução drástica da discrepância entre a receita projetada e o faturamento real.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0f172a] relative z-10 border-b border-white/5" id="sobre">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center">
<span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2 block border border-white/10 w-fit mx-auto px-3 py-1 rounded-sm bg-white/5">Access_Level: Admin</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mt-4">Liderança Executiva</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="flex flex-col sm:flex-row gap-6 items-start glass-card p-6 group hover:border-blue-500/40 transition-all duration-300 rounded-sm relative overflow-hidden">
<div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
<iconify-icon className="text-9xl" icon="solar:fingerprint-linear"></iconify-icon>
</div>
<div className="relative shrink-0">
<div className="absolute -inset-1 border border-blue-500/30 rounded-sm scale-95 group-hover:scale-105 transition-transform duration-500 z-0"></div>
<img alt="Rosana Fernandes" className="w-32 h-32 object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 z-10 relative rounded-sm" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 z-20 flex gap-1">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
</div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-normal tracking-tight text-white mb-1">Rosana Fernandes</h3>
<p className="text-[10px] text-blue-400 font-mono uppercase tracking-widest mb-4">CEO &amp; Co-founder</p>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                            +20 anos em operações de receita (IBM, KPMG). Doutorado pela EAESP/FGV e especialização por Wharton. Foco em alinhar inovação com resultados mensuráveis.
                        </p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 items-start glass-card p-6 group hover:border-blue-500/40 transition-all duration-300 rounded-sm relative overflow-hidden">
<div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
<iconify-icon className="text-9xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="relative shrink-0">
<div className="absolute -inset-1 border border-blue-500/30 rounded-sm scale-95 group-hover:scale-105 transition-transform duration-500 z-0"></div>
<img alt="Paulo Castro" className="w-32 h-32 object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 z-10 relative rounded-sm" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 z-20 flex gap-1">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
</div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-normal tracking-tight text-white mb-1">Paulo Castro</h3>
<p className="text-[10px] text-blue-400 font-mono uppercase tracking-widest mb-4">Chief Agentic Officer</p>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                            +25 anos em tecnologia, +15 em IA corporativa. Físico (USP) e Mestre em IA. Arquiteto responsável pelo motor cognitivo e letramento dos agentes da plataforma.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black relative overflow-hidden z-10" id="calendly">
<div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">

<div className="w-full glass-card rounded-sm overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">

<div className="bg-[#0f172a] px-4 py-2 border-b border-white/5 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="text-[10px] font-mono text-slate-500">agentive_deploy_v2.sh</div>
<div><iconify-icon className="text-slate-500 text-xs" icon="solar:maximize-linear"></iconify-icon></div>
</div>

<div className="p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px] relative">
<div className="absolute inset-0 bg-blue-500/5 animate-pulse z-0"></div>
<div className="relative z-10 flex flex-col items-center w-full">
<div className="inline-block p-3 rounded-sm bg-blue-900/20 border border-blue-500/30 text-blue-400 mb-6">
<iconify-icon className="text-2xl block" icon="solar:rocket-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">Inicie sua Transformação</h2>
<p className="text-sm text-slate-400 font-light max-w-md mx-auto mb-10 leading-relaxed">Agende uma sessão técnica e estratégica para avaliar a aderência de agentes autônomos na sua operação comercial.</p>
<div className="w-full max-w-sm bg-black border border-white/10 p-4 rounded-sm flex items-center justify-between mb-4">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-400" icon="solar:calendar-date-linear"></iconify-icon>
<span className="font-mono text-xs">Conexão via Calendly</span>
</div>
<span className="text-[10px] text-green-400 font-mono bg-green-400/10 px-2 py-1 rounded-sm border border-green-400/20">SECURE</span>
</div>
<button className="w-full max-w-sm bg-blue-600 text-white px-8 py-3 text-sm font-normal hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] rounded-sm flex items-center justify-center gap-2">
                            Acessar Portal de Agendamento <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0f172a] relative z-10">
<div className="max-w-4xl mx-auto">
<div className="flex items-center gap-3 mb-10">
<div className="h-[1px] w-8 bg-slate-500"></div>
<h2 className="text-xl font-mono tracking-tight text-white uppercase">Technical FAQ</h2>
</div>
<div className="space-y-0 border-t border-white/5">
<details className="group border-b border-white/5 bg-transparent transition-colors">
<summary className="flex items-center justify-between cursor-pointer py-6 font-normal text-white text-sm hover:text-blue-300 transition-colors">
                        Isso é apenas automação de CRM baseada em regras?
                        <span className="ml-4 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-sm text-slate-400 font-light leading-relaxed pl-4 border-l border-blue-500/30 ml-2 mb-4">
                        Não. Automações convencionais seguem lógicas estáticas determinísticas. Nossos agentes utilizam modelos de linguagem ancorados em <span className="font-mono text-xs text-blue-300">RAG (Retrieval-Augmented Generation)</span> para interpretar contextos não estruturados e inferir riscos em redes neurais de alta capacidade.
                    </div>
</details>
<details className="group border-b border-white/5 bg-transparent transition-colors">
<summary className="flex items-center justify-between cursor-pointer py-6 font-normal text-white text-sm hover:text-blue-300 transition-colors">
                        Como funciona a governança e segurança de dados?
                        <span className="ml-4 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-sm text-slate-400 font-light leading-relaxed pl-4 border-l border-blue-500/30 ml-2 mb-4">
                        Implementamos arquitetura isolada (<span className="font-mono text-xs text-blue-300">tenant-specific</span>). Seus dados não são utilizados para treinar modelos fundacionais públicos (<span className="font-mono text-xs text-blue-300">Zero Data Retention API policies</span>). O ambiente garante conformidade rigorosa com normas de proteção.
                    </div>
</details>
<details className="group border-b border-white/5 bg-transparent transition-colors">
<summary className="flex items-center justify-between cursor-pointer py-6 font-normal text-white text-sm hover:text-blue-300 transition-colors">
                        Qual é o overhead técnico de implementação na minha equipe?
                        <span className="ml-4 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-sm text-slate-400 font-light leading-relaxed pl-4 border-l border-blue-500/30 ml-2 mb-4">
                        Mínimo. Operamos sob um modelo <span className="font-mono text-xs text-blue-300">Managed AI Agents</span>. Nossa equipe assume o mapeamento de processos e engenharia de prompts. O cliente concentra-se apenas em validar os outputs.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-black relative z-10 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<a className="text-base font-normal tracking-tighter flex items-center gap-1 text-white" href="#">
                    A<iconify-icon className="text-blue-500 text-xs drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" icon="solar:stars-linear"></iconify-icon>GENTIVE
                </a>
<p className="text-[10px] font-mono text-slate-500">Enterprise Revenue AI System</p>
</div>
<div className="flex items-center gap-6 text-xs font-normal text-slate-400">
<a className="hover:text-blue-400 transition-colors" href="#agentes">Tecnologia</a>
<a className="hover:text-blue-400 transition-colors" href="#visao">Visão</a>
<a className="hover:text-blue-400 transition-colors" href="#sobre">Liderança</a>
<a className="hover:text-blue-400 transition-colors" href="#">API Docs</a>
</div>
<div className="text-[10px] font-mono text-slate-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> V.2.0.4 © 2026
            </div>
</div>
</footer>

    </>
  );
}
