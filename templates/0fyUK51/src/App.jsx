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
      
<div className="w-full max-w-6xl">

<div className="text-center mb-12">
<h1 className="text-4xl font-bold mb-4 text-white">Quantum Pricing Plans</h1>
<p className="text-xl max-w-3xl mx-auto">Choose the perfect plan for your business needs</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="pricing-card shadow-xl">
<div className="p-6 border-b border-[#0f395e]">
<h2 className="text-2xl font-bold text-white mb-2">Starter</h2>
<p className="mb-6">Perfect for small projects and startups</p>
<div className="flex items-end mb-6">
<span className="text-4xl font-bold text-white">$29</span>
<span className="ml-2 mb-1">/month</span>
</div>
<button className="w-full py-2 px-4 rounded bg-[#0f395e] text-white hover:bg-[#164b7e] transition-colors">
            Get Started
          </button>
</div>
<div className="p-6">
<ul className="space-y-3">
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Up to 5 projects</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Basic analytics</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>24/7 email support</span>
</li>
</ul>
</div>
</div>

<div className="pricing-card pricing-highlight shadow-2xl relative">
<div className="absolute top-0 right-0 bg-[#00d4ff] text-[#06182c] text-xs font-bold py-1 px-3 uppercase">
          Popular
        </div>
<div className="p-6 border-b border-[#0f395e]">
<h2 className="text-2xl font-bold text-white mb-2">Pro</h2>
<p className="mb-6">For growing businesses and teams</p>
<div className="flex items-end mb-6">
<span className="text-4xl font-bold text-white">$79</span>
<span className="ml-2 mb-1">/month</span>
</div>
<button className="w-full py-2 px-4 rounded accent-bg text-[#06182c] font-medium hover:bg-[#33deff] transition-colors">
            Get Started
          </button>
</div>
<div className="p-6">
<ul className="space-y-3">
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Unlimited projects</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Advanced analytics</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Priority support</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Custom integrations</span>
</li>
</ul>
</div>
</div>

<div className="pricing-card shadow-xl">
<div className="p-6 border-b border-[#0f395e]">
<h2 className="text-2xl font-bold text-white mb-2">Enterprise</h2>
<p className="mb-6">For large organizations and teams</p>
<div className="flex items-end mb-6">
<span className="text-4xl font-bold text-white">$199</span>
<span className="ml-2 mb-1">/month</span>
</div>
<button className="w-full py-2 px-4 rounded bg-[#0f395e] text-white hover:bg-[#164b7e] transition-colors">
            Contact Sales
          </button>
</div>
<div className="p-6">
<ul className="space-y-3">
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Everything in Pro</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Dedicated account manager</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>99.99% uptime SLA</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 feature-check mt-0.5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Custom contract</span>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-xl mb-4">Have questions about our pricing?</p>
<a className="inline-block accent-text hover:underline" href="#">View our FAQ</a>
</div>
</div>

    </>
  );
}
