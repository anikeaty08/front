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
      
<div className="max-w-[1600px] mr-auto ml-auto">
<header className="mb-12 space-y-2">
<h1 className="text-3xl font-semibold text-orange-900 tracking-tight">App Interface Flow</h1>
<p className="text-lg text-orange-500">16-screen high-fidelity design system based on Flowchart 1.</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-12">

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col items-center justify-center p-6 bg-white border-orange-200">
<div className="absolute inset-0 bg-orange-900"></div>
<div className="relative z-10 flex flex-col items-center animate-fade-in">
<div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-2xl bg-white">
<svg className="lucide lucide-sparkles w-[40px] h-[40px]" data-icon-replaced="true" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(124, 45, 18)', width: '40px', height: '40px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white">Lumina</h2>
<p className="text-sm mt-2 text-orange-400">Learn. Play. Connect.</p>
</div>
</div>

<div className="aspect-[9/19.5] overflow-hidden flex flex-col bg-white w-full border-orange-200 border rounded-[2.5rem] pt-6 pr-6 pb-6 pl-6 relative shadow-xl">
<div className="mt-12 mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-orange-900">Welcome back</h2>
<p className="text-sm text-orange-500 mt-2">Enter your details to continue.</p>
</div>
<div className="space-y-4">
<div className="group">
<label className="block text-xs font-medium mb-1.5 text-orange-700">Email</label>
<input className="w-full text-sm p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-900 transition-all placeholder:text-orange-400 bg-orange-50 border-orange-200" placeholder="name@example.com" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-medium mb-1.5 text-orange-700">Password</label>
<input className="w-full text-sm p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-900 transition-all bg-orange-50 border-orange-200" placeholder="••••••••" type="password"/>
</div>
<button className="w-full text-sm font-medium py-3.5 rounded-xl transition-colors mt-2 bg-orange-900 text-white hover:bg-orange-800">Sign In</button>
<div className="flex items-center justify-center gap-4 mt-8">
<div className="h-px flex-1 bg-orange-100"></div>
<span className="text-xs text-orange-400">Or continue with</span>
<div className="h-px flex-1 bg-orange-100"></div>
</div>
<div className="flex gap-3 justify-center mt-4">
<button className="w-12 h-12 rounded-full border flex items-center justify-center border-orange-200 hover:bg-orange-50"><svg className="lucide lucide-apple w-5 h-5" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg></button>
<button className="w-12 h-12 rounded-full border flex items-center justify-center border-orange-200 hover:bg-orange-50"><svg className="lucide lucide-chrome w-5 h-5" data-lucide="chrome" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.88 21.94 15.46 14"></path><path d="M21.17 8H12"></path><path d="M3.95 6.06 8.54 14"></path><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></svg></button>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col p-6 bg-white border-orange-200">
<div className="mt-8 mb-6 text-center">
<h2 className="text-xl font-semibold tracking-tight">Who are you?</h2>
<p className="text-sm text-orange-500 mt-1">Choose your account type.</p>
</div>
<div className="space-y-4 flex-1 flex flex-col justify-center pb-12">
<button className="group relative flex flex-col items-center p-6 border rounded-2xl transition-all text-center border-orange-200 hover:border-orange-400 hover:bg-orange-50">
<div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-green-100 text-green-600">
<svg className="lucide lucide-baby w-[28px] h-[28px]" data-icon-replaced="true" data-lucide="baby" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(22, 163, 74)', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M15 12h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path><path d="M9 12h.01"></path></svg>
</div>
<h3 className="font-medium text-orange-900">I am a Child</h3>
<p className="text-xs text-orange-500 mt-1">Access games and courses</p>
</button>
<button className="group relative flex flex-col items-center p-6 border rounded-2xl transition-all text-center border-orange-200 hover:border-orange-400 hover:bg-orange-50">
<div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-emerald-100 text-emerald-600">
<svg className="lucide lucide-user w-7 h-7" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="font-medium text-orange-900">I am a Parent</h3>
<p className="text-xs text-orange-500 mt-1">Monitor progress &amp; settings</p>
</button>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col p-6 bg-white border-orange-200">
<div className="flex items-center gap-3 mb-6 mt-2">
<button className="p-1 -ml-1"><svg className="lucide lucide-chevron-left w-5 h-5 text-orange-500" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<h2 className="text-base font-medium">Verification</h2>
</div>
<div className="flex-1 space-y-6">
<div className="rounded-xl p-4 border bg-orange-50 border-orange-100">
<p className="text-sm leading-relaxed text-orange-600">Please upload a valid ID to verify your parental status and unlock all features.</p>
</div>
<div className="border-2 border-dashed rounded-2xl h-48 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer border-orange-200 hover:bg-orange-50 hover:border-orange-300">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-100 text-orange-400">
<svg className="lucide lucide-camera w-6 h-6" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div className="text-center">
<p className="text-sm font-medium text-orange-900">Upload Front Side</p>
<p className="text-xs mt-1 text-orange-400">PNG, JPG up to 5MB</p>
</div>
</div>
</div>
<button className="w-full text-sm font-medium py-3.5 rounded-xl bg-orange-900 text-white">Submit for Review</button>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-orange-50 border-orange-200">

<div className="px-5 pt-12 pb-4 border-b sticky top-0 z-20 bg-white border-orange-100">
<div className="flex items-center justify-between mb-4">
<div className="flex flex-col">
<span className="text-xs text-orange-500 font-medium">Good Morning,</span>
<span className="text-lg font-semibold tracking-tight">Alex</span>
</div>
<button className="p-2 rounded-full relative bg-orange-100">
<svg className="lucide lucide-bell w-5 h-5 text-orange-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-yellow-500 rounded-full border border-white"></span>
</button>
</div>

<div className="flex gap-2">
<div className="flex-1 rounded-lg flex items-center px-3 py-2.5 bg-orange-100">
<svg className="lucide lucide-search w-4 h-4 mr-2 text-orange-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="focus:outline-none placeholder:text-orange-400 text-sm bg-transparent w-full" placeholder="Search courses..."/>
</div>
<button className="px-3 rounded-lg flex items-center text-xs font-medium bg-orange-100 text-orange-600"><svg className="lucide lucide-filter w-3.5 h-3.5 mr-1" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg> Age</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar">

<div className="w-full h-32 bg-gradient-to-r from-amber-500 rounded-2xl flex items-center px-5 shadow-lg to-purple-600 text-white shadow-amber-200">
<div className="">
<span className="text-xs font-medium px-2 py-0.5 rounded backdrop-blur-sm bg-white/20">New</span>
<h3 className="text-lg font-semibold mt-1">Summer Art Camp</h3>
<p className="text-xs text-white/80">Join now →</p>
</div>
</div>

<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-orange-900">Recommended Teachers</h3>
<span className="text-xs text-orange-500">View All</span>
</div>

<div className="flex gap-4 overflow-x-auto pb-2 -mx-5 px-5 no-scrollbar">
<div className="min-w-[140px] p-3 rounded-xl border shadow-sm flex flex-col items-center text-center bg-white border-orange-100">
<div className="w-12 h-12 rounded-full mb-2 bg-orange-200"></div>
<p className="text-sm font-medium text-orange-900">Dr. Sarah</p>
<p className="text-xs text-orange-400">Mathematics</p>
</div>
<div className="min-w-[140px] p-3 rounded-xl border shadow-sm flex flex-col items-center text-center bg-white border-orange-100">
<div className="w-12 h-12 rounded-full mb-2 bg-orange-200"></div>
<p className="text-sm font-medium text-orange-900">Mr. John</p>
<p className="text-xs text-orange-400">Physics</p>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold mb-3 text-orange-900">Courses for You</h3>
<div className="space-y-3">
<div className="p-3 rounded-xl border shadow-sm flex gap-3 bg-white border-orange-100">
<div className="w-20 h-20 rounded-lg shrink-0 bg-orange-100"></div>
<div className="flex flex-col justify-center">
<h4 className="text-sm font-medium text-orange-900">Advanced Logic</h4>
<p className="text-xs text-orange-500 mt-1 line-clamp-2">Master critical thinking with puzzles.</p>
</div>
</div>
</div>
</div>
</div>

<div className="border-t px-6 py-4 flex justify-between items-center text-xs font-medium bg-white border-orange-100 text-orange-400">
<div className="flex flex-col items-center text-orange-900"><svg className="lucide lucide-home mb-1 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(124, 45, 18)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path className="" d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>Home</div>
<div className="flex flex-col items-center"><svg className="lucide lucide-gamepad-2 w-5 h-5 mb-1" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line className="" x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>Game</div>
<div className="flex flex-col items-center"><svg className="lucide lucide-message-circle w-5 h-5 mb-1" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>Chat</div>
<div className="flex flex-col items-center"><svg className="lucide lucide-user w-5 h-5 mb-1" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Me</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-white border-orange-200">
<div className="p-5 border-b flex gap-3 items-center mt-6 border-orange-100">
<div className="flex-1 rounded-lg flex items-center px-3 py-2.5 bg-orange-100">
<svg className="lucide lucide-search w-4 h-4 mr-2 text-orange-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input autofocus="" className="bg-transparent text-sm w-full focus:outline-none text-orange-900" placeholder="Python coding..."/>
</div>
<span className="text-sm text-orange-500 font-medium">Cancel</span>
</div>
<div className="p-5">
<h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-orange-400">History</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 text-xs rounded-full border bg-orange-50 text-orange-600 border-orange-100">Math 101</span>
<span className="px-3 py-1.5 text-xs rounded-full border bg-orange-50 text-orange-600 border-orange-100">Piano lessons</span>
<span className="px-3 py-1.5 text-xs rounded-full border bg-orange-50 text-orange-600 border-orange-100">Art</span>
</div>
<h3 className="text-xs font-semibold uppercase tracking-wider mb-3 mt-8 text-orange-400">Trending</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-orange-600">
<span className="w-5 text-center font-bold text-orange-300">1</span> Minecraft Edu
                        </div>
<div className="flex items-center gap-3 text-sm text-orange-600">
<span className="w-5 text-center font-bold text-orange-300">2</span> AI for Kids
                        </div>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-white border-orange-200">
<div className="px-5 py-4 border-b mt-6 flex justify-between items-center z-10 border-orange-100 bg-white">
<button><svg className="lucide lucide-chevron-left w-5 h-5 text-orange-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<div className="text-center">
<h3 className="text-sm font-semibold">Tutor AI</h3>
<p className="text-[10px] text-yellow-500 flex items-center justify-center gap-1"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span> Online</p>
</div>
<button><svg className="lucide lucide-more-horizontal w-5 h-5 text-orange-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>
<div className="flex-1 p-4 overflow-y-auto space-y-4 bg-orange-50">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-amber-600 text-white">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="p-3 rounded-2xl rounded-tl-none border shadow-sm max-w-[80%] bg-white border-orange-100">
<p className="text-sm text-orange-700">Hello! I can help you find a course or answer homework questions.</p>
</div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%] bg-orange-900 text-white">
<p className="text-sm">Show me science games.</p>
</div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-amber-600 text-white">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="space-y-2 max-w-[80%]">
<div className="p-3 rounded-2xl rounded-tl-none border shadow-sm bg-white border-orange-100">
<p className="text-sm text-orange-700">Here is a popular science game:</p>
</div>
<div className="p-3 rounded-xl border shadow-sm bg-white border-orange-100">
<div className="w-full h-24 rounded-lg mb-2 bg-orange-100"></div>
<p className="text-xs font-semibold">Lab Master 3000</p>
<button className="mt-2 w-full text-xs py-1.5 rounded font-medium bg-amber-50 text-amber-600">Play Now</button>
</div>
</div>
</div>
</div>
<div className="p-3 border-t border-orange-100 bg-white">
<div className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-orange-50 border-orange-100">
<input className="bg-transparent text-sm flex-1 focus:outline-none" placeholder="Ask anything..."/>
<button className="text-amber-600"><svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></button>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-white border-orange-200">
<div className="relative h-48 bg-orange-900">
<div className="absolute top-6 left-5 z-10"><button className="backdrop-blur-md p-2 rounded-full bg-black/20 text-white"><svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="lucide lucide-play-circle w-12 h-12 text-white/80" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
<div className="flex-1 p-5 overflow-y-auto">
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded bg-amber-100 text-amber-700">Science</span>
<div className="flex gap-1 text-yellow-400">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-orange-500 font-medium">4.8</span>
</div>
</div>
<h2 className="text-lg font-semibold leading-tight text-orange-900">Introduction to Space Exploration</h2>
<p className="text-xs text-orange-500 mt-2">By <span className="font-medium text-orange-900">NASA Edu</span></p>
<div className="flex border-b mt-6 border-orange-100">
<button className="pb-2 border-b-2 text-xs font-medium flex-1 border-orange-900 text-orange-900">Overview</button>
<button className="pb-2 border-b-2 border-transparent text-xs font-medium flex-1 text-orange-400">Curriculum</button>
<button className="pb-2 border-b-2 border-transparent text-xs font-medium flex-1 text-orange-400">Reviews</button>
</div>
<div className="mt-4 space-y-4">
<h3 className="text-sm font-medium">What you'll learn</h3>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-xs text-orange-600">
<svg className="lucide lucide-check w-3 h-3 text-yellow-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Solar system dynamics
                            </li>
<li className="flex items-start gap-2 text-xs text-orange-600">
<svg className="lucide lucide-check w-3 h-3 text-yellow-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Rocket propulsion basics
                            </li>
</ul>
</div>
</div>
<div className="p-4 border-t flex gap-3 items-center border-orange-100">
<div className="text-lg font-bold text-orange-900">$49</div>
<button className="flex-1 text-sm font-medium py-3 rounded-xl bg-orange-900 text-white">Enroll Now</button>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-orange-50 border-orange-200">
<div className="pb-6 pt-12 px-5 rounded-b-3xl shadow-sm border-b bg-white border-orange-100">
<div className="flex justify-between mb-4">
<button><svg className="lucide lucide-chevron-left w-5 h-5 text-orange-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button><svg className="lucide lucide-share w-5 h-5 text-orange-600" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg></button>
</div>
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 shadow-md bg-orange-200 border-white">

</div>
<div>
<h2 className="text-lg font-semibold text-orange-900">Emily Clark</h2>
<p className="text-xs text-orange-500">Senior Art Instructor</p>
<div className="flex gap-2 mt-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-orange-100 text-orange-600">5 Yrs Exp</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-orange-100 text-orange-600">Top Rated</span>
</div>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-sm font-semibold mb-3">Courses (4)</h3>
<div className="space-y-3">
<div className="p-3 rounded-xl border shadow-sm flex gap-3 bg-white border-orange-200">
<div className="w-16 h-16 rounded-lg bg-orange-100"></div>
<div className="flex-1">
<h4 className="text-sm font-medium">Watercolor Basics</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-xs text-orange-400">12 Lessons</span>
<button className="text-xs px-3 py-1 rounded-lg bg-orange-900 text-white">View</button>
</div>
</div>
</div>
<div className="p-3 rounded-xl border shadow-sm flex gap-3 bg-white border-orange-200">
<div className="w-16 h-16 rounded-lg bg-orange-100"></div>
<div className="flex-1">
<h4 className="text-sm font-medium">Oil Painting</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-xs text-orange-400">8 Lessons</span>
<button className="text-xs px-3 py-1 rounded-lg bg-orange-900 text-white">View</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-orange-900 border-orange-800">
<div className="p-5 pt-12">
<h2 className="text-xl font-semibold tracking-tight text-white">Game Center</h2>
<p className="text-xs text-orange-400">Learn through play</p>
</div>
<div className="flex-1 overflow-y-auto px-5 pb-5 no-scrollbar">
<div className="mb-6">
<h3 className="text-xs font-medium text-orange-500 mb-3 uppercase tracking-wider">Recently Played</h3>
<div className="flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5">
<div className="min-w-[100px] flex flex-col gap-2">
<div className="w-24 h-24 rounded-2xl border bg-orange-800 border-orange-700"></div>
<span className="text-xs text-center text-orange-400">Math Hero</span>
</div>
<div className="min-w-[100px] flex flex-col gap-2">
<div className="w-24 h-24 rounded-2xl border bg-orange-800 border-orange-700"></div>
<span className="text-xs text-center text-orange-400">GeoQuest</span>
</div>
</div>
</div>
<div>
<h3 className="text-xs font-medium text-orange-500 mb-3 uppercase tracking-wider">Explore</h3>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 rounded-2xl border bg-orange-800 border-orange-700">
<div className="w-full aspect-square rounded-xl mb-3 bg-orange-700"></div>
<h4 className="text-sm font-medium text-white">Code Farm</h4>
<span className="text-[10px] text-orange-500">Logic</span>
</div>
<div className="p-3 rounded-2xl border bg-orange-800 border-orange-700">
<div className="w-full aspect-square rounded-xl mb-3 bg-orange-700"></div>
<h4 className="text-sm font-medium text-white">Spelling Bee</h4>
<span className="text-[10px] text-orange-500">Language</span>
</div>
<div className="p-3 rounded-2xl border bg-orange-800 border-orange-700">
<div className="w-full aspect-square rounded-xl mb-3 bg-orange-700"></div>
<h4 className="text-sm font-medium text-white">History Run</h4>
<span className="text-[10px] text-orange-500">Social Studies</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-orange-50 border-orange-200">
<div className="pt-12 px-5 pb-3 border-b flex justify-between items-center sticky top-0 z-20 bg-white border-orange-100">
<h2 className="text-lg font-semibold">Tree Hole</h2>
<div className="flex gap-4 text-xs font-medium">
<span className="border-b-2 pb-1 text-orange-900 border-orange-900">Square</span>
<span className="pb-1 text-orange-400">Friends</span>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="p-4 rounded-xl border shadow-sm bg-white border-orange-100">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 bg-gradient-to-tr rounded-full from-green-400 to-orange-400"></div>
<div>
<p className="text-xs font-semibold text-orange-900">Anonymous Fox</p>
<p className="text-[10px] text-orange-400">2 mins ago</p>
</div>
</div>
<p className="text-sm leading-relaxed mb-3 text-orange-700">Just finished the Python advanced course! It was harder than I thought but the final project is so cool. 🐍💻</p>
<div className="flex gap-4 text-orange-400">
<button className="flex items-center gap-1 text-xs hover:text-yellow-500 transition-colors"><svg className="lucide lucide-heart w-3.5 h-3.5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> 24</button>
<button className="flex items-center gap-1 text-xs hover:text-green-500 transition-colors"><svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> 5</button>
</div>
</div>

<div className="p-4 rounded-xl border shadow-sm bg-white border-orange-100">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 bg-gradient-to-tr rounded-full from-green-400 to-yellow-400"></div>
<div>
<p className="text-xs font-semibold text-orange-900">Quiet Owl</p>
<p className="text-[10px] text-orange-400">1 hour ago</p>
</div>
</div>
<p className="text-sm leading-relaxed mb-3 text-orange-700">Does anyone have tips for the Level 5 math boss? I keep getting stuck on the fractions part.</p>
<div className="flex gap-4 text-orange-400">
<button className="flex items-center gap-1 text-xs hover:text-yellow-500 transition-colors"><svg className="lucide lucide-heart w-3.5 h-3.5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> 8</button>
<button className="flex items-center gap-1 text-xs hover:text-green-500 transition-colors"><svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> 12</button>
</div>
</div>
</div>
<div className="absolute bottom-6 right-6">
<button className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform bg-orange-900 text-white shadow-orange-400/50">
<svg className="lucide lucide-plus w-6 h-6" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-white border-orange-200">
<div className="flex justify-between items-center p-5 pt-12 border-b border-orange-100">
<button className="text-sm text-orange-500">Cancel</button>
<button className="text-xs font-medium px-4 py-1.5 rounded-full bg-orange-900 text-white">Post</button>
</div>
<div className="p-5 flex-1">
<textarea className="w-full h-40 resize-none text-sm focus:outline-none placeholder:text-orange-400 leading-relaxed" placeholder="Share your thoughts anonymously..."></textarea>
<div className="mt-4 flex gap-3">
<div className="w-20 h-20 border border-dashed rounded-xl flex items-center justify-center cursor-pointer bg-orange-50 border-orange-200 text-orange-400 hover:bg-orange-100">
<svg className="lucide lucide-image w-5 h-5" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
</div>
<div className="mt-8 pt-4 border-t border-orange-100">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-orange-600">Post as Anonymous</span>
<div className="w-10 h-6 rounded-full relative cursor-pointer bg-orange-900">
<div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-white border-orange-200">
<div className="pt-12 px-5 pb-2">
<h2 className="text-2xl font-semibold tracking-tight">Messages</h2>
</div>
<div className="px-5 mb-4">
<div className="flex p-1 rounded-lg bg-orange-100">
<button className="flex-1 text-xs font-medium py-1.5 shadow-sm rounded-md bg-white text-orange-900">Friends</button>
<button className="flex-1 text-xs font-medium py-1.5 text-orange-500">Strangers</button>
<button className="flex-1 text-xs font-medium py-1.5 text-orange-500">System</button>
</div>
</div>
<div className="flex-1 overflow-y-auto px-5">

<div className="flex items-center gap-4 py-4 border-b -mx-5 px-5 transition-colors cursor-pointer border-orange-50 hover:bg-orange-50">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-orange-200"></div>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 rounded-full border-white"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h4 className="text-sm font-semibold text-orange-900">Sarah M.</h4>
<span className="text-[10px] text-orange-400">10:42 AM</span>
</div>
<p className="text-xs text-orange-500 truncate">Did you finish the homework?</p>
</div>
</div>

<div className="flex items-center gap-4 py-4 border-b -mx-5 px-5 transition-colors cursor-pointer border-orange-50 hover:bg-orange-50">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-orange-200"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h4 className="text-sm font-semibold text-orange-900">Math Club</h4>
<span className="text-[10px] text-orange-400">Yesterday</span>
</div>
<p className="text-xs text-orange-500 truncate">New challenge posted! Check it out.</p>
</div>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-amber-600 text-white">2</div>
</div>
</div>

<div className="h-16 border-t border-orange-100"></div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-white border-orange-200">
<div className="px-5 py-4 border-b mt-6 flex items-center gap-3 border-orange-100">
<button><svg className="lucide lucide-chevron-left w-5 h-5 text-orange-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<div className="w-8 h-8 rounded-full bg-orange-200"></div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-orange-900">Sarah M.</h3>
</div>
<button className=""><svg className="lucide lucide-phone w-4 h-4 text-orange-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></button>
<button className="ml-3"><svg className="lucide lucide-video w-4 h-4 text-orange-600" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg></button>
</div>
<div className="flex-1 p-4 space-y-3 overflow-y-auto bg-orange-50">
<div className="flex justify-center mb-4">
<span className="text-[10px] px-2 py-1 rounded-full text-orange-400 bg-orange-100">Today 10:30 AM</span>
</div>
<div className="flex justify-end">
<div className="px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[75%] shadow-sm bg-amber-600 text-white">
                            Hey! Are you going to the study group?
                        </div>
</div>
<div className="flex justify-start">
<div className="px-4 py-2 rounded-2xl rounded-tl-sm text-sm max-w-[75%] border shadow-sm bg-white text-orange-800 border-orange-200">
                            Yes, I'll be there in 10 mins!
                        </div>
</div>
</div>
<div className="p-3 border-t flex items-center gap-2 bg-white border-orange-100">
<button className="text-orange-400"><svg className="lucide lucide-plus-circle w-5 h-5" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg></button>
<input className="flex-1 rounded-full px-4 py-2 text-sm focus:outline-none bg-orange-100" placeholder="Message..."/>
<button className="text-amber-600"><svg className="lucide lucide-send-horizontal w-5 h-5" data-lucide="send-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"></path><path d="M6 12h16"></path></svg></button>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-orange-50 border-orange-200">
<div className="pb-6 pt-12 px-5 rounded-b-[2rem] shadow-sm border-b bg-white border-orange-100">
<div className="flex justify-end mb-2">
<svg className="lucide lucide-settings w-5 h-5 text-orange-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="flex flex-col items-center">
<div className="w-20 h-20 rounded-full mb-3 border-4 shadow-sm bg-orange-200 border-white"></div>
<h2 className="text-lg font-semibold text-orange-900">Alex Johnson</h2>
<p className="text-xs text-orange-500">Student • Level 5</p>
</div>
<div className="flex justify-around mt-6">
<div className="text-center">
<span className="block text-lg font-bold text-orange-900">12</span>
<span className="text-[10px] text-orange-500 uppercase tracking-wide">Courses</span>
</div>
<div className="text-center">
<span className="block text-lg font-bold text-orange-900">48h</span>
<span className="text-[10px] text-orange-500 uppercase tracking-wide">Learned</span>
</div>
<div className="text-center">
<span className="block text-lg font-bold text-orange-900">3</span>
<span className="text-[10px] text-orange-500 uppercase tracking-wide">Certificates</span>
</div>
</div>
</div>
<div className="p-5 space-y-3">
<div className="p-4 rounded-xl flex items-center justify-between border shadow-sm cursor-pointer bg-white border-orange-200/60 hover:bg-orange-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-50 text-green-600"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg></div>
<span className="text-sm font-medium text-orange-700">Schedule</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-orange-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="p-4 rounded-xl flex items-center justify-between border shadow-sm cursor-pointer bg-white border-orange-200/60 hover:bg-orange-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-50 text-purple-600"><svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg></div>
<span className="text-sm font-medium text-orange-700">Course Records</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-orange-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="p-4 rounded-xl flex items-center justify-between border shadow-sm cursor-pointer bg-white border-orange-200/60 hover:bg-orange-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-50 text-orange-600"><svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
<span className="text-sm font-medium text-orange-700">Homework</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-orange-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="mt-auto border-t h-16 w-full bg-white border-orange-100"></div>
</div>

<div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border shadow-xl overflow-hidden flex flex-col bg-white border-orange-200">
<div className="px-5 py-4 border-b mt-6 flex items-center gap-3 border-orange-100">
<button><svg className="lucide lucide-chevron-left w-5 h-5 text-orange-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<h3 className="text-base font-semibold text-orange-900">My Courses</h3>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-4">

<div className="border rounded-xl p-3 shadow-sm border-orange-100">
<div className="flex gap-3 mb-3">
<div className="w-16 h-16 rounded-lg shrink-0 bg-orange-100"></div>
<div className="flex-1">
<h4 className="text-sm font-medium text-orange-900">English Literature</h4>
<p className="text-xs text-orange-500 mt-1">Chapter 4: Poetry</p>
</div>
</div>
<div className="w-full rounded-full h-1.5 bg-orange-100">
<div className="h-1.5 rounded-full bg-amber-600" style={{width: '75%'}}></div>
</div>
<div className="flex justify-between mt-1.5">
<span className="text-[10px] text-orange-400">75% Complete</span>
<span className="text-[10px] font-medium text-amber-600">Continue</span>
</div>
</div>

<div className="border rounded-xl p-3 shadow-sm border-orange-100">
<div className="flex gap-3 mb-3">
<div className="w-16 h-16 rounded-lg shrink-0 bg-orange-100"></div>
<div className="flex-1">
<h4 className="text-sm font-medium text-orange-900">Basic Physics</h4>
<p className="text-xs text-orange-500 mt-1">Chapter 2: Motion</p>
</div>
</div>
<div className="w-full rounded-full h-1.5 bg-orange-100">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '30%'}}></div>
</div>
<div className="flex justify-between mt-1.5">
<span className="text-[10px] text-orange-400">30% Complete</span>
<span className="text-[10px] font-medium text-emerald-600">Continue</span>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
