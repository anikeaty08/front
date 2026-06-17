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



    lucide.createIcons();
  


    import createGlobe from 'https://cdn.skypack.dev/cobe'

    let phi = 4.5 
    let canvas = document.getElementById("cobe")

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3, 
      dark: 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.9, 0.95, 1], // Very light blueish grey
      markerColor: [0.1, 0.4, 0.8], // Blue markers
      glowColor: [0.8, 0.9, 1], // Light blue glow
      offset: [0, 0],
      // Markers focused on Florida and surrounding areas
      markers: [
        { location: [25.7617, -80.1918], size: 0.08 }, // Miami
        { location: [28.5383, -81.3792], size: 0.06 }, // Orlando
        { location: [27.9506, -82.4572], size: 0.06 }, // Tampa
        { location: [30.3322, -81.6557], size: 0.05 }, // Jacksonville
        { location: [30.4383, -84.2807], size: 0.04 }, // Tallahassee
        { location: [26.1224, -80.1373], size: 0.04 }, // Fort Lauderdale
        { location: [26.7153, -80.0534], size: 0.04 }, // West Palm Beach
      ],
      onRender: (state) => {
        // Rotates slowly
        state.phi = phi + 0
        phi += 0.003
        // Keep focus roughly on North America/Florida side
        state.width = 1000 * 2 
        state.height = 1000 * 2
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
      

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-slate-900 p-1.5 rounded-lg">
<i className="h-5 w-5 text-white" data-lucide="arrow-up-down"></i>
</div>
<span className="ml-1 text-lg font-medium tracking-tight text-slate-900">Apex<span className="text-slate-400 font-light">Elevators</span></span>
</div>
<div className="hidden md:flex space-x-8 text-sm text-slate-500 font-normal">
<a className="hover:text-blue-600 transition-colors" href="#">Maintenance</a>
<a className="hover:text-blue-600 transition-colors" href="#">Modernization</a>
<a className="hover:text-blue-600 transition-colors" href="#">Repair</a>
<a className="hover:text-blue-600 transition-colors" href="#">Compliance</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100 hover:bg-orange-100 transition-colors" href="tel:5513264887">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
            24/7 Emergency: 551-326-4887
        </a>
<button className="text-sm font-medium border border-slate-200 rounded-lg px-4 py-2 hover:bg-slate-50 hover:border-slate-300 transition-all text-slate-600">
          Client Portal
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white z-0"></div>

<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="flex flex-col md:flex-row items-center">

<div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
<span>Serving All of Florida</span>
<div className="h-1 w-1 rounded-full bg-blue-400"></div>
<span>Licensed &amp; Insured</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tighter mb-6 leading-[1.1] text-slate-900">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500 font-semibold">Elevating</span> standards in vertical transport.
          </h1>
<p className="text-slate-500 text-xl md:text-2xl mb-10 max-w-lg font-light tracking-wide leading-relaxed">
            Reliable repair, maintenance, and modernization for commercial and residential buildings across the Sunshine State.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-slate-900 text-white font-medium text-sm rounded-lg px-8 py-3.5 hover:bg-slate-800 transition-all shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2">
              Request Service
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<a className="bg-white border border-slate-200 text-slate-600 font-medium text-sm rounded-lg px-8 py-3.5 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2" href="tel:5513264887">
<i className="h-4 w-4" data-lucide="phone"></i>
              Call 551-326-4887
            </a>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-slate-400 font-medium">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px]">QM</div>
<div className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px]">SJ</div>
<div className="h-8 w-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px]">+2k</div>
</div>
<p>Trusted by leading property managers</p>
</div>
</div>

<div className="md:w-1/2 relative">
<div className="relative h-[500px] w-[500px] mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl transform translate-y-10"></div>
<canvas className="relative z-10" height="1000" id="cobe" style={{width: '500px', height: '500px'}} width="1000"></canvas>

<div className="absolute top-20 right-10 bg-white/80 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-sm z-20 max-w-[160px]">
<div className="flex items-center gap-2 mb-2">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-xs font-semibold text-slate-700">System Online</span>
</div>
<div className="text-[10px] text-slate-500 leading-tight">Downtown Miami HQ<br/>Unit 4A • Passenger</div>
</div>
<div className="absolute bottom-20 left-0 bg-white/80 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-sm z-20 max-w-[160px]">
<div className="flex items-center gap-2 mb-2">
<div className="h-2 w-2 rounded-full bg-blue-500"></div>
<span className="text-xs font-semibold text-slate-700">Tech Dispatched</span>
</div>
<div className="text-[10px] text-slate-500 leading-tight">Orlando Medical Ctr<br/>ETA: 15 mins</div>
</div>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<p className="text-4xl font-normal mb-2 tracking-tight text-slate-900">99.8%</p>
<p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Uptime Rate</p>
</div>
<div>
<p className="text-4xl font-normal mb-2 tracking-tight text-slate-900">30+</p>
<p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Years in Florida</p>
</div>
<div>
<p className="text-4xl font-normal mb-2 tracking-tight text-slate-900">1 hr</p>
<p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Avg. Response</p>
</div>
<div>
<p className="text-4xl font-normal mb-2 tracking-tight text-slate-900">5k+</p>
<p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Active Units</p>
</div>
</div>
</div>
</div>



    </>
  );
}
