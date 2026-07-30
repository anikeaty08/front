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



tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] } } } }



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
      
<div className="flex flex-col lg:flex-row gap-12 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">

<div className="relative w-[320px] h-[640px] bg-white rounded-[36px] shadow-2xl overflow-hidden flex flex-col border border-gray-100 transform translate-y-4 animate-[slideUp_0.8s_ease-out_0.5s_forwards]">

<div className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 pt-10 px-6 pb-24">
<div className="flex items-center justify-between">
<button className="text-xs font-medium text-emerald-700 bg-white/95 hover:bg-white hover:shadow-sm text-center rounded-full px-4 py-1.5 backdrop-blur transition-all duration-200">
                    Earn $25
                </button>
<span className="text-2xl font-medium text-white tracking-tight">nexus</span>
</div>

<div className="mt-8">
<p className="text-white/80 text-sm mb-3 font-medium">Quick access</p>
<div className="flex flex-wrap gap-3">
<button className="flex items-center text-white/90 text-sm font-medium bg-white/15 hover:bg-white/25 rounded-full px-4 py-2 transition-all duration-200 backdrop-blur-sm">
<svg className="lucide lucide-plus w-4 h-4 mr-2" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Transfer
                    </button>
<button className="text-white/90 text-sm font-medium bg-white/15 hover:bg-white/25 rounded-full px-4 py-2 transition-all duration-200 backdrop-blur-sm">Pay bills</button>
<button className="text-white/90 text-sm font-medium bg-white/15 hover:bg-white/25 rounded-full px-4 py-2 transition-all duration-200 backdrop-blur-sm">Send money</button>
</div>
</div>

<div className="absolute left-6 right-6 -bottom-16 bg-white/15 rounded-2xl p-6 backdrop-blur-md border border-white/20">
<div className="flex items-start justify-between">
<div className="">
<p className="text-xs text-white/70 mb-1">Your monthly <span className="font-medium">Nexus rewards</span> based on your activity score</p>
<p className="text-4xl font-medium text-white/95 tracking-tight">$47.82</p>
</div>
<span className="text-4xl font-semibold text-white/90">89</span>
</div>
<div className="flex items-center justify-between mt-4">
<button className="w-full hover:bg-gray-50 transition-colors duration-200 text-sm font-medium text-emerald-600 bg-white border-slate-100 border rounded-full pt-2.5 pb-2.5">Boost rewards</button>
</div>
</div>
</div>

<div className="flex justify-center mt-20 space-x-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
</div>

<div className="px-6 mt-8 flex-1 overflow-y-auto">
<h2 className="text-lg font-medium text-gray-900 tracking-tight mb-4">Nexus Elite Card</h2>
<div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 relative">
<p className="text-xs text-gray-500 mb-1 font-medium">Available Balance</p>
<p className="text-3xl font-medium text-gray-900 tracking-tight">$7,842.<span className="font-normal text-gray-500 text-2xl">15</span></p>
<p className="text-sm text-gray-500 mt-2">$12,157.85 Credit Limit</p>
<svg className="lucide lucide-chevron-right w-4 h-4 absolute right-6 top-6 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="mt-8">
<p className="text-xs text-gray-500 mb-2 font-medium">Next Payment</p>
<div className="flex items-center justify-between">
<div>
<p className="text-lg font-medium text-gray-900">$2,184.67</p>
<p className="text-xs text-gray-400">Due Feb 15, 2024</p>
</div>
<button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-200">Pay Now</button>
</div>
</div>
</div>
</div>

<div className="relative w-[320px] h-[640px] bg-white rounded-[36px] shadow-2xl overflow-hidden flex flex-col border border-gray-100 transform translate-y-4 animate-[slideUp_0.8s_ease-out_0.7s_forwards]">

<div className="flex items-center justify-between px-6 pt-10 pb-6 bg-gray-50/50">
<div className="flex space-x-2">
<button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200">Insights</button>
<button className="text-gray-500 hover:text-gray-700 rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200">Benefits</button>
</div>
<button className="relative hover:bg-gray-100 rounded-full p-2 transition-colors duration-200">
<svg className="lucide lucide-bell w-5 h-5 text-gray-700" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-0.5 -right-0.5 inline-block bg-emerald-500 rounded-full w-3 h-3 border-2 border-white"></span>
</button>
</div>

<div className="px-6 mt-4">
<div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-5 border border-gray-200">
<div className="">
<p className="text-3xl font-medium text-gray-900 tracking-tight">4.5</p>
<p className="text-xs text-gray-600 font-medium">Percent Cashback</p>
<p className="text-xs text-gray-400 mt-1">Premium tier</p>
</div>
<div className="bg-emerald-100 rounded-full p-2">
<svg className="lucide lucide-star w-5 h-5 text-emerald-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>

<div className="px-6 mt-6 flex-1 overflow-y-auto">
<h3 className="text-base font-medium text-gray-900 mb-3 tracking-tight">Credit Health</h3>
<div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border border-gray-200">
<div className="flex items-start justify-between">
<span className="bg-emerald-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">Excellent</span>

<div className="relative w-24 h-24">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#e5e7eb" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="40" stroke="#10b981" strokeDasharray="251.2" strokeDashoffset="50" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-xl font-medium text-gray-900">784</span>
</div>
</div>
<p className="text-[10px] text-gray-400 mt-3 leading-relaxed">Updated Feb 8, 2024Powered by <span className="underline">Experian FICO® Score</span></p>
<div className="grid grid-cols-2 divide-x divide-gray-200 mt-6">
<div className="py-4 pr-4">
<p className="text-sm text-gray-900 font-medium mb-1">800 Club</p>
<p className="text-[10px] text-gray-400">16 points to unlock premium benefits</p>
</div>
<div className="py-4 pl-4 flex items-center justify-end">
<div className="text-right">
<p className="text-sm text-gray-900 font-medium">800</p>
<p className="text-[10px] text-gray-400">Target</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border-t border-gray-200 flex items-center justify-between px-8 py-4">
<button className="flex flex-col items-center space-y-1 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200">
<svg className="lucide lucide-credit-card w-5 h-5 text-gray-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="text-[10px] text-gray-500 font-medium">Cards</span>
</button>
<button className="flex flex-col items-center space-y-1 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200">
<svg className="lucide lucide-trophy w-5 h-5 text-emerald-600" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span className="text-[10px] text-emerald-600 font-medium">Rewards</span>
</button>
<button className="flex flex-col items-center space-y-1 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200">
<svg className="lucide lucide-bar-chart w-5 h-5 text-gray-400" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
<span className="text-[10px] text-gray-500 font-medium">Analytics</span>
</button>
<button className="flex flex-col items-center space-y-1 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200">
<svg className="lucide lucide-settings w-5 h-5 text-gray-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-[10px] text-gray-500 font-medium">Settings</span>
</button>
</div>
</div>
</div>




    </>
  );
}
