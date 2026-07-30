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
      
<div className="w-72 h-96 bg-gray-900 rounded-xl shadow-2xl overflow-hidden relative">
<div className="absolute inset-0 bg-black bg-opacity-80"></div>
<div className="absolute inset-0">
<div className="absolute h-1 w-1 bg-white rounded-full top-[15%] left-[20%] opacity-70"></div>
<div className="absolute h-1 w-1 bg-white rounded-full top-[45%] left-[80%] opacity-60"></div>
<div className="absolute h-1 w-1 bg-white rounded-full top-[65%] left-[35%] opacity-80"></div>
<div className="absolute h-1 w-1 bg-white rounded-full top-[25%] left-[60%] opacity-50"></div>
<div className="absolute h-1 w-1 bg-white rounded-full top-[75%] left-[75%] opacity-70"></div>
<div className="absolute h-[2px] w-[2px] bg-white rounded-full top-[55%] left-[15%] opacity-90"></div>
<div className="absolute h-[2px] w-[2px] bg-white rounded-full top-[85%] left-[50%] opacity-80"></div>
<div className="absolute h-[2px] w-[2px] bg-white rounded-full top-[10%] left-[40%] opacity-70"></div>
<div className="absolute h-[2px] w-[2px] bg-white rounded-full top-[35%] left-[25%] opacity-60"></div>
</div>
<div className="shooting-star" style={{top: `10%`, right: `10%`, animationDelay: `0s`}}>
<div className="star-tail"></div>
</div>
<div className="shooting-star" style={{top: `5%`, right: `30%`, animationDelay: `0.5s`}}>
<div className="star-tail"></div>
</div>
<div className="shooting-star" style={{top: `15%`, right: `50%`, animationDelay: `1s`}}>
<div className="star-tail"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between p-6">
<div>
<h3 className="text-white text-xl font-semibold tracking-wider">NIGHT SKY</h3>
<p className="text-gray-400 mt-2 text-sm">Wishing upon stars</p>
</div>
<div className="border-t border-gray-700 pt-4">
<p className="text-gray-300 text-sm">Each shooting star carries a wish across the endless canvas of the night.</p>
<div className="mt-4 flex justify-end">
<button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded transition duration-300">
            Make a Wish
          </button>
</div>
</div>
</div>
</div>

    </>
  );
}
