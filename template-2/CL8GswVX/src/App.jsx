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
      VANTA.NET({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 128,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,
        backgroundColor: 0x030712,
        points: 6,
        maxDistance: 15.00,
        spacing: 18.00,
        showDots: true
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
      
<div className="max-w-md w-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
<div className="h-32 relative" id="vanta-canvas">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 mb-2 inline-block">JOIN NETWORK</span>
<h2 className="text-2xl font-bold text-white">Sign Up</h2>
<div className="h-1 w-12 bg-gray-400 mt-2 rounded-full"></div>
</div>
</div>
<div className="p-6">
<form className="space-y-4">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-300" htmlFor="name">Full Name</label>
<input className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500" id="name" name="name" type="text" />
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-300" htmlFor="email">Email Address</label>
<input className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500" id="email" name="email" type="email" />
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-300" htmlFor="password">Password</label>
<input className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500" id="password" name="password" type="password" />
</div>
<div className="flex items-center">
<input className="h-4 w-4 bg-gray-800 border-gray-700 rounded text-gray-500 focus:ring-gray-600" id="terms" name="terms" type="checkbox" />
<label className="ml-2 block text-xs text-gray-400" htmlFor="terms">
            I agree to the <a className="text-gray-300 hover:text-white" href="#">Terms of Service</a> and <a className="text-gray-300 hover:text-white" href="#">Privacy Policy</a>
</label>
</div>
<div className="pt-2">
<button className="w-full px-4 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition flex items-center justify-center font-medium" type="submit">
<svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" fillRule="evenodd"></path>
</svg>
            Create Account
          </button>
</div>
</form>
<div className="mt-6 text-center">
<p className="text-xs text-gray-400">
          Already have an account? <a className="text-gray-300 hover:text-white" href="#">Sign in</a>
</p>
</div>
<div className="mt-6 pt-4 border-t border-gray-800">
<div className="flex items-center justify-center space-x-4">
<div className="text-xs text-gray-400">Network status:</div>
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-green-400 mr-1.5"></span>
<span className="text-xs text-gray-300">Online</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
