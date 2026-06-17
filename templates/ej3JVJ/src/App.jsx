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
      
<section className="py-20 px-4 max-w-7xl mx-auto">

<div className="text-center mb-16">
<span className="px-3 py-1 text-sm text-blue-300 bg-blue-900 bg-opacity-50 rounded-full font-medium">Pricing Plans</span>
<h2 className="mt-4 text-4xl font-bold text-white">Strategic <span className="text-transparent bg-clip-text gradient-bg">Investments</span> for AI Success</h2>
<p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Choose the right level of expertise and support for your organization's AI journey
      </p>
</div>

<div className="grid md:grid-cols-3 gap-8 mt-12">

<div className="relative card-hover bg-gray-800 bg-opacity-70 border border-gray-700 rounded-2xl overflow-hidden">
<div className="p-8">
<h3 className="text-xl font-bold text-white mb-4">Starter</h3>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold text-white">$2,499</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<p className="text-gray-300 mb-6">Perfect for small businesses beginning their AI adoption journey.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>AI Readiness Assessment</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>10 Hours Monthly Consulting</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Basic AI Tool Implementation</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Monthly Progress Reports</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 minus-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-400">Custom AI Development</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 minus-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-400">Dedicated AI Strategist</span>
</li>
</ul>
<a className="block w-full py-3 px-4 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition" href="#">Start Free Trial</a>
</div>
</div>

<div className="relative card-hover bg-gray-800 border-2 border-blue-500 rounded-2xl overflow-visible transform scale-105 z-10 shadow-xl">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-lg">
          Most Popular
        </div>
<div className="p-8 mt-4">
<h3 className="text-xl font-bold text-white mb-4">Pro</h3>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold text-white">$5,999</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<p className="text-gray-300 mb-6">Comprehensive AI strategy and implementation for growing businesses.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Everything in Starter</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>25 Hours Monthly Consulting</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Dedicated AI Strategist</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Advanced AI Integration</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Weekly Progress Reports</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Basic Custom AI Development</span>
</li>
</ul>
<a className="block w-full py-3 px-4 text-center text-white gradient-bg rounded-lg font-medium transition hover:opacity-90" href="#">Start Free Trial</a>
</div>
</div>

<div className="relative card-hover bg-gray-800 bg-opacity-70 border border-gray-700 rounded-2xl overflow-hidden">
<div className="p-8">
<h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold text-white">Custom</span>
</div>
<p className="text-gray-300 mb-6">Tailored AI transformation for large organizations with complex needs.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Everything in Pro</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Unlimited Consulting Hours</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Full AI Strategy Team</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Advanced Custom AI Development</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>24/7 Priority Support</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 mt-0.5 check-icon" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Enterprise SLAs</span>
</li>
</ul>
<a className="block w-full py-3 px-4 text-center text-white border border-blue-500 hover:bg-blue-500/20 rounded-lg font-medium transition" href="#">Book a Call</a>
</div>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-gray-400">Need a custom solution? Our AI consultants can build a tailored plan for your specific needs.</p>
<a className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300" href="#">
<span>Learn more about our custom solutions</span>
<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</section>

    </>
  );
}
