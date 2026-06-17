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
      

<div className="spline-container">
<iframe frameborder="0" height="100%" src="https://my.spline.design/quantum-ncqHj2HO6cx7eQ4WfDYRpqZb/" width="100%"></iframe>
</div>

<nav className="container mx-auto px-6 py-6 content">
<div className="flex items-center justify-between glass-effect rounded-xl p-4">
<div className="flex items-center">
<svg className="h-8 w-8 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight font-medium">Quantum</span>
</div>
<div className="hidden md:flex space-x-10 text-sm">
<a className="hover:text-gray-300 transition-colors" href="#">Work</a>
<a className="hover:text-gray-300 transition-colors" href="#">Services</a>
<a className="hover:text-gray-300 transition-colors" href="#">About</a>
<a className="hover:text-gray-300 transition-colors" href="#">Contact</a>
</div>
<div>
<button className="text-sm border border-white/30 rounded-md px-4 py-2 hover:bg-white/20 transition-all">
          Let's Talk
        </button>
</div>
</div>
</nav>
<div className="relative overflow-hidden">

<div className="container mx-auto px-6 py-16 md:py-32 content">
<div className="flex flex-col items-center text-center max-w-5xl mx-auto">

<div className="mb-12 p-8 md:p-12">
<h1 className="md:text-7xl lg:text-8xl leading-tight text-5xl font-normal tracking-tighter font-instrument-serif mb-6">
            Quantum design experiences
          </h1>
<p className="md:text-2xl max-w-3xl text-xl text-gray-200 tracking-wide font-extralight mr-auto mb-8 ml-auto">
            We harness the power of quantum creativity to craft revolutionary digital experiences that transcend conventional boundaries and redefine what's possible.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-black font-light rounded-md px-8 py-3 hover:bg-gray-200 transition-all shadow-lg">
              Explore Universe
            </button>
<button className="bg-transparent border border-white/40 rounded-md px-8 py-3 hover:bg-white/20 transition-all backdrop-blur">
              Quantum Process
            </button>
</div>
</div>
</div>
<div className="h-px bg-white/50 my-16"></div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
<div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all">
<p className="text-2xl font-light mb-2 tracking-tight">Quantum Branding</p>
<p className="text-gray-300 font-extralight">Multi-dimensional identity systems</p>
</div>
<div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all">
<p className="text-2xl font-light mb-2 tracking-tight">Neural Interfaces</p>
<p className="text-gray-300 font-extralight">Mind-machine design experiences</p>
</div>
<div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all">
<p className="text-2xl font-light mb-2 tracking-tight">Quantum Computing</p>
<p className="text-gray-300 font-extralight">Next-generation architectures</p>
</div>
<div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all">
<p className="text-2xl font-light mb-2 tracking-tight">Dimensional Motion</p>
<p className="text-gray-300 font-extralight">Reality-bending animations</p>
</div>
</div>
</div>
</div>

    </>
  );
}
