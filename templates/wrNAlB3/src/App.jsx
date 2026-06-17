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
      
<div className="container mx-auto px-4 py-12 max-w-[800px]">
<h2 className="text-2xl font-light tracking-tight text-center mb-10">Key Features</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-white border border-gray-100 rounded-lg overflow-hidden transition-all hover:border-[#5E6AD2]/30 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
<div className="aspect-w-16 aspect-h-9 bg-[#F8F9FE] p-4">
<div className="w-full h-full">

<div className="flex space-x-2">
<div className="w-24 h-6 bg-[#5E6AD2]/10 rounded"></div>
<div className="w-16 h-6 bg-[#5E6AD2]/10 rounded"></div>
</div>
<div className="mt-3 flex space-x-1">
<div className="w-3 h-3 bg-[#5E6AD2]/30 rounded-full"></div>
<div className="w-3 h-3 bg-[#5E6AD2]/20 rounded-full"></div>
<div className="w-3 h-3 bg-[#5E6AD2]/10 rounded-full"></div>
</div>
<div className="mt-3 flex flex-col space-y-1">
<div className="w-full h-2 bg-[#5E6AD2]/10 rounded"></div>
<div className="w-5/6 h-2 bg-[#5E6AD2]/10 rounded"></div>
<div className="w-4/6 h-2 bg-[#5E6AD2]/10 rounded"></div>
</div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#5E6AD2]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Lightning Fast Performance</h3>
</div>
<p className="text-gray-600 mb-3 text-xs leading-relaxed">
            Experience sub-second load times with our optimized architecture. Our platform uses edge caching, lazy loading, and intelligent prefetching to deliver content instantly.
          </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#5E6AD2]/20 text-[#5E6AD2]">99.9% Uptime</span>
<span className="px-1.5 py-0.5 rounded-full border border-[#5E6AD2]/20 text-[#5E6AD2]">Global CDN</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-all hover:border-[#5E6AD2]/30 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
<div className="aspect-w-16 aspect-h-9 bg-[#F8F9FE] p-4">
<div className="w-full h-full">

<div className="flex justify-center items-center h-full">
<div className="w-12 h-12 bg-[#5E6AD2]/20 rounded-full flex items-center justify-center">
<div className="w-6 h-6 bg-[#5E6AD2]/40 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#5E6AD2]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Enterprise Security</h3>
</div>
<p className="text-gray-600 mb-3 text-xs leading-relaxed">
            SOC 2 Type II certified with AES-256 encryption at rest and in transit.
          </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#5E6AD2]/20 text-[#5E6AD2]">GDPR</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-all hover:border-[#5E6AD2]/30 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
<div className="aspect-w-16 aspect-h-9 bg-[#F8F9FE] p-4">
<div className="w-full h-full">

<div className="flex flex-col space-y-2">
<div className="w-full h-3 bg-[#5E6AD2]/10 rounded"></div>
<div className="grid grid-cols-3 gap-1">
<div className="h-6 bg-[#5E6AD2]/20 rounded"></div>
<div className="h-6 bg-[#5E6AD2]/15 rounded"></div>
<div className="h-6 bg-[#5E6AD2]/10 rounded"></div>
</div>
</div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#5E6AD2]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Customizable</h3>
</div>
<p className="text-gray-600 mb-3 text-xs leading-relaxed">
            Build your own workflows with our visual editor. Create custom fields and templates.
          </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#5E6AD2]/20 text-[#5E6AD2]">No-code</span>
</div>
</div>
</div>

<div className="md:col-span-2 bg-white border border-gray-100 rounded-lg overflow-hidden transition-all hover:border-[#5E6AD2]/30 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
<div className="aspect-w-16 aspect-h-9 bg-[#F8F9FE] p-4">
<div className="w-full h-full">

<div className="grid grid-cols-3 gap-2 h-full">
<div className="col-span-2 bg-[#5E6AD2]/10 rounded p-2">
<div className="w-1/2 h-2 bg-[#5E6AD2]/20 rounded mb-1"></div>
<div className="w-full h-1 bg-[#5E6AD2]/20 rounded mb-1"></div>
<div className="w-3/4 h-1 bg-[#5E6AD2]/20 rounded"></div>
</div>
<div className="flex flex-col space-y-2">
<div className="flex-1 bg-[#5E6AD2]/20 rounded"></div>
<div className="flex-1 bg-[#5E6AD2]/15 rounded"></div>
</div>
</div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#5E6AD2]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Collaborative Workspace</h3>
</div>
<p className="text-gray-600 mb-3 text-xs leading-relaxed">
            Work together in real-time with presence indicators, cursor tracking, and live updates. Comments and @mentions keep everyone in the loop.
          </p>
<div className="flex flex-wrap text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#5E6AD2]/20 text-[#5E6AD2]">Real-time</span>
<span className="px-1.5 py-0.5 rounded-full border border-[#5E6AD2]/20 text-[#5E6AD2]">Version History</span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
