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
      

<nav className="fixed top-0 w-full z-50 border-b border-emerald-200/60 bg-white/80 backdrop-blur-md" style={{}}>
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="h-8 w-8 bg-emerald-900 text-white flex items-center justify-center rounded-lg text-xs font-semibold tracking-tighter transition-transform group-hover:scale-105" style={{}}>
                    T&amp;P
                </div>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-500" style={{}}>
<a className="hover:text-emerald-900 transition-colors" href="#" style={{}}>Masculino</a>
<a className="hover:text-emerald-900 transition-colors" href="#" style={{}}>Feminino</a>
<a className="hover:text-emerald-900 transition-colors" href="#" style={{}}>Acessórios</a>
<a className="hover:text-emerald-900 transition-colors" href="#" style={{}}>Coleções</a>
</div>

<div className="flex items-center gap-4">
<button className="p-2 hover:bg-emerald-100 rounded-md transition-colors text-emerald-500 hover:text-emerald-900" style={{}}>
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 hover:bg-emerald-100 rounded-md transition-colors text-emerald-500 hover:text-emerald-900 relative" style={{}}>
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 h-2 w-2 bg-cyan-500 rounded-full border border-white"></span>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pr-6 pb-20 pl-6">
<div className="max-w-5xl mx-auto">

<div className="text-center mb-16 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 shadow-sm text-xs font-medium text-emerald-600 mb-4" style={{}}>
<span className="flex h-2 w-2 rounded-full bg-sky-500"></span>
                    Nova Identidade Visual
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900" style={{}}>Conceito de Marca</h2>
<p className="text-emerald-500 text-lg font-light max-w-xl mx-auto" style={{}}>
                    Design minimalista focado em performance e elegância. A união entre a estética urbana e a funcionalidade esportiva.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">

<div className="relative group bg-white border border-emerald-200 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[400px] shadow-sm hover:shadow-md transition-all duration-500" style={{}}>
<div className="absolute top-6 left-6 text-xs font-medium text-emerald-400 tracking-wide uppercase" style={{}}>Primário</div>

<div className="flex flex-col items-center transform group-hover:scale-110 transition-transform duration-500 ease-out">
<h1 className="text-8xl md:text-9xl font-semibold tracking-tighter text-emerald-900 leading-none select-none" style={{}}>
                            T&amp;P
                        </h1>
<span className="mt-4 text-xs tracking-[0.4em] font-medium text-emerald-500 uppercase ml-1" style={{}}>
                            Moda Fitness
                        </span>
</div>
</div>

<div className="relative group bg-emerald-900 border border-emerald-800 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[400px] shadow-xl overflow-hidden" style={{}}>
<div className="bg-gradient-to-tr from-emerald-800/50 to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
<div className="absolute top-6 left-6 text-xs font-medium text-emerald-500 tracking-wide uppercase" style={{}}>Invertido</div>

<div className="relative z-10 flex flex-col items-center transform group-hover:scale-110 transition-transform duration-500 ease-out">
<h1 className="text-8xl md:text-9xl font-semibold tracking-tighter text-white leading-none select-none">
                            T&amp;P
                        </h1>
<span className="mt-4 text-xs tracking-[0.4em] font-medium text-emerald-400 uppercase ml-1" style={{}}>
                            Moda Fitness
                        </span>
</div>
</div>
</div>

<div className="space-y-12">
<div className="flex items-center justify-between border-b border-emerald-200 pb-4" style={{}}>
<h3 className="text-lg font-medium tracking-tight">Aplicações de Interface</h3>
<div className="flex gap-2">
<span className="h-3 w-3 rounded-full bg-emerald-900 border border-emerald-200" style={{}}></span>
<span className="h-3 w-3 rounded-full bg-white border border-emerald-200" style={{}}></span>
<span className="h-3 w-3 rounded-full bg-cyan-500 border border-emerald-200" style={{}}></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white border border-emerald-200 rounded-xl overflow-hidden hover:border-emerald-300 transition-colors group" style={{}}>
<div className="h-48 bg-emerald-50 flex items-center justify-center relative" style={{}}>

<div className="bg-white px-3 py-1.5 rounded shadow-sm border border-emerald-100 flex items-center gap-2" style={{}}>
<span className="font-semibold tracking-tighter text-sm">T&amp;P</span>
<div className="h-3 w-[1px] bg-emerald-200" style={{}}></div>
<span className="text-[10px] text-emerald-500 uppercase tracking-widest" style={{}}>Essencial</span>
</div>

<button className="absolute top-3 right-3 p-1.5 bg-white/50 backdrop-blur rounded-full text-emerald-400 hover:text-indigo-500 transition-colors" style={{}}>
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<div className="">
<h4 className="text-sm font-medium text-emerald-900" style={{}}>Top Performance Tech</h4>
<p className="text-xs text-emerald-500 mt-1" style={{}}>Coleção Urbana</p>
</div>
<span className="text-sm font-medium text-emerald-900" style={{}}>R$ 129</span>
</div>
<button className="w-full mt-3 py-2 border border-emerald-200 rounded-lg text-xs font-medium hover:bg-emerald-900 hover:text-white hover:border-emerald-900 transition-all" style={{}}>
                                Adicionar
                            </button>
</div>
</div>

<div className="bg-white border border-emerald-200 rounded-xl overflow-hidden flex flex-col relative" style={{}}>
<div className="h-6 bg-emerald-50 border-b border-emerald-100 flex items-center justify-center gap-1" style={{}}>
<div className="w-16 h-2 bg-emerald-200 rounded-full" style={{}}></div>
</div>
<div className="p-6 flex flex-col items-center justify-center space-y-6 flex-1">
<div className="text-center">
<div className="h-12 w-12 bg-emerald-900 text-white rounded-xl flex items-center justify-center mx-auto mb-3 text-lg font-semibold tracking-tighter shadow-lg shadow-cyan-500/20" style={{}}>
                                    T&amp;P
                                </div>
<h4 className="text-sm font-medium">Bem-vindo de volta</h4>
<p className="text-xs text-emerald-400 mt-1" style={{}}>Acesse sua conta para continuar</p>
</div>
<div className="w-full space-y-3">
<div className="h-9 bg-emerald-50 border border-emerald-200 rounded-lg w-full flex items-center px-3 text-xs text-emerald-400" style={{}}>
<iconify-icon className="mr-2" icon="solar:letter-linear" width="16"></iconify-icon>
                                    email@exemplo.com
                                </div>
<div className="h-9 bg-emerald-900 text-white rounded-lg w-full flex items-center justify-center text-xs font-medium shadow-lg shadow-emerald-900/10 cursor-pointer" style={{}}>
                                    Entrar
                                </div>
</div>
</div>
</div>

<div className="bg-white border border-emerald-200 rounded-xl p-6 flex flex-col justify-between" style={{}}>
<div>
<div className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-6" style={{}}>Tipografia</div>
<div className="space-y-6">
<div>
<span className="block text-4xl font-semibold tracking-tighter text-emerald-900" style={{}}>Aa</span>
<span className="text-xs text-emerald-500" style={{}}>Inter Semibold (Títulos)</span>
</div>
<div>
<span className="block text-4xl font-light tracking-tight text-emerald-900" style={{}}>Aa</span>
<span className="text-xs text-emerald-500" style={{}}>Inter Light (Corpo)</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-emerald-100" style={{}}>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-emerald-900 shadow-sm" style={{}}></div>
<div className="h-8 w-8 rounded bg-emerald-500 shadow-sm" style={{}}></div>
<div className="h-8 w-8 rounded bg-emerald-100 border border-emerald-200" style={{}}></div>
</div>
<span className="text-[10px] text-emerald-400 mt-2 block uppercase tracking-wider" style={{}}>Paleta Monocromática</span>
</div>
</div>
</div>
</div>

<div className="mt-24 border-t border-emerald-200 pt-16 pb-8" style={{}}>
<div className="flex flex-col md:flex-row justify-between items-end gap-8">
<div>
<div className="text-2xl font-semibold tracking-tighter text-emerald-900 mb-2" style={{}}>T&amp;P</div>
<p className="text-sm text-emerald-500 max-w-xs" style={{}}>
                            Redefinindo a moda fitness com tecnologia e design minimalista.
                        </p>
</div>
<div className="flex gap-4">
<button className="h-10 w-10 flex items-center justify-center rounded-full border border-emerald-200 text-emerald-500 hover:border-emerald-900 hover:text-emerald-900 transition-all" style={{}}>
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</button>
<button className="h-10 w-10 flex items-center justify-center rounded-full border border-emerald-200 text-emerald-500 hover:border-emerald-900 hover:text-emerald-900 transition-all" style={{}}>
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-400" style={{}}>
<p>© 2024 T&amp;P Moda Fitness. Todos os direitos reservados.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-emerald-900" href="#" style={{}}>Privacidade</a>
<a className="hover:text-emerald-900" href="#" style={{}}>Termos</a>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
