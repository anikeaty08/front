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
      
<div className="w-80 bg-zinc-900 rounded-lg shadow-xl overflow-hidden border border-zinc-800">

<div className="p-4 border-b border-zinc-800 flex justify-between items-center">
<h3 className="text-sm font-medium">Subscribe to Newsletter</h3>
<button className="text-zinc-400 hover:text-zinc-200">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="p-4">
<div className="flex justify-center mb-4">
<div className="bg-indigo-600/20 rounded-full p-3">
<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h4 className="text-center text-sm font-medium mb-2">Stay up to date</h4>
<p className="text-xs text-zinc-400 text-center mb-4">Get notified about new features, updates, and industry news.</p>
<form className="space-y-3">
<div>
<label className="block text-xs text-zinc-400 mb-1" htmlFor="email">Email address</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500" id="email" placeholder="you@example.com" required type="email" />
</div>
<div>
<label className="block text-xs text-zinc-400 mb-1" htmlFor="frequency">Email frequency</label>
<select className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 appearance-none" id="frequency">
<option>Weekly digest</option>
<option>Daily updates</option>
<option>Monthly roundup</option>
</select>
</div>
<div className="flex items-start">
<div className="flex items-center h-5">
<input className="w-3 h-3 text-indigo-600 bg-zinc-800 border-zinc-700 rounded focus:ring-indigo-500" id="terms" type="checkbox" />
</div>
<div className="ml-2">
<label className="text-[10px] text-zinc-400" htmlFor="terms">I agree to receive marketing emails and can unsubscribe anytime</label>
</div>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded text-xs font-medium transition-colors" type="submit">Subscribe Now</button>
</form>
</div>

<div className="p-3 border-t border-zinc-800 flex justify-center items-center">
<div className="text-[10px] text-zinc-500 flex items-center">
<svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        Your data is secure and we'll never spam you
      </div>
</div>
</div>

    </>
  );
}
