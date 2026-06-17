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
      

<div className="relative w-full max-w-[540px] aspect-[4/5] bg-white shadow-2xl overflow-hidden flex flex-col justify-between group selection:bg-blue-100 selection:text-blue-700">

<div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
<div className="absolute top-[-10%] right-[-10%] w-3/4 h-3/4 bg-blue-50 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-3/4 h-3/4 bg-slate-50 rounded-full blur-3xl mix-blend-multiply"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</div>

<div className="z-10 pt-8 pr-10 pl-10 relative">
<div className="flex gap-x-2 items-center gap-y-3">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon className="" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="uppercase text-sm font-semibold text-slate-900 tracking-tighter">Licita Fácil</span>
</div>
</div>

<div className="relative z-10 px-10 flex-1 flex flex-col justify-center">

<div className="mb-10 relative">
<div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
<div className="space-y-3">

<div className="flex gap-3 opacity-100 gap-x-3 gap-y-3 items-center">
<div className="w-8 h-8 rounded-full border border-red-100 bg-red-50 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="h-2 w-24 bg-slate-200 rounded-full"></div>
</div>

<div className="flex items-center gap-3 opacity-80">
<div className="w-8 h-8 rounded-full border border-slate-100 bg-white flex items-center justify-center text-slate-400 shrink-0">
<iconify-icon icon="solar:file-remove-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="h-2 w-32 bg-slate-100 rounded-full"></div>
</div>

<div className="flex items-center gap-3 opacity-60">
<div className="w-8 h-8 rounded-full border border-slate-100 bg-white flex items-center justify-center text-slate-400 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="h-2 w-20 bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-slate-100 shadow-xl rounded-lg p-3 flex items-center gap-3 animate-[bounce_3s_infinite]">
<div className="bg-blue-50 text-blue-600 rounded-md p-1">
<iconify-icon className="" icon="solar:graph-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wide text-slate-400 font-medium">Status</span>
<span className="text-xs font-semibold text-slate-900">Desclassificado</span>
</div>
</div>
</div>

<div className="space-y-6">
<h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                    5 erros que fazem <span className="text-blue-600">empresas</span> perderem licitações todos os dias.
                </h1>
<p className="text-lg md:text-xl font-normal text-slate-500 leading-relaxed max-w-sm">
                    Você pode estar cometendo um deles agora sem saber — e isso está custando contratos.
                </p>
</div>
</div>

<div className="relative z-10 p-4">
<div className="bg-slate-900 rounded-2xl p-6 flex flex-col gap-4 shadow-lg overflow-hidden relative">

<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[60px] opacity-20 translate-x-10 -translate-y-10"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-blue-400" icon="solar:bell-bing-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium text-blue-200 uppercase tracking-widest">Ação Necessária</span>
</div>
<p className="text-base font-medium text-white leading-snug">
                        Descubra onde está o seu gargalo e corrija antes da próxima disputa.
                    </p>
</div>
<div className="flex items-center justify-between mt-2 pt-4 border-t border-slate-700/50">
<span className="text-xs text-slate-400 font-medium">Toque para ler mais</span>
<iconify-icon className="text-white" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

    </>
  );
}
