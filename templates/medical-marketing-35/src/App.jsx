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
      


<div className="relative w-full max-w-[540px] aspect-[4/5] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 group select-none">

<div className="absolute inset-0 z-0">

<img alt="Office Desk Dark" className="w-full h-full object-cover opacity-40 grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-[-10%] right-[-10%] w-[80%] h-[40%] bg-[#BB1E59] rounded-full mix-blend-screen filter blur-[100px] opacity-25"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[40%] bg-[#FC4E2B] rounded-full mix-blend-screen filter blur-[90px] opacity-15"></div>

<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>

<div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
</div>

<div className="relative z-10 h-full flex flex-col items-center justify-between py-14 px-10 text-center">

<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg mb-4">
<div className="p-1 bg-gradient-to-br from-[#FC4E2B] to-[#BB1E59] rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-white/90 tracking-wide uppercase">Leadflow Marketing Médico</span>
</div>

<div className="flex-1 flex flex-col justify-center items-center space-y-3 mt-4">
<h1 className="text-5xl text-white leading-[1.15] tracking-tight font-medium drop-shadow-2xl">
                    Se sua clínica <br/> já fatura
                    <span className="block mt-4 mb-2 font-serif-italic bg-gradient-to-r from-[#FC4E2B] via-[#E03545] to-[#BB1E59] bg-clip-text text-transparent pb-1 leading-tight">
                        +300 mil/ano
                    </span>
<span className="block text-4xl text-white/80 mt-2 font-normal">
                        e mesmo assim vive <br/> no limite...
                    </span>
</h1>
<p className="text-3xl text-white mt-8 font-medium tracking-tight leading-tight">
                    o problema não é <br/>
<span className="font-serif-italic text-[#FC4E2B] text-4xl mt-1 block">marketing.</span>
</p>
</div>

<div className="w-full flex flex-col items-center gap-10 pb-6">

<p className="text-xl text-gray-300 font-normal leading-relaxed max-w-sm mx-auto opacity-80">
                    Clínica que passa de 300k/ano sem estrutura não cresce. Ela só se desgasta.
                </p>

<div className="flex flex-col items-center gap-4 cursor-pointer group/cta">
<span className="text-lg font-medium text-white tracking-wide group-hover/cta:text-[#FC4E2B] transition-colors duration-300">
                        Leia a legenda
                    </span>
<div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md group-hover/cta:bg-white/10 transition-all duration-300 shadow-2xl">
<iconify-icon className="text-white text-2xl group-hover/cta:translate-y-1 transition-transform duration-300" icon="solar:arrow-down-linear"></iconify-icon>

<div className="absolute inset-0 rounded-full border border-white/20 animate-[ping_2s_ease-in-out_infinite] opacity-20"></div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
