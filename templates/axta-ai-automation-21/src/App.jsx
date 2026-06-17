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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        function submitLeadMagnet(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalContent = btn.innerHTML;
            
            btn.textContent = 'Processando...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '✓ Enviado';
                btn.style.backgroundColor = '#065f46';
                btn.style.color = '#fff';
                setTimeout(() => {
                    e.target.reset();
                    btn.innerHTML = originalContent;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 2500);
            }, 1000);
        }
    
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
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none" style={{filter: 'invert(1) opacity(0.6) saturate(1.2)'}}>
<div className="absolute w-full h-full left-0 top-0" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>


<div aria-hidden="true" className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
<div className="sm:px-6 flex h-14 max-w-6xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-emerald-600 w-3 h-3 rounded-sm"></div>
<span className="text-sm font-semibold text-neutral-900 tracking-tight">Axta AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#problem">PROBLEMA</a>
<a className="hover:text-neutral-900 transition-colors" href="#features">COMO FUNCIONA</a>
<a className="hover:text-neutral-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 to-neutral-300 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300" href="#offer">
<div className="relative h-full w-full bg-white/50 rounded-[1px] px-3 sm:px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="hidden sm:inline text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">Quero automatizar</span>
<span className="sm:hidden text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">Automatizar</span>
</div>
</a>
</div>
</nav>

<main className="sm:pt-32 sm:pb-24 sm:px-6 z-10 max-w-6xl mr-auto ml-auto pt-24 pr-4 pb-12 pl-4 relative">
<div className="flex flex-col md:pl-12 sm:pl-8 sm:gap-8 border-neutral-200 border-l pb-20 pl-6 relative gap-x-6 gap-y-6 items-start">

<div aria-hidden="true" className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white border border-neutral-200"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50/80 backdrop-blur-sm border border-neutral-200 rounded-full animate-in animate-in-delay-1 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="inline-flex bg-emerald-500 w-2 h-2 rounded-full relative"></span>
</span>
<span className="text-[10px] uppercase font-medium text-emerald-600 tracking-wide">Mais de 41% das empresas brasileiras já automatizaram</span>
</div>
<h1 className="sm:text-5xl md:text-7xl leading-[1.1] animate-in animate-in-delay-2 text-3xl font-medium text-neutral-900 tracking-tighter">
                Seu concorrente fecha vendas enquanto você <span className="text-neutral-400">atualiza planilhas.</span>
</h1>
<p className="md:text-base leading-relaxed animate-in animate-in-delay-2 text-sm font-light text-neutral-500 max-w-xl">
                Automação e IA personalizadas que liberam seu time para fazer o que realmente importa: crescer e lucrar mais.
            </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto animate-in animate-in-delay-3">

<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 w-full sm:w-auto shadow-sm">
<a className="block hover:bg-neutral-800 transition-colors text-xs font-semibold text-white tracking-wide text-center bg-neutral-900 w-full h-full rounded-[1px] pt-3.5 pr-6 pb-3.5 pl-6" href="#offer">
                        QUERO FATURAR MAIS
                    </a>
</div>
</div>
</div>

<div className="relative z-30 mt-8 sm:mt-12 animate-in animate-in-delay-3">
<div className="bg-gradient-to-b from-neutral-200 to-neutral-300 w-full max-w-4xl rounded-sm mr-auto ml-auto pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative shadow-xl">
<div className="bg-neutral-50 rounded-[1px] overflow-hidden flex flex-col h-full relative group">

<div className="h-8 bg-white border-b border-neutral-200 flex items-center px-3 gap-2 shrink-0 z-20 relative">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400/20 border border-amber-400/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20 border border-emerald-400/50"></div>
</div>
<div className="ml-4 h-5 w-48 bg-neutral-100 rounded-[3px] flex items-center px-2 border border-neutral-200/50">
<iconify-icon className="text-neutral-400 mr-1.5" icon="solar:lock-keyhole-minimalistic-linear" width="8"></iconify-icon>
<span className="text-[9px] text-neutral-400 font-mono tracking-tight">app.axta.ai/workflow/ai-agent-v2</span>
</div>
<div className="ml-auto flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-[3px] border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[9px] font-bold tracking-wide uppercase">Active</span>
</div>
</div>
</div>

<div className="relative w-full h-[400px] bg-[#F4F6F8] overflow-hidden cursor-grab active:cursor-grabbing">

<div className="opacity-40 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px'}}></div>

<div className="absolute inset-0 flex items-center justify-center min-w-[800px] pointer-events-none">
<div className="relative w-[860px] h-[400px]">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{overflow: 'visible'}}>
<defs>
<lineargradient id="gradient-flow" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#cbd5e1"></stop>
<stop offset="50%" stop-color="#10b981"></stop>
<stop offset="100%" stop-color="#cbd5e1"></stop>
</lineargradient>
</defs>
<style>
                            .flow-line {
                                stroke-dasharray: 8, 8;
                                animation: flowAnimation 1.5s linear infinite;
                            }
                            @keyframes flowAnimation {
                                from { stroke-dashoffset: 32; }
                                to { stroke-dashoffset: 0; }
                            }
                            .pulse-ring {
                                animation: pulseRing 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
                            }
                            @keyframes pulseRing {
                                0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
                                70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
                                100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
                            }
                            .node-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); }
                        </style>

<path d="M 210 200 C 250 200, 250 200, 290 200" fill="none" stroke="#cbd5e1" strokeWidth="2"></path>
<path className="flow-line opacity-80" d="M 210 200 C 250 200, 250 200, 290 200" fill="none" stroke="#10b981" strokeWidth="2"></path>

<path d="M 470 200 C 500 200, 500 200, 530 200" fill="none" stroke="#cbd5e1" strokeWidth="2"></path>
<path className="flow-line opacity-80" d="M 470 200 C 500 200, 500 200, 530 200" fill="none" stroke="#10b981" strokeWidth="2" style={{animationDelay: '0.5s'}}></path>

<path d="M 670 185 C 690 185, 690 140, 710 140" fill="none" stroke="#cbd5e1" strokeWidth="2"></path>
<path className="flow-line opacity-80" d="M 670 185 C 690 185, 690 140, 710 140" fill="none" stroke="#10b981" strokeWidth="2" style={{animationDelay: '1s'}}></path>

<path d="M 670 215 C 690 215, 690 260, 710 260" fill="none" stroke="#cbd5e1" strokeWidth="2"></path>
</svg>

<div className="absolute top-[160px] left-[50px] w-[160px] bg-white rounded-lg border border-neutral-200/60 shadow-sm flex flex-col z-10 transition-all duration-300 node-hover pointer-events-auto">
<div className="absolute -right-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-neutral-300 border-2 border-white rounded-full z-20"></div>

<div className="px-3 py-2 border-b border-neutral-100 flex items-center justify-between rounded-t-lg bg-white">
<div className="flex items-center gap-2">
<div className="relative w-7 h-7 rounded bg-orange-50 text-orange-500 flex items-center justify-center border border-orange-100">
<iconify-icon icon="solar:bolt-bold" width="14"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-neutral-700 tracking-tight">Webhook</span>
</div>
<iconify-icon className="text-neutral-300" icon="solar:menu-dots-bold" width="12"></iconify-icon>
</div>
<div className="p-2.5 bg-neutral-50/50 rounded-b-lg">
<div className="text-[9px] text-neutral-500 font-medium">POST /api/leads/new</div>
</div>
</div>

<div className="absolute top-[150px] left-[290px] w-[180px] bg-white rounded-lg border border-emerald-500/30 shadow-[0_4px_20px_-2px_rgba(16,185,129,0.15)] flex flex-col z-20 pulse-ring pointer-events-auto">
<div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full z-20"></div>
<div className="absolute -right-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full z-20"></div>
<div className="px-3.5 py-3 flex items-start gap-3 bg-white rounded-t-lg">
<div className="w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center shadow-lg shrink-0">
<iconify-icon className="" icon="ri:openai-fill" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-[11px] font-bold text-neutral-800 tracking-tight">AI Agent</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<span className="block text-[9px] text-neutral-400 font-medium truncate">Lead Qualification</span>
</div>
</div>
<div className="px-3 pb-3 pt-1 bg-white rounded-b-lg">
<div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden mb-1.5">
<div className="h-full bg-emerald-500 w-full animate-[shimmer_1.5s_infinite] origin-left" style={{background: 'linear-gradient(90deg, #10b981 0%, #34d399 50%, #10b981 100%)', backgroundSize: '200% 100%'}}></div>
</div>
<div className="flex justify-between text-[8px] font-mono text-neutral-400">
<span>gpt-4o</span>
<span>124ms</span>
</div>
</div>
</div>

<div className="absolute top-[165px] left-[530px] w-[140px] bg-white rounded-lg border border-neutral-200/60 shadow-sm flex flex-col z-10 node-hover pointer-events-auto">
<div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-neutral-300 border-2 border-white rounded-full z-20"></div>
<div className="absolute -right-[5px] top-[30%] -translate-y-1/2 w-2.5 h-2.5 bg-neutral-300 border-2 border-white rounded-full z-20"></div>
<div className="absolute -right-[5px] top-[70%] -translate-y-1/2 w-2.5 h-2.5 bg-neutral-300 border-2 border-white rounded-full z-20"></div>
<div className="p-2.5 flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
<iconify-icon icon="solar:branching-paths-down-bold" width="14"></iconify-icon>
</div>
<div>
<span className="block text-[10px] font-bold text-neutral-700">Filter</span>
<span className="block text-[8px] text-neutral-400">Score &gt; 80</span>
</div>
</div>
</div>

<div className="absolute top-[100px] left-[710px] w-[150px] bg-white rounded-lg border border-neutral-200/60 shadow-sm flex flex-col z-10 node-hover pointer-events-auto">
<div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-neutral-300 border-2 border-white rounded-full z-20"></div>
<div className="p-2.5 flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-[#ff5c35] text-white flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon icon="fa6-brands:hubspot" width="14"></iconify-icon>
</div>
<div>
<span className="block text-[10px] font-bold text-neutral-800">Create Deal</span>
<span className="block text-[8px] text-neutral-400 font-medium">Sales Pipeline</span>
</div>
</div>
</div>

<div className="absolute top-[220px] left-[710px] w-[150px] bg-white rounded-lg border border-neutral-200/60 shadow-sm flex flex-col z-10 opacity-75 hover:opacity-100 transition-opacity pointer-events-auto">
<div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-neutral-300 border-2 border-white rounded-full z-20"></div>
<div className="p-2.5 flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 border border-blue-100">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</div>
<div>
<span className="block text-[10px] font-bold text-neutral-800">Nurture</span>
<span className="block text-[8px] text-neutral-400 font-medium">Send Email</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4 flex flex-col gap-2 z-30">
<div className="flex gap-1 p-1 bg-white border border-neutral-200 rounded-md shadow-sm">
<button className="w-7 h-7 flex items-center justify-center rounded-sm hover:bg-neutral-50 text-neutral-500 transition-colors">
<iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded-sm hover:bg-neutral-50 text-neutral-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded-sm hover:bg-neutral-50 text-neutral-500 transition-colors">
<iconify-icon icon="solar:settings-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-4 right-4 z-30 pointer-events-none">
<div className="bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-md shadow-lg p-3 w-48">
<div className="flex items-center justify-between mb-2">
<span className="text-[9px] font-bold text-neutral-700 uppercase tracking-wider">Execution Log</span>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between text-[9px] text-neutral-500">
<span>Webhook received</span>
<span className="font-mono text-[8px]">10:42:01</span>
</div>
<div className="flex items-center justify-between text-[9px] text-neutral-800 font-medium">
<span className="flex items-center gap-1"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="10"></iconify-icon> AI Analysis</span>
<span className="font-mono text-[8px]">124ms</span>
</div>
<div className="flex items-center justify-between text-[9px] text-neutral-500">
<span>Route: High Value</span>
<span className="font-mono text-[8px]">10:42:02</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


<section className="py-16 sm:py-24 border-b border-neutral-200 bg-white relative z-10" id="problem">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                O Cenário Atual
            </h2>
<h3 className="sm:text-3xl md:text-4xl sm:mb-16 text-2xl font-medium text-neutral-900 tracking-tighter mb-10">
                Você está perdendo dinheiro enquanto faz trabalho manual
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="min-h-[400px] flex bg-neutral-50 border-neutral-100 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">

<div className="relative w-80 h-80">

<div className="absolute inset-0 border border-dashed border-neutral-200 rounded-full scale-75 opacity-50"></div>
<div className="absolute inset-0 border border-dashed border-neutral-200 rounded-full scale-100 opacity-30 animate-[spin_60s_linear_infinite]"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
<div className="w-24 h-24 bg-white rounded-full shadow-lg border border-neutral-100 flex flex-col items-center justify-center relative group z-10">

<div className="relative">
<iconify-icon className="text-neutral-400" icon="solar:user-rounded-linear" width="40"></iconify-icon>

<div className="absolute -top-1 -right-2 text-blue-300 animate-pulse">
<iconify-icon icon="solar:drop-bold" width="12"></iconify-icon>
</div>
<div className="absolute top-2 -left-2 text-blue-300 animate-pulse" style={{animationDelay: '0.5s'}}>
<iconify-icon icon="solar:drop-bold" width="10"></iconify-icon>
</div>
</div>

<div className="absolute -bottom-3 px-2 py-0.5 bg-red-50 border border-red-100 rounded-full flex items-center gap-1 shadow-sm">
<div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
<span className="text-[8px] font-bold text-red-500 uppercase tracking-wide">Overloaded</span>
</div>
</div>

<div className="absolute inset-0 bg-red-500/5 rounded-full animate-ping z-0"></div>
</div>

<div className="absolute top-4 left-1/2 transform -translate-x-1/2 animate-[bounce_3s_infinite]">
<div className="px-3 py-2 bg-white rounded-lg shadow-sm border border-red-100 flex items-center gap-2 -rotate-3 hover:scale-105 transition-transform z-20">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:battery-charge-minimalistic-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-semibold text-neutral-600">Energia</span>
<div className="w-12 h-1 bg-neutral-100 rounded-full overflow-hidden mt-0.5">
<div className="h-full w-[15%] bg-red-500"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 -right-4 transform -translate-y-1/2 animate-[bounce_4s_infinite]" style={{animationDelay: '1s'}}>
<div className="px-3 py-2 bg-white rounded-lg shadow-sm border border-orange-100 flex items-center gap-2 rotate-6 hover:scale-105 transition-transform z-20">
<div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:letter-unread-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-semibold text-neutral-600">Inbox</span>
<span className="text-[9px] font-mono text-orange-500 font-medium">99+ unread</span>
</div>
</div>
</div>

<div className="absolute bottom-4 left-1/-delay: 0.5s">
<div className="px-3 py-2 bg-white rounded-lg shadow-sm border border-emerald-100 flex items-center gap-2 -rotate-2 hover:scale-105 transition-transform z-20">
<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:file-text-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-semibold text-neutral-600">Relatório</span>
<span className="text-[9px] text-neutral-400">Pendente</span>
</div>
</div>
</div>

<div className="absolute top-1/2 -left-4 transform -translate-y-1/2 animate-[bounce_4.5s_infinite]" style={{animationDelay: '1.5s'}}>
<div className="px-3 py-2 bg-white rounded-lg shadow-sm border border-neutral-200 flex items-center gap-2 -rotate-6 hover:scale-105 transition-transform z-20">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500">
<iconify-icon icon="solar:wallet-money-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-semibold text-neutral-600">Caixa</span>
<span className="text-[9px] text-red-500 font-mono flex items-center">
<iconify-icon icon="solar:arrow-right-down-linear" width="10"></iconify-icon> Baixo
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="">
<h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-6">
                        O problema não é falta de tempo. <span className="text-neutral-500">É onde você gasta ele.</span>
</h3>
<p className="text-sm font-light text-neutral-500 mb-6 leading-relaxed">
                        Seu time passa 6 horas por dia em tarefas que um sistema resolve em minutos.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" width="16"></iconify-icon>
<span className="text-xs text-neutral-600 font-medium">Follow ups manuais que esfriam leads quentes</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" width="16"></iconify-icon>
<span className="text-xs text-neutral-600 font-medium">Planilhas desatualizadas que geram decisões erradas</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" width="16"></iconify-icon>
<span className="text-xs text-neutral-600 font-medium">Emails repetitivos que drenam energia produtiva</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" width="16"></iconify-icon>
<span className="text-xs text-neutral-600 font-medium">Dados espalhados em 10 sistemas diferentes</span>
</li>
</ul>
<div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-sm">
<p className="text-xs text-emerald-800 leading-relaxed">
<span className="font-semibold">Fato:</span> Empresas que automatizam podem ter ROI de 30% a 200% no primeiro ano. A pergunta é: quanto você vai perder até automatizar?
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200 relative z-10" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="mb-12 sm:mb-16">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4">Soluções</h2>
<h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter">Como funciona a automação sob medida</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-300 h-full">
<div className="flex flex-col p-6 sm:p-8 bg-white h-full z-10 rounded-[1px] relative">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-100 rounded-sm flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2" style={{}}>Venda no piloto automático</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                            Sistema qualifica leads, envia propostas e faz follow ups. Você só aparece para fechar negócio.
                        </p>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-300 h-full">
<div className="flex flex-col p-6 sm:p-8 bg-white h-full z-10 rounded-[1px] relative">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-100 rounded-sm flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2" style={{}}>Decisões baseadas em dados reais</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                            Dashboards atualizados em tempo real. Nada de esperar semanas por relatórios desatualizados.
                        </p>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-300 h-full">
<div className="flex flex-col p-6 sm:p-8 bg-white h-full z-10 rounded-[1px] relative">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-100 rounded-sm flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2" style={{}}>Reduza custos operacionais</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                            Automação reduz custos de marketing em 12,2%. Menos desperdício, mais lucro no bolso.
                        </p>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-300 h-full">
<div className="flex flex-col p-6 sm:p-8 bg-white h-full z-10 rounded-[1px] relative">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-100 rounded-sm flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2" style={{}}>Processos personalizados</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                            Não vendemos pacote pronto. Criamos automação pensada para os seus problemas específicos.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-24 z-10 bg-white border-neutral-200 border-b pt-16 pb-16 relative" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4">Dúvidas</h2>
<h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter">Perguntas frequentes</h3>
</div>
<div className="space-y-2">

<details className="group border border-neutral-200 rounded-sm bg-neutral-50 open:bg-white open:shadow-sm transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between p-4 sm:p-6 text-sm font-medium text-neutral-900">
                        Quanto tempo leva para implementar?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</span>
</summary>
<div className="group-open:animate-fadeIn px-4 sm:px-6 pb-6 text-xs text-neutral-500 font-light leading-relaxed">
                        Depende da complexidade, mas a maioria dos projetos começa a gerar resultado em 2 a 4 semanas.
                    </div>
</details>

<details className="group border border-neutral-200 rounded-sm bg-neutral-50 open:bg-white open:shadow-sm transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between p-4 sm:p-6 text-sm font-medium text-neutral-900">
                        Preciso trocar meus sistemas atuais?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</span>
</summary>
<div className="group-open:animate-fadeIn px-4 sm:px-6 pb-6 text-xs text-neutral-500 font-light leading-relaxed">
                        Não. Integramos com o que você já usa. Nada de recomeçar do zero.
                    </div>
</details>

<details className="group border border-neutral-200 rounded-sm bg-neutral-50 open:bg-white open:shadow-sm transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between p-4 sm:p-6 text-sm font-medium text-neutral-900">
                        E se meu processo for muito específico?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</span>
</summary>
<div className="group-open:animate-fadeIn px-4 sm:px-6 pb-6 text-xs text-neutral-500 font-light leading-relaxed">
                        Melhor ainda. Não vendemos solução genérica. Cada automação é desenhada para o seu problema real.
                    </div>
</details>

<details className="group border border-neutral-200 rounded-sm bg-neutral-50 open:bg-white open:shadow-sm transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between p-4 sm:p-6 text-sm font-medium text-neutral-900">
                        Qual o investimento?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</span>
</summary>
<div className="group-open:animate-fadeIn px-4 sm:px-6 pb-6 text-xs text-neutral-500 font-light leading-relaxed">
                        Varia conforme o projeto. Mas uma coisa é certa: o ROI compensa em poucos meses.
                    </div>
</details>

<details className="group border border-neutral-200 rounded-sm bg-neutral-50 open:bg-white open:shadow-sm transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between p-4 sm:p-6 text-sm font-medium text-neutral-900">
                        Meu time vai perder emprego?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="" height="16" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(23, 23, 23)'}} width="16"></iconify-icon>
</span>
</summary>
<div className="group-open:animate-fadeIn px-4 sm:px-6 pb-6 text-xs text-neutral-500 font-light leading-relaxed">
                        Não. Seu time vai parar de fazer trabalho robótico e começar a fazer trabalho estratégico.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200 relative z-10" id="offer">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">
<div className="bg-white p-6 sm:p-8 md:p-12 rounded-[1px]">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-emerald-50 border border-emerald-100 rounded-sm mb-4 sm:mb-6">
<iconify-icon className="text-emerald-600" icon="solar:unlock-linear" width="12"></iconify-icon>
<span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider">Acesso Gratuito</span>
</div>
<h2 className="text-sm font-medium text-neutral-500 tracking-wide mb-2 uppercase">Pare de perder dinheiro com processos manuais</h2>
<h1 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tight mb-4">Diagnóstico gratuito de automação</h1>
<p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                                Sem compromisso. Sem enrolação. Só resultado. O que você ganha:
                            </p>
<ul className="space-y-2 mb-6 sm:mb-8">
<li className="flex items-center gap-3 text-xs text-neutral-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                    Análise completa dos seus processos atuais
                                </li>
<li className="flex items-center gap-3 text-xs text-neutral-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                    Identificação de onde você está perdendo dinheiro
                                </li>
<li className="flex items-center gap-3 text-xs text-neutral-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                    Proposta personalizada de automação
                                </li>
<li className="flex items-center gap-3 text-xs text-neutral-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                    Projeção de ROI em 12 meses
                                </li>
</ul>
</div>
<div className="w-full md:w-80">
<form className="space-y-4" onsubmit="submitLeadMagnet(event)">
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5" htmlFor="lm-email">Email Corporativo</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-400" id="lm-email" placeholder="nome@empresa.com.br" required="" type="email"/>
</div>
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5" htmlFor="lm-url">Site da Empresa</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-400" id="lm-url" placeholder="https://suaempresa.com.br" required="" type="url"/>
</div>
<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-sm">
<button className="w-full bg-neutral-900 text-white px-4 py-3 text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors rounded-[1px] flex items-center justify-center gap-2" type="submit">
                                        QUERO MEU DIAGNÓSTICO
                                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-8 sm:py-12 border-t border-neutral-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-neutral-900"></div>
<span className="">© 2026 Axta AI. Todos os direitos reservados.</span>
</div>
<div className="text-center md:text-right max-w-xs normal-case tracking-normal">
                Automação e IA sob medida para empresas que querem crescer sem trabalhar dobrado.
            </div>
</div>
</footer>



    </>
  );
}
