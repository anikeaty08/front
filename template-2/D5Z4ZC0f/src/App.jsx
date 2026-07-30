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
      
<div className="max-w-3xl w-full bg-[#151515] rounded-xl overflow-hidden shadow-2xl border border-[#232323]">

<div className="px-6 pt-6 pb-4 border-b border-[#232323]">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<h2 className="text-gray-200 font-medium text-sm">Plan Comparison</h2>
</div>
<span className="text-xs text-gray-500">Updated July 2023</span>
</div>
</div>

<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-4 border-r border-[#232323]">
<p className="text-gray-400 text-xs uppercase tracking-wide">Features</p>
</div>
<div className="p-4 text-center border-r border-[#232323]">
<p className="text-gray-200 font-medium">Basic</p>
<p className="text-gray-400 text-xs mt-1">$9/month</p>
</div>
<div className="p-4 text-center border-r border-[#232323] bg-[#171717]">
<p className="text-gray-200 font-medium">Pro</p>
<p className="text-blue-400 text-xs mt-1">$19/month</p>
<span className="inline-block mt-1 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">Popular</span>
</div>
<div className="p-4 text-center">
<p className="text-gray-200 font-medium">Enterprise</p>
<p className="text-gray-400 text-xs mt-1">$49/month</p>
</div>
</div>

<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-4 border-r border-[#232323] flex items-center">
<p className="text-gray-300">Storage</p>
</div>
<div className="p-4 text-center border-r border-[#232323] flex items-center justify-center">
<p className="text-gray-300">10 GB</p>
</div>
<div className="p-4 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<p className="text-gray-300">100 GB</p>
</div>
<div className="p-4 text-center flex items-center justify-center">
<p className="text-gray-300">Unlimited</p>
</div>
</div>
<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-4 border-r border-[#232323] flex items-center">
<p className="text-gray-300">Users</p>
</div>
<div className="p-4 text-center border-r border-[#232323] flex items-center justify-center">
<p className="text-gray-300">3 users</p>
</div>
<div className="p-4 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<p className="text-gray-300">10 users</p>
</div>
<div className="p-4 text-center flex items-center justify-center">
<p className="text-gray-300">Unlimited</p>
</div>
</div>
<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-4 border-r border-[#232323] flex items-center">
<p className="text-gray-300">Support</p>
</div>
<div className="p-4 text-center border-r border-[#232323] flex items-center justify-center">
<p className="text-gray-300">Email only</p>
</div>
<div className="p-4 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<p className="text-gray-300">Email & Chat</p>
</div>
<div className="p-4 text-center flex items-center justify-center">
<p className="text-gray-300">24/7 Priority</p>
</div>
</div>
<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-4 border-r border-[#232323] flex items-center">
<p className="text-gray-300">Analytics</p>
</div>
<div className="p-4 text-center border-r border-[#232323] flex items-center justify-center">
<svg className="h-5 w-5 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-4 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-4 text-center flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-4 border-r border-[#232323] flex items-center">
<p className="text-gray-300">Custom Domain</p>
</div>
<div className="p-4 text-center border-r border-[#232323] flex items-center justify-center">
<svg className="h-5 w-5 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-4 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-4 text-center flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-4 py-4">
<div className="p-4 border-r border-[#232323]"></div>
<div className="p-4 flex justify-center border-r border-[#232323]">
<button className="px-4 py-2 bg-[#232323] text-gray-300 rounded-md text-sm hover:bg-[#2a2a2a] transition">Choose Plan</button>
</div>
<div className="p-4 flex justify-center border-r border-[#232323] bg-[#171717]">
<button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition">Choose Plan</button>
</div>
<div className="p-4 flex justify-center">
<button className="px-4 py-2 bg-[#232323] text-gray-300 rounded-md text-sm hover:bg-[#2a2a2a] transition">Contact Sales</button>
</div>
</div>
</div>

    </>
  );
}
