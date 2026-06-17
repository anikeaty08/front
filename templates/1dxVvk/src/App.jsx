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



        document.addEventListener('DOMContentLoaded', function() {
            VANTA.GLOBE({
                el: "#globe-container",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x4f46e5,
                color2: 0x1e293b,
                size: 1.0,
                backgroundColor: 0x1f2937
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
      
<div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full max-w-lg shadow-lg">

<div className="flex justify-between items-center mb-6">
<h2 className="text-gray-100 text-xl font-medium">Top Location</h2>
<button className="text-gray-300 border border-gray-600 rounded-lg px-3 py-1.5 flex items-center space-x-2 hover:bg-gray-700 transition">
<span className="text-sm">Filter</span>
<i className="fas fa-filter text-sm"></i>
</button>
</div>

<div className="relative h-72 border border-gray-700 rounded-lg overflow-hidden">
<div className="absolute inset-0" id="globe-container"></div>

<div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600 shadow-md">
<div className="w-5 h-5 rounded-full overflow-hidden">
<div className="bg-blue-700 w-full h-2.5 relative"></div>
<div className="bg-red-600 w-full h-0.5"></div>
<div className="bg-white w-full h-0.5"></div>
<div className="bg-red-600 w-full h-0.5"></div>
<div className="bg-white w-full h-0.5"></div>
<div className="bg-red-600 w-full h-0.5"></div>
</div>
</div>
</div>
<div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600 shadow-md">
<div className="w-5 h-5 rounded-full overflow-hidden">
<div className="bg-red-600 w-full h-1"></div>
<div className="bg-white w-full h-3"></div>
<div className="bg-blue-800 w-full h-1"></div>
</div>
</div>
</div>
<div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600 shadow-md">
<div className="w-5 h-5 rounded-full overflow-hidden">
<div className="bg-red-600 w-full h-2.5"></div>
<div className="bg-white w-full h-2.5"></div>
</div>
</div>
</div>
<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-amber-500 shadow-md">
<div className="w-6 h-6 bg-amber-500 rounded-full"></div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-3 gap-4">
<div className="border border-gray-700 rounded-lg p-3 bg-gray-800">
<p className="text-gray-400 text-sm">United States</p>
<p className="text-gray-100 font-medium">30.4%</p>
</div>
<div className="border border-gray-700 rounded-lg p-3 bg-gray-800">
<p className="text-gray-400 text-sm">Thailand</p>
<p className="text-gray-100 font-medium">22.8%</p>
</div>
<div className="border border-gray-700 rounded-lg p-3 bg-gray-800">
<p className="text-gray-400 text-sm">Indonesia</p>
<p className="text-gray-100 font-medium">18.3%</p>
</div>
</div>
</div>


    </>
  );
}
