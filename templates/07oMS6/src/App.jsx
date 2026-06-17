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
      
<div className="max-w-6xl mx-auto w-full">

<div className="text-center mb-12">
<h2 className="text-4xl font-bold mb-3">Choose your perfect plan</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Select the option that works best for you and your team. All plans include a 14-day free trial.</p>
</div>

<div className="flex justify-center items-center mb-10 space-x-3">
<span className="text-gray-300">Monthly</span>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
<span className="translate-x-6 inline-block h-4 w-4 rounded-full bg-white transition"></span>
</button>
<span className="text-gray-300">Annual <span className="text-green-500 text-xs">Save 20%</span></span>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-16">

<div className="bg-[#17181A] rounded-xl p-8 border border-[#26282C] hover:border-[#36383C] transition-all flex flex-col h-full">
<div className="mb-6">
<h3 className="text-xl font-semibold">Starter</h3>
<p className="mt-2 text-gray-400">Perfect for individuals and small projects</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold">$9</span>
<span className="text-gray-400">/month</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>5 projects</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>2 team members</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>5GB storage</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Basic analytics</span>
</li>
<li className="flex items-start text-gray-500">
<svg className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
</svg>
<span>Priority support</span>
</li>
</ul>
<button className="w-full py-3 border border-[#36383C] rounded-lg font-medium hover:bg-[#26282C] transition-colors">
          Get started
        </button>
</div>

<div className="bg-[#17181A] rounded-xl p-8 border border-blue-600 shadow-lg shadow-blue-900/20 relative flex flex-col h-full transform scale-105 z-10">
<div className="absolute -top-4 left-0 right-0 flex justify-center">
<span className="bg-blue-600 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
</div>
<div className="mb-6">
<h3 className="text-xl font-semibold">Pro</h3>
<p className="mt-2 text-gray-400">Best for growing teams and businesses</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold">$29</span>
<span className="text-gray-400">/month</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Unlimited projects</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>10 team members</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>50GB storage</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Advanced analytics</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Priority support</span>
</li>
</ul>
<button className="w-full py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Get started
        </button>
</div>

<div className="bg-[#17181A] rounded-xl p-8 border border-[#26282C] hover:border-[#36383C] transition-all flex flex-col h-full">
<div className="mb-6">
<h3 className="text-xl font-semibold">Enterprise</h3>
<p className="mt-2 text-gray-400">Advanced features for large organizations</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold">$99</span>
<span className="text-gray-400">/month</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Unlimited everything</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Dedicated account manager</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>500GB storage</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Custom reporting</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>24/7 premium support</span>
</li>
</ul>
<button className="w-full py-3 border border-[#36383C] rounded-lg font-medium hover:bg-[#26282C] transition-colors">
          Contact sales
        </button>
</div>
</div>

<div className="overflow-hidden rounded-xl border border-[#26282C]">
<div className="bg-[#17181A] p-6">
<h3 className="text-xl font-semibold">Compare all plan features</h3>
</div>
<table className="w-full">
<thead className="bg-[#1D1E20] text-left">
<tr>
<th className="py-4 px-6 text-gray-400 font-medium">Features</th>
<th className="py-4 px-6 text-gray-400 font-medium">Starter</th>
<th className="py-4 px-6 text-gray-400 font-medium">Pro</th>
<th className="py-4 px-6 text-gray-400 font-medium">Enterprise</th>
</tr>
</thead>
<tbody className="divide-y divide-[#26282C]">
<tr className="bg-[#17181A]">
<td className="py-4 px-6 border-r border-[#26282C]">Projects</td>
<td className="py-4 px-6 border-r border-[#26282C]">5</td>
<td className="py-4 px-6 border-r border-[#26282C]">Unlimited</td>
<td className="py-4 px-6">Unlimited</td>
</tr>
<tr className="bg-[#17181A]">
<td className="py-4 px-6 border-r border-[#26282C]">Team members</td>
<td className="py-4 px-6 border-r border-[#26282C]">2</td>
<td className="py-4 px-6 border-r border-[#26282C]">10</td>
<td className="py-4 px-6">Unlimited</td>
</tr>
<tr className="bg-[#17181A]">
<td className="py-4 px-6 border-r border-[#26282C]">Storage</td>
<td className="py-4 px-6 border-r border-[#26282C]">5GB</td>
<td className="py-4 px-6 border-r border-[#26282C]">50GB</td>
<td className="py-4 px-6">500GB</td>
</tr>
<tr className="bg-[#17181A]">
<td className="py-4 px-6 border-r border-[#26282C]">Support</td>
<td className="py-4 px-6 border-r border-[#26282C]">Email</td>
<td className="py-4 px-6 border-r border-[#26282C]">Priority</td>
<td className="py-4 px-6">24/7 Premium</td>
</tr>
</tbody>
</table>
</div>
</div>

    </>
  );
}
