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
      

<nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 fade-in-up">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-8">
<h1 className="text-xl font-light text-white tracking-tight">PIXEL MATRIX GENERATOR</h1>
<div className="hidden md:flex items-center space-x-6">
<a className="nav-item px-3 py-2 text-sm font-light text-gray-300 hover:text-white transition-all duration-200" href="#">Generator</a>
<a className="nav-item px-3 py-2 text-sm font-light text-gray-300 hover:text-white transition-all duration-200" href="#">Gallery</a>
<a className="nav-item px-3 py-2 text-sm font-light text-gray-300 hover:text-white transition-all duration-200" href="#">Export</a>
</div>
</div>
<div className="flex items-center space-x-4">
<span className="text-xs text-gray-400 font-light">CTRL+R: Regenerate</span>
<div className="w-2 h-2 bg-green-400 pulse-glow"></div>
</div>
</div>
</nav>
<div className="flex h-screen">

<aside className="w-80 bg-gray-900 border-r border-gray-800 p-6 overflow-y-auto fade-in-left">
<div className="space-y-6">

<div className="content-card bg-gray-800/30 p-4 fade-in-up delay-200">
<h3 className="text-sm font-normal mb-4 text-gray-200 border-b border-gray-700 pb-2">ALGORITHM SETTINGS</h3>
<div className="space-y-3">
<div className="sidebar-item p-3 transition-all duration-200 cursor-pointer border border-gray-700 fade-in-up delay-300">
<div className="text-xs font-light text-gray-400">Matrix Size</div>
<div className="text-sm text-white mt-1 font-light">32x32 Grid</div>
</div>
<div className="sidebar-item p-3 transition-all duration-200 cursor-pointer border border-gray-700 fade-in-up delay-400">
<div className="text-xs font-light text-gray-400">Pattern Type</div>
<div className="text-sm text-white mt-1 font-light">XOR Binary</div>
</div>
<div className="sidebar-item p-3 transition-all duration-200 cursor-pointer border border-gray-700 fade-in-up delay-500">
<div className="text-xs font-light text-gray-400">Density</div>
<div className="text-sm text-white mt-1 font-light">65% Fill</div>
</div>
</div>
</div>

<div className="content-card bg-gray-800/30 p-4 fade-in-up delay-400">
<h3 className="text-sm font-normal mb-4 text-gray-200 border-b border-gray-700 pb-2">PATTERN TYPES</h3>
<div className="space-y-2">
<div className="sidebar-item p-3 transition-all duration-200 cursor-pointer border border-gray-700 fade-in-up delay-500">
<div className="text-sm text-white font-light">Cellular Automata</div>
<code className="text-xs text-gray-400 mt-1 block font-light">state = (x ^ y) % n</code>
</div>
<div className="sidebar-item p-3 transition-all duration-200 cursor-pointer border border-gray-700 fade-in-up delay-600">
<div className="text-sm text-white font-light">Bit Manipulation</div>
<code className="text-xs text-gray-400 mt-1 block font-light">grid[i] = i &amp; mask</code>
</div>
<div className="sidebar-item p-3 transition-all duration-200 cursor-pointer border border-gray-700 fade-in-up delay-700">
<div className="text-sm text-white font-light">Geometric Squares</div>
<code className="text-xs text-gray-400 mt-1 block font-light">pattern = mod(x+y)</code>
</div>
</div>
</div>

<div className="content-card bg-gray-800/30 p-4 fade-in-up delay-600">
<h3 className="text-sm font-normal mb-4 text-gray-200 border-b border-gray-700 pb-2">RENDER OPTIONS</h3>
<div className="space-y-2">
<div className="sidebar-item p-3 transition-all duration-200 cursor-pointer border border-gray-700 fade-in-up delay-700">
<div className="text-sm text-white font-light">1-Bit Monochrome</div>
</div>
<div className="sidebar-item p-3 transition-all duration-200 cursor-pointer border border-gray-700 fade-in-up delay-800">
<div className="text-sm text-white font-light">Pixel Perfect</div>
</div>
<div className="sidebar-item p-3 transition-all duration-200 cursor-pointer border border-gray-700 fade-in-up delay-800">
<div className="text-sm text-white font-light">Canvas 2D</div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 p-8 overflow-y-auto fade-in-right">
<div className="max-w-4xl mx-auto">

<div className="content-card bg-gray-800/50 p-8 mb-8 border border-gray-700 scale-in delay-300">
<div className="text-center">
<div className="pixel-grid bg-black w-80 h-80 mx-auto border border-gray-700 flex items-center justify-center">
<div className="text-gray-400 text-sm font-light">Pixel Matrix Display</div>
</div>
<div className="mt-6 flex justify-center space-x-4">
<button className="px-6 py-2 bg-white text-gray-950 font-light hover:bg-gray-200 transition-colors duration-200 border border-gray-700 fade-in-up delay-600">Generate</button>
<button className="px-6 py-2 bg-gray-800 text-white font-light hover:bg-gray-700 transition-colors duration-200 border border-gray-700 fade-in-up delay-700">Export</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="content-card bg-gray-800/30 p-6 border border-gray-700 fade-in-up delay-400">
<h3 className="text-lg font-normal mb-4 border-b border-gray-700 pb-2">Binary Aesthetics</h3>
<p className="text-sm text-gray-300 leading-relaxed mb-3 font-light">
                            Pure black &amp; white digital art using 1-bit color depth. Monochrome pixel states create high contrast geometric abstractions.
                        </p>
<code className="text-xs bg-gray-800 px-2 py-1 text-gray-200 font-light border border-gray-700">pixel[x][y] = state ? 1 : 0</code>
</div>
<div className="content-card bg-gray-800/30 p-6 border border-gray-700 fade-in-up delay-500">
<h3 className="text-lg font-normal mb-4 border-b border-gray-700 pb-2">Retro Algorithm</h3>
<p className="text-sm text-gray-300 leading-relaxed mb-3 font-light">
                            Classic 8-bit inspired rendering using cellular automata principles and bit manipulation techniques.
                        </p>
<code className="text-xs bg-gray-800 px-2 py-1 text-gray-200 font-light border border-gray-700">pattern = (x ^ y) % density</code>
</div>
<div className="content-card bg-gray-800/30 p-6 border border-gray-700 fade-in-up delay-600">
<h3 className="text-lg font-normal mb-4 border-b border-gray-700 pb-2">Rendering Engine</h3>
<p className="text-sm text-gray-300 leading-relaxed mb-3 font-light">
                            Real-time canvas based pixel renderer with ImageData manipulation for authentic retro appearance.
                        </p>
<code className="text-xs bg-gray-800 px-2 py-1 text-gray-200 font-light border border-gray-700">ctx.putImageData(pixels, 0, 0)</code>
</div>
<div className="content-card bg-gray-800/30 p-6 border border-gray-700 fade-in-up delay-700">
<h3 className="text-lg font-normal mb-4 border-b border-gray-700 pb-2">Applications</h3>
<p className="text-sm text-gray-300 leading-relaxed font-light">
                            Perfect for retro game assets, digital art installations, procedural textures, NFT collections, and minimalist graphic design.
                        </p>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
