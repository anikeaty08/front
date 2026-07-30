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

    let phi = 0
    let canvas = document.getElementById("cobe")

    function resizeCanvas() {
      const parent = canvas.parentElement
      const size = Math.min(parent.offsetWidth, parent.offsetHeight)
      canvas.style.width = `${size}px`
      canvas.style.height = `${size}px`
    }
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

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
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.9],
      markerColor: [0.9, 0.5, 1],
      glowColor: [0.2, 0.2, 1],
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [22.3193, 114.1694], size: 0.03 },
        { location: [-33.8688, 151.2093], size: 0.03 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.005
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
      

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
<span className="ml-3 text-xl tracking-tight font-semibold">Orbital</span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div>
<button className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all">
          Sign in
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-black to-black z-0"></div>

<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="flex flex-col md:flex-row items-center">

<div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold">Connect</span> your world with blockchain precision
          </h1>
<p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-lg font-extralight tracking-wide">
            Build, track, and manage decentralized projects with a seamless platform designed for the future.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white font-medium rounded-md px-6 py-3 hover:from-indigo-400 hover:to-fuchsia-400 transition-all shadow-lg">
              Get started
            </button>
<button className="bg-transparent border border-gray-700 rounded-md px-6 py-3 hover:bg-white/5 transition-all">
              View demo
            </button>
</div>
</div>

<div className="md:w-1/2 relative">
<div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px] mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<canvas className="relative z-10" height="1000" id="cobe" style={{width: `100%`, height: `100%`}} width="1000"></canvas>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<p className="text-4xl font-light mb-1 tracking-tight">93%</p>
<p className="text-gray-400 font-extralight">Faster workflow</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">10k+</p>
<p className="text-gray-400 font-extralight">Global users</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">24/7</p>
<p className="text-gray-400 font-extralight">Support available</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">99.9%</p>
<p className="text-gray-400 font-extralight">Uptime guarantee</p>
</div>
</div>
</div>
</div>

<footer className="mt-10 py-8 border-t border-gray-800 bg-black/80 text-center text-gray-500 text-sm">
<div className="mb-2 flex items-center justify-center gap-2">
<svg className="h-6 w-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-semibold text-white">Orbital Blockchain</span>
</div>
    © 2024 Orbital. All rights reserved.
  </footer>


    </>
  );
}
