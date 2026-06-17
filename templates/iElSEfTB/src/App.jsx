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

<header className="mb-10 flex justify-between items-center">
<div>
<h1 className="text-[32px] font-normal tracking-tight" style={{fontFamily: 'Inter, sans-serif'}}>Tesla Model 3</h1>
<p className="text-[#8a8a8a] text-[14px] font-normal mt-1" style={{fontFamily: 'Inter, sans-serif'}}>Connected • Last updated 2 minutes ago</p>
</div>
<div className="bg-[#1c1c1c] px-4 py-2 rounded-full text-[14px]">
        Parked • Home
      </div>
</header>

<div className="grid grid-cols-6 grid-rows-3 gap-6 h-[600px] md:h-[540px]">

<div className="row-span-3 col-span-2 bg-[#18181a] rounded-3xl p-8 flex flex-col justify-between border border-[#252528] shadow-xl">
<div>
<h2 className="text-[20px] font-normal tracking-tight mb-3" style={{fontFamily: 'Inter, sans-serif'}}>Battery Status</h2>
<div className="flex items-end gap-2">
<span className="text-[48px] sm:text-[56px] font-normal leading-none tracking-tight">76</span>
<span className="text-[24px] text-[#8a8a8a] mb-1">%</span>
</div>
</div>
<div className="mt-8">
<div className="h-2 bg-[#252528] rounded-full overflow-hidden mb-2">
<div className="h-full bg-[#2dd4bf] rounded-full" style={{width: '76%'}}></div>
</div>
<div className="flex justify-between text-[#8a8a8a] text-[13px] font-normal">
<span>267 miles range</span>
<span>3h 15m to full charge</span>
</div>
</div>
</div>

<div className="col-span-2 row-span-1 bg-[#141414] rounded-3xl p-6 flex flex-col border border-[#1c1c1c]">
<div className="flex justify-between">
<div>
<h3 className="text-[18px] font-normal tracking-tight mb-1" style={{fontFamily: 'Inter, sans-serif'}}>Current Speed</h3>
<div className="flex items-end gap-2">
<span className="text-[36px] font-normal leading-none">65</span>
<span className="text-[18px] text-[#8a8a8a] mb-[2px]">mph</span>
</div>
</div>
<div>
<h3 className="text-[18px] font-normal tracking-tight mb-1" style={{fontFamily: 'Inter, sans-serif'}}>Cabin</h3>
<div className="flex items-end gap-2">
<span className="text-[36px] font-normal leading-none">72</span>
<span className="text-[18px] text-[#8a8a8a] mb-[2px]">°F</span>
</div>
</div>
</div>
</div>

<div className="col-span-2 row-span-1 bg-[#141414] rounded-3xl p-6 flex flex-col border border-[#1c1c1c]">
<h3 className="text-[16px] font-normal mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Driving Conditions</h3>
<div className="flex justify-between text-[14px] text-[#8a8a8a] mt-2">
<div>Eco mode: <span className="text-[#e2e2e2] font-normal">Active</span></div>
<div>A/C: <span className="text-[#e2e2e2] font-normal">On</span></div>
</div>
</div>

<div className="row-span-2 col-span-1 bg-[#141414] rounded-3xl p-6 flex flex-col border border-[#1c1c1c]">
<h3 className="text-[18px] font-normal mb-4" style={{fontFamily: 'Inter, sans-serif'}}>Trip</h3>
<div className="space-y-5">
<div>
<p className="text-[12px] text-[#8a8a8a] mb-1">Distance</p>
<p className="text-[24px] font-normal leading-none">42.5 <span className="text-[14px] ml-1">mi</span></p>
</div>
<div>
<p className="text-[12px] text-[#8a8a8a] mb-1">Duration</p>
<p className="text-[24px] font-normal leading-none">1h 12m</p>
</div>
<div>
<p className="text-[12px] text-[#8a8a8a] mb-1">Efficiency</p>
<p className="text-[24px] font-normal leading-none">4.1 mi/kWh</p>
</div>
</div>
</div>

<div className="row-span-2 col-span-2 bg-[#18181a] rounded-3xl p-6 flex flex-col items-center border border-[#252528] justify-center">
<svg height="130" viewbox="0 0 160 160" width="130">
<circle cx="80" cy="80" fill="none" r="70" stroke="#252528" strokeWidth="12"></circle>
<circle className="gauge-ring" cx="80" cy="80" fill="none" r="70" stroke="#2dd4bf" stroke-dasharray="314" stroke-dashoffset="78.5" strokeWidth="12"></circle>
<text fill="#e2e2e2" fontSize="30" font-weight="500" style={{fontFamily: 'Inter, sans-serif'}} text-anchor="middle" x="80" y="75">65</text>
<text fill="#8a8a8a" fontSize="14" style={{fontFamily: 'Inter, sans-serif'}} text-anchor="middle" x="80" y="97">mph</text>
</svg>
<p className="text-[#8a8a8a] text-[13px] mt-3">Speed Limit: 70 mph</p>
</div>

<div className="row-span-2 col-span-1 bg-[#141414] rounded-3xl p-6 border border-[#1c1c1c] flex flex-col">
<h3 className="text-[18px] font-normal mb-3" style={{fontFamily: 'Inter, sans-serif'}}>Tire PSI</h3>
<div className="grid grid-cols-2 gap-3">
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1c1c1c] mb-1">
<span className="text-[18px] font-normal">36</span>
</div>
<p className="text-[12px] text-[#8a8a8a]">FL</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1c1c1c] mb-1">
<span className="text-[18px] font-normal">36</span>
</div>
<p className="text-[12px] text-[#8a8a8a]">FR</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1c1c1c] mb-1">
<span className="text-[18px] font-normal">35</span>
</div>
<p className="text-[12px] text-[#8a8a8a]">RL</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1c1c1c] mb-1">
<span className="text-[18px] font-normal">35</span>
</div>
<p className="text-[12px] text-[#8a8a8a]">RR</p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
