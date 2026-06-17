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
      
<div className="subtle-border w-full max-w-7xl mx-auto mb-8 lg:mb-16 bg-black">
<div className="header-section px-4 md:px-8 py-4 md:py-5 border-b border-white border-opacity-15 flex items-center">
<div className="layout-title text-lg md:text-2xl font-bold tracking-wider transition-all duration-300">PIXEL MATRIX GENERATOR</div>
</div>
<div className="progress-bar px-4 md:px-8 py-4 md:py-5 border-b border-white border-opacity-15 text-xs md:text-sm flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
<div className="font-semibold">DIGITAL ABSTRACT SYNTHESIS 100%</div>
<div className="text-xs opacity-70">PRESS 'CTRL+R' TO REGENERATE | 'ESC' FOR FULLSCREEN</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
<div className="service-item p-4 md:p-6 lg:p-8 border-r-0 md:border-r border-b border-white border-opacity-15 flex flex-col md:last:border-r-0 lg:last:border-r xl:[&amp;:nth-child(3n)]:border-r-0">
<h3 className="mb-3 text-sm font-semibold transition-colors duration-300">PIXEL MATRIX</h3>
<p className="text-xs leading-relaxed">
                    Digital abstract generation using <strong>square pixel arrays</strong> distributed through algorithmic patterns. Each pixel represents a data point in a <code className="bg-white bg-opacity-10 px-1 py-0.5 rounded text-xs transition-all duration-300">NxN grid</code> with binary state transitions.
                </p>
</div>
<div className="service-item p-4 md:p-6 lg:p-8 border-r-0 lg:border-r border-b border-white border-opacity-15 flex flex-col xl:[&amp;:nth-child(3n)]:border-r-0">
<h3 className="mb-3 text-sm font-semibold transition-colors duration-300">RETRO ALGORITHM</h3>
<p className="text-xs leading-relaxed mb-2">
                    Classic 8-bit inspired rendering using cellular automata principles:
                </p>
<p className="text-xs leading-relaxed">
<code className="bg-white bg-opacity-10 px-1 py-0.5 rounded text-xs transition-all duration-300 block mb-1">pixel[x][y] = state ? 1 : 0</code>
<code className="bg-white bg-opacity-10 px-1 py-0.5 rounded text-xs transition-all duration-300 block">pattern = (x ^ y) % density</code>
</p>
</div>
<div className="service-item p-4 md:p-6 lg:p-8 border-r-0 border-b border-white border-opacity-15 flex flex-col md:border-r lg:border-r-0 xl:border-r-0">
<h3 className="mb-3 text-sm font-semibold transition-colors duration-300">SQUARE PATTERNS</h3>
<p className="text-xs leading-relaxed mb-2">
                    Geometric abstractions based on square tessellations and bit manipulation:
                </p>
<p className="text-xs leading-relaxed">
<code className="bg-white bg-opacity-10 px-1 py-0.5 rounded text-xs transition-all duration-300 block mb-1">grid[i] = (i &amp; mask) &lt;&lt; shift</code>
<code className="bg-white bg-opacity-10 px-1 py-0.5 rounded text-xs transition-all duration-300 block">transform = rotate(90°)</code>
</p>
</div>
<div className="service-item p-4 md:p-6 lg:p-8 border-r-0 md:border-r border-b md:border-b-0 lg:border-b border-white border-opacity-15 flex flex-col lg:last:border-r-0 xl:[&amp;:nth-child(3n)]:border-r-0">
<h3 className="mb-3 text-sm font-semibold transition-colors duration-300">BINARY AESTHETICS</h3>
<p className="text-xs leading-relaxed">
                    Pure black &amp; white digital art using <code className="bg-white bg-opacity-10 px-1 py-0.5 rounded text-xs transition-all duration-300">1-bit</code> color depth. Monochrome pixel states create high contrast geometric abstractions reminiscent of early computer graphics and ASCII art.
                </p>
</div>
<div className="service-item p-4 md:p-6 lg:p-8 border-r-0 lg:border-r border-b md:border-b-0 lg:border-b xl:border-b-0 border-white border-opacity-15 flex flex-col xl:[&amp;:nth-child(3n)]:border-r-0">
<h3 className="mb-3 text-sm font-semibold transition-colors duration-300">RENDERING ENGINE</h3>
<p className="text-xs leading-relaxed">
                    Real-time <code className="bg-white bg-opacity-10 px-1 py-0.5 rounded text-xs transition-all duration-300">&lt;canvas&gt;</code> based pixel renderer with <code className="bg-white bg-opacity-10 px-1 py-0.5 rounded text-xs transition-all duration-300">ImageData</code> manipulation. Crisp pixel-perfect squares using nearest-neighbor scaling and integer coordinates for authentic retro appearance.
                </p>
</div>
<div className="service-item p-4 md:p-6 lg:p-8 flex flex-col border-r-0 md:border-r lg:border-r-0">
<h3 className="mb-3 text-sm font-semibold transition-colors duration-300">APPLICATIONS</h3>
<p className="text-xs leading-relaxed">
                    Perfect for retro game assets, digital art installations, procedural textures, NFT collections, and minimalist graphic design requiring geometric precision.
                </p>
</div>
</div>
</div>

    </>
  );
}
