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
      
<div className="w-[350px] max-w-full bg-white border border-[#e4e8ee] rounded-2xl shadow-sm px-8 py-7 flex flex-col gap-6 font-['Inter']">
<div>
<div className="text-2xl font-semibold text-[#212b40] mb-1">Send E-Transfer</div>
<div className="text-xs text-[#7a859c]">Request money instantly by e-transfer.</div>
</div>
<form autocomplete="off" className="flex flex-col gap-5">
<div className="flex flex-col gap-1">
<label className="text-xs text-[#4577E3] font-medium" htmlFor="recipient">Recipient Email</label>
<input className="bg-[#f7fafd] border border-[#eaeaef] focus:border-[#4577E3] px-3 py-2 rounded-md outline-none text-base transition" id="recipient" placeholder="jane.doe@email.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs text-[#4577E3] font-medium" htmlFor="amount">Amount</label>
<input className="bg-[#f7fafd] border border-[#eaeaef] focus:border-[#4577E3] px-3 py-2 rounded-md outline-none text-base transition font-medium" id="amount" min="0" placeholder="0.00" required="" step="any" type="number"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs text-[#4577E3] font-medium" htmlFor="note">Message <span className="text-gray-400 font-normal">(optional)</span></label>
<input className="bg-[#f7fafd] border border-[#eaeaef] focus:border-[#4577E3] px-3 py-2 rounded-md outline-none text-base transition" id="note" placeholder="eg. Invoice #123 or Thanks!" type="text"/>
</div>
<button className="w-full bg-[#4577E3] hover:bg-[#3863c6] text-white rounded-lg py-3 font-semibold mt-2 transition" type="submit">
        Send Request
      </button>
</form>
</div>

    </>
  );
}
