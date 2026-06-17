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
        minHeight: 150,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,
        backgroundColor: 0x171717,
        points: 8,
        maxDistance: 20.00,
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
      
<div className="max-w-md w-full card-container">
<div className="card-content shadow-lg backdrop-blur-sm">
<div className="h-[150px] relative" id="vanta-canvas">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-neutral-800/80 rounded-full text-xs text-neutral-400 mb-2 inline-block">SECURE ACCESS</span>
<h2 className="text-2xl font-bold text-white">Login Portal</h2>
<div className="h-1 w-12 bg-neutral-400 mt-2 rounded-full"></div>
</div>
</div>
<div className="p-6 flex flex-col bg-neutral-900">
<div>
<span className="px-2 py-1 bg-neutral-800 rounded-full text-xs text-neutral-400 mb-2 inline-block">AUTHENTICATION</span>
<h3 className="text-xl font-semibold text-neutral-200 mb-4">Account Login</h3>
<form className="space-y-4 mb-6">
<div>
<label className="text-neutral-300 text-xs font-medium block mb-1" htmlFor="email">EMAIL</label>
<input className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-600 text-sm" id="email" placeholder="your@email.com" required="" type="email"/>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<label className="text-neutral-300 text-xs font-medium" htmlFor="password">PASSWORD</label>
<a className="text-neutral-400 text-xs hover:text-neutral-300" href="#">Forgot?</a>
</div>
<input className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-600 text-sm" id="password" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center">
<input className="w-4 h-4 bg-neutral-800 border-neutral-700 rounded mr-2" id="remember" type="checkbox"/>
<label className="text-neutral-400 text-xs" htmlFor="remember">Remember this device</label>
</div>
</form>
<div className="flex justify-between text-sm space-x-3">
<button className="flex-1 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg transition flex items-center justify-center font-medium" type="submit">
<svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Login
            </button>
<button className="flex-1 px-4 py-2.5 bg-black hover:bg-neutral-800 text-neutral-300 rounded-lg transition flex items-center justify-center font-medium">
<svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              SSO
            </button>
</div>
</div>
<div className="mt-6 pt-4 text-center">
<div className="divider-gradient mb-4"></div>
<p className="text-neutral-400 text-xs">Don't have an account? <a className="text-neutral-300 hover:underline" href="#">Request Access</a></p>
<div className="flex items-center justify-center mt-4 space-x-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-neutral-400 text-xs">System Status: Operational</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
