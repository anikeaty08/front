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
      

<div className="flex flex-col xl:flex-row gap-6 md:gap-10 items-center justify-start xl:justify-center w-full max-w-[1200px] overflow-x-auto hide-scrollbar pb-8 xl:pb-0">

<div className="bg-white rounded-[2.5rem] w-[320px] h-[680px] shadow-sm relative overflow-hidden flex flex-col shrink-0">

<div className="absolute top-0 left-0 w-full h-[60%] bg-blue-50/60 blur-3xl rounded-b-full"></div>

<div className="px-6 pt-4 pb-2 flex justify-between items-center z-10 relative w-full">
<span className="text-xs font-semibold text-gray-900 tracking-tight">9:41</span>

<div className="w-[84px] h-[24px] bg-[#1a1a1a] rounded-full absolute left-1/2 -translate-x-1/2 top-3"></div>
<div className="flex gap-1.5 items-center">
<svg className="w-3.5 h-3.5 text-gray-900" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-4"></path></svg>
<i className="w-3.5 h-3.5 text-gray-900" data-lucide="wifi" strokeWidth="2.5"></i>

<div className="w-5 h-2.5 border-2 border-gray-900 rounded-[4px] p-[1px] relative flex items-center">
<div className="bg-gray-900 w-[70%] h-full rounded-[1px]"></div>
<div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1 bg-gray-900 rounded-r-sm"></div>
</div>
</div>
</div>

<div className="relative w-full h-[55%] flex items-center justify-center z-10 mt-4">

<div className="w-[220px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-4 -rotate-3 relative z-10">
<div className="flex items-start gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-orange-400" data-lucide="watch" strokeWidth="2"></i>
</div>
<div className="flex flex-col gap-1.5 mt-1 w-full">
<div className="h-2 w-12 bg-slate-800 rounded-full"></div>
<div className="h-1.5 w-8 bg-gray-200 rounded-full"></div>
</div>
</div>
<div className="w-full h-[1px] bg-gray-100 mb-3"></div>
<div className="flex justify-between items-center mb-2 px-1">
<span className="text-xs font-medium text-blue-600">Pay in 3</span>
<span className="text-xs font-semibold text-gray-800 tracking-tight">₹2,000/mo</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
</div>
</div>

<div className="absolute top-[20%] right-[10%] bg-white border border-gray-200 shadow-sm rounded-full px-3 py-1.5 z-20 rotate-6 flex items-center gap-1">
<span className="text-xs font-medium text-gray-800">% Interest</span>

<div className="absolute bottom-[-4px] right-4 w-2 h-2 bg-white border-b border-r border-gray-200 rotate-45"></div>
</div>
<div className="absolute bottom-[35%] right-[8%] w-9 h-9 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center z-20">
<i className="w-4 h-4 text-pink-400" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-[15%] left-[12%] w-9 h-9 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center z-20">
<i className="w-4 h-4 text-purple-400" data-lucide="shirt" strokeWidth="1.5"></i>
</div>
</div>

<div className="px-6 flex flex-col z-10">
<h2 className="text-[22px] leading-[1.2] font-semibold text-gray-900 tracking-tight mb-3">Shop your favourite<br/>brands on EMI</h2>
<p className="text-base text-gray-500 leading-relaxed">Buy products from GoKwik partner brands and convert every purchase into 0% interest EMI for up to 3 months.</p>
</div>

<div className="mt-auto px-6 pb-10 flex flex-col items-center w-full z-10">
<div className="flex gap-1.5 mb-6 items-center">
<div className="w-4 h-1.5 bg-gray-800 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
</div>
<button className="w-12 h-12 bg-[#0B3A70] hover:bg-[#092e59] transition-colors rounded-xl flex items-center justify-center text-white shadow-md">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="2"></i>
</button>
</div>
</div>

<div className="bg-white rounded-[2.5rem] w-[320px] h-[680px] shadow-sm relative overflow-hidden flex flex-col shrink-0">

<div className="absolute top-0 left-0 w-full h-[60%] bg-green-50/50 blur-3xl rounded-b-full"></div>

<div className="px-6 pt-4 pb-2 flex justify-between items-center z-10 relative w-full">
<span className="text-xs font-semibold text-gray-900 tracking-tight">9:41</span>

<div className="w-[84px] h-[24px] bg-[#1a1a1a] rounded-full absolute left-1/2 -translate-x-1/2 top-3"></div>
<div className="flex gap-1.5 items-center">
<svg className="w-3.5 h-3.5 text-gray-900" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-4"></path></svg>
<i className="w-3.5 h-3.5 text-gray-900" data-lucide="wifi" strokeWidth="2.5"></i>

<div className="w-5 h-2.5 border-2 border-gray-900 rounded-[4px] p-[1px] relative flex items-center">
<div className="bg-gray-900 w-[70%] h-full rounded-[1px]"></div>
<div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1 bg-gray-900 rounded-r-sm"></div>
</div>
</div>
</div>

<div className="relative w-full h-[55%] flex items-center justify-center z-10 mt-4">

<div className="w-[230px] bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-5 relative z-10">

<div className="absolute top-4 right-4 w-1.5 h-1.5 bg-red-400 rounded-full"></div>

<div className="relative flex flex-col gap-6 pl-2 py-2">

<div className="absolute left-[17px] top-6 bottom-6 w-[2px] bg-gray-100 z-0"></div>

<div className="flex items-center gap-4 relative z-10">
<div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-gray-300" data-lucide="package" strokeWidth="1.5"></i>
</div>
<div className="h-1.5 w-10 bg-gray-100 rounded-full"></div>
</div>

<div className="flex items-center gap-4 relative z-10">
<div className="w-7 h-7 rounded-full bg-white border border-green-400 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-green-500" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<div className="flex items-center gap-2">
<div className="h-2.5 w-16 bg-slate-800 rounded-full"></div>
<span className="text-[10px] font-medium text-green-500">In Transit</span>
</div>
</div>

<div className="flex items-center gap-4 relative z-10">
<div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-gray-300" data-lucide="home" strokeWidth="1.5"></i>
</div>
<div className="h-1.5 w-12 bg-gray-100 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="px-6 flex flex-col z-10">
<h2 className="text-[22px] leading-[1.2] font-semibold text-gray-900 tracking-tight mb-3">Track all your orders<br/>in one place</h2>
<p className="text-base text-gray-500 leading-relaxed">Easily track every order placed using the GoKwik platform with real-time updates.</p>
</div>

<div className="mt-auto px-6 pb-10 flex flex-col items-center w-full z-10">
<div className="flex gap-1.5 mb-6 items-center">
<div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
<div className="w-4 h-1.5 bg-gray-800 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
</div>
<button className="w-12 h-12 bg-[#0B3A70] hover:bg-[#092e59] transition-colors rounded-xl flex items-center justify-center text-white shadow-md">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="2"></i>
</button>
</div>
</div>

<div className="bg-white rounded-[2.5rem] w-[320px] h-[680px] shadow-sm relative overflow-hidden flex flex-col shrink-0">

<div className="absolute top-0 left-0 w-full h-[60%] bg-yellow-50/60 blur-3xl rounded-b-full"></div>

<div className="px-6 pt-4 pb-2 flex justify-between items-center z-10 relative w-full">
<span className="text-xs font-semibold text-gray-900 tracking-tight">9:41</span>

<div className="w-[84px] h-[24px] bg-[#1a1a1a] rounded-full absolute left-1/2 -translate-x-1/2 top-3"></div>
<div className="flex gap-1.5 items-center">
<svg className="w-3.5 h-3.5 text-gray-900" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-4"></path></svg>
<i className="w-3.5 h-3.5 text-gray-900" data-lucide="wifi" strokeWidth="2.5"></i>

<div className="w-5 h-2.5 border-2 border-gray-900 rounded-[4px] p-[1px] relative flex items-center">
<div className="bg-gray-900 w-[70%] h-full rounded-[1px]"></div>
<div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1 bg-gray-900 rounded-r-sm"></div>
</div>
</div>
</div>

<div className="relative w-full h-[55%] flex items-center justify-center z-10 mt-4 flex-col">
<div className="relative w-[240px] h-[150px]">

<div className="w-full h-full bg-gradient-to-br from-[#fef5db] via-[#fdf1cb] to-[#efdfa3] rounded-[18px] shadow-lg border border-yellow-100/50 p-5 -rotate-3 relative overflow-hidden z-10 flex flex-col justify-between">

<div className="flex justify-between items-start">
<div className="w-8 h-6 bg-gray-200/60 rounded-md backdrop-blur-sm"></div>
<i className="w-5 h-5 text-gray-400" data-lucide="landmark" strokeWidth="1.5"></i>
</div>

<div className="flex items-center gap-2">
<div className="flex gap-1">
<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
</div>
<span className="text-sm font-medium text-gray-500 tracking-widest ml-1">4242</span>
</div>

<div className="absolute -right-2 top-8 w-20 h-20 z-20">

<div className="absolute right-6 bottom-4 w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-300 shadow-md border border-yellow-400 -rotate-12"></div>

<div className="absolute right-2 bottom-1 w-[52px] h-[52px] rounded-full bg-gradient-to-tr from-[#dca51a] via-[#fbd54e] to-[#fff2a9] shadow-lg border border-[#fbd54e] -rotate-[15deg] flex items-center justify-center overflow-hidden">

<div className="w-[40px] h-[40px] rounded-full border border-yellow-500/30 flex items-center justify-center">
<i className="w-4 h-4 text-yellow-700/80" data-lucide="indian-rupee" strokeWidth="1.5"></i>
</div>
</div>
<i className="absolute right-0 -top-2 w-4 h-4 text-yellow-500 z-30 fill-yellow-400" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="w-[240px] flex justify-between items-start mt-6 z-20">
<div className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
<span className="text-[10px] font-medium text-gray-600">Rewards credited instantly</span>
</div>
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-green-500" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="px-6 flex flex-col z-10">
<h2 className="text-[22px] leading-[1.2] font-semibold text-gray-900 tracking-tight mb-3">Earn gold on every<br/>EMI payment</h2>
<p className="text-base text-gray-500 leading-relaxed">Receive assured gold rewards on every EMI payment and transfer them directly to your bank account.</p>
</div>

<div className="mt-auto px-6 pb-10 flex flex-col items-center w-full z-10">
<div className="flex gap-1.5 mb-6 items-center">
<div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
<div className="w-4 h-1.5 bg-gray-800 rounded-full"></div>
</div>
<button className="w-full h-12 bg-[#0B3A70] hover:bg-[#092e59] transition-colors rounded-xl flex items-center justify-center text-white text-sm font-medium shadow-md">
                    Get Started
                </button>
</div>
</div>
</div>


    </>
  );
}
