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
      
<div className="max-w-6xl mx-auto p-6 md:p-8">

<div className="flex flex-col md:flex-row gap-8 mb-16">
<div className="md:w-2/3">
<h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">Smart Home Automation</h1>
<p className="text-lg mb-6 text-gray-700 max-w-xl">
                    Transform your living space with our intelligent home solutions. Control lighting, climate, security, and entertainment systems with a single touch or voice command.
                </p>
<a className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300" href="#">Explore Solutions</a>
</div>
<div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
<div className="flex items-center mb-4">
<div className="bg-green-100 p-2 rounded-lg mr-3 shadow-sm">
<svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-bold">4.8/5 Customer Satisfaction</p>
</div>
</div>
<div className="flex items-center">
<div className="bg-blue-100 p-2 rounded-lg mr-3 shadow-sm">
<svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-bold">15+ Industry Awards</p>
</div>
</div>
</div>
</div>

<div className="mb-16">
<div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full mb-8 shadow-sm">
<div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
<span className="font-medium text-sm">SMART FEATURES</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
<div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-bold text-lg mb-2">Voice Control</h3>
<p className="text-gray-600">Control your entire home with simple voice commands.</p>
</div>
<div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
<div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-bold text-lg mb-2">Energy Management</h3>
<p className="text-gray-600">Monitor and optimize your home's energy consumption.</p>
</div>
<div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
<div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-bold text-lg mb-2">Security Systems</h3>
<p className="text-gray-600">Keep your home safe with advanced security features.</p>
</div>
<div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
<div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-bold text-lg mb-2">Remote Access</h3>
<p className="text-gray-600">Control your home from anywhere in the world.</p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8">
<div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
<h2 className="text-2xl font-bold mb-3 text-blue-800">Smart Living Made Simple</h2>
<p className="mb-4 text-gray-700">Our integrated solutions make managing your home effortless. Experience comfort, convenience, and peace of mind with cutting-edge technology.</p>
<a className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition duration-300" href="#">Learn More</a>
</div>
<div className="md:w-1/2">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center p-4 bg-white rounded-xl shadow-md">
<div className="bg-blue-100 p-3 rounded-lg mr-3">
<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-bold">200k+ Homes Upgraded</p>
</div>
</div>
<div className="flex items-center p-4 bg-white rounded-xl shadow-md">
<div className="bg-green-100 p-3 rounded-lg mr-3">
<svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-bold">45+ Countries Served</p>
</div>
</div>
<div className="flex items-center p-4 bg-white rounded-xl shadow-md">
<div className="bg-yellow-100 p-3 rounded-lg mr-3">
<svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-bold">30% Energy Savings</p>
</div>
</div>
<div className="flex items-center p-4 bg-white rounded-xl shadow-md">
<div className="bg-red-100 p-3 rounded-lg mr-3">
<svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-bold">99.9% System Uptime</p>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
