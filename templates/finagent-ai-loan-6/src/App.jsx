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



        // Auto-resize for textarea
        const textarea = document.querySelector('textarea');
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
            if(this.value === '') this.style.height = '48px';
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
      

<header className="flex md:px-8 sticky transition-all bg-white/80 h-16 z-30 border-transparent border-b pr-4 pl-4 top-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm shadow-blue-200">
<iconify-icon icon="lucide:zap" strokeWidth="2" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="text-sm font-semibold tracking-tight text-slate-900 leading-none">FinAgent AI</div>
<div className="text-xs text-slate-500 font-medium mt-0.5">Chytrý výběr půjčky</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors hidden md:block">Jak to funguje?</button>
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200 font-medium text-xs tracking-tight">
                JD
            </div>
</div>
</header>

<main className="flex-1 flex flex-col relative overflow-hidden">

<div className="flex-1 overflow-y-auto w-full scroll-smooth pb-32 px-4 md:px-6">
<div className="md:pt-20 w-full max-w-3xl mr-auto ml-auto pt-12">

<div className="flex flex-col items-center justify-center mb-16 text-center fade-in-up">
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
<iconify-icon icon="lucide:wallet" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h1 className="md:text-3xl text-2xl font-semibold text-slate-900 tracking-tight mb-3" style={{}}>Ahoj, jsem FinAgent.</h1>
<p className="text-slate-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Pomohu ti najít nejvýhodnější půjčku podle tvé situace. Začneme?
                    </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl mt-10">
<button className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/50 transition-all group gap-2">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:banknote" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-700 group-hover:text-blue-700">Osobní půjčka</span>
</button>
<button className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/50 transition-all group gap-2">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:refresh-ccw" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-700 group-hover:text-blue-700">Konsolidace</span>
</button>
<button className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/50 transition-all group gap-2">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:home" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-700 group-hover:text-blue-700">Hypotéka</span>
</button>
<button className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/50 transition-all group gap-2">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:car" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-700 group-hover:text-blue-700">Autoúvěr</span>
</button>
</div>
</div>


<div className="flex flex-col items-end mb-10 fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="bg-slate-100 text-slate-900 px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] md:max-w-[60%] text-[15px] leading-relaxed">
                        Hledám půjčku 150 000 Kč na nové auto. Splácet chci 5 let.
                    </div>
</div>

<div className="flex gap-4 mb-12 fade-in-up w-full" style={{animationDelay: '0.2s'}}>
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-200 mt-1">
<iconify-icon icon="lucide:zap" strokeWidth="2" width="16"></iconify-icon>
</div>
<div className="flex-1 space-y-5 max-w-2xl">
<div className="text-[15px] text-slate-700 leading-relaxed">
<p>Rozumím. Pro účel nákupu automobilu a částku  se splatností 60 měsíců jsem našel 3 relevantní nabídky. Trh se aktuálně pohybuje s úrokem kolem 5-6 % p.a.</p>
</div>

<div className="w-full bg-white border border-blue-100 rounded-xl shadow-sm overflow-hidden relative group">

<div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
<div className="p-5 md:p-6">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 font-bold tracking-tighter">
                                            TB
                                        </div>
<div>
<div className="font-semibold text-slate-900">Půjčka na auto</div>
<div className="text-xs text-slate-500">Transparentní banka</div>
</div>
</div>
<span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium border border-blue-100">Nejvýhodnější</span>
</div>
<div className="grid grid-cols-3 gap-4 mb-6 border-t border-b border-slate-50 py-4">
<div>
<div className="text-xs text-slate-400 mb-1">Úrok od</div>
<div className="text-lg font-semibold text-slate-900">4,9 %</div>
</div>
<div>
<div className="text-xs text-slate-400 mb-1">RPSN</div>
<div className="text-lg font-semibold text-slate-900">5,1 %</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-400 mb-1">Měsíčně</div>
<div className="text-lg font-semibold text-blue-600">2 850 Kč</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all shadow-sm shadow-blue-200 flex justify-center items-center gap-2">
                                        Srovnat nabídky
                                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors">
                                        Detail
                                    </button>
</div>
</div>
</div>
<div className="text-[15px] text-slate-700 leading-relaxed">
<p>Tato nabídka nevyžaduje ručitele ani havarijní pojištění v ceně. Chcete vidět i další varianty?</p>
</div>
</div>
</div>

<div className="flex gap-4 mb-4 opacity-0">
<div className="w-8 h-8"></div> 
<div className="flex items-center bg-slate-50 rounded-full px-4 py-2 w-fit">
<div className="flex space-x-1">
<div className="w-1.5 h-1.5 bg-blue-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-blue-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-blue-400 rounded-full typing-dot"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full bg-gradient-to-t from-white via-white/95 to-transparent pt-12 pb-6 px-4 md:px-6 sticky bottom-0 z-40">
<div className="max-w-3xl mx-auto relative">
<div className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 ring-1 ring-slate-900/5 focus-within:ring-blue-500/20 focus-within:border-blue-500/30 transition-all duration-300">
<form className="flex items-end p-2 md:p-2.5" onsubmit="event.preventDefault();">

<button className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors flex-shrink-0" title="Nahrát dokument" type="button">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="22"></iconify-icon>
</button>
<textarea className="w-full bg-transparent border-0 focus:ring-0 text-slate-900 placeholder:text-slate-400 resize-none py-3 px-3 max-h-48 overflow-y-auto text-[15px] leading-relaxed" placeholder="Napiš, jakou půjčku hledáš…" rows="1" style={{minHeight: '48px'}}></textarea>

<button className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all flex-shrink-0 shadow-sm shadow-blue-200 group" type="submit">
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up" strokeWidth="2.5" width="20"></iconify-icon>
</button>
</form>
</div>
<div className="text-center mt-3 flex items-center justify-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:shield-check" width="12"></iconify-icon>
<p className="text-[11px] text-slate-400 font-medium tracking-tight">FinAgent AI porovnává pouze ověřené poskytovatele s licencí ČNB.</p>
</div>
</div>
</div>
</main>


    </>
  );
}
