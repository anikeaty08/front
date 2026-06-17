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
      
<div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl">
                    15
                </div>
<div>
<div className="text-gray-800 font-semibold">Wednesday</div>
<div className="text-gray-500 text-sm">September</div>
</div>
</div>
<div className="text-indigo-600 font-semibold text-sm">Today</div>
</div>
<div className="mt-6 border-t pt-4">
<div className="flex items-center justify-between">
<div>
<div className="text-gray-800 font-semibold">$34,000.00</div>
<div className="text-gray-500 text-xs">USD</div>
</div>
<div className="flex items-center space-x-1">
<span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
<span className="text-gray-500 text-sm">International Transfer</span>
</div>
</div>
</div>
<div className="mt-4 bg-gray-200 rounded-full text-gray-700 text-xs uppercase text-center py-2">
            6 Scheduled Payments
        </div>
</div>

    </>
  );
}
