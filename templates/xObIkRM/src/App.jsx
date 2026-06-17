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



    import createGlobe from 'https://cdn.skypack.dev/cobe'

    let phi = 0
    let canvas = document.getElementById("cobe")

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      scale: 1.1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.6],
      markerColor: [1, 0.5, 1],
      glowColor: [0.7, 0.7, 1],
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
      
<div className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20">
<div className="relative h-64">
<canvas className="absolute inset-0" height="1000" id="cobe" style={{width: '100%', height: '100%'}} width="1000"></canvas>
<div className="absolute top-3 left-4 z-10">
<h2 className="text-2xl font-bold text-white">Global Network</h2>
<p className="text-white/70 text-sm">Interactive 3D visualization</p>
</div>
<div className="absolute bottom-3 right-4 bg-black/30 backdrop-blur-md rounded-lg p-2 z-10">
<div className="flex space-x-3 text-xs text-white">
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
<div className="p-5 bg-black/40">
<div className="flex justify-between text-white/80 text-sm">
<div>
<p className="font-medium">San Francisco</p>
<p className="text-xs text-white/60">Headquarters</p>
</div>
<div>
<p className="font-medium">New York</p>
<p className="text-xs text-white/60">East Coast Office</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/10">
<p className="text-white/70 text-sm">Our global presence spans key strategic locations, enabling us to serve clients worldwide with localized expertise and 24/7 support capabilities.</p>
</div>
</div>
</div>


    </>
  );
}
