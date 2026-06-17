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
      
<main className="w-full max-w-sm bg-white rounded-3xl shadow-sm border border-zinc-200 overflow-hidden relative">

<header className="flex items-center justify-between p-6 pb-2">
<button className="p-2 -ml-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200">
<iconify-icon height="24" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none">
                Omitir
            </button>
</header>
<div className="px-6 pb-8">

<div className="flex flex-col items-center mb-8 mt-2 text-center">
<div className="relative w-20 h-20 rounded-full mb-4 bg-zinc-100 border border-zinc-200 flex items-center justify-center overflow-hidden shadow-sm">
<img alt="Foto del chofer" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-1">Viaje finalizado</h1>
<p className="text-sm text-zinc-500">¿Cómo fue tu viaje con <span className="font-medium text-zinc-800">Alejandro</span>?</p>

<div className="flex gap-1.5 mt-4 text-amber-400">
<button className="focus:outline-none hover:scale-110 transition-transform"><iconify-icon height="28" icon="solar:star-bold" width="28"></iconify-icon></button>
<button className="focus:outline-none hover:scale-110 transition-transform"><iconify-icon height="28" icon="solar:star-bold" width="28"></iconify-icon></button>
<button className="focus:outline-none hover:scale-110 transition-transform"><iconify-icon height="28" icon="solar:star-bold" width="28"></iconify-icon></button>
<button className="focus:outline-none hover:scale-110 transition-transform"><iconify-icon height="28" icon="solar:star-bold" width="28"></iconify-icon></button>
<button className="focus:outline-none hover:scale-110 transition-transform"><iconify-icon height="28" icon="solar:star-bold" width="28"></iconify-icon></button>
</div>
</div>

<div className="space-y-5">
<div className="flex items-center gap-4">
<div className="h-px bg-zinc-100 flex-1"></div>
<h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Añadir propina</h2>
<div className="h-px bg-zinc-100 flex-1"></div>
</div>

<div className="grid grid-cols-4 gap-2.5">
<button className="py-3.5 rounded-xl border border-zinc-200 text-zinc-700 font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all focus:outline-none">
                        $10
                    </button>

<button className="py-3.5 rounded-xl border-2 border-zinc-900 bg-zinc-900 text-white font-medium shadow-sm transition-all focus:outline-none relative overflow-hidden flex flex-col items-center justify-center">
<span className="text-xs font-medium opacity-70 mb-0.5 leading-none">15%</span>
<span className="leading-none">$15</span>
</button>
<button className="py-3.5 rounded-xl border border-zinc-200 text-zinc-700 font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all focus:outline-none flex flex-col items-center justify-center">
<span className="text-xs text-zinc-400 mb-0.5 leading-none">20%</span>
<span className="leading-none">$20</span>
</button>
<button className="py-3.5 rounded-xl border border-zinc-200 text-zinc-700 font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all focus:outline-none flex flex-col items-center justify-center">
<span className="text-xs text-zinc-400 mb-0.5 leading-none">25%</span>
<span className="leading-none">$25</span>
</button>
</div>

<div className="relative mt-2 group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="text-zinc-400 font-medium group-focus-within:text-zinc-900 transition-colors">$</span>
</div>
<input className="w-full pl-8 pr-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-sm font-medium text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all shadow-sm" placeholder="Ingresar otro monto" type="number"/>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400" height="16" icon="solar:pen-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>

<div className="mt-8">
<button className="w-full py-3.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 active:scale-[0.98]">
                    Confirmar $15.00
                </button>
</div>
</div>
</main>

    </>
  );
}
