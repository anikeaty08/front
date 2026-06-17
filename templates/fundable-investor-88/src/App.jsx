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
      

<header className="bg-white border-b border-slate-200 h-20 flex items-center px-4 md:px-8 sticky top-0 z-50">
<button className="p-2 mr-2 hover:bg-slate-50 rounded-full text-slate-600 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<div className="flex items-center gap-3">
<div className="bg-[#0f2942] text-white p-1.5 rounded-lg flex items-center justify-center shadow-sm">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-[#0f2942]">Fundable Investor</span>
</div>
</header>

<main className="w-full max-w-[1080px] mx-auto px-4 py-12 md:py-16 flex flex-col items-center">

<div className="w-24 h-24 bg-[#faebd7] rounded-full flex items-center justify-center mb-8 shadow-sm">
<i className="w-10 h-10 text-[#f59e0b]" data-lucide="wand-2"></i>
</div>
<h1 className="text-3xl md:text-4xl font-semibold text-[#0f2942] tracking-tight mb-4 text-center">
            You've Used All 3 Presentations
        </h1>
<p className="text-lg md:text-xl text-slate-500 text-center max-w-2xl mb-14 leading-relaxed font-normal">
            Need to create more lender presentations? Add more to your account and keep building professional packets.
        </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12 items-start">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-all duration-300 h-full">
<div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
<span className="text-2xl font-semibold text-blue-500">+1</span>
</div>
<h3 className="text-lg font-medium text-slate-800 mb-2">1 Presentation</h3>
<div className="text-4xl font-semibold text-[#0f2942] tracking-tight mb-1">$79</div>
<div className="text-sm text-slate-400 mb-8 font-medium">$79.00 per presentation</div>
<button className="w-full py-3.5 rounded-full bg-[#f1f5f9] text-slate-700 font-medium hover:bg-slate-200 transition-colors mt-auto">
                    Get 1 More
                </button>
</div>

<div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-600 flex flex-col items-center relative transform md:-translate-y-2 z-10 h-full">
<div className="absolute -top-3.5 bg-blue-600 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    Best Value
                </div>
<div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
<span className="text-2xl font-semibold text-blue-500">+2</span>
</div>
<h3 className="text-lg font-medium text-slate-800 mb-2">2 Presentations</h3>
<div className="text-4xl font-semibold text-[#0f2942] tracking-tight mb-1">$139</div>
<div className="text-sm text-slate-400 mb-8 font-medium">$69.50 per presentation</div>
<button className="w-full py-3.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-blue-200 shadow-lg mt-auto">
                    Get 2 More
                </button>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-all duration-300 h-full">
<div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
<span className="text-2xl font-semibold text-blue-500">+3</span>
</div>
<h3 className="text-lg font-medium text-slate-800 mb-2">3 Presentations</h3>
<div className="text-4xl font-semibold text-[#0f2942] tracking-tight mb-1">$199</div>
<div className="text-sm text-slate-400 mb-8 font-medium">$66.33 per presentation</div>
<button className="w-full py-3.5 rounded-full bg-[#f1f5f9] text-slate-700 font-medium hover:bg-slate-200 transition-colors mt-auto">
                    Get 3 More
                </button>
</div>
</div>

<div className="bg-white w-full rounded-2xl p-8 md:p-14 shadow-sm border border-slate-100">
<h3 className="text-center text-lg md:text-xl font-semibold text-[#0f2942] mb-10 tracking-tight">
                Each presentation includes:
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 max-w-4xl mx-auto">

<div className="flex flex-col gap-5">
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-orange-400 mt-1 shrink-0" data-lucide="check"></i>
<span className="text-lg text-slate-600 font-normal">Professional Offering Memorandum</span>
</div>
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-orange-400 mt-1 shrink-0" data-lucide="check"></i>
<span className="text-lg text-slate-600 font-normal">Borrower Profile Section</span>
</div>
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-orange-400 mt-1 shrink-0" data-lucide="check"></i>
<span className="text-lg text-slate-600 font-normal">Risk Mitigation Plan</span>
</div>
</div>

<div className="flex flex-col gap-5">
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-orange-400 mt-1 shrink-0" data-lucide="check"></i>
<span className="text-lg text-slate-600 font-normal">Deal Summary &amp; Financials</span>
</div>
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-orange-400 mt-1 shrink-0" data-lucide="check"></i>
<span className="text-lg text-slate-600 font-normal">Market Comps &amp; ARV Support</span>
</div>
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-orange-400 mt-1 shrink-0" data-lucide="check"></i>
<span className="text-lg text-slate-600 font-normal">Exit Strategy Overview</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
