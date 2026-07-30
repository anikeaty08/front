import React, { useEffect } from 'react';
import createGlobe from 'https://cdn.skypack.dev/cobe'

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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    let phi = 0
    let canvas = document.getElementById("cobe")
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.2,
      dark: 0,
      diffuse: 1.1,
      scale: 1.1,
      mapSamples: 16000,
      mapBrightness: 4.5,
      baseColor: [0.95, 0.97, 1],
      markerColor: [0.95, 0.3, 0.9],
      glowColor: [0.7, 0.8, 1],
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.06 },
        { location: [40.7128, -74.006], size: 0.03 },
        { location: [51.5074, -0.1278], size: 0.03 },
        { location: [35.6762, 139.6503], size: 0.03 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003
      },
    })
  
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
      
<div className="max-w-md w-full bg-white border border-transparent rounded-2xl overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="relative h-64">
<canvas className="absolute inset-0" height="1000" id="cobe" style={{width: `100%`, height: `100%`}} width="1000"></canvas>
<div className="absolute top-3 left-4 z-10">
<h2 className="text-2xl font-bold text-gray-900">Global Network</h2>
<p className="text-gray-500 text-sm">Interactive 3D visualization</p>
</div>
<div className="absolute bottom-3 right-4 bg-white/90 rounded-lg p-2 z-10 border border-transparent">
<div className="flex space-x-3 text-xs text-gray-700">
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-pink-500 mr-1"></span>
<span>Main Hub</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-blue-400 mr-1"></span>
<span>Regional Office</span>
</div>
</div>
</div>
</div>
<div className="p-5 bg-white">
<div className="flex justify-between text-gray-800 text-sm">
<div>
<p className="font-medium">San Francisco</p>
<p className="text-xs text-gray-400">Headquarters</p>
</div>
<div>
<p className="font-medium">New York</p>
<p className="text-xs text-gray-400">East Coast Office</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-gray-100">
<p className="text-gray-600 text-sm">
          Our global presence spans key strategic locations, enabling us to serve clients worldwide with localized expertise and 24/7 support capabilities.
        </p>
</div>
</div>
</div>


    </>
  );
}
