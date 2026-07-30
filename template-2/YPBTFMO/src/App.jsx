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
      
<div className="w-full max-w-6xl grid gap-8 md:grid-cols-2">

<div className="rounded-2xl bg-white shadow-lg overflow-hidden">

<div className="relative">
<div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
<button className="p-1 rounded hover:bg-white/10"><svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
<h2 className="text-sm font-medium">Invoice Details</h2>
<button className="p-1 rounded hover:bg-white/10"><svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
</div>

<div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-indigo-300/40 blur-2xl"></div>
<div className="absolute -top-2 -right-2 w-20 h-20 rounded-full bg-blue-400/50 blur-xl"></div>
</div>

<div className="p-6 space-y-6">

<div className="flex items-start justify-between">
<div className="">
<p className="text-xs text-gray-500">Billed to</p>
<h3 className="font-semibold text-gray-900">Emma Rodriguez</h3>
</div>
<div className="text-right">
<p className="text-xs text-gray-500">Total Due</p>
<h3 className="font-semibold text-gray-900">$ 2,450.00</h3>
</div>
</div>

<div className="w-full h-40 flex bg-pink-100 bg-[url(https://images.unsplash.com/photo-1625277546131-df7a27a6a345?w=1080&q=80)] bg-cover rounded-xl items-center justify-center">
</div>

<div className="">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-file-text w-4 h-4 text-gray-500" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<h4 className="text-sm font-medium text-gray-900">Project Summary</h4>
</div>
<div className="space-y-4 text-sm">
<div className="flex justify-between">
<span className="text-gray-500">Client Email</span>
<span className="font-medium">emma.r@techflow.com</span>
</div>
<div className="flex justify-between">
<span className="text-gray-500">Issue Date</span>
<span className="font-medium">March 15, 2024</span>
</div>
<div className="border-t pt-4 space-y-3">
<div className="flex justify-between">
<span className="">Brand Identity Package</span>
<span className="font-medium">$1,800</span>
</div>
<div className="flex justify-between">
<span className="">Website Redesign</span>
<span className="font-medium">$2,200</span>
</div>
</div>
<div className="border-t pt-4 space-y-2">
<div className="flex justify-between">
<span className="text-gray-500">Subtotal</span>
<span className="font-medium">$ 4,000.0</span>
</div>
<div className="flex justify-between">
<span className="text-gray-500">Discount <span className="text-blue-500">15%</span></span>
<span className="font-medium">$ 600.0</span>
</div>
<div className="flex justify-between">
<span className="text-gray-900 font-semibold">Final Amount</span>
<span className="text-blue-600 font-semibold">$ 3,400.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2">
<button className="flex gap-2 hover:bg-gray-50 text-sm font-medium text-gray-700 pt-4 pb-4 items-center justify-center">
<svg className="lucide lucide-edit-3 w-4 h-4" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg>
          Edit
        </button>
<button className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-white bg-orange-400 hover:bg-orange-500">
          Send Invoice
          <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>

<div className="overflow-hidden bg-white rounded-2xl shadow-lg">

<div className="relative">
<div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
<button className="p-1 rounded hover:bg-white/10"><svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
<h2 className="text-sm font-medium">All Invoices</h2>
<button className="flex items-center gap-1 text-xs font-medium hover:bg-white/10 px-2 py-1 rounded">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            New Invoice
          </button>
</div>

<div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-indigo-300/40 blur-2xl"></div>
<div className="absolute -top-2 -right-2 w-20 h-20 rounded-full bg-blue-400/50 blur-xl"></div>
</div>

<div className="bg-[#ffffff]">
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<h3 className="text-sm font-medium text-gray-900">Recently Completed</h3>
<button className="p-1 rounded hover:bg-white">
<svg className="lucide lucide-x w-4 h-4 text-gray-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="bg-white border rounded-xl mr-4 mb-4 ml-4 shadow-sm">
<div className="flex pt-4 pr-4 pb-4 pl-4 items-start justify-between">
<div className="">
<p className="text-xs text-gray-500 mb-1">Service</p>
<h4 className="font-semibold text-gray-900">E-commerce Platform</h4>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 mb-1">Amount</p>
<h4 className="font-semibold text-blue-600">$ 5,200.00</h4>
</div>
</div>
<div className="border-t flex justify-between text-xs px-4 py-3">
<div className="">
<p className="text-gray-500">Client</p>
<p className="font-medium text-gray-900">TechNova Inc.</p>
</div>
<div className="">
<p className="text-gray-500">Paid On</p>
<p className="font-medium text-gray-900">March 12, 2024</p>
</div>
<div className="flex items-center gap-1 text-purple-600 font-semibold">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              PAID
            </div>
</div>
</div>
</div>

<div className="h-6"></div>

<div className="pr-6 pb-6 pl-6 space-y-4">
<h3 className="text-sm font-medium text-gray-900">Outstanding</h3>

<div className="rounded-xl border hover:shadow-sm transition bg-white">
<button className="w-full flex items-start justify-between p-4">
<div className="">
<h4 className="font-medium text-gray-900 mb-2">Mobile Banking App</h4>
<div className="text-xs text-gray-500 space-x-4">
<span>Client <span className="font-medium text-gray-900">FinanceHub Ltd</span></span>
<span className="">Due Date <span className="font-medium text-gray-900">March 20, 2024</span></span>
</div>
</div>
<div className="text-right">
<p className="font-medium text-blue-600 mb-2">$ 3,750.00</p>
<span className="text-[10px] font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">PENDING</span>
</div>
</button>
</div>

<div className="rounded-xl border hover:shadow-sm transition bg-white">
<button className="w-full flex items-start justify-between p-4">
<div className="">
<h4 className="font-medium text-gray-900 mb-2">CRM Dashboard</h4>
<div className="text-xs text-gray-500 space-x-4">
<span>Client <span className="font-medium text-gray-900">SalesForce Pro</span></span>
<span className="">Due Date <span className="font-medium text-gray-900">March 25, 2024</span></span>
</div>
</div>
<div className="text-right">
<p className="font-medium text-blue-600 mb-2">$4,320.00</p>
<span className="text-[10px] font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">PENDING</span>
</div>
</button>
</div>

<div className="rounded-xl border hover:shadow-sm transition bg-white">
<button className="w-full flex items-start justify-between p-4">
<div className="">
<h4 className="font-medium text-gray-900 mb-2">Healthcare Portal</h4>
<div className="text-xs text-gray-500 space-x-4">
<span className="">Client <span className="font-medium text-gray-900">MediCare Systems</span></span>
<span className="">Due Date <span className="font-medium text-gray-900">March 30, 2024</span></span>
</div>
</div>
<div className="text-right">
<p className="font-medium text-blue-600 mb-2">$6,800.00</p>
<span className="text-[10px] font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">PENDING</span>
</div>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
