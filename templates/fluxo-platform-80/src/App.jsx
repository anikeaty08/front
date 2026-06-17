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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#0A0A0B', // Darker base
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid opacity-60"></div>
<div className="absolute top-[-20%] left-[25%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md supports-[backdrop-filter]:bg-emerald-950/40 border-white/5 bg-emerald-950/70">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative flex items-center justify-center">
<div className="absolute inset-0 bg-cyan-500 blur-[8px] opacity-0 group-hover:opacity-40 transition-opacity"></div>
<svg className="lucide lucide-layers w-4 h-4 relative z-10 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-xs font-semibold tracking-wide text-emerald-100">FLUXO</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-[13px] transition-colors duration-200 text-emerald-400 hover:text-white" href="#">Plataforma</a>
<a className="text-[13px] transition-colors duration-200 text-emerald-400 hover:text-white" href="#">Soluções</a>
<a className="text-[13px] transition-colors duration-200 text-emerald-400 hover:text-white" href="#">Changelog</a>
<a className="text-[13px] transition-colors duration-200 text-emerald-400 hover:text-white" href="#">Preços</a>
</div>
<div className="flex items-center gap-3">
<a className="text-[13px] font-medium transition-colors px-2 text-emerald-300 hover:text-white" href="#">Log in</a>
<button className="group relative inline-flex items-center justify-center px-4 py-1.5 overflow-hidden rounded-full text-[13px] font-medium transition-all bg-white text-emerald-900 hover:bg-emerald-200">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-50 via-emerald-100"></span>
<span className="relative">Começar</span>
</button>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-24 relative">

<section className="max-w-[80rem] mx-auto px-6 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 transition-colors duration-300 cursor-pointer group border-white/10 bg-white/5 hover:bg-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs font-medium group-hover:text-white transition-colors text-emerald-300">Fluxo 2.0 — Introduzindo AI Pipelines</span>
<svg className="lucide lucide-arrow-right w-3 h-3 text-emerald-500 group-hover:text-white transition-colors ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b mb-8 max-w-4xl mx-auto leading-[1.05] text-glow from-white via-white to-white/40">
                Desenvolva na<br/>velocidade do pensamento.
            </h1>
<p className="text-lg max-w-2xl leading-relaxed mb-10 tracking-tight text-emerald-400">
                Uma suite de ferramentas projetada para equipes de alta performance. Gerencie, implante e escale com precisão milimétrica.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-20">
<button className="w-full sm:w-auto h-11 px-8 rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] bg-white text-emerald-950 hover:bg-emerald-200">
                    Iniciar Trial
                </button>
<button className="w-full sm:w-auto h-11 px-8 rounded-full border text-sm font-medium transition-all flex items-center justify-center gap-2 bg-emerald-900 border-emerald-800 text-emerald-300 hover:bg-emerald-800 hover:text-white hover:border-emerald-700">
                    Agendar Demo
                    <span className="text-xs text-emerald-600">⌘K</span>
</button>
</div>

<div className="w-full max-w-5xl relative group perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative rounded-xl border bg-[#0E0E10] shadow-2xl overflow-hidden ring-1 border-white/10 ring-white/5">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-emerald-900/30">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full border bg-emerald-800 border-white/5"></div>
<div className="w-3 h-3 rounded-full border bg-emerald-800 border-white/5"></div>
<div className="w-3 h-3 rounded-full border bg-emerald-800 border-white/5"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded border bg-emerald-950 border-white/5">
<svg className="lucide lucide-lock w-2.5 h-2.5 text-emerald-500" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-[10px] text-emerald-500 font-mono">fluxo.dev/dashboard</span>
</div>
<div className="w-10"></div> 
</div>

<div className="flex h-[400px] md:h-[500px]">

<div className="hidden md:flex w-56 flex-col border-r p-4 gap-1 border-white/5 bg-emerald-900/10">
<div className="flex items-center gap-2 px-2 py-2 mb-4">
<div className="w-5 h-5 rounded bg-cyan-500 flex items-center justify-center text-[10px] font-bold text-white">F</div>
<span className="text-xs font-medium text-white">Fluxo Inc.</span>
<svg className="lucide lucide-chevron-down w-3 h-3 ml-auto text-emerald-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="space-y-0.5">
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs font-medium bg-white/5 text-emerald-100">
<svg className="lucide lucide-layout-grid w-3.5 h-3.5 text-cyan-400" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg> Visão Geral
                                </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-emerald-500 text-xs transition-colors cursor-pointer hover:bg-white/5 hover:text-emerald-300">
<svg className="lucide lucide-activity w-3.5 h-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Analytics
                                </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-emerald-500 text-xs transition-colors cursor-pointer hover:bg-white/5 hover:text-emerald-300">
<svg className="lucide lucide-git-branch w-3.5 h-3.5" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg> Deployments
                                </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-emerald-500 text-xs transition-colors cursor-pointer hover:bg-white/5 hover:text-emerald-300">
<svg className="lucide lucide-users w-3.5 h-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Equipe
                                </div>
</div>
<div className="mt-auto space-y-0.5">
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-emerald-500 text-xs transition-colors cursor-pointer hover:bg-white/5 hover:text-emerald-300">
<svg className="lucide lucide-settings w-3.5 h-3.5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg> Configurações
                                </div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-hidden relative bg-emerald-950/50">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none"></div>
<div className="flex justify-between items-end mb-8 relative z-10">
<div>
<h2 className="text-sm font-medium text-white">Performance em Tempo Real</h2>
<p className="text-xs text-emerald-500 mt-1">Últimos 30 dias</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded border text-[10px] bg-emerald-800/50 border-white/5 text-emerald-400">24h</span>
<span className="px-2 py-1 rounded border text-[10px] bg-white/10 border-white/10 text-white">7d</span>
<span className="px-2 py-1 rounded border text-[10px] bg-emerald-800/50 border-white/5 text-emerald-400">30d</span>
</div>
</div>

<div className="grid grid-cols-4 gap-4 mb-8 relative z-10">
<div className="p-4 rounded-lg border backdrop-blur-sm bg-emerald-900/40 border-white/5">
<div className="flex justify-between items-start mb-4">
<div className="p-1.5 rounded bg-emerald-800 text-emerald-400"><svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
<span className="text-[10px] bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20 text-sky-400">+14%</span>
</div>
<div className="text-2xl font-medium tracking-tight text-white">98.5ms</div>
<div className="text-[10px] text-emerald-500 mt-1">Latência Média</div>
</div>
<div className="p-4 rounded-lg border backdrop-blur-sm bg-emerald-900/40 border-white/5">
<div className="flex justify-between items-start mb-4">
<div className="p-1.5 rounded bg-emerald-800 text-emerald-400"><svg className="lucide lucide-globe w-3.5 h-3.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>
<span className="text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 text-emerald-400">0%</span>
</div>
<div className="text-2xl font-medium tracking-tight text-white">1.2M</div>
<div className="text-[10px] text-emerald-500 mt-1">Requisições</div>
</div>
<div className="col-span-2 p-4 rounded-lg border backdrop-blur-sm relative overflow-hidden bg-emerald-900/40 border-white/5">

<div className="absolute bottom-0 left-0 right-0 h-16 flex items-end px-4 gap-1 opacity-50">
<div className="w-1/6 h-[30%] bg-cyan-500/20 rounded-t"></div>
<div className="w-1/6 h-[50%] bg-cyan-500/30 rounded-t"></div>
<div className="w-1/6 h-[40%] bg-cyan-500/20 rounded-t"></div>
<div className="w-1/6 h-[70%] bg-cyan-500/40 rounded-t"></div>
<div className="w-1/6 h-[60%] bg-cyan-500/30 rounded-t"></div>
<div className="w-1/6 h-[90%] bg-cyan-500 rounded-t shadow-[0_0_15px_rgba(99,102,241,0.4)]"></div>
</div>
<div className="relative z-10">
<div className="text-xs mb-1 text-emerald-400">Status do Sistema</div>
<div className="text-sm flex items-center gap-2 text-white">
<span className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
                                            Todos sistemas operacionais
                                        </div>
</div>
</div>
</div>

<div className="space-y-2 relative z-10">
<div className="flex items-center justify-between p-2.5 rounded border transition-colors border-white/5 bg-emerald-900/20 hover:bg-emerald-800/30">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
<span className="text-xs font-mono text-emerald-300">deploy-main-8f3e2</span>
</div>
<span className="text-[10px] text-emerald-500">2 min atrás</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded border transition-colors border-white/5 bg-emerald-900/20 hover:bg-emerald-800/30">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
<span className="text-xs font-mono text-emerald-300">fix-api-routes</span>
</div>
<span className="text-[10px] text-emerald-500">14 min atrás</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-32">
<div className="mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white">Poder sem complexidade.</h2>
<p className="text-lg max-w-2xl leading-relaxed text-emerald-400">
                    Nossa arquitetura abstrai a infraestrutura complexa para que você foque apenas no código que gera valor.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(240px,auto)]">

<div className="md:col-span-4 glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -right-10 -top-10 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-lg bg-emerald-900 border-white/10">
<svg className="lucide lucide-bar-chart-2 w-5 h-5 text-cyan-400" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Observabilidade Instantânea</h3>
<p className="text-sm max-w-sm leading-relaxed mb-8 text-emerald-400">
                            Logs, métricas e rastreamento distribuído prontos para uso. Sem configuração de agentes ou dashboards complexos.
                        </p>

<div className="mt-auto h-24 w-full flex items-end gap-1 opacity-80 mask-image-gradient">
<div className="flex-1 hover:bg-cyan-500/60 transition-all duration-300 rounded-t-sm h-[20%] bg-emerald-800/50"></div>
<div className="flex-1 hover:bg-cyan-500/60 transition-all duration-300 rounded-t-sm h-[40%] bg-emerald-800/50"></div>
<div className="flex-1 hover:bg-cyan-500/60 transition-all duration-300 rounded-t-sm h-[35%] bg-emerald-800/50"></div>
<div className="flex-1 hover:bg-cyan-500/60 transition-all duration-300 rounded-t-sm h-[60%] bg-emerald-800/50"></div>
<div className="flex-1 hover:bg-cyan-500/60 transition-all duration-300 rounded-t-sm h-[50%] bg-emerald-800/50"></div>
<div className="flex-1 hover:bg-cyan-500/60 transition-all duration-300 rounded-t-sm h-[80%] bg-emerald-800/50"></div>
<div className="flex-1 bg-cyan-500 transition-all duration-300 rounded-t-sm h-[75%] shadow-[0_0_10px_rgba(99,102,241,0.5)] hover:bg-cyan-400"></div>
<div className="flex-1 hover:bg-cyan-500/60 transition-all duration-300 rounded-t-sm h-[40%] bg-emerald-800/50"></div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-white/5"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-lg bg-emerald-900 border-white/10">
<svg className="lucide lucide-shield-check w-5 h-5 text-sky-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Segurança Nativa</h3>
<p className="text-sm leading-relaxed text-emerald-400">
                            Criptografia em repouso e em trânsito. Conformidade SOC2 Type II automatizada.
                        </p>
<div className="mt-auto flex gap-2">
<div className="px-2 py-1 rounded border text-[10px] text-emerald-500 font-mono bg-emerald-900 border-white/5">AES-256</div>
<div className="px-2 py-1 rounded border text-[10px] text-emerald-500 font-mono bg-emerald-900 border-white/5">TLS 1.3</div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
<div className="w-[200%] h-[200%] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] rotate-12"></div>
</div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-lg bg-emerald-900 border-white/10">
<svg className="lucide lucide-globe-2 w-5 h-5 text-emerald-400" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Edge Network</h3>
<p className="text-sm leading-relaxed text-emerald-400">
                            Seus dados replicados globalmente em <span className="text-white">35+ regiões</span> com baixa latência.
                        </p>
</div>
</div>

<div className="md:col-span-4 glass-card rounded-2xl p-0 relative overflow-hidden flex flex-col md:flex-row">
<div className="p-8 flex-1 flex flex-col justify-center relative z-10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-lg bg-emerald-900 border-white/10">
<svg className="lucide lucide-terminal w-5 h-5 text-pink-400" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">API First</h3>
<p className="text-sm leading-relaxed mb-6 text-emerald-400">
                            Controle programático total. Use nosso SDK para integrar fluxos de trabalho complexos diretamente no seu código.
                        </p>
<a className="text-sm border-b pb-0.5 self-start transition-colors text-white border-white/20 hover:border-white" href="#">Ler documentação -&gt;</a>
</div>
<div className="flex-1 border-l p-6 md:p-8 flex items-center bg-emerald-950/50 border-white/5">
<div className="w-full rounded-lg bg-[#1e1e1e] p-4 shadow-2xl border relative group border-white/5">
<div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-emerald-600"></div>
<div className="w-2 h-2 rounded-full bg-emerald-600"></div>
</div>
<code className="font-mono text-[11px] leading-relaxed block text-gray-300">
<span className="text-indigo-400">import</span> { Fluxo } <span className="text-indigo-400">from</span> <span className="text-sky-400">'@fluxo/sdk'</span>;
                                <span className="text-gray-500">// Inicialize o cliente</span>
<span className="text-indigo-400">const</span> app = <span className="text-indigo-400">new</span> <span className="text-indigo-200">Fluxo</span>(process.env.KEY);
                                <span className="text-gray-500">// Deploy instantâneo</span>
<span className="text-indigo-400">await</span> app.deploy({
                                  region: <span className="text-sky-400">'gru1'</span>,
                                  runtime: <span className="text-sky-400">'edge'</span>
                                });
                            </code>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 text-center">
<div className="relative py-12 rounded-3xl overflow-hidden border border-white/5 bg-emerald-900/20">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">Pronto para começar?</h2>
<p className="mb-10 max-w-lg mx-auto text-lg text-emerald-400">Junte-se a desenvolvedores visionários construindo o futuro da web com Fluxo.</p>
<div className="flex justify-center gap-4">
<button className="h-11 px-8 rounded-full text-sm font-semibold transition-all hover:scale-105 duration-200 bg-white text-emerald-950 hover:bg-emerald-200">
                            Criar conta grátis
                        </button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t pt-20 pb-10 border-white/5 bg-emerald-950">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-16">
<div className="col-span-2 md:col-span-4">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-layers w-5 h-5 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-sm font-semibold tracking-wide text-white">FLUXO</span>
</div>
<p className="text-sm text-emerald-500 max-w-xs mb-6">
                        Infraestrutura inteligente para times que não abrem mão de qualidade.
                    </p>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-semibold mb-6 text-white">Produto</h4>
<ul className="space-y-3 text-xs text-emerald-500 font-medium">
<li><a className="transition-colors hover:text-white" href="#">Plataforma</a></li>
<li><a className="transition-colors hover:text-white" href="#">Serverless</a></li>
<li><a className="transition-colors hover:text-white" href="#">Edge Functions</a></li>
<li><a className="transition-colors hover:text-white" href="#">Preços</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-semibold mb-6 text-white">Recursos</h4>
<ul className="space-y-3 text-xs text-emerald-500 font-medium">
<li><a className="transition-colors hover:text-white" href="#">Documentação</a></li>
<li><a className="transition-colors hover:text-white" href="#">API Reference</a></li>
<li><a className="transition-colors hover:text-white" href="#">Comunidade</a></li>
<li><a className="transition-colors hover:text-white" href="#">Help Center</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-semibold mb-6 text-white">Legal</h4>
<ul className="space-y-3 text-xs text-emerald-500 font-medium">
<li><a className="transition-colors hover:text-white" href="#">Privacidade</a></li>
<li><a className="transition-colors hover:text-white" href="#">Termos</a></li>
<li><a className="transition-colors hover:text-white" href="#">Segurança</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-semibold mb-6 text-white">Social</h4>
<div className="flex gap-4">
<a className="text-emerald-500 transition-colors hover:text-white" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-emerald-500 transition-colors hover:text-white" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-emerald-500 transition-colors hover:text-white" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<p className="text-[11px] text-emerald-600">© 2024 Fluxo Inc. Todos os direitos reservados.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-sky-500"></span>
<span className="text-[11px] text-emerald-500">Todos os sistemas operacionais</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
