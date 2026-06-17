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
      
<div className="w-full max-w-md bg-gray-900/90 rounded-2xl border border-gray-800/50 shadow-xl px-8 py-7">

<div className="mb-8 flex items-center justify-between">
<h1 className="text-2xl font-extrabold tracking-tight text-gray-100">
        Course Progress
      </h1>
<span className="text-xs font-semibold text-cyan-400/70 bg-gray-800/80 px-3 py-1 rounded-lg">CSS Animation</span>
</div>

<div className="w-full flex flex-col gap-6 mb-8">
<div className="flex items-center justify-between">

<div className="flex-1 flex items-center gap-0.5">

<div className="h-3 w-12 rounded-lg step-completed"></div>
<div className="h-3 w-12 rounded-lg step-completed"></div>
<div className="h-3 w-12 rounded-lg step-completed"></div>
<div className="h-3 w-12 rounded-lg step-completed"></div>
<div className="h-3 w-12 rounded-lg step-current"></div>
<div className="h-3 w-12 rounded-lg step-upcoming"></div>
<div className="h-3 w-12 rounded-lg step-upcoming"></div>
</div>

<span className="ml-4 text-lg font-bold text-cyan-400">71%</span>
</div>

<div className="flex items-center justify-between mt-1">
<span className="text-xs text-gray-400 font-medium">Intro</span>
<span className="text-xs text-gray-400 font-medium">Transforms</span>
<span className="text-xs text-gray-400 font-medium">Transitions</span>
<span className="text-xs text-gray-400 font-medium">Animations</span>
<span className="text-xs text-gray-100 font-bold">SVG</span>
<span className="text-xs text-gray-600 font-medium">Puppets</span>
<span className="text-xs text-gray-600 font-medium">Final</span>
</div>
</div>

<div className="flex items-center gap-4 mb-7">

<div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full linear-gradient">
<svg fill="none" height="22" viewbox="0 0 24 24" width="22">
<rect fill="#fff" height="12" opacity="0.07" rx="2" width="18" x="3" y="7"></rect>
<rect fill="#fff" height="18" opacity="0.15" rx="2" width="10" x="7" y="3"></rect>
<path d="M9 12l2 2 4-4" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-cyan-400">5/7 Lessons</span>
<span className="text-[12px] px-2 py-0.5 bg-cyan-400/10 rounded-full text-cyan-300 font-medium">SVG</span>
</div>
<div className="text-sm text-gray-400 mt-0.5">You recently completed: "Advanced SVG Path Animation"</div>
</div>
</div>

<div className="flex items-center bg-gray-800/80 rounded-xl px-5 py-4 mb-6 border border-gray-700/60 gap-3">
<svg fill="none" height="32" viewbox="0 0 24 24" width="32">
<circle cx="12" cy="12" fill="#22D3EE" opacity="0.14" r="12"></circle>
<path d="M8 13.5l3 3 5-7" stroke="#06B6D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
</svg>
<div>
<span className="text-base font-bold text-cyan-300">Faster than 76% of learners</span>
<p className="text-xs mt-0.5 text-gray-300">
          Keep this pace for 2 more lessons for a completion bonus!
        </p>
</div>
</div>

<button className="w-full py-3 mt-1 text-lg font-bold text-white rounded-xl shadow-md linear-gradient transition-all">
      Continue Course
    </button>
</div>

    </>
  );
}
