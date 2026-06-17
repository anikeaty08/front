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
      VANTA.DOTS({
        el: "#vanta-performance",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 160,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,
        color2: 0x4b5563,
        backgroundColor: 0x030712,
        size: 3,
        spacing: 30,
      });
      
      VANTA.DOTS({
        el: "#vanta-security",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 160,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe5e7eb,
        color2: 0x9ca3af,
        backgroundColor: 0x030712,
        size: 3.5,
        spacing: 25,
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
      
<div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

<div className="text-center mb-12">
<span className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 mb-3 inline-block">FEATURES</span>
<h2 className="text-3xl font-bold text-white mb-3">Powerful Features</h2>
<div className="h-1 w-16 bg-gray-400 mx-auto mt-2 mb-4 rounded-full"></div>
<p className="text-gray-400 max-w-2xl mx-auto">Discover the cutting-edge capabilities that set our platform apart.</p>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">

<div className="col-span-3 md:col-span-2 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col">
<div className="h-40 relative" id="vanta-performance"></div>
<div className="p-5 bg-gray-900">
<h3 className="text-lg font-semibold text-white mb-2">Unmatched Speed and Reliability</h3>
<p className="text-gray-400 text-sm mb-3">Our distributed infrastructure delivers lightning-fast response times with 99.99% uptime, automatically scaling to meet demand spikes.</p>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-2">
<span className="text-gray-300 text-xs font-semibold">50x</span>
</div>
<span className="text-gray-300 text-xs">Faster response time</span>
</div>
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-2">
<span className="text-gray-300 text-xs font-semibold">99.9%</span>
</div>
<span className="text-gray-300 text-xs">Uptime SLA</span>
</div>
</div>
</div>
</div>

<div className="col-span-3 md:col-span-1 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 p-5">
<div className="h-12 w-12 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
<svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">High Performance</h3>
<p className="text-gray-400 text-sm">Our platform is optimized for speed and efficiency under heavy loads.</p>
</div>
</div>

<div className="grid grid-cols-3 gap-4">

<div className="col-span-3 md:col-span-2 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col">
<div className="h-40 relative" id="vanta-security"></div>
<div className="p-5 bg-gray-900">
<h3 className="text-lg font-semibold text-white mb-2">Advanced Security Framework</h3>
<p className="text-gray-400 text-sm mb-3">Multiple layers of protection, from encryption to intelligent threat detection and prevention mechanisms.</p>
<div className="grid grid-cols-3 gap-2">
<div className="bg-gray-800/60 p-2 rounded-lg">
<div className="text-gray-300 text-xs font-medium mb-1">Encryption</div>
<div className="text-gray-400 text-xs">256-bit AES</div>
</div>
<div className="bg-gray-800/60 p-2 rounded-lg">
<div className="text-gray-300 text-xs font-medium mb-1">Compliance</div>
<div className="text-gray-400 text-xs">GDPR, HIPAA</div>
</div>
<div className="bg-gray-800/60 p-2 rounded-lg">
<div className="text-gray-300 text-xs font-medium mb-1">Monitoring</div>
<div className="text-gray-400 text-xs">24/7 Active</div>
</div>
</div>
</div>
</div>

<div className="col-span-3 md:col-span-1 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 p-5">
<div className="h-12 w-12 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
<svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
<p className="text-gray-400 text-sm">Bank-level security protocols and compliance with international standards.</p>
</div>
</div>
</div>


    </>
  );
}
