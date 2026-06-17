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



        function handleSubmit(e) {
            e.preventDefault();
            const form = document.getElementById('emailForm');
            const success = document.getElementById('successState');
            
            // Simple transition logic
            form.style.opacity = '0';
            setTimeout(() => {
                form.style.display = 'none';
                success.classList.remove('hidden');
                success.classList.add('flex', 'fade-in');
            }, 200);
        }
    
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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b to-transparent rounded-full blur-[100px] pointer-events-none z-0 from-neutral-800/20"></div>
<div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

<main className="relative z-10 w-full max-w-lg px-6 py-12 flex flex-col items-center text-center">

<div className="mb-8 flex items-center justify-center gap-2 border rounded-full px-3 py-1.5 shadow-sm backdrop-blur-md bg-neutral-900/50 border-neutral-800">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase text-neutral-300">In Arrivo</span>
</div>

<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 leading-[1.1] text-white">
            Planner TikTok 2026
            <span className="block text-neutral-500 text-2xl md:text-3xl mt-2 font-medium tracking-tight">Accesso Anticipato Gratuito</span>
</h1>
<p className="text-base md:text-lg max-w-sm mx-auto leading-relaxed mb-10 text-neutral-400">
            Domina l'algoritmo. Stiamo ultimando il design del planner definitivo per creator. Iscriviti ora per riceverlo appena esce.
        </p>

<div className="w-full max-w-sm relative group">

<div className="absolute -inset-1 bg-gradient-to-r rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500 from-neutral-800 via-neutral-700 to-neutral-800"></div>
<div className="relative bg-[#0A0A0A] border rounded-xl p-2 shadow-2xl border-neutral-800">

<form className="flex flex-col gap-2" id="emailForm" onsubmit="handleSubmit(event)">
<div className="relative flex items-center">
<div className="absolute left-3 text-neutral-500 flex items-center pointer-events-none">
<iconify-icon height="18" icon="lucide:mail" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700/50 focus:border-neutral-700 transition-all text-sm text-white bg-neutral-900/50 w-full border-neutral-800/50 border rounded-lg pt-2.5 pr-4 pb-2.5 pl-10" placeholder="Inserisci la tua email" required="" type="email"/>
</div>
<button className="w-full font-medium text-sm py-2.5 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-neutral-400 transition-all flex items-center justify-center gap-2 group/btn bg-white text-black hover:bg-neutral-200" type="submit">
                        Ottieni Accesso
                        <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform text-neutral-600" height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</form>

<div className="hidden flex-col items-center justify-center py-4 px-2 space-y-3" id="successState">
<div className="h-10 w-10 bg-indigo-500/10 rounded-full flex items-center justify-center border border-indigo-500/20 text-indigo-500">
<iconify-icon height="20" icon="lucide:check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="text-center">
<p className="text-sm font-medium text-white">Sei in lista!</p>
<p className="text-neutral-500 text-xs mt-1">Controlla la tua casella di posta.</p>
</div>
</div>
</div>
</div>

<div className="mt-6 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
<div className="flex items-center gap-4 text-xs font-medium text-neutral-500">
<span className="flex items-center gap-1.5">
<iconify-icon height="14" icon="lucide:credit-card" strokeWidth="1.5" width="14"></iconify-icon>
                    Nessun pagamento richiesto
                </span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-1.5">
<iconify-icon height="14" icon="lucide:shield-check" strokeWidth="1.5" width="14"></iconify-icon>
                    100% Gratuito
                </span>
</div>
</div>
</main>

<footer className="absolute bottom-6 w-full text-center">
<p className="text-[10px] uppercase tracking-widest font-medium text-neutral-700">Design by TikTok Planner Team</p>
</footer>


    </>
  );
}
