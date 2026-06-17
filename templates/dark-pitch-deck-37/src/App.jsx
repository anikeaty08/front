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



        // Initialize Lucide icons with custom stroke width globally
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<header className="w-full flex justify-between items-center p-6 absolute top-0 left-0 right-0 z-20">
<div className="flex items-center gap-2">
<div className="bg-[#00E599] text-[#0A0D12] p-1 rounded flex items-center justify-center">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<span className="font-semibold text-base tracking-tight">Spark Globally</span>
</div>
<div className="text-[#8B949E] text-sm font-medium">2 / 6</div>
</header>

<button className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#12161D] border border-[#232833] flex items-center justify-center text-[#8B949E] hover:text-white hover:bg-[#1C212B] transition-colors z-20 hidden md:flex">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>

<button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#12161D] border border-[#232833] flex items-center justify-center text-[#8B949E] hover:text-white hover:bg-[#1C212B] transition-colors z-20 hidden md:flex">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>

<main className="flex-1 flex flex-col items-center justify-center w-full px-6 py-24 relative z-10">
<div className="w-full max-w-[860px] flex flex-col items-start">

<div className="mb-10 w-full">
<h3 className="text-[#F5A623] text-sm font-semibold uppercase tracking-widest mb-2">Slide 1</h3>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-5">
<span className="text-white">The</span> <span className="text-[#F2524C]">Problem</span>
</h1>
<p className="text-lg text-[#8B949E]">Most businesses struggle with:</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10">

<div className="bg-[#11151C] border border-[#1E242F] rounded-xl p-5 flex items-center gap-4 hover:border-[#2D3545] transition-colors">
<div className="w-10 h-10 rounded-lg bg-[#F2524C]/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#F2524C]" data-lucide="trending-down"></i>
</div>
<span className="text-base font-medium text-[#E2E8F0]">Inconsistent lead flow</span>
</div>

<div className="bg-[#11151C] border border-[#1E242F] rounded-xl p-5 flex items-center gap-4 hover:border-[#2D3545] transition-colors">
<div className="w-10 h-10 rounded-lg bg-[#F2524C]/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#F2524C]" data-lucide="circle-alert"></i>
</div>
<span className="text-base font-medium text-[#E2E8F0]">Low response rates from cold outreach</span>
</div>

<div className="bg-[#11151C] border border-[#1E242F] rounded-xl p-5 flex items-center gap-4 hover:border-[#2D3545] transition-colors">
<div className="w-10 h-10 rounded-lg bg-[#F2524C]/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#F2524C]" data-lucide="puzzle"></i>
</div>
<span className="text-base font-medium text-[#E2E8F0]">Managing multiple freelancers/tools</span>
</div>

<div className="bg-[#11151C] border border-[#1E242F] rounded-xl p-5 flex items-center gap-4 hover:border-[#2D3545] transition-colors">
<div className="w-10 h-10 rounded-lg bg-[#F2524C]/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#F2524C]" data-lucide="clock"></i>
</div>
<span className="text-base font-medium text-[#E2E8F0]">No clear system to convert interest</span>
</div>
</div>

<div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#F2524C]/[0.08] border border-[#F2524C]/20">
<i className="w-4 h-4 text-[#F2524C]" data-lucide="circle-alert"></i>
<span className="text-base font-medium text-[#F2524C]">Result: Time waste + missed opportunities</span>
</div>
</div>
</main>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
<div className="w-1.5 h-1.5 rounded-full bg-[#2A313C]"></div>
<div className="w-6 h-1.5 rounded-full bg-[#00E599]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#2A313C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#2A313C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#2A313C]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#2A313C]"></div>
</div>

<div className="absolute bottom-8 right-6 text-xs text-[#525B6A] font-medium hidden md:block z-20 tracking-wide">
        Use ← → arrows to navigate
    </div>


    </>
  );
}
