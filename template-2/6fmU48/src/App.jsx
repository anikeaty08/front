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
      

<div className="spline-bg">
<iframe frameborder="0" height="100%" src="https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO/" width="100%"></iframe>
</div>
<div className="overlay"></div>

<nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-10">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-7 w-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
<path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
</svg>
<span className="ml-3 text-lg sm:text-xl tracking-tight">Neural</span>
</div>
<div className="hidden md:flex space-x-6 lg:space-x-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center space-x-4">
<button className="md:hidden text-gray-300">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="hidden md:block text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all">
          Sign in
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

<div className="container mx-auto px-4 sm:px-6 py-12 md:py-24 lg:py-32 relative z-10">
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-4 sm:mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Amplify</span> your intelligence
      </h1>
<p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-lg font-extralight tracking-wide">
        Harness the power of advanced AI to solve complex problems and make better decisions faster.
      </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-16">
<button className="bg-blue-500 text-white font-light rounded-md px-5 py-2.5 sm:px-6 sm:py-3 hover:bg-blue-400 transition-all">
          Start free trial
        </button>
<button className="bg-transparent border border-gray-700 rounded-md px-5 py-2.5 sm:px-6 sm:py-3 hover:bg-white/5 transition-all">
          Watch demo
        </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20">
<div className="backdrop-blur-lg bg-black/30 p-4 sm:p-6 rounded-xl border border-gray-800">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-normal mb-2">Predictive Analytics</h3>
<p className="text-gray-400 text-sm">Forecast trends and identify opportunities before they emerge.</p>
</div>
<div className="backdrop-blur-lg bg-black/30 p-4 sm:p-6 rounded-xl border border-gray-800">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-normal mb-2">Natural Language</h3>
<p className="text-gray-400 text-sm">Interact with your data using simple conversational queries.</p>
</div>
<div className="backdrop-blur-lg bg-black/30 p-4 sm:p-6 rounded-xl border border-gray-800 sm:col-span-2 lg:col-span-1">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-normal mb-2">Enterprise Security</h3>
<p className="text-gray-400 text-sm">Keep your data secure with industry-leading privacy controls.</p>
</div>
</div>
</div>

<div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
<div className="backdrop-blur-lg bg-black/30 p-4 sm:p-6 rounded-xl border border-gray-800">
<p className="text-2xl sm:text-3xl font-light mb-1">95%</p>
<p className="text-gray-400 text-xs">Accuracy rate</p>
</div>
<div className="backdrop-blur-lg bg-black/30 p-4 sm:p-6 rounded-xl border border-gray-800">
<p className="text-2xl sm:text-3xl font-light mb-1">10x</p>
<p className="text-gray-400 text-xs">Faster insights</p>
</div>
<div className="backdrop-blur-lg bg-black/30 p-4 sm:p-6 rounded-xl border border-gray-800">
<p className="text-2xl sm:text-3xl font-light mb-1">24/7</p>
<p className="text-gray-400 text-xs">AI assistance</p>
</div>
<div className="backdrop-blur-lg bg-black/30 p-4 sm:p-6 rounded-xl border border-gray-800">
<p className="text-2xl sm:text-3xl font-light mb-1">500+</p>
<p className="text-gray-400 text-xs">Enterprise clients</p>
</div>
</div>
</div>

    </>
  );
}
