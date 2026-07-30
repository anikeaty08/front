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
      

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight">NexusAI</span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">Platform</a>
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

<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black z-0"></div>

<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="flex flex-col md:flex-row items-center">

<div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Amplify</span> your decisions with AI
          </h1>
<p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-lg font-extralight tracking-wide">
            Transform complex data into actionable insights with our advanced AI platform built for modern enterprises.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-black font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all">
              Start free trial
            </button>
<button className="bg-transparent border border-gray-700 rounded-md px-6 py-3 hover:bg-white/5 transition-all">
              See demo
            </button>
</div>
</div>

<div className="md:w-1/2 relative">
<div className="relative h-[500px] w-full mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
<div className="relative z-10 h-full w-full overflow-hidden rounded-xl">
<iframe className="rounded-xl bg-black/50" frameborder="0" height="100%" src="https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO/" width="100%"></iframe>
</div>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<p className="text-4xl font-light mb-1 tracking-tight">87%</p>
<p className="text-gray-400 font-extralight">Accuracy improvement</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">15k+</p>
<p className="text-gray-400 font-extralight">Enterprise users</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">60%</p>
<p className="text-gray-400 font-extralight">Time saved</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">8.5M+</p>
<p className="text-gray-400 font-extralight">Predictions daily</p>
</div>
</div>

<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-blue-900/10 to-transparent">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-light mb-2">Predictive Analytics</h3>
<p className="text-gray-400 font-extralight">Forecast trends and anticipate market changes with our advanced ML models.</p>
</div>
<div className="p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-blue-900/10 to-transparent">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-light mb-2">Natural Language Processing</h3>
<p className="text-gray-400 font-extralight">Extract insights from unstructured text data across multiple languages.</p>
</div>
<div className="p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-blue-900/10 to-transparent">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-light mb-2">Decision Intelligence</h3>
<p className="text-gray-400 font-extralight">Optimize complex decisions with AI-powered recommendation systems.</p>
</div>
</div>
</div>
</div>

    </>
  );
}
