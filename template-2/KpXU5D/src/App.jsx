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
      
<div className="max-w-5xl mx-auto w-full">

<div className="text-center mb-14">
<h2 className="text-3xl font-medium mb-3">Simple, transparent pricing</h2>
<p className="text-gray-400 max-w-xl mx-auto text-sm">Choose the plan that's right for you and your team</p>
</div>

<div className="grid md:grid-cols-3 gap-5">

<div className="bg-[#17181A] rounded-lg p-6 border border-[#26282C] hover:border-[#36383C] transition-all flex flex-col">
<div className="mb-5">
<h3 className="text-lg font-medium">Free</h3>
<p className="mt-1 text-gray-400 text-sm">For personal projects</p>
</div>
<div className="mb-5">
<span className="text-3xl font-medium">$0</span>
<span className="text-gray-400 text-sm">/month</span>
</div>
<ul className="space-y-2 mb-8 text-sm flex-grow">
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Up to 3 projects</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>1 team member</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Basic analytics and reporting</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Community support via forum</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Standard API rate limits</span>
</li>
</ul>
<button className="w-full py-2 border border-[#26282C] rounded text-sm hover:border-[#36383C] transition-colors mt-auto">
          Get started
        </button>
</div>

<div className="bg-[#17181A] rounded-lg p-6 border border-[#26282C] hover:border-[#36383C] transition-all relative flex flex-col">
<div className="absolute -top-3 left-0 right-0 flex justify-center">
<span className="bg-blue-600 text-xs px-3 py-1 rounded-full">POPULAR</span>
</div>
<div className="mb-5">
<h3 className="text-lg font-medium">Pro</h3>
<p className="mt-1 text-gray-400 text-sm">For growing teams</p>
</div>
<div className="mb-5">
<span className="text-3xl font-medium">$12</span>
<span className="text-gray-400 text-sm">/user/month</span>
</div>
<ul className="space-y-2 mb-8 text-sm flex-grow">
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Unlimited projects</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Up to 10 team members</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Advanced analytics with insights</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Priority email support (24h response)</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Custom integrations via webhooks</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Higher API rate limits</span>
</li>
</ul>
<button className="w-full py-2 bg-blue-600 rounded text-sm hover:bg-blue-700 transition-colors mt-auto">
          Upgrade now
        </button>
</div>

<div className="bg-[#17181A] rounded-lg p-6 border border-[#26282C] hover:border-[#36383C] transition-all flex flex-col">
<div className="mb-5">
<h3 className="text-lg font-medium">Enterprise</h3>
<p className="mt-1 text-gray-400 text-sm">For large organizations</p>
</div>
<div className="mb-5">
<span className="text-3xl font-medium">Custom</span>
</div>
<ul className="space-y-2 mb-8 text-sm flex-grow">
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Unlimited projects and team members</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Dedicated account manager</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Custom analytics dashboard</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>24/7 priority support with SLAs</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>SSO & advanced security features</span>
</li>
<li className="flex items-start text-gray-300">
<svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>99.99% uptime guarantee</span>
</li>
</ul>
<button className="w-full py-2 border border-[#26282C] rounded text-sm hover:border-[#36383C] transition-colors mt-auto">
          Contact sales
        </button>
</div>
</div>
</div>

    </>
  );
}
