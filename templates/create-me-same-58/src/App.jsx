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
      

<header className="bg-[#0F172A] text-white w-full">
<div className="w-full px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-6">
<button className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<div className="flex items-center gap-4 text-sm font-medium">
<a className="text-slate-300 hover:text-white transition-colors" href="#">Back to Dashboard</a>
<div className="h-4 w-px bg-slate-700"></div>
<span className="text-white font-semibold">Create Your Presentation</span>
</div>
</div>

<div>
<span className="bg-[#1E293B] border border-slate-700/50 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-md">
                    Presentations Remaining: 3 of 3
                </span>
</div>
</div>
</header>

<main className="flex-grow w-full max-w-[1600px] mx-auto p-6 lg:p-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">

<div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden h-fit">

<div className="bg-[#1E293B] px-5 py-4 flex items-center justify-between text-white">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-300" data-lucide="file-text" strokeWidth="1.5"></i>
<h2 className="font-semibold text-base tracking-tight">Wizard Reference Guide</h2>
</div>
<a className="text-sky-400 hover:text-sky-300 text-sm flex items-center gap-1.5 transition-colors" href="#">
                        Open in new tab
                        <i className="w-3.5 h-3.5" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>

<div className="p-6 space-y-4">

<div className="bg-sky-50/50 rounded-md p-5 border border-sky-100/50">
<h3 className="text-slate-800 font-semibold text-base mb-2 tracking-tight">Before You Begin</h3>
<p className="text-slate-600 text-sm mb-3">Make sure you have the following documents ready before starting the wizard:</p>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-sm text-slate-600">
<span className="text-sky-500 mt-1.5 text-[6px]">•</span> Property address and purchase details
                            </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<span className="text-sky-500 mt-1.5 text-[6px]">•</span> Renovation budget and scope of work
                            </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<span className="text-sky-500 mt-1.5 text-[6px]">•</span> Comparable sales (ARV support)
                            </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<span className="text-sky-500 mt-1.5 text-[6px]">•</span> Your financial information
                            </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<span className="text-sky-500 mt-1.5 text-[6px]">•</span> Entity/LLC details (if applicable)
                            </li>
</ul>
</div>

<div className="bg-sky-50/50 rounded-md p-5 border border-sky-100/50">
<h3 className="text-slate-800 font-semibold text-base mb-2 tracking-tight">Section 1: Deal Summary</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                            This section captures the basic details of your investment opportunity. Be specific and accurate - lenders use this information to quickly assess if the deal fits their criteria.
                        </p>
</div>

<div className="bg-sky-50/50 rounded-md p-5 border border-sky-100/50">
<h3 className="text-slate-800 font-semibold text-base mb-2 tracking-tight">Section 2: Investment Rationale</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                            Explain why this is a good investment. Include your analysis of the property's potential and why you believe the numbers work.
                        </p>
</div>

<div className="bg-sky-50/50 rounded-md p-5 border border-sky-100/50">
<h3 className="text-slate-800 font-semibold text-base mb-2 tracking-tight">Section 3: Borrower Profile</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                            Present yourself professionally. Include your experience, financial strength, and why you're a reliable borrower.
                        </p>
</div>

<div className="bg-[#FFFCF5] rounded-md p-5 border border-amber-100">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-amber-500 fill-amber-500/20" data-lucide="lightbulb" strokeWidth="1.5"></i>
<h3 className="text-slate-900 font-semibold text-base tracking-tight">Pro Tip</h3>
</div>
<p className="text-slate-600 text-sm leading-relaxed">
                            Take your time with each section. The quality of information you provide directly impacts how lenders perceive you. It's better to be thorough than to rush through.
                        </p>
</div>
</div>
</div>

<div className="flex flex-col rounded-lg overflow-hidden shadow-sm h-full min-h-[600px]">

<div className="bg-[#F97316] px-5 py-4 flex items-center gap-3 text-white">
<div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center font-bold text-sm">
                        W
                    </div>
<h2 className="font-semibold text-base tracking-tight">Borrower Packet Wizard</h2>
</div>

<div className="flex-grow bg-[#E2E2E2] flex items-center justify-center border-x border-b border-slate-200">
<div className="text-slate-500">
<i className="w-12 h-12 opacity-60" data-lucide="file-warning" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
