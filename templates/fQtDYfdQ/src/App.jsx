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
      
<main className="w-full max-w-md bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col gap-8">
<header className="mb-2">
<h1 className="text-2xl font-bold text-gray-900 mb-2">Build Your Plan</h1>
<p className="text-gray-500">Set your details to generate a custom workout plan. Simple steps lead to big progress.</p>
</header>
<section className="flex flex-col gap-6">
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col items-center bg-gray-50 rounded-lg border border-gray-100 py-4">
<span className="text-xs text-gray-400 mb-1">AGE</span>
<span className="text-xl font-semibold text-gray-800">21</span>
</div>
<div className="flex flex-col items-center bg-gray-50 rounded-lg border border-gray-100 py-4">
<span className="text-xs text-gray-400 mb-1">HEIGHT</span>
<span className="text-xl font-semibold text-gray-800">160<span className="ml-1 text-xs text-gray-400">cm</span></span>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs text-gray-400 mb-1">
<span>BPM</span>
<span>89</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-gray-900 h-2 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</section>
<div className="flex flex-col gap-3 mt-2">
<button className="w-full py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition">Get Started</button>
<button className="w-full py-3 rounded-full bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition">Let's Go</button>
</div>
</main>

    </>
  );
}
