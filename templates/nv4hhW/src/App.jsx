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
      

<div className="bg-black rounded-[2rem] p-4 w-[23rem] shadow-2xl relative fade-in">

<div className="bg-gray-700 rounded-full w-32 h-8 mx-auto mt-2.5"></div>

<div className="bg-gray-800 rounded-t-2xl mt-2 pb-1 shadow-inner">
<div className="text-white text-center pt-4 pb-2 text-xl font-semibold">Today's Schedule</div>
<ul className="divide-y divide-gray-700">
<li className="p-4 hover:bg-gray-700 transition">
<h3 className="text-white font-medium">9:00 AM - Team Briefing</h3>
<p className="text-gray-400 text-sm">Zoom Meeting</p>
</li>
<li className="p-4 hover:bg-gray-700 transition">
<h3 className="text-white font-medium">11:00 AM - Code Review</h3>
<p className="text-gray-400 text-sm">Office</p>
</li>
<li className="p-4 hover:bg-gray-700 transition">
<h3 className="text-white font-medium">1:00 PM - Lunch with Client</h3>
<p className="text-gray-400 text-sm">Downtown Café</p>
</li>
<li className="p-4 hover:bg-gray-700 transition">
<h3 className="text-white font-medium">4:00 PM - Presentation Prep</h3>
<p className="text-gray-400 text-sm">Home Office</p>
</li>
</ul>
</div>

<div className="bg-gray-800 rounded-b-2xl h-10"></div>
</div>

    </>
  );
}
