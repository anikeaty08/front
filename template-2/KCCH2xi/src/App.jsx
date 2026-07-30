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



    document.addEventListener('DOMContentLoaded', () => {
      gsap.from('.container > div', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      });
    });
  
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
      

<div className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-gray-900 to-gray-900"></div>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
<div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl -top-64 -left-64 animate-pulse"></div>
<div className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl top-full right-0 animate-pulse" style={{animationDelay: `1s`}}></div>
</div>

<div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">

<div className="lg:w-1/2 text-center lg:text-left">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Experience</span> the future of technology
        </h1>
<p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
          Discover our collection of cutting-edge devices designed to seamlessly integrate with your digital lifestyle.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
            Explore Devices
          </button>
<button className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-800 transition-all duration-300">
            Learn More
          </button>
</div>

<div className="flex justify-center lg:justify-start gap-8 mt-12">
<div className="text-center">
<p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">10+</p>
<p className="text-gray-400 text-sm">Products</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">5M+</p>
<p className="text-gray-400 text-sm">Users</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">99%</p>
<p className="text-gray-400 text-sm">Satisfaction</p>
</div>
</div>
</div>

<div className="lg:w-1/2 relative">

<div className="relative z-20 transform transition-all duration-500 hover:scale-105 hover:rotate-1">
<img alt="MacBook Pro" className="rounded-lg shadow-2xl shadow-blue-500/20" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop" />

<div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
            New Release
          </div>
</div>

<img alt="iPhone" className="absolute -bottom-10 -left-10 w-36 h-36 object-cover rounded-lg shadow-xl transform -rotate-6 z-10 animate-float" src="https://images.unsplash.com/photo-1592434134753-a70baf7979d5?w=300&h=300&fit=crop" />
<img alt="Apple Watch" className="absolute -top-8 -right-12 w-28 h-28 object-cover rounded-lg shadow-xl transform rotate-12 z-10 animate-float-delayed" src="https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=300&h=300&fit=crop" />

<div className="absolute w-full h-full border-2 border-gray-700 rounded-lg top-6 left-6 -z-10"></div>
<div className="absolute w-20 h-20 bg-blue-500/10 rounded-full -bottom-10 right-20 blur-xl"></div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
<span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>



    </>
  );
}
