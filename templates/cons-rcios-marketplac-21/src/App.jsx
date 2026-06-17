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



      // Initialize Icons
      lucide.createIcons();

      // Simple SPA Router
      function switchView(viewId) {
          // Hide all sections
          document.querySelectorAll('.view-section').forEach(el => {
              el.classList.remove('active');
          });

          // Show target section
          const target = document.getElementById('view-' + viewId);
          if (target) {
              target.classList.add('active');
              window.scrollTo(0, 0);
          }
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
      

<nav className="sticky bg-white/80 z-50 border-neutral-200 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex gap-3 cursor-pointer group gap-x-3 gap-y-3 items-center" onclick="switchView('home')">
<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-full h-full text-[#ff6b61]" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M10 25C35 25 65 75 90 75" stroke="currentColor" strokeWidth="20"></path>
<path d="M10 75C35 75 65 25 90 25" stroke="currentColor" strokeWidth="20"></path>
</svg>
</div>
<span className="text-sm font-semibold tracking-tight group-hover:text-black transition-colors text-neutral-900" style={{}}>
              HUB NACIONAL
            </span>
</div>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-neutral-900 hover:text-neutral-600" onclick="switchView('home')" style={{}}>
              Comprar
            </button>
<button className="text-sm font-medium transition-colors text-neutral-500 hover:text-neutral-900" onclick="switchView('sell')" style={{}}>
              Vender
            </button>
<button className="text-sm font-medium transition-colors text-neutral-500 hover:text-neutral-900" onclick="switchView('how-it-works')" style={{}}>
              Como Funciona
            </button>
<button className="text-sm font-medium transition-colors text-neutral-500 hover:text-neutral-900" onclick="switchView('partners')" style={{}}>
              Parceiros
            </button>
</div>

<div className="flex items-center gap-4">
<button className="p-2 transition-colors text-neutral-500 hover:text-neutral-900" style={{}}>
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</button>
<button className="p-2 transition-colors relative text-neutral-500 hover:text-neutral-900" style={{}}>
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<div className="h-4 w-px mx-1 hidden md:block bg-neutral-200" style={{}}></div>
<button className="hidden md:block text-sm font-medium text-neutral-900 hover:text-neutral-700" onclick="switchView('login')" style={{}}>
              Entrar
            </button>
<button className="hidden items-center justify-center transition-colors hover:bg-rose-500 md:flex text-xs font-semibold bg-[#ff6b61] rounded-lg px-4 py-2 shadow-sm hover:shadow-md text-white" onclick="switchView('login')">
              Criar conta
            </button>
<button className="md:hidden p-2 text-neutral-900" style={{}}>
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</div>
</nav>

<div className="view-section active" id="view-home">

<div className="bg-neutral-50/50 border-neutral-200 border-b">
<div className="sm:px-6 lg:px-8 flex flex-col md:flex-row max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 gap-x-8 gap-y-8 items-center justify-between">
<div className="max-w-xl">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-neutral-900" style={{}}>
              O marketplace de consórcios mais seguro do Brasil.
            </h1>
<p className="text-sm mb-6 leading-relaxed text-neutral-500" style={{}}>
              Encontre cartas contempladas e cotas em andamento com as melhores
              taxas do mercado. Transações verificadas por IA.
            </p>
<div className="flex flex-wrap gap-2">
<button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-xs font-medium transition-colors shadow-sm bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50" style={{}}>
<svg className="lucide lucide-home w-3 h-3 text-neutral-400" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
                Imóveis
              </button>
<button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-xs font-medium transition-colors shadow-sm bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50" style={{}}>
<svg className="lucide lucide-car w-3 h-3 text-neutral-400" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
<circle cx="7" cy="17" r="2"></circle>
<path d="M9 17h6"></path>
<circle cx="17" cy="17" r="2"></circle>
</svg>
                Veículos
              </button>
<button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-xs font-medium transition-colors shadow-sm bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50" style={{}}>
<svg className="lucide lucide-truck w-3 h-3 text-neutral-400" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
<path d="M15 18H9"></path>
<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</svg>
                Pesados
              </button>
</div>
</div>
<div className="hidden md:flex gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold bg-blue-600/20 text-blue-600">
                P
              </div>
<span className="text-xs font-bold text-neutral-400" style={{}}>
                PORTO
              </span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold bg-red-600/20 text-red-600">
                B
              </div>
<span className="text-xs font-bold text-neutral-400" style={{}}>
                BRADESCO
              </span>
</div>
</div>
</div>
</div>

<div className="border-b bg-neutral-900 border-neutral-800" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-2 text-[11px] overflow-x-auto scrollbar-hide text-neutral-400" style={{}}>
<div className="flex items-center gap-6 whitespace-nowrap">
<span className="flex items-center gap-1.5 font-medium text-white">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" style={{}}></span>
</span>
                Mercado ao vivo
              </span>
<span className="">
                Volume 24h:
                <span className="text-neutral-200" style={{}}>R$ 12.4M</span>
</span>
<span className="">
                Cotas ativas:
                <span className="text-neutral-200" style={{}}>2.481</span>
</span>
<span>
                Desconto médio:
                <span className="text-green-400" style={{}}>18.5%</span>
</span>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col lg:flex-row gap-8">

<aside className="hidden lg:block w-64 flex-shrink-0 space-y-8">
<div className="">
<h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-neutral-900" style={{}}>
                Tipo de Bem
              </h3>
<div className="space-y-2.5">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-neutral-900 transition-colors text-neutral-600" style={{}}>
                    Todos
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-neutral-900 transition-colors text-neutral-600" style={{}}>
                    Imóveis
                  </span>
</label>
</div>
</div>
<div className="">
<h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-neutral-900" style={{}}>
                Status
              </h3>
<div className="space-y-2.5">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-neutral-900 transition-colors text-neutral-600" style={{}}>
                    Contempladas
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-neutral-900 transition-colors text-neutral-600" style={{}}>
                    Não Contempladas
                  </span>
</label>
</div>
</div>
<div className="">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900" style={{}}>
                  Valor do Crédito
                </h3>
</div>
<input className="w-full mb-3 accent-neutral-900" max="1000000" min="0" step="10000" style={{}} type="range"/>
<div className="flex items-center justify-between text-xs font-medium text-neutral-500" style={{}}>
<span>R$ 50k</span>
<span>R$ 1M+</span>
</div>
</div>
</aside>

<main className="flex-1">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<p className="text-sm text-neutral-500 font-medium" style={{}}>
                Exibindo
                <span className="font-semibold text-neutral-900" style={{}}>12</span>
                de 980 ofertas
              </p>
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-xs font-medium transition-colors bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50" style={{}}>
                  Ordenar por: Mais recentes
                  <svg className="lucide lucide-chevron-down w-3 h-3 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="cursor-pointer group border rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col bg-white border-neutral-200 hover:border-neutral-300 ring-1 ring-red-100" onclick="switchView('auction-details')">
<div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse"></div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center border text-[10px] font-bold tracking-tighter bg-red-50 border-red-100 text-red-600">
<svg className="lucide lucide-gavel" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"></path>
<path d="m16 16 6-6"></path>
<path d="m8 8 6-6"></path>
<path d="m9 7 8 8"></path>
<path d="m21 11-8-8"></path>
</svg>
</div>
<div>
<h3 className="text-sm font-semibold leading-tight text-neutral-900">
                          Leilão de Oportunidade
                        </h3>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<p className="text-xs text-red-600 font-bold uppercase tracking-wide">
                            Ao Vivo
                          </p>
</div>
</div>
</div>
<div className="text-right">
<span className="block text-[10px] uppercase text-neutral-400 font-medium">
                        Encerra em
                      </span>
<span className="font-mono text-sm font-bold text-neutral-900">
                        02:45:12
                      </span>
</div>
</div>
<div className="bg-neutral-50 rounded-lg p-3 border border-neutral-100 mb-4">
<div className="flex justify-between items-end mb-1">
<span className="text-xs text-neutral-500 font-medium">
                        Lance Atual
                      </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                        R$ 92.500
                      </span>
</div>
<div className="w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
<div className="flex justify-between items-center mt-1.5">
<span className="text-[10px] text-neutral-400">
                        32 lances
                      </span>
<span className="text-[10px] font-medium text-red-600">
                        Reserva atingida
                      </span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">
                        Crédito
                      </p>
<p className="text-sm font-semibold tracking-tight text-neutral-900">
                        R$ 200.000
                      </p>
</div>
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">
                        Desconto
                      </p>
<p className="text-sm font-semibold tracking-tight text-green-600">
                        34% OFF
                      </p>
</div>
</div>
<div className="mt-auto space-y-3">
<button className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow text-white bg-red-600 hover:bg-red-700">
                      Participar Agora
                      <svg className="lucide lucide-gavel" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"></path>
<path d="m16 16 6-6"></path>
<path d="m8 8 6-6"></path>
<path d="m9 7 8 8"></path>
<path d="m21 11-8-8"></path>
</svg>
</button>
</div>
</div>
</article>

<article className="cursor-pointer group border rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col bg-white border-neutral-200 hover:border-neutral-300" onclick="switchView('details')" style={{}}>
<div className="absolute top-0 left-0 w-full h-1 bg-[#ff6b61]"></div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center border text-[10px] font-bold tracking-tighter bg-neutral-50 border-neutral-100 text-neutral-900" style={{}}>
                        PS
                      </div>
<div className="">
<h3 className="text-sm font-semibold leading-tight text-neutral-900" style={{}}>
                          Porto Seguro
                        </h3>
<p className="text-xs text-neutral-500 font-medium mt-0.5" style={{}}>
                          Imóvel Residencial
                        </p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-semibold border tracking-tight text-[#bf4d45] bg-rose-50 border-rose-100">
                      Contemplada
                    </span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400" style={{}}>
                        Crédito
                      </p>
<p className="text-lg font-semibold tracking-tight text-neutral-900" style={{}}>
                        R$ 450.000
                      </p>
</div>
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400" style={{}}>
                        Entrada
                      </p>
<p className="text-lg font-semibold tracking-tight text-neutral-900" style={{}}>
                        R$ 125.000
                      </p>
</div>
</div>
<div className="mt-auto pt-4 border-t space-y-3 border-neutral-50" style={{}}>
<div className="flex items-center justify-between text-xs text-neutral-500" style={{}}>
<span className="font-medium">Parcelas restantes:</span>
<span className="font-semibold text-neutral-900" style={{}}>
                        148x R$ 2.100
                      </span>
</div>
<button className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow text-white bg-neutral-900 hover:bg-neutral-800" style={{}}>
                      Ver Oferta
                      <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</article>

<article className="cursor-pointer group border rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col bg-white border-neutral-200 hover:border-neutral-300" onclick="switchView('details')" style={{}}>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center border text-[10px] font-bold tracking-tighter bg-neutral-50 border-neutral-100 text-neutral-900" style={{}}>
                        BB
                      </div>
<div className="">
<h3 className="text-sm font-semibold leading-tight text-neutral-900" style={{}}>
                          Banco do Brasil
                        </h3>
<p className="text-xs text-neutral-500 font-medium mt-0.5" style={{}}>
                          Automóvel Premium
                        </p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-semibold border tracking-tight bg-neutral-50 text-neutral-600 border-neutral-200" style={{}}>
                      Em andamento
                    </span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400" style={{}}>
                        Crédito
                      </p>
<p className="text-lg font-semibold tracking-tight text-neutral-900" style={{}}>
                        R$ 180.000
                      </p>
</div>
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400" style={{}}>
                        Ágio
                      </p>
<p className="text-lg font-semibold tracking-tight text-neutral-900" style={{}}>
                        R$ 15.000
                      </p>
</div>
</div>
<div className="mt-auto pt-4 border-t space-y-3 border-neutral-50" style={{}}>
<div className="flex items-center justify-between text-xs text-neutral-500" style={{}}>
<span className="font-medium">Previsão:</span>
<span className="flex items-center gap-1 font-semibold text-purple-600">
<svg className="lucide lucide-zap w-3 h-3 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
                        Alta
                      </span>
</div>
<button className="w-full py-2.5 px-4 border text-xs font-semibold rounded-lg transition-colors bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-300" style={{}}>
                      Ver Detalhes
                    </button>
</div>
</div>
</article>
<article className="group relative cursor-pointer overflow-hidden rounded-xl border flex flex-col items-center justify-center p-6 text-center hover:shadow-md transition-all border-neutral-200 bg-neutral-50 hover:border-neutral-300" onclick="switchView('sell')" style={{}}>
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-4 shadow-sm bg-white border-neutral-200" style={{}}>
<svg className="lucide lucide-banknote w-6 h-6 text-[#ff6b61]" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<circle cx="12" cy="12" r="2"></circle>
<path d="M6 12h.01M18 12h.01"></path>
</svg>
</div>
<h3 className="text-sm font-semibold mb-2 text-neutral-900" style={{}}>
                    Quer vender sua cota?
                  </h3>
<p className="text-xs text-neutral-500 mb-6 max-w-[200px]" style={{}}>
                    Avaliação gratuita com IA.
                  </p>
<button className="w-full py-2 px-4 text-xs font-semibold rounded-lg border transition-all shadow-sm border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50" style={{}}>
                    Avaliar agora
                  </button>
</div>
</article>
</div>
<div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">
                Mostrando
                <span className="font-semibold text-neutral-900">1</span>
                a
                <span className="font-semibold text-neutral-900">12</span>
                de
                <span className="font-semibold text-neutral-900">980</span>
                resultados
              </p>
<nav className="flex items-center gap-2">
<button className="flex items-center gap-1 px-3 py-2 text-xs font-medium border rounded-lg transition-colors bg-white border-neutral-200 text-neutral-400 cursor-not-allowed" disabled="">
<svg className="lucide lucide-chevron-left" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
                  Anterior
                </button>
<div className="hidden sm:flex gap-1">
<button className="px-3 py-2 text-xs font-medium border rounded-lg transition-colors bg-neutral-900 border-neutral-900 text-white">
                    1
                  </button>
<button className="px-3 py-2 text-xs font-medium border rounded-lg transition-colors bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900">
                    2
                  </button>
<button className="px-3 py-2 text-xs font-medium border rounded-lg transition-colors bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900">
                    3
                  </button>
<span className="px-2 py-2 text-xs text-neutral-400">...</span>
<button className="px-3 py-2 text-xs font-medium border rounded-lg transition-colors bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900">
                    82
                  </button>
</div>
<button className="flex items-center gap-1 px-3 py-2 text-xs font-medium border rounded-lg transition-colors bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900">
                  Próxima
                  <svg className="lucide lucide-chevron-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</nav>
</div>
</main>
</div>
</div>
</div>

<div className="view-section" id="view-details">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="flex items-center gap-2 text-xs text-neutral-500 mb-6" style={{}}>
<span className="cursor-pointer hover:text-neutral-900" onclick="switchView('home')" style={{}}>
            Home
          </span>
<svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
<span className="cursor-pointer hover:text-neutral-900" style={{}}>
            Imóveis
          </span>
<svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
<span className="font-medium text-neutral-900" style={{}}>
            Porto Seguro #9821
          </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">

<div className="border rounded-xl p-6 relative overflow-hidden bg-white border-neutral-200" style={{}}>
<div className="absolute top-0 left-0 w-1 h-full bg-[#ff6b61]"></div>
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl flex items-center justify-center border text-lg font-bold tracking-tighter bg-neutral-50 border-neutral-100 text-neutral-900" style={{}}>
                    PS
                  </div>
<div>
<h1 className="text-xl font-semibold tracking-tight text-neutral-900" style={{}}>
                      Porto Seguro - Carta de Imóvel
                    </h1>
<div className="flex items-center gap-3 mt-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border bg-green-50 border-green-200 text-green-700" style={{}}>
<svg className="lucide lucide-check-circle-2 w-3 h-3" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                        Verificado
                      </span>
<span className="text-xs text-neutral-500" style={{}}>
                        Cod: #9821-PS
                      </span>
</div>
</div>
</div>
<button className="p-2 rounded-lg border text-neutral-500 hover:text-red-500 transition-colors border-neutral-200 hover:bg-neutral-50" style={{}}>
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-100" style={{}}>
<div>
<p className="text-[10px] uppercase tracking-wider font-semibold mb-1 text-neutral-400" style={{}}>
                    Crédito
                  </p>
<p className="text-xl font-bold tracking-tight text-neutral-900" style={{}}>
                    R$ 450.000
                  </p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider font-semibold mb-1 text-neutral-400" style={{}}>
                    Entrada (Ágio)
                  </p>
<p className="text-xl font-bold tracking-tight text-neutral-900" style={{}}>
                    R$ 125.000
                  </p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider font-semibold mb-1 text-neutral-400" style={{}}>
                    Parcela Atual
                  </p>
<p className="text-xl font-bold tracking-tight text-neutral-900" style={{}}>
                    R$ 2.100
                  </p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider font-semibold mb-1 text-neutral-400" style={{}}>
                    Índice
                  </p>
<p className="text-xl font-bold tracking-tight text-neutral-900" style={{}}>
                    INCC
                  </p>
</div>
</div>
</div>

<div className="border rounded-xl p-6 bg-white border-neutral-200" style={{}}>
<h3 className="text-sm font-semibold mb-4 text-neutral-900" style={{}}>
                Progresso do Pagamento
              </h3>
<div className="flex items-end justify-between text-xs mb-2">
<span className="text-neutral-500" style={{}}>Pago:</span>
<span className="text-neutral-500" style={{}}>Restante:</span>
</div>
<div className="w-full h-2 rounded-full overflow-hidden bg-neutral-100" style={{}}>
<div className="h-full rounded-full bg-neutral-900" style={{width: '32%'}}></div>
</div>
<div className="mt-4 grid grid-cols-3 gap-4 text-xs border-t pt-4 border-neutral-100" style={{}}>
<div>
<span className="block mb-0.5 text-neutral-400" style={{}}>
                    Total Pago
                  </span>
<span className="font-medium text-neutral-900" style={{}}>
                    R$ 148.000
                  </span>
</div>
<div>
<span className="block mb-0.5 text-neutral-400" style={{}}>
                    Saldo Devedor
                  </span>
<span className="font-medium text-neutral-900" style={{}}>
                    R$ 310.800
                  </span>
</div>
<div>
<span className="block mb-0.5 text-neutral-400" style={{}}>
                    Vencimento
                  </span>
<span className="font-medium text-neutral-900" style={{}}>
                    Dia 15
                  </span>
</div>
</div>
</div>

<div className="border rounded-xl p-6 bg-white border-neutral-200">
<h3 className="text-sm font-semibold mb-1 text-neutral-900">
                Preços de referência
              </h3>
<p className="text-xs text-neutral-500 mb-8">
                Em comparação com outras cotas semelhantes anunciadas.
              </p>

<div className="relative h-48 mb-6 mt-12">

<div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-2 h-32 px-4 z-10">
<div className="w-8 h-4 rounded-t-sm bg-neutral-100"></div>
<div className="w-8 h-8 rounded-t-sm bg-neutral-100"></div>
<div className="w-8 h-16 rounded-t-sm bg-neutral-200"></div>
<div className="w-8 h-24 rounded-t-sm bg-neutral-200"></div>
<div className="w-8 h-12 rounded-t-sm bg-neutral-200"></div>
<div className="w-8 h-10 rounded-t-sm bg-neutral-100"></div>
<div className="w-8 h-6 rounded-t-sm bg-neutral-100"></div>
<div className="w-8 h-4 rounded-t-sm bg-neutral-100"></div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200"></div>

<div className="absolute -bottom-6 left-0 w-full flex justify-between text-[10px] text-neutral-500 font-medium">
<span>R$ 105.000</span>
<span>R$ 155.000</span>
</div>

<div className="absolute bottom-0 left-[65%] flex flex-col items-center group z-20">
<div className="mb-2 text-[10px] font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap bg-blue-300 text-black">
                    R$ 145.000 MÉDIA
                  </div>
<div className="h-32 w-px border-l border-dashed border-blue-300/50"></div>
<div className="w-2 h-2 rounded-full -mt-1 bg-blue-300"></div>
</div>

<div className="absolute bottom-0 left-[40%] flex flex-col items-center z-30">
<div className="mb-8 bg-blue-500 text-[10px] font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap transform -translate-y-1 text-black">
                    R$ 125.850
                  </div>
<div className="h-32 w-px bg-blue-500"></div>
<div className="w-2 h-2 rounded-full bg-blue-500 -mt-1 ring-4 ring-white"></div>
</div>
</div>

<div className="mt-12 mb-6 text-xs text-neutral-500 text-left border-t pt-4 border-neutral-100">
                Imóvel | Porto Seguro | Contemplada | Crédito 450k
              </div>

<button className="w-full py-2.5 border rounded-lg text-xs font-medium text-blue-500 transition-colors mb-6 border-neutral-200 hover:bg-neutral-100">
                Ver cotas similares
              </button>

<div className="flex items-center justify-between text-xs text-neutral-600">
<span>A referência de preços foi útil?</span>
<div className="flex gap-4">
<button className="flex items-center gap-1 transition-colors hover:text-neutral-800">
<svg className="lucide lucide-thumbs-up w-3 h-3" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10v12"></path>
<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
</svg>
                    Sim
                  </button>
<button className="flex items-center gap-1 transition-colors hover:text-neutral-800">
<svg className="lucide lucide-thumbs-down w-3 h-3" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 14V2"></path>
<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
</svg>
                    Não
                  </button>
</div>
</div>
</div>

<div className="border rounded-xl overflow-hidden bg-white border-neutral-200" style={{}}>
<div className="p-4 border-b border-neutral-200 bg-neutral-50/50" style={{}}>
<h3 className="text-sm font-semibold text-neutral-900" style={{}}>
                  Sobre o Grupo
                </h3>
</div>
<div className="p-6 space-y-4 text-sm leading-relaxed text-neutral-600" style={{}}>
<p>
                  Este consórcio da Porto Seguro pertence a um grupo saudável
                  com alto índice de contemplação. A cota já está contemplada,
                  permitindo uso imediato do crédito para compra de imóvel
                  residencial, comercial, terreno ou reforma.
                </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Permite uso de FGTS
                  </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Transferência Online
                  </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Taxa adm. reduzida
                  </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Sem fundo de reserva
                  </li>
</ul>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24">
<div className="border rounded-xl p-6 shadow-sm bg-white border-neutral-200" style={{}}>
<h3 className="text-sm font-semibold mb-4 text-neutral-900" style={{}}>
                  Resumo da Negociação
                </h3>
<div className="space-y-3 mb-6">
<div className="flex justify-between text-xs">
<span className="text-neutral-500" style={{}}>
                      Valor da Entrada
                    </span>
<span className="font-medium text-neutral-900" style={{}}>
                      R$ 125.000
                    </span>
</div>
<div className="flex justify-between text-xs">
<span className="text-neutral-500" style={{}}>
                      Taxa de Transferência
                    </span>
<span className="font-medium text-neutral-900" style={{}}>
                      R$ 850,00
                    </span>
</div>
<div className="flex justify-between text-xs pt-3 border-t border-neutral-100" style={{}}>
<span className="text-sm font-semibold text-neutral-900" style={{}}>
                      Total a Pagar
                    </span>
<span className="text-sm font-bold text-neutral-900" style={{}}>
                      R$ 125.850
                    </span>
</div>
</div>
<div className="space-y-3">
<button className="w-full py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow text-white bg-neutral-900 hover:bg-neutral-800" style={{}}>
                    Comprar Agora
                    <svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</button>
<button className="w-full py-3 px-4 border text-sm font-semibold rounded-lg transition-colors bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-300" style={{}}>
                    Fazer Proposta
                  </button>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-neutral-400" style={{}}>
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Pagamento protegido por custódia
                </div>
</div>

<div className="mt-4 border rounded-xl p-5 bg-white border-neutral-200">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-3">
<div className="relative">
<div className="w-12 h-12 rounded-full border flex items-center justify-center bg-neutral-100 border-neutral-200 text-neutral-600">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">
                        Roberto Almeida
                      </h4>
<div className="flex items-center gap-1 text-[10px] text-neutral-500 mt-0.5">
<svg className="lucide lucide-check-circle-2 w-3 h-3 text-blue-500 fill-blue-500/10" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                        Identidade Verificada
                      </div>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 text-yellow-500">
<span className="text-sm font-bold">4.9</span>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<span className="text-[10px] text-neutral-400">
                      58 avaliações
                    </span>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mb-4">
<div className="rounded-lg p-2 text-center border bg-neutral-50 border-neutral-100">
<span className="block text-lg font-bold text-neutral-800">
                      3a
                    </span>
<span className="text-[10px] uppercase tracking-wide text-neutral-400">
                      Na Plataforma
                    </span>
</div>
<div className="rounded-lg p-2 text-center border bg-neutral-50 border-neutral-100">
<span className="block text-lg font-bold text-neutral-800">
                      14
                    </span>
<span className="text-[10px] uppercase tracking-wide text-neutral-400">
                      Vendas
                    </span>
</div>
</div>
<div className="space-y-3 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2 text-xs text-neutral-600">
<svg className="lucide lucide-clock w-3 h-3 text-neutral-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span>Responde em média em 15 min</span>
</div>
<button className="w-full py-2 text-xs font-medium border rounded-lg transition-colors text-neutral-700 border-neutral-200 hover:bg-neutral-100">
                    Ver perfil completo
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="view-section" id="view-auction-details">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
<span className="cursor-pointer hover:text-neutral-900" onclick="switchView('home')">
            Home
          </span>
<svg className="lucide lucide-chevron-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
<span className="text-red-600 font-medium">Leilão Ao Vivo</span>
<svg className="lucide lucide-chevron-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
<span className="font-medium text-neutral-900">
            Lote #2844 - Bradesco
          </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-6">
<div className="border rounded-xl p-6 relative overflow-hidden bg-white border-neutral-200">
<div className="absolute top-0 left-0 w-1 h-full bg-red-600 animate-pulse"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl flex items-center justify-center border text-lg font-bold tracking-tighter bg-neutral-50 border-neutral-100 text-neutral-900">
                    BB
                  </div>
<div>
<h1 className="text-xl font-semibold tracking-tight text-neutral-900">
                      Carta Bradesco - Veículo Pesado
                    </h1>
<div className="flex items-center gap-3 mt-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border bg-red-50 border-red-200 text-red-700">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                        Ao Vivo: Termina em 02h 45m
                      </span>
<span className="text-xs text-neutral-500">Lote: #2844</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-100">
<div>
<p className="text-[10px] uppercase tracking-wider font-semibold mb-1 text-neutral-400">
                    Crédito
                  </p>
<p className="text-xl font-bold tracking-tight text-neutral-900">
                    R$ 200.000
                  </p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider font-semibold mb-1 text-neutral-400">
                    Entrada Mínima
                  </p>
<p className="text-xl font-bold tracking-tight text-neutral-900">
                    R$ 55.000
                  </p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider font-semibold mb-1 text-neutral-400">
                    Parcelas
                  </p>
<p className="text-xl font-bold tracking-tight text-neutral-900">
                    64x R$ 2.450
                  </p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider font-semibold mb-1 text-neutral-400">
                    Lucro Estimado
                  </p>
<p className="text-xl font-bold tracking-tight text-green-600">
                    +18.5%
                  </p>
</div>
</div>
</div>
<div className="border rounded-xl overflow-hidden bg-white border-neutral-200">
<div className="p-4 border-b border-neutral-200 bg-neutral-50/50 flex justify-between items-center">
<h3 className="text-sm font-semibold text-neutral-900">
                  Histórico de Lances
                </h3>
<span className="text-xs text-neutral-500 flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  Atualizado em tempo real
                </span>
</div>
<div className="max-h-64 overflow-y-auto">
<div className="divide-y divide-neutral-100">
<div className="p-4 flex items-center justify-between bg-green-50/30">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">
                        RA
                      </div>
<div>
<p className="text-xs font-bold text-neutral-900">
                          Roberto Almeida
                          <span className="text-[10px] font-normal text-neutral-500 font-mono ml-1">
                            14:22:05
                          </span>
</p>
<p className="text-[10px] text-green-600 font-medium">
                          Líder atual
                        </p>
</div>
</div>
<span className="text-sm font-bold text-neutral-900">
                      R$ 92.500
                    </span>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-400">
                        CP
                      </div>
<div>
<p className="text-xs font-medium text-neutral-900">
                          Capital Partners
                        </p>
<p className="text-[10px] text-neutral-400">Superado</p>
</div>
</div>
<span className="text-sm font-medium text-neutral-500">
                      R$ 92.000
                    </span>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-400">
                        MK
                      </div>
<div>
<p className="text-xs font-medium text-neutral-900">
                          Marta K.
                        </p>
<p className="text-[10px] text-neutral-400">Superado</p>
</div>
</div>
<span className="text-sm font-medium text-neutral-500">
                      R$ 91.500
                    </span>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-1">
<div className="sticky top-24 space-y-4">
<div className="border rounded-xl p-6 shadow-sm bg-white border-neutral-200 ring-2 ring-neutral-900">
<div className="text-center mb-6">
<span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Lance Atual
                  </span>
<div className="flex items-center justify-center gap-2 mt-1">
<h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                      R$ 92.500
                    </h2>
</div>
<p className="text-xs text-red-600 mt-2 font-medium animate-pulse">
                    Encerra em 02:45:12
                  </p>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-700">
                      Seu Lance Automático (R$)
                    </label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-neutral-500 text-sm">
                        R$
                      </span>
<input className="w-full rounded-lg border px-3 py-2.5 pl-9 text-lg font-bold focus:border-neutral-900 focus:outline-none focus:ring-0 border-neutral-200 bg-neutral-50 text-neutral-900" step="500" type="number" value="93000"/>
</div>
<p className="text-[10px] text-neutral-500">
                      Incremento mínimo: R$ 500,00
                    </p>
</div>
<button className="w-full py-3 px-4 text-sm font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow text-white bg-red-600 hover:bg-red-700">
<svg className="lucide lucide-gavel" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"></path>
<path d="m16 16 6-6"></path>
<path d="m8 8 6-6"></path>
<path d="m9 7 8 8"></path>
<path d="m21 11-8-8"></path>
</svg>
                    CONFIRMAR LANCE
                  </button>
</div>
<div className="mt-6 pt-4 border-t border-neutral-100 text-center">
<p className="text-[10px] text-neutral-400 mb-2">
                    Ao dar um lance você concorda com os termos.
                  </p>
<div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500">
<svg className="lucide lucide-shield" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
                    Ambiente Auditado
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-sell">
<div className="max-w-3xl mx-auto px-4 py-16">
<div className="text-center mb-10">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-neutral-900" style={{}}>
            Venda seu consórcio pelo melhor preço
          </h1>
<p className="text-sm text-neutral-500 max-w-md mx-auto" style={{}}>
            Nossa inteligência artificial avalia sua cota em tempo real e
            conecta você a milhares de investidores.
          </p>
</div>
<div className="border rounded-xl shadow-sm overflow-hidden bg-white border-neutral-200" style={{}}>

<div className="border-b px-6 py-4 bg-neutral-50 border-neutral-200" style={{}}>
<div className="flex items-center justify-between max-w-xs mx-auto">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center bg-neutral-900 text-white" style={{}}>
                  1
                </span>
<span className="text-xs font-semibold text-neutral-900" style={{}}>
                  Dados
                </span>
</div>
<div className="h-px w-12 bg-neutral-300" style={{}}></div>
<div className="flex items-center gap-2 opacity-50">
<span className="w-6 h-6 rounded-full text-neutral-500 text-xs font-bold flex items-center justify-center bg-neutral-200" style={{}}>
                  2
                </span>
<span className="text-xs font-medium text-neutral-500" style={{}}>
                  Valores
                </span>
</div>
<div className="h-px w-12 bg-neutral-300" style={{}}></div>
<div className="flex items-center gap-2 opacity-50">
<span className="w-6 h-6 rounded-full text-neutral-500 text-xs font-bold flex items-center justify-center bg-neutral-200" style={{}}>
                  3
                </span>
<span className="text-xs font-medium text-neutral-500" style={{}}>
                  Contato
                </span>
</div>
</div>
</div>

<div className="p-8 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-700" style={{}}>
                  Administradora
                </label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border px-3 py-2.5 text-sm focus:border-neutral-400 focus:outline-none focus:ring-0 border-neutral-200 bg-white text-neutral-900" style={{}}>
<option>Selecione...</option>
<option>Porto Seguro</option>
<option>Bradesco</option>
<option>Itaú</option>
<option>Caixa</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3 w-4 h-4 pointer-events-none text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-700" style={{}}>
                  Tipo de Bem
                </label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border px-3 py-2.5 text-sm focus:border-neutral-400 focus:outline-none focus:ring-0 border-neutral-200 bg-white text-neutral-900" style={{}}>
<option>Imóvel</option>
<option>Automóvel</option>
<option>Pesado</option>
<option>Serviço</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3 w-4 h-4 pointer-events-none text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-neutral-100" style={{}}>
<label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors group border-neutral-200 hover:bg-neutral-50" style={{}}>
<input className="w-4 h-4 accent-neutral-900 border-gray-300" name="status" style={{}} type="radio"/>
<div>
<span className="block text-sm font-medium text-neutral-900" style={{}}>
                    Minha cota já está contemplada
                  </span>
<span className="block text-xs text-neutral-500 mt-0.5" style={{}}>
                    Já posso utilizar o crédito para comprar o bem.
                  </span>
</div>
</label>
<label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors group border-neutral-200 hover:bg-neutral-50" style={{}}>
<input className="w-4 h-4 accent-neutral-900 border-gray-300" name="status" style={{}} type="radio"/>
<div>
<span className="block text-sm font-medium text-neutral-900" style={{}}>
                    Ainda não fui contemplado
                  </span>
<span className="block text-xs text-neutral-500 mt-0.5" style={{}}>
                    Estou pagando as parcelas mensalmente.
                  </span>
</div>
</label>
</div>
<div className="pt-6">
<button className="w-full py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow text-white bg-neutral-900 hover:bg-neutral-800" style={{}}>
                Continuar Avaliação
              </button>
</div>
</div>
<div className="p-4 text-center border-t bg-neutral-50 border-neutral-200" style={{}}>
<p className="text-xs text-neutral-500" style={{}}>
              Seus dados estão protegidos pela LGPD.
            </p>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-login">
<div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
<div className="w-full max-w-sm border rounded-xl shadow-sm p-8 bg-white border-neutral-200" style={{}}>
<div className="text-center mb-6">
<div className="w-10 h-10 rounded-lg mx-auto flex items-center justify-center mb-4 bg-neutral-900 text-white" style={{}}>
<svg className="w-6 h-6" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M15 25C15 25 35 25 50 50C65 75 85 75 85 75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
<path d="M15 75C15 75 35 75 50 50C65 25 85 25 85 25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
</svg>
</div>
<h2 className="text-lg font-semibold text-neutral-900" style={{}}>
              Acesse sua conta
            </h2>
<p className="text-xs text-neutral-500 mt-1" style={{}}>
              Gerencie suas propostas e negociações
            </p>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium mb-1.5 text-neutral-700" style={{}}>
                E-mail
              </label>
<input className="w-full rounded-lg border px-3 py-2 text-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-0 border-neutral-200 bg-white" placeholder="nome@empresa.com" style={{}} type="email"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-neutral-700" style={{}}>
                Senha
              </label>
<input className="w-full rounded-lg border px-3 py-2 text-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-0 border-neutral-200 bg-white" style={{}} type="password"/>
</div>
<button className="w-full py-2.5 px-4 text-sm font-semibold rounded-lg transition-all duration-200 text-white bg-neutral-900 hover:bg-neutral-800" style={{}}>
              Entrar
            </button>
</div>
<div className="mt-6 pt-6 border-t border-neutral-100" style={{}}>
<button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium rounded-lg border transition-colors border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700" style={{}}>
<img alt="Google" className="w-4 h-4" src="https://www.svgrepo.com/show/475656/google-color.svg"/>
              Continuar com Google
            </button>
</div>
<p className="mt-6 text-center text-xs text-neutral-500" style={{}}>
            Não tem uma conta?
            <a className="font-medium hover:underline text-neutral-900" href="#" style={{}}>
              Cadastre-se
            </a>
</p>
</div>
</div>
</div>

<div className="view-section" id="view-how-it-works">
<div className="bg-white">

<div className="border-b bg-neutral-50/50 border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
<span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-blue-50 text-blue-600 border border-blue-100">
              Hub Nacional
            </span>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-900">
              Como funciona o ecossistema
            </h1>
<p className="text-sm md:text-base text-neutral-500 max-w-2xl mx-auto">
              Conectamos vendedores de cotas a compradores em um ambiente
              seguro, transparente e verificado por inteligência artificial.
            </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

<div className="mb-20">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-900 text-white">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</svg>
</div>
<h2 className="text-xl font-semibold text-neutral-900">
                Para quem quer comprar
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold mb-4 bg-white border-neutral-200 text-neutral-500">
                  1
                </div>
<h3 className="text-sm font-semibold text-neutral-900">
                  Encontre a oportunidade
                </h3>
<p className="text-xs leading-relaxed text-neutral-500">
                  Utilize nossos filtros avançados para encontrar cartas
                  contempladas ou em andamento que se encaixam no seu perfil.
                </p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold mb-4 bg-white border-neutral-200 text-neutral-500">
                  2
                </div>
<h3 className="text-sm font-semibold text-neutral-900">
                  Análise de IA
                </h3>
<p className="text-xs leading-relaxed text-neutral-500">
                  Nossa tecnologia verifica a veracidade da cota junto à
                  administradora e calcula o preço justo de mercado (Fair
                  Value).
                </p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold mb-4 bg-white border-neutral-200 text-neutral-500">
                  3
                </div>
<h3 className="text-sm font-semibold text-neutral-900">
                  Pagamento Seguro
                </h3>
<p className="text-xs leading-relaxed text-neutral-500">
                  O valor fica retido em uma conta de custódia (Escrow) e só é
                  liberado ao vendedor após a confirmação da transferência.
                </p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold mb-4 bg-white border-neutral-200 text-neutral-500">
                  4
                </div>
<h3 className="text-sm font-semibold text-neutral-900">
                  Transferência
                </h3>
<p className="text-xs leading-relaxed text-neutral-500">
                  Todo o processo burocrático de transferência de titularidade é
                  acompanhado pelo nosso time jurídico digital.
                </p>
</div>
</div>
</div>
<div className="h-px bg-neutral-200 w-full mb-20"></div>

<div>
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-white border-neutral-200 text-neutral-900">
<svg className="lucide lucide-banknote w-5 h-5" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<circle cx="12" cy="12" r="2"></circle>
<path d="M6 12h.01M18 12h.01"></path>
</svg>
</div>
<h2 className="text-xl font-semibold text-neutral-900">
                Para quem quer vender
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold mb-4 bg-white border-neutral-200 text-neutral-500">
                  1
                </div>
<h3 className="text-sm font-semibold text-neutral-900">
                  Avaliação Gratuita
                </h3>
<p className="text-xs leading-relaxed text-neutral-500">
                  Cadastre os dados da sua cota e receba uma avaliação
                  instantânea de quanto ela vale no mercado atual.
                </p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold mb-4 bg-white border-neutral-200 text-neutral-500">
                  2
                </div>
<h3 className="text-sm font-semibold text-neutral-900">
                  Anúncio Verificado
                </h3>
<p className="text-xs leading-relaxed text-neutral-500">
                  Após validação da identidade, seu anúncio é publicado para
                  milhares de investidores e compradores reais.
                </p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold mb-4 bg-white border-neutral-200 text-neutral-500">
                  3
                </div>
<h3 className="text-sm font-semibold text-neutral-900">
                  Negociação
                </h3>
<p className="text-xs leading-relaxed text-neutral-500">
                  Receba propostas diretamente pelo painel. Aceite, recuse ou
                  faça contrapropostas de forma simples.
                </p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold mb-4 bg-white border-neutral-200 text-neutral-500">
                  4
                </div>
<h3 className="text-sm font-semibold text-neutral-900">
                  Recebimento
                </h3>
<p className="text-xs leading-relaxed text-neutral-500">
                  O comprador deposita o valor na conta garantia. Após a
                  transferência da cota, o dinheiro é liberado para você.
                </p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-xl font-semibold mb-8">
              Segurança em primeiro lugar
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-xl bg-neutral-800/50 border border-neutral-700">
<svg className="lucide lucide-shield-check w-8 h-8 mx-auto mb-4 text-[#ff6b61]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<h3 className="text-sm font-bold mb-2">Conta Escrow</h3>
<p className="text-xs text-neutral-400">
                  O dinheiro só muda de mãos quando a cota muda de nome.
                </p>
</div>
<div className="p-6 rounded-xl bg-neutral-800/50 border border-neutral-700">
<svg className="lucide lucide-file-check-2 w-8 h-8 mx-auto mb-4 text-[#ff6b61]" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="m14 20 2 2 4-4"></path>
</svg>
<h3 className="text-sm font-bold mb-2">Jurídico Integrado</h3>
<p className="text-xs text-neutral-400">
                  Contratos digitais com validade jurídica e assinatura
                  eletrônica.
                </p>
</div>
<div className="p-6 rounded-xl bg-neutral-800/50 border border-neutral-700">
<svg className="lucide lucide-users w-8 h-8 mx-auto mb-4 text-[#ff6b61]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
<h3 className="text-sm font-bold mb-2">
                  Verificação de Identidade
                </h3>
<p className="text-xs text-neutral-400">
                  Todos os usuários passam por verificação de documentos (KYC).
                </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-partners">
<div className="bg-white">

<div className="border-b bg-neutral-50/50 border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-green-50 text-green-700 border border-green-200">
                  Programa de Parceiros
                </span>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-neutral-900">
                  Cresça seu negócio com o Hub Nacional
                </h1>
<p className="text-sm md:text-base text-neutral-500 mb-8 leading-relaxed">
                  Oferecemos soluções exclusivas para administradoras,
                  corretores e empresas de investimento. Integre-se à maior rede
                  de consórcios do país.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 text-sm font-semibold text-white rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-sm">
                    Seja um Parceiro
                  </button>
<button className="px-6 py-3 text-sm font-medium border rounded-lg hover:bg-neutral-50 transition-colors border-neutral-200 text-neutral-700">
                    Falar com consultor
                  </button>
</div>
</div>
<div className="relative hidden lg:block">

<div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-full blur-3xl opacity-50"></div>
<div className="relative grid grid-cols-2 gap-4">
<div className="space-y-4 mt-8">
<div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm">
<svg className="lucide lucide-trending-up w-8 h-8 mb-4 text-green-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<div className="text-2xl font-bold text-neutral-900">
                        +45%
                      </div>
<div className="text-xs text-neutral-500">Liquidez média</div>
</div>
<div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm">
<svg className="lucide lucide-users w-8 h-8 mb-4 text-blue-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
<div className="text-2xl font-bold text-neutral-900">
                        12k+
                      </div>
<div className="text-xs text-neutral-500">
                        Investidores ativos
                      </div>
</div>
</div>
<div className="space-y-4">
<div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm">
<svg className="lucide lucide-globe w-8 h-8 mb-4 text-[#ff6b61]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
<div className="text-2xl font-bold text-neutral-900">
                        Nacional
                      </div>
<div className="text-xs text-neutral-500">
                        Alcance em todo Brasil
                      </div>
</div>
<div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl shadow-sm text-white">
<svg className="lucide lucide-zap w-8 h-8 mb-4 text-yellow-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
<div className="text-2xl font-bold">API</div>
<div className="text-xs text-neutral-400">
                        Integração total
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b bg-white border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
              Administradoras Integradas
            </p>
<div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-neutral-800 font-bold text-lg">
<span className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-[10px]">
                  PS
                </span>
                Porto Seguro
              </div>
<div className="flex items-center gap-2 text-neutral-800 font-bold text-lg">
<span className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-[10px]">
                  BB
                </span>
                Banco do Brasil
              </div>
<div className="flex items-center gap-2 text-neutral-800 font-bold text-lg">
<span className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-[10px]">
                  IT
                </span>
                Itaú
              </div>
<div className="flex items-center gap-2 text-neutral-800 font-bold text-lg">
<span className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-[10px]">
                  CX
                </span>
                Caixa
              </div>
<div className="flex items-center gap-2 text-neutral-800 font-bold text-lg">
<span className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-[10px]">
                  AD
                </span>
                Ademicon
              </div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Por que ser um parceiro?
            </h2>
<p className="text-sm text-neutral-500 max-w-2xl mx-auto">
              Desenvolvemos ferramentas poderosas para escalar suas vendas e
              otimizar a gestão da sua carteira de consórcios.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 border rounded-xl hover:shadow-md transition-all bg-white border-neutral-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-blue-50 text-blue-600">
<svg className="lucide lucide-layout-grid w-6 h-6" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Painel White Label
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                Tenha seu próprio marketplace personalizado com sua marca e
                cores. Seus clientes compram diretamente de você.
              </p>
</div>
<div className="p-6 border rounded-xl hover:shadow-md transition-all bg-white border-neutral-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-rose-50 text-rose-600">
<svg className="lucide lucide-bar-chart-3 w-6 h-6" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Inteligência de Mercado
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                Acesso a dados exclusivos de precificação, tendências e liquidez
                para tomar decisões mais assertivas.
              </p>
</div>
<div className="p-6 border rounded-xl hover:shadow-md transition-all bg-white border-neutral-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-green-50 text-green-600">
<svg className="lucide lucide-coins w-6 h-6" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="6"></circle>
<path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
<path d="M7 6h1v4"></path>
<path d="m16.71 13.88.7.71-2.82 2.82"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Comissões Recorrentes
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                Modelo de revenue share atrativo para corretores e
                influenciadores do mercado financeiro.
              </p>
</div>
</div>
</div>

<div className="bg-neutral-50 border-t border-neutral-200">
<div className="max-w-3xl mx-auto px-4 py-20">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-neutral-900">
                  Cadastre sua empresa
                </h2>
<p className="text-sm text-neutral-500 mt-2">
                  Preencha o formulário abaixo e nossa equipe comercial entrará
                  em contato.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-700">
                    Nome da Empresa
                  </label>
<input className="w-full rounded-lg border px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-0 border-neutral-200 bg-white" placeholder="Sua Corretora LTDA" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-700">
                    CNPJ
                  </label>
<input className="w-full rounded-lg border px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-0 border-neutral-200 bg-white" placeholder="00.000.000/0000-00" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-700">
                    Responsável
                  </label>
<input className="w-full rounded-lg border px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-0 border-neutral-200 bg-white" placeholder="Seu nome completo" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-700">
                    E-mail Corporativo
                  </label>
<input className="w-full rounded-lg border px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-0 border-neutral-200 bg-white" placeholder="contato@empresa.com.br" type="email"/>
</div>
</div>
<div className="space-y-2 mb-8">
<label className="text-xs font-semibold text-neutral-700">
                  Tipo de Parceria
                </label>
<select className="w-full rounded-lg border px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-0 border-neutral-200 bg-white">
<option>Corretora de Consórcios</option>
<option>Administradora</option>
<option>Investidor Institucional</option>
<option>Outros</option>
</select>
</div>
<button className="w-full py-3 px-4 text-sm font-semibold text-white rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors">
                Solicitar contato
              </button>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-auto border-t bg-white border-neutral-200" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 mb-4">
<div className="relative w-6 h-6 flex items-center justify-center">
<svg className="w-full h-full text-[#ff6b61]" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M15 25C15 25 35 25 50 50C65 75 85 75 85 75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
<path d="M15 75C15 75 35 75 50 50C65 25 85 25 85 25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
</svg>
</div>
<span className="text-sm font-semibold tracking-tight text-neutral-900" style={{}}>
                HUB NACIONAL
              </span>
</div>
<p className="text-xs leading-relaxed text-neutral-500" style={{}}>
              A maior plataforma de negociação de consórcios do Brasil.
            </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-neutral-900" style={{}}>
              Plataforma
            </h4>
<ul className="space-y-2.5">
<li>
<button className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900" onclick="switchView('home')" style={{}}>
                  Comprar Carta
                </button>
</li>
<li>
<button className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900" onclick="switchView('sell')" style={{}}>
                  Vender Consórcio
                </button>
</li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-neutral-900" style={{}}>
              Empresa
            </h4>
<ul className="space-y-2.5">
<li className="">
<a className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#" style={{}}>
                  Sobre nós
                </a>
</li>
<li>
<a className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#" style={{}}>
                  Contato
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-neutral-900" style={{}}>
              Legal
            </h4>
<ul className="space-y-2.5">
<li>
<a className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#" style={{}}>
                  Termos
                </a>
</li>
<li>
<a className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#" style={{}}>
                  Privacidade
                </a>
</li>
</ul>
</div>
</div>
</div>
</footer>


    </>
  );
}
