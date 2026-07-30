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
      
<div className="max-w-6xl mx-auto">

<div className="text-center mb-12">
<h1 className="text-3xl font-semibold mb-2">Choose your plan</h1>
<p className="text-gray-400">Select the perfect plan for your team's needs with our flexible options.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-xl border border-[#1f2837] bg-[#12121a] overflow-hidden">

<div className="p-6 border-b border-[#1f2837]">
<div className="text-lg font-medium mb-2">Free</div>
<div className="text-2xl font-bold mb-2">$0</div>
<div className="text-sm text-gray-400">Forever</div>
</div>

<div className="p-6 border-b border-[#1f2837] bg-[#0f1015]">
<span className="text-xs text-gray-500 uppercase font-medium">Core Features</span>
</div>

<div className="divide-y divide-[#1f2837]">
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Team members</span>
<span className="text-gray-300">Up to 3</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Projects</span>
<span className="text-gray-300">5</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Storage</span>
<span className="text-gray-300">500 MB</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">History & activity</span>
<span className="text-gray-300">30 days</span>
</div>
</div>

<div className="p-6 border-b border-[#1f2837] bg-[#0f1015]">
<span className="text-xs text-gray-500 uppercase font-medium">Advanced Features</span>
</div>

<div className="divide-y divide-[#1f2837]">
<div className="p-5 flex justify-between items-center">
<span className="text-sm">API access</span>
<span className="text-gray-400">—</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Custom fields</span>
<span className="text-gray-300">3</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Priority support</span>
<span className="text-gray-400">—</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Advanced analytics</span>
<span className="text-gray-400">—</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">SSO & SAML</span>
<span className="text-gray-400">—</span>
</div>
</div>

<div className="p-6">
<button className="w-full py-2 px-4 border border-[#374151] text-white rounded-md hover:bg-[#1f2837] transition-colors">
                        Get started
                    </button>
</div>
</div>

<div className="rounded-xl border border-[#1f2837] bg-[#12121a] overflow-hidden relative">

<div className="absolute top-0 right-0 left-0 h-1 bg-indigo-600"></div>

<div className="p-6 border-b border-[#1f2837]">
<div className="text-lg font-medium mb-2">Pro</div>
<div className="text-2xl font-bold mb-2">$12</div>
<div className="text-sm text-gray-400">per user / month</div>
<div className="mt-2">
<span className="inline-block px-2 py-1 text-xs text-indigo-300 bg-indigo-900 bg-opacity-50 rounded-full">Popular</span>
</div>
</div>

<div className="p-6 border-b border-[#1f2837] bg-[#10142a]">
<span className="text-xs text-gray-500 uppercase font-medium">Core Features</span>
</div>

<div className="divide-y divide-[#1f2837]">
<div className="p-5 flex justify-between items-center bg-[#10142a]">
<span className="text-sm">Team members</span>
<span className="text-gray-300">Up to 25</span>
</div>
<div className="p-5 flex justify-between items-center bg-[#10142a]">
<span className="text-sm">Projects</span>
<span className="text-gray-300">Unlimited</span>
</div>
<div className="p-5 flex justify-between items-center bg-[#10142a]">
<span className="text-sm">Storage</span>
<span className="text-gray-300">10 GB</span>
</div>
<div className="p-5 flex justify-between items-center bg-[#10142a]">
<span className="text-sm">History & activity</span>
<span className="text-gray-300">1 year</span>
</div>
</div>

<div className="p-6 border-b border-[#1f2837] bg-[#10142a]">
<span className="text-xs text-gray-500 uppercase font-medium">Advanced Features</span>
</div>

<div className="divide-y divide-[#1f2837]">
<div className="p-5 flex justify-between items-center bg-[#10142a]">
<span className="text-sm">API access</span>
<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
</div>
<div className="p-5 flex justify-between items-center bg-[#10142a]">
<span className="text-sm">Custom fields</span>
<span className="text-gray-300">50</span>
</div>
<div className="p-5 flex justify-between items-center bg-[#10142a]">
<span className="text-sm">Priority support</span>
<span className="text-gray-400">—</span>
</div>
<div className="p-5 flex justify-between items-center bg-[#10142a]">
<span className="text-sm">Advanced analytics</span>
<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
</div>
<div className="p-5 flex justify-between items-center bg-[#10142a]">
<span className="text-sm">SSO & SAML</span>
<span className="text-gray-400">—</span>
</div>
</div>

<div className="p-6 bg-[#10142a]">
<button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                        Get started
                    </button>
</div>
</div>

<div className="rounded-xl border border-[#1f2837] bg-[#12121a] overflow-hidden">

<div className="p-6 border-b border-[#1f2837]">
<div className="text-lg font-medium mb-2">Enterprise</div>
<div className="text-2xl font-bold mb-2">$49</div>
<div className="text-sm text-gray-400">per user / month</div>
</div>

<div className="p-6 border-b border-[#1f2837] bg-[#0f1015]">
<span className="text-xs text-gray-500 uppercase font-medium">Core Features</span>
</div>

<div className="divide-y divide-[#1f2837]">
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Team members</span>
<span className="text-gray-300">Unlimited</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Projects</span>
<span className="text-gray-300">Unlimited</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Storage</span>
<span className="text-gray-300">Unlimited</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">History & activity</span>
<span className="text-gray-300">Unlimited</span>
</div>
</div>

<div className="p-6 border-b border-[#1f2837] bg-[#0f1015]">
<span className="text-xs text-gray-500 uppercase font-medium">Advanced Features</span>
</div>

<div className="divide-y divide-[#1f2837]">
<div className="p-5 flex justify-between items-center">
<span className="text-sm">API access</span>
<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Custom fields</span>
<span className="text-gray-300">Unlimited</span>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Priority support</span>
<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">Advanced analytics</span>
<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
</div>
<div className="p-5 flex justify-between items-center">
<span className="text-sm">SSO & SAML</span>
<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
</div>
</div>

<div className="p-6">
<button className="w-full py-2 px-4 border border-[#374151] text-white rounded-md hover:bg-[#1f2837] transition-colors">
                        Contact sales
                    </button>
</div>
</div>

<div className="rounded-xl border border-[#1f2837] bg-[#12121a] overflow-hidden">

<div className="p-6 border-b border-[#1f2837]">
<div className="text-lg font-medium mb-2">Custom</div>
<div className="text-2xl font-bold mb-2">Custom</div>
<div className="text-sm text-gray-400">Tailored solution</div>
</div>
<div className="p-6 flex items-center justify-center h-[400px]">
<div className="text-center">
<p className="text-gray-400 mb-6">Need a custom solution for your enterprise?</p>
<button className="py-2 px-6 border border-[#374151] text-white rounded-md hover:bg-[#1f2837] transition-colors">
                            Talk to our team
                        </button>
</div>
</div>
</div>
</div>

<div className="mt-10 text-center">
<a className="text-indigo-400 hover:text-indigo-300" href="#">Learn more</a> about our plans and features
        </div>
</div>

    </>
  );
}
