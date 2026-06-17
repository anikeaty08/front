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
      

<main className="w-full max-w-md mx-auto bg-white min-h-screen relative shadow-2xl shadow-zinc-200/50">

<div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-100">
<div className="flex items-center justify-between px-6 py-4 pt-6">
<div className="">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wider">Wed, Oct 25</p>
<h1 className="text-xl font-semibold text-zinc-900 tracking-tight mt-0.5">Good morning, Alex</h1>
</div>
<div className="relative cursor-pointer group">
<div className="flex overflow-hidden transition-transform group-hover:scale-105 bg-zinc-100 w-10 h-10 border-zinc-200 border rounded-full items-center justify-center">
<img alt="Alex" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces&amp;q=80"/>
</div>
<div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
</div>
</div>
</div>

<div className="p-6 space-y-8 pb-32">

<section className="animate-fade-in-up">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-semibold text-zinc-900">Next Session</h2>
<span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full border border-indigo-100/50">Starts in 15m</span>
</div>
<div className="group relative overflow-hidden rounded-2xl bg-white border border-zinc-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:shadow-md hover:border-indigo-200">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600"></div>
<div className="bg-indigo-50 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-start justify-between">
<div className="flex gap-3">
<div className="flex shrink-0 text-indigo-600 bg-slate-50 w-10 h-10 border-indigo-200 border rounded-xl items-center justify-center">
<svg className="lucide lucide-video w-5 h-5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-zinc-900" style={{}}>Coaching Session</h3>
<p className="text-xs text-zinc-500 mt-0.5" style={{}}>with Coach Sarah Jenkins</p>
</div>
</div>
</div>
<div className="flex mt-4 items-center justify-between">
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="">10:00 AM - 10:30 AM</span>
</div>

<button className="flex gap-2 hover:bg-zinc-800 transition-colors active:scale-95 transform duration-100 text-xs font-medium text-white bg-indigo-500 border-indigo-500 rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-sm gap-x-2 gap-y-2 items-center">
<span className="">Join Zoom</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="">
<h2 className="text-sm font-semibold text-zinc-900 mb-3">Today's Goals</h2>
<div className="grid grid-cols-2 gap-3">

<div className="flex flex-col group hover:border-zinc-300 transition-colors bg-green-50 h-40 border-zinc-200 border rounded-2xl px-4 py-4 relative justify-between">
<div className="flex items-start justify-between">
<div className="flex text-emerald-600 bg-white w-8 h-8 border-green-200 border rounded-lg shadow-sm items-center justify-center">
<svg className="lucide lucide-activity w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(5, 150, 105)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>

<div className="relative w-6 h-6 flex items-center justify-center">
<svg className="transform -rotate-90 w-full h-full" viewbox="0 0 36 36">
<path className="text-zinc-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>

<path className="text-emerald-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="30, 100" strokeWidth="4"></path>
</svg>
</div>
</div>
<div className="">
<p className="text-xs font-medium text-zinc-500 mb-0.5" style={{}}>Todays Exercise</p>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">In Progress</h3>
</div>
<button className="hover:bg-zinc-50 transition-colors active:scale-[0.98] text-xs font-medium text-green-500 bg-white w-full border-green-200 border rounded-lg mt-2 pt-2 pb-2 shadow-sm">Continue</button>
</div>

<div className="flex flex-col group hover:shadow-md transition-all bg-orange-50 h-40 border-zinc-200 border rounded-2xl px-4 py-4 relative shadow-[0_2px_8px_rgba(0,0,0,0.02)] justify-between">
<div className="flex justify-between items-start">
<div className="flex text-orange-500 bg-slate-50 w-8 h-8 border-orange-200 border rounded-lg items-center justify-center">
<svg className="lucide lucide-clipboard-list w-4 h-4" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
</div>
<span className="w-2 h-2 rounded-full bg-orange-500 ring-2 ring-orange-100"></span>
</div>
<div className="">
<p className="text-xs font-medium text-zinc-500 mb-0.5">Daily Check-in</p>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Not Started</h3>
</div>
<button className="hover:bg-zinc-800 transition-colors active:scale-[0.98] text-xs font-medium text-white bg-orange-500 w-full rounded-lg mt-2 pt-2 pb-2 shadow-sm">
                            Start Survey
                        </button>
</div>
</div>
</section>

<section className="">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-zinc-900">October 2023</h2>
<button className="p-1 rounded-md text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-all">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="bg-gray-50 border-zinc-200 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">

<div className="grid grid-cols-7 mb-3 border-b border-zinc-50 pb-2">
<div className="text-center text-[10px] font-semibold text-zinc-400 uppercase">M</div>
<div className="text-center text-[10px] font-semibold text-zinc-400 uppercase">T</div>
<div className="text-[10px] uppercase font-semibold text-indigo-500 text-center">W</div>
<div className="text-center text-[10px] font-semibold text-zinc-400 uppercase">T</div>
<div className="text-center text-[10px] font-semibold text-zinc-400 uppercase">F</div>
<div className="text-center text-[10px] font-semibold text-zinc-400 uppercase">S</div>
<div className="text-center text-[10px] font-semibold text-zinc-400 uppercase">S</div>
</div>

<div className="grid grid-cols-7 gap-y-4">

<div className="flex flex-col items-center gap-1 opacity-40">
<span className="text-xs font-medium text-zinc-900">23</span>
<div className="flex gap-0.5">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
</div>
</div>
<div className="flex flex-col items-center gap-1 opacity-40">
<span className="text-xs font-medium text-zinc-900">24</span>
<div className="flex gap-0.5">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
<div className="w-1 h-1 rounded-full bg-zinc-300"></div>
</div>
</div>

<div className="relative flex flex-col items-center gap-1">
<span className="flex items-center justify-center shadow-zinc-200 text-xs font-bold text-white bg-indigo-500 w-7 h-7 rounded-full shadow-lg">25</span>
<div className="flex gap-0.5">
<div className="w-1 h-1 rounded-full bg-zinc-300"></div>
<div className="w-1 h-1 rounded-full bg-zinc-300"></div>
</div>
</div>

<div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-75 transition-opacity">
<span className="text-xs font-medium text-zinc-500">26</span>

<div className="mt-0.5 text-indigo-500">
<svg className="" fill="currentColor" height="4" viewbox="0 0 4 4" width="4" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="2" cy="2" r="2"></circle>
</svg>
</div>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-75 transition-opacity">
<span className="text-xs font-medium text-zinc-500">27</span>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-75 transition-opacity">
<span className="text-xs font-medium text-zinc-500">28</span>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-75 transition-opacity">
<span className="text-xs font-medium text-zinc-500">29</span>
</div>
</div>
<div className="flex border-zinc-100 border-t mt-4 pt-3 items-center justify-center">
<div className="flex gap-4 text-[10px] text-zinc-500 font-medium">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Exercise
                            </div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div> Survey
                            </div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Session
                            </div>
</div>
</div>
</div>
</section>
</div>

<nav className="fixed bottom-0 z-50 w-full max-w-md bg-white/95 backdrop-blur-xl border-t border-zinc-200/80 pb-6 pt-2">
<div className="grid grid-cols-4 gap-1 px-4">
<button className="flex flex-col gap-1 transition-colors cursor-pointer text-zinc-900 rounded-xl pt-2 pr-2 pb-2 pl-2 gap-x-1 gap-y-1 items-center justify-center" onclick="window.location.href='/home'" role="button">
<svg className="lucide lucide-home stroke-[2] w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(99, 102, 241)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-bold text-indigo-500 bg-slate-50">Home</span>
</button>
<button className="flex flex-col hover:text-zinc-600 hover:bg-zinc-50/50 transition-all group cursor-pointer text-zinc-400 rounded-xl pt-2 pr-2 pb-2 pl-2 gap-x-1 gap-y-1 items-center justify-center" onclick="window.location.href='';window.location.href='';window.location.href='';window.location.href='';window.location.href='';window.location.href='';window.location.href='';window.location.href='';window.location.href='';window.location.href='/exercise-page'" role="button">
<svg className="lucide lucide-dumbbell group-hover:scale-110 transition-transform w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(176, 176, 176)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
<span className="text-[10px] font-medium">Exercise</span>
</button>
<button className="flex flex-col gap-1 hover:text-zinc-600 hover:bg-zinc-50/50 transition-all group cursor-pointer text-zinc-400 rounded-xl pt-2 pr-2 pb-2 pl-2 gap-x-1 gap-y-1 items-center justify-center" onclick="window.location.href='/survey-page'" role="button">
<svg className="lucide lucide-file-text group-hover:scale-110 transition-transform w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(176, 176, 176)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-[10px] font-medium">Survey</span>
</button>
<button className="flex flex-col gap-1 hover:text-zinc-600 hover:bg-zinc-50/50 transition-all group text-zinc-400 rounded-xl pt-2 pr-2 pb-2 pl-2 relative gap-x-1 gap-y-1 items-center justify-center cursor-pointer" onclick="window.location.href='/chat-page'" role="button">
<svg className="lucide lucide-message-square group-hover:scale-110 transition-transform w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(176, 176, 176)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-[10px] font-medium">Chat</span>
<span className="w-2.5 h-2.5 border-white border-2 rounded-full absolute top-2 right-5"></span>
</button>
</div>

<div className="w-32 h-1 bg-zinc-200 rounded-full mx-auto mt-2"></div>
</nav>
</main>


    </>
  );
}
