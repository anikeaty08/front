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
      
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 opacity-30 blur-3xl"></div>
<div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-pink-400 opacity-40 blur-2xl"></div>
</div>
<div className="relative z-10 w-full max-w-md mx-auto">
<div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl shadow-2xl p-8">
<div className="flex flex-col items-center mb-8">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 flex items-center justify-center shadow-lg mb-4">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
<path d="M12 14c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z"></path>
</svg>
</div>
<h2 className="text-2xl font-bold text-blue-900 mb-1">Welcome back</h2>
<p className="text-blue-500 text-sm">Sign in to your account</p>
</div>
<form className="space-y-6">
<div>
<label className="block text-blue-800 text-sm font-semibold mb-2" htmlFor="email">Email</label>
<input autocomplete="email" className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white/80 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" id="email" name="email" placeholder="you@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-blue-800 text-sm font-semibold mb-2" htmlFor="password">Password</label>
<input autocomplete="current-password" className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white/80 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" id="password" name="password" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<input className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-blue-300" id="remember" name="remember" type="checkbox"/>
<label className="ml-2 block text-sm text-blue-600" htmlFor="remember">Remember me</label>
</div>
<a className="text-sm text-blue-500 hover:underline" href="#">Forgot password?</a>
</div>
<button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold text-lg shadow-md hover:from-blue-600 hover:to-violet-600 transition" type="submit">
          Sign in
        </button>
</form>
<div className="mt-8 text-center">
<span className="text-blue-400 text-sm">Don't have an account?</span>
<a className="text-blue-600 text-sm font-semibold hover:underline ml-1" href="#">Sign up</a>
</div>
</div>
</div>

    </>
  );
}
