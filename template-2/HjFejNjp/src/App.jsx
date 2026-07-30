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
      
<div className="container mx-auto px-4 py-8 max-w-6xl">
<header className="flex justify-between items-center mb-12">
<div>
<h1 className="text-3xl font-bold"><span className="text-white">Quantum</span><span className="text-orange-500">/Shield</span></h1>
<p className="text-sm text-gray-300 mt-1">Fortifying digital frontiers with intelligent protection</p>
</div>
<nav className="hidden md:block">
<ul className="flex space-x-8">
<li><a className="border-l-4 border-orange-500 pl-2 text-orange-500" href="#">Enterprise</a></li>
<li><a className="hover:text-orange-300 transition" href="#">Innovation</a></li>
<li><a className="hover:text-orange-300 transition" href="#">Products</a></li>
<li><a className="hover:text-orange-300 transition" href="#">Partners</a></li>
<li><a className="hover:text-orange-300 transition" href="#">Support</a></li>
</ul>
</nav>
<button className="md:hidden">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</header>
<main>
<section className="mb-16">
<h2 className="text-5xl font-bold leading-tight mb-8 max-w-2xl">ADVANCED THREAT INTELLIGENCE PLATFORM</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
<div className="p-6 border-t border-purple-700">
<div className="text-orange-500 mb-4">
<svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Cognitive Defense</h3>
<p className="text-gray-300 mb-4">Autonomous threat detection powered by advanced machine learning algorithms</p>
<a className="text-orange-500 hover:underline" href="#">Explore capabilities ›</a>
</div>
<div className="p-6 border-t border-purple-700">
<div className="text-teal-400 mb-4">
<svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Behavioral Analytics</h3>
<p className="text-gray-300 mb-4">Identify anomalous patterns and zero-day vulnerabilities before exploitation</p>
<a className="text-white hover:underline" href="#">Explore capabilities ›</a>
</div>
<div className="p-6 border-t border-purple-700">
<div className="text-white mb-4">
<svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Endpoint Protection</h3>
<p className="text-gray-300 mb-4">Comprehensive security for all devices across your organizational ecosystem</p>
<a className="text-white hover:underline" href="#">Explore capabilities ›</a>
</div>
</div>
</section>
<section className="relative">
<div className="absolute -top-20 right-0 opacity-20 hidden lg:block">
<div className="relative w-64 h-64">
<div className="absolute w-32 h-32 border border-orange-500 opacity-50 animate-pulse"></div>
<div className="absolute w-24 h-24 border border-teal-400 opacity-50 top-20 left-20 animate-pulse" style={{animationDelay: `1s`}}></div>
<div className="absolute w-40 h-40 border border-purple-500 opacity-50 top-10 left-10 animate-pulse" style={{animationDelay: `2s`}}></div>
</div>
</div>
<div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-8 rounded-lg shadow-xl">
<h3 className="text-2xl font-bold mb-4">Ready to strengthen your security posture?</h3>
<p className="mb-6">Schedule a personalized threat assessment with our security experts.</p>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition">
            Request Demo
          </button>
</div>
</section>
</main>
</div>

    </>
  );
}
