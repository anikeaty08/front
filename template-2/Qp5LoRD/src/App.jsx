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



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'heading': ['"IBM Plex Condensed"', 'sans-serif'],
                        'body': ['Inter', 'sans-serif'],
                    },
                    animation: {
                        'slide-in': 'slideIn 0.5s ease-in-out forwards',
                        'slide-in-delayed': 'slideIn 0.5s ease-in-out 0.2s forwards',
                        'slide-in-more-delayed': 'slideIn 0.5s ease-in-out 0.4s forwards',
                    },
                    keyframes: {
                        slideIn: {
                            '0%': { transform: 'translateY(30px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' },
                        }
                    }
                }
            }
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
      
<div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">

<div className="absolute inset-0 z-0 opacity-10">
<div className="absolute inset-0 bg-grid-black/[0.2] bg-[length:20px_20px]"></div>
<svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 0 10 L 40 10 M 10 0 L 10 40" fill="none" stroke="black" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="container mx-auto px-4 py-12 relative z-10">
<div className="max-w-5xl mx-auto">
<div className="glass rounded-2xl shadow-2xl p-8 md:p-12 opacity-0 animate-slide-in">
<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
<div className="w-full md:w-1/2 space-y-6">
<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
                                Design with Purpose
                            </h1>
<p className="text-base md:text-lg lg:text-xl text-gray-700 opacity-0 animate-slide-in-delayed">
                                Create meaningful experiences through thoughtful design and innovative solutions.
                            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-slide-in-more-delayed">
<button className="px-8 py-3 bg-black text-white rounded-lg font-medium transition-all hover:bg-gray-800">
                                    Get Started
                                </button>
<button className="px-8 py-3 border border-black text-black rounded-lg font-medium transition-all hover:bg-black/5">
                                    Learn More
                                </button>
</div>
</div>
<div className="w-full md:w-1/2 opacity-0 animate-slide-in-delayed">
<div className="aspect-video rounded-xl overflow-hidden shadow-xl">
<img alt="Abstract glass design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" />
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 opacity-0 animate-slide-in-more-delayed">
<div className="glass p-6 rounded-xl shadow-xl">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-heading text-xl font-semibold mb-2">Fast Performance</h3>
<p className="text-sm text-gray-600">Optimized for speed and efficiency across all devices and platforms.</p>
</div>
<div className="glass p-6 rounded-xl shadow-xl">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-heading text-xl font-semibold mb-2">Secure by Design</h3>
<p className="text-sm text-gray-600">Built with security in mind at every stage of development.</p>
</div>
<div className="glass p-6 rounded-xl shadow-xl">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-heading text-xl font-semibold mb-2">Modular Components</h3>
<p className="text-sm text-gray-600">Flexible building blocks that adapt to your specific needs.</p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
