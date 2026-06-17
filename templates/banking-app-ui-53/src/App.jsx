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
      

<div className="w-full max-w-[430px] min-h-screen bg-[#F7F7F8] relative overflow-hidden flex flex-col">

<div className="flex justify-between items-center px-6 pt-3.5 pb-2.5 bg-white z-10">
<div className="text-sm font-medium tracking-tight">9:41</div>
<div className="flex items-center gap-1.5 text-base">
<iconify-icon icon="solar:chart-vertical-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="solar:battery-full-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="bg-[#D31245] text-white px-6 py-3.5 flex justify-between items-center z-10">
<div className="text-xl font-semibold tracking-tighter">CIBC</div>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto pb-10">

<div className="px-6 pt-7 pb-6">
<div className="text-sm text-gray-500 font-medium mb-1">Welcome back,</div>
<div className="text-[22px] font-semibold tracking-tight text-black">Dawson Pastion</div>
</div>

<div className="mx-6 bg-white rounded-[20px] p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50">
<div className="text-base font-medium text-gray-900 tracking-tight">Everyday Chequing</div>
<div className="text-xs text-gray-500 font-medium mt-3.5">Available Balance</div>
<div className="text-[40px] leading-none font-semibold tracking-tighter text-black mt-1.5 mb-2">$53.00</div>
<div className="text-xs text-gray-400 font-medium">Account ending in •••• 4832</div>

<div className="flex gap-2.5 mt-7">
<button className="flex-1 bg-[#D31245] text-white text-sm font-medium py-2.5 rounded-xl transition-colors hover:bg-[#b00f39]">
                        Transfer
                    </button>
<button className="flex-1 bg-white border border-[#D31245] text-[#D31245] text-sm font-medium py-2.5 rounded-xl transition-colors hover:bg-red-50">
                        Pay Bills
                    </button>
<button className="flex-1 bg-white border border-[#D31245] text-[#D31245] text-sm font-medium py-2.5 rounded-xl transition-colors hover:bg-red-50">
                        Add Funds
                    </button>
</div>
</div>

<div className="mt-9 px-6">
<h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-4">Recent Activity</h2>
<div className="bg-white rounded-[20px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-100/50 overflow-hidden">

<div className="flex justify-between items-center px-5 py-4 border-b border-gray-100/80">
<div>
<div className="text-sm font-medium text-gray-900 tracking-tight">Cash Deposit</div>
<div className="text-xs text-gray-500 mt-1">Today</div>
</div>
<div className="text-sm font-medium text-emerald-600 tracking-tight">+$50.00</div>
</div>

<div className="flex justify-between items-center px-5 py-4 border-b border-gray-100/80">
<div>
<div className="text-sm font-medium text-gray-900 tracking-tight">Coffee Shop</div>
<div className="text-xs text-gray-500 mt-1">Yesterday</div>
</div>
<div className="text-sm font-medium text-gray-900 tracking-tight">-$4.75</div>
</div>

<div className="flex justify-between items-center px-5 py-4 border-b border-gray-100/80">
<div>
<div className="text-sm font-medium text-gray-900 tracking-tight">Streaming Subscription</div>
<div className="text-xs text-gray-500 mt-1">Yesterday</div>
</div>
<div className="text-sm font-medium text-gray-900 tracking-tight">-$9.99</div>
</div>

<div className="flex justify-between items-center px-5 py-4 border-b border-gray-100/80">
<div>
<div className="text-sm font-medium text-gray-900 tracking-tight">Grocery Store</div>
<div className="text-xs text-gray-500 mt-1">2 days ago</div>
</div>
<div className="text-sm font-medium text-gray-900 tracking-tight">-$23.10</div>
</div>

<button className="w-full text-center text-sm text-[#0055A4] py-4 font-medium hover:bg-gray-50 transition-colors">
                        Tap to view all transactions
                    </button>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">

<div className="w-full max-w-[320px] bg-white rounded-[24px] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)] border border-gray-100 p-6 flex flex-col items-center text-center pointer-events-auto">
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-5">
<iconify-icon className="text-[#D31245] text-[26px]" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-[17px] font-semibold tracking-tight text-gray-900 mb-2">Unable to link Apple Wallet</h3>
<p className="text-sm text-gray-500 mb-7 leading-relaxed font-normal px-2">Your request could not be completed at this time. Please try again later.</p>
<div className="w-full flex flex-col gap-2.5">
<button className="w-full bg-[#D31245] text-white text-sm font-medium py-3 rounded-[14px] transition-colors hover:bg-[#b00f39]">
                        Try Again
                    </button>
<button className="w-full bg-white text-gray-600 text-sm font-medium py-3 rounded-[14px] transition-colors hover:bg-gray-50">
                        Cancel
                    </button>
</div>
</div>
</div>
</div>

    </>
  );
}
