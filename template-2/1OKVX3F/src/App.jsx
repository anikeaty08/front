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
      
<div className="gradient-border max-w-sm w-full">
<div className="card-inner">
<div className="flex items-center gap-4 mb-4">
<img alt="Profile" className="w-14 h-14 rounded-full shadow-md border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" />
<div>
<h2 className="text-xl font-semibold text-gray-800">Alex Johnson</h2>
<p className="text-sm text-gray-500">Product Designer</p>
</div>
</div>
<div className="mb-4">
<p className="text-gray-600">
          “Design is not just what it looks like and feels like. Design is how it works.”
        </p>
</div>
<div className="flex justify-between items-center mt-6">
<button className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium shadow hover:bg-indigo-600 transition">Follow</button>
<span className="text-xs text-gray-400">Last active 2h ago</span>
</div>
</div>
</div>

    </>
  );
}
