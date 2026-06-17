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
            geist: ['Geist', 'sans-serif'],
          },
          colors: {
            dotbg: '#18181b',
            dot: '#27272a',
            card: '#131313',
            outline: '#232327',
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
      
<main className="w-auto min-w-80 max-w-md text-white bg-card border-outline border rounded-xl px-12 py-12 shadow-2xl rotate-3 skew-x-3 skew-y-3">
<section className="mb-8">
<p className="leading-relaxed before:content-['\201C'] before:text-gray-500 after:content-['\201D'] after:text-gray-500 text-2xl font-medium text-white"> Innovation distinguishes between a leader and a follower.</p>
</section>
<section className="flex items-center pt-6 mt-3 border-t border-outline">
<div className="w-10 h-10 overflow-hidden ring-2 ring-outline rounded-full">
</div>
<div className="ml-4 flex flex-col">
<span className="text-sm font-semibold text-white">Steve Jobs</span>
<span className="text-xs text-gray-400 mt-0.5">Co-founder of Apple</span>
</div>
</section>
</main>

    </>
  );
}
