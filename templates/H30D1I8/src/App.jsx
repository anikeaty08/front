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
      
    import createGlobe from 'https://cdn.skypack.dev/cobe'
    let phi = 0
    let canvas = document.getElementById("cobe")
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 7,
      baseColor: [0.8, 0.1, 0.1],
      markerColor: [1, 0.2, 0.2],
      glowColor: [0.7, 0.05, 0.2],
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.04 },
        { location: [40.7128, -74.006], size: 0.07 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [22.3193, 114.1694], size: 0.04 },
        { location: [-33.8688, 151.2093], size: 0.04 },
        { location: [48.8566, 2.3522], size: 0.04 },
        { location: [28.6139, 77.2090], size: 0.04 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.005
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
<div className="flex items-center">

<svg className="h-8 w-8 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M12.293 1.293a1 1 0 011.497 1.32l-3.24 6.481h4.175a1 1 0 01.888 1.458l-6.5 12.5a1 1 0 01-1.835-.87l3.241-8.07H4.707a1 1 0 01-.883-1.472l7-12z"></path>
</svg>
<span className="ml-3 text-2xl font-semibold tracking-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent select-none">FusionApi</span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-300">
<a className="hover:text-red-500 transition-colors" href="#">Models</a>
<a className="hover:text-red-500 transition-colors" href="#">Docs</a>
<a className="hover:text-red-500 transition-colors" href="#">Pricing</a>
<a className="hover:text-red-500 transition-colors" href="#">Contact</a>
</div>
<div>
<button className="text-sm border border-red-900 rounded-md px-4 py-2 hover:bg-red-900/40 transition-all">
          Sign in
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>
<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#1a0006]/40 via-[#0a0a0b] to-[#0a0a0b] z-0"></div>

<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="flex flex-col md:flex-row items-center">

<div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">Serverless APIs</span> for <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-red-500">Elite LLMs</span>
</h1>
<p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-lg font-extralight tracking-wide">
            Effortlessly scale and connect to advanced, custom-trained language models. FusionApi empowers your apps with blazing-fast, reliable, and secure LLM endpoints—no infrastructure required.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-red-600 text-white font-light rounded-md px-6 py-3 hover:bg-red-700 transition-all">
              Get started free
            </button>
<button className="bg-transparent border border-red-900 rounded-md px-6 py-3 text-red-500 hover:bg-red-900/40 transition-all">
              API Demo
            </button>
</div>
</div>

<div className="md:w-1/2 relative">
<div className="relative h-[500px] w-[500px] mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-600/10 rounded-full blur-3xl"></div>
<canvas className="relative z-10" height="1000" id="cobe" style={{width: '500px', height: '500px'}} width="1000"></canvas>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-red-900 to-transparent my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<p className="text-4xl font-light mb-1 tracking-tight text-red-500">100ms</p>
<p className="text-gray-400 font-extralight">Avg. API latency</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight text-red-500">15+</p>
<p className="text-gray-400 font-extralight">LLM models</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight text-red-500">Global</p>
<p className="text-gray-400 font-extralight">Serverless edge</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight text-red-500">99.99%</p>
<p className="text-gray-400 font-extralight">Uptime SLA</p>
</div>
</div>
</div>
</div>


    </>
  );
}
