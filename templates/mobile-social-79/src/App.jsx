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
      

<main className="relative bg-white w-full max-w-sm sm:max-w-md h-[850px] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-gray-100 ring-4 ring-gray-100/50">

<header className="flex justify-between items-center px-6 pt-4 pb-2 z-50">
<span className="text-sm font-semibold tracking-tight w-12 pl-1">9:41</span>

<div className="bg-black w-28 h-8 rounded-full absolute left-1/2 -translate-x-1/2 top-3 shadow-sm"></div>
<div className="flex items-center gap-1.5 w-12 justify-end pr-1">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery-full w-4 h-4" data-lucide="battery-full" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v4"></path><path d="M14 10v4"></path><path d="M22 14v-4"></path><path d="M6 10v4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</header>

<div className="flex-1 relative w-full overflow-visible flex items-center justify-center mt-4">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-64 h-64 rounded-full border border-gray-50 bg-gray-50/30"></div>
<div className="absolute w-96 h-96 rounded-full border border-gray-50/80"></div>
</div>

<div className="relative w-[340px] h-[340px] animate-fade-in-up">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="w-28 h-28 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
<img alt="Center User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>



<div className="absolute top-[8%] left-[50%] -translate-x-1/2 z-10">
<div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white transform transition hover:scale-110 duration-300">
<img className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>

<div className="absolute top-[15%] right-[18%] z-10">
<div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white transform rotate-3">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>

<div className="absolute top-[32%] right-[12%] z-10">
<div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white transform -rotate-2">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>

<div className="absolute bottom-[28%] right-[8%] z-10">
<div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white transform rotate-6">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>

<div className="absolute bottom-[10%] right-[25%] z-10">
<div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white transform -rotate-3">
<img className="w-full h-full object-cover sepia-[0.3]" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>

<div className="absolute bottom-[10%] left-[25%] z-10">
<div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white transform rotate-3">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>

<div className="absolute bottom-[25%] left-[10%] z-10">
<div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white transform -rotate-6">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="absolute top-[40%] left-[5%] z-10">
<div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white transform rotate-2">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>

<div className="absolute top-[20%] left-[15%] z-10">
<div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white transform -rotate-2">
<img className="w-full h-full object-cover grayscale-[50%]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
</div>

<div className="px-8 pb-10 pt-2 z-30 flex flex-col items-center text-center">
<h1 className="text-4xl font-semibold text-[#6D597A] tracking-tight font-poppins mb-4">You’re not alone here</h1>
<p className="leading-relaxed text-sm font-medium text-[#6D597A] font-poppins max-w-[280px] mb-10">A safe community for anonymous voices and shared understanding.</p>
<button className="group hover:bg-black shadow-gray-200 transition-all duration-300 transform active:scale-[0.98] flex overflow-hidden text-lg font-medium text-white font-poppins bg-[#6D597A] w-full rounded-full pt-5 pr-6 pb-5 pl-6 relative shadow-xl items-center justify-center">
<span className="z-10 relative">Welcome tp community</span>

<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
</button>

<div className="w-32 h-1.5 bg-gray-900 rounded-full mt-8 opacity-90"></div>
</div>
</main>


    </>
  );
}
