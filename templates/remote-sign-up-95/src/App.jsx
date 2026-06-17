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
      

<div className="hidden lg:flex flex-col w-[420px] bg-[#103597] text-white p-10 relative overflow-hidden shrink-0 z-10">

<div className="flex flex-col items-start gap-8 z-20">
<div className="flex items-center gap-2">

<svg className="text-white" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 10.5C16.5 7.46243 14.0376 5 11 5H6V19H10V14H11.5L14.5 19H19L15.5 13.5C17.2 12.8 16.5 10.5 16.5 10.5Z" fill="white" stroke="none"></path>
<path d="M5 5V19H2V5H5Z" fill="white"></path>
</svg>
<span className="text-2xl font-semibold tracking-tight">remote</span>
</div>
<div className="w-10 h-10 rounded-full bg-blue-600/50 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="user-plus"></i>
</div>
<h1 className="text-3xl font-medium tracking-tight leading-snug">
                Create your account in a few clicks
            </h1>
</div>

<div className="mt-12 flex flex-col relative z-20">

<div className="absolute left-[15px] top-4 bottom-10 w-[1px] bg-blue-300/30"></div>

<div className="flex items-center gap-5 mb-8 relative">
<div className="w-[32px] h-[32px] rounded-full border-[1.5px] border-white flex items-center justify-center bg-[#103597] z-10">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<span className="text-lg font-normal text-blue-100">Sign up</span>
</div>

<div className="flex items-center gap-5 mb-8 relative">
<div className="w-[32px] h-[32px] rounded-full border-[1.5px] border-white flex items-center justify-center bg-[#103597] z-10">
<span className="text-sm font-semibold">2</span>
</div>
<span className="text-lg font-medium text-white">Basic information</span>
</div>

<div className="flex items-center gap-5 relative">
<div className="w-[32px] h-[32px] rounded-full border-[1.5px] border-white/40 flex items-center justify-center bg-[#103597] z-10">
<span className="text-sm font-medium text-white/40">3</span>
</div>
<span className="text-lg font-normal text-white/40">Confirm email</span>
</div>
</div>

<div className="mt-auto z-20 text-blue-100/90 text-[17px] space-y-4">
<p>jdoe@content-mobbin.com</p>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="lock"></i>
<span>Logout</span>
</a>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
<span>Change password</span>
</a>
</div>

<div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[50%] sphere-pattern z-0 pointer-events-none"></div>
</div>

<div className="flex-1 flex flex-col relative h-full overflow-y-auto no-scrollbar">

<div className="absolute top-8 right-8 text-blue-600">
<svg className="animate-spin" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="#3b82f6" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
<div className="flex-1 flex flex-col items-center pt-24 pb-12 px-6">
<div className="w-full max-w-[560px]">
<h2 className="text-[34px] font-semibold text-center text-slate-900 mb-14 tracking-tight">Let's get started</h2>
<form className="space-y-7" onsubmit="event.preventDefault();">

<div>
<div className="bg-white border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-500 transition-all">
<label className="block text-xs font-normal text-gray-500 mb-0.5">Company name</label>
<input className="block w-full text-lg text-slate-900 placeholder-gray-400 bg-transparent outline-none border-none p-0 focus:ring-0" type="text" value="JD Mobbin"/>
</div>
<p className="mt-2 text-sm text-gray-500 font-normal">This is what we'll use for invoices.</p>
</div>

<div>
<div className="relative bg-white border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm cursor-pointer group hover:border-gray-400 transition-colors">
<label className="block text-xs font-normal text-gray-500 mb-0.5">Country</label>
<div className="flex items-center justify-between">
<span className="block text-lg text-slate-900">United States</span>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="chevron-down"></i>
</div>
</div>
<p className="mt-2 text-sm text-gray-500 font-normal">Where your company is legally based.</p>
</div>

<div>
<div className="relative bg-white border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm cursor-pointer group hover:border-gray-400 transition-colors">
<label className="block text-xs font-normal text-gray-500 mb-0.5">What's your main goal with Remote?</label>
<div className="flex items-center justify-between">
<span className="block text-lg text-slate-900 truncate pr-4">Manage my global team on one platform</span>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600 shrink-0" data-lucide="chevron-down"></i>
</div>
</div>
<p className="mt-2 text-sm text-gray-500 font-normal">Select the option that best fits your situation.</p>
</div>

<div className="pt-2 space-y-4">

<div className="flex items-start gap-3.5">
<div className="relative flex items-center justify-center w-[22px] h-[22px] rounded bg-blue-600 border border-blue-600 shrink-0 mt-0.5 cursor-pointer">
<i className="w-3.5 h-3.5 text-white stroke-[3]" data-lucide="check"></i>
</div>
<p className="text-[17px] text-gray-600 leading-relaxed font-normal">
                                I accept the <a className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium" href="#">Terms of Service <i className="w-3.5 h-3.5 ml-0.5" data-lucide="arrow-up-right"></i></a> and I'm authorized to accept for my company
                            </p>
</div>

<div className="flex items-start gap-3.5">
<div className="relative flex items-center justify-center w-[22px] h-[22px] rounded bg-white border-[1.5px] border-gray-400 shrink-0 mt-0.5 cursor-pointer hover:border-gray-500">
</div>
<p className="text-[17px] text-gray-600 leading-relaxed font-normal">
                                I agree to receive marketing updates from Remote
                            </p>
</div>
</div>

<div className="pt-10 flex justify-center">
<button className="w-24 h-14 bg-blue-300/80 rounded-full flex items-center justify-center transition-opacity hover:opacity-90 cursor-not-allowed" type="button">

<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
</button>
</div>
</form>
</div>
</div>
</div>


    </>
  );
}
