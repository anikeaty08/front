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
      

<aside className="w-[72px] bg-white border-r border-gray-100 flex flex-col items-center py-7 shrink-0 z-30">

<div className="text-[#D97706] mb-12 p-1">

<svg fill="currentColor" height="26" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"></path>
</svg>
</div>

<div className="flex flex-col gap-9 w-full items-center">
<button className="text-gray-900 hover:text-orange-600 transition-colors group">
<i className="w-[22px] h-[22px] stroke-[1.8]" data-lucide="rotate-cw"></i>
</button>
<button className="text-gray-400 hover:text-gray-600 transition-colors group">
<i className="w-[22px] h-[22px] stroke-[1.8]" data-lucide="book-open"></i>
</button>
<button className="text-gray-400 hover:text-gray-600 transition-colors group">
<i className="w-[22px] h-[22px] stroke-[1.8]" data-lucide="link"></i>
</button>
</div>

<div className="mt-auto flex flex-col gap-7 w-full items-center mb-1">
<button className="text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-[22px] h-[22px] stroke-[1.8]" data-lucide="sun"></i>
</button>
<button className="text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-[22px] h-[22px] stroke-[1.8]" data-lucide="sliders-horizontal"></i>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 cursor-pointer">
<img alt="User" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?img=35"/>
</div>
</div>
</aside>

<aside className="w-[280px] bg-white border-r border-gray-100 flex flex-col shrink-0 h-full">

<div className="px-5 pt-8 pb-4">
<h1 className="text-center text-[19px] font-semibold tracking-tight text-gray-900 mb-6">Omni Agent</h1>
<div className="space-y-3">
<button className="w-full bg-[#D97706] hover:bg-[#B45309] transition-colors text-white text-[15px] font-medium py-2.5 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center">
                    New Agent
                </button>
<button className="w-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-[15px] font-medium py-2.5 rounded-full flex items-center justify-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="file-text"></i>
                    Import Agent
                </button>
</div>
<div className="relative mt-6 group">
<i className="absolute left-3.5 top-2.5 w-[18px] h-[18px] text-gray-400 group-hover:text-gray-500 transition-colors stroke-[1.5]" data-lucide="search"></i>
<input className="w-full bg-white border border-gray-200 rounded-xl py-2 pl-10 pr-10 text-[15px] placeholder-gray-400 focus:outline-none focus:border-orange-500/30 focus:ring-4 focus:ring-orange-500/5 transition-all shadow-sm" placeholder="Search..." type="text"/>
<div className="absolute right-3 top-2.5 text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 font-medium tracking-wide bg-gray-50">⌘ F</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 py-2 space-y-5">

<div>
<div className="flex items-center gap-3 text-gray-600 px-3 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer group transition-colors">
<i className="w-[18px] h-[18px] stroke-[1.5] text-gray-500 group-hover:text-gray-700" data-lucide="layout-grid"></i>
<span className="text-[15px] font-medium">Dashboards</span>
</div>
</div>

<div>
<div className="flex items-center justify-between text-gray-600 px-3 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer group mb-1">
<div className="flex items-center gap-3">
<i className="w-[18px] h-[18px] stroke-[1.5] text-gray-500 group-hover:text-gray-700" data-lucide="folder"></i>
<span className="text-[15px] font-medium">Works</span>
</div>
<i className="w-4 h-4 text-gray-400 stroke-[1.5]" data-lucide="chevron-down"></i>
</div>

<div className="relative ml-[21px] pl-4 border-l border-gray-100 space-y-0.5 mt-1">
<div className="px-3 py-2 bg-[#FFF7ED] rounded-lg cursor-pointer">
<span className="text-[14px] font-medium text-gray-900 block truncate">Atoll Construction</span>
</div>
<div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
<span className="text-[14px] font-medium text-gray-500 hover:text-gray-700 block truncate">Le Amore</span>
</div>
<div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
<span className="text-[14px] font-medium text-gray-500 hover:text-gray-700 block truncate">Realize MGMT</span>
</div>
<div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
<span className="text-[14px] font-medium text-gray-500 hover:text-gray-700 block truncate">SY-CL</span>
</div>
<div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
<span className="text-[14px] font-medium text-gray-500 hover:text-gray-700 block truncate">Cerebrum Inc.</span>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between text-gray-600 px-3 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<i className="w-[18px] h-[18px] stroke-[1.5] text-gray-500 group-hover:text-gray-700" data-lucide="folder"></i>
<span className="text-[15px] font-medium">General</span>
</div>
<i className="w-4 h-4 text-gray-400 stroke-[1.5]" data-lucide="chevron-right"></i>
</div>
</div>
<div>
<div className="flex items-center justify-between text-gray-600 px-3 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<i className="w-[18px] h-[18px] stroke-[1.5] text-gray-500 group-hover:text-gray-700" data-lucide="folder"></i>
<span className="text-[15px] font-medium">Money Budgeting</span>
</div>
<i className="w-4 h-4 text-gray-400 stroke-[1.5]" data-lucide="chevron-right"></i>
</div>
</div>
</div>

<div className="p-5 mt-auto">
<div className="rounded-2xl p-6 bg-gradient-to-br from-[#E87B35] to-[#C25E00] text-white shadow-lg shadow-orange-900/10 relative overflow-hidden">

<div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
<h3 className="font-semibold text-[15px] tracking-tight mb-2 relative z-10">Premium Plan</h3>
<p className="text-[13px] text-orange-50/90 leading-relaxed mb-5 font-normal relative z-10">
                    Upgrade to Premium Plan to Unlock More Feature You Need
                </p>
<button className="w-full bg-white text-[#C25E00] text-[13px] font-semibold py-2.5 rounded-lg shadow-sm hover:bg-orange-50 transition-colors relative z-10">
                    Upgrade Premium
                </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-y-auto">

<header className="w-full flex justify-between items-center px-8 py-6 shrink-0 z-20">

<div className="flex items-center gap-3">
<button className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white pl-2 pr-4 py-1.5 rounded-full text-[14px] font-medium transition-colors shadow-sm">
<div className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
<span className="text-[11px] font-bold">$</span>
</div>
                    Upgrade Plan
                </button>
<button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-[14px] font-medium hover:bg-gray-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<i className="w-4 h-4 stroke-[2]" data-lucide="history"></i>
                    History
                </button>
</div>

<div className="flex items-center gap-3">
<button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-all shadow-sm">
<i className="w-[18px] h-[18px] stroke-[1.5]" data-lucide="share-2"></i>
</button>
<button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-all shadow-sm">
<i className="w-[18px] h-[18px] stroke-[1.5]" data-lucide="mail"></i>
</button>
<button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-all shadow-sm">
<i className="w-[18px] h-[18px] stroke-[1.5]" data-lucide="bell"></i>
</button>
</div>
</header>

<div className="flex-1 flex flex-col items-center justify-center max-w-[1040px] mx-auto w-full px-8 pb-16">

<div className="text-[#D97706] mb-8 drop-shadow-sm">
<svg fill="currentColor" height="68" viewbox="0 0 24 24" width="68" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"></path>
</svg>
</div>

<h1 className="text-[34px] leading-tight font-semibold text-gray-900 text-center tracking-tight mb-4">
                Welcome to Omni AI Your AI Copilot Awaits.
            </h1>

<div className="text-center text-gray-400 text-[16px] leading-relaxed max-w-2xl mb-14 font-normal tracking-wide">
<p>Discover smarter conversations, automated insights, and limitless creativity — all in one dashboard.</p>
<p>Let's set you up in just a few steps.</p>
</div>

<div className="w-full bg-white rounded-2xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 relative min-h-[168px] flex flex-col mb-20 group focus-within:ring-4 focus-within:ring-orange-500/5 focus-within:border-orange-500/20 transition-all">
<div className="flex items-center gap-3 mb-2 px-1">
<i className="w-5 h-5 text-gray-300 stroke-[2]" data-lucide="search"></i>
<input className="w-full text-[16px] text-gray-700 placeholder-gray-300 focus:outline-none bg-transparent h-9" placeholder="Ask anything OmniAI..." type="text"/>
</div>
<div className="mt-auto flex justify-between items-center pt-4">
<div className="flex gap-3">
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50 text-[13px] font-medium transition-colors">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="paperclip"></i>
                            Attach
                        </button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50 text-[13px] font-medium transition-colors">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="image"></i>
                            Upload Media
                        </button>
</div>
<button className="w-9 h-9 bg-white border border-gray-100 hover:bg-gray-50 rounded-lg flex items-center justify-center shadow-sm transition-colors text-gray-900 group-hover:border-gray-200">

<svg className="ml-0.5" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M22 2L15 22L11 13L2 9L22 2Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="w-full">
<h3 className="text-center text-[20px] font-semibold tracking-tight text-gray-900 mb-8">Find Your Template Chats AI</h3>
<div className="grid grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.04)] hover:border-gray-300 transition-all cursor-pointer group flex flex-col justify-between h-[150px]">
<p className="text-[15px] font-medium text-gray-800 leading-snug">
                            Write a to do list with best practice for designers
                        </p>
<div className="flex justify-between items-end mt-4">
<i className="w-5 h-5 text-gray-400 stroke-[1.5]" data-lucide="user"></i>
<div className="w-9 h-9 rounded-xl bg-[#FAFAFA] group-hover:bg-[#F3F4F6] flex items-center justify-center transition-colors">
<i className="w-4 h-4 text-gray-800 stroke-[2]" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.04)] hover:border-gray-300 transition-all cursor-pointer group flex flex-col justify-between h-[150px]">
<p className="text-[15px] font-medium text-gray-800 leading-snug">
                            Draft a follow-up email for new leads from yesterday
                        </p>
<div className="flex justify-between items-end mt-4">
<i className="w-5 h-5 text-gray-400 stroke-[1.5]" data-lucide="mail"></i>
<div className="w-9 h-9 rounded-xl bg-[#FAFAFA] group-hover:bg-[#F3F4F6] flex items-center justify-center transition-colors">
<i className="w-4 h-4 text-gray-800 stroke-[2]" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.04)] hover:border-gray-300 transition-all cursor-pointer group flex flex-col justify-between h-[150px]">
<p className="text-[15px] font-medium text-gray-800 leading-snug">
                            Generate a quick task list for my sales team and report results
                        </p>
<div className="flex justify-between items-end mt-4">
<i className="w-5 h-5 text-gray-400 stroke-[1.5]" data-lucide="list"></i>
<div className="w-9 h-9 rounded-xl bg-[#FAFAFA] group-hover:bg-[#F3F4F6] flex items-center justify-center transition-colors">
<i className="w-4 h-4 text-gray-800 stroke-[2]" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
