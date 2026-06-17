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
      
<div className="max-w-[1600px] mx-auto space-y-2 sm:space-y-4">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 h-auto lg:h-[850px]">

<div className="sm:rounded-[2.5rem] sm:p-8 md:p-12 flex flex-col overflow-hidden text-white bg-[#7A2021] rounded-[2rem] pt-6 pr-6 pb-6 pl-6 relative">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-lg font-medium tracking-tight">Гаврилов Илья</span>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-5 py-2.5 rounded-full border border-white/20 text-sm hover:bg-white/10 transition duration-300">Что внутри</button>
<button className="hover:bg-white/10 transition duration-300 text-sm border-white/20 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5">Как это работает</button>
</div>
</div>

<div className="absolute top-32 left-8 right-8 h-px bg-white/10 hidden sm:block"></div>

<div className="flex-1 flex flex-col justify-center items-center text-center mt-8 sm:mt-0 z-10">
<h1 className="sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] text-4xl font-medium tracking-tighter max-w-3xl mr-auto ml-auto">
<span className="text-6xl font-medium opacity-90" style={{}}>Книга, собранная не за день — а за 7 лет преподавания французского.</span>
</h1><p className="mt-8 text-lg sm:text-xl text-white/70 max-w-lg font-normal leading-relaxed">
                        Внутри — живые выражения, которые используют французы каждый день.
                    </p>

<div className="w-full max-w-md mt-12 space-y-4">

<button className="group w-full bg-white text-black h-20 rounded-full p-2 flex items-center transition hover:scale-[1.01] active:scale-[0.99]">
<div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform duration-300">
<svg className="lucide lucide-smartphone w-7 h-7" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<span className="flex-1 text-center text-lg sm:text-xl font-semibold -ml-8 tracking-tight">Получить книгу «Je Parle!»</span>
</button>

<button className="group w-full bg-white/10 border border-white/10 backdrop-blur-sm text-white h-20 rounded-full p-2 flex items-center transition hover:bg-white/15">
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white shrink-0">
<svg className="lucide lucide-book-open w-7 h-7" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<span className="flex-1 text-center text-lg sm:text-xl font-medium -ml-8 tracking-tight">Посмотреть фрагмент</span>
</button>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
</div>

<div className="bg-[#EBE3D9] rounded-[2rem] sm:rounded-[2.5rem] relative overflow-hidden h-[500px] lg:h-auto group">

<div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
<button className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/60 transition text-[#7A2021]">
<svg className="lucide lucide-send w-5 h-5 ml-0.5 mt-0.5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
<div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 flex items-center gap-3">
<div className="bg-white/40 backdrop-blur-md rounded-full p-1 flex items-center h-12">
<button className="h-10 w-10 bg-[#EBE3D9] rounded-full text-xs font-semibold flex items-center justify-center shadow-sm text-[#5a4a4a]">RU</button>
<button className="h-10 w-10 text-xs font-medium text-[#7a6a6a] hover:text-[#5a4a4a] flex items-center justify-center">UA</button>
</div>
<button className="h-12 px-6 bg-white/40 backdrop-blur-md rounded-full text-sm font-semibold text-[#5a4a4a] hover:bg-white/60 transition">
                        Связаться
                    </button>
</div>

<div className="flex sm:p-16 lg:p-24 lg:translate-y-24 group-hover:translate-y-10 lg:group-hover:translate-y-20 transition-transform duration-700 ease-out pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 translate-y-12 items-center justify-center">

<div className="relative w-full max-w-lg aspect-[3/4] shadow-2xl rounded-l-md transform rotate-[-2deg]">

<div className="absolute inset-0 bg-[#7A2021] rounded-r-2xl rounded-l-sm shadow-[10px_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-white border-l-4 border-white/20">

<div className="absolute left-2 top-0 bottom-0 w-[2px] bg-black/20 blur-[1px]"></div>
<div className="text-center transform -rotate-12 translate-x-2">
<p className="text-xs tracking-widest opacity-60 uppercase mb-4">Гаврилов Илья</p>
<h2 className="text-6xl sm:text-7xl font-bold tracking-tighter leading-none italic">Jeparle!</h2>
<div className="mt-4 flex items-center justify-center gap-2 text-xs opacity-70">
<span>Avec</span>
<div className="px-1.5 py-0.5 bg-white text-[#7A2021] rounded text-[10px] font-bold">FR</div>
<span className="">French.Super</span>
</div>
</div>

<div className="absolute bottom-12 w-full h-3 bg-[#EBE3D9] shadow-sm transform rotate-[-1deg] opacity-90"></div>
</div>

<div className="absolute top-2 bottom-2 -left-4 w-4 bg-white rounded-l-sm shadow-inner border-l border-gray-200"></div>
<div className="absolute -bottom-4 left-4 right-2 h-4 bg-white rounded-b-md shadow transform skew-x-[45deg] origin-top-left z-[-1]"></div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-black/10 blur-3xl rounded-full transform scale-x-75 translate-y-12"></div>
</div>

<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-black/5 to-transparent pointer-events-none mix-blend-multiply opacity-40 rounded-[2.5rem]"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">

<div className="bg-[#EFECE2] rounded-[1.5rem] p-6 sm:p-8 flex flex-col items-start gap-4 min-h-[260px] hover:bg-[#EBE8DE] transition-colors duration-300">
<div className="w-8 h-8 bg-[#111111] rounded-full flex items-center justify-center text-white mb-2">
<svg className="lucide lucide-plus w-4 h-4 stroke-[3]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#111]">Озвучка внутри</h3>
<p className="text-base text-[#555] leading-relaxed">
                    Слушай фразы, как их произносят носители. Выражения сгруппированы по категориям. Включай и повторяй в плеере.
                </p>
</div>

<div className="bg-[#EFECE2] rounded-[1.5rem] p-6 sm:p-8 flex flex-col items-start gap-4 min-h-[260px] hover:bg-[#EBE8DE] transition-colors duration-300">
<div className="w-8 h-8 bg-[#111111] rounded-full flex items-center justify-center text-white mb-2">
<svg className="lucide lucide-plus w-4 h-4 stroke-[3]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#111]">Курс по чтению и произношению</h3>
<p className="text-base text-[#555] leading-relaxed">
                    Не умеешь читать на французском? Я подготовил бесплатный мини-курс по правилам чтения на 25 минут.
                </p>
</div>

<div className="bg-[#EFECE2] rounded-[1.5rem] p-6 sm:p-8 flex flex-col items-start gap-4 min-h-[260px] hover:bg-[#EBE8DE] transition-colors duration-300">
<div className="w-8 h-8 bg-[#111111] rounded-full flex items-center justify-center text-white mb-2">
<svg className="lucide lucide-plus w-4 h-4 stroke-[3]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#111]">Опыт преподавания и экзаменов</h3>
<p className="text-base text-[#555] leading-relaxed">
                    Готовлю учеников к экзаменам DELF/DALF много лет. Понял, как работает язык, и собрал в книге только полезное для общения.
                </p>
</div>

<div className="bg-[#EFECE2] rounded-[1.5rem] p-6 sm:p-8 flex flex-col items-start gap-4 min-h-[260px] hover:bg-[#EBE8DE] transition-colors duration-300">
<div className="w-8 h-8 bg-[#111111] rounded-full flex items-center justify-center text-white mb-2">
<svg className="lucide lucide-plus w-4 h-4 stroke-[3]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#111]">Живые выражения из Франции</h3>
<p className="text-base text-[#555] leading-relaxed">
                    То, что реально услышишь в кафе, на работе или в разговоре. Только то, что реально говорят французы.
                </p>
</div>
</div>
</div>


    </>
  );
}
