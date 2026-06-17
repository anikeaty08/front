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
      
<div className="w-full max-w-xl mx-auto shadow-2xl rounded-t-2xl rounded-b-xl bg-[#202235] border border-[#27283c]">

<div className="flex items-center px-8 py-5 border-b border-[#27283c] bg-[#1a1b2d] rounded-t-2xl">
<svg className="w-7 h-7 mr-3" fill="none" viewbox="0 0 40 40">
<rect fill="#23244b" height="36" rx="8" stroke="#35366c" strokeWidth="2" width="36" x="2" y="2"></rect>
<path d="M11 27L25 13M19 27L29 17" stroke="#4e5ba6" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="font-semibold text-[20px] tracking-normal text-[#e7e9f7]">Music Player</span>
<div className="ml-auto flex space-x-2">
<div className="w-3 h-3 rounded-full bg-[#27283c]"></div>
<div className="w-3 h-3 rounded-full bg-[#27283c]"></div>
<div className="w-3 h-3 rounded-full bg-[#27283c]"></div>
</div>
</div>

<div className="flex items-center px-8 pt-7 pb-3 gap-5">
<div className="w-20 h-20 rounded-xl border border-[#27283c] shadow-sm flex items-center justify-center bg-gradient-to-br from-[#4e5ba6] to-[#23244b]">
<svg className="w-9 h-9 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<polygon fill="currentColor" points="6,4 20,12 6,20"></polygon>
</svg>
</div>
<div>
<div className="font-semibold text-[18px] tracking-normal text-[#e7e9f7] mb-0.5 leading-none">One More Time</div>
<div className="text-[16px] font-semibold tracking-normal text-[#8d95c8] mb-0.5 leading-none">Daft Punk</div>
<div className="text-[#575a79] text-[13px] leading-tight">Discovery (2001)</div>
</div>
</div>

<div className="px-8">
<div className="flex items-center justify-between text-[12px] text-[#575a79] font-mono mb-1">
<span>01:38</span>
<span>05:21</span>
</div>
<input className="w-full slider-thumb accent-[#4e5ba6] mb-2" max="100" min="0" type="range" value="32"/>
</div>

<div className="flex items-center justify-between px-8 py-5 gap-6">

<div className="flex items-center gap-6">
<button className="p-2 rounded-lg hover:bg-[#23244b] transition">
<svg className="w-7 h-7 text-[#4e5ba6]" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M16 19l-7-7 7-7"></path>
</svg>
</button>
<button className="p-3 rounded-xl bg-[#4e5ba6] shadow-sm hover:bg-[#353c6e] transition">
<svg className="w-7 h-7 text-white" fill="currentColor" viewbox="0 0 24 24">
<polygon points="6,4 20,12 6,20"></polygon>
</svg>
</button>
<button className="p-2 rounded-lg hover:bg-[#23244b] transition">
<svg className="w-7 h-7 text-[#4e5ba6]" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M8 5l7 7-7 7"></path>
</svg>
</button>
<button className="p-2 rounded-lg hover:bg-[#23244b] transition">
<svg className="w-6 h-6 text-[#575a79]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<rect height="14" rx="1" width="4" x="5" y="5"></rect>
<rect height="14" rx="1" width="4" x="15" y="5"></rect>
</svg>
</button>
<button className="p-2 rounded-lg hover:bg-[#23244b] transition">
<svg className="w-6 h-6 text-[#575a79]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 8v4l3 3"></path>
</svg>
</button>
</div>

<div className="flex items-center space-x-2 min-w-[120px] ml-4">
<svg className="w-5 h-5 text-[#4e5ba6]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M11 5L6 9H2v6h4l5 4V5z"></path>
<path d="M19.07 4.93a10 10 0 010 14.14"></path>
<path d="M15.54 8.46a5 5 0 010 7.07"></path>
</svg>
<input className="slider-thumb accent-[#4e5ba6] w-28" max="100" min="0" type="range" value="70"/>
<span className="text-[13px] text-[#575a79] font-semibold">VOL</span>
</div>
</div>

<div className="flex px-8 pb-7 pt-3 items-start gap-5">

<div className="flex-1 bg-[#171728] rounded-xl shadow-sm border border-[#27283c] overflow-auto h-36">
<ul className="divide-y divide-[#23244b]">
<li className="flex items-center px-3 py-2 bg-[#23244b]">
<svg className="w-4 h-4 mr-2 text-[#4e5ba6]" fill="currentColor" viewbox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>
<span className="font-semibold text-[16px] tracking-normal text-[#4e5ba6]">One More Time</span>
<span className="ml-auto text-[#8d95c8] text-[13px] font-normal">Daft Punk</span>
</li>
<li className="flex items-center px-3 py-2 hover:bg-[#23244b] cursor-pointer transition">
<span className="w-4 h-4 mr-2"></span>
<span className="font-semibold text-[16px] tracking-normal text-[#e7e9f7]">Digital Love</span>
<span className="ml-auto text-[#575a79] text-[13px] font-normal">Daft Punk</span>
</li>
<li className="flex items-center px-3 py-2 hover:bg-[#23244b] cursor-pointer transition">
<span className="w-4 h-4 mr-2"></span>
<span className="font-semibold text-[16px] tracking-normal text-[#e7e9f7]">Harder, Better, Faster, Stronger</span>
<span className="ml-auto text-[#575a79] text-[13px] font-normal">Daft Punk</span>
</li>
<li className="flex items-center px-3 py-2 hover:bg-[#23244b] cursor-pointer transition">
<span className="w-4 h-4 mr-2"></span>
<span className="font-semibold text-[16px] tracking-normal text-[#e7e9f7]">Aerodynamic</span>
<span className="ml-auto text-[#575a79] text-[13px] font-normal">Daft Punk</span>
</li>
<li className="flex items-center px-3 py-2 hover:bg-[#23244b] cursor-pointer transition">
<span className="w-4 h-4 mr-2"></span>
<span className="font-semibold text-[16px] tracking-normal text-[#e7e9f7]">Something About Us</span>
<span className="ml-auto text-[#575a79] text-[13px] font-normal">Daft Punk</span>
</li>
</ul>
</div>
</div>
</div>

    </>
  );
}
