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
      
<main className="flex-grow flex flex-col items-center justify-center px-4 py-20 text-center">
<div className="max-w-2xl mx-auto">
<span className="inline-block mb-6 rounded-lg" style={{padding: '8px', border: '1px solid rgba(255,255,255,0.1)'}}>
<span className="uppercase tracking-widest text-xs font-bold text-blue-400" style={{letterSpacing: '0.1em'}}>
          Powered by AI
        </span>
</span>
<h1 className="headline mb-4 text-white font-normal">
        Build next-gen products<br/>
        with the 
        <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 bg-clip-text text-transparent font-normal">
          power of AI
        </span>
</h1>
<h2 className="text-lg font-normal mb-6 text-gray-200">
        Go from idea to interactive prototype faster than ever, with AI tools that understand your vision.
      </h2>
<a className="inline-block rounded-lg px-8 py-3 bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 hover:brightness-110 transition text-black font-bold shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200" href="/signup" style={{fontSize: '16px'}}>
        Get Started
      </a>
</div>
<div className="mt-14 flex justify-center">
<img alt="App Preview" className="mx-auto max-w-full w-[500px] md:w-[650px] rounded-xl shadow-2xl border border-gray-800 transition" loading="lazy" src="https://www.launchuicomponents.com/app-dark.png"/>
</div>
</main>

    </>
  );
}
