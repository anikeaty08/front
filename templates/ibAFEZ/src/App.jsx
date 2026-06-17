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
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1e40af,
        shininess: 30,
        waveHeight: 15,
        waveSpeed: 0.75,
        zoom: 0.9
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
      
<div className="relative min-h-screen" id="vanta-canvas">
<div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
<nav className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
</svg>
</div>
<span className="ml-2 text-xl font-semibold text-white">TRUSTBANK</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-gray-300 hover:text-white" href="#">Personal</a>
<a className="text-gray-300 hover:text-white" href="#">Business</a>
<a className="text-gray-300 hover:text-white" href="#">Investments</a>
<a className="text-gray-300 hover:text-white" href="#">About</a>
</div>
<div>
<button className="gradient-button text-white px-5 py-2 rounded-lg transition">Online Banking</button>
</div>
</div>
</nav>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 flex flex-col items-center text-center">
<span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-blue-700/20 text-blue-300 rounded-full text-sm mb-6 inline-block">SECURE BANKING</span>
<h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Banking That Works For You</h1>
<p className="max-w-2xl text-xl text-gray-300 mb-10">Secure, reliable financial solutions designed to help you achieve your goals and secure your future.</p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<button className="gradient-button text-white px-8 py-3 rounded-lg text-lg font-medium transition">
          Open Account
        </button>
<button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg text-lg font-medium transition">
          Learn More
        </button>
</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">24/7</div>
<div className="text-gray-400 text-sm">Customer Support</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">99.9%</div>
<div className="text-gray-400 text-sm">Uptime</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">2.3M+</div>
<div className="text-gray-400 text-sm">Customers</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-1">A+</div>
<div className="text-gray-400 text-sm">Security Rating</div>
</div>
</div>
</div>
</div>
<div className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-gray-900 mb-4">Banking Services</h2>
<p className="max-w-2xl mx-auto text-gray-600">Comprehensive financial solutions tailored to your personal and business needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="feature-card bg-gray-50 p-6 rounded-xl border border-gray-200">
<div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Banking</h3>
<p className="text-gray-600 mb-4">Checking, savings, and credit cards with competitive rates and low fees.</p>
<a className="text-blue-600 font-medium hover:text-blue-800" href="#">Learn more →</a>
</div>
<div className="feature-card bg-gray-50 p-6 rounded-xl border border-gray-200">
<div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Business Banking</h3>
<p className="text-gray-600 mb-4">Solutions to help your business grow, from merchant services to commercial lending.</p>
<a className="text-blue-600 font-medium hover:text-blue-800" href="#">Learn more →</a>
</div>
<div className="feature-card bg-gray-50 p-6 rounded-xl border border-gray-200">
<div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Investments</h3>
<p className="text-gray-600 mb-4">Retirement planning, wealth management, and investment strategies for your future.</p>
<a className="text-blue-600 font-medium hover:text-blue-800" href="#">Learn more →</a>
</div>
</div>
</div>
</div>
<div className="py-16 bg-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
<div className="mb-8 md:mb-0 md:max-w-xl">
<h2 className="text-3xl font-bold text-white mb-4">Ready to start banking with us?</h2>
<p className="text-gray-300">Open an account in minutes and experience banking designed around your needs.</p>
</div>
<div>
<button className="gradient-button text-white px-8 py-3 rounded-lg text-lg font-medium transition">
          Apply Now
        </button>
</div>
</div>
</div>


    </>
  );
}
