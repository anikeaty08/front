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
      
<div className="bg-white rounded-lg shadow-sm max-w-md w-full overflow-hidden border border-zinc-100">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
</svg>
</div>
<h1 className="text-sm font-medium text-zinc-900">Pulse Mail</h1>
</div>
<span className="text-xs text-zinc-500">1 of 3</span>
</div>

<div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-blue-600 rounded-full"></div>
</div>
</div>

<div className="px-6 pb-6">
<h2 className="text-base font-medium text-zinc-900 mb-1">Set up your account</h2>
<p className="text-sm text-zinc-500 mb-5">Let's get you started with a personalized email experience</p>
<form className="space-y-4">
<div>
<label className="block text-xs text-zinc-700 mb-1.5" htmlFor="name">Name</label>
<input className="w-full px-3 py-2 border border-zinc-200 rounded-md text-sm bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" id="name" placeholder="Your name" type="text" />
</div>
<div>
<label className="block text-xs text-zinc-700 mb-1.5" htmlFor="email">Email address</label>
<div className="flex">
<input className="w-3/5 px-3 py-2 border-t border-l border-b border-zinc-200 rounded-l-md text-sm bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" id="email" placeholder="username" type="text" />
<div className="w-2/5 px-3 py-2 bg-zinc-50 border-t border-r border-b border-zinc-200 rounded-r-md text-sm text-zinc-500 flex items-center">
              @pulse.mail
            </div>
</div>
</div>
<div>
<label className="block text-xs text-zinc-700 mb-1.5" htmlFor="password">Password</label>
<input className="w-full px-3 py-2 border border-zinc-200 rounded-md text-sm bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" id="password" placeholder="Minimum 8 characters" type="password" />
</div>
<div className="pt-2">
<div className="flex items-center space-x-2">
<input className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-zinc-300 rounded" id="notifications" type="checkbox" />
<label className="text-xs text-zinc-700" htmlFor="notifications">Enable inbox notifications</label>
</div>
</div>
<div className="pt-2">
<div className="flex items-center space-x-2">
<input className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-zinc-300 rounded" id="terms" type="checkbox" />
<label className="text-xs text-zinc-700" htmlFor="terms">
              I agree to the <a className="text-blue-600 hover:underline" href="#">Terms</a> and <a className="text-blue-600 hover:underline" href="#">Privacy Policy</a>
</label>
</div>
</div>
<div className="flex justify-between pt-3">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-900 focus:outline-none" type="button">
            Skip
          </button>
<button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" type="submit">
            Continue
          </button>
</div>
</form>
</div>
</div>

    </>
  );
}
