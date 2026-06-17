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
          colors: {
            taupe: {
              50: '#f8f7f6',
              100: '#e9e6e2',
              200: '#d8d2cc',
              300: '#bfb5ab',
              400: '#a69688',
              500: '#95846f',
              600: '#857361',
              700: '#6f5f51',
              800: '#5c5045',
              900: '#4d443b',
            }
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
      
<div className="w-[390px] h-[852px] rounded-3xl overflow-hidden shadow-md">
<div className="w-full h-full bg-taupe-50 flex flex-col">

<div className="pt-16 pb-10 px-6 flex flex-col items-center">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
<i className="bi bi-cloud-sun text-5xl text-taupe-400"></i>
</div>
<h1 className="text-2xl font-medium text-taupe-800 text-center">Weather App</h1>
<p className="text-taupe-500 text-center mt-2">Sign in to access your personalized weather forecasts</p>
</div>

<div className="flex-1 px-6">
<div className="bg-white p-6 rounded-2xl mb-5 shadow-sm border border-taupe-100">
<div className="mb-5">
<label className="block text-sm font-medium text-taupe-700 mb-1.5" htmlFor="email">Email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="bi bi-envelope text-taupe-400"></i>
</div>
<input className="bg-taupe-50 border border-taupe-200 text-taupe-800 text-sm rounded-xl block w-full pl-10 pr-3 py-3.5 focus:outline-none focus:ring-2 focus:ring-taupe-300" id="email" placeholder="your@email.com" type="email"/>
</div>
</div>
<div className="mb-6">
<div className="flex items-center justify-between mb-1.5">
<label className="block text-sm font-medium text-taupe-700" htmlFor="password">Password</label>
<a className="text-xs text-taupe-600 hover:text-taupe-800" href="#">Forgot password?</a>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="bi bi-lock text-taupe-400"></i>
</div>
<input className="bg-taupe-50 border border-taupe-200 text-taupe-800 text-sm rounded-xl block w-full pl-10 pr-3 py-3.5 focus:outline-none focus:ring-2 focus:ring-taupe-300" id="password" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="flex items-center mb-6">
<input className="w-4 h-4 text-taupe-600 bg-taupe-50 border-taupe-300 rounded focus:ring-taupe-500" id="remember-me" type="checkbox"/>
<label className="ml-2 text-sm text-taupe-600" htmlFor="remember-me">Remember me</label>
</div>
<button className="w-full bg-taupe-700 hover:bg-taupe-800 text-white font-medium py-3.5 px-4 rounded-xl transition duration-200" type="submit">
            Sign In
          </button>
</div>
<div className="text-center mb-6">
<span className="text-taupe-500 text-sm">Don't have an account?</span>
<a className="text-taupe-700 text-sm font-medium ml-1" href="#">Sign up</a>
</div>
<div className="relative flex items-center justify-center mb-6">
<div className="flex-grow border-t border-taupe-200"></div>
<span className="flex-shrink mx-4 text-taupe-500 text-sm">or continue with</span>
<div className="flex-grow border-t border-taupe-200"></div>
</div>
<div className="grid grid-cols-3 gap-3 mb-6">
<button className="flex justify-center items-center py-2.5 px-4 border border-taupe-200 rounded-xl bg-white hover:bg-taupe-50">
<i className="bi bi-google text-xl"></i>
</button>
<button className="flex justify-center items-center py-2.5 px-4 border border-taupe-200 rounded-xl bg-white hover:bg-taupe-50">
<i className="bi bi-apple text-xl"></i>
</button>
<button className="flex justify-center items-center py-2.5 px-4 border border-taupe-200 rounded-xl bg-white hover:bg-taupe-50">
<i className="bi bi-facebook text-xl"></i>
</button>
</div>
</div>
<div className="py-4 px-6 text-center text-xs text-taupe-500">
        By signing in, you agree to our Terms of Service and Privacy Policy
      </div>
<div className="pb-2 flex justify-center">
<div className="w-[134px] h-[5px] bg-taupe-200 rounded-full"></div>
</div>
</div>
</div>

    </>
  );
}
