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
      VANTA.HALO({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        baseColor: 0x3b82f6,
        backgroundColor: 0x111827,
        amplitudeFactor: 1.5,
        size: 1.5
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
      
<div className="max-w-5xl w-full rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row">

<div className="md:w-1/2 h-64 md:h-auto relative bg-gray-900" id="vanta-canvas">
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/90 md:via-transparent md:to-gray-900 z-10"></div>
<div className="absolute top-8 left-8 z-20">
<div className="flex items-center mb-6">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
<svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fillRule="evenodd"></path>
</svg>
</div>
<span className="ml-2 text-sm font-light tracking-tight text-blue-200">NETGUARD</span>
</div>
<span className="px-2 py-1 bg-blue-900/80 rounded-full text-xs text-blue-200 mb-2 inline-block tracking-tight">SECURE ACCESS</span>
<h2 className="text-3xl font-light text-white tracking-tighter">Welcome<br />Back</h2>
<div className="h-0.5 w-16 bg-blue-400 mt-3 rounded-full"></div>
<div className="mt-8 grid grid-cols-2 gap-4 max-w-xs">
<div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
<div className="text-xs text-gray-400 mb-1">UPTIME</div>
<div className="text-white text-lg font-light">99.9%</div>
</div>
<div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
<div className="text-xs text-gray-400 mb-1">TRAFFIC</div>
<div className="text-white text-lg font-light">12.4 TB</div>
</div>
</div>
</div>
</div>

<div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
<div>
<div className="mb-2 flex items-center justify-between">
<h3 className="text-xl font-light text-gray-800 tracking-tight">Login</h3>
<div className="text-sm text-gray-500 font-light">Need help?</div>
</div>
<p className="text-gray-500 text-sm font-light mb-6">Access your dashboard and network controls with enhanced security protocols.</p>
<form className="space-y-5">
<div className="space-y-2">
<label className="block text-sm font-light text-gray-700" htmlFor="email">Email Address</label>
<div className="relative">
<div className="absolute left-3 input-icon text-gray-400">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
</div>
<input className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="email" name="email" placeholder="you@company.com" type="email" />
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between">
<label className="block text-sm font-light text-gray-700" htmlFor="password">Password</label>
<a className="text-xs text-blue-600 hover:text-blue-800" href="#">Forgot password?</a>
</div>
<div className="relative">
<div className="absolute left-3 input-icon text-gray-400">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fillRule="evenodd"></path>
</svg>
</div>
<input className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="password" name="password" placeholder="••••••••" type="password" />
</div>
</div>
<div className="flex items-center">
<input className="h-4 w-4 bg-gray-50 border-gray-300 rounded text-blue-600 focus:ring-blue-500" id="remember" name="remember" type="checkbox" />
<label className="ml-2 block text-sm text-gray-600 font-light" htmlFor="remember">
              Remember this device
            </label>
</div>
<div className="pt-2">
<button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center justify-center font-light" type="submit">
<svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" fillRule="evenodd"></path>
</svg>
              Sign In
            </button>
</div>
</form>
<div className="mt-8 pt-6 border-t border-gray-200">
<div className="flex justify-between items-center">
<p className="text-sm text-gray-500 font-light">
              New user? <a className="text-blue-600 hover:text-blue-800" href="#">Create account</a>
</p>
<div className="flex items-center text-xs text-gray-500 font-light">
<svg className="h-4 w-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
              SSL Secured
            </div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
