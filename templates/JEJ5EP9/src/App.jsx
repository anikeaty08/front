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
      
<div className="relative w-[375px] h-[812px] bg-[#f6f9fc] rounded-[54px] p-2 shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3),inset_0_-2px_6px_0_rgba(10,37,64,0.35)] border border-gray-200 flex flex-col overflow-hidden">

<div className="px-5 pt-6 pb-4 flex justify-between items-center">
<div className="text-sm font-semibold text-gray-800">9:41</div>
<div className="flex space-x-1">
<svg className="h-4 w-4 text-gray-800" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7h8m-8 5h8m-4 5h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-4 w-4 text-gray-800" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-4 w-4 text-gray-800" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="flex-1 overflow-y-auto px-5 pb-5">

<div className="text-center mb-6">
<h1 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h1>
<p className="text-gray-500 text-sm">Select the perfect plan for your needs</p>
</div>

<div className="flex justify-center mb-8">
<div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
<button className="py-2 px-5 rounded-md bg-white text-sm font-medium text-gray-900 shadow-sm">Monthly</button>
<button className="py-2 px-5 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Yearly</button>
</div>
</div>

<div className="space-y-5">

<div className="relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold text-gray-900">Free</h3>
<p className="text-gray-500 text-sm mt-1">Basic features for starting out</p>
</div>
<div className="text-right">
<div className="text-xl font-bold text-gray-900">$0</div>
<div className="text-gray-400 text-xs">per month</div>
</div>
</div>
<div className="space-y-3 mb-5">
<div className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-600 text-sm">Up to 3 projects</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-600 text-sm">1GB storage</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-600 text-sm">Email support</span>
</div>
</div>
<button className="w-full py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 text-sm">Current Plan</button>
</div>

<div className="relative bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-5 shadow-sm border border-indigo-200">
<div className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold text-gray-900">Pro</h3>
<p className="text-gray-600 text-sm mt-1">Everything you need for work</p>
</div>
<div className="text-right">
<div className="text-xl font-bold text-gray-900">$12</div>
<div className="text-gray-500 text-xs">per month</div>
</div>
</div>
<div className="space-y-3 mb-5">
<div className="flex items-center">
<svg className="h-5 w-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-700 text-sm">Unlimited projects</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-700 text-sm">20GB storage</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-700 text-sm">Priority support</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-700 text-sm">Advanced analytics</span>
</div>
</div>
<button className="w-full py-2.5 rounded-xl bg-indigo-500 text-white font-medium shadow-sm hover:bg-indigo-600 transition text-sm">Upgrade to Pro</button>
</div>

<div className="relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold text-gray-900">Business</h3>
<p className="text-gray-500 text-sm mt-1">For teams and organizations</p>
</div>
<div className="text-right">
<div className="text-xl font-bold text-gray-900">$29</div>
<div className="text-gray-400 text-xs">per month</div>
</div>
</div>
<div className="space-y-3 mb-5">
<div className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-600 text-sm">Everything in Pro</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-600 text-sm">Unlimited team members</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-600 text-sm">100GB storage</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-600 text-sm">24/7 phone support</span>
</div>
</div>
<button className="w-full py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 text-sm">Choose Business</button>
</div>
</div>

<div className="mt-8">
<h2 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
<div className="space-y-3">
<div className="bg-white rounded-xl p-4 shadow-sm">
<div className="flex justify-between items-center cursor-pointer">
<h3 className="text-sm font-medium text-gray-800">Can I change plans later?</h3>
<svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="bg-white rounded-xl p-4 shadow-sm">
<div className="flex justify-between items-center cursor-pointer">
<h3 className="text-sm font-medium text-gray-800">What payment methods do you accept?</h3>
<svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-300 rounded-full"></div>
</div>

    </>
  );
}
