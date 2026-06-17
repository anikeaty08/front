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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">

<svg className="absolute w-[120%] h-[120%] text-slate-300/60 opacity-50" preserveaspectratio="xMidYMid slice" viewbox="0 0 1000 1000">
<path d="M-100,500 C200,300 400,700 800,400 S1100,600 1200,300" fill="none" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="2"></path>
<path d="M0,600 C300,700 500,200 900,500 S1100,400 1200,700" fill="none" stroke="currentColor" stroke-dasharray="4 8" strokeWidth="1.5"></path>

<circle className="text-blue-200" cx="20%" cy="45%" fill="currentColor" r="12"></circle>
<circle className="text-blue-400" cx="20%" cy="45%" fill="currentColor" r="4"></circle>
<circle className="text-amber-200" cx="85%" cy="35%" fill="currentColor" r="8"></circle>
<circle className="text-amber-400" cx="85%" cy="35%" fill="currentColor" r="3"></circle>
<circle className="text-slate-200" cx="45%" cy="25%" fill="currentColor" r="16"></circle>
<circle className="text-orange-200/50" cx="75%" cy="65%" fill="currentColor" r="24"></circle>
</svg>

<div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-slate-200/40 rounded-full blur-[120px]"></div>
<div className="absolute top-[20%] left-[50%] translate-x-[-50%] w-[40%] h-[40%] bg-white/60 rounded-full blur-[80px]"></div>
</div>

<div className="relative z-10 min-h-screen w-full flex items-center justify-center p-4 sm:p-8">

<div className="hidden lg:block relative w-full max-w-6xl h-[700px]">

<div className="absolute top-[35%] left-[15%] w-80 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-2xl shadow-slate-300/30 p-6 transition-transform duration-500 hover:-translate-y-2 group z-20">
<div className="flex items-center gap-3 mb-6">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-500">
<i className="w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-800">Login</h2>
<div className="ml-auto w-10 h-2 bg-slate-100 rounded-full"></div>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="email address" type="email"/>
</div>
<div className="mt-4 flex justify-center w-full">
<div className="w-16 h-1 bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="absolute top-[20%] right-[32%] w-64 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-2xl shadow-slate-300/30 p-5 transition-transform duration-500 hover:scale-105 z-10">
<div className="flex items-center justify-center gap-3 bg-amber-50 border border-amber-100 rounded-xl py-4 px-2">
<i className="w-6 h-6 text-amber-500" data-lucide="ticket" strokeWidth="1.5"></i>
<h3 className="text-xl font-semibold tracking-tight text-amber-600">10% OFF!</h3>
</div>

<div className="mt-4 space-y-2 opacity-40">
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
<div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="absolute top-[45%] right-[10%] w-80 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-2xl shadow-slate-300/30 p-6 transition-transform duration-500 hover:-translate-y-2 z-20">
<div className="flex items-center justify-between mb-4 opacity-50">
<div className="w-6 h-6 bg-slate-200 rounded-md"></div>
<div className="w-24 h-2 bg-slate-200 rounded-full"></div>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-green-500 text-white shadow-sm">
<i className="w-5 h-5 fill-current" data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-800">WhatsApp</h2>
</div>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all shadow-sm" placeholder="Enter your number" type="text"/>
</div>

<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[45%] w-[480px] bg-white/95 backdrop-blur-2xl rounded-3xl border border-white shadow-2xl shadow-blue-900/10 p-8 z-30 ring-1 ring-slate-900/5">
<div className="flex gap-8 items-center">

<div className="relative w-40 h-40 shrink-0">

<div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#3B82F6_0deg_60deg,#60A5FA_60deg_120deg,#93C5FD_120deg_180deg,#FCD34D_180deg_240deg,#FBBF24_240deg_300deg,#2563EB_300deg_360deg)] shadow-inner flex items-center justify-center border-4 border-white">

<div className="absolute w-full h-full rounded-full border border-white/20"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
<div className="w-2 h-2 bg-rose-500 rounded-full"></div>
</div>

<div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[14px] border-transparent border-t-slate-800 z-10"></div>
</div>

<div className="flex-1">
<div className="flex justify-end mb-2">
<div className="w-8 h-1.5 bg-slate-200 rounded-full"></div>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Spin to Win!</h1>
<p className="text-base text-slate-500 mb-6 leading-relaxed">Get discount before you leave!</p>
<button className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-base font-medium py-3 px-6 rounded-xl shadow-sm shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group">
                            Login
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
</div>
</div>
<div className="absolute bottom-4 left-6 w-12 h-3 bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="lg:hidden flex flex-col gap-6 w-full max-w-md relative z-20">

<div className="w-full bg-white/95 backdrop-blur-2xl rounded-3xl border border-white shadow-xl shadow-blue-900/10 p-6 ring-1 ring-slate-900/5">
<div className="flex flex-col items-center text-center gap-6">
<div className="relative w-32 h-32 shrink-0">
<div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#3B82F6_0deg_60deg,#60A5FA_60deg_120deg,#93C5FD_120deg_180deg,#FCD34D_180deg_240deg,#FBBF24_240deg_300deg,#2563EB_300deg_360deg)] shadow-inner border-4 border-white"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
</div>
<div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-transparent border-t-slate-800 z-10"></div>
</div>
<div className="w-full">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Spin to Win!</h1>
<p className="text-base text-slate-500 mb-6">Get discount before you leave!</p>
<button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-base font-medium py-3 rounded-xl shadow-sm transition-colors">
                            Login
                        </button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-lg p-5">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-orange-500" data-lucide="flame" strokeWidth="1.5"></i>
<h2 className="text-xl font-semibold tracking-tight text-slate-800">Login</h2>
</div>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500" placeholder="email" type="email"/>
</div>
</div>

<div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-lg p-5 flex flex-col justify-center">
<div className="flex flex-col items-center justify-center gap-2 bg-amber-50 border border-amber-100 rounded-xl py-4 h-full">
<i className="w-6 h-6 text-amber-500" data-lucide="ticket" strokeWidth="1.5"></i>
<h3 className="text-base font-semibold tracking-tight text-amber-600 text-center">10% OFF!</h3>
</div>
</div>
</div>

<div className="w-full bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-lg p-5">
<div className="flex items-center gap-3 mb-4">
<div className="flex items-center justify-center w-8 h-8 rounded-xl bg-green-500 text-white">
<i className="w-4 h-4 fill-current" data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-800">WhatsApp</h2>
</div>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-base text-slate-700 focus:outline-none focus:border-green-500 shadow-sm" placeholder="Enter your number" type="text"/>
</div>
</div>
</div>


    </>
  );
}
