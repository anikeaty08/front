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
      
<div className="min-h-screen flex items-center justify-center p-6">
<div className="max-w-6xl mx-auto w-full">

<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Choose your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">plan</span></h2>
<p className="text-gray-400 max-w-2xl mx-auto">Select the perfect package for your needs with our transparent pricing. All plans include our core features with options to scale as you grow.</p>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300">
<div className="p-8">
<h3 className="text-xl font-medium mb-2">Basic</h3>
<p className="text-gray-400 mb-6 h-12">Perfect for small projects and individual developers.</p>
<div className="flex items-baseline mb-8">
<span className="text-5xl font-light">$49</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Up to 5 projects</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Basic analytics</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>24-hour support response time</span>
</li>
<li className="flex items-start text-gray-500">
<svg className="h-5 w-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Custom domain</span>
</li>
<li className="flex items-start text-gray-500">
<svg className="h-5 w-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Advanced security</span>
</li>
</ul>
<a className="block text-center py-3 px-6 border border-gray-700 rounded-md hover:bg-white/5 transition-colors" href="#">Get Started</a>
</div>
</div>

<div className="border-2 border-indigo-500 rounded-xl overflow-hidden relative">
<div className="absolute top-0 inset-x-0 bg-indigo-500 text-center py-1 text-sm">
            Most Popular
          </div>
<div className="p-8 pt-12">
<h3 className="text-xl font-medium mb-2">Pro</h3>
<p className="text-gray-400 mb-6 h-12">Ideal for growing businesses and teams.</p>
<div className="flex items-baseline mb-8">
<span className="text-5xl font-light">$99</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Unlimited projects</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Advanced analytics</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>4-hour support response time</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Custom domain</span>
</li>
<li className="flex items-start text-gray-500">
<svg className="h-5 w-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Advanced security</span>
</li>
</ul>
<a className="block text-center py-3 px-6 bg-indigo-500 rounded-md hover:bg-indigo-600 transition-colors" href="#">Get Started</a>
</div>
</div>

<div className="border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300">
<div className="p-8">
<h3 className="text-xl font-medium mb-2">Enterprise</h3>
<p className="text-gray-400 mb-6 h-12">For large organizations with advanced needs.</p>
<div className="flex items-baseline mb-8">
<span className="text-5xl font-light">$249</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Unlimited projects</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Custom analytics dashboard</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>1-hour support response time</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Custom domain</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Advanced security</span>
</li>
</ul>
<a className="block text-center py-3 px-6 border border-gray-700 rounded-md hover:bg-white/5 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>

<div className="mt-20 border-t border-gray-800 pt-12">
<h3 className="text-2xl font-light mb-8 text-center">Frequently Asked Questions</h3>
<div className="grid md:grid-cols-2 gap-8">
<div>
<h4 className="text-lg mb-2">Can I upgrade or downgrade my plan?</h4>
<p className="text-gray-400">Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle.</p>
</div>
<div>
<h4 className="text-lg mb-2">Do you offer a free trial?</h4>
<p className="text-gray-400">All plans come with a 14-day free trial. No credit card required to get started.</p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
