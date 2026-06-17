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
      

<aside className="w-64 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col hidden md:flex">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium tracking-tight">DataMind AI</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 bg-slate-50 text-slate-900 rounded-xl transition-colors" href="#">
<i className="w-5 h-5" data-lucide="layout-grid" strokeWidth="1.5"></i>
<span className="text-base font-medium">Tela Inicial</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors" href="#">
<i className="w-5 h-5" data-lucide="database" strokeWidth="1.5"></i>
<span className="text-base font-medium">Integrações</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors" href="#">
<i className="w-5 h-5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<span className="text-base font-medium">Relatórios</span>
</a>
</nav>

<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium text-base">
                    US
                </div>
<div className="flex-1 min-w-0">
<p className="text-base font-medium text-slate-900 truncate">Usuário</p>
<p className="text-sm text-slate-500 truncate">Plano Pro</p>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-up" strokeWidth="1.5"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

<header className="h-16 flex items-center justify-between px-6 md:justify-end flex-shrink-0">
<button className="md:hidden text-slate-500 hover:text-slate-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<div className="flex items-center gap-4">
<span className="text-sm text-slate-500 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
                    Motor AI v2.0
                </span>
<button className="px-4 py-2 bg-slate-900 text-white text-base font-medium rounded-full hover:bg-slate-800 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
                    Upgrade
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-6 pb-24">
<div className="max-w-4xl mx-auto mt-12 md:mt-24 flex flex-col items-center">

<div className="text-center mb-12">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4">
                        O que vamos analisar hoje?
                    </h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Conecte seu banco de dados, faça upload de arquivos e use linguagem natural para extrair insights instantâneos.
                    </p>
</div>

<div className="w-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden transition-all focus-within:shadow-[0_8px_30px_rgb(0,0,0,0.08)] focus-within:border-slate-300">

<div className="bg-slate-50/80 border-b border-slate-100 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="text-base font-medium text-slate-500 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="hard-drive" strokeWidth="1.5"></i>
                                Fonte atual:
                            </span>

<button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-base font-medium text-slate-700 shadow-sm">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                Supabase_Prod
                                <i className="w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
<button className="text-base text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1.5 transition-colors">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
                            Adicionar Base
                        </button>
</div>

<div className="p-6">
<textarea className="w-full text-lg md:text-xl resize-none outline-none placeholder:text-slate-300 text-slate-900 bg-transparent" placeholder="Ex: 'Me mostre o total de vendas do mês passado agrupado por categoria de produto e exporte um gráfico...'" rows="3"></textarea>

<div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
<div className="flex items-center gap-2">
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors tooltip" title="Anexar CSV">
<i className="w-5 h-5" data-lucide="paperclip" strokeWidth="1.5"></i>
</button>
<div className="w-px h-6 bg-slate-200 mx-2"></div>

<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-base text-slate-500 hover:bg-slate-50 transition-colors">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
                                    Consulta Rápida
                                </button>
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-base text-slate-500 hover:bg-slate-50 transition-colors">
<i className="w-4 h-4" data-lucide="line-chart" strokeWidth="1.5"></i>
                                    Gerar Gráfico
                                </button>
</div>

<button className="w-12 h-12 flex items-center justify-center bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-transform active:scale-95 shadow-md">
<i className="w-6 h-6" data-lucide="arrow-up" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<p className="mt-8 text-base text-slate-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i>
                    Seus dados são consultados localmente de forma segura. Nenhuma base é armazenada.
                </p>
</div>
</div>
</main>


    </>
  );
}
