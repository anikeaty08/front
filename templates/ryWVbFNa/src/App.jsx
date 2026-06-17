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
      
<div className="max-w-md w-full bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
<div className="p-6">
<h2 className="text-2xl font-medium text-white mb-3">Feature Card</h2>
<p className="text-gray-300 mb-6">This elegant card showcases a beautiful wave animation button that responds to user interaction.</p>
<div className="flex justify-center mt-4 mb-2">
<a className="w-[200px] px-8 py-5 block relative overflow-hidden hover:no-underline group border border-gray-600 rounded-lg" href="javascript:void(0)">
<span className="relative z-10 text-white tracking-[5px] text-sm font-medium text-center block">SIGN UP</span>
<div className="wave w-[200px] h-[200px] bg-[#444857] shadow-inner shadow-black/50 absolute left-0 top-[-80px] transition-all duration-400 group-hover:top-[-120px] before:content-[''] before:w-[200%] before:h-[200%] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-3/4 before:rounded-[45%] before:bg-[rgba(20,20,20,1)] before:animate-[wave_5s_linear_infinite] after:content-[''] after:w-[200%] after:h-[200%] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-3/4 after:rounded-[40%] after:bg-[rgba(20,20,20,0.5)] after:animate-[wave_10s_linear_infinite]"></div>
</a>
</div>
<div className="mt-8 text-sm text-gray-400">
<p>Experience the mesmerizing wave animation when you hover over the button above.</p>
</div>
</div>
<div className="bg-gray-700 px-6 py-4 border-t border-gray-600">
<p className="text-gray-300 text-sm">Created with elegant design and advanced animation techniques.</p>
</div>
</div>

    </>
  );
}
