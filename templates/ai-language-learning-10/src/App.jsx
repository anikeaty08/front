import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[414px] h-[100dvh] sm:h-[850px] bg-white relative flex flex-col overflow-hidden sm:rounded-[2.5rem] sm:border-[8px] border-slate-900 shadow-2xl sm:my-8">

<header className="bg-white shadow-sm flex items-center justify-between px-6 py-4 z-20 relative">

<div className="flex items-center gap-3">
<div className="relative w-11 h-11 flex items-center justify-center">

<div className="absolute inset-0 bg-blue-200 rounded-full blur-md opacity-40"></div>

<div className="relative w-10 h-10 bg-blue-50 border border-blue-100/50 rounded-full flex items-center justify-center shadow-sm z-10">
<i className="w-5 h-5 text-blue-600" data-lucide="bot" strokeWidth="1.5"></i>
</div>
</div>
<span className="text-xl font-medium tracking-tight text-slate-900">Quto AI</span>
</div>

<button className="text-purple-500 hover:bg-purple-50 p-2 rounded-full transition-colors active:scale-95">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</header>

<div className="px-8 py-5 bg-slate-50/50 border-b border-slate-100 z-10 flex flex-col gap-2.5">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-600">Today's Tasks Progress</span>
<span className="text-sm font-medium text-purple-600">65%</span>
</div>
<div className="w-full h-2 bg-slate-200/60 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 rounded-full w-[65%] transition-all duration-1000 ease-out"></div>
</div>
</div>

<main className="flex-1 px-8 pt-16 pb-32 overflow-y-auto flex flex-col relative z-0 [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

<span className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-4 block">
                Quto
            </span>

<h2 className="text-3xl font-normal tracking-tight text-slate-900 leading-[1.3] mb-8">
                Today we will learn how to speak in English. Are you ready?
            </h2>

<div className="flex items-center gap-4 flex-wrap mt-2">
<button className="px-6 py-2.5 rounded-full border border-slate-200 bg-white text-base text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all font-normal shadow-sm">
                    Yes
                </button>
<span className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                    Or
                </span>
<button className="px-6 py-2.5 rounded-full border border-slate-200 bg-white text-base text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all font-normal shadow-sm">
                    Something else
                </button>
</div>
</main>

<footer className="absolute bottom-0 w-full pb-12 pt-8 flex justify-center items-center px-8 z-20 bg-gradient-to-t from-white via-white/95 to-transparent h-40 pointer-events-none">

<div className="relative w-full flex justify-center items-center pointer-events-auto mt-auto">

<button className="absolute left-0 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-all active:scale-90 shadow-sm">
<i className="w-5 h-5" data-lucide="keyboard" strokeWidth="1.5"></i>
</button>

<div className="relative flex items-center justify-center">

<div className="absolute w-28 h-28 bg-purple-300 rounded-full blur-xl opacity-40 animate-pulse pointer-events-none"></div>

<button className="relative w-20 h-20 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center text-white transition-all active:scale-95 shadow-[0_8px_24px_rgba(168,85,247,0.3)] z-10 group">
<i className="w-7 h-7 relative z-10 transition-transform group-hover:scale-110" data-lucide="mic" strokeWidth="1.5"></i>
</button>
</div>
</div>
</footer>
</div>



    </>
  );
}
