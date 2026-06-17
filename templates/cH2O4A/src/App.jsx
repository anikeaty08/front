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
            primary: "#FF3B9A",
            secondary: "#7928CA",
          },
          fontFamily: {
            sans: ["Inter", "sans-serif"],
          },
        },
      },
    };
  


    VANTA.BIRDS({
      el: "#vanta-birds",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundAlpha: 0, // transparent overlay handled by bg-black/20
      color1: 0xff3b9a,
      color2: 0x7928ca,
      birdSize: 1.5,
      wingSpan: 20.0,
      speedLimit: 4.0,
      separation: 60.0,
      quantity: 4.0,
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
      
<div className="max-w-4xl w-full rounded-2xl shadow-xl overflow-hidden bg-white/60 backdrop-blur-sm flex flex-col md:flex-row relative">

<div className="w-full md:w-1/2 p-10 md:p-16 relative z-10">

<div className="mb-12 text-center">
<div className="inline-flex items-center justify-center">
<div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
<div className="h-3 w-3 rounded-full bg-white"></div>
</div>
<span className="ml-3 text-2xl font-semibold text-gray-900 select-none">Serendipity</span>
</div>
</div>
<h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome back</h2>
<form className="space-y-6" novalidate="">
<div>
<label className="block text-sm font-medium text-gray-800 mb-1" htmlFor="email">Email address</label>
<input autocomplete="email" className="w-full px-4 py-2 bg-white/90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" id="email" name="email" placeholder="Enter your email" required="" type="email"/>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<label className="block text-sm font-medium text-gray-800" htmlFor="password">Password</label>
<a className="text-sm text-primary hover:text-secondary transition-colors" href="#">Forgot password?</a>
</div>
<input autocomplete="current-password" className="w-full px-4 py-2 bg-white/90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" id="password" name="password" placeholder="Enter your password" required="" type="password"/>
</div>
<div className="flex items-center">
<input className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" id="remember-me" name="remember-me" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700 select-none" htmlFor="remember-me">
            Remember me
          </label>
</div>
<button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 rounded-lg shadow-md transition duration-300" type="submit">
          Sign in
        </button>
</form>
<div className="mt-8 flex items-center">
<hr className="flex-grow border-gray-300"/>
<span className="mx-4 text-gray-600 text-sm whitespace-nowrap">Or continue with</span>
<hr className="flex-grow border-gray-300"/>
</div>
<div className="grid grid-cols-3 gap-3 mt-6">
<button aria-label="Continue with Google" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors" type="button">
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</button>
<button aria-label="Continue with Facebook" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors" type="button">
<svg className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewbox="0 0 24 24">
<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
</svg>
</button>
<button aria-label="Continue with GitHub" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors" type="button">
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
<p className="text-center text-sm text-gray-700 mt-8 select-none">
        Don't have an account?
        <a className="text-primary font-medium hover:text-secondary transition-colors" href="#">Sign up</a>
</p>
</div>

<div className="hidden md:block w-1/2 h-[600px] relative" id="vanta-birds">

<div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-10 select-none">
<h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
          Welcome to Serendipity
        </h2>
<p className="text-center max-w-md text-lg">
          Imagine with us — unlock creativity and craft your unique vision with AI-powered tools.
        </p>
</div>
</div>
</div>


    </>
  );
}
