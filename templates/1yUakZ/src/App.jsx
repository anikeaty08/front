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
      
<div className="relative w-full max-w-sm p-8 rounded-2xl overflow-hidden flex flex-col gap-8 border border-[#23253f] shadow-xl">
<div className="absolute inset-0 pointer-events-none -z-10 rounded-2xl bg-gradient-to-b from-[#202644] via-[#181c2c] to-transparent"></div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#4662f6] to-[#4fd4fa] shadow">
<svg fill="none" height="28" viewbox="0 0 28 28" width="28">
<circle cx="14" cy="14" fill="#fff" fillOpacity=".08" r="14"></circle>
<path d="M19 12.5V10c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h3.5" stroke="#4fd4fa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M21.2 16.8l-1.9 1.9-1.9-1.9M19.3 12.5V18.7" stroke="#4fd4fa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<div className="text-lg font-semibold text-white">E-Transfer Received</div>
<div className="text-xs text-[#bee2fa] mt-0.5">Deposit money sent to you</div>
</div>
</div>
<form className="flex flex-col gap-5">
<div className="flex flex-col gap-1">
<label className="text-xs font-medium text-[#52cdf4]" htmlFor="from">Sender Email</label>
<input className="px-3 py-2 rounded-md bg-[#181c2c] border border-[#273050] focus:border-[#4fd4fa] text-base text-white placeholder:text-[#8fa5cf] outline-none transition" id="from" placeholder="john.smith@email.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs font-medium text-[#52cdf4]" htmlFor="amount">Amount</label>
<input className="px-3 py-2 rounded-md bg-[#181c2c] border border-[#273050] focus:border-[#4fd4fa] text-base text-white placeholder:text-[#8fa5cf] outline-none transition" id="amount" min="0" placeholder="0.00" required="" type="number"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs font-medium text-[#52cdf4]" htmlFor="note">Message <span className="text-[#6fa4c9] font-normal">(optional)</span></label>
<input className="px-3 py-2 rounded-md bg-[#181c2c] border border-[#273050] focus:border-[#4fd4fa] text-base text-white placeholder:text-[#8fa5cf] outline-none transition" id="note" placeholder="eg. Thanks for your help!" type="text"/>
</div>
<button className="mt-2 bg-gradient-to-r from-[#4662f6] to-[#4fd4fa] hover:from-[#3651d7] hover:to-[#35c4f0] rounded-xl py-3.5 text-white text-base font-semibold shadow-md shadow-[#273766]/30 transition" type="submit">
        Deposit Funds
      </button>
</form>
</div>

    </>
  );
}
