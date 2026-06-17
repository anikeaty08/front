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
      

<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 w-full max-w-7xl gap-x-8 gap-y-8 items-start justify-items-center">

<div className="relative w-full max-w-[390px] h-[844px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-slate-900 flex flex-col">

<div className="h-12 w-full bg-white shrink-0 flex items-center justify-between px-6">
<div className="text-xs font-semibold text-slate-900">9:41</div>
<div className="flex gap-1">
<div className="w-4 h-4 bg-slate-900 rounded-full opacity-20"></div>
<div className="w-4 h-4 bg-slate-900 rounded-full opacity-20"></div>
</div>
</div>

<div className="flex-1 flex flex-col px-6 pt-4 pb-24 overflow-y-auto">

<div className="flex flex-col items-center mb-10 mt-2">
<div className="w-14 h-14 mb-6 relative">

<svg className="w-full h-full drop-shadow-lg" viewbox="0 0 100 100">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#34d399', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#059669', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path d="M50 0 C77.6 0 100 22.4 100 50 C100 77.6 77.6 100 50 100 C22.4 100 0 77.6 0 50 C0 22.4 22.4 0 50 0 Z" fill="url(#grad1)" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', borderRadius: '20px'}}></path>
<rect fill="white" fillOpacity="0.9" height="30" rx="8" width="30" x="35" y="35"></rect>
</svg>
</div>
<h1 className="text-3xl font-semibold text-slate-900 text-center tracking-tight leading-tight">
                        Good morning,Alex
                    </h1>
<p className="text-lg text-slate-500 mt-2 font-medium">Ready to focus?</p>
</div>

<div className="w-full bg-emerald-50 rounded-3xl p-6 mb-4 relative overflow-hidden group border border-emerald-100/50 shadow-sm transition-transform active:scale-95">
<div className="relative z-10">
<div className="flex justify-between items-start mb-10">
<div className="p-3 bg-white rounded-2xl shadow-sm text-emerald-600">
<svg aria-hidden="true" className="lucide lucide-play w-6 h-6 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Start a Test</h2>
<p className="text-lg text-emerald-800/70 mt-1">Continue Physics Ch. 4</p>
</div>

<div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-emerald-200/40 to-transparent rounded-full blur-2xl"></div>
</div>

<div className="w-full bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex items-center justify-between active:bg-slate-50 transition-colors">
<div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Solve a Question</h3>
<p className="text-base text-slate-500 mt-1">Quick practice</p>
</div>
<div className="text-slate-400">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-24 bg-white/90 backdrop-blur-md border-t border-slate-100 flex items-center justify-around px-2 pb-4">
<button className="flex flex-col items-center gap-1 p-2 text-slate-900">
<svg aria-hidden="true" className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600">
<svg aria-hidden="true" className="lucide lucide-x-circle w-6 h-6" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-xs font-medium">Mistakes</span>
</button>

<button className="mb-8 w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-200 hover:scale-105 transition-transform">
<svg aria-hidden="true" className="lucide lucide-camera w-7 h-7" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600">
<svg aria-hidden="true" className="lucide lucide-trophy w-6 h-6" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span className="text-xs font-medium">Rank</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600">
<svg aria-hidden="true" className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium">Profile</span>
</button>
</div>
</div>

<div className="relative w-full max-w-[390px] h-[844px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-slate-900 flex flex-col">

<div className="h-12 w-full bg-white shrink-0"></div>

<div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
<div className="flex items-center gap-2">
<span className="text-base font-medium text-slate-400">Question 3</span>
<span className="text-base font-medium text-slate-300">/</span>
<span className="text-base font-medium text-slate-400">10</span>
</div>

<div className="px-3 py-1 bg-slate-100 rounded-full flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-semibold text-slate-700">95 / 100</span>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 py-6">

<div className="mb-8">
<h2 className="text-2xl font-semibold text-slate-900 leading-snug tracking-tight mb-4">
                        Which law states that for every action, there is an equal and opposite reaction?
                    </h2>

<div className="w-full h-32 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center mb-2">
<svg aria-hidden="true" className="lucide lucide-image w-8 h-8 text-slate-300" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
</div>

<div className="space-y-3">
<div className="w-full p-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-4 group">
<div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-slate-400"></div>
<span className="text-lg text-slate-700">Newton's First Law</span>
</div>
<div className="w-full p-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-4 group">
<div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-slate-400"></div>
<span className="text-lg text-slate-700">Newton's Second Law</span>
</div>

<div className="w-full p-5 rounded-xl border-2 border-emerald-500 bg-emerald-50/20 cursor-pointer flex items-center gap-4 relative">
<div className="w-6 h-6 rounded-full border-[6px] border-emerald-500 bg-white"></div>
<span className="text-lg font-medium text-slate-900">Newton's Third Law</span>
</div>
<div className="w-full p-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-4 group">
<div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-slate-400"></div>
<span className="text-lg text-slate-700">Law of Inertia</span>
</div>
</div>

<div className="mt-8 flex justify-center">
<button className="flex items-center gap-2 text-slate-400 hover:text-emerald-600 transition-colors">
<svg aria-hidden="true" className="lucide lucide-lightbulb w-5 h-5" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span className="text-base font-medium">Show Hint</span>
</button>
</div>
</div>

<div className="p-6 border-t border-slate-100 bg-white">
<button className="w-full bg-slate-900 text-white font-medium text-lg py-4 rounded-2xl hover:bg-slate-800 transition-colors">
                    Check Answer
                </button>
</div>
</div>

<div className="relative w-full max-w-[390px] h-[844px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-slate-900 flex flex-col">

<div className="h-12 w-full bg-white shrink-0 flex justify-end px-6 items-center">

<div className="px-3 py-1 bg-slate-100 rounded-full flex items-center gap-2">
<span className="text-sm font-semibold text-slate-900">95 / 100</span>
</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">

<div className="relative w-64 h-64 mb-10 flex items-center justify-center">

<div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

<div className="relative w-40 h-40">

<svg className="animate-pulse-slow w-[160px] h-[160px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="triangle" fill="none" height="160" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '160px', height: '160px'}} viewbox="0 0 24 24" width="160" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
</div>

<svg className="absolute top-0 right-10 w-6 h-6 text-yellow-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<h1 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-2">
                    Test Complete
                </h1>
<p className="text-lg text-slate-500 text-center mb-10">
                    Solid performance. You're mastering this topic.
                </p>

<div className="grid grid-cols-2 gap-4 w-full mb-12">
<div className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center border border-slate-100">
<span className="text-sm font-medium text-slate-400 uppercase tracking-wide">Accuracy</span>
<span className="text-2xl font-semibold text-slate-900 mt-1">92%</span>
</div>
<div className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center border border-slate-100">
<span className="text-sm font-medium text-slate-400 uppercase tracking-wide">XP Gained</span>
<div className="flex items-center gap-1 mt-1">
<span className="text-2xl font-semibold text-emerald-600">+110</span>
<svg aria-hidden="true" className="lucide lucide-zap w-4 h-4 text-yellow-500 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
</div>

<div className="w-full space-y-3">
<button className="w-full bg-slate-900 text-white font-medium text-lg py-4 rounded-2xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                        Continue
                    </button>
<button className="w-full bg-white text-slate-600 font-medium text-lg py-4 rounded-2xl hover:bg-slate-50 transition-colors">
                        Review Answers
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
