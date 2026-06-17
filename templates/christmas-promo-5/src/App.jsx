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
      

<div className="fixed inset-0 snow-bg pointer-events-none z-0"></div>
<div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/10 via-transparent to-transparent pointer-events-none z-0"></div>

<div className="fixed -top-20 -left-20 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="fixed -top-20 -right-20 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

<div className="absolute top-0 w-full max-w-7xl mx-auto flex justify-between pointer-events-none z-10 px-4 sm:px-10">

<div className="relative">

<div className="absolute left-4 -top-10 sway-slow">
<div className="w-[1px] h-32 bg-white/30 mx-auto"></div>
<div className="w-12 h-12 -mt-1 rounded-full bg-gradient-to-br from-[#FCD34D] to-[#78350F] shadow-[0_0_20px_rgba(251,191,36,0.3)] relative flex items-center justify-center">
<div className="absolute top-0 w-3 h-2 bg-[#78350F] rounded-sm"></div>

<div className="w-full h-full opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-full"></div>
</div>
</div>

<div className="absolute left-20 -top-10 sway-fast delay-700">
<div className="w-[1px] h-20 bg-white/30 mx-auto"></div>
<div className="w-10 h-10 -mt-1 rounded-full bg-gradient-to-br from-red-500 to-red-900 shadow-[0_0_20px_rgba(220,38,38,0.4)] relative flex items-center justify-center">
<div className="absolute top-0 w-3 h-2 bg-red-900 rounded-sm"></div>
<div className="w-full h-full opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-full"></div>
</div>
</div>
</div>

<div className="relative">

<div className="absolute right-12 -top-10 sway-med">
<div className="w-[1px] h-24 bg-white/30 mx-auto"></div>
<div className="w-11 h-11 -mt-1 rounded-full bg-gradient-to-br from-[#FCD34D] to-[#78350F] shadow-[0_0_20px_rgba(251,191,36,0.3)] relative flex items-center justify-center">
<div className="absolute top-0 w-3 h-2 bg-[#78350F] rounded-sm"></div>
<div className="w-full h-full opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-full"></div>
</div>
</div>

<div className="absolute right-32 -top-10 sway-slow delay-300">
<div className="w-[1px] h-36 bg-white/30 mx-auto"></div>
<div className="w-4 h-8 -mt-1 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] relative"></div>
</div>
</div>
</div>
<main className="z-20 flex flex-col sm:pt-16 w-full max-w-4xl pt-10 pb-10 relative items-center">

<div className="mb-6 relative scale-90 sm:scale-100">
<h1 className="font-['Playfair_Display'] text-5xl font-black tracking-tight leading-none text-center sm:text-7xl md:text-6xl">
<span className="title-red inline-block mr-2">B4NC4</span>
<span className="text-gold inline-block italic font-serif mr-2">DE</span>
<span className="title-red inline-block">NATAL</span>
</h1>
</div>

<div className="space-y-4 text-center max-w-2xl mx-auto mb-10">
<p className="sm:text-lg uppercase text-sm font-normal text-gray-300 tracking-wide">
            GANHE ATÉ <span className="text-red-500 font-bold">300tinhos</span> DE B4NC4<br className="hidden sm:block"/>
                PARA APROVEITAR AINDA HOJE!
        </p>
<div className="py-2">
<h2 className="uppercase leading-snug text-xl font-bold text-red-600 tracking-tight drop-shadow-sm sm:text-2xl md:text-2xl">
                CADASTROU, GANHOU A<br/>
                    B4NC4! SIMPLES ASSIM!
            </h2>
</div>
<p className="text-gray-400 text-sm sm:text-base font-normal max-w-md mx-auto">
            Clique no botão para entrar no grupo<br/>
                onde iremos dar banca <span className="text-red-500 font-semibold">TODOS OS DIAS</span>:
        </p>
</div>

<div className="relative w-full max-w-md mx-auto group mt-4">

<div className="absolute -top-6 -left-4 z-30 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-xl transform -rotate-12 transition-transform duration-300 group-hover:-rotate-6">
</div>

<div className="absolute -inset-1 bg-red-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500">
</div>
<a className="block relative w-full" href="#">
<button className="btn-glossy w-full text-white font-semibold text-lg sm:text-xl py-5 px-8 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3">
<span className="text-shadow uppercase tracking-wide ml-4">QUERO RECEBER MINHA BANCA</span>
</button>
</a>
</div>

<div className="mt-12 text-center space-y-1">
<p className="text-gray-200 text-xs sm:text-sm font-medium">
<span className="text-white font-bold">AVISO:</span> Essa oportunidade vai
        </p>
<p className="text-gray-200 text-xs sm:text-sm font-medium">
            sumir nas próximas horas!
        </p>
</div>
</main>

<div className="fixed bottom-10 right-10 text-gray-700/30 animate-pulse">
</div>


    </>
  );
}
