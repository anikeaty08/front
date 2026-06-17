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
<iframe frameborder="0" height="100%" src="https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai/" width="100%"></iframe>
</div>

<div className="content-container">

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-blue-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight">Clarity</span>
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

<div className="container mx-auto px-6 pt-16 md:pt-24">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Streamline</span> your digital experience
        </h1>
<p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl font-light tracking-wide">
          Experience clarity in every interaction with our intuitive platform designed for the modern digital landscape.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="bg-white text-black font-light rounded-md px-8 py-3 hover:bg-opacity-90 transition-all">
            Get started
          </button>
<a className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-2 group" href="#">
            Learn more
            <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
<div>
<p className="text-4xl font-light mb-1 tracking-tight">95%</p>
<p className="text-gray-400 font-extralight">User satisfaction</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">15k+</p>
<p className="text-gray-400 font-extralight">Active users</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">24/7</p>
<p className="text-gray-400 font-extralight">Support available</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">100%</p>
<p className="text-gray-400 font-extralight">Cloud-based</p>
</div>
</div>
</div>
</div>

    </>
  );
}
