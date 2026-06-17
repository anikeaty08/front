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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/cubes.png\')', mixBlendMode: 'overlay'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full max-w-7xl mx-auto px-6">
<div className="w-full h-full border-x border-dashed border-white/5 flex justify-center relative">
<div className="h-full w-px bg-dashed bg-white/5 absolute left-1/4"></div>
<div className="h-full w-px bg-white/5"></div>
<div className="h-full w-px bg-dashed bg-white/5 absolute right-1/4"></div>
</div>
</div>

<div className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
<nav className="glass-nav flex w-full max-w-5xl pointer-events-auto rounded-full pt-3 pr-3 pb-3 pl-6 shadow-2xl items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
<svg className="lucide lucide-layout-dashboard" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-100 font-geist uppercase">NA BANCADA</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="text-white transition-colors hover:text-blue-400 font-geist" href="#features">Funcionalidades</a>
<a className="hover:text-white transition-colors font-geist" href="#workflow">Como Funciona</a>
<a className="hover:text-white transition-colors font-geist" href="#testimonials">Clientes</a>
<a className="hover:text-white transition-colors font-geist" href="#pricing">Planos</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors text-gray-300 font-geist" href="#demo">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Sistema Online
                </a>
<button className="px-5 py-2 rounded-full border border-white/20 bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] font-geist">
                    Começar Agora
                </button>
<button className="lg:hidden text-white flex items-center ml-2">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</nav>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 lg:mt-32 xl:ml-auto xl:mr-auto max-w-7xl z-10 rounded-[40px] mt-32 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative">
<div className="spotlight-inner overflow-hidden flex flex-col min-h-[800px] z-10 rounded-[40px] justify-center bg-[#080a0f]">

<div className="absolute top-8 right-8 z-20 pointer-events-none">
<span className="font-mono text-sm font-bold text-white/10 tracking-widest font-geist">V. 2.4.0</span>
</div>

<div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

<main className="z-10 container lg:px-12 grid lg:grid-cols-2 gap-16 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl relative" style={{}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 font-geist">
<svg className="lucide lucide-zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        Automação Inteligente
                    </div>
<h1 className="lg:text-7xl leading-[1.05] text-5xl mb-8 tracking-tighter text-white font-geist" style={{}}>
                        Gestão Completa para <span className="text-blue-500 font-geist" style={{}}>Restaurantes</span>
</h1>
<p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg font-light font-geist" style={{}}>
                        Controle total, desde o pedido na mesa até o fechamento do caixa. O sistema PDV, QR Code e delivery que moderniza o seu negócio e aumenta o lucro.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4">

<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none text-sm font-bold text-white tracking-widest font-geist rounded-full py-4 px-10 relative items-center justify-center">
<style>
                                @keyframes beam-spin { to { transform: rotate(360deg); } }
                                @keyframes dots-move { 
                                    0% { background-position: 0 0; } 
                                    100% { background-position: 24px 24px; } 
                                }
                            </style>
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#0f1218]"></div>
</div>
<div className="-z-10 overflow-hidden bg-[#0f1218] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/30"></div>
</div>
<span className="relative z-10 text-white/90 transition-colors group-hover:text-white font-geist">Falar com Consultor</span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>

<button className="hover:bg-white/5 transition-all flex text-base font-medium text-gray-300 bg-white/5 rounded-full py-4 px-8 items-center justify-center font-geist relative overflow-hidden group/btn" style={{boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 20px rgba(0, 0, 0, 0.5)', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', '--border-radius-before': '9999px'}}>
<span className="text-base font-medium text-gray-200 tracking-tight relative z-10 font-geist">
                                Ver Demonstração
                            </span>
<svg className="w-4 h-4 ml-2 opacity-70 relative z-10 group-hover/btn:scale-110 transition-transform" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<style>
                                [style*="--border-gradient"]::before {
                                    content: "";
                                    position: absolute;
                                    inset: 0;
                                    padding: 1px;
                                    border-radius: var(--border-radius-before, inherit);
                                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                                    -webkit-mask-composite: xor;
                                    mask-composite: exclude;
                                    background: var(--border-gradient);
                                    pointer-events: none;
                                }
                            </style>
</button>
</div>

<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#080a0f] flex items-center justify-center text-[10px] text-white font-bold">PDV</div>
<div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#080a0f] flex items-center justify-center text-[10px] text-white font-bold">QR</div>
<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-[#080a0f] flex items-center justify-center text-[10px] text-white font-bold">APP</div>
</div>
<div className="text-sm text-gray-400">
<p className="text-white font-medium font-geist">Plataforma Tudo-em-Um</p>
<div className="flex items-center gap-1 text-blue-400 text-xs">
<span>Disponível em iOS &amp; Android</span>
</div>
</div>
</div>
</div>

<div className="relative w-full flex items-center justify-center lg:justify-end">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px] gap-x-4 gap-y-4">

<div className="sm:row-span-2 flex flex-col overflow-hidden group hover:border-blue-500/30 transition-all duration-500 bg-[#13161c] rounded-[32px] p-6 relative shadow-xl border border-white/5">
<div className="flex items-center justify-between mb-6">
<div className="inline-flex text-xs font-bold text-blue-400 font-geist bg-blue-500/10 border-blue-500/20 border rounded-lg py-1.5 px-3">
                                    Ao Vivo
                                </div>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
</div>
<div className="flex flex-col gap-4 mt-auto mb-auto">
<div className="text-gray-400 text-sm font-geist">Vendas Hoje</div>
<div className="text-4xl font-bold text-white font-geist tracking-tight">R$ 5.420,50</div>
<div className="w-full bg-white/5 rounded-full h-1.5 mt-2">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
<div className="flex justify-between text-xs text-gray-500 font-mono mt-1">
<span>Meta: R$ 7.000</span>
<span className="text-green-400">+12% vs Ontem</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-shopping-cart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-white font-geist">Pedidos Ativos</div>
<div className="text-xs text-gray-500 font-geist">Cozinha em operação</div>
</div>
<div className="ml-auto text-xl font-bold text-white">12</div>
</div>
</div>
</div>

<div className="flex flex-col overflow-hidden bg-[#13161c] rounded-[32px] p-6 relative shadow-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-gray-200 font-geist">Mesas</h3>
<svg className="text-gray-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"></path></svg>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg h-12 flex items-center justify-center text-xs font-bold">01</div>
<div className="bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg h-12 flex items-center justify-center text-xs font-bold">02</div>
<div className="bg-white/5 text-gray-500 border border-white/10 rounded-lg h-12 flex items-center justify-center text-xs font-bold">03</div>
<div className="bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg h-12 flex items-center justify-center text-xs font-bold">04</div>
<div className="bg-white/5 text-gray-500 border border-white/10 rounded-lg h-12 flex items-center justify-center text-xs font-bold">05</div>
<div className="bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg h-12 flex items-center justify-center text-xs font-bold">06</div>
</div>
</div>

<div className="flex flex-col overflow-hidden bg-[#13161c] rounded-[32px] p-6 relative shadow-xl border border-white/5 items-center justify-center group hover:border-blue-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
<div className="relative z-10 text-center">
<div className="w-12 h-12 rounded-2xl bg-white text-black mx-auto mb-3 flex items-center justify-center">
<svg className="lucide lucide-qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<h3 className="text-sm font-bold text-white mb-1 font-geist">Cardápio Digital</h3>
<p className="text-xs text-gray-500 font-geist">Scan &amp; Order</p>
</div>
</div>
</div>
</div>
</main>

<div className="border-t border-white/5 bg-[#06080a] mt-auto">
<div className="overflow-hidden relative w-full py-8" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="ticker-track flex gap-12 items-center">
<div className="flex gap-12 shrink-0 items-center opacity-40 hover:opacity-100 transition-all duration-500 text-blue-200/60">
<span className="text-lg font-bold tracking-tight mx-6 font-geist flex items-center gap-2"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> PDV Frente de Caixa</span>
<span className="text-lg font-bold tracking-tight mx-6 font-geist flex items-center gap-2"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> Cardápio QR Code</span>
<span className="text-lg font-bold tracking-tight mx-6 font-geist flex items-center gap-2"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> Gestão de Estoque</span>
<span className="text-lg font-bold tracking-tight mx-6 font-geist flex items-center gap-2"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> KDS Cozinha</span>
<span className="text-lg font-bold tracking-tight mx-6 font-geist flex items-center gap-2"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> Delivery Integrado</span>
</div>

<div className="flex gap-12 shrink-0 items-center opacity-40 hover:opacity-100 transition-all duration-500 text-blue-200/60">
<span className="text-lg font-bold tracking-tight mx-6 font-geist flex items-center gap-2"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> PDV Frente de Caixa</span>
<span className="text-lg font-bold tracking-tight mx-6 font-geist flex items-center gap-2"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> Cardápio QR Code</span>
<span className="text-lg font-bold tracking-tight mx-6 font-geist flex items-center gap-2"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> Gestão de Estoque</span>
<span className="text-lg font-bold tracking-tight mx-6 font-geist flex items-center gap-2"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> KDS Cozinha</span>
<span className="text-lg font-bold tracking-tight mx-6 font-geist flex items-center gap-2"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> Delivery Integrado</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 lg:mt-4 xl:ml-auto xl:mr-auto max-w-7xl z-10 rounded-[40px] pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" id="features">
<div className="spotlight-inner rounded-[40px] relative overflow-hidden bg-[#090c10] flex flex-col p-8 sm:p-16">

<div className="text-center mb-16 relative z-10">
<h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-white font-geist mb-6">
                    Funcionalidades Completas
                </h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto font-light font-geist">
                    Tudo o que precisa para gerir o seu restaurante de forma eficiente e moderna.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

<div className="group relative p-8 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist">Gestão de Pedidos</h3>
<p className="text-sm text-gray-400 leading-relaxed font-geist">
                        Sistema completo de pedidos com QR Code. Clientes pedem diretamente pelo telemóvel, sem filas nem erros.
                    </p>
</div>

<div className="group relative p-8 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist">Pagamentos e PDV</h3>
<p className="text-sm text-gray-400 leading-relaxed font-geist">
                        Terminal de vendas integrado com múltiplas formas de pagamento. Controle total das transações.
                    </p>
</div>

<div className="group relative p-8 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist">Relatórios Inteligentes</h3>
<p className="text-sm text-gray-400 leading-relaxed font-geist">
                        Análises detalhadas de vendas, produtos mais pedidos, horários de pico e muito mais.
                    </p>
</div>

<div className="group relative p-8 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist">QR Code Menu &amp; Delivery</h3>
<p className="text-sm text-gray-400 leading-relaxed font-geist">
                        Cardápio digital moderno com fotos, descrições e opções de personalização para cada item.
                    </p>
</div>
</div>
</div>
</div>

<div className="sm:mx-6 spotlight-card group xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 mr-3 ml-3 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" id="workflow">
<div className="spotlight-inner sm:p-12 lg:p-16 overflow-hidden bg-[#090c10] rounded-[40px] pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="absolute top-8 right-8 z-20 pointer-events-none opacity-50">
<span className="font-mono text-sm font-bold text-white/10 tracking-widest font-geist">FLOW</span>
</div>
<div className="grid lg:grid-cols-2 lg:gap-24 z-10 relative gap-x-12 gap-y-12 items-center">

<div className="order-2 lg:order-1" style={{}}>
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-white mb-6 leading-[1.1] font-geist" style={{}}>
                    Como funciona
                    <span className="text-blue-500 font-geist" style={{}}>Na Bancada</span>
</h2>
<p className="text-gray-400 text-lg sm:text-xl font-light mb-8 leading-relaxed max-w-lg font-geist" style={{}}>
                    Simplificamos a operação do seu restaurante com um fluxo de dados contínuo entre o salão, a cozinha e o caixa.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">1</div>
<div>
<h4 className="text-white font-medium font-geist">Pedido Inteligente</h4>
<p className="text-sm text-gray-500 mt-1 font-geist">O cliente escaneia o QR Code ou o garçom lança no app.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">2</div>
<div>
<h4 className="text-white font-medium font-geist">Produção Imediata</h4>
<p className="text-sm text-gray-500 mt-1 font-geist">O pedido aparece instantaneamente nas telas da cozinha (KDS).</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">3</div>
<div>
<h4 className="text-white font-medium font-geist">Gestão &amp; Lucro</h4>
<p className="text-sm text-gray-500 mt-1 font-geist">Relatórios de vendas são atualizados em tempo real.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative w-full flex flex-col items-center select-none pointer-events-none">

<div className="w-full flex justify-between text-xs uppercase tracking-widest text-gray-600 font-bold font-mono mb-2 px-4 opacity-50 max-w-[400px]">
<span className="font-geist">Entrada</span>
<span className="font-geist">Processamento</span>
</div>

<div className="relative z-10 flex justify-between w-full max-w-[400px] mb-8 gap-2">

<div className="w-10 h-10 rounded-xl bg-[#151515] border border-white/10 flex items-center justify-center text-blue-500 shadow-lg">
<svg className="lucide lucide-smartphone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>

<div className="w-10 h-10 rounded-xl bg-[#151515] border border-white/10 flex items-center justify-center text-purple-400 shadow-lg">
<svg className="lucide lucide-tablet" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>
</div>

<div className="w-10 h-10 rounded-xl bg-[#151515] border border-blue-500/30 flex items-center justify-center text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] relative scale-110 transition-transform">
<svg className="lucide lucide-qr-code" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
</div>

<div className="relative w-full max-w-[400px] flex flex-col items-center">

<div className="absolute inset-0 z-0 pointer-events-none">
<svg className="w-full h-full" fill="none" viewbox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">

<path d="M65 0 V40 C65 60 200 60 200 80 V100" stroke="white" stroke-dasharray="4 4" stroke-opacity="0.05" strokeWidth="2"></path>
<path d="M155 0 V40 C155 60 200 60 200 80 V100" stroke="white" stroke-dasharray="4 4" stroke-opacity="0.05" strokeWidth="2"></path>

<path className="opacity-30" d="M335 0 V40 C335 60 200 60 200 80 V100" stroke="url(#paint0_linear)" stroke-dasharray="4 4" strokeWidth="2"></path>

<path className="animate-[dash_3s_linear_infinite]" d="M335 0 V40 C335 60 200 60 200 80 V100" stroke="#3b82f6" stroke-dasharray="10 100" strokeWidth="2"></path>

<path d="M200 180 V220" stroke="white" stroke-opacity="0.1" strokeWidth="2"></path>
<style className="font-geist">
                                @keyframes dash { to { stroke-dashoffset: -110; } }
                            </style>
</svg>
</div>

<div className="relative z-10 mt-[80px] w-64 bg-[#1E1E1E] rounded-2xl p-4 border border-blue-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white">
<svg className="lucide lucide-server" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div>
<div className="text-xs font-bold text-white uppercase tracking-wider font-geist">Na Bancada Cloud</div>
<div className="text-sm text-gray-300 font-geist">Processando</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
</div>

<div className="bg-[#111] rounded-lg p-3 font-mono text-[10px] text-gray-500 leading-relaxed border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-1">
<span className="text-[8px] text-blue-400 bg-blue-400/10 px-1 rounded font-geist">JSON</span>
</div>
<p className="font-geist"><span className="text-purple-400 font-geist">"order_id"</span>: <span className="text-green-400 font-geist">"#4582"</span>,</p>
<p className="font-geist"><span className="text-purple-400 font-geist">"status"</span>: <span className="text-green-400 font-geist">"confirmed"</span>,</p>
<p className="font-geist"><span className="text-purple-400 font-geist">"kitchen"</span>: <span className="text-blue-400 font-geist">true</span></p>
</div>
</div>

<div className="w-1 h-8 bg-gradient-to-b from-blue-500/50 to-white/10 w-px my-0"></div>

<div className="relative z-10 w-64 bg-[#1E1E1E] rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-700 flex items-center justify-center text-white">
<svg className="lucide lucide-trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<div>
<div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-geist">Relatórios</div>
<div className="text-sm text-gray-200 font-geist">Venda Computada</div>
</div>
<div className="ml-auto opacity-50">
<svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mx-6 spotlight-card group xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 mr-3 ml-3 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" id="testimonials">
<div className="spotlight-inner sm:p-16 lg:p-24 overflow-hidden flex flex-col bg-[#080a0f] rounded-[40px] pt-8 pr-8 pb-8 pl-8 relative items-center">
<div className="absolute top-8 right-8 z-20 pointer-events-none opacity-30">
<span className="font-mono text-sm font-semibold text-white tracking-widest font-geist">SOCIAL</span>
</div>

<div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
<div className="inline-flex gap-2 uppercase text-xs font-bold text-blue-400 tracking-widest font-geist bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  Quem usa aprova
</div>
<h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-white mb-8 leading-[1.05] font-geist" style={{}}>
      Tecnologia que impulsiona
      <span className="text-gray-600 font-geist" style={{}}>Resultados.</span>
</h2>
</div>

<div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="p-8 rounded-[32px] bg-[#13161c] border border-white/5 hover:border-blue-500/20 transition-all duration-500 flex flex-col justify-between min-h-[240px] group/card hover:-translate-y-1 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 transition-all duration-500 group-hover/card:opacity-50 text-blue-500">
<svg className="lucide lucide-quote" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z"></path></svg>
</div>
<p className="text-lg text-gray-300 font-light leading-relaxed tracking-tight font-geist">"O <span className="text-white font-medium font-geist">Na Bancada</span> transformou a agilidade do nosso atendimento. O QR Code na mesa reduziu os erros em 100%."</p>
<div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-xs font-bold text-white font-geist">R
        </div>
<div>
<div className="text-sm font-semibold text-white font-geist">Ricardo S.</div>
<div className="text-xs text-gray-500 font-geist">Hamburgueria Central</div>
</div>
</div>
</div>

<div className="p-8 rounded-[32px] bg-[#13161c] border border-white/5 hover:border-blue-500/20 transition-all duration-500 flex flex-col justify-between min-h-[240px] group/card hover:-translate-y-1 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 transition-all duration-500 group-hover/card:opacity-50 text-blue-500">
<svg className="lucide lucide-quote" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z"></path></svg>
</div>
<p className="text-lg text-gray-300 font-light leading-relaxed tracking-tight font-geist">"Os relatórios me dão uma visão clara do lucro. Sei exatamente quais pratos vendem mais e controlo o estoque com facilidade."</p>
<div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-xs font-bold text-white font-geist">A
        </div>
<div className="">
<div className="text-sm font-semibold text-white font-geist">Ana P.</div>
<div className="text-xs text-gray-500 font-geist">Bistrô Verde</div>
</div>
</div>
</div>

<div className="p-8 rounded-[32px] bg-[#13161c] border border-white/5 hover:border-blue-500/20 transition-all duration-500 flex flex-col justify-between min-h-[240px] group/card hover:-translate-y-1 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 transition-all duration-500 group-hover/card:opacity-50 text-blue-500">
<svg className="lucide lucide-quote" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z"></path></svg>
</div>
<p className="text-lg text-gray-300 font-light leading-relaxed tracking-tight font-geist">"Excelente suporte e sistema muito estável. O módulo de delivery integrado nos poupou de pagar altas taxas de marketplace."</p>
<div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-xs font-bold text-white font-geist">C
        </div>
<div>
<div className="text-sm font-semibold text-white font-geist">Carlos M.</div>
<div className="text-xs text-gray-500 font-geist">Pizzaria Bella</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mx-6 spotlight-card group xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 mr-3 ml-3 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" id="contact">
<div className="spotlight-inner overflow-hidden flex flex-col bg-[#080a0f] rounded-[40px] relative">

<div className="relative z-10 px-8 py-24 sm:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="mb-8 p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] transform group-hover:-translate-y-2 transition-transform duration-700">
<svg className="lucide lucide-rocket" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s.38 2.38-1 4z"></path><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4s-2.38-.38-4 1z"></path></svg>
</div>
<h2 className="text-4xl sm:text-6xl tracking-tighter text-white mb-8 leading-[1.05] font-geist" style={{}}>
            Modernize o seu
            <span className="text-gray-500 font-geist" style={{}}>Restaurante Hoje.</span>
</h2>
<p className="text-gray-400 text-lg sm:text-xl font-light mb-10 leading-relaxed max-w-2xl font-geist">
            Não perca mais tempo com processos manuais. Junte-se a centenas de restaurantes que crescem com Na Bancada.
        </p>
<button className="group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-geist font-medium text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<span className="mr-2 relative z-10 font-geist">Solicitar Orçamento</span>
<svg aria-hidden="true" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</button>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

<div className="relative z-10 bg-[#060807]/50 px-8 sm:px-12 py-16 lg:py-20 backdrop-blur-sm" id="footer">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

<div className="lg:col-span-4 flex flex-col items-start">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white">
<svg className="lucide lucide-layout-grid" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white font-geist uppercase">NA BANCADA</span>
</div>
<h3 className="text-2xl tracking-tight text-white mb-8 max-w-xs leading-tight font-geist" style={{}}>
                    O sistema operacional do seu restaurante.
                </h3>
<div className="flex flex-col gap-2 text-sm text-gray-400 font-geist">
<p className="flex items-center gap-2"><svg className="lucide lucide-mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> contato@nabancada.com.br</p>
<p className="flex items-center gap-2"><svg className="lucide lucide-phone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> +55 11 9999-9999</p>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:pl-12">

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white mb-2 font-geist">Produto</h4>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">PDV</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Cardápio Digital</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">KDS</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Integrações</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white mb-2 font-geist">Empresa</h4>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Sobre Nós</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Carreiras</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Blog</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white mb-2 font-geist">Suporte</h4>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Central de Ajuda</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Status</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Termos de Uso</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white mb-2 font-geist">Social</h4>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Instagram</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">LinkedIn</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">YouTube</a>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
<p className="text-xs text-gray-600 font-geist">
                © 2024 NA BANCADA. Todos os direitos reservados.
            </p>
<div className="flex items-center gap-6">
<span className="text-xs text-gray-600 font-geist">Feito com tecnologia de ponta.</span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
