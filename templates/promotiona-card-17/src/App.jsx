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
      
<div className="max-w-5xl w-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row">

<div className="md:w-5/12 p-8 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-between">
<div>

<div className="flex items-center gap-2 mb-10">
<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-sm">
<i className="text-white w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900 italic">THUNDERPICK</span>
</div>

<div>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                        Exclusive Offer
                    </span>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-3 leading-tight">
                        100%
                    </h2>
<p className="text-xl font-medium tracking-tight text-gray-800 mb-2">
                        Welcome Deposit Bonus
                    </p>
<p className="text-base text-gray-500 mb-8">
                        Double your initial deposit and maximize your betting potential from day one.
                    </p>
</div>

<div className="group relative flex items-center justify-between p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-gray-300 hover:shadow transition-all mb-8">
<div className="flex flex-col ml-1">
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Promo Code</span>
<span className="text-base font-medium text-gray-900">Welcome Gift</span>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
<i className="w-4 h-4 text-gray-500" data-lucide="copy" strokeWidth="1.5"></i>
                        Copy
                    </button>
</div>
</div>

<div className="pt-6 border-t border-gray-200">
<span className="block text-sm font-medium text-gray-500 mb-3">Accepted Payments</span>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
<i className="w-5 h-5 text-amber-500" data-lucide="bitcoin" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-gray-700">Bitcoin</span>
</div>
<div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
<i className="w-4 h-4 text-gray-400" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-gray-600">Crypto</span>
</div>
</div>
</div>
</div>

<div className="md:w-7/12 p-8 sm:p-10 flex flex-col bg-white">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">
                Why we recommend it
            </h3>

<ul className="space-y-5 flex-grow mb-10">
<li className="flex items-start gap-4">
<div className="mt-0.5 bg-emerald-50 rounded-full p-1.5 shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-gray-700">Crypto-first &amp; multi-currency support</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 bg-emerald-50 rounded-full p-1.5 shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-gray-700">Strong focus on Esports &amp; betting</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 bg-emerald-50 rounded-full p-1.5 shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-gray-700">Clean, intuitive user-friendly interface</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 bg-emerald-50 rounded-full p-1.5 shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-gray-700">Excellent mobile support</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 bg-emerald-50 rounded-full p-1.5 shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-gray-700">Engaging and interesting leveling system</span>
</li>
</ul>

<div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100 mt-auto">
<a className="inline-flex items-center gap-2 text-base font-medium text-gray-500 hover:text-gray-900 transition-colors group" href="#">
                    Read full review
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-base font-medium shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                    Bet Now
                </button>
</div>
</div>
</div>


    </>
  );
}
