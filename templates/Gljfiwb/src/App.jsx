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



    const monthlyBtn = document.getElementById('monthly-btn');
    const annualBtn = document.getElementById('annual-btn');
    
    monthlyBtn.addEventListener('click', function() {
      monthlyBtn.classList.add('bg-white', 'shadow-sm', 'text-gray-800');
      monthlyBtn.classList.remove('text-gray-600');
      annualBtn.classList.remove('bg-white', 'shadow-sm', 'text-gray-800');
      annualBtn.classList.add('text-gray-600');
    });
    
    annualBtn.addEventListener('click', function() {
      annualBtn.classList.add('bg-white', 'shadow-sm', 'text-gray-800');
      annualBtn.classList.remove('text-gray-600');
      monthlyBtn.classList.remove('bg-white', 'shadow-sm', 'text-gray-800');
      monthlyBtn.classList.add('text-gray-600');
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
      
<div className="max-w-[800px] mx-auto space-y-8">
<section className="text-center py-6">
<span className="inline-block px-3 py-1 text-xs text-indigo-600 bg-indigo-50 rounded-full mb-3">PRICING</span>
<h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Choose Your Plan</h1>
<p className="text-base text-gray-600 max-w-md mx-auto mb-6">Flexible options for teams of all sizes with no hidden fees.</p>
<div className="inline-flex items-center bg-gray-100 p-1 rounded-lg">
<button className="px-4 py-2 rounded-md bg-white shadow-sm text-sm font-medium" id="monthly-btn">Monthly</button>
<button className="px-4 py-2 rounded-md text-sm text-gray-600" id="annual-btn">
          Annual <span className="text-xs text-green-600 ml-1">-20%</span>
</button>
</div>
</section>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="card rounded-xl p-6 bg-white transition duration-200">
<div className="mb-5">
<span className="inline-block px-2.5 py-0.5 text-xs text-indigo-600 bg-indigo-50 rounded-full mb-2">STARTER</span>
<h2 className="text-xl font-bold mb-2 text-gray-800">Basic Plan</h2>
<div className="flex items-baseline mb-1">
<span className="text-3xl font-bold">$9</span>
<span className="text-sm text-gray-500 ml-1">/month</span>
</div>
<p className="text-xs text-gray-500">Billed monthly</p>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">5 Projects</p>
</div>
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">20GB Storage</p>
</div>
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">Basic Support</p>
</div>
</div>
<button className="w-full py-2.5 border border-gray-300 bg-white hover:bg-gray-50 rounded-lg text-sm transition text-gray-800 font-medium">
          Get Started
        </button>
</div>
<div className="card rounded-xl p-6 bg-white transition duration-200 border-2 border-indigo-500 shadow-md relative">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          POPULAR
        </div>
<div className="mb-5">
<span className="inline-block px-2.5 py-0.5 text-xs text-indigo-600 bg-indigo-50 rounded-full mb-2">PRO</span>
<h2 className="text-xl font-bold mb-2 text-gray-800">Pro Plan</h2>
<div className="flex items-baseline mb-1">
<span className="text-3xl font-bold">$29</span>
<span className="text-sm text-gray-500 ml-1">/month</span>
</div>
<p className="text-xs text-gray-500">Billed monthly</p>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">20 Projects</p>
</div>
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">100GB Storage</p>
</div>
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">Priority Support</p>
</div>
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">Advanced Analytics</p>
</div>
</div>
<button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm transition text-white font-medium">
          Get Started
        </button>
</div>
<div className="card rounded-xl p-6 bg-white transition duration-200">
<div className="mb-5">
<span className="inline-block px-2.5 py-0.5 text-xs text-indigo-600 bg-indigo-50 rounded-full mb-2">ENTERPRISE</span>
<h2 className="text-xl font-bold mb-2 text-gray-800">Team Plan</h2>
<div className="flex items-baseline mb-1">
<span className="text-3xl font-bold">$99</span>
<span className="text-sm text-gray-500 ml-1">/month</span>
</div>
<p className="text-xs text-gray-500">Billed monthly</p>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">Unlimited Projects</p>
</div>
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">1TB Storage</p>
</div>
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">24/7 Dedicated Support</p>
</div>
<div className="flex items-start">
<svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-sm text-gray-600">Custom Integrations</p>
</div>
</div>
<button className="w-full py-2.5 border border-gray-300 bg-white hover:bg-gray-50 rounded-lg text-sm transition text-gray-800 font-medium">
          Contact Sales
        </button>
</div>
</div>
<div className="card rounded-xl p-6 bg-white transition duration-200 mt-8">
<h2 className="text-xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="border-b border-gray-100 pb-4">
<h3 className="text-sm font-medium text-gray-800 mb-2">Can I change plans later?</h3>
<p className="text-sm text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle.</p>
</div>
<div className="border-b border-gray-100 pb-4">
<h3 className="text-sm font-medium text-gray-800 mb-2">Is there a free trial?</h3>
<p className="text-sm text-gray-600">We offer a 14-day free trial on all plans. No credit card required to start.</p>
</div>
<div>
<h3 className="text-sm font-medium text-gray-800 mb-2">What payment methods do you accept?</h3>
<p className="text-sm text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
</div>
</div>
</div>
</div>


    </>
  );
}
