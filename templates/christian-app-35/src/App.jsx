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
      

<div className="w-full max-w-7xl mx-auto pt-16 pb-8 px-6 text-center">
<div className="flex items-center justify-center gap-2 mb-4">
<svg aria-hidden="true" data-icon="lucide:sun" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">DivineTalk</h1>
</div>
<p className="text-zinc-500 text-sm">Onboarding Flow Design • 9 Screens</p>
</div>

<div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-6 justify-items-center">

<div className="relative w-[320px] h-[680px] bg-white rounded-[3rem] shadow-2xl shadow-zinc-200 overflow-hidden flex flex-col border border-zinc-100">

<div className="h-12 w-full flex justify-between items-center px-6 pt-4">
<span className="text-[10px] font-medium text-zinc-400">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-4 rounded-full bg-zinc-100"></div>
<div className="w-4 h-4 rounded-full bg-zinc-100"></div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center p-6 relative">

<div className="relative w-48 h-48 mb-8 flex items-center justify-center">
<div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-60 animate-glow"></div>
<div className="relative bg-white rounded-3xl border border-zinc-100 shadow-lg p-4 w-28 h-48 flex flex-col items-center justify-center animate-float">
<svg aria-hidden="true" data-icon="lucide:lock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
<div className="w-20 h-2 bg-zinc-100 rounded-full mb-2"></div>
<div className="w-16 h-2 bg-zinc-100 rounded-full mb-4"></div>
<div className="w-full h-20 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100 flex items-center justify-center p-2 shadow-sm">
<span className="text-[6px] text-center text-orange-800 leading-tight">"The Lord is my shepherd..."</span>
</div>
</div>
</div>
<h2 className="text-xl font-semibold text-center tracking-tight leading-snug mb-3">Want to put a living verse on your phone’s lock screen?</h2>
<p className="text-sm text-zinc-500 text-center leading-relaxed">So every time you pick up your phone, God speaks to you first.</p>
</div>

<div className="p-6 pb-8">
<button className="w-full bg-zinc-950 hover:bg-zinc-800 transition-colors text-white py-4 rounded-2xl font-medium text-sm shadow-lg shadow-zinc-200">
                    Yes, I do
                </button>
</div>
</div>

<div className="relative w-[320px] h-[680px] bg-white rounded-[3rem] shadow-2xl shadow-zinc-200 overflow-hidden flex flex-col border border-zinc-100">
<div className="h-12 w-full px-6 pt-4 flex justify-between"><span className="text-[10px] text-zinc-400">Skip</span></div>
<div className="flex-1 flex flex-col pt-2 pr-6 pb-6 pl-6">

<div className="relative h-40 mb-6 w-full flex justify-center items-center">
<div className="absolute w-32 h-32 bg-orange-50 rounded-full blur-2xl"></div>
<div className="absolute right-4 top-4 bg-white p-3 rounded-2xl shadow-md border border-zinc-50 animate-float">
<svg aria-hidden="true" data-icon="lucide:sun" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
<div className="absolute left-8 bottom-4 bg-white p-3 rounded-2xl shadow-md border border-zinc-50 animate-float-delay">
<svg aria-hidden="true" data-icon="lucide:book-heart" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path><path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"></path></g></svg>
</div>
<div className="z-10 bg-white p-4 rounded-2xl shadow-lg border border-orange-100/50">
<svg aria-hidden="true" data-icon="lucide:smartphone" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
</div>
<h2 className="text-xl font-semibold tracking-tight mb-6">Much more than verses on your lock screen…</h2>
<ul className="space-y-4 mb-auto">
<li className="flex items-start gap-3">
<div className="mt-0.5 text-orange-400 bg-orange-50 p-1 rounded-full"><svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<span className="text-sm text-zinc-600">Track your Bible reading</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-orange-400 bg-orange-50 p-1 rounded-full"><svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<span className="text-sm text-zinc-600">Receive daily devotionals</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-orange-400 bg-orange-50 p-1 rounded-full"><svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<span className="text-sm text-zinc-600">Follow custom reading plans</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-orange-400 bg-orange-50 p-1 rounded-full"><svg aria-hidden="true" data-icon="lucide:sparkles" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg></div>
<span className="text-sm text-zinc-600">Get Bible insights powered by AI</span>
</li>
</ul>
<p className="text-xs text-center text-zinc-400 mb-4">Everything personalized for your walk with God.</p>
<button className="text-sm font-medium text-white bg-zinc-950 w-full rounded-2xl pt-4 pb-4">Start now</button>
</div>
</div>

<div className="relative w-[320px] h-[680px] bg-white rounded-[3rem] shadow-2xl shadow-zinc-200 overflow-hidden flex flex-col border border-zinc-100">
<div className="h-2 w-full bg-zinc-50 flex">
<div className="w-1/4 bg-orange-400 h-full"></div>
</div>
<div className="h-10 w-full px-6 pt-4 flex items-center">
<svg aria-hidden="true" data-icon="lucide:chevron-left" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="px-6 pt-2 pb-8 flex-1 flex flex-col">
<div className="mb-6 flex justify-center">
<div className="bg-orange-50 p-3 rounded-full text-orange-500">
<svg aria-hidden="true" data-icon="lucide:target" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
</div>
<h2 className="text-xl font-semibold tracking-tight text-center mb-2">What are you looking for in a Christian app?</h2>
<p className="text-xs text-zinc-500 text-center mb-8">We’ll personalize your experience based on your goals.</p>
<div className="space-y-3 mb-auto">

<label className="flex items-center gap-3 p-4 border border-orange-400 bg-orange-50/30 rounded-2xl cursor-pointer transition-all-custom">
<div className="w-5 h-5 rounded border border-orange-400 bg-orange-400 flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-medium text-zinc-900">Build a real Bible-reading habit</span>
</label>

<label className="flex items-center gap-3 p-4 border border-zinc-100 hover:border-zinc-300 rounded-2xl cursor-pointer transition-all-custom group">
<div className="w-5 h-5 rounded border border-zinc-200 group-hover:border-zinc-300"></div>
<span className="text-sm text-zinc-600">Feel closer to God</span>
</label>
<label className="flex items-center gap-3 p-4 border border-zinc-100 hover:border-zinc-300 rounded-2xl cursor-pointer transition-all-custom group">
<div className="w-5 h-5 rounded border border-zinc-200 group-hover:border-zinc-300"></div>
<span className="text-sm text-zinc-600">Receive daily devotionals</span>
</label>
<label className="flex items-center gap-3 p-4 border border-zinc-100 hover:border-zinc-300 rounded-2xl cursor-pointer transition-all-custom group">
<div className="w-5 h-5 rounded border border-zinc-200 group-hover:border-zinc-300"></div>
<span className="text-sm text-zinc-600">Find peace and calm</span>
</label>
</div>
<button className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-medium text-sm mt-4">
                    Continue
                </button>
</div>
</div>

<div className="relative w-[320px] h-[680px] bg-white rounded-[3rem] shadow-2xl shadow-zinc-200 overflow-hidden flex flex-col border border-zinc-100">
<div className="h-2 w-full bg-zinc-50 flex">
<div className="w-2/4 bg-orange-400 h-full"></div>
</div>
<div className="h-10 w-full px-6 pt-4 flex items-center">
<svg aria-hidden="true" data-icon="lucide:chevron-left" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="px-6 pt-2 pb-8 flex-1 flex flex-col">
<div className="mb-6 flex justify-center relative">
<div className="absolute inset-0 bg-orange-100 blur-2xl opacity-50"></div>
<svg aria-hidden="true" data-icon="lucide:feather" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1zM16 8L2 22m15.5-7H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-xl font-semibold tracking-tight text-center mb-2">If you could say something to God right now…</h2>
<p className="text-xs text-zinc-500 text-center mb-8">We’ll use this to personalize your devotionals and verses.</p>
<div className="w-full relative mb-4">
<textarea className="w-full h-40 p-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 resize-none placeholder:text-zinc-400" placeholder="Write a prayer, a request, or something from your heart..."></textarea>
<div className="absolute bottom-4 right-4 text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:pen-line" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="flex items-start gap-2 mb-auto px-1">
<svg aria-hidden="true" data-icon="lucide:info" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></g></svg>
<p className="text-[11px] text-zinc-400 leading-tight">Many people use this space to pray, reflect, or share their specific goals for this season of life.</p>
</div>
<button className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-medium text-sm mt-4">
                    Continue
                </button>
</div>
</div>

<div className="relative w-[320px] h-[680px] bg-white rounded-[3rem] shadow-2xl shadow-zinc-200 overflow-hidden flex flex-col border border-zinc-100">
<div className="h-2 w-full bg-zinc-50 flex">
<div className="w-3/4 bg-orange-400 h-full"></div>
</div>
<div className="h-10 w-full px-6 pt-4 flex items-center">
<svg aria-hidden="true" data-icon="lucide:chevron-left" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="px-6 pt-2 pb-8 flex-1 flex flex-col">
<div className="mb-6 flex justify-center">
<div className="bg-orange-50 p-3 rounded-full text-orange-500">
<svg aria-hidden="true" data-icon="lucide:calendar-clock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
</div>
</div>
<h2 className="text-xl font-semibold tracking-tight text-center mb-2">How often do you want DivineTalk to help you stay on track?</h2>
<p className="text-xs text-zinc-500 text-center mb-8">We’ll create a plan that fits your schedule.</p>
<div className="space-y-3 mb-auto">
<button className="w-full p-4 border border-zinc-100 rounded-2xl text-left hover:bg-zinc-50 text-sm font-medium text-zinc-600 transition-colors flex justify-between group">
                        1x / week
                        <div className="w-4 h-4 rounded-full border border-zinc-200 group-hover:border-zinc-300"></div>
</button>
<button className="w-full p-4 border border-zinc-100 rounded-2xl text-left hover:bg-zinc-50 text-sm font-medium text-zinc-600 transition-colors flex justify-between group">
                        3x / week
                        <div className="w-4 h-4 rounded-full border border-zinc-200 group-hover:border-zinc-300"></div>
</button>
<button className="w-full p-4 border border-zinc-100 rounded-2xl text-left hover:bg-zinc-50 text-sm font-medium text-zinc-600 transition-colors flex justify-between group">
                        5x / week
                         <div className="w-4 h-4 rounded-full border border-zinc-200 group-hover:border-zinc-300"></div>
</button>

<button className="w-full p-4 border border-orange-400 bg-orange-50/30 rounded-2xl text-left text-sm font-semibold text-zinc-900 shadow-sm flex justify-between items-center relative overflow-hidden">
<div className="flex flex-col relative z-10">
<span>Every day</span>
<span className="text-[10px] text-orange-600 font-medium flex items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Recommended
                            </span>
</div>
<div className="w-5 h-5 rounded-full border-[5px] border-orange-400 bg-white relative z-10"></div>
<div className="absolute -right-4 -top-4 w-12 h-12 bg-orange-200 rounded-full blur-xl opacity-50"></div>
</button>
</div>
<button className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-medium text-sm mt-4">
                    Create my plan
                </button>
</div>
</div>

<div className="relative w-[320px] h-[680px] bg-white rounded-[3rem] shadow-2xl shadow-zinc-200 overflow-hidden flex flex-col border border-zinc-100">
<div className="flex-1 flex flex-col items-center justify-center p-8 relative">

<div className="relative w-32 h-32 mb-10 flex items-center justify-center">
<div className="absolute inset-0 border border-orange-100 rounded-full scale-150 opacity-20 animate-ping"></div>
<div className="absolute inset-0 bg-orange-50 rounded-full blur-3xl opacity-60"></div>
<div className="relative bg-white p-4 rounded-full shadow-lg border border-orange-100">
<svg aria-hidden="true" data-icon="lucide:loader-2" data-width="40" height="40" role="img" style={{animationDuration: '3s'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<h2 className="text-lg font-semibold tracking-tight text-center mb-8">We’re preparing your unique experience with God…</h2>
<div className="w-full space-y-6">

<div className="flex items-center gap-4 opacity-40">
<div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-zinc-400">Choosing verses for lock screen...</span>
</div>

<div className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<svg aria-hidden="true" data-icon="lucide:circle-dashed" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-medium text-zinc-900">Building your perfect reading plan...</span>
</div>

<div className="flex items-center gap-4 opacity-30">
<div className="w-6 h-6 rounded-full border border-zinc-100 flex items-center justify-center"></div>
<span className="text-sm text-zinc-300">Setting up daily devotionals...</span>
</div>
</div>
</div>

<div className="w-full h-1.5 bg-zinc-100">
<div className="w-2/3 h-full bg-orange-400 rounded-r-full"></div>
</div>
</div>

<div className="relative w-[320px] h-[680px] bg-gradient-to-b from-orange-50/50 to-white rounded-[3rem] shadow-2xl shadow-zinc-200 overflow-hidden flex flex-col border border-zinc-100">
<div className="px-6 pt-12 pb-8 flex-1 flex flex-col items-center">
<div className="flex -space-x-3 mb-4">
<div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center overflow-hidden"><svg aria-hidden="true" data-icon="lucide:user" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-300 flex items-center justify-center overflow-hidden"><svg aria-hidden="true" data-icon="lucide:user" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center overflow-hidden"><svg aria-hidden="true" data-icon="lucide:user" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg></div>
</div>
<h2 className="text-xl font-semibold tracking-tight text-center mb-8">Your plan is ready.<span className="text-zinc-500 font-normal">See what God has done through DivineTalk.</span></h2>
<div className="space-y-4 mb-auto w-full">

<div className="bg-white p-5 rounded-2xl shadow-sm border border-zinc-100 relative">
<div className="flex text-orange-400 mb-2 gap-0.5">
<svg aria-hidden="true" data-icon="lucide:star" data-inline="false" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-inline="false" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-inline="false" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-inline="false" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-inline="false" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-zinc-700 leading-snug mb-3">“This app helped me finally stay consistent with the Bible. It feels like it was made just for me.”</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center"><svg aria-hidden="true" data-icon="lucide:user" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg></div>
<span className="text-xs font-semibold text-zinc-900">Mariana, 27</span>
</div>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-zinc-100 relative opacity-90 scale-95 origin-top">
<div className="flex text-orange-400 mb-2 gap-0.5">
<svg aria-hidden="true" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-zinc-700 leading-snug mb-3">“Every morning I receive exactly the devotional I need. It brings me so much peace.”</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center"><svg aria-hidden="true" data-icon="lucide:user" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg></div>
<span className="text-xs font-semibold text-zinc-900">Lucas, 33</span>
</div>
</div>
</div>
<button className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-medium text-sm mt-4">
                    Continue
                </button>
</div>
</div>

<div className="relative w-[320px] h-[680px] bg-white rounded-[3rem] shadow-2xl shadow-zinc-200 overflow-hidden flex flex-col border border-zinc-100">
<div className="flex-1 flex flex-col items-center pt-16 px-6 relative overflow-hidden">

<div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-orange-100/40 to-transparent pointer-events-none"></div>

<div className="relative mb-6">
<div className="absolute inset-0 bg-yellow-200 blur-2xl opacity-40"></div>
<svg aria-hidden="true" data-icon="lucide:book-open-check" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 21V7m4 5l2 2l4-4"></path><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4a4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3a3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"></path></g></svg>
<div className="absolute -right-4 -top-2 bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm">7 DAYS</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-center mb-2">Your spiritual plan is ready 🙏</h2>
<p className="text-sm text-zinc-500 text-center mb-8">Try it completely free for 7 days.</p>
<div className="bg-zinc-50 rounded-2xl p-6 w-full border border-zinc-100 mb-auto">
<p className="text-sm text-zinc-700 leading-relaxed text-center">
                        You’ve taken a moment to reflect on your faith. Experience the full app — <span className="font-semibold text-zinc-900">devotionals, guided reading, and lock-screen verses</span> — free for 7 days.
                    </p>
<div className="mt-4 pt-4 border-t border-zinc-200 text-center">
<span className="text-xs text-orange-600 font-medium">Cancel anytime before the trial ends.</span>
</div>
</div>
</div>
<div className="p-6 pb-8">
<button className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-medium text-sm shadow-lg shadow-orange-100">
                    Continue
                </button>
</div>
</div>

<div className="relative w-[320px] h-[680px] bg-white rounded-[3rem] shadow-2xl shadow-zinc-200 overflow-hidden flex flex-col border border-zinc-100">
<div className="flex-1 flex flex-col px-6 pt-10 pb-6">
<h2 className="text-xl font-semibold tracking-tight text-center mb-2">Start your 7-day free trial now</h2>
<p className="text-xs text-zinc-500 text-center mb-8 px-2">After the trial, continue only if it truly makes a difference in your life.</p>

<div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-3xl p-6 relative mb-6 shadow-sm">
<div className="absolute top-0 right-0 bg-orange-400 text-white text-[9px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">BEST VALUE</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-2xl font-bold text-zinc-900">Free</span>
<span className="text-sm text-zinc-500">/ 7 days</span>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-700">
<div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><svg aria-hidden="true" data-icon="lucide:check" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                            Lock-screen Bible verses
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-700">
<div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><svg aria-hidden="true" data-icon="lucide:check" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                            Personalized reading plans
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-700">
<div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><svg aria-hidden="true" data-icon="lucide:check" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                            Bible progress tracker
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-700">
<div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><svg aria-hidden="true" data-icon="lucide:check" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                            Daily devotionals
                        </li>
</ul>
</div>

<div className="flex gap-3 overflow-hidden mb-auto">
<div className="bg-zinc-50 rounded-xl p-3 w-48 shrink-0 border border-zinc-100">
<div className="flex text-orange-400 gap-0.5 mb-1"><svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<p className="text-[10px] text-zinc-600 leading-tight">"I never had discipline before — this app changed my life."</p>
</div>
<div className="bg-zinc-50 rounded-xl p-3 w-48 shrink-0 border border-zinc-100">
<div className="flex text-orange-400 gap-0.5 mb-1"><svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<p className="text-[10px] text-zinc-600 leading-tight">"The lockscreen verses keep me grounded all day."</p>
</div>
</div>

<div className="flex flex-col gap-3">
<button className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-medium text-sm shadow-lg shadow-orange-100 relative overflow-hidden group">
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative">Start 7-day free trial</span>
</button>
<button className="w-full text-zinc-500 text-xs py-2 hover:text-zinc-800 transition-colors">
                        Continue with monthly plan – R$19,90
                    </button>
</div>
</div>
</div>
</div>

    </>
  );
}
