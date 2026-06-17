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



    document.addEventListener('DOMContentLoaded', function() {
      VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x635BFF,
        shininess: 30.00,
        waveHeight: 15.00,
        waveSpeed: 0.75,
        zoom: 0.65
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
      
<div className="relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-50" id="vanta-bg"></div>

<nav className="relative z-10 container mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center">
<svg className="w-10 h-10" fill="none" viewbox="0 0 40 40">
<path d="M20 5L30 20L20 35L10 20L20 5Z" fill="#635BFF"></path>
</svg>
<span className="ml-3 text-lg font-medium">Pulse</span>
</div>
<div className="hidden md:flex space-x-8 text-sm">
<a className="text-gray-600 hover:text-gray-900" href="#">Products</a>
<a className="text-gray-600 hover:text-gray-900" href="#">Solutions</a>
<a className="text-gray-600 hover:text-gray-900" href="#">Developers</a>
<a className="text-gray-600 hover:text-gray-900" href="#">Resources</a>
<a className="text-gray-600 hover:text-gray-900" href="#">Pricing</a>
</div>
<div>
<a className="text-sm font-medium hover:text-gray-900 mr-6" href="#">Sign in</a>
<a className="px-4 py-2 text-sm font-medium bg-[#635BFF] text-white rounded-full hover:bg-opacity-90 transition-colors" href="#">Start now</a>
</div>
</nav>

<div className="relative z-10 container mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-40">
<div className="max-w-4xl mx-auto text-center mb-16">
<h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
          Infrastructure for the internet economy
        </h1>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Millions of companies worldwide trust our platform to accept payments, send payouts, and manage their businesses online.
        </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-3 bg-[#635BFF] text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-colors" href="#">
            Start now
          </a>
<a className="px-8 py-3 bg-white text-[#0a2540] text-sm font-medium rounded-full border border-gray-300 hover:border-gray-400 transition-colors" href="#">
            Contact sales
          </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
<div className="text-center">
<p className="text-4xl font-bold text-[#635BFF]">89%</p>
<p className="text-xs uppercase tracking-wider mt-2 text-gray-500">of the fortune 500</p>
</div>
<div className="text-center">
<p className="text-4xl font-bold text-[#635BFF]">150+</p>
<p className="text-xs uppercase tracking-wider mt-2 text-gray-500">countries</p>
</div>
<div className="text-center">
<p className="text-4xl font-bold text-[#635BFF]">$640B+</p>
<p className="text-xs uppercase tracking-wider mt-2 text-gray-500">processed annually</p>
</div>
<div className="text-center">
<p className="text-4xl font-bold text-[#635BFF]">4.4M+</p>
<p className="text-xs uppercase tracking-wider mt-2 text-gray-500">businesses</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-[#635BFF] to-blue-500"></div>
</div>


    </>
  );
}
