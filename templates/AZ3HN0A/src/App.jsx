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



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'geist': ['Geist', 'system-ui', 'sans-serif'],
                        'sans': ['system-ui', '-apple-system', 'sans-serif']
                    }
                }
            }
        }
    
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
      
<div className="w-96 h-80 gradient-border relative beautiful-shadow rounded-3xl" style={{padding: '1px'}}>

<div className="z-10 w-full h-full rounded-lg gradient-card grid-pattern flex flex-col relative text-white overflow-hidden">

<div className="w-56 h-11 rounded-full absolute ray-effect top-0 left-0"></div>


<div className="flex-1 flex flex-col items-center justify-center relative z-20 font-geist">
<div className="gradient-text text-5xl font-normal tracking-tighter font-geist bg-gradient-to-br from-[#fff] to-[#999] mb-2">12.5k</div>
<div className="text-base text-gray-300 mb-4">Total Messages</div>

<div className="flex gap-6 text-center">
<div className="">
<div className="text-3xl text-white font-geist">847</div>
<div className="text-sm text-neutral-400">Today</div>
</div>
<div className="w-px h-10 bg-gray-600"></div>
<div className="">
<div className="text-3xl text-white font-geist">2.3k</div>
<div className="text-sm text-neutral-400">This Week</div>
</div>
</div>
</div>

<div className="relative z-20 font-geist border-gray-700/50 border-t px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 bg-neutral-100 border-gray-800 border-2 rounded-full"></div>
<div className="w-6 h-6 bg-neutral-100 border-gray-800 border-2 rounded-full"></div>
<div className="w-6 h-6 bg-neutral-100 border-gray-800 border-2 rounded-full"></div>
</div>
<span className="text-sm text-neutral-400 ml-2">+35 active users</span>
</div>
<div className="flex items-center gap-1">
<div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
<div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
<div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
