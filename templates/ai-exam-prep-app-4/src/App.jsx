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
      

<div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mr-auto ml-auto gap-x-8 gap-y-8 items-start justify-center">

<div className="relative w-full max-w-sm h-[844px] bg-gradient-to-b from-[#EFF4FF] via-[#FDFBF7] to-[#FFF] rounded-[3rem] shadow-2xl border-[6px] border-white overflow-hidden flex flex-col shrink-0">

<div className="flex justify-between items-center px-6 py-4 opacity-60">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-4 rounded-full bg-slate-800"></div>
<div className="w-4 h-4 rounded-full border border-slate-800"></div>
</div>
</div>

<div className="px-6 mt-4">
<div className="flex justify-between items-start">
<div className="">
<p className="text-sm text-slate-500" style={{}}>Good morning, Lily</p>
<h1 className="font-novel text-3xl text-slate-900 mt-1 tracking-tight">Day 24 <span className="text-slate-400 font-light text-xl">of Diligence</span></h1>
</div>
<button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-600 transition">
<svg aria-hidden="true" className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
</div>


<div className="flex-1 px-6 mt-6 flex flex-col gap-4">

<button className="group relative w-full bg-slate-900 text-white p-6 rounded-3xl text-left shadow-lg overflow-hidden transition-transform active:scale-95">
<div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-full blur-2xl -mr-10 -mt-10 opacity-50 group-hover:opacity-70 transition"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-full text-xs font-medium border border-slate-700">Exam Mode</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-6 h-6 text-slate-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<h2 className="font-novel text-2xl tracking-tight mb-1">Mock Exam</h2>
<p className="text-slate-400 text-sm">Mathematics • Grade 11</p>
</div>
</button>

<div className="grid grid-cols-2 gap-4">
<button className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:border-orange-200 transition group text-left">
<div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-400 flex items-center justify-center mb-3 group-hover:bg-orange-100 transition">
<svg aria-hidden="true" className="lucide lucide-camera w-5 h-5" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h3 className="font-novel text-lg text-slate-800">Solve Q</h3>
<p className="text-slate-400 text-xs mt-1">Snap a photo</p>
</button>
<button className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-200 transition group text-left">
<div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-400 flex items-center justify-center mb-3 group-hover:bg-indigo-100 transition">
<svg aria-hidden="true" className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="font-novel text-lg text-slate-800">Review</h3>
<p className="text-slate-400 text-xs mt-1">Mistake log</p>
</button>
</div>

<div className="mt-4 bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4">
<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="transform -rotate-90 w-12 h-12">
<circle cx="24" cy="24" fill="transparent" r="20" stroke="#f1f5f9" strokeWidth="4"></circle>
<circle className="" cx="24" cy="24" fill="transparent" r="20" stroke="#334155" stroke-dasharray="125" stroke-dashoffset="40" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<span className="absolute text-xs font-medium text-slate-700">68%</span>
</div>
<div className="">
<p className="text-sm font-medium text-slate-800">Weekly Goal</p>
<p className="text-xs text-slate-400">Keep up the steady pace.</p>
</div>
</div>
</div><div className="z-10 mt-8 pr-6 pl-6">

<div className="animate-fade-in-up bg-white/80 border-white/50 border rounded-2xl mb-4 pt-4 pr-4 pb-4 pl-4 shadow-sm backdrop-blur-md">
<div className="flex items-start gap-3">
<div className="w-1 bg-indigo-300 h-12 rounded-full shrink-0"></div>
<div className="">
<p className="text-sm text-indigo-900 font-novel mb-1" style={{}}>Su Qin</p>
<p className="leading-relaxed text-sm text-slate-600">
                                "Even the tallest tower starts from the ground. Shall we lay another brick today?"
                            </p>
</div>
</div>
</div>

</div>

<div className="px-8 pb-8 pt-4">
<div className="flex justify-between items-center text-slate-300">
<button className="text-slate-800 flex flex-col items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="hover:text-slate-500 transition flex flex-col items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-camera" data-icon-replaced="true" data-icon-set="lucide" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</button>
<button className="hover:text-slate-500 transition flex flex-col items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</div>
</div>
</div>

<div className="relative w-full max-w-sm h-[844px] bg-[#FAFAF9] rounded-[3rem] shadow-2xl border-[6px] border-white overflow-hidden flex flex-col shrink-0">

<div className="pt-8 px-6 pb-4 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-20">
<button className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
<svg aria-hidden="true" className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full">
<svg aria-hidden="true" className="lucide lucide-clock w-3 h-3 text-slate-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-medium text-slate-600 tabular-nums">14:20</span>
</div>
<div className="text-sm font-novel text-slate-800">Q 05<span className="text-slate-300">/20</span></div>
</div>

<div className="w-full bg-slate-100 h-1">
<div className="bg-slate-800 h-1 rounded-r-full w-1/4"></div>
</div>
<div className="flex-1 overflow-y-auto px-6 py-6">


<div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-6">
<span className="inline-block px-2 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold tracking-wider uppercase rounded-md mb-3">Geometry</span>
<h3 className="text-lg text-slate-800 font-medium leading-relaxed mb-4">
                        In an isosceles triangle ABC, if AB = AC and angle A is 40°, what is the measure of angle B?
                    </h3>

<div className="w-full h-40 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-center mb-2 overflow-hidden relative">

<div className="absolute w-20 h-20 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 top-4 left-10"></div>
<div className="absolute w-20 h-20 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 bottom-4 right-10"></div>
<svg aria-hidden="true" className="lucide lucide-triangle w-16 h-16 text-slate-300 stroke-1" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
</div>
</div>

<div className="space-y-3">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Your Answer</label>
<div className="relative">
<input className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-4 text-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800/10 placeholder-slate-300 font-novel" placeholder="Enter value..." type="text"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">degrees</span>
</div>
</div>
</div>

<div className="p-6 bg-white border-t border-slate-50">
<div className="flex items-center gap-4">
<button className="flex-1 py-4 rounded-2xl border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 transition flex items-center justify-center gap-2">
<svg aria-hidden="true" className="lucide lucide-lightbulb w-4 h-4 text-orange-400" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                        Need a Hint?
                    </button>
<button className="flex-1 py-4 rounded-2xl bg-slate-800 text-white font-medium text-sm shadow-lg shadow-slate-200 hover:bg-slate-900 transition">
                        Next Question
                    </button>
</div>
</div>
</div>

<div className="relative w-full max-w-sm h-[844px] bg-[#FDFCF8] rounded-[3rem] shadow-2xl border-[6px] border-white overflow-hidden flex flex-col shrink-0">

<div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-orange-50/50 to-transparent"></div>
<div className="z-10 flex-1 flex flex-col pt-12 pr-6 pb-6 pl-6 relative">

<div className="mx-auto mb-8 text-center">
<div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-xl shadow-orange-100/50 border-4 border-orange-50 mb-6 relative">
<span className="font-novel text-4xl text-slate-800 font-semibold">85</span>
<span className="absolute -bottom-2 bg-slate-800 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">Score</span>
</div>
<h2 className="font-novel text-2xl text-slate-800 tracking-tight">Session Complete</h2>
<p className="text-slate-400 text-sm mt-2">Mathematics • Trigonometry</p>
</div>


<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
<p className="text-emerald-800/60 text-xs font-medium uppercase mb-1">Correct</p>
<p className="text-2xl text-emerald-900 font-novel">17<span className="text-sm opacity-50">/20</span></p>
</div>
<div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100/50">
<p className="text-rose-800/60 text-xs font-medium uppercase mb-1">Review Needed</p>
<p className="text-2xl text-rose-900 font-novel">03<span className="text-sm opacity-50">/20</span></p>
</div>
</div>

<div className="space-y-3 mt-auto">
<button className="w-full flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-slate-300 transition group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition">
<svg aria-hidden="true" className="lucide lucide-rotate-ccw w-5 h-5" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</div>
<div className="text-left">
<p className="text-sm font-medium text-slate-800">Review Mistakes</p>
<p className="text-xs text-slate-400">Step-by-step AI explanation</p>
</div>
</div>
<svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 text-slate-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full py-4 rounded-2xl bg-slate-800 text-white font-medium text-sm shadow-md hover:bg-slate-900 transition">
                        Finish &amp; Return Home
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
