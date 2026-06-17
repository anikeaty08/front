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
          colors: {
            blue: {
              50: '#f0f7ff',
              100: '#e0eefe',
              200: '#bae0fd',
              300: '#7dcbfc',
              400: '#39acf7',
              500: '#1a91eb',
              600: '#0c73ca',
              700: '#0e5ca4',
              800: '#144e87',
              900: '#164270',
            },
            secondary: '#7C94B5',
            offwhite: '#f8f8f8'
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
      
<div className="w-[390px] h-[852px] rounded-3xl overflow-hidden shadow-md">
<div className="w-full h-full bg-offwhite flex flex-col">

<div className="p-6 flex justify-between items-center">
<h1 className="text-2xl font-medium text-blue-800">Weather Map</h1>
<button className="text-secondary hover:text-blue-800">
<i className="bi bi-sliders text-xl"></i>
</button>
</div>

<div className="flex-1 relative">

<div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200">

<div className="h-full w-full relative overflow-hidden">

<div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-r border-blue-300/30"></div>
<div className="border-b border-blue-300/30"></div>
<div className="border-r border-blue-300/30"></div>
<div className="border-r border-blue-300/30"></div>
<div className="border-r border-blue-300/30"></div>
<div className="border-r border-blue-300/30"></div>
<div className="border-r border-blue-300/30"></div>
<div className=""></div>
</div>

<div className="absolute top-[15%] left-[20%] text-amber-400">
<i className="bi bi-sun-fill text-2xl"></i>
</div>
<div className="absolute top-[30%] left-[60%] text-secondary">
<i className="bi bi-cloud-fill text-2xl"></i>
</div>
<div className="absolute top-[60%] left-[30%] text-secondary">
<i className="bi bi-cloud-drizzle-fill text-2xl"></i>
</div>
<div className="absolute top-[45%] left-[70%] text-blue-500">
<i className="bi bi-cloud-rain-fill text-2xl"></i>
</div>
<div className="absolute top-[75%] left-[65%] text-secondary">
<i className="bi bi-cloud-fill text-2xl"></i>
</div>

<div className="absolute top-[18%] left-[22%] bg-white/80 rounded-full px-2 py-0.5 text-xs font-medium text-blue-800">72°</div>
<div className="absolute top-[33%] left-[62%] bg-white/80 rounded-full px-2 py-0.5 text-xs font-medium text-blue-800">68°</div>
<div className="absolute top-[63%] left-[32%] bg-white/80 rounded-full px-2 py-0.5 text-xs font-medium text-blue-800">65°</div>
<div className="absolute top-[48%] left-[72%] bg-white/80 rounded-full px-2 py-0.5 text-xs font-medium text-blue-800">59°</div>
<div className="absolute top-[78%] left-[67%] bg-white/80 rounded-full px-2 py-0.5 text-xs font-medium text-blue-800">66°</div>

<div className="absolute top-[12%] left-[18%] text-[10px] font-medium text-blue-900">New York</div>
<div className="absolute top-[27%] left-[58%] text-[10px] font-medium text-blue-900">Chicago</div>
<div className="absolute top-[57%] left-[28%] text-[10px] font-medium text-blue-900">Denver</div>
<div className="absolute top-[42%] left-[68%] text-[10px] font-medium text-blue-900">Miami</div>
<div className="absolute top-[72%] left-[63%] text-[10px] font-medium text-blue-900">Los Angeles</div>

<div className="absolute top-[55%] left-[45%]">
<div className="h-4 w-4 bg-blue-600 rounded-full animate-pulse"></div>
<div className="absolute top-0 left-0 h-4 w-4 bg-blue-600 rounded-full animate-ping opacity-75"></div>
</div>
</div>
</div>

<div className="absolute top-4 right-4 flex flex-col gap-2">
<button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-secondary hover:text-blue-800">
<i className="bi bi-plus text-xl"></i>
</button>
<button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-secondary hover:text-blue-800">
<i className="bi bi-dash text-xl"></i>
</button>
<button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-secondary hover:text-blue-800">
<i className="bi bi-geo-alt text-xl"></i>
</button>
</div>

<div className="absolute bottom-4 left-4 right-4">
<div className="bg-white rounded-xl shadow-md p-3 border border-secondary/20">
<div className="flex justify-between items-center mb-2">
<h3 className="text-sm font-medium text-blue-800">Map Layers</h3>
<button className="text-secondary text-sm">Reset</button>
</div>
<div className="flex gap-2">
<button className="flex-1 py-1.5 px-2 bg-blue-500 text-white rounded-lg text-xs font-medium">
                Temperature
              </button>
<button className="flex-1 py-1.5 px-2 bg-white text-secondary border border-secondary/20 rounded-lg text-xs font-medium">
                Precipitation
              </button>
<button className="flex-1 py-1.5 px-2 bg-white text-secondary border border-secondary/20 rounded-lg text-xs font-medium">
                Wind
              </button>
<button className="flex-1 py-1.5 px-2 bg-white text-secondary border border-secondary/20 rounded-lg text-xs font-medium">
                Pressure
              </button>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-secondary/20 bg-white">
<div className="flex justify-around">
<button className="flex flex-col items-center text-secondary">
<i className="bi bi-house text-xl"></i>
<span className="text-xs mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-secondary">
<i className="bi bi-search text-xl"></i>
<span className="text-xs mt-1">Search</span>
</button>
<button className="flex flex-col items-center text-blue-800">
<i className="bi bi-map-fill text-xl"></i>
<span className="text-xs mt-1">Map</span>
</button>
<button className="flex flex-col items-center text-secondary">
<i className="bi bi-person text-xl"></i>
<span className="text-xs mt-1">Profile</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
