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
      
<div className="w-full h-full min-h-screen min-w-full flex items-center justify-center">
<div className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] transition-all">

<div className="flex justify-center mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center shadow-inner">
<svg className="w-11 h-11" fill="none" viewbox="0 0 48 48">

<circle cx="24" cy="24" fill="#6366f1" r="6"></circle>

<circle cx="24" cy="8.5" fill="#a5b4fc" r="3"></circle>

<circle cx="10.5" cy="17" fill="#a5b4fc" r="3"></circle>

<circle cx="37.5" cy="17" fill="#a5b4fc" r="3"></circle>

<circle cx="15" cy="36" fill="#a5b4fc" r="3"></circle>

<circle cx="33" cy="36" fill="#a5b4fc" r="3"></circle>

<line stroke="#6366f1" strokeWidth="2" x1="24" x2="24" y1="18" y2="11.5"></line>
<line stroke="#6366f1" strokeWidth="2" x1="21" x2="12.8" y1="20.5" y2="18.8"></line>
<line stroke="#6366f1" strokeWidth="2" x1="27" x2="35.2" y1="20.5" y2="18.8"></line>
<line stroke="#6366f1" strokeWidth="2" x1="19.5" x2="16.6" y1="27" y2="33.2"></line>
<line stroke="#6366f1" strokeWidth="2" x1="28.5" x2="31.4" y1="27" y2="33.2"></line>

<ellipse cx="24" cy="30.5" fill="#818cf8" fillOpacity="0.15" rx="7" ry="2"></ellipse>
</svg>
</div>
</div>

<h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">Welcome to Entity Mapper</h2>
<p className="text-gray-500 text-center mb-6">Visualize, connect, and optimize your data relationships in minutes. Let’s get you started!</p>

<div className="flex flex-col gap-4 mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 font-medium">1</div>
<div>
<div className="font-medium text-gray-800">Create your first project</div>
<div className="text-xs text-gray-400">Set up the workspace for your database diagrams.</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 font-medium">2</div>
<div>
<div className="font-medium text-gray-800">Add your entities</div>
<div className="text-xs text-gray-400">Define tables, fields, and relationships visually.</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 font-medium">3</div>
<div>
<div className="font-medium text-gray-800">Map &amp; Explore</div>
<div className="text-xs text-gray-400">Interactively connect your data and discover insights.</div>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium text-base hover:bg-indigo-500 transition">Get Started</button>
<button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium text-base hover:bg-gray-200 transition">Skip for now</button>
</div>
</div>
</div>

    </>
  );
}
