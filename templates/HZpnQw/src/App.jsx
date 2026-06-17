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
      
<div className="max-w-4xl mx-auto">
<h1 className="text-2xl md:text-3xl font-bold text-gray-100 mb-8 text-center">Complete Your Payment</h1>
<div className="bg-zinc-900 rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-zinc-800">
<div className="flex flex-col md:flex-row gap-8">

<div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
<div className="relative w-[320px] h-[200px] md:w-[380px] md:h-[240px] bg-[#191f2e]/[.98] rounded-2xl overflow-hidden flex items-center" style={{boxShadow: '0 8px 40px 0 rgba(15, 23, 42, 0.3), 0 1.5px 10px 0 rgba(15,23,42,0.25)'}}>

<div className="absolute top-1/2 left-1/2 w-[200px] h-[160px] rounded-full mesh1 pointer-events-none" style={{background: 'linear-gradient(120deg, #6366f1 92%, transparent 100%)', filter: 'blur(24px)'}}></div>
<div className="absolute top-1/2 left-1/2 w-[180px] h-[150px] rounded-full mesh2 pointer-events-none" style={{background: 'linear-gradient(80deg, #2563eb 85%, transparent 100%)', filter: 'blur(18px)'}}></div>
<div className="absolute top-1/2 left-1/2 w-[160px] h-[120px] rounded-full mesh3 pointer-events-none" style={{background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.25) 80%, transparent 100%)', filter: 'blur(12px)'}}></div>
<div className="absolute top-1/2 left-1/2 w-[90px] h-[100px] rounded-full mesh4 pointer-events-none" style={{background: 'linear-gradient(95deg, #fb923c 80%, transparent 100%)', filter: 'blur(14px)'}}></div>

<div className="absolute top-6 left-6 flex flex-col items-center z-10">
<svg className="w-12 h-8" fill="none" height="32" viewbox="0 0 46 32" width="46" xmlns="http://www.w3.org/2000/svg">
<rect fill="#475569" height="30" rx="6" stroke="#cbd5e1" strokeWidth="2" width="44" x="1" y="1"></rect>
<rect fill="#cbd5e1" height="18" rx="3" width="32" x="7" y="7"></rect>
<path d="M10.5,15 h25" stroke="#64748b" strokeWidth="1.1"></path>
<path d="M10.5,21 h25" stroke="#64748b" strokeWidth="1.1"></path>
<path d="M15,10 v12" stroke="#64748b" strokeWidth="1.1"></path>
<path d="M31,10 v12" stroke="#64748b" strokeWidth="1.1"></path>
</svg>
</div>

<div className="absolute top-6 right-6 flex items-center z-10">
<svg className="w-10 h-7" fill="none" height="28" viewbox="0 0 42 28" width="42" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logoGradient" x1="0" x2="42" y1="0" y2="28">
<stop stop-color="#2563eb"></stop>
<stop offset="0.65" stop-color="#6366f1"></stop>
<stop offset="1" stop-color="#fb923c"></stop>
</lineargradient>
</defs>
<path d="M6 22 Q21 2 36 22" fill="none" stroke="url(#logoGradient)" strokeLinecap="round" strokeWidth="5"></path>
</svg>
</div>

<div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full z-10">
<span className="font-mono text-lg md:text-xl tracking-widest text-white/90 drop-shadow font-semibold select-none">
                4628  9301  2457  1098
              </span>
</div>

<div className="absolute w-full left-0 flex justify-between items-end px-6 bottom-5 z-10">
<div>
<span className="block uppercase text-[10px] tracking-widest font-bold text-white/55 select-none">cardholder</span>
<span className="block text-white/90 text-sm tracking-wide font-medium select-none">YOUR NAME</span>
</div>
<div className="flex flex-col items-end">
<span className="uppercase text-[10px] tracking-widest font-bold text-white/55 select-none">expires</span>
<span className="text-white/90 text-sm font-semibold select-none">08/27</span>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2">
<h2 className="text-xl font-semibold text-gray-100 mb-6">Card Details</h2>
<form>
<div className="mb-4">
<label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="cardName">Cardholder Name</label>
<input className="w-full px-4 py-3 rounded-lg input-field text-white focus:outline-none transition-all" id="cardName" placeholder="As shown on card" type="text"/>
</div>
<div className="mb-4">
<label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="cardNumber">Card Number</label>
<input className="w-full px-4 py-3 rounded-lg input-field text-white focus:outline-none transition-all" id="cardNumber" placeholder="1234 5678 9012 3456" type="text"/>
</div>
<div className="flex gap-4 mb-6">
<div className="w-1/2">
<label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="expiry">Expiry Date</label>
<input className="w-full px-4 py-3 rounded-lg input-field text-white focus:outline-none transition-all" id="expiry" placeholder="MM/YY" type="text"/>
</div>
<div className="w-1/2">
<label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="cvc">CVC</label>
<input className="w-full px-4 py-3 rounded-lg input-field text-white focus:outline-none transition-all" id="cvc" placeholder="123" type="text"/>
</div>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="country">Country</label>
<select className="w-full px-4 py-3 rounded-lg input-field text-white focus:outline-none transition-all" id="country">
<option value="">Select your country</option>
<option value="US">United States</option>
<option value="CA">Canada</option>
<option value="UK">United Kingdom</option>
<option value="AU">Australia</option>
</select>
</div>
<button className="w-full gradient-btn text-white font-medium py-3 px-4 rounded-lg shadow-lg" type="submit">
              Pay $149.99
            </button>
</form>
</div>
</div>
</div>
<div className="text-center text-gray-400 text-sm">
<p>Your payment is secured with industry-standard encryption.</p>
</div>
</div>

    </>
  );
}
