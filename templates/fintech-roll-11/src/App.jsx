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
      


<div className="relative w-full max-w-[425px] h-[1000px] bg-[#050A14] text-white shadow-2xl overflow-hidden flex flex-col justify-between select-none">

<div className="absolute inset-0 tech-grid pointer-events-none z-0"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 z-0"></div>

<header className="relative z-10 px-8 pt-16">
<div className="flex flex-col border-l-2 border-blue-500/50 pl-5">
<h1 className="text-5xl font-semibold tracking-tighter text-white leading-none">
                    NOMAD AI
                </h1>
<span className="text-sm font-medium tracking-[0.4em] text-slate-400 mt-2 block uppercase">
                    Group
                </span>
</div>
</header>

<main className="relative z-10 px-8 flex-grow flex flex-col justify-center gap-12">

<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs text-slate-300 font-medium tracking-wide uppercase">Algorithmic Finance</span>
</div>
<h2 className="text-4xl font-light tracking-tight text-white leading-[1.1]">
                    Интеллект,<br/>
                    управляющий<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-medium">капиталом.</span>
</h2>
<p className="text-base text-slate-400 font-light leading-relaxed max-w-[85%]">
                    Инвестиционные стратегии нового поколения на базе искусственного интеллекта для корпоративных клиентов.
                </p>
</div>

<div className="space-y-6 pt-4">

<div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="flex items-center justify-center w-10 h-10 rounded bg-blue-900/20 text-blue-400 shrink-0 border border-blue-500/20">
<iconify-icon icon="solar:graph-new-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-slate-100 tracking-tight">AI Предиктивная Аналитика</h3>
<p className="text-sm text-slate-500 mt-1 font-light">Анализ миллионов данных в реальном времени для точных прогнозов.</p>
</div>
</div>

<div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="flex items-center justify-center w-10 h-10 rounded bg-blue-900/20 text-blue-400 shrink-0 border border-blue-500/20">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-slate-100 tracking-tight">Хеджирование Рисков</h3>
<p className="text-sm text-slate-500 mt-1 font-light">Автоматизированная защита активов при высокой волатильности рынка.</p>
</div>
</div>

<div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="flex items-center justify-center w-10 h-10 rounded bg-blue-900/20 text-blue-400 shrink-0 border border-blue-500/20">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-slate-100 tracking-tight">Глобальные Рынки</h3>
<p className="text-sm text-slate-500 mt-1 font-light">Мгновенный доступ к ликвидности на ведущих мировых биржах.</p>
</div>
</div>
</div>
</main>

<footer className="relative z-10 bg-[#080E1C] border-t border-slate-800 p-8 pb-12">
<div className="flex items-end justify-between">
<div className="space-y-4">
<div className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:earth-linear" width="18"></iconify-icon>
<span className="text-sm font-light tracking-wide">nomadai.group</span>
</div>
<div className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="text-sm font-light tracking-wide">+7 (999) 000-00-00</span>
</div>
<div className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-sm font-light tracking-wide">Москва, Пресненская наб., 12</span>
</div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="w-24 h-24 bg-white p-1 rounded-sm">

<div className="w-full h-full border-2 border-black flex flex-wrap content-start p-0.5">
<div className="w-1/2 h-1/2 border-2 border-black p-0.5"><div className="w-full h-full bg-black"></div></div>
<div className="w-1/2 h-1/2 border-2 border-black p-0.5"><div className="w-full h-full bg-black"></div></div>
<div className="w-full h-1/2 flex">
<div className="w-1/2 h-full border-2 border-black p-0.5"><div className="w-full h-full bg-black"></div></div>
<div className="w-1/2 h-full p-1 grid grid-cols-2 gap-0.5">
<div className="bg-black"></div><div className="bg-black/10"></div>
<div className="bg-black/10"></div><div className="bg-black"></div>
</div>
</div>
</div>
</div>
<span className="text-[10px] uppercase tracking-widest text-slate-500">Scan Me</span>
</div>
</div>
</footer>
</div>

    </>
  );
}
