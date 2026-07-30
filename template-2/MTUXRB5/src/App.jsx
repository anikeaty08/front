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



    // Confetti
    document.getElementById('confettiButton').addEventListener('click', () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22C55E', '#4ADE80', '#BBF7D0', '#F1F5F9', '#10B981']
      });
    });
    
    // Auto launch confetti on page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#22C55E', '#4ADE80', '#BBF7D0', '#F1F5F9', '#10B981']
        });
      }, 600);
    });
    
    // Toggle receipt visibility
    const hideReceiptBtn = document.getElementById('hideReceiptBtn');
    const receiptSection = document.getElementById('receiptSection');
    
    hideReceiptBtn.addEventListener('click', () => {
      if (receiptSection.style.display === 'none') {
        receiptSection.style.display = 'block';
        hideReceiptBtn.textContent = 'Hide receipt';
      } else {
        receiptSection.style.display = 'none';
        hideReceiptBtn.textContent = 'Show receipt';
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
      

<div className="fixed inset-0 bg-black bg-opacity-5 backdrop z-10"></div>

<div className="w-full max-w-md bg-white rounded-md shadow-sm overflow-hidden relative z-20 modal-animation">

<div className="relative z-10 flex flex-col p-6">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center">
<div className="h-10 w-10 rounded-md bg-green-100 flex items-center justify-center mr-3">

<svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-gray-900 text-lg font-medium">Payment successful</h3>
</div>
<button aria-label="Close modal" className="text-gray-400 hover:text-gray-600 transition-colors">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>
<div className="py-2">
<p className="text-gray-600 text-sm">
          Your payment has been processed successfully.
          A receipt has been sent to your email.
        </p>

<div className="mt-4 bg-gray-50 rounded-md border border-gray-200" id="receiptSection">
<div className="p-4">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-gray-500">ORDER #23491</span>
<span className="text-xs font-medium text-gray-500">MAY 15, 2023</span>
</div>
<div className="border-b border-gray-200 pb-4 mb-4">
<h4 className="text-sm font-medium text-gray-900 mb-2">Premium Plan Subscription</h4>
<div className="flex justify-between text-sm mb-1">
<span className="text-gray-600">Monthly Plan</span>
<span className="text-gray-900">$29.99</span>
</div>
<div className="flex justify-between text-xs text-gray-500">
<span>Next billing date: June 15, 2023</span>
</div>
</div>
<div className="flex justify-between text-sm mb-1">
<span className="text-gray-600">Subtotal</span>
<span className="text-gray-900">$29.99</span>
</div>
<div className="flex justify-between text-sm mb-1">
<span className="text-gray-600">Tax</span>
<span className="text-gray-900">$2.40</span>
</div>
<div className="flex justify-between text-sm font-medium mt-3 pt-3 border-t border-gray-200">
<span className="text-gray-900">Total</span>
<span className="text-gray-900">$32.39</span>
</div>
<div className="mt-3 pt-3 border-t border-gray-200">
<div className="flex items-center">
<div className="bg-gray-100 rounded p-1 mr-2">
<svg className="h-4 w-4 text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
<path clip-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" fillRule="evenodd"></path>
</svg>
</div>
<span className="text-xs text-gray-600">Visa ending in 4242</span>
</div>
</div>
</div>
</div>
<div className="mt-6 flex flex-col space-y-2">
<button className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded transition-colors duration-150" id="confettiButton">
            Celebrate
          </button>
<button className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded transition-colors duration-150" id="hideReceiptBtn">
            Hide receipt
          </button>
</div>
<div className="mt-4 pt-4 border-t border-gray-200">
<div className="flex items-center justify-between">
<span className="text-gray-400 text-xs">Paid 10s ago</span>
<div className="flex items-center text-xs text-gray-400">
<span className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-animation"></span>
              Payment system
            </div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
