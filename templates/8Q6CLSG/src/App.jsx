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
      
<div className="bg-[#232321] rounded-2xl shadow-2xl max-w-sm w-full p-8 flex flex-col items-center gap-5 border border-[#222] text-center">
<div className="w-20 h-20 rounded-full bg-[#03e9f4]/10 flex items-center justify-center mb-3">
<svg className="w-12 h-12 text-[#03e9f4]" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24">
<path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="currentColor" strokeLinecap="round"></path>
<circle cx="9" cy="7" r="4" stroke="currentColor"></circle>
<path d="M19 8v6M22 11h-6" stroke="currentColor" strokeLinecap="round"></path>
</svg>
</div>
<h2 className="text-2xl font-semibold text-white mb-1">We're Hiring!</h2>
<p className="text-[#b3b3b2] mb-6">Join our passionate team and help us build amazing things. We're looking for creative, talented people to grow with us.</p>
<a className="button-animation relative inline-block px-8 py-4 text-[#03e9f4] uppercase tracking-widest overflow-hidden transition-all duration-500 hover:bg-[#03e9f4] hover:text-white rounded-[5px] font-semibold shadow-none hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_100px_#03e9f4]" href="#">
      Apply Now
      <span className="pointer-events-none absolute block top-0 left-[-100%] w-full h-0.5 bg-gradient-to-r from-transparent to-[#03e9f4]"></span>
<span className="pointer-events-none absolute block top-[-100%] right-0 w-0.5 h-full bg-gradient-to-b from-transparent to-[#03e9f4]"></span>
<span className="pointer-events-none absolute block bottom-0 right-[-100%] w-full h-0.5 bg-gradient-to-l from-transparent to-[#03e9f4]"></span>
<span className="pointer-events-none absolute block bottom-[-100%] left-0 w-0.5 h-full bg-gradient-to-t from-transparent to-[#03e9f4]"></span>
</a>
</div>

    </>
  );
}
