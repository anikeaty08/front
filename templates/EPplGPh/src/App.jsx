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
            nunito: ['Nunito', 'sans-serif'],
            quicksand: ['Quicksand', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
          },
        },
      },
    }
  


    import createGlobe from 'https://cdn.skypack.dev/cobe'

    let phi = 0
    let canvas = document.getElementById("globe")

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
        { location: [37.7595, -122.4367], size: 0.06 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.04 },   // New York
        { location: [51.5074, -0.1278], size: 0.04 },   // London
        { location: [35.6762, 139.6503], size: 0.04 },  // Tokyo
        { location: [19.0760, 72.8777], size: 0.03 },   // Mumbai
        { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
        { location: [-23.5505, -46.6333], size: 0.03 }, // São Paulo
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
      
<div className="w-full h-screen flex flex-col md:flex-row items-center justify-center">

<div className="w-full md:w-1/2 p-8 z-10">
<h1 className="font-quicksand font-light text-5xl md:text-7xl text-white tracking-tight animate-fade-in">
        Global <span className="font-semibold">Network</span>
</h1>
<h2 className="font-nunito font-bold text-xl text-blue-300 mt-4 animate-slide-up delay-100">
        Interactive Visualization Experience
      </h2>
<p className="font-inter text-base text-gray-300 mt-6 max-w-lg animate-fade-in delay-200">
        Explore our worldwide presence with this interactive 3D globe. Our network spans key strategic locations, enabling us to serve clients globally with localized expertise and 24/7 support capabilities.
      </p>
<div className="mt-8 animate-slide-up delay-300">
<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-3 transition-all">
          Explore Network
        </button>
<button className="ml-4 border border-white/30 hover:bg-white/10 text-white font-medium rounded-full px-6 py-3 transition-all">
          Learn More
        </button>
</div>
<div className="mt-10 flex space-x-6 animate-fade-in delay-400">
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
<span className="text-white/80 text-sm">Headquarters</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
<span className="text-white/80 text-sm">Regional Offices</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
<span className="text-white/80 text-sm">Partners</span>
</div>
</div>
</div>

<div className="w-full md:w-1/2 h-96 md:h-screen relative animate-blur-in delay-100">
<canvas className="absolute inset-0" height="1000" id="globe" style={{width: '100%', height: '100%'}} width="1000"></canvas>
<div className="absolute bottom-8 right-8 bg-black/30 backdrop-blur-md rounded-lg p-3 z-10">
<div className="grid grid-cols-2 gap-3 text-sm text-white">
<div>
<p className="font-medium">San Francisco</p>
<p className="text-xs text-white/60">Headquarters</p>
</div>
<div>
<p className="font-medium">London</p>
<p className="text-xs text-white/60">European Hub</p>
</div>
<div>
<p className="font-medium">Tokyo</p>
<p className="text-xs text-white/60">Asia Pacific</p>
</div>
<div>
<p className="font-medium">New York</p>
<p className="text-xs text-white/60">East Coast</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
