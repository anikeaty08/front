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
      
<div className="iphone-frame bg-black w-[320px] h-[650px]">

<div className="dynamic-island"></div>

<div className="h-full w-full bg-gradient-to-b from-gray-900 to-black text-white pt-16 px-6 pb-6 flex flex-col">

<div className="flex justify-between items-center mt-4">
<div className="text-sm font-light opacity-80">Welcome back</div>
<div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
</div>

<h1 className="text-xl font-medium mt-4">Serene</h1>

<div className="flex-1 flex flex-col items-center justify-center">

<div className="relative">

<svg className="progress-ring" height="220" width="220">
<circle className="opacity-10" cx="110" cy="110" fill="transparent" r="100" stroke="#fff" strokeWidth="2"></circle>
<circle cx="110" cy="110" fill="transparent" r="100" stroke="url(#gradient)" stroke-dasharray="628" stroke-dashoffset="157" strokeWidth="2"></circle>
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#4F46E5"></stop>
<stop offset="100%" stop-color="#A855F7"></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute inset-0 flex items-center justify-center">
<div className="breathe-animation h-32 w-32 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
<div className="text-center">
<div className="text-3xl font-light">12:34</div>
<div className="text-xs opacity-70 mt-1">Breathe in</div>
</div>
</div>
</div>
</div>

<div className="mt-10 w-full">
<h3 className="text-sm font-medium">Daily Calm</h3>
<p className="text-xs opacity-70 mt-1">Guided meditation for focus</p>
<div className="mt-2 h-1 w-full bg-white/10 rounded-full">
<div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
</div>
</div>
</div>

<div className="flex justify-around items-center py-5 border-t border-white/10">
<div className="flex flex-col items-center">
<div className="h-6 w-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
<span className="text-xs mt-1 opacity-70">Home</span>
</div>
<div className="flex flex-col items-center opacity-50">
<div className="h-6 w-6 rounded-full border border-white/30"></div>
<span className="text-xs mt-1">Meditate</span>
</div>
<div className="flex flex-col items-center opacity-50">
<div className="h-6 w-6 rounded-full border border-white/30"></div>
<span className="text-xs mt-1">Sleep</span>
</div>
<div className="flex flex-col items-center opacity-50">
<div className="h-6 w-6 rounded-full border border-white/30"></div>
<span className="text-xs mt-1">Profile</span>
</div>
</div>
</div>
</div>

    </>
  );
}
