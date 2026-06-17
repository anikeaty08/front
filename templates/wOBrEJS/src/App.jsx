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
      
<div className="bg-gradient-to-tr from-indigo-700/90 to-indigo-400/80 rounded-2xl shadow-2xl p-8 max-w-sm w-full relative overflow-hidden font-sans">

<div className="flex items-center justify-center mb-6">
<span className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
<svg className="w-8 h-8 text-indigo-700" fill="none" stroke="currentColor" strokeWidth="2.2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</div>

<h2 className="text-white text-center text-[28px] md:text-[32px] font-semibold mb-2 tracking-tighter" style={{fontFamily: '\'Inter\', sans-serif'}}>
      Powerful Feature
    </h2>

<p className="text-indigo-100 text-center text-[16px] md:text-[18px] font-light mb-6" style={{fontFamily: '\'Inter\', sans-serif'}}>
      Boost your workflow with seamless integration, blazing performance, and intuitive design—built to empower your success.
    </p>

<ul className="mb-8 space-y-3">
<li className="flex items-center gap-3">
<span className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="text-white text-[15px] font-medium">Ultra-fast performance</span>
</li>
<li className="flex items-center gap-3">
<span className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="text-white text-[15px] font-medium">Effortless collaboration</span>
</li>
<li className="flex items-center gap-3">
<span className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="text-white text-[15px] font-medium">24/7 Support</span>
</li>
</ul>

<button className="w-full py-3 rounded-xl font-semibold bg-white/90 hover:bg-white text-indigo-800 hover:shadow-lg transition-all text-[16px] mt-1 shadow" style={{fontFamily: '\'Inter\', sans-serif'}}>
      Learn More
    </button>

<span className="absolute w-36 h-36 left-[-3.5rem] bottom-[-3.5rem] bg-white/10 rounded-full blur-2xl"></span>
<span className="absolute w-20 h-20 right-[-1.5rem] top-[-1.5rem] bg-blue-200/10 rounded-full blur-2xl"></span>
</div>

    </>
  );
}
