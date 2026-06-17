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
      

<div className="flex flex-wrap gap-12 justify-center items-center w-full max-w-7xl">

<div className="relative w-[375px] h-[812px] rounded-[40px] shadow-2xl overflow-hidden border flex flex-col bg-white border-neutral-100" style={{}}>

<div className="h-14 flex justify-between items-end px-6 pb-2">
<span className="text-xs font-semibold text-neutral-900" style={{}}>9:41</span>
<div className="flex gap-1.5 items-center">
<div className="w-4 h-4 rounded-sm opacity-20 bg-neutral-900" style={{}}></div>
<div className="w-4 h-4 rounded-sm opacity-20 bg-neutral-900" style={{}}></div>
<div className="w-6 h-3 border rounded-[4px] relative border-neutral-300" style={{}}>
<div className="absolute left-0.5 top-0.5 bottom-0.5 right-1 rounded-[2px] bg-neutral-900" style={{}}></div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col px-8 pt-10 pb-24 overflow-y-auto no-scrollbar">

<div className="flex mb-12 items-center justify-between">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 text-neutral-600" style={{}}>
<svg aria-hidden="true" className="lucide lucide-flame w-5 h-5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<div className="px-3 py-1 rounded-full bg-neutral-100" style={{}}>
<span className="text-xs font-medium text-neutral-600" style={{}}>Free Mode</span>
</div>
</div>

<div className="flex flex-col text-center mt-4 items-center">

<h1 className="leading-[1.1] text-3xl font-semibold text-neutral-900 tracking-tight mb-4" style={{}}>Welcome Back Lilly!</h1>
<div className="w-full space-y-4">
<button className="transition-colors hover:bg-neutral-800 shadow-neutral-200 text-base font-medium text-white bg-neutral-900 w-full rounded-full pt-8 pb-8 shadow-lg">
                            Start Test
                        </button>
<button className="transition-colors hover:bg-neutral-50 text-base font-medium text-neutral-900 bg-white w-full border-neutral-200 border rounded-full pt-8 pb-8">
                            Solve a Question
                        </button>
</div>
</div>

<div className="mt-12 w-full p-4 rounded-2xl border flex items-center gap-4 bg-neutral-50 border-neutral-100" style={{}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600" style={{}}>
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-neutral-900" style={{}}>Yesterday's Streak</p>
<p className="text-xs text-neutral-500" style={{}}>You solved 12 problems</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-20 border-t flex justify-around items-start pt-5 px-4 bg-white border-neutral-100" style={{}}>
<div className="flex flex-col items-center gap-1 cursor-pointer group">
<svg aria-hidden="true" className="lucide lucide-home w-6 h-6 transition-transform group-hover:scale-110 text-neutral-900" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<div className="w-1 h-1 rounded-full mt-1 bg-neutral-900" style={{}}></div>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer group">
<svg aria-hidden="true" className="lucide lucide-compass w-6 h-6 group-hover:text-neutral-600 transition-colors text-neutral-400" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer group">
<svg aria-hidden="true" className="lucide lucide-user w-6 h-6 group-hover:text-neutral-600 transition-colors text-neutral-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>

<div className="relative w-[375px] h-[812px] rounded-[40px] shadow-2xl overflow-hidden border flex flex-col bg-white border-neutral-100" style={{}}>

<div className="h-14 flex justify-between items-end px-6 pb-2 z-10 bg-white">
<span className="text-xs font-semibold text-neutral-900" style={{}}>9:42</span>
<div className="flex gap-1.5 items-center">
<div className="w-4 h-4 rounded-sm opacity-20 bg-neutral-900" style={{}}></div>
<div className="w-6 h-3 border rounded-[4px] relative border-neutral-300" style={{}}>
<div className="absolute left-0.5 top-0.5 bottom-0.5 right-1 rounded-[2px] bg-neutral-900" style={{}}></div>
</div>
</div>
</div>

<div className="px-6 py-4 flex items-center gap-4 border-b border-neutral-50" style={{}}>
<button className="text-neutral-400 hover:text-neutral-600" style={{}}>
<svg aria-hidden="true" className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex-1 h-1.5 rounded-full overflow-hidden bg-neutral-100" style={{}}>
<div className="h-full w-2/3 bg-blue-500 rounded-full" style={{}}></div>
</div>
<span className="text-sm font-medium text-neutral-400" style={{}}>4/6</span>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-6 pb-32">

<h2 className="text-2xl font-semibold tracking-tight mb-8 text-neutral-900" style={{}}>
                    Which shape completes the pattern?
                </h2>

<div className="rounded-2xl p-8 mb-8 flex justify-center items-center gap-4 bg-neutral-50" style={{}}>
<div className="w-12 h-12 border-2 rounded-lg flex items-center justify-center border-neutral-900" style={{}}>
<div className="w-4 h-4 rounded-full bg-neutral-900" style={{}}></div>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 text-neutral-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="w-12 h-12 border-2 rounded-lg flex items-center justify-center border-neutral-900" style={{}}>
<div className="w-4 h-4 rounded-sm bg-neutral-900" style={{}}></div>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 text-neutral-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="w-12 h-12 border-2 border-dashed rounded-lg flex items-center justify-center shadow-sm border-neutral-300 bg-white" style={{}}>
<span className="text-lg font-medium text-neutral-400" style={{}}>?</span>
</div>
</div>

<div className="space-y-3">
<label className="group flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50" style={{}}>
<input className="peer sr-only" name="answer" type="radio"/>
<div className="w-6 h-6 rounded-full border peer-checked:border-neutral-900 peer-checked:bg-neutral-900 flex items-center justify-center transition-colors border-neutral-300" style={{}}>
<div className="w-2.5 h-2.5 rounded-full opacity-0 peer-checked:opacity-100 bg-white"></div>
</div>
<span className="text-lg font-medium group-hover:text-neutral-900 text-neutral-700" style={{}}>Circle</span>
<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-neutral-300" style={{}}></div>
</div>
</label>
<label className="group flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all shadow-sm border-neutral-900 bg-neutral-50" style={{}}>
<input checked="" className="peer sr-only" name="answer" type="radio"/>
<div className="w-6 h-6 rounded-full border flex items-center justify-center border-neutral-900 bg-neutral-900" style={{}}>
<div className="w-2.5 h-2.5 rounded-full bg-white"></div>
</div>
<span className="text-lg font-medium text-neutral-900" style={{}}>Diamond</span>
</label>
<label className="group flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50" style={{}}>
<input className="peer sr-only" name="answer" type="radio"/>
<div className="w-6 h-6 rounded-full border peer-checked:border-neutral-900 peer-checked:bg-neutral-900 flex items-center justify-center transition-colors border-neutral-300" style={{}}>
<div className="w-2.5 h-2.5 rounded-full opacity-0 peer-checked:opacity-100 bg-white"></div>
</div>
<span className="text-lg font-medium group-hover:text-neutral-900 text-neutral-700" style={{}}>Triangle</span>
</label>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 border-t flex items-center gap-4 bg-white border-neutral-100" style={{}}>
<button className="w-12 h-12 flex items-center justify-center rounded-full border hover:text-cyan-500 transition-colors border-neutral-200 text-neutral-400 hover:border-cyan-200 hover:bg-cyan-50" style={{}}>
<svg aria-hidden="true" className="lucide lucide-lightbulb w-5 h-5" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</button>
<button className="flex-1 py-4 rounded-full text-base font-medium shadow-lg transition-colors bg-neutral-900 text-white shadow-neutral-200 hover:bg-neutral-800" style={{}}>
                    Check Answer
                </button>
</div>
</div>

<div className="relative w-[375px] h-[812px] rounded-[40px] shadow-2xl overflow-hidden border flex flex-col bg-white border-neutral-100" style={{}}>

<div className="h-14 flex justify-between items-end px-6 pb-2">
<div className="px-2 py-1 rounded-md bg-neutral-400/20" style={{}}>
<span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wide" style={{}}>Highlight</span>
</div>
<div className="flex gap-1.5 items-center">
<div className="w-4 h-4 rounded-sm opacity-20 bg-neutral-900" style={{}}></div>
<div className="w-6 h-3 border rounded-[4px] relative border-neutral-300" style={{}}>
<div className="absolute left-0.5 top-0.5 bottom-0.5 right-1 rounded-[2px] bg-neutral-900" style={{}}></div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col -top-10 pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">

<div className="relative w-64 h-64 flex items-center justify-center mb-12">

<div className="absolute bottom-0 w-48 h-24 bg-indigo-500 rounded-[100%] opacity-20 blur-xl" style={{}}></div>
<div className="absolute bottom-4 w-40 h-20 bg-indigo-500 rounded-[100%] opacity-40 blur-lg mix-blend-multiply" style={{}}></div>
<div className="absolute bottom-6 w-32 h-16 border-4 rounded-[100%] opacity-80 blur-sm border-white/50 bg-indigo-400" style={{}}></div>

<div className="absolute bottom-12 animate-bounce" style={{animationDuration: '3s'}}>
<div className="relative w-28 h-28">

<div className="absolute -inset-4 rounded-full blur-2xl opacity-40 bg-cyan-400" style={{}}></div>

<div className="relative w-full h-full bg-gradient-to-tr rounded-[32px] shadow-inner flex items-center justify-center transform rotate-45 border-4 from-cyan-400 to-blue-300 border-white/40" style={{}}>

<div className="w-14 h-14 rounded-xl shadow-sm flex items-center justify-center transform -rotate-45 bg-white">
<div className="w-5 h-5 rounded-sm bg-neutral-900" style={{}}></div>
</div>
</div>
</div>
</div>

<div className="clip-path-polygon bg-gradient-to-t to-transparent from-indigo-100/50 w-32 h-32 absolute bottom-10"></div>
</div>

<h1 className="text-3xl font-semibold tracking-tight mb-2 text-center text-neutral-900" style={{}}>
                    LessonComplete!
                </h1>
<p className="text-xs font-semibold tracking-widest uppercase mt-4 mb-2 text-neutral-400" style={{}}>Total Score</p>
<div className="flex items-center gap-2">
<span className="text-5xl font-semibold tracking-tighter text-neutral-900" style={{}}>95</span>
<span className="text-2xl font-light text-neutral-300" style={{}}>/</span>
<span className="text-2xl font-medium text-neutral-400" style={{}}>100</span>
</div>
</div>

<div className="p-6 pb-8 bg-white">
<button className="w-full transition-all active:scale-[0.98] py-4 rounded-full text-base font-medium shadow-lg bg-neutral-900 hover:bg-neutral-800 text-white shadow-neutral-200" style={{}}>
                    Continue
                </button>
</div>
</div>
</div>


    </>
  );
}
