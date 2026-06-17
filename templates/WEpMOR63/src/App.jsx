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



    // Enable dark mode based on system/device preference
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
      
<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-neutral-950 dark:to-purple-950 p-4">
<div className="w-full max-w-md bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/10 rounded-2xl shadow-xl px-8 py-10 transition-all relative">
<div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-10">
<span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-emerald-100 via-blue-100 to-purple-100 dark:from-emerald-900 dark:via-blue-900 dark:to-purple-900 text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wider uppercase shadow-sm">
          Sign up
        </span>
</div>
<h2 className="mt-6 text-3xl md:text-4xl font-bold text-center tracking-tight text-gray-900 dark:text-white drop-shadow-xl">
        Create your account
      </h2>
<p className="mt-2 mb-8 text-center max-w-md text-gray-600 dark:text-gray-300 font-inter text-base">
        Free forever – no credit card required.
      </p>
<form autocomplete="off" className="space-y-6">
<div>
<label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">Full Name</label>
<input autocomplete="name" className="w-full px-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-base" id="name" name="name" placeholder="Your Name" required="" type="text"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
<input autocomplete="username" className="w-full px-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-base" id="email" name="email" placeholder="you@email.com" required="" type="email"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
<input autocomplete="new-password" className="w-full px-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-base" id="password" name="password" placeholder="At least 8 characters" required="" type="password"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="confirm-password">Confirm Password</label>
<input autocomplete="new-password" className="w-full px-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-base" id="confirm-password" name="confirm-password" placeholder="Re-enter password" required="" type="password"/>
</div>
<div className="flex items-center">
<input className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-neutral-800" id="terms" name="terms" required="" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700 dark:text-gray-400" htmlFor="terms">
            I agree to the <a className="text-blue-600 dark:text-blue-400 underline" href="#">Terms &amp; Conditions</a>
</label>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-100 dark:shadow-blue-900 transition" type="submit">
          Sign Up
        </button>
</form>
<div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?
        <a className="text-blue-600 dark:text-blue-400 font-medium hover:underline" href="#">Sign In</a>
</div>
<div className="mt-8">
<div className="flex items-center mb-5">
<div className="flex-grow h-px bg-gray-200 dark:bg-white/10"></div>
<span className="mx-3 text-xs font-inter text-gray-400 dark:text-gray-500 uppercase">Or continue with</span>
<div className="flex-grow h-px bg-gray-200 dark:bg-white/10"></div>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2 px-4 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-neutral-700 transition">
<img alt="Google" className="w-5 h-5" src="https://www.svgrepo.com/show/475656/google-color.svg"/>
<span className="text-gray-700 dark:text-gray-200 font-medium text-sm">Google</span>
</button>
<button className="flex-1 py-2 px-4 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-neutral-700 transition">
<img alt="GitHub" className="w-5 h-5" src="https://www.svgrepo.com/show/512317/github-142.svg"/>
<span className="text-gray-700 dark:text-gray-200 font-medium text-sm">GitHub</span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
