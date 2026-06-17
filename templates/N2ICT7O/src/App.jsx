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



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif']
                    }
                }
            }
        }
    
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
      
<div className="min-h-screen py-8 px-4">
<div className="max-w-2xl bg-gray-800 rounded-lg shadow-xl p-6 mx-auto mb-6 border border-gray-700">

<div className="flex justify-between items-start mb-6">
<div>
<h1 className="text-lg font-semibold text-gray-100 mb-2">Order: AI-4821-CP</h1>
<span className="inline-block border border-cyan-400 text-cyan-400 text-sm font-medium rounded-full px-3 py-1 mb-3">Processing</span>
<div className="space-y-1">
<p className="text-sm text-gray-400">Order Date: Thu, 15 Feb 2024</p>
<p className="text-sm text-gray-400">Estimated Activation: Sat, 17 Feb 2024</p>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="border border-gray-600 rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors">
                        Download Invoice
                    </button>
<button className="p-2 hover:bg-gray-700 rounded-md">
<svg className="w-5 h-5 text-gray-400" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
</svg>
</button>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between py-3 border-b border-gray-700">
<div className="flex items-center">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-md mr-4 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-semibold text-base text-gray-100">NeuralChat Pro Subscription</p>
<p className="text-sm text-gray-400">Advanced AI with GPT-4 + 500K tokens/month</p>
</div>
</div>
<div className="text-sm font-medium text-gray-100 text-right">
<p>$29.99</p>
<p className="text-gray-400">Monthly Plan</p>
</div>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center">
<div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md mr-4 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-semibold text-base text-gray-100">AI Voice Assistant Add-on</p>
<p className="text-sm text-gray-400">Premium voice synthesis + real-time chat</p>
</div>
</div>
<div className="text-sm font-medium text-gray-100 text-right">
<p>$9.99</p>
<p className="text-gray-400">Add-on</p>
</div>
</div>
</div>

<div className="flex items-center justify-between py-4 bg-gray-700 rounded-lg px-4 mb-6 border border-gray-600">
<div className="flex items-center space-x-3">
<div className="w-8 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
<span className="text-sm text-gray-300">****4529</span>
</div>
<div className="text-right">
<p className="text-lg font-semibold text-gray-100">$39.98</p>
</div>
</div>

<div className="flex flex-wrap gap-2 mb-6">
<button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">Service History</button>
<button className="border border-gray-600 px-4 py-2 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors">API Keys</button>
<button className="border border-gray-600 px-4 py-2 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors">Account Settings</button>
<button className="border border-gray-600 px-4 py-2 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors">Usage Analytics</button>
</div>

<div className="space-y-4 mb-6">
<div className="flex space-x-4 relative">
<div className="flex flex-col items-center">
<div className="w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-900"></div>
<div className="flex-1 w-px bg-gray-600 h-16"></div>
</div>
<div className="flex-1 pb-6">
<p className="font-semibold text-base text-gray-100">Subscription Purchased</p>
<p className="text-xs text-gray-400 mb-2">Thu, 15 Feb 2024 14:32 PM</p>
<div className="flex items-center space-x-2 text-sm text-gray-300">
<div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
<span>Marcus Chen</span>
<span className="text-gray-500">|</span>
<a className="text-cyan-400 hover:underline" href="mailto:marcus.chen@techcorp.ai">marcus.chen@techcorp.ai</a>
</div>
</div>
</div>
<div className="flex space-x-4 relative">
<div className="flex flex-col items-center">
<div className="w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-900"></div>
<div className="flex-1 w-px bg-gray-600 h-16"></div>
</div>
<div className="flex-1 pb-6">
<p className="font-semibold text-base text-gray-100">Payment Verified</p>
<p className="text-xs text-gray-400 mb-2">Thu, 15 Feb 2024 14:35 PM</p>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-300">Crypto payment confirmed</span>
<span className="text-xs text-cyan-400 hover:underline cursor-pointer">View Transaction</span>
</div>
</div>
</div>
<div className="flex space-x-4 relative">
<div className="flex flex-col items-center">
<div className="w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-cyan-900"></div>
<div className="flex-1 w-px bg-gray-600 h-16"></div>
</div>
<div className="flex-1 pb-6">
<p className="font-semibold text-base text-gray-100">AI Service Activating</p>
<p className="text-xs text-gray-400 mb-2">Sat, 17 Feb 2024 09:15 AM</p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="text-sm text-gray-300">CloudAI Infrastructure</span>
<div className="px-2 py-1 bg-blue-900 text-blue-300 text-xs rounded">Neural</div>
</div>
<span className="text-xs text-cyan-400 hover:underline cursor-pointer">Access Dashboard</span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-4 border-t border-gray-700">
<button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Previous</span>
</button>
<span className="text-sm text-gray-500">Subscription 1 of 2</span>
<button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors">
<span>Next</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

    </>
  );
}
