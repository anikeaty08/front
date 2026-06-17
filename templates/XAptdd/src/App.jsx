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
      
<div className="card max-w-[320px] min-w-[230px] w-[296px] rounded-[20px] overflow-hidden flex flex-col">
<div className="phone-container bg-[#1E2130]">
<div className="relative w-[180px]">
<div className="phone-body absolute w-[180px] h-[320px] rounded-[28px] top-[-70px] left-0"></div>
<div className="screen-shape absolute top-[-63px] left-[7px] w-[166px] h-[306px] rounded-[20px]">
<div className="screen-content w-full h-full rounded-[18px]">
<div className="h-[20px] w-full bg-black bg-opacity-40 flex justify-between items-center px-3">
<div className="text-white text-[8px] font-medium">9:41</div>
<div className="flex space-x-1">
<svg fill="none" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="white" fillOpacity="0.8"></path>
</svg>
<svg fill="none" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" fill="white" fillOpacity="0.8"></path>
</svg>
<svg fill="none" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17h10V7H7v10zm2-8h6v6H9V9z" fill="white" fillOpacity="0.8"></path>
</svg>
</div>
</div>
<div className="pt-2 px-3">
<div className="flex justify-between items-center mb-3">
<div className="text-white text-[10px] font-semibold">Design Courses</div>
<div className="w-[18px] h-[18px] rounded-full bg-white bg-opacity-10 flex items-center justify-center">
<svg fill="none" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" fill="white"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="h-[40px] rounded-md bg-white bg-opacity-10"></div>
<div className="h-[40px] rounded-md bg-white bg-opacity-10"></div>
<div className="h-[40px] rounded-md bg-white bg-opacity-10"></div>
<div className="h-[40px] rounded-md bg-white bg-opacity-10"></div>
</div>
<div className="mt-4 h-[80px] rounded-lg bg-black bg-opacity-30 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-lg overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-indigo-900/30"></div>
</div>
<div className="text-white text-[10px] opacity-70">Video Tutorial</div>
</div>
</div>
</div>
</div>

<svg className="phone-outline" viewbox="0 0 180 320" xmlns="http://www.w3.org/2000/svg">
<rect height="318" rx="28" ry="28" width="178" x="1" y="1"></rect>
</svg>
<div className="absolute top-[80px] left-[60px] z-20">
<div className="play-button w-[60px] h-[60px] rounded-[16px] flex items-center justify-center">
<div className="w-[24px] h-[24px] flex items-center justify-center">
<svg fill="none" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7L8 5z" fill="white"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#1a1b22] to-transparent"></div>
</div>
<div className="content-container flex flex-col items-center px-5 pt-5 pb-6 space-y-5">
<div className="flex flex-col items-center space-y-2">
<h3 className="text-white text-lg font-semibold text-center">Learn and Grow</h3>
<p className="text-white text-sm opacity-70 text-center leading-snug">
                    Access guides and resources to enhance your design skills and advance your career
                </p>
</div>
<div className="w-full">
<button className="blue-button w-full rounded-[14px] py-3 flex items-center justify-center">
<span className="text-white text-sm font-medium">Explore Resources</span>
</button>
</div>
</div>
</div>

    </>
  );
}
