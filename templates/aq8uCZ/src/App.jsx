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
            dark: '#101014',
            accent: '#5E6AD2',
            subtle: 'rgba(255,255,255,0.1)'
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif']
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
      
<div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-[#101014] to-accent/10 pointer-events-none -z-10"></div>
<div className="w-full max-w-md mx-auto p-8 rounded-2xl shadow-2xl border border-subtle bg-[#181821] backdrop-blur">
<div className="flex items-center justify-center mb-9">
<svg className="w-10 h-10" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-3 text-2xl font-semibold">Quantum</span>
</div>
<h2 className="text-2xl font-bold mb-2 text-center">Sign in to your account</h2>
<p className="text-gray-400 mb-8 text-sm text-center">Welcome back! Please enter your credentials.</p>
<form>
<div className="mb-5">
<label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="email">Email</label>
<input autocomplete="email" className="w-full px-4 py-3 rounded-md bg-subtle text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition" id="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="mb-4">
<label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="password">Password</label>
<input autocomplete="current-password" className="w-full px-4 py-3 rounded-md bg-subtle text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition" id="password" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center justify-between mb-7">
<label className="flex items-center space-x-2 text-sm text-gray-400">
<input className="accent-accent rounded bg-subtle border-subtle focus:ring-0" type="checkbox" />
<span>Remember me</span>
</input></label>
<a className="text-accent hover:underline text-sm font-medium" href="#">Forgot password?</a>
</div>
<button className="w-full py-3 bg-accent text-white font-semibold rounded-full hover:bg-opacity-90 transition" type="submit">Sign in</button>
</form>
<div className="mt-8 text-center">
<span className="text-sm text-gray-400">Don’t have an account?</span>
<a className="text-accent font-medium hover:underline ml-1" href="#">Sign up</a>
</div>
</div>

    </>
  );
}
