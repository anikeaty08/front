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
      

<div className="flex overflow-x-auto snap-x snap-mandatory w-full h-screen items-center gap-4 px-4 md:px-[35%] hide-scrollbar py-8">

<div className="snap-center shrink-0 h-full max-h-[800px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl flex flex-col relative overflow-hidden border border-neutral-200/60 select-none">

<div className="p-10 flex justify-between items-start">
<div className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center font-semibold text-lg">1</div>
<div className="text-sm font-semibold tracking-tight text-neutral-400 uppercase">Swipe &gt;&gt;&gt;</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center px-8 text-center -mt-10">
<div className="relative mb-12">
<div className="absolute inset-0 bg-neutral-100 rounded-full blur-3xl opacity-50 scale-150"></div>
<i className="w-24 h-24 text-neutral-900 relative z-10" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
</div>
<h1 className="text-5xl font-semibold tracking-tighter leading-[1.1] mb-6">
                    Stop consuming.<br/>Start creating.
                </h1>
<div className="rounded-full border-2 border-neutral-900 px-6 py-3 w-full max-w-xs mx-auto">
<p className="text-sm font-medium text-neutral-800 tracking-tight">The 5-Step System Switch</p>
</div>
</div>

<div className="mt-auto w-full px-8 pb-0">
<div className="w-full bg-neutral-50 border-t-2 border-x-2 border-neutral-100 rounded-t-3xl h-32 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center gap-8 opacity-20">
<i className="w-12 h-12" data-lucide="youtube"></i>
<i className="w-12 h-12" data-lucide="instagram"></i>
<i className="w-12 h-12" data-lucide="twitter"></i>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 h-full max-h-[800px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl flex flex-col relative overflow-hidden border border-neutral-200/60 select-none">
<div className="p-10 flex justify-between items-start">
<div className="h-10 w-10 border border-neutral-200 text-neutral-400 rounded-full flex items-center justify-center font-medium text-lg">2</div>
<div className="text-sm font-semibold tracking-tight text-neutral-400 uppercase">Swipe &gt;&gt;&gt;</div>
</div>
<div className="flex flex-col items-center px-8 text-center pt-4 z-10">
<div className="flex items-center gap-4 mb-8 text-neutral-800">
<i className="w-12 h-12 text-[#E50914]" data-lucide="clapperboard" strokeWidth="1.5"></i> 
<i className="w-6 h-6 text-neutral-300" data-lucide="arrow-right"></i>
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
<i className="w-7 h-7 text-neutral-900" data-lucide="database" strokeWidth="1.5"></i>
</div>
</div>
<h2 className="text-3xl font-semibold tracking-tighter mb-8">
                    Netflix <span className="text-neutral-300">→</span> Notion Library
                </h2>
<div className="rounded-full border-2 border-neutral-900 px-8 py-5 w-full flex items-center justify-center bg-white shadow-lg">
<p className="text-base font-medium text-neutral-900 tracking-tight leading-tight">
                        Instead of zoning out, start collecting everything that levels you up.
                    </p>
</div>
</div>

<div className="mt-auto w-full px-6 relative translate-y-2">
<div className="w-full bg-[#191919] rounded-t-2xl shadow-2xl p-4 min-h-[220px] border border-neutral-800">
<div className="flex gap-2 mb-4 opacity-50">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-[#2A2A2A] h-24 rounded-lg animate-pulse"></div>
<div className="bg-[#2A2A2A] h-24 rounded-lg animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 h-full max-h-[800px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl flex flex-col relative overflow-hidden border border-neutral-200/60 select-none">
<div className="p-10 flex justify-between items-start">
<div className="h-10 w-10 border border-neutral-200 text-neutral-400 rounded-full flex items-center justify-center font-medium text-lg">3</div>
<div className="text-sm font-semibold tracking-tight text-neutral-400 uppercase">Swipe &gt;&gt;&gt;</div>
</div>
<div className="flex flex-col items-center px-8 text-center pt-4 z-10">
<div className="flex items-center gap-4 mb-8 text-neutral-800">
<i className="w-12 h-12 text-[#FF0000]" data-lucide="youtube" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-neutral-300" data-lucide="arrow-right"></i>
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
<i className="w-7 h-7 text-neutral-900" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
</div>
<h2 className="text-3xl font-semibold tracking-tighter mb-8">
                    YouTube <span className="text-neutral-300">→</span> Daily Journal
                </h2>
<div className="rounded-full border-2 border-neutral-900 px-8 py-5 w-full flex items-center justify-center bg-white shadow-lg">
<p className="text-base font-medium text-neutral-900 tracking-tight leading-tight">
                        Don’t just watch. Document what you learned and what you’ll do with it.
                    </p>
</div>
</div>

<div className="mt-auto w-full px-6 relative translate-y-2">
<div className="w-full bg-white border border-neutral-200 rounded-t-2xl shadow-xl p-6 min-h-[220px]">
<div className="text-xs font-bold text-neutral-400 uppercase mb-4 tracking-wider">Today's Entry</div>
<div className="w-full h-2 bg-neutral-100 rounded mb-2 w-3/4"></div>
<div className="w-full h-2 bg-neutral-100 rounded mb-2"></div>
<div className="w-full h-2 bg-neutral-100 rounded mb-6 w-1/2"></div>
<div className="flex gap-2">
<div className="px-3 py-1 bg-red-50 text-red-600 text-[10px] rounded-md font-medium">Learning</div>
<div className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] rounded-md font-medium">Action</div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 h-full max-h-[800px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl flex flex-col relative overflow-hidden border border-neutral-200/60 select-none">
<div className="p-10 flex justify-between items-start">
<div className="h-10 w-10 border border-neutral-200 text-neutral-400 rounded-full flex items-center justify-center font-medium text-lg">4</div>
<div className="text-sm font-semibold tracking-tight text-neutral-400 uppercase">Swipe &gt;&gt;&gt;</div>
</div>
<div className="flex flex-col items-center px-8 text-center pt-4 z-10">
<div className="flex items-center gap-4 mb-8 text-neutral-800">
<i className="w-12 h-12 text-black" data-lucide="twitter" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-neutral-300" data-lucide="arrow-right"></i>
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
<i className="w-7 h-7 text-neutral-900" data-lucide="target" strokeWidth="1.5"></i>
</div>
</div>
<h2 className="text-3xl font-semibold tracking-tighter mb-8">
                    X <span className="text-neutral-300">→</span> Goal Planner
                </h2>
<div className="rounded-full border-2 border-neutral-900 px-8 py-5 w-full flex items-center justify-center bg-white shadow-lg">
<p className="text-base font-medium text-neutral-900 tracking-tight leading-tight">
                        Instead of arguing, get clear on your mission.
                    </p>
</div>
</div>

<div className="mt-auto w-full px-6 relative translate-y-2">
<div className="w-full bg-neutral-50 border border-neutral-200 rounded-t-2xl shadow-xl p-5 min-h-[220px]">
<div className="flex justify-between mb-4">
<div className="w-1/3 h-24 bg-white border border-neutral-200 rounded-lg shadow-sm p-3">
<div className="w-4 h-4 rounded-full border border-neutral-300 mb-2"></div>
<div className="w-12 h-1 bg-neutral-100 rounded"></div>
</div>
<div className="w-1/3 mx-2 h-24 bg-white border border-neutral-200 rounded-lg shadow-sm p-3">
<div className="w-4 h-4 rounded-full bg-neutral-900 mb-2 flex items-center justify-center"><i className="w-2 h-2 text-white" data-lucide="check"></i></div>
<div className="w-12 h-1 bg-neutral-100 rounded"></div>
</div>
<div className="w-1/3 h-24 bg-white border border-neutral-200 rounded-lg shadow-sm p-3 opacity-50"></div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 h-full max-h-[800px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl flex flex-col relative overflow-hidden border border-neutral-200/60 select-none">
<div className="p-10 flex justify-between items-start">
<div className="h-10 w-10 border border-neutral-200 text-neutral-400 rounded-full flex items-center justify-center font-medium text-lg">5</div>
<div className="text-sm font-semibold tracking-tight text-neutral-400 uppercase">Swipe &gt;&gt;&gt;</div>
</div>
<div className="flex flex-col items-center px-8 text-center pt-4 z-10">
<div className="flex items-center gap-4 mb-8 text-neutral-800">
<div className="w-12 h-12 flex items-center justify-center bg-black rounded-full">
<i className="w-6 h-6 text-white" data-lucide="music-2" strokeWidth="1.5"></i>
</div>
<i className="w-6 h-6 text-neutral-300" data-lucide="arrow-right"></i>
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
<i className="w-7 h-7 text-neutral-900" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>
<h2 className="text-3xl font-semibold tracking-tighter mb-8">
                    TikTok <span className="text-neutral-300">→</span> Monk Mode
                </h2>
<div className="rounded-full border-2 border-neutral-900 px-8 py-5 w-full flex items-center justify-center bg-white shadow-lg">
<p className="text-base font-medium text-neutral-900 tracking-tight leading-tight">
                        If you’re addicted to swiping, plug that energy into building actual discipline.
                    </p>
</div>
</div>

<div className="mt-auto w-full px-6 relative translate-y-2">
<div className="w-full bg-[#111] rounded-t-2xl shadow-xl p-5 min-h-[220px] flex flex-col items-center justify-center">
<div className="text-4xl font-semibold text-white tracking-tighter mb-2">04:00</div>
<div className="text-neutral-500 text-xs uppercase tracking-widest mb-6">Deep Work Session</div>
<div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-white"></div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 h-full max-h-[800px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl flex flex-col relative overflow-hidden border border-neutral-200/60 select-none">
<div className="p-10 flex justify-between items-start">
<div className="h-10 w-10 border border-neutral-200 text-neutral-400 rounded-full flex items-center justify-center font-medium text-lg">6</div>
<div className="text-sm font-semibold tracking-tight text-neutral-400 uppercase">Swipe &gt;&gt;&gt;</div>
</div>
<div className="flex flex-col items-center px-8 text-center pt-4 z-10">
<div className="flex items-center gap-4 mb-8 text-neutral-800">
<i className="w-12 h-12 text-[#E1306C]" data-lucide="instagram" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-neutral-300" data-lucide="arrow-right"></i>
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
<i className="w-7 h-7 text-neutral-900" data-lucide="link" strokeWidth="1.5"></i>
</div>
</div>
<h2 className="text-3xl font-semibold tracking-tighter mb-8">
                    IG <span className="text-neutral-300">→</span> Link in Bio
                </h2>
<div className="rounded-full border-2 border-neutral-900 px-8 py-5 w-full flex items-center justify-center bg-white shadow-lg">
<p className="text-base font-medium text-neutral-900 tracking-tight leading-tight">
                        Scroll less. Create more. Turn your ideas into something that lives online.
                    </p>
</div>
</div>

<div className="mt-auto w-full px-6 relative translate-y-2">
<div className="w-full bg-neutral-50 border border-neutral-200 rounded-t-2xl shadow-xl p-5 min-h-[220px] flex flex-col items-center">
<div className="w-12 h-12 bg-neutral-200 rounded-full mb-3"></div>
<div className="w-24 h-2 bg-neutral-300 rounded mb-6"></div>
<div className="w-full h-10 bg-white border border-neutral-200 rounded-lg shadow-sm mb-2"></div>
<div className="w-full h-10 bg-white border border-neutral-200 rounded-lg shadow-sm"></div>
</div>
</div>
</div>

<div className="snap-center shrink-0 h-full max-h-[800px] aspect-[4/5] bg-neutral-900 rounded-[40px] shadow-2xl flex flex-col relative overflow-hidden border border-neutral-800 select-none justify-center items-center text-center p-12">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-50"></div>
<i className="w-8 h-8 text-neutral-500 mb-8 absolute top-12 left-10" data-lucide="quote"></i>
<h2 className="text-4xl font-semibold tracking-tighter text-white leading-snug relative z-10">
                Switch the apps<br/>that <span className="text-neutral-500">drain you</span><br/>
                for the systems<br/>that <span className="text-white border-b-2 border-white pb-1">build you</span>.
            </h2>
</div>

<div className="snap-center shrink-0 h-full max-h-[800px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl flex flex-col relative overflow-hidden border border-neutral-200/60 select-none items-center justify-center p-8">
<div className="w-24 h-24 rounded-full bg-neutral-100 mb-6 overflow-hidden border-2 border-neutral-100 flex items-center justify-center">
<i className="w-10 h-10 text-neutral-400" data-lucide="user"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">@jason</h3>
<p className="text-neutral-500 text-sm mb-8 text-center max-w-[200px]">Building digital systems for modern creators.</p>
<button className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg w-full max-w-xs flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors mb-4">
<span>Get the Templates</span>
<i className="w-4 h-4" data-lucide="external-link"></i>
</button>
<div className="flex items-center gap-2 text-neutral-400 text-xs font-medium uppercase tracking-widest mt-4">
<i className="w-4 h-4" data-lucide="bookmark"></i>
<span>Save for later</span>
</div>
</div>
</div>


    </>
  );
}
