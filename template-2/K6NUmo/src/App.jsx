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
      
<div className="w-full max-w-md p-8 rounded-3xl backdrop-blur-xl bg-white bg-opacity-20 border border-white border-opacity-10">
<div className="space-y-2 mb-8">
<h1 className="text-2xl font-bold text-white">Create an account</h1>
<p className="text-white text-opacity-70">Let's get started with your 30 days free trial.</p>
</div>
<div className="space-y-4">
<div className="relative">
<input className="w-full py-3 px-4 rounded-lg bg-black bg-opacity-20 border border-white border-opacity-10 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email address" type="email" />
<div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-opacity-70">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
</div>
</div>
<div className="relative">
<input className="w-full py-3 px-4 rounded-lg bg-black bg-opacity-20 border border-white border-opacity-10 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" type="password" />
<div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-opacity-70">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
<path clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fillRule="evenodd"></path>
</svg>
</div>
</div>
<div className="flex justify-end">
<a className="text-white text-sm" href="#">Forgot password</a>
</div>
<button className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium flex items-center justify-center space-x-2 shadow-lg">
<span>Continue</span>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fillRule="evenodd"></path>
</svg>
</button>
</div>
<div className="my-6 flex items-center">
<div className="flex-1 h-px bg-white bg-opacity-10"></div>
<span className="px-4 text-white text-opacity-70 text-sm">or</span>
<div className="flex-1 h-px bg-white bg-opacity-10"></div>
</div>
<div className="space-y-4">
<button className="w-full py-3 px-4 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-10 rounded-lg text-white font-medium flex items-center justify-center space-x-2">
<span>Sign up with Google</span>
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
<path d="M12 8v8M8 12h8"></path>
</svg>
</button>
<button className="w-full py-3 px-4 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-10 rounded-lg text-white font-medium flex items-center justify-center space-x-2">
<span>Sign up with Apple</span>
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3C6.5 3 4.5 5 4.5 9.5c0 3.5 2 6.5 5.5 6.5 1.5 0 2.5-1 3-1s1.5 1 3 1c3.5 0 5.5-3 5.5-6.5 0-4.5-2-6.5-4.5-6.5-1.5 0-3 1-4 1s-2.5-1-4-1z"></path>
<path d="M12 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path>
</svg>
</button>
</div>
<p className="mt-6 text-white text-opacity-50 text-sm text-center">
            By clicking on Sign up, you agree to our <a className="text-white" href="#">Terms of service</a> and <a className="text-white" href="#">Privacy policy</a>.
        </p>
</div>

    </>
  );
}
