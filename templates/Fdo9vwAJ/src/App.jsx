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
      
<div className="w-full max-w-5xl">
<div className="text-center mb-10">
<h2 className="text-3xl font-bold text-slate-800 mb-3">Choose Your Plan</h2>
<p className="text-slate-500 max-w-lg mx-auto">Select the perfect virtual card solution for your needs with our flexible pricing options.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-200">
<div className="p-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-semibold text-slate-800 text-xl">Basic</h3>
<span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">Personal</span>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-slate-800">$9</span>
<span className="text-slate-500">/month</span>
</div>
<p className="text-slate-500 text-sm mb-6">Perfect for individuals just getting started with virtual cards.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-slate-700">
<svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              1 virtual card
            </li>
<li className="flex items-center text-sm text-slate-700">
<svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              $1,000 monthly limit
            </li>
<li className="flex items-center text-sm text-slate-700">
<svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Basic analytics
            </li>
<li className="flex items-center text-sm text-slate-400">
<svg className="w-5 h-5 mr-2 text-slate-300" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Team access
            </li>
</ul>
<button className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-xl transition">Get Started</button>
</div>
</div>

<div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-indigo-500 to-indigo-400 transform md:scale-105">
<div className="p-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-semibold text-white text-xl">Pro</h3>
<span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Popular</span>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-white">$29</span>
<span className="text-white/70">/month</span>
</div>
<p className="text-white/70 text-sm mb-6">Ideal for professionals who need more flexibility and features.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-white">
<svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              5 virtual cards
            </li>
<li className="flex items-center text-sm text-white">
<svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              $10,000 monthly limit
            </li>
<li className="flex items-center text-sm text-white">
<svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Advanced analytics
            </li>
<li className="flex items-center text-sm text-white">
<svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              1 team member
            </li>
</ul>
<button className="w-full py-3 px-4 bg-white hover:bg-white/90 text-indigo-600 font-medium rounded-xl transition">Get Started</button>
</div>

<div className="px-6 pb-6">
<div className="flex justify-between text-xs text-white/70 mb-1">
<span>Monthly usage</span>
<span>70% used</span>
</div>
<div className="h-1.5 w-full bg-white/20 rounded-full">
<div className="h-1.5 bg-white w-[70%] rounded-full"></div>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-200">
<div className="p-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-semibold text-slate-800 text-xl">Business</h3>
<span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">Enterprise</span>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-slate-800">$99</span>
<span className="text-slate-500">/month</span>
</div>
<p className="text-slate-500 text-sm mb-6">Full-featured solution for businesses with advanced needs.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-slate-700">
<svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Unlimited virtual cards
            </li>
<li className="flex items-center text-sm text-slate-700">
<svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              $50,000 monthly limit
            </li>
<li className="flex items-center text-sm text-slate-700">
<svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Enterprise analytics
            </li>
<li className="flex items-center text-sm text-slate-700">
<svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Unlimited team members
            </li>
</ul>
<button className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-xl transition">Get Started</button>
</div>
</div>
</div>
<div className="mt-10 text-center">
<p className="text-slate-500 text-sm">All plans include 24/7 support, fraud protection, and secure transactions.</p>
<p className="text-slate-500 text-sm mt-2">Need a custom solution? <a className="text-indigo-500 font-medium" href="#">Contact our sales team</a></p>
</div>
</div>

    </>
  );
}
