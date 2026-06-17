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
      

<div className="w-full max-w-md p-4" style={{background: 'linear-gradient(rgba(255, 255, 255, 0.5), transparent)', border: '1px solid rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px', borderRadius: '1.5rem', backdropFilter: 'blur(10px)'}}>

<div className="bg-white/95 rounded-xl shadow-2xl ring-1 ring-gray-200 overflow-hidden backdrop-blur-sm">
<div className="p-6 sm:p-8">

<div className="flex items-center justify-between mb-8">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                        Calculateur de revenus
                    </h2>
<button aria-label="Fermer" className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:close-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="text-center mb-10 space-y-4">
<div className="text-4xl sm:text-5xl font-semibold tracking-tight text-indigo-600">
                        147.250 F CFA
                    </div>
<p className="text-base text-gray-500 max-w-[280px] mx-auto leading-relaxed">
                        Revenu net après déduction automatique des frais de commission de 5%.
                    </p>
</div>

<div className="space-y-8">

<div className="space-y-4">
<div className="flex justify-between items-baseline">
<label className="text-base font-medium text-gray-700">Glissez pour définir votre CA</label>
<span className="text-base font-semibold text-gray-900">155.000 F CFA</span>
</div>

<div className="relative w-full h-1.5 bg-gray-100 rounded-full flex items-center cursor-pointer group">

<div className="absolute h-full bg-indigo-600 w-[78%] rounded-full group-hover:bg-indigo-500 transition-colors"></div>

<div className="absolute left-[78%] -translate-x-1/2 w-5 h-5 bg-white border-[3px] border-indigo-600 rounded-full shadow-sm ring-4 ring-transparent focus-within:ring-indigo-600/20 transition-all" tabindex="0"></div>
</div>
<p className="text-sm text-gray-500">Veuillez définir votre chiffre d'affaires.</p>
</div>

<div className="flex justify-center">
<div className="inline-flex bg-gray-100/80 p-1 rounded-xl">
<button className="px-5 py-2 text-base font-medium text-gray-900 bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5 transition-all">
                                F CFA
                            </button>
<button className="px-5 py-2 text-base font-medium text-gray-500 hover:text-gray-900 rounded-lg transition-colors">
                                €
                            </button>
<button className="px-5 py-2 text-base font-medium text-gray-500 hover:text-gray-900 rounded-lg transition-colors">
                                $
                            </button>
</div>
</div>

<button className="w-full bg-[#0A0A0A] hover:bg-gray-800 text-white text-base font-medium py-3.5 px-4 rounded-[14px] flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                        Ouvrir ma boutique maintenant
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
