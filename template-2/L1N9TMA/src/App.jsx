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
      

<nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
<div className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight">Orbital</span>
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
</div>
</nav>

<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-black z-0"></div>

<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-6">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Platform</span> features
        </h1>
<p className="text-gray-300 text-xl mb-8 font-extralight">
          Discover the tools that power thousands of teams worldwide.
        </p>
</div>

<div className="space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gradient-to-br from-indigo-900/20 to-black border border-indigo-800/30 rounded-2xl p-8 hover:border-indigo-600/50 transition-all duration-300">
<div className="p-2 bg-indigo-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Lightning Fast</h3>
<p className="text-gray-400 font-extralight">Optimized for performance, our platform delivers results in milliseconds.</p>
</div>

<div className="md:col-span-2 bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/30 rounded-2xl p-8 hover:border-purple-600/50 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-center">
<div className="md:w-1/2 mb-6 md:mb-0">
<div className="p-2 bg-purple-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Enhanced Security</h3>
<p className="text-gray-400 font-extralight">End-to-end encryption and regular security audits keep your data protected at all times.</p>
</div>
<div className="md:w-1/2 md:pl-8 flex justify-center">
<div className="relative">
<div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>
<div className="relative z-10 bg-gradient-to-br from-purple-900/40 to-black/60 p-4 rounded-xl border border-purple-500/30">
<div className="w-full h-32 flex items-center justify-center">
<svg className="w-20 h-20 text-purple-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 bg-gradient-to-br from-blue-900/20 to-black border border-blue-800/30 rounded-2xl p-8 hover:border-blue-600/50 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-center">
<div className="md:w-1/2 mb-6 md:mb-0">
<div className="p-2 bg-blue-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Intelligent Collaboration</h3>
<p className="text-gray-400 font-extralight">Work together seamlessly with real-time updates, smart suggestions, and conflict resolution.</p>
</div>
<div className="md:w-1/2 md:pl-8">
<div className="space-y-3">
<div className="bg-gradient-to-r from-blue-900/30 to-black/50 p-3 rounded-lg border border-blue-800/30">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-blue-600/40 flex items-center justify-center mr-3">
<span className="text-xs">AB</span>
</div>
<div className="text-sm text-gray-300">Just added new section</div>
</div>
</div>
<div className="bg-gradient-to-r from-blue-900/30 to-black/50 p-3 rounded-lg border border-blue-800/30">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-indigo-600/40 flex items-center justify-center mr-3">
<span className="text-xs">MJ</span>
</div>
<div className="text-sm text-gray-300">Commenting on latest changes</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-800/30 rounded-2xl p-8 hover:border-cyan-600/50 transition-all duration-300">
<div className="p-2 bg-cyan-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Cloud Integration</h3>
<p className="text-gray-400 font-extralight">Synchronize with your favorite cloud providers for seamless access across all your devices.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-800/30 rounded-2xl p-8 hover:border-emerald-600/50 transition-all duration-300">
<div className="p-2 bg-emerald-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Advanced Analytics</h3>
<p className="text-gray-400 font-extralight">Gain deep insights into your workflow with customizable dashboards and reports.</p>
</div>

<div className="md:col-span-2 bg-gradient-to-br from-fuchsia-900/20 to-black border border-fuchsia-800/30 rounded-2xl p-8 hover:border-fuchsia-600/50 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-center">
<div className="md:w-1/2 mb-6 md:mb-0">
<div className="p-2 bg-fuchsia-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Customizable Workflows</h3>
<p className="text-gray-400 font-extralight">Design and automate processes that match your unique business requirements with our intuitive workflow builder.</p>
</div>
<div className="md:w-1/2 md:pl-8">
<div className="relative">
<div className="absolute inset-0 bg-fuchsia-500/20 blur-2xl rounded-full"></div>
<div className="relative z-10 bg-gradient-to-br from-fuchsia-900/40 to-black/60 p-4 rounded-xl border border-fuchsia-500/30">
<div className="flex flex-col space-y-2">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 rounded-full bg-fuchsia-400"></div>
<div className="h-1 flex-grow bg-fuchsia-800/50 rounded"></div>
<div className="w-3 h-3 rounded-full bg-purple-400"></div>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 rounded-full bg-purple-400"></div>
<div className="h-1 flex-grow bg-purple-800/50 rounded"></div>
<div className="w-3 h-3 rounded-full bg-indigo-400"></div>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 rounded-full bg-indigo-400"></div>
<div className="h-1 flex-grow bg-indigo-800/50 rounded"></div>
<div className="w-3 h-3 rounded-full bg-blue-400"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 bg-gradient-to-br from-rose-900/20 to-black border border-rose-800/30 rounded-2xl p-8 hover:border-rose-600/50 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-center">
<div className="md:w-1/2 mb-6 md:mb-0">
<div className="p-2 bg-rose-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Advanced Configuration</h3>
<p className="text-gray-400 font-extralight">Fine-tune every aspect of your workspace with powerful settings and controls that adapt to your team's evolving needs.</p>
</div>
<div className="md:w-1/2 md:pl-8">
<div className="grid grid-cols-2 gap-3">
<div className="bg-gradient-to-r from-rose-900/30 to-black/50 p-3 rounded-lg border border-rose-800/30 flex flex-col items-center">
<div className="text-xs text-gray-400 mb-1">Performance</div>
<div className="text-rose-300 text-lg">98%</div>
</div>
<div className="bg-gradient-to-r from-rose-900/30 to-black/50 p-3 rounded-lg border border-rose-800/30 flex flex-col items-center">
<div className="text-xs text-gray-400 mb-1">Uptime</div>
<div className="text-rose-300 text-lg">99.9%</div>
</div>
<div className="bg-gradient-to-r from-rose-900/30 to-black/50 p-3 rounded-lg border border-rose-800/30 flex flex-col items-center">
<div className="text-xs text-gray-400 mb-1">Requests</div>
<div className="text-rose-300 text-lg">1.2M</div>
</div>
<div className="bg-gradient-to-r from-rose-900/30 to-black/50 p-3 rounded-lg border border-rose-800/30 flex flex-col items-center">
<div className="text-xs text-gray-400 mb-1">Users</div>
<div className="text-rose-300 text-lg">10K+</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-800/30 rounded-2xl p-8 hover:border-amber-600/50 transition-all duration-300">
<div className="p-2 bg-amber-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl mb-3 font-medium">Smart Filtering</h3>
<p className="text-gray-400 font-extralight">Find exactly what you need with AI-powered search and intelligent content organization.</p>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-16"></div>

<div className="text-center">
<h2 className="text-3xl md:text-4xl font-light mb-6">
          Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">experience</span> Orbital?
        </h2>
<p className="text-gray-400 font-extralight max-w-2xl mx-auto mb-8">
          Join thousands of teams already using our platform to accelerate their workflow.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-black font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all">
            Get started
          </button>
<button className="bg-transparent border border-gray-700 rounded-md px-6 py-3 hover:bg-white/5 transition-all">
            View demo
          </button>
</div>
</div>
</div>
</div>

    </>
  );
}
