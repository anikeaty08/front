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
            sans: ['Plus Jakarta Sans', 'sans-serif'],
          },
          colors: {
            indigo: {
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
            },
          },
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
      
<div className="w-full max-w-4xl">
<div className="bg-white rounded-2xl shadow-xl overflow-hidden">

<div className="bg-gradient-to-br from-indigo-500 to-indigo-400 p-8 text-center">
<h2 className="text-white font-semibold text-3xl mb-3">Virtual Card Features</h2>
<p className="text-white/80 text-lg max-w-2xl mx-auto">Experience the future of digital payments with our innovative virtual card solution</p>
</div>

<div className="p-8 grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 rounded-xl p-6 transition-all hover:shadow-md">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-slate-800 font-semibold text-lg mb-2">Enhanced Security</h3>
<p className="text-slate-600">Advanced encryption and tokenization protect your financial data with every transaction.</p>
</div>

<div className="bg-slate-50 rounded-xl p-6 transition-all hover:shadow-md">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-slate-800 font-semibold text-lg mb-2">Instant Issuance</h3>
<p className="text-slate-600">Create virtual cards on demand and start using them immediately for online purchases.</p>
</div>

<div className="bg-slate-50 rounded-xl p-6 transition-all hover:shadow-md">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-slate-800 font-semibold text-lg mb-2">Multiple Cards</h3>
<p className="text-slate-600">Create and manage multiple virtual cards for different purposes, all from one account.</p>
</div>

<div className="bg-slate-50 rounded-xl p-6 transition-all hover:shadow-md">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-slate-800 font-semibold text-lg mb-2">Spending Controls</h3>
<p className="text-slate-600">Set spending limits, expiration dates, and merchant categories for precise budget control.</p>
</div>

<div className="bg-slate-50 rounded-xl p-6 transition-all hover:shadow-md">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-slate-800 font-semibold text-lg mb-2">Global Acceptance</h3>
<p className="text-slate-600">Use your virtual cards anywhere online that accepts major credit cards worldwide.</p>
</div>

<div className="bg-slate-50 rounded-xl p-6 transition-all hover:shadow-md">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-slate-800 font-semibold text-lg mb-2">Real-time Analytics</h3>
<p className="text-slate-600">Track spending patterns and receive instant notifications for all transactions.</p>
</div>
</div>

<div className="border-t border-slate-200 p-8 text-center">
<h3 className="text-slate-800 font-semibold text-xl mb-4">Ready to experience the benefits?</h3>
<button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium py-3 px-8 rounded-xl hover:shadow-lg transition">Get Started Now</button>
</div>
</div>
</div>

    </>
  );
}
