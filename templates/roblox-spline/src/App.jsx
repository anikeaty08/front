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



    // Initialize Lucide icons
    lucide.createIcons();
  
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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
<div className="mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tight">SPLINE3D</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">Experience</a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">Gallery</a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">Contact</a>
</nav>
<button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
<i data-lucide="menu" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
</header>

<spline-viewer className="fixed inset-0 w-full h-full" url="https://prod.spline.design/h2u7Q0M5UvGmDAqa/scene.splinecode"></spline-viewer>

<div className="fixed inset-0 pointer-events-none z-10">
<div className="absolute bottom-8 left-8 pointer-events-auto">
<div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 max-w-md">
<h1 className="text-3xl font-semibold tracking-tight mb-2">Interactive 3D Scene</h1>
<p className="text-sm text-white/60 mb-4">Drag to rotate • Scroll to zoom • Explore the environment</p>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors">
            Explore More
          </button>
<button className="p-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
<i data-lucide="info" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>

<div className="absolute top-24 right-8 pointer-events-auto">
<div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl p-4 space-y-3">
<div className="flex items-center gap-3 text-sm">
<div className="p-2 bg-white/10 rounded-lg">
<i data-lucide="mouse" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-white/60">Rotate View</span>
</div>
<div className="flex items-center gap-3 text-sm">
<div className="p-2 bg-white/10 rounded-lg">
<i data-lucide="move" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-white/60">Pan Scene</span>
</div>
<div className="flex items-center gap-3 text-sm">
<div className="p-2 bg-white/10 rounded-lg">
<i data-lucide="zoom-in" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-white/60">Zoom In/Out</span>
</div>
</div>
</div>
</div>


    </>
  );
}
