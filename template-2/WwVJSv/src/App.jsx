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



    document.addEventListener('DOMContentLoaded', function() {
      // Basic Plan Visualization
      VANTA.DOTS({
        el: "#vanta-basic",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,
        color2: 0x4b5563,
        backgroundColor: 0x030712,
        size: 3,
        spacing: 30,
      });
      
      // Pro Plan Visualization
      VANTA.DOTS({
        el: "#vanta-pro",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe5e7eb,
        color2: 0x9ca3af,
        backgroundColor: 0x030712,
        size: 3.5,
        spacing: 25,
      });
      
      // Enterprise Plan Visualization
      VANTA.DOTS({
        el: "#vanta-enterprise",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,
        color2: 0x6b7280,
        backgroundColor: 0x030712,
        size: 4,
        spacing: 20,
      });
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
      
<div className="max-w-6xl w-full mx-auto py-16">

<div className="text-center mb-12">
<span className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 mb-3 inline-block">PRICING OPTIONS</span>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Choose Your Plan</h2>
<div className="h-1 w-16 bg-gray-400 mx-auto mt-2 mb-4 rounded-full"></div>
<p className="text-gray-400 max-w-2xl mx-auto">Select the perfect plan for your needs with our flexible pricing options. All plans include our core features with different resource allocations.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full relative">
<div className="h-24 relative" id="vanta-basic">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 mb-1 inline-block">STARTER</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow bg-gray-900">
<h3 className="text-xl font-semibold text-gray-200 mb-2">Basic Plan</h3>
<div className="flex items-baseline mb-5">
<span className="text-3xl font-bold text-white">$29</span>
<span className="text-gray-400 ml-1">/month</span>
</div>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">Perfect for small projects and individual developers getting started.</p>
<div className="space-y-3 mb-6">
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">2 Data Centers</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">10 Edge Nodes</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">99.5% Uptime SLA</span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-gray-800">
<button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition flex items-center justify-center">
              Select Plan
            </button>
</div>
</div>
</div>

<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700 flex flex-col h-full relative transform scale-105 z-10">
<div className="absolute top-0 right-0 bg-gray-200 text-gray-900 text-xs font-semibold px-3 py-1 rounded-bl-lg">POPULAR</div>
<div className="h-24 relative" id="vanta-pro">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 mb-1 inline-block">PROFESSIONAL</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow bg-gray-900">
<h3 className="text-xl font-semibold text-gray-200 mb-2">Pro Plan</h3>
<div className="flex items-baseline mb-5">
<span className="text-3xl font-bold text-white">$79</span>
<span className="text-gray-400 ml-1">/month</span>
</div>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">Ideal for growing businesses with moderate resource requirements.</p>
<div className="space-y-3 mb-6">
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">5 Data Centers</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">50 Edge Nodes</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">99.9% Uptime SLA</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">Priority Support</span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-gray-800">
<button className="w-full py-3 bg-gray-200 hover:bg-white text-gray-900 font-medium rounded-lg transition flex items-center justify-center">
              Select Plan
            </button>
</div>
</div>
</div>

<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full relative">
<div className="h-24 relative" id="vanta-enterprise">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 mb-1 inline-block">ENTERPRISE</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow bg-gray-900">
<h3 className="text-xl font-semibold text-gray-200 mb-2">Enterprise Plan</h3>
<div className="flex items-baseline mb-5">
<span className="text-3xl font-bold text-white">$199</span>
<span className="text-gray-400 ml-1">/month</span>
</div>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">For organizations requiring maximum performance and dedicated resources.</p>
<div className="space-y-3 mb-6">
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">12 Data Centers</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">128 Edge Nodes</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">99.99% Uptime SLA</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">24/7 Dedicated Support</span>
</div>
<div className="flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
<span className="text-gray-300 text-sm">Custom Implementation</span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-gray-800">
<button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition flex items-center justify-center">
              Contact Sales
            </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
