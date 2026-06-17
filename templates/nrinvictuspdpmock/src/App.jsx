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
      

<div className="w-full max-w-[480px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

<div className="flex justify-between items-start mb-2">
<h1 className="text-xl font-medium tracking-tight text-gray-900 leading-snug">
          Maura Sequin Mini Skirt
        </h1>
<button aria-label="Share" className="text-gray-400 hover:text-gray-900 transition-colors p-1">
<i className="w-4 h-4" data-lucide="share"></i>
</button>
</div>

<div className="flex items-center justify-between mb-5">
<div className="flex items-baseline gap-2">
<span className="text-lg font-medium text-gray-900">£44.00</span>
<span className="text-sm text-red-600 line-through decoration-red-600/40">£58.00</span>
</div>

<div className="flex items-center gap-1">
<div className="flex text-gray-900">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs text-gray-500 ml-1 underline decoration-gray-300 underline-offset-2">1 review</span>
</div>
</div>

<div className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 mb-6 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-gray-900" data-lucide="timer"></i>
<span className="text-xs font-medium text-gray-900">
          25% Off Black Friday Sale! <span className="text-gray-500 font-normal">Ends soon</span>
</span>
</div>

<div className="mb-6">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3 block">Colour: Black Floral</span>
<div className="flex gap-2">
<button aria-label="Black Floral" className="w-8 h-8 rounded-full border border-gray-300 bg-black relative focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all">
<span className="absolute inset-0 rounded-full border-2 border-white"></span>
</button>

<button aria-label="Beige" className="w-8 h-8 rounded-full border border-gray-200 bg-[#E6DEC7] relative hover:opacity-80 transition-all"></button>
</div>
</div>

<div className="mb-6">

<div className="flex justify-between items-end mb-3">

<div className="flex items-center gap-1 bg-gray-50 rounded-md p-0.5">
<button className="px-2 py-0.5 text-[10px] font-medium rounded-sm bg-white shadow-sm text-gray-900">UK</button>
<button className="px-2 py-0.5 text-[10px] font-medium rounded-sm text-gray-500 hover:text-gray-900 transition-colors">US</button>
<button className="px-2 py-0.5 text-[10px] font-medium rounded-sm text-gray-500 hover:text-gray-900 transition-colors">EU</button>
</div>

<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors group">
<i className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900" data-lucide="ruler"></i>
<span className="underline decoration-gray-200 underline-offset-4 decoration-1 group-hover:decoration-gray-400">Size Guide</span>
</button>
<span className="w-px h-3 bg-gray-200"></span>
<button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors group">
<i className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900" data-lucide="hanger"></i>
<span className="underline decoration-gray-200 underline-offset-4 decoration-1 group-hover:decoration-gray-400">What's my size?</span>
</button>
</div>
</div>

<div className="grid grid-cols-6 gap-2">

<button className="h-10 w-full flex items-center justify-center rounded-md border border-gray-900 bg-gray-900 text-white text-xs font-medium transition-all shadow-sm">
            6
          </button>

<button className="h-10 w-full flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-900 text-xs font-medium hover:border-gray-400 transition-all">8</button>
<button className="h-10 w-full flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-900 text-xs font-medium hover:border-gray-400 transition-all">10</button>
<button className="h-10 w-full flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-900 text-xs font-medium hover:border-gray-400 transition-all">12</button>
<button className="h-10 w-full flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-900 text-xs font-medium hover:border-gray-400 transition-all">14</button>
<button className="h-10 w-full flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-300 text-xs font-medium cursor-not-allowed opacity-50 relative overflow-hidden">
            16
            <span className="absolute inset-0 bg-white/50"></span>
<span className="absolute w-[1px] h-[150%] bg-gray-200 rotate-45"></span>
</button>
</div>

<div className="mt-2 text-[11px] text-red-600 flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
          Low stock in selected size
        </div>
</div>

<div className="flex flex-col gap-3 mb-8">
<button className="w-full bg-gray-900 hover:bg-black text-white h-12 rounded-lg font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2">
<span>Add to bag</span>
<span className="w-px h-3 bg-white/20 mx-1"></span>
<span>£44.00</span>
</button>

<div className="flex items-center justify-center gap-2 text-[10px] text-gray-400">
<span>Pay in 4 interest-free payments of £11.00.</span>
<span className="underline hover:text-gray-600 cursor-pointer">Learn more</span>
</div>
</div>

<div className="grid grid-cols-3 gap-4 border-y border-gray-100 py-4 mb-6">
<div className="flex flex-col items-center text-center gap-2">
<i className="w-4 h-4 text-gray-900" data-lucide="truck"></i>
<span className="text-[10px] text-gray-600 leading-tight">Same Day<br/>Dispatch</span>
</div>
<div className="flex flex-col items-center text-center gap-2 border-x border-gray-100">
<i className="w-4 h-4 text-gray-900" data-lucide="refresh-ccw"></i>
<span className="text-[10px] text-gray-600 leading-tight">Easy<br/>Returns</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<i className="w-4 h-4 text-gray-900" data-lucide="package-check"></i>
<span className="text-[10px] text-gray-600 leading-tight">Free UK Ship<br/>Over £150</span>
</div>
</div>

<div className="space-y-0">

<details className="group border-b border-gray-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 text-xs uppercase tracking-wide text-gray-900 hover:text-gray-600 transition-colors">
            Details &amp; Care
            <span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-xs text-gray-500 pb-4 leading-relaxed">
<p className="mb-2"><strong className="text-gray-900">Product Details</strong><br/>Mini length. Premium sequin with floral embroidery detailing.</p>
<p><strong className="text-gray-900">Composition</strong><br/>Main 95.3% Polyester 4.7% Elastane. Lining 100% Polyester.</p>
</div>
</details>

<details className="group border-b border-gray-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 text-xs uppercase tracking-wide text-gray-900 hover:text-gray-600 transition-colors">
            Size &amp; Fit
            <span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-xs text-gray-500 pb-4 leading-relaxed">
            Taina Is 5'8.5" &amp; Wears Size UK 6. Fits true to size.
          </div>
</details>

<details className="group border-b border-gray-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 text-xs uppercase tracking-wide text-gray-900 hover:text-gray-600 transition-colors">
            Shipping &amp; Returns
            <span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-xs text-gray-500 pb-4 leading-relaxed">
<p className="mb-2"><strong>UK:</strong> Royal Mail Standard Shipping: 2-5 working days (Free for orders over £150).</p>
<p><strong>Returns:</strong> 14 day returns policy. Extended Christmas returns until Jan 12th 2026.</p>
</div>
</details>
</div>
</div>


    </>
  );
}
