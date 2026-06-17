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
      

<div className="flex flex-wrap justify-center gap-8 w-full max-w-[1600px]">

<div className="relative w-[340px] h-[720px] bg-white rounded-[40px] shadow-2xl border-[6px] border-slate-900 overflow-hidden flex flex-col animate-slide-up">

<div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-10">
<span className="text-xs font-semibold">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-4 rounded-full bg-slate-900/10"></div>
<div className="w-4 h-4 rounded-full bg-slate-900/10"></div>
</div>
</div>

<div className="px-6 pb-4 pt-2 flex flex-col items-center relative">
<button className="absolute right-6 top-2 text-slate-400 hover:text-slate-900 transition-colors">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-slate-100 to-slate-200 border border-slate-100 flex items-center justify-center mb-3 shadow-sm">
<span className="text-lg font-bold tracking-tight text-slate-800">JD</span>
</div>
<h1 className="text-lg font-semibold tracking-tight text-slate-900">John Doe</h1>
<div className="mt-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-slate-600">GPT-4o</span>
</div>
</div>

<div className="px-6 mb-6">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-slate-200 transition-all active:scale-[0.98]">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>New Chat</span>
</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-20 space-y-1">
<div className="px-2 pb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Recent</div>

<div className="p-3 rounded-2xl hover:bg-slate-50 cursor-pointer group transition-colors flex gap-3">
<div className="flex shrink-0 w-10 h-10 rounded-xl bg-indigo-50 items-center justify-center overflow-hidden">
<img alt="Code Assistant" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-semibold text-slate-900 truncate">Code Assistant</h3>
<span className="text-xs text-slate-400">10:23</span>
</div>
<p className="text-xs text-slate-500 truncate group-hover:text-slate-700">Here's the refactored React component...</p>
</div>
</div>

<div className="p-3 rounded-2xl hover:bg-slate-50 cursor-pointer group transition-colors flex gap-3">
<div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 overflow-hidden">
<img alt="Tokyo Trip Plan" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/45.jpg"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-semibold text-slate-900 truncate">Tokyo Trip Plan</h3>
<span className="text-xs text-slate-400">Yesterday</span>
</div>
<p className="text-xs text-slate-500 truncate group-hover:text-slate-700">I've added the sushi reservation.</p>
</div>
</div>

<div className="p-3 rounded-2xl hover:bg-slate-50 cursor-pointer group transition-colors flex gap-3">
<div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 overflow-hidden">
<img alt="Brainstorming" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/12.jpg"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-semibold text-slate-900 truncate">Brainstorming</h3>
<span className="text-xs text-slate-400">Tue</span>
</div>
<p className="text-xs text-slate-500 truncate group-hover:text-slate-700">Five ideas for the marketing campaign.</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-[80px] glass-panel flex items-start pt-4 justify-around z-20">
<button className="flex flex-col items-center gap-1 text-slate-900">
<svg className="lucide lucide-message-square w-6 h-6 fill-current" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-[10px] font-medium">Chats</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-bar-chart-2 w-6 h-6" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="text-[10px] font-medium">Overview</span>
</button>
</div>
</div>

<div className="relative w-[340px] h-[720px] bg-slate-50 rounded-[40px] shadow-2xl border-[6px] border-slate-900 overflow-hidden flex flex-col animate-slide-up delay-100">

<div className="h-12 w-full flex justify-between items-center px-6 pt-2">
<span className="text-xs font-semibold">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-4 rounded-full bg-slate-900/10"></div>
</div>
</div>

<div className="px-6 mb-6">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Overview</h1>
<p className="text-sm text-slate-500 mt-1">Your interaction summary</p>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 space-y-4 pb-24">

<div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Weekly Activity</p>
<h2 className="text-2xl font-bold text-slate-900 mt-1">1,204 <span className="text-sm font-medium text-slate-400">msgs</span></h2>
</div>
<div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> 12%
                        </div>
</div>

<div className="flex items-end justify-between h-24 gap-2">
<div className="w-full bg-slate-100 rounded-t-md h-[40%]"></div>
<div className="w-full bg-slate-100 rounded-t-md h-[60%]"></div>
<div className="w-full bg-slate-100 rounded-t-md h-[30%]"></div>
<div className="w-full bg-slate-100 rounded-t-md h-[80%]"></div>
<div className="w-full bg-slate-900 rounded-t-md h-[95%]"></div>
<div className="w-full bg-slate-100 rounded-t-md h-[55%]"></div>
<div className="w-full bg-slate-100 rounded-t-md h-[45%]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium">
<span>M</span><span>T</span><span className="">W</span><span>T</span><span>F</span><span>S</span><span>S</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-bold text-slate-900">4.2h</h3>
<p className="text-xs text-slate-500">Time Saved</p>
</div>
</div>
<div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
<div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-bold text-slate-900">85k</h3>
<p className="text-xs text-slate-500">Tokens</p>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">4o</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">GPT-4o</p>
<p className="text-xs text-slate-500">Most active model</p>
</div>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-slate-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-[80px] glass-panel flex items-start pt-4 justify-around z-20">
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-[10px] font-medium">Chats</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-900">
<svg className="lucide lucide-bar-chart-2 w-6 h-6 fill-current" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="text-[10px] font-medium">Overview</span>
</button>
</div>
</div>

<div className="relative w-[340px] h-[720px] bg-white rounded-[40px] shadow-2xl border-[6px] border-slate-900 overflow-hidden flex flex-col animate-slide-up delay-200">

<div className="h-12 w-full flex justify-between items-center px-6 pt-2">
<span className="text-xs font-semibold">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-4 rounded-full bg-slate-900/10"></div>
</div>
</div>

<div className="px-6 flex items-center gap-3 mb-6">
<button className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
<svg className="lucide lucide-arrow-left w-5 h-5 text-slate-900" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<h1 className="text-lg font-semibold tracking-tight text-slate-900">Settings</h1>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-8">

<div className="flex flex-col items-center mb-8">
<div className="relative">
<div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-800 mb-3 border border-slate-200">JD</div>
<button className="absolute bottom-3 -right-1 bg-slate-900 text-white p-1.5 rounded-full border-2 border-white">
<svg className="lucide lucide-camera w-3 h-3" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</button>
</div>
<div className="w-full space-y-4 mt-2">
<div className="">
<label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" type="text" value="John Doe"/>
</div>
<div className="">
<label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Bio</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" type="text" value="Product Designer"/>
</div>
</div>
</div>

<div className="mb-8">
<label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 block">Active Model</label>
<div className="space-y-2">
<label className="flex items-center p-3 rounded-2xl border border-slate-900 bg-slate-900 text-white cursor-pointer transition-all">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mr-3">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="flex-1">
<div className="text-sm font-semibold">GPT-4o</div>
<div className="text-[10px] text-slate-400">Complex tasks &amp; reasoning</div>
</div>
<div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-white"></div>
</div>
</label>
<label className="flex items-center p-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 cursor-pointer transition-all">
<div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mr-3">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-semibold">Claude 3.5 Sonnet</div>
<div className="text-[10px] text-slate-500">Fast &amp; articulate</div>
</div>
<div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
</label>
</div>
</div>

<div className="space-y-5">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-700">Stream Responses</span>
<input checked="" className="ios-toggle" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-700">Haptic Feedback</span>
<input className="ios-toggle" type="checkbox"/>
</div>
</div>
</div>
</div>

<div className="relative w-[340px] h-[720px] bg-white rounded-[40px] shadow-2xl border-[6px] border-slate-900 overflow-hidden flex flex-col animate-slide-up delay-300">

<div className="h-12 w-full flex justify-between items-center px-6 pt-2 bg-white/90 backdrop-blur-md z-10">
<span className="text-xs font-semibold">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-4 rounded-full bg-slate-900/10"></div>
</div>
</div>

<div className="h-16 border-b border-slate-100 flex items-center px-4 bg-white/90 backdrop-blur-md sticky top-0 z-10">
<button className="p-2 -ml-2 rounded-full hover:bg-slate-50 mr-1">
<svg className="lucide lucide-arrow-left w-5 h-5 text-slate-900" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold mr-3">
                    4o
                </div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-slate-900">GPT-4o</h3>
<p className="text-[10px] text-emerald-500 font-medium">Online</p>
</div>
<button className="p-2 rounded-full hover:bg-slate-50">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-slate-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 bg-slate-50/50">
<div className="text-center text-[10px] text-slate-300 font-medium my-4">Today, 9:23 AM</div>

<div className="flex gap-3 max-w-[85%]">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-auto mb-1">4o</div>
<div className="space-y-1">
<div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-sm shadow-sm">
<p className="text-sm text-slate-800 leading-relaxed">Hello John! How can I help you today?</p>
</div>
</div>
</div>

<div className="flex flex-row-reverse gap-3 max-w-[85%] ml-auto">
<div className="space-y-1">
<div className="bg-slate-900 p-3 rounded-2xl rounded-br-sm shadow-md">
<p className="text-sm text-white leading-relaxed">I need a python script to parse a CSV file.</p>
</div>
<div className="flex justify-end">
<span className="text-[10px] text-slate-400">Read</span>
</div>
</div>
</div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-auto mb-1">4o</div>
<div className="space-y-1 w-full">
<div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-sm shadow-sm overflow-hidden">
<p className="text-sm text-slate-800 mb-2">Here is a simple script using pandas:</p>
<div className="bg-slate-900 rounded-lg p-3 w-full">
<code className="text-xs text-indigo-300 font-mono block">import pandas as pd</code>
<code className="text-xs text-slate-300 font-mono block mt-1">df = pd.read_csv('file.csv')</code>
<code className="text-xs text-slate-300 font-mono block mt-1">print(df.head())</code>
</div>
</div>
</div>
</div>

<div className="flex flex-row-reverse gap-3 max-w-[85%] ml-auto">
<div className="space-y-1">
<div className="bg-slate-900 p-3 rounded-2xl rounded-br-sm shadow-md flex items-center gap-3">
<button className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<svg className="lucide lucide-play w-3 h-3 text-slate-900 fill-current ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<div className="h-6 flex items-center gap-0.5 text-white/80">
<div className="voice-bar h-2 delay-100"></div>
<div className="voice-bar h-3 delay-200"></div>
<div className="voice-bar h-4 delay-300"></div>
<div className="voice-bar h-2 delay-100"></div>
<div className="voice-bar h-3 delay-200"></div>
<div className="voice-bar h-2 delay-300"></div>
<div className="voice-bar h-4 delay-100"></div>
</div>
<span className="text-[10px] text-white font-medium ml-1">0:14</span>
</div>
</div>
</div>
</div>

<div className="p-3 bg-white border-t border-slate-100 flex items-end gap-2">
<button className="p-2.5 text-slate-400 hover:bg-slate-50 rounded-full transition-colors">
<svg className="lucide lucide-paperclip w-5 h-5" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
<div className="flex-1 bg-slate-50 border border-slate-200 rounded-[20px] px-4 py-2.5 min-h-[44px] flex items-center">
<input className="bg-transparent w-full text-sm text-slate-900 placeholder-slate-400 focus:outline-none" placeholder="Message..." type="text"/>
</div>
<button className="p-2.5 text-slate-400 hover:bg-slate-50 rounded-full transition-colors">
<svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
</div>
</div>
</div>


    </>
  );
}
