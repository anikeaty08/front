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
      
<div className="max-w-xs mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 font-manrope">
<h2 className="text-lg font-semibold text-neutral-100 mb-2">Sales Breakdown</h2>
<p className="text-sm text-neutral-400 mb-6">June 2024</p>

<div className="flex justify-center items-center mb-8">
<svg height="150" viewBox="0 0 40 40" width="150">

<circle cx="20" cy="20" fill="transparent" r="16" stroke="#FF3B30" strokeDasharray="40 60" strokeDashoffset="0" strokeWidth="8"></circle>

<circle cx="20" cy="20" fill="transparent" r="16" stroke="#34C759" strokeDasharray="28 72" strokeDashoffset="-40" strokeWidth="8"></circle>

<circle cx="20" cy="20" fill="transparent" r="16" stroke="#00C7BE" strokeDasharray="22 78" strokeDashoffset="-68" strokeWidth="8"></circle>

<circle cx="20" cy="20" fill="transparent" r="16" stroke="#FFC800" strokeDasharray="10 90" strokeDashoffset="-90" strokeWidth="8"></circle>
</svg>
</div>

<div className="flex flex-col gap-3 mt-3">
<div className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full" style={{background: `#FF3B30`}}></span>
<span className="text-sm text-neutral-100">Product A</span>
<span className="ml-auto text-sm text-neutral-400">40%</span>
</div>
<div className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full" style={{background: `#34C759`}}></span>
<span className="text-sm text-neutral-100">Product B</span>
<span className="ml-auto text-sm text-neutral-400">28%</span>
</div>
<div className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full" style={{background: `#00C7BE`}}></span>
<span className="text-sm text-neutral-100">Product C</span>
<span className="ml-auto text-sm text-neutral-400">22%</span>
</div>
<div className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full" style={{background: `#FFC800`}}></span>
<span className="text-sm text-neutral-100">Product D</span>
<span className="ml-auto text-sm text-neutral-400">10%</span>
</div>
</div>
</div>


    </>
  );
}
