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
      

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>

<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-yellow-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animate-delay-2000"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/60 rounded-full filter blur-[100px] opacity-60"></div>
</div>

<main className="relative z-10 w-full max-w-[1400px] h-full lg:h-[85vh] lg:mx-8 grid lg:grid-cols-12 shadow-2xl shadow-blue-900/5 bg-white/40 backdrop-blur-2xl border border-white/50 lg:rounded-3xl overflow-hidden ring-1 ring-white/60">

<div className="lg:col-span-4 flex flex-col justify-between p-8 lg:p-12 bg-white/40 backdrop-blur-xl border-r border-white/40 h-full relative">

<div>
<div className="flex items-center gap-2 mb-12">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-xl font-semibold tracking-tighter text-slate-900">NEXUS<span className="text-slate-400">HUB</span></span>
</div>
<div className="space-y-2">
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Bem-vindo de volta</h1>
<p className="text-sm text-slate-500">Acesse suas ferramentas corporativas.</p>
</div>
</div>

<form className="space-y-5 mt-8" onsubmit="event.preventDefault()">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Email corporativo</label>
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
<span className="iconify" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="18"></span>
</span>
<input className="w-full bg-white/50 border border-slate-200/70 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-10 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400 hover:bg-white/80" placeholder="nome@empresa.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between items-center ml-1">
<label className="text-xs font-medium text-slate-700">Senha</label>
<a className="text-xs text-blue-600 hover:text-blue-700 font-medium hover:underline decoration-blue-600/30" href="#">Esqueceu?</a>
</div>
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
<span className="iconify" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="18"></span>
</span>
<input className="w-full bg-white/50 border border-slate-200/70 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-10 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400 hover:bg-white/80" placeholder="••••••••" type="password"/>
</div>
</div>

<div className="flex items-center gap-2 ml-1">
<label className="flex items-center cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded transition-all peer-checked:bg-slate-900 peer-checked:border-slate-900 flex items-center justify-center">
<span className="iconify text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-xs text-slate-500 ml-2 select-none">Manter conectado por 30 dias</span>
</label>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-[0.98] flex items-center justify-center gap-2">
<span>Entrar no Hub</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>

<div className="mt-8 pt-6 border-t border-slate-200/50 text-center lg:text-left">
<p className="text-xs text-slate-500">
                    Não tem acesso? <a className="text-slate-900 font-medium hover:underline decoration-slate-900/30" href="#">Solicitar credenciais</a>
</p>
</div>
</div>

<div className="hidden lg:col-span-8 lg:flex flex-col relative overflow-hidden bg-gradient-to-br from-white/20 to-white/5 p-12">

<div className="absolute top-8 right-8 flex items-center gap-4">
<div className="text-right">
<p className="text-xs font-medium text-slate-800">Status do Sistema</p>
<p className="text-xs text-emerald-600 flex items-center justify-end gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Operacional
                    </p>
</div>
</div>

<div className="flex-1 flex flex-col justify-center items-center z-10">

<div className="w-full max-w-lg relative animate-float">

<div className="h-8 bg-white/60 backdrop-blur-md rounded-t-xl border border-white/50 flex items-center px-4 gap-1.5 shadow-sm">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
<div className="ml-auto flex gap-3 text-xs text-slate-500 font-medium tracking-tight opacity-70">
<span>ferramentas</span>
<span>painel</span>
<span className="text-slate-800">resumo</span>
</div>
</div>

<div className="bg-white/30 backdrop-blur-xl border-x border-b border-white/50 rounded-b-xl p-6 shadow-2xl shadow-blue-900/5 grid gap-4">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/50 border border-white/60 p-4 rounded-lg hover:bg-white/70 transition-colors group cursor-default">
<div className="w-8 h-8 rounded-full bg-blue-100/50 text-blue-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="16"></span>
</div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Projetos Ativos</p>
<p className="text-2xl font-semibold text-slate-800 tracking-tight mt-1">24</p>
</div>
<div className="bg-white/50 border border-white/60 p-4 rounded-lg hover:bg-white/70 transition-colors group cursor-default">
<div className="w-8 h-8 rounded-full bg-yellow-100/50 text-yellow-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
</div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Equipe Online</p>
<p className="text-2xl font-semibold text-slate-800 tracking-tight mt-1">12</p>
</div>
</div>

<div className="bg-white/40 border border-white/60 rounded-lg p-4 space-y-3">
<div className="flex items-center justify-between border-b border-slate-200/50 pb-2">
<span className="text-xs font-semibold text-slate-700">Acesso Rápido</span>
<span className="iconify text-slate-400" data-icon="lucide:more-horizontal" data-width="16"></span>
</div>

<div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/50 transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
<span className="iconify" data-icon="lucide:figma" data-width="16"></span>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">Design System</p>
<p className="text-[10px] text-slate-400">Atualizado há 2m</p>
</div>
<span className="iconify text-slate-300 group-hover:text-slate-500" data-icon="lucide:chevron-right" data-width="14"></span>
</div>

<div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/50 transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
<span className="iconify" data-icon="lucide:sheet" data-width="16"></span>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">Relatório Financeiro</p>
<p className="text-[10px] text-slate-400">Editado por Ana L.</p>
</div>
<span className="iconify text-slate-300 group-hover:text-slate-500" data-icon="lucide:chevron-right" data-width="14"></span>
</div>
</div>
</div>
</div>

<div className="absolute w-64 h-40 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl -z-10 -right-4 bottom-24 animate-float-delayed transform rotate-6"></div>

<div className="absolute w-48 h-48 bg-white/20 backdrop-blur-md border border-white/30 rounded-full -z-10 left-12 top-24 animate-float transform -rotate-3"></div>
</div>

<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-slate-500/80">
<div className="max-w-xs">
<p className="text-xs leading-relaxed">
                        Acesse todos os recursos da empresa em um ambiente seguro e integrado. Design focado em produtividade.
                    </p>
</div>
<div className="flex gap-2 text-[10px] font-medium tracking-wide uppercase">
<span>v2.4.0</span>
<span>•</span>
<span>Seguro</span>
</div>
</div>
</div>
</main>

<div className="lg:hidden absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

    </>
  );
}
