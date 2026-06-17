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



        function closeCard() {
            document.getElementById('card').classList.add('hidden');
        }
        // Dismiss on Escape key
        window.addEventListener('keydown', function(e) {
            if(e.key === 'Escape') closeCard();
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
      
<div className="fade-in bg-[#181C23] border border-[#2D2F36] max-w-sm w-full rounded-xl shadow-2xl overflow-hidden" id="card">
<div className="p-6 flex flex-col items-center">
<div className="w-14 h-14 flex items-center justify-center bg-green-500/10 rounded-full mb-4 shadow-md">
<svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" strokeWidth="2"></circle>
<path d="M8 12.5l3 3.5 5-6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<h2 className="text-gray-100 text-xl font-bold mb-1 text-center">Bill Payment Successful</h2>
<p className="text-gray-400 text-sm text-center mb-5">Your payment has been processed securely. Thank you!</p>
<div className="bg-[#23262E] rounded-lg w-full px-4 py-3 mb-4">
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-gray-400">Amount</span>
<span className="text-gray-100 font-semibold">$120.50</span>
</div>
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-gray-400">To</span>
<span className="text-gray-100">Acme Utilities</span>
</div>
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-gray-400">Payment Date</span>
<span className="text-gray-100">Jun 11, 2024</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-400">Transaction ID</span>
<span className="text-gray-100">#9823451</span>
</div>
</div>
<button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors mb-2">Download Receipt</button>
<button className="w-full py-2 bg-[#23262E] hover:bg-[#2d313b] text-gray-200 font-medium rounded-md transition-colors" onclick="closeCard()">Dismiss</button>
</div>
<button aria-label="Close" className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 p-1 rounded transition-colors" onclick="closeCard()">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6l8 8M6 14L14 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>


    </>
  );
}
