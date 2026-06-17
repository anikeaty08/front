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
      
<div className="relative w-[375px] h-[812px] bg-gray-900 rounded-[54px] overflow-hidden shadow-xl border-8 border-gray-800">

<div className="h-full overflow-y-auto bg-gray-900">

<header className="p-4 pt-12">
<div className="flex justify-center mb-8">

<div className="w-14 h-14 rounded-full bg-indigo-900/50 flex items-center justify-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
<path clip-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<h1 className="text-white font-bold text-3xl text-center mb-2">Welcome Back</h1>
<p className="text-gray-400 text-center mb-8">Log in to access your account</p>
</header>

<div className="px-6">

<div className="mb-5">
<label className="block text-gray-400 text-sm mb-2">Email</label>
<div className="bg-gray-800 rounded-xl p-4 flex items-center">
<svg className="h-5 w-5 text-gray-500 mr-3" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
<input className="bg-transparent text-white w-full outline-none" placeholder="your@email.com" type="email"/>
</div>
</div>

<div className="mb-6">
<label className="block text-gray-400 text-sm mb-2">Password</label>
<div className="bg-gray-800 rounded-xl p-4 flex items-center">
<svg className="h-5 w-5 text-gray-500 mr-3" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fill-rule="evenodd"></path>
</svg>
<input className="bg-transparent text-white w-full outline-none" placeholder="••••••••" type="password"/>
<button>
<svg className="h-5 w-5 text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
<path clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</div>

<div className="flex justify-between items-center mb-8">
<div className="flex items-center">
<input className="h-4 w-4 bg-gray-800 border-gray-700 rounded mr-2 checked:bg-indigo-600" id="remember" type="checkbox"/>
<label className="text-gray-400 text-sm" htmlFor="remember">Remember me</label>
</div>
<button className="text-indigo-400 text-sm">Forgot Password?</button>
</div>

<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-4 rounded-xl transition duration-200 mb-6">
          Log In
        </button>

<div className="flex flex-col items-center mb-8">
<p className="text-gray-400 text-sm mb-4">Or log in with</p>
<button className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center">
<svg className="h-7 w-7 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" fill-rule="evenodd"></path>
</svg>
</button>
</div>

<div className="text-center">
<p className="text-gray-400">
            Don't have an account? 
            <a className="text-indigo-400 font-medium" href="#">Sign Up</a>
</p>
</div>
</div>

<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
</div>
</div>

    </>
  );
}
