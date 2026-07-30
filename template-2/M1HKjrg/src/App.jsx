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
      
<div className="min-h-screen flex items-center justify-center px-4 py-10">
<div className="fluent-card w-full max-w-lg rounded-2xl border border-gray-200 bg-white/80 p-8 flex flex-col gap-8">
<div className="flex flex-col gap-1">
<h2 className="text-2xl font-semibold tracking-tight text-blue-900">Modern Smart Home Package</h2>
<p className="text-base text-blue-900/80 mt-1">
            Everything you need for stylish, functional smart home interfaces in a single, beautifully designed kit.
          </p>
</div>
<div className="flex flex-col gap-3">

<div className="flex items-center px-4 py-3 rounded-xl bg-white/85 border border-blue-100 hover:shadow-xl transition group">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-400 to-blue-300 flex items-center justify-center mr-4 shadow-sm">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<rect height="16" rx="3" width="16" x="4" y="4"></rect>
</svg>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="text-blue-900 font-semibold text-lg">UI Kit</span>
<span className="text-blue-700 font-semibold text-lg">$29</span>
</div>
<p className="text-blue-900/70 text-xs mt-1">10 UI components for dashboards, toggles, and data visualizations.</p>
</div>
</div>

<div className="flex items-center px-4 py-3 rounded-xl bg-white/85 border border-violet-100 hover:shadow-xl transition group">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 via-purple-400 to-indigo-200 flex items-center justify-center mr-4 shadow-sm">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<rect height="10" rx="2" width="18" x="3" y="7"></rect>
<path d="M7 17v2a2 2 0 002 2h6a2 2 0 002-2v-2"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="text-blue-900 font-semibold text-lg">Templates</span>
<span className="text-blue-700 font-semibold text-lg">$29</span>
</div>
<p className="text-blue-900/70 text-xs mt-1">10 ready-to-use screens for dashboards and device management.</p>
</div>
</div>

<div className="flex items-center px-4 py-3 rounded-xl bg-white/85 border border-teal-100 hover:shadow-xl transition group">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 via-blue-300 to-indigo-200 flex items-center justify-center mr-4 shadow-sm">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<rect height="18" rx="4" width="18" x="3" y="3"></rect>
<rect height="10" rx="2" width="10" x="7" y="7"></rect>
</svg>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="text-blue-900 font-semibold text-lg">All the Library</span>
<span className="text-blue-700 font-semibold text-lg">$48</span>
</div>
<p className="text-blue-900/70 text-xs mt-1">Both UI Kit & Templates (20 items) in one smart home bundle.</p>
</div>
</div>
</div>
<button className="fluent-btn w-full mt-4 py-3 rounded-xl font-semibold tracking-wide text-lg text-white bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 shadow-md transition focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-[length:250%_100%] bg-left" style={{transition: `box-shadow 0.18s, background-position 0.3s`}}>
          Pay
        </button>
</div>
</div>

    </>
  );
}
