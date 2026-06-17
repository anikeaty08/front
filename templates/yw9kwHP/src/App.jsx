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
      
<div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-xl p-8 max-w-md w-full border border-gray-100">
<div className="mb-6">
<div className="flex justify-between items-center mb-2">
<h2 className="text-gray-900 font-semibold text-2xl tracking-tight">Calendar Sync</h2>
<span className="rounded px-2 py-0.5 border border-gray-200 text-xs text-gray-800 font-medium bg-gray-50">Feature</span>
</div>
<p className="text-gray-600 text-[15px] leading-snug">
        Enable users to seamlessly sync their Google Calendar events with the app’s built-in scheduler.
      </p>
</div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center">
<img alt="Profile" className="w-9 h-9 rounded-full border-2 border-white shadow mr-2" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<span className="text-gray-600 text-sm">Assigned to <span className="font-medium text-gray-900">David Lee</span></span>
</div>
<span className="text-xs text-gray-400">Due <span className="text-gray-600 font-medium">Friday</span></span>
</div>
<hr className="border-t border-gray-100 mb-5"/>
<div className="flex gap-8 text-gray-500">
<div className="flex items-center gap-1">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24">
<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7c-1.5 0-2.9-.4-4.2-1L3 21l1.3-4.2C3.4 15.2 3 13.8 3 12.3A8.5 8.5 0 0111.5 3 8.38 8.38 0 0121 11.5z"></path>
</svg>
<span className="text-sm font-medium text-gray-700">12</span>
</div>
<div className="flex items-center gap-1">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24">
<path d="M10 13a5 5 0 007.07 0l1.42-1.42a5 5 0 000-7.07 5 5 0 00-7.07 0l-1.42 1.42M14 11a5 5 0 01-7.07 0l-1.42-1.42a5 5 0 010-7.07 5 5 0 017.07 0l1.42 1.42"></path>
</svg>
<span className="text-sm font-medium text-gray-700">2</span>
</div>
<div className="flex items-center gap-1">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24">
<rect height="18" rx="3" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
<span className="text-sm font-medium text-gray-700">Friday</span>
</div>
</div>
</div>

    </>
  );
}
