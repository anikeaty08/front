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
      
<div className="card-border w-full max-w-md mx-auto bg-black">

<div className="px-6 py-4 border-b border-green-500 border-opacity-20">
<h1 className="header-glow text-xl font-bold tracking-wider text-center transition-all duration-300">
                PIXEL MATRIX
            </h1>
<p className="text-center text-xs text-green-400 mt-1">GENERATOR v2.1</p>
</div>

<div className="status-bar px-6 py-3 border-b border-white border-opacity-10">
<div className="text-xs font-semibold text-green-400 mb-1">SYNTHESIS: 100% COMPLETE</div>
<div className="text-xs opacity-70">CTRL+R: REGEN | ESC: FULLSCREEN</div>
</div>

<div className="grid grid-cols-2 gap-0">
<div className="service-item p-4 border-r border-white border-opacity-10">
<h3 className="mb-2 text-xs font-semibold transition-all duration-300">MATRIX CORE</h3>
<p className="text-xs leading-relaxed text-gray-300">
                    Binary <code className="bg-white bg-opacity-10 px-1 rounded text-xs transition-all duration-300">NxN</code> pixel arrays with algorithmic state distribution.
                </p>
</div>
<div className="service-item p-4">
<h3 className="mb-2 text-xs font-semibold transition-all duration-300">8-BIT ALGO</h3>
<p className="text-xs leading-relaxed text-gray-300">
                    Retro cellular automata:
                    <code className="bg-white bg-opacity-10 px-1 rounded text-xs transition-all duration-300 block mt-1">x ^ y % density</code>
</p>
</div>
<div className="service-item p-4 border-r border-t border-white border-opacity-10">
<h3 className="mb-2 text-xs font-semibold transition-all duration-300">GEOMETRY</h3>
<p className="text-xs leading-relaxed text-gray-300">
                    Square tessellation with bit manipulation and 90° transforms.
                </p>
</div>
<div className="service-item p-4 border-t border-white border-opacity-10">
<h3 className="mb-2 text-xs font-semibold transition-all duration-300">BINARY ART</h3>
<p className="text-xs leading-relaxed text-gray-300">
                    Pure <code className="bg-white bg-opacity-10 px-1 rounded text-xs transition-all duration-300">1-bit</code> monochrome digital aesthetics.
                </p>
</div>
</div>

<div className="service-item p-4 border-t border-white border-opacity-10 border-l-0 border-r-0">
<h3 className="mb-2 text-xs font-semibold transition-all duration-300">RENDER ENGINE</h3>
<p className="text-xs leading-relaxed text-gray-300 mb-2">
                Real-time <code className="bg-white bg-opacity-10 px-1 rounded text-xs transition-all duration-300">{"<"}canvas{">"}</code> with ImageData manipulation.
            </p>
<p className="text-xs leading-relaxed text-gray-300">
                Pixel-perfect scaling using nearest-neighbor interpolation.
            </p>
</div>

<div className="service-item p-4 border-t border-white border-opacity-10 border-l-0 border-r-0 border-b-0">
<h3 className="mb-2 text-xs font-semibold transition-all duration-300">APPLICATIONS</h3>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="text-gray-300">• Game Assets</div>
<div className="text-gray-300">• NFT Art</div>
<div className="text-gray-300">• Proc. Textures</div>
<div className="text-gray-300">• Digital Art</div>
</div>
</div>

<div className="px-6 py-3 border-t border-green-500 border-opacity-20 bg-black bg-opacity-50">
<div className="text-center text-xs text-green-400 font-mono">
                [READY] MATRIX INITIALIZED
            </div>
</div>
</div>

    </>
  );
}
