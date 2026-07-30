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
      
<div className="max-w-md w-full mx-auto p-6 bg-gray-100 rounded-2xl border border-gray-200 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_53px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-bold text-lg">JD</div>
<div>
<div className="text-sm font-medium text-gray-900">Jane Doe</div>
<div className="text-xs text-gray-400">jane.doe@email.com</div>
</div>
</div>
<span className="text-xs text-gray-400">12:34 PM</span>
</div>

<div className="mb-4">
<div className="text-base font-semibold text-gray-900 mb-1">Welcome to Entity Mapper!</div>
<div className="text-xs text-gray-400">to: you@email.com</div>
</div>

<div className="mb-6 text-gray-700 text-sm leading-relaxed">
      Hi there,<br /><br />
      We’re excited to have you try our new entity relationship mapping tool.<br />
<br />
<ul className="list-disc pl-5 mb-2">
<li>Visualize and connect your database tables</li>
<li>Track dependencies in real time</li>
<li>Get optimization tips</li>
</ul>
<br />
      Start organizing your data with ease!
      <br /><br />
      Best,<br />
      The Entity Mapper Team
    </div>

<div className="flex gap-2">
<a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-500 transition" href="#">Open App</a>
<a className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition" href="#">Reply</a>
</div>
</div>

    </>
  );
}
