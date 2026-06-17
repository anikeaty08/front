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
      

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/80 via-white to-blue-50/80"></div>
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200/20 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/20 blur-[120px] rounded-full"></div>
</div>

<div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-500 z-50"></div>

<nav className="fixed top-0 left-0 w-full px-8 py-6 z-40">
<button className="flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">
<i className="w-5 h-5 stroke-[2.5px]" data-lucide="chevron-left"></i>
            Back
        </button>
</nav>

<main className="max-w-[1400px] mx-auto pt-24 pb-32 px-6 relative flex justify-center">

<div className="w-full max-w-3xl flex flex-col items-center">

<div className="text-center mb-16">
<h1 className="text-[28px] font-semibold tracking-tight text-slate-900 mb-2">Prepare your sequence</h1>
<p className="text-slate-500 text-[15px] font-normal">Once the campaign is enabled, telescope will send them to your leads automatically</p>
</div>

<div className="w-full relative z-10 flex flex-col items-center">

<div className="w-full bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04),0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-slate-100 p-2 pl-4 pr-3 hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08),0_12px_32px_-4px_rgba(0,0,0,0.08)] transition-all duration-300">
<div className="flex items-center justify-between h-12">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#0a66c2] flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-white fill-current stroke-0" data-lucide="linkedin"></i>
</div>
<span className="text-[15px] font-semibold text-slate-900">Step 1 <span className="font-normal text-slate-600">- Send LinkedIn request</span></span>
</div>
<button className="text-slate-300 hover:text-slate-600 transition-colors p-2 rounded hover:bg-slate-50">
<i className="w-5 h-5" data-lucide="more-vertical"></i>
</button>
</div>
</div>

<div className="h-10 w-[1.5px] dotted-line relative"></div>

<div className="bg-white border border-slate-100 shadow-sm rounded-full py-1.5 pl-4 pr-4 flex items-center gap-2 text-xs text-slate-500 font-medium z-10 relative">
<span className="text-slate-400 font-medium">Wait</span>
<span className="text-slate-900 font-semibold bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-[11px] min-w-[20px] text-center">3</span>
<span className="text-slate-400 font-medium">days</span>
</div>

<div className="h-10 w-[1.5px] dotted-line relative"></div>

<div className="text-slate-200 -mt-2 mb-1">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>

<div className="w-full bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04),0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08),0_12px_32px_-4px_rgba(0,0,0,0.08)] transition-all duration-300">

<div className="px-4 py-3 flex items-center justify-between border-b border-slate-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#0a66c2] flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-white fill-current stroke-0" data-lucide="linkedin"></i>
</div>
<span className="text-[15px] font-semibold text-slate-900">Step 2 <span className="font-normal text-slate-600">- Send LinkedIn message</span></span>
</div>
<div className="flex items-center gap-3">
<span className="bg-[#f0f3ff] text-[#4f46e5] text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wide">If connection is accepted</span>
<button className="text-slate-300 hover:text-slate-600 transition-colors p-1.5 rounded hover:bg-slate-50">
<i className="w-5 h-5" data-lucide="more-vertical"></i>
</button>
</div>
</div>

<div className="p-6">
<div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
<p>Hi René,</p>
<p>I noticed HeymannBrandt's focus on creative brand communication and employer branding. Given your agency's dedication to 'Sinnstiftung' (purpose-driven branding) and a strong internal culture (Kununu 4.5 stars), I had a quick thought.</p>
</div>
</div>
</div>

<div className="h-10 w-[1.5px] dotted-line relative"></div>

<div className="bg-white border border-slate-100 shadow-sm rounded-full py-1.5 pl-4 pr-4 flex items-center gap-2 text-xs text-slate-500 font-medium z-10 relative">
<span className="text-slate-400 font-medium">Wait</span>
<span className="text-slate-900 font-semibold bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-[11px] min-w-[20px] text-center">3</span>
<span className="text-slate-400 font-medium">days</span>
</div>

<div className="h-10 w-[1.5px] dotted-line relative"></div>

<div className="text-slate-200 -mt-2 mb-1">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>

<div className="w-full bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04),0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08),0_12px_32px_-4px_rgba(0,0,0,0.08)] transition-all duration-300">

<div className="px-4 py-3 flex items-center justify-between border-b border-slate-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-white stroke-[2.5px]" data-lucide="mail"></i>
</div>
<span className="text-[15px] font-semibold text-slate-900">Step 3 <span className="font-normal text-slate-600">- Send email</span></span>
</div>
<div className="flex items-center gap-3">
<span className="bg-[#f0f3ff] text-[#4f46e5] text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wide">If no reply</span>
<button className="text-slate-300 hover:text-slate-600 transition-colors p-1.5 rounded hover:bg-slate-50">
<i className="w-5 h-5" data-lucide="more-vertical"></i>
</button>
</div>
</div>

<div className="p-6">
<div className="mb-5 pb-4 border-b border-slate-50">
<p className="text-[15px] text-slate-800">Re: Hey Nicholas, how is it going?</p>
</div>
<div className="space-y-5 text-[15px] leading-relaxed text-slate-600">
<p>Hi René,</p>
<p>I noticed HeymannBrandt's focus on creative brand communication and employer branding. Given your agency's dedication to 'Sinnstiftung' (purpose-driven branding) and a strong internal culture (Kununu 4.5 stars), I had a quick thought.</p>
<p>Many agencies with a similar ethos find that showcasing their internal culture and employee stories authentically attracts both top talent and clients who value that same purpose. We help agencies like yours scale that authentic storytelling through [Solution/Your Company].</p>
<p>Would you be open to a quick chat next week to explore how we could support HeymannBrandt's employer branding efforts?</p>
<div className="pt-2">
<p>Best,</p>
<p>Kateryna</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden xl:block absolute right-6 top-32 w-[340px]">
<div className="bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04),0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">

<div className="px-5 py-3.5 flex items-center justify-between border-b border-slate-50 bg-slate-50/30">
<div className="flex items-center gap-1.5 text-slate-900">
<span className="text-[13px] font-semibold">Leads</span>
<span className="text-[13px] text-slate-400 font-normal">5/20</span>
</div>
<div className="flex items-center gap-3">
<button className="text-slate-400 hover:text-slate-700 transition-colors"><i className="w-4 h-4" data-lucide="search"></i></button>
<div className="flex items-center gap-1">
<button className="text-slate-400 hover:text-slate-700 transition-colors p-0.5 hover:bg-slate-100 rounded"><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button className="text-slate-400 hover:text-slate-700 transition-colors p-0.5 hover:bg-slate-100 rounded"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>
</div>

<div className="p-5 flex items-center gap-3.5">
<div className="w-10 h-10 rounded-full bg-[#6366f1]/10 flex items-center justify-center text-[#6366f1] shrink-0">
<i className="w-5 h-5 fill-current" data-lucide="user"></i>
</div>
<div className="flex flex-col">
<span className="text-[14px] font-semibold text-slate-900 leading-tight">Charlie Higgins</span>
<span className="text-[12px] text-slate-500 mt-0.5 font-normal">Senior R&amp;D Manager @Meta</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
