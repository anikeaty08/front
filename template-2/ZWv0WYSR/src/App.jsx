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
      try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


try {
  if (window.parent && window.parent !== window) {
    window.parent.promotekit_referral = "1fd2949a-d22c-431b-92bf-02d4ad04ee24";
    window.parent.document.cookie = "promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000";
  }
} catch(e) {}



    document.addEventListener('DOMContentLoaded', function() {
      VANTA.NET({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,
        backgroundColor: 0x030712,
        points: 10,
        maxDistance: 20.00,
        spacing: 18.00,
        showDots: true
      });
    });
  
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
      
<div className="max-w-4xl w-full bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col md:flex-row">

<div className="md:w-1/2 h-72 md:h-auto relative" id="vanta-canvas">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 mb-2 inline-block">VISUALIZATION</span>
<h2 className="text-2xl font-bold text-white">Global Network</h2>
<div className="h-1 w-12 bg-gray-400 mt-2 rounded-full"></div>
</div>
<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 z-10">
<div className="flex space-x-4 text-xs text-gray-300">
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-gray-300 mr-1.5"></span>
<span>Nodes</span>
</div>
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-gray-500 mr-1.5"></span>
<span>Connections</span>
</div>
</div>
</div>
</div>

<div className="md:w-1/2 p-6 flex flex-col justify-between bg-gray-900">
<div>
<span className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400 mb-2 inline-block">OVERVIEW</span>
<h3 className="text-xl font-semibold text-gray-200 mb-4">Network Infrastructure</h3>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">Our global infrastructure connects key locations through a resilient mesh topology, ensuring high availability and optimal performance for all clients.</p>
<div className="space-y-4 mb-6">
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs font-medium">NETWORK UPTIME</span>
<span className="text-gray-400 text-xs">99.8%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gray-400 rounded-full" style={{width: `99.8%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs font-medium">DATA CENTERS</span>
<span className="text-gray-400 text-xs">12 LOCATIONS</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gray-400 rounded-full" style={{width: `85%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs font-medium">EDGE NODES</span>
<span className="text-gray-400 text-xs">128 ACTIVE</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gray-400 rounded-full" style={{width: `75%`}}></div>
</div>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-gray-800">
<div className="flex justify-between text-sm">
<button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition flex items-center">
<svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
<path clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fillRule="evenodd"></path>
</svg>
            View Details
          </button>
<button className="px-4 py-2 bg-black hover:bg-gray-800 text-gray-300 rounded-lg transition flex items-center">
<svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" fillRule="evenodd"></path>
</svg>
            Status
          </button>
</div>
</div>
</div>
</div>


    </>
  );
}
