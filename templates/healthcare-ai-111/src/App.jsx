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
      

<header className="flex-none h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md z-20 px-6 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="relative w-8 h-8">

<div className="absolute inset-0 bg-blue-700 rounded-bl-xl rounded-tr-md"></div>
<div className="absolute inset-0 bg-lime-500 rounded-tr-xl rounded-bl-md ml-1 mt-1 opacity-90"></div>
</div>
<div className="flex flex-col">
<h1 className="text-xl tracking-tight font-semibold leading-none">
<span className="text-blue-700">S</span><span className="text-lime-500">ITEU</span>
</h1>
<span className="text-xs text-blue-800 font-medium tracking-wide uppercase mt-0.5">Sempre Juntos</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-500 hover:text-slate-700 transition-colors hidden sm:block">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
<div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
<i className="w-4 h-4 text-slate-500" data-lucide="user"></i>
</div>
</div>
</header>

<main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">

<section className="flex-1 relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-8 overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

<div className="relative z-10 animate-float flex flex-col items-center">
<div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">

<div className="absolute inset-0 border border-lime-500/30 rounded-full animate-spin-slow"></div>
<div className="absolute inset-4 border border-blue-600/20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>

<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/10 to-lime-400/20 blur-xl animate-breathe"></div>

<div className="w-32 h-32 bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl rotate-3 flex items-center justify-center relative overflow-hidden group transition-all duration-500 hover:rotate-0 hover:scale-105">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-blue-600/20 opacity-50"></div>

<i className="w-12 h-12 text-blue-700 relative z-10 drop-shadow-sm" data-lucide="sparkles"></i>

<div className="absolute bottom-2 right-2 w-3 h-3 bg-lime-500 rounded-full animate-bounce"></div>
</div>
</div>
<div className="mt-8 text-center max-w-md">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-3">Olá, Enfermeiro(a).</h2>
<p className="text-lg text-slate-500 font-normal leading-relaxed">
                        Sou a tua assistente do SITEU. Estou aqui para ajudar com escalas, direitos laborais e informação sindical.
                    </p>

<div className="flex items-center justify-center gap-1 mt-6 h-6">
<div className="w-1 bg-lime-500 rounded-full animate-[pulse_1s_ease-in-out_infinite] h-3"></div>
<div className="w-1 bg-blue-600 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-5"></div>
<div className="w-1 bg-lime-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-4"></div>
<div className="w-1 bg-blue-600 rounded-full animate-[pulse_1.5s_ease-in-out_infinite] h-2"></div>
</div>
</div>
</div>
</section>

<section className="flex-1 md:max-w-xl lg:max-w-2xl bg-white border-l border-slate-200 flex flex-col shadow-xl z-20">

<div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-100 to-blue-50 border border-lime-200 flex items-center justify-center flex-none shadow-sm">
<i className="w-5 h-5 text-blue-700" data-lucide="bot"></i>
</div>
<div className="flex flex-col gap-2 max-w-[85%]">
<div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm text-lg text-slate-700">
                            Bem-vindo ao espaço digital do SITEU. Como posso apoiar a tua prática hoje?
                        </div>

<div className="flex flex-wrap gap-2 mt-1">
<button className="px-4 py-2 bg-white border border-slate-200 hover:border-lime-500 hover:text-lime-700 hover:bg-lime-50 rounded-full text-base transition-all shadow-sm text-slate-600">
                                Consultar Acordos
                            </button>
<button className="px-4 py-2 bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-full text-base transition-all shadow-sm text-slate-600">
                                Apoio Jurídico
                            </button>
<button className="px-4 py-2 bg-white border border-slate-200 hover:border-lime-500 hover:text-lime-700 hover:bg-lime-50 rounded-full text-base transition-all shadow-sm text-slate-600">
                                Notícias SITEU
                            </button>
</div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-none">
<span className="text-sm font-semibold text-slate-600">JP</span>
</div>
<div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-none shadow-md text-lg max-w-[85%]">
                        Quais são as novas tabelas salariais para 2024?
                    </div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-100 to-blue-50 border border-lime-200 flex items-center justify-center flex-none shadow-sm">
<i className="w-5 h-5 text-blue-700" data-lucide="bot"></i>
</div>
<div className="bg-slate-50 border border-slate-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5 w-fit">
<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
</div>

<div className="p-6 bg-white border-t border-slate-100 relative">

<div className="absolute -top-12 left-0 right-0 flex justify-center pointer-events-none">
<div className="bg-white/90 backdrop-blur border border-slate-200 shadow-sm rounded-full px-4 py-1.5 pointer-events-auto flex gap-4 text-sm font-medium text-slate-500">
<button className="text-blue-700 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="message-square"></i> Chat
                        </button>
<div className="w-px bg-slate-200"></div>
<button className="hover:text-slate-800 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="mic"></i> Voz
                        </button>
</div>
</div>
<div className="relative flex items-end gap-3">
<button className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
<div className="flex-1 relative">
<textarea className="w-full pl-5 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none text-lg text-slate-800 placeholder:text-slate-400 shadow-inner" placeholder="Escreve a tua dúvida..." rows="1"></textarea>
<button className="absolute right-3 bottom-3 p-1.5 bg-white rounded-lg text-slate-400 hover:text-lime-600 transition-colors shadow-sm border border-slate-100">
<i className="w-5 h-5" data-lucide="mic"></i>
</button>
</div>
<button className="p-4 bg-lime-500 hover:bg-lime-600 text-white rounded-2xl shadow-lg shadow-lime-500/20 transition-all hover:scale-105 active:scale-95">
<i className="w-6 h-6" data-lucide="send-horizontal"></i>
</button>
</div>
<div className="text-center mt-3">
<p className="text-xs text-slate-400 font-medium">SiteuBot utiliza IA e pode cometer erros. Verifica em <a className="text-blue-600 hover:underline" href="#">siteu.pt</a>.</p>
</div>
</div>
</section>
</main>


    </>
  );
}
