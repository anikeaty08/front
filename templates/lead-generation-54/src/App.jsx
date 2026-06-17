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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<aside className="hidden lg:flex flex-col w-64 bg-slate-50 shrink-0 h-full border-r border-slate-200/60 z-20">

<div className="h-24 flex items-center px-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-sm">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tight text-slate-900">Localyze</span>
<span className="text-xs font-medium text-slate-500 tracking-widest uppercase mt-0.5">Precision Curator</span>
</div>
</div>
</div>

<nav className="flex-1 py-4 px-4 space-y-2 overflow-y-auto">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-indigo-600 font-medium text-base shadow-sm border border-slate-100/50 transition-all" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 font-normal text-base transition-all" href="#">
<i className="w-5 h-5" data-lucide="search"></i>
                Searches
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 font-normal text-base transition-all" href="#">
<i className="w-5 h-5" data-lucide="users"></i>
                Leads
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 font-normal text-base transition-all" href="#">
<i className="w-5 h-5" data-lucide="settings"></i>
                Settings
            </a>
</nav>

<div className="p-4 space-y-2 border-t border-slate-200/60">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 font-normal text-base transition-all" href="#">
<i className="w-5 h-5" data-lucide="help-circle"></i>
                Help Center
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 font-normal text-base transition-all" href="#">
<i className="w-5 h-5" data-lucide="user"></i>
                Account
            </a>
</div>
</aside>

<div className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="bg-slate-50/80 backdrop-blur-md h-20 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">

<button className="lg:hidden text-slate-500 hover:text-slate-900 mr-4">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<div className="hidden md:flex items-center gap-8 h-full">
<div className="h-full flex items-center border-b-2 border-indigo-600 pt-1 cursor-pointer">
<span className="text-base font-medium text-indigo-600">Dashboard</span>
</div>
<div className="h-full flex items-center border-b-2 border-transparent hover:border-slate-300 pt-1 cursor-pointer transition-colors">
<span className="text-base font-normal text-slate-500 hover:text-slate-900 transition-colors">Searches</span>
</div>
<div className="h-full flex items-center border-b-2 border-transparent hover:border-slate-300 pt-1 cursor-pointer transition-colors">
<span className="text-base font-normal text-slate-500 hover:text-slate-900 transition-colors">Leads</span>
</div>
</div>

<div className="flex items-center gap-6 ml-auto">
<button className="text-slate-400 hover:text-slate-600 transition-colors relative">
<i className="w-6 h-6" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-50"></span>
</button>
<div className="w-9 h-9 rounded-full bg-slate-200 border border-slate-200 overflow-hidden cursor-pointer shadow-sm">
<img alt="User" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&amp;background=0D8ABC&amp;color=fff"/>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto pb-12">

<div className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                    Curadoria de Leads em Tempo Real
                </h1>
<p className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed max-w-3xl mx-auto">
                    Identifique oportunidades e empresas com precisão editorial usando nossa inteligência de prospecção.
                </p>
</div>

<div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20 relative z-10">
<div className="bg-white rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] border border-slate-200 p-2 flex flex-col md:flex-row items-center gap-2 md:gap-0">
<div className="flex-1 flex items-center px-4 py-3.5 w-full group">
<i className="w-6 h-6 text-slate-400 mr-4 group-focus-within:text-indigo-500 transition-colors" data-lucide="building-2"></i>
<input className="w-full text-base outline-none text-slate-900 placeholder:text-slate-400 bg-transparent font-normal" placeholder="Termo (Nicho/Empresa)" type="text"/>
</div>
<div className="hidden md:block w-px h-10 bg-slate-200 mx-2"></div>
<div className="flex-1 flex items-center px-4 py-3.5 w-full border-t md:border-t-0 border-slate-100 group">
<i className="w-6 h-6 text-slate-400 mr-4 group-focus-within:text-indigo-500 transition-colors" data-lucide="map-pin"></i>
<input className="w-full text-base outline-none text-slate-900 placeholder:text-slate-400 bg-transparent font-normal" placeholder="Localização" type="text"/>
</div>
<button className="w-full md:w-auto mt-2 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium px-8 py-4 rounded-xl transition-all shadow-sm active:scale-[0.98]">
                        Buscar Leads Agora
                    </button>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-8 flex flex-col gap-6">
<div className="flex items-center justify-between mb-2">
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Últimas Consultas</h2>
<a className="text-base font-medium text-indigo-600 hover:text-indigo-700 transition-colors" href="#">
                                Visualizar todo o histórico
                            </a>
</div>
<div className="space-y-4">

<div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 flex items-center justify-between group hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<i className="w-6 h-6" data-lucide="utensils"></i>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Restaurantes em São Paulo</h3>
<p className="text-sm text-slate-500 mt-1">há 5 minutos • <span className="text-indigo-600 font-medium">124 leads encontrados</span></p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 text-indigo-600 text-xs font-medium uppercase tracking-wider bg-white">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                                        Success
                                    </span>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 flex items-center justify-between group hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
<i className="w-6 h-6" data-lucide="monitor"></i>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Agências de Marketing em Lisboa</h3>
<p className="text-sm text-slate-500 mt-1">há 1 hora • Buscando dados...</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium uppercase tracking-wider">
                                        Processing
                                    </span>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 flex items-center justify-between group hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<i className="w-6 h-6" data-lucide="shield-plus"></i>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Clínicas Odontológicas no Rio de Janeiro</h3>
<p className="text-sm text-slate-500 mt-1">há 3 horas • <span className="text-indigo-600 font-medium">89 leads encontrados</span></p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 text-indigo-600 text-xs font-medium uppercase tracking-wider bg-white">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                                        Success
                                    </span>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-5 flex items-center justify-between group hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<i className="w-6 h-6" data-lucide="hammer"></i>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Construtoras em Curitiba</h3>
<p className="text-sm text-slate-500 mt-1">há 5 horas • <span className="text-indigo-600 font-medium">212 leads encontrados</span></p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 text-indigo-600 text-xs font-medium uppercase tracking-wider bg-white">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                                        Success
                                    </span>
<i className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6 pt-10 lg:pt-0">

<div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-6">Seu Plano</h3>
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-semibold tracking-tight text-slate-900">74%</span>
<span className="text-base text-slate-500 font-normal pb-1">uso dos créditos</span>
</div>

<div className="h-2.5 w-full bg-indigo-50 rounded-full overflow-hidden mt-4 mb-8">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '74%'}}></div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between text-base">
<span className="text-slate-500 font-normal">Consultas mensais</span>
<span className="text-slate-900 font-medium">370 / 500</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-slate-500 font-normal">Leads exportados</span>
<span className="text-slate-900 font-medium">1.2k / 5k</span>
</div>
</div>
<button className="w-full py-3.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl font-medium text-base transition-colors">
                                Upgrade para Pro
                            </button>
</div>

<div className="bg-indigo-700 rounded-2xl shadow-sm p-8 text-white relative overflow-hidden">

<div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight mb-3">Dica de Precisão</h3>
<p className="text-base text-indigo-100 font-normal leading-relaxed">
                                    Use filtros de geolocalização por bairro para aumentar a conversão de seus leads em até 40% em nichos locais.
                                </p>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
