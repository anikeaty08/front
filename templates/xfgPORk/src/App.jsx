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
                        'geist': ['Geist', 'sans-serif'],
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
      
<div className="w-full relative max-w-md">

<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-white to-white transform scale-[0.80] rounded-full blur-3xl opacity-60"></div>

<div className="relative shadow-xl bg-gray-900 border border-gray-800 px-8 py-10 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-center">

<div className="mb-6 text-white">
<svg fill="none" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M12 7V2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>

<h1 className="text-2xl font-normal text-white mb-2">Welcome back</h1>
<p className="text-gray-400 text-sm mb-8">Please enter your credentials to continue</p>

<form className="w-full space-y-4">
<div>
<label className="block text-gray-400 text-sm mb-2" htmlFor="email">Email</label>
<input className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" id="email" placeholder="you@example.com" type="email"/>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<label className="block text-gray-400 text-sm" htmlFor="password">Password</label>
<a className="text-blue-400 text-sm hover:text-blue-300 transition" href="#">Forgot?</a>
</div>
<input className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" id="password" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center">
<input className="h-4 w-4 rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500" id="remember" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-400" htmlFor="remember">Remember me for 30 days</label>
</div>
<button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 mt-2" type="submit">
                    Sign in
                </button>
</form>

<div className="w-full flex items-center my-6">
<div className="flex-grow h-px bg-gray-800"></div>
<span className="px-3 text-sm text-gray-500">or</span>
<div className="flex-grow h-px bg-gray-800"></div>
</div>

<button className="w-full border border-gray-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-800 transition duration-200">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
</svg>
                Continue with Google
            </button>

<p className="text-sm text-gray-400 mt-6">
                Don't have an account? <a className="text-blue-400 hover:text-blue-300 transition" href="#">Sign up</a>
</p>
</div>
</div>

    </>
  );
}
