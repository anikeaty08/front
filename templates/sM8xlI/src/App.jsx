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
      
<div className="w-full max-w-3xl">
<div className="card bg-white dark:bg-black rounded-xl overflow-hidden">
<div className="p-6 border-b border-gray-100 dark:border-gray-800">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Design Tools Usage</h2>
<div className="bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
<span className="text-xs font-medium text-blue-600 dark:text-blue-400">Q2 2023</span>
</div>
</div>
</div>
<div className="p-6 relative">

<div className="divider absolute h-full top-0 left-1/2 w-0.5" style={{transform: 'translateX(-50%)', boxShadow: '0 0 8px rgba(249, 115, 22, 0.3)'}}></div>

<div className="space-y-4">

<div className="flex items-center">
<div className="w-32 flex-shrink-0 text-gray-900 dark:text-white font-medium text-sm">Figma</div>
<div className="flex-1 h-6 ml-3 relative">
<div className="bar-blue rounded-full h-full shadow-sm" style={{width: '92%'}}></div>
<span className="absolute right-0 top-0 text-xs font-semibold text-gray-600 dark:text-gray-300">92%</span>
</div>
</div>

<div className="flex items-center">
<div className="w-32 flex-shrink-0 text-gray-900 dark:text-white font-medium text-sm">Adobe XD</div>
<div className="flex-1 h-6 ml-3 relative">
<div className="bar-blue rounded-full h-full shadow-sm" style={{width: '78%'}}></div>
<span className="absolute right-0 top-0 text-xs font-semibold text-gray-600 dark:text-gray-300">78%</span>
</div>
</div>

<div className="flex items-center">
<div className="w-32 flex-shrink-0 text-gray-900 dark:text-white font-medium text-sm">Sketch</div>
<div className="flex-1 h-6 ml-3 relative">
<div className="bar-blue rounded-full h-full shadow-sm" style={{width: '65%'}}></div>
<span className="absolute right-0 top-0 text-xs font-semibold text-gray-600 dark:text-gray-300">65%</span>
</div>
</div>

<div className="flex items-center">
<div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">Framer</div>
<div className="flex-1 h-6 ml-3 relative">
<div className="bar-grey rounded-full h-full" style={{width: '42%'}}></div>
<span className="absolute right-0 top-0 text-xs font-semibold text-gray-500 dark:text-gray-500">42%</span>
</div>
</div>

<div className="flex items-center">
<div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">InVision</div>
<div className="flex-1 h-6 ml-3 relative">
<div className="bar-grey rounded-full h-full" style={{width: '35%'}}></div>
<span className="absolute right-0 top-0 text-xs font-semibold text-gray-500 dark:text-gray-500">35%</span>
</div>
</div>

<div className="flex items-center">
<div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">Webflow</div>
<div className="flex-1 h-6 ml-3 relative">
<div className="bar-grey rounded-full h-full" style={{width: '28%'}}></div>
<span className="absolute right-0 top-0 text-xs font-semibold text-gray-500 dark:text-gray-500">28%</span>
</div>
</div>

<div className="flex items-center">
<div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">Axure</div>
<div className="flex-1 h-6 ml-3 relative">
<div className="bar-grey rounded-full h-full" style={{width: '20%'}}></div>
<span className="absolute right-0 top-0 text-xs font-semibold text-gray-500 dark:text-gray-500">20%</span>
</div>
</div>
</div>
</div>
<div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
        Based on survey data from 2,500+ UI/UX designers worldwide
      </div>
</div>
</div>

    </>
  );
}
