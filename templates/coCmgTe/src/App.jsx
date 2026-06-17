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
      
<div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-md overflow-hidden border border-gray-800">

<div className="p-6 pb-0">
<div className="mb-5">
<svg fill="none" height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<rect fill="#3E63DD" fillOpacity="0.1" height="32" rx="6" width="32"></rect>
<path d="M16 10V22M10 16H22" stroke="#3E63DD" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<h2 className="text-xl font-medium text-white mb-2">Unsaved changes</h2>
<p className="text-gray-400 text-sm mb-6">
        You have unsaved changes that will be lost if you navigate away from this page.
      </p>
</div>

<div className="px-6 pb-6">
<div className="bg-gray-800 rounded-md p-4 mb-6">
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<svg fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#A4A9B8" strokeWidth="1.5"></path>
<path d="M8 5V9M8 11V11.01" stroke="#A4A9B8" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-3 flex-1">
<p className="text-sm text-gray-300">
              Changes include modifications to task IDS-421 and 2 other items.
            </p>
</div>
</div>
</div>

<div className="flex justify-end space-x-3">
<button className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded">
          Discard changes
        </button>
<button className="px-3 py-2 text-sm font-medium bg-indigo-600 text-white rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
          Save changes
        </button>
</div>
</div>
</div>

    </>
  );
}
