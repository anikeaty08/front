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
      

<div className="w-full max-w-3xl mb-10 flex flex-col items-center text-center">
<h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#003366] font-medium tracking-tight">
            Driving value across the investment life cycle
        </h1>
</div>

<div className="w-full max-w-3xl flex flex-col gap-4">

<div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-slate-300 transition-colors">
<input checked="" className="peer hidden" id="item1" name="lifecycle_accordion" type="radio"/>

<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff4500] scale-y-0 peer-checked:scale-y-100 transition-transform duration-300 origin-top z-20"></div>
<label className="flex items-center justify-between p-5 sm:p-6 cursor-pointer bg-white relative z-10 select-none peer-checked:[&amp;_.arrow-box]:bg-[#003366] peer-checked:[&amp;_.arrow-box]:border-[#003366] peer-checked:[&amp;_.arrow-box_iconify-icon]:rotate-180 peer-checked:[&amp;_.arrow-box_iconify-icon]:text-white" htmlFor="item1">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#003366] group-hover:bg-[#003366]/5 transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h2 className="text-lg sm:text-xl text-slate-800 font-medium tracking-tight group-hover:text-[#003366] transition-colors">Pre-Deal</h2>
</div>
<div className="arrow-box w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 transition-all duration-300">
<iconify-icon className="text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</label>
<div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out relative z-0">
<div className="overflow-hidden">
<div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-slate-100 mt-2 pt-6">

<div className="flex-1 flex flex-col justify-center gap-4">
<h3 className="text-base font-medium text-[#003366]">Assessment &amp; Validation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Identify key value drivers, assess targets, validate investment theses and expose hidden value destroyers for funds, lenders and counsel before capital is deployed.
                            </p>
</div>

<div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-6 flex items-end justify-center min-h-[160px] relative overflow-hidden">
<div className="flex items-end gap-2.5 w-full max-w-[80%] h-full">
<div className="w-full bg-[#003366]/10 rounded-t-sm h-[40%] transition-all duration-500"></div>
<div className="w-full bg-[#003366]/20 rounded-t-sm h-[60%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-[#003366]/30 rounded-t-sm h-[45%] transition-all duration-500 delay-150"></div>
<div className="w-full bg-[#ff4500] rounded-t-sm h-[80%] relative shadow-[0_0_15px_rgba(255,69,0,0.2)] transition-all duration-500 delay-200">
<div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white rounded-full p-1.5 shadow-sm border border-slate-100 flex items-center justify-center">
<iconify-icon className="text-base text-[#ff4500]" icon="solar:target-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-slate-300 transition-colors">
<input className="peer hidden" id="item2" name="lifecycle_accordion" type="radio"/>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff4500] scale-y-0 peer-checked:scale-y-100 transition-transform duration-300 origin-top z-20"></div>
<label className="flex items-center justify-between p-5 sm:p-6 cursor-pointer bg-white relative z-10 select-none peer-checked:[&amp;_.arrow-box]:bg-[#003366] peer-checked:[&amp;_.arrow-box]:border-[#003366] peer-checked:[&amp;_.arrow-box_iconify-icon]:rotate-180 peer-checked:[&amp;_.arrow-box_iconify-icon]:text-white" htmlFor="item2">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#003366] group-hover:bg-[#003366]/5 transition-colors">
<iconify-icon className="text-xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h2 className="text-lg sm:text-xl text-slate-800 font-medium tracking-tight group-hover:text-[#003366] transition-colors">Value Creation &amp; Protection</h2>
</div>
<div className="arrow-box w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 transition-all duration-300">
<iconify-icon className="text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</label>
<div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out relative z-0">
<div className="overflow-hidden">
<div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-slate-100 mt-2 pt-6">

<div className="flex-1 flex flex-col justify-center gap-4">
<h3 className="text-base font-medium text-[#003366]">Growth &amp; Optimization</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Improve operations, optimize costs, expand margins and embed digital, AI and other next-wave value levers to accelerate growth and differentiation.
                            </p>
</div>

<div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-6 flex items-center justify-center min-h-[160px] relative overflow-hidden">
<div className="w-full max-w-[85%] relative flex items-center h-full">
<svg className="w-full h-[60px] overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0,45 L100,45" fill="none" stroke="#e2e8f0" strokeWidth="1"></path>
<path className="opacity-30" d="M0,40 Q25,40 50,25 T100,10" fill="none" stroke="#003366" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M0,40 Q30,35 50,15 T100,-15" fill="none" stroke="#ff4500" strokeWidth="2.5"></path>
</svg>
<div className="absolute top-[5px] right-0 w-3 h-3 rounded-full bg-white border-2 border-[#ff4500] shadow-[0_0_10px_rgba(255,69,0,0.3)]"></div>
<div className="absolute bottom-[28px] left-0 w-2.5 h-2.5 rounded-full bg-[#003366]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-slate-300 transition-colors">
<input className="peer hidden" id="item3" name="lifecycle_accordion" type="radio"/>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff4500] scale-y-0 peer-checked:scale-y-100 transition-transform duration-300 origin-top z-20"></div>
<label className="flex items-center justify-between p-5 sm:p-6 cursor-pointer bg-white relative z-10 select-none peer-checked:[&amp;_.arrow-box]:bg-[#003366] peer-checked:[&amp;_.arrow-box]:border-[#003366] peer-checked:[&amp;_.arrow-box_iconify-icon]:rotate-180 peer-checked:[&amp;_.arrow-box_iconify-icon]:text-white" htmlFor="item3">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#003366] group-hover:bg-[#003366]/5 transition-colors">
<iconify-icon className="text-xl" icon="solar:flag-linear"></iconify-icon>
</div>
<h2 className="text-lg sm:text-xl text-slate-800 font-medium tracking-tight group-hover:text-[#003366] transition-colors">Exit Readiness</h2>
</div>
<div className="arrow-box w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 transition-all duration-300">
<iconify-icon className="text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</label>
<div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out relative z-0">
<div className="overflow-hidden">
<div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-slate-100 mt-2 pt-6">

<div className="flex-1 flex flex-col justify-center gap-4">
<h3 className="text-base font-medium text-[#003366]">Successful Exit</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Build a credible buyer story and ensure operational, financial and reputational strength for a successful exit.
                            </p>
</div>

<div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-6 flex items-center justify-center min-h-[160px] relative overflow-hidden">
<div className="flex flex-col gap-3 w-full max-w-[85%]">
<div className="h-10 w-full bg-white border border-slate-200 rounded-lg flex items-center px-3 gap-3 shadow-sm">
<div className="w-5 h-5 rounded-full bg-[#003366]/10 flex items-center justify-center">
<iconify-icon className="text-xs text-[#003366]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="h-1.5 w-1/2 bg-slate-200 rounded-full"></div>
</div>
<div className="h-10 w-full bg-white border border-slate-200 rounded-lg flex items-center px-3 gap-3 shadow-sm">
<div className="w-5 h-5 rounded-full bg-[#003366]/10 flex items-center justify-center">
<iconify-icon className="text-xs text-[#003366]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="h-1.5 w-[60%] bg-slate-200 rounded-full"></div>
</div>
<div className="h-10 w-full bg-white border border-[#ff4500]/30 rounded-lg flex items-center px-3 gap-3 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 bg-[#ff4500]/5"></div>
<div className="w-5 h-5 rounded-full bg-[#ff4500]/20 flex items-center justify-center relative z-10">
<iconify-icon className="text-xs text-[#ff4500]" icon="solar:star-linear"></iconify-icon>
</div>
<div className="h-1.5 w-[40%] bg-[#ff4500]/40 rounded-full relative z-10"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
